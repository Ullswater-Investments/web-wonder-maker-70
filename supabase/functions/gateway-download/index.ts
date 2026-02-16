import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const anonKey = Deno.env.get("SUPABASE_ANON_KEY")!;

    // Auth: verify caller identity
    const authHeader = req.headers.get("Authorization") || "";
    const supabaseAuth = createClient(supabaseUrl, anonKey, {
      global: { headers: { Authorization: authHeader } },
    });

    const {
      data: { user },
      error: authError,
    } = await supabaseAuth.auth.getUser();

    if (authError || !user) {
      return new Response(
        JSON.stringify({ error: "Unauthorized" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Admin client for logging (bypasses RLS)
    const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey);

    const { transactionId, consumerOrgId, format = "json" } = await req.json();

    if (!transactionId || !consumerOrgId) {
      return new Response(
        JSON.stringify({ error: "Missing transactionId or consumerOrgId" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Verify user belongs to consumerOrg
    const { data: userProfile } = await supabaseAdmin
      .from("user_profiles")
      .select("organization_id")
      .eq("user_id", user.id)
      .eq("organization_id", consumerOrgId)
      .maybeSingle();

    if (!userProfile) {
      return new Response(
        JSON.stringify({ error: "User does not belong to consumer organization" }),
        { status: 403, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Fetch the transaction with asset info
    const { data: transaction, error: txError } = await supabaseAdmin
      .from("data_transactions")
      .select(`
        *,
        asset:data_assets (
          id, product_id, custom_metadata, subject_org_id,
          product:data_products (name, description)
        )
      `)
      .eq("id", transactionId)
      .eq("consumer_org_id", consumerOrgId)
      .in("status", ["completed", "approved"])
      .maybeSingle();

    if (txError || !transaction) {
      // Log failed attempt
      await supabaseAdmin.from("access_logs").insert({
        transaction_id: transactionId,
        consumer_org_id: consumerOrgId,
        user_id: user.id,
        action: "gateway_download",
        status: "error",
        error_message: "Transaction not found or not completed",
      });

      return new Response(
        JSON.stringify({ error: "Transaction not found or access not granted" }),
        { status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const assetId = transaction.asset?.id;
    const customMetadata = transaction.asset?.custom_metadata as Record<string, any> | null;
    const apiUrl = customMetadata?.api_url || customMetadata?.endpoint_url;
    const apiHeaders = customMetadata?.headers || {};

    // If asset has an API endpoint, proxy the request
    if (apiUrl) {
      try {
        const apiResponse = await fetch(apiUrl, {
          method: "GET",
          headers: {
            "Accept": "application/json",
            ...apiHeaders,
          },
        });

        if (!apiResponse.ok) {
          const errorBody = await apiResponse.text();
          await supabaseAdmin.from("access_logs").insert({
            transaction_id: transactionId,
            consumer_org_id: consumerOrgId,
            asset_id: assetId,
            user_id: user.id,
            action: "gateway_download",
            status: "error",
            error_message: `API responded with ${apiResponse.status}: ${errorBody.substring(0, 200)}`,
            metadata: { api_url: apiUrl },
          });

          return new Response(
            JSON.stringify({ error: "Provider API error", status: apiResponse.status }),
            { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } }
          );
        }

        const responseData = await apiResponse.json();

        // Log success
        await supabaseAdmin.from("access_logs").insert({
          transaction_id: transactionId,
          consumer_org_id: consumerOrgId,
          asset_id: assetId,
          user_id: user.id,
          action: "gateway_download",
          status: "success",
          metadata: { format, api_proxied: true },
        });

        return new Response(
          JSON.stringify({ success: true, data: responseData, source: "api_proxy" }),
          { headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      } catch (fetchError) {
        await supabaseAdmin.from("access_logs").insert({
          transaction_id: transactionId,
          consumer_org_id: consumerOrgId,
          asset_id: assetId,
          user_id: user.id,
          action: "gateway_download",
          status: "error",
          error_message: (fetchError as Error).message,
          metadata: { api_url: apiUrl },
        });

        return new Response(
          JSON.stringify({ error: "Failed to reach provider API", details: (fetchError as Error).message }),
          { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
    }

    // No API URL — fetch from data_payloads or supplier_data
    const { data: payload } = await supabaseAdmin
      .from("data_payloads")
      .select("*")
      .eq("transaction_id", transactionId)
      .maybeSingle();

    if (payload) {
      await supabaseAdmin.from("access_logs").insert({
        transaction_id: transactionId,
        consumer_org_id: consumerOrgId,
        asset_id: assetId,
        user_id: user.id,
        action: "gateway_download",
        status: "success",
        metadata: { format, api_proxied: false },
      });

      return new Response(
        JSON.stringify({ success: true, data: payload.data_content, source: "data_payload", schema_type: payload.schema_type }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Fallback: supplier_data
    const { data: supplierData } = await supabaseAdmin
      .from("supplier_data")
      .select("*")
      .eq("transaction_id", transactionId);

    if (supplierData && supplierData.length > 0) {
      await supabaseAdmin.from("access_logs").insert({
        transaction_id: transactionId,
        consumer_org_id: consumerOrgId,
        asset_id: assetId,
        user_id: user.id,
        action: "gateway_download",
        status: "success",
        metadata: { format, api_proxied: false },
      });

      return new Response(
        JSON.stringify({ success: true, data: supplierData, source: "supplier_data" }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // No data available
    await supabaseAdmin.from("access_logs").insert({
      transaction_id: transactionId,
      consumer_org_id: consumerOrgId,
      asset_id: assetId,
      user_id: user.id,
      action: "gateway_download",
      status: "error",
      error_message: "No data available",
    });

    return new Response(
      JSON.stringify({ error: "No data available for this transaction" }),
      { status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: (err as Error).message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

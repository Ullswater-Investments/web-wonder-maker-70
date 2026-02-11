import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `Eres el Agente Especializado de ProcureData, un experto en espacios de datos federados, arquitectura Gaia-X, soberanía de datos y la plataforma ProcureData.

Contexto de ProcureData:
- ProcureData es un Espacio de Datos (Data Space) para la Función de Compras
- Resuelve el problema 'nxm' en el alta de proveedores mediante identidades compartidas
- Arquitectura basada en 3 actores: Consumer (solicita datos), Subject (proveedor/sujeto de datos), Holder (titular que autoriza)
- Cumple con estándares IDSA, ODRL 2.0, Gaia-X y Pontus-X
- Soporta identidades descentralizadas (DIDs did:ethr) y pagos con stablecoin EUROe
- Tiene 10 fases de evolución: Fundamentos → Catálogo → Aprobaciones → ODRL → Web3/DIDs → IA → ERP → Gaia-X → Analytics → Multi-Sector
- Integra Row Level Security (RLS) multi-tenant para aislamiento total de datos
- Genera políticas ODRL automáticas para cada transacción
- Soporta conectores ERP (SAP, Oracle, Dynamics)

Principios clave:
- Soberanía de datos: cada organización controla quién accede a sus datos
- Federación: los datos no se centralizan, se comparten bajo políticas
- Trazabilidad: cada transacción queda registrada inmutablemente
- Interoperabilidad: basado en estándares abiertos (IDSA, ODRL, Gaia-X)

Responde siempre en el idioma del usuario. Sé conciso pero informativo. Usa markdown para formatear respuestas cuando sea útil.`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded" }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Payment required" }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "AI gateway error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("federated-agent error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});

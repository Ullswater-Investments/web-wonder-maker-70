import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContractSignedRequest {
  fullName: string;
  position: string;
  organizationName: string;
  taxId: string;
  signedAt: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { fullName, position, organizationName, taxId, signedAt }: ContractSignedRequest = await req.json();

    console.log("Sending contract notification email for:", organizationName);

    const emailResponse = await resend.emails.send({
      from: "PROCUREDATA <onboarding@resend.dev>",
      to: ["eduardo@agileprocurement.es"],
      subject: `Nuevo Contrato de Adhesión Firmado - ${organizationName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #1e3a5f, #2c5282); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #4b5563; font-size: 12px; text-transform: uppercase; }
            .value { font-size: 16px; color: #111827; margin-top: 4px; }
            .footer { background: #1e3a5f; color: white; padding: 15px; text-align: center; border-radius: 0 0 8px 8px; font-size: 12px; }
            .badge { display: inline-block; background: #10b981; color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">🎉 Nuevo Contrato de Adhesión</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Se ha registrado una nueva firma electrónica</p>
            </div>
            <div class="content">
              <div style="text-align: center; margin-bottom: 20px;">
                <span class="badge">✓ FIRMADO ELECTRÓNICAMENTE</span>
              </div>
              
              <div class="field">
                <div class="label">Organización</div>
                <div class="value">${organizationName}</div>
              </div>
              
              <div class="field">
                <div class="label">CIF/NIF</div>
                <div class="value">${taxId}</div>
              </div>
              
              <div class="field">
                <div class="label">Firmante</div>
                <div class="value">${fullName}</div>
              </div>
              
              <div class="field">
                <div class="label">Cargo</div>
                <div class="value">${position}</div>
              </div>
              
              <div class="field">
                <div class="label">Fecha y Hora de Firma</div>
                <div class="value">${new Date(signedAt).toLocaleString('es-ES', { 
                  dateStyle: 'full', 
                  timeStyle: 'medium',
                  timeZone: 'Europe/Madrid'
                })}</div>
              </div>
            </div>
            <div class="footer">
              <p style="margin: 0;">PROCUREDATA - Data Space para Compras Públicas</p>
              <p style="margin: 5px 0 0 0; opacity: 0.7;">Este es un correo automático, por favor no responda.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in notify-contract-signed function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);

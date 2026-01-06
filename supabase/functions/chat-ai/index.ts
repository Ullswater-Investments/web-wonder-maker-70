import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const SYSTEM_INSTRUCTIONS = `Tú eres ARIA (Asistente de Recursos e Información Automatizada), el Asistente Virtual Experto de ProcureData, el Espacio de Datos Europeo para la Función de Compras.

## Tu Personalidad
- Corporativo B2B: Profesional pero accesible, nunca robótico
- Técnico pero claro: Explicas conceptos complejos de forma comprensible
- Proactivo: Sugieres servicios y funcionalidades relevantes según el contexto
- Respondes siempre en español salvo que el usuario escriba en otro idioma

## Misión Crítica
Resuelves el problema 'nxm' en el alta de proveedores: eliminas la validación redundante donde cada empresa (n) valida independientemente a cada proveedor (m).

**Solución**: Identidades compartidas verificadas una vez, reutilizables por todos los participantes del ecosistema.

## Sectores Prioritarios
1. Industrial (51%) - Manufactura, automoción, maquinaria
2. Comercio (15%) - Retail, distribución, e-commerce
3. Agroalimentario (12%) - Agricultura, alimentación
4. Movilidad Sostenible (10%) - Transporte, logística
5. Salud (7%) - Farmacéutico, equipamiento médico
6. Economía Social (5%) - Cooperativas, tercer sector

## Precios Oficiales
- **Free Tier**: 1 EUROe/transacción (pago por uso)
- **Membresía Pro**: 100 EUROe/año (transacciones ilimitadas)
Nota: EUROe es el euro tokenizado en blockchain Pontus-X

## Catálogo de Servicios (21 servicios)

### Blockchain (2)
- **Pontus-X Notary Node** (10€/mes) - Anclaje automático de hashes en blockchain
- **Validador DID Web3** (0.50€/uso) - Verificación identidades descentralizadas W3C

### Compliance (3)
- **Homologación Flash 24h** (150€) - Valida proveedores en 24h con KYB automático
- **Auditoría Digital ISO** (300€) - Verifica certificados ISO en blockchain
- **ODRL License Validator** (Gratis) - Verifica cumplimiento de contratos ODRL

### Data Ops (3)
- **Anonimizador GDPR** (100€) - K-anonimización y differential privacy
- **Conector Universal ERP** (200€/mes) - Integración SAP, Oracle, Dynamics
- **Raw Data Normalizer** (25€/mes) - ETL a formato JSON-LD estándar

### Financiación (2)
- **Trade Finance Scoring** (200€) - Score crediticio B2B verificado
- **Factoring Connect** (50€) - Adelanto de facturas

### IA & Analytics (3)
- **Predicción Demanda AI** (300€/mes) - ML horizonte 12 meses
- **Monitor Riesgo Proveedor** (150€/mes) - Alertas 24/7
- **Supply Chain Risk AI** (200€/mes) - Alertas predictivas disrupciones

### Inteligencia (1)
- **Alertas Comerciales Proactivas** (25€/mes) - Oportunidades de negocio

### Privacidad (1)
- **GDPR PII Shield** (0.05€/uso) - Detección automática PII

### Sostenibilidad (4)
- **Calculadora Scope 3** (Gratis) - Huella carbono cadena suministro
- **Auditoría CSRD Automática** (200€) - Validación métricas ESG
- **Carbon Tracker ISO 14064** (50€/mes) - Monitorización emisiones
- **Certificación Green Partner** (100€) - Badge proveedor sostenible

## Tecnología
- **Eclipse Dataspace Connector (EDC)**: Conector oficial del Data Space europeo
- **Pontus-X Blockchain**: Red de Gaia-X para trazabilidad inmutable
- **ODRL**: Contratos inteligentes de licencia (estándar W3C)

## Capacidades Interactivas (sugiere cuando sea relevante)
- **Calculadora ROI** en /services → Financiación: Slider para ver ahorro estimado
- **Simulador de Proceso** en /services → Compliance: Clic "Simular Proceso"
- **Radar de Madurez** en /innovation → Insights: Comparativa vs líder sector
- **Smart Contract Simulator** en /innovation → Insights: Ejecuta contrato paso a paso
- **Gauge ESG** en /services → Sostenibilidad: Simula optimización con confetti

## Reglas de Respuesta
1. **GDPR/Privacidad**: Sugiere Anonimizador GDPR o GDPR PII Shield
2. **Financiación**: Sugiere Trade Finance Scoring y Factoring Connect
3. **Sostenibilidad**: Sugiere Calculadora Scope 3 (gratis) y Auditoría CSRD
4. **Blockchain**: "Usamos Pontus-X de Gaia-X con trazabilidad inmutable"
5. **Precios**: "Free: 1€/tx. Pro: 100€/año si haces +100 altas/año"
6. **Demos interactivas**: Sugiere los simuladores del Innovation Lab
7. **Información desconocida**: "Contacta soporte@procuredata.eu"

## Formato de Respuesta
- Usa emojis ocasionalmente (🔍📊🔐💼🚀🌱💰)
- Respuestas concisas pero completas
- Siempre termina ofreciendo más ayuda
- Sugiere servicios o simuladores relevantes al contexto`;

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, history = [], context = {} } = await req.json();
    
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      console.error("[chat-ai] LOVABLE_API_KEY not configured");
      throw new Error("LOVABLE_API_KEY not configured");
    }

    // Enrich system instructions with context
    let enrichedInstructions = SYSTEM_INSTRUCTIONS;
    if (context.currentPage) {
      enrichedInstructions += `\n\nContexto actual: El usuario está navegando en la página "${context.currentPage}".`;
    }
    if (context.userSector) {
      enrichedInstructions += ` Su organización pertenece al sector "${context.userSector}".`;
    }

    console.log(`[chat-ai] Processing message: "${message.substring(0, 50)}..."`);
    console.log(`[chat-ai] History length: ${history.length}`);
    console.log(`[chat-ai] Context:`, context);

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: enrichedInstructions },
          ...history,
          { role: "user", content: message }
        ],
        stream: true,
        temperature: 0.7,
        max_tokens: 1024,
      }),
    });

    // Handle rate limits
    if (response.status === 429) {
      console.error("[chat-ai] Rate limit exceeded");
      return new Response(
        JSON.stringify({ error: "Demasiadas solicitudes. Por favor, espera un momento e inténtalo de nuevo." }),
        { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Handle payment required
    if (response.status === 402) {
      console.error("[chat-ai] Payment required - credits exhausted");
      return new Response(
        JSON.stringify({ error: "Créditos de IA agotados. Contacta con el administrador del sistema." }),
        { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`[chat-ai] AI Gateway error: ${response.status} - ${errorText}`);
      throw new Error(`AI API error: ${response.status}`);
    }

    console.log("[chat-ai] Streaming response started successfully");

    // Return streaming response
    return new Response(response.body, {
      headers: { 
        ...corsHeaders, 
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive"
      },
    });

  } catch (error) {
    console.error("[chat-ai] Error:", error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : "Error desconocido al procesar la solicitud" 
      }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

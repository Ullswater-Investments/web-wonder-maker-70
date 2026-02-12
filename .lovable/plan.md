

## Plan: Pagina "IA Conversacional" con Infografia Dinamica y Chat IA Especializado

Replica del patron establecido en las fases anteriores, adaptado al dominio de IA conversacional, el Asistente ARIA y su arquitectura de contexto.

---

### 1. Enlazar la tarjeta en el Roadmap

**Archivo: `src/components/landing/RoadmapPhases.tsx`**
- Anadir `slug: "ia-conversacional"` a la fase 6 (IA Conversacional) en el array `phases`

### 2. Crear la pagina principal

**Archivo nuevo: `src/pages/IAConversacional.tsx`**

Estructura identica a Web3Dids.tsx:
- **Hero**: Badge "Fase 6 -- IA Conversacional", icono Bot, titulo "IA Conversacional de ProcureData", subtitulo sobre el Asistente ARIA con contexto
- **Infografia dinamica**: Componente `IAConversacionalInfographic`
- **Metricas animadas**: 3 contadores:
  - "5 Agentes IA" (Concierge, Federado, Casos de Exito, Fases, Sectorial)
  - "10K+ Referencias" (base de conocimiento verificada)
  - "47 Casos Verificados"
- **Chat IA**: Componente `IAConversacionalChatAgent`

### 3. Crear la infografia interactiva de alta calidad

**Archivo nuevo: `src/components/ia-conversacional/IAConversacionalInfographic.tsx`**

Diagrama animado con 4 capas interactivas:

```text
+--------------------------------------------------+
|  CAPA 1: MOTOR NLU (Comprension del Lenguaje)   |
|  [Intent Mapping] --> [Entidades] --> [Contexto]  |
|  Reconocimiento de intenciones y widgets          |
+--------------------------------------------------+
           |
           v
+--------------------------------------------------+
|  CAPA 2: AGENTES ESPECIALIZADOS                  |
|  [Concierge] --> [Federado] --> [Casos Exito]     |
|  Cada agente con prompt y conocimiento propio     |
+--------------------------------------------------+
           |
           v
+--------------------------------------------------+
|  CAPA 3: BASE DE CONOCIMIENTO                    |
|  [Memoria Tecnica] --> [47 Casos] --> [Docs]      |
|  10.000+ referencias verificadas                  |
+--------------------------------------------------+
           |
           v
+--------------------------------------------------+
|  CAPA 4: LEARNING LOOP (Mejora Continua)         |
|  [Feedback] --> [Correccion] --> [Actualizacion]  |
|  Bucle de retroalimentacion usuario-admin-IA      |
+--------------------------------------------------+
```

Cada capa expandible con detalles tecnicos:
- **Motor NLU**: Intent mapping con triggers de widgets (ROI, ImpactGauge, Radar de Madurez), deteccion de estados emocionales, temperatura 0.1-0.2 para precision maxima, motor Google Gemini
- **Agentes Especializados**: Concierge (asistente general), Federado (espacios de datos), Casos de Exito (47 empresas), Fases del Roadmap, Sectoriales; cada uno con system prompt dedicado y SECURITY_RULES
- **Base de Conocimiento**: Memoria tecnica de ProcureData, documentos explicativos 1-15, datos de 47 casos verificados, terminologia tecnica IDSA/Gaia-X/ODRL
- **Learning Loop**: Botones de feedback en cada respuesta, correccion del usuario, supervision humana en /admin/learning-hub, actualizacion automatica del archivo maestro

### 4. Crear el Chat IA especializado

**Archivo nuevo: `src/components/ia-conversacional/IAConversacionalChatAgent.tsx`**

Replica del patron Web3DidsChatAgent con:
- Conexion a nueva edge function `ia-conversacional-agent`
- Preguntas sugeridas contextuales:
  - "Como funciona el Asistente IA de ProcureData?"
  - "Que agentes especializados tiene la plataforma?"
  - "Como se entrena y mejora la IA con feedback de usuarios?"
  - "Como ayuda la IA conversacional en el caso GigaFactory?"
- Integracion con chatGuard y TokenWallet

### 5. Edge Function del Agente

**Archivo nuevo: `supabase/functions/ia-conversacional-agent/index.ts`**

- Modelo: `google/gemini-3-flash-preview`
- System prompt especializado que cubre:
  - ARIA = Asistente de Recursos e Informacion Automatizada
  - Personalidad B2B: profesional, neutral, precisa, multilingue
  - Motor NLU: reconocimiento de intenciones, triggers de widgets, deteccion emocional
  - 5+ agentes especializados: Concierge, Federado, Casos de Exito, Fases Roadmap, Sectoriales
  - Base de conocimiento: 10.000+ referencias, 15 documentos explicativos, 47 casos verificados
  - Parametros de generacion: temperatura 0.1-0.2, motor Gemini, context window
  - Consultoria estrategica: normativa CSRD, casos de negocio, recomendaciones tecnicas
  - Learning Loop: feedback, correccion, supervision humana, actualizacion automatica
  - Widgets interactivos: Calculadora ROI, ImpactGauge, Radar de Madurez, ProcessFlow
  - ChatGuard: proteccion anti-sabotaje con 3 strikes
  - TokenWallet: billetera virtual de 1.000.000 tokens para monitorizar consumo
  - Aplicacion en los 47 casos de exito
  - SECURITY_RULES y LANGUAGE_BRIDGE

### 6. Traducciones i18n (7 idiomas)

**Archivos nuevos: `src/locales/*/iaConversacional.json`** (es, en, fr, de, it, pt, nl)

Claves: backToHome, badge, title, subtitle, layers (nlu/agents/knowledge/learning con label/title), metrics (agents/references/cases), chat (badge/description/placeholder/sectionTitle/sectionSubtitle/q1/q2/q3/q4)

### 7. Registro de ruta y configuracion

**Archivo: `src/App.tsx`**
- Importar `IAConversacional` y anadir ruta: `<Route path="/ia-conversacional" element={<IAConversacional />} />`

**Archivo: `src/i18n.ts`**
- Importar los 7 archivos `iaConversacional.json` y registrar el namespace `iaConversacional` en cada idioma

**Archivo: `supabase/config.toml`**
- Anadir `[functions.ia-conversacional-agent]` con `verify_jwt = false`

---

### Resumen de archivos

| Archivo | Accion |
|---------|--------|
| `src/pages/IAConversacional.tsx` | CREAR |
| `src/components/ia-conversacional/IAConversacionalInfographic.tsx` | CREAR |
| `src/components/ia-conversacional/IAConversacionalChatAgent.tsx` | CREAR |
| `supabase/functions/ia-conversacional-agent/index.ts` | CREAR |
| `src/locales/es/iaConversacional.json` | CREAR |
| `src/locales/en/iaConversacional.json` | CREAR |
| `src/locales/fr/iaConversacional.json` | CREAR |
| `src/locales/de/iaConversacional.json` | CREAR |
| `src/locales/it/iaConversacional.json` | CREAR |
| `src/locales/pt/iaConversacional.json` | CREAR |
| `src/locales/nl/iaConversacional.json` | CREAR |
| `src/components/landing/RoadmapPhases.tsx` | MODIFICAR - Anadir slug |
| `src/App.tsx` | MODIFICAR - Anadir ruta |
| `src/i18n.ts` | MODIFICAR - Registrar namespace |
| `supabase/config.toml` | MODIFICAR - Anadir funcion |


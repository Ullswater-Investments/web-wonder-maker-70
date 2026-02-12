

## Plan: Pagina "Analytics y BI" con Infografia Dinamica y Chat IA Especializado

Replica del patron establecido en las fases anteriores, adaptado al dominio de Analytics, Business Intelligence y Dashboards Predictivos.

---

### 1. Enlazar la tarjeta en el Roadmap

**Archivo: `src/components/landing/RoadmapPhases.tsx`**
- Anadir `slug: "analytics-bi"` a la fase 9 (Analytics y BI) en el array `phases`

### 2. Crear la pagina principal

**Archivo nuevo: `src/pages/AnalyticsBi.tsx`**

Estructura identica a RedGaiaX.tsx:
- **Hero**: Badge "Fase 9 -- Analytics y BI", icono BarChart3, titulo "Analytics y BI de ProcureData", subtitulo sobre dashboards predictivos e inteligencia estrategica
- **Infografia dinamica**: Componente `AnalyticsBiInfographic`
- **Metricas animadas**: 3 contadores:
  - "5 Herramientas" (Dashboards, Spend Analysis, Health Score, Forecasting, Simulador)
  - "100% Tiempo Real" (datos actualizados instantaneamente)
  - "47 Casos Verificados"
- **Chat IA**: Componente `AnalyticsBiChatAgent`

### 3. Crear la infografia interactiva de alta calidad

**Archivo nuevo: `src/components/analytics-bi/AnalyticsBiInfographic.tsx`**

Diagrama animado con 4 capas interactivas:

```text
+--------------------------------------------------+
|  CAPA 1: DASHBOARDS EN TIEMPO REAL               |
|  [KPIs] --> [Graficos] --> [Alertas]              |
|  Visualizacion instantanea de cada transaccion    |
+--------------------------------------------------+
           |
           v
+--------------------------------------------------+
|  CAPA 2: SPEND ANALYSIS (CUBO DE GASTO)          |
|  [Proveedor] --> [Categoria] --> [Sector]         |
|  Clasificacion multidimensional del gasto         |
+--------------------------------------------------+
           |
           v
+--------------------------------------------------+
|  CAPA 3: ANALITICA PREDICTIVA                    |
|  [Forecasting IA] --> [Riesgo] --> [Simulador]    |
|  Machine Learning para predecir demanda y riesgos |
+--------------------------------------------------+
           |
           v
+--------------------------------------------------+
|  CAPA 4: DATA OPS Y CALIDAD                      |
|  [Cleansing] --> [Normalizacion] --> [Linaje]     |
|  Pipeline de calidad con Health Score             |
+--------------------------------------------------+
```

Cada capa expandible con detalles tecnicos:
- **Dashboards**: KPIs en tiempo real, graficos actualizados con cada transaccion blockchain, alertas automaticas, Health Score (integridad, actualizacion, veracidad, cumplimiento)
- **Spend Analysis**: Cubo de gasto multidimensional, segmentacion por proveedor/categoria/sector/tiempo, benchmarking anonimo sectorial, lead time verificado inmutablemente
- **Analitica Predictiva**: Forecasting de demanda con ML, monitor de riesgo proveedor 24/7 (Z-Score, retrasos, cambios regulatorios), simulador de escenarios (crecimiento, disrupcion)
- **Data Ops**: Data Cleansing automatico, normalizacion JSON-LD, linaje de datos completo, pipeline Entrada-Limpieza-Normalizacion-Validacion-Almacenamiento

Elementos dinamicos con Framer Motion:
- Pulsos animados en cada nodo
- Flechas SVG animadas entre capas
- Indicadores de estado pulsantes
- Transiciones suaves al expandir/colapsar

### 4. Crear el Chat IA especializado

**Archivo nuevo: `src/components/analytics-bi/AnalyticsBiChatAgent.tsx`**

Replica del patron RedGaiaXChatAgent con:
- Conexion a nueva edge function `analytics-bi-agent`
- Preguntas sugeridas contextuales:
  - "Como funcionan los dashboards predictivos de ProcureData?"
  - "Que es el Health Score y como se calcula?"
  - "Como funciona el Simulador de Escenarios para riesgo proveedor?"
  - "Como se aplica Analytics y BI en el caso GigaFactory?"
- Integracion con chatGuard y TokenWallet

### 5. Edge Function del Agente

**Archivo nuevo: `supabase/functions/analytics-bi-agent/index.ts`**

- Modelo: `google/gemini-3-flash-preview`
- System prompt especializado que cubre:
  - Dashboards en Tiempo Real: graficos actualizados instantaneamente con cada transaccion blockchain
  - Spend Analysis (Cubo de Gasto): clasificacion multidimensional por proveedor, categoria, sector y tiempo
  - Health Score: integridad de datos, frecuencia de actualizacion, veracidad, cumplimiento de certificaciones
  - Lead Time Verificado: tiempos de entrega registrados inmutablemente en blockchain
  - Benchmarking Anonimo: comparacion de rendimiento con la media sectorial sin revelar datos confidenciales
  - Forecasting de Demanda IA: Machine Learning sobre historicos y senales de mercado
  - Monitor de Riesgo Proveedor: vigilancia 24/7 con alertas (Z-Score bajo, retrasos recurrentes, cambios regulatorios)
  - Simulador de Escenarios: variables ajustables (crecimiento, disrupcion) para visualizar impactos
  - Data Ops: Data Cleansing, normalizacion JSON-LD, linaje de datos completo
  - Datos Sinteticos: privacidad total, entrenamiento IA, pruebas de software, investigacion
  - ARIA como interfaz de lenguaje natural para acceder a la complejidad analitica
  - Aplicacion en los 47 casos de exito
  - SECURITY_RULES y LANGUAGE_BRIDGE

### 6. Traducciones i18n (7 idiomas)

**Archivos nuevos: `src/locales/*/analyticsBi.json`** (es, en, fr, de, it, pt, nl)

Claves: backToHome, badge, title, subtitle, layers (dashboards/spend/predictive/dataops con label/title), metrics (tools/realtime/cases), chat (badge/description/placeholder/sectionTitle/sectionSubtitle/q1/q2/q3/q4)

### 7. Registro de ruta y configuracion

**Archivo: `src/App.tsx`**
- Importar `AnalyticsBi` y anadir ruta: `<Route path="/analytics-bi" element={<AnalyticsBi />} />`

**Archivo: `src/i18n.ts`**
- Importar los 7 archivos `analyticsBi.json` y registrar el namespace `analyticsBi` en cada idioma

**Archivo: `supabase/config.toml`**
- Anadir `[functions.analytics-bi-agent]` con `verify_jwt = false`

---

### Resumen de archivos

| Archivo | Accion |
|---------|--------|
| `src/pages/AnalyticsBi.tsx` | CREAR |
| `src/components/analytics-bi/AnalyticsBiInfographic.tsx` | CREAR |
| `src/components/analytics-bi/AnalyticsBiChatAgent.tsx` | CREAR |
| `supabase/functions/analytics-bi-agent/index.ts` | CREAR |
| `src/locales/es/analyticsBi.json` | CREAR |
| `src/locales/en/analyticsBi.json` | CREAR |
| `src/locales/fr/analyticsBi.json` | CREAR |
| `src/locales/de/analyticsBi.json` | CREAR |
| `src/locales/it/analyticsBi.json` | CREAR |
| `src/locales/pt/analyticsBi.json` | CREAR |
| `src/locales/nl/analyticsBi.json` | CREAR |
| `src/components/landing/RoadmapPhases.tsx` | MODIFICAR - Anadir slug |
| `src/App.tsx` | MODIFICAR - Anadir ruta |
| `src/i18n.ts` | MODIFICAR - Registrar namespace |
| `supabase/config.toml` | MODIFICAR - Anadir funcion |


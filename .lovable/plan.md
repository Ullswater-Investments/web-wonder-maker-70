

## Plan: Pagina "Red Gaia-X" con Infografia Dinamica y Chat IA Especializado

Replica del patron establecido en las fases anteriores, adaptado al dominio de la Red Gaia-X, IDS (International Data Spaces) y Eclipse Dataspace Components.

---

### 1. Enlazar la tarjeta en el Roadmap

**Archivo: `src/components/landing/RoadmapPhases.tsx`**
- Anadir `slug: "red-gaia-x"` a la fase 8 (Red Gaia-X) en el array `phases`

### 2. Crear la pagina principal

**Archivo nuevo: `src/pages/RedGaiaX.tsx`**

Estructura identica a ConectoresErp.tsx:
- **Hero**: Badge "Fase 8 -- Red Gaia-X", icono Globe, titulo "Red Gaia-X de ProcureData", subtitulo sobre IDS y Eclipse Dataspace
- **Infografia dinamica**: Componente `RedGaiaXInfographic`
- **Metricas animadas**: 3 contadores:
  - "4 Componentes" (Trust Framework, Self-Descriptions, Federated Catalogue, Compliance)
  - "100% Soberano" (datos bajo control del propietario)
  - "47 Casos Verificados"
- **Chat IA**: Componente `RedGaiaXChatAgent`

### 3. Crear la infografia interactiva de alta calidad

**Archivo nuevo: `src/components/red-gaia-x/RedGaiaXInfographic.tsx`**

Diagrama animado con 4 capas interactivas:

```text
+--------------------------------------------------+
|  CAPA 1: TRUST FRAMEWORK (Marco de Confianza)   |
|  [Self-Descriptions] --> [Notarizacion] --> [VC]  |
|  Identidad verificable para cada participante     |
+--------------------------------------------------+
           |
           v
+--------------------------------------------------+
|  CAPA 2: IDS / ECLIPSE DATASPACE CONNECTOR       |
|  [EDC] --> [Contract Negotiation] --> [Transfer]  |
|  Conectores estandar para intercambio soberano    |
+--------------------------------------------------+
           |
           v
+--------------------------------------------------+
|  CAPA 3: FEDERATED CATALOGUE                     |
|  [DCAT-AP] --> [Indexacion] --> [Descubrimiento]  |
|  Catalogo distribuido de activos de datos         |
+--------------------------------------------------+
           |
           v
+--------------------------------------------------+
|  CAPA 4: COMPLIANCE Y GOBERNANZA                 |
|  [GDPR] --> [Data Act] --> [AI Act]               |
|  Cumplimiento normativo europeo automatizado      |
+--------------------------------------------------+
```

Cada capa expandible con detalles tecnicos:
- **Trust Framework**: Self-Descriptions JSON-LD, Gaia-X Digital Clearing House (GXDCH), credenciales verificables W3C, notarizacion en blockchain, Trust Anchors
- **IDS / EDC**: Eclipse Dataspace Connector, negociacion de contratos ODRL, transferencia de datos HTTP/S3, politicas de uso, protocolo DSP (Dataspace Protocol)
- **Federated Catalogue**: Metadatos DCAT-AP, Aquarius indexer, descubrimiento federado, busqueda semantica, interoperabilidad cross-dataspace
- **Compliance**: GDPR, Data Governance Act, Data Act, AI Act, CSRD, certificacion Gaia-X Level 1-3, auditoria automatizada

Elementos dinamicos con Framer Motion:
- Pulsos animados en cada nodo
- Flechas SVG animadas entre capas
- Indicadores de estado pulsantes
- Transiciones suaves al expandir/colapsar

### 4. Crear el Chat IA especializado

**Archivo nuevo: `src/components/red-gaia-x/RedGaiaXChatAgent.tsx`**

Replica del patron ConectoresErpChatAgent con:
- Conexion a nueva edge function `red-gaia-x-agent`
- Preguntas sugeridas contextuales:
  - "Como funciona el Trust Framework de Gaia-X en ProcureData?"
  - "Que es el Eclipse Dataspace Connector y como se integra?"
  - "Como garantiza Gaia-X la soberania de los datos?"
  - "Como se aplica Gaia-X en el caso GigaFactory?"
- Integracion con chatGuard y TokenWallet

### 5. Edge Function del Agente

**Archivo nuevo: `supabase/functions/red-gaia-x-agent/index.ts`**

- Modelo: `google/gemini-3-flash-preview`
- System prompt especializado que cubre:
  - Gaia-X: iniciativa europea de soberania digital, Trust Framework, Self-Descriptions
  - IDS (International Data Spaces): arquitectura de referencia, IDS Connector, Usage Control
  - Eclipse Dataspace Components (EDC): negociacion de contratos, transferencia de datos, Management API
  - Dataspace Protocol (DSP): estandar de comunicacion entre conectores
  - Federated Catalogue: DCAT-AP, descubrimiento federado, interoperabilidad
  - GXDCH (Gaia-X Digital Clearing House): verificacion de identidad, notarizacion
  - Pontus-X: red testnet Gaia-X, Ocean Protocol, DeltaDAO
  - Compliance europeo: GDPR, Data Act, Data Governance Act, AI Act, CSRD
  - Certificacion Gaia-X: Level 1 (Basic), Level 2 (Substantial), Level 3 (High)
  - Compute-to-Data: procesamiento in-situ sin transferencia
  - Aplicacion en los 47 casos de exito
  - SECURITY_RULES y LANGUAGE_BRIDGE

### 6. Traducciones i18n (7 idiomas)

**Archivos nuevos: `src/locales/*/redGaiaX.json`** (es, en, fr, de, it, pt, nl)

Claves: backToHome, badge, title, subtitle, layers (trust/ids/catalogue/compliance con label/title), metrics (components/sovereign/cases), chat (badge/description/placeholder/sectionTitle/sectionSubtitle/q1/q2/q3/q4)

### 7. Registro de ruta y configuracion

**Archivo: `src/App.tsx`**
- Importar `RedGaiaX` y anadir ruta: `<Route path="/red-gaia-x" element={<RedGaiaX />} />`

**Archivo: `src/i18n.ts`**
- Importar los 7 archivos `redGaiaX.json` y registrar el namespace `redGaiaX` en cada idioma

**Archivo: `supabase/config.toml`**
- Anadir `[functions.red-gaia-x-agent]` con `verify_jwt = false`

---

### Resumen de archivos

| Archivo | Accion |
|---------|--------|
| `src/pages/RedGaiaX.tsx` | CREAR |
| `src/components/red-gaia-x/RedGaiaXInfographic.tsx` | CREAR |
| `src/components/red-gaia-x/RedGaiaXChatAgent.tsx` | CREAR |
| `supabase/functions/red-gaia-x-agent/index.ts` | CREAR |
| `src/locales/es/redGaiaX.json` | CREAR |
| `src/locales/en/redGaiaX.json` | CREAR |
| `src/locales/fr/redGaiaX.json` | CREAR |
| `src/locales/de/redGaiaX.json` | CREAR |
| `src/locales/it/redGaiaX.json` | CREAR |
| `src/locales/pt/redGaiaX.json` | CREAR |
| `src/locales/nl/redGaiaX.json` | CREAR |
| `src/components/landing/RoadmapPhases.tsx` | MODIFICAR - Anadir slug |
| `src/App.tsx` | MODIFICAR - Anadir ruta |
| `src/i18n.ts` | MODIFICAR - Registrar namespace |
| `supabase/config.toml` | MODIFICAR - Anadir funcion |


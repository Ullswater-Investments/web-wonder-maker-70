

## Plan: Transformacion Chat-First del Hero + Agente IA Federado + Red Animada

### Vision General

Redisenar la seccion hero de `src/pages/Index.tsx` para convertirla en una **interfaz conversacional "Chat-First"** estilo Perplexity/ChatGPT Enterprise, donde el chat del agente IA especializado sea el elemento central, acompanado de un diagrama de red federada animado con flujo de datos en tiempo real. Las secciones existentes (Features, How It Works, Benefits, Auth) se mantienen intactas debajo.

---

### Arquitectura de Cambios

#### 1. Nuevo Hero "Chat-First" (reemplazo del hero actual)

Diseno en **dos zonas**:

- **Zona Superior**: Titulo compacto "PROCUREDATA" + subtitulo "Espacio de Datos Federados con IA" + badges tecnologicos (Gaia-X, ODRL, Pontus-X, IDSA)
- **Zona Principal (dividida en dos columnas)**:
  - **Columna Izquierda (~55%)**: Interfaz de chat del agente IA especializado con:
    - Barra de entrada grande y prominente (estilo Perplexity)
    - Panel de "pensamiento" que muestra estados de federacion ("Conectando con nodo ProcureData...", "Federando resultados...", "Analizando contratos ODRL...")
    - Respuestas con citacion de fuentes federadas ("Dato del Nodo Industrial", "Verificado en Pontus-X")
    - Preguntas sugeridas como chips clickeables
    - Soporte markdown en respuestas
  - **Columna Derecha (~45%)**: Diagrama de red federada animado

#### 2. Diagrama de Red Federada Animado

Componente SVG con Framer Motion que muestra:

- **Nodo central**: ProcureData Hub (con efecto pulso)
- **Nodos perifericos**: Consumer, Provider, Data Holder, ERP System, Gaia-X Trust
- **Conexiones animadas**: Lineas con particulas/puntos que fluyen entre nodos simulando transacciones de datos
- **Colores diferenciados** por tipo de actor (verde=Provider, azul=Consumer, naranja=Holder, morado=Hub)
- Las animaciones se activan cuando el agente "procesa" una consulta

#### 3. Edge Function: `federated-agent`

Nueva edge function dedicada al agente de la landing page:

- **Prompt especializado** en espacios de datos federados, arquitectura Gaia-X, soberania de datos y capacidades de ProcureData
- **Simulacion de federacion**: El agente responde con pasos de "pensamiento" que muestran los nodos consultados
- **Streaming SSE** para respuestas token-by-token
- Usa Lovable AI Gateway con modelo `google/gemini-3-flash-preview`
- Manejo de errores 429/402

#### 4. Seccion Roadmap 10 Fases (nueva seccion debajo del hero)

Cards numeradas con animacion de entrada escalonada:

| Fase | Nombre | Descripcion |
|------|--------|-------------|
| 1 | Fundamentos | Plataforma base con autenticacion, RBAC y RLS multi-tenant |
| 2 | Catalogo de Datos | Registro y descubrimiento de activos con metadatos |
| 3 | Flujo 3-Actores | Maquina de estados Consumer, Subject, Holder |
| 4 | Politicas ODRL | Contratos digitales automaticos estandar ODRL 2.0 |
| 5 | Web3 y DIDs | Identidades descentralizadas y pagos EUROe en Pontus-X |
| 6 | IA Conversacional | Asistente ARIA con conocimiento contextual |
| 7 | Conectores ERP | Integracion bidireccional con sistemas empresariales |
| 8 | Red Federada Gaia-X | Conectores IDS, Eclipse Dataspace, credenciales verificables |
| 9 | Analytics y BI | Dashboards predictivos e inteligencia de mercado |
| 10 | Ecosistema Multi-Sector | Nodos sectoriales, marketplace y gobernanza distribuida |

---

### Componentes Nuevos a Crear

| Componente | Archivo | Descripcion |
|------------|---------|-------------|
| `FederatedHeroChat` | `src/components/landing/FederatedHeroChat.tsx` | Interfaz de chat principal con barra de entrada, panel de pensamiento, y respuestas con citaciones |
| `FederatedNetworkDiagram` | `src/components/landing/FederatedNetworkDiagram.tsx` | Diagrama SVG animado con nodos y flujos de datos |
| `DataFlowParticles` | `src/components/landing/DataFlowParticles.tsx` | Particulas animadas con Framer Motion entre nodos |
| `ThinkingPanel` | `src/components/landing/ThinkingPanel.tsx` | Panel que muestra pasos de federacion durante procesamiento |
| `RoadmapPhases` | `src/components/landing/RoadmapPhases.tsx` | Seccion visual de las 10 fases con cards numeradas |

### Backend

| Recurso | Archivo | Descripcion |
|---------|---------|-------------|
| Edge Function | `supabase/functions/federated-agent/index.ts` | Agente IA especializado con prompt de datos federados, streaming SSE, manejo de errores |

### Archivos Modificados

| Archivo | Cambio |
|---------|--------|
| `src/pages/Index.tsx` | Reemplazar seccion hero por nuevo layout chat-first + agregar seccion RoadmapPhases |
| `supabase/config.toml` | Agregar configuracion de la nueva edge function |

---

### Detalles Tecnicos

**Chat del Agente:**
- Streaming SSE via `fetch` al endpoint `/functions/v1/federated-agent`
- Estado de "pensamiento" con 3-4 pasos simulados de federacion antes de mostrar respuesta
- Respuestas renderizadas con `react-markdown`
- Preguntas sugeridas: "Que es un espacio de datos federado?", "Como funciona la soberania de datos?", "Que rol juega Gaia-X?", "Como se integra con mi ERP?"

**Diagrama de Red:**
- SVG con viewBox responsive
- 6 nodos posicionados en layout circular/organico
- Particulas (circulos pequenos) animadas con `motion.circle` siguiendo paths SVG
- Efecto pulso en nodo central con `animate={{ scale: [1, 1.1, 1] }}`
- Colores: Hub=#8B5CF6, Consumer=#3B82F6, Provider=#10B981, Holder=#F59E0B, ERP=#EF4444, GaiaX=#06B6D4

**Edge Function `federated-agent`:**
- Prompt del sistema enfocado en arquitectura de datos federados y ProcureData
- Modelo: `google/gemini-3-flash-preview`
- No requiere autenticacion (acceso publico desde landing)
- Maneja errores 429 (rate limit) y 402 (creditos)


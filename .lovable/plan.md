
## Plan: Página "Fundamentos" con Infografía Dinámica y Chat IA Especializado

### Objetivo
Crear una nueva página `/fundamentos` accesible desde la tarjeta "Fundamentos" en el Roadmap, con:
1. Infografía animada e interactiva sobre Autenticación, RBAC y RLS multi-tenant
2. Chat IA conectado a un agente especializado con conocimiento de los 47 casos de éxito

---

### 1. Enlazar la tarjeta "Fundamentos" a la nueva página

**Archivo: `src/components/landing/RoadmapPhases.tsx`**
- Añadir `slug` a las fases (ej. `slug: "fundamentos"` solo para la primera fase)
- Envolver la tarjeta "Fundamentos" en un `<Link to="/fundamentos">` manteniendo el estilo actual
- Las demás tarjetas sin enlace por ahora (sin cambio visual)

### 2. Crear la página `/fundamentos`

**Archivo nuevo: `src/pages/Fundamentos.tsx`**

La página tendrá las siguientes secciones:

#### Sección Hero
- Título animado "Fundamentos de ProcureData"
- Subtítulo: "Autenticación, RBAC y RLS Multi-Tenant"
- Badge con icono Shield

#### Sección Infográfica Dinámica (componente nuevo)
**Archivo nuevo: `src/components/fundamentos/FundamentosInfographic.tsx`**

Diagrama animado con Framer Motion que muestra la arquitectura en 3 capas interactivas:

```text
+------------------------------------------+
|  CAPA 1: AUTENTICACION                   |
|  [Usuario] --> [Supabase Auth] --> [JWT]  |
|  Animación: flujo de tokens               |
+------------------------------------------+
           |
           v
+------------------------------------------+
|  CAPA 2: RBAC (Control de Acceso)        |
|  [Admin] [Moderador] [Usuario]           |
|  Tabla user_roles con enum app_role      |
|  Animación: nodos que se iluminan        |
+------------------------------------------+
           |
           v
+------------------------------------------+
|  CAPA 3: RLS MULTI-TENANT               |
|  [Tenant A] | [Tenant B] | [Tenant C]   |
|  Políticas por organización              |
|  Animación: muros de separación          |
+------------------------------------------+
```

Cada capa será un bloque clicable que expande detalles técnicos con animación `AnimatePresence`. Incluirá:
- Iconos animados (Shield, Users, Lock, Building)
- Líneas de conexión SVG animadas entre capas
- Partículas/pulsos que fluyen entre nodos para simular el flujo de datos
- Tarjetas expandibles al hacer clic mostrando detalles técnicos

#### Sección de Métricas
- 3 tarjetas con métricas clave animadas (contadores incrementales):
  - "47 Casos de Éxito" implementando estos fundamentos
  - "100% Multi-Tenant" con aislamiento RLS verificado
  - "24h Onboarding" gracias a la automatización RBAC

#### Sección Chat IA Especializado
**Archivo nuevo: `src/components/fundamentos/FundamentosChatAgent.tsx`**

Chat conectado a una nueva Edge Function especializada:
- Reutiliza el patrón de `FederatedHeroChat` (streaming SSE, ThinkingPanel, AgentAvatar, SourceCitation, FollowUpSuggestions, TokenWallet)
- Preguntas sugeridas contextuales:
  - "¿Cómo funciona la autenticación en ProcureData?"
  - "¿Qué es RBAC y cómo se aplica a los 47 casos?"
  - "¿Cómo protege RLS los datos entre organizaciones?"
  - "¿Cómo se implementan estos fundamentos en el caso GigaFactory?"
- Integra chatGuard para anti-sabotaje
- Registra tokens en el TokenWallet

### 3. Edge Function del Agente

**Archivo nuevo: `supabase/functions/fundamentos-agent/index.ts`**

- Modelo: `google/gemini-3-flash-preview`
- System prompt especializado que incluye:
  - Conocimiento detallado de Autenticación (JWT, Supabase Auth, OAuth)
  - Conocimiento de RBAC (roles, permisos, tablas user_roles, funciones security definer)
  - Conocimiento de RLS Multi-Tenant (políticas por organización, aislamiento de datos)
  - Resumen de los 47 casos de éxito y cómo cada uno aplica estos fundamentos
  - Reglas de seguridad anti-sabotaje (SECURITY_RULES)
- Streaming SSE como los demás agentes
- Manejo de errores 429/402

### 4. Traducciones i18n

**Archivos: `src/locales/*/fundamentos.json` (7 idiomas)**

Claves para:
- Título, subtítulo, descripciones de las 3 capas
- Métricas
- Preguntas sugeridas del chat
- Mensajes de error del agente
- Textos de la infografía

### 5. Registro de Ruta

**Archivo: `src/App.tsx`**
- Importar la nueva página `Fundamentos`
- Añadir ruta: `<Route path="/fundamentos" element={<Fundamentos />} />`

### 6. Config TOML

**Archivo: `supabase/config.toml`**
- Añadir la nueva función `fundamentos-agent` con `verify_jwt = false`

---

### Resumen de Archivos

| Archivo | Acción |
|---------|--------|
| `src/pages/Fundamentos.tsx` | CREAR |
| `src/components/fundamentos/FundamentosInfographic.tsx` | CREAR |
| `src/components/fundamentos/FundamentosChatAgent.tsx` | CREAR |
| `supabase/functions/fundamentos-agent/index.ts` | CREAR |
| `src/components/landing/RoadmapPhases.tsx` | MODIFICAR - Añadir Link |
| `src/App.tsx` | MODIFICAR - Añadir ruta |
| `src/locales/*/fundamentos.json` (x7) | CREAR |



## Plan: Pagina "Politicas ODRL" con Infografia Dinamica de Alta Calidad y Chat IA Especializado

Replica del patron establecido en Fundamentos, Catalogo de Datos y Flujo 3-Actores, adaptado al dominio de contratos digitales automaticos ODRL 2.0.

---

### 1. Enlazar la tarjeta en el Roadmap

**Archivo: `src/components/landing/RoadmapPhases.tsx`**
- Anadir `slug: "politicas-odrl"` a la fase 4 (Politicas ODRL) en el array `phases`

### 2. Crear la pagina principal

**Archivo nuevo: `src/pages/PoliticasOdrl.tsx`**

Estructura identica a Flujo3Actores.tsx:
- **Hero**: Badge "Fase 4 -- Politicas ODRL", icono FileText, titulo "Politicas ODRL de ProcureData", subtitulo sobre contratos digitales automaticos
- **Infografia dinamica**: Componente `PoliticasOdrlInfographic`
- **Metricas animadas**: 3 contadores:
  - "4 Componentes ODRL" (Permissions, Prohibitions, Duties, Constraints)
  - "100% Automatizacion" (contratos ejecutados por Smart Contracts)
  - "47 Casos Verificados"
- **Chat IA**: Componente `PoliticasOdrlChatAgent`

### 3. Crear la infografia interactiva de alta calidad

**Archivo nuevo: `src/components/politicas-odrl/PoliticasOdrlInfographic.tsx`**

Diagrama animado con 4 capas interactivas representando los componentes ODRL:

```text
+--------------------------------------------------+
|  CAPA 1: PERMISSIONS (Permisos)                  |
|  [Lectura] --> [Analisis] --> [Homologacion]      |
|  Acciones autorizadas sobre los datos             |
+--------------------------------------------------+
           |
           v
+--------------------------------------------------+
|  CAPA 2: PROHIBITIONS (Prohibiciones)            |
|  [Redistribucion] [Reventa] [Uso Externo]         |
|  Acciones vetadas por el contrato digital         |
+--------------------------------------------------+
           |
           v
+--------------------------------------------------+
|  CAPA 3: DUTIES (Obligaciones)                   |
|  [Pago EUROe] --> [Reporte Uso] --> [Auditoria]  |
|  Obligaciones del comprador tras el acceso        |
+--------------------------------------------------+
           |
           v
+--------------------------------------------------+
|  CAPA 4: CONSTRAINTS (Restricciones)             |
|  [Duracion 90d] [Solo UE] [Sector Especifico]    |
|  Limitaciones temporales, geograficas y de uso    |
+--------------------------------------------------+
```

Cada capa expandible con detalles tecnicos:
- **Permissions**: Acciones read/analyze/aggregate, granularidad por campo, duracion de acceso, proposito (ESG, homologacion, benchmarking)
- **Prohibitions**: Prohibicion de distribuir a terceros, reventa de datos derivados, uso fuera del ambito acordado
- **Duties**: Pago automatico via Smart Contract (1 EUROe pay-per-use), generacion de reportes de uso, notificacion al proveedor
- **Constraints**: Validez temporal (P90D, P365D), restriccion geografica (solo UE), sector permitido, volumen maximo de consultas

Elementos dinamicos de alta calidad:
- Pulsos animados en cada nodo con Framer Motion
- Flechas de conexion SVG animadas entre capas
- Indicadores de estado pulsantes (activo/inactivo)
- Transiciones suaves al expandir/colapsar detalles

### 4. Crear el Chat IA especializado

**Archivo nuevo: `src/components/politicas-odrl/PoliticasOdrlChatAgent.tsx`**

Replica del patron Flujo3ActoresChatAgent con:
- Conexion a nueva edge function `politicas-odrl-agent`
- Preguntas sugeridas contextuales:
  - "Como funcionan las politicas ODRL 2.0 en ProcureData?"
  - "Que componentes tiene un contrato digital automatico?"
  - "Como se revocan los permisos de acceso a un activo de datos?"
  - "Como se aplican las politicas ODRL en el caso GigaFactory?"
- Integracion con chatGuard y TokenWallet

### 5. Edge Function del Agente

**Archivo nuevo: `supabase/functions/politicas-odrl-agent/index.ts`**

- Modelo: `google/gemini-3-flash-preview`
- System prompt especializado que cubre:
  - ODRL 2.0 (Open Digital Rights Language) como estandar W3C
  - 4 componentes: Permissions, Prohibitions, Duties, Constraints
  - Negociacion automatica via conectores EDC (Eclipse Dataspace Connector)
  - Ejecucion automatica: Smart Contracts comparan politicas y firman digitalmente
  - Ciclo de vida: Oferta, Peticion, Acuerdo (Agreement), Ejecucion
  - Revocacion de acceso inmediata desde el panel del proveedor
  - Trazabilidad blockchain: cada movimiento con sello de tiempo en Pontus-X
  - Trust Framework de Gaia-X: Self-Descriptions obligatorias
  - Data Holder como custodio neutral en el Triangulo de Confianza
  - Modelo de pago: 1 EUROe por transaccion o 100 EUROe/ano suscripcion
  - Aplicacion especifica en cada uno de los 47 casos de exito
  - SECURITY_RULES y LANGUAGE_BRIDGE

### 6. Traducciones i18n (7 idiomas)

**Archivos nuevos: `src/locales/*/politicasOdrl.json`** (es, en, fr, de, it, pt, nl)

Claves: backToHome, badge, title, subtitle, layers (permissions/prohibitions/duties/constraints con label/title), metrics (components/automation/cases), chat (badge/description/placeholder/sectionTitle/sectionSubtitle/q1/q2/q3/q4)

### 7. Registro de ruta y configuracion

**Archivo: `src/App.tsx`**
- Importar `PoliticasOdrl` y anadir ruta: `<Route path="/politicas-odrl" element={<PoliticasOdrl />} />`

**Archivo: `src/i18n.ts`**
- Importar los 7 archivos `politicasOdrl.json` y registrar el namespace `politicasOdrl` en cada idioma

**Archivo: `supabase/config.toml`**
- Anadir `[functions.politicas-odrl-agent]` con `verify_jwt = false`

---

### Resumen de archivos

| Archivo | Accion |
|---------|--------|
| `src/pages/PoliticasOdrl.tsx` | CREAR |
| `src/components/politicas-odrl/PoliticasOdrlInfographic.tsx` | CREAR |
| `src/components/politicas-odrl/PoliticasOdrlChatAgent.tsx` | CREAR |
| `supabase/functions/politicas-odrl-agent/index.ts` | CREAR |
| `src/locales/es/politicasOdrl.json` | CREAR |
| `src/locales/en/politicasOdrl.json` | CREAR |
| `src/locales/fr/politicasOdrl.json` | CREAR |
| `src/locales/de/politicasOdrl.json` | CREAR |
| `src/locales/it/politicasOdrl.json` | CREAR |
| `src/locales/pt/politicasOdrl.json` | CREAR |
| `src/locales/nl/politicasOdrl.json` | CREAR |
| `src/components/landing/RoadmapPhases.tsx` | MODIFICAR - Anadir slug |
| `src/App.tsx` | MODIFICAR - Anadir ruta |
| `src/i18n.ts` | MODIFICAR - Registrar namespace |
| `supabase/config.toml` | MODIFICAR - Anadir funcion |


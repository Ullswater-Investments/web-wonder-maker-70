

## Plan: Pagina "Flujo 3-Actores" con Infografia Dinamica y Chat IA Especializado

Replica del patron establecido en Fundamentos y Catalogo de Datos, adaptado al dominio del flujo Consumer, Subject y Holder segun la arquitectura IDSA de ProcureData.

---

### 1. Enlazar la tarjeta en el Roadmap

**Archivo: `src/components/landing/RoadmapPhases.tsx`**
- Anadir `slug: "flujo-3-actores"` a la fase 3 (linea 11) en el array `phases`

### 2. Crear la pagina principal

**Archivo nuevo: `src/pages/Flujo3Actores.tsx`**

Estructura identica a Fundamentos.tsx y CatalogoDatos.tsx:
- **Hero**: Badge "Fase 3", icono GitBranch, titulo "Flujo 3-Actores de ProcureData", subtitulo sobre el modelo IDSA Consumer-Subject-Holder
- **Infografia dinamica**: Componente `Flujo3ActoresInfographic`
- **Metricas animadas**: 3 contadores:
  - "3 Actores Federados" (Consumer, Subject, Holder)
  - "5 Estados de Transaccion" (initiated, pending_subject, pending_holder, approved, completed)
  - "47 Casos Verificados"
- **Chat IA**: Componente `Flujo3ActoresChatAgent`

### 3. Crear la infografia interactiva

**Archivo nuevo: `src/components/flujo-3-actores/Flujo3ActoresInfographic.tsx`**

Diagrama animado con 3 capas interactivas (mismo patron visual):

```text
+--------------------------------------------------+
|  CAPA 1: CONSUMER (Comprador)                    |
|  [Solicitud] --> [Validacion] --> [Aprobacion]    |
|  Inicia transacciones y consume datos verificados |
+--------------------------------------------------+
           |
           v
+--------------------------------------------------+
|  CAPA 2: SUBJECT (Proveedor)                     |
|  [Registro SSI] --> [Wallet DID] --> [Respuesta]  |
|  Publica datos y responde solicitudes             |
+--------------------------------------------------+
           |
           v
+--------------------------------------------------+
|  CAPA 3: HOLDER (Custodia de Datos)               |
|  [Almacenamiento] --> [Verificacion] --> [Entrega]|
|  Custodia y verifica datos con trazabilidad       |
+--------------------------------------------------+
```

Cada capa expandible con detalles tecnicos:
- **Consumer**: Inicia requests via Request Wizard, define politicas ODRL de uso, firma criptografica de aceptacion, roles Admin/Approver/Viewer
- **Subject**: Proveedor con identidad SSI (DID did:ethr), Wallet corporativa MetaMask, publica Data NFTs en Pontus-X, responde a solicitudes con doble firma
- **Holder**: Custodia datos en almacenamiento soberano, verificacion via Smart Contracts, entrega con Compute-to-Data, trazabilidad inmutable en blockchain

### 4. Crear el Chat IA especializado

**Archivo nuevo: `src/components/flujo-3-actores/Flujo3ActoresChatAgent.tsx`**

Replica del patron CatalogoDatosChatAgent con:
- Conexion a nueva edge function `flujo-3-actores-agent`
- Preguntas sugeridas contextuales:
  - "Como funciona el flujo Consumer-Subject-Holder en ProcureData?"
  - "Que rol juega el Subject (proveedor) en la red Pontus-X?"
  - "Como se protegen los datos en el flujo entre los 3 actores?"
  - "Como se aplica este flujo en el caso GigaFactory?"
- Integracion con chatGuard y TokenWallet

### 5. Edge Function del Agente

**Archivo nuevo: `supabase/functions/flujo-3-actores-agent/index.ts`**

- Modelo: `google/gemini-3-flash-preview`
- System prompt especializado que cubre:
  - Modelo IDSA con 3 actores: Consumer (comprador), Subject (proveedor), Holder (custodia)
  - Orquestador: Agile Procurement como cuarto actor facilitador
  - Triangulo de Confianza y su implementacion en ProcureData
  - Flujo de estados: initiated, pending_subject, pending_holder, approved, completed
  - Doble firma criptografica (Subject firma respuesta, Consumer firma aceptacion)
  - Identidad SSI con DIDs (did:ethr) y Wallets corporativas
  - Data NFTs y DDOs en Pontus-X para soberania de datos
  - Politicas ODRL 2.0 automatizadas via Smart Contracts
  - Compute-to-Data para procesamiento sin transferencia
  - Como cada uno de los 47 casos de exito utiliza este flujo
  - SECURITY_RULES y LANGUAGE_BRIDGE

### 6. Traducciones i18n (7 idiomas)

**Archivos nuevos: `src/locales/*/flujo3Actores.json`** (es, en, fr, de, it, pt, nl)

Claves: backToHome, badge, title, subtitle, layers (consumer/subject/holder con label/title), metrics (actors/states/cases), chat (badge/description/placeholder/sectionTitle/sectionSubtitle/q1/q2/q3/q4)

### 7. Registro de ruta y configuracion

**Archivo: `src/App.tsx`**
- Importar `Flujo3Actores` y anadir ruta: `<Route path="/flujo-3-actores" element={<Flujo3Actores />} />`

**Archivo: `src/i18n.ts`**
- Importar los 7 archivos `flujo3Actores.json` y registrar el namespace en cada idioma

**Archivo: `supabase/config.toml`**
- Anadir `[functions.flujo-3-actores-agent]` con `verify_jwt = false`

---

### Resumen de archivos

| Archivo | Accion |
|---------|--------|
| `src/pages/Flujo3Actores.tsx` | CREAR |
| `src/components/flujo-3-actores/Flujo3ActoresInfographic.tsx` | CREAR |
| `src/components/flujo-3-actores/Flujo3ActoresChatAgent.tsx` | CREAR |
| `supabase/functions/flujo-3-actores-agent/index.ts` | CREAR |
| `src/locales/es/flujo3Actores.json` | CREAR |
| `src/locales/en/flujo3Actores.json` | CREAR |
| `src/locales/fr/flujo3Actores.json` | CREAR |
| `src/locales/de/flujo3Actores.json` | CREAR |
| `src/locales/it/flujo3Actores.json` | CREAR |
| `src/locales/pt/flujo3Actores.json` | CREAR |
| `src/locales/nl/flujo3Actores.json` | CREAR |
| `src/components/landing/RoadmapPhases.tsx` | MODIFICAR - Anadir slug |
| `src/App.tsx` | MODIFICAR - Anadir ruta |
| `src/i18n.ts` | MODIFICAR - Registrar namespace |
| `supabase/config.toml` | MODIFICAR - Anadir funcion |


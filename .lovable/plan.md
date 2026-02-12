

## Plan: Pagina "Web3 y DIDs" con Infografia Dinamica y Chat IA Especializado

Replica del patron establecido en Fundamentos, Catalogo de Datos, Flujo 3-Actores y Politicas ODRL, adaptado al dominio de identidades descentralizadas, wallets corporativas y pagos EUROe.

---

### 1. Enlazar la tarjeta en el Roadmap

**Archivo: `src/components/landing/RoadmapPhases.tsx`**
- Anadir `slug: "web3-dids"` a la fase 5 (Web3 y DIDs) en el array `phases`

### 2. Crear la pagina principal

**Archivo nuevo: `src/pages/Web3Dids.tsx`**

Estructura identica a PoliticasOdrl.tsx:
- **Hero**: Badge "Fase 5 -- Web3 y DIDs", icono Wallet, titulo "Web3 y DIDs de ProcureData", subtitulo sobre identidades descentralizadas y EUROe
- **Infografia dinamica**: Componente `Web3DidsInfographic`
- **Metricas animadas**: 3 contadores:
  - "3 Pilares Web3" (SSI, DID, EUROe)
  - "100% Descentralizado" (identidad soberana sin intermediarios)
  - "47 Casos Verificados"
- **Chat IA**: Componente `Web3DidsChatAgent`

### 3. Crear la infografia interactiva de alta calidad

**Archivo nuevo: `src/components/web3-dids/Web3DidsInfographic.tsx`**

Diagrama animado con 4 capas interactivas representando los conceptos Web3:

```text
+--------------------------------------------------+
|  CAPA 1: IDENTIDAD SOBERANA (SSI)                |
|  [DID did:ethr] --> [Wallet Corp.] --> [KYB]      |
|  Identidad auto-gestionada sin intermediarios     |
+--------------------------------------------------+
           |
           v
+--------------------------------------------------+
|  CAPA 2: CREDENCIALES VERIFICABLES (VCs)         |
|  [Emision] --> [Presentacion] --> [Verificacion]  |
|  Certificados digitales firmados criptograficamente|
+--------------------------------------------------+
           |
           v
+--------------------------------------------------+
|  CAPA 3: BLOCKCHAIN PONTUS-X                     |
|  [Data NFTs] --> [DDOs] --> [Smart Contracts]     |
|  Red Gaia-X para soberania de activos digitales   |
+--------------------------------------------------+
           |
           v
+--------------------------------------------------+
|  CAPA 4: PAGOS EUROe                             |
|  [Pay-per-use] --> [Suscripcion] --> [Liquidacion]|
|  Stablecoin EUROe para micropagos automaticos     |
+--------------------------------------------------+
```

Cada capa expandible con detalles tecnicos:
- **SSI**: DIDs (did:ethr:0x7ecc), MetaMask integration, DeltaDAO KYB, Wallet corporativa con clave privada custodiada
- **Credenciales Verificables**: Emision por organizaciones verificadas, presentacion selectiva (zero-knowledge), verificacion on-chain, W3C VC Data Model
- **Blockchain Pontus-X**: Chain ID 32460, Data NFTs como activos soberanos, DDOs con metadata DCAT-AP, Smart Contracts para ejecucion automatica
- **Pagos EUROe**: 1 EUROe pay-per-use, 100 EUROe/ano suscripcion, liquidacion automatica via Smart Contract, trazabilidad completa en blockchain

Elementos dinamicos:
- Pulsos animados en cada nodo con Framer Motion
- Flechas de conexion SVG animadas entre capas
- Indicadores de estado pulsantes
- Transiciones suaves al expandir/colapsar detalles

### 4. Crear el Chat IA especializado

**Archivo nuevo: `src/components/web3-dids/Web3DidsChatAgent.tsx`**

Replica del patron PoliticasOdrlChatAgent con:
- Conexion a nueva edge function `web3-dids-agent`
- Preguntas sugeridas contextuales:
  - "Como funciona la identidad descentralizada (SSI) en ProcureData?"
  - "Que son los DIDs y como se generan en la red Pontus-X?"
  - "Como funcionan los pagos automaticos con EUROe?"
  - "Como se aplica Web3 en el caso GigaFactory?"
- Integracion con chatGuard y TokenWallet

### 5. Edge Function del Agente

**Archivo nuevo: `supabase/functions/web3-dids-agent/index.ts`**

- Modelo: `google/gemini-3-flash-preview`
- System prompt especializado que cubre:
  - SSI (Self-Sovereign Identity): identidad auto-gestionada, sin intermediarios centrales
  - DIDs (Decentralized Identifiers): formato did:ethr:0x7ecc:0x..., resolucion on-chain
  - Wallets corporativas: MetaMask, Rabby, custodia de clave privada
  - KYB (Know Your Business): verificacion via DeltaDAO, Self-Description Gaia-X
  - Credenciales Verificables (VCs): W3C VC Data Model, emision/presentacion/verificacion
  - Blockchain Pontus-X: Chain ID 32460, infraestructura Gaia-X, Ocean Protocol
  - Data NFTs: activos digitales soberanos, ERC-721, metadata DDO
  - DDOs (Decentralized Data Objects): DCAT-AP, Aquarius indexer
  - Smart Contracts: ejecucion automatica de politicas ODRL, Fixed Rate Exchange
  - EUROe: stablecoin europea, pay-per-use (1 EUROe), suscripcion (100 EUROe/ano)
  - Compute-to-Data: procesamiento sin transferencia, privacidad extrema
  - Onboarding Web3 en 3 fases: Registro + Wallet, KYB en DeltaDAO, Activacion en Pontus-X
  - Aplicacion en los 47 casos de exito
  - SECURITY_RULES y LANGUAGE_BRIDGE

### 6. Traducciones i18n (7 idiomas)

**Archivos nuevos: `src/locales/*/web3Dids.json`** (es, en, fr, de, it, pt, nl)

Claves: backToHome, badge, title, subtitle, layers (ssi/credentials/blockchain/euroe con label/title), metrics (pillars/decentralized/cases), chat (badge/description/placeholder/sectionTitle/sectionSubtitle/q1/q2/q3/q4)

### 7. Registro de ruta y configuracion

**Archivo: `src/App.tsx`**
- Importar `Web3Dids` y anadir ruta: `<Route path="/web3-dids" element={<Web3Dids />} />`

**Archivo: `src/i18n.ts`**
- Importar los 7 archivos `web3Dids.json` y registrar el namespace `web3Dids` en cada idioma

**Archivo: `supabase/config.toml`**
- Anadir `[functions.web3-dids-agent]` con `verify_jwt = false`

---

### Resumen de archivos

| Archivo | Accion |
|---------|--------|
| `src/pages/Web3Dids.tsx` | CREAR |
| `src/components/web3-dids/Web3DidsInfographic.tsx` | CREAR |
| `src/components/web3-dids/Web3DidsChatAgent.tsx` | CREAR |
| `supabase/functions/web3-dids-agent/index.ts` | CREAR |
| `src/locales/es/web3Dids.json` | CREAR |
| `src/locales/en/web3Dids.json` | CREAR |
| `src/locales/fr/web3Dids.json` | CREAR |
| `src/locales/de/web3Dids.json` | CREAR |
| `src/locales/it/web3Dids.json` | CREAR |
| `src/locales/pt/web3Dids.json` | CREAR |
| `src/locales/nl/web3Dids.json` | CREAR |
| `src/components/landing/RoadmapPhases.tsx` | MODIFICAR - Anadir slug |
| `src/App.tsx` | MODIFICAR - Anadir ruta |
| `src/i18n.ts` | MODIFICAR - Registrar namespace |
| `supabase/config.toml` | MODIFICAR - Anadir funcion |


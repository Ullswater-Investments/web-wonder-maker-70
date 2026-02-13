
# Incluir los 10 Componentes de Arquitectura en el Whitepaper

## Objetivo

Reemplazar la seccion 3 actual del whitepaper (Arquitectura Tecnica - solo 3 capas genericas) con una nueva seccion detallada que documente los **10 componentes del espacio de datos federado ProcureData**, cada uno con su descripcion, subcapas e informacion tecnica extraida de las infografias interactivas existentes en la plataforma.

---

## Los 10 Componentes y su Contenido

Cada componente se documentara con una estructura uniforme: descripcion general, subcapas tecnicas y detalles especificos. El contenido se extrae de los infograficos existentes (`*Infographic.tsx`).

| # | Componente | Subcapas | Fuente |
|---|-----------|----------|--------|
| 1 | **Fundamentos** | Presentacion (Angular 21, MetaMask), Orquestacion (AdonisJS, RBAC), Soberania (Pontus-X, Data NFTs, DeltaDAO), Persistencia (PostgreSQL, RLS, JSONB) | `FundamentosInfographic.tsx` |
| 2 | **Catalogo de Datos** | Registro (DCAT-AP, JSON-LD), Descubrimiento (busqueda federada, filtros), Gobernanza (scoring, linaje, ODRL) | `CatalogoDatosInfographic.tsx` |
| 3 | **Flujo 3-Actores** | Consumer (Request Wizard, ODRL), Subject (SSI, DID, Wallet), Holder (almacenamiento soberano, Compute-to-Data) | `Flujo3ActoresInfographic.tsx` |
| 4 | **Politicas ODRL** | Permisos (read, analyze, aggregate), Prohibiciones (redistribucion, reventa), Obligaciones (pago EUROe, reportes), Restricciones (duracion, geografia, sector) | `PoliticasOdrlInfographic.tsx` |
| 5 | **Web3 y DIDs** | SSI (DID did:ethr, Wallet, KYB), Credenciales Verificables (emision, presentacion, verificacion), Blockchain (Data NFTs, DDOs, Smart Contracts), EUROe (pay-per-use, suscripcion) | `Web3DidsInfographic.tsx` |
| 6 | **IA Conversacional** | NLU (Intent Mapping, entidades, contexto), Agentes (Concierge, Federado, Casos Exito), Base de Conocimiento (memoria tecnica, 47 casos, docs), Aprendizaje (feedback, correccion, actualizacion) | `IAConversacionalInfographic.tsx` |
| 7 | **Conectores ERP** | ERPs (SAP S/4HANA, Oracle NetSuite, Dynamics 365), Protocolos (REST/GraphQL, EDI/XML, Webhooks), Bridge (ETL Pipeline, Sync Engine), Seguridad (OAuth 2.0, API Keys, Audit Trail) | `ConectoresErpInfographic.tsx` |
| 8 | **Red Gaia-X** | Trust Framework (Self-Descriptions, Notarizacion, VCs), IDS (EDC Connector, Contract Negotiation, Data Transfer), Catalogo (DCAT-AP, Indexacion, Descubrimiento), Compliance (GDPR, Data Act, AI Act) | `RedGaiaXInfographic.tsx` |
| 9 | **Analytics y BI** | Dashboards (KPIs, graficos, alertas), Cubo de Gasto (proveedor, categoria, sector), Predictivo (Forecasting IA, riesgo, simulador), DataOps (cleansing, normalizacion, linaje) | `AnalyticsBiInfographic.tsx` |
| 10 | **Multi-Sector** | Nodos Sectoriales (Industrial, Comercio, Agro), Gobernanza (IDSA Rulebook, ODRL, Multi-Tenant), Federacion (catalogo federado, cross-sector, interoperabilidad), Monetizacion (marketplace, value services, EUROe) | `MultiSectorInfographic.tsx` |

---

## Archivos a Modificar

### 1. `docs/WHITEPAPER_PROCUREDATA.md`
- **Reemplazar** la seccion "3. Arquitectura Tecnica" (lineas 56-81) con una nueva seccion expandida "3. Arquitectura del Espacio de Datos Federado" que contenga 10 subsecciones (3.1 a 3.10)
- Cada subseccion incluira: titulo, descripcion breve, tabla de subcapas con detalles tecnicos
- Se mantiene la coherencia con el formato Markdown del documento (tablas, bullets, citas)

### 2. `src/utils/generateWhitepaperProcuredataPDF.ts`
- Reemplazar la seccion 3 del PDF con las 10 subsecciones nuevas
- Usar las funciones auxiliares existentes: `drawSectionTitle`, `drawSubtitle`, `drawBox`, `drawTable`, `drawBullet`
- Cada componente se renderizara con un titulo y una tabla o caja con sus subcapas y detalles

### 3. Traducciones (6 archivos `.md`)
- `docs/WHITEPAPER_PROCUREDATA_EN.md`
- `docs/WHITEPAPER_PROCUREDATA_FR.md`
- `docs/WHITEPAPER_PROCUREDATA_PT.md`
- `docs/WHITEPAPER_PROCUREDATA_DE.md`
- `docs/WHITEPAPER_PROCUREDATA_IT.md`
- `docs/WHITEPAPER_PROCUREDATA_NL.md`

Cada traduccion recibira la misma seccion 3 expandida, traducida al idioma correspondiente.

---

## Estructura de Cada Subseccion en el Markdown

```text
### 3.X Nombre del Componente

Descripcion breve del componente y su rol en el ecosistema.

| Subcapa | Tecnologias | Descripcion |
|---------|-------------|-------------|
| Subcapa 1 | Tech A, Tech B | Detalle funcional |
| Subcapa 2 | Tech C, Tech D | Detalle funcional |
| ...     | ...         | ...         |

Puntos clave:
- Detalle tecnico 1
- Detalle tecnico 2
- Detalle tecnico 3
```

---

## Seccion Tecnica

### Compatibilidad
- El visor `Whitepaper.tsx` parsea headings Markdown para generar la tabla de contenidos automaticamente, por lo que las nuevas subsecciones `### 3.1` a `### 3.10` apareceran automaticamente en la navegacion lateral
- No se requieren cambios en `Whitepaper.tsx`

### Volumen estimado
- El documento base pasara de ~169 lineas a ~450-500 lineas (la seccion 3 se expande de ~25 lineas a ~300 lineas)
- El PDF necesitara aproximadamente 5-8 paginas adicionales para los 10 componentes

### Orden de implementacion
1. Actualizar `docs/WHITEPAPER_PROCUREDATA.md` (documento base en espanol)
2. Actualizar `src/utils/generateWhitepaperProcuredataPDF.ts` (generador PDF)
3. Actualizar las 6 traducciones del whitepaper

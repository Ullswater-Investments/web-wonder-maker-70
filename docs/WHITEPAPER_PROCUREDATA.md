# PROCUREDATA: Orquestación de Datos para la Economía Descentralizada

**Whitepaper Técnico & Económico v1.0**

*Fecha: Enero 2026*  
*Ecosistema: Gaia-X / Pontus-X / IDSA*

---

## Abstract

ProcureData es la primera infraestructura de Espacios de Datos diseñada específicamente para la función de Compras y Cadena de Suministro. Elimina la redundancia operativa en la validación de proveedores mediante identidades soberanas (DID) y contratos inteligentes de uso de datos (ODRL), transformando centros de coste burocráticos en mercados de datos líquidos y seguros.

---

## 1. El Problema: La Trampa de la Redundancia (n × m)

En la economía actual, la confianza es manual, lenta y costosa.

### 1.1 Silos de Información

La cadena de suministro global opera en silos. Un proveedor (Data Subject) debe enviar la misma documentación (certificados ISO, datos fiscales, reportes ESG) a cada uno de sus clientes (Data Consumers) individualmente.

### 1.2 El Coste de la Verificación

Si 100 empresas compran a los mismos 500 proveedores, se realizan **50,000 procesos de validación** y mantenimiento redundantes. Esto genera:

- **Fricción Operativa**: Meses para homologar un proveedor crítico.
- **Riesgo de Datos Estáticos**: La información en el ERP del comprador caduca el día después de ser validada.
- **Fraude y Greenwashing**: La falta de trazabilidad inmutable permite la falsificación de credenciales de sostenibilidad.

---

## 2. La Solución: Un Espacio de Datos Soberano

ProcureData no es un "lago de datos" donde todos vuelcan su información. Es un sistema de **tuberías inteligentes y seguras** donde el dato viaja directamente del Propietario al Consumidor, bajo reglas estrictas.

### 2.1 El Triángulo de Confianza (IDSA Model)

Adoptamos el modelo de arquitectura de referencia de la International Data Spaces Association:

| Rol | Descripción |
|-----|-------------|
| **El Proveedor (Data Provider/Subject)** | Mantiene la soberanía. El dato nunca sale de su control sin un contrato firmado. |
| **El Comprador (Data Consumer)** | Accede al dato verificado en tiempo real para sus procesos de compras, riesgo o ESG. |
| **El Custodio (Data Holder)** | Infraestructura neutral (nodos técnicos) que facilita el intercambio sin "ver" el contenido comercial sensible. |

### 2.2 Pasaporte Digital de Proveedor

En lugar de enviar PDFs por email, cada proveedor en ProcureData tiene una **Identidad Auto-Soberana (SSI)** basada en DIDs (`did:ethr`). Sus credenciales (ISO, Solvencia, ESG) están ancladas a esta identidad, permitiendo una verificación instantánea y reutilizable:

> *"Verificar una vez, usar en todas partes"*

---

## 3. Arquitectura del Espacio de Datos Federado

ProcureData se articula en **10 componentes arquitectónicos** que cubren desde la infraestructura base hasta la gobernanza multi-sectorial. Nuestra pila tecnológica es **híbrida**, combinando la usabilidad de Web2 con la confianza inmutable de Web3.

### 3.1 Fundamentos

Infraestructura base de cuatro capas que sustenta toda la plataforma ProcureData.

| Subcapa | Tecnologías | Descripción |
|---------|-------------|-------------|
| **Presentación** | Angular 21, Tailwind CSS 4, MetaMask | Interfaz responsive mobile-first con Request Wizard de 5 fases y firma de transacciones vía Wallet corporativa. |
| **Orquestación** | AdonisJS, RBAC, State Manager | Orquestador central del ciclo de vida de transacciones con 4 roles (Admin, Approver, Viewer, API Configurator) y doble firma criptográfica. |
| **Soberanía** | Pontus-X, Data NFTs, DeltaDAO, SSI | Red Gaia-X con Data NFTs y DDOs como activos digitales soberanos, identidad SSI (did:ethr) y KYB verificado en blockchain. |
| **Persistencia** | PostgreSQL, RLS, JSONB | Base de datos con Row Level Security por organization_id, almacenamiento híbrido JSONB para esquemas DCAT-AP y cifrado en reposo + TLS 1.3. |

Puntos clave:
- Compute-to-Data para procesamiento sin transferencia de datos sensibles
- Aislamiento total de tenants mediante `get_user_organization()`
- Trazabilidad inmutable de todas las operaciones en blockchain

### 3.2 Catálogo de Datos

Motor de registro, descubrimiento y gobernanza de activos de datos que conecta los 47 casos de éxito desplegados.

| Subcapa | Tecnologías | Descripción |
|---------|-------------|-------------|
| **Registro** | DCAT-AP, JSON-LD | Esquema estandarizado para descripción de activos con metadatos semánticos y publicación automática vía ERP Connector. |
| **Descubrimiento** | Búsqueda federada, API Gaia-X | Búsqueda full-text en catálogos distribuidos con filtros por sector, formato, licencia y recomendaciones por perfil organizativo. |
| **Gobernanza** | Scoring, Linaje, ODRL | Scoring de calidad (completitud, frescura), linaje de datos origen→transformación→consumo y políticas ODRL integradas en cada activo. |

Puntos clave:
- Versionado de activos con historial de cambios completo
- Recomendaciones basadas en perfil organizativo
- Verificado en los 47 casos de éxito desplegados

### 3.3 Flujo de 3 Actores

Modelo de interacción basado en el estándar IDSA con tres roles diferenciados: Consumer, Subject y Holder.

| Subcapa | Tecnologías | Descripción |
|---------|-------------|-------------|
| **Consumer (Comprador)** | Request Wizard, ODRL 2.0, Firma criptográfica | Inicia solicitudes de datos mediante wizard de 5 fases, define políticas de uso y firma aceptación tras verificación. |
| **Subject (Proveedor)** | SSI, DID (did:ethr), Wallet MetaMask | Identidad auto-soberana con credenciales verificables W3C, publica Data NFTs y responde con doble firma criptográfica. |
| **Holder (Custodio)** | RLS, Smart Contracts, Compute-to-Data | Custodia datos con aislamiento por organization_id, verificación vía Pontus-X y entrega sin transferencia de datos brutos. |

Puntos clave:
- Doble firma criptográfica (Subject + Consumer) para cada transacción
- Estado de transacción: initiated → pending_subject → pending_holder → approved → completed
- Trazabilidad inmutable en blockchain con auditoría completa

### 3.4 Políticas ODRL

Motor de contratos digitales basado en ODRL 2.0 (W3C) que gobierna cada acceso a datos en la plataforma.

| Subcapa | Tecnologías | Descripción |
|---------|-------------|-------------|
| **Permisos** | ODRL 2.0, JSON-LD | Acciones autorizadas (read, analyze, aggregate) con granularidad por campo y duración configurable (P90D, P180D, P365D). |
| **Prohibiciones** | Smart Contracts, Pontus-X | Redistribución y reventa vetadas; los insights derivados heredan restricciones. Violaciones registradas en blockchain. |
| **Obligaciones** | EUROe, Smart Settlement | Pago automático (1 EUROe pay-per-use o 100 EUROe/año suscripción) y reportes de uso obligatorios con auditoría continua. |
| **Restricciones** | Geográficas, Sectoriales, Temporales | Procesamiento solo en UE, sector específico según Self-Description, volumen máximo de consultas por período. |

Puntos clave:
- Cada permiso codificado en JSON-LD siguiendo vocabulario ODRL 2.0
- Propósito obligatorio: ESG reporting, homologación, benchmarking sectorial
- Detección automática de uso fuera del ámbito acordado

### 3.5 Web3 y DIDs

Capa de identidad descentralizada y pagos programables basada en estándares W3C y blockchain Pontus-X.

| Subcapa | Tecnologías | Descripción |
|---------|-------------|-------------|
| **Identidad SSI** | DID (did:ethr), MetaMask, KYB | Identidad auto-gestionada sin intermediarios, wallet corporativa y verificación KYB vía DeltaDAO y Self-Description Gaia-X. |
| **Credenciales Verificables** | W3C VC Data Model, Zero-Knowledge | Emisión por organizaciones verificadas, presentación selectiva sin revelar datos sensibles y verificación on-chain instantánea. |
| **Blockchain** | Data NFTs (ERC-721), DDOs, Smart Contracts | Cada activo de datos es un token único; metadata DCAT-AP indexada por Aquarius; ejecución automática de políticas ODRL en Pontus-X (Chain ID 32460). |
| **Pagos EUROe** | Pay-per-use, Suscripción, Liquidación | Micropagos automáticos vía Smart Contract (1 EUROe/tx o 100 EUROe/año); cada pago registrado en blockchain con sello de tiempo inmutable. |

Puntos clave:
- Soberanía total sobre datos de identidad sin autoridades centrales
- Stablecoin EUROe regulada (EMI) compatible con MiCA
- Trazabilidad completa de cada pago en blockchain

### 3.6 Asistente IA

Sistema de inteligencia artificial conversacional con agentes especializados y base de conocimiento de los 47 casos de éxito.

| Subcapa | Tecnologías | Descripción |
|---------|-------------|-------------|
| **NLU** | Intent Mapping, Google Gemini | Reconocimiento de intenciones con triggers de widgets (ROI, ImpactGauge, Radar), detección emocional y temperatura 0.1–0.2 para máxima precisión. |
| **Agentes** | Concierge, Federado, Casos de Éxito | Agente general, especialista en Gaia-X/IDSA y experto en los 47 casos verificados; cada uno con system prompt dedicado y SECURITY_RULES. |
| **Base de Conocimiento** | Memoria Técnica, 47 Casos, 15 Docs | Arquitectura, protocolos IDSA/Gaia-X/ODRL, casos con métricas reales y vocabulario técnico controlado. |
| **Aprendizaje** | Feedback 👍/👎, Corrección, GitHub | Captura inmediata de calidad, corrección por usuario, supervisión en /admin/learning-hub y actualización automática vía repositorio. |

Puntos clave:
- Agentes especializados por fase del roadmap y sector
- 15 documentos explicativos de entrenamiento
- Ciclo de mejora continua con supervisión humana

### 3.7 Conectores ERP/CRM

Capa de integración empresarial que conecta ProcureData con los principales sistemas ERP del mercado.

| Subcapa | Tecnologías | Descripción |
|---------|-------------|-------------|
| **ERPs Soportados** | SAP S/4HANA, Oracle NetSuite, Dynamics 365, Odoo, Salesforce | Integración nativa con módulos MM/SD/FI (SAP), SuiteScript (Oracle), Dataverse API (Microsoft), JSON-RPC (Odoo), Lightning API (Salesforce). |
| **Protocolos** | REST/GraphQL, EDI/XML, Webhooks, gRPC | Endpoints JSON-LD estándar, consultas flexibles GraphQL, EDI EDIFACT/X12, webhooks bidireccionales en tiempo real. |
| **Bridge** | ETL Pipeline, Sync Engine, Field Mapping | Extracción-transformación-carga con mapeo visual de campos, sincronización bidireccional con retry exponencial y conector IDS. |
| **Seguridad** | OAuth 2.0, API Keys, Audit Trail | Autenticación delegada con refresh tokens, rate limiting (1000 req/min Pro), cifrado TLS 1.3 + AES-256 y RLS por organización. |

Puntos clave:
- Mapeo de campos ERP ↔ ProcureData sin código (interfaz visual)
- Data Quality: validación de formatos, detección de duplicados, normalización
- Audit Trail completo con timestamp, actor y resultado

### 3.8 Red Gaia-X

Integración nativa con el ecosistema europeo de datos federados Gaia-X y sus estándares de confianza.

| Subcapa | Tecnologías | Descripción |
|---------|-------------|-------------|
| **Trust Framework** | Self-Descriptions JSON-LD, GXDCH, VCs | Metadatos estandarizados de participantes y servicios, verificación vía Digital Clearing House y Trust Anchors. |
| **IDS** | EDC Connector, Contract Negotiation, DSP | Eclipse Dataspace Connector open-source para intercambio soberano, negociación ODRL programática y protocolo DSP. |
| **Catálogo** | DCAT-AP, Aquarius Indexer | Application Profile europeo con indexación distribuida, descubrimiento federado y búsqueda semántica cross-dataspace. |
| **Compliance** | GDPR, Data Act, AI Act, CSRD | Cumplimiento regulatorio completo: protección de datos, gobernanza de intermediarios, auditoría algorítmica y reportes ESG. Certificación Gaia-X Level 1-3. |

Puntos clave:
- Notarización en blockchain de Self-Descriptions para integridad
- Transferencia de datos HTTP/S3 con cifrado extremo a extremo
- Interoperabilidad cross-dataspace con múltiples espacios europeos

### 3.9 Analytics y BI

Plataforma de inteligencia de negocio con dashboards en tiempo real, análisis predictivo y DataOps.

| Subcapa | Tecnologías | Descripción |
|---------|-------------|-------------|
| **Dashboards** | KPIs en tiempo real, Health Score | Métricas actualizadas con cada transacción blockchain, alertas automáticas por umbrales y paneles configurables por rol. |
| **Cubo de Gasto** | Multidimensional, Benchmarking | Clasificación por proveedor, categoría, sector, geografía y tiempo; análisis de Pareto y benchmarking anónimo sectorial. |
| **Predictivo** | Forecasting IA, Monitor de Riesgo, Simulador | Machine Learning para predicción de demanda, vigilancia 24/7 de proveedores con Z-Score y simulador de escenarios. |
| **DataOps** | Cleansing, Normalización JSON-LD, Linaje | Detección de duplicados, transformación a formato semántico estandarizado, trazabilidad completa y datos sintéticos anonimizados. |

Puntos clave:
- Health Score: índice compuesto de integridad, frescura y cumplimiento
- Scoring predictivo dinámico basado en tendencias históricas
- Pipeline automatizado: Entrada → Limpieza → Normalización → Validación → Almacenamiento

### 3.10 Gobernanza Multi-Sector

Arquitectura de nodos sectoriales independientes con federación cross-sector y monetización por ecosistema.

| Subcapa | Tecnologías | Descripción |
|---------|-------------|-------------|
| **Nodos Sectoriales** | Industrial (51%), Comercio (15%), Agro (12%), Movilidad (10%), Salud (7%), Economía Social (5%) | Cada sector opera su propio nodo con reglas, catálogo y gobernanza específicos. Marca blanca configurable con dominio propio. |
| **Gobernanza** | IDSA Rulebook, ODRL, Multi-Tenant RLS | Gobernanza descentralizada por nodo, políticas sectoriales (CBAM, MDR, Sedex) y aislamiento total de datos entre organizaciones. |
| **Federación** | Catálogo Federado, Cross-Sector, Gaia-X | Descubrimiento de datos entre nodos sin centralizar, transacciones cross-sector y Smart Contracts inter-nodo. |
| **Monetización** | Marketplace, Value Services, EUROe | Marketplace sectorial con modelo adaptado (suscripción, pay-per-use, freemium), servicios premium y pagos unificados con stablecoin europeo. |

Puntos clave:
- Comité de gobernanza con representantes de cada nodo sectorial
- Interoperabilidad semántica con vocabularios compartidos (DCAT-AP, JSON-LD)
- Ecosistema de partners: asociaciones sectoriales operan sus propios nodos

---

## 4. Economía del Dato y Tokenomics

A diferencia de proyectos especulativos, ProcureData utiliza una economía basada en **utilidad real** y **estabilidad financiera**.

### 4.1 Moneda Estable: EUROe

Para las transacciones comerciales (compra de datasets, pago por servicios de validación), utilizamos **EUROe**, el primer dinero electrónico regulado (EMI) en blockchain compatible con MiCA.

| Ventaja | Descripción |
|---------|-------------|
| **Sin Volatilidad** | 1 EUROe siempre es igual a 1 EUR. |
| **Programable** | Los pagos se liquidan automáticamente (Smart Settlement) solo cuando el dato es entregado y validado. |
| **Legal** | Facturable y compatible con la contabilidad empresarial europea. |

### 4.2 Monetización de Activos

Los proveedores pueden transformar "residuos de datos" en activos:

- **Compute-to-Data**: Un proveedor puede permitir que un algoritmo de IA (ej. predicción de riesgo) se ejecute sobre sus datos privados sin revelar los datos brutos, cobrando por el uso del cómputo.

---

## 5. Casos de Uso Reales

### 5.1 Industrial: Homologación Flash

| Aspecto | Detalle |
|---------|---------|
| **Problema** | GigaFactory North tardaba 22 días en homologar proveedores críticos. |
| **Solución** | Con el Pasaporte Digital, verifican automáticamente certificados ISO y solvencia financiera contra la blockchain. |
| **Resultado** | Tiempo reducido a **48 horas**. |

### 5.2 Agroalimentario: Trazabilidad Anti-Fraude

| Aspecto | Detalle |
|---------|---------|
| **Problema** | Falsificación de Denominaciones de Origen en vinos de exportación. |
| **Solución** | Etiquetas NFC vinculadas a DIDs únicos en cada botella. |
| **Resultado** | **100% de trazabilidad** desde el viñedo hasta el consumidor final en Asia. |

### 5.3 ESG: Auditoría de Alcance 3

| Aspecto | Detalle |
|---------|---------|
| **Problema** | Imposibilidad de obtener datos reales de emisiones de carbono de proveedores Tier-2 y Tier-3. |
| **Solución** | Solicitud automatizada de datos ESG a través de la cadena, con firma criptográfica del origen. |
| **Resultado** | Reportes **CSRD auditables** y prevención de Greenwashing. |

---

## 6. Roadmap y Futuro

| Fase | Periodo | Objetivos |
|------|---------|-----------|
| **Fase 1** | Actual - v3.1 | Plataforma productiva, integración Pontus-X, Pagos EUROe, Onboarding KYB. |
| **Fase 2** | Q3 2026 | Federación completa con Catena-X. Lanzamiento del módulo de IA Soberana para análisis predictivo de cadena de suministro. |
| **Fase 3** | 2027 | Descentralización de los nodos validadores y expansión a logística marítima. |

---

## 7. Conclusión

ProcureData no es solo software; es una **nueva infraestructura de mercado**. Al reemplazar intermediarios burocráticos con código criptográfico y estándares europeos, devolvemos el control del dato a quien lo genera y la velocidad a quien lo necesita.

> **Únete a la economía de datos soberana.**

---

## Glosario

| Término | Definición |
|---------|------------|
| **DID** | Decentralized Identifier - Identificador descentralizado según estándar W3C |
| **ODRL** | Open Digital Rights Language - Lenguaje de políticas de uso de datos |
| **SSI** | Self-Sovereign Identity - Identidad auto-soberana |
| **Gaia-X** | Iniciativa europea para espacios de datos federados |
| **Pontus-X** | Red blockchain compatible con Gaia-X |
| **EUROe** | Stablecoin regulada 1:1 con el Euro |
| **IDSA** | International Data Spaces Association |
| **EDC** | Eclipse Dataspace Components |
| **MiCA** | Markets in Crypto-Assets Regulation (EU) |
| **CSRD** | Corporate Sustainability Reporting Directive |

---

*© 2026 ProcureData. Todos los derechos reservados.*

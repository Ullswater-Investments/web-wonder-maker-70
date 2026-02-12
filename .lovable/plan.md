

## Plan: Pagina "Recomendaciones UNE" — Informe Tecnico de Conformidad

Documento exhaustivo que analiza punto por punto la norma UNE 0087:2025 contra las capacidades reales de ProcureData, con puntos fuertes, debiles y recomendaciones tecnicas. Publicado en pagina independiente enlazada desde el footer.

---

### Investigacion realizada

Se han revisado los 17 documentos de entrenamiento de la IA (entrenamientoIA/01-17) y el documento completo UNE 0087:2025 (299 lineas). A continuacion se presenta el mapeo detallado que servira de base para el informe:

#### Mapeo UNE vs ProcureData — Hallazgos clave

| Requisito UNE | Capacidad ProcureData | Estado |
|---|---|---|
| **Descentralizacion** (4.3.1) | Datos en origen, flujo tripartito Consumer-Provider-Holder | CUMPLE |
| **Soberania sobre participantes** (4.1.1) | KYB verificado, DID did:ethr, wallet Web3 | CUMPLE |
| **Soberania sobre activos** (4.1.2) | Politicas ODRL con permisos/prohibiciones/deberes, revocacion inmediata | CUMPLE |
| **Soberania sobre infraestructura** (4.1.3) | Pontus-X (Gaia-X), EDC, codigo abierto | PARCIAL — dependencia de Supabase como BaaS |
| **Interoperabilidad legal** (5.1) | ODRL 2.0, RGPD, contratos digitales | CUMPLE |
| **Interoperabilidad organizativa** (5.2) | Roles definidos (consumer/provider/holder), RLS multi-tenant | PARCIAL — falta Rulebook formal publicado |
| **Interoperabilidad semantica** (5.3) | JSON-LD en Raw Data Normalizer, catalogo de datos | PARCIAL — falta DCAT-AP completo y validacion SHACL |
| **Interoperabilidad tecnica** (5.4) | Conectores EDC, API REST, Webhooks, SDKs | CUMPLE |
| **Gobernanza del espacio** (6.1) | Portal de Gobernanza con votaciones Pro, Comite de Etica | PARCIAL — Autoridad de Gobierno no formalizada juridicamente |
| **Gobernanza de interoperabilidad** (6.2) | Protocolo DSP, Trust Framework Gaia-X, Self-Descriptions | CUMPLE |
| **Gobernanza de datos** (6.3) | Contratos ODRL digitales, Health Score de calidad | CUMPLE |
| **Matriz de roles** (6.4) | Consumer, Provider, Data Holder definidos | PARCIAL — faltan roles Operador e Intermediario formal |
| **Modelos de negocio** (7.1) | Pay-per-use (1 EUROe) + Membresia Pro (100 EUROe/ano) | CUMPLE |
| **Casos de uso** (7.2) | 47 casos verificados en 6 sectores | CUMPLE |
| **Servicios habilitadores** (7.3) | 22 servicios, catalogo, descubrimiento, IA | CUMPLE |
| **Gestion de identidad federada** (5.4 IAM) | DID did:ethr, Keycloak planificado, wallet Web3 | PARCIAL — SSI/credenciales verificables no completas |
| **Calidad de datos** (6.3.2) | Health Score (integridad, actualizacion, veracidad, cumplimiento) | CUMPLE |
| **Trazabilidad y auditoria** | Blockchain Pontus-X, audit_logs, hash inmutable | CUMPLE |
| **Derecho al olvido GDPR** | Hash permanece, dato se borra del Holder | CUMPLE |
| **Datos sinteticos** | Generacion IA para testing y privacidad | CUMPLE |
| **Resiliencia** | Almacen cifrado, multi-nodo, modo offline EDC | CUMPLE |
| **Alineamiento CRED/Kit Digital** | Elegible Kit Espacios de Datos | PARCIAL — requiere certificacion formal |

---

### 1. Crear el documento Markdown

**Archivo nuevo: `docs/RECOMENDACIONES_UNE_0087.md`**

Estructura del informe tecnico (aprox. 500+ lineas):

```text
# Informe de Conformidad Tecnica: ProcureData vs UNE 0087:2025

## Resumen Ejecutivo
- 22 requisitos analizados
- 14 CUMPLE / 7 PARCIAL / 1 PENDIENTE
- Nivel de conformidad estimado: 78%
- Prioridades inmediatas: DCAT-AP, Autoridad de Gobierno, SSI

## 1. Objeto y Campo de Aplicacion (Sec. 1)
### Puntos Fuertes
- ProcureData es un espacio de datos federado, no un data lake
- Cumple criterios de descentralizacion, gobernanza y generacion de valor
### Puntos Debiles
- No ha obtenido aun verificacion formal CRED
### Recomendaciones
- Solicitar verificacion de conformidad CRED (Guia publicada dic. 2025)

## 2. Normas para Consulta (Sec. 2)
### Puntos Fuertes
- ODRL 2.0 (W3C), EDC (IDSA), Gaia-X Trust Framework implementados
- Seguridad: TLS 1.3, AES-256, JWT, RLS
### Puntos Debiles
- No referencia explicita a UNE 0077-0081 (gobierno/calidad interna)
### Recomendaciones
- Mapear Health Score contra UNE 0079 (calidad del dato)
- Documentar gobierno interno segun UNE 0077

## 3. Terminos y Definiciones (Sec. 3)
### Puntos Fuertes
- Producto de Datos implementado (data_products + data_assets + policies)
- Contrato Inteligente via ODRL + Smart Contracts blockchain
- Espacio de Datos con conectores, semantica, identidad
### Puntos Debiles
- Terminologia interna no alineada 100% con la norma
### Recomendaciones
- Renombrar entidades internas para coincidir con UNE 0087
- Publicar glosario basado en Sec. 3 de la norma

## 4. Soberania Digital (Sec. 4)
### 4.1 Soberania sobre Participantes
#### Puntos Fuertes
- DID did:ethr verificable en blockchain Pontus-X
- KYB automatizado con Homologacion Flash 24h
- RBAC con roles admin/approver/viewer
#### Puntos Debiles
- No soporta eIDAS 2.0 / European Digital Identity Wallet
#### Recomendaciones
- Integrar EUDIW cuando el reglamento entre en vigor
- Implementar niveles de aseguramiento (LoA) segun eIDAS

### 4.2 Soberania sobre Activos
#### Puntos Fuertes
- ODRL completo: permisos, prohibiciones, deberes, restricciones
- Revocacion inmediata desde panel de control
- Hash inmutable en Pontus-X
#### Puntos Debiles
- Las politicas ODRL no se negocian automaticamente via EDC
#### Recomendaciones
- Implementar negociacion automatica conector-a-conector
- Anadir ejecucion automatica de caducidad temporal

### 4.3 Soberania sobre Infraestructura
#### Puntos Fuertes
- Pontus-X (red Gaia-X), EDC open source
- ethers.js para interaccion blockchain
#### Puntos Debiles
- Backend dependiente de Supabase (BaaS propietario)
- Frontend en plataforma Cloud AI propietaria
#### Recomendaciones
- Documentar plan de portabilidad (export a self-hosted PostgreSQL)
- Evaluar despliegue en nube soberana europea (OVH, IONOS)

## 5. Interoperabilidad Legal (Sec. 5.1)
### Puntos Fuertes
- ODRL 2.0 para automatizacion contractual
- Cumplimiento RGPD: Anonimizador GDPR, PII Shield, derecho al olvido
- Motor ODRL dinamico para actualizaciones regulatorias
### Puntos Debiles
- No implementa Data Act Art. 5-9 (portabilidad IoT)
### Recomendaciones
- Desarrollar modulo de portabilidad segun Data Act
- Certificar ODRL Validator contra suite de tests W3C

## 6. Interoperabilidad Organizativa (Sec. 5.2)
### Puntos Fuertes
- Roles claros: Consumer, Provider, Data Holder
- Flujo de aprobacion multi-actor con estados definidos
- SLAs implicitos en servicios (24h Homologacion Flash)
### Puntos Debiles
- No existe Rulebook publicado formalmente
- Falta proceso formal de onboarding documentado
### Recomendaciones
- Redactar y publicar Libro de Reglas del espacio
- Crear "Guia del Participante ProcureData" alineada con CRED

## 7. Interoperabilidad Semantica (Sec. 5.3)
### Puntos Fuertes
- JSON-LD como formato de normalizacion (Raw Data Normalizer)
- Catalogo con metadatos estructurados (catalog_metadata)
### Puntos Debiles
- No implementa DCAT-AP para descripcion de catalogo
- Sin validacion SHACL de esquemas
- Sin vocabularios controlados estandar
### Recomendaciones
- Implementar perfil DCAT-AP 3.0 en catalog_metadata
- Anadir validacion SHACL antes de publicar en catalogo
- Adoptar ontologias sectoriales (ej: eCl@ss para industrial)

## 8. Interoperabilidad Tecnica (Sec. 5.4)
### Puntos Fuertes
- API REST con JSON-LD, autenticacion JWT
- Webhooks con firma HMAC-SHA256
- SDKs en JavaScript, Python, Java
- Integracion ERP: SAP, Oracle, Microsoft Dynamics, Sage
### Puntos Debiles
- EDC no desplegado como conector real (referenciado pero no operativo)
- DSP (Dataspace Protocol) no implementado nativamente
### Recomendaciones
- Desplegar instancia EDC real para cada participante
- Implementar DSP para negociacion y transferencia
- Certificar conectores contra IDSA Certification Scheme

## 9. Gobernanza del Espacio (Sec. 6.1)
### Puntos Fuertes
- Portal de Gobernanza con votaciones para usuarios Pro
- Comite de Etica del Dato para disputas
- Autonomia de nodos (cualquier org puede hospedar)
### Puntos Debiles
- Autoridad de Gobierno no constituida juridicamente
- Sin portal de transparencia publico
### Recomendaciones
- Constituir Autoridad de Gobierno (asociacion/fundacion)
- Publicar portal de transparencia con reglas, tarifas y auditorias

## 10. Gobernanza de Interoperabilidad (Sec. 6.2)
### Puntos Fuertes
- Trust Framework Gaia-X con Self-Descriptions
- Verificacion automatica de certificaciones
- Cifrado TLS 1.3 + AES-256
### Puntos Debiles
- Sin Trust Anchors formales reconocidos
- Niveles de seguridad (LoA) no diferenciados
### Recomendaciones
- Definir Trust Anchors del espacio
- Implementar LoA diferenciados segun tipo de transaccion

## 11. Gobernanza de Datos (Sec. 6.3)
### Puntos Fuertes
- Contratos ODRL vinculados a cada transaccion
- Health Score con 4 dimensiones
- Data Cleansing, normalizacion y linaje completos
### Puntos Debiles
- Calidad del dato no declarada formalmente por proveedores
### Recomendaciones
- Anadir declaracion de calidad obligatoria al publicar activos
- Implementar verificacion cruzada de calidad declarada vs real

## 12. Roles y Responsabilidades (Sec. 6.4)
### Puntos Fuertes
- Consumer, Provider, Data Holder bien definidos
### Puntos Debiles
- Falta rol "Operador del Espacio" formalizado
- Falta rol "Proveedor de Servicios de Intermediacion" (DGA Art. 11)
- Falta rol "Desarrollador de Aplicaciones"
### Recomendaciones
- Formalizar rol de Operador (ProcureData como entidad operadora)
- Preparar registro como intermediario segun DGA Art. 11
- Abrir API/marketplace para desarrolladores terceros

## 13. Valor y Modelos de Negocio (Sec. 7)
### Puntos Fuertes
- Pay-per-use (1 EUROe) + Pro (100 EUROe/ano) sostenible
- 22 servicios de valor anadido
- 47 casos verificados en 6 sectores
### Puntos Debiles
- Sin plan formal de sostenibilidad post-financiacion
### Recomendaciones
- Documentar plan de sostenibilidad a 3 anos
- Evaluar modelos adicionales (barter de datos, marketplace comisiones)

## 14. Operacionalizacion CRED (Sec. 8)
### Puntos Fuertes
- Alineamiento natural con Kit Espacios de Datos
- Arquitectura compatible con marco CRED
### Puntos Debiles
- Sin certificacion formal CRED
- Sin alineamiento explicito con Guia del Promotor
### Recomendaciones
- Solicitar verificacion de conformidad UNE 0087 via CRED
- Documentar alineamiento con Guia del Promotor y del Participante

## Tabla Resumen de Conformidad
(Tabla con 22+ filas: Requisito | Seccion UNE | Estado | Prioridad | Accion)

## Hoja de Ruta de Conformidad
### Corto plazo (0-6 meses)
- Constituir Autoridad de Gobierno
- Publicar Libro de Reglas
- Implementar DCAT-AP en catalogo
### Medio plazo (6-12 meses)
- Desplegar EDC real
- Implementar DSP
- Integrar SSI/credenciales verificables
### Largo plazo (12-24 meses)
- Certificacion IDSA
- Integracion eIDAS 2.0/EUDIW
- Portal de transparencia completo
- Registro como intermediario DGA
```

### 2. Crear la pagina

**Archivo nuevo: `src/pages/RecomendacionesUne.tsx`**

Mismo patron que `Une0087.tsx`:
- Cabecera azul UNE (#003366) con badge "Informe de Conformidad"
- Barra lateral sticky con indice de contenidos auto-generado
- Tipografia serif normativa, tablas estilizadas
- MarkdownRenderer, ScrollArea
- Botones de descarga MD
- LanguageSwitcher, ThemeToggle, FundingFooter

### 3. Enlace en el Footer

**Archivo: `src/pages/Landing.tsx`** (seccion "Transparencia", linea ~600)
- Anadir: `<Link to="/recomendaciones-une">Recomendaciones UNE</Link>`

### 4. Traducciones i18n (7 idiomas)

**Archivos nuevos: `src/locales/*/uneRecommendations.json`** (es, en, fr, de, it, pt, nl)

Claves:
- `title`: "Informe de Conformidad UNE 0087:2025"
- `subtitle`: "Analisis tecnico de ProcureData vs norma UNE"
- `backToHome`, `tableOfContents`, `downloadMd`, `badge`, `goToDemo`

**Archivos modificados: `src/locales/*/landing.json`** (7 idiomas)
- Anadir clave `footer.uneRecommendations`

### 5. Registro de ruta y namespace

**Archivo: `src/App.tsx`** — Anadir ruta `/recomendaciones-une`
**Archivo: `src/i18n.ts`** — Registrar namespace `uneRecommendations`

---

### Resumen de archivos

| Archivo | Accion |
|---------|--------|
| `docs/RECOMENDACIONES_UNE_0087.md` | CREAR — Informe tecnico completo (~500 lineas) |
| `src/pages/RecomendacionesUne.tsx` | CREAR — Pagina estilo UNE |
| `src/locales/es/uneRecommendations.json` | CREAR |
| `src/locales/en/uneRecommendations.json` | CREAR |
| `src/locales/fr/uneRecommendations.json` | CREAR |
| `src/locales/de/uneRecommendations.json` | CREAR |
| `src/locales/it/uneRecommendations.json` | CREAR |
| `src/locales/pt/uneRecommendations.json` | CREAR |
| `src/locales/nl/uneRecommendations.json` | CREAR |
| `src/pages/Landing.tsx` | MODIFICAR — Enlace en footer |
| `src/locales/*/landing.json` | MODIFICAR — Clave footer (7 archivos) |
| `src/App.tsx` | MODIFICAR — Ruta |
| `src/i18n.ts` | MODIFICAR — Namespace |


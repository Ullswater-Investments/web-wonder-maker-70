

## Plan: Implementar Pasos de Cumplimiento Normativo UNE 0087:2025

Basado en el informe de conformidad existente (78% actual), este plan cubre los cambios que se pueden implementar directamente en la plataforma para avanzar hacia el cumplimiento. Se organiza en 4 entregables concretos.

---

### Entregable 1: Libro de Reglas (Rulebook) del Espacio de Datos

Crear un documento formal y una pagina dedicada con las reglas del espacio ProcureData.

**Archivo nuevo: `docs/LIBRO_DE_REGLAS_PROCUREDATA.md`**

Contenido estructurado segun el marco IDSA Rulebook:
- Capitulo 1: Objeto y ambito de aplicacion
- Capitulo 2: Requisitos de adhesion (KYB, DID, documentacion)
- Capitulo 3: Derechos y obligaciones de los participantes (Consumer, Provider, Holder)
- Capitulo 4: Politicas de uso de datos (ODRL, permisos, prohibiciones, deberes)
- Capitulo 5: Regimen sancionador (advertencias, suspension, expulsion)
- Capitulo 6: Resolucion de conflictos (Comite de Etica, mediacion, arbitraje)
- Capitulo 7: Politica de salida y portabilidad de datos
- Capitulo 8: SLAs con KPIs medibles (disponibilidad 99.5%, respuesta 24h, calidad minima Health Score 70)
- Capitulo 9: Tarifas vigentes (1 EUROe/transaccion, 100 EUROe/ano Pro)
- Capitulo 10: Modificaciones y versionado del Libro de Reglas

**Archivo nuevo: `src/pages/LibroDeReglas.tsx`**

Pagina con el mismo patron de diseno UNE que `RecomendacionesUne.tsx`:
- Cabecera azul UNE (#003366), sidebar ToC sticky, tipografia serif
- MarkdownRenderer para el contenido
- Boton de descarga MD
- Enlace desde footer seccion "Transparencia"

**Traducciones:** `src/locales/*/rulebook.json` (7 idiomas)
**Ruta:** `/libro-de-reglas` en `App.tsx`
**Footer:** Anadir enlace "Libro de Reglas" en seccion Transparencia

---

### Entregable 2: Glosario UNE 0087 Mapeado

Crear un glosario que mapee cada termino de la norma UNE 0087 a su implementacion concreta en ProcureData.

**Archivo nuevo: `docs/GLOSARIO_UNE_0087.md`**

Tabla con ~30 terminos clave:

| Termino UNE | Definicion UNE | Implementacion ProcureData | Estado |
|---|---|---|---|
| Espacio de Datos | Infraestructura descentralizada... | Plataforma federada con EDC + Pontus-X | Cumple |
| Producto de Datos | Conjunto con metadatos, politicas... | `data_products` + `data_assets` + `data_policies` | Cumple |
| Titular de Datos | Entidad custodia... | Rol `data_holder` en `organizations` | Cumple |
| Conector | Componente software estandarizado... | EDC referenciado + API REST | Parcial |
| Contrato Inteligente | Acuerdo digital ejecutable... | ODRL JSON-LD + Smart Contract Pontus-X | Cumple |
| Vocabulario de Datos | Ontologia reutilizable... | JSON-LD (Raw Data Normalizer) | Parcial |
| Self-Description | Descripcion Gaia-X... | Trust Framework Gaia-X integrado | Cumple |
| (etc. ~23 terminos mas)

**Archivo nuevo: `src/pages/GlosarioUne.tsx`**

Pagina con diseno UNE, mismo patron, con busqueda por termino.

**Traducciones:** `src/locales/*/glossaryUne.json` (7 idiomas)
**Ruta:** `/glosario-une` en `App.tsx`
**Footer:** Anadir enlace en seccion Transparencia

---

### Entregable 3: Portal de Transparencia

Crear una pagina publica con metricas, tarifas, reglas y documentos de gobernanza del espacio.

**Archivo nuevo: `src/pages/PortalTransparencia.tsx`**

Secciones de la pagina:
- **Metricas del Espacio**: Participantes activos, transacciones procesadas, sectores cubiertos (datos de demo/sinteticos)
- **Tarifas Vigentes**: Tabla con precios (1 EUROe/tx, 100 EUROe/ano Pro, servicios adicionales)
- **Documentos de Gobernanza**: Enlaces a Libro de Reglas, Contrato de Adhesion, Politica ODRL, Informe UNE
- **Autoridad de Gobierno**: Descripcion de la estructura de gobierno (composicion, funciones, proceso de decision)
- **Informes y Auditorias**: Seccion preparada para publicar informes periodicos
- **Canal de Comunicacion**: Enlace al formulario de contacto/feedback

Diseno: Cards con iconos, estadisticas animadas con Framer Motion, paleta azul UNE.

**Traducciones:** `src/locales/*/transparency.json` (7 idiomas)
**Ruta:** `/transparencia` en `App.tsx`
**Footer:** Actualizar enlace existente de "Transparencia" para apuntar a esta pagina

---

### Entregable 4: Declaracion de Conformidad UNE 0087

Anadir una seccion visible en la pagina de Recomendaciones UNE y en la Landing con el estado de conformidad.

**Modificar: `src/pages/RecomendacionesUne.tsx`**

Anadir banner superior con:
- Indicador visual de conformidad: 78% (barra de progreso circular)
- Badge: "14 Cumple / 7 Parcial / 1 Pendiente"
- Enlace a los documentos creados (Libro de Reglas, Glosario, Portal de Transparencia)

**Modificar: `src/pages/Landing.tsx`**

Anadir en la seccion de badges/credenciales del hero o cerca del footer:
- Pequeno badge "UNE 0087:2025 · 78% Conformidad" con enlace a `/recomendaciones-une`

---

### Resumen de archivos

| Archivo | Accion |
|---------|--------|
| `docs/LIBRO_DE_REGLAS_PROCUREDATA.md` | CREAR — Rulebook completo |
| `src/pages/LibroDeReglas.tsx` | CREAR — Pagina estilo UNE |
| `src/locales/*/rulebook.json` (7) | CREAR — Traducciones |
| `docs/GLOSARIO_UNE_0087.md` | CREAR — Glosario mapeado |
| `src/pages/GlosarioUne.tsx` | CREAR — Pagina con busqueda |
| `src/locales/*/glossaryUne.json` (7) | CREAR — Traducciones |
| `src/pages/PortalTransparencia.tsx` | CREAR — Portal publico |
| `src/locales/*/transparency.json` (7) | CREAR — Traducciones |
| `src/pages/RecomendacionesUne.tsx` | MODIFICAR — Banner de conformidad |
| `src/pages/Landing.tsx` | MODIFICAR — Badge + enlaces footer |
| `src/locales/*/landing.json` (7) | MODIFICAR — Claves footer nuevas |
| `src/App.tsx` | MODIFICAR — 3 rutas nuevas |
| `src/i18n.ts` | MODIFICAR — 3 namespaces nuevos |

### Secuencia de implementacion

Dado el volumen (30+ archivos), se recomienda implementar en 4 mensajes consecutivos, uno por entregable.


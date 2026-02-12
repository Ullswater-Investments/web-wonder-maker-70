

## Plan: Boton "UNE 0087:2025" y Pagina con Documento Completo

Nuevo boton junto al "Ver Whitepaper" en la Landing que enlaza a una pagina con el contenido literal del documento PDF adjunto, con diseno inspirado en UNE (Asociacion Espanola de Normalizacion).

---

### 1. Anadir el boton en la Landing

**Archivo: `src/pages/Landing.tsx`** (linea ~467)
- Insertar un tercer boton junto a "Ver Whitepaper":
  - Texto: `UNE 0087:2025`
  - Variante: `brand` (naranja corporativo)
  - Icono: `Scale` (representando normativa)
  - Enlace a `/une-0087`

### 2. Crear el documento Markdown

**Archivo nuevo: `docs/UNE_0087_2025.md`**
- Contenido literal completo del PDF (18 paginas), respetando palabra por palabra:
  - Seccion 1: Introduccion - La Arquitectura de la Soberania Digital
  - Seccion 2: Fundamentos Normativos (Secciones 1, 2 y 3 de la norma)
  - Seccion 3: Concepto y Proposito - La Soberania Digital como Eje
  - Seccion 4: Interoperabilidad - Los Cuatro Pilares
  - Seccion 5: Gobernanza - El Sistema Nervioso del Espacio de Datos
  - Seccion 6: Valor de los Datos y Modelos de Negocio
  - Seccion 7: Impactos, Desafios y Futuro
  - Seccion 8: Operacionalizacion en Espana - CRED y Kit Digital
  - Seccion 9: Conclusiones y Recomendaciones Estrategicas
  - Tablas: Matriz de Roles, Matriz de Valor Estrategico por Stakeholder
  - Obras citadas completas (20 referencias)

### 3. Crear la pagina UNE 0087:2025

**Archivo nuevo: `src/pages/Une0087.tsx`**

Diseno inspirado en UNE (Asociacion Espanola de Normalizacion):
- **Cabecera oficial**: Franja azul UNE (#003366) con logo "UNE" simulado, numero de norma y fecha
- **Barra lateral**: Indice de contenidos (Table of Contents) generado dinamicamente, sticky, estilo documento normativo
- **Cuerpo**: Renderizado Markdown con tipografia serif para el texto normativo, tablas estilizadas
- **Paleta de colores UNE**: Azul oscuro (#003366), blanco, gris claro, acentos rojos para avisos
- **Header sticky** con boton "Volver", LanguageSwitcher y ThemeToggle
- **Footer** con metadatos del documento (fecha, version, fuentes)
- Patron existente de Whitepaper.tsx con ScrollArea, ToC navegable y MarkdownRenderer

### 4. Traducciones i18n (7 idiomas)

**Archivos nuevos: `src/locales/*/une0087.json`** (es, en, fr, de, it, pt, nl)

Claves minimas para la UI de la pagina:
- `title`: "UNE 0087:2025"
- `subtitle`: "Definicion y caracterizacion de los espacios de datos" (traducido)
- `backToHome`: "Volver al Inicio"
- `tableOfContents`: "Indice"
- `downloadPdf`: "Descargar PDF"
- `badge`: "Especificacion UNE"
- `date`: "2025"
- `publisher`: "Asociacion Espanola de Normalizacion"

### 5. Anadir traducciones al boton en Landing

**Archivos: `src/locales/*/landing.json`** (7 idiomas)
- Anadir clave `viewUne0087`: "UNE 0087:2025" (igual en todos los idiomas, es un nombre propio)

### 6. Registro de ruta y namespace

**Archivo: `src/App.tsx`**
- Importar `Une0087` y anadir ruta: `<Route path="/une-0087" element={<Une0087 />} />`

**Archivo: `src/i18n.ts`**
- Importar los 7 archivos `une0087.json` y registrar el namespace `une0087` en cada idioma

---

### Resumen de archivos

| Archivo | Accion |
|---------|--------|
| `docs/UNE_0087_2025.md` | CREAR - Documento completo literal |
| `src/pages/Une0087.tsx` | CREAR - Pagina estilo UNE |
| `src/locales/es/une0087.json` | CREAR |
| `src/locales/en/une0087.json` | CREAR |
| `src/locales/fr/une0087.json` | CREAR |
| `src/locales/de/une0087.json` | CREAR |
| `src/locales/it/une0087.json` | CREAR |
| `src/locales/pt/une0087.json` | CREAR |
| `src/locales/nl/une0087.json` | CREAR |
| `src/pages/Landing.tsx` | MODIFICAR - Anadir boton UNE 0087:2025 |
| `src/locales/*/landing.json` | MODIFICAR - Anadir clave viewUne0087 (7 idiomas) |
| `src/App.tsx` | MODIFICAR - Anadir ruta /une-0087 |
| `src/i18n.ts` | MODIFICAR - Registrar namespace une0087 |


# Boton Global "Componentes Tecnologicos Espacios de Datos" con Presentacion Integrada

## Resumen

Crear un boton flotante global visible en todas las paginas del portal que enlace a una presentacion interactiva de 30 diapositivas sobre Espacios de Datos Federados, replicada directamente dentro de Procuredata a partir del codigo del repositorio GitHub `v0-federated-data-space-presentation`.

**Nota importante**: La presentacion en v0.app requiere autenticacion y no tiene URL publica desplegada. Por eso, la mejor solucion es integrar la presentacion directamente dentro del portal Procuredata como una pagina propia, garantizando acceso sin dependencias externas.

## Que vera el usuario

- Un boton flotante con icono y texto "Componentes Tecnologicos Espacios de Datos" visible en todas las paginas (tanto autenticadas como publicas)
- Al hacer clic, se abre la presentacion interactiva de 30 slides con navegacion por teclado y botones
- La presentacion cubre: Gaia-X, DeltaDAO, Pontus-X, conectores, identidad, politicas ODRL, y la evolucion Web3
- Estilo visual Horizon Europe con infografias SVG para cada diapositiva
- Navegacion por secciones: Introduccion, Gaia-X Tradicional, Transicion, Pontus-X/DeltaDAO, Resumen

## Archivos a crear

### 1. `src/lib/slides-data.ts`
- Datos de las 30 diapositivas portados desde el repositorio GitHub
- Interfaz SlideData con: id, section, sectionLabel, title, subtitle, bullets, analogy, infographicType
- 5 secciones: intro (4 slides), gaiax (10 slides), transition (2 slides), pontusx (10 slides), summary (4 slides)

### 2. `src/components/presentation/SlideInfographic.tsx`
- Componente de infografias SVG portado desde el repositorio
- 11 tipos de infografia: title-cover, overview-diagram, component-detail, analogy-visual, flow-diagram, comparison-table, architecture-diagram, process-steps, icon-grid, bridge-slide, summary-slide
- Iconos SVG inline (sin dependencias externas)

### 3. `src/components/presentation/Presentation.tsx`
- Componente principal de la presentacion portado y adaptado de Next.js a React
- Navegacion con flechas de teclado y botones
- Barra de progreso por seccion
- Panel lateral de navegacion por secciones
- Indicador de slide actual / total
- Eliminar directivas "use client" (Next.js) y adaptar imports

### 4. `src/components/DataSpaceButton.tsx`
- Boton flotante global con icono Layers/Network y texto
- Posicionado en la esquina inferior izquierda (para no colisionar con AIConcierge que esta en la derecha)
- Estilo premium con gradiente azul, animacion pulse sutil
- Al hacer clic, navega a `/componentes-espacios-datos`
- Tooltip con descripcion breve
- Responsive: en movil muestra solo icono, en desktop muestra icono + texto

### 5. `src/pages/ComponentesEspaciosDatos.tsx`
- Pagina wrapper que renderiza el componente Presentation
- Header con boton de volver atras
- Metadatos y titulo de pagina

## Archivos a modificar

### 6. `src/App.tsx`
- Importar ComponentesEspaciosDatos
- Anadir ruta `/componentes-espacios-datos` como ruta publica (accesible sin login)

### 7. `src/components/AppLayout.tsx`
- Importar y renderizar DataSpaceButton junto al AIConcierge (para usuarios autenticados)

### 8. `src/pages/Landing.tsx` (o layout publico equivalente)
- Anadir DataSpaceButton para que tambien sea visible en paginas publicas

## Detalles tecnicos

### Adaptacion de Next.js a React (Vite)
- Eliminar `"use client"` de todos los componentes
- Cambiar `@/lib/utils` y `@/components/` imports para coincidir con la estructura existente de Procuredata
- La funcion `cn()` ya existe en el proyecto (`src/lib/utils`)
- Usar `react-router-dom` para navegacion en lugar de Next.js router

### Posicionamiento del boton flotante
- `fixed bottom-6 left-6 z-50` para no interferir con AIConcierge (bottom-right)
- Animacion de entrada con framer-motion
- Sombra y hover effects para visibilidad

### Estructura de la presentacion (30 slides)
1-4: Introduccion - Que es un Espacio de Datos, Principios, Ecosistema
5-14: Gaia-X Tradicional - Identity Hub, Catalogue, Contract Negotiator, Transfer Process, Policy Engine, Clearing House, Connector, Broker, Vocabulary, App Store
15-16: Transicion - Puente entre Gaia-X tradicional y DeltaDAO
17-26: Pontus-X/DeltaDAO - Ocean Protocol, Smart Contracts, Compute-to-Data, Self-Description Hub, Portal, Nautilus SDK, GXDCH, Subgraph, Tokenomics, EUROe
27-30: Resumen - Comparativa, Beneficios, Futuro, Llamada a la accion

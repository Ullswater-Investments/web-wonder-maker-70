

## Revision: Integrar las 10 Fases de Desarrollo en la Pagina Principal Real

### Problema Detectado
Los componentes del roadmap (`RoadmapPhases`, `FederatedNetworkDiagram`, `FederatedAgentChat`) se integraron en `src/pages/Index.tsx`, pero la ruta `/` renderiza `src/pages/Landing.tsx`. Por tanto, las fases no son visibles en la pagina principal.

### Plan de Correccion

#### 1. Integrar RoadmapPhases en Landing.tsx
- Importar el componente `RoadmapPhases` en `Landing.tsx`
- Colocarlo despues de la seccion "Demo Hub" y antes de "Modelos de Negocio", para dar visibilidad al roadmap tecnico sin romper el flujo actual

#### 2. Integrar FederatedNetworkDiagram en el Hero de Landing.tsx
- Convertir el hero actual (centrado, solo texto) en un layout de dos columnas en desktop:
  - Columna izquierda: titulo, descripcion y botones (contenido actual)
  - Columna derecha: diagrama de red federada animado
- En movil se mantiene apilado verticalmente

#### 3. Integrar FederatedAgentChat como widget flotante
- Anadir el componente `FederatedAgentChat` al final de Landing.tsx como widget flotante, disponible en toda la pagina

#### 4. Revisar las 10 fases actuales
Las fases definidas actualmente en `RoadmapPhases.tsx` son:

| Fase | Nombre | Estado |
|------|--------|--------|
| F1 | Fundamentos (Auth, RBAC, RLS) | Completada |
| F2 | Catalogo de Datos | Completada |
| F3 | Aprobaciones 3-Actores | Completada |
| F4 | Politicas ODRL | Completada |
| F5 | Web3 y DIDs | Completada |
| F6 | IA Conversacional (ARIA) | Completada |
| F7 | Conectores ERP | Pendiente |
| F8 | Red Federada Gaia-X | Pendiente |
| F9 | Analytics y BI | Pendiente |
| F10 | Ecosistema Multi-Sector | Pendiente |

Estas fases reflejan correctamente la evolucion incremental de la plataforma segun la arquitectura documentada en `entrenamientoIA/14_DEVELOPER_ARCHITECTURE.md`. No requieren cambios en contenido.

### Archivos a Modificar
- `src/pages/Landing.tsx` - Importar e integrar los 3 componentes nuevos (RoadmapPhases, FederatedNetworkDiagram, FederatedAgentChat)

### Archivos Sin Cambios
- `src/components/landing/RoadmapPhases.tsx` - Ya correcto
- `src/components/landing/FederatedNetworkDiagram.tsx` - Ya correcto
- `src/components/landing/FederatedAgentChat.tsx` - Ya correcto

### Resultado Esperado
- La pagina principal (`/`) mostrara el diagrama de red federada en el hero
- Las 10 fases del roadmap seran visibles como seccion de la pagina principal
- El chat de agente IA estara disponible como widget flotante

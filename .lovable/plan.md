

# Plan: Rebranding Completo a Nueva Identidad Visual Procuredata

Cambio integral del sistema de diseno de la plataforma, pasando del esquema naranja/ambar actual a la nueva paleta azul Procuredata con tipografia DM Sans.

---

## Alcance del Cambio

El rebranding afecta a 3 capas principales:

| Capa | Archivos | Cambio |
|------|----------|--------|
| Design Tokens (CSS Variables) | `src/index.css` | Todas las variables `--primary`, `--accent`, `--ring`, gradientes, charts |
| Componentes UI con colores hardcoded | `button.tsx`, `badge.tsx`, `chart-skeleton.tsx`, `ActivityFeed.tsx`, `caseFlowConfigs.ts` | Reemplazar `hsl(32 ...)` por nuevos valores azules |
| Assets y Tipografia | `index.html`, `src/assets/`, `ProcuredataLogo.tsx` | Nuevos logos, fuente DM Sans, favicon |

---

## Nueva Paleta de Colores

Conversion de los colores de marca proporcionados a HSL:

| Token | Hex | HSL | Uso |
|-------|-----|-----|-----|
| Primary Blue | #4CABFF | `209 100% 65%` | Botones, enlaces, iconos activos |
| Dark Navy | #1C2B40 | `213 37% 18%` | Texto headings, sidebar, fondos oscuros |
| Dark BG (mode dark) | #233144 | `211 32% 20%` | Background en modo oscuro |
| Surface Light | #F8FAFC | `210 40% 98%` | Fondos de seccion |

---

## Entregable 1: Logos y Tipografia

**Archivos:**
- Copiar `Positivo.png` a `src/assets/procuredata-logo.png` (reemplaza el actual)
- Copiar `POSITIVO_BY_AP.png` a `src/assets/procuredata-logo-full.png`
- Copiar `Transparente.png` a `src/assets/procuredata-logo-transparent.png`
- Copiar `Negativo.png` a `src/assets/procuredata-logo-dark.png`

**index.html:**
- Cambiar Google Fonts de Poppins a DM Sans (400, 500, 600, 700)

**src/index.css:**
- Cambiar todas las referencias `font-family: 'Poppins'` a `'DM Sans'`

---

## Entregable 2: Design Tokens (CSS Variables)

**src/index.css - modo claro (:root):**

```text
Antes (naranja)              -->  Despues (azul)
--primary: 32 94% 44%        -->  --primary: 209 100% 65%
--primary-foreground: 0 0% 100%  -->  (se mantiene blanco)
--accent: 32 80% 92%         -->  --accent: 209 80% 92%
--accent-foreground: 32 94% 35%  -->  --accent-foreground: 209 100% 40%
--ring: 32 94% 54%           -->  --ring: 209 100% 65%
--sidebar-primary: 32 94% 44%   -->  --sidebar-primary: 209 100% 65%
--sidebar-accent-fg: 32 94% 35% -->  --sidebar-accent-foreground: 209 100% 40%
--sidebar-ring: 32 94% 54%      -->  --sidebar-ring: 209 100% 65%
```

Charts actualizados a paleta azul:
```text
--chart-1: 209 100% 65%  (azul primario)
--chart-2: 213 37% 30%   (navy)
--chart-3: 209 80% 80%   (azul claro)
--chart-4: 213 25% 55%   (gris azulado)
--chart-5: 209 60% 50%   (azul medio)
--chart-6: 213 37% 18%   (navy oscuro)
```

Gradientes:
```text
--gradient-primary: navy (#1C2B40) --> azul (#4CABFF)
```

**src/index.css - modo oscuro (.dark):**
- Mismo patron: reemplazar hsl(32...) por hsl(209...)
- Background oscuro: usar `211 32% 20%` (#233144) en lugar del actual

---

## Entregable 3: Componentes UI con Colores Hardcoded

**src/components/ui/button.tsx:**
- `premium`: gradiente de navy a azul (en vez de gris a naranja)
- `hero`: gradiente navy a azul con sombra azul
- `brand`: fondo azul solido #4CABFF

**src/components/ui/badge.tsx:**
- `brand`, `brandOutline`, `brandSubtle`: cambiar hsl(32...) a hsl(209...)

**src/components/ui/chart-skeleton.tsx:**
- Reemplazar todas las referencias `hsl(32 94% 54%)` por `hsl(209 100% 65%)`

**src/components/ActivityFeed.tsx:**
- Cambiar colores de acciones de naranja a azul

**src/components/success-stories/caseFlowConfigs.ts:**
- Actualizar nodos que usan `hsl(32, 94%, 54%)` al nuevo azul

---

## Entregable 4: Clases CSS de Gradientes

**src/index.css:**
- `.procuredata-gradient`: de gris-naranja a navy-azul
- `.chart-skeleton-shimmer`: de naranja a azul
- `.itbid-font`, `.itbid-title`, etc.: cambiar Poppins a DM Sans

---

## Entregable 5: ProcuredataLogo Component

**src/components/ProcuredataLogo.tsx y src/modules/nodos-sectoriales/components/ProcuredataLogo.tsx:**
- Anadir soporte para modo claro/oscuro usando los nuevos logos
- Importar logo dark para sidebar/fondos oscuros

---

## Seccion Tecnica

### Archivos a modificar
1. `index.html` - Google Fonts (Poppins -> DM Sans)
2. `src/index.css` - ~50 lineas de variables CSS + clases de gradiente
3. `src/components/ui/button.tsx` - 3 variantes (premium, hero, brand)
4. `src/components/ui/badge.tsx` - 3 variantes (brand, brandOutline, brandSubtle)
5. `src/components/ui/chart-skeleton.tsx` - 5 referencias de color
6. `src/components/ActivityFeed.tsx` - 2 colores de accion
7. `src/components/success-stories/caseFlowConfigs.ts` - 3 nodos
8. `src/components/ProcuredataLogo.tsx` - imports de logos
9. `src/modules/nodos-sectoriales/components/ProcuredataLogo.tsx` - imports de logos

### Assets a copiar
- 4 variantes de logo desde user-uploads a src/assets

### Riesgo bajo
Los cambios son puramente cosmeticos (CSS + assets). No afectan logica de negocio, base de datos ni funcionalidad.


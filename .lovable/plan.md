

# Corregir precio 190€ a 250€ en toda la aplicación

## Archivos pendientes de actualizar

Se han encontrado **3 archivos** adicionales que aún contienen el precio antiguo de 190€ y/o 1.140€:

### 1. `src/pages/PropuestaKitEspacioDatos.tsx`
- Línea 92: `190€/mes` --> `250€/mes`
- Línea 93: `6 meses x 190€ = 1.140€ + IVA` --> `6 meses x 250€ = 1.500€ + IVA`

### 2. `src/pages/CondicionesKitEspacioDatos.tsx` (5 cambios)
- Línea 99: `1.140€ + IVA` --> `1.500€ + IVA`
- Línea 100: `190€/mes x 6 meses` --> `250€/mes x 6 meses`
- Línea 109: `190€/mes` --> `250€/mes`
- Línea 132: `1.140€ + IVA` --> `1.500€ + IVA`
- Línea 152: `1.140€` --> `1.500€`
- Línea 182: `190€` --> `250€`
- Línea 220: `190€/mes` --> `250€/mes`

### 3. `src/pages/ContratoKitEspacioDatos.tsx` (2 cambios)
- Línea 13: `1.140€ + IVA (190€/mes x 6 meses)` --> `1.500€ + IVA (250€/mes x 6 meses)`
- Línea 14: `6 cuotas mensuales de 190€ + IVA` --> `6 cuotas mensuales de 250€ + IVA`

## Archivos ya corregidos (no requieren cambios)
- `src/components/home/KitDatosCampaignBanner.tsx`
- `src/locales/es/landing.json` (y todos los idiomas)
- `src/pages/GuiaKitEspacioDatos.tsx`
- `src/components/legal/ContractContent.tsx`
- `src/components/legal/AcceptanceActContent.tsx`

## Instancias de "190" que NO son precios (no tocar)
- Imports de Deno (`std@0.190.0`) en edge functions
- Coordenadas de PDF (`doc.line(margin, 45, 190, 45)`)
- Ancho de componentes UI (`w-[190px]`)
- Datos de catálogo (E190 avión, 190+ países)


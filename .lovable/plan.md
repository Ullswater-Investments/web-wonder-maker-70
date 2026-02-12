
# Plan: Reemplazar texto "PROCUREDATA" por logo en el hero de Landing

## Cambio

En la linea 342-345 de `src/pages/Landing.tsx`, el `h1` actualmente muestra el texto "PROCUREDATA" seguido del tagline. El cambio consiste en:

1. **Copiar** el logo subido (`POSITIVO_BY_AP-2.png`) a `src/assets/procuredata-hero-logo.png`
2. **Reemplazar** `{t('brand')}` por una imagen del logo centrada
3. **Mantener** el tagline (`{t('tagline')}`) debajo del logo

### Antes:
```text
PROCUREDATA
Espacio de Datos para la Funcion de Compras
```

### Despues:
```text
[Logo imagen Procuredata + Powered by Agile Procurement]
Espacio de Datos para la Funcion de Compras
```

## Seccion Tecnica

**Archivo:** `src/pages/Landing.tsx` (lineas 342-345)

- Importar el nuevo asset: `import procuredataHeroLogo from "@/assets/procuredata-hero-logo.png"`
- Reemplazar el `h1` para mostrar la imagen centrada (altura ~60px en mobile, ~80px en desktop) seguida del tagline en un `span` debajo
- Anadir soporte dark mode con el logo dark existente (`procuredata-logo-dark.png`)

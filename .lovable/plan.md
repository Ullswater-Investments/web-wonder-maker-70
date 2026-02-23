

# Ampliar textos, botones de navegacion y añadir boton "Volver Home" en la presentacion

## Resumen

Mejorar la legibilidad y usabilidad de la presentacion de slides ampliando todos los tamaños de texto, agrandando los botones "Anterior" y "Siguiente", y añadiendo un boton "Volver Home" para que el usuario pueda regresar a la pagina principal.

## Cambios en `src/components/presentation/Presentation.tsx`

### 1. Ampliar textos en SlideView (lineas 162-203)

- **Badge de seccion**: de `text-[10px]` a `text-sm`
- **Contador de slide**: de `text-xs` a `text-base`
- **Titulo h1**: de `text-xl sm:text-2xl lg:text-3xl` a `text-2xl sm:text-3xl lg:text-5xl`
- **Subtitulo**: de `text-sm` a `text-lg`
- **Bullets**: de `text-sm` a `text-base lg:text-lg`
- **Bullet dots**: de `w-2 h-2` a `w-3 h-3`

### 2. Agrandar botones "Anterior" y "Siguiente" (lineas 329-368)

- Padding: de `px-3 py-1.5` a `px-6 py-3`
- Texto: de `text-sm` a `text-base font-semibold`
- Iconos chevron: de `w-4 h-4` a `w-6 h-6`
- Añadir fondo visible: `bg-primary/10 hover:bg-primary/20 rounded-xl`
- Mostrar texto "Anterior"/"Siguiente" siempre (quitar `hidden sm:inline`)

### 3. Añadir boton "Volver Home" en el header (linea 267-316)

- Añadir un boton con icono de flecha izquierda y texto "Volver Home" en la zona izquierda del header
- Al hacer clic, navega a `/` usando `useNavigate` de react-router-dom
- Estilo: boton visible con borde, tamaño mediano, icono + texto

### 4. Ampliar textos en el header

- Titulo "COMPONENTES TECNOLOGICOS": de `text-xs` a `text-sm`
- Subtitulo "Espacios de Datos Federados": de `text-[10px]` a `text-xs`

### 5. Ampliar footer con mas espacio

- Padding del footer: de `py-3` a `py-4`
- Indicadores de progreso (dots): de `w-1.5 h-1.5` / `w-3 h-3` a `w-2 h-2` / `w-4 h-4`

## Cambios en `src/pages/ComponentesEspaciosDatos.tsx`

- Eliminar el boton "Volver" overlay redundante ya que el header de la presentacion tendra su propio boton "Volver Home"

## Archivos afectados

1. `src/components/presentation/Presentation.tsx` - Todos los cambios de tamaño y nuevo boton
2. `src/pages/ComponentesEspaciosDatos.tsx` - Simplificar (quitar boton overlay duplicado)


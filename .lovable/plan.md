

# Componente DatasetUploader - Drag & Drop para subida a IPFS (Pinata)

## Resumen

Crear un componente reutilizable `DatasetUploader.tsx` con interfaz de arrastrar y soltar para subir datasets, con simulacion de subida a IPFS/Pinata, y una pagina dedicada accesible desde `/dashboard/publish-ipfs`.

## Componente: `src/components/dataset/DatasetUploader.tsx`

### Zona de Drop
- Area amplia (`min-h-[300px]`) con borde punteado (`border-2 border-dashed border-border rounded-xl`)
- Efecto visual al arrastrar archivo encima (`bg-accent/50`)
- Icono `UploadCloud` de lucide-react (w-12 h-12, text-muted-foreground)
- Texto principal: "Arrastra tu dataset aqui o haz clic para explorar"
- Texto secundario: "Soporta CSV, JSON, PDF (Max. 50MB)"
- Input file oculto activado al hacer clic en la zona

### Estado: Archivo Seleccionado
- Oculta la zona de drop cuando hay archivo
- Muestra una `Card` con:
  - Icono `FileText`
  - Nombre del archivo (con `truncate`)
  - Tamano formateado (KB/MB)
  - Boton fantasma con `Trash2` (destructive) para cancelar

### Barra de Progreso y Subida
- Boton ancho: "Subir a IPFS (Pinata)" con gradiente `procuredata-gradient` o clase `variant="premium"`
- Al hacer clic:
  - Deshabilita el boton
  - Muestra `<Progress />` de shadcn que avanza 0-100% en 3 segundos
  - Texto cambia a "Encriptando y subiendo..."
- Al completar: toast de exito + muestra CID de prueba (`QmTestHash123...`)

### Logica
- `useState` para: `file`, `progress`, `isUploading`, `uploadedCID`
- Funcion asincrona `uploadToIPFS(file: File)` con simulacion via `setInterval`
- Comentario claro: `// TODO: Reemplazar con llamada real Axios a NestJS Pinata API`
- Eventos: `onDragOver`, `onDragLeave`, `onDrop`, `onChange` del input oculto
- Validacion de tamano maximo (50MB) y tipos aceptados (.csv, .json, .pdf)

## Cambios en archivos

### 1. Nuevo: `src/components/dataset/DatasetUploader.tsx`
- Componente completo con toda la logica descrita arriba
- Usa: `Card`, `CardContent`, `Button`, `Progress` de shadcn/ui
- Usa: `toast` de sonner para notificaciones
- Usa: `UploadCloud`, `FileText`, `Trash2`, `CheckCircle2` de lucide-react
- Usa variables CSS del tema (modo claro/oscuro compatible)

### 2. Nuevo: `src/pages/dashboard/UploadDatasetIPFS.tsx`
- Pagina wrapper que importa `DatasetUploader`
- Encabezado con titulo "Subir Dataset a IPFS" y boton de volver
- Descripcion del proceso
- Envuelta en el layout protegido existente

### 3. Modificar: `src/App.tsx`
- Importar `UploadDatasetIPFS`
- Añadir ruta `/dashboard/upload-ipfs` dentro de las rutas protegidas (junto a `/dashboard/publish`)

## Detalles tecnicos

- No se instalan dependencias nuevas (todo con APIs nativas del navegador: `DragEvent`, `File API`)
- El componente es exportable y reutilizable: puede integrarse en `PublishDataset.tsx` como un paso adicional
- La funcion `uploadToIPFS` esta preparada para ser reemplazada por una llamada real a `axios.post('/api/pinata/upload', formData)` desde Cursor
- Formato de tamano: funcion helper que convierte bytes a KB/MB automaticamente

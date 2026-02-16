

# Fase 5 -- Panel de Administracion y Operativa Pontus-X

## Analisis del Estado Actual

Tras revisar exhaustivamente el codigo existente, la gran mayoria de las funcionalidades del Bloque 5 ya estan implementadas:

- Dashboard Admin: KPIs, BarChart por estado, PieChart por categoria -- todo operativo
- chartTheme.ts y transactionStatusHelper.ts -- completos y en uso
- AdminSidebar con 6 modulos y enlace "Volver al Portal" -- correcto
- AdminProtectedRoute con is_data_space_owner -- funcional
- AdminOrganizations con wallet_address + boton de copiado rapido -- implementado
- RequestWizard Paso 4 (Revision de Gobernanza) con permisos/prohibiciones/obligaciones y timeout -- completo
- Tabla comparativa con fila "Tipo de Datos" (Produccion/Sintetico) -- presente

## Cambios Pendientes (3 tareas concretas)

### 1. Filtro de Seguridad en Ficha Tecnica (`DataView.tsx`)

**Problema**: La funcion `handleDownloadTechSheet` genera el JSON pero NO aplica un filtro de campos sensibles. Si `custom_metadata` contuviera `api_url`, `credentials` o `headers`, estos se filtrarian parcialmente por omision pero no de forma sistematica.

**Solucion**: Crear una constante `SENSITIVE_FIELDS` y una funcion `sanitizeForExport()` que elimine recursivamente campos peligrosos del JSON exportado. Aplicar este filtro antes de generar el blob de descarga.

Campos a excluir:
- `api_url`, `credentials`, `headers`, `auth_token`, `api_key`, `endpoint_url`, `connection_string`

Se limpiaran tanto a nivel raiz como dentro de subobjetos `access_policy` y `connection`.

### 2. Filas adicionales en Tabla Comparativa (`Catalog.tsx`)

**Problema**: La tabla de comparacion carece de las filas "Duracion del Acceso" y "Version", documentadas en el Bloque 5.

**Solucion**: Anadir dos `TableRow` adicionales al dialog de comparacion:
- **Duracion del Acceso**: extraido de `custom_metadata.access_policy.access_timeout_days` (fallback: "90 dias")
- **Version**: extraido de `data_products.version` (fallback: "1.0")

Esto requiere ampliar la query del catalogo para incluir `version` del producto y `custom_metadata` del asset.

### 3. Etiquetas Amigables en Tabla Comparativa (`Catalog.tsx`)

**Problema**: Las cabeceras de la tabla comparativa usan claves i18n genericas. El Bloque 5 especifica etiquetas amigables en espanol como mapa explicito.

**Solucion**: Actualizar las etiquetas de las filas existentes para usar el mapeo amigable documentado (Categoria, Tipo de Datos, Modelo de Precio, etc.), manteniendo compatibilidad con i18n mediante fallbacks.

---

## Detalle Tecnico

### Archivo 1: `src/pages/DataView.tsx`

Lineas afectadas: funcion `handleDownloadTechSheet` (~lineas 163-193).

Se anadira al inicio del archivo:

```typescript
const SENSITIVE_FIELDS = [
  "api_url", "credentials", "headers",
  "auth_token", "api_key", "endpoint_url", "connection_string",
];

const sanitizeForExport = (obj: Record<string, any>): Record<string, any> => {
  const sanitized = { ...obj };
  SENSITIVE_FIELDS.forEach(field => {
    delete sanitized[field];
    if (sanitized.access_policy) delete sanitized.access_policy[field];
    if (sanitized.connection) delete sanitized.connection[field];
  });
  return sanitized;
};
```

Se aplicara `sanitizeForExport` sobre `quality_metrics` y cualquier metadata antes de incluirla en el JSON de la ficha tecnica.

### Archivo 2: `src/pages/Catalog.tsx`

Cambios en la query del catalogo para traer `version` del producto y `custom_metadata` del asset.

Adicion de dos filas nuevas en el dialog de comparacion (despues de la fila "Tipo de Datos"):
- Fila "Duracion del Acceso" con valor en dias
- Fila "Version" con el numero de version del producto

---

## Sin cambios necesarios

Los siguientes archivos ya implementan correctamente lo documentado en el Bloque 5:
- `src/pages/admin/AdminDashboard.tsx`
- `src/lib/chartTheme.ts`
- `src/lib/transactionStatusHelper.ts`
- `src/components/admin/AdminSidebar.tsx`
- `src/components/admin/AdminProtectedRoute.tsx`
- `src/pages/admin/AdminOrganizations.tsx`
- `src/pages/RequestWizard.tsx` (Paso 4 de Gobernanza)


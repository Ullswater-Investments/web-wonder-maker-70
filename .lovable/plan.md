

# Fase 4 -- Secure Gateway y Vista Unificada de Datos

## Objetivo

Redisenar completamente `DataView.tsx` para:
1. **Blindar credenciales**: los consumidores nunca ven `api_url`, headers ni detalles de conexion. Solo acceden via el Gateway proxy (`gateway-download` edge function, ya desplegada).
2. **Layout vertical sin sidebar**: reemplazar el grid 4-columnas actual por un layout de ancho completo secuencial.
3. **Cabecera enriquecida** con badges (proveedor, categoria, KYB, estado).
4. **4 tarjetas de resumen** (Version, Actualizacion, Esquema, Formato) en gradiente primario.
5. **Sistema de 5 pestanas**: Descripcion, Esquema, Muestra, Calidad, Politicas de Acceso (replicando el contexto del catalogo).
6. **Consola de Descargas segura** (bifurcada consumer/provider): Gateway download + Ficha Tecnica JSON blindada + Licencia PDF.
7. **Historial de auditorias** al final con `AccessHistoryTable`.

---

## Cambios por archivo

### 1. `src/pages/DataView.tsx` -- Rediseno completo

**Eliminaciones:**
- Sidebar lateral (`lg:col-span-1`) con tarjetas de Informacion, EnvironmentalImpactCard, Monitor de Consumo API, Acciones, CodeIntegrationModal
- Layout `grid lg:grid-cols-4` reemplazado por layout vertical de ancho completo
- Componente `EnvironmentalImpactCard` (ya no se renderiza; se puede dejar el codigo muerto o eliminarlo)

**Adiciones/Modificaciones:**

a) **Query ampliada**: la consulta de `data_transactions` incluira `data_products(name, description, category, schema_definition, version, sample_data)` y `data_assets(custom_metadata)` para alimentar las pestanas.

b) **Variable `isConsumer`**: determina si `activeOrg.id === transaction.consumer_org_id`.

c) **Cabecera enriquecida**: Card con gradient bar, badges (Provider/Globe, Categoria, KYB Verified condicional, "Acceso Concedido"), titulo h1 text-3xl y descripcion.

d) **4 tarjetas de resumen** en Card con bg-gradient primario: Version, Actualizacion ("Bajo demanda"), Esquema (N campos), Formato (JSON/CSV).

e) **Tabs con 5 pestanas**:
   - **Descripcion**: info general, proveedor, custodio, duracion de acceso, timeout condicional.
   - **Esquema**: tabla con campos de `schema_definition` (field, type, description).
   - **Muestra**: tabla con `sample_data` del asset.
   - **Calidad**: barras de progreso con `quality_metrics` de `custom_metadata`.
   - **Politicas de Acceso**: grid 3 columnas (Permitido/Prohibido/Obligaciones) con iconos y colores + disclaimer legal o boton de terminos externos.

f) **Consola de Descargas** (solo si `canViewData`):
   - **Consumer**: Card con `handleGatewayDownload` (invoca edge function), boton Ficha Tecnica (JSON blindado sin api_url/headers), boton Licencia PDF.
   - **Provider/Holder**: muestra detalles tecnicos completos (existente) + acciones de export CSV y ERP.

g) **handleGatewayDownload**: invoca `supabase.functions.invoke("gateway-download")`, crea blob, descarga JSON, invalida cache de `access-logs`. Manejo de errores diferenciado (network vs logica).

h) **handleDownloadTechSheet**: genera JSON con product name, version, category, provider, schema, quality_metrics, access_policy -- SIN api_url, headers ni credenciales.

i) **AccessHistoryTable** al final, ya existente, se mantiene.

### 2. `supabase/functions/gateway-download/index.ts` -- Sin cambios

Ya esta desplegada con la logica correcta de proxy, auditorias y seguridad desde la Fase 1.

### 3. `src/utils/pdfGenerator.ts` -- Sin cambios

Ya genera la licencia PDF. Se invocara desde la nueva consola de descargas.

---

## Detalles tecnicos

### Valores por defecto ODRL (fallback)

Cuando `access_policy` no tiene `permissions`, `prohibitions` u `obligations`, se usan defaults:
- Permitido: "Uso comercial dentro de la organizacion", "Analisis e integracion en sistemas internos", "Generacion de informes derivados"
- Prohibido: "Redistribucion a terceros sin autorizacion", "Ingenieria inversa de datos individuales", "Uso para fines ilegales o discriminatorios"
- Obligaciones: "Atribucion al proveedor de datos", "Renovacion de licencia segun modelo de precio", "Cumplimiento GDPR para datos personales"

### Iconos necesarios (imports adicionales)

`Globe, CheckCircle2, XCircle, Scale, Clock, FileJson, Database, ExternalLink, ShieldCheck` de lucide-react.

### Bifurcacion consumer/provider

```text
isConsumer?
  YES --> Consola Gateway (sin api_url visible)
  NO  --> Panel tecnico completo (api_url, headers, CodeIntegrationModal, ERP)
```

### Invalidacion de cache

Despues de cada descarga gateway (exito o error):
```
queryClient.invalidateQueries({ queryKey: ["access-logs"] });
```

---

## Secuencia de implementacion

1. Reescribir `DataView.tsx` con el nuevo layout vertical
2. Ampliar la query de transaccion para traer schema_definition, version, sample_data, custom_metadata del asset
3. Implementar las 5 pestanas con datos reales
4. Implementar consola de descargas bifurcada (consumer vs provider)
5. Implementar `handleGatewayDownload` y `handleDownloadTechSheet`
6. Verificar que el componente compila y se integra correctamente


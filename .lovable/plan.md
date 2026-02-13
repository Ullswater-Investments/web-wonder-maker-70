

# Crear Banner de Campana "Ayudas Kit Espacio de Datos" + Paginas Enlazadas

## Resumen

Reemplazar la seccion "Explora el Ecosistema" (lineas 438-464 de Landing.tsx) con un nuevo componente `KitDatosCampaignBanner` y crear todas las paginas enlazadas descritas en la arquitectura proporcionada.

---

## Fase 1: Assets y Componente Principal

### 1.1 Subir logos
Los 2 logos subidos por el usuario se guardaran como:
- `src/assets/logo-kit-espacio-datos.jpg` (ya existe `kit-espacios-datos-logo.png`, se usara el nuevo)
- `src/assets/logo-gobierno-red-es.png` (nuevo, del archivo `redes_logo.jpg`)

### 1.2 Crear `src/components/home/KitDatosCampaignBanner.tsx`
Componente con la estructura descrita en la arquitectura:
- Header con icono Euro + titulo "AYUDAS KIT ESPACIO DE DATOS"
- Badge animado (amber) con fecha limite: "Inscripcion hasta 20 de Marzo del 2026"
- Badge animado (rojo): "PLAZAS LIMITADAS"
- Mensaje con "30.000 EUR de Subvencion a fondo perdido de RED.ES"
- 3 checkmarks verdes (Tramitacion incluida, Subvencion 85-90%, Sin letra pequena)
- Boton Hero CTA grande (gradiente emerald/teal/cyan) enlazando a `/condiciones-kit-espacio-datos`
- 2 botones secundarios: Inscripcion (190 EUR/mes) y Ver Condiciones
- Logos institucionales con enlaces externos

### 1.3 Integrar en Landing.tsx
- Importar `KitDatosCampaignBanner`
- Reemplazar la seccion "DEMO HUB" (lineas 438-464) con `<KitDatosCampaignBanner />`
- Mantener el `id="cases"` en la nueva seccion

---

## Fase 2: Paginas Enlazadas

### 2.1 `src/pages/CondicionesKitEspacioDatos.tsx` (ruta: `/condiciones-kit-espacio-datos`)
- Header sticky con navegacion
- Hero con badges animados y logos
- Cuadro de pricing (15.000 EUR - 30.000 EUR)
- Resumen ejecutivo (3 cards)
- Timeline de fases (Fase 1: 6 meses irrevocable, Fase 2: 24 meses condicional)
- Calculadora ROI (1.140 EUR inversion vs 30.000 EUR subvencion)
- Grid de cuotas mensuales (6 x 190 EUR)
- Servicios incluidos (7 items)
- FAQ Accordion (7 preguntas)
- Aviso legal (ACCURO TECHNOLOGY, S.L.)
- CTAs finales

### 2.2 `src/pages/ContratoKitEspacioDatos.tsx` (ruta: `/contrato-kit-espacio-datos`)
- Contrato completo con 12 clausulas
- Acta de Entrega y Conformidad (5 puntos)
- Mecanismo scroll-to-accept (desbloquea checkboxes al llegar al final)
- 2 checkboxes de aceptacion con timestamp
- Guardado en localStorage
- Redireccion a inscripcion con query params

### 2.3 `src/pages/KitEspacioDatosInscripcion.tsx` (ruta: `/inscripcion-kit-espacio-datos`)
- Formulario multi-step (3 pasos) con validacion Zod
- Paso 1: Datos de la empresa (nombre, CIF, direccion, provincia, etc.)
- Paso 2: Datos del responsable (nombre, cargo, telefono, email)
- Paso 3: Confirmacion (modulos interes, contrato embebido, acta, consentimientos)
- Barra de progreso
- Super-admin bypass para `emilio.emulet@accuro.es`
- Submit: INSERT en tabla `kit_inscriptions` + Edge Function email
- Pantalla de exito con referencia

### 2.4 `src/pages/GuiaKitEspacioDatos.tsx` (ruta: `/guia-kit-espacio-datos`)
- Explicacion del programa Kit Espacio de Datos
- 6 servicios incluidos
- 6 beneficios
- Pricing card
- 4 pasos del proceso
- FAQ (7 preguntas)

### 2.5 `src/pages/PropuestaKitEspacioDatos.tsx` (ruta: `/propuesta-kit-espacio-datos`)
- Propuesta detallada del programa

---

## Fase 3: Componentes Legales Reutilizables

### 3.1 `src/components/legal/ContractContent.tsx`
- 7 clausulas del contrato resumido
- Props: `clinicName` (placeholder personalizable)
- Secciones coloreadas por tipo (amber, green, blue, red)
- Datos de ACCURO TECHNOLOGY, S.L.

### 3.2 `src/components/legal/AcceptanceActContent.tsx`
- 5 puntos de certificacion
- Props: `clinicName`, `contactName`
- Bordes coloreados por tipo
- Fecha automatica

---

## Fase 4: Backend

### 4.1 Tabla `kit_inscriptions`
Crear via migracion SQL con todos los campos descritos en la arquitectura (30+ campos incluyendo datos empresa, contacto, modulos, aceptaciones legales, UTM tracking).

### 4.2 Edge Function `send-inscription-email`
- Recibe datos de inscripcion via POST
- Envia email de notificacion a `emilio.emulet@accuro.es` via Resend API
- CORS habilitado

---

## Fase 5: Routing

### Anadir rutas en `App.tsx`
```text
/condiciones-kit-espacio-datos  -> CondicionesKitEspacioDatos
/contrato-kit-espacio-datos     -> ContratoKitEspacioDatos
/inscripcion-kit-espacio-datos  -> KitEspacioDatosInscripcion
/guia-kit-espacio-datos         -> GuiaKitEspacioDatos
/propuesta-kit-espacio-datos    -> PropuestaKitEspacioDatos
```

---

## Fase 6: Internacionalizacion

Anadir bloque `kitAyudas` en `src/locales/*/landing.json` para los 7 idiomas (es, en, fr, de, it, pt, nl) con los textos del banner.

---

## Notas Importantes

- Se usara "Global Data Care" / "ACCURO TECHNOLOGY" en lugar de "VetSpace" en todos los textos
- Se cambiara "Clinica Veterinaria" por terminologia generica de empresa/organizacion
- Los modulos se adaptaran al contexto de Espacio de Datos (no veterinaria)
- El badge de fecha sera unico (sin duplicados)
- La implementacion se hara en varias iteraciones dada la magnitud (~3000+ lineas de codigo nuevo)


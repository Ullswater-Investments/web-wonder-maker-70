
## Plan: Etiquetas Descriptivas en Casos de Exito de la Landing

### Objetivo
Anadir una breve descripcion (etiqueta explicativa) debajo de cada icono de sector en la seccion "CASOS DE EXITO" de la pagina principal, mostrando el nombre de la empresa y una frase corta sobre el caso.

---

### Cambios

#### 1. Ampliar el array `sectors` en `Landing.tsx`

Agregar un campo `description` a cada entrada del array de sectores con una frase corta (maximo 6-8 palabras) que describa el caso:

| Sector | Empresa | Descripcion |
|--------|---------|-------------|
| Industrial | GigaFactory North | Homologacion industrial en 24h |
| Agro | OliveTrust Coop | Trazabilidad ESG aceite de oliva |
| Movilidad | UrbanDeliver BCN | Reporting Scope 3 logistico |
| Social | Alianza Social Hub | Impacto social verificable SROI |
| Salud | BioMed Hospital | Mantenimiento predictivo equipos RM |
| Retail | GlobalRetail Prime | Auditoria etica supply chain |
| Energia | Helios Fields | Certificacion energetica renovable |
| Aero | Turbine Chain | Trazabilidad componentes aeronauticos |
| Vinos | VinosD.O.E Elite | Pasaporte digital denominacion origen |
| Pharma | PharmaCold Logistix | Cadena de frio certificada |
| Puerto | PortBCN Smart Trade | Despacho aduanero inteligente |
| Gov | Ayuntamiento Etico | Compra publica responsable |
| Mineria | PureLithium Sourcing | Sourcing responsable de litio |
| Moda | FastFashion Trace | Trazabilidad textil sostenible |
| Finanzas | GreenFinance ESG | Finanzas verdes y scoring ESG |
| Grid | GridFlex Demand | Gestion flexible de demanda energetica |

#### 2. Modificar el renderizado de cada tarjeta de sector

Actualmente cada tarjeta muestra solo icono + label del sector. Se ampliara para incluir:

- **Nombre de la empresa** en texto pequeno y bold debajo del icono
- **Descripcion corta** en texto aun mas pequeno y color `text-muted-foreground`
- Se aumenta ligeramente el ancho minimo de cada tarjeta (de ~80px a ~140px) para acomodar el texto
- Layout cambia de `flex-wrap justify-center gap-3` a un `grid` responsive: `grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8` para la primera fila de 8 y similar para la segunda

#### 3. Internacionalizacion (opcional pero recomendado)

Agregar las descripciones al archivo de traducciones `landing.json` bajo una nueva clave `sectorDescriptions` para mantener consistencia multiidioma. Ejemplo en `es/landing.json`:

```text
"sectorDescriptions": {
  "industrial": "Homologacion industrial en 24h",
  "agro": "Trazabilidad ESG aceite de oliva",
  ...
}
```

Se replicara en los archivos `it`, `nl`, `pt`, `de` con traducciones apropiadas.

---

### Archivos a Modificar

| Archivo | Cambio |
|---------|--------|
| `src/pages/Landing.tsx` | Agregar campo `description` y `company` al array `sectors`, modificar el JSX de renderizado para mostrar etiquetas descriptivas |
| `src/locales/es/landing.json` | Agregar claves `sectorDescriptions` y `sectorCompanies` |
| `src/locales/it/landing.json` | Traducciones italianas de las descripciones |
| `src/locales/nl/landing.json` | Traducciones neerlandesas |
| `src/locales/pt/landing.json` | Traducciones portuguesas |
| `src/locales/de/landing.json` | Traducciones alemanas |

---

### Resultado Visual Esperado

Cada tarjeta de sector pasara de mostrar:

```text
  [Icono]
 INDUSTRIAL
```

A mostrar:

```text
    [Icono]
  INDUSTRIAL
 GigaFactory North
Homologacion 24h
```

Las tarjetas mantendran el hover con elevacion y enlace al caso de exito correspondiente, con las animaciones stagger existentes.

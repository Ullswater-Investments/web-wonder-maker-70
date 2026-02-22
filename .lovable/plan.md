

# Nueva Pagina "Solicitud Kit Espacio de Datos" - Cuestionario de Preparacion y Auditoria

## Resumen

Crear una nueva pagina `/solicitud-kit-espacio-datos` que contenga todo el contenido del documento PDF "Cuestionario Kit Espacios de Datos" organizado como un cuestionario paso a paso interactivo. Se añadira un enlace en la seccion "Recursos" del footer de Landing.tsx.

## Estructura de la pagina

La pagina se organizara en **9 secciones principales** (correspondientes a los 9 capitulos del documento), presentadas como un cuestionario con acordeones expandibles y tarjetas informativas:

### Seccion 1: Fundamentos Normativos
- Explicacion del programa Kit Espacios de Datos (PRTR, Next Generation EU, Red.es)
- Presupuesto de 60 millones de euros
- Regimen de concurrencia no competitiva (orden de llegada)
- Fecha limite: 31 marzo 2026 a las 11:00h
- Modelo de Cuenta Justificativa Simplificada

### Seccion 2: Elegibilidad y Roles
- **2.1 Requisitos Subjetivos**: entidades privadas (6 meses en censo AEAT, no empresa en crisis, al corriente con Hacienda/SS) y sector publico (INVENTE >50%)
- **2.2 Modalidades**: tabla comparativa Participante vs Proveedor con limites financieros (15k/25k vs 30k/50k)
- Exclusiones (UTEs, autonomos, comunidades de bienes)

### Seccion 3: Ingenieria Financiera
- **3.1 Elegibilidad temporal**: gastos post-16 julio 2025, IVA no subvencionable
- **3.1.1 Costes de Personal Propio**: timesheets, registro horario
- **3.1.2 Servicios Externos**: consultoria, honorarios, success fees
- **3.1.3 Infraestructura y Licencias**: cloud max 1 año, SaaS

### Seccion 4: Arquitectura Tecnologica
- **4.1 Topologia del Conector**: tabla con componentes (Backend, Plano de Control, Plano de Datos, Identity Hub, Catalogo Federado)
- **4.2 Interoperabilidad Semantica**: metadatos, ODRL, JSON-LD

### Seccion 5: Principio DNSH
- 6 objetivos medioambientales (Reglamento UE 2020/852)
- Mitigacion climatica, adaptacion, economia circular
- Exclusiones taxativas (refineries, carbon, vertederos)

### Seccion 6: Conformacion Documental
- **6.1 Memoria de Actuacion Justificativa** (resumen ejecutivo, caso de uso, RGPD, auditoria datos, conexion tecnica, cuadro financiero, difusion)
- **6.2 Capturas de pantalla** (con reloj del sistema visible)
- **6.3 Contrato de Adhesion** y Declaracion de Evidencias (max 2MB, firma electronica mancomunada)
- **6.4 Video de Evidencias** (screencasting del ciclo completo)

### Seccion 7: Ecosistemas Elegibles (Lista de Confianza CRED)
- Salud (BIGAN), Agroalimentario (CropDataSpace), Industria/Movilidad (C-SpAICe)

### Seccion 8: Matriz del Cuestionario de Auditoria (5 Modulos)
Cada modulo como una tarjeta con tabla de elementos probatorios:
- **Modulo I**: Auditoria Administrativa (NIF, poderes, AEAT/TGSS, IBAN, declaracion responsable)
- **Modulo II**: Definicion Estrategica (rol, caso de uso, RGPD, ecosistema destino)
- **Modulo III**: Ingenieria de Datos (diagramas, conector, ODRL, vocabularios semanticos)
- **Modulo IV**: Auditoria Contable (timesheets, facturas, licencias SaaS, cuadro de mando, exclusion IVA)
- **Modulo V**: Prueba Ambiental y Plataforma (DNSH, contrato adhesion, screenshots, video)

### Seccion 9: Conclusiones
- Resumen de claves de eficiencia operativa
- CTA para solicitar inscripcion

## Cambios en archivos

### 1. Nuevo archivo: `src/pages/SolicitudKitEspacioDatos.tsx`
- Pagina completa con todas las 9 secciones
- Acordeones para los modulos del cuestionario (Seccion 8)
- Tablas para limites financieros y componentes tecnologicos
- Cards informativas para cada bloque
- Badges y alertas para plazos y requisitos criticos
- CTA al final enlazando a `/kit-espacio-datos`
- Reutiliza componentes existentes: Accordion, Card, Badge, Button
- Incluye los logos de Kit Espacio de Datos y Gobierno/Red.es ya existentes

### 2. Modificar: `src/pages/Landing.tsx` (linea 582)
- Añadir nuevo `<li>` en la seccion "Recursos" con link a `/solicitud-kit-espacio-datos`
- Texto: "Solicitud Kit Espacio de Datos"

### 3. Modificar: `src/App.tsx`
- Importar `SolicitudKitEspacioDatos` (lazy)
- Añadir ruta `/solicitud-kit-espacio-datos`

### 4. Actualizar locales del footer (4 archivos)
- `src/locales/es/landing.json`: añadir `"dataSpaceKitApplication": "Solicitud Kit Espacio de Datos"`
- `src/locales/en/landing.json`: añadir `"dataSpaceKitApplication": "Data Space Kit Application"`
- `src/locales/it/landing.json`: añadir `"dataSpaceKitApplication": "Richiesta Kit Spazio Dati"`
- `src/locales/pt/landing.json`: añadir `"dataSpaceKitApplication": "Solicitação Kit Espaço de Dados"`

## Detalles tecnicos

- La pagina usara el mismo patron visual que `CondicionesKitEspacioDatos.tsx` (motion animations, cards, accordions)
- Todo el texto del documento PDF sera trasladado literalmente a la pagina
- Los 5 modulos del cuestionario (Seccion 8) usaran componentes `Accordion` para que el usuario pueda expandir/colapsar cada modulo
- Las tablas de evidencias se renderizaran con tablas HTML estilizadas con Tailwind
- Se incluira una barra de progreso o navegacion lateral para que el usuario pueda saltar entre secciones
- Responsive design para movil y desktop


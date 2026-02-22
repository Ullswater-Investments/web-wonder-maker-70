

# Integrar Documento "Kit Espacios de Datos" en la Pagina de Condiciones

## Contexto

El documento PDF contiene informacion rica y detallada sobre el programa que actualmente no aparece en la pagina `/condiciones-kit-espacio-datos`. La pagina actual muestra condiciones basicas (precios, fases, FAQ), pero le falta todo el contenido educativo y normativo del documento.

## Contenido nuevo a integrar (7 secciones adicionales)

### 1. Seccion "Que es el Kit Espacios de Datos" (nueva, despues del hero)
- Parrafo introductorio explicando el programa y fondos Next Generation EU
- Mencionar concurrencia no competitiva (orden de llegada)
- Plazo: 31 de marzo de 2026 o hasta agotar 60M euros
- Presupuesto total: 60 millones de euros

### 2. Seccion "Dos Niveles de Ambicion" (nueva, antes del rango de subvencion)
Dos cards comparativas:
- **Rol Participante (Basico)**: hasta 15.000 euros, consumir datos y servicios
- **Rol Proveedor (Avanzado)**: hasta 30.000 euros, publicar datos propios al ecosistema

### 3. Seccion "Nuestra Propuesta de Valor" (nueva, despues de servicios incluidos)
Estructura de honorarios clara:
- **Participante**: 1.140 euros gestion inicial + 3.000 euros success fee
- **Proveedor**: Requiere analisis conjunto para transaccionar datos reales

### 4. Seccion "Checklist para ser Proveedor" (nueva)
Lista de requisitos tecnicos con iconos:
- Publicacion Efectiva de Datos
- Soberania y Reglas de Acceso
- Ingenieria y Metadatos
- Conectores Certificados (Eclipse Dataspace Components)
- Evidencias de la Publicacion

### 5. Seccion "Gastos Elegibles" (nueva)
Tres categorias de gastos cubiertos:
- Servicios externos y consultoria
- Costes de personal propio
- Licencias e infraestructura

### 6. Seccion "Lineas Rojas Financieras" (nueva, tipo alerta/warning)
Card de advertencia con:
- IVA no subvencionable
- Justificacion Concurrente (trabajo terminado y pagado antes de solicitar)
- Principio medioambiental DNSH

### 7. FAQ ampliadas
Anadir preguntas nuevas derivadas del documento:
- "Que diferencia hay entre Participante y Proveedor?"
- "Que gastos cubre exactamente la ayuda?"
- "El IVA es subvencionable?"

## Estructura final de la pagina

1. Hero (existente - sin cambios)
2. **NUEVO** - Que es el programa
3. **NUEVO** - Dos niveles (Participante vs Proveedor)
4. Rango de Subvencion (existente)
5. Servicios incluidos (existente)
6. **NUEVO** - Propuesta de valor y honorarios
7. **NUEVO** - Checklist Proveedor
8. Summary Cards (existente)
9. Fases del Contrato (existente)
10. ROI Calculator (existente)
11. **NUEVO** - Gastos elegibles
12. **NUEVO** - Lineas rojas financieras
13. Cuotas Mensuales (existente)
14. FAQ ampliadas (existente + nuevas preguntas)
15. Aviso Legal (existente)
16. CTAs (existente)

## Detalle Tecnico

### Archivo: `src/pages/CondicionesKitEspacioDatos.tsx`

Se modificara este unico archivo:

- Se anadiran nuevas constantes de datos al inicio (arrays para checklist, gastos elegibles, nuevas FAQ)
- Se insertaran 6 nuevas secciones JSX entre las existentes
- Se usaran los mismos componentes UI ya importados (Card, Badge, motion) mas algunos iconos adicionales de lucide-react (Target, BookOpen, AlertTriangle, Briefcase, Server, Eye)
- Se mantendra el mismo estilo visual y patron de animaciones con framer-motion
- No se requieren cambios en otros archivos ni en la base de datos




# Ampliacion masiva de la pagina "Solicitud Kit Espacio de Datos" con Evidencias Tecnicas y Chat IA

## Resumen

Expandir significativamente la pagina `/solicitud-kit-espacio-datos` incorporando todo el contenido tecnico de los dos documentos PDF (Guia Practica para Solicitantes y Justificacion Tecnica), imagenes clave de los documentos, y un chat integrado con el agente de IA para que los solicitantes puedan resolver dudas tecnicas en tiempo real.

## Estructura propuesta de la pagina ampliada

La pagina pasara de 9 secciones a 15 secciones, manteniendo las 9 existentes y anadiendo 6 nuevas secciones con el contenido de los PDFs. Ademas se anadira un widget de chat IA contextual fijo.

### Nuevas secciones a anadir (despues de la seccion 4 existente):

**Seccion 4B: Guia Practica para el Solicitante - Que debe hacer su empresa**
- Orientada al solicitante no tecnico
- Subsecciones: Preparacion de Infraestructura Interna (IT), Definicion de Reglas de Negocio (Legal), Auditoria y Trazabilidad (Logs), Identidad Digital Gaia-X (Administracion/Legal), Preparacion y Limpieza de Datos (Operaciones), Pruebas Visuales y Screencasting
- Checklist interactivo del solicitante (las 9 tareas del documento)
- Tarjetas informativas por departamento responsable (IT, Legal, Datos, Contabilidad)

**Seccion 4C: Topologia del Conector y Separacion de Planos Logicos en Pontus-X**
- Tabla de mapeo arquitectonico: Requisitos Red.es vs Topologia Pontus-X
- Explicacion del Plano de Control (Smart Contracts, Ocean Provider)
- Explicacion del Plano de Datos (transferencia encriptada)
- Imagen/diagrama de la cartografia de red (copiada del PDF)
- Bloque de codigo del log terminal mostrando la traza de auditoria

**Seccion 4D: Arquitectura de Confianza - Identity Hub y Credenciales Gaia-X**
- Protocolo de emision de Credenciales Verificables (VC)
- Presentacion Verificable (VP) y firma criptografica
- Interrogacion dinamica y verificacion continua
- GXDCH y validacion eIDAS
- Registro 2.0 de Pontus-X

**Seccion 4E: Interoperabilidad Semantica y Politicas ODRL**
- Ingenieria semantica y modelado JSON-LD (DDO)
- Codificacion programatica de politicas ODRL
- Bloque de codigo JSON-LD de ejemplo con explicacion juridica linea por linea
- Imagen del mapeo ODRL del PDF
- Los tres vectores: Target, Action, Constraints

**Seccion 4F: Generacion de Evidencias Dinamicas y Visuales**
- Capturas periciales sensibles al tiempo (requisito del reloj visible)
- Diferencias entre evidencias Participante vs Proveedor
- Contratacion interinstitucional y Declaracion de Evidencias
- Guion del video de screencasting (3 pasos obligatorios)

**Seccion 4G: Justificacion Financiera y DNSH Avanzado**
- Contabilidad estricta y trazabilidad financiera
- Timesheets y detraccion fiscal del IVA
- DNSH avanzado: certificados hardware, economia circular, RAEE
- Compute-to-Data (C2D) para maximizar puntuacion

### Chat IA contextual integrado

Un componente de chat flotante especifico para esta pagina (diferente del AIConcierge global) que:
- Aparece como boton fijo en la esquina inferior derecha
- Al abrirlo muestra un panel de chat con preguntas sugeridas especificas del Kit Espacios de Datos
- Conecta con el edge function `chat-ai` existente anadiendo contexto de que el usuario esta en la pagina de solicitud
- Preguntas sugeridas: "Que documentos necesito?", "Como funciona el Plano de Control?", "Que es una Credencial Verificable?", "Como justifico los costes de personal?"

### Imagenes de los documentos

Se copiaran las siguientes imagenes clave de los PDFs al proyecto:
- Cartografia de red (mapeo arquitectonico Pontus-X)
- Diagrama ODRL (traduccion de marco legal a politica)
- Log terminal UI (traza de auditoria)
- Paginas completas de referencia como screenshots de los documentos oficiales

## Cambios tecnicos

### Archivos a modificar:

1. **`src/pages/SolicitudKitEspacioDatos.tsx`** - Reescritura extensa:
   - Ampliar el indice de navegacion (sectionNav) de 9 a 15 secciones
   - Anadir las 6 nuevas secciones completas con todo el contenido de los PDFs
   - Anadir el componente de chat IA contextual al final del JSX
   - Importar las imagenes copiadas desde los PDFs

2. **Nuevo: `src/components/kit-solicitud/KitSolicitudChat.tsx`** - Chat IA contextual:
   - Componente de chat especifico para la pagina de solicitud
   - Boton flotante con icono de IA
   - Panel expandible con historial de mensajes
   - Preguntas sugeridas predefinidas
   - Conexion al edge function `chat-ai` con contexto adicional del Kit Espacios de Datos
   - Soporte para modo claro/oscuro

3. **Imagenes a copiar al proyecto** (desde parsed-documents):
   - `src/assets/kit-evidencias/cartografia-red.png` - Diagrama de arquitectura
   - `src/assets/kit-evidencias/odrl-mapeo.png` - Mapeo ODRL
   - `src/assets/kit-evidencias/log-terminal.jpg` - Traza de auditoria
   - `src/assets/kit-evidencias/page-guia-solicitante.jpg` - Pagina de la guia

### Detalles del componente KitSolicitudChat:

- Usa `useState` para mensajes, input, loading, isOpen
- Conecta con `chat-ai` via fetch anadiendo system context: "El usuario esta consultando la pagina de Solicitud Kit Espacio de Datos. Responde sobre evidencias tecnicas, requisitos, planos de control/datos, Pontus-X, ODRL, Gaia-X, DNSH..."
- 4 preguntas sugeridas clickeables
- Renderizado markdown con `react-markdown`
- Animaciones con framer-motion para abrir/cerrar

### Estructura de la pagina resultante (15 secciones):

1. Fundamentos Normativos (existente)
2. Elegibilidad y Roles (existente)
3. Ingenieria Financiera (existente)
4. Arquitectura Tecnologica (existente, ampliada)
4B. Guia Practica para el Solicitante
4C. Topologia del Conector Pontus-X
4D. Identity Hub y Credenciales Gaia-X
4E. Interoperabilidad Semantica y ODRL
4F. Evidencias Dinamicas y Visuales
4G. Justificacion Financiera Avanzada y DNSH
5. Principio DNSH (existente)
6. Conformacion Documental (existente)
7. Ecosistemas Elegibles (existente)
8. Cuestionario de Auditoria (existente)
9. Conclusiones (existente)

La pagina incluira ademas un chat IA flotante contextual permanente para resolver dudas del solicitante.


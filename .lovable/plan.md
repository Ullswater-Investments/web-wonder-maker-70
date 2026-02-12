
## Plan: Auditoria i18n Completa y Correccion de Gaps

### Resumen de la Auditoria

Se han detectado **4 categorias de problemas** que impiden la correcta visualizacion multiidioma:

---

### CATEGORIA 1: Archivos JSON ausentes

| Archivo | Idiomas donde falta |
|---------|-------------------|
| `greenProcurement.json` | FR, DE |

**Accion**: Crear `src/locales/fr/greenProcurement.json` y `src/locales/de/greenProcurement.json` traduciendo las ~1400 lineas del archivo ES como referencia.

---

### CATEGORIA 2: Claves de traduccion ausentes en archivos existentes

| Archivo | Idioma | Claves faltantes |
|---------|--------|-----------------|
| `landing.json` | FR | `sectorCompanies` (16 claves), `sectorDescriptions` (16 claves) |
| `landing.json` | FR | `startRegistration` en nav (falta vs EN) |
| `landing.json` | FR | Clave `footer` duplicada (lineas 134 y 200) - error estructural JSON |

**Accion**: Agregar `sectorCompanies` y `sectorDescriptions` al FR landing.json y corregir la duplicacion de `footer`.

---

### CATEGORIA 3: Textos "ARIA" visibles pendientes de rebrand

Archivos donde el usuario VE "ARIA" en pantalla y que no fueron cubiertos en el rebrand anterior:

| Archivo | Tipo | Contenido |
|---------|------|-----------|
| `docs.json` (7 idiomas) | Traduccion | ~40 menciones por idioma: titulos como "ARIA Assistant", quizzes "What is ARIA?", descripciones de personalidad, NLU, etc. |
| `AssetChatInterface.tsx` | Componente | Linea 28: "Soy **ARIA**, tu asistente experto..." (hardcoded en espanol) |
| `fr/landing.json` | Traduccion | Linea 50: "ARIA, votre assistant IA..." |

**Accion**:
- En los 7 `docs.json`: Reemplazar "ARIA" por "AI Advisor" / "Asistente IA" / equivalente en cada idioma, en todos los textos visibles (titulos, contenido HTML, preguntas de quiz)
- En `AssetChatInterface.tsx`: Reemplazar texto hardcoded por version internacionalizada usando `t()`
- En `fr/landing.json`: Cambiar "ARIA, votre assistant IA..." por texto sin marca

---

### CATEGORIA 4: Textos hardcoded en espanol en componentes TSX

Multiples componentes tienen texto en espanol sin usar `t()`:

| Componente | Texto hardcoded |
|-----------|----------------|
| `AerceProyecto.tsx` | "Doc Proyecto", "Doc Tecnico", "White Paper" |
| `AerceDocTecnico.tsx` | "Doc Tecnico" |
| `AerceMiembros.tsx` | "Doc Proyecto", "Doc Tecnico" + descripciones |
| `ItbidProyecto.tsx` | "Doc Tecnico" |
| `ItbidDocTecnico.tsx` | "Doc Tecnico" |
| `ItbidWhitepaper.tsx` | "Doc Tecnico" |
| `TeleNaturaMiembros.tsx` | "Doc Proyecto", "Doc Tecnico" + descripciones |
| `TeleNaturaDocTecnico.tsx` | "Doc Tecnico" |
| `WhitepaperCTA.tsx` (telenatura) | "Doc Tecnico" |
| `CTASection.tsx` (itbid) | "Ver Doc Tecnico" |
| `AssetChatInterface.tsx` | Mensaje de bienvenida completo en espanol |
| `AIConcierge.tsx` | Mensaje de bienvenida en espanol (linea 341) |
| `DocumentoExplicativo13.tsx` | Contenido completo en espanol |

**Accion**: Reemplazar todos los textos hardcoded por llamadas `t()` usando claves en los namespaces correspondientes (`aerce`, `itbid`, `telenatura`, `common`). Agregar las claves necesarias en los 7 idiomas.

---

### Orden de ejecucion propuesto

Dado el alto volumen (~100+ archivos), se recomienda ejecutar en **4 fases**:

**Fase 1 - Archivos JSON faltantes** (prioridad critica)
- Crear `fr/greenProcurement.json` y `de/greenProcurement.json`
- Agregar `sectorCompanies` + `sectorDescriptions` a `fr/landing.json`
- Corregir duplicacion de `footer` en `fr/landing.json`

**Fase 2 - Rebrand ARIA en docs.json** (7 archivos, ~40 cambios por archivo)
- Reemplazar "ARIA" por "AI Advisor" (EN), "Asistente IA" (ES), "Consulente IA" (IT), "KI-Berater" (DE), "Assistant IA" (FR), "Assistente IA" (PT), "AI Adviseur" (NL)
- Actualizar quizzes, titulos y contenido HTML

**Fase 3 - Hardcoded strings en partners** (~10 componentes)
- Extraer "Doc Proyecto", "Doc Tecnico", "White Paper" a claves i18n
- Agregar traducciones en los 7 idiomas

**Fase 4 - Chat interfaces** (2-3 componentes)
- Internacionalizar mensajes de bienvenida de `AssetChatInterface.tsx` y `AIConcierge.tsx`
- Asegurar que el agente IA responde en el idioma del usuario

---

### Riesgo y mitigacion

- **Volumen alto**: ~100+ archivos, pero cambios mecanicos (buscar/reemplazar)
- **greenProcurement.json**: Archivo de ~1400 lineas, la traduccion a FR y DE es extensa
- **docs.json**: Contiene HTML embebido - hay que tener cuidado con las etiquetas
- **Recomendacion**: Ejecutar por fases para validar cada bloque antes de continuar


## Informe de Auditoria i18n Completa

### RESUMEN EJECUTIVO

El portal soporta 7 idiomas (ES, EN, FR, DE, IT, PT, NL) con 46 namespaces JSON por idioma. La auditoria revela **3 problemas principales**:

1. **Archivos JSON ausentes** en 3 idiomas
2. **Textos hardcoded en espanol** en 5 componentes de IA/chat
3. **Las respuestas de IA SI se traducen** al idioma del usuario (parcialmente)

---

### 1. ARCHIVOS DE TRADUCCION AUSENTES

| Archivo | IT | NL | PT |
|---------|----|----|-----|
| `greenProcurement.json` | FALTA | FALTA | FALTA |

Los idiomas ES, EN, FR y DE ya tienen este archivo (~1400 lineas). Falta crearlo para **IT, NL y PT**.

---

### 2. RESPUESTAS DE IA: ANALISIS POR AGENTE

#### 2.1 chat-ai (AIConcierge - concierge global)
- **System prompt**: Incluye un `LANGUAGE_BRIDGE` explicito que instruye al modelo a detectar el idioma del usuario y responder en ese idioma
- **Veredicto**: Las RESPUESTAS de la IA SI se traducen automaticamente
- **Problema**: El mensaje de bienvenida esta hardcoded en espanol en el componente

#### 2.2 success-story-agent (SuccessStoryChatAgent)
- **System prompt**: Dice "Responde en el mismo idioma que el usuario"
- **Veredicto**: Las RESPUESTAS SI se traducen
- **Problema**: Mensaje introductorio, preguntas sugeridas y placeholders estan hardcoded en espanol

#### 2.3 federated-agent (FederatedHeroChat)
- **System prompt**: Dice "Responde en el mismo idioma que el usuario"
- **Veredicto**: Las RESPUESTAS SI se traducen
- **Problema**: Preguntas sugeridas, titulo "Agente IA Federado", y placeholder hardcoded en espanol

#### 2.4 chat-ai (AssetChatInterface - chat de producto)
- **System prompt**: Tiene el mismo `LANGUAGE_BRIDGE`
- **Veredicto**: Las RESPUESTAS SI se traducen
- **Problema**: Mensaje de bienvenida ("Soy **ARIA**, tu asistente experto..."), titulo, descripcion, placeholder, loading text, error toast - TODO hardcoded en espanol. Ademas ARIA sigue apareciendo aqui.

---

### 3. INVENTARIO COMPLETO DE TEXTOS HARDCODED EN COMPONENTES DE IA

#### AssetChatInterface.tsx (11 textos hardcoded)
| Linea | Texto | Tipo |
|-------|-------|------|
| 28 | "Soy **ARIA**, tu asistente experto en el ecosistema PONTUS-X..." | Bienvenida + ARIA |
| 49 | "Error: No se pudo identificar el activo" | Toast error |
| 158 | "Error al conectar con el asistente PONTUS-X" | Toast error |
| 166 | "Lo siento, hubo un error al procesar tu consulta..." | Mensaje error |
| 192 | "Pregunta a ARIA" | Titulo (ARIA) |
| 196 | "Asistente IA con contexto del activo" | Descripcion |
| 250 | "Consultando metadatos del DDO..." | Loading |
| 262 | "Pregunta sobre este dataset..." | Placeholder |
| 282 | "ARIA consulta metadatos verificados en blockchain (PONTUS-X)" | Footer |

#### AIConcierge.tsx (10 textos hardcoded)
| Linea | Texto | Tipo |
|-------|-------|------|
| 341 | "Soy tu **Asistente IA** de ProcureData..." | Bienvenida |
| 607 | "Lo siento, ha ocurrido un error..." | Error |
| 656 | "Gracias! Tu feedback nos ayuda a mejorar el asistente" | Toast |
| 687 | "Feedback enviado... Revisaremos esta respuesta..." | Toast |
| 776 | "AI Assistant" | Titulo |
| 778 | "Click para expandir" / "Asistente ProcureData" | Subtitulo |
| 951 | "Pregunta al asistente..." | Placeholder |
| 978 | "Como deberia haber respondido el asistente?" | Modal |
| 988 | "Cancelar" | Boton |
| 991 | "Enviar Feedback" | Boton |

#### FederatedHeroChat.tsx (5 textos hardcoded)
| Linea | Texto | Tipo |
|-------|-------|------|
| 14-18 | 4 preguntas sugeridas en espanol | Sugerencias |
| 217 | "Agente IA Federado" | Badge |
| 220 | "Pregunta sobre espacios de datos federados..." | Descripcion |
| 296 | "Pregunta sobre el espacio de datos federado..." | Placeholder |

#### SuccessStoryChatAgent.tsx (4 textos hardcoded)
| Linea | Texto | Tipo |
|-------|-------|------|
| 45-48 | 4 preguntas sugeridas en espanol | Sugerencias |
| 197 | "Pregunta sobre el caso de {company}..." | Descripcion |
| 276 | "Pregunta sobre el caso {company}..." | Placeholder |

---

### 4. PLAN DE ACCION

#### Fase A: Crear greenProcurement.json para IT, NL, PT
- Traducir las ~1400 lineas desde ES como referencia
- 3 archivos nuevos

#### Fase B: Internacionalizar los 4 componentes de chat
Para cada componente, agregar `useTranslation` y reemplazar textos hardcoded por `t()`:

1. **AssetChatInterface.tsx**: Usar namespace `common` o crear `chat` namespace. Reemplazar los 11 textos. Eliminar "ARIA" del mensaje de bienvenida.
2. **AIConcierge.tsx**: Reemplazar los 10 textos hardcoded.
3. **FederatedHeroChat.tsx**: Reemplazar las preguntas sugeridas y textos.
4. **SuccessStoryChatAgent.tsx**: Reemplazar preguntas sugeridas y placeholders.

#### Fase C: Agregar claves de traduccion
Crear claves en un namespace `chat` (o `common`) en los 7 idiomas para:
- Mensajes de bienvenida
- Preguntas sugeridas (adaptadas culturalmente)
- Placeholders
- Mensajes de error
- Feedback modal (cancelar, enviar, etc.)

---

### 5. CONCLUSION

| Aspecto | Estado |
|---------|--------|
| Archivos JSON por idioma | 45/46 para IT, NL, PT (falta greenProcurement) |
| Respuestas IA en idioma usuario | SI funcionan (via system prompt) |
| UI de chats traducida | NO - 30+ textos hardcoded en espanol |
| Rebrand ARIA completado | NO - AssetChatInterface aun dice "ARIA" |
| Preguntas sugeridas traducidas | NO - 12 preguntas hardcoded en espanol |

**Prioridad recomendada**: Fase B (internacionalizar chats) > Fase C (agregar claves) > Fase A (greenProcurement para IT/NL/PT)

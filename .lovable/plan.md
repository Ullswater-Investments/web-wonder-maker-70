
# Añadir Conocimiento Tecnico de Componentes de Espacios de Datos al Agente IA

## Resumen

Enriquecer los dos agentes de IA (`chat-ai` e `ia-conversacional-agent`) con el conocimiento tecnico detallado de los 4 documentos sobre componentes de espacios de datos federados. El contenido de estos documentos ya esta replicado en el proyecto (`src/lib/slides-data.ts`) y cubre:

1. **Componentes Clave de Gaia-X** - Keycloak, Connector, Metadata Broker, Clearing House, Compliance Service, Vocabulary Provider, Data Apps
2. **Conectores y Brokers en Espacios de Datos** - Funcionamiento detallado del Connector y Metadata Broker
3. **Keycloak y Clearing House Explicados** - Flujos de autenticacion, escenarios de disputa, no repudio
4. **Pontus-X Componentes y Analogias Web3** - Web3 Wallets/DIDs, Blockchain, Ocean Provider, Aquarius, Trust Anchors, C2D

## Cambios tecnicos

### 1. `supabase/functions/chat-ai/index.ts`

Anadir una nueva **Regla 48: Componentes Tecnologicos de Espacios de Datos Federados** al bloque SYSTEM_INSTRUCTIONS (despues de la Regla 47), con el siguiente contenido estructurado:

- **Gaia-X Tradicional (6 componentes)**: Keycloak (IdP), Connector, Metadata Broker, Clearing House, Compliance Service, Vocabulary Provider, Data Apps/C2D, con analogias practicas para cada uno
- **Tabla de equivalencias Gaia-X vs Pontus-X**: Mapeo de cada componente tradicional a su equivalente Web3
- **Pontus-X / DeltaDAO (6 componentes)**: Web3 Wallets + DIDs, Blockchain de Pontus-X, Ocean Provider, Ocean Aquarius, Trust Anchors + VCs, Ocean C2D, con analogias
- **Flujo completo en Gaia-X**: Los 5 pasos (Anuncio, Busqueda, Identidad, Intercambio, Registro)
- **Flujo completo en Pontus-X**: Los 5 pasos (Publicacion DDO, Indexacion Aquarius, Descubrimiento, Smart Contract, Acceso)
- **Principios de Soberania de Datos**: Soberania, Interoperabilidad, Confianza, Descentralizacion
- **Enlace a la presentacion interactiva**: Redirigir a `/componentes-espacios-datos` para ver los 30 slides

La regla se activara cuando el usuario pregunte por: componentes, Gaia-X, Pontus-X, conector, broker, clearing house, keycloak, wallet, DID, Ocean Protocol, Aquarius, Provider, C2D, Compute-to-Data, espacio de datos, arquitectura federada, o cualquier componente tecnico especifico.

### 2. `supabase/functions/ia-conversacional-agent/index.ts`

Anadir una nueva seccion **12. Componentes Tecnologicos de Espacios de Datos Federados** al SYSTEM_PROMPT con el mismo contenido resumido, incluyendo:

- Los 6+1 componentes de Gaia-X con sus analogias
- Los 6 componentes de Pontus-X con sus analogias
- Tabla de equivalencias
- Flujos completos
- Referencia a la presentacion interactiva en `/componentes-espacios-datos`

### Contenido tecnico a incluir (extraido de slides-data.ts)

**Gaia-X Tradicional:**
- Keycloak (IdP): "Portero del club privado" - autenticacion, autorizacion, tokens digitales
- Connector: "Puesto de aduanas personal" - soberania del dato, P2P encriptado, politicas de uso
- Metadata Broker: "Paginas Amarillas" - catalogo de metadatos, nunca almacena datos reales
- Clearing House: "Notario Digital" - registro inmutable, no repudio, escenarios de disputa
- Compliance Service: "Inspector de Calidad" - Verifiable Credentials, cumplimiento Gaia-X
- Vocabulary Provider: "Real Academia" - ontologias, estandarizacion semantica por sector
- Data Apps / C2D: "Chef a Domicilio" - algoritmo viaja a los datos

**Pontus-X / DeltaDAO:**
- Web3 Wallets + DIDs: "Pasaporte Criptografico" - identidad autoemitida, firma matematica
- Blockchain de Pontus-X: "Libro de Cuentas Publico" - Smart Contracts, EVM/Oasis, inmutable
- Ocean Provider: "Guardia que habla con el Notario" - descifra URL solo con token valido
- Ocean Aquarius: "Paginas Amarillas descentralizadas" - indexa DDOs desde blockchain
- Trust Anchors + VCs: "Sello de Calidad Criptografico" - validacion automatica, compatible Gaia-X
- Ocean C2D: "Cocina a puerta cerrada" - Kubernetes, monetizacion sin revelar datos

### Despliegue

Ambas edge functions se redesplegarán automaticamente tras la edicion.

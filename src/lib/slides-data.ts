export interface SlideData {
  id: number
  section: "intro" | "gaiax" | "transition" | "pontusx" | "summary"
  sectionLabel: string
  title: string
  subtitle?: string
  bullets: string[]
  analogy?: string
  infographicType:
    | "title-cover"
    | "overview-diagram"
    | "component-detail"
    | "analogy-visual"
    | "flow-diagram"
    | "comparison-table"
    | "architecture-diagram"
    | "process-steps"
    | "icon-grid"
    | "bridge-slide"
    | "summary-slide"
}

export const slides: SlideData[] = [
  // === SECCION 1: INTRODUCCION (Slides 1-4) ===
  {
    id: 1,
    section: "intro",
    sectionLabel: "Introduccion",
    title: "Espacios de Datos Federados",
    subtitle: "De Gaia-X a Pontus-X: La Evolucion de la Soberania de Datos en Europa",
    bullets: [
      "Una guia completa sobre los componentes de los espacios de datos federados",
      "Arquitectura tradicional de Gaia-X y su evolucion Web3 con DeltaDAO",
      "Analogias practicas para comprender cada componente",
    ],
    infographicType: "title-cover",
  },
  {
    id: 2,
    section: "intro",
    sectionLabel: "Introduccion",
    title: "Que es un Espacio de Datos Federado?",
    subtitle: "El concepto fundamental",
    bullets: [
      "Un ecosistema descentralizado donde las empresas comparten datos sin perder el control sobre ellos",
      "Basado en estandares de Gaia-X e IDSA (International Data Spaces)",
      "Los datos nunca pasan por un servidor central de terceros",
      "La confianza, el cumplimiento normativo y la estandarizacion son pilares fundamentales",
    ],
    infographicType: "overview-diagram",
  },
  {
    id: 3,
    section: "intro",
    sectionLabel: "Introduccion",
    title: "Principios de la Soberania de Datos",
    subtitle: "El por que de los espacios de datos",
    bullets: [
      "Soberania: Tu decides quien accede a tus datos y bajo que condiciones",
      "Interoperabilidad: Diferentes empresas y sectores hablan el mismo idioma tecnico",
      "Confianza: Mecanismos automatizados verifican identidad y cumplimiento",
      "Descentralizacion: No existe un unico punto de control o fallo",
    ],
    infographicType: "icon-grid",
  },
  {
    id: 4,
    section: "intro",
    sectionLabel: "Introduccion",
    title: "Los Componentes del Ecosistema",
    subtitle: "Vision general de la arquitectura",
    bullets: [
      "Identity Provider (Control de Pasaportes) - Gestion de identidad y accesos",
      "Connector (Puesto de Aduanas) - Puerta de enlace para compartir datos",
      "Metadata Broker (Paginas Amarillas) - Catalogo de datos disponibles",
      "Clearing House (Notario Digital) - Registro de transacciones",
      "Compliance Service (Inspector de Calidad) - Verificacion de cumplimiento",
      "Vocabulary Provider (Diccionario Oficial) - Estandarizacion semantica",
    ],
    infographicType: "architecture-diagram",
  },

  // === SECCION 2: GAIA-X TRADICIONAL (Slides 5-18) ===
  {
    id: 5,
    section: "gaiax",
    sectionLabel: "Gaia-X Tradicional",
    title: "Keycloak: El Control de Pasaportes",
    subtitle: "Identity Provider (IdP)",
    bullets: [
      "Software de codigo abierto para Gestion de Identidad y Accesos (IAM)",
      "Verifica quien eres (Autenticacion) y que tienes permiso para hacer (Autorizacion)",
      "Otorga un token digital que demuestra que eres un miembro legitimo de la federacion",
    ],
    analogy: "Keycloak es el portero de un club privado que revisa tu DNI, comprueba que estas en la lista de invitados y te pone la pulsera para entrar.",
    infographicType: "component-detail",
  },
  {
    id: 6,
    section: "gaiax",
    sectionLabel: "Gaia-X Tradicional",
    title: "Keycloak en Accion",
    subtitle: "Flujo de autenticacion",
    bullets: [
      "1. La empresa solicita acceso al espacio de datos",
      "2. Keycloak verifica las credenciales del solicitante",
      "3. Se emite un token digital de confianza",
      "4. El token permite la interaccion con otros participantes de la federacion",
    ],
    infographicType: "process-steps",
  },
  {
    id: 7,
    section: "gaiax",
    sectionLabel: "Gaia-X Tradicional",
    title: "Connector: El Puesto de Aduanas Personal",
    subtitle: "La pieza mas importante para cada participante",
    bullets: [
      "Es la puerta de enlace tecnica instalada en tu propia infraestructura",
      "Garantiza la soberania del dato: los datos solo se comparten bajo tus reglas",
      "La transferencia es Punto a Punto (Peer-to-Peer) y encriptada",
      "No necesita un servidor central de terceros",
    ],
    analogy: "El Conector es el puesto de aduanas de un pais. Controla exactamente que entra y que sale, adjuntando las condiciones de uso a cada paquete de datos.",
    infographicType: "component-detail",
  },
  {
    id: 8,
    section: "gaiax",
    sectionLabel: "Gaia-X Tradicional",
    title: "Connector: Politicas de Uso",
    subtitle: "Control granular de los datos",
    bullets: [
      "Define restricciones: 'Estos datos solo pueden ser usados para investigacion'",
      "Controla la duracion del acceso: 'Valido hasta el 31 de diciembre'",
      "Limita la redistribucion: 'No se permite revender ni transferir a terceros'",
      "Tecnologicamente obliga al receptor a cumplir las condiciones",
    ],
    infographicType: "analogy-visual",
  },
  {
    id: 9,
    section: "gaiax",
    sectionLabel: "Gaia-X Tradicional",
    title: "Metadata Broker: Las Paginas Amarillas",
    subtitle: "El catalogo central de metadatos",
    bullets: [
      "Directorio que contiene las descripciones de los datos disponibles",
      "NUNCA almacena los datos reales, solo metadatos (datos sobre los datos)",
      "Almacena: tipo de dato, quien lo ofrece, licencia, coste y formato",
      "Los participantes buscan en el Broker y contactan directamente al Conector del proveedor",
    ],
    analogy: "Es el catalogo de una biblioteca: no contiene los libros, solo el titulo, autor y en que estanteria encontrarlo.",
    infographicType: "component-detail",
  },
  {
    id: 10,
    section: "gaiax",
    sectionLabel: "Gaia-X Tradicional",
    title: "Metadata Broker: Como Funciona",
    subtitle: "Publicacion y busqueda de datos",
    bullets: [
      "1. Tu Conector envia un 'anuncio' al Broker con la descripcion de tus datos",
      "2. Otro participante busca en el Broker por tipo de dato o sector",
      "3. El Broker devuelve la direccion tecnica del Conector del proveedor",
      "4. La comunicacion directa se establece entre los dos Conectores",
    ],
    infographicType: "flow-diagram",
  },
  {
    id: 11,
    section: "gaiax",
    sectionLabel: "Gaia-X Tradicional",
    title: "Clearing House: El Notario Digital",
    subtitle: "Registro inmutable de transacciones",
    bullets: [
      "Intermediario que registra todas las transacciones de datos entre participantes",
      "Garantiza el no repudio: nadie puede negar que envio o recibio un dato",
      "No ve ni guarda los datos reales, solo el 'recibo' de la transaccion",
      "Registra: quien envio que, a quien, cuando y bajo que condiciones",
    ],
    analogy: "Es un notario que no lee la carta que envias, pero certifica que el sobre cerrado se entrego el martes a las 10:00.",
    infographicType: "component-detail",
  },
  {
    id: 12,
    section: "gaiax",
    sectionLabel: "Gaia-X Tradicional",
    title: "Clearing House: Escenarios de Disputa",
    subtitle: "Para que sirve el registro?",
    bullets: [
      "Escenario 1: La Empresa B dice 'nunca recibi esos datos' - El Clearing House demuestra lo contrario",
      "Escenario 2: La Empresa A dice 'los usaste fuera de lo acordado' - Hay prueba auditable",
      "Escenario 3: Auditoria regulatoria - Existe un historial completo y verificable",
      "Todo funciona como un acuse de recibo de carta certificada",
    ],
    infographicType: "analogy-visual",
  },
  {
    id: 13,
    section: "gaiax",
    sectionLabel: "Gaia-X Tradicional",
    title: "Compliance Service: El Inspector de Calidad",
    subtitle: "Verificacion de cumplimiento europeo",
    bullets: [
      "Servicio automatizado que verifica las credenciales de participantes y servicios",
      "Analiza Verifiable Credentials (Credenciales Verificables) infalsificables",
      "Verifica cumplimiento de estandares de Gaia-X, proteccion de datos y ciberseguridad",
      "Solo tras su aprobacion se puede publicar en el Metadata Broker",
    ],
    analogy: "Es el inspector de sanidad: tu puedes tener la llave de tu restaurante, pero necesitas su sello para publicar en la guia oficial.",
    infographicType: "component-detail",
  },
  {
    id: 14,
    section: "gaiax",
    sectionLabel: "Gaia-X Tradicional",
    title: "Vocabulary Provider: El Diccionario Oficial",
    subtitle: "Estandarizacion semantica",
    bullets: [
      "Repositorio de ontologias y vocabularios estandarizados por sector",
      "Define el significado exacto de cada termino en el espacio de datos",
      "Evita ambiguedades: si alguien envia 'temp: 30', se sabe que son Celsius",
      "Diccionarios por sector: automocion, agricultura, energia, salud...",
    ],
    analogy: "Es la Real Academia del espacio de datos. Garantiza que cuando alguien dice 'banco', todo el ecosistema sabe si es una entidad financiera o un asiento.",
    infographicType: "component-detail",
  },
  {
    id: 15,
    section: "gaiax",
    sectionLabel: "Gaia-X Tradicional",
    title: "Data Apps y Compute-to-Data",
    subtitle: "El Chef a Domicilio",
    bullets: [
      "Para datos ultra-sensibles que no deben salir de tus servidores",
      "En lugar de mover los datos al algoritmo, mueves el algoritmo a los datos",
      "Las Data Apps se inyectan de forma segura en el Conector del proveedor",
      "Solo se devuelve el resultado final, sin llevarse ningun dato original",
    ],
    analogy: "Un Chef viene a tu cocina, prepara el plato con tus ingredientes secretos, y solo se lleva el plato terminado. Tus ingredientes nunca salen de tu casa.",
    infographicType: "component-detail",
  },
  {
    id: 16,
    section: "gaiax",
    sectionLabel: "Gaia-X Tradicional",
    title: "Flujo Completo en Gaia-X",
    subtitle: "Un dia normal en un espacio de datos",
    bullets: [
      "1. ANUNCIO: La Empresa A publica sus datos en el Metadata Broker",
      "2. BUSQUEDA: La Empresa B busca 'datos de trafico' y encuentra la oferta",
      "3. IDENTIDAD: Keycloak verifica la identidad de ambas partes",
      "4. INTERCAMBIO: Los datos viajan de forma segura entre Conectores",
      "5. REGISTRO: El Clearing House guarda el recibo inmutable de la transaccion",
    ],
    infographicType: "process-steps",
  },
  {
    id: 17,
    section: "gaiax",
    sectionLabel: "Gaia-X Tradicional",
    title: "Arquitectura Completa Gaia-X",
    subtitle: "Todos los componentes integrados",
    bullets: [
      "Keycloak (IdP) valida identidades en la entrada",
      "Compliance Service certifica el cumplimiento normativo",
      "Vocabulary Provider estandariza el lenguaje entre participantes",
      "Metadata Broker cataloga las ofertas de datos",
      "Connector gestiona el intercambio P2P con soberania",
      "Clearing House registra cada transaccion como notario",
    ],
    infographicType: "architecture-diagram",
  },
  {
    id: 18,
    section: "gaiax",
    sectionLabel: "Gaia-X Tradicional",
    title: "Resumen: Los Pilares de Gaia-X",
    subtitle: "Confianza, cumplimiento y soberania",
    bullets: [
      "Ecosistema completamente descentralizado y federado",
      "Capas extra para asegurar legalidad, comprension y seguridad",
      "Transferencia Peer-to-Peer sin intermediarios centrales",
      "Cumplimiento estricto de normativas europeas (GDPR, Data Act)",
    ],
    infographicType: "summary-slide",
  },

  // === SECCION 3: TRANSICION (Slides 19-20) ===
  {
    id: 19,
    section: "transition",
    sectionLabel: "De Gaia-X a Pontus-X",
    title: "La Evolucion Web3",
    subtitle: "De la federacion tradicional a la descentralizacion con blockchain",
    bullets: [
      "Pontus-X: espacio de datos pan-europeo compatible con Gaia-X",
      "Desarrollado por DeltaDAO usando tecnologia Web3 y Blockchain",
      "Basado en Ocean Protocol para automatizar la confianza",
      "Misma filosofia europea, implementada con los 'legos' de la Web3",
    ],
    infographicType: "bridge-slide",
  },
  {
    id: 20,
    section: "transition",
    sectionLabel: "De Gaia-X a Pontus-X",
    title: "Tabla de Equivalencias",
    subtitle: "Gaia-X tradicional vs. Pontus-X / DeltaDAO",
    bullets: [
      "Keycloak (IdP) --> Web3 Wallets y DIDs",
      "Clearing House --> Blockchain de Pontus-X",
      "Connector --> Ocean Provider / Provider Agent",
      "Metadata Broker --> Ocean Aquarius",
      "Compliance Service --> Trust Anchors y VCs Web3",
      "Compute-to-Data --> Ocean Compute-to-Data (C2D)",
    ],
    infographicType: "comparison-table",
  },

  // === SECCION 4: PONTUS-X / DELTADAO (Slides 21-28) ===
  {
    id: 21,
    section: "pontusx",
    sectionLabel: "Pontus-X / DeltaDAO",
    title: "Web3 Wallets y DIDs",
    subtitle: "El nuevo Control de Pasaportes",
    bullets: [
      "Identidad puramente criptografica con MetaMask y DIDs",
      "DID = Identificador Descentralizado que tu mismo generas",
      "Nadie emite tu pasaporte mas que tu mismo",
      "La criptografia demuestra matematicamente tu identidad al firmar transacciones",
    ],
    analogy: "En lugar de un portero (Keycloak), tienes un Pasaporte Criptografico (Wallet) incopiable. Nadie lo emite mas que tu mismo.",
    infographicType: "component-detail",
  },
  {
    id: 22,
    section: "pontusx",
    sectionLabel: "Pontus-X / DeltaDAO",
    title: "Blockchain de Pontus-X",
    subtitle: "El nuevo Notario Digital",
    bullets: [
      "Red Blockchain compatible con EVM (Oasis Network)",
      "Todos los eventos se registran mediante Smart Contracts",
      "Libro de Cuentas Publico e Inmutable: nadie puede alterarlo",
      "El Smart Contract ejecuta el pago y registra el acceso automaticamente",
    ],
    analogy: "El notario ya no es una entidad intermediaria. La Blockchain es un Libro de Cuentas Publico e Inmutable donde todo queda registrado de forma automatica y transparente.",
    infographicType: "component-detail",
  },
  {
    id: 23,
    section: "pontusx",
    sectionLabel: "Pontus-X / DeltaDAO",
    title: "Ocean Provider",
    subtitle: "El nuevo Puesto de Aduanas",
    bullets: [
      "Guardian criptografico de tus servidores basado en Ocean Protocol",
      "Solo permite descarga o ejecucion si la Blockchain confirma el permiso",
      "Habla directamente con el Notario (la Blockchain) para validar accesos",
      "Desencripta la URL del dato solo si existe token de acceso valido",
    ],
    analogy: "Sigue siendo tu Puesto de Aduanas, pero el guardia (Ocean Provider) habla directamente con el Notario (la Blockchain). Si el Notario dice 'si, este usuario pago', la aduana le deja pasar.",
    infographicType: "component-detail",
  },
  {
    id: 24,
    section: "pontusx",
    sectionLabel: "Pontus-X / DeltaDAO",
    title: "Ocean Aquarius",
    subtitle: "Las nuevas Paginas Amarillas",
    bullets: [
      "Motor de busqueda y cache de metadatos del ecosistema Ocean/Pontus-X",
      "Lee la Blockchain para descubrir nuevos DDOs (DID Documents)",
      "Indexa los datos para busqueda rapida en el portal Marketplace",
      "Paginas Amarillas descentralizadas respaldadas por la Blockchain",
    ],
    analogy: "Son las mismas Paginas Amarillas, pero descentralizadas. Tu registro oficial queda en la Blockchain y Aquarius lo indexa para busquedas instantaneas.",
    infographicType: "component-detail",
  },
  {
    id: 25,
    section: "pontusx",
    sectionLabel: "Pontus-X / DeltaDAO",
    title: "Trust Anchors y VCs Web3",
    subtitle: "El nuevo Inspector de Calidad",
    bullets: [
      "Compatible 100% con el Trust Framework de Gaia-X",
      "Credenciales Verificables (VCs) vinculadas a cuentas Web3 (DIDs)",
      "Sellos de Calidad Criptograficos verificables automaticamente",
      "No necesitas llamar al inspector: el ecosistema lo valida solo",
    ],
    analogy: "El Inspector te emite un Sello de Calidad Criptografico (un token no transferible) que todo el ecosistema puede validar automaticamente sin llamar al inspector.",
    infographicType: "component-detail",
  },
  {
    id: 26,
    section: "pontusx",
    sectionLabel: "Pontus-X / DeltaDAO",
    title: "Ocean Compute-to-Data (C2D)",
    subtitle: "El Chef a Domicilio descentralizado",
    bullets: [
      "Ocean Protocol es pionero en Compute-to-Data",
      "Monetizacion de datos ultra-privados sin revelarlos",
      "Los consumidores compran el derecho a ejecutar un algoritmo sobre los datos",
      "Orquestacion via Kubernetes en el servidor del dueno del dato",
    ],
    analogy: "Tu pones la cocina y los ingredientes (datos). El consumidor envia a su Chef (algoritmo). Cocina a puerta cerrada en tu servidor y solo sale el plato final (resultado).",
    infographicType: "component-detail",
  },
  {
    id: 27,
    section: "pontusx",
    sectionLabel: "Pontus-X / DeltaDAO",
    title: "Arquitectura Completa Pontus-X",
    subtitle: "El ecosistema Web3 integrado",
    bullets: [
      "Web3 Wallets + DIDs validan identidades de forma descentralizada",
      "Smart Contracts en Blockchain gestionan permisos y pagos",
      "Ocean Provider protege los datos en origen",
      "Aquarius indexa los metadatos para busqueda rapida",
      "Trust Anchors + VCs garantizan el cumplimiento Gaia-X",
      "C2D permite computacion sobre datos sin moverlos",
    ],
    infographicType: "architecture-diagram",
  },
  {
    id: 28,
    section: "pontusx",
    sectionLabel: "Pontus-X / DeltaDAO",
    title: "Flujo Completo en Pontus-X",
    subtitle: "El proceso con tecnologia Web3",
    bullets: [
      "1. PUBLICACION: El proveedor registra un DDO en la Blockchain",
      "2. INDEXACION: Aquarius detecta el nuevo DDO y lo indexa",
      "3. DESCUBRIMIENTO: El consumidor busca en el Marketplace de Pontus-X",
      "4. SMART CONTRACT: Se ejecuta el contrato de acceso y pago en la Blockchain",
      "5. ACCESO: Ocean Provider valida el token y entrega el dato o ejecuta C2D",
    ],
    infographicType: "process-steps",
  },

  // === SECCION 5: RESUMEN FINAL (Slides 29-30) ===
  {
    id: 29,
    section: "summary",
    sectionLabel: "Resumen Final",
    title: "Comparativa Final",
    subtitle: "Dos caminos hacia la soberania de datos",
    bullets: [
      "Gaia-X Tradicional: Infraestructura federada con componentes centralizados de confianza",
      "Pontus-X / DeltaDAO: Misma filosofia implementada con descentralizacion total via Web3",
      "Ambos garantizan soberania, interoperabilidad y cumplimiento normativo europeo",
      "Pontus-X anade automatizacion de confianza, eliminacion de intermediarios y monetizacion directa",
    ],
    infographicType: "comparison-table",
  },
  {
    id: 30,
    section: "summary",
    sectionLabel: "Resumen Final",
    title: "El Futuro de los Datos en Europa",
    subtitle: "Soberania, confianza y colaboracion",
    bullets: [
      "Los espacios de datos federados son el pilar de la estrategia europea de datos",
      "Gaia-X establece el marco normativo y de confianza",
      "DeltaDAO y Pontus-X demuestran que la Web3 puede implementar estos principios",
      "El objetivo final: un ecosistema donde compartir datos sea seguro, justo y eficiente",
    ],
    infographicType: "summary-slide",
  },
]

export const sectionColors: Record<SlideData["section"], string> = {
  intro: "bg-primary",
  gaiax: "bg-primary",
  transition: "bg-blue-400",
  pontusx: "bg-accent",
  summary: "bg-primary",
}

export const sectionTextColors: Record<SlideData["section"], string> = {
  intro: "text-primary-foreground",
  gaiax: "text-primary-foreground",
  transition: "text-primary-foreground",
  pontusx: "text-accent-foreground",
  summary: "text-primary-foreground",
}

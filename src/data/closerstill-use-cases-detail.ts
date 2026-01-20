import { 
  Shield, Truck, Users, Brain, Radar, UserCheck, 
  Banknote, Recycle, Video, FileSignature,
  Plane, Bot, RefreshCw, LucideIcon
} from "lucide-react";

// Import visualizers
import FraudBureauVisual from "@/components/partners/closerstill/visualizers/FraudBureauVisual";
import GreenLastMileVisual from "@/components/partners/closerstill/visualizers/GreenLastMileVisual";
import AudienceOverlapVisual from "@/components/partners/closerstill/visualizers/AudienceOverlapVisual";
import AITrainingVisual from "@/components/partners/closerstill/visualizers/AITrainingVisual";
import CyberThreatVisual from "@/components/partners/closerstill/visualizers/CyberThreatVisual";
import TalentPoolVisual from "@/components/partners/closerstill/visualizers/TalentPoolVisual";
import InstantCreditVisual from "@/components/partners/closerstill/visualizers/InstantCreditVisual";
import CircularEventsVisual from "@/components/partners/closerstill/visualizers/CircularEventsVisual";
import ContentHubVisual from "@/components/partners/closerstill/visualizers/ContentHubVisual";
import SmartContractingVisual from "@/components/partners/closerstill/visualizers/SmartContractingVisual";
import GlobalRoamingVisual from "@/components/partners/closerstill/visualizers/GlobalRoamingVisual";
import AgenticNegotiationVisual from "@/components/partners/closerstill/visualizers/AgenticNegotiationVisual";
import CircularMarketplaceVisual from "@/components/partners/closerstill/visualizers/CircularMarketplaceVisual";

export interface UseCaseDetail {
  id: number;
  slug: string;
  title: string;
  icon: LucideIcon;
  category: "retail" | "tech" | "b2b" | "future";
  tagline: string;
  badges: string[];
  description: string;
  
  // Problem section
  problem: {
    headline: string;
    painPoints: string[];
    statistic: { value: string; label: string };
  };
  
  // Solution section
  solution: {
    overview: string;
    steps: { title: string; description: string }[];
    technologies: string[];
  };
  
  // Metrics
  metrics: {
    value: string;
    label: string;
    trend?: string;
  }[];
  
  // Stakeholders
  stakeholders: {
    role: string;
    benefit: string;
  }[];
  
  // Mermaid diagram
  mermaidDiagram: string;
  
  // Visual component
  VisualComponent: React.ComponentType;
}

export const useCasesDetail: UseCaseDetail[] = [
  // 1. Retail Fraud Intelligence
  {
    id: 1,
    slug: "retail-fraud-intelligence",
    title: "Retail Fraud Intelligence",
    icon: Shield,
    category: "retail",
    tagline: "Red neuronal defensiva anti-fraude",
    badges: ["Gaia-X Ready", "New Revenue", "Premium Service"],
    description: "Si un estafador ataca una tienda, todas las demás se protegen instantáneamente sin compartir datos personales. Funciona como un sistema inmunológico colectivo para el retail.",
    
    problem: {
      headline: "El Fraude Retail Cuesta Miles de Millones",
      painPoints: [
        "El 3.7% de las transacciones online son fraudulentas",
        "Los retailers europeos pierden €4.2B/año en fraude",
        "Cada marca lucha sola contra los mismos estafadores",
        "Los sistemas anti-fraude individuales son caros y limitados"
      ],
      statistic: { value: "70%", label: "de los fraudes son 'repeat offenders' que atacan múltiples tiendas" }
    },
    
    solution: {
      overview: "Un nodo Gaia-X centraliza firmas de fraude anonimizadas. Cuando una tienda detecta un patrón, todas las demás se inmunizan automáticamente sin revelar datos personales.",
      steps: [
        { title: "Detección", description: "Tienda A detecta un patrón de fraude (device fingerprint, comportamiento sospechoso, etc.)" },
        { title: "Anonimización", description: "El patrón se convierte en una 'firma de fraude' sin datos personales identificables" },
        { title: "Federación", description: "La firma se comparte instantáneamente en el nodo Gaia-X con todas las tiendas conectadas" },
        { title: "Inmunización", description: "Las demás tiendas bloquean preventivamente transacciones que coincidan con el patrón" }
      ],
      technologies: ["Gaia-X Data Space", "Zero-Knowledge Proofs", "Federated Learning", "Real-time Streaming"]
    },
    
    metrics: [
      { value: "-85%", label: "Reducción de fraude en red compartida", trend: "vs sistema individual" },
      { value: "<100ms", label: "Tiempo de propagación de alertas", trend: "Real-time" },
      { value: "+€2.3M", label: "Ahorro anual estimado por red de 50 retailers", trend: "ROI" },
      { value: "0", label: "Datos personales compartidos", trend: "Privacy-first" }
    ],
    
    stakeholders: [
      { role: "Retailer", benefit: "Reduce pérdidas sin invertir en AI propia. Acceso a inteligencia colectiva." },
      { role: "e-Show", benefit: "Nueva línea de negocio premium con fees por transacción protegida." },
      { role: "Cliente Final", benefit: "Menos fricción en checkout al no ser tratado como sospechoso injustamente." },
      { role: "Sector", benefit: "Mejora la reputación del eCommerce y reduce la desconfianza del consumidor." }
    ],
    
    mermaidDiagram: `sequenceDiagram
    participant TA as 🏪 Tienda A
    participant GX as 🛡️ Nodo Gaia-X
    participant TB as 🏬 Tienda B
    participant TC as 🏪 Tienda C
    
    TA->>TA: Detecta fraude
    TA->>GX: Firma anónima de fraude
    GX->>TB: Alerta automática
    GX->>TC: Alerta automática
    TB->>TB: Bloqueo preventivo
    TC->>TC: Bloqueo preventivo
    Note over TA,TC: Inmunidad colectiva en <100ms`,
    
    VisualComponent: FraudBureauVisual
  },
  
  // 2. Green Last Mile
  {
    id: 2,
    slug: "green-last-mile",
    title: "Green Last Mile",
    icon: Truck,
    category: "retail",
    tagline: "Logística urbana consolidada y sostenible",
    badges: ["ESG", "Cost Saving", "ZBE Compliant"],
    description: "Consolidación inteligente de rutas entre operadores logísticos en zonas de bajas emisiones, sin revelar clientes finales ni rutas propietarias.",
    
    problem: {
      headline: "La Última Milla es el Mayor Contaminante",
      painPoints: [
        "El 40% de las emisiones logísticas ocurren en la última milla",
        "Furgonetas circulan al 30% de capacidad media",
        "Las ZBE (Zonas de Bajas Emisiones) restringen acceso",
        "Cada operador optimiza solo sus propias rutas"
      ],
      statistic: { value: "60%", label: "de las furgonetas urbanas van semivacías" }
    },
    
    solution: {
      overview: "Un nodo neutro permite a operadores logísticos consolidar cargas sin revelar sus clientes. Los algoritmos optimizan rutas conjuntas manteniendo la confidencialidad comercial.",
      steps: [
        { title: "Anonimización", description: "Cada operador envía destinos como coordenadas hash sin identificar al cliente final" },
        { title: "Consolidación", description: "El algoritmo agrupa envíos por zona, optimizando capacidad de vehículos" },
        { title: "Asignación", description: "Se asignan rutas optimizadas a vehículos eco-certificados" },
        { title: "Ejecución", description: "Los paquetes viajan juntos, reduciendo emisiones y costes" }
      ],
      technologies: ["Secure Multi-Party Computation", "Route Optimization AI", "Carbon Tracking", "IoT Sensors"]
    },
    
    metrics: [
      { value: "-60%", label: "Reducción de emisiones última milla", trend: "vs actual" },
      { value: "-35%", label: "Reducción de costes logísticos", trend: "Eficiencia" },
      { value: "+40%", label: "Utilización de capacidad vehicular", trend: "Optimización" },
      { value: "100%", label: "Acceso garantizado a ZBE", trend: "Compliance" }
    ],
    
    stakeholders: [
      { role: "Operador Logístico", benefit: "Reduce costes y emisiones sin revelar clientes a competidores." },
      { role: "e-Show", benefit: "Monetiza el servicio de consolidación y certificación ESG." },
      { role: "Ciudad", benefit: "Menos congestión y contaminación en centros urbanos." },
      { role: "Retailer", benefit: "Acceso a entregas en ZBE y mejora de huella de carbono." }
    ],
    
    mermaidDiagram: `graph LR
    A[🚚 Operador A<br/>10 paquetes] --> N[🌐 Nodo Consolidación]
    B[🚐 Operador B<br/>8 paquetes] --> N
    C[📦 Operador C<br/>12 paquetes] --> N
    N --> D[🚛 Vehículo ECO<br/>30 paquetes<br/>Ruta Optimizada]
    D --> Z[🏙️ ZBE Centro Ciudad]
    
    style N fill:#10b981,stroke:#059669
    style D fill:#3b82f6,stroke:#2563eb
    style Z fill:#f59e0b,stroke:#d97706`,
    
    VisualComponent: GreenLastMileVisual
  },
  
  // 3. Audience Overlap
  {
    id: 3,
    slug: "audience-overlap",
    title: "Audience Overlap",
    icon: Users,
    category: "retail",
    tagline: "Cross-marketing sin compartir bases de datos",
    badges: ["Privacy-First", "New Revenue", "Compute-to-Data"],
    description: "Compute-to-Data: cruza bases de datos entre marcas sin mover los datos. Solo el resultado (el % de solapamiento) viaja entre las partes.",
    
    problem: {
      headline: "El Marketing Conjunto es Imposible sin Confianza",
      painPoints: [
        "Las marcas no comparten bases de datos por riesgo legal/competitivo",
        "Las campañas conjuntas se basan en estimaciones, no datos reales",
        "GDPR prohíbe compartir datos personales entre empresas",
        "Se desperdician oportunidades de cross-selling valoradas en millones"
      ],
      statistic: { value: "€3.2M", label: "valor perdido por cada campaña conjunta no ejecutada" }
    },
    
    solution: {
      overview: "En lugar de mover datos, movemos el algoritmo. El cálculo ocurre dentro del entorno seguro de cada empresa. Solo el porcentaje de overlap viaja.",
      steps: [
        { title: "Acuerdo", description: "Marca A y Marca B acuerdan calcular overlap sin ver los datos del otro" },
        { title: "Algoritmo Viaja", description: "El código de matching se ejecuta en el entorno seguro de cada marca" },
        { title: "Cálculo Local", description: "Cada marca procesa sus datos localmente, generando un hash del resultado" },
        { title: "Resultado Compartido", description: "Solo el % de overlap y segmentos agregados se comparten" }
      ],
      technologies: ["Compute-to-Data", "Federated Analytics", "Homomorphic Encryption", "Data Clean Rooms"]
    },
    
    metrics: [
      { value: "3x", label: "Efectividad de campañas conjuntas", trend: "vs estimaciones" },
      { value: "0", label: "Datos personales transferidos", trend: "GDPR compliant" },
      { value: "+45%", label: "Conversión en cross-selling", trend: "Precisión" },
      { value: "€850k", label: "Nuevo revenue por campaña típica", trend: "Monetización" }
    ],
    
    stakeholders: [
      { role: "Marca A", benefit: "Accede a insights de audiencia sin revelar su base de clientes." },
      { role: "Marca B", benefit: "Monetiza su audiencia sin riesgo legal ni competitivo." },
      { role: "e-Show", benefit: "Fee por cada cálculo de overlap ejecutado en la plataforma." },
      { role: "Consumidor", benefit: "Recibe ofertas más relevantes sin que sus datos salgan de ninguna empresa." }
    ],
    
    mermaidDiagram: `graph TB
    subgraph "Marca A"
    A1[📊 Base Datos A<br/>500k clientes]
    A2[🔐 Entorno Seguro]
    end
    
    subgraph "Marca B"
    B1[📊 Base Datos B<br/>300k clientes]
    B2[🔐 Entorno Seguro]
    end
    
    subgraph "Nodo Neutro"
    N[🧮 Solo Resultado<br/>23% overlap]
    end
    
    A1 --> A2
    B1 --> B2
    A2 -.->|Hash resultado| N
    B2 -.->|Hash resultado| N
    
    style N fill:#8b5cf6,stroke:#7c3aed`,
    
    VisualComponent: AudienceOverlapVisual
  },
  
  // 4. AI Training Ground
  {
    id: 4,
    slug: "ai-training-ground",
    title: "AI Training Ground",
    icon: Brain,
    category: "tech",
    tagline: "Monetiza tus datos para entrenar IAs",
    badges: ["Gaia-X Ready", "New Revenue", "AI/ML"],
    description: "Las startups de IA pueden entrenar sus modelos sobre datos corporativos reales sin nunca verlos. Royalties automáticos por cada uso del modelo resultante.",
    
    problem: {
      headline: "Las IAs Necesitan Datos Reales, Pero Nadie los Comparte",
      painPoints: [
        "Los modelos de IA entrenados con datos sintéticos son menos precisos",
        "Las empresas no comparten datos por miedo a fugas",
        "Las startups de IA no pueden acceder a datasets de calidad",
        "Se pierde potencial de innovación valorado en billones"
      ],
      statistic: { value: "87%", label: "de proyectos de IA fallan por falta de datos de entrenamiento de calidad" }
    },
    
    solution: {
      overview: "El modelo viaja a los datos, no al revés. Los algoritmos se entrenan in situ y el propietario de los datos recibe royalties automáticos por cada inferencia del modelo resultante.",
      steps: [
        { title: "Catálogo", description: "Empresa publica metadatos de su dataset en el marketplace (sin revelar datos)" },
        { title: "Solicitud", description: "Startup solicita entrenar su modelo sobre el dataset, especificando uso" },
        { title: "Training In-Situ", description: "El código del modelo se ejecuta dentro del entorno de datos de la empresa" },
        { title: "Royalties", description: "Smart contract distribuye ingresos por cada inferencia del modelo en producción" }
      ],
      technologies: ["Federated Learning", "Confidential Computing", "Smart Contracts", "Model Provenance"]
    },
    
    metrics: [
      { value: "+40%", label: "Precisión de modelos vs datos sintéticos", trend: "Calidad" },
      { value: "€15k-€150k", label: "Ingresos anuales por dataset típico", trend: "Monetización" },
      { value: "100%", label: "Control sobre uso de datos", trend: "Soberanía" },
      { value: "<24h", label: "Time-to-train vs meses tradicionales", trend: "Velocidad" }
    ],
    
    stakeholders: [
      { role: "Empresa con Datos", benefit: "Monetiza datasets sin riesgo de fuga. Nuevos ingresos pasivos." },
      { role: "Startup IA", benefit: "Acceso a datos reales de calidad sin negociaciones de meses." },
      { role: "e-Show", benefit: "Comisión por cada transacción de entrenamiento." },
      { role: "Sociedad", benefit: "IAs más precisas y éticas entrenadas con datos representativos." }
    ],
    
    mermaidDiagram: `sequenceDiagram
    participant E as 🏢 Empresa (Datos)
    participant M as 📦 Marketplace
    participant S as 🚀 Startup IA
    participant SC as ⚡ Smart Contract
    
    E->>M: Publica metadatos dataset
    S->>M: Solicita acceso training
    M->>E: Notifica solicitud
    E->>E: Aprueba
    S->>E: Envía código modelo
    E->>E: Training in-situ
    E->>S: Modelo entrenado
    S->>SC: Modelo en producción
    SC->>E: Royalties automáticos 💰`,
    
    VisualComponent: AITrainingVisual
  },
  
  // 5. Cyber Threat Sharing
  {
    id: 5,
    slug: "cyber-threat-sharing",
    title: "Cyber Threat Sharing",
    icon: Radar,
    category: "tech",
    tagline: "Inteligencia de amenazas en tiempo real",
    badges: ["Critical Infrastructure", "Premium", "Zero-Trust"],
    description: "Firmas de amenazas compartidas en tiempo real a través de un nodo neutro. Cuando un miembro detecta un ataque, todos se inmunizan instantáneamente.",
    
    problem: {
      headline: "Los Ciberataques se Propagan Más Rápido que las Defensas",
      painPoints: [
        "El tiempo medio de detección de un breach es de 287 días",
        "Los atacantes explotan la misma vulnerabilidad en múltiples empresas",
        "Compartir IOCs (Indicators of Compromise) es lento y manual",
        "Las empresas pequeñas no pueden permitirse SOCs avanzados"
      ],
      statistic: { value: "€4.35M", label: "coste medio de un data breach en Europa" }
    },
    
    solution: {
      overview: "Un nodo seguro centraliza firmas de amenazas en tiempo real. La detección de un ataque en cualquier miembro genera una alerta instantánea para todos, creando inmunidad colectiva.",
      steps: [
        { title: "Detección", description: "El SOC de la Empresa A detecta un patrón de ataque nuevo" },
        { title: "Normalización", description: "El IOC se convierte en formato STIX/TAXII estandarizado" },
        { title: "Broadcast", description: "El nodo distribuye la firma a todos los miembros en <1 segundo" },
        { title: "Bloqueo", description: "Los firewalls y SIEMs de los miembros bloquean automáticamente" }
      ],
      technologies: ["STIX/TAXII", "Real-time Streaming", "SIEM Integration", "Threat Intelligence Platforms"]
    },
    
    metrics: [
      { value: "<1s", label: "Tiempo de propagación de alertas", trend: "Real-time" },
      { value: "-95%", label: "Reducción de ataques exitosos repetidos", trend: "Protección" },
      { value: "€1.2M", label: "Ahorro anual por empresa mediana", trend: "ROI" },
      { value: "24/7", label: "Monitorización colectiva", trend: "Cobertura" }
    ],
    
    stakeholders: [
      { role: "CISO", benefit: "Inteligencia de amenazas de primera clase sin coste de SOC propio." },
      { role: "Empresa Pequeña", benefit: "Acceso a defensas de nivel enterprise a coste compartido." },
      { role: "e-Show", benefit: "Servicio premium de ciberseguridad con fees recurrentes." },
      { role: "Sector", benefit: "Mejora la postura de seguridad de toda la industria." }
    ],
    
    mermaidDiagram: `graph LR
    subgraph "🏢 Empresa A"
    D[🔍 Detección<br/>Nuevo malware]
    end
    
    subgraph "🛡️ Nodo Seguro"
    N[📡 IOC Feed<br/>STIX/TAXII]
    end
    
    subgraph "🏬 Empresa B"
    B[🚫 Bloqueo<br/>Automático]
    end
    
    subgraph "🏪 Empresa C"
    C[🚫 Bloqueo<br/>Automático]
    end
    
    D --> N
    N --> B
    N --> C
    
    style N fill:#ef4444,stroke:#dc2626
    style D fill:#f59e0b,stroke:#d97706`,
    
    VisualComponent: CyberThreatVisual
  },
  
  // 6. Verified Talent Pool
  {
    id: 6,
    slug: "verified-talent-pool",
    title: "Verified Talent Pool",
    icon: UserCheck,
    category: "tech",
    tagline: "CV verificable en blockchain",
    badges: ["HR Tech", "Blockchain", "Verifiable Credentials"],
    description: "CV en Blockchain: títulos y experiencia verificados criptográficamente por las empresas anteriores. Elimina el 80% del tiempo de verificación en hiring.",
    
    problem: {
      headline: "La Verificación de CVs Cuesta Tiempo y Dinero",
      painPoints: [
        "El 30% de los CVs contienen información falsa o exagerada",
        "Verificar un candidato toma 2-4 semanas de media",
        "Los procesos de referencia son manuales e ineficientes",
        "Las credenciales académicas son fáciles de falsificar"
      ],
      statistic: { value: "€15k", label: "coste de una mala contratación por verificación fallida" }
    },
    
    solution: {
      overview: "Cada experiencia laboral y título académico se registra como un Verifiable Credential en blockchain. El candidato controla qué mostrar; el reclutador verifica al instante.",
      steps: [
        { title: "Emisión", description: "Al finalizar un empleo/título, la empresa/universidad emite una credencial firmada" },
        { title: "Wallet", description: "El candidato almacena las credenciales en su wallet de identidad (SSI)" },
        { title: "Presentación", description: "Al postularse, el candidato comparte solo las credenciales relevantes" },
        { title: "Verificación", description: "El reclutador verifica en segundos contra el registro blockchain" }
      ],
      technologies: ["Verifiable Credentials", "DID (Decentralized Identity)", "Blockchain Anchoring", "SSI Wallet"]
    },
    
    metrics: [
      { value: "-80%", label: "Reducción del tiempo de verificación", trend: "De semanas a segundos" },
      { value: "100%", label: "Fiabilidad de credenciales verificadas", trend: "Inmutable" },
      { value: "€8k", label: "Ahorro por contratación", trend: "Eficiencia" },
      { value: "0", label: "Falsificaciones posibles", trend: "Seguridad" }
    ],
    
    stakeholders: [
      { role: "Candidato", benefit: "CV verificable que destaca entre falsificadores. Control total sobre sus datos." },
      { role: "Reclutador", benefit: "Verificación instantánea. Elimina el riesgo de malas contrataciones." },
      { role: "Empresa Emisora", benefit: "Protege su marca de falsos empleados. Proceso automatizado." },
      { role: "e-Show", benefit: "Fee por cada verificación y por emisión de credenciales." }
    ],
    
    mermaidDiagram: `graph TB
    subgraph "Emisión"
    U[🎓 Universidad] -->|Título| W[👤 Wallet Candidato]
    E[🏢 Empresa] -->|Experiencia| W
    end
    
    subgraph "Verificación"
    W -->|Presenta| R[👔 Reclutador]
    R -->|Verifica| BC[⛓️ Blockchain]
    BC -->|✅ Válido| R
    end
    
    style W fill:#8b5cf6,stroke:#7c3aed
    style BC fill:#10b981,stroke:#059669`,
    
    VisualComponent: TalentPoolVisual
  },
  
  // 7. Instant B2B Credit
  {
    id: 7,
    slug: "instant-b2b-credit",
    title: "Instant B2B Credit",
    icon: Banknote,
    category: "b2b",
    tagline: "Financiación embebida en la feria",
    badges: ["FinTech", "New Revenue", "EUROe"],
    description: "Las entidades financieras acceden al historial de interacciones verificadas para ofrecer crédito instantáneo en EUROe durante la feria.",
    
    problem: {
      headline: "Las Oportunidades de Negocio Mueren por Falta de Liquidez",
      painPoints: [
        "El 40% de los deals en feria no se cierran por falta de financiación inmediata",
        "Los procesos de crédito B2B tardan 30-90 días",
        "Las PYMEs no tienen acceso a condiciones competitivas",
        "La documentación manual ralentiza todo el proceso"
      ],
      statistic: { value: "€2.1M", label: "valor de deals perdidos por feria típica por falta de liquidez" }
    },
    
    solution: {
      overview: "El historial de transacciones verificadas en la plataforma se convierte en un score crediticio instantáneo. Las entidades financieras compiten para financiar deals con datos reales.",
      steps: [
        { title: "Score Automático", description: "El historial de transacciones genera un perfil crediticio en tiempo real" },
        { title: "Oferta Instantánea", description: "Múltiples financieras pujan por ofrecer las mejores condiciones" },
        { title: "Firma Digital", description: "El contrato se firma con identidad verificada del badge" },
        { title: "Desembolso EUROe", description: "Los fondos se transfieren en segundos vía stablecoin regulada" }
      ],
      technologies: ["Credit Scoring AI", "Open Banking", "EUROe Stablecoin", "eIDAS Signatures"]
    },
    
    metrics: [
      { value: "<5min", label: "De solicitud a desembolso", trend: "vs 30-90 días" },
      { value: "+35%", label: "Incremento en cierre de deals en feria", trend: "Conversión" },
      { value: "-2.5%", label: "Reducción de tipo de interés medio", trend: "Competencia" },
      { value: "100%", label: "Digital, sin papeles", trend: "Eficiencia" }
    ],
    
    stakeholders: [
      { role: "Comprador", benefit: "Financiación competitiva al instante para cerrar deals en feria." },
      { role: "Vendedor", benefit: "Cobra al momento, sin riesgo de impago." },
      { role: "Entidad Financiera", benefit: "Acceso a deals pre-cualificados con datos reales." },
      { role: "e-Show", benefit: "Comisión por cada operación de crédito facilitada." }
    ],
    
    mermaidDiagram: `sequenceDiagram
    participant C as 🛒 Comprador
    participant P as 📊 Plataforma
    participant F as 🏦 Financieras
    participant V as 🏭 Vendedor
    
    C->>P: Solicita financiación
    P->>P: Calcula score con historial
    P->>F: Subasta de condiciones
    F->>C: Ofertas en <1min
    C->>F: Acepta mejor oferta
    F->>C: Firma digital eIDAS
    F->>V: Pago EUROe instantáneo 💰
    Note over C,V: Deal cerrado en <5 min`,
    
    VisualComponent: InstantCreditVisual
  },
  
  // 8. Circular Events
  {
    id: 8,
    slug: "circular-events",
    title: "Circular Events",
    icon: Recycle,
    category: "b2b",
    tagline: "Certificación carbono neutro auditable",
    badges: ["ESG", "Compliance", "CSRD Ready"],
    description: "Trazabilidad completa de materiales del stand. El expositor obtiene un pasaporte ESG listo para reporting corporativo y cumplimiento CSRD.",
    
    problem: {
      headline: "El Reporting ESG de Eventos es un Caos",
      painPoints: [
        "Las ferias generan 4.5kg de residuos por m² de stand",
        "El 85% de los materiales de stand terminan en vertedero",
        "Los departamentos de ESG luchan por datos fiables de eventos",
        "La CSRD exigirá trazabilidad completa desde 2025"
      ],
      statistic: { value: "850t", label: "de CO2 emitidas por una feria típica de 50.000m²" }
    },
    
    solution: {
      overview: "Cada material del stand se registra con trazabilidad completa: origen, uso, destino final. El expositor recibe un certificado ESG verificable para su reporting corporativo.",
      steps: [
        { title: "Registro", description: "Cada elemento del stand se etiqueta con origen, materiales y proveedor" },
        { title: "Uso", description: "Durante la feria, se registra consumo energético, residuos generados" },
        { title: "Desmontaje", description: "Cada material se traza hasta su destino: reciclaje, reutilización o disposición" },
        { title: "Certificación", description: "Se genera un pasaporte ESG con huella de carbono verificada" }
      ],
      technologies: ["IoT Sensors", "Blockchain Traceability", "Carbon Accounting", "Digital Product Passport"]
    },
    
    metrics: [
      { value: "-70%", label: "Reducción de residuos a vertedero", trend: "Circularidad" },
      { value: "100%", label: "Trazabilidad de materiales", trend: "Compliance" },
      { value: "€25k", label: "Ahorro en reporting ESG anual", trend: "Eficiencia" },
      { value: "A+", label: "Rating ESG para eventos certificados", trend: "Reputación" }
    ],
    
    stakeholders: [
      { role: "Expositor", benefit: "Pasaporte ESG listo para reporting CSRD sin trabajo adicional." },
      { role: "Departamento ESG", benefit: "Datos verificados automáticamente para informes anuales." },
      { role: "e-Show", benefit: "Servicio premium de certificación con fees recurrentes." },
      { role: "Planeta", benefit: "Reducción real de residuos y emisiones en el sector eventos." }
    ],
    
    mermaidDiagram: `graph TB
    subgraph "📦 Pre-Evento"
    M[🪵 Materiales] --> R[📝 Registro Origen]
    end
    
    subgraph "🎪 Durante Evento"
    R --> U[⚡ Uso & Consumo]
    U --> S[📊 Sensores IoT]
    end
    
    subgraph "♻️ Post-Evento"
    S --> D[🗑️ Desmontaje]
    D --> T[📋 Trazabilidad]
    T --> C[✅ Certificado ESG]
    end
    
    style C fill:#10b981,stroke:#059669
    style S fill:#3b82f6,stroke:#2563eb`,
    
    VisualComponent: CircularEventsVisual
  },
  
  // 9. B2B Content Hub
  {
    id: 9,
    slug: "b2b-content-hub",
    title: "B2B Content Hub",
    icon: Video,
    category: "b2b",
    tagline: "Royalties automáticos para ponentes",
    badges: ["New Revenue", "Smart Contracts", "Tokenización"],
    description: "Contenido premium con micropagos por acceso. Los royalties se distribuyen automáticamente al creador mediante smart contracts cada vez que alguien consume el contenido.",
    
    problem: {
      headline: "El Contenido de Ferias Muere Cuando Termina el Evento",
      painPoints: [
        "El 90% del contenido de conferencias no se monetiza post-evento",
        "Los ponentes no reciben compensación por el valor a largo plazo",
        "El contenido premium se pierde entre grabaciones gratuitas",
        "No hay modelo de negocio sostenible para contenido B2B"
      ],
      statistic: { value: "€500k", label: "valor de contenido no monetizado por feria típica" }
    },
    
    solution: {
      overview: "Cada ponencia se tokeniza como un activo digital. El acceso se paga con micropagos, y los smart contracts distribuyen automáticamente royalties al creador, moderador y organizador.",
      steps: [
        { title: "Tokenización", description: "La ponencia se registra como activo digital con metadatos y precio" },
        { title: "Acceso", description: "Los usuarios pagan micropagos (desde €0.50) para acceder" },
        { title: "Consumo", description: "El contenido se entrega con DRM y marcas de agua personalizadas" },
        { title: "Royalties", description: "Smart contract distribuye ingresos: 60% ponente, 20% moderador, 20% organizador" }
      ],
      technologies: ["NFT Metadata", "Micropayments", "Smart Contracts", "DRM Streaming"]
    },
    
    metrics: [
      { value: "€50k-€200k", label: "Revenue anual por biblioteca de contenido", trend: "Monetización" },
      { value: "60%", label: "De ingresos van directamente al creador", trend: "Fairness" },
      { value: "+300%", label: "Vida útil del contenido post-evento", trend: "Valor" },
      { value: "<1s", label: "Tiempo de liquidación de royalties", trend: "Instantáneo" }
    ],
    
    stakeholders: [
      { role: "Ponente", benefit: "Ingresos pasivos automáticos por su conocimiento compartido." },
      { role: "Asistente", benefit: "Acceso flexible a contenido premium sin suscripciones caras." },
      { role: "e-Show", benefit: "Nueva línea de negocio con ingresos recurrentes post-evento." },
      { role: "Sector", benefit: "Incentivos para crear contenido de mayor calidad." }
    ],
    
    mermaidDiagram: `sequenceDiagram
    participant P as 🎤 Ponente
    participant H as 🎬 Content Hub
    participant U as 👤 Usuario
    participant SC as ⚡ Smart Contract
    
    P->>H: Sube ponencia
    H->>H: Tokeniza contenido
    U->>H: Solicita acceso (€2.50)
    H->>U: Streaming DRM
    H->>SC: Trigger pago
    SC->>P: €1.50 (60%)
    SC->>H: €0.50 (20%)
    SC->>H: €0.50 (20%) organizador
    Note over P,SC: Liquidación <1 segundo`,
    
    VisualComponent: ContentHubVisual
  },
  
  // 10. Smart Deal-Maker
  {
    id: 10,
    slug: "smart-deal-maker",
    title: "Smart Deal-Maker",
    icon: FileSignature,
    category: "b2b",
    tagline: "De meses a minutos en contratos",
    badges: ["Legal Tech", "Gaia-X Ready", "eIDAS"],
    description: "Plantillas de NDA/MOU que se autocompletan con la identidad verificada del badge digital. Firma electrónica cualificada incluida.",
    
    problem: {
      headline: "Los Contratos Lentos Matan los Deals de Feria",
      painPoints: [
        "El 65% de los acuerdos de feria se enfrían esperando documentación legal",
        "Preparar un NDA básico toma 3-5 días de media",
        "Los equipos legales son el cuello de botella de las ventas",
        "Las firmas en papel son anacrónicas en 2024"
      ],
      statistic: { value: "23 días", label: "tiempo medio desde 'deal verbal' hasta 'contrato firmado'" }
    },
    
    solution: {
      overview: "Plantillas legales pre-aprobadas se autocompletan con datos verificados del badge digital. La firma electrónica cualificada (eIDAS nivel alto) se ejecuta en segundos.",
      steps: [
        { title: "Selección", description: "Se elige plantilla (NDA, MOU, LOI) del catálogo pre-aprobado por legal" },
        { title: "Autocompletado", description: "Los datos de ambas partes se rellenan desde sus identidades verificadas" },
        { title: "Revisión IA", description: "La IA destaca cláusulas clave y sugiere modificaciones estándar" },
        { title: "Firma eIDAS", description: "Ambas partes firman con certificado cualificado en segundos" }
      ],
      technologies: ["Smart Contracts", "eIDAS Qualified Signatures", "Legal AI", "Verifiable Credentials"]
    },
    
    metrics: [
      { value: "<15min", label: "De acuerdo verbal a contrato firmado", trend: "vs 23 días" },
      { value: "+45%", label: "Incremento en cierre de deals en feria", trend: "Conversión" },
      { value: "-90%", label: "Reducción de carga en equipos legales", trend: "Eficiencia" },
      { value: "100%", label: "Validez legal en toda la UE", trend: "Compliance eIDAS" }
    ],
    
    stakeholders: [
      { role: "Vendedor", benefit: "Cierra deals en el momento sin perder momentum." },
      { role: "Comprador", benefit: "Proceso de firma rápido y sin fricciones." },
      { role: "Legal", benefit: "Plantillas pre-aprobadas reducen revisiones manuales." },
      { role: "e-Show", benefit: "Fee por cada contrato procesado en la plataforma." }
    ],
    
    mermaidDiagram: `graph LR
    subgraph "👤 Parte A"
    A[🎫 Badge Digital<br/>Identidad Verificada]
    end
    
    subgraph "⚡ Smart Deal-Maker"
    T[📄 Plantilla NDA]
    AI[🤖 Revisión IA]
    S[✍️ Firma eIDAS]
    end
    
    subgraph "👤 Parte B"
    B[🎫 Badge Digital<br/>Identidad Verificada]
    end
    
    A --> T
    B --> T
    T --> AI
    AI --> S
    S --> C[📜 Contrato Válido<br/>en <15 min]
    
    style S fill:#8b5cf6,stroke:#7c3aed
    style C fill:#10b981,stroke:#059669`,
    
    VisualComponent: SmartContractingVisual
  },
  
  // 11. Global Business Roaming
  {
    id: 11,
    slug: "global-business-roaming",
    title: "Global Business Roaming",
    icon: Plane,
    category: "future",
    tagline: "Tu validación viaja contigo",
    badges: ["International Scale", "Gaia-X Ready", "Future Vision"],
    description: "Tu validación en Madrid sirve en Londres y Singapur. Paquetes internacionales con 'Fast-Track' automático en cualquier feria del grupo.",
    
    problem: {
      headline: "Cada Feria es un Silo de Identidad",
      painPoints: [
        "Los expositores repiten el proceso de registro en cada evento",
        "Las credenciales no son portables entre organizadores",
        "Se pierde el historial de reputación al cambiar de feria",
        "Los compradores VIP no reciben trato preferente fuera de 'su' evento"
      ],
      statistic: { value: "12h", label: "tiempo perdido por expositor internacional en re-registros anuales" }
    },
    
    solution: {
      overview: "Una identidad federada que viaja con el usuario. Las credenciales verificadas en una feria se reconocen automáticamente en cualquier evento del ecosistema Gaia-X.",
      steps: [
        { title: "Identidad Base", description: "El expositor crea su identidad verificada en cualquier feria del grupo" },
        { title: "Credenciales", description: "Acumula credenciales verificables: pagos, contratos, reputación" },
        { title: "Roaming", description: "Al registrarse en otra feria, presenta su wallet de credenciales" },
        { title: "Fast-Track", description: "Acceso VIP automático basado en historial verificado" }
      ],
      technologies: ["Federated Identity", "Verifiable Credentials", "Cross-Border Recognition", "SSI Wallet"]
    },
    
    metrics: [
      { value: "-95%", label: "Reducción tiempo de registro en ferias siguientes", trend: "Eficiencia" },
      { value: "100%", label: "Portabilidad de reputación", trend: "Global" },
      { value: "+60%", label: "Incremento en asistencia a eventos internacionales", trend: "Engagement" },
      { value: "0", label: "Duplicación de procesos KYB", trend: "Una vez para siempre" }
    ],
    
    stakeholders: [
      { role: "Expositor Internacional", benefit: "Una identidad para todas las ferias. Ahorro masivo de tiempo." },
      { role: "Comprador VIP", benefit: "Trato preferente automático en cualquier evento del grupo." },
      { role: "Organizador", benefit: "Atrae expositores internacionales con proceso frictionless." },
      { role: "Ecosistema", benefit: "Red de ferias interconectadas con efectos de red positivos." }
    ],
    
    mermaidDiagram: `graph TB
    subgraph "🇪🇸 e-Show Madrid"
    M[✅ Verificación<br/>Inicial]
    end
    
    subgraph "👤 Wallet Usuario"
    W[🎫 Credenciales<br/>Verificadas]
    end
    
    subgraph "🌍 Global Recognition"
    L[🇬🇧 London Event]
    S[🇸🇬 Singapore Fair]
    D[🇩🇪 Berlin Summit]
    end
    
    M --> W
    W -->|Fast-Track| L
    W -->|Fast-Track| S
    W -->|Fast-Track| D
    
    style W fill:#8b5cf6,stroke:#7c3aed
    style M fill:#10b981,stroke:#059669`,
    
    VisualComponent: GlobalRoamingVisual
  },
  
  // 12. AI Bot-to-Bot Negotiation
  {
    id: 12,
    slug: "ai-bot-to-bot-negotiation",
    title: "AI Bot-to-Bot Negotiation",
    icon: Bot,
    category: "future",
    tagline: "Pre-acuerdos en milisegundos",
    badges: ["Agentic AI", "Next-Gen", "Autonomous"],
    description: "Agentes de IA negocian pre-acuerdos basados en parámetros técnicos antes de la reunión humana. Los ejecutivos solo validan o rechazan.",
    
    problem: {
      headline: "El 80% del Tiempo de Negociación es en Detalles Técnicos",
      painPoints: [
        "Los ejecutivos pierden horas en negociaciones de parámetros técnicos",
        "El matchmaking actual ignora compatibilidad técnica real",
        "Los pre-acuerdos manuales tardan semanas",
        "Se pierden oportunidades por falta de tiempo de los decisores"
      ],
      statistic: { value: "78%", label: "de reuniones B2B en ferias no resultan en follow-up por incompatibilidad técnica básica" }
    },
    
    solution: {
      overview: "Cada empresa tiene un 'agente IA' que conoce sus parámetros técnicos, precios mínimos y condiciones. Los agentes negocian 24/7, presentando solo deals pre-acordados a los humanos.",
      steps: [
        { title: "Configuración", description: "El usuario define parámetros: precio mínimo/máximo, especificaciones técnicas, condiciones" },
        { title: "Matching", description: "Los agentes IA identifican contrapartes compatibles automáticamente" },
        { title: "Negociación", description: "Los bots intercambian propuestas hasta alcanzar un pre-acuerdo viable" },
        { title: "Validación", description: "Los humanos solo revisan y aprueban deals ya negociados técnicamente" }
      ],
      technologies: ["LLM Agents", "Multi-Agent Systems", "Automated Negotiation", "Smart Contracts"]
    },
    
    metrics: [
      { value: "<1s", label: "Tiempo de pre-acuerdo entre bots", trend: "Instantáneo" },
      { value: "+85%", label: "Incremento en deals cerrados por ejecutivo", trend: "Productividad" },
      { value: "-90%", label: "Reducción de reuniones sin resultado", trend: "Eficiencia" },
      { value: "24/7", label: "Negociación continua mientras duermes", trend: "Siempre activo" }
    ],
    
    stakeholders: [
      { role: "Ejecutivo", benefit: "Solo dedica tiempo a deals pre-cualificados técnicamente." },
      { role: "Compras", benefit: "Automatiza el sourcing inicial de proveedores." },
      { role: "Ventas", benefit: "Pipeline lleno de leads con alta probabilidad de cierre." },
      { role: "e-Show", benefit: "Servicio premium de IA agentic con fees por deal cerrado." }
    ],
    
    mermaidDiagram: `sequenceDiagram
    participant A as 🤖 Bot Empresa A
    participant N as 🌐 Nodo Negociación
    participant B as 🤖 Bot Empresa B
    participant H as 👔 Humanos
    
    A->>N: Parámetros: €100-120/u, 1000u min
    B->>N: Parámetros: €90-115/u, 500u min
    N->>N: Calcula zona de acuerdo
    A->>B: Propuesta: €112, 750u
    B->>A: Contrapropuesta: €108, 800u
    A->>B: Acepta: €110, 800u
    N->>H: Pre-acuerdo listo para validar
    H->>H: ✅ Aprobado en 2 clicks`,
    
    VisualComponent: AgenticNegotiationVisual
  },
  
  // 13. Circular Asset Marketplace
  {
    id: 13,
    slug: "circular-asset-marketplace",
    title: "Circular Asset Marketplace",
    icon: RefreshCw,
    category: "future",
    tagline: "Mercado secundario post-feria",
    badges: ["Zero Waste", "ESG Premium", "Circular Economy"],
    description: "Mercado secundario para mobiliario y electrónica post-feria. Trazabilidad 'Residuo Cero' certificada y segunda vida garantizada para cada activo.",
    
    problem: {
      headline: "Los Materiales de Feria Son Usar y Tirar",
      painPoints: [
        "El 85% del mobiliario de stand se usa una sola vez",
        "La electrónica de demo termina en almacenes olvidados",
        "Los expositores pagan por almacenar o destruir materiales",
        "No existe un mercado organizado de segunda mano B2B para eventos"
      ],
      statistic: { value: "€120M", label: "en activos destruidos anualmente en el sector ferial europeo" }
    },
    
    solution: {
      overview: "Un marketplace donde los expositores venden o alquilan sus activos post-evento. Cada pieza tiene trazabilidad blockchain y certificación de segunda vida.",
      steps: [
        { title: "Listado", description: "El expositor lista mobiliario/electrónica disponible post-evento" },
        { title: "Verificación", description: "Cada activo se certifica con estado y vida útil restante" },
        { title: "Transacción", description: "Otros expositores compran o alquilan para sus eventos" },
        { title: "Certificación", description: "Se emite certificado 'Segunda Vida' para reporting ESG" }
      ],
      technologies: ["Asset Tokenization", "Blockchain Traceability", "Circular Economy Platform", "ESG Certification"]
    },
    
    metrics: [
      { value: "-80%", label: "Reducción de residuos de eventos", trend: "Circularidad" },
      { value: "+€40k", label: "Recuperación media por expositor grande", trend: "Ingresos" },
      { value: "3x", label: "Extensión de vida útil de activos", trend: "Sostenibilidad" },
      { value: "100%", label: "Trazabilidad de segunda vida", trend: "Certificable" }
    ],
    
    stakeholders: [
      { role: "Expositor Vendedor", benefit: "Recupera inversión en lugar de pagar por destrucción." },
      { role: "Expositor Comprador", benefit: "Acceso a mobiliario de calidad a fracción del precio." },
      { role: "Departamento ESG", benefit: "Certificados de circularidad para informes CSRD." },
      { role: "e-Show", benefit: "Comisión por cada transacción y servicio de certificación." }
    ],
    
    mermaidDiagram: `graph LR
    subgraph "📦 Post-Evento"
    A[🪑 Mobiliario<br/>Stand Premium] --> L[📋 Listado<br/>Marketplace]
    B[💻 Electrónica<br/>Demo] --> L
    end
    
    subgraph "♻️ Marketplace"
    L --> V[✅ Verificación<br/>Estado & Vida Útil]
    V --> M[🛒 Compra/Alquiler]
    end
    
    subgraph "🌱 Segunda Vida"
    M --> N[🎪 Nuevo Evento]
    M --> C[📜 Certificado<br/>ESG]
    end
    
    style V fill:#10b981,stroke:#059669
    style C fill:#8b5cf6,stroke:#7c3aed`,
    
    VisualComponent: CircularMarketplaceVisual
  }
];

export const getUseCaseById = (id: number): UseCaseDetail | undefined => {
  return useCasesDetail.find(uc => uc.id === id);
};

export const getUseCaseBySlug = (slug: string): UseCaseDetail | undefined => {
  return useCasesDetail.find(uc => uc.slug === slug);
};

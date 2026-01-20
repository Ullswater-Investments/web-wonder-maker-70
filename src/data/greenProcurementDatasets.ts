// Green Procurement Dataset definitions for catalog
// These are used to generate the synthetic assets and route to detail pages

export interface GreenProcurementDataset {
  id: string;
  slug: string;
  categoryKey: string;
  icon: string;
  color: string;
  gradient: string;
  price: number;
  pricingModel: "free" | "subscription" | "one_time" | "usage";
  badges: string[];
  hasGreenBadge: boolean;
  kybVerified: boolean;
  reputationScore: number;
  reviewCount: number;
}

// Category A: Huella de Carbono y LCA
export const lcaDatasets: GreenProcurementDataset[] = [
  {
    id: "gp-001",
    slug: "factores-emision-materiales",
    categoryKey: "Impacto Ambiental",
    icon: "Factory",
    color: "emerald",
    gradient: "from-emerald-900 to-green-800",
    price: 800,
    pricingModel: "subscription",
    badges: ["greenProcurement", "lcaCertified", "scope3Ready"],
    hasGreenBadge: true,
    kybVerified: true,
    reputationScore: 4.7,
    reviewCount: 234
  },
  {
    id: "gp-002",
    slug: "intensidad-carbono-red",
    categoryKey: "Energía",
    icon: "Zap",
    color: "yellow",
    gradient: "from-yellow-900 to-amber-800",
    price: 0,
    pricingModel: "free",
    badges: ["greenProcurement", "openData", "scope2Ready"],
    hasGreenBadge: true,
    kybVerified: true,
    reputationScore: 4.9,
    reviewCount: 567
  },
  {
    id: "gp-003",
    slug: "emisiones-logisticas-modal",
    categoryKey: "Transporte",
    icon: "Truck",
    color: "blue",
    gradient: "from-blue-900 to-indigo-800",
    price: 450,
    pricingModel: "subscription",
    badges: ["greenProcurement", "scope3Ready"],
    hasGreenBadge: true,
    kybVerified: true,
    reputationScore: 4.6,
    reviewCount: 189
  },
  {
    id: "gp-004",
    slug: "emisiones-scope3-cloud",
    categoryKey: "IT / Servicios",
    icon: "Cloud",
    color: "cyan",
    gradient: "from-cyan-900 to-teal-800",
    price: 250,
    pricingModel: "subscription",
    badges: ["greenProcurement", "scope3Ready", "pueMetrics"],
    hasGreenBadge: true,
    kybVerified: true,
    reputationScore: 4.5,
    reviewCount: 145
  }
];

// Category B: Materias Primas y Economía Circular
export const circularEconomyDatasets: GreenProcurementDataset[] = [
  {
    id: "gp-005",
    slug: "precios-materiales-reciclados",
    categoryKey: "Mercado",
    icon: "Recycle",
    color: "green",
    gradient: "from-green-900 to-emerald-800",
    price: 75,
    pricingModel: "usage",
    badges: ["greenProcurement", "circularEconomy"],
    hasGreenBadge: true,
    kybVerified: true,
    reputationScore: 4.4,
    reviewCount: 98
  },
  {
    id: "gp-006",
    slug: "inventario-bioplasticos",
    categoryKey: "Materiales",
    icon: "FlaskConical",
    color: "lime",
    gradient: "from-lime-900 to-green-800",
    price: 350,
    pricingModel: "one_time",
    badges: ["greenProcurement", "bioMaterials"],
    hasGreenBadge: true,
    kybVerified: true,
    reputationScore: 4.3,
    reviewCount: 67
  },
  {
    id: "gp-007",
    slug: "riesgo-hidrico-agricultura",
    categoryKey: "Recursos Naturales",
    icon: "Droplets",
    color: "sky",
    gradient: "from-sky-900 to-blue-800",
    price: 0,
    pricingModel: "free",
    badges: ["greenProcurement", "openData", "waterRisk"],
    hasGreenBadge: true,
    kybVerified: true,
    reputationScore: 4.8,
    reviewCount: 312
  },
  {
    id: "gp-008",
    slug: "minerales-conflicto-3tg",
    categoryKey: "Cumplimiento",
    icon: "ShieldAlert",
    color: "orange",
    gradient: "from-orange-900 to-red-800",
    price: 600,
    pricingModel: "subscription",
    badges: ["greenProcurement", "conflictFree", "dueDiligence"],
    hasGreenBadge: false,
    kybVerified: true,
    reputationScore: 4.7,
    reviewCount: 156
  }
];

// Category C: Cumplimiento Normativo y Certificaciones
export const complianceDatasets: GreenProcurementDataset[] = [
  {
    id: "gp-009",
    slug: "registro-ecolabels",
    categoryKey: "Certificaciones",
    icon: "Award",
    color: "teal",
    gradient: "from-teal-900 to-cyan-800",
    price: 200,
    pricingModel: "subscription",
    badges: ["greenProcurement", "ecolabels"],
    hasGreenBadge: true,
    kybVerified: true,
    reputationScore: 4.5,
    reviewCount: 123
  },
  {
    id: "gp-010",
    slug: "sustancias-reach-rohs",
    categoryKey: "Química / Salud",
    icon: "FlaskRound",
    color: "red",
    gradient: "from-red-900 to-rose-800",
    price: 0,
    pricingModel: "free",
    badges: ["greenProcurement", "openData", "reachCompliant"],
    hasGreenBadge: false,
    kybVerified: true,
    reputationScore: 4.9,
    reviewCount: 445
  },
  {
    id: "gp-011",
    slug: "deforestacion-eudr",
    categoryKey: "Geoespacial",
    icon: "TreeDeciduous",
    color: "green",
    gradient: "from-green-900 to-emerald-800",
    price: 500,
    pricingModel: "subscription",
    badges: ["greenProcurement", "eudrCompliant", "satellite"],
    hasGreenBadge: true,
    kybVerified: true,
    reputationScore: 4.8,
    reviewCount: 234
  },
  {
    id: "gp-012",
    slug: "epd-construccion",
    categoryKey: "Construcción",
    icon: "Building",
    color: "stone",
    gradient: "from-stone-800 to-zinc-700",
    price: 300,
    pricingModel: "one_time",
    badges: ["greenProcurement", "lcaCertified", "leedBreeam"],
    hasGreenBadge: true,
    kybVerified: true,
    reputationScore: 4.6,
    reviewCount: 178
  }
];

// Category D: Proveedores y Riesgo ESG
export const esgRiskDatasets: GreenProcurementDataset[] = [
  {
    id: "gp-013",
    slug: "scoring-esg-proveedores",
    categoryKey: "Gestión de Riesgos",
    icon: "ShieldCheck",
    color: "emerald",
    gradient: "from-emerald-900 to-teal-800",
    price: 75,
    pricingModel: "usage",
    badges: ["greenProcurement", "esgScoring", "scope3Ready"],
    hasGreenBadge: true,
    kybVerified: true,
    reputationScore: 4.7,
    reviewCount: 289
  },
  {
    id: "gp-014",
    slug: "violaciones-laborales",
    categoryKey: "Social",
    icon: "Users",
    color: "rose",
    gradient: "from-rose-900 to-pink-800",
    price: 400,
    pricingModel: "subscription",
    badges: ["greenProcurement", "dueDiligence", "humanRights"],
    hasGreenBadge: false,
    kybVerified: true,
    reputationScore: 4.5,
    reviewCount: 167
  },
  {
    id: "gp-015",
    slug: "indice-reparabilidad",
    categoryKey: "Economía Circular",
    icon: "Wrench",
    color: "amber",
    gradient: "from-amber-900 to-orange-800",
    price: 180,
    pricingModel: "subscription",
    badges: ["greenProcurement", "circularEconomy", "rightToRepair"],
    hasGreenBadge: true,
    kybVerified: true,
    reputationScore: 4.4,
    reviewCount: 112
  },
  {
    id: "gp-016",
    slug: "diversidad-proveedores",
    categoryKey: "Gobernanza",
    icon: "Heart",
    color: "purple",
    gradient: "from-purple-900 to-violet-800",
    price: 250,
    pricingModel: "subscription",
    badges: ["greenProcurement", "diversity", "socialImpact"],
    hasGreenBadge: false,
    kybVerified: true,
    reputationScore: 4.3,
    reviewCount: 89
  }
];

// Category E: Energía y Mercados Financieros Verdes
export const greenFinanceDatasets: GreenProcurementDataset[] = [
  {
    id: "gp-017",
    slug: "garantias-origen-recs",
    categoryKey: "Energía / Trading",
    icon: "FileCheck",
    color: "green",
    gradient: "from-green-900 to-emerald-800",
    price: 350,
    pricingModel: "subscription",
    badges: ["greenProcurement", "re100", "goosRecs"],
    hasGreenBadge: true,
    kybVerified: true,
    reputationScore: 4.6,
    reviewCount: 198
  },
  {
    id: "gp-018",
    slug: "tco-vehiculos-ev-ice",
    categoryKey: "Movilidad",
    icon: "Car",
    color: "blue",
    gradient: "from-blue-900 to-indigo-800",
    price: 500,
    pricingModel: "subscription",
    badges: ["greenProcurement", "electrification", "tcoAnalysis"],
    hasGreenBadge: true,
    kybVerified: true,
    reputationScore: 4.7,
    reviewCount: 234
  },
  {
    id: "gp-019",
    slug: "creditos-carbono-precio",
    categoryKey: "Finanzas",
    icon: "TrendingUp",
    color: "cyan",
    gradient: "from-cyan-900 to-teal-800",
    price: 400,
    pricingModel: "subscription",
    badges: ["greenProcurement", "carbonCredits", "netZero"],
    hasGreenBadge: true,
    kybVerified: true,
    reputationScore: 4.5,
    reviewCount: 178
  },
  {
    id: "gp-020",
    slug: "eficiencia-maquinaria",
    categoryKey: "CapEx / Operaciones",
    icon: "Settings",
    color: "slate",
    gradient: "from-slate-800 to-zinc-700",
    price: 0,
    pricingModel: "free",
    badges: ["greenProcurement", "openData", "energyEfficiency"],
    hasGreenBadge: true,
    kybVerified: true,
    reputationScore: 4.8,
    reviewCount: 356
  }
];

// All datasets combined
export const allGreenProcurementDatasets = [
  ...lcaDatasets,
  ...circularEconomyDatasets,
  ...complianceDatasets,
  ...esgRiskDatasets,
  ...greenFinanceDatasets
];

// Category mapping for filtering
export const greenProcurementCategories = {
  lca: {
    id: "lca",
    name: "Huella de Carbono y LCA",
    icon: "Gauge",
    datasets: lcaDatasets
  },
  circular: {
    id: "circular",
    name: "Economía Circular",
    icon: "Recycle",
    datasets: circularEconomyDatasets
  },
  compliance: {
    id: "compliance",
    name: "Cumplimiento Normativo",
    icon: "Scale",
    datasets: complianceDatasets
  },
  esg: {
    id: "esg",
    name: "Riesgo ESG",
    icon: "ShieldCheck",
    datasets: esgRiskDatasets
  },
  finance: {
    id: "finance",
    name: "Finanzas Verdes",
    icon: "Wallet",
    datasets: greenFinanceDatasets
  }
};

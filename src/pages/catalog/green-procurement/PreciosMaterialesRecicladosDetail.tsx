import { GreenProcurementDetailBase } from "@/components/catalog/GreenProcurementDetailBase";

const SAMPLE_DATA = [
  { material_type: "R-PET Clear", price_eur_ton: 1250, purity_grade: "food_grade", stock_available_tons: 850, price_virgin_eur: 1180, premium_pct: 5.9, supplier_country: "DE", delivery_weeks: 2 },
  { material_type: "HDPE Natural", price_eur_ton: 920, purity_grade: "industrial", stock_available_tons: 1200, price_virgin_eur: 1350, premium_pct: -31.8, supplier_country: "NL", delivery_weeks: 1 },
  { material_type: "Acero Reciclado", price_eur_ton: 385, purity_grade: "construction", stock_available_tons: 15000, price_virgin_eur: 620, premium_pct: -37.9, supplier_country: "ES", delivery_weeks: 2 },
  { material_type: "Aluminio Reciclado", price_eur_ton: 1850, purity_grade: "A380", stock_available_tons: 2200, price_virgin_eur: 2450, premium_pct: -24.5, supplier_country: "IT", delivery_weeks: 3 },
  { material_type: "Vidrio Reciclado Clear", price_eur_ton: 75, purity_grade: "container", stock_available_tons: 8500, price_virgin_eur: 120, premium_pct: -37.5, supplier_country: "FR", delivery_weeks: 1 },
  { material_type: "R-PP Post-Consumer", price_eur_ton: 980, purity_grade: "industrial", stock_available_tons: 620, price_virgin_eur: 1280, premium_pct: -23.4, supplier_country: "BE", delivery_weeks: 2 },
  { material_type: "PCR LDPE Film", price_eur_ton: 1150, purity_grade: "packaging", stock_available_tons: 380, price_virgin_eur: 1420, premium_pct: -19.0, supplier_country: "DE", delivery_weeks: 3 },
  { material_type: "Cobre Reciclado", price_eur_ton: 7850, purity_grade: "A_grade", stock_available_tons: 450, price_virgin_eur: 8520, premium_pct: -7.9, supplier_country: "PL", delivery_weeks: 2 },
];

const SAMPLE_COLUMNS = [
  { header: "Material", accessorKey: "material_type" },
  { header: "Precio €/t", accessorKey: "price_eur_ton", format: "currency" as const },
  { header: "Grado", accessorKey: "purity_grade" },
  { header: "Stock (t)", accessorKey: "stock_available_tons", format: "number" as const },
  { header: "Precio Virgen €", accessorKey: "price_virgin_eur", format: "currency" as const },
  { header: "Prima %", accessorKey: "premium_pct", format: "percent" as const },
  { header: "País", accessorKey: "supplier_country" },
  { header: "Entrega (sem)", accessorKey: "delivery_weeks" },
];

export default function PreciosMaterialesRecicladosDetail() {
  return (
    <GreenProcurementDetailBase 
      productSlug="precios-materiales-reciclados"
      sampleData={SAMPLE_DATA}
      sampleColumns={SAMPLE_COLUMNS}
    />
  );
}

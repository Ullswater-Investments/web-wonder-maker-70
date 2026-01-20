import { GreenProcurementDetailBase } from "@/components/catalog/GreenProcurementDetailBase";
const SAMPLE_DATA = [
  { equipment_id: "EQ-MOT-001", equipment_type: "Electric Motor", power_kw: 75, efficiency_class: "IE5", annual_kwh: 185000, savings_vs_ie3_pct: 8.5, payback_years: 2.5, manufacturer: "ABB" },
  { equipment_id: "EQ-COMP-002", equipment_type: "Compressor", power_kw: 45, efficiency_class: "IE4", annual_kwh: 125000, savings_vs_ie3_pct: 5.2, payback_years: 3.2, manufacturer: "Atlas Copco" },
  { equipment_id: "EQ-PUMP-003", equipment_type: "Centrifugal Pump", power_kw: 22, efficiency_class: "IE5", annual_kwh: 58000, savings_vs_ie3_pct: 9.8, payback_years: 2.1, manufacturer: "Grundfos" },
  { equipment_id: "EQ-FAN-004", equipment_type: "Industrial Fan", power_kw: 15, efficiency_class: "IE4", annual_kwh: 42000, savings_vs_ie3_pct: 6.5, payback_years: 2.8, manufacturer: "Siemens" },
  { equipment_id: "EQ-TRANS-005", equipment_type: "Transformer", power_kw: 1000, efficiency_class: "Tier 2", annual_kwh: 2500000, savings_vs_ie3_pct: 3.2, payback_years: 4.5, manufacturer: "Schneider" },
];
const SAMPLE_COLUMNS = [
  { header: "ID", accessorKey: "equipment_id" },
  { header: "Tipo", accessorKey: "equipment_type" },
  { header: "Potencia kW", accessorKey: "power_kw", format: "number" as const },
  { header: "Clase Eficiencia", accessorKey: "efficiency_class" },
  { header: "Consumo kWh/año", accessorKey: "annual_kwh", format: "number" as const },
  { header: "Ahorro vs IE3 %", accessorKey: "savings_vs_ie3_pct", format: "percent" as const },
  { header: "Payback (años)", accessorKey: "payback_years", format: "number" as const },
  { header: "Fabricante", accessorKey: "manufacturer" },
];
export default function EficienciaMaquinariaDetail() {
  return <GreenProcurementDetailBase productSlug="eficiencia-maquinaria" sampleData={SAMPLE_DATA} sampleColumns={SAMPLE_COLUMNS} />;
}

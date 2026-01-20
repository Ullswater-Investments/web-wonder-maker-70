import { GreenProcurementDetailBase } from "@/components/catalog/GreenProcurementDetailBase";
const SAMPLE_DATA = [
  { market: "EU ETS", date: "2025-01-20", price_eur_ton: 72.50, price_change_pct: 1.2, volume_mt: 12500, contract_type: "Spot", project_type: "N/A" },
  { market: "VCM - Verra", date: "2025-01-20", price_eur_ton: 8.50, price_change_pct: -2.5, volume_mt: 850, contract_type: "Spot", project_type: "REDD+" },
  { market: "VCM - Gold Standard", date: "2025-01-20", price_eur_ton: 15.20, price_change_pct: 0.8, volume_mt: 420, contract_type: "Forward", project_type: "Cookstoves" },
  { market: "UK ETS", date: "2025-01-20", price_eur_ton: 42.80, price_change_pct: 0.5, volume_mt: 3200, contract_type: "Spot", project_type: "N/A" },
  { market: "VCM - Tech Removal", date: "2025-01-20", price_eur_ton: 450.00, price_change_pct: 5.2, volume_mt: 15, contract_type: "Forward 2026", project_type: "DAC" },
];
const SAMPLE_COLUMNS = [
  { header: "Mercado", accessorKey: "market" },
  { header: "Fecha", accessorKey: "date", format: "date" as const },
  { header: "Precio €/t", accessorKey: "price_eur_ton", format: "currency" as const },
  { header: "Cambio %", accessorKey: "price_change_pct", format: "percent" as const },
  { header: "Volumen Mt", accessorKey: "volume_mt", format: "number" as const },
  { header: "Contrato", accessorKey: "contract_type" },
  { header: "Tipo Proyecto", accessorKey: "project_type" },
];
export default function CreditosCarbonoDetail() {
  return <GreenProcurementDetailBase productSlug="creditos-carbono-precio" sampleData={SAMPLE_DATA} sampleColumns={SAMPLE_COLUMNS} />;
}

import { GreenProcurementDetailBase } from "@/components/catalog/GreenProcurementDetailBase";
const SAMPLE_DATA = [
  { goo_id: "GO-2024-001", technology: "Wind Onshore", country: "ES", vintage: 2024, price_eur_mwh: 2.85, volume_mwh: 50000, issuing_body: "CNMC", status: "Available" },
  { goo_id: "GO-2024-002", technology: "Solar PV", country: "DE", vintage: 2024, price_eur_mwh: 3.20, volume_mwh: 25000, issuing_body: "UBA", status: "Available" },
  { goo_id: "GO-2024-003", technology: "Hydro", country: "NO", vintage: 2024, price_eur_mwh: 0.85, volume_mwh: 100000, issuing_body: "Statnett", status: "Available" },
  { goo_id: "GO-2023-004", technology: "Wind Offshore", country: "DK", vintage: 2023, price_eur_mwh: 4.50, volume_mwh: 15000, issuing_body: "Energinet", status: "Sold" },
  { goo_id: "GO-2024-005", technology: "Biomass", country: "SE", vintage: 2024, price_eur_mwh: 1.95, volume_mwh: 35000, issuing_body: "Svenska Kraftnät", status: "Available" },
];
const SAMPLE_COLUMNS = [
  { header: "GO ID", accessorKey: "goo_id" },
  { header: "Tecnología", accessorKey: "technology" },
  { header: "País", accessorKey: "country" },
  { header: "Vintage", accessorKey: "vintage" },
  { header: "Precio €/MWh", accessorKey: "price_eur_mwh", format: "currency" as const },
  { header: "Volumen MWh", accessorKey: "volume_mwh", format: "number" as const },
  { header: "Emisor", accessorKey: "issuing_body" },
  { header: "Estado", accessorKey: "status" },
];
export default function GarantiasOrigenDetail() {
  return <GreenProcurementDetailBase productSlug="garantias-origen-recs" sampleData={SAMPLE_DATA} sampleColumns={SAMPLE_COLUMNS} />;
}

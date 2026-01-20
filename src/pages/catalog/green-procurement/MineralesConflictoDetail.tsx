import { GreenProcurementDetailBase } from "@/components/catalog/GreenProcurementDetailBase";

const SAMPLE_DATA = [
  { smelter_id: "CID001234", smelter_name: "Thaisarco", mineral: "Tin", country: "TH", rmap_status: "Conformant", audit_date: "2024-08-15", mine_origin: "Indonesia, Myanmar", risk_level: "Low" },
  { smelter_id: "CID002567", smelter_name: "Tantalum Mining Corp", mineral: "Tantalum", country: "AU", rmap_status: "Conformant", audit_date: "2024-06-20", mine_origin: "Australia", risk_level: "Low" },
  { smelter_id: "CID003890", smelter_name: "Guangzhou Tungsten", mineral: "Tungsten", country: "CN", rmap_status: "Active", audit_date: "2024-09-01", mine_origin: "China, Russia", risk_level: "Medium" },
  { smelter_id: "CID004123", smelter_name: "Argor-Heraeus", mineral: "Gold", country: "CH", rmap_status: "Conformant", audit_date: "2024-07-10", mine_origin: "Multiple (LBMA)", risk_level: "Low" },
  { smelter_id: "CID005456", smelter_name: "PT Refined Bangka Tin", mineral: "Tin", country: "ID", rmap_status: "Conformant", audit_date: "2024-05-25", mine_origin: "Indonesia (Bangka)", risk_level: "Medium" },
  { smelter_id: "CID006789", smelter_name: "H.C. Starck Tantalum", mineral: "Tantalum", country: "DE", rmap_status: "Conformant", audit_date: "2024-08-30", mine_origin: "Rwanda, DRC (Certified)", risk_level: "Low" },
  { smelter_id: "CID007012", smelter_name: "Wolfram Bergbau", mineral: "Tungsten", country: "AT", rmap_status: "Conformant", audit_date: "2024-04-15", mine_origin: "Austria", risk_level: "Low" },
  { smelter_id: "CID008345", smelter_name: "Rand Refinery", mineral: "Gold", country: "ZA", rmap_status: "Conformant", audit_date: "2024-07-22", mine_origin: "South Africa", risk_level: "Low" },
];

const SAMPLE_COLUMNS = [
  { header: "Smelter ID", accessorKey: "smelter_id" },
  { header: "Nombre", accessorKey: "smelter_name" },
  { header: "Mineral", accessorKey: "mineral" },
  { header: "País", accessorKey: "country" },
  { header: "Estatus RMAP", accessorKey: "rmap_status" },
  { header: "Última Auditoría", accessorKey: "audit_date", format: "date" as const },
  { header: "Origen Minas", accessorKey: "mine_origin" },
  { header: "Nivel Riesgo", accessorKey: "risk_level" },
];

export default function MineralesConflictoDetail() {
  return (
    <GreenProcurementDetailBase 
      productSlug="minerales-conflicto-3tg"
      sampleData={SAMPLE_DATA}
      sampleColumns={SAMPLE_COLUMNS}
    />
  );
}

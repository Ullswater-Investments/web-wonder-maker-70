import { GreenProcurementDetailBase } from "@/components/catalog/GreenProcurementDetailBase";
const SAMPLE_DATA = [
  { product_id: "REP-001", product_name: "iPhone 15 Pro", brand: "Apple", repairability_score: 4.5, spare_parts_years: 7, disassembly_time_min: 25, documentation_score: 8, software_support_years: 6 },
  { product_id: "REP-002", product_name: "ThinkPad X1 Carbon", brand: "Lenovo", repairability_score: 8.2, spare_parts_years: 10, disassembly_time_min: 15, documentation_score: 9, software_support_years: 8 },
  { product_id: "REP-003", product_name: "Galaxy S24", brand: "Samsung", repairability_score: 6.0, spare_parts_years: 7, disassembly_time_min: 35, documentation_score: 7, software_support_years: 5 },
  { product_id: "REP-004", product_name: "Framework 16", brand: "Framework", repairability_score: 10.0, spare_parts_years: 15, disassembly_time_min: 5, documentation_score: 10, software_support_years: 10 },
  { product_id: "REP-005", product_name: "Dell Latitude 5540", brand: "Dell", repairability_score: 7.5, spare_parts_years: 8, disassembly_time_min: 20, documentation_score: 8, software_support_years: 7 },
];
const SAMPLE_COLUMNS = [
  { header: "ID", accessorKey: "product_id" },
  { header: "Producto", accessorKey: "product_name" },
  { header: "Marca", accessorKey: "brand" },
  { header: "Score (1-10)", accessorKey: "repairability_score", format: "number" as const },
  { header: "Repuestos (años)", accessorKey: "spare_parts_years" },
  { header: "Desmontaje (min)", accessorKey: "disassembly_time_min" },
  { header: "Documentación", accessorKey: "documentation_score" },
  { header: "Soporte SW (años)", accessorKey: "software_support_years" },
];
export default function IndiceReparabilidadDetail() {
  return <GreenProcurementDetailBase productSlug="indice-reparabilidad" sampleData={SAMPLE_DATA} sampleColumns={SAMPLE_COLUMNS} />;
}

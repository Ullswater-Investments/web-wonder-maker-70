import { GreenProcurementDetailBase } from "@/components/catalog/GreenProcurementDetailBase";

const SAMPLE_DATA = [
  { material_id: "MAT-STEEL-001", material_name: "Acero al Carbono", material_category: "steel", co2e_per_kg: 2.89, recycled_content_pct: 25, production_region: "ES", energy_mj_per_kg: 20.5, water_liters_per_kg: 15.2, data_quality_score: 5, last_review: "2024-06-15" },
  { material_id: "MAT-ALUM-001", material_name: "Aluminio Primario", material_category: "aluminum", co2e_per_kg: 11.89, recycled_content_pct: 0, production_region: "NO", energy_mj_per_kg: 155.0, water_liters_per_kg: 8.5, data_quality_score: 5, last_review: "2024-06-15" },
  { material_id: "MAT-ALUM-002", material_name: "Aluminio Reciclado", material_category: "aluminum", co2e_per_kg: 0.52, recycled_content_pct: 100, production_region: "DE", energy_mj_per_kg: 5.2, water_liters_per_kg: 2.1, data_quality_score: 4, last_review: "2024-05-20" },
  { material_id: "MAT-CEMENT-001", material_name: "Cemento Portland", material_category: "cement", co2e_per_kg: 0.91, recycled_content_pct: 0, production_region: "ES", energy_mj_per_kg: 4.8, water_liters_per_kg: 0.3, data_quality_score: 5, last_review: "2024-07-01" },
  { material_id: "MAT-GLASS-001", material_name: "Vidrio Float", material_category: "glass", co2e_per_kg: 0.85, recycled_content_pct: 30, production_region: "FR", energy_mj_per_kg: 12.5, water_liters_per_kg: 1.8, data_quality_score: 4, last_review: "2024-06-10" },
  { material_id: "MAT-PET-001", material_name: "PET Virgen", material_category: "plastic", co2e_per_kg: 3.14, recycled_content_pct: 0, production_region: "NL", energy_mj_per_kg: 80.0, water_liters_per_kg: 12.0, data_quality_score: 5, last_review: "2024-06-15" },
  { material_id: "MAT-PET-002", material_name: "R-PET", material_category: "plastic", co2e_per_kg: 1.02, recycled_content_pct: 100, production_region: "DE", energy_mj_per_kg: 25.0, water_liters_per_kg: 3.5, data_quality_score: 4, last_review: "2024-06-01" },
  { material_id: "MAT-STEEL-002", material_name: "Acero Inoxidable", material_category: "steel", co2e_per_kg: 6.15, recycled_content_pct: 60, production_region: "IT", energy_mj_per_kg: 45.0, water_liters_per_kg: 18.5, data_quality_score: 5, last_review: "2024-07-10" },
];

const SAMPLE_COLUMNS = [
  { header: "Material ID", accessorKey: "material_id" },
  { header: "Nombre", accessorKey: "material_name" },
  { header: "Categoría", accessorKey: "material_category" },
  { header: "kg CO2e/kg", accessorKey: "co2e_per_kg", format: "number" as const },
  { header: "% Reciclado", accessorKey: "recycled_content_pct", format: "percent" as const },
  { header: "Región", accessorKey: "production_region" },
  { header: "MJ/kg", accessorKey: "energy_mj_per_kg", format: "number" as const },
  { header: "Calidad", accessorKey: "data_quality_score" },
];

export default function FactoresEmisionDetail() {
  return (
    <GreenProcurementDetailBase 
      productSlug="factores-emision-materiales"
      sampleData={SAMPLE_DATA}
      sampleColumns={SAMPLE_COLUMNS}
    />
  );
}

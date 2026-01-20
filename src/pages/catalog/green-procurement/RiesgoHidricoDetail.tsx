import { GreenProcurementDetailBase } from "@/components/catalog/GreenProcurementDetailBase";

const SAMPLE_DATA = [
  { commodity: "Algodón", origin_country: "IN", basin_name: "Indus Basin", water_stress_level: "Extremely High", liters_per_kg: 10000, drought_risk: "High", seasonal_variability: "Very High", irrigation_dependency: 92 },
  { commodity: "Aguacate", origin_country: "MX", basin_name: "Michoacán", water_stress_level: "High", liters_per_kg: 2000, drought_risk: "Medium-High", seasonal_variability: "Medium", irrigation_dependency: 85 },
  { commodity: "Almendras", origin_country: "US", basin_name: "Central Valley CA", water_stress_level: "Extremely High", liters_per_kg: 12000, drought_risk: "Extremely High", seasonal_variability: "Low", irrigation_dependency: 100 },
  { commodity: "Café Arábica", origin_country: "BR", basin_name: "Minas Gerais", water_stress_level: "Medium-High", liters_per_kg: 15000, drought_risk: "Medium", seasonal_variability: "High", irrigation_dependency: 45 },
  { commodity: "Cacao", origin_country: "CI", basin_name: "Bandama River", water_stress_level: "Low-Medium", liters_per_kg: 18000, drought_risk: "Low", seasonal_variability: "Medium", irrigation_dependency: 5 },
  { commodity: "Arroz", origin_country: "TH", basin_name: "Chao Phraya", water_stress_level: "High", liters_per_kg: 2500, drought_risk: "Medium", seasonal_variability: "Very High", irrigation_dependency: 78 },
  { commodity: "Soja", origin_country: "BR", basin_name: "Cerrado", water_stress_level: "Medium", liters_per_kg: 2000, drought_risk: "Medium-High", seasonal_variability: "High", irrigation_dependency: 25 },
  { commodity: "Aceite Palma", origin_country: "ID", basin_name: "Sumatra Basins", water_stress_level: "Low", liters_per_kg: 5000, drought_risk: "Low", seasonal_variability: "Low", irrigation_dependency: 8 },
];

const SAMPLE_COLUMNS = [
  { header: "Commodity", accessorKey: "commodity" },
  { header: "País", accessorKey: "origin_country" },
  { header: "Cuenca", accessorKey: "basin_name" },
  { header: "Estrés Hídrico", accessorKey: "water_stress_level" },
  { header: "L/kg", accessorKey: "liters_per_kg", format: "number" as const },
  { header: "Riesgo Sequía", accessorKey: "drought_risk" },
  { header: "Variabilidad", accessorKey: "seasonal_variability" },
  { header: "% Riego", accessorKey: "irrigation_dependency", format: "percent" as const },
];

export default function RiesgoHidricoDetail() {
  return (
    <GreenProcurementDetailBase 
      productSlug="riesgo-hidrico-agricultura"
      sampleData={SAMPLE_DATA}
      sampleColumns={SAMPLE_COLUMNS}
    />
  );
}

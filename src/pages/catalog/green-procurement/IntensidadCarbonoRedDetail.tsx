import { GreenProcurementDetailBase } from "@/components/catalog/GreenProcurementDetailBase";

const SAMPLE_DATA = [
  { timestamp: "2025-01-20T10:00:00Z", zone_key: "ES", carbon_intensity_gco2kwh: 142, renewable_pct: 58.2, solar_pct: 18.5, wind_pct: 32.1, hydro_pct: 7.6, coal_pct: 2.1, gas_pct: 18.5, nuclear_pct: 21.2 },
  { timestamp: "2025-01-20T10:00:00Z", zone_key: "DE", carbon_intensity_gco2kwh: 285, renewable_pct: 52.1, solar_pct: 8.2, wind_pct: 35.8, hydro_pct: 8.1, coal_pct: 18.5, gas_pct: 12.8, nuclear_pct: 16.6 },
  { timestamp: "2025-01-20T10:00:00Z", zone_key: "FR", carbon_intensity_gco2kwh: 45, renewable_pct: 28.5, solar_pct: 5.2, wind_pct: 12.8, hydro_pct: 10.5, coal_pct: 0.8, gas_pct: 5.2, nuclear_pct: 65.5 },
  { timestamp: "2025-01-20T10:00:00Z", zone_key: "NO", carbon_intensity_gco2kwh: 12, renewable_pct: 98.2, solar_pct: 0.5, wind_pct: 8.5, hydro_pct: 89.2, coal_pct: 0.0, gas_pct: 1.2, nuclear_pct: 0.6 },
  { timestamp: "2025-01-20T10:00:00Z", zone_key: "PL", carbon_intensity_gco2kwh: 658, renewable_pct: 22.5, solar_pct: 3.8, wind_pct: 15.2, hydro_pct: 3.5, coal_pct: 62.5, gas_pct: 8.5, nuclear_pct: 6.5 },
  { timestamp: "2025-01-20T10:00:00Z", zone_key: "SE", carbon_intensity_gco2kwh: 18, renewable_pct: 72.5, solar_pct: 1.2, wind_pct: 25.8, hydro_pct: 45.5, coal_pct: 0.2, gas_pct: 1.8, nuclear_pct: 25.5 },
  { timestamp: "2025-01-20T10:00:00Z", zone_key: "IT", carbon_intensity_gco2kwh: 312, renewable_pct: 42.8, solar_pct: 12.5, wind_pct: 8.2, hydro_pct: 22.1, coal_pct: 8.5, gas_pct: 42.5, nuclear_pct: 6.2 },
  { timestamp: "2025-01-20T10:00:00Z", zone_key: "NL", carbon_intensity_gco2kwh: 285, renewable_pct: 38.5, solar_pct: 8.5, wind_pct: 25.2, hydro_pct: 4.8, coal_pct: 12.8, gas_pct: 38.5, nuclear_pct: 10.2 },
];

const SAMPLE_COLUMNS = [
  { header: "Timestamp", accessorKey: "timestamp" },
  { header: "País", accessorKey: "zone_key" },
  { header: "gCO2/kWh", accessorKey: "carbon_intensity_gco2kwh", format: "number" as const },
  { header: "% Renovable", accessorKey: "renewable_pct", format: "percent" as const },
  { header: "% Solar", accessorKey: "solar_pct", format: "percent" as const },
  { header: "% Eólica", accessorKey: "wind_pct", format: "percent" as const },
  { header: "% Carbón", accessorKey: "coal_pct", format: "percent" as const },
  { header: "% Nuclear", accessorKey: "nuclear_pct", format: "percent" as const },
];

export default function IntensidadCarbonoRedDetail() {
  return (
    <GreenProcurementDetailBase 
      productSlug="intensidad-carbono-red"
      sampleData={SAMPLE_DATA}
      sampleColumns={SAMPLE_COLUMNS}
    />
  );
}

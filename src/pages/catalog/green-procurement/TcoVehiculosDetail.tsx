import { GreenProcurementDetailBase } from "@/components/catalog/GreenProcurementDetailBase";
const SAMPLE_DATA = [
  { vehicle_model: "Tesla Model 3 LR", vehicle_type: "EV", tco_3y_eur: 38500, tco_5y_eur: 52000, acquisition_eur: 45000, energy_3y_eur: 4500, maintenance_3y_eur: 1500, residual_value_pct: 55, breakeven_km: 45000 },
  { vehicle_model: "VW Passat 2.0 TDI", vehicle_type: "ICE", tco_3y_eur: 42000, tco_5y_eur: 62000, acquisition_eur: 38000, energy_3y_eur: 12000, maintenance_3y_eur: 4500, residual_value_pct: 45, breakeven_km: 0 },
  { vehicle_model: "BMW i4 eDrive40", vehicle_type: "EV", tco_3y_eur: 48000, tco_5y_eur: 65000, acquisition_eur: 58000, energy_3y_eur: 5200, maintenance_3y_eur: 1800, residual_value_pct: 52, breakeven_km: 52000 },
  { vehicle_model: "Mercedes C300 e PHEV", vehicle_type: "PHEV", tco_3y_eur: 45000, tco_5y_eur: 63000, acquisition_eur: 52000, energy_3y_eur: 7500, maintenance_3y_eur: 3200, residual_value_pct: 48, breakeven_km: 35000 },
  { vehicle_model: "Renault Megane E-Tech", vehicle_type: "EV", tco_3y_eur: 32000, tco_5y_eur: 44000, acquisition_eur: 35000, energy_3y_eur: 3800, maintenance_3y_eur: 1200, residual_value_pct: 50, breakeven_km: 38000 },
];
const SAMPLE_COLUMNS = [
  { header: "Modelo", accessorKey: "vehicle_model" },
  { header: "Tipo", accessorKey: "vehicle_type" },
  { header: "TCO 3 años €", accessorKey: "tco_3y_eur", format: "currency" as const },
  { header: "TCO 5 años €", accessorKey: "tco_5y_eur", format: "currency" as const },
  { header: "Adquisición €", accessorKey: "acquisition_eur", format: "currency" as const },
  { header: "Energía 3a €", accessorKey: "energy_3y_eur", format: "currency" as const },
  { header: "Valor Residual %", accessorKey: "residual_value_pct", format: "percent" as const },
  { header: "Breakeven km", accessorKey: "breakeven_km", format: "number" as const },
];
export default function TcoVehiculosDetail() {
  return <GreenProcurementDetailBase productSlug="tco-vehiculos-ev-ice" sampleData={SAMPLE_DATA} sampleColumns={SAMPLE_COLUMNS} />;
}

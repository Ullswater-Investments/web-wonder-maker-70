import { GreenProcurementDetailBase } from "@/components/catalog/GreenProcurementDetailBase";

const SAMPLE_DATA = [
  { transport_mode: "road_truck", vehicle_type: "Heavy Truck (40t)", distance_km: 850, cargo_tons: 22.5, gco2_per_tkm: 62.5, load_factor: 0.85, fuel_type: "diesel", route: "Madrid-Paris" },
  { transport_mode: "rail_freight", vehicle_type: "Electric Freight", distance_km: 1200, cargo_tons: 450, gco2_per_tkm: 8.2, load_factor: 0.92, fuel_type: "electric", route: "Rotterdam-Milan" },
  { transport_mode: "sea_container", vehicle_type: "Container Ship (12000 TEU)", distance_km: 15000, cargo_tons: 125000, gco2_per_tkm: 12.5, load_factor: 0.88, fuel_type: "HFO", route: "Shanghai-Rotterdam" },
  { transport_mode: "air_cargo", vehicle_type: "Boeing 747-8F", distance_km: 8500, cargo_tons: 85, gco2_per_tkm: 602.0, load_factor: 0.72, fuel_type: "jet_fuel", route: "Hong Kong-Frankfurt" },
  { transport_mode: "road_van", vehicle_type: "Light Van (3.5t)", distance_km: 120, cargo_tons: 1.2, gco2_per_tkm: 185.0, load_factor: 0.65, fuel_type: "diesel", route: "Last Mile Berlin" },
  { transport_mode: "road_truck_ev", vehicle_type: "Electric Truck (20t)", distance_km: 280, cargo_tons: 12.5, gco2_per_tkm: 18.5, load_factor: 0.78, fuel_type: "electric", route: "Amsterdam-Brussels" },
  { transport_mode: "barge", vehicle_type: "Rhine Barge", distance_km: 650, cargo_tons: 2500, gco2_per_tkm: 22.0, load_factor: 0.95, fuel_type: "diesel", route: "Duisburg-Rotterdam" },
  { transport_mode: "rail_intermodal", vehicle_type: "Intermodal Container", distance_km: 980, cargo_tons: 280, gco2_per_tkm: 15.2, load_factor: 0.88, fuel_type: "mixed", route: "Zaragoza-Antwerp" },
];

const SAMPLE_COLUMNS = [
  { header: "Modo", accessorKey: "transport_mode" },
  { header: "Vehículo", accessorKey: "vehicle_type" },
  { header: "Distancia (km)", accessorKey: "distance_km", format: "number" as const },
  { header: "Carga (t)", accessorKey: "cargo_tons", format: "number" as const },
  { header: "gCO2/t-km", accessorKey: "gco2_per_tkm", format: "number" as const },
  { header: "Factor Carga", accessorKey: "load_factor", format: "percent" as const },
  { header: "Combustible", accessorKey: "fuel_type" },
  { header: "Ruta", accessorKey: "route" },
];

export default function EmisionesLogisticasDetail() {
  return (
    <GreenProcurementDetailBase 
      productSlug="emisiones-logisticas-modal"
      sampleData={SAMPLE_DATA}
      sampleColumns={SAMPLE_COLUMNS}
    />
  );
}

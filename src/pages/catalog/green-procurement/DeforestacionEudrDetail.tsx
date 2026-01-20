import { GreenProcurementDetailBase } from "@/components/catalog/GreenProcurementDetailBase";

const SAMPLE_DATA = [
  { parcel_id: "EUDR-BR-001", gps_lat: -12.5432, gps_lon: -55.7234, commodity: "Soja", country: "BR", deforestation_risk: "Low", forest_cover_2020: 0, land_use_change: false, certification: "RTRS" },
  { parcel_id: "EUDR-ID-002", gps_lat: 1.2345, gps_lon: 103.456, commodity: "Palma", country: "ID", deforestation_risk: "High", forest_cover_2020: 45, land_use_change: true, certification: "None" },
  { parcel_id: "EUDR-CI-003", gps_lat: 6.8234, gps_lon: -5.2876, commodity: "Cacao", country: "CI", deforestation_risk: "Medium", forest_cover_2020: 22, land_use_change: false, certification: "Rainforest Alliance" },
  { parcel_id: "EUDR-BR-004", gps_lat: -3.1234, gps_lon: -60.0234, commodity: "Caucho", country: "BR", deforestation_risk: "High", forest_cover_2020: 78, land_use_change: true, certification: "None" },
  { parcel_id: "EUDR-CO-005", gps_lat: 4.5678, gps_lon: -74.123, commodity: "Café", country: "CO", deforestation_risk: "Low", forest_cover_2020: 5, land_use_change: false, certification: "4C" },
  { parcel_id: "EUDR-PE-006", gps_lat: -10.234, gps_lon: -75.567, commodity: "Madera", country: "PE", deforestation_risk: "Medium", forest_cover_2020: 85, land_use_change: false, certification: "FSC" },
];

const SAMPLE_COLUMNS = [
  { header: "Parcel ID", accessorKey: "parcel_id" },
  { header: "Lat", accessorKey: "gps_lat", format: "number" as const },
  { header: "Lon", accessorKey: "gps_lon", format: "number" as const },
  { header: "Commodity", accessorKey: "commodity" },
  { header: "País", accessorKey: "country" },
  { header: "Riesgo Deforest.", accessorKey: "deforestation_risk" },
  { header: "% Bosque 2020", accessorKey: "forest_cover_2020", format: "percent" as const },
  { header: "Certificación", accessorKey: "certification" },
];

export default function DeforestacionEudrDetail() {
  return <GreenProcurementDetailBase productSlug="deforestacion-eudr" sampleData={SAMPLE_DATA} sampleColumns={SAMPLE_COLUMNS} />;
}

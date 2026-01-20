import { GreenProcurementDetailBase } from "@/components/catalog/GreenProcurementDetailBase";

const SAMPLE_DATA = [
  { cas_number: "7439-92-1", substance_name: "Plomo", svhc_list: true, rohs_restricted: true, max_concentration_pct: 0.1, sunset_date: "N/A - Restricted", exemptions: "Some batteries, alloys", jurisdiction: "EU" },
  { cas_number: "7440-43-9", substance_name: "Cadmio", svhc_list: true, rohs_restricted: true, max_concentration_pct: 0.01, sunset_date: "N/A - Restricted", exemptions: "Some contacts, solders", jurisdiction: "EU" },
  { cas_number: "117-81-7", substance_name: "DEHP (Ftalato)", svhc_list: true, rohs_restricted: true, max_concentration_pct: 0.1, sunset_date: "2025-02-21", exemptions: "Medical devices (temp)", jurisdiction: "EU" },
  { cas_number: "7440-38-2", substance_name: "Arsénico", svhc_list: true, rohs_restricted: false, max_concentration_pct: 0.05, sunset_date: "2024-11-01", exemptions: "Lead-free solders", jurisdiction: "EU" },
  { cas_number: "335-67-1", substance_name: "PFOA", svhc_list: true, rohs_restricted: false, max_concentration_pct: 0.000025, sunset_date: "Restricted since 2020", exemptions: "None", jurisdiction: "EU/Global" },
  { cas_number: "7439-97-6", substance_name: "Mercurio", svhc_list: true, rohs_restricted: true, max_concentration_pct: 0.1, sunset_date: "N/A - Restricted", exemptions: "Some lamps", jurisdiction: "EU" },
  { cas_number: "18540-29-9", substance_name: "Cromo VI", svhc_list: true, rohs_restricted: true, max_concentration_pct: 0.1, sunset_date: "N/A - Restricted", exemptions: "Coatings (industrial)", jurisdiction: "EU" },
  { cas_number: "80-05-7", substance_name: "Bisfenol A (BPA)", svhc_list: true, rohs_restricted: false, max_concentration_pct: 0.02, sunset_date: "2025-01-01 (thermal paper)", exemptions: "Some industrial uses", jurisdiction: "EU" },
];

const SAMPLE_COLUMNS = [
  { header: "CAS", accessorKey: "cas_number" },
  { header: "Sustancia", accessorKey: "substance_name" },
  { header: "Lista SVHC", accessorKey: "svhc_list" },
  { header: "RoHS", accessorKey: "rohs_restricted" },
  { header: "Máx. %", accessorKey: "max_concentration_pct", format: "percent" as const },
  { header: "Fecha Sunset", accessorKey: "sunset_date" },
  { header: "Exenciones", accessorKey: "exemptions" },
  { header: "Jurisdicción", accessorKey: "jurisdiction" },
];

export default function SustanciasReachRohsDetail() {
  return (
    <GreenProcurementDetailBase 
      productSlug="sustancias-reach-rohs"
      sampleData={SAMPLE_DATA}
      sampleColumns={SAMPLE_COLUMNS}
    />
  );
}

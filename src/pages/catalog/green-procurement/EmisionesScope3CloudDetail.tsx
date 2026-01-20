import { GreenProcurementDetailBase } from "@/components/catalog/GreenProcurementDetailBase";

const SAMPLE_DATA = [
  { provider: "AWS", region: "eu-west-1", service_type: "compute", pue: 1.15, cfe_score: 65, kgco2_per_tb: 0.42, renewable_ppc: true, carbon_neutral_certified: true },
  { provider: "Azure", region: "West Europe", service_type: "storage", pue: 1.18, cfe_score: 72, kgco2_per_tb: 0.35, renewable_ppc: true, carbon_neutral_certified: true },
  { provider: "GCP", region: "europe-west1", service_type: "compute", pue: 1.10, cfe_score: 85, kgco2_per_tb: 0.28, renewable_ppc: true, carbon_neutral_certified: true },
  { provider: "AWS", region: "eu-central-1", service_type: "compute", pue: 1.20, cfe_score: 58, kgco2_per_tb: 0.52, renewable_ppc: true, carbon_neutral_certified: false },
  { provider: "Oracle Cloud", region: "Frankfurt", service_type: "database", pue: 1.25, cfe_score: 45, kgco2_per_tb: 0.68, renewable_ppc: false, carbon_neutral_certified: false },
  { provider: "GCP", region: "europe-north1", service_type: "compute", pue: 1.08, cfe_score: 98, kgco2_per_tb: 0.08, renewable_ppc: true, carbon_neutral_certified: true },
  { provider: "Azure", region: "North Europe", service_type: "ai_ml", pue: 1.12, cfe_score: 82, kgco2_per_tb: 0.38, renewable_ppc: true, carbon_neutral_certified: true },
  { provider: "AWS", region: "eu-north-1", service_type: "storage", pue: 1.08, cfe_score: 95, kgco2_per_tb: 0.12, renewable_ppc: true, carbon_neutral_certified: true },
];

const SAMPLE_COLUMNS = [
  { header: "Proveedor", accessorKey: "provider" },
  { header: "Región", accessorKey: "region" },
  { header: "Servicio", accessorKey: "service_type" },
  { header: "PUE", accessorKey: "pue", format: "number" as const },
  { header: "CFE Score", accessorKey: "cfe_score", format: "percent" as const },
  { header: "kgCO2/TB", accessorKey: "kgco2_per_tb", format: "number" as const },
  { header: "PPA Renovable", accessorKey: "renewable_ppc" },
  { header: "Carbon Neutral", accessorKey: "carbon_neutral_certified" },
];

export default function EmisionesScope3CloudDetail() {
  return (
    <GreenProcurementDetailBase 
      productSlug="emisiones-scope3-cloud"
      sampleData={SAMPLE_DATA}
      sampleColumns={SAMPLE_COLUMNS}
    />
  );
}

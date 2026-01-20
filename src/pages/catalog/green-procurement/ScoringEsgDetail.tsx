import { GreenProcurementDetailBase } from "@/components/catalog/GreenProcurementDetailBase";

const SAMPLE_DATA = [
  { supplier_id: "ESG-001", company_name: "Siemens AG", esg_score: 78, e_score: 82, s_score: 75, g_score: 77, carbon_maturity: "Advanced", last_assessment: "2024-09-15", sector: "Industrial" },
  { supplier_id: "ESG-002", company_name: "BASF SE", esg_score: 72, e_score: 70, s_score: 74, g_score: 72, carbon_maturity: "Intermediate", last_assessment: "2024-08-20", sector: "Chemicals" },
  { supplier_id: "ESG-003", company_name: "Schneider Electric", esg_score: 85, e_score: 88, s_score: 82, g_score: 85, carbon_maturity: "Leader", last_assessment: "2024-10-01", sector: "Electronics" },
  { supplier_id: "ESG-004", company_name: "ArcelorMittal", esg_score: 58, e_score: 52, s_score: 62, g_score: 60, carbon_maturity: "Basic", last_assessment: "2024-07-10", sector: "Steel" },
  { supplier_id: "ESG-005", company_name: "Unilever", esg_score: 82, e_score: 85, s_score: 80, g_score: 81, carbon_maturity: "Advanced", last_assessment: "2024-09-25", sector: "FMCG" },
  { supplier_id: "ESG-006", company_name: "Maersk", esg_score: 68, e_score: 62, s_score: 72, g_score: 70, carbon_maturity: "Intermediate", last_assessment: "2024-08-05", sector: "Logistics" },
];

const SAMPLE_COLUMNS = [
  { header: "ID", accessorKey: "supplier_id" },
  { header: "Empresa", accessorKey: "company_name" },
  { header: "ESG Score", accessorKey: "esg_score" },
  { header: "E", accessorKey: "e_score" },
  { header: "S", accessorKey: "s_score" },
  { header: "G", accessorKey: "g_score" },
  { header: "Madurez Carbono", accessorKey: "carbon_maturity" },
  { header: "Sector", accessorKey: "sector" },
];

export default function ScoringEsgDetail() {
  return <GreenProcurementDetailBase productSlug="scoring-esg-proveedores" sampleData={SAMPLE_DATA} sampleColumns={SAMPLE_COLUMNS} />;
}

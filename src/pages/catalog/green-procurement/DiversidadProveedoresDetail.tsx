import { GreenProcurementDetailBase } from "@/components/catalog/GreenProcurementDetailBase";
const SAMPLE_DATA = [
  { supplier_id: "DIV-001", company_name: "TechWomen Solutions", diversity_type: "Women-Owned", certification: "WEConnect", country: "ES", employees: 45, sector: "IT Services", certified_since: "2022-03-15" },
  { supplier_id: "DIV-002", company_name: "Green Social Enterprise", diversity_type: "Social Enterprise", certification: "B-Corp", country: "UK", employees: 120, sector: "Consulting", certified_since: "2021-06-20" },
  { supplier_id: "DIV-003", company_name: "MinorityTech GmbH", diversity_type: "Minority-Owned", certification: "NMSDC", country: "DE", employees: 28, sector: "Software", certified_since: "2023-01-10" },
  { supplier_id: "DIV-004", company_name: "Disability Works BV", diversity_type: "Disability-Owned", certification: "Disability:IN", country: "NL", employees: 85, sector: "Manufacturing", certified_since: "2020-09-05" },
  { supplier_id: "DIV-005", company_name: "VetSupply Ltd", diversity_type: "Veteran-Owned", certification: "NVBDC", country: "US", employees: 52, sector: "Logistics", certified_since: "2022-11-30" },
];
const SAMPLE_COLUMNS = [
  { header: "ID", accessorKey: "supplier_id" },
  { header: "Empresa", accessorKey: "company_name" },
  { header: "Tipo Diversidad", accessorKey: "diversity_type" },
  { header: "Certificación", accessorKey: "certification" },
  { header: "País", accessorKey: "country" },
  { header: "Empleados", accessorKey: "employees", format: "number" as const },
  { header: "Sector", accessorKey: "sector" },
  { header: "Certificado Desde", accessorKey: "certified_since", format: "date" as const },
];
export default function DiversidadProveedoresDetail() {
  return <GreenProcurementDetailBase productSlug="diversidad-proveedores" sampleData={SAMPLE_DATA} sampleColumns={SAMPLE_COLUMNS} />;
}

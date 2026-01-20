import { GreenProcurementDetailBase } from "@/components/catalog/GreenProcurementDetailBase";

const SAMPLE_DATA = [
  { supplier_id: "SUP-DE-001", company_name: "Papier GmbH", certification: "FSC Chain of Custody", cert_number: "FSC-C123456", valid_from: "2024-01-15", valid_until: "2029-01-14", scope: "Paper products", auditor: "SGS" },
  { supplier_id: "SUP-NL-002", company_name: "Clean Chemicals BV", certification: "EU Ecolabel", cert_number: "EU/027/345", valid_from: "2023-06-01", valid_until: "2026-05-31", scope: "Industrial detergents", auditor: "TÜV Rheinland" },
  { supplier_id: "SUP-NO-003", company_name: "Nordic Fish AS", certification: "MSC Chain of Custody", cert_number: "MSC-C-54321", valid_from: "2024-03-20", valid_until: "2027-03-19", scope: "Seafood processing", auditor: "DNV" },
  { supplier_id: "SUP-DE-004", company_name: "Blue Tech AG", certification: "Blue Angel", cert_number: "RAL-UZ 195", valid_from: "2023-09-01", valid_until: "2027-08-31", scope: "IT Equipment", auditor: "RAL gGmbH" },
  { supplier_id: "SUP-FR-005", company_name: "BioCosmétiques SA", certification: "COSMOS Organic", cert_number: "ECOCERT-22345", valid_from: "2024-02-10", valid_until: "2025-02-09", scope: "Cosmetics", auditor: "Ecocert" },
  { supplier_id: "SUP-SE-006", company_name: "Hygien AB", certification: "Nordic Swan", cert_number: "SW-3021-2345", valid_from: "2024-05-01", valid_until: "2028-04-30", scope: "Cleaning services", auditor: "Nordic Ecolabelling" },
  { supplier_id: "SUP-AT-007", company_name: "ÖkoTextil GmbH", certification: "GOTS", cert_number: "GOTS-2024-1234", valid_from: "2024-07-15", valid_until: "2025-07-14", scope: "Organic textiles", auditor: "Control Union" },
  { supplier_id: "SUP-IT-008", company_name: "EcoImballaggi SRL", certification: "Cradle to Cradle Silver", cert_number: "C2C-1234-SILV", valid_from: "2023-11-20", valid_until: "2025-11-19", scope: "Packaging", auditor: "C2C Products Innovation Institute" },
];

const SAMPLE_COLUMNS = [
  { header: "ID Proveedor", accessorKey: "supplier_id" },
  { header: "Empresa", accessorKey: "company_name" },
  { header: "Certificación", accessorKey: "certification" },
  { header: "Nº Certificado", accessorKey: "cert_number" },
  { header: "Válido Desde", accessorKey: "valid_from", format: "date" as const },
  { header: "Válido Hasta", accessorKey: "valid_until", format: "date" as const },
  { header: "Alcance", accessorKey: "scope" },
  { header: "Auditor", accessorKey: "auditor" },
];

export default function RegistroEcolabelsDetail() {
  return (
    <GreenProcurementDetailBase 
      productSlug="registro-ecolabels"
      sampleData={SAMPLE_DATA}
      sampleColumns={SAMPLE_COLUMNS}
    />
  );
}

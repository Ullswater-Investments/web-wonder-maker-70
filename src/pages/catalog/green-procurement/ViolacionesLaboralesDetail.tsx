import { GreenProcurementDetailBase } from "@/components/catalog/GreenProcurementDetailBase";
const SAMPLE_DATA = [
  { incident_id: "VIO-2024-001", company_name: "Fashion Corp", incident_type: "Trabajo Infantil", country: "BD", severity: "Critical", date_reported: "2024-03-15", source: "Human Rights Watch", company_response: "Auditoría en curso" },
  { incident_id: "VIO-2024-002", company_name: "Tech Assembly Ltd", incident_type: "Horas Excesivas", country: "CN", severity: "High", date_reported: "2024-05-20", source: "SACOM", company_response: "Plan de mejora" },
  { incident_id: "VIO-2024-003", company_name: "Agri Export SA", incident_type: "Trabajo Forzoso", country: "MY", severity: "Critical", date_reported: "2024-02-10", source: "ILO", company_response: "Sin respuesta" },
  { incident_id: "VIO-2024-004", company_name: "Mining Co", incident_type: "Seguridad Laboral", country: "ZA", severity: "Medium", date_reported: "2024-06-05", source: "IndustriALL", company_response: "Multa pagada" },
  { incident_id: "VIO-2024-005", company_name: "Textiles Global", incident_type: "Salarios Impagos", country: "IN", severity: "High", date_reported: "2024-04-18", source: "Clean Clothes", company_response: "Pago parcial" },
];
const SAMPLE_COLUMNS = [
  { header: "ID", accessorKey: "incident_id" },
  { header: "Empresa", accessorKey: "company_name" },
  { header: "Tipo", accessorKey: "incident_type" },
  { header: "País", accessorKey: "country" },
  { header: "Severidad", accessorKey: "severity" },
  { header: "Fecha", accessorKey: "date_reported", format: "date" as const },
  { header: "Fuente", accessorKey: "source" },
  { header: "Respuesta", accessorKey: "company_response" },
];
export default function ViolacionesLaboralesDetail() {
  return <GreenProcurementDetailBase productSlug="violaciones-laborales" sampleData={SAMPLE_DATA} sampleColumns={SAMPLE_COLUMNS} />;
}

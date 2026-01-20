import { GreenProcurementDetailBase } from "@/components/catalog/GreenProcurementDetailBase";

const SAMPLE_DATA = [
  { epd_id: "EPD-DE-001", product_name: "Hormigón C30/37", manufacturer: "HeidelbergCement", gwp_kgco2e: 285, ap_kgso2e: 0.45, ep_kgpo4e: 0.08, adp_fossil_mj: 1250, pcr: "EN 15804+A2", valid_until: "2028-06-15" },
  { epd_id: "EPD-FR-002", product_name: "Lana de Roca 100mm", manufacturer: "Rockwool", gwp_kgco2e: 1.2, ap_kgso2e: 0.008, ep_kgpo4e: 0.001, adp_fossil_mj: 18, pcr: "EN 15804+A2", valid_until: "2027-03-20" },
  { epd_id: "EPD-SE-003", product_name: "Acero Estructural S355", manufacturer: "SSAB", gwp_kgco2e: 1850, ap_kgso2e: 3.2, ep_kgpo4e: 0.25, adp_fossil_mj: 22000, pcr: "EN 15804+A2", valid_until: "2026-11-30" },
  { epd_id: "EPD-IT-004", product_name: "Baldosa Cerámica", manufacturer: "Marazzi", gwp_kgco2e: 12.5, ap_kgso2e: 0.035, ep_kgpo4e: 0.004, adp_fossil_mj: 145, pcr: "EN 15804+A2", valid_until: "2027-08-10" },
  { epd_id: "EPD-NL-005", product_name: "Vidrio Float 6mm", manufacturer: "Saint-Gobain", gwp_kgco2e: 15.2, ap_kgso2e: 0.042, ep_kgpo4e: 0.005, adp_fossil_mj: 185, pcr: "EN 15804+A2", valid_until: "2028-02-28" },
  { epd_id: "EPD-AT-006", product_name: "CLT Panel 120mm", manufacturer: "KLH", gwp_kgco2e: -650, ap_kgso2e: 0.18, ep_kgpo4e: 0.02, adp_fossil_mj: 850, pcr: "EN 15804+A2", valid_until: "2027-05-15" },
];

const SAMPLE_COLUMNS = [
  { header: "EPD ID", accessorKey: "epd_id" },
  { header: "Producto", accessorKey: "product_name" },
  { header: "Fabricante", accessorKey: "manufacturer" },
  { header: "GWP (kgCO2e)", accessorKey: "gwp_kgco2e", format: "number" as const },
  { header: "AP (kgSO2e)", accessorKey: "ap_kgso2e", format: "number" as const },
  { header: "ADP Fósil (MJ)", accessorKey: "adp_fossil_mj", format: "number" as const },
  { header: "PCR", accessorKey: "pcr" },
  { header: "Válido Hasta", accessorKey: "valid_until", format: "date" as const },
];

export default function EpdConstruccionDetail() {
  return <GreenProcurementDetailBase productSlug="epd-construccion" sampleData={SAMPLE_DATA} sampleColumns={SAMPLE_COLUMNS} />;
}

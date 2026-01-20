import { GreenProcurementDetailBase } from "@/components/catalog/GreenProcurementDetailBase";

const SAMPLE_DATA = [
  { polymer_name: "PLA (Poliláctico)", biomass_origin: "Maíz/Caña", bio_based_pct: 100, compostable: "industrial", thermal_resist_c: 55, tensile_mpa: 50, applications: "Packaging, Vajilla", certification: "OK Compost Industrial" },
  { polymer_name: "PHA (Polihidroxialcanoatos)", biomass_origin: "Fermentación bacteriana", bio_based_pct: 100, compostable: "home", thermal_resist_c: 130, tensile_mpa: 35, applications: "Films, Médico", certification: "OK Compost Home" },
  { polymer_name: "Bio-PE", biomass_origin: "Caña de azúcar", bio_based_pct: 100, compostable: "no", thermal_resist_c: 105, tensile_mpa: 25, applications: "Botellas, Packaging", certification: "ISCC Plus" },
  { polymer_name: "Bio-PET", biomass_origin: "MEG bio-basado", bio_based_pct: 30, compostable: "no", thermal_resist_c: 70, tensile_mpa: 55, applications: "Botellas bebidas", certification: "ISCC Plus" },
  { polymer_name: "PBAT", biomass_origin: "Petroquímico biodegradable", bio_based_pct: 0, compostable: "industrial", thermal_resist_c: 60, tensile_mpa: 20, applications: "Films agrícolas", certification: "OK Biodegradable Soil" },
  { polymer_name: "PBS (Succinato)", biomass_origin: "Ácido succínico bio", bio_based_pct: 50, compostable: "industrial", thermal_resist_c: 115, tensile_mpa: 40, applications: "Envases alimentos", certification: "OK Compost Industrial" },
  { polymer_name: "Almidón Termoplástico", biomass_origin: "Patata/Maíz", bio_based_pct: 100, compostable: "home", thermal_resist_c: 45, tensile_mpa: 15, applications: "Bolsas, Cubiertos", certification: "OK Compost Home" },
  { polymer_name: "Celulosa Regenerada", biomass_origin: "Madera FSC", bio_based_pct: 100, compostable: "home", thermal_resist_c: 85, tensile_mpa: 80, applications: "Films transparentes", certification: "FSC + OK Compost" },
];

const SAMPLE_COLUMNS = [
  { header: "Polímero", accessorKey: "polymer_name" },
  { header: "Origen Biomasa", accessorKey: "biomass_origin" },
  { header: "% Bio-basado", accessorKey: "bio_based_pct", format: "percent" as const },
  { header: "Compostable", accessorKey: "compostable" },
  { header: "T° Resist. (°C)", accessorKey: "thermal_resist_c" },
  { header: "Tensión (MPa)", accessorKey: "tensile_mpa" },
  { header: "Aplicaciones", accessorKey: "applications" },
  { header: "Certificación", accessorKey: "certification" },
];

export default function InventarioBioplasticosDetail() {
  return (
    <GreenProcurementDetailBase 
      productSlug="inventario-bioplasticos"
      sampleData={SAMPLE_DATA}
      sampleColumns={SAMPLE_COLUMNS}
    />
  );
}

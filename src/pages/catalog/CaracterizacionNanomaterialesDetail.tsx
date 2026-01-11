import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowLeft, 
  Download, 
  Shield, 
  Clock, 
  Globe, 
  Database,
  FileJson,
  CheckCircle2,
  XCircle,
  Building2,
  Microscope,
  Atom,
  FlaskConical,
  Sparkles,
  Brain
} from "lucide-react";

const CaracterizacionNanomaterialesDetail = () => {
  const navigate = useNavigate();

  const sampleData = [
    { measurement_id: "MEAS-GR-001254", sample_id: "GR-CVD-2024-078", material_type: "graphene", characterization_method: "raman", property_measured: "D/G ratio", value: 0.12, unit: "ratio", layer_thickness_nm: 0.34, purity_pct: 99.8, iso_17025_certified: true },
    { measurement_id: "MEAS-QD-002891", sample_id: "QD-CdSe-2024-145", material_type: "quantum_dots", characterization_method: "spectroscopy", property_measured: "Peak emission", value: 625, unit: "nm", particle_size_nm: 5.2, purity_pct: 98.5, iso_17025_certified: true },
    { measurement_id: "MEAS-CNT-003567", sample_id: "CNT-MW-2024-312", material_type: "cnt", characterization_method: "tem", property_measured: "Diameter", value: 12.5, unit: "nm", layer_thickness_nm: null, purity_pct: 97.2, iso_17025_certified: true },
    { measurement_id: "MEAS-NP-004123", sample_id: "Au-NP-2024-089", material_type: "metal_nanoparticles", characterization_method: "afm", property_measured: "Surface roughness", value: 0.85, unit: "nm RMS", particle_size_nm: 50, purity_pct: 99.9, iso_17025_certified: true },
    { measurement_id: "MEAS-TF-005678", sample_id: "TiO2-TF-2024-201", material_type: "thin_films", characterization_method: "xrd", property_measured: "Crystallite size", value: 18.3, unit: "nm", layer_thickness_nm: 120, purity_pct: 99.5, iso_17025_certified: true },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-cyan-900 via-teal-800 to-cyan-900 text-white">
        <div className="container mx-auto px-6 py-8">
          <Button 
            variant="ghost" 
            className="text-white/80 hover:text-white mb-6 -ml-2"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al catálogo
          </Button>
          
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-cyan-500/30 text-cyan-200 border-cyan-400/50">
                  <FlaskConical className="w-3 h-3 mr-1" />
                  R&D
                </Badge>
                <Badge className="bg-purple-500/30 text-purple-200 border-purple-400/50">
                  <Brain className="w-3 h-3 mr-1" />
                  AI Ready
                </Badge>
                <Badge className="bg-teal-500/30 text-teal-200 border-teal-400/50">
                  <Microscope className="w-3 h-3 mr-1" />
                  Lab Certified
                </Badge>
                <Badge className="bg-amber-500/30 text-amber-200 border-amber-400/50">
                  <Atom className="w-3 h-3 mr-1" />
                  Nano Research
                </Badge>
              </div>
              
              <h1 className="text-3xl lg:text-4xl font-bold mb-4">
                Dataset de Caracterización de Nanomateriales
              </h1>
              
              <p className="text-lg text-white/80 mb-6 max-w-2xl">
                Big Data de laboratorio con +25 millones de mediciones de nanomateriales. 
                Incluye caracterización por SEM, TEM, AFM, XRD, Raman y espectroscopía. 
                Optimizado para entrenamiento de modelos de Machine Learning.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  <span>Holst Centre Research Data (Eindhoven)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Release anual (versión 2024.1)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Database className="w-4 h-4" />
                  <span>+25M mediciones</span>
                </div>
              </div>
            </div>
            
            <div className="lg:text-right">
              <div className="text-3xl font-bold">3.500€</div>
              <div className="text-white/70">pago único (licencia anual)</div>
              <Button className="mt-4 bg-white text-cyan-900 hover:bg-white/90">
                Solicitar Acceso
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* AI Ready Banner */}
            <Card className="bg-gradient-to-r from-purple-50 to-cyan-50 dark:from-purple-950/30 dark:to-cyan-950/30 border-purple-200 dark:border-purple-800">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Dataset Optimizado para Machine Learning</h3>
                    <p className="text-muted-foreground mb-4">
                      Este dataset está diseñado específicamente para entrenamiento de modelos de IA. 
                      Formato Parquet/HDF5 optimizado, datos normalizados y etiquetados para tareas de predicción de propiedades de materiales.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Parquet</Badge>
                      <Badge variant="secondary">HDF5</Badge>
                      <Badge variant="secondary">Apache Arrow</Badge>
                      <Badge variant="secondary">TensorFlow Ready</Badge>
                      <Badge variant="secondary">PyTorch Compatible</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Preview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="w-5 h-5 text-cyan-600" />
                  Vista Previa de Datos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-2 font-medium">ID Medición</th>
                        <th className="text-left py-3 px-2 font-medium">Material</th>
                        <th className="text-left py-3 px-2 font-medium">Método</th>
                        <th className="text-left py-3 px-2 font-medium">Propiedad</th>
                        <th className="text-right py-3 px-2 font-medium">Valor</th>
                        <th className="text-center py-3 px-2 font-medium">Pureza</th>
                        <th className="text-center py-3 px-2 font-medium">ISO 17025</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sampleData.map((item, index) => (
                        <tr key={index} className="border-b last:border-0 hover:bg-muted/50">
                          <td className="py-3 px-2 font-mono text-xs">{item.measurement_id}</td>
                          <td className="py-3 px-2">
                            <Badge variant="outline" className="text-xs">{item.material_type}</Badge>
                          </td>
                          <td className="py-3 px-2 uppercase text-xs">{item.characterization_method}</td>
                          <td className="py-3 px-2 text-muted-foreground">{item.property_measured}</td>
                          <td className="py-3 px-2 text-right font-mono">{item.value} {item.unit}</td>
                          <td className="py-3 px-2 text-center">{item.purity_pct}%</td>
                          <td className="py-3 px-2 text-center">
                            {item.iso_17025_certified ? (
                              <CheckCircle2 className="w-4 h-4 text-green-600 mx-auto" />
                            ) : (
                              <XCircle className="w-4 h-4 text-red-600 mx-auto" />
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-muted-foreground mt-4 text-center">
                  Mostrando 5 de 25.847.392 registros • Datos de muestra con valores simulados
                </p>
              </CardContent>
            </Card>

            {/* Data Schema */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileJson className="w-5 h-5 text-cyan-600" />
                  Esquema de Datos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs">
{`interface NanomaterialCharacterization {
  measurement_id: string;            // ID único de medición
  sample_id: string;                 // ID de muestra
  material_type: 
    | "graphene"              // Grafeno (mono/multicapa)
    | "cnt"                   // Nanotubos de carbono
    | "quantum_dots"          // Puntos cuánticos
    | "metal_nanoparticles"   // Nanopartículas metálicas
    | "nanowires"             // Nanohilos
    | "thin_films";           // Películas delgadas
  characterization_method: 
    | "sem"           // Microscopía electrónica de barrido
    | "tem"           // Microscopía electrónica de transmisión
    | "afm"           // Microscopía de fuerza atómica
    | "xrd"           // Difracción de rayos X
    | "raman"         // Espectroscopía Raman
    | "xps"           // Espectroscopía de fotoelectrones
    | "ftir"          // Espectroscopía infrarroja
    | "spectroscopy"; // Espectroscopía UV-Vis
  property_measured: string;         // Propiedad medida
  value: number;                     // Valor numérico
  unit: string;                      // Unidad de medida
  temperature_k: number;             // Temperatura (Kelvin)
  humidity_pct: number;              // Humedad relativa
  substrate: string;                 // Sustrato
  layer_thickness_nm: number;        // Espesor de capa (nm)
  particle_size_nm: number;          // Tamaño de partícula (nm)
  purity_pct: number;                // Pureza (%)
  measurement_uncertainty: number;   // Incertidumbre
  lab_id: string;                    // ID de laboratorio
  iso_17025_certified: boolean;      // Certificación ISO 17025
}`}
                </pre>
              </CardContent>
            </Card>

            {/* Material Distribution */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Atom className="w-5 h-5 text-cyan-600" />
                  Distribución por Tipo de Material
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-cyan-50 dark:bg-cyan-950/30 rounded-lg text-center">
                    <div className="text-2xl font-bold text-cyan-700 dark:text-cyan-300">8.2M</div>
                    <div className="text-sm text-muted-foreground">Grafeno</div>
                  </div>
                  <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg text-center">
                    <div className="text-2xl font-bold text-purple-700 dark:text-purple-300">5.8M</div>
                    <div className="text-sm text-muted-foreground">Quantum Dots</div>
                  </div>
                  <div className="p-4 bg-teal-50 dark:bg-teal-950/30 rounded-lg text-center">
                    <div className="text-2xl font-bold text-teal-700 dark:text-teal-300">4.1M</div>
                    <div className="text-sm text-muted-foreground">Nanotubos</div>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg text-center">
                    <div className="text-2xl font-bold text-amber-700 dark:text-amber-300">3.5M</div>
                    <div className="text-sm text-muted-foreground">Nanopartículas</div>
                  </div>
                  <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg text-center">
                    <div className="text-2xl font-bold text-green-700 dark:text-green-300">2.4M</div>
                    <div className="text-sm text-muted-foreground">Thin Films</div>
                  </div>
                  <div className="p-4 bg-rose-50 dark:bg-rose-950/30 rounded-lg text-center">
                    <div className="text-2xl font-bold text-rose-700 dark:text-rose-300">1.8M</div>
                    <div className="text-sm text-muted-foreground">Nanowires</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* ODRL Conditions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-cyan-600" />
                  Condiciones ODRL
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Entrenamiento IA</span>
                  <div className="flex items-center gap-2 text-green-600">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="text-sm font-medium">Permitido</span>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span className="text-sm">Reventa de datos</span>
                  <div className="flex items-center gap-2 text-red-600">
                    <XCircle className="w-4 h-4" />
                    <span className="text-sm font-medium">No permitido</span>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span className="text-sm">Restricción geográfica</span>
                  <div className="flex items-center gap-2 text-green-600">
                    <Globe className="w-4 h-4" />
                    <span className="text-sm font-medium">EU + USA + JP + KR</span>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span className="text-sm">Publicación derivados</span>
                  <div className="flex items-center gap-2 text-green-600">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="text-sm font-medium">Con citación</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Technical Details */}
            <Card>
              <CardHeader>
                <CardTitle>Detalles Técnicos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Formato</span>
                  <span className="text-sm">HDF5, Parquet, Arrow</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Tamaño</span>
                  <span className="text-sm">~180 GB comprimido</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Versión</span>
                  <span className="text-sm">2024.1 (Enero 2024)</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Laboratorios</span>
                  <span className="text-sm">47 labs certificados</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Licencia</span>
                  <span className="text-sm">Perpetua (1 año datos)</span>
                </div>
              </CardContent>
            </Card>

            {/* Data Custodian */}
            <Card>
              <CardHeader>
                <CardTitle>Custodio de Datos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-600 to-teal-600 rounded-lg flex items-center justify-center">
                    <Microscope className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-medium">Holst Centre</div>
                    <div className="text-sm text-muted-foreground">Eindhoven, Netherlands</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Holst Centre es un centro de investigación independiente en sistemas de sensores inalámbricos y 
                  electrónica flexible. Colaboración entre IMEC y TNO con sede en High Tech Campus Eindhoven.
                </p>
                <div className="flex gap-2 mt-4">
                  <Badge variant="secondary">ISO 17025</Badge>
                  <Badge variant="secondary">FAIR Data</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Download Sample */}
            <Card className="bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-cyan-950/30 dark:to-teal-950/30 border-cyan-200 dark:border-cyan-800">
              <CardContent className="pt-6">
                <div className="text-center">
                  <Download className="w-8 h-8 text-cyan-600 mx-auto mb-3" />
                  <h3 className="font-medium mb-2">Dataset de Evaluación</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Descarga 10.000 mediciones de muestra en formato Parquet para evaluar la estructura del dataset
                  </p>
                  <Button variant="outline" className="w-full border-cyan-300 hover:bg-cyan-100 dark:hover:bg-cyan-900/30">
                    <Download className="w-4 h-4 mr-2" />
                    Descargar Sample (Parquet)
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaracterizacionNanomaterialesDetail;

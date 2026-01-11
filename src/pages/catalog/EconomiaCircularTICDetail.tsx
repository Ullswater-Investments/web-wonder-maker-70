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
  Recycle,
  Leaf,
  Zap,
  Server,
  Trash2,
  Brain
} from "lucide-react";

const EconomiaCircularTICDetail = () => {
  const navigate = useNavigate();

  const sampleData = [
    { company_id: "GAIA-EC-001", company_name: "Bizkaia Datacenter", sector: "data_centers", ewaste_generated_kg: 2450, ewaste_recycled_pct: 94, energy_efficiency_pue: 1.28, renewable_energy_pct: 100, circular_economy_score: 92, raee_compliance: true },
    { company_id: "GAIA-EC-015", company_name: "Sarenet", sector: "telecom", ewaste_generated_kg: 890, ewaste_recycled_pct: 88, energy_efficiency_pue: 1.45, renewable_energy_pct: 85, circular_economy_score: 78, raee_compliance: true },
    { company_id: "GAIA-EC-042", company_name: "Ibermática", sector: "software", ewaste_generated_kg: 1250, ewaste_recycled_pct: 91, energy_efficiency_pue: null, renewable_energy_pct: 72, circular_economy_score: 75, raee_compliance: true },
    { company_id: "GAIA-EC-078", company_name: "Grupo Ormazabal", sector: "hardware", ewaste_generated_kg: 4200, ewaste_recycled_pct: 96, energy_efficiency_pue: null, renewable_energy_pct: 68, circular_economy_score: 82, raee_compliance: true },
    { company_id: "GAIA-EC-103", company_name: "Euskaltel Cloud", sector: "data_centers", ewaste_generated_kg: 1800, ewaste_recycled_pct: 92, energy_efficiency_pue: 1.35, renewable_energy_pct: 95, circular_economy_score: 88, raee_compliance: true },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-900 via-emerald-800 to-green-900 text-white">
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
                <Badge className="bg-emerald-500/30 text-emerald-200 border-emerald-400/50">
                  <Leaf className="w-3 h-3 mr-1" />
                  ESG
                </Badge>
                <Badge className="bg-green-500/30 text-green-200 border-green-400/50">
                  <Recycle className="w-3 h-3 mr-1" />
                  Circular Economy
                </Badge>
                <Badge className="bg-teal-500/30 text-teal-200 border-teal-400/50">
                  <Trash2 className="w-3 h-3 mr-1" />
                  E-Waste Compliant
                </Badge>
              </div>
              
              <h1 className="text-3xl lg:text-4xl font-bold mb-4">
                Índice de Economía Circular en TIC
              </h1>
              
              <p className="text-lg text-white/80 mb-6 max-w-2xl">
                Métricas ESG de reciclaje electrónico y eficiencia energética de data centers y empresas TIC en el País Vasco. 
                Incluye indicadores de RAEE, PUE, energías renovables y huella de carbono para +300 empresas.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  <span>GAIA Cluster Sostenibilidad (Bilbao)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Actualización trimestral (Q1-Q4)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Database className="w-4 h-4" />
                  <span>+300 empresas</span>
                </div>
              </div>
            </div>
            
            <div className="lg:text-right">
              <div className="text-3xl font-bold">280€</div>
              <div className="text-white/70">por mes</div>
              <Button className="mt-4 bg-white text-green-900 hover:bg-white/90">
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
            {/* AI Training Available */}
            <Card className="bg-gradient-to-r from-purple-50 to-green-50 dark:from-purple-950/30 dark:to-green-950/30 border-purple-200 dark:border-purple-800">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-green-500 rounded-xl">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Disponible para Entrenamiento de Modelos IA</h3>
                    <p className="text-muted-foreground mb-4">
                      Este dataset permite el entrenamiento de modelos de optimización de economía circular y 
                      predicción de eficiencia energética. Ideal para desarrollar algoritmos de reducción de 
                      huella de carbono en el sector TIC.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Modelos de Optimización</Badge>
                      <Badge variant="secondary">Predicción PUE</Badge>
                      <Badge variant="secondary">Carbon Footprint ML</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Preview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="w-5 h-5 text-green-600" />
                  Vista Previa de Datos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-2 font-medium">Empresa</th>
                        <th className="text-left py-3 px-2 font-medium">Sector</th>
                        <th className="text-right py-3 px-2 font-medium">E-Waste (kg)</th>
                        <th className="text-center py-3 px-2 font-medium">% Reciclado</th>
                        <th className="text-center py-3 px-2 font-medium">PUE</th>
                        <th className="text-center py-3 px-2 font-medium">% Renovable</th>
                        <th className="text-center py-3 px-2 font-medium">Score</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sampleData.map((item, index) => (
                        <tr key={index} className="border-b last:border-0 hover:bg-muted/50">
                          <td className="py-3 px-2 font-medium">{item.company_name}</td>
                          <td className="py-3 px-2">
                            <Badge variant="outline" className="text-xs">{item.sector.replace('_', ' ')}</Badge>
                          </td>
                          <td className="py-3 px-2 text-right font-mono">{item.ewaste_generated_kg.toLocaleString()}</td>
                          <td className="py-3 px-2 text-center">
                            <span className={item.ewaste_recycled_pct >= 90 ? 'text-green-600 font-medium' : ''}>
                              {item.ewaste_recycled_pct}%
                            </span>
                          </td>
                          <td className="py-3 px-2 text-center font-mono">
                            {item.energy_efficiency_pue ? item.energy_efficiency_pue.toFixed(2) : '-'}
                          </td>
                          <td className="py-3 px-2 text-center">
                            <span className={item.renewable_energy_pct >= 90 ? 'text-green-600 font-medium' : ''}>
                              {item.renewable_energy_pct}%
                            </span>
                          </td>
                          <td className="py-3 px-2 text-center">
                            <Badge className={`text-xs ${item.circular_economy_score >= 85 ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'}`}>
                              {item.circular_economy_score}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-muted-foreground mt-4 text-center">
                  Mostrando 5 de 312 registros • Datos de muestra con valores simulados
                </p>
              </CardContent>
            </Card>

            {/* Data Schema */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileJson className="w-5 h-5 text-green-600" />
                  Esquema de Datos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs">
{`interface CircularEconomyTICRecord {
  company_id: string;                // ID único empresa
  company_name: string;              // Nombre de la empresa
  reporting_quarter: string;         // Trimestre (Q1-Q4 YYYY)
  sector: 
    | "software"      // Desarrollo de software
    | "hardware"      // Fabricación de hardware
    | "data_centers"  // Centros de datos
    | "telecom"       // Telecomunicaciones
    | "e_commerce";   // Comercio electrónico
  ewaste_generated_kg: number;       // RAEE generados (kg)
  ewaste_recycled_pct: number;       // % RAEE reciclados
  equipment_refurbished_units: number; // Equipos reacondicionados
  equipment_lifespan_extension_months: number; // Extensión vida útil
  energy_efficiency_pue: number;     // PUE (solo data centers)
  renewable_energy_pct: number;      // % energía renovable
  carbon_footprint_tonnes: number;   // Huella CO2 (toneladas)
  server_utilization_avg_pct: number; // Utilización media servidores
  virtualization_ratio: number;      // Ratio de virtualización
  cloud_carbon_intensity: number;    // Intensidad carbono cloud
  circular_economy_score: number;    // Score economía circular (0-100)
  recycling_certifications: string[]; // Certificaciones reciclaje
  raee_compliance: boolean;          // Cumplimiento RAEE
}`}
                </pre>
              </CardContent>
            </Card>

            {/* ESG Metrics Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-green-600" />
                  Métricas ESG Agregadas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Recycle className="w-5 h-5 text-green-600" />
                      <span className="text-sm font-medium text-green-600">Reciclaje E-Waste</span>
                    </div>
                    <div className="text-2xl font-bold text-green-700 dark:text-green-300">91.2%</div>
                    <div className="text-xs text-muted-foreground">Media de reciclaje RAEE</div>
                  </div>
                  <div className="p-4 bg-emerald-50 dark:bg-emerald-950/30 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-5 h-5 text-emerald-600" />
                      <span className="text-sm font-medium text-emerald-600">Energía Renovable</span>
                    </div>
                    <div className="text-2xl font-bold text-emerald-700 dark:text-emerald-300">78.5%</div>
                    <div className="text-xs text-muted-foreground">Media uso renovables</div>
                  </div>
                  <div className="p-4 bg-teal-50 dark:bg-teal-950/30 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Server className="w-5 h-5 text-teal-600" />
                      <span className="text-sm font-medium text-teal-600">Eficiencia Data Centers</span>
                    </div>
                    <div className="text-2xl font-bold text-teal-700 dark:text-teal-300">1.38</div>
                    <div className="text-xs text-muted-foreground">PUE medio del sector</div>
                  </div>
                  <div className="p-4 bg-cyan-50 dark:bg-cyan-950/30 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Trash2 className="w-5 h-5 text-cyan-600" />
                      <span className="text-sm font-medium text-cyan-600">Cumplimiento RAEE</span>
                    </div>
                    <div className="text-2xl font-bold text-cyan-700 dark:text-cyan-300">98.7%</div>
                    <div className="text-xs text-muted-foreground">Empresas conformes</div>
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
                  <Shield className="w-5 h-5 text-green-600" />
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
                    <span className="text-sm font-medium">EU + UK</span>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span className="text-sm">Reporting ESG</span>
                  <div className="flex items-center gap-2 text-green-600">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="text-sm font-medium">Permitido</span>
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
                  <div className="flex gap-1">
                    <Badge variant="outline">CSV</Badge>
                    <Badge variant="outline">XBRL</Badge>
                  </div>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Frecuencia</span>
                  <span className="text-sm">Trimestral</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Histórico</span>
                  <span className="text-sm">12 trimestres (3 años)</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Estándares</span>
                  <span className="text-sm">GRI, ESRS, CSRD</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Verificación</span>
                  <span className="text-sm">Auditoría externa anual</span>
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
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
                    <Recycle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-medium">GAIA Sostenibilidad</div>
                    <div className="text-sm text-muted-foreground">Bilbao, España</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  La Comisión de Sostenibilidad de GAIA coordina las iniciativas de economía circular del sector TIC vasco, 
                  incluyendo la gestión de RAEE, eficiencia energética y descarbonización de data centers.
                </p>
                <div className="flex gap-2 mt-4">
                  <Badge variant="secondary">GRI Verified</Badge>
                  <Badge variant="secondary">CSRD Ready</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Download Sample */}
            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-green-200 dark:border-green-800">
              <CardContent className="pt-6">
                <div className="text-center">
                  <Download className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <h3 className="font-medium mb-2">Informe ESG Muestra</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Descarga un informe trimestral anonimizado en formato XBRL compatible con CSRD
                  </p>
                  <Button variant="outline" className="w-full border-green-300 hover:bg-green-100 dark:hover:bg-green-900/30">
                    <Download className="w-4 h-4 mr-2" />
                    Descargar Sample (XBRL)
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

export default EconomiaCircularTICDetail;

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
  Monitor,
  Cpu,
  Cloud,
  Lock,
  BarChart3,
  FileText
} from "lucide-react";

const MadurezDigitalTICDetail = () => {
  const navigate = useNavigate();

  const sampleData = [
    { company_id: "GAIA-001", company_name: "Vicomtech", province: "gipuzkoa", sector: "ai_ml", employees: 185, digital_maturity_level: "optimized", digital_maturity_score: 92, cloud_adoption_level: "cloud_native", cybersecurity_maturity: 88 },
    { company_id: "GAIA-042", company_name: "Tecnalia R&I", province: "bizkaia", sector: "iot", employees: 1450, digital_maturity_level: "quantified", digital_maturity_score: 85, cloud_adoption_level: "advanced", cybersecurity_maturity: 91 },
    { company_id: "GAIA-078", company_name: "Virtualware", province: "bizkaia", sector: "software", employees: 95, digital_maturity_level: "optimized", digital_maturity_score: 89, cloud_adoption_level: "cloud_native", cybersecurity_maturity: 82 },
    { company_id: "GAIA-103", company_name: "Ulma Embedded", province: "gipuzkoa", sector: "hardware", employees: 120, digital_maturity_level: "defined", digital_maturity_score: 68, cloud_adoption_level: "intermediate", cybersecurity_maturity: 75 },
    { company_id: "GAIA-156", company_name: "Ikerlan", province: "gipuzkoa", sector: "cybersecurity", employees: 380, digital_maturity_level: "quantified", digital_maturity_score: 87, cloud_adoption_level: "advanced", cybersecurity_maturity: 95 },
  ];

  const getMaturityColor = (level: string) => {
    switch(level) {
      case 'optimized': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'quantified': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'defined': return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300';
      case 'managed': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-800 to-blue-900 text-white">
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
                <Badge className="bg-indigo-500/30 text-indigo-200 border-indigo-400/50">
                  <FileText className="w-3 h-3 mr-1" />
                  Compliance
                </Badge>
                <Badge className="bg-blue-500/30 text-blue-200 border-blue-400/50">
                  <Monitor className="w-3 h-3 mr-1" />
                  Industria 4.0
                </Badge>
                <Badge className="bg-red-500/30 text-red-200 border-red-400/50">
                  <span className="mr-1">🔴</span>
                  Basque Digital
                </Badge>
              </div>
              
              <h1 className="text-3xl lg:text-4xl font-bold mb-4">
                Directorio de Madurez Digital TIC-Industria
              </h1>
              
              <p className="text-lg text-white/80 mb-6 max-w-2xl">
                Evaluación del nivel de digitalización de PYMEs del sector TIC en el País Vasco. 
                Incluye métricas de adopción cloud, ciberseguridad, automatización e IoT para +500 empresas del ecosistema GAIA.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  <span>GAIA Cluster Digital Hub (San Sebastián)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Actualización mensual (día 15)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Database className="w-4 h-4" />
                  <span>+500 empresas</span>
                </div>
              </div>
            </div>
            
            <div className="lg:text-right">
              <div className="text-3xl font-bold">320€</div>
              <div className="text-white/70">por mes</div>
              <Button className="mt-4 bg-white text-blue-900 hover:bg-white/90">
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
            {/* GAIA Cluster Info */}
            <Card className="bg-gradient-to-r from-red-50 to-blue-50 dark:from-red-950/20 dark:to-blue-950/20 border-red-200 dark:border-red-800">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center shadow-sm">
                    <span className="text-2xl font-bold text-red-600">GAIA</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Cluster GAIA - Asociación de Industrias TIC del País Vasco</h3>
                    <p className="text-muted-foreground mb-4">
                      GAIA agrupa a más de 300 empresas del sector TIC en Euskadi, representando el 85% del volumen 
                      de negocio del sector. Este directorio recoge las evaluaciones de madurez digital realizadas 
                      por el Observatorio de Transformación Digital del cluster.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Gipuzkoa</Badge>
                      <Badge variant="secondary">Bizkaia</Badge>
                      <Badge variant="secondary">Araba</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Preview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="w-5 h-5 text-blue-600" />
                  Vista Previa de Datos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-2 font-medium">Empresa</th>
                        <th className="text-left py-3 px-2 font-medium">Provincia</th>
                        <th className="text-left py-3 px-2 font-medium">Sector</th>
                        <th className="text-center py-3 px-2 font-medium">Empleados</th>
                        <th className="text-center py-3 px-2 font-medium">Nivel Madurez</th>
                        <th className="text-center py-3 px-2 font-medium">Score</th>
                        <th className="text-center py-3 px-2 font-medium">Cloud</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sampleData.map((item, index) => (
                        <tr key={index} className="border-b last:border-0 hover:bg-muted/50">
                          <td className="py-3 px-2 font-medium">{item.company_name}</td>
                          <td className="py-3 px-2 capitalize text-muted-foreground">{item.province}</td>
                          <td className="py-3 px-2">
                            <Badge variant="outline" className="text-xs">{item.sector.replace('_', '/')}</Badge>
                          </td>
                          <td className="py-3 px-2 text-center">{item.employees}</td>
                          <td className="py-3 px-2 text-center">
                            <Badge className={`text-xs ${getMaturityColor(item.digital_maturity_level)}`}>
                              {item.digital_maturity_level}
                            </Badge>
                          </td>
                          <td className="py-3 px-2 text-center font-mono">{item.digital_maturity_score}</td>
                          <td className="py-3 px-2 text-center text-xs">{item.cloud_adoption_level.replace('_', ' ')}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-muted-foreground mt-4 text-center">
                  Mostrando 5 de 512 registros • Datos de muestra con valores simulados
                </p>
              </CardContent>
            </Card>

            {/* Data Schema */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileJson className="w-5 h-5 text-blue-600" />
                  Esquema de Datos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs">
{`interface DigitalMaturityRecord {
  company_id: string;                // ID único empresa (GAIA-XXX)
  company_name: string;              // Nombre de la empresa
  cif: string;                       // CIF fiscal
  province: "gipuzkoa" | "bizkaia" | "araba";
  sector: 
    | "software"        // Desarrollo de software
    | "hardware"        // Fabricación de hardware
    | "telecom"         // Telecomunicaciones
    | "iot"             // Internet of Things
    | "cybersecurity"   // Ciberseguridad
    | "ai_ml"           // Inteligencia Artificial
    | "cloud_services"; // Servicios Cloud
  employees: number;                 // Número de empleados
  revenue_range_eur: string;         // Rango de facturación
  digital_maturity_level: 
    | "initial"     // Nivel 1: Inicial
    | "managed"     // Nivel 2: Gestionado
    | "defined"     // Nivel 3: Definido
    | "quantified"  // Nivel 4: Cuantificado
    | "optimized";  // Nivel 5: Optimizado
  digital_maturity_score: number;    // Puntuación 0-100
  industry40_adoption_pct: number;   // % adopción Industria 4.0
  cloud_adoption_level: 
    | "none" | "basic" | "intermediate" | "advanced" | "cloud_native";
  cybersecurity_maturity: number;    // Puntuación 0-100
  data_analytics_capability: number; // Puntuación 0-100
  automation_index: number;          // Índice de automatización
  iot_deployment_level: number;      // Nivel de despliegue IoT
  last_assessment_date: string;      // Fecha última evaluación
  certification_standards: string[]; // Certificaciones (ISO, etc.)
}`}
                </pre>
              </CardContent>
            </Card>

            {/* Maturity Distribution */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-blue-600" />
                  Distribución por Nivel de Madurez
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-24 text-sm">Optimizado</div>
                    <div className="flex-1 bg-muted rounded-full h-6 overflow-hidden">
                      <div className="bg-green-500 h-full rounded-full" style={{width: '18%'}}></div>
                    </div>
                    <div className="w-12 text-right text-sm font-medium">18%</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-24 text-sm">Cuantificado</div>
                    <div className="flex-1 bg-muted rounded-full h-6 overflow-hidden">
                      <div className="bg-blue-500 h-full rounded-full" style={{width: '32%'}}></div>
                    </div>
                    <div className="w-12 text-right text-sm font-medium">32%</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-24 text-sm">Definido</div>
                    <div className="flex-1 bg-muted rounded-full h-6 overflow-hidden">
                      <div className="bg-amber-500 h-full rounded-full" style={{width: '28%'}}></div>
                    </div>
                    <div className="w-12 text-right text-sm font-medium">28%</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-24 text-sm">Gestionado</div>
                    <div className="flex-1 bg-muted rounded-full h-6 overflow-hidden">
                      <div className="bg-orange-500 h-full rounded-full" style={{width: '15%'}}></div>
                    </div>
                    <div className="w-12 text-right text-sm font-medium">15%</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-24 text-sm">Inicial</div>
                    <div className="flex-1 bg-muted rounded-full h-6 overflow-hidden">
                      <div className="bg-gray-400 h-full rounded-full" style={{width: '7%'}}></div>
                    </div>
                    <div className="w-12 text-right text-sm font-medium">7%</div>
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
                  <Shield className="w-5 h-5 text-blue-600" />
                  Condiciones ODRL
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Entrenamiento IA</span>
                  <div className="flex items-center gap-2 text-red-600">
                    <XCircle className="w-4 h-4" />
                    <span className="text-sm font-medium">No permitido</span>
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
                    <span className="text-sm font-medium">EU Only</span>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span className="text-sm">Uso comercial</span>
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
                    <Badge variant="outline"><FileJson className="w-3 h-3 mr-1" />JSON</Badge>
                    <Badge variant="outline"><FileText className="w-3 h-3 mr-1" />PDF</Badge>
                  </div>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Frecuencia</span>
                  <span className="text-sm">Mensual (día 15)</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Histórico</span>
                  <span className="text-sm">24 meses</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Cobertura</span>
                  <span className="text-sm">País Vasco (3 provincias)</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Metodología</span>
                  <span className="text-sm">CMMI + ISO 33000</span>
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
                  <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-blue-600 rounded-lg flex items-center justify-center">
                    <Monitor className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-medium">GAIA Cluster</div>
                    <div className="text-sm text-muted-foreground">San Sebastián, España</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  GAIA es la Asociación de Industrias de Conocimiento y Tecnología del País Vasco. 
                  Agrupa a más de 300 empresas que representan el 85% del volumen de negocio del sector TIC en Euskadi.
                </p>
                <div className="flex gap-2 mt-4">
                  <Badge variant="secondary">ISO 27001</Badge>
                  <Badge variant="secondary">ENS Alto</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Key Metrics */}
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border-blue-200 dark:border-blue-800">
              <CardContent className="pt-6">
                <h3 className="font-medium mb-4">Métricas Clave del Directorio</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Score medio madurez</span>
                    <span className="font-bold text-blue-600">72.4</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">% Cloud Native</span>
                    <span className="font-bold text-blue-600">24%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Ciberseguridad media</span>
                    <span className="font-bold text-blue-600">68.9</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Empresas evaluadas</span>
                    <span className="font-bold text-blue-600">512</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Download Sample */}
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <Download className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-medium mb-2">Informe de Muestra</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Descarga un informe anonimizado con la metodología de evaluación
                  </p>
                  <Button variant="outline" className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Descargar Metodología (PDF)
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

export default MadurezDigitalTICDetail;

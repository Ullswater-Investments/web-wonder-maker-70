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
  Code,
  Cloud,
  Users,
  Gauge,
  GitBranch,
  Rocket
} from "lucide-react";

const CapacidadDesarrolloSoftwareDetail = () => {
  const navigate = useNavigate();

  const sampleData = [
    { company_id: "GAIA-DEV-001", company_name: "Plain Concepts", location_city: "Bilbao", team_size_total: 85, developers_available: 12, utilization_pct: 86, tech_stack: ["React", "Azure", ".NET"], specialization: "cloud", ci_cd_maturity: "elite", hourly_rate_eur: 75 },
    { company_id: "GAIA-DEV-018", company_name: "Viewnext", location_city: "Vitoria-Gasteiz", team_size_total: 120, developers_available: 28, utilization_pct: 77, tech_stack: ["Java", "AWS", "Angular"], specialization: "web", ci_cd_maturity: "advanced", hourly_rate_eur: 65 },
    { company_id: "GAIA-DEV-034", company_name: "Irontec", location_city: "Bilbao", team_size_total: 45, developers_available: 8, utilization_pct: 82, tech_stack: ["Python", "Kubernetes", "React"], specialization: "devops", ci_cd_maturity: "elite", hourly_rate_eur: 70 },
    { company_id: "GAIA-DEV-056", company_name: "Ulma Embedded", location_city: "Oñati", team_size_total: 35, developers_available: 5, utilization_pct: 86, tech_stack: ["C", "C++", "RTOS"], specialization: "embedded", ci_cd_maturity: "intermediate", hourly_rate_eur: 68 },
    { company_id: "GAIA-DEV-078", company_name: "Sngular", location_city: "San Sebastián", team_size_total: 65, developers_available: 15, utilization_pct: 77, tech_stack: ["Vue", "Node.js", "GCP"], specialization: "web", ci_cd_maturity: "advanced", hourly_rate_eur: 72 },
  ];

  const getCiCdColor = (level: string) => {
    switch(level) {
      case 'elite': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300';
      case 'advanced': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'intermediate': return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-900 via-amber-800 to-orange-900 text-white">
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
                <Badge className="bg-orange-500/30 text-orange-200 border-orange-400/50">
                  <Gauge className="w-3 h-3 mr-1" />
                  Ops
                </Badge>
                <Badge className="bg-purple-500/30 text-purple-200 border-purple-400/50">
                  <GitBranch className="w-3 h-3 mr-1" />
                  DevOps Ready
                </Badge>
                <Badge className="bg-blue-500/30 text-blue-200 border-blue-400/50">
                  <Cloud className="w-3 h-3 mr-1" />
                  Cloud Native
                </Badge>
              </div>
              
              <h1 className="text-3xl lg:text-4xl font-bold mb-4">
                Capacidad de Desarrollo Software y Cloud
              </h1>
              
              <p className="text-lg text-white/80 mb-6 max-w-2xl">
                Disponibilidad operacional de equipos de desarrollo y servicios cloud en el ecosistema TIC vasco. 
                Monitorización en tiempo real de +200 empresas con capacidad de desarrollo, stack tecnológico y tarifas.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  <span>GAIA Cluster Tech Hub (Vitoria-Gasteiz)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Actualización semanal (lunes 08:00 CET)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Database className="w-4 h-4" />
                  <span>+200 empresas</span>
                </div>
              </div>
            </div>
            
            <div className="lg:text-right">
              <div className="text-3xl font-bold">380€</div>
              <div className="text-white/70">por mes</div>
              <Button className="mt-4 bg-white text-orange-900 hover:bg-white/90">
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
            {/* Real-time API Banner */}
            <Card className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 border-orange-200 dark:border-orange-800">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl">
                    <Rocket className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">API en Tiempo Real (OData)</h3>
                    <p className="text-muted-foreground mb-4">
                      Acceso mediante OData API para consultas en tiempo real sobre disponibilidad de equipos de desarrollo. 
                      Ideal para plataformas de matching y outsourcing que necesitan datos actualizados semanalmente.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">OData v4</Badge>
                      <Badge variant="secondary">REST API</Badge>
                      <Badge variant="secondary">JSON Response</Badge>
                      <Badge variant="secondary">OAuth 2.0</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Preview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="w-5 h-5 text-orange-600" />
                  Vista Previa de Datos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-2 font-medium">Empresa</th>
                        <th className="text-left py-3 px-2 font-medium">Ciudad</th>
                        <th className="text-center py-3 px-2 font-medium">Equipo</th>
                        <th className="text-center py-3 px-2 font-medium">Disponibles</th>
                        <th className="text-center py-3 px-2 font-medium">Utilización</th>
                        <th className="text-left py-3 px-2 font-medium">Tech Stack</th>
                        <th className="text-center py-3 px-2 font-medium">CI/CD</th>
                        <th className="text-right py-3 px-2 font-medium">€/hora</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sampleData.map((item, index) => (
                        <tr key={index} className="border-b last:border-0 hover:bg-muted/50">
                          <td className="py-3 px-2 font-medium">{item.company_name}</td>
                          <td className="py-3 px-2 text-muted-foreground text-xs">{item.location_city}</td>
                          <td className="py-3 px-2 text-center">{item.team_size_total}</td>
                          <td className="py-3 px-2 text-center">
                            <span className={item.developers_available > 10 ? 'text-green-600 font-medium' : ''}>
                              {item.developers_available}
                            </span>
                          </td>
                          <td className="py-3 px-2 text-center">{item.utilization_pct}%</td>
                          <td className="py-3 px-2">
                            <div className="flex flex-wrap gap-1">
                              {item.tech_stack.slice(0, 2).map((tech, i) => (
                                <Badge key={i} variant="outline" className="text-xs">{tech}</Badge>
                              ))}
                              {item.tech_stack.length > 2 && (
                                <Badge variant="outline" className="text-xs">+{item.tech_stack.length - 2}</Badge>
                              )}
                            </div>
                          </td>
                          <td className="py-3 px-2 text-center">
                            <Badge className={`text-xs ${getCiCdColor(item.ci_cd_maturity)}`}>
                              {item.ci_cd_maturity}
                            </Badge>
                          </td>
                          <td className="py-3 px-2 text-right font-mono">{item.hourly_rate_eur}€</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-muted-foreground mt-4 text-center">
                  Mostrando 5 de 218 registros • Datos de muestra con valores simulados
                </p>
              </CardContent>
            </Card>

            {/* Data Schema */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileJson className="w-5 h-5 text-orange-600" />
                  Esquema de Datos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs">
{`interface SoftwareCapacityRecord {
  company_id: string;                // ID único empresa
  company_name: string;              // Nombre de la empresa
  location_city: string;             // Ciudad sede principal
  week_start: string;                // Inicio de semana (ISO date)
  team_size_total: number;           // Tamaño total del equipo
  developers_available: number;      // Desarrolladores disponibles
  developers_assigned: number;       // Desarrolladores asignados
  utilization_pct: number;           // % utilización equipo
  tech_stack: string[];              // Stack tecnológico
  specialization: 
    | "web"       // Desarrollo web
    | "mobile"    // Apps móviles
    | "embedded"  // Sistemas embebidos
    | "cloud"     // Arquitecturas cloud
    | "ai_ml"     // IA/ML
    | "devops"    // DevOps
    | "security"; // Ciberseguridad
  cloud_provider: "aws" | "azure" | "gcp" | "multi_cloud" | "private";
  ci_cd_maturity: "none" | "basic" | "intermediate" | "advanced" | "elite";
  avg_sprint_velocity: number;       // Velocidad media sprint
  defect_rate_per_kloc: number;      // Defectos por KLOC
  availability_next_sprint: number;  // Disponibilidad próximo sprint
  hourly_rate_eur: number;           // Tarifa horaria EUR
  certifications: string[];          // Certificaciones equipo
  nearshore_available: boolean;      // Disponibilidad nearshore
}`}
                </pre>
              </CardContent>
            </Card>

            {/* Capacity Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-orange-600" />
                  Capacidad Agregada del Ecosistema
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg text-center">
                    <div className="text-2xl font-bold text-orange-700 dark:text-orange-300">4.850</div>
                    <div className="text-xs text-muted-foreground">Desarrolladores totales</div>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg text-center">
                    <div className="text-2xl font-bold text-amber-700 dark:text-amber-300">687</div>
                    <div className="text-xs text-muted-foreground">Disponibles ahora</div>
                  </div>
                  <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg text-center">
                    <div className="text-2xl font-bold text-green-700 dark:text-green-300">82%</div>
                    <div className="text-xs text-muted-foreground">Utilización media</div>
                  </div>
                  <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">68€</div>
                    <div className="text-xs text-muted-foreground">Tarifa media/hora</div>
                  </div>
                </div>

                <Separator className="my-6" />

                <h4 className="font-medium mb-4">Distribución por Especialización</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <div className="w-20 text-sm">Web</div>
                    <div className="flex-1 bg-muted rounded-full h-4 overflow-hidden">
                      <div className="bg-orange-500 h-full rounded-full" style={{width: '35%'}}></div>
                    </div>
                    <div className="w-12 text-right text-sm">35%</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-20 text-sm">Cloud</div>
                    <div className="flex-1 bg-muted rounded-full h-4 overflow-hidden">
                      <div className="bg-blue-500 h-full rounded-full" style={{width: '25%'}}></div>
                    </div>
                    <div className="w-12 text-right text-sm">25%</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-20 text-sm">DevOps</div>
                    <div className="flex-1 bg-muted rounded-full h-4 overflow-hidden">
                      <div className="bg-purple-500 h-full rounded-full" style={{width: '18%'}}></div>
                    </div>
                    <div className="w-12 text-right text-sm">18%</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-20 text-sm">Mobile</div>
                    <div className="flex-1 bg-muted rounded-full h-4 overflow-hidden">
                      <div className="bg-green-500 h-full rounded-full" style={{width: '12%'}}></div>
                    </div>
                    <div className="w-12 text-right text-sm">12%</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-20 text-sm">Otros</div>
                    <div className="flex-1 bg-muted rounded-full h-4 overflow-hidden">
                      <div className="bg-gray-400 h-full rounded-full" style={{width: '10%'}}></div>
                    </div>
                    <div className="w-12 text-right text-sm">10%</div>
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
                  <Shield className="w-5 h-5 text-orange-600" />
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
                    <span className="text-sm font-medium">EU + LATAM</span>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span className="text-sm">Matching/Outsourcing</span>
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
                    <Badge variant="outline">OData</Badge>
                  </div>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Frecuencia</span>
                  <span className="text-sm">Semanal (lunes)</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Latencia API</span>
                  <span className="text-sm">&lt;100ms p95</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Rate Limit</span>
                  <span className="text-sm">1000 req/min</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Autenticación</span>
                  <span className="text-sm">OAuth 2.0</span>
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
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-amber-600 rounded-lg flex items-center justify-center">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-medium">GAIA Tech Hub</div>
                    <div className="text-sm text-muted-foreground">Vitoria-Gasteiz, España</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  El GAIA Tech Hub coordina el ecosistema de desarrollo de software del País Vasco, 
                  facilitando el matching entre demanda y oferta de talento tecnológico en la región.
                </p>
                <div className="flex gap-2 mt-4">
                  <Badge variant="secondary">ISO 27001</Badge>
                  <Badge variant="secondary">SCRUM.org</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Top Tech Stacks */}
            <Card className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 border-orange-200 dark:border-orange-800">
              <CardContent className="pt-6">
                <h3 className="font-medium mb-4">Top Tech Stacks Disponibles</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-blue-100 text-blue-800">React (156)</Badge>
                  <Badge className="bg-green-100 text-green-800">Node.js (134)</Badge>
                  <Badge className="bg-yellow-100 text-yellow-800">Python (128)</Badge>
                  <Badge className="bg-orange-100 text-orange-800">Java (112)</Badge>
                  <Badge className="bg-purple-100 text-purple-800">.NET (98)</Badge>
                  <Badge className="bg-cyan-100 text-cyan-800">Azure (87)</Badge>
                  <Badge className="bg-amber-100 text-amber-800">AWS (82)</Badge>
                  <Badge className="bg-pink-100 text-pink-800">Angular (76)</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Download Sample */}
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <Download className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                  <h3 className="font-medium mb-2">API Documentation</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Descarga la documentación OpenAPI 3.0 para integrar con tu plataforma
                  </p>
                  <Button variant="outline" className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Descargar OpenAPI Spec
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

export default CapacidadDesarrolloSoftwareDetail;

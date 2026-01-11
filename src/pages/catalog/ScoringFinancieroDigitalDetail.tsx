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
  TrendingUp,
  AlertTriangle,
  BarChart3,
  PieChart,
  DollarSign,
  FileSpreadsheet
} from "lucide-react";

const ScoringFinancieroDigitalDetail = () => {
  const navigate = useNavigate();

  const sampleData = [
    { company_id: "GAIA-FIN-001", company_name: "Tecnalia R&I", sector: "R&D", revenue_eur: 128500000, ebitda_margin_pct: 8.2, financial_health_score: 88, credit_risk_level: "very_low", digital_maturity_score: 85, composite_score: 91 },
    { company_id: "GAIA-FIN-015", company_name: "Ibermática", sector: "IT Services", revenue_eur: 215000000, ebitda_margin_pct: 6.8, financial_health_score: 82, credit_risk_level: "low", digital_maturity_score: 78, composite_score: 84 },
    { company_id: "GAIA-FIN-034", company_name: "Plain Concepts", sector: "Software", revenue_eur: 42000000, ebitda_margin_pct: 12.5, financial_health_score: 79, credit_risk_level: "low", digital_maturity_score: 92, composite_score: 86 },
    { company_id: "GAIA-FIN-056", company_name: "Grupo LKS", sector: "Consulting", revenue_eur: 85000000, ebitda_margin_pct: 5.4, financial_health_score: 71, credit_risk_level: "medium", digital_maturity_score: 68, composite_score: 72 },
    { company_id: "GAIA-FIN-078", company_name: "Ulma Handling", sector: "Hardware", revenue_eur: 156000000, ebitda_margin_pct: 7.1, financial_health_score: 85, credit_risk_level: "low", digital_maturity_score: 72, composite_score: 81 },
  ];

  const getRiskColor = (level: string) => {
    switch(level) {
      case 'very_low': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'low': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'medium': return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300';
      case 'high': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300';
      default: return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-900 via-rose-800 to-red-900 text-white">
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
                <Badge className="bg-rose-500/30 text-rose-200 border-rose-400/50">
                  <BarChart3 className="w-3 h-3 mr-1" />
                  Market
                </Badge>
                <Badge className="bg-red-500/30 text-red-200 border-red-400/50">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  Financial Intelligence
                </Badge>
                <Badge className="bg-amber-500/30 text-amber-200 border-amber-400/50">
                  <AlertTriangle className="w-3 h-3 mr-1" />
                  Risk Scoring
                </Badge>
              </div>
              
              <h1 className="text-3xl lg:text-4xl font-bold mb-4">
                Scoring de Salud Financiera y Madurez Digital
              </h1>
              
              <p className="text-lg text-white/80 mb-6 max-w-2xl">
                Índice compuesto de estabilidad financiera y digitalización de PYMEs del ecosistema TIC vasco. 
                Combina métricas financieras tradicionales con evaluación de madurez digital para +500 empresas.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  <span>Basque Digital Finance Observatory (Bilbao)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Actualización mensual (día 20)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Database className="w-4 h-4" />
                  <span>+500 empresas</span>
                </div>
              </div>
            </div>
            
            <div className="lg:text-right">
              <div className="text-3xl font-bold">450€</div>
              <div className="text-white/70">por mes</div>
              <Button className="mt-4 bg-white text-red-900 hover:bg-white/90">
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
            {/* Composite Score Explanation */}
            <Card className="bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-950/30 dark:to-rose-950/30 border-red-200 dark:border-red-800">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-red-500 to-rose-500 rounded-xl">
                    <PieChart className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Índice Compuesto: Finanzas + Digitalización</h3>
                    <p className="text-muted-foreground mb-4">
                      El Composite Score combina la salud financiera tradicional (60%) con la madurez digital (40%) 
                      para ofrecer una visión integral de la sostenibilidad y competitividad de las empresas TIC vascas.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div className="p-3 bg-white dark:bg-gray-800 rounded-lg">
                        <div className="text-sm text-muted-foreground">Peso Financiero</div>
                        <div className="text-xl font-bold text-red-600">60%</div>
                      </div>
                      <div className="p-3 bg-white dark:bg-gray-800 rounded-lg">
                        <div className="text-sm text-muted-foreground">Peso Digital</div>
                        <div className="text-xl font-bold text-blue-600">40%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Preview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="w-5 h-5 text-red-600" />
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
                        <th className="text-right py-3 px-2 font-medium">Ingresos</th>
                        <th className="text-center py-3 px-2 font-medium">EBITDA</th>
                        <th className="text-center py-3 px-2 font-medium">Riesgo</th>
                        <th className="text-center py-3 px-2 font-medium">Fin.</th>
                        <th className="text-center py-3 px-2 font-medium">Dig.</th>
                        <th className="text-center py-3 px-2 font-medium">Composite</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sampleData.map((item, index) => (
                        <tr key={index} className="border-b last:border-0 hover:bg-muted/50">
                          <td className="py-3 px-2 font-medium">{item.company_name}</td>
                          <td className="py-3 px-2">
                            <Badge variant="outline" className="text-xs">{item.sector}</Badge>
                          </td>
                          <td className="py-3 px-2 text-right font-mono text-xs">
                            {(item.revenue_eur / 1000000).toFixed(1)}M€
                          </td>
                          <td className="py-3 px-2 text-center">{item.ebitda_margin_pct}%</td>
                          <td className="py-3 px-2 text-center">
                            <Badge className={`text-xs ${getRiskColor(item.credit_risk_level)}`}>
                              {item.credit_risk_level.replace('_', ' ')}
                            </Badge>
                          </td>
                          <td className="py-3 px-2 text-center font-mono">{item.financial_health_score}</td>
                          <td className="py-3 px-2 text-center font-mono">{item.digital_maturity_score}</td>
                          <td className="py-3 px-2 text-center">
                            <span className={`font-bold ${item.composite_score >= 85 ? 'text-green-600' : item.composite_score >= 70 ? 'text-amber-600' : 'text-red-600'}`}>
                              {item.composite_score}
                            </span>
                          </td>
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
                  <FileJson className="w-5 h-5 text-red-600" />
                  Esquema de Datos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs">
{`interface FinancialDigitalScoring {
  company_id: string;                // ID único empresa
  company_name: string;              // Nombre de la empresa
  cif: string;                       // CIF fiscal
  sector: string;                    // Sector de actividad
  employees: number;                 // Número de empleados
  revenue_eur: number;               // Facturación anual EUR
  ebitda_margin_pct: number;         // Margen EBITDA %
  debt_to_equity_ratio: number;      // Ratio deuda/equity
  current_ratio: number;             // Ratio corriente
  quick_ratio: number;               // Acid test ratio
  working_capital_days: number;      // Días de capital circulante
  financial_health_score: number;    // Score financiero (0-100)
  payment_behavior_score: number;    // Score comportamiento pago
  credit_risk_level: 
    | "very_low"   // Riesgo muy bajo
    | "low"        // Riesgo bajo
    | "medium"     // Riesgo medio
    | "high"       // Riesgo alto
    | "very_high"; // Riesgo muy alto
  digital_maturity_score: number;    // Score madurez digital (0-100)
  composite_score: number;           // Score compuesto (0-100)
  yoy_revenue_growth_pct: number;    // Crecimiento ingresos YoY
  r_and_d_investment_pct: number;    // Inversión I+D (% ingresos)
  export_ratio_pct: number;          // Ratio exportación
  last_financial_update: string;     // Última actualización
}`}
                </pre>
              </CardContent>
            </Card>

            {/* Score Distribution */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-red-600" />
                  Distribución de Scores del Ecosistema
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Financial Health Distribution */}
                  <div>
                    <h4 className="font-medium mb-4 flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-red-600" />
                      Score Financiero
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-16 text-xs">90-100</div>
                        <div className="flex-1 bg-muted rounded-full h-4 overflow-hidden">
                          <div className="bg-green-500 h-full rounded-full" style={{width: '15%'}}></div>
                        </div>
                        <div className="w-10 text-right text-xs">15%</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-16 text-xs">75-89</div>
                        <div className="flex-1 bg-muted rounded-full h-4 overflow-hidden">
                          <div className="bg-blue-500 h-full rounded-full" style={{width: '38%'}}></div>
                        </div>
                        <div className="w-10 text-right text-xs">38%</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-16 text-xs">60-74</div>
                        <div className="flex-1 bg-muted rounded-full h-4 overflow-hidden">
                          <div className="bg-amber-500 h-full rounded-full" style={{width: '32%'}}></div>
                        </div>
                        <div className="w-10 text-right text-xs">32%</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-16 text-xs">&lt;60</div>
                        <div className="flex-1 bg-muted rounded-full h-4 overflow-hidden">
                          <div className="bg-red-500 h-full rounded-full" style={{width: '15%'}}></div>
                        </div>
                        <div className="w-10 text-right text-xs">15%</div>
                      </div>
                    </div>
                  </div>

                  {/* Risk Distribution */}
                  <div>
                    <h4 className="font-medium mb-4 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-600" />
                      Nivel de Riesgo
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-16 text-xs">Muy bajo</div>
                        <div className="flex-1 bg-muted rounded-full h-4 overflow-hidden">
                          <div className="bg-green-500 h-full rounded-full" style={{width: '22%'}}></div>
                        </div>
                        <div className="w-10 text-right text-xs">22%</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-16 text-xs">Bajo</div>
                        <div className="flex-1 bg-muted rounded-full h-4 overflow-hidden">
                          <div className="bg-blue-500 h-full rounded-full" style={{width: '41%'}}></div>
                        </div>
                        <div className="w-10 text-right text-xs">41%</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-16 text-xs">Medio</div>
                        <div className="flex-1 bg-muted rounded-full h-4 overflow-hidden">
                          <div className="bg-amber-500 h-full rounded-full" style={{width: '25%'}}></div>
                        </div>
                        <div className="w-10 text-right text-xs">25%</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-16 text-xs">Alto+</div>
                        <div className="flex-1 bg-muted rounded-full h-4 overflow-hidden">
                          <div className="bg-red-500 h-full rounded-full" style={{width: '12%'}}></div>
                        </div>
                        <div className="w-10 text-right text-xs">12%</div>
                      </div>
                    </div>
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
                  <Shield className="w-5 h-5 text-red-600" />
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
                  <span className="text-sm">Credit scoring</span>
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
                    <Badge variant="outline"><FileSpreadsheet className="w-3 h-3 mr-1" />Excel</Badge>
                  </div>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Frecuencia</span>
                  <span className="text-sm">Mensual (día 20)</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Histórico</span>
                  <span className="text-sm">36 meses</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Fuentes</span>
                  <span className="text-sm">Registro Mercantil + GAIA</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Metodología</span>
                  <span className="text-sm">Altman Z-Score + CMMI</span>
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
                  <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-rose-600 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-medium">Basque Digital Finance</div>
                    <div className="text-sm text-muted-foreground">Bilbao, España</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  El Observatorio de Finanzas Digitales Vasco es una iniciativa conjunta de GAIA, 
                  Gobierno Vasco y entidades financieras para monitorizar la salud del ecosistema TIC.
                </p>
                <div className="flex gap-2 mt-4">
                  <Badge variant="secondary">Banco de España</Badge>
                  <Badge variant="secondary">LOPD</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Key Metrics */}
            <Card className="bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-950/30 dark:to-rose-950/30 border-red-200 dark:border-red-800">
              <CardContent className="pt-6">
                <h3 className="font-medium mb-4">Métricas Clave del Ecosistema</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Composite Score medio</span>
                    <span className="font-bold text-red-600">74.8</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">% Riesgo bajo/muy bajo</span>
                    <span className="font-bold text-green-600">63%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Crecimiento YoY medio</span>
                    <span className="font-bold text-blue-600">+8.3%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Inversión I+D media</span>
                    <span className="font-bold text-purple-600">5.2%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Download Sample */}
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <Download className="w-8 h-8 text-red-600 mx-auto mb-3" />
                  <h3 className="font-medium mb-2">Informe Sectorial</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Descarga un informe agregado del sector TIC vasco con datos anonimizados
                  </p>
                  <Button variant="outline" className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Descargar Report (PDF)
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

export default ScoringFinancieroDigitalDetail;

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
  Cpu,
  BarChart3,
  FileSpreadsheet
} from "lucide-react";

const PreciosComponentesElectronicosDetail = () => {
  const navigate = useNavigate();

  const sampleData = [
    { sku_id: "SKU-IC-LOG-001", component_name: "ARM Cortex-M4 MCU 128KB", category: "ic_logic", manufacturer: "STMicroelectronics", unit_price_eur: 4.85, price_change_mom_pct: -2.3, lead_time_weeks: 8, availability_index: 78, supply_chain_risk: "medium", automotive_grade: true },
    { sku_id: "SKU-MEM-DDR-042", component_name: "DDR5 8GB SDRAM Module", category: "ic_memory", manufacturer: "Samsung", unit_price_eur: 28.50, price_change_mom_pct: -5.1, lead_time_weeks: 6, availability_index: 85, supply_chain_risk: "low", automotive_grade: false },
    { sku_id: "SKU-PWR-DC-103", component_name: "GaN Power FET 650V/30A", category: "power_mgmt", manufacturer: "Infineon", unit_price_eur: 12.30, price_change_mom_pct: 1.8, lead_time_weeks: 12, availability_index: 62, supply_chain_risk: "high", automotive_grade: true },
    { sku_id: "SKU-SEN-ACC-078", component_name: "3-Axis MEMS Accelerometer", category: "sensors", manufacturer: "Bosch", unit_price_eur: 2.15, price_change_mom_pct: -0.5, lead_time_weeks: 10, availability_index: 71, supply_chain_risk: "medium", automotive_grade: true },
    { sku_id: "SKU-RF-BLE-056", component_name: "BLE 5.3 SoC with Antenna", category: "rf_wireless", manufacturer: "Nordic Semi", unit_price_eur: 3.75, price_change_mom_pct: -3.2, lead_time_weeks: 14, availability_index: 55, supply_chain_risk: "high", automotive_grade: false },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-900 via-violet-800 to-purple-900 text-white">
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
                <Badge className="bg-violet-500/30 text-violet-200 border-violet-400/50">
                  <BarChart3 className="w-3 h-3 mr-1" />
                  Market
                </Badge>
                <Badge className="bg-purple-500/30 text-purple-200 border-purple-400/50">
                  <Cpu className="w-3 h-3 mr-1" />
                  IMEC Certified
                </Badge>
                <Badge className="bg-amber-500/30 text-amber-200 border-amber-400/50">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  Market Index
                </Badge>
              </div>
              
              <h1 className="text-3xl lg:text-4xl font-bold mb-4">
                Índice de Precios de Componentes Electrónicos
              </h1>
              
              <p className="text-lg text-white/80 mb-6 max-w-2xl">
                Benchmark de costes y disponibilidad de componentes electrónicos en el mercado europeo. 
                Datos agregados de +8.000 SKUs con análisis de lead times, riesgo de suministro y tendencias de precios.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  <span>IMEC Market Intelligence (Leuven/Eindhoven)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Actualización mensual (día 5)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Database className="w-4 h-4" />
                  <span>+8.000 SKUs</span>
                </div>
              </div>
            </div>
            
            <div className="lg:text-right">
              <div className="text-3xl font-bold">780€</div>
              <div className="text-white/70">por mes</div>
              <Button className="mt-4 bg-white text-purple-900 hover:bg-white/90">
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
            {/* Data Preview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="w-5 h-5 text-purple-600" />
                  Vista Previa de Datos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-2 font-medium">SKU</th>
                        <th className="text-left py-3 px-2 font-medium">Componente</th>
                        <th className="text-left py-3 px-2 font-medium">Fabricante</th>
                        <th className="text-right py-3 px-2 font-medium">Precio</th>
                        <th className="text-right py-3 px-2 font-medium">Δ MoM</th>
                        <th className="text-center py-3 px-2 font-medium">Lead Time</th>
                        <th className="text-center py-3 px-2 font-medium">Riesgo</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sampleData.map((item, index) => (
                        <tr key={index} className="border-b last:border-0 hover:bg-muted/50">
                          <td className="py-3 px-2 font-mono text-xs">{item.sku_id}</td>
                          <td className="py-3 px-2">{item.component_name}</td>
                          <td className="py-3 px-2 text-muted-foreground">{item.manufacturer}</td>
                          <td className="py-3 px-2 text-right font-medium">{item.unit_price_eur.toFixed(2)}€</td>
                          <td className={`py-3 px-2 text-right ${item.price_change_mom_pct < 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {item.price_change_mom_pct > 0 ? '+' : ''}{item.price_change_mom_pct}%
                          </td>
                          <td className="py-3 px-2 text-center">{item.lead_time_weeks}w</td>
                          <td className="py-3 px-2 text-center">
                            <Badge variant={item.supply_chain_risk === 'low' ? 'default' : item.supply_chain_risk === 'medium' ? 'secondary' : 'destructive'} className="text-xs">
                              {item.supply_chain_risk}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-muted-foreground mt-4 text-center">
                  Mostrando 5 de 8.247 registros • Datos de muestra con valores simulados
                </p>
              </CardContent>
            </Card>

            {/* Data Schema */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileJson className="w-5 h-5 text-purple-600" />
                  Esquema de Datos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs">
{`interface ElectronicComponentPricing {
  sku_id: string;                    // Identificador único de SKU
  component_name: string;            // Nombre del componente
  component_category: 
    | "ic_logic"      // Circuitos integrados lógicos
    | "ic_memory"     // Memoria (DRAM, NAND, NOR)
    | "ic_analog"     // Circuitos analógicos
    | "passives"      // Componentes pasivos
    | "sensors"       // Sensores MEMS
    | "connectors"    // Conectores
    | "power_mgmt"    // Gestión de potencia
    | "rf_wireless";  // RF y wireless
  manufacturer: string;              // Fabricante
  package_type: string;              // Tipo de encapsulado
  process_node_nm: number | null;    // Nodo de proceso (nm)
  unit_price_eur: number;            // Precio unitario EUR
  price_change_mom_pct: number;      // Cambio mensual %
  price_change_yoy_pct: number;      // Cambio anual %
  lead_time_weeks: number;           // Tiempo de entrega (semanas)
  availability_index: number;        // Índice de disponibilidad (0-100)
  supply_chain_risk: "low" | "medium" | "high" | "critical";
  wafer_source: string;              // Origen del wafer
  min_order_qty: number;             // Cantidad mínima de pedido
  automotive_grade: boolean;         // Grado automotriz
  industrial_grade: boolean;         // Grado industrial
  rohs_compliant: boolean;           // Cumplimiento RoHS
}`}
                </pre>
              </CardContent>
            </Card>

            {/* Market Insights */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-purple-600" />
                  Insights del Mercado
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg">
                    <div className="text-sm text-green-600 dark:text-green-400 font-medium mb-1">Tendencia General</div>
                    <div className="text-2xl font-bold text-green-700 dark:text-green-300">-3.2%</div>
                    <div className="text-xs text-muted-foreground">Reducción media de precios MoM</div>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg">
                    <div className="text-sm text-amber-600 dark:text-amber-400 font-medium mb-1">Lead Time Medio</div>
                    <div className="text-2xl font-bold text-amber-700 dark:text-amber-300">10.2 semanas</div>
                    <div className="text-xs text-muted-foreground">Tiempo medio de entrega</div>
                  </div>
                  <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-lg">
                    <div className="text-sm text-red-600 dark:text-red-400 font-medium mb-1">SKUs en Riesgo</div>
                    <div className="text-2xl font-bold text-red-700 dark:text-red-300">847</div>
                    <div className="text-xs text-muted-foreground">Componentes con riesgo alto/crítico</div>
                  </div>
                  <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg">
                    <div className="text-sm text-purple-600 dark:text-purple-400 font-medium mb-1">Automotive Grade</div>
                    <div className="text-2xl font-bold text-purple-700 dark:text-purple-300">2.156</div>
                    <div className="text-xs text-muted-foreground">SKUs certificados para automoción</div>
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
                  <Shield className="w-5 h-5 text-purple-600" />
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
                    <span className="text-sm font-medium">EU + EFTA + UK</span>
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
                    <Badge variant="outline"><FileSpreadsheet className="w-3 h-3 mr-1" />Excel</Badge>
                    <Badge variant="outline"><FileJson className="w-3 h-3 mr-1" />JSON</Badge>
                  </div>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Conectores</span>
                  <span className="text-sm">Power BI, REST API</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Frecuencia</span>
                  <span className="text-sm">Mensual (día 5)</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Histórico</span>
                  <span className="text-sm">36 meses</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">SLA</span>
                  <span className="text-sm">99.5% uptime</span>
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
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-violet-600 rounded-lg flex items-center justify-center">
                    <Cpu className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-medium">IMEC Market Intelligence</div>
                    <div className="text-sm text-muted-foreground">Leuven/Eindhoven</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  IMEC es el centro de investigación líder mundial en nanoelectrónica y tecnologías digitales. 
                  Su división de Market Intelligence proporciona análisis de mercado para la industria de semiconductores europea.
                </p>
                <div className="flex gap-2 mt-4">
                  <Badge variant="secondary">ISO 27001</Badge>
                  <Badge variant="secondary">GDPR Compliant</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Download Sample */}
            <Card className="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-950/30 dark:to-violet-950/30 border-purple-200 dark:border-purple-800">
              <CardContent className="pt-6">
                <div className="text-center">
                  <Download className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-medium mb-2">Muestra Gratuita</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Descarga 100 SKUs de muestra para evaluar la calidad del dataset
                  </p>
                  <Button variant="outline" className="w-full border-purple-300 hover:bg-purple-100 dark:hover:bg-purple-900/30">
                    <Download className="w-4 h-4 mr-2" />
                    Descargar Sample (JSON)
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

export default PreciosComponentesElectronicosDetail;

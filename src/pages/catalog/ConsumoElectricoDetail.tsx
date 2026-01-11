import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ShieldCheck,
  Lock,
  Zap,
  Database,
  Globe,
  Clock,
  FileJson,
  Download,
  CheckCircle2,
  XCircle,
  Star,
  Factory,
  Gauge,
  ChevronRight,
  AlertTriangle,
  Building2,
  TrendingUp,
  BarChart3
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";

// Interfaz para el esquema de datos de consumo eléctrico industrial
interface IndustrialEnergyRecord {
  timestamp: string;
  postal_code: string;
  sector_type: "manufacturing" | "logistics" | "retail" | "office";
  consumption_kwh: number;
  peak_demand_kw: number;
  power_factor: number;
  voltage_quality: number;
  grid_zone: string;
  tariff_period: "punta" | "llano" | "valle";
  co2_emissions_kg: number;
}

// Datos de muestra realistas
const ENERGY_SAMPLE: IndustrialEnergyRecord[] = [
  {
    timestamp: "2025-01-11T08:00:00Z",
    postal_code: "28001",
    sector_type: "manufacturing",
    consumption_kwh: 4523.7,
    peak_demand_kw: 892.4,
    power_factor: 0.94,
    voltage_quality: 99.2,
    grid_zone: "MAD-CENTRO",
    tariff_period: "punta",
    co2_emissions_kg: 1584.3
  },
  {
    timestamp: "2025-01-11T08:00:00Z",
    postal_code: "08019",
    sector_type: "logistics",
    consumption_kwh: 2187.3,
    peak_demand_kw: 456.8,
    power_factor: 0.91,
    voltage_quality: 98.7,
    grid_zone: "BCN-LITORAL",
    tariff_period: "punta",
    co2_emissions_kg: 765.6
  },
  {
    timestamp: "2025-01-11T08:00:00Z",
    postal_code: "46001",
    sector_type: "retail",
    consumption_kwh: 892.1,
    peak_demand_kw: 178.4,
    power_factor: 0.96,
    voltage_quality: 99.5,
    grid_zone: "VAL-CENTRO",
    tariff_period: "punta",
    co2_emissions_kg: 312.2
  },
  {
    timestamp: "2025-01-11T08:00:00Z",
    postal_code: "41001",
    sector_type: "office",
    consumption_kwh: 567.8,
    peak_demand_kw: 134.2,
    power_factor: 0.98,
    voltage_quality: 99.8,
    grid_zone: "SEV-CENTRO",
    tariff_period: "punta",
    co2_emissions_kg: 198.7
  },
  {
    timestamp: "2025-01-11T07:00:00Z",
    postal_code: "28001",
    sector_type: "manufacturing",
    consumption_kwh: 4789.2,
    peak_demand_kw: 945.7,
    power_factor: 0.93,
    voltage_quality: 99.1,
    grid_zone: "MAD-CENTRO",
    tariff_period: "llano",
    co2_emissions_kg: 1677.2
  },
  {
    timestamp: "2025-01-11T07:00:00Z",
    postal_code: "48001",
    sector_type: "manufacturing",
    consumption_kwh: 6234.5,
    peak_demand_kw: 1234.8,
    power_factor: 0.92,
    voltage_quality: 98.9,
    grid_zone: "BIL-INDUSTRIAL",
    tariff_period: "llano",
    co2_emissions_kg: 2182.1
  },
  {
    timestamp: "2025-01-11T06:00:00Z",
    postal_code: "50001",
    sector_type: "logistics",
    consumption_kwh: 1876.4,
    peak_demand_kw: 398.2,
    power_factor: 0.90,
    voltage_quality: 98.5,
    grid_zone: "ZGZ-PLAZA",
    tariff_period: "valle",
    co2_emissions_kg: 656.7
  },
  {
    timestamp: "2025-01-11T06:00:00Z",
    postal_code: "15001",
    sector_type: "manufacturing",
    consumption_kwh: 3421.7,
    peak_demand_kw: 678.9,
    power_factor: 0.94,
    voltage_quality: 99.3,
    grid_zone: "COR-PUERTO",
    tariff_period: "valle",
    co2_emissions_kg: 1197.6
  },
  {
    timestamp: "2025-01-11T05:00:00Z",
    postal_code: "29001",
    sector_type: "retail",
    consumption_kwh: 234.5,
    peak_demand_kw: 56.7,
    power_factor: 0.97,
    voltage_quality: 99.6,
    grid_zone: "MLG-CENTRO",
    tariff_period: "valle",
    co2_emissions_kg: 82.1
  },
  {
    timestamp: "2025-01-11T05:00:00Z",
    postal_code: "03001",
    sector_type: "logistics",
    consumption_kwh: 1567.8,
    peak_demand_kw: 312.4,
    power_factor: 0.91,
    voltage_quality: 98.8,
    grid_zone: "ALI-PUERTO",
    tariff_period: "valle",
    co2_emissions_kg: 548.7
  }
];

// Esquema de datos con descripciones
const DATA_SCHEMA = [
  { field: "timestamp", type: "ISO 8601 DateTime", description: "Marca temporal UTC del registro (agregación horaria)" },
  { field: "postal_code", type: "String", description: "Código postal del punto de suministro" },
  { field: "sector_type", type: "Enum", description: "'manufacturing' | 'logistics' | 'retail' | 'office'" },
  { field: "consumption_kwh", type: "Float", description: "Consumo acumulado en la hora en kWh" },
  { field: "peak_demand_kw", type: "Float", description: "Demanda pico máxima en kW" },
  { field: "power_factor", type: "Float (0-1)", description: "Factor de potencia (cos φ)" },
  { field: "voltage_quality", type: "Float (0-100)", description: "Índice de calidad de tensión (%)" },
  { field: "grid_zone", type: "String", description: "Zona de red eléctrica" },
  { field: "tariff_period", type: "Enum", description: "'punta' | 'llano' | 'valle'" },
  { field: "co2_emissions_kg", type: "Float", description: "Emisiones CO2 asociadas al consumo" }
];

export default function ConsumoElectricoDetail() {
  const [activeTab, setActiveTab] = useState("description");

  const getSectorIcon = (sector: string) => {
    switch (sector) {
      case "manufacturing": return <Factory className="h-4 w-4" />;
      case "logistics": return <Building2 className="h-4 w-4" />;
      case "retail": return <Building2 className="h-4 w-4" />;
      default: return <Building2 className="h-4 w-4" />;
    }
  };

  const getSectorLabel = (sector: string) => {
    switch (sector) {
      case "manufacturing": return "Manufactura";
      case "logistics": return "Logística";
      case "retail": return "Retail";
      default: return "Oficina";
    }
  };

  const getTariffColor = (tariff: string) => {
    switch (tariff) {
      case "punta": return "text-red-600 bg-red-100";
      case "llano": return "text-yellow-600 bg-yellow-100";
      default: return "text-green-600 bg-green-100";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      {/* Header Navigation */}
      <div className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/catalog" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Volver al catálogo
              </Link>
            </Button>
            <Separator orientation="vertical" className="h-6" />
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/catalog" className="hover:text-foreground transition-colors">Catálogo</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground font-medium">Consumo Eléctrico Industrial</span>
            </nav>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content - 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* ZONA A: Header con confianza y procedencia */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="overflow-hidden">
                <div className="h-3 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500" />
                <CardHeader className="pb-4">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <Badge variant="secondary" className="uppercase text-xs tracking-wider">
                      Industrial
                    </Badge>
                    <Tooltip>
                      <TooltipTrigger>
                        <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 border-blue-200">
                          <ShieldCheck className="h-3 w-3 mr-1" />
                          KYB Verificado
                        </Badge>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Proveedor verificado mediante proceso Know Your Business</p>
                      </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger>
                        <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200 border-amber-200">
                          <Lock className="h-3 w-3 mr-1" />
                          Infraestructura Crítica
                        </Badge>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Datos sensibles de infraestructura nacional - Uso restringido</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                  
                  <CardTitle className="text-3xl font-bold bg-gradient-to-r from-amber-900 to-orange-700 bg-clip-text text-transparent">
                    Consumo Eléctrico Industrial
                  </CardTitle>
                  
                  <CardDescription className="text-base mt-2">
                    Dataset agregado de consumo eléctrico del sector industrial español. 
                    Incluye métricas de demanda, calidad de suministro, factor de potencia y emisiones CO2 asociadas.
                    Datos anonimizados por código postal y sector económico.
                  </CardDescription>

                  <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <span className="font-medium text-foreground">Proveedor:</span>
                      Iberdrola Distribución
                    </div>
                    <Separator orientation="vertical" className="h-4" />
                    <div className="flex items-center gap-1.5">
                      <span className="font-medium text-foreground">Custodia:</span>
                      AWS Data Exchange (Irlanda, EU)
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mt-4">
                    <div className="flex items-center gap-1">
                      {[1,2,3,4,5].map((star) => (
                        <Star 
                          key={star} 
                          className={`h-4 w-4 ${star <= 4 ? 'fill-amber-400 text-amber-400' : 'fill-amber-400/50 text-amber-400/50'}`} 
                        />
                      ))}
                      <span className="ml-1 font-semibold">4.8</span>
                      <span className="text-muted-foreground">(124 reseñas)</span>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>

            {/* ZONA B: Hero Visual con métricas destacadas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="bg-gradient-to-br from-amber-900 to-orange-800 text-white overflow-hidden">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-4 gap-6">
                    {/* Hourly Update */}
                    <div className="flex flex-col items-center justify-center p-4 bg-white/10 rounded-xl">
                      <Clock className="h-8 w-8 mb-2 text-amber-300" />
                      <span className="text-lg font-bold">Horaria</span>
                      <span className="text-sm text-amber-200">Actualización</span>
                    </div>

                    {/* Volumen */}
                    <div className="flex flex-col items-center justify-center p-4 bg-white/10 rounded-xl">
                      <Database className="h-8 w-8 mb-2 text-orange-300" />
                      <span className="text-2xl font-bold">15M+</span>
                      <span className="text-sm text-amber-200">Registros</span>
                    </div>

                    {/* Completitud */}
                    <div className="flex flex-col items-center justify-center p-4 bg-white/10 rounded-xl">
                      <BarChart3 className="h-8 w-8 mb-2 text-yellow-300" />
                      <span className="text-2xl font-bold">99.5%</span>
                      <span className="text-sm text-amber-200">Completitud</span>
                    </div>

                    {/* Cobertura */}
                    <div className="flex flex-col items-center justify-center p-4 bg-white/10 rounded-xl">
                      <Factory className="h-8 w-8 mb-2 text-red-300" />
                      <span className="text-2xl font-bold">8.500+</span>
                      <span className="text-sm text-amber-200">Códigos Postales</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* ZONA C: Tabs con información detallada */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card>
                <CardContent className="p-0">
                  <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0 h-auto flex-wrap">
                      <TabsTrigger 
                        value="description" 
                        className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
                      >
                        Descripción
                      </TabsTrigger>
                      <TabsTrigger 
                        value="schema" 
                        className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
                      >
                        Estructura de Datos
                      </TabsTrigger>
                      <TabsTrigger 
                        value="format" 
                        className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
                      >
                        Formato y Entrega
                      </TabsTrigger>
                      <TabsTrigger 
                        value="rights" 
                        className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
                      >
                        Derechos (ODRL)
                      </TabsTrigger>
                      <TabsTrigger 
                        value="sample" 
                        className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
                      >
                        Muestra de Datos
                      </TabsTrigger>
                      <TabsTrigger 
                        value="quality" 
                        className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
                      >
                        Calidad
                      </TabsTrigger>
                    </TabsList>

                    {/* Tab: Descripción */}
                    <TabsContent value="description" className="p-6 space-y-6">
                      <div>
                        <h3 className="font-semibold text-lg mb-3">Descripción del Dataset</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Este dataset proporciona información agregada sobre el consumo eléctrico 
                          del sector industrial en España, con granularidad horaria y segmentación 
                          por código postal y tipo de actividad económica.
                        </p>
                        <p className="text-muted-foreground leading-relaxed mt-3">
                          Los datos incluyen métricas de calidad de suministro, factor de potencia 
                          y cálculo de emisiones CO2 asociadas al mix energético de cada zona. 
                          Ideal para análisis de eficiencia energética, planificación de red y 
                          reporting de sostenibilidad corporativa.
                        </p>
                      </div>

                      <Separator />

                      <div>
                        <h3 className="font-semibold text-lg mb-3">Casos de Uso Principales</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>Análisis de patrones de consumo industrial por zona geográfica</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>Optimización de contratos de suministro eléctrico</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>Cálculo de huella de carbono Scope 2 para reporting ESG</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>Planificación de infraestructura de red eléctrica</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>Detección de anomalías y pérdidas técnicas</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5" />
                          <div>
                            <h4 className="font-semibold text-amber-900">Datos de Infraestructura Crítica</h4>
                            <p className="text-sm text-amber-700 mt-1">
                              Este dataset contiene información sensible de infraestructura nacional. 
                              Su uso está sujeto a verificación adicional y no está permitido 
                              el entrenamiento de modelos IA ni la reventa.
                            </p>
                          </div>
                        </div>
                      </div>
                    </TabsContent>

                    {/* Tab: Estructura de Datos */}
                    <TabsContent value="schema" className="p-6">
                      <h3 className="font-semibold text-lg mb-4">Esquema del Dataset</h3>
                      <div className="border rounded-lg overflow-hidden">
                        <Table>
                          <TableHeader>
                            <TableRow className="bg-muted/50">
                              <TableHead className="font-semibold">Campo</TableHead>
                              <TableHead className="font-semibold">Tipo</TableHead>
                              <TableHead className="font-semibold">Descripción</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {DATA_SCHEMA.map((field, index) => (
                              <TableRow key={index}>
                                <TableCell className="font-mono text-sm text-orange-700">{field.field}</TableCell>
                                <TableCell className="text-sm text-muted-foreground">{field.type}</TableCell>
                                <TableCell className="text-sm">{field.description}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </TabsContent>

                    {/* Tab: Formato y Entrega */}
                    <TabsContent value="format" className="p-6 space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <Card>
                          <CardHeader className="pb-3">
                            <CardTitle className="text-base flex items-center gap-2">
                              <FileJson className="h-5 w-5 text-orange-600" />
                              Formato de Datos
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-2 text-sm">
                              <li className="flex items-center gap-2">
                                <Badge variant="outline">Principal</Badge>
                                Apache Parquet (Big Data optimizado)
                              </li>
                              <li className="flex items-center gap-2">
                                <Badge variant="outline">Alternativo</Badge>
                                CSV comprimido (gzip)
                              </li>
                              <li className="flex items-center gap-2">
                                <Badge variant="outline">Encoding</Badge>
                                UTF-8
                              </li>
                            </ul>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader className="pb-3">
                            <CardTitle className="text-base flex items-center gap-2">
                              <Download className="h-5 w-5 text-orange-600" />
                              Métodos de Entrega
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-2 text-sm">
                              <li className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-600" />
                                AWS S3 Direct Access
                              </li>
                              <li className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-600" />
                                SFTP Seguro
                              </li>
                              <li className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-600" />
                                API REST (consultas específicas)
                              </li>
                            </ul>
                          </CardContent>
                        </Card>
                      </div>

                      <Card>
                        <CardHeader className="pb-3">
                          <CardTitle className="text-base flex items-center gap-2">
                            <Clock className="h-5 w-5 text-orange-600" />
                            Frecuencia de Actualización
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                              <span className="font-medium">Periodicidad:</span>
                              <Badge className="bg-amber-100 text-amber-800">Horaria</Badge>
                            </div>
                            <Separator orientation="vertical" className="h-6" />
                            <div className="text-sm text-muted-foreground">
                              Datos disponibles con latencia máxima de 2 horas desde cierre del período
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>

                    {/* Tab: Derechos (ODRL) */}
                    <TabsContent value="rights" className="p-6 space-y-6">
                      <div>
                        <h3 className="font-semibold text-lg mb-4">Derechos de Uso (ODRL 2.2)</h3>
                        <p className="text-muted-foreground mb-6">
                          Este dataset tiene restricciones especiales por tratarse de datos 
                          de infraestructura crítica nacional.
                        </p>
                      </div>

                      <div className="grid md:grid-cols-3 gap-4">
                        <Card className="border-red-200 bg-red-50">
                          <CardContent className="pt-6">
                            <div className="flex flex-col items-center text-center">
                              <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center mb-3">
                                <XCircle className="h-6 w-6 text-red-600" />
                              </div>
                              <h4 className="font-semibold text-red-900">AI Training</h4>
                              <p className="text-sm text-red-700 mt-1">NO Permitido</p>
                              <p className="text-xs text-red-600 mt-2">Datos sensibles de infraestructura</p>
                            </div>
                          </CardContent>
                        </Card>

                        <Card className="border-red-200 bg-red-50">
                          <CardContent className="pt-6">
                            <div className="flex flex-col items-center text-center">
                              <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center mb-3">
                                <XCircle className="h-6 w-6 text-red-600" />
                              </div>
                              <h4 className="font-semibold text-red-900">Reventa</h4>
                              <p className="text-sm text-red-700 mt-1">NO Permitido</p>
                              <p className="text-xs text-red-600 mt-2">Licencia intransferible</p>
                            </div>
                          </CardContent>
                        </Card>

                        <Card className="border-green-200 bg-green-50">
                          <CardContent className="pt-6">
                            <div className="flex flex-col items-center text-center">
                              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-3">
                                <Globe className="h-6 w-6 text-green-600" />
                              </div>
                              <h4 className="font-semibold text-green-900">Geo-Restricción</h4>
                              <p className="text-sm text-green-700 mt-1">EU + UK</p>
                              <p className="text-xs text-green-600 mt-2">Procesamiento en Europa</p>
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      <Card className="border-amber-200">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-base">Restricciones Adicionales</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                              <Lock className="h-4 w-4 text-amber-600" />
                              Requiere verificación de uso final antes de activación
                            </li>
                            <li className="flex items-center gap-2">
                              <Lock className="h-4 w-4 text-amber-600" />
                              Auditoría trimestral de cumplimiento obligatoria
                            </li>
                            <li className="flex items-center gap-2">
                              <Lock className="h-4 w-4 text-amber-600" />
                              Prohibido el uso en análisis de competencia comercial
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                    </TabsContent>

                    {/* Tab: Muestra de Datos */}
                    <TabsContent value="sample" className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-lg">Vista Previa de Datos</h3>
                        <Badge variant="outline" className="text-muted-foreground">
                          Mostrando 10 de 15M+ registros
                        </Badge>
                      </div>
                      
                      <ScrollArea className="h-[500px] border rounded-lg">
                        <Table>
                          <TableHeader className="sticky top-0 bg-background">
                            <TableRow>
                              <TableHead className="font-semibold min-w-[180px]">Timestamp</TableHead>
                              <TableHead className="font-semibold">CP</TableHead>
                              <TableHead className="font-semibold">Sector</TableHead>
                              <TableHead className="font-semibold text-right">kWh</TableHead>
                              <TableHead className="font-semibold text-right">Peak kW</TableHead>
                              <TableHead className="font-semibold text-right">PF</TableHead>
                              <TableHead className="font-semibold">Zona</TableHead>
                              <TableHead className="font-semibold">Tarifa</TableHead>
                              <TableHead className="font-semibold text-right">CO2 kg</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {ENERGY_SAMPLE.map((record, index) => (
                              <TableRow key={index}>
                                <TableCell className="font-mono text-xs">
                                  {new Date(record.timestamp).toLocaleString('es-ES')}
                                </TableCell>
                                <TableCell className="font-medium">{record.postal_code}</TableCell>
                                <TableCell>
                                  <div className="flex items-center gap-1">
                                    {getSectorIcon(record.sector_type)}
                                    <span className="text-sm">{getSectorLabel(record.sector_type)}</span>
                                  </div>
                                </TableCell>
                                <TableCell className="text-right font-mono">
                                  {record.consumption_kwh.toLocaleString('es-ES', { maximumFractionDigits: 1 })}
                                </TableCell>
                                <TableCell className="text-right font-mono">
                                  {record.peak_demand_kw.toLocaleString('es-ES', { maximumFractionDigits: 1 })}
                                </TableCell>
                                <TableCell className="text-right font-mono">
                                  {record.power_factor.toFixed(2)}
                                </TableCell>
                                <TableCell className="text-sm">{record.grid_zone}</TableCell>
                                <TableCell>
                                  <Badge className={`${getTariffColor(record.tariff_period)} text-xs`}>
                                    {record.tariff_period}
                                  </Badge>
                                </TableCell>
                                <TableCell className="text-right font-mono text-muted-foreground">
                                  {record.co2_emissions_kg.toLocaleString('es-ES', { maximumFractionDigits: 1 })}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </ScrollArea>
                    </TabsContent>

                    {/* Tab: Calidad */}
                    <TabsContent value="quality" className="p-6 space-y-6">
                      <h3 className="font-semibold text-lg mb-4">Métricas de Calidad de Datos</h3>
                      
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium">Completitud</span>
                            <span className="text-sm text-muted-foreground">99.5%</span>
                          </div>
                          <Progress value={99.5} className="h-2" />
                        </div>
                        
                        <div>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium">Precisión</span>
                            <span className="text-sm text-muted-foreground">99.8%</span>
                          </div>
                          <Progress value={99.8} className="h-2" />
                        </div>
                        
                        <div>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium">Consistencia</span>
                            <span className="text-sm text-muted-foreground">99.2%</span>
                          </div>
                          <Progress value={99.2} className="h-2" />
                        </div>
                        
                        <div>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium">Puntualidad (SLA)</span>
                            <span className="text-sm text-muted-foreground">99.9%</span>
                          </div>
                          <Progress value={99.9} className="h-2" />
                        </div>
                      </div>

                      <Separator />

                      <div className="grid md:grid-cols-2 gap-4">
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-sm">Certificaciones</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="flex flex-wrap gap-2">
                              <Badge variant="outline">ISO 27001</Badge>
                              <Badge variant="outline">SOC 2 Type II</Badge>
                              <Badge variant="outline">GDPR Compliant</Badge>
                              <Badge variant="outline">ENS Alto</Badge>
                            </div>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-sm">SLA Garantizado</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-1 text-sm">
                              <div className="flex justify-between">
                                <span>Disponibilidad:</span>
                                <span className="font-medium">99.95%</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Latencia máxima:</span>
                                <span className="font-medium">2 horas</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Soporte:</span>
                                <span className="font-medium">24/7 Premium</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar - 1 column */}
          <div className="space-y-6">
            <div className="lg:sticky lg:top-24">
              {/* Card de Transacción */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Card className="shadow-lg border-2">
                  <CardHeader className="pb-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-amber-600">500€</span>
                      <span className="text-muted-foreground">/mes</span>
                    </div>
                    <CardDescription>Suscripción mensual con acceso completo</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        Acceso a datos históricos (2 años)
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        Actualización horaria incluida
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        AWS S3 + SFTP Access
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        Soporte técnico 24/7
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        SLA 99.95% garantizado
                      </li>
                    </ul>
                    
                    <Separator />
                    
                    <Button className="w-full bg-amber-600 hover:bg-amber-700" size="lg" asChild>
                      <Link to="/auth">
                        <Zap className="h-4 w-4 mr-2" />
                        Solicitar Acceso
                      </Link>
                    </Button>

                    <p className="text-xs text-center text-muted-foreground">
                      Requiere verificación adicional por datos de infraestructura crítica
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Card de Proveedor */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-6"
              >
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">Sobre el Proveedor</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center">
                        <Zap className="h-6 w-6 text-amber-600" />
                      </div>
                      <div>
                        <div className="font-semibold">Iberdrola Distribución</div>
                        <div className="text-sm text-muted-foreground">Utility Data Provider</div>
                      </div>
                    </div>
                    <Separator />
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <div className="text-muted-foreground">Datasets</div>
                        <div className="font-semibold">12</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Clientes</div>
                        <div className="font-semibold">340+</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">En ProcureData</div>
                        <div className="font-semibold">3 años</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Rating</div>
                        <div className="font-semibold flex items-center gap-1">
                          4.8 <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

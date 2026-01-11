import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ShieldCheck,
  Leaf,
  Database,
  Globe,
  Clock,
  FileJson,
  Download,
  CheckCircle2,
  XCircle,
  Star,
  ChevronRight,
  Droplets,
  MapPin,
  Thermometer,
  TrendingUp,
  AlertTriangle,
  Sprout,
  CloudRain,
  Sun,
  Activity
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

// Interfaz para el esquema de datos de huella hídrica
interface WaterFootprintRecord {
  week_start: string;
  parcel_id: string;
  region: string;
  municipality: string;
  crop_type: "olivo" | "vid" | "cereal" | "hortalizas" | "frutales" | "almendro";
  parcel_hectares: number;
  water_consumed_m3: number;
  water_per_hectare_m3: number;
  irrigation_type: "riego" | "secano" | "goteo" | "aspersion";
  precipitation_mm: number;
  evapotranspiration_mm: number;
  soil_moisture_percent: number;
  stress_index: number;
  stress_prediction_7d: "low" | "medium" | "high" | "critical";
  efficiency_score: number;
  carbon_footprint_kg: number;
}

// Datos de muestra realistas
const WATER_SAMPLE: WaterFootprintRecord[] = [
  {
    week_start: "2025-01-06",
    parcel_id: "AND-JAE-00234",
    region: "Andalucía",
    municipality: "Úbeda",
    crop_type: "olivo",
    parcel_hectares: 45.2,
    water_consumed_m3: 1356,
    water_per_hectare_m3: 30,
    irrigation_type: "goteo",
    precipitation_mm: 12.4,
    evapotranspiration_mm: 18.7,
    soil_moisture_percent: 42,
    stress_index: 28,
    stress_prediction_7d: "low",
    efficiency_score: 87,
    carbon_footprint_kg: 234.5
  },
  {
    week_start: "2025-01-06",
    parcel_id: "CYL-VAL-00567",
    region: "Castilla y León",
    municipality: "Rueda",
    crop_type: "vid",
    parcel_hectares: 28.7,
    water_consumed_m3: 0,
    water_per_hectare_m3: 0,
    irrigation_type: "secano",
    precipitation_mm: 8.2,
    evapotranspiration_mm: 12.3,
    soil_moisture_percent: 38,
    stress_index: 45,
    stress_prediction_7d: "medium",
    efficiency_score: 72,
    carbon_footprint_kg: 45.2
  },
  {
    week_start: "2025-01-06",
    parcel_id: "MUR-CAR-00123",
    region: "Murcia",
    municipality: "Cartagena",
    crop_type: "hortalizas",
    parcel_hectares: 12.5,
    water_consumed_m3: 2875,
    water_per_hectare_m3: 230,
    irrigation_type: "goteo",
    precipitation_mm: 2.1,
    evapotranspiration_mm: 22.4,
    soil_moisture_percent: 55,
    stress_index: 18,
    stress_prediction_7d: "low",
    efficiency_score: 91,
    carbon_footprint_kg: 567.8
  },
  {
    week_start: "2025-01-06",
    parcel_id: "ARA-HUE-00089",
    region: "Aragón",
    municipality: "Binéfar",
    crop_type: "cereal",
    parcel_hectares: 87.3,
    water_consumed_m3: 0,
    water_per_hectare_m3: 0,
    irrigation_type: "secano",
    precipitation_mm: 6.8,
    evapotranspiration_mm: 9.2,
    soil_moisture_percent: 48,
    stress_index: 32,
    stress_prediction_7d: "low",
    efficiency_score: 78,
    carbon_footprint_kg: 123.4
  },
  {
    week_start: "2025-01-06",
    parcel_id: "VAL-VAL-00345",
    region: "C. Valenciana",
    municipality: "Alzira",
    crop_type: "frutales",
    parcel_hectares: 18.9,
    water_consumed_m3: 3024,
    water_per_hectare_m3: 160,
    irrigation_type: "aspersion",
    precipitation_mm: 5.6,
    evapotranspiration_mm: 19.8,
    soil_moisture_percent: 52,
    stress_index: 24,
    stress_prediction_7d: "low",
    efficiency_score: 84,
    carbon_footprint_kg: 445.6
  },
  {
    week_start: "2025-01-06",
    parcel_id: "AND-ALM-00456",
    region: "Andalucía",
    municipality: "Níjar",
    crop_type: "hortalizas",
    parcel_hectares: 8.4,
    water_consumed_m3: 2184,
    water_per_hectare_m3: 260,
    irrigation_type: "goteo",
    precipitation_mm: 0.0,
    evapotranspiration_mm: 24.5,
    soil_moisture_percent: 35,
    stress_index: 62,
    stress_prediction_7d: "high",
    efficiency_score: 68,
    carbon_footprint_kg: 389.2
  },
  {
    week_start: "2025-01-06",
    parcel_id: "CLM-TOL-00678",
    region: "Castilla-La Mancha",
    municipality: "Madridejos",
    crop_type: "almendro",
    parcel_hectares: 34.6,
    water_consumed_m3: 1038,
    water_per_hectare_m3: 30,
    irrigation_type: "goteo",
    precipitation_mm: 4.2,
    evapotranspiration_mm: 14.6,
    soil_moisture_percent: 40,
    stress_index: 38,
    stress_prediction_7d: "medium",
    efficiency_score: 81,
    carbon_footprint_kg: 178.9
  },
  {
    week_start: "2025-01-06",
    parcel_id: "EXT-BAD-00234",
    region: "Extremadura",
    municipality: "Almendralejo",
    crop_type: "vid",
    parcel_hectares: 52.1,
    water_consumed_m3: 1563,
    water_per_hectare_m3: 30,
    irrigation_type: "riego",
    precipitation_mm: 7.8,
    evapotranspiration_mm: 16.2,
    soil_moisture_percent: 44,
    stress_index: 35,
    stress_prediction_7d: "medium",
    efficiency_score: 76,
    carbon_footprint_kg: 298.4
  },
  {
    week_start: "2024-12-30",
    parcel_id: "AND-JAE-00234",
    region: "Andalucía",
    municipality: "Úbeda",
    crop_type: "olivo",
    parcel_hectares: 45.2,
    water_consumed_m3: 1220,
    water_per_hectare_m3: 27,
    irrigation_type: "goteo",
    precipitation_mm: 18.6,
    evapotranspiration_mm: 15.4,
    soil_moisture_percent: 48,
    stress_index: 22,
    stress_prediction_7d: "low",
    efficiency_score: 89,
    carbon_footprint_kg: 212.3
  },
  {
    week_start: "2024-12-30",
    parcel_id: "MUR-LOR-00789",
    region: "Murcia",
    municipality: "Lorca",
    crop_type: "frutales",
    parcel_hectares: 22.3,
    water_consumed_m3: 3791,
    water_per_hectare_m3: 170,
    irrigation_type: "goteo",
    precipitation_mm: 0.8,
    evapotranspiration_mm: 21.2,
    soil_moisture_percent: 28,
    stress_index: 78,
    stress_prediction_7d: "critical",
    efficiency_score: 62,
    carbon_footprint_kg: 623.5
  }
];

// Esquema de datos con descripciones
const DATA_SCHEMA = [
  { field: "week_start", type: "Date (YYYY-MM-DD)", description: "Inicio de la semana de medición" },
  { field: "parcel_id", type: "String", description: "Identificador único de la parcela (formato: CCAA-PROV-NUM)" },
  { field: "region", type: "String", description: "Comunidad Autónoma" },
  { field: "municipality", type: "String", description: "Municipio donde se ubica la parcela" },
  { field: "crop_type", type: "Enum", description: "'olivo' | 'vid' | 'cereal' | 'hortalizas' | 'frutales' | 'almendro'" },
  { field: "parcel_hectares", type: "Float", description: "Superficie de la parcela en hectáreas" },
  { field: "water_consumed_m3", type: "Float", description: "Agua consumida en la semana (m³)" },
  { field: "water_per_hectare_m3", type: "Float", description: "Consumo por hectárea (m³/ha)" },
  { field: "irrigation_type", type: "Enum", description: "'riego' | 'secano' | 'goteo' | 'aspersion'" },
  { field: "precipitation_mm", type: "Float", description: "Precipitación semanal (mm)" },
  { field: "evapotranspiration_mm", type: "Float", description: "Evapotranspiración semanal (mm)" },
  { field: "soil_moisture_percent", type: "Integer (0-100)", description: "Humedad del suelo (%)" },
  { field: "stress_index", type: "Integer (0-100)", description: "Índice de estrés hídrico (0=sin estrés)" },
  { field: "stress_prediction_7d", type: "Enum", description: "Predicción ML a 7 días: 'low' | 'medium' | 'high' | 'critical'" },
  { field: "efficiency_score", type: "Integer (0-100)", description: "Puntuación de eficiencia hídrica" },
  { field: "carbon_footprint_kg", type: "Float", description: "Huella de carbono asociada (kg CO2)" }
];

export default function HuellaHidricaDetail() {
  const [activeTab, setActiveTab] = useState("description");

  const getCropIcon = (crop: string) => {
    switch (crop) {
      case "olivo": return "🫒";
      case "vid": return "🍇";
      case "cereal": return "🌾";
      case "hortalizas": return "🥬";
      case "frutales": return "🍊";
      default: return "🌰";
    }
  };

  const getStressColor = (stress: string) => {
    switch (stress) {
      case "low": return "bg-green-100 text-green-800";
      case "medium": return "bg-yellow-100 text-yellow-800";
      case "high": return "bg-orange-100 text-orange-800";
      default: return "bg-red-100 text-red-800";
    }
  };

  const getStressLabel = (stress: string) => {
    switch (stress) {
      case "low": return "Bajo";
      case "medium": return "Medio";
      case "high": return "Alto";
      default: return "Crítico";
    }
  };

  const getEfficiencyColor = (score: number) => {
    if (score >= 85) return "text-green-600";
    if (score >= 70) return "text-yellow-600";
    if (score >= 50) return "text-orange-600";
    return "text-red-600";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-teal-50">
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
              <span className="text-foreground font-medium">Huella Hídrica Agrícola</span>
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
                <div className="h-3 bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500" />
                <CardHeader className="pb-4">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <Badge variant="secondary" className="uppercase text-xs tracking-wider">
                      Sostenibilidad
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
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-200 border-green-200">
                          <Leaf className="h-3 w-3 mr-1" />
                          ESG Certified
                        </Badge>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Certificación ESG completa</p>
                      </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger>
                        <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 border-emerald-200">
                          <Sprout className="h-3 w-3 mr-1" />
                          Low Carbon
                        </Badge>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Infraestructura 100% renovable</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                  
                  <CardTitle className="text-3xl font-bold bg-gradient-to-r from-cyan-800 to-teal-700 bg-clip-text text-transparent">
                    Huella Hídrica Agrícola
                  </CardTitle>
                  
                  <CardDescription className="text-base mt-2">
                    Dataset semanal con monitorización de consumo hídrico, eficiencia de riego y 
                    predicciones de estrés hídrico para parcelas agrícolas. Incluye modelos ML 
                    de predicción y huella de carbono asociada.
                  </CardDescription>

                  <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <span className="font-medium text-foreground">Proveedor:</span>
                      AquaData Solutions
                    </div>
                    <Separator orientation="vertical" className="h-4" />
                    <div className="flex items-center gap-1.5">
                      <span className="font-medium text-foreground">Custodia:</span>
                      CESGA Green Cloud (Galicia)
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
                      <span className="ml-1 font-semibold">4.5</span>
                      <span className="text-muted-foreground">(92 reseñas)</span>
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
              <Card className="bg-gradient-to-br from-teal-700 to-cyan-800 text-white overflow-hidden">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-4 gap-6">
                    {/* Weekly Update */}
                    <div className="flex flex-col items-center justify-center p-4 bg-white/10 rounded-xl">
                      <Clock className="h-8 w-8 mb-2 text-cyan-200" />
                      <span className="text-lg font-bold">Semanal</span>
                      <span className="text-sm text-teal-200">Lunes 06:00 UTC</span>
                    </div>

                    {/* Parcelas */}
                    <div className="flex flex-col items-center justify-center p-4 bg-white/10 rounded-xl">
                      <MapPin className="h-8 w-8 mb-2 text-emerald-200" />
                      <span className="text-2xl font-bold">1.8M</span>
                      <span className="text-sm text-teal-200">Parcelas</span>
                    </div>

                    {/* ML Predictions */}
                    <div className="flex flex-col items-center justify-center p-4 bg-white/10 rounded-xl">
                      <TrendingUp className="h-8 w-8 mb-2 text-green-200" />
                      <span className="text-2xl font-bold">7 días</span>
                      <span className="text-sm text-teal-200">Predicción ML</span>
                    </div>

                    {/* Cobertura */}
                    <div className="flex flex-col items-center justify-center p-4 bg-white/10 rounded-xl">
                      <Droplets className="h-8 w-8 mb-2 text-blue-200" />
                      <span className="text-2xl font-bold">17</span>
                      <span className="text-sm text-teal-200">CC.AA.</span>
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
                          Este dataset proporciona monitorización integral del uso del agua en 
                          explotaciones agrícolas de toda España. Combina datos de sensores IoT, 
                          imágenes satelitales y modelos meteorológicos para calcular la huella 
                          hídrica y predecir situaciones de estrés.
                        </p>
                        <p className="text-muted-foreground leading-relaxed mt-3">
                          Incluye un modelo de Machine Learning propio que predice el estrés 
                          hídrico a 7 días vista, permitiendo optimizar el riego y reducir 
                          el consumo de agua. También calcula la huella de carbono asociada 
                          a cada parcela para reporting ESG.
                        </p>
                      </div>

                      <Separator />

                      <div>
                        <h3 className="font-semibold text-lg mb-3">Casos de Uso Principales</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>Optimización de sistemas de riego inteligente</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>Reporting ESG y cálculo de huella hídrica corporativa</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>Alertas tempranas de estrés hídrico para agricultores</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>Evaluación de riesgo climático para aseguradoras agrarias</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>Modelos predictivos de rendimiento de cultivos</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <TrendingUp className="h-5 w-5 text-teal-600 mt-0.5" />
                          <div>
                            <h4 className="font-semibold text-teal-900">Predicciones ML Incluidas</h4>
                            <p className="text-sm text-teal-700 mt-1">
                              Cada registro incluye una predicción de estrés hídrico a 7 días 
                              generada por nuestro modelo de Machine Learning, entrenado con 
                              datos históricos de 5 años y validado con precisión superior al 87%.
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
                                <TableCell className="font-mono text-sm text-teal-700">{field.field}</TableCell>
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
                              <FileJson className="h-5 w-5 text-teal-600" />
                              Formato de Datos
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-2 text-sm">
                              <li className="flex items-center gap-2">
                                <Badge variant="outline">Principal</Badge>
                                GeoJSON (datos espaciales)
                              </li>
                              <li className="flex items-center gap-2">
                                <Badge variant="outline">Alternativo</Badge>
                                CSV (tabular)
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
                              <Download className="h-5 w-5 text-teal-600" />
                              Métodos de Entrega
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-2 text-sm">
                              <li className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-600" />
                                API REST (filtros por región/cultivo)
                              </li>
                              <li className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-600" />
                                Webhook semanal automático
                              </li>
                              <li className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-600" />
                                SFTP para descarga bulk
                              </li>
                            </ul>
                          </CardContent>
                        </Card>
                      </div>

                      <Card>
                        <CardHeader className="pb-3">
                          <CardTitle className="text-base flex items-center gap-2">
                            <Clock className="h-5 w-5 text-teal-600" />
                            Frecuencia de Actualización
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                              <span className="font-medium">Periodicidad:</span>
                              <Badge className="bg-teal-100 text-teal-800">Semanal</Badge>
                            </div>
                            <Separator orientation="vertical" className="h-6" />
                            <div className="text-sm text-muted-foreground">
                              Publicación cada lunes a las 06:00 UTC con datos de la semana anterior
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
                          Dataset ESG con permisos amplios para análisis y modelos, pero 
                          restricción de reventa para proteger el valor del producto.
                        </p>
                      </div>

                      <div className="grid md:grid-cols-3 gap-4">
                        <Card className="border-green-200 bg-green-50">
                          <CardContent className="pt-6">
                            <div className="flex flex-col items-center text-center">
                              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-3">
                                <CheckCircle2 className="h-6 w-6 text-green-600" />
                              </div>
                              <h4 className="font-semibold text-green-900">AI Training</h4>
                              <p className="text-sm text-green-700 mt-1">SÍ Permitido</p>
                              <p className="text-xs text-green-600 mt-2">Modelos predictivos</p>
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
                              <p className="text-xs text-red-600 mt-2">Producto propietario</p>
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
                              <p className="text-sm text-green-700 mt-1">EU + LATAM</p>
                              <p className="text-xs text-green-600 mt-2">Mercados objetivo</p>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </TabsContent>

                    {/* Tab: Muestra de Datos */}
                    <TabsContent value="sample" className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-lg">Vista Previa de Datos</h3>
                        <Badge variant="outline" className="text-muted-foreground">
                          Mostrando 10 de 1.8M parcelas
                        </Badge>
                      </div>
                      
                      <ScrollArea className="h-[500px] border rounded-lg">
                        <Table>
                          <TableHeader className="sticky top-0 bg-background">
                            <TableRow>
                              <TableHead className="font-semibold min-w-[100px]">Semana</TableHead>
                              <TableHead className="font-semibold">Parcela</TableHead>
                              <TableHead className="font-semibold">Cultivo</TableHead>
                              <TableHead className="font-semibold text-right">Ha</TableHead>
                              <TableHead className="font-semibold text-right">m³/ha</TableHead>
                              <TableHead className="font-semibold text-right">Humedad</TableHead>
                              <TableHead className="font-semibold text-center">Estrés 7d</TableHead>
                              <TableHead className="font-semibold text-right">Efic.</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {WATER_SAMPLE.map((record, index) => (
                              <TableRow key={index}>
                                <TableCell className="font-mono text-xs">
                                  {record.week_start}
                                </TableCell>
                                <TableCell>
                                  <div className="text-xs font-mono">{record.parcel_id}</div>
                                  <div className="text-xs text-muted-foreground">{record.municipality}, {record.region}</div>
                                </TableCell>
                                <TableCell>
                                  <span className="text-lg mr-1">{getCropIcon(record.crop_type)}</span>
                                  <span className="text-sm capitalize">{record.crop_type}</span>
                                </TableCell>
                                <TableCell className="text-right font-mono">
                                  {record.parcel_hectares}
                                </TableCell>
                                <TableCell className="text-right font-mono">
                                  {record.water_per_hectare_m3}
                                </TableCell>
                                <TableCell className="text-right font-mono">
                                  {record.soil_moisture_percent}%
                                </TableCell>
                                <TableCell className="text-center">
                                  <Badge className={`${getStressColor(record.stress_prediction_7d)} text-xs`}>
                                    {getStressLabel(record.stress_prediction_7d)}
                                  </Badge>
                                </TableCell>
                                <TableCell className={`text-right font-bold ${getEfficiencyColor(record.efficiency_score)}`}>
                                  {record.efficiency_score}
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
                            <span className="text-sm text-muted-foreground">96.8%</span>
                          </div>
                          <Progress value={96.8} className="h-2" />
                        </div>
                        
                        <div>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium">Precisión Predicción ML</span>
                            <span className="text-sm text-muted-foreground">87.4%</span>
                          </div>
                          <Progress value={87.4} className="h-2" />
                        </div>
                        
                        <div>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium">Cobertura Geográfica</span>
                            <span className="text-sm text-muted-foreground">94.2%</span>
                          </div>
                          <Progress value={94.2} className="h-2" />
                        </div>
                        
                        <div>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium">Puntualidad</span>
                            <span className="text-sm text-muted-foreground">99.5%</span>
                          </div>
                          <Progress value={99.5} className="h-2" />
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
                              <Badge variant="outline">ISO 14001</Badge>
                              <Badge variant="outline">GRI Standards</Badge>
                              <Badge variant="outline">CDP Water</Badge>
                              <Badge variant="outline">100% Renewable</Badge>
                            </div>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-sm">Fuentes de Datos</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-1 text-sm">
                              <div className="flex justify-between">
                                <span>Sensores IoT:</span>
                                <span className="font-medium">45.000+</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Satélite:</span>
                                <span className="font-medium">Sentinel-2/3</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Meteo:</span>
                                <span className="font-medium">AEMET + ECMWF</span>
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
                <Card className="shadow-lg border-2 border-teal-200">
                  <CardHeader className="pb-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-teal-700">150€</span>
                      <span className="text-muted-foreground">/mes</span>
                    </div>
                    <CardDescription>Suscripción mensual con predicciones ML</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-2 p-2 bg-emerald-50 rounded-lg">
                      <Leaf className="h-5 w-5 text-emerald-600" />
                      <span className="text-sm font-medium text-emerald-700">100% Energía Renovable</span>
                    </div>

                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        1.8M parcelas monitorizadas
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        Predicción ML a 7 días
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        GeoJSON + CSV + API
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        Huella de carbono incluida
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        Alertas de estrés hídrico
                      </li>
                    </ul>
                    
                    <Separator />
                    
                    <Button className="w-full bg-teal-700 hover:bg-teal-800" size="lg" asChild>
                      <Link to="/auth">
                        <Droplets className="h-4 w-4 mr-2" />
                        Solicitar Acceso
                      </Link>
                    </Button>

                    <p className="text-xs text-center text-muted-foreground">
                      Primer mes con 20% de descuento para nuevos clientes
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
                      <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center">
                        <Droplets className="h-6 w-6 text-teal-700" />
                      </div>
                      <div>
                        <div className="font-semibold">AquaData Solutions</div>
                        <div className="text-sm text-muted-foreground">AgriTech & Water Intelligence</div>
                      </div>
                    </div>
                    <Separator />
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <div className="text-muted-foreground">Parcelas</div>
                        <div className="font-semibold">1.8M+</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Clientes</div>
                        <div className="font-semibold">180+</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Fundación</div>
                        <div className="font-semibold">2018</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Rating</div>
                        <div className="font-semibold flex items-center gap-1">
                          4.5 <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
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

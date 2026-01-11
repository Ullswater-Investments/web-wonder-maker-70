import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ShieldCheck,
  Globe,
  Database,
  Clock,
  FileJson,
  Download,
  CheckCircle2,
  Star,
  ChevronRight,
  CloudSun,
  Thermometer,
  Droplets,
  Wind,
  Sun,
  MapPin,
  Mountain,
  Gauge,
  ExternalLink
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

// Interfaz para el esquema de datos meteorológicos
interface MeteorologicalRecord {
  date: string;
  station_id: string;
  station_name: string;
  province: string;
  latitude: number;
  longitude: number;
  altitude_m: number;
  temp_max_c: number;
  temp_min_c: number;
  temp_avg_c: number;
  precipitation_mm: number;
  humidity_percent: number;
  wind_speed_kmh: number;
  wind_direction: string;
  pressure_hpa: number;
  sunshine_hours: number;
}

// Datos de muestra realistas
const METEO_SAMPLE: MeteorologicalRecord[] = [
  {
    date: "2024-12-31",
    station_id: "3129",
    station_name: "Madrid - Retiro",
    province: "Madrid",
    latitude: 40.4115,
    longitude: -3.6784,
    altitude_m: 667,
    temp_max_c: 12.4,
    temp_min_c: 3.2,
    temp_avg_c: 7.8,
    precipitation_mm: 0.0,
    humidity_percent: 68,
    wind_speed_kmh: 12.3,
    wind_direction: "NE",
    pressure_hpa: 1023.4,
    sunshine_hours: 6.2
  },
  {
    date: "2024-12-31",
    station_id: "0076",
    station_name: "Barcelona - Fabra",
    province: "Barcelona",
    latitude: 41.4181,
    longitude: 2.1244,
    altitude_m: 412,
    temp_max_c: 14.8,
    temp_min_c: 7.1,
    temp_avg_c: 10.9,
    precipitation_mm: 0.2,
    humidity_percent: 72,
    wind_speed_kmh: 8.7,
    wind_direction: "S",
    pressure_hpa: 1019.8,
    sunshine_hours: 5.8
  },
  {
    date: "2024-12-31",
    station_id: "8416",
    station_name: "Valencia - Aeropuerto",
    province: "Valencia",
    latitude: 39.4891,
    longitude: -0.4816,
    altitude_m: 62,
    temp_max_c: 16.2,
    temp_min_c: 8.4,
    temp_avg_c: 12.3,
    precipitation_mm: 0.0,
    humidity_percent: 65,
    wind_speed_kmh: 15.6,
    wind_direction: "E",
    pressure_hpa: 1021.2,
    sunshine_hours: 7.1
  },
  {
    date: "2024-12-31",
    station_id: "5783",
    station_name: "Sevilla - Aeropuerto",
    province: "Sevilla",
    latitude: 37.4219,
    longitude: -5.8931,
    altitude_m: 34,
    temp_max_c: 18.5,
    temp_min_c: 6.7,
    temp_avg_c: 12.6,
    precipitation_mm: 0.0,
    humidity_percent: 58,
    wind_speed_kmh: 10.2,
    wind_direction: "SW",
    pressure_hpa: 1022.7,
    sunshine_hours: 8.4
  },
  {
    date: "2024-12-31",
    station_id: "1082",
    station_name: "Bilbao - Aeropuerto",
    province: "Vizcaya",
    latitude: 43.3014,
    longitude: -2.9106,
    altitude_m: 42,
    temp_max_c: 11.2,
    temp_min_c: 5.8,
    temp_avg_c: 8.5,
    precipitation_mm: 12.4,
    humidity_percent: 89,
    wind_speed_kmh: 22.1,
    wind_direction: "NW",
    pressure_hpa: 1015.3,
    sunshine_hours: 1.2
  },
  {
    date: "2024-12-30",
    station_id: "3129",
    station_name: "Madrid - Retiro",
    province: "Madrid",
    latitude: 40.4115,
    longitude: -3.6784,
    altitude_m: 667,
    temp_max_c: 10.8,
    temp_min_c: 2.1,
    temp_avg_c: 6.4,
    precipitation_mm: 0.0,
    humidity_percent: 72,
    wind_speed_kmh: 8.9,
    wind_direction: "N",
    pressure_hpa: 1025.1,
    sunshine_hours: 5.8
  },
  {
    date: "2024-12-30",
    station_id: "6155",
    station_name: "Málaga - Aeropuerto",
    province: "Málaga",
    latitude: 36.6749,
    longitude: -4.4883,
    altitude_m: 7,
    temp_max_c: 19.1,
    temp_min_c: 10.2,
    temp_avg_c: 14.6,
    precipitation_mm: 0.0,
    humidity_percent: 62,
    wind_speed_kmh: 14.8,
    wind_direction: "E",
    pressure_hpa: 1020.4,
    sunshine_hours: 8.9
  },
  {
    date: "2024-12-30",
    station_id: "1387",
    station_name: "Santander - Parayas",
    province: "Cantabria",
    latitude: 43.4271,
    longitude: -3.8201,
    altitude_m: 5,
    temp_max_c: 12.4,
    temp_min_c: 6.9,
    temp_avg_c: 9.6,
    precipitation_mm: 8.7,
    humidity_percent: 86,
    wind_speed_kmh: 28.4,
    wind_direction: "W",
    pressure_hpa: 1012.8,
    sunshine_hours: 0.5
  },
  {
    date: "2024-12-30",
    station_id: "9434",
    station_name: "Zaragoza - Aeropuerto",
    province: "Zaragoza",
    latitude: 41.6616,
    longitude: -1.0069,
    altitude_m: 247,
    temp_max_c: 9.7,
    temp_min_c: -0.4,
    temp_avg_c: 4.6,
    precipitation_mm: 0.0,
    humidity_percent: 78,
    wind_speed_kmh: 32.1,
    wind_direction: "NW",
    pressure_hpa: 1024.6,
    sunshine_hours: 4.2
  },
  {
    date: "2024-12-30",
    station_id: "8025",
    station_name: "Alicante - Aeropuerto",
    province: "Alicante",
    latitude: 38.2822,
    longitude: -0.5576,
    altitude_m: 43,
    temp_max_c: 17.8,
    temp_min_c: 8.9,
    temp_avg_c: 13.3,
    precipitation_mm: 0.0,
    humidity_percent: 64,
    wind_speed_kmh: 12.7,
    wind_direction: "SE",
    pressure_hpa: 1021.9,
    sunshine_hours: 7.6
  }
];

// Esquema de datos con descripciones
const DATA_SCHEMA = [
  { field: "date", type: "Date (YYYY-MM-DD)", description: "Fecha del registro meteorológico" },
  { field: "station_id", type: "String", description: "Código AEMET de la estación" },
  { field: "station_name", type: "String", description: "Nombre descriptivo de la estación" },
  { field: "province", type: "String", description: "Provincia donde se ubica la estación" },
  { field: "latitude", type: "Float", description: "Latitud de la estación (WGS84)" },
  { field: "longitude", type: "Float", description: "Longitud de la estación (WGS84)" },
  { field: "altitude_m", type: "Integer", description: "Altitud sobre el nivel del mar en metros" },
  { field: "temp_max_c", type: "Float", description: "Temperatura máxima del día en °C" },
  { field: "temp_min_c", type: "Float", description: "Temperatura mínima del día en °C" },
  { field: "temp_avg_c", type: "Float", description: "Temperatura media del día en °C" },
  { field: "precipitation_mm", type: "Float", description: "Precipitación acumulada en mm" },
  { field: "humidity_percent", type: "Integer", description: "Humedad relativa media (%)" },
  { field: "wind_speed_kmh", type: "Float", description: "Velocidad media del viento en km/h" },
  { field: "wind_direction", type: "String", description: "Dirección predominante del viento (N, NE, E, etc.)" },
  { field: "pressure_hpa", type: "Float", description: "Presión atmosférica en hPa" },
  { field: "sunshine_hours", type: "Float", description: "Horas de sol registradas" }
];

export default function HistoricoMeteorologicoDetail() {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50">
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
              <span className="text-foreground font-medium">Histórico Meteorológico 2023-2024</span>
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
                <div className="h-3 bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500" />
                <CardHeader className="pb-4">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <Badge variant="secondary" className="uppercase text-xs tracking-wider">
                      Clima
                    </Badge>
                    <Tooltip>
                      <TooltipTrigger>
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-200 border-green-200">
                          <Globe className="h-3 w-3 mr-1" />
                          Open Data
                        </Badge>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Datos públicos bajo licencia Open Data del Gobierno de España</p>
                      </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger>
                        <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 border-blue-200">
                          <ShieldCheck className="h-3 w-3 mr-1" />
                          Fuente Oficial
                        </Badge>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Datos oficiales de la Agencia Estatal de Meteorología</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                  
                  <CardTitle className="text-3xl font-bold bg-gradient-to-r from-sky-900 to-blue-700 bg-clip-text text-transparent">
                    Histórico Meteorológico 2023-2024
                  </CardTitle>
                  
                  <CardDescription className="text-base mt-2">
                    Archivo histórico completo de datos meteorológicos de todas las estaciones 
                    de la red AEMET en España. Incluye temperatura, precipitación, viento, humedad 
                    y otras variables climáticas con resolución diaria.
                  </CardDescription>

                  <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <span className="font-medium text-foreground">Proveedor:</span>
                      AEMET Open Data
                    </div>
                    <Separator orientation="vertical" className="h-4" />
                    <div className="flex items-center gap-1.5">
                      <span className="font-medium text-foreground">Custodia:</span>
                      Centro Nacional de Supercomputación (Barcelona)
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mt-4">
                    <div className="flex items-center gap-1">
                      {[1,2,3,4,5].map((star) => (
                        <Star 
                          key={star} 
                          className={`h-4 w-4 ${star <= 5 ? 'fill-amber-400 text-amber-400' : 'fill-amber-400/50 text-amber-400/50'}`} 
                        />
                      ))}
                      <span className="ml-1 font-semibold">4.9</span>
                      <span className="text-muted-foreground">(256 reseñas)</span>
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
              <Card className="bg-gradient-to-br from-sky-600 to-blue-700 text-white overflow-hidden">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-4 gap-6">
                    {/* Static Archive */}
                    <div className="flex flex-col items-center justify-center p-4 bg-white/10 rounded-xl">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="h-5 w-5 text-sky-200" />
                        <span className="text-sky-200 text-sm">Archivo</span>
                      </div>
                      <span className="text-lg font-bold">Estático</span>
                      <span className="text-sm text-sky-200">2023-2024</span>
                    </div>

                    {/* Volumen */}
                    <div className="flex flex-col items-center justify-center p-4 bg-white/10 rounded-xl">
                      <Database className="h-8 w-8 mb-2 text-blue-200" />
                      <span className="text-2xl font-bold">8.2M</span>
                      <span className="text-sm text-sky-200">Registros</span>
                    </div>

                    {/* Estaciones */}
                    <div className="flex flex-col items-center justify-center p-4 bg-white/10 rounded-xl">
                      <MapPin className="h-8 w-8 mb-2 text-indigo-200" />
                      <span className="text-2xl font-bold">890+</span>
                      <span className="text-sm text-sky-200">Estaciones</span>
                    </div>

                    {/* Cobertura */}
                    <div className="flex flex-col items-center justify-center p-4 bg-white/10 rounded-xl">
                      <CloudSun className="h-8 w-8 mb-2 text-yellow-200" />
                      <span className="text-2xl font-bold">730</span>
                      <span className="text-sm text-sky-200">Días cubiertos</span>
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
                          Este archivo histórico contiene la totalidad de observaciones meteorológicas 
                          registradas por la red de estaciones automáticas y manuales de AEMET durante 
                          los años 2023 y 2024. Los datos cubren todo el territorio español, incluyendo 
                          Baleares, Canarias, Ceuta y Melilla.
                        </p>
                        <p className="text-muted-foreground leading-relaxed mt-3">
                          Ideal para análisis climáticos, modelos predictivos de agricultura, estudios 
                          de impacto del cambio climático, planificación energética renovable y proyectos 
                          de investigación académica.
                        </p>
                      </div>

                      <Separator />

                      <div>
                        <h3 className="font-semibold text-lg mb-3">Casos de Uso Principales</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>Entrenamiento de modelos de IA para predicción climática</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>Estudios de tendencias climáticas y anomalías</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>Planificación de cultivos y gestión agrícola</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>Evaluación de recursos para energía solar y eólica</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>Investigación académica y publicaciones científicas</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-sky-50 border border-sky-200 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <Globe className="h-5 w-5 text-sky-600 mt-0.5" />
                          <div>
                            <h4 className="font-semibold text-sky-900">Datos Abiertos - Uso Libre</h4>
                            <p className="text-sm text-sky-700 mt-1">
                              Este dataset está disponible bajo licencia Open Data del Gobierno de España. 
                              Puedes usarlo para cualquier propósito, incluyendo entrenamiento de modelos 
                              de IA y redistribución, con la única obligación de citar la fuente.
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
                                <TableCell className="font-mono text-sm text-sky-700">{field.field}</TableCell>
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
                              <FileJson className="h-5 w-5 text-sky-600" />
                              Formato de Datos
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-2 text-sm">
                              <li className="flex items-center gap-2">
                                <Badge variant="outline">Principal</Badge>
                                CSV (estándar internacional)
                              </li>
                              <li className="flex items-center gap-2">
                                <Badge variant="outline">Científico</Badge>
                                NetCDF (CF Conventions)
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
                              <Download className="h-5 w-5 text-sky-600" />
                              Métodos de Entrega
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-2 text-sm">
                              <li className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-600" />
                                Descarga directa (archivo completo)
                              </li>
                              <li className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-600" />
                                API REST (consultas por estación/fecha)
                              </li>
                              <li className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-600" />
                                THREDDS Data Server (OPeNDAP)
                              </li>
                            </ul>
                          </CardContent>
                        </Card>
                      </div>

                      <Card>
                        <CardHeader className="pb-3">
                          <CardTitle className="text-base flex items-center gap-2">
                            <Clock className="h-5 w-5 text-sky-600" />
                            Frecuencia de Actualización
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                              <span className="font-medium">Tipo:</span>
                              <Badge className="bg-slate-100 text-slate-800">Archivo Histórico</Badge>
                            </div>
                            <Separator orientation="vertical" className="h-6" />
                            <div className="text-sm text-muted-foreground">
                              Dataset estático cerrado. No recibe actualizaciones adicionales.
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>

                    {/* Tab: Derechos (ODRL) */}
                    <TabsContent value="rights" className="p-6 space-y-6">
                      <div>
                        <h3 className="font-semibold text-lg mb-4">Derechos de Uso (Open Data)</h3>
                        <p className="text-muted-foreground mb-6">
                          Este dataset está disponible bajo la licencia de reutilización del Gobierno 
                          de España, permitiendo el máximo nivel de libertad para su uso.
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
                              <p className="text-xs text-green-600 mt-2">Datos públicos sin restricciones</p>
                            </div>
                          </CardContent>
                        </Card>

                        <Card className="border-green-200 bg-green-50">
                          <CardContent className="pt-6">
                            <div className="flex flex-col items-center text-center">
                              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-3">
                                <CheckCircle2 className="h-6 w-6 text-green-600" />
                              </div>
                              <h4 className="font-semibold text-green-900">Reventa</h4>
                              <p className="text-sm text-green-700 mt-1">SÍ Permitido</p>
                              <p className="text-xs text-green-600 mt-2">Licencia Open Data</p>
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
                              <p className="text-sm text-green-700 mt-1">Sin Restricción</p>
                              <p className="text-xs text-green-600 mt-2">Uso mundial permitido</p>
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      <Card className="border-sky-200">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-base">Atribución Requerida</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground mb-3">
                            El único requisito es citar la fuente de los datos:
                          </p>
                          <div className="bg-slate-100 p-3 rounded font-mono text-sm">
                            "Datos proporcionados por AEMET - Agencia Estatal de Meteorología. 
                            Licencia de uso: datos.gob.es"
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>

                    {/* Tab: Muestra de Datos */}
                    <TabsContent value="sample" className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-lg">Vista Previa de Datos</h3>
                        <Badge variant="outline" className="text-muted-foreground">
                          Mostrando 10 de 8.2M registros
                        </Badge>
                      </div>
                      
                      <ScrollArea className="h-[500px] border rounded-lg">
                        <Table>
                          <TableHeader className="sticky top-0 bg-background">
                            <TableRow>
                              <TableHead className="font-semibold min-w-[100px]">Fecha</TableHead>
                              <TableHead className="font-semibold">Estación</TableHead>
                              <TableHead className="font-semibold">Provincia</TableHead>
                              <TableHead className="font-semibold text-right">T.Max</TableHead>
                              <TableHead className="font-semibold text-right">T.Min</TableHead>
                              <TableHead className="font-semibold text-right">Precip.</TableHead>
                              <TableHead className="font-semibold text-right">Hum.</TableHead>
                              <TableHead className="font-semibold text-right">Viento</TableHead>
                              <TableHead className="font-semibold text-right">Sol</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {METEO_SAMPLE.map((record, index) => (
                              <TableRow key={index}>
                                <TableCell className="font-mono text-xs">
                                  {record.date}
                                </TableCell>
                                <TableCell>
                                  <div className="text-sm font-medium">{record.station_name}</div>
                                  <div className="text-xs text-muted-foreground">{record.station_id}</div>
                                </TableCell>
                                <TableCell className="text-sm">{record.province}</TableCell>
                                <TableCell className="text-right font-mono">
                                  <span className="text-red-600">{record.temp_max_c}°</span>
                                </TableCell>
                                <TableCell className="text-right font-mono">
                                  <span className="text-blue-600">{record.temp_min_c}°</span>
                                </TableCell>
                                <TableCell className="text-right font-mono">
                                  {record.precipitation_mm > 0 ? (
                                    <span className="text-sky-600">{record.precipitation_mm} mm</span>
                                  ) : (
                                    <span className="text-muted-foreground">0.0</span>
                                  )}
                                </TableCell>
                                <TableCell className="text-right font-mono">
                                  {record.humidity_percent}%
                                </TableCell>
                                <TableCell className="text-right font-mono text-sm">
                                  {record.wind_speed_kmh} {record.wind_direction}
                                </TableCell>
                                <TableCell className="text-right font-mono">
                                  <span className="text-yellow-600">{record.sunshine_hours}h</span>
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
                            <span className="text-sm text-muted-foreground">97.8%</span>
                          </div>
                          <Progress value={97.8} className="h-2" />
                        </div>
                        
                        <div>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium">Precisión</span>
                            <span className="text-sm text-muted-foreground">99.5%</span>
                          </div>
                          <Progress value={99.5} className="h-2" />
                        </div>
                        
                        <div>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium">Cobertura Geográfica</span>
                            <span className="text-sm text-muted-foreground">100%</span>
                          </div>
                          <Progress value={100} className="h-2" />
                        </div>
                        
                        <div>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium">Consistencia</span>
                            <span className="text-sm text-muted-foreground">98.2%</span>
                          </div>
                          <Progress value={98.2} className="h-2" />
                        </div>
                      </div>

                      <Separator />

                      <div className="grid md:grid-cols-2 gap-4">
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-sm">Validación</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="flex flex-wrap gap-2">
                              <Badge variant="outline">WMO Standards</Badge>
                              <Badge variant="outline">QC Automático</Badge>
                              <Badge variant="outline">Revisión Manual</Badge>
                            </div>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-sm">Documentación</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-1 text-sm">
                              <div className="flex justify-between">
                                <span>Metadatos:</span>
                                <span className="font-medium">ISO 19115</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Diccionario:</span>
                                <span className="font-medium">Incluido</span>
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
              {/* Card de Acceso Gratuito */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Card className="shadow-lg border-2 border-green-200 bg-gradient-to-br from-green-50 to-white">
                  <CardHeader className="pb-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-green-600">Gratis</span>
                    </div>
                    <CardDescription>Acceso libre con registro</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        Descarga completa del archivo
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        API REST sin límites
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        Formatos CSV y NetCDF
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        Uso comercial permitido
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        Sin restricciones geográficas
                      </li>
                    </ul>
                    
                    <Separator />
                    
                    <Button className="w-full bg-green-600 hover:bg-green-700" size="lg" asChild>
                      <Link to="/auth">
                        <Download className="h-4 w-4 mr-2" />
                        Acceder al Dataset
                      </Link>
                    </Button>

                    <p className="text-xs text-center text-muted-foreground">
                      Solo necesitas crear una cuenta gratuita
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
                      <div className="h-12 w-12 rounded-full bg-sky-100 flex items-center justify-center">
                        <CloudSun className="h-6 w-6 text-sky-600" />
                      </div>
                      <div>
                        <div className="font-semibold">AEMET Open Data</div>
                        <div className="text-sm text-muted-foreground">Agencia Estatal de Meteorología</div>
                      </div>
                    </div>
                    <Separator />
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <div className="text-muted-foreground">Datasets</div>
                        <div className="font-semibold">45+</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Usuarios</div>
                        <div className="font-semibold">12.000+</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Tipo</div>
                        <div className="font-semibold">Gobierno</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Rating</div>
                        <div className="font-semibold flex items-center gap-1">
                          4.9 <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                        </div>
                      </div>
                    </div>
                    <Separator />
                    <Button variant="outline" className="w-full" size="sm" asChild>
                      <a href="https://opendata.aemet.es" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Visitar AEMET Open Data
                      </a>
                    </Button>
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

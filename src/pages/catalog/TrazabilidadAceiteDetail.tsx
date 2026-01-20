import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
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
  Link2,
  Award,
  Package,
  Fingerprint
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

// Interfaz para el esquema de datos de trazabilidad
interface OliveOilTraceRecord {
  batch_id: string;
  blockchain_hash: string;
  do_certificate: string;
  harvest_date: string;
  olive_variety: "picual" | "hojiblanca" | "arbequina" | "cornicabra";
  origin_farm: string;
  origin_municipality: string;
  origin_province: string;
  mill_id: string;
  mill_name: string;
  pressing_date: string;
  acidity_percent: number;
  peroxide_index: number;
  polyphenols_ppm: number;
  bottle_date: string;
  batch_liters: number;
  organic_certified: boolean;
  export_destination: string | null;
}

// Datos de muestra realistas
const OLIVE_SAMPLE: OliveOilTraceRecord[] = [
  {
    batch_id: "AOVE-2024-JAE-00127",
    blockchain_hash: "0x7f8a...3b2c",
    do_certificate: "DO-JAEN-2024-00892",
    harvest_date: "2024-11-15",
    olive_variety: "picual",
    origin_farm: "Finca Los Olivos Centenarios",
    origin_municipality: "Baeza",
    origin_province: "Jaén",
    mill_id: "ALM-JAE-0042",
    mill_name: "Almazara Tradicional Baeza",
    pressing_date: "2024-11-16",
    acidity_percent: 0.18,
    peroxide_index: 4.2,
    polyphenols_ppm: 487,
    bottle_date: "2024-11-20",
    batch_liters: 2500,
    organic_certified: true,
    export_destination: "Alemania"
  },
  {
    batch_id: "AOVE-2024-COR-00089",
    blockchain_hash: "0x2d4e...9f1a",
    do_certificate: "DO-PRIEGO-2024-00234",
    harvest_date: "2024-11-18",
    olive_variety: "hojiblanca",
    origin_farm: "Cortijo El Almendral",
    origin_municipality: "Priego de Córdoba",
    origin_province: "Córdoba",
    mill_id: "ALM-COR-0018",
    mill_name: "Cooperativa Olivarera de Priego",
    pressing_date: "2024-11-18",
    acidity_percent: 0.21,
    peroxide_index: 5.1,
    polyphenols_ppm: 412,
    bottle_date: "2024-11-25",
    batch_liters: 1800,
    organic_certified: true,
    export_destination: null
  },
  {
    batch_id: "AOVE-2024-SEV-00056",
    blockchain_hash: "0x9c3b...7e4d",
    do_certificate: "DO-ESTEPA-2024-00178",
    harvest_date: "2024-11-20",
    olive_variety: "arbequina",
    origin_farm: "Hacienda San Fernando",
    origin_municipality: "Estepa",
    origin_province: "Sevilla",
    mill_id: "ALM-SEV-0027",
    mill_name: "Oleoestepa S.C.A.",
    pressing_date: "2024-11-20",
    acidity_percent: 0.15,
    peroxide_index: 3.8,
    polyphenols_ppm: 523,
    bottle_date: "2024-11-28",
    batch_liters: 4200,
    organic_certified: false,
    export_destination: "Estados Unidos"
  },
  {
    batch_id: "AOVE-2024-TOL-00034",
    blockchain_hash: "0x1f7c...8a2b",
    do_certificate: "DO-MONTES-2024-00067",
    harvest_date: "2024-11-12",
    olive_variety: "cornicabra",
    origin_farm: "Finca La Manchuela",
    origin_municipality: "Mora",
    origin_province: "Toledo",
    mill_id: "ALM-TOL-0009",
    mill_name: "Aceites Mora S.L.",
    pressing_date: "2024-11-13",
    acidity_percent: 0.24,
    peroxide_index: 5.8,
    polyphenols_ppm: 378,
    bottle_date: "2024-11-22",
    batch_liters: 1200,
    organic_certified: false,
    export_destination: null
  },
  {
    batch_id: "AOVE-2024-JAE-00145",
    blockchain_hash: "0x4e8d...2c5f",
    do_certificate: "DO-CAZORLA-2024-00045",
    harvest_date: "2024-11-22",
    olive_variety: "picual",
    origin_farm: "Olivar Sierra de Cazorla",
    origin_municipality: "Cazorla",
    origin_province: "Jaén",
    mill_id: "ALM-JAE-0067",
    mill_name: "Almazara de la Sierra",
    pressing_date: "2024-11-22",
    acidity_percent: 0.12,
    peroxide_index: 3.2,
    polyphenols_ppm: 612,
    bottle_date: "2024-11-30",
    batch_liters: 980,
    organic_certified: true,
    export_destination: "Japón"
  },
  {
    batch_id: "AOVE-2024-GRA-00078",
    blockchain_hash: "0x6a2f...4d8e",
    do_certificate: "DO-PONIENTE-2024-00123",
    harvest_date: "2024-11-25",
    olive_variety: "hojiblanca",
    origin_farm: "Cortijo Las Encinas",
    origin_municipality: "Montefrío",
    origin_province: "Granada",
    mill_id: "ALM-GRA-0034",
    mill_name: "Cooperativa Montefriense",
    pressing_date: "2024-11-25",
    acidity_percent: 0.19,
    peroxide_index: 4.5,
    polyphenols_ppm: 445,
    bottle_date: "2024-12-02",
    batch_liters: 3100,
    organic_certified: false,
    export_destination: "Francia"
  },
  {
    batch_id: "AOVE-2024-MAL-00023",
    blockchain_hash: "0x8b1c...6f9a",
    do_certificate: "DO-ANTEQUERA-2024-00089",
    harvest_date: "2024-11-28",
    olive_variety: "arbequina",
    origin_farm: "Finca El Torcal",
    origin_municipality: "Antequera",
    origin_province: "Málaga",
    mill_id: "ALM-MAL-0015",
    mill_name: "Hojiblanca S.C.A.",
    pressing_date: "2024-11-28",
    acidity_percent: 0.16,
    peroxide_index: 4.0,
    polyphenols_ppm: 498,
    bottle_date: "2024-12-05",
    batch_liters: 2800,
    organic_certified: true,
    export_destination: "Reino Unido"
  },
  {
    batch_id: "AOVE-2024-COR-00112",
    blockchain_hash: "0x3d7e...1a4c",
    do_certificate: "DO-BAENA-2024-00156",
    harvest_date: "2024-11-30",
    olive_variety: "picual",
    origin_farm: "Hacienda La Laguna",
    origin_municipality: "Baena",
    origin_province: "Córdoba",
    mill_id: "ALM-COR-0045",
    mill_name: "Núñez de Prado",
    pressing_date: "2024-11-30",
    acidity_percent: 0.14,
    peroxide_index: 3.5,
    polyphenols_ppm: 567,
    bottle_date: "2024-12-08",
    batch_liters: 1500,
    organic_certified: true,
    export_destination: null
  }
];

export default function TrazabilidadAceiteDetail() {
  const [activeTab, setActiveTab] = useState("description");
  const { t } = useTranslation('catalogDetails');

  const productKey = 'trazabilidad-aceite-do';
  const product = {
    category: t(`products.${productKey}.category`),
    title: t(`products.${productKey}.title`),
    shortDescription: t(`products.${productKey}.shortDescription`),
    provider: t(`products.${productKey}.provider`),
    custody: t(`products.${productKey}.custody`),
    rating: t(`products.${productKey}.rating`),
    reviewCount: t(`products.${productKey}.reviewCount`),
  };

  const description = {
    paragraph1: t(`products.${productKey}.description.paragraph1`),
    paragraph2: t(`products.${productKey}.description.paragraph2`),
  };

  const useCases = t(`products.${productKey}.useCases`, { returnObjects: true }) as string[];
  const schema = t(`products.${productKey}.schema`, { returnObjects: true }) as Array<{ field: string; type: string; description: string }>;
  const odrl = t(`products.${productKey}.odrl`, { returnObjects: true }) as { permitted: string[]; prohibited: string[]; obligations: string[] };
  const quality = t(`products.${productKey}.quality`, { returnObjects: true }) as Record<string, { value: number; description: string }>;
  const pricing = t(`products.${productKey}.pricing`, { returnObjects: true }) as { amount: string; model: string; description: string };

  const getVarietyColor = (variety: string) => {
    switch (variety) {
      case "picual": return "bg-green-100 text-green-800";
      case "hojiblanca": return "bg-yellow-100 text-yellow-800";
      case "arbequina": return "bg-emerald-100 text-emerald-800";
      default: return "bg-amber-100 text-amber-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-olive-50 via-white to-green-50" style={{ '--tw-gradient-from': '#f5f5dc' } as any}>
      {/* Header Navigation */}
      <div className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/catalog" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                {t('common.backToCatalog')}
              </Link>
            </Button>
            <Separator orientation="vertical" className="h-6" />
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/catalog" className="hover:text-foreground transition-colors">{t('common.catalog')}</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground font-medium">{product.title}</span>
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
                <div className="h-3 bg-gradient-to-r from-yellow-600 via-green-600 to-emerald-600" />
                <CardHeader className="pb-4">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <Badge variant="secondary" className="uppercase text-xs tracking-wider">
                      {product.category}
                    </Badge>
                    <Tooltip>
                      <TooltipTrigger>
                        <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 border-blue-200">
                          <ShieldCheck className="h-3 w-3 mr-1" />
                          {t('common.badges.kybVerified')}
                        </Badge>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{t('common.badges.kybTooltip')}</p>
                      </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger>
                        <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200 border-purple-200">
                          <Link2 className="h-3 w-3 mr-1" />
                          {t('common.badges.blockchainVerified')}
                        </Badge>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{t('common.badges.blockchainTooltip')}</p>
                      </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger>
                        <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200 border-yellow-200">
                          <Award className="h-3 w-3 mr-1" />
                          {t('common.badges.doCertified')}
                        </Badge>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{t('common.badges.doTooltip')}</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                  
                  <CardTitle className="text-3xl font-bold bg-gradient-to-r from-yellow-800 to-green-700 bg-clip-text text-transparent">
                    {product.title}
                  </CardTitle>
                  
                  <CardDescription className="text-base mt-2">
                    {product.shortDescription}
                  </CardDescription>

                  <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <span className="font-medium text-foreground">{t('common.labels.provider')}:</span>
                      {product.provider}
                    </div>
                    <Separator orientation="vertical" className="h-4" />
                    <div className="flex items-center gap-1.5">
                      <span className="font-medium text-foreground">{t('common.labels.custody')}:</span>
                      {product.custody}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mt-4">
                    <div className="flex items-center gap-1">
                      {[1,2,3,4,5].map((star) => (
                        <Star 
                          key={star} 
                          className={`h-4 w-4 ${star <= Math.round(parseFloat(product.rating)) ? 'fill-amber-400 text-amber-400' : 'fill-amber-400/50 text-amber-400/50'}`} 
                        />
                      ))}
                      <span className="ml-1 font-semibold">{product.rating}</span>
                      <span className="text-muted-foreground">({product.reviewCount} {t('common.labels.reviews')})</span>
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
              <Card className="bg-gradient-to-br from-yellow-800 to-green-800 text-white overflow-hidden">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-4 gap-6">
                    {/* Event-based */}
                    <div className="flex flex-col items-center justify-center p-4 bg-white/10 rounded-xl">
                      <div className="flex items-center gap-2 mb-2">
                        <Link2 className="h-5 w-5 text-purple-300" />
                        <span className="text-purple-200 text-sm">Blockchain</span>
                      </div>
                      <span className="text-lg font-bold">{t('common.labels.eventBased')}</span>
                      <span className="text-sm text-yellow-200">Lote a lote</span>
                    </div>

                    {/* Volumen */}
                    <div className="flex flex-col items-center justify-center p-4 bg-white/10 rounded-xl">
                      <Database className="h-8 w-8 mb-2 text-green-300" />
                      <span className="text-2xl font-bold">450K+</span>
                      <span className="text-sm text-yellow-200">{t('common.labels.batches')}</span>
                    </div>

                    {/* Almazaras */}
                    <div className="flex flex-col items-center justify-center p-4 bg-white/10 rounded-xl">
                      <Package className="h-8 w-8 mb-2 text-yellow-300" />
                      <span className="text-2xl font-bold">320+</span>
                      <span className="text-sm text-yellow-200">{t('common.labels.mills')}</span>
                    </div>

                    {/* DOs */}
                    <div className="flex flex-col items-center justify-center p-4 bg-white/10 rounded-xl">
                      <Award className="h-8 w-8 mb-2 text-amber-300" />
                      <span className="text-2xl font-bold">12</span>
                      <span className="text-sm text-yellow-200">{t('common.labels.denominations')}</span>
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
                        {t('common.tabs.description')}
                      </TabsTrigger>
                      <TabsTrigger 
                        value="schema" 
                        className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
                      >
                        {t('common.tabs.schema')}
                      </TabsTrigger>
                      <TabsTrigger 
                        value="format" 
                        className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
                      >
                        {t('common.tabs.format')}
                      </TabsTrigger>
                      <TabsTrigger 
                        value="rights" 
                        className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
                      >
                        {t('common.tabs.rights')}
                      </TabsTrigger>
                      <TabsTrigger 
                        value="sample" 
                        className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
                      >
                        {t('common.tabs.sample')}
                      </TabsTrigger>
                      <TabsTrigger 
                        value="quality" 
                        className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
                      >
                        {t('common.tabs.quality')}
                      </TabsTrigger>
                    </TabsList>

                    {/* Tab: Descripción */}
                    <TabsContent value="description" className="p-6 space-y-6">
                      <div>
                        <h3 className="font-semibold text-lg mb-3">{t('common.sections.datasetDescription')}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {description.paragraph1}
                        </p>
                        <p className="text-muted-foreground leading-relaxed mt-3">
                          {description.paragraph2}
                        </p>
                      </div>

                      <Separator />

                      <div>
                        <h3 className="font-semibold text-lg mb-3">{t('common.sections.useCases')}</h3>
                        <ul className="space-y-2">
                          {useCases.map((useCase, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                              <span>{useCase}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <Link2 className="h-5 w-5 text-purple-600 mt-0.5" />
                          <div>
                            <h4 className="font-semibold text-purple-900">{t('common.badges.blockchainVerified')}</h4>
                            <p className="text-sm text-purple-700 mt-1">
                              {t('common.badges.blockchainTooltip')}
                            </p>
                          </div>
                        </div>
                      </div>
                    </TabsContent>

                    {/* Tab: Estructura de Datos */}
                    <TabsContent value="schema" className="p-6">
                      <h3 className="font-semibold text-lg mb-4">{t('common.sections.dataSchema')}</h3>
                      <div className="border rounded-lg overflow-hidden">
                        <Table>
                          <TableHeader>
                            <TableRow className="bg-muted/50">
                              <TableHead className="font-semibold">{t('common.sections.schemaTable.field')}</TableHead>
                              <TableHead className="font-semibold">{t('common.sections.schemaTable.type')}</TableHead>
                              <TableHead className="font-semibold">{t('common.sections.schemaTable.description')}</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {schema.map((field, index) => (
                              <TableRow key={index}>
                                <TableCell className="font-mono text-sm text-green-700">{field.field}</TableCell>
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
                              <FileJson className="h-5 w-5 text-green-600" />
                              {t('common.sections.formats.title')}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-2 text-sm">
                              <li className="flex items-center gap-2">
                                <Badge variant="outline">Principal</Badge>
                                JSON-LD (Linked Data semántico)
                              </li>
                              <li className="flex items-center gap-2">
                                <Badge variant="outline">Alternativo</Badge>
                                CSV con hash verificación
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
                              <Download className="h-5 w-5 text-green-600" />
                              {t('common.sections.delivery.title')}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-2 text-sm">
                              <li className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-600" />
                                {t('common.sections.delivery.api')}
                              </li>
                              <li className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-600" />
                                Webhook para nuevos lotes
                              </li>
                              <li className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-600" />
                                Verificación blockchain directa
                              </li>
                            </ul>
                          </CardContent>
                        </Card>
                      </div>

                      <Card>
                        <CardHeader className="pb-3">
                          <CardTitle className="text-base flex items-center gap-2">
                            <Clock className="h-5 w-5 text-green-600" />
                            {t('common.labels.update')}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                              <span className="font-medium">Tipo:</span>
                              <Badge className="bg-purple-100 text-purple-800">{t('common.labels.eventBased')}</Badge>
                            </div>
                            <Separator orientation="vertical" className="h-6" />
                            <div className="text-sm text-muted-foreground">
                              Cada lote se registra inmediatamente tras verificación de la almazara
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>

                    {/* Tab: Derechos (ODRL) */}
                    <TabsContent value="rights" className="p-6 space-y-6">
                      <div>
                        <h3 className="font-semibold text-lg mb-4">{t('common.sections.odrlRights')} (ODRL 2.2)</h3>
                        <p className="text-muted-foreground mb-6">
                          Datos de trazabilidad con uso permitido para verificación y análisis, 
                          pero con restricciones de redistribución para proteger la propiedad 
                          intelectual de los Consejos Reguladores.
                        </p>
                      </div>

                      <div className="grid md:grid-cols-3 gap-4">
                        <Card className="border-green-200 bg-green-50">
                          <CardContent className="pt-6">
                            <div className="flex flex-col items-center text-center">
                              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-3">
                                <CheckCircle2 className="h-6 w-6 text-green-600" />
                              </div>
                              <h4 className="font-semibold text-green-900">{t('common.sections.odrl.permitted')}</h4>
                              <ul className="text-sm text-green-700 mt-2 space-y-1 text-left">
                                {odrl.permitted.map((item, index) => (
                                  <li key={index}>• {item}</li>
                                ))}
                              </ul>
                            </div>
                          </CardContent>
                        </Card>

                        <Card className="border-red-200 bg-red-50">
                          <CardContent className="pt-6">
                            <div className="flex flex-col items-center text-center">
                              <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center mb-3">
                                <XCircle className="h-6 w-6 text-red-600" />
                              </div>
                              <h4 className="font-semibold text-red-900">{t('common.sections.odrl.prohibited')}</h4>
                              <ul className="text-sm text-red-700 mt-2 space-y-1 text-left">
                                {odrl.prohibited.map((item, index) => (
                                  <li key={index}>• {item}</li>
                                ))}
                              </ul>
                            </div>
                          </CardContent>
                        </Card>

                        <Card className="border-yellow-200 bg-yellow-50">
                          <CardContent className="pt-6">
                            <div className="flex flex-col items-center text-center">
                              <div className="h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center mb-3">
                                <Globe className="h-6 w-6 text-yellow-600" />
                              </div>
                              <h4 className="font-semibold text-yellow-900">{t('common.sections.odrl.obligations')}</h4>
                              <ul className="text-sm text-yellow-700 mt-2 space-y-1 text-left">
                                {odrl.obligations.map((item, index) => (
                                  <li key={index}>• {item}</li>
                                ))}
                              </ul>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </TabsContent>

                    {/* Tab: Muestra de Datos */}
                    <TabsContent value="sample" className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-lg">{t('common.sections.dataSample')}</h3>
                        <Badge variant="outline" className="text-muted-foreground">
                          Mostrando 8 de 450K+ lotes
                        </Badge>
                      </div>
                      
                      <ScrollArea className="h-[500px] border rounded-lg">
                        <Table>
                          <TableHeader className="sticky top-0 bg-background">
                            <TableRow>
                              <TableHead className="font-semibold min-w-[160px]">Lote</TableHead>
                              <TableHead className="font-semibold">Variedad</TableHead>
                              <TableHead className="font-semibold">Origen</TableHead>
                              <TableHead className="font-semibold">Almazara</TableHead>
                              <TableHead className="font-semibold text-right">Acidez</TableHead>
                              <TableHead className="font-semibold text-right">Polifenoles</TableHead>
                              <TableHead className="font-semibold text-center">Eco</TableHead>
                              <TableHead className="font-semibold">Hash</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {OLIVE_SAMPLE.map((record, index) => (
                              <TableRow key={index}>
                                <TableCell>
                                  <div className="font-mono text-xs font-medium">{record.batch_id}</div>
                                  <div className="text-xs text-muted-foreground">{record.do_certificate}</div>
                                </TableCell>
                                <TableCell>
                                  <Badge className={`${getVarietyColor(record.olive_variety)} text-xs`}>
                                    {record.olive_variety}
                                  </Badge>
                                </TableCell>
                                <TableCell>
                                  <div className="text-sm">{record.origin_municipality}</div>
                                  <div className="text-xs text-muted-foreground">{record.origin_province}</div>
                                </TableCell>
                                <TableCell className="text-sm max-w-[150px] truncate">
                                  {record.mill_name}
                                </TableCell>
                                <TableCell className="text-right font-mono">
                                  {record.acidity_percent}%
                                </TableCell>
                                <TableCell className="text-right font-mono">
                                  {record.polyphenols_ppm} ppm
                                </TableCell>
                                <TableCell className="text-center">
                                  {record.organic_certified ? (
                                    <Leaf className="h-4 w-4 text-green-600 mx-auto" />
                                  ) : (
                                    <span className="text-muted-foreground">-</span>
                                  )}
                                </TableCell>
                                <TableCell className="font-mono text-xs text-purple-600">
                                  {record.blockchain_hash}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </ScrollArea>
                    </TabsContent>

                    {/* Tab: Calidad */}
                    <TabsContent value="quality" className="p-6 space-y-6">
                      <h3 className="font-semibold text-lg mb-4">{t('common.sections.qualityMetrics')}</h3>
                      
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium">{t('common.quality.completeness')}</span>
                            <span className="text-sm text-muted-foreground">{quality.completeness?.value}%</span>
                          </div>
                          <Progress value={quality.completeness?.value || 0} className="h-2" />
                        </div>
                        
                        <div>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium">{t('common.quality.freshness')}</span>
                            <span className="text-sm text-muted-foreground">{quality.freshness?.value}%</span>
                          </div>
                          <Progress value={quality.freshness?.value || 0} className="h-2" />
                        </div>
                        
                        <div>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium">{t('common.quality.accuracy')}</span>
                            <span className="text-sm text-muted-foreground">{quality.accuracy?.value}%</span>
                          </div>
                          <Progress value={quality.accuracy?.value || 0} className="h-2" />
                        </div>

                        <div>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium">{t('common.quality.consistency')}</span>
                            <span className="text-sm text-muted-foreground">{quality.consistency?.value}%</span>
                          </div>
                          <Progress value={quality.consistency?.value || 0} className="h-2" />
                        </div>

                        <div>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium">{t('common.quality.availability')}</span>
                            <span className="text-sm text-muted-foreground">{quality.availability?.value}%</span>
                          </div>
                          <Progress value={quality.availability?.value || 0} className="h-2" />
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
                              <Badge variant="outline">Alastria Network</Badge>
                              <Badge variant="outline">DO Certified</Badge>
                              <Badge variant="outline">ISO 22005</Badge>
                              <Badge variant="outline">GlobalG.A.P.</Badge>
                            </div>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-sm">Garantías</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-1 text-sm">
                              <div className="flex justify-between">
                                <span>Inmutabilidad:</span>
                                <span className="font-medium">Blockchain</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Verificación:</span>
                                <span className="font-medium">{t('common.labels.realTime')}</span>
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
                      <span className="text-4xl font-bold text-green-700">{pricing.amount}</span>
                      <span className="text-muted-foreground">/año</span>
                    </div>
                    <CardDescription>{pricing.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        Acceso API ilimitado
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        12 Denominaciones de Origen
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        Verificación blockchain incluida
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        Webhooks para nuevos lotes
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        Soporte técnico por email
                      </li>
                    </ul>
                    
                    <Separator />
                    
                    <Button className="w-full bg-green-700 hover:bg-green-800" size="lg" asChild>
                      <Link to="/auth">
                        <Fingerprint className="h-4 w-4 mr-2" />
                        {t('common.pricing.requestAccess')}
                      </Link>
                    </Button>

                    <p className="text-xs text-center text-muted-foreground">
                      Pago único anual. Renovación automática opcional.
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
                      <div className="h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center">
                        <Award className="h-6 w-6 text-yellow-700" />
                      </div>
                      <div>
                        <div className="font-semibold">{product.provider}</div>
                        <div className="text-sm text-muted-foreground">Aceites de Oliva de España</div>
                      </div>
                    </div>
                    <Separator />
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <div className="text-muted-foreground">DOs Cubiertas</div>
                        <div className="font-semibold">12</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">{t('common.labels.mills')}</div>
                        <div className="font-semibold">320+</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Desde</div>
                        <div className="font-semibold">2019</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Rating</div>
                        <div className="font-semibold flex items-center gap-1">
                          {product.rating} <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
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

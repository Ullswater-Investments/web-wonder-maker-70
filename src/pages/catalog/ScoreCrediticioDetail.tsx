import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  ArrowLeft,
  ShieldCheck,
  Lock,
  Database,
  Globe,
  Clock,
  FileJson,
  CheckCircle2,
  XCircle,
  Star,
  ChevronRight,
  Building2,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CreditCard,
  BarChart3,
  Shield,
  Zap,
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

// Interfaz para el esquema de datos de score crediticio
interface CreditScoreRecord {
  query_timestamp: string;
  company_nif: string;
  company_name: string;
  sector_cnae: string;
  province: string;
  employees_range: "1-10" | "11-50" | "51-200" | "201-500" | "500+";
  revenue_range: string;
  credit_score: number;
  risk_level: "muy_bajo" | "bajo" | "medio" | "alto" | "muy_alto";
  payment_behavior_score: number;
  default_probability_30d: number;
  default_probability_90d: number;
  legal_incidents: number;
  last_update: string;
  trend: "improving" | "stable" | "declining";
}

// Datos de muestra realistas (anonimizados)
const CREDIT_SAMPLE: CreditScoreRecord[] = [
  {
    query_timestamp: "2025-01-11T10:23:45Z",
    company_nif: "B28***412",
    company_name: "Empresa Ejemplo S.L.",
    sector_cnae: "4619",
    province: "Madrid",
    employees_range: "51-200",
    revenue_range: "5M-10M €",
    credit_score: 782,
    risk_level: "bajo",
    payment_behavior_score: 88,
    default_probability_30d: 0.8,
    default_probability_90d: 2.1,
    legal_incidents: 0,
    last_update: "2025-01-10",
    trend: "improving"
  },
  {
    query_timestamp: "2025-01-11T10:22:12Z",
    company_nif: "A08***789",
    company_name: "Corporación Demo S.A.",
    sector_cnae: "4511",
    province: "Barcelona",
    employees_range: "201-500",
    revenue_range: "20M-50M €",
    credit_score: 845,
    risk_level: "muy_bajo",
    payment_behavior_score: 95,
    default_probability_30d: 0.3,
    default_probability_90d: 0.8,
    legal_incidents: 0,
    last_update: "2025-01-11",
    trend: "stable"
  },
  {
    query_timestamp: "2025-01-11T10:21:33Z",
    company_nif: "B46***234",
    company_name: "Distribuciones Test S.L.",
    sector_cnae: "4639",
    province: "Valencia",
    employees_range: "11-50",
    revenue_range: "1M-5M €",
    credit_score: 612,
    risk_level: "medio",
    payment_behavior_score: 72,
    default_probability_30d: 4.2,
    default_probability_90d: 8.7,
    legal_incidents: 1,
    last_update: "2025-01-09",
    trend: "declining"
  },
  {
    query_timestamp: "2025-01-11T10:20:01Z",
    company_nif: "B41***567",
    company_name: "Servicios Muestra S.L.",
    sector_cnae: "6201",
    province: "Sevilla",
    employees_range: "1-10",
    revenue_range: "500K-1M €",
    credit_score: 524,
    risk_level: "alto",
    payment_behavior_score: 58,
    default_probability_30d: 8.9,
    default_probability_90d: 15.4,
    legal_incidents: 2,
    last_update: "2025-01-08",
    trend: "declining"
  },
  {
    query_timestamp: "2025-01-11T10:18:45Z",
    company_nif: "A48***890",
    company_name: "Industrial Norte S.A.",
    sector_cnae: "2511",
    province: "Vizcaya",
    employees_range: "500+",
    revenue_range: "50M+ €",
    credit_score: 891,
    risk_level: "muy_bajo",
    payment_behavior_score: 97,
    default_probability_30d: 0.1,
    default_probability_90d: 0.4,
    legal_incidents: 0,
    last_update: "2025-01-11",
    trend: "stable"
  },
  {
    query_timestamp: "2025-01-11T10:17:22Z",
    company_nif: "B50***123",
    company_name: "Logística Aragón S.L.",
    sector_cnae: "5210",
    province: "Zaragoza",
    employees_range: "51-200",
    revenue_range: "10M-20M €",
    credit_score: 734,
    risk_level: "bajo",
    payment_behavior_score: 84,
    default_probability_30d: 1.2,
    default_probability_90d: 3.1,
    legal_incidents: 0,
    last_update: "2025-01-10",
    trend: "improving"
  },
  {
    query_timestamp: "2025-01-11T10:15:56Z",
    company_nif: "B29***456",
    company_name: "Construcciones Sur S.L.",
    sector_cnae: "4121",
    province: "Málaga",
    employees_range: "11-50",
    revenue_range: "1M-5M €",
    credit_score: 445,
    risk_level: "muy_alto",
    payment_behavior_score: 42,
    default_probability_30d: 18.7,
    default_probability_90d: 32.4,
    legal_incidents: 5,
    last_update: "2025-01-07",
    trend: "declining"
  },
  {
    query_timestamp: "2025-01-11T10:14:33Z",
    company_nif: "A15***789",
    company_name: "Tech Galicia S.A.",
    sector_cnae: "6311",
    province: "A Coruña",
    employees_range: "51-200",
    revenue_range: "5M-10M €",
    credit_score: 798,
    risk_level: "bajo",
    payment_behavior_score: 91,
    default_probability_30d: 0.6,
    default_probability_90d: 1.8,
    legal_incidents: 0,
    last_update: "2025-01-11",
    trend: "improving"
  }
];

export default function ScoreCrediticioDetail() {
  const [activeTab, setActiveTab] = useState("description");
  const { t } = useTranslation('catalogDetails');

  const productKey = 'score-crediticio-b2b';
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

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "muy_bajo": return "bg-green-100 text-green-800";
      case "bajo": return "bg-emerald-100 text-emerald-800";
      case "medio": return "bg-yellow-100 text-yellow-800";
      case "alto": return "bg-orange-100 text-orange-800";
      default: return "bg-red-100 text-red-800";
    }
  };

  const getRiskLabel = (risk: string) => {
    const riskKey = risk.replace('_', '') as 'veryLow' | 'low' | 'medium' | 'high' | 'veryHigh';
    const riskMap: Record<string, string> = {
      'muy_bajo': 'veryLow',
      'bajo': 'low',
      'medio': 'medium',
      'alto': 'high',
      'muy_alto': 'veryHigh'
    };
    return t(`common.riskLevels.${riskMap[risk] || 'medium'}`);
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "improving": return <TrendingUp className="h-4 w-4 text-green-600" />;
      case "declining": return <TrendingDown className="h-4 w-4 text-red-600" />;
      default: return <Activity className="h-4 w-4 text-gray-500" />;
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 800) return "text-green-600";
    if (score >= 650) return "text-emerald-600";
    if (score >= 500) return "text-yellow-600";
    if (score >= 350) return "text-orange-600";
    return "text-red-600";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-blue-50">
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
                <div className="h-3 bg-gradient-to-r from-slate-600 via-blue-600 to-indigo-600" />
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
                        <Badge className="bg-slate-100 text-slate-800 hover:bg-slate-200 border-slate-200">
                          <Shield className="h-3 w-3 mr-1" />
                          {t('common.badges.cnmvRegulated')}
                        </Badge>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{t('common.badges.cnmvTooltip')}</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                  
                  <CardTitle className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-blue-800 bg-clip-text text-transparent">
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
              <Card className="bg-gradient-to-br from-slate-800 to-blue-900 text-white overflow-hidden">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-4 gap-6">
                    {/* Daily Update */}
                    <div className="flex flex-col items-center justify-center p-4 bg-white/10 rounded-xl">
                      <Clock className="h-8 w-8 mb-2 text-blue-300" />
                      <span className="text-lg font-bold">{t('common.labels.daily')}</span>
                      <span className="text-sm text-slate-300">{t('common.labels.update')}</span>
                    </div>

                    {/* Empresas */}
                    <div className="flex flex-col items-center justify-center p-4 bg-white/10 rounded-xl">
                      <Building2 className="h-8 w-8 mb-2 text-indigo-300" />
                      <span className="text-2xl font-bold">2.1M</span>
                      <span className="text-sm text-slate-300">{t('common.labels.companies')}</span>
                    </div>

                    {/* Precisión */}
                    <div className="flex flex-col items-center justify-center p-4 bg-white/10 rounded-xl">
                      <BarChart3 className="h-8 w-8 mb-2 text-cyan-300" />
                      <span className="text-2xl font-bold">94.2%</span>
                      <span className="text-sm text-slate-300">{t('common.labels.precision')}</span>
                    </div>

                    {/* API Latency */}
                    <div className="flex flex-col items-center justify-center p-4 bg-white/10 rounded-xl">
                      <Zap className="h-8 w-8 mb-2 text-yellow-300" />
                      <span className="text-2xl font-bold">&lt;200ms</span>
                      <span className="text-sm text-slate-300">{t('common.labels.latency')}</span>
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

                      <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <Shield className="h-5 w-5 text-slate-600 mt-0.5" />
                          <div>
                            <h4 className="font-semibold text-slate-900">{t('common.badges.cnmvRegulated')}</h4>
                            <p className="text-sm text-slate-700 mt-1">
                              {t('common.badges.cnmvTooltip')}
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
                                <TableCell className="font-mono text-sm text-blue-700">{field.field}</TableCell>
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
                              <FileJson className="h-5 w-5 text-blue-600" />
                              {t('common.sections.formats.title')}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-2 text-sm">
                              <li className="flex items-center gap-2">
                                <Badge variant="outline">Único</Badge>
                                JSON (API REST)
                              </li>
                              <li className="flex items-center gap-2">
                                <Badge variant="outline">Encoding</Badge>
                                UTF-8
                              </li>
                              <li className="flex items-center gap-2">
                                <Badge variant="outline">Auth</Badge>
                                {t('common.sections.authentication.apiKey')} + {t('common.sections.authentication.oauth')}
                              </li>
                            </ul>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader className="pb-3">
                            <CardTitle className="text-base flex items-center gap-2">
                              <Zap className="h-5 w-5 text-blue-600" />
                              {t('common.sections.delivery.title')}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-2 text-sm">
                              <li className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-600" />
                                API REST (consulta individual)
                              </li>
                              <li className="flex items-center gap-2">
                                <XCircle className="h-4 w-4 text-red-500" />
                                Descarga bulk NO disponible
                              </li>
                              <li className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-600" />
                                Sandbox para pruebas
                              </li>
                            </ul>
                          </CardContent>
                        </Card>
                      </div>

                      <Card>
                        <CardHeader className="pb-3">
                          <CardTitle className="text-base flex items-center gap-2">
                            <Clock className="h-5 w-5 text-blue-600" />
                            {t('common.labels.update')}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                              <span className="font-medium">Modelo:</span>
                              <Badge className="bg-blue-100 text-blue-800">{t('common.labels.daily')}</Badge>
                            </div>
                            <Separator orientation="vertical" className="h-6" />
                            <div className="text-sm text-muted-foreground">
                              Scores recalculados cada día a las 06:00 UTC (cierre de mercado)
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border-amber-200 bg-amber-50">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-base flex items-center gap-2">
                            <AlertTriangle className="h-5 w-5 text-amber-600" />
                            Límites de Uso
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span>Consultas incluidas/mes:</span>
                              <span className="font-medium">1.000</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Consultas adicionales:</span>
                              <span className="font-medium">0.075€/consulta</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Rate limit:</span>
                              <span className="font-medium">100 req/min</span>
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
                          Servicio financiero regulado con fuertes restricciones de uso para 
                          proteger la información sensible de las empresas evaluadas.
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

                      <Card className="border-slate-200">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-base">Requisitos Legales</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                              <Lock className="h-4 w-4 text-slate-600" />
                              Solo para uso interno en decisiones de crédito
                            </li>
                            <li className="flex items-center gap-2">
                              <Lock className="h-4 w-4 text-slate-600" />
                              Prohibida la comunicación del score a terceros
                            </li>
                            <li className="flex items-center gap-2">
                              <Lock className="h-4 w-4 text-slate-600" />
                              Registro de consultas para auditoría CNMV
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                    </TabsContent>

                    {/* Tab: Muestra de Datos */}
                    <TabsContent value="sample" className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-lg">{t('common.sections.dataSample')}</h3>
                        <Badge variant="outline" className="text-muted-foreground">
                          Datos de demostración (anonimizados)
                        </Badge>
                      </div>
                      
                      <ScrollArea className="h-[500px] border rounded-lg">
                        <Table>
                          <TableHeader className="sticky top-0 bg-background">
                            <TableRow>
                              <TableHead className="font-semibold">Empresa</TableHead>
                              <TableHead className="font-semibold">Sector</TableHead>
                              <TableHead className="font-semibold text-center">Score</TableHead>
                              <TableHead className="font-semibold text-center">Riesgo</TableHead>
                              <TableHead className="font-semibold text-right">Prob. 30d</TableHead>
                              <TableHead className="font-semibold text-right">Prob. 90d</TableHead>
                              <TableHead className="font-semibold text-center">Trend</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {CREDIT_SAMPLE.map((record, index) => (
                              <TableRow key={index}>
                                <TableCell>
                                  <div className="text-sm font-medium">{record.company_name}</div>
                                  <div className="text-xs text-muted-foreground">{record.company_nif} • {record.province}</div>
                                </TableCell>
                                <TableCell>
                                  <div className="text-sm">{record.sector_cnae}</div>
                                  <div className="text-xs text-muted-foreground">{record.employees_range}</div>
                                </TableCell>
                                <TableCell className="text-center">
                                  <span className={`text-xl font-bold ${getScoreColor(record.credit_score)}`}>
                                    {record.credit_score}
                                  </span>
                                </TableCell>
                                <TableCell className="text-center">
                                  <Badge className={`${getRiskColor(record.risk_level)} text-xs`}>
                                    {getRiskLabel(record.risk_level)}
                                  </Badge>
                                </TableCell>
                                <TableCell className="text-right font-mono">
                                  {record.default_probability_30d}%
                                </TableCell>
                                <TableCell className="text-right font-mono">
                                  {record.default_probability_90d}%
                                </TableCell>
                                <TableCell className="text-center">
                                  {getTrendIcon(record.trend)}
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
                            <span className="text-sm font-medium">{t('common.quality.accuracy')}</span>
                            <span className="text-sm text-muted-foreground">{quality.accuracy?.value}%</span>
                          </div>
                          <Progress value={quality.accuracy?.value || 0} className="h-2" />
                        </div>
                        
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
                              <Badge variant="outline">ISO 27001</Badge>
                              <Badge variant="outline">SOC 2 Type II</Badge>
                              <Badge variant="outline">CNMV Registered</Badge>
                              <Badge variant="outline">GDPR Compliant</Badge>
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
                                <span>{t('common.quality.availability')}:</span>
                                <span className="font-medium">99.95%</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Latencia P99:</span>
                                <span className="font-medium">&lt;200ms</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Soporte:</span>
                                <span className="font-medium">24/5 Premium</span>
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
                      <span className="text-4xl font-bold text-blue-700">{pricing.amount}</span>
                      <span className="text-muted-foreground">/mes</span>
                    </div>
                    <CardDescription>{pricing.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        1.000 consultas/mes incluidas
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        API REST + Sandbox pruebas
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        Score + Probabilidad impago
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        Cobertura España + Portugal
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        Soporte técnico 24/5
                      </li>
                    </ul>
                    
                    <Separator />

                    <div className="text-sm text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Consultas extra:</span>
                        <span className="font-medium">0.075€/consulta</span>
                      </div>
                    </div>
                    
                    <Button className="w-full bg-blue-700 hover:bg-blue-800" size="lg" asChild>
                      <Link to="/auth">
                        <CreditCard className="h-4 w-4 mr-2" />
                        {t('common.pricing.requestAccess')}
                      </Link>
                    </Button>

                    <p className="text-xs text-center text-muted-foreground">
                      Requiere verificación KYB y aceptación de términos CNMV
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
                      <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                        <BarChart3 className="h-6 w-6 text-blue-700" />
                      </div>
                      <div>
                        <div className="font-semibold">{product.provider}</div>
                        <div className="text-sm text-muted-foreground">Credit Rating Agency</div>
                      </div>
                    </div>
                    <Separator />
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <div className="text-muted-foreground">{t('common.labels.companies')}</div>
                        <div className="font-semibold">2.1M+</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Clientes</div>
                        <div className="font-semibold">4.500+</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Fundación</div>
                        <div className="font-semibold">1999</div>
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

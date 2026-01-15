import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { BarChart3, TrendingUp, Target, DollarSign, Clock, Users, Award, Percent } from "lucide-react";

const kpiCategories = [
  {
    category: "Eficiencia Operativa",
    icon: Clock,
    color: "bg-blue-500",
    kpis: [
      { name: "Tiempo medio de ciclo de compra", target: "-20%", unit: "días" },
      { name: "Pedidos procesados por FTE", target: "+15%", unit: "pedidos/mes" },
      { name: "Tasa de automatización", target: "80%", unit: "%" },
    ],
  },
  {
    category: "Ahorro y Valor",
    icon: DollarSign,
    color: "bg-emerald-500",
    kpis: [
      { name: "Savings achieved vs budget", target: "5-8%", unit: "%" },
      { name: "Cost avoidance", target: "+3%", unit: "YoY" },
      { name: "ROI de iniciativas de compras", target: ">300%", unit: "%" },
    ],
  },
  {
    category: "Calidad y Riesgo",
    icon: Target,
    color: "bg-purple-500",
    kpis: [
      { name: "Cumplimiento de contratos", target: ">95%", unit: "%" },
      { name: "Proveedores evaluados", target: "100%", unit: "críticos" },
      { name: "Incidencias de calidad", target: "<2%", unit: "%" },
    ],
  },
  {
    category: "Desarrollo de Talento",
    icon: Users,
    color: "bg-amber-500",
    kpis: [
      { name: "Profesionales certificados", target: ">80%", unit: "del equipo" },
      { name: "Horas de formación/año", target: "40h", unit: "mínimo" },
      { name: "Satisfacción del equipo", target: ">4.2", unit: "/5" },
    ],
  },
];

const benchmarks = [
  { metric: "Ahorro promedio anual", value: "6.2%", comparison: "vs 4.1% mercado" },
  { metric: "Tiempo de onboarding", value: "45 días", comparison: "vs 90 días sin certificación" },
  { metric: "Retención de talento", value: "92%", comparison: "vs 78% sector" },
  { metric: "Satisfacción stakeholders", value: "4.5/5", comparison: "vs 3.8/5 media" },
];

export const DocIndicadores = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-300 dark:bg-blue-900/30 dark:text-blue-300">
              <BarChart3 className="h-3 w-3 mr-1" />
              Sección 7
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              KPIs de Excelencia
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Indicadores clave para medir el desempeño de la función de Compras 
              y el impacto de la certificación profesional.
            </p>
          </div>
        </FadeIn>

        {/* KPI Categories */}
        <StaggerContainer className="grid md:grid-cols-2 gap-6 mb-12">
          {kpiCategories.map((cat) => (
            <StaggerItem key={cat.category}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg ${cat.color} flex items-center justify-center`}>
                      <cat.icon className="h-5 w-5 text-white" />
                    </div>
                    {cat.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {cat.kpis.map((kpi) => (
                      <div key={kpi.name} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                        <span className="text-sm font-medium">{kpi.name}</span>
                        <Badge variant="secondary" className="font-mono">
                          {kpi.target} {kpi.unit}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Benchmarks */}
        <FadeIn delay={0.3}>
          <Card className="bg-gradient-to-br from-blue-600 to-blue-700 text-white">
            <CardHeader>
              <CardTitle className="text-center text-white">
                Benchmarking: Profesionales Certificados vs No Certificados
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6">
                {benchmarks.map((item) => (
                  <div key={item.metric} className="text-center">
                    <p className="text-3xl font-bold mb-2">{item.value}</p>
                    <p className="text-sm font-medium mb-1">{item.metric}</p>
                    <p className="text-xs text-blue-200">{item.comparison}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </FadeIn>

        {/* Performance Framework */}
        <FadeIn delay={0.4}>
          <Card className="mt-12">
            <CardContent className="py-8">
              <h3 className="text-xl font-semibold text-center mb-6">Marco de Evaluación del Desempeño</h3>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
                    <Percent className="h-7 w-7 text-blue-600" />
                  </div>
                  <h4 className="font-semibold mb-2">Cuantitativo</h4>
                  <p className="text-sm text-muted-foreground">
                    KPIs numéricos de eficiencia, ahorro y productividad
                  </p>
                </div>
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-7 w-7 text-emerald-600" />
                  </div>
                  <h4 className="font-semibold mb-2">Cualitativo</h4>
                  <p className="text-sm text-muted-foreground">
                    Evaluación 360º, satisfacción de stakeholders
                  </p>
                </div>
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mx-auto mb-4">
                    <Award className="h-7 w-7 text-purple-600" />
                  </div>
                  <h4 className="font-semibold mb-2">Competencial</h4>
                  <p className="text-sm text-muted-foreground">
                    Nivel de certificación y desarrollo de competencias
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
};

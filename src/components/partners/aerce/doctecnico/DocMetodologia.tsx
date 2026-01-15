import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/AnimatedSection";
import { Settings, Search, BarChart3, RefreshCw, CheckCircle2, Target, Lightbulb } from "lucide-react";

const methodologySteps = [
  {
    phase: "Diagnóstico",
    icon: Search,
    description: "Evaluación inicial del estado actual de competencias y procesos",
    activities: [
      "Assessment de competencias individuales",
      "Análisis de procesos de compras",
      "Identificación de gaps formativos",
      "Benchmarking con mejores prácticas",
    ],
    color: "bg-blue-500",
  },
  {
    phase: "Planificación",
    icon: Target,
    description: "Diseño del plan de desarrollo personalizado",
    activities: [
      "Definición de objetivos SMART",
      "Selección de itinerarios formativos",
      "Asignación de mentores",
      "Cronograma de certificación",
    ],
    color: "bg-emerald-500",
  },
  {
    phase: "Ejecución",
    icon: Lightbulb,
    description: "Implementación del plan formativo y de certificación",
    activities: [
      "Formación presencial y online",
      "Proyectos prácticos aplicados",
      "Sesiones de coaching",
      "Preparación examen UNE",
    ],
    color: "bg-purple-500",
  },
  {
    phase: "Evaluación",
    icon: BarChart3,
    description: "Medición de resultados y ajuste continuo",
    activities: [
      "Evaluación de competencias adquiridas",
      "Medición de KPIs de impacto",
      "Feedback 360º",
      "Certificación formal",
    ],
    color: "bg-amber-500",
  },
  {
    phase: "Mejora Continua",
    icon: RefreshCw,
    description: "Actualización permanente de conocimientos",
    activities: [
      "Renovación de certificación",
      "Formación continua",
      "Participación en comunidad",
      "Mentoring a nuevos profesionales",
    ],
    color: "bg-rose-500",
  },
];

export const DocMetodologia = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-300 dark:bg-blue-900/30 dark:text-blue-300">
              <Settings className="h-3 w-3 mr-1" />
              Sección 6
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Metodología de Evaluación
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Proceso estructurado de mejora continua que garantiza el desarrollo 
              profesional sostenible y la excelencia en la función de Compras.
            </p>
          </div>
        </FadeIn>

        {/* Methodology Timeline */}
        <FadeIn delay={0.2}>
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-rose-500" />
            
            <div className="grid lg:grid-cols-5 gap-6">
              {methodologySteps.map((step, index) => (
                <Card key={step.phase} className="relative hover:shadow-lg transition-shadow">
                  {/* Connector dot */}
                  <div className={`hidden lg:block absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full ${step.color} border-4 border-background`} />
                  
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-10 h-10 rounded-lg ${step.color} flex items-center justify-center`}>
                        <step.icon className="h-5 w-5 text-white" />
                      </div>
                      <Badge variant="outline">{index + 1}</Badge>
                    </div>
                    <CardTitle className="text-lg">{step.phase}</CardTitle>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {step.activities.map((activity) => (
                        <li key={activity} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Key Principles */}
        <FadeIn delay={0.4}>
          <Card className="mt-12 bg-gradient-to-br from-blue-50 to-background dark:from-blue-950/20">
            <CardContent className="py-8">
              <h3 className="text-xl font-semibold text-center mb-6">Principios Metodológicos</h3>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
                    <Search className="h-7 w-7 text-blue-600" />
                  </div>
                  <h4 className="font-semibold mb-2">Basado en Evidencias</h4>
                  <p className="text-sm text-muted-foreground">
                    Diagnóstico objetivo mediante herramientas validadas internacionalmente
                  </p>
                </div>
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mx-auto mb-4">
                    <Target className="h-7 w-7 text-emerald-600" />
                  </div>
                  <h4 className="font-semibold mb-2">Orientado a Resultados</h4>
                  <p className="text-sm text-muted-foreground">
                    KPIs medibles que demuestran el impacto en el negocio
                  </p>
                </div>
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mx-auto mb-4">
                    <RefreshCw className="h-7 w-7 text-purple-600" />
                  </div>
                  <h4 className="font-semibold mb-2">Mejora Continua</h4>
                  <p className="text-sm text-muted-foreground">
                    Ciclo PDCA aplicado al desarrollo profesional permanente
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

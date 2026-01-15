import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Rocket, FileCheck, Users, GraduationCap, Award, Calendar, CheckCircle2 } from "lucide-react";

const implementationPhases = [
  {
    phase: "Fase 1: Diagnóstico",
    duration: "2-4 semanas",
    icon: FileCheck,
    activities: [
      "Assessment inicial del equipo de Compras",
      "Mapeo de competencias actuales",
      "Identificación de gaps vs estándar UNE 15896",
      "Definición de objetivos de certificación",
    ],
    deliverables: ["Informe de diagnóstico", "Plan de acción preliminar"],
  },
  {
    phase: "Fase 2: Diseño del Programa",
    duration: "2-3 semanas",
    icon: Calendar,
    activities: [
      "Diseño de itinerarios formativos personalizados",
      "Selección de modalidades (presencial, online, mixto)",
      "Planificación de recursos y calendario",
      "Definición de métricas de éxito",
    ],
    deliverables: ["Plan formativo detallado", "Calendario de sesiones"],
  },
  {
    phase: "Fase 3: Formación",
    duration: "3-6 meses",
    icon: GraduationCap,
    activities: [
      "Ejecución del programa formativo",
      "Sesiones de coaching individual",
      "Proyectos prácticos aplicados",
      "Evaluaciones intermedias",
    ],
    deliverables: ["Informes de progreso", "Evaluaciones competenciales"],
  },
  {
    phase: "Fase 4: Certificación",
    duration: "1-2 meses",
    icon: Award,
    activities: [
      "Preparación específica para examen UNE",
      "Simulacros de evaluación",
      "Coordinación con AENOR",
      "Examen y certificación oficial",
    ],
    deliverables: ["Certificados UNE 15896", "Informe final de resultados"],
  },
];

const successFactors = [
  "Compromiso de la alta dirección",
  "Tiempo dedicado al programa (mínimo 4h/semana)",
  "Aplicación práctica de conocimientos",
  "Seguimiento continuo del progreso",
  "Reconocimiento interno de la certificación",
];

export const DocImplementacion = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-300 dark:bg-blue-900/30 dark:text-blue-300">
              <Rocket className="h-3 w-3 mr-1" />
              Sección 9
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Proceso de Implementación
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Metodología probada para implementar programas de certificación 
              y desarrollo profesional en organizaciones.
            </p>
          </div>
        </FadeIn>

        {/* Implementation Phases */}
        <StaggerContainer className="grid md:grid-cols-2 gap-6 mb-12">
          {implementationPhases.map((phase, index) => (
            <StaggerItem key={phase.phase}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center">
                        <phase.icon className="h-5 w-5 text-white" />
                      </div>
                      <Badge variant="outline">{phase.duration}</Badge>
                    </div>
                    <span className="text-2xl font-bold text-muted-foreground/30">
                      0{index + 1}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{phase.phase}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs font-medium text-muted-foreground mb-2">ACTIVIDADES</p>
                      <ul className="space-y-2">
                        {phase.activities.map((activity) => (
                          <li key={activity} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-3 border-t">
                      <p className="text-xs font-medium text-muted-foreground mb-2">ENTREGABLES</p>
                      <div className="flex flex-wrap gap-2">
                        {phase.deliverables.map((deliverable) => (
                          <Badge key={deliverable} variant="secondary" className="text-xs">
                            {deliverable}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Success Factors */}
        <FadeIn delay={0.3}>
          <Card className="bg-gradient-to-br from-blue-50 to-background dark:from-blue-950/20">
            <CardHeader>
              <CardTitle className="text-center">Factores Críticos de Éxito</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-5 gap-4">
                {successFactors.map((factor, index) => (
                  <div key={factor} className="text-center">
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-3">
                      <span className="font-bold text-blue-600">{index + 1}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{factor}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </FadeIn>

        {/* Timeline Summary */}
        <FadeIn delay={0.4}>
          <Card className="mt-12">
            <CardContent className="py-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h4 className="text-xl font-bold mb-2">Duración típica del programa</h4>
                  <p className="text-muted-foreground">
                    De 6 a 12 meses dependiendo del tamaño del equipo y nivel objetivo
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-blue-600">6 meses</p>
                    <p className="text-xs text-muted-foreground">Programa básico</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-emerald-600">9 meses</p>
                    <p className="text-xs text-muted-foreground">Programa estándar</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-purple-600">12 meses</p>
                    <p className="text-xs text-muted-foreground">Programa avanzado</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
};

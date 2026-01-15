import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Shield, FileSearch, CheckCircle2, AlertCircle, Award, ClipboardCheck, Scale } from "lucide-react";

const auditAreas = [
  {
    area: "Conocimientos Técnicos",
    weight: "40%",
    description: "Evaluación de conocimientos específicos de la función de Compras",
    criteria: ["Gestión de proveedores", "Negociación", "Contratos", "Análisis de costes"],
  },
  {
    area: "Competencias Profesionales",
    weight: "30%",
    description: "Habilidades blandas y capacidades de gestión",
    criteria: ["Liderazgo", "Comunicación", "Resolución de problemas", "Trabajo en equipo"],
  },
  {
    area: "Experiencia Demostrable",
    weight: "20%",
    description: "Trayectoria profesional y logros alcanzados",
    criteria: ["Años de experiencia", "Proyectos liderados", "Resultados obtenidos", "Referencias"],
  },
  {
    area: "Formación Continua",
    weight: "10%",
    description: "Compromiso con el desarrollo profesional permanente",
    criteria: ["Horas de formación", "Certificaciones previas", "Contribución a la comunidad"],
  },
];

const auditProcess = [
  {
    step: 1,
    title: "Solicitud",
    description: "Envío de documentación y pago de tasas",
    icon: FileSearch,
  },
  {
    step: 2,
    title: "Revisión Documental",
    description: "Verificación de requisitos y experiencia",
    icon: ClipboardCheck,
  },
  {
    step: 3,
    title: "Examen Técnico",
    description: "Prueba de conocimientos según nivel",
    icon: CheckCircle2,
  },
  {
    step: 4,
    title: "Auditoría AENOR",
    description: "Verificación independiente",
    icon: Shield,
  },
  {
    step: 5,
    title: "Certificación",
    description: "Emisión del certificado oficial",
    icon: Award,
  },
];

export const DocAuditoria = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-300 dark:bg-blue-900/30 dark:text-blue-300">
              <Shield className="h-3 w-3 mr-1" />
              Sección 10
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Auditoría AENOR
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Proceso de verificación independiente que garantiza la objetividad 
              y rigor de la certificación UNE 15896.
            </p>
          </div>
        </FadeIn>

        {/* Audit Process */}
        <FadeIn delay={0.2}>
          <div className="mb-16">
            <h3 className="text-xl font-semibold text-center mb-8">Proceso de Auditoría</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              {auditProcess.map((step, index) => (
                <div key={step.step} className="flex items-center">
                  <Card className="w-48 text-center hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-3">
                        <step.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <Badge variant="outline" className="mb-2">Paso {step.step}</Badge>
                      <h4 className="font-semibold text-sm mb-1">{step.title}</h4>
                      <p className="text-xs text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                  {index < auditProcess.length - 1 && (
                    <div className="hidden md:block w-8 h-0.5 bg-blue-300" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Audit Areas */}
        <StaggerContainer className="grid md:grid-cols-2 gap-6 mb-12">
          {auditAreas.map((area) => (
            <StaggerItem key={area.area}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{area.area}</CardTitle>
                    <Badge className="bg-blue-600">{area.weight}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{area.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {area.criteria.map((criterion) => (
                      <Badge key={criterion} variant="secondary" className="text-xs">
                        {criterion}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* AENOR Info */}
        <FadeIn delay={0.4}>
          <Card className="bg-gradient-to-br from-blue-50 to-background dark:from-blue-950/20 border-blue-200 dark:border-blue-800">
            <CardContent className="py-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Scale className="h-8 w-8 text-blue-600" />
                    <h3 className="text-xl font-bold">¿Por qué AENOR?</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">
                        Organismo de certificación acreditado por ENAC
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">
                        Independencia total del proceso de formación
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">
                        Reconocimiento internacional del certificado
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">
                        Auditores especializados en la función de Compras
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center gap-4 p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg">
                    <Award className="h-16 w-16 text-blue-600" />
                    <div className="text-left">
                      <p className="text-2xl font-bold">AENOR</p>
                      <p className="text-sm text-muted-foreground">Entidad de Certificación</p>
                      <Badge variant="outline" className="mt-2">ISO 17024</Badge>
                    </div>
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

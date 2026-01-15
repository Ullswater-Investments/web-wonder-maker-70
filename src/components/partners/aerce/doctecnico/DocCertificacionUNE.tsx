import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Award, CheckCircle2, FileCheck, Users, Shield, Globe } from "lucide-react";

const certificationSteps = [
  {
    step: 1,
    title: "Solicitud",
    description: "El profesional presenta su candidatura con documentación de experiencia y formación",
    icon: FileCheck,
  },
  {
    step: 2,
    title: "Evaluación",
    description: "Revisión de competencias y experiencia por el comité de certificación AERCE",
    icon: Users,
  },
  {
    step: 3,
    title: "Examen",
    description: "Prueba de conocimientos técnicos según estándar UNE 15896",
    icon: CheckCircle2,
  },
  {
    step: 4,
    title: "Auditoría AENOR",
    description: "Verificación independiente por organismo acreditado AENOR",
    icon: Shield,
  },
  {
    step: 5,
    title: "Certificación",
    description: "Obtención del certificado oficial reconocido por IFPSM",
    icon: Award,
  },
];

const certificationLevels = [
  {
    level: "Básico",
    requirements: "2+ años experiencia, formación básica en Compras",
    validity: "3 años",
    renewal: "Formación continua + actividad profesional",
  },
  {
    level: "Profesional",
    requirements: "5+ años experiencia, gestión de categorías, negociación avanzada",
    validity: "3 años",
    renewal: "40h formación + evaluación de desempeño",
  },
  {
    level: "Avanzado",
    requirements: "8+ años experiencia, liderazgo de equipos, estrategia",
    validity: "3 años",
    renewal: "60h formación + contribución a la comunidad",
  },
  {
    level: "Executive",
    requirements: "12+ años, posición directiva, visión transformacional",
    validity: "5 años",
    renewal: "Participación en Foro CPO + mentoría",
  },
];

export const DocCertificacionUNE = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-300 dark:bg-blue-900/30 dark:text-blue-300">
              <Award className="h-3 w-3 mr-1" />
              Sección 3
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Certificación UNE 15896
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              El estándar europeo de referencia para la certificación de profesionales de Compras, 
              avalado por AENOR y reconocido internacionalmente por IFPSM.
            </p>
          </div>
        </FadeIn>

        {/* Certification Process */}
        <FadeIn delay={0.2}>
          <div className="mb-16">
            <h3 className="text-xl font-semibold text-center mb-8">Proceso de Certificación</h3>
            <div className="grid md:grid-cols-5 gap-4">
              {certificationSteps.map((item, index) => (
                <Card key={item.step} className="relative text-center hover:shadow-lg transition-shadow">
                  {index < certificationSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-300 z-10" />
                  )}
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
                      <item.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <Badge variant="outline" className="mb-2">Paso {item.step}</Badge>
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Certification Levels */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {certificationLevels.map((item) => (
            <StaggerItem key={item.level}>
              <Card className="h-full border-t-4 border-t-blue-500 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Award className="h-5 w-5 text-amber-500" />
                    Nivel {item.level}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-xs font-medium text-muted-foreground mb-1">Requisitos:</p>
                    <p className="text-sm">{item.requirements}</p>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Validez:</span>
                    <Badge variant="secondary">{item.validity}</Badge>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground mb-1">Renovación:</p>
                    <p className="text-xs text-muted-foreground">{item.renewal}</p>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Recognition */}
        <FadeIn delay={0.4}>
          <Card className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            <CardContent className="py-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <Globe className="h-12 w-12 text-white/80" />
                  <div>
                    <h4 className="text-xl font-bold">Reconocimiento Internacional</h4>
                    <p className="text-blue-100">
                      Certificación avalada por IFPSM y reconocida en más de 40 países
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Badge className="bg-white/20 text-white border-white/30">AENOR</Badge>
                  <Badge className="bg-white/20 text-white border-white/30">IFPSM</Badge>
                  <Badge className="bg-white/20 text-white border-white/30">UNE</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
};

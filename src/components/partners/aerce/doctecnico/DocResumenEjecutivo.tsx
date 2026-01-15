import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { 
  Target, Lightbulb, TrendingUp, 
  Award, GraduationCap, Users, Zap 
} from "lucide-react";

const keyPoints = [
  {
    icon: Award,
    title: "Certificación Profesional",
    description: "La certificación UNE 15896 es el único estándar europeo que acredita las competencias de los profesionales de Compras, avalado por AENOR y reconocido internacionalmente.",
    color: "hsl(217, 91%, 60%)",
  },
  {
    icon: GraduationCap,
    title: "Formación Especializada",
    description: "Catálogo formativo completo que incluye Masters con EADA y ESIC, cursos especializados y programas in-company adaptados a las necesidades de cada organización.",
    color: "hsl(160, 84%, 39%)",
  },
  {
    icon: Users,
    title: "Comunidad Profesional",
    description: "Red de más de 2.000 profesionales activos, incluyendo el Foro CPO para directivos y eventos de networking como La Noche de las Compras.",
    color: "hsl(262, 83%, 58%)",
  },
];

const proposalBenefits = [
  "Certificación reconocida internacionalmente por IFPSM",
  "Acceso a formación de primer nivel con las mejores escuelas de negocio",
  "Red de contactos profesionales de alto nivel",
  "Benchmarking salarial y estudios de mercado exclusivos",
  "Visibilidad y reconocimiento profesional en el sector",
];

export const DocResumenEjecutivo = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-300 dark:bg-blue-900/30 dark:text-blue-300">
              <Target className="h-3 w-3 mr-1" />
              Sección 1
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Resumen Ejecutivo
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              AERCE es la Asociación Española de Responsables de Compras y Existencias, 
              referente en la profesionalización y desarrollo de la función de Compras desde 1993.
            </p>
          </div>
        </FadeIn>

        {/* Key Points */}
        <StaggerContainer className="grid md:grid-cols-3 gap-6 mb-12">
          {keyPoints.map((point) => (
            <StaggerItem key={point.title}>
              <Card className="h-full border-t-4 hover:shadow-lg transition-shadow" style={{ borderTopColor: point.color }}>
                <CardHeader>
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${point.color}20` }}
                  >
                    <point.icon className="h-7 w-7" style={{ color: point.color }} />
                  </div>
                  <CardTitle className="text-xl">{point.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{point.description}</p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Proposal Section */}
        <FadeIn delay={0.2}>
          <Card className="bg-gradient-to-br from-blue-50 to-emerald-50 dark:from-blue-950/20 dark:to-emerald-950/20 border-blue-200 dark:border-blue-800">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <Lightbulb className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <CardTitle className="text-2xl">El Modelo AERCE</CardTitle>
                  <p className="text-muted-foreground">Excelencia profesional basada en tres pilares</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-emerald-600" />
                    ¿Qué ofrece AERCE?
                  </h4>
                  <ul className="space-y-3">
                    {proposalBenefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Zap className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-card/50 rounded-xl p-6 border">
                  <h4 className="font-semibold mb-4">Diferencia Clave</h4>
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
                      <p className="text-sm font-medium text-destructive">❌ Sin certificación</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Profesionales sin reconocimiento formal de sus competencias
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-emerald-100/50 dark:bg-emerald-900/20 border border-emerald-300 dark:border-emerald-700">
                      <p className="text-sm font-medium text-emerald-700 dark:text-emerald-400">✓ Con AERCE</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Profesionales certificados, formados y conectados en red
                      </p>
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

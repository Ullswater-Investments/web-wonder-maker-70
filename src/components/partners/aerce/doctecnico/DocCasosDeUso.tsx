import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Trophy, Building2, Users, TrendingUp, Quote, Star } from "lucide-react";

const successCases = [
  {
    company: "IBEX 35 - Sector Energía",
    challenge: "Profesionalizar un equipo de 40 compradores con perfiles muy heterogéneos",
    solution: "Programa integral de certificación UNE 15896 + formación in-company durante 12 meses",
    results: [
      { metric: "32 profesionales certificados", icon: Trophy },
      { metric: "18% reducción de costes", icon: TrendingUp },
      { metric: "40% mejora en satisfacción interna", icon: Star },
    ],
    quote: "La certificación AERCE ha sido clave para elevar el nivel de nuestro departamento y ganar credibilidad ante la dirección.",
    author: "Director de Compras",
  },
  {
    company: "Multinacional Farmacéutica",
    challenge: "Alinear las competencias del equipo de compras a nivel europeo con estándares comunes",
    solution: "Despliegue de framework de competencias AERCE + certificación IFPSM",
    results: [
      { metric: "120 profesionales alineados", icon: Users },
      { metric: "Estándar único en 5 países", icon: Building2 },
      { metric: "Reconocimiento global del equipo", icon: Trophy },
    ],
    quote: "AERCE nos ayudó a crear un lenguaje común y unos estándares de excelencia compartidos en toda Europa.",
    author: "VP Global Procurement",
  },
  {
    company: "Startup Tecnológica Scale-up",
    challenge: "Crear una función de compras desde cero con recursos limitados",
    solution: "Contratación de profesional certificado + mentoring AERCE + formación acelerada",
    results: [
      { metric: "Función operativa en 3 meses", icon: TrendingUp },
      { metric: "€2M savings en primer año", icon: TrendingUp },
      { metric: "Equipo de 4 personas certificadas", icon: Users },
    ],
    quote: "Empezar con profesionales certificados por AERCE nos dio una ventaja competitiva desde el día uno.",
    author: "CEO & Founder",
  },
];

export const DocCasosDeUso = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-300 dark:bg-blue-900/30 dark:text-blue-300">
              <Trophy className="h-3 w-3 mr-1" />
              Sección 8
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Casos de Éxito
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Organizaciones que han transformado su función de Compras 
              con el apoyo de AERCE y la certificación profesional.
            </p>
          </div>
        </FadeIn>

        {/* Success Cases */}
        <StaggerContainer className="space-y-8">
          {successCases.map((caseStudy, index) => (
            <StaggerItem key={caseStudy.company}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="grid md:grid-cols-3">
                  {/* Left: Challenge & Solution */}
                  <div className="p-6 bg-muted/30 border-r">
                    <Badge variant="outline" className="mb-4">Caso #{index + 1}</Badge>
                    <h3 className="font-bold text-lg mb-4">{caseStudy.company}</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <p className="text-xs font-medium text-muted-foreground mb-1">RETO</p>
                        <p className="text-sm">{caseStudy.challenge}</p>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-muted-foreground mb-1">SOLUCIÓN</p>
                        <p className="text-sm">{caseStudy.solution}</p>
                      </div>
                    </div>
                  </div>

                  {/* Center: Results */}
                  <div className="p-6 border-r">
                    <p className="text-xs font-medium text-muted-foreground mb-4">RESULTADOS</p>
                    <div className="space-y-4">
                      {caseStudy.results.map((result) => (
                        <div key={result.metric} className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                            <result.icon className="h-5 w-5 text-emerald-600" />
                          </div>
                          <span className="font-medium">{result.metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: Quote */}
                  <div className="p-6 bg-gradient-to-br from-blue-50 to-background dark:from-blue-950/20 flex flex-col justify-center">
                    <Quote className="h-8 w-8 text-blue-300 mb-4" />
                    <blockquote className="text-sm italic mb-4">
                      "{caseStudy.quote}"
                    </blockquote>
                    <p className="text-xs text-muted-foreground">
                      — {caseStudy.author}
                    </p>
                  </div>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Stats Summary */}
        <FadeIn delay={0.4}>
          <Card className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            <CardContent className="py-8">
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <p className="text-4xl font-bold mb-2">150+</p>
                  <p className="text-sm text-blue-100">Empresas han certificado equipos</p>
                </div>
                <div>
                  <p className="text-4xl font-bold mb-2">2.000+</p>
                  <p className="text-sm text-blue-100">Profesionales certificados</p>
                </div>
                <div>
                  <p className="text-4xl font-bold mb-2">€50M+</p>
                  <p className="text-sm text-blue-100">Savings generados</p>
                </div>
                <div>
                  <p className="text-4xl font-bold mb-2">95%</p>
                  <p className="text-sm text-blue-100">Recomendarían AERCE</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
};

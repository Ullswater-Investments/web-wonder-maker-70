import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Target, Briefcase, Brain, Users, TrendingUp, Shield, Leaf, Cog } from "lucide-react";

const competencyAreas = [
  {
    area: "Técnicas de Compras",
    icon: Briefcase,
    color: "bg-blue-500",
    competencies: [
      "Análisis de mercado y proveedores",
      "Negociación y contratación",
      "Gestión de categorías",
      "TCO y análisis de costes",
    ],
  },
  {
    area: "Gestión Estratégica",
    icon: Target,
    color: "bg-emerald-500",
    competencies: [
      "Planificación estratégica",
      "Gestión de riesgos",
      "KPIs y cuadros de mando",
      "Transformación digital",
    ],
  },
  {
    area: "Liderazgo",
    icon: Users,
    color: "bg-purple-500",
    competencies: [
      "Gestión de equipos",
      "Comunicación efectiva",
      "Gestión del cambio",
      "Desarrollo de talento",
    ],
  },
  {
    area: "Sostenibilidad",
    icon: Leaf,
    color: "bg-green-500",
    competencies: [
      "Compras sostenibles",
      "Economía circular",
      "Criterios ESG",
      "Huella de carbono",
    ],
  },
];

const proficiencyLevels = [
  { level: "Básico", description: "Conocimiento fundamental", percentage: 25 },
  { level: "Intermedio", description: "Aplicación práctica", percentage: 50 },
  { level: "Avanzado", description: "Expertise y optimización", percentage: 75 },
  { level: "Experto", description: "Liderazgo y transformación", percentage: 100 },
];

export const DocCompetencias = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-300 dark:bg-blue-900/30 dark:text-blue-300">
              <Brain className="h-3 w-3 mr-1" />
              Sección 5
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Framework de Competencias
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Modelo estructurado de competencias que define los conocimientos, habilidades 
              y actitudes requeridas para cada nivel profesional en Compras.
            </p>
          </div>
        </FadeIn>

        {/* Competency Areas */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {competencyAreas.map((area) => (
            <StaggerItem key={area.area}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className={`w-12 h-12 rounded-xl ${area.color} flex items-center justify-center mb-3`}>
                    <area.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{area.area}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {area.competencies.map((comp) => (
                      <li key={comp} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                        <span className="text-muted-foreground">{comp}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Proficiency Levels */}
        <FadeIn delay={0.3}>
          <Card className="bg-gradient-to-br from-blue-50 to-background dark:from-blue-950/20">
            <CardHeader>
              <CardTitle className="text-center">Niveles de Proficiencia</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6">
                {proficiencyLevels.map((item, index) => (
                  <div key={item.level} className="text-center">
                    <div className="relative w-24 h-24 mx-auto mb-4">
                      <svg className="w-24 h-24 transform -rotate-90">
                        <circle
                          cx="48"
                          cy="48"
                          r="40"
                          stroke="currentColor"
                          strokeWidth="8"
                          fill="none"
                          className="text-muted"
                        />
                        <circle
                          cx="48"
                          cy="48"
                          r="40"
                          stroke="currentColor"
                          strokeWidth="8"
                          fill="none"
                          strokeDasharray={`${item.percentage * 2.51} 251`}
                          className="text-blue-500"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-lg font-bold">{item.percentage}%</span>
                      </div>
                    </div>
                    <h4 className="font-semibold">{item.level}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </FadeIn>

        {/* Additional Skills */}
        <FadeIn delay={0.4}>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Cog className="h-10 w-10 text-blue-500 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Hard Skills</h4>
                <p className="text-sm text-muted-foreground">
                  Conocimientos técnicos específicos de la función de Compras
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Users className="h-10 w-10 text-emerald-500 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Soft Skills</h4>
                <p className="text-sm text-muted-foreground">
                  Habilidades interpersonales y de comunicación
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <TrendingUp className="h-10 w-10 text-purple-500 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Business Acumen</h4>
                <p className="text-sm text-muted-foreground">
                  Visión estratégica y comprensión del negocio
                </p>
              </CardContent>
            </Card>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

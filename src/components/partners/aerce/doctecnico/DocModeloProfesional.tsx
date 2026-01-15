import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/AnimatedSection";
import { Users, TrendingUp, Award, Briefcase, Target } from "lucide-react";

const careerLevels = [
  {
    level: "Junior",
    years: "0-3 años",
    title: "Comprador / Buyer",
    skills: ["Gestión de pedidos", "Negociación básica", "Análisis de proveedores"],
    certification: "Nivel Básico",
    color: "bg-blue-100 text-blue-700 border-blue-300",
  },
  {
    level: "Senior",
    years: "3-7 años",
    title: "Senior Buyer / Category Manager",
    skills: ["Estrategia de categoría", "TCO Analysis", "Gestión de contratos"],
    certification: "Nivel Profesional",
    color: "bg-emerald-100 text-emerald-700 border-emerald-300",
  },
  {
    level: "Manager",
    years: "7-12 años",
    title: "Purchasing Manager",
    skills: ["Liderazgo de equipos", "Planificación estratégica", "Gestión de riesgos"],
    certification: "Nivel Avanzado",
    color: "bg-purple-100 text-purple-700 border-purple-300",
  },
  {
    level: "Director",
    years: "12+ años",
    title: "CPO / Director de Compras",
    skills: ["Visión C-Level", "Transformación digital", "ESG & Sostenibilidad"],
    certification: "Nivel Executive",
    color: "bg-amber-100 text-amber-700 border-amber-300",
  },
];

export const DocModeloProfesional = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-300 dark:bg-blue-900/30 dark:text-blue-300">
              <Users className="h-3 w-3 mr-1" />
              Sección 2
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Modelo de Desarrollo Profesional
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Framework de carrera para profesionales de Compras que define niveles, 
              competencias requeridas y rutas de certificación.
            </p>
          </div>
        </FadeIn>

        {/* Career Levels */}
        <FadeIn delay={0.2}>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {careerLevels.map((item, index) => (
              <Card key={item.level} className="relative overflow-hidden hover:shadow-lg transition-shadow">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-emerald-500" />
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className={item.color}>
                      {item.level}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{item.years}</span>
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs font-medium text-muted-foreground mb-2">Competencias clave:</p>
                      <ul className="space-y-1">
                        {item.skills.map((skill) => (
                          <li key={skill} className="text-sm flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-3 border-t">
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-amber-500" />
                        <span className="text-sm font-medium">{item.certification}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </FadeIn>

        {/* Value Proposition */}
        <FadeIn delay={0.3}>
          <Card className="bg-gradient-to-br from-blue-50 to-background dark:from-blue-950/20">
            <CardContent className="py-8">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-7 w-7 text-blue-600" />
                  </div>
                  <h4 className="font-semibold mb-2">Progresión Clara</h4>
                  <p className="text-sm text-muted-foreground">
                    Ruta definida desde Junior hasta Director con hitos medibles
                  </p>
                </div>
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mx-auto mb-4">
                    <Briefcase className="h-7 w-7 text-emerald-600" />
                  </div>
                  <h4 className="font-semibold mb-2">Competencias Actualizadas</h4>
                  <p className="text-sm text-muted-foreground">
                    Framework alineado con las demandas actuales del mercado
                  </p>
                </div>
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mx-auto mb-4">
                    <Target className="h-7 w-7 text-purple-600" />
                  </div>
                  <h4 className="font-semibold mb-2">Objetivos Medibles</h4>
                  <p className="text-sm text-muted-foreground">
                    KPIs claros para evaluar el desarrollo profesional
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

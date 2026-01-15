import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { GraduationCap, BookOpen, Building2, Video, Clock, Users, Award, ExternalLink } from "lucide-react";

const trainingCategories = [
  {
    type: "Masters",
    icon: GraduationCap,
    color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    programs: [
      {
        name: "Master en Dirección de Compras - EADA",
        duration: "9 meses",
        format: "Presencial + Online",
        highlight: "Top Business School",
      },
      {
        name: "Master en Supply Chain Management - ESIC",
        duration: "12 meses",
        format: "Blended",
        highlight: "Doble titulación",
      },
    ],
  },
  {
    type: "Cursos Especializados",
    icon: BookOpen,
    color: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
    programs: [
      {
        name: "Negociación Estratégica en Compras",
        duration: "40 horas",
        format: "Online",
        highlight: "Más demandado",
      },
      {
        name: "Gestión de Categorías Avanzada",
        duration: "32 horas",
        format: "Online",
        highlight: "Certificable",
      },
      {
        name: "ESG y Compras Sostenibles",
        duration: "24 horas",
        format: "Online",
        highlight: "Nuevo 2025",
      },
    ],
  },
  {
    type: "Formación In-Company",
    icon: Building2,
    color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
    programs: [
      {
        name: "Programa Transformación Compras",
        duration: "Personalizado",
        format: "In-house",
        highlight: "A medida",
      },
      {
        name: "Certificación de equipos UNE 15896",
        duration: "3-6 meses",
        format: "Mixto",
        highlight: "Grupal",
      },
    ],
  },
];

const stats = [
  { value: "5.000+", label: "Profesionales formados" },
  { value: "150+", label: "Empresas cliente" },
  { value: "95%", label: "Satisfacción" },
  { value: "40+", label: "Programas activos" },
];

export const DocFormacion = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-300 dark:bg-blue-900/30 dark:text-blue-300">
              <GraduationCap className="h-3 w-3 mr-1" />
              Sección 4
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Catálogo Formativo
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Formación especializada en colaboración con las mejores escuelas de negocio, 
              diseñada para impulsar tu carrera en Compras.
            </p>
          </div>
        </FadeIn>

        {/* Stats */}
        <FadeIn delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {stats.map((stat) => (
              <Card key={stat.label} className="text-center">
                <CardContent className="py-6">
                  <p className="text-3xl font-bold text-blue-600">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </FadeIn>

        {/* Training Categories */}
        <StaggerContainer className="space-y-8">
          {trainingCategories.map((category) => (
            <StaggerItem key={category.type}>
              <Card className="overflow-hidden">
                <CardHeader className="bg-muted/50">
                  <CardTitle className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${category.color}`}>
                      <category.icon className="h-5 w-5" />
                    </div>
                    {category.type}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.programs.map((program) => (
                      <Card key={program.name} className="border hover:shadow-md transition-shadow">
                        <CardContent className="pt-4">
                          <div className="flex justify-between items-start mb-3">
                            <h4 className="font-semibold text-sm">{program.name}</h4>
                            <Badge variant="secondary" className="text-xs shrink-0 ml-2">
                              {program.highlight}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {program.duration}
                            </span>
                            <span className="flex items-center gap-1">
                              <Video className="h-3 w-3" />
                              {program.format}
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Partners */}
        <FadeIn delay={0.4}>
          <Card className="mt-12 bg-gradient-to-br from-blue-50 to-background dark:from-blue-950/20">
            <CardContent className="py-8">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-2">Partners Académicos</h3>
                <p className="text-muted-foreground">
                  Colaboramos con las mejores escuelas de negocio de España
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-8">
                <Badge variant="outline" className="text-lg py-2 px-4">EADA Business School</Badge>
                <Badge variant="outline" className="text-lg py-2 px-4">ESIC Business & Marketing School</Badge>
                <Badge variant="outline" className="text-lg py-2 px-4">IE Business School</Badge>
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
};

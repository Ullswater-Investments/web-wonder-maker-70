import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Leaf, Euro } from "lucide-react";

const ExecutiveSummary = () => {
  const keyPoints = [
    {
      icon: TrendingUp,
      stat: "€12.8B",
      label: "Mercado AgTech Europa 2025",
      growth: "+15% CAGR",
    },
    {
      icon: Users,
      stat: "890K",
      label: "Explotaciones en España",
      growth: "23.5M hectáreas",
    },
    {
      icon: Leaf,
      stat: "40%",
      label: "Reducción emisiones potencial",
      growth: "Agricultura de precisión",
    },
    {
      icon: Euro,
      stat: "€387M",
      label: "Fondos NextGen agricultura",
      growth: "2021-2026",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-green-900 mb-6">1. Resumen Ejecutivo</h2>
          
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-muted-foreground leading-relaxed text-lg">
              La agricultura europea se encuentra en un punto de inflexión histórico. La convergencia de 
              <strong> IoT, inteligencia artificial y los Data Spaces europeos</strong> está creando una oportunidad 
              sin precedentes para transformar un sector que representa el 1.4% del PIB de la UE y emplea a 
              9.5 millones de personas.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Este white paper presenta la visión de TeleNatura sobre cómo la digitalización del campo 
              puede abordar los retos críticos del sector: <strong>sostenibilidad, eficiencia y rentabilidad</strong>. 
              Analizamos el contexto actual, los desafíos tecnológicos y regulatorios, y proponemos una 
              hoja de ruta hacia la agricultura del futuro.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {keyPoints.map((point, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-green-100">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <point.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <p className="text-3xl font-bold text-green-900">{point.stat}</p>
                  <p className="text-sm text-muted-foreground mt-1">{point.label}</p>
                  <p className="text-xs text-green-600 font-medium mt-2">{point.growth}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
            <CardContent className="p-6">
              <h4 className="font-semibold text-green-900 mb-3">Tesis Principal</h4>
              <blockquote className="text-lg text-green-800 italic border-l-4 border-green-500 pl-4">
                "La agricultura digital no es una opción, es una necesidad. Las explotaciones que no 
                adopten tecnologías IoT y análisis de datos en los próximos 5 años quedarán 
                marginadas de la cadena de valor agroalimentaria europea."
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExecutiveSummary;

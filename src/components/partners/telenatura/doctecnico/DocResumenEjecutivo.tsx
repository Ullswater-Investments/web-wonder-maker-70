import { Card, CardContent } from "@/components/ui/card";
import { Target, TrendingUp, Leaf, Globe } from "lucide-react";

const DocResumenEjecutivo = () => {
  const highlights = [
    {
      icon: Target,
      title: "Objetivo",
      description: "Digitalizar explotaciones agrarias mediante IoT y análisis de datos para optimizar recursos y productividad.",
    },
    {
      icon: TrendingUp,
      title: "Resultados",
      description: "Reducción del 30% en consumo de agua, aumento del 25% en rendimiento de cosechas.",
    },
    {
      icon: Leaf,
      title: "Sostenibilidad",
      description: "Reducción de huella de carbono mediante agricultura de precisión y gestión eficiente.",
    },
    {
      icon: Globe,
      title: "Interoperabilidad",
      description: "Integración con Gaia-X y Pontus-X para intercambio seguro de datos agrarios.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-emerald-900 mb-6">1. Resumen Ejecutivo</h2>
          
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-muted-foreground leading-relaxed">
              TeleNatura Connect representa la evolución natural de la agricultura tradicional hacia un modelo 
              de <strong>agricultura de precisión basada en datos</strong>. Nuestra plataforma integra sensores IoT, 
              conectividad avanzada y análisis inteligente para transformar la gestión de explotaciones agrarias.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Este documento técnico detalla la arquitectura del sistema, especificaciones de hardware y software, 
              protocolos de comunicación, y procedimientos de integración con el ecosistema de datos europeo 
              Gaia-X a través de Pontus-X.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="border-emerald-100 hover:border-emerald-300 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-emerald-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-8 bg-emerald-50 border-emerald-200">
            <CardContent className="p-6">
              <h4 className="font-semibold text-emerald-900 mb-3">Alcance del Documento</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                  Especificaciones técnicas de sensores y estaciones meteorológicas
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                  Arquitectura de software y protocolos de comunicación
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                  Integración con plataformas de datos europeas
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                  Procedimientos de instalación y mantenimiento
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DocResumenEjecutivo;

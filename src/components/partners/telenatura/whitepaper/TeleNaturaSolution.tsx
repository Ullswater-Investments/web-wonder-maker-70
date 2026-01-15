import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Cpu, Cloud, Users, CheckCircle } from "lucide-react";

const TeleNaturaSolution = () => {
  const pillars = [
    {
      icon: Cpu,
      title: "Hardware Robusto",
      description: "Sensores y estaciones diseñados para el campo: IP67, autonomía 5 años, mantenimiento mínimo",
      features: ["Sin cables", "Plug & play", "Resistente"],
    },
    {
      icon: Cloud,
      title: "Plataforma Inteligente",
      description: "Software intuitivo con análisis predictivo, alertas personalizadas y recomendaciones accionables",
      features: ["IA integrada", "Móvil + web", "Offline-first"],
    },
    {
      icon: Users,
      title: "Acompañamiento",
      description: "Formación en finca, soporte continuo y comunidad de agricultores digitales",
      features: ["Instalación incluida", "Soporte 24/7", "Comunidad"],
    },
  ];

  const differentiators = [
    "Diseñado por agricultores para agricultores",
    "Integración nativa con Pontus-X y Gaia-X",
    "Modelo SaaS sin grandes inversiones iniciales",
    "Tecnología española, datos en Europa",
    "Compatible con cualquier cultivo y tamaño",
    "ROI demostrable desde el primer año",
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-green-600 mb-4">Nuestra Propuesta</Badge>
            <h2 className="text-3xl font-bold text-green-900 mb-4">4. La Solución TeleNatura</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Una plataforma integral que elimina las barreras de la digitalización agraria
            </p>
          </div>

          {/* Logo/Brand */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center shadow-lg">
              <Leaf className="h-10 w-10 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-green-900">TeleNatura Connect</h3>
              <p className="text-emerald-600">El campo conectado</p>
            </div>
          </div>

          {/* Three Pillars */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {pillars.map((pillar, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-4">
                    <pillar.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-lg text-green-900 mb-2">{pillar.title}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{pillar.description}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {pillar.features.map((feature, i) => (
                      <Badge key={i} variant="secondary" className="bg-green-100 text-green-700">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Differentiators */}
          <Card className="bg-green-900 text-white">
            <CardContent className="p-8">
              <h4 className="font-semibold text-xl mb-6 text-center">¿Por qué TeleNatura?</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {differentiators.map((diff, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-green-100">{diff}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TeleNaturaSolution;

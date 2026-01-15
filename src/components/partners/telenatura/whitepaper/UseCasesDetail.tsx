import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Droplets, Beef, Wine, Sun, Leaf, TrendingUp } from "lucide-react";

const UseCasesDetail = () => {
  const cases = [
    {
      icon: Droplets,
      title: "Riego de Precisión en Almería",
      sector: "Horticultura intensiva",
      challenge: "Consumo excesivo de agua en invernaderos, costes energéticos elevados",
      solution: "Sensores de humedad + evapotranspiración + control automatizado de riego",
      results: [
        { metric: "Ahorro de agua", value: "35%" },
        { metric: "Reducción energía", value: "28%" },
        { metric: "ROI", value: "14 meses" },
      ],
      quote: "Antes regábamos por intuición. Ahora sabemos exactamente cuándo y cuánto necesita cada sector.",
    },
    {
      icon: Beef,
      title: "Ganadería Extensiva en Extremadura",
      sector: "Vacuno de carne",
      challenge: "Control de 500 cabezas en 2.000 hectáreas de dehesa, detección de partos",
      solution: "Collares GPS + sensores de actividad + alertas de comportamiento anómalo",
      results: [
        { metric: "Mortalidad neonatal", value: "-45%" },
        { metric: "Tiempo búsqueda", value: "-70%" },
        { metric: "Robos detectados", value: "100%" },
      ],
      quote: "Localizo cualquier animal en segundos. Las alertas de parto han salvado decenas de terneros.",
    },
    {
      icon: Wine,
      title: "Viticultura en La Rioja",
      sector: "Viñedos DOCa",
      challenge: "Optimizar calidad de uva, prevenir mildiu, decidir fecha óptima de vendimia",
      solution: "Estaciones microclimáticas + sensores de humedad foliar + modelo predictivo",
      results: [
        { metric: "Tratamientos fungicidas", value: "-40%" },
        { metric: "Puntuación vino", value: "+3 pts" },
        { metric: "Certificación ISO", value: "Lograda" },
      ],
      quote: "Los datos nos permiten tomar decisiones con ciencia, no solo con experiencia.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-green-900 mb-2">7. Casos de Uso Detallados</h2>
          <p className="text-muted-foreground mb-8">
            Ejemplos reales de implementación de TeleNatura Connect
          </p>

          <div className="space-y-8">
            {cases.map((useCase, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-br from-green-500 to-emerald-600 p-6 text-white flex flex-col justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                      <useCase.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{useCase.title}</h3>
                    <Badge variant="secondary" className="bg-white/20 text-white w-fit">
                      {useCase.sector}
                    </Badge>
                  </div>
                  <CardContent className="md:w-2/3 p-6">
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-medium text-slate-500">Desafío</p>
                        <p className="text-slate-700">{useCase.challenge}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-500">Solución</p>
                        <p className="text-slate-700">{useCase.solution}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-500 mb-2">Resultados</p>
                        <div className="flex flex-wrap gap-3">
                          {useCase.results.map((result, i) => (
                            <div key={i} className="bg-green-50 rounded-lg px-3 py-2 text-center">
                              <p className="text-lg font-bold text-green-700">{result.value}</p>
                              <p className="text-xs text-green-600">{result.metric}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <blockquote className="border-l-4 border-green-500 pl-4 italic text-slate-600">
                        "{useCase.quote}"
                      </blockquote>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesDetail;

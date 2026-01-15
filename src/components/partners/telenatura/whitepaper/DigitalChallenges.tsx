import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wifi, Lightbulb, GraduationCap, Coins, Database, Shield } from "lucide-react";

const DigitalChallenges = () => {
  const challenges = [
    {
      icon: Wifi,
      title: "Conectividad Rural",
      description: "El 20% de zonas rurales en España carece de cobertura 4G adecuada",
      solution: "Redes LoRaWAN, conectividad satelital LEO",
      progress: 35,
    },
    {
      icon: Lightbulb,
      title: "Adopción Tecnológica",
      description: "Solo el 15% de explotaciones usa tecnología de precisión",
      solution: "Soluciones plug-and-play, formación en finca",
      progress: 15,
    },
    {
      icon: GraduationCap,
      title: "Brecha de Conocimiento",
      description: "Edad media del agricultor 62 años, baja digitalización",
      solution: "Interfaces intuitivas, soporte continuo",
      progress: 25,
    },
    {
      icon: Coins,
      title: "Coste de Inversión",
      description: "ROI no claro, financiación limitada para pequeños",
      solution: "Modelos SaaS, subvenciones digitales",
      progress: 40,
    },
    {
      icon: Database,
      title: "Interoperabilidad",
      description: "Sistemas aislados, datos no compartibles",
      solution: "Estándares Gaia-X, APIs abiertas",
      progress: 20,
    },
    {
      icon: Shield,
      title: "Seguridad de Datos",
      description: "Preocupación por privacidad y propiedad de datos",
      solution: "Soberanía de datos, cifrado E2E",
      progress: 30,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-green-900 mb-2">3. Retos de la Digitalización</h2>
          <p className="text-muted-foreground mb-8">
            Barreras que frenan la adopción de tecnología en el campo
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {challenges.map((challenge, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                      <challenge.icon className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-slate-900">{challenge.title}</h3>
                      <p className="text-sm text-muted-foreground">{challenge.description}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-500">Nivel de resolución actual</span>
                      <span className="font-medium">{challenge.progress}%</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full transition-all"
                        style={{ width: `${challenge.progress}%` }}
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">
                      Solución TeleNatura
                    </Badge>
                    <span className="text-xs text-muted-foreground">{challenge.solution}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-8 bg-amber-50 border-amber-200">
            <CardContent className="p-6">
              <h4 className="font-semibold text-amber-900 mb-3">💡 Insight Clave</h4>
              <p className="text-amber-800">
                La digitalización del agro no es un problema tecnológico, es un problema de 
                <strong> adopción y confianza</strong>. La tecnología existe; el reto está en hacerla 
                accesible, comprensible y demostrar valor tangible para el agricultor.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DigitalChallenges;

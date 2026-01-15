import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, TrendingDown, AlertTriangle } from "lucide-react";

const SectorContext = () => {
  const spanishStats = [
    { label: "Superficie agrícola útil", value: "23.5M ha", icon: MapPin },
    { label: "Explotaciones agrarias", value: "890,000", icon: Users },
    { label: "Edad media agricultor", value: "62 años", icon: TrendingDown },
    { label: "Sin relevo generacional", value: "68%", icon: AlertTriangle },
  ];

  const challenges = [
    {
      title: "Cambio climático",
      description: "Sequías más frecuentes, eventos extremos, nuevas plagas",
      impact: "Pérdidas de hasta 30% en cosechas",
    },
    {
      title: "Escasez de agua",
      description: "El 70% del agua en España se destina a agricultura",
      impact: "Restricciones crecientes en cuencas",
    },
    {
      title: "Despoblación rural",
      description: "Éxodo hacia ciudades, envejecimiento población",
      impact: "83% municipios rurales en riesgo",
    },
    {
      title: "Presión regulatoria",
      description: "PAC, Farm to Fork, taxonomía verde",
      impact: "Mayores costes de cumplimiento",
    },
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-green-900 mb-2">2. Contexto del Sector Agrario</h2>
          <p className="text-muted-foreground mb-8">
            Análisis de la situación actual en España y Europa
          </p>

          {/* Spanish Agriculture Stats */}
          <h3 className="text-xl font-semibold text-green-800 mb-4">2.1 Agricultura en España</h3>
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            {spanishStats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-4">
                  <stat.icon className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-green-900">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* EU Context */}
          <h3 className="text-xl font-semibold text-green-800 mb-4">2.2 Marco Europeo</h3>
          <Card className="mb-12">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <Badge className="bg-blue-600 mb-2">PAC 2023-2027</Badge>
                  <h4 className="font-semibold mb-2">Nueva Política Agrícola Común</h4>
                  <p className="text-sm text-muted-foreground">
                    Mayor condicionalidad, eco-esquemas obligatorios, 
                    25% del presupuesto para prácticas verdes.
                  </p>
                </div>
                <div>
                  <Badge className="bg-green-600 mb-2">Farm to Fork</Badge>
                  <h4 className="font-semibold mb-2">Estrategia de la Granja a la Mesa</h4>
                  <p className="text-sm text-muted-foreground">
                    Reducción 50% pesticidas, 20% fertilizantes, 
                    25% agricultura ecológica para 2030.
                  </p>
                </div>
                <div>
                  <Badge className="bg-emerald-600 mb-2">Green Deal</Badge>
                  <h4 className="font-semibold mb-2">Pacto Verde Europeo</h4>
                  <p className="text-sm text-muted-foreground">
                    Neutralidad climática 2050, agricultura como 
                    sector clave para captura de carbono.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Challenges */}
          <h3 className="text-xl font-semibold text-green-800 mb-4">2.3 Principales Desafíos</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {challenges.map((challenge, index) => (
              <Card key={index} className="border-l-4 border-amber-400">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-slate-900 mb-1">{challenge.title}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{challenge.description}</p>
                  <Badge variant="outline" className="text-xs bg-amber-50 text-amber-700 border-amber-200">
                    {challenge.impact}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectorContext;

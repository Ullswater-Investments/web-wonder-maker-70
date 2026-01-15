import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, CheckCircle, Clock, Circle } from "lucide-react";

const Roadmap2025 = () => {
  const milestones = [
    {
      quarter: "Q1 2025",
      status: "completed",
      title: "Consolidación Plataforma",
      items: [
        "Lanzamiento versión 2.0 del dashboard",
        "Integración completa con Pontus-X",
        "Certificación LoRaWAN 1.0.4",
        "Expansión a Portugal",
      ],
    },
    {
      quarter: "Q2 2025",
      status: "in-progress",
      title: "IA y Predicción",
      items: [
        "Modelo predictivo de riego v2",
        "Detección automática de plagas",
        "Asistente de voz en app móvil",
        "Integración con drones",
      ],
    },
    {
      quarter: "Q3 2025",
      status: "planned",
      title: "Escalado y Partnerships",
      items: [
        "1.000 explotaciones conectadas",
        "Acuerdos con cooperativas nacionales",
        "Lanzamiento marketplace de datos",
        "Certificación ISO 27001",
      ],
    },
    {
      quarter: "Q4 2025",
      status: "planned",
      title: "Expansión Europea",
      items: [
        "Entrada en Francia e Italia",
        "Integración con AgriDataSpace",
        "Programa de créditos de carbono",
        "Serie A de financiación",
      ],
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case "in-progress":
        return <Clock className="h-5 w-5 text-amber-600" />;
      default:
        return <Circle className="h-5 w-5 text-slate-400" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-600">Completado</Badge>;
      case "in-progress":
        return <Badge className="bg-amber-500">En curso</Badge>;
      default:
        return <Badge variant="outline">Planificado</Badge>;
    }
  };

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <Calendar className="h-8 w-8 text-green-600" />
            <h2 className="text-3xl font-bold text-green-900">10. Hoja de Ruta 2025</h2>
          </div>
          <p className="text-muted-foreground mb-8">
            Evolución planificada de la plataforma TeleNatura Connect
          </p>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-green-200 hidden md:block" />

            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <Card key={index} className={`relative ${milestone.status === 'in-progress' ? 'ring-2 ring-amber-300' : ''}`}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Quarter indicator */}
                      <div className="flex items-center gap-4 md:w-48 flex-shrink-0">
                        <div className="w-16 h-16 rounded-full bg-white border-4 border-green-200 flex items-center justify-center z-10">
                          {getStatusIcon(milestone.status)}
                        </div>
                        <div className="md:hidden">
                          <h3 className="font-bold">{milestone.quarter}</h3>
                          {getStatusBadge(milestone.status)}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="hidden md:flex items-center gap-3 mb-4">
                          <h3 className="font-bold text-xl text-green-900">{milestone.quarter}</h3>
                          {getStatusBadge(milestone.status)}
                        </div>
                        <h4 className="font-semibold text-lg text-slate-800 mb-3">{milestone.title}</h4>
                        <ul className="grid md:grid-cols-2 gap-2">
                          {milestone.items.map((item, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                              <div className={`w-2 h-2 rounded-full ${
                                milestone.status === 'completed' ? 'bg-green-500' :
                                milestone.status === 'in-progress' ? 'bg-amber-500' : 'bg-slate-300'
                              }`} />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Vision 2030 */}
          <Card className="mt-12 bg-gradient-to-r from-green-900 to-emerald-900 text-white">
            <CardContent className="p-8 text-center">
              <h4 className="text-2xl font-bold mb-4">Visión 2030</h4>
              <p className="text-xl text-green-100 max-w-3xl mx-auto">
                "Ser la plataforma de referencia en agricultura digital en el sur de Europa, 
                con 50.000 explotaciones conectadas y un impacto medible en la reducción de 
                emisiones del sector agrario."
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <Badge variant="secondary" className="bg-white/20 text-white py-2 px-4">
                  50K Fincas Conectadas
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white py-2 px-4">
                  5 Países
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white py-2 px-4">
                  500K tCO2 Evitadas
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Roadmap2025;

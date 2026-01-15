import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Circle, MapPin, Wrench, Wifi, BarChart } from "lucide-react";

const DocInstalacion = () => {
  const phases = [
    {
      number: 1,
      title: "Estudio Previo",
      duration: "1-2 semanas",
      icon: MapPin,
      tasks: [
        "Visita técnica a la explotación",
        "Análisis de necesidades",
        "Estudio de cobertura (LoRa/4G)",
        "Diseño de la solución",
        "Presupuesto detallado",
      ],
      deliverable: "Proyecto técnico",
    },
    {
      number: 2,
      title: "Instalación Hardware",
      duration: "1-3 días",
      icon: Wrench,
      tasks: [
        "Instalación de sensores",
        "Montaje de estaciones",
        "Despliegue de gateways",
        "Cableado y alimentación",
        "Verificación física",
      ],
      deliverable: "Hardware operativo",
    },
    {
      number: 3,
      title: "Configuración",
      duration: "1-2 días",
      icon: Wifi,
      tasks: [
        "Provisioning de dispositivos",
        "Configuración de red",
        "Integración con plataforma",
        "Calibración de sensores",
        "Test de conectividad",
      ],
      deliverable: "Sistema conectado",
    },
    {
      number: 4,
      title: "Puesta en Marcha",
      duration: "1 semana",
      icon: BarChart,
      tasks: [
        "Formación de usuarios",
        "Configuración de alertas",
        "Ajuste de umbrales",
        "Validación de datos",
        "Documentación entregada",
      ],
      deliverable: "Sistema productivo",
    },
  ];

  const requirements = [
    {
      category: "Ubicación",
      items: ["Acceso a la finca", "Puntos de instalación definidos", "Permisos si aplica"],
    },
    {
      category: "Energía",
      items: ["Toma eléctrica (opcional)", "Exposición solar para paneles", "Batería de respaldo incluida"],
    },
    {
      category: "Conectividad",
      items: ["Cobertura 4G o LoRa", "WiFi local (opcional)", "Conexión a internet en finca (opcional)"],
    },
    {
      category: "Datos",
      items: ["Planos de parcelas (CAD/GIS)", "Tipos de cultivo", "Histórico de consumos (si existe)"],
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-emerald-900 mb-2">9. Proceso de Instalación</h2>
          <p className="text-muted-foreground mb-8">
            Metodología de despliegue estructurada en 4 fases
          </p>

          {/* Timeline */}
          <div className="relative mb-12">
            {/* Connector Line */}
            <div className="absolute left-8 top-12 bottom-12 w-0.5 bg-emerald-200 hidden md:block" />
            
            <div className="space-y-6">
              {phases.map((phase, index) => (
                <Card key={index} className="relative">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Phase Number */}
                      <div className="flex items-center gap-4 md:w-48 flex-shrink-0">
                        <div className="w-16 h-16 rounded-full bg-emerald-600 text-white flex items-center justify-center text-2xl font-bold z-10">
                          {phase.number}
                        </div>
                        <div className="md:hidden">
                          <h3 className="font-semibold">{phase.title}</h3>
                          <Badge variant="outline">{phase.duration}</Badge>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <div className="hidden md:flex items-center gap-3 mb-4">
                          <phase.icon className="h-5 w-5 text-emerald-600" />
                          <h3 className="font-semibold text-lg">{phase.title}</h3>
                          <Badge variant="outline">{phase.duration}</Badge>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-xs font-medium text-slate-500 mb-2">Tareas:</p>
                            <ul className="space-y-1">
                              {phase.tasks.map((task, i) => (
                                <li key={i} className="text-sm text-slate-600 flex items-center gap-2">
                                  <Circle className="h-2 w-2 text-emerald-500" />
                                  {task}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="flex items-end">
                            <div className="bg-emerald-50 rounded-lg p-3 w-full">
                              <p className="text-xs text-emerald-600 font-medium">Entregable</p>
                              <p className="text-sm font-semibold text-emerald-800">{phase.deliverable}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Requirements */}
          <h3 className="text-xl font-semibold text-emerald-800 mb-4">Requisitos Previos</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {requirements.map((req, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <h4 className="font-semibold text-sm text-emerald-900 mb-3">{req.category}</h4>
                  <ul className="space-y-2">
                    {req.items.map((item, i) => (
                      <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                        <CheckCircle className="h-3 w-3 text-emerald-500 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Timeline Summary */}
          <Card className="mt-8 bg-emerald-50 border-emerald-200">
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="font-semibold text-emerald-900">Tiempo total estimado</p>
                <p className="text-sm text-emerald-700">Desde estudio inicial hasta sistema productivo</p>
              </div>
              <Badge className="bg-emerald-600 text-lg px-4 py-2">3-4 semanas</Badge>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DocInstalacion;

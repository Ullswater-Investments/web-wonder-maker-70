import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Layers, ArrowRight, Cloud, Database, Smartphone, Radio } from "lucide-react";

const SystemArchitecture = () => {
  const layers = [
    {
      name: "Dispositivos IoT",
      icon: Radio,
      color: "bg-amber-500",
      items: ["Sensores", "Estaciones", "Actuadores"],
    },
    {
      name: "Conectividad",
      icon: Layers,
      color: "bg-blue-500",
      items: ["LoRaWAN", "4G/5G", "Satélite"],
    },
    {
      name: "Edge Computing",
      icon: Database,
      color: "bg-purple-500",
      items: ["Gateways", "Preproceso", "Caché"],
    },
    {
      name: "Cloud Platform",
      icon: Cloud,
      color: "bg-green-500",
      items: ["Microservicios", "IA/ML", "APIs"],
    },
    {
      name: "Aplicaciones",
      icon: Smartphone,
      color: "bg-teal-500",
      items: ["Dashboard", "App móvil", "Alertas"],
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-green-900 mb-2">5. Arquitectura del Ecosistema</h2>
          <p className="text-muted-foreground mb-8">
            Diseño técnico de la plataforma TeleNatura Connect
          </p>

          {/* Architecture Flow */}
          <Card className="mb-8 bg-slate-50">
            <CardContent className="p-8">
              <div className="flex flex-wrap items-center justify-center gap-4">
                {layers.map((layer, index) => (
                  <div key={index} className="flex items-center">
                    <div className="text-center">
                      <div className={`w-16 h-16 ${layer.color} rounded-xl flex items-center justify-center mx-auto mb-2`}>
                        <layer.icon className="h-8 w-8 text-white" />
                      </div>
                      <p className="text-sm font-medium text-slate-900">{layer.name}</p>
                      <div className="flex flex-wrap justify-center gap-1 mt-2 max-w-[120px]">
                        {layer.items.map((item, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    {index < layers.length - 1 && (
                      <ArrowRight className="h-6 w-6 text-slate-300 mx-2 hidden md:block" />
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Key Components */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold text-green-900 mb-4">Principios de Diseño</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
                    <div>
                      <p className="font-medium">Escalabilidad horizontal</p>
                      <p className="text-sm text-muted-foreground">De 1 a 100.000 sensores sin cambios</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
                    <div>
                      <p className="font-medium">Alta disponibilidad</p>
                      <p className="text-sm text-muted-foreground">SLA 99.9%, multi-región activo-activo</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
                    <div>
                      <p className="font-medium">Seguridad por diseño</p>
                      <p className="text-sm text-muted-foreground">Zero-trust, cifrado E2E, auditoría completa</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold text-green-900 mb-4">Tecnologías Clave</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Base de datos</span>
                    <Badge variant="secondary">TimescaleDB</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Mensajería IoT</span>
                    <Badge variant="secondary">MQTT + Kafka</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Orquestación</span>
                    <Badge variant="secondary">Kubernetes</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Machine Learning</span>
                    <Badge variant="secondary">TensorFlow</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Frontend</span>
                    <Badge variant="secondary">React + React Native</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemArchitecture;

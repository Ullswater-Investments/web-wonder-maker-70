import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Layers, Cloud, Server, Database, Shield, Cpu } from "lucide-react";

const DocArquitectura = () => {
  const layers = [
    {
      name: "Capa de Percepción",
      icon: Cpu,
      color: "bg-amber-500",
      components: ["Sensores IoT", "Estaciones meteorológicas", "Actuadores", "Nodos de campo"],
      description: "Dispositivos físicos que capturan datos del entorno agrario",
    },
    {
      name: "Capa de Red",
      icon: Layers,
      color: "bg-blue-500",
      components: ["LoRaWAN Gateways", "Routers 4G", "Mesh WiFi", "Concentradores"],
      description: "Infraestructura de comunicaciones para transmisión de datos",
    },
    {
      name: "Capa Edge",
      icon: Server,
      color: "bg-purple-500",
      components: ["Edge Computing", "Preprocesamiento", "Caché local", "Filtrado datos"],
      description: "Procesamiento local para reducir latencia y ancho de banda",
    },
    {
      name: "Capa Cloud",
      icon: Cloud,
      color: "bg-emerald-500",
      components: ["Kubernetes", "Microservicios", "API Gateway", "Load Balancer"],
      description: "Infraestructura cloud escalable y resiliente",
    },
    {
      name: "Capa de Datos",
      icon: Database,
      color: "bg-teal-500",
      components: ["TimescaleDB", "Redis", "S3 Storage", "Data Lake"],
      description: "Almacenamiento y gestión de datos a gran escala",
    },
    {
      name: "Capa de Seguridad",
      icon: Shield,
      color: "bg-red-500",
      components: ["mTLS", "OAuth 2.0", "Vault", "WAF"],
      description: "Seguridad transversal en todas las capas",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-emerald-900 mb-2">5. Arquitectura del Sistema</h2>
          <p className="text-muted-foreground mb-8">
            Diseño en capas para máxima escalabilidad, resiliencia y seguridad
          </p>

          {/* Architecture Diagram */}
          <Card className="mb-8 bg-gradient-to-br from-slate-50 to-slate-100">
            <CardContent className="p-8">
              <div className="flex flex-col gap-4">
                {layers.map((layer, index) => (
                  <div key={index} className="relative">
                    <div className={`flex items-center gap-4 p-4 rounded-lg bg-white shadow-sm border-l-4`} style={{ borderColor: layer.color.replace('bg-', 'var(--') }}>
                      <div className={`w-12 h-12 rounded-lg ${layer.color} flex items-center justify-center flex-shrink-0`}>
                        <layer.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-slate-900">{layer.name}</h3>
                        <p className="text-sm text-muted-foreground">{layer.description}</p>
                      </div>
                      <div className="flex flex-wrap gap-1 justify-end max-w-xs">
                        {layer.components.map((comp, i) => (
                          <Badge key={i} variant="outline" className="text-xs whitespace-nowrap">
                            {comp}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    {index < layers.length - 1 && (
                      <div className="flex justify-center my-2">
                        <div className="w-0.5 h-4 bg-slate-300" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Key Design Decisions */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-emerald-200">
              <CardContent className="p-6">
                <h4 className="font-semibold text-emerald-900 mb-4">Decisiones de Diseño</h4>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-1.5 flex-shrink-0" />
                    <span><strong>Microservicios:</strong> Arquitectura desacoplada para escalado independiente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-1.5 flex-shrink-0" />
                    <span><strong>Event-Driven:</strong> Comunicación asíncrona mediante Apache Kafka</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-1.5 flex-shrink-0" />
                    <span><strong>Zero Trust:</strong> Autenticación y autorización en cada capa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-1.5 flex-shrink-0" />
                    <span><strong>Multi-región:</strong> Despliegue activo-activo para alta disponibilidad</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-teal-200">
              <CardContent className="p-6">
                <h4 className="font-semibold text-teal-900 mb-4">Métricas de Rendimiento</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Disponibilidad (SLA)</span>
                      <span className="font-medium">99.9%</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-teal-500 rounded-full" style={{ width: '99.9%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Latencia P99</span>
                      <span className="font-medium">&lt; 200ms</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full" style={{ width: '80%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Throughput</span>
                      <span className="font-medium">10K msg/s</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-500 rounded-full" style={{ width: '70%' }} />
                    </div>
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

export default DocArquitectura;

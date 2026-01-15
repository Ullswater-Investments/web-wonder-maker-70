import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Shield, Link2, FileJson, Lock, CheckCircle } from "lucide-react";

const DocIntegracion = () => {
  const integrations = [
    {
      name: "Pontus-X",
      logo: "🌊",
      description: "Marketplace descentralizado para intercambio de datos agrarios",
      features: ["Catálogo de datos", "Smart contracts", "Tokenización", "Trazabilidad"],
      status: "Integrado",
    },
    {
      name: "Gaia-X",
      logo: "🇪🇺",
      description: "Infraestructura de datos federada europea",
      features: ["Self-descriptions", "Trust Framework", "Identidad digital", "Soberanía de datos"],
      status: "Compatible",
    },
    {
      name: "FIWARE",
      logo: "🔷",
      description: "Componentes open source para smart agriculture",
      features: ["Context Broker", "NGSI-LD", "IoT Agents", "Histórico de datos"],
      status: "Integrado",
    },
    {
      name: "AgGateway",
      logo: "🌾",
      description: "Estándares de interoperabilidad agrícola",
      features: ["ADAPT", "MICS", "Field Operations", "Precision Ag"],
      status: "Planificado",
    },
  ];

  const dataFlows = [
    {
      from: "Sensores TeleNatura",
      to: "Plataforma Central",
      protocol: "MQTT",
      format: "JSON",
      encryption: "TLS 1.3",
    },
    {
      from: "Plataforma Central",
      to: "Pontus-X Connector",
      protocol: "HTTPS",
      format: "JSON-LD",
      encryption: "mTLS",
    },
    {
      from: "Pontus-X Connector",
      to: "Data Space",
      protocol: "IDS-CP",
      format: "ODRL",
      encryption: "End-to-end",
    },
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-emerald-900 mb-2">6. Integración con Data Spaces</h2>
          <p className="text-muted-foreground mb-8">
            Conexión con el ecosistema europeo de datos para agricultura digital
          </p>

          {/* Integrations Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {integrations.map((integration, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{integration.logo}</span>
                      <div>
                        <h3 className="font-semibold text-lg">{integration.name}</h3>
                        <Badge 
                          variant={integration.status === "Integrado" ? "default" : "outline"}
                          className={integration.status === "Integrado" ? "bg-emerald-600" : ""}
                        >
                          {integration.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{integration.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {integration.features.map((feature, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Data Flow */}
          <h3 className="text-xl font-semibold text-emerald-800 mb-4">Flujo de Datos</h3>
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="space-y-4">
                {dataFlows.map((flow, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 p-3 bg-emerald-50 rounded-lg">
                        <Globe className="h-4 w-4 text-emerald-600" />
                        <span className="text-sm font-medium">{flow.from}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-1 min-w-[120px]">
                      <Link2 className="h-4 w-4 text-slate-400" />
                      <div className="flex gap-1">
                        <Badge variant="outline" className="text-xs">{flow.protocol}</Badge>
                        <Badge variant="outline" className="text-xs">{flow.format}</Badge>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Lock className="h-3 w-3" />
                        {flow.encryption}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 p-3 bg-teal-50 rounded-lg">
                        <Shield className="h-4 w-4 text-teal-600" />
                        <span className="text-sm font-medium">{flow.to}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* IDS Connector */}
          <Card className="bg-gradient-to-r from-emerald-800 to-teal-800 text-white">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                  <FileJson className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-2">IDS Connector - TeleNatura</h4>
                  <p className="text-emerald-100 text-sm mb-4">
                    Conector certificado International Data Spaces para intercambio soberano de datos agrarios.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white/10 rounded-lg p-3">
                      <CheckCircle className="h-4 w-4 text-emerald-400 mb-1" />
                      <p className="text-xs text-emerald-200">Certificación IDS</p>
                      <p className="text-sm font-medium">Base Level</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <CheckCircle className="h-4 w-4 text-emerald-400 mb-1" />
                      <p className="text-xs text-emerald-200">Políticas ODRL</p>
                      <p className="text-sm font-medium">Automatizadas</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <CheckCircle className="h-4 w-4 text-emerald-400 mb-1" />
                      <p className="text-xs text-emerald-200">Audit Trail</p>
                      <p className="text-sm font-medium">Completo</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DocIntegracion;

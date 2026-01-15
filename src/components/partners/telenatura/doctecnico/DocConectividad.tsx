import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Radio, Wifi, Satellite, Signal } from "lucide-react";

const DocConectividad = () => {
  const protocols = [
    {
      icon: Radio,
      name: "LoRaWAN",
      description: "Red de área amplia de bajo consumo para sensores distribuidos",
      specs: [
        { label: "Frecuencia", value: "868 MHz (EU)" },
        { label: "Alcance", value: "Hasta 15 km (rural)" },
        { label: "Consumo", value: "<50 mA TX" },
        { label: "Velocidad", value: "0.3 - 50 kbps" },
      ],
      use: "Sensores de campo, nodos IoT",
      color: "bg-purple-500",
    },
    {
      icon: Signal,
      name: "4G LTE-M / NB-IoT",
      description: "Conectividad celular optimizada para IoT",
      specs: [
        { label: "Cobertura", value: "Nacional" },
        { label: "Latencia", value: "<100 ms" },
        { label: "Consumo", value: "Modo PSM" },
        { label: "Velocidad", value: "Hasta 1 Mbps" },
      ],
      use: "Gateways, estaciones principales",
      color: "bg-blue-500",
    },
    {
      icon: Satellite,
      name: "Satelital",
      description: "Comunicación vía satélite para zonas sin cobertura",
      specs: [
        { label: "Tipo", value: "LEO (Starlink/Iridium)" },
        { label: "Disponibilidad", value: "99.9%" },
        { label: "Latencia", value: "<50 ms" },
        { label: "Velocidad", value: "Hasta 100 Mbps" },
      ],
      use: "Zonas remotas, backup",
      color: "bg-indigo-500",
    },
    {
      icon: Wifi,
      name: "WiFi HaLow (802.11ah)",
      description: "WiFi de largo alcance y bajo consumo",
      specs: [
        { label: "Frecuencia", value: "900 MHz" },
        { label: "Alcance", value: "Hasta 1 km" },
        { label: "Consumo", value: "Bajo" },
        { label: "Velocidad", value: "Hasta 8.67 Mbps" },
      ],
      use: "Conectividad local, invernaderos",
      color: "bg-teal-500",
    },
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-emerald-900 mb-2">4. Conectividad</h2>
          <p className="text-muted-foreground mb-8">
            Arquitectura de comunicaciones híbrida para cobertura rural completa
          </p>

          {/* Protocols Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {protocols.map((protocol, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className={`h-2 ${protocol.color}`} />
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-lg ${protocol.color} flex items-center justify-center`}>
                      <protocol.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{protocol.name}</h3>
                      <Badge variant="outline" className="text-xs">{protocol.use}</Badge>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4">{protocol.description}</p>
                  
                  <div className="grid grid-cols-2 gap-2">
                    {protocol.specs.map((spec, i) => (
                      <div key={i} className="bg-slate-50 rounded p-2">
                        <p className="text-xs text-slate-500">{spec.label}</p>
                        <p className="text-sm font-medium text-slate-700">{spec.value}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* MQTT Protocol */}
          <Card className="bg-emerald-900 text-white">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Protocolo MQTT - Mensajería IoT</h3>
              <p className="text-emerald-100 mb-6">
                Protocolo ligero de mensajería publish/subscribe optimizado para IoT. 
                Utilizado para la comunicación entre dispositivos y la plataforma central.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-emerald-800/50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Broker</h4>
                  <p className="text-sm text-emerald-200">Eclipse Mosquitto v2.0</p>
                  <p className="text-xs text-emerald-300 mt-1">TLS 1.3, Auth por certificado</p>
                </div>
                <div className="bg-emerald-800/50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Topics</h4>
                  <code className="text-xs text-emerald-200 block">telenatura/+/sensors/+/data</code>
                  <code className="text-xs text-emerald-200 block">telenatura/+/alerts</code>
                </div>
                <div className="bg-emerald-800/50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">QoS</h4>
                  <p className="text-sm text-emerald-200">Nivel 1 (At least once)</p>
                  <p className="text-xs text-emerald-300 mt-1">Retención activada para último valor</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DocConectividad;

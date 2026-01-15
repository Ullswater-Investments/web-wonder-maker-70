import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Thermometer, Droplets, Wind, Sun, Activity, Radio } from "lucide-react";

const DocHardware = () => {
  const sensors = [
    {
      icon: Thermometer,
      name: "Sensor de Temperatura",
      model: "TN-TEMP-01",
      specs: ["Rango: -40°C a +85°C", "Precisión: ±0.3°C", "Respuesta: <1s"],
      color: "text-red-500",
      bgColor: "bg-red-50",
    },
    {
      icon: Droplets,
      name: "Sensor de Humedad de Suelo",
      model: "TN-SOIL-02",
      specs: ["Rango: 0-100% VWC", "Precisión: ±2%", "Profundidad: 10-60cm"],
      color: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: Wind,
      name: "Anemómetro",
      model: "TN-WIND-03",
      specs: ["Rango: 0-60 m/s", "Resolución: 0.1 m/s", "Umbral: 0.4 m/s"],
      color: "text-cyan-500",
      bgColor: "bg-cyan-50",
    },
    {
      icon: Sun,
      name: "Piranómetro",
      model: "TN-RAD-04",
      specs: ["Rango: 0-2000 W/m²", "Sensibilidad: 10 µV/W/m²", "Tiempo respuesta: <18s"],
      color: "text-yellow-500",
      bgColor: "bg-yellow-50",
    },
    {
      icon: Droplets,
      name: "Pluviómetro",
      model: "TN-RAIN-05",
      specs: ["Resolución: 0.2mm", "Área colector: 200cm²", "Material: Acero inox"],
      color: "text-indigo-500",
      bgColor: "bg-indigo-50",
    },
    {
      icon: Activity,
      name: "Sensor pH/EC",
      model: "TN-PHEC-06",
      specs: ["pH: 0-14", "EC: 0-20 mS/cm", "Temp compensada"],
      color: "text-purple-500",
      bgColor: "bg-purple-50",
    },
  ];

  const stations = [
    {
      name: "Estación Meteorológica Compacta",
      model: "TN-METEO-100",
      description: "Estación all-in-one para monitorización climática completa",
      features: ["7 sensores integrados", "Panel solar 10W", "Batería 20Ah", "LoRa + 4G"],
    },
    {
      name: "Nodo de Campo IoT",
      model: "TN-NODE-200",
      description: "Nodo modular para despliegue distribuido de sensores",
      features: ["Hasta 8 sensores", "IP67", "Autonomía 2 años", "LoRaWAN Clase A"],
    },
    {
      name: "Gateway Rural",
      model: "TN-GW-300",
      description: "Concentrador de datos con conectividad híbrida",
      features: ["LoRa + WiFi + 4G", "Edge computing", "Almacenamiento local", "Alimentación híbrida"],
    },
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-emerald-900 mb-2">2. Catálogo de Hardware</h2>
          <p className="text-muted-foreground mb-8">
            Dispositivos y sensores certificados para agricultura de precisión
          </p>

          {/* Sensors Grid */}
          <h3 className="text-xl font-semibold text-emerald-800 mb-4">2.1 Sensores</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {sensors.map((sensor, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div className={`w-10 h-10 rounded-lg ${sensor.bgColor} flex items-center justify-center`}>
                      <sensor.icon className={`h-5 w-5 ${sensor.color}`} />
                    </div>
                    <Badge variant="outline" className="text-xs">{sensor.model}</Badge>
                  </div>
                  <CardTitle className="text-base mt-2">{sensor.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1">
                    {sensor.specs.map((spec, i) => (
                      <li key={i} className="text-xs text-muted-foreground flex items-center gap-2">
                        <div className="w-1 h-1 bg-emerald-500 rounded-full" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stations */}
          <h3 className="text-xl font-semibold text-emerald-800 mb-4">2.2 Estaciones y Nodos</h3>
          <div className="space-y-4">
            {stations.map((station, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                        <Radio className="h-6 w-6 text-emerald-600" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-emerald-900">{station.name}</h4>
                          <Badge variant="secondary" className="text-xs">{station.model}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{station.description}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 md:justify-end">
                      {station.features.map((feature, i) => (
                        <Badge key={i} variant="outline" className="text-xs bg-white">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Technical Note */}
          <Card className="mt-8 border-amber-200 bg-amber-50">
            <CardContent className="p-4">
              <p className="text-sm text-amber-800">
                <strong>Nota:</strong> Todos los dispositivos cumplen con las normativas CE, IP67, y están 
                diseñados para operar en condiciones extremas de campo (-20°C a +60°C, humedad 0-100%).
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DocHardware;

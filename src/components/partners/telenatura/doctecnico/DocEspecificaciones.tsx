import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, Database, Shield, Gauge } from "lucide-react";

const DocEspecificaciones = () => {
  const hardwareSpecs = [
    { param: "Rango temperatura operativa", value: "-20°C a +60°C" },
    { param: "Protección ambiental", value: "IP67" },
    { param: "Alimentación", value: "5-24V DC / Solar" },
    { param: "Autonomía batería", value: "Hasta 5 años" },
    { param: "Frecuencia transmisión", value: "868 MHz (EU)" },
    { param: "Potencia transmisión", value: "14 dBm (25 mW)" },
    { param: "Sensibilidad receptor", value: "-137 dBm" },
    { param: "Alcance máximo", value: "15 km (LOS)" },
  ];

  const softwareSpecs = [
    { param: "Base de datos", value: "TimescaleDB 2.x" },
    { param: "Retención datos raw", value: "90 días" },
    { param: "Retención agregados", value: "10 años" },
    { param: "API Rate limit", value: "1000 req/min" },
    { param: "Latencia P99", value: "< 200 ms" },
    { param: "Disponibilidad", value: "99.9% SLA" },
    { param: "Backup", value: "Diario incremental" },
    { param: "Cifrado", value: "AES-256-GCM" },
  ];

  const sensorAccuracy = [
    { sensor: "Temperatura aire", accuracy: "±0.3°C", resolution: "0.01°C", range: "-40 a +85°C" },
    { sensor: "Humedad aire", accuracy: "±2% RH", resolution: "0.1%", range: "0-100% RH" },
    { sensor: "Humedad suelo", accuracy: "±2% VWC", resolution: "0.1%", range: "0-100% VWC" },
    { sensor: "Presión", accuracy: "±1 hPa", resolution: "0.1 hPa", range: "300-1100 hPa" },
    { sensor: "Radiación solar", accuracy: "±5%", resolution: "1 W/m²", range: "0-2000 W/m²" },
    { sensor: "Velocidad viento", accuracy: "±0.5 m/s", resolution: "0.1 m/s", range: "0-60 m/s" },
    { sensor: "Precipitación", accuracy: "±2%", resolution: "0.2 mm", range: "0-999 mm/h" },
    { sensor: "pH suelo", accuracy: "±0.1 pH", resolution: "0.01 pH", range: "0-14 pH" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-emerald-900 mb-2">11. Especificaciones Técnicas</h2>
          <p className="text-muted-foreground mb-8">
            Especificaciones detalladas de hardware, software y precisión de sensores
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Hardware Specs */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cpu className="h-5 w-5 text-emerald-600" />
                  Especificaciones Hardware
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {hardwareSpecs.map((spec, index) => (
                    <div key={index} className="flex justify-between py-2 border-b border-slate-100 last:border-0">
                      <span className="text-sm text-muted-foreground">{spec.param}</span>
                      <span className="text-sm font-medium text-slate-900">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Software Specs */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5 text-teal-600" />
                  Especificaciones Software
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {softwareSpecs.map((spec, index) => (
                    <div key={index} className="flex justify-between py-2 border-b border-slate-100 last:border-0">
                      <span className="text-sm text-muted-foreground">{spec.param}</span>
                      <span className="text-sm font-medium text-slate-900">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sensor Accuracy Table */}
          <h3 className="text-xl font-semibold text-emerald-800 mb-4 flex items-center gap-2">
            <Gauge className="h-5 w-5" />
            Precisión de Sensores
          </h3>
          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="text-left p-4 text-sm font-semibold text-slate-700">Sensor</th>
                    <th className="text-left p-4 text-sm font-semibold text-slate-700">Precisión</th>
                    <th className="text-left p-4 text-sm font-semibold text-slate-700">Resolución</th>
                    <th className="text-left p-4 text-sm font-semibold text-slate-700">Rango</th>
                  </tr>
                </thead>
                <tbody>
                  {sensorAccuracy.map((sensor, index) => (
                    <tr key={index} className="border-t border-slate-100">
                      <td className="p-4 text-sm font-medium text-slate-900">{sensor.sensor}</td>
                      <td className="p-4">
                        <Badge variant="secondary" className="text-xs">{sensor.accuracy}</Badge>
                      </td>
                      <td className="p-4 text-sm text-muted-foreground">{sensor.resolution}</td>
                      <td className="p-4 text-sm text-muted-foreground">{sensor.range}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Compliance Badges */}
          <Card className="mt-8 bg-slate-50">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-5 w-5 text-emerald-600" />
                <h4 className="font-semibold">Normativas y Certificaciones</h4>
              </div>
              <div className="flex flex-wrap gap-3">
                <Badge variant="outline" className="py-2 px-4">CE</Badge>
                <Badge variant="outline" className="py-2 px-4">RoHS</Badge>
                <Badge variant="outline" className="py-2 px-4">WEEE</Badge>
                <Badge variant="outline" className="py-2 px-4">IP67</Badge>
                <Badge variant="outline" className="py-2 px-4">LoRaWAN 1.0.4</Badge>
                <Badge variant="outline" className="py-2 px-4">RED 2014/53/EU</Badge>
                <Badge variant="outline" className="py-2 px-4">EMC 2014/30/EU</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DocEspecificaciones;

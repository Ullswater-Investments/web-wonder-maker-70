import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Droplets, Wind, Recycle, Target, TreePine } from "lucide-react";

const SustainabilityImpact = () => {
  const sdgs = [
    { number: 2, name: "Hambre Cero", contribution: "Aumento de productividad agrícola" },
    { number: 6, name: "Agua Limpia", contribution: "Optimización del uso del agua" },
    { number: 12, name: "Producción Responsable", contribution: "Reducción de desperdicios e insumos" },
    { number: 13, name: "Acción Climática", contribution: "Reducción de emisiones GEI" },
    { number: 15, name: "Vida Terrestre", contribution: "Preservación de biodiversidad" },
  ];

  const metrics = [
    {
      icon: Droplets,
      title: "Huella Hídrica",
      current: "5.200 m³/ha",
      target: "3.400 m³/ha",
      reduction: "-35%",
      color: "text-blue-500",
    },
    {
      icon: Wind,
      title: "Emisiones CO2",
      current: "2.8 tCO2/ha",
      target: "1.9 tCO2/ha",
      reduction: "-32%",
      color: "text-slate-500",
    },
    {
      icon: Leaf,
      title: "Agroquímicos",
      current: "45 kg/ha",
      target: "30 kg/ha",
      reduction: "-33%",
      color: "text-green-500",
    },
    {
      icon: Recycle,
      title: "Eficiencia Fertilizantes",
      current: "55%",
      target: "80%",
      reduction: "+45%",
      color: "text-amber-500",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-green-900 mb-2">9. Impacto en Sostenibilidad</h2>
          <p className="text-muted-foreground mb-8">
            Contribución a los Objetivos de Desarrollo Sostenible
          </p>

          {/* SDGs */}
          <h3 className="text-xl font-semibold text-green-800 mb-4">Alineación con ODS</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
            {sdgs.map((sdg, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center mx-auto mb-2 text-lg font-bold">
                    {sdg.number}
                  </div>
                  <p className="font-semibold text-sm text-slate-900">{sdg.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">{sdg.contribution}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Environmental Metrics */}
          <h3 className="text-xl font-semibold text-green-800 mb-4">Métricas Ambientales</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {metrics.map((metric, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center">
                      <metric.icon className={`h-6 w-6 ${metric.color}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold">{metric.title}</h4>
                      <Badge variant="outline" className="text-xs bg-green-50 text-green-700">
                        {metric.reduction}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xs text-slate-500">Antes</p>
                      <p className="font-medium text-slate-700">{metric.current}</p>
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full w-3/4" />
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-slate-500">Objetivo</p>
                      <p className="font-medium text-green-600">{metric.target}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Carbon Credits */}
          <Card className="bg-gradient-to-r from-green-800 to-emerald-800 text-white">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <TreePine className="h-10 w-10" />
                <div>
                  <h4 className="font-bold text-xl">Créditos de Carbono</h4>
                  <p className="text-green-200">Nueva fuente de ingresos para agricultores</p>
                </div>
              </div>
              <p className="text-green-100 mb-4">
                TeleNatura permite certificar prácticas sostenibles y generar créditos de carbono 
                verificables según estándares internacionales (Verra, Gold Standard).
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white/10 rounded-lg p-3 text-center">
                  <p className="text-2xl font-bold">0.5-2</p>
                  <p className="text-sm text-green-200">tCO2/ha/año potencial</p>
                </div>
                <div className="bg-white/10 rounded-lg p-3 text-center">
                  <p className="text-2xl font-bold">€30-50</p>
                  <p className="text-sm text-green-200">Precio actual tCO2</p>
                </div>
                <div className="bg-white/10 rounded-lg p-3 text-center">
                  <p className="text-2xl font-bold">€50-100</p>
                  <p className="text-sm text-green-200">Ingresos extra/ha/año</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SustainabilityImpact;

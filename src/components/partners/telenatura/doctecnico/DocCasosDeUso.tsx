import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Droplets, Beef, Wine, Trees, Wheat, Citrus } from "lucide-react";

const DocCasosDeUso = () => {
  const useCases = [
    {
      icon: Droplets,
      title: "Riego Inteligente",
      sector: "Agricultura intensiva",
      description: "Sistema de riego automatizado basado en sensores de humedad del suelo, evapotranspiración y predicción meteorológica.",
      benefits: [
        "Ahorro de agua: 30-40%",
        "Reducción energía: 25%",
        "Aumento rendimiento: 15-20%",
      ],
      sensors: ["Humedad suelo", "Temperatura", "Pluviómetro", "ETo"],
      color: "bg-blue-50 border-blue-200",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: Beef,
      title: "Ganadería Extensiva",
      sector: "Ganadería",
      description: "Monitorización de pastizales y bienestar animal mediante sensores de localización y parámetros ambientales.",
      benefits: [
        "Control de pastoreo rotacional",
        "Alertas de estrés térmico",
        "Optimización de cargas",
      ],
      sensors: ["GPS collar", "Temperatura", "Actividad", "Humedad pasto"],
      color: "bg-amber-50 border-amber-200",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
    },
    {
      icon: Wine,
      title: "Viticultura de Precisión",
      sector: "Viñedos",
      description: "Gestión integral del viñedo con monitorización de microclima, estado hídrico y maduración de la uva.",
      benefits: [
        "Mejora calidad uva",
        "Prevención enfermedades",
        "Optimización vendimia",
      ],
      sensors: ["Dendrómetro", "Leaf wetness", "NDVI", "Brix sensor"],
      color: "bg-purple-50 border-purple-200",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      icon: Citrus,
      title: "Fruticultura",
      sector: "Cítricos y Frutales",
      description: "Control de heladas, gestión del riego deficitario controlado y monitorización de plagas.",
      benefits: [
        "Protección anti-helada",
        "RDC optimizado",
        "Detección temprana plagas",
      ],
      sensors: ["Temperatura fruto", "Flujo savia", "Trampas IoT", "Radiación PAR"],
      color: "bg-orange-50 border-orange-200",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
    },
    {
      icon: Wheat,
      title: "Cultivos Extensivos",
      sector: "Cereales",
      description: "Agricultura de precisión para grandes extensiones con mapeo de variabilidad y fertilización variable.",
      benefits: [
        "Reducción fertilizantes: 20%",
        "Mapeo rendimiento",
        "Siembra variable",
      ],
      sensors: ["EC suelo", "NDVI satelital", "Estación meteo", "GPS RTK"],
      color: "bg-yellow-50 border-yellow-200",
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-600",
    },
    {
      icon: Trees,
      title: "Gestión Forestal",
      sector: "Forestal",
      description: "Detección temprana de incendios, monitorización de masas forestales y gestión sostenible del bosque.",
      benefits: [
        "Alerta incendios < 5min",
        "Inventario digital",
        "Créditos de carbono",
      ],
      sensors: ["Cámara térmica", "Humo", "Humedad biomasa", "CO2"],
      color: "bg-emerald-50 border-emerald-200",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
    },
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-emerald-900 mb-2">8. Casos de Uso</h2>
          <p className="text-muted-foreground mb-8">
            Aplicaciones prácticas de TeleNatura Connect en diferentes sectores agrarios
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
              <Card key={index} className={`${useCase.color} hover:shadow-lg transition-shadow`}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-lg ${useCase.iconBg} flex items-center justify-center flex-shrink-0`}>
                      <useCase.icon className={`h-6 w-6 ${useCase.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-slate-900">{useCase.title}</h3>
                      <Badge variant="outline" className="text-xs">{useCase.sector}</Badge>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4">{useCase.description}</p>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs font-medium text-slate-700 mb-2">Beneficios clave:</p>
                      <ul className="space-y-1">
                        {useCase.benefits.map((benefit, i) => (
                          <li key={i} className="text-xs text-slate-600 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <p className="text-xs font-medium text-slate-700 mb-2">Sensores utilizados:</p>
                      <div className="flex flex-wrap gap-1">
                        {useCase.sensors.map((sensor, i) => (
                          <Badge key={i} variant="secondary" className="text-xs bg-white/50">
                            {sensor}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocCasosDeUso;

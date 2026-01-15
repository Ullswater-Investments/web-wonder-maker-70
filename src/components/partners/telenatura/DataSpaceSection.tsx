import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Database, 
  Shield, 
  Share2, 
  BarChart3,
  Leaf,
  Cloud
} from "lucide-react";

const dataSpaceFeatures = [
  {
    icon: Database,
    title: "Datos Agrarios Soberanos",
    description: "Control total sobre los datos generados en explotaciones agrarias, desde sensores hasta análisis de cultivos.",
  },
  {
    icon: Shield,
    title: "Privacidad y Cumplimiento",
    description: "Gestión de datos conforme a GDPR y normativas del sector agrario europeo.",
  },
  {
    icon: Share2,
    title: "Interoperabilidad",
    description: "Integración con otros data spaces europeos: AgriDataSpace, GreenDeal DataSpace.",
  },
  {
    icon: Cloud,
    title: "Cloud Agrario",
    description: "Almacenamiento seguro y escalable para datos de telemetría, imágenes de drones y series temporales.",
  },
];

export const DataSpaceSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            <Leaf className="w-3 h-3 mr-1" />
            Data Space
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Integración con Pontus-X
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            TeleNatura conecta la agricultura de precisión con el ecosistema europeo de datos soberanos
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {dataSpaceFeatures.map((feature, index) => (
            <Card key={index} className="border-green-200 dark:border-green-800">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
                    <feature.icon className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Integration Diagram */}
        <div className="mt-12 max-w-3xl mx-auto">
          <Card className="bg-white/50 dark:bg-background/50 backdrop-blur">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <div className="text-center p-4 bg-green-100 dark:bg-green-900/30 rounded-lg">
                  <BarChart3 className="w-8 h-8 mx-auto mb-2 text-green-600" />
                  <span className="text-sm font-medium">Sensores IoT</span>
                </div>
                <div className="text-2xl text-muted-foreground">→</div>
                <div className="text-center p-4 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                  <Database className="w-8 h-8 mx-auto mb-2 text-emerald-600" />
                  <span className="text-sm font-medium">TeleNatura</span>
                </div>
                <div className="text-2xl text-muted-foreground">→</div>
                <div className="text-center p-4 bg-teal-100 dark:bg-teal-900/30 rounded-lg">
                  <Share2 className="w-8 h-8 mx-auto mb-2 text-teal-600" />
                  <span className="text-sm font-medium">Pontus-X</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

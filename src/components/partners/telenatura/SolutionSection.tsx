import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Radio, 
  Cpu, 
  MapPin, 
  Zap, 
  Plane, 
  BarChart3,
  Leaf,
  Droplets
} from "lucide-react";

const solutions = [
  {
    icon: Radio,
    title: "Hardware de Campo",
    description: "Sensores, estaciones de telecontrol y dispositivos IoT para monitorización en tiempo real",
    tags: ["Sensores", "Estaciones", "Telecontrol"],
  },
  {
    icon: Cpu,
    title: "Software de Gestión",
    description: "Sistemas de gestión, automatización y SIG para toma de decisiones basada en datos",
    tags: ["SIG", "Automatización", "Gestión"],
  },
  {
    icon: Plane,
    title: "Drones y Fotogrametría",
    description: "Servicios de topografía, cartografía y análisis de cultivos mediante drones",
    tags: ["Drones", "Topografía", "Cartografía"],
  },
  {
    icon: Zap,
    title: "Auditorías Energéticas",
    description: "Análisis y optimización del consumo energético en explotaciones agrarias",
    tags: ["Eficiencia", "Energía", "Auditoría"],
  },
  {
    icon: Droplets,
    title: "Gestión del Agua",
    description: "Sistemas de riego inteligente y monitorización de recursos hídricos",
    tags: ["Riego", "Hídricos", "Smart"],
  },
  {
    icon: BarChart3,
    title: "Valoraciones Agrarias",
    description: "Tasaciones, peritaciones y valoraciones de fincas y explotaciones",
    tags: ["Tasación", "Peritación", "Valoración"],
  },
];

export const SolutionSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            <Leaf className="w-3 h-3 mr-1" />
            Servicios
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Soluciones Tecnológicas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Convergencia entre Hardware y Software para la digitalización del sector primario
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
                    <solution.icon className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <CardTitle className="text-lg">{solution.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{solution.description}</p>
                <div className="flex flex-wrap gap-2">
                  {solution.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

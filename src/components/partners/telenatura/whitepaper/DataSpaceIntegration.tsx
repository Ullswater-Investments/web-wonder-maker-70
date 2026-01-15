import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Shield, Link2, FileCheck, ArrowLeftRight } from "lucide-react";

const DataSpaceIntegration = () => {
  const dataSpaces = [
    {
      name: "Gaia-X",
      logo: "🇪🇺",
      description: "Infraestructura de datos federada europea que garantiza soberanía y portabilidad",
      role: "Framework de confianza y gobernanza",
    },
    {
      name: "Pontus-X",
      logo: "🌊",
      description: "Marketplace descentralizado para el intercambio seguro de datos agrarios",
      role: "Comercialización y monetización de datos",
    },
    {
      name: "AgriDataSpace",
      logo: "🌾",
      description: "Data Space vertical para el sector agrario europeo (en desarrollo)",
      role: "Estándares específicos del sector",
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Soberanía de Datos",
      description: "El agricultor mantiene control total sobre sus datos",
    },
    {
      icon: ArrowLeftRight,
      title: "Interoperabilidad",
      description: "Datos compatibles con cualquier plataforma del ecosistema",
    },
    {
      icon: FileCheck,
      title: "Trazabilidad",
      description: "Registro inmutable de todos los accesos y usos",
    },
    {
      icon: Link2,
      title: "Monetización",
      description: "Posibilidad de comercializar datos agregados",
    },
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-green-900 mb-2">6. Integración con Data Spaces</h2>
          <p className="text-muted-foreground mb-8">
            Conexión con el ecosistema europeo de intercambio de datos
          </p>

          {/* Data Spaces Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {dataSpaces.map((ds, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">{ds.logo}</span>
                    <div>
                      <h4 className="font-semibold text-lg">{ds.name}</h4>
                      <Badge variant="outline" className="text-xs">{ds.role}</Badge>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{ds.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Benefits */}
          <h3 className="text-xl font-semibold text-green-800 mb-4">Beneficios de la Integración</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
                    <benefit.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-sm text-green-900 mb-1">{benefit.title}</h4>
                  <p className="text-xs text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Data Flow Diagram */}
          <Card className="bg-green-900 text-white">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="h-6 w-6" />
                <h4 className="font-semibold text-lg">Flujo de Datos Soberano</h4>
              </div>
              <div className="grid md:grid-cols-4 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-green-200 text-xs mb-1">1. Captura</p>
                  <p className="font-medium">Sensores IoT</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-green-200 text-xs mb-1">2. Procesamiento</p>
                  <p className="font-medium">TeleNatura Cloud</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-green-200 text-xs mb-1">3. Conector IDS</p>
                  <p className="font-medium">Políticas ODRL</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-green-200 text-xs mb-1">4. Marketplace</p>
                  <p className="font-medium">Pontus-X</p>
                </div>
              </div>
              <p className="text-green-200 text-sm mt-4 text-center">
                El agricultor define políticas de uso en cada paso. Ningún dato sale sin su consentimiento explícito.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DataSpaceIntegration;

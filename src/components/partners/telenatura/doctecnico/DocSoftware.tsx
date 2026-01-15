import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Monitor, Database, BarChart3, Bell, Map, Smartphone } from "lucide-react";

const DocSoftware = () => {
  const modules = [
    {
      icon: Monitor,
      name: "Panel de Control",
      description: "Dashboard web responsive para visualización en tiempo real de datos de sensores",
      features: ["Widgets personalizables", "Alertas visuales", "Histórico de datos", "Multi-idioma"],
      tech: ["React", "TypeScript", "Recharts"],
    },
    {
      icon: Database,
      name: "Motor de Datos",
      description: "Sistema de almacenamiento y procesamiento de series temporales",
      features: ["Almacenamiento optimizado", "Agregaciones automáticas", "Backup incremental", "API REST"],
      tech: ["TimescaleDB", "PostgreSQL", "Redis"],
    },
    {
      icon: BarChart3,
      name: "Módulo Analítico",
      description: "Análisis avanzado con modelos predictivos y recomendaciones",
      features: ["Predicción de riego", "Detección anomalías", "Optimización recursos", "Informes automáticos"],
      tech: ["Python", "TensorFlow", "Pandas"],
    },
    {
      icon: Bell,
      name: "Sistema de Alertas",
      description: "Notificaciones multicanal configurables por umbrales",
      features: ["Email, SMS, Push", "Escalado automático", "Reglas personalizadas", "Historial de eventos"],
      tech: ["Node.js", "Twilio", "FCM"],
    },
    {
      icon: Map,
      name: "Módulo GIS",
      description: "Sistema de información geográfica para mapeo de parcelas",
      features: ["Mapas satelitales", "Zonas de riego", "Índices vegetación", "Capas personalizadas"],
      tech: ["Leaflet", "GeoServer", "PostGIS"],
    },
    {
      icon: Smartphone,
      name: "App Móvil",
      description: "Aplicación nativa para gestión desde campo",
      features: ["Modo offline", "Lectura NFC", "Cámara integrada", "Notificaciones push"],
      tech: ["React Native", "SQLite", "Background Sync"],
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-emerald-900 mb-2">3. Plataforma de Software</h2>
          <p className="text-muted-foreground mb-8">
            Suite completa de aplicaciones para gestión agraria inteligente
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {modules.map((module, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-emerald-100">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                      <module.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{module.name}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{module.description}</p>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs font-medium text-emerald-800 mb-2">Funcionalidades:</p>
                      <div className="flex flex-wrap gap-1">
                        {module.features.map((feature, i) => (
                          <Badge key={i} variant="secondary" className="text-xs bg-emerald-50 text-emerald-700">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-xs font-medium text-slate-600 mb-2">Stack tecnológico:</p>
                      <div className="flex flex-wrap gap-1">
                        {module.tech.map((t, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {t}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* API Section */}
          <Card className="mt-8 bg-slate-900 text-white">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">API REST - Endpoints Principales</h3>
              <div className="font-mono text-sm space-y-2 bg-slate-800 rounded-lg p-4">
                <div className="flex items-center gap-2">
                  <Badge className="bg-green-600 text-xs">GET</Badge>
                  <span className="text-slate-300">/api/v1/sensors</span>
                  <span className="text-slate-500 text-xs ml-auto">Listar sensores</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-green-600 text-xs">GET</Badge>
                  <span className="text-slate-300">/api/v1/readings/:sensorId</span>
                  <span className="text-slate-500 text-xs ml-auto">Lecturas sensor</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-blue-600 text-xs">POST</Badge>
                  <span className="text-slate-300">/api/v1/alerts</span>
                  <span className="text-slate-500 text-xs ml-auto">Crear alerta</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-green-600 text-xs">GET</Badge>
                  <span className="text-slate-300">/api/v1/analytics/predictions</span>
                  <span className="text-slate-500 text-xs ml-auto">Predicciones</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DocSoftware;

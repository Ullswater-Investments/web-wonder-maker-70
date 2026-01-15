import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Headphones, Clock, RefreshCw, Wrench, FileText, Zap } from "lucide-react";

const DocMantenimiento = () => {
  const slaLevels = [
    {
      name: "Básico",
      price: "Incluido",
      color: "border-slate-300",
      features: [
        { text: "Soporte email", included: true },
        { text: "Horario L-V 9-18h", included: true },
        { text: "Tiempo respuesta 48h", included: true },
        { text: "Actualizaciones software", included: true },
        { text: "Soporte telefónico", included: false },
        { text: "Visitas preventivas", included: false },
      ],
    },
    {
      name: "Profesional",
      price: "Desde 99€/mes",
      color: "border-emerald-500",
      recommended: true,
      features: [
        { text: "Soporte email + teléfono", included: true },
        { text: "Horario L-V 8-20h", included: true },
        { text: "Tiempo respuesta 24h", included: true },
        { text: "Actualizaciones software", included: true },
        { text: "1 visita preventiva/año", included: true },
        { text: "Reemplazo hardware avería", included: false },
      ],
    },
    {
      name: "Enterprise",
      price: "Personalizado",
      color: "border-purple-500",
      features: [
        { text: "Soporte 24/7/365", included: true },
        { text: "Tiempo respuesta 4h", included: true },
        { text: "Gestor de cuenta dedicado", included: true },
        { text: "Visitas trimestrales", included: true },
        { text: "Hardware de repuesto en sitio", included: true },
        { text: "SLA personalizado", included: true },
      ],
    },
  ];

  const maintenanceTasks = [
    {
      icon: RefreshCw,
      title: "Actualizaciones OTA",
      description: "Firmware de dispositivos actualizado remotamente sin intervención",
      frequency: "Mensual",
    },
    {
      icon: Wrench,
      title: "Calibración Sensores",
      description: "Verificación y ajuste de precisión de sensores",
      frequency: "Anual",
    },
    {
      icon: Zap,
      title: "Revisión Energía",
      description: "Estado de baterías, paneles solares y alimentación",
      frequency: "Semestral",
    },
    {
      icon: FileText,
      title: "Informes de Estado",
      description: "Reporte detallado del estado del sistema y recomendaciones",
      frequency: "Trimestral",
    },
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-emerald-900 mb-2">10. Soporte y Mantenimiento</h2>
          <p className="text-muted-foreground mb-8">
            Planes de servicio para asegurar el funcionamiento óptimo del sistema
          </p>

          {/* SLA Levels */}
          <h3 className="text-xl font-semibold text-emerald-800 mb-4">Niveles de Servicio (SLA)</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {slaLevels.map((level, index) => (
              <Card key={index} className={`relative border-2 ${level.color} ${level.recommended ? 'shadow-lg' : ''}`}>
                {level.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-emerald-600">Recomendado</Badge>
                  </div>
                )}
                <CardContent className="p-6 pt-8">
                  <div className="text-center mb-6">
                    <h4 className="text-xl font-bold text-slate-900">{level.name}</h4>
                    <p className="text-emerald-600 font-semibold">{level.price}</p>
                  </div>
                  
                  <ul className="space-y-3">
                    {level.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        {feature.included ? (
                          <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                          </div>
                        ) : (
                          <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
                            <div className="w-2 h-0.5 bg-slate-400" />
                          </div>
                        )}
                        <span className={feature.included ? 'text-slate-700' : 'text-slate-400'}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Maintenance Tasks */}
          <h3 className="text-xl font-semibold text-emerald-800 mb-4">Tareas de Mantenimiento</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {maintenanceTasks.map((task, index) => (
              <Card key={index}>
                <CardContent className="p-4 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <task.icon className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-semibold text-slate-900">{task.title}</h4>
                      <Badge variant="outline" className="text-xs">{task.frequency}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{task.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Support Contact */}
          <Card className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                    <Headphones className="h-8 w-8" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl">Centro de Soporte TeleNatura</h4>
                    <p className="text-emerald-100">Asistencia técnica especializada</p>
                  </div>
                </div>
                <div className="flex flex-col items-center md:items-end gap-2">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">L-V 9:00 - 18:00</span>
                  </div>
                  <a href="mailto:soporte@telenatura.es" className="text-lg font-semibold hover:underline">
                    soporte@telenatura.es
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DocMantenimiento;

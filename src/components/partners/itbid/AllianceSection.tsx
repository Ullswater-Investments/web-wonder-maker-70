import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, Shield, ArrowRight, Zap, Globe, Lock, CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/AnimatedSection";
import { ProcuredataLogo } from "@/components/ProcuredataLogo";

const alliances = [
  {
    id: "procuredata",
    title: "PROCUREDATA",
    subtitle: "El Ecosistema de Datos",
    icon: Database,
    color: "from-primary to-orange-500",
    borderColor: "border-primary/30",
    hoverBorder: "hover:border-primary/60",
    description: "Imagina que cada vez que vas a un médico nuevo tuvieras que rellenar el mismo formulario con tu historial desde cero. Eso es lo que sufren las empresas con sus proveedores.",
    solution: "ITBID, alineado con PROCUREDATA, soluciona esto creando un Espacio de Datos Compartido.",
    benefit: "Si un proveedor ya ha sido validado (su identidad, sus certificados de sostenibilidad, sus datos bancarios) dentro del ecosistema, esa información es accesible de forma segura.",
    highlight: "Alta automática",
    highlightDesc: "Ahorrando miles de horas de burocracia",
    badges: ["Datos Verificados", "Inteligencia Colectiva"],
  },
  {
    id: "pontusx",
    title: "PONTUS-X",
    subtitle: "La Seguridad y Soberanía",
    icon: Shield,
    color: "from-[hsl(var(--itbid-cyan))] to-[hsl(var(--itbid-purple))]",
    borderColor: "border-[hsl(var(--itbid-cyan)/0.3)]",
    hoverBorder: "hover:border-[hsl(var(--itbid-cyan)/0.6)]",
    description: "Para compartir información tan sensible entre empresas competidoras se necesita una seguridad de nivel militar.",
    solution: "PONTUS-X es la infraestructura tecnológica europea (basada en principios de Gaia-X y tecnología Web3/Blockchain) sobre la que viajan los datos.",
    benefit: "PONTUS-X garantiza la Soberanía del Dato. Las empresas comparten información sin perder el control sobre ella.",
    highlight: "Soberanía del Dato",
    highlightDesc: "Datos veraces, inmutables y conformes con normativas europeas",
    badges: ["Gaia-X", "Web3", "Blockchain", "GDPR"],
  },
];

export const AllianceSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[hsl(var(--itbid-cyan)/0.1)] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[hsl(var(--itbid-purple)/0.1)] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2 bg-white/5 border-white/20 text-white">
              <Zap className="h-3 w-3 mr-1" />
              El Salto al Futuro
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              La Alianza con{" "}
              <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
                PROCUREDATA
              </span>
              {" "}y{" "}
              <span className="bg-gradient-to-r from-[hsl(var(--itbid-cyan))] to-[hsl(var(--itbid-purple))] bg-clip-text text-transparent">
                PONTUS-X
              </span>
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Lo que hace verdaderamente innovador a ITBID no es solo que gestione compras, 
              sino que ya no funciona como una "isla" aislada, sino que está conectado a una red global de datos segura.
            </p>
          </div>
        </FadeIn>

        {/* Alliance Cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {alliances.map((alliance, index) => (
            <motion.div
              key={alliance.id}
              initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <Card className={`h-full bg-white/5 backdrop-blur-sm border ${alliance.borderColor} ${alliance.hoverBorder} transition-all duration-300`}>
                <CardContent className="p-6 space-y-4">
                  {/* Header */}
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${alliance.color} flex items-center justify-center`}>
                      <alliance.icon className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{alliance.title}</h3>
                      <p className="text-sm text-slate-400">{alliance.subtitle}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {alliance.description}
                  </p>

                  {/* Solution */}
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <p className="text-white/90 text-sm">
                      <span className="font-semibold text-white">¿Qué significa?</span>{" "}
                      {alliance.solution}
                    </p>
                  </div>

                  {/* Benefit */}
                  <p className="text-slate-300 text-sm leading-relaxed">
                    <span className="font-semibold text-white">El beneficio:</span>{" "}
                    {alliance.benefit}
                  </p>

                  {/* Highlight */}
                  <div className={`flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r ${alliance.color} bg-opacity-10`}>
                    <CheckCircle2 className="h-5 w-5 text-white shrink-0" />
                    <div>
                      <span className="font-bold text-white">{alliance.highlight}</span>
                      <span className="text-white/80 text-sm ml-2">— {alliance.highlightDesc}</span>
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {alliance.badges.map((badge) => (
                      <Badge key={badge} variant="outline" className="text-xs bg-white/5 border-white/20 text-white">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Flow Diagram */}
        <FadeIn delay={0.4}>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              {/* ITBID */}
              <motion.div
                className="flex flex-col items-center gap-2 p-4"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[hsl(var(--itbid-cyan))] to-[hsl(var(--itbid-magenta))] flex items-center justify-center">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <span className="font-semibold text-white">ITBID</span>
                <span className="text-xs text-slate-400">Gestión</span>
              </motion.div>

              <ArrowRight className="h-6 w-6 text-slate-500 rotate-90 md:rotate-0" />

              {/* PROCUREDATA */}
              <motion.div
                className="flex flex-col items-center gap-2 p-4"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center">
                  <Database className="h-8 w-8 text-white" />
                </div>
                <span className="font-semibold text-white">PROCUREDATA</span>
                <span className="text-xs text-slate-400">Datos Verificados</span>
              </motion.div>

              <ArrowRight className="h-6 w-6 text-slate-500 rotate-90 md:rotate-0" />

              {/* PONTUS-X */}
              <motion.div
                className="flex flex-col items-center gap-2 p-4"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[hsl(var(--itbid-cyan))] to-[hsl(var(--itbid-purple))] flex items-center justify-center">
                  <Lock className="h-8 w-8 text-white" />
                </div>
                <span className="font-semibold text-white">PONTUS-X</span>
                <span className="text-xs text-slate-400">Seguridad Soberana</span>
              </motion.div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

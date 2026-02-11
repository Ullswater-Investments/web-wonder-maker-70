import { motion } from "framer-motion";
import {
  Shield, Database, GitBranch, FileText, Wallet,
  Bot, Cable, Globe, BarChart3, Network,
} from "lucide-react";
import { FadeIn } from "@/components/AnimatedSection";

const phases = [
  { num: 1, name: "Fundamentos", desc: "Autenticación, RBAC y RLS multi-tenant", icon: Shield, done: true },
  { num: 2, name: "Catálogo de Datos", desc: "Registro y descubrimiento de activos con metadatos", icon: Database, done: true },
  { num: 3, name: "Aprobaciones 3-Actores", desc: "Consumer → Subject → Holder", icon: GitBranch, done: true },
  { num: 4, name: "Políticas ODRL", desc: "Contratos digitales automáticos ODRL 2.0", icon: FileText, done: true },
  { num: 5, name: "Web3 y DIDs", desc: "Identidades descentralizadas y pagos EUROe", icon: Wallet, done: true },
  { num: 6, name: "IA Conversacional", desc: "Asistente ARIA con conocimiento contextual", icon: Bot, done: true },
  { num: 7, name: "Conectores ERP", desc: "Integración bidireccional con sistemas empresariales", icon: Cable, done: false },
  { num: 8, name: "Red Federada Gaia-X", desc: "Conectores IDS y credenciales verificables", icon: Globe, done: false },
  { num: 9, name: "Analytics y BI", desc: "Dashboards predictivos e inteligencia de mercado", icon: BarChart3, done: false },
  { num: 10, name: "Ecosistema Multi-Sector", desc: "Nodos sectoriales y gobernanza distribuida", icon: Network, done: false },
];

export const RoadmapPhases = () => {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
              Roadmap Técnico
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              10 Fases de Evolución
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Desarrollo incremental desde los fundamentos hasta un ecosistema federado multi-sector completo
            </p>
          </div>
        </FadeIn>

        <div className="max-w-5xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-px" />

          {phases.map((phase, i) => {
            const Icon = phase.icon;
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={phase.num}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className={`relative flex items-center mb-6 md:mb-4 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                } flex-row`}
              >
                {/* Content card */}
                <div className={`flex-1 ml-14 md:ml-0 ${isLeft ? "md:pr-10 md:text-right" : "md:pl-10 md:text-left"}`}>
                  <div
                    className={`inline-flex items-center gap-3 p-3 rounded-xl border bg-card hover:shadow-md transition-shadow ${
                      phase.done ? "border-primary/30" : "border-border"
                    }`}
                  >
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        phase.done ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-sm text-foreground">
                        <span className="text-primary mr-1">F{phase.num}</span>
                        {phase.name}
                      </p>
                      <p className="text-xs text-muted-foreground">{phase.desc}</p>
                    </div>
                  </div>
                </div>

                {/* Center dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                  <div
                    className={`w-3 h-3 rounded-full border-2 ${
                      phase.done
                        ? "bg-primary border-primary"
                        : "bg-background border-muted-foreground/30"
                    }`}
                  />
                </div>

                {/* Spacer for other side */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

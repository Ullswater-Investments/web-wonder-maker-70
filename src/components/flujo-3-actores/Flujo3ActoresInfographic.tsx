import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Factory, Database, FileCheck, Wallet, Shield, ChevronDown, ArrowDown, ClipboardCheck, KeyRound, PackageCheck, Lock, CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";

interface LayerData {
  id: string;
  icon: typeof Shield;
  nodes: { icon: typeof Shield; label: string }[];
  details: string[];
}

const layers: LayerData[] = [
  {
    id: "consumer",
    icon: ShoppingCart,
    nodes: [
      { icon: ClipboardCheck, label: "Solicitud" },
      { icon: FileCheck, label: "Validación" },
      { icon: CheckCircle2, label: "Aprobación" },
    ],
    details: [
      "Inicia requests vía Request Wizard de 5 fases con firma criptográfica",
      "Define políticas ODRL 2.0 de uso, redistribución y duración de acceso",
      "Roles: Admin (gestiona), Approver (aprueba), Viewer (consulta)",
      "Firma criptográfica de aceptación tras verificación del Subject y Holder",
    ],
  },
  {
    id: "subject",
    icon: Factory,
    nodes: [
      { icon: KeyRound, label: "Registro SSI" },
      { icon: Wallet, label: "Wallet DID" },
      { icon: PackageCheck, label: "Respuesta" },
    ],
    details: [
      "Proveedor con identidad SSI: DID (did:ethr) + Credenciales Verificables W3C",
      "Wallet corporativa MetaMask para firma de transacciones en Pontus-X",
      "Publica Data NFTs y DDOs como activos digitales soberanos",
      "Responde a solicitudes con doble firma criptográfica (Subject + Consumer)",
    ],
  },
  {
    id: "holder",
    icon: Database,
    nodes: [
      { icon: Lock, label: "Almacenamiento" },
      { icon: Shield, label: "Verificación" },
      { icon: PackageCheck, label: "Entrega" },
    ],
    details: [
      "Custodia datos en almacenamiento soberano con RLS por organization_id",
      "Verificación vía Smart Contracts en la red Pontus-X (Gaia-X)",
      "Entrega con Compute-to-Data: procesamiento sin transferencia de datos",
      "Trazabilidad inmutable en blockchain con auditoría completa",
    ],
  },
];

const LAYER_COLORS = [
  { bg: "from-blue-500/10 to-cyan-500/10", border: "border-blue-500/30", accent: "text-blue-500", pulse: "bg-blue-500" },
  { bg: "from-amber-500/10 to-orange-500/10", border: "border-amber-500/30", accent: "text-amber-500", pulse: "bg-amber-500" },
  { bg: "from-emerald-500/10 to-green-500/10", border: "border-emerald-500/30", accent: "text-emerald-500", pulse: "bg-emerald-500" },
];

export const Flujo3ActoresInfographic = () => {
  const { t } = useTranslation("flujo3Actores");
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="relative max-w-3xl mx-auto">
      {/* Animated connection arrows between layers */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" preserveAspectRatio="none">
        {[0, 1].map((i) => (
          <g key={i}>
            <line x1="50%" y1={`${33 * (i + 1)}%`} x2="50%" y2={`${33 * (i + 1) + 2}%`} stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="6 4" opacity="0.3" />
            <motion.circle cx="50%" r="4" fill="hsl(var(--primary))" animate={{ cy: [`${33 * (i + 1) - 2}%`, `${33 * (i + 1) + 4}%`] }} transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", delay: i * 0.5 }} opacity={0.6} />
          </g>
        ))}
      </svg>

      <div className="relative z-10 space-y-6">
        {layers.map((layer, idx) => {
          const colors = LAYER_COLORS[idx];
          const Icon = layer.icon;
          const isOpen = expanded === layer.id;

          return (
            <motion.div key={layer.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.15 }}>
              <button
                onClick={() => setExpanded(isOpen ? null : layer.id)}
                className={`w-full text-left rounded-2xl border ${colors.border} bg-gradient-to-r ${colors.bg} p-5 transition-shadow hover:shadow-lg group`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl bg-background/80 flex items-center justify-center ${colors.accent}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">
                        {t(`layers.${layer.id}.label`)}
                      </span>
                      <h3 className="text-sm font-bold text-foreground">{t(`layers.${layer.id}.title`)}</h3>
                    </div>
                  </div>
                  <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown className="w-4 h-4 text-muted-foreground" />
                  </motion.div>
                </div>

                <div className="flex items-center justify-center gap-4">
                  {layer.nodes.map((node, ni) => {
                    const NodeIcon = node.icon;
                    return (
                      <div key={ni} className="flex items-center gap-3">
                        <motion.div
                          className={`relative w-14 h-14 rounded-xl bg-background/90 border ${colors.border} flex flex-col items-center justify-center gap-1`}
                          animate={{ scale: [1, 1.04, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: ni * 0.3 }}
                        >
                          <motion.div
                            className={`absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full ${colors.pulse}`}
                            animate={{ opacity: [0.4, 1, 0.4], scale: [0.8, 1.2, 0.8] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: ni * 0.4 }}
                          />
                          <NodeIcon className={`w-4 h-4 ${colors.accent}`} />
                          <span className="text-[9px] font-medium text-muted-foreground leading-none">{node.label}</span>
                        </motion.div>
                        {ni < layer.nodes.length - 1 && (
                          <motion.div className="flex items-center gap-0.5">
                            {[0, 1, 2].map((di) => (
                              <motion.div key={di} className={`w-1.5 h-1.5 rounded-full ${colors.pulse}`} animate={{ opacity: [0.2, 0.8, 0.2] }} transition={{ duration: 1, repeat: Infinity, delay: di * 0.2 + ni * 0.3 }} />
                            ))}
                          </motion.div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </button>

              {/* Flow arrow between layers */}
              {idx < layers.length - 1 && (
                <div className="flex justify-center py-2">
                  <motion.div animate={{ y: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                    <ArrowDown className="w-5 h-5 text-primary/50" />
                  </motion.div>
                </div>
              )}

              <AnimatePresence>
                {isOpen && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                    <div className={`mt-2 rounded-xl border ${colors.border} bg-card p-4 space-y-2`}>
                      {layer.details.map((detail, di) => (
                        <motion.div key={di} initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: di * 0.08 }} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <Database className={`w-3 h-3 mt-0.5 flex-shrink-0 ${colors.accent}`} />
                          <span>{detail}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

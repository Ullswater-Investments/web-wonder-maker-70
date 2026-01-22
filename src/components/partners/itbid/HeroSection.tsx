import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Brain, Cloud, Leaf, Building2 } from "lucide-react";
import itbidLogo from "@/assets/itbid-logo.png";
import { ProcuredataLogo } from "@/components/ProcuredataLogo";

const features = [
  { label: "Source-to-Pay", icon: Building2, color: "bg-[hsl(var(--itbid-cyan)/0.1)] text-[hsl(var(--itbid-cyan))]" },
  { label: "Cloud Platform", icon: Cloud, color: "bg-[hsl(var(--itbid-magenta)/0.1)] text-[hsl(var(--itbid-magenta))]" },
  { label: "ESG Ready", icon: Leaf, color: "bg-green-500/10 text-green-500" },
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-[hsl(var(--itbid-cyan)/0.05)]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[hsl(var(--itbid-cyan)/0.2)] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[hsl(var(--itbid-purple)/0.15)] rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[hsl(var(--itbid-magenta)/0.1)] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Dual Logos */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-6 mb-8"
        >
          <ProcuredataLogo size="md" />
          <span className="text-3xl text-muted-foreground">×</span>
          <img src={itbidLogo} alt="itbid" className="h-10 object-contain" />
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <Badge variant="outline" className="px-4 py-2 text-sm bg-[hsl(var(--itbid-cyan)/0.1)] border-[hsl(var(--itbid-cyan)/0.3)]">
            La Plataforma
          </Badge>
        </motion.div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center space-y-4 mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            ¿Qué es <span className="itbid-gradient-text">ITBID</span>?
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-4xl mx-auto">
            El <span className="font-semibold text-foreground">"cerebro digital"</span> que utilizan las grandes y medianas empresas 
            para gestionar todo lo que compran y su relación con quienes se lo venden.
          </p>
        </motion.div>

        {/* Brain Icon Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-[hsl(var(--itbid-cyan))] via-[hsl(var(--itbid-magenta))] to-[hsl(var(--itbid-purple))] flex items-center justify-center shadow-2xl">
              <Brain className="h-12 w-12 text-white" />
            </div>
            {/* Pulse effect */}
            <motion.div
              className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[hsl(var(--itbid-cyan))] to-[hsl(var(--itbid-purple))] opacity-30"
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center text-muted-foreground max-w-3xl mx-auto mb-8"
        >
          Una plataforma en la nube que sustituye el caos de correos electrónicos, excels y llamadas 
          por un sistema centralizado y eficiente para gestionar el ciclo completo de compras.
        </motion.p>

        {/* Feature Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.1 }}
            >
              <Badge 
                variant="outline" 
                className={`px-4 py-2 text-sm ${feature.color} border-current/30 flex items-center gap-2`}
              >
                <feature.icon className="h-4 w-4" />
                {feature.label}
              </Badge>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-[hsl(var(--itbid-cyan)/0.5)] rounded-full flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-1.5 bg-[hsl(var(--itbid-cyan))] rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

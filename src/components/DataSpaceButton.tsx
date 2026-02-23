import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export const DataSpaceButton = () => {
  const navigate = useNavigate();

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            onClick={() => navigate("/componentes-espacios-datos")}
            className="fixed bottom-6 left-6 z-50 flex items-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
            aria-label="Componentes Tecnológicos Espacios de Datos"
          >
            <Layers className="h-5 w-5 flex-shrink-0" />
            <span className="hidden sm:inline text-sm">Componentes Tecnológicos</span>
            <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-accent animate-pulse" />
          </motion.button>
        </TooltipTrigger>
        <TooltipContent side="top" className="max-w-xs">
          <p className="text-sm">Presentación interactiva: Componentes Tecnológicos de Espacios de Datos Federados (Gaia-X, Pontus-X, DeltaDAO)</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

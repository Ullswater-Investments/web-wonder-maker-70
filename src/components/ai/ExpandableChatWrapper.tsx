import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, Minimize2, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  children: React.ReactNode;
  sidePanel?: React.ReactNode;
}

export const ExpandableChatWrapper = ({ children, sidePanel }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      {/* Expand button */}
      <div className="relative">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsExpanded(true)}
          className="absolute -top-1 -right-1 z-10 h-7 w-7 rounded-lg opacity-60 hover:opacity-100"
          aria-label="Expandir chat"
        >
          <Maximize2 className="w-3.5 h-3.5" />
        </Button>
        {children}
      </div>

      {/* Fullscreen overlay */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="w-full max-w-6xl h-[85vh] rounded-2xl border bg-card shadow-2xl flex flex-col md:flex-row overflow-hidden"
            >
              {/* Chat column */}
              <div className="flex-1 flex flex-col p-6 min-w-0 overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-semibold text-foreground">Agente IA</h3>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsExpanded(false)}
                    className="h-7 w-7 rounded-lg"
                  >
                    <Minimize2 className="w-3.5 h-3.5" />
                  </Button>
                </div>
                <div className="flex-1 min-h-0">{children}</div>
              </div>

              {/* Side panel */}
              {sidePanel && (
                <div className="hidden md:flex w-[380px] border-l bg-muted/30 flex-col p-6 overflow-auto">
                  <h3 className="text-sm font-semibold text-foreground mb-4">Visualización</h3>
                  {sidePanel}
                </div>
              )}

              {/* Mobile close */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsExpanded(false)}
                className="absolute top-3 right-3 md:hidden h-8 w-8"
              >
                <X className="w-4 h-4" />
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

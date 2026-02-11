import { motion, AnimatePresence } from "framer-motion";
import { Zap, Clock, BarChart3 } from "lucide-react";
import { useEffect, useState, useRef } from "react";

interface Props {
  isStreaming: boolean;
  tokenCount: number;
}

export const LiveMetricsBar = ({ isStreaming, tokenCount }: Props) => {
  const [elapsed, setElapsed] = useState(0);
  const startRef = useRef<number>(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (isStreaming) {
      startRef.current = Date.now();
      const tick = () => {
        setElapsed(((Date.now() - startRef.current) / 1000));
        rafRef.current = requestAnimationFrame(tick);
      };
      rafRef.current = requestAnimationFrame(tick);
    } else {
      cancelAnimationFrame(rafRef.current);
    }
    return () => cancelAnimationFrame(rafRef.current);
  }, [isStreaming]);

  const confidence = Math.min(95, Math.max(20, tokenCount * 0.8));

  return (
    <AnimatePresence>
      {isStreaming && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="flex items-center gap-4 px-3 py-1.5 rounded-lg bg-muted/50 text-[10px] text-muted-foreground overflow-hidden"
        >
          <span className="inline-flex items-center gap-1">
            <Zap className="w-3 h-3 text-primary" />
            <motion.span key={tokenCount} initial={{ y: -8, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
              {tokenCount}
            </motion.span>{" "}
            tokens
          </span>

          <span className="inline-flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {elapsed.toFixed(1)}s
          </span>

          <span className="inline-flex items-center gap-1 flex-1">
            <BarChart3 className="w-3 h-3" />
            <div className="relative h-1.5 flex-1 rounded-full bg-muted overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary/60 to-primary"
                animate={{ width: `${confidence}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>
            <span className="w-7 text-right">{Math.round(confidence)}%</span>
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

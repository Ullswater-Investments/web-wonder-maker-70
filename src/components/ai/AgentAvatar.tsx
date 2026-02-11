import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

type AgentState = "idle" | "listening" | "thinking" | "speaking";

interface Props {
  state: AgentState;
  size?: number;
}

export const AgentAvatar = ({ state, size = 36 }: Props) => {
  return (
    <div className="relative flex-shrink-0" style={{ width: size, height: size }}>
      {/* Outer ring effects */}
      {state === "listening" && (
        <>
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute inset-0 rounded-full border border-primary/30"
              animate={{ scale: [1, 1.6 + i * 0.3], opacity: [0.6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.4, ease: "easeOut" }}
            />
          ))}
        </>
      )}

      {state === "thinking" && (
        <>
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                top: "50%",
                left: "50%",
                marginTop: -3,
                marginLeft: -3,
              }}
              animate={{
                x: [
                  Math.cos((i * 2 * Math.PI) / 3) * (size * 0.7),
                  Math.cos((i * 2 * Math.PI) / 3 + Math.PI) * (size * 0.7),
                  Math.cos((i * 2 * Math.PI) / 3) * (size * 0.7),
                ],
                y: [
                  Math.sin((i * 2 * Math.PI) / 3) * (size * 0.7),
                  Math.sin((i * 2 * Math.PI) / 3 + Math.PI) * (size * 0.7),
                  Math.sin((i * 2 * Math.PI) / 3) * (size * 0.7),
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
            </motion.div>
          ))}
        </>
      )}

      {/* Main avatar circle */}
      <motion.div
        className="w-full h-full rounded-full bg-gradient-to-br from-primary/80 to-primary flex items-center justify-center relative overflow-hidden"
        animate={
          state === "idle"
            ? { scale: [1, 1.05, 1] }
            : state === "speaking"
              ? { scale: [1, 1.03, 1] }
              : {}
        }
        transition={
          state === "idle"
            ? { duration: 3, repeat: Infinity, ease: "easeInOut" }
            : state === "speaking"
              ? { duration: 0.6, repeat: Infinity, ease: "easeInOut" }
              : {}
        }
      >
        {/* Speaking equalizer bars */}
        {state === "speaking" ? (
          <div className="flex items-end gap-[2px]" style={{ height: size * 0.4 }}>
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="w-[3px] rounded-full bg-primary-foreground/90"
                animate={{ height: [`${20 + i * 5}%`, `${60 + i * 10}%`, `${20 + i * 5}%`] }}
                transition={{ duration: 0.5 + i * 0.1, repeat: Infinity, ease: "easeInOut" }}
              />
            ))}
          </div>
        ) : (
          <Sparkles className="text-primary-foreground" style={{ width: size * 0.45, height: size * 0.45 }} />
        )}
      </motion.div>
    </div>
  );
};

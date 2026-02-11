import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface Props {
  suggestions: string[];
  onSelect: (q: string) => void;
  isVisible: boolean;
}

export const FollowUpSuggestions = ({ suggestions, onSelect, isVisible }: Props) => {
  if (suggestions.length === 0) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex flex-wrap gap-1.5 mt-2"
        >
          {suggestions.slice(0, 3).map((q, i) => (
            <motion.button
              key={q}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12, duration: 0.25 }}
              onClick={() => onSelect(q)}
              className="inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-full border bg-card hover:bg-accent transition-colors text-foreground group"
            >
              <ArrowRight className="w-2.5 h-2.5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              {q}
            </motion.button>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/** Extract [followup:xxx] markers from text and return clean text + suggestions */
export function parseFollowUpMarkers(text: string): { cleanText: string; followUps: string[] } {
  const regex = /\[followup:(.*?)\]/gi;
  const followUps: string[] = [];
  let match: RegExpExecArray | null;
  while ((match = regex.exec(text)) !== null) {
    followUps.push(match[1].trim());
  }
  const cleanText = text.replace(regex, "").trim();
  return { cleanText, followUps };
}

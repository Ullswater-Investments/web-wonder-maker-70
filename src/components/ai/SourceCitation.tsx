import { motion } from "framer-motion";
import { Globe, Shield, Database, Coins, Server, Cpu } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface SourceInfo {
  key: string;
  label: string;
  description: string;
  icon: typeof Globe;
  colorClass: string;
}

const SOURCE_MAP: Record<string, SourceInfo> = {
  gaiax: {
    key: "gaiax",
    label: "Red Gaia-X",
    description: "Marco de confianza europeo para espacios de datos federados",
    icon: Globe,
    colorClass: "bg-cyan-500/10 text-cyan-600 border-cyan-500/20 dark:text-cyan-400",
  },
  odrl: {
    key: "odrl",
    label: "Política ODRL",
    description: "Open Digital Rights Language para contratos digitales automáticos",
    icon: Shield,
    colorClass: "bg-green-500/10 text-green-600 border-green-500/20 dark:text-green-400",
  },
  pontus: {
    key: "pontus",
    label: "Pontus-X",
    description: "Red federada de pagos y computación sobre datos con EUROe",
    icon: Coins,
    colorClass: "bg-purple-500/10 text-purple-600 border-purple-500/20 dark:text-purple-400",
  },
  idsa: {
    key: "idsa",
    label: "IDSA",
    description: "International Data Spaces Association — arquitectura de referencia",
    icon: Database,
    colorClass: "bg-blue-500/10 text-blue-600 border-blue-500/20 dark:text-blue-400",
  },
  erp: {
    key: "erp",
    label: "Conector ERP",
    description: "Integración bidireccional con SAP, Oracle y Dynamics",
    icon: Server,
    colorClass: "bg-orange-500/10 text-orange-600 border-orange-500/20 dark:text-orange-400",
  },
  did: {
    key: "did",
    label: "DID/SSI",
    description: "Identidades descentralizadas did:ethr para soberanía de datos",
    icon: Cpu,
    colorClass: "bg-rose-500/10 text-rose-600 border-rose-500/20 dark:text-rose-400",
  },
};

interface Props {
  sources: string[];
}

export const SourceCitation = ({ sources }: Props) => {
  const validSources = sources
    .map((s) => SOURCE_MAP[s.toLowerCase()])
    .filter(Boolean);

  if (validSources.length === 0) return null;

  return (
    <TooltipProvider>
      <div className="flex flex-wrap gap-1.5 mt-2">
        {validSources.map((source, i) => {
          const Icon = source.icon;
          return (
            <Tooltip key={source.key}>
              <TooltipTrigger asChild>
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.2 }}
                  className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium border cursor-default ${source.colorClass}`}
                >
                  <Icon className="w-2.5 h-2.5" />
                  {source.label}
                </motion.span>
              </TooltipTrigger>
              <TooltipContent side="top" className="max-w-[200px] text-xs">
                {source.description}
              </TooltipContent>
            </Tooltip>
          );
        })}
      </div>
    </TooltipProvider>
  );
};

/** Extract [source:xxx] markers from text and return clean text + source keys */
export function parseSourceMarkers(text: string): { cleanText: string; sources: string[] } {
  const sourceRegex = /\[source:(\w+)\]/gi;
  const sources: string[] = [];
  let match: RegExpExecArray | null;
  while ((match = sourceRegex.exec(text)) !== null) {
    const key = match[1].toLowerCase();
    if (!sources.includes(key)) sources.push(key);
  }
  const cleanText = text.replace(sourceRegex, "").trim();
  return { cleanText, sources };
}

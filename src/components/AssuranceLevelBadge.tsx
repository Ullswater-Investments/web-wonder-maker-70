import { Shield, ShieldCheck, ShieldAlert } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export type AssuranceLevel = 'low' | 'substantial' | 'high';

const levelConfig: Record<AssuranceLevel, {
  icon: typeof Shield;
  label: string;
  color: string;
  variant: 'default' | 'secondary' | 'outline';
  description: string;
}> = {
  low: {
    icon: Shield,
    label: 'Bajo',
    color: 'text-muted-foreground',
    variant: 'outline',
    description: 'Solo email verificado',
  },
  substantial: {
    icon: ShieldCheck,
    label: 'Sustancial',
    color: 'text-blue-600',
    variant: 'secondary',
    description: 'KYB + DID verificado',
  },
  high: {
    icon: ShieldAlert,
    label: 'Alto',
    color: 'text-green-600',
    variant: 'default',
    description: 'KYB + DID + Certificado eIDAS',
  },
};

interface AssuranceLevelBadgeProps {
  level: AssuranceLevel;
  showTooltip?: boolean;
  className?: string;
}

/**
 * Calculate assurance level based on organization verification status.
 */
export function calculateAssuranceLevel(org: {
  kyb_verified?: boolean | null;
  did?: string | null;
  pontus_verified?: boolean | null;
}): AssuranceLevel {
  if (org.kyb_verified && org.did && org.pontus_verified) return 'high';
  if (org.kyb_verified && org.did) return 'substantial';
  return 'low';
}

export function AssuranceLevelBadge({ level, showTooltip = true, className }: AssuranceLevelBadgeProps) {
  const cfg = levelConfig[level];
  const Icon = cfg.icon;

  const badge = (
    <Badge variant={cfg.variant} className={`gap-1.5 ${className ?? ''}`}>
      <Icon className={`h-3.5 w-3.5 ${cfg.color}`} />
      LoA: {cfg.label}
    </Badge>
  );

  if (!showTooltip) return badge;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{badge}</TooltipTrigger>
        <TooltipContent>
          <p className="font-medium">Nivel de Aseguramiento eIDAS: {cfg.label}</p>
          <p className="text-xs text-muted-foreground">{cfg.description}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

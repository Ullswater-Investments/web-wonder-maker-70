import { ExternalLink, FileText, Shield, BookOpen, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface FundingFooterProps {
  showTransparency?: boolean;
  variant?: "light" | "dark";
}

export const FundingFooter = ({ showTransparency = true, variant = "dark" }: FundingFooterProps) => {
  const { t } = useTranslation('nodes');
  
  const bgClass = variant === "dark" 
    ? "bg-slate-900 border-slate-800" 
    : "bg-muted/50 border-border";
  const textClass = variant === "dark" 
    ? "text-slate-400" 
    : "text-muted-foreground";
  const badgeClass = variant === "dark"
    ? "border-slate-700 text-slate-300"
    : "border-border text-foreground";

  const transparencyLinks = [
    { label: t('footer.links.technical'), href: "/docs/tecnico" },
    { label: t('footer.links.governance'), href: "/architecture" },
    { label: t('footer.links.specifications'), href: "/whitepaper" },
  ];

  return (
    <div className={`${bgClass} border-t py-6`}>
      <div className="container mx-auto px-4">
        {/* Logos de financiación */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
          <div className={`text-xs ${badgeClass} border px-3 py-1.5 rounded-md flex items-center gap-2`}>
            <span className="text-lg">🇪🇺</span>
            <span>NextGenerationEU</span>
          </div>
          <div className={`text-xs ${badgeClass} border px-3 py-1.5 rounded-md flex items-center gap-2`}>
            <Shield className="h-3.5 w-3.5" />
            <span>{t('footer.badges.recovery')}</span>
          </div>
          <div className={`text-xs ${badgeClass} border px-3 py-1.5 rounded-md flex items-center gap-2`}>
            <FileText className="h-3.5 w-3.5" />
            <span>{t('footer.badges.ministry')}</span>
          </div>
        </div>

        {/* Texto legal obligatorio */}
        <p className={`text-center text-xs ${textClass} max-w-2xl mx-auto mb-4`}>
          {t('footer.legalText')}
        </p>

        {/* Links de transparencia */}
        {showTransparency && (
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 border-t border-slate-800/50">
            <span className={`text-xs ${textClass} font-medium`}>{t('footer.transparency')}:</span>
            {transparencyLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-xs ${textClass} hover:text-primary transition-colors flex items-center gap-1`}
              >
                <BookOpen className="h-3 w-3" />
                {link.label}
                <ExternalLink className="h-2.5 w-2.5" />
              </Link>
            ))}
          </div>
        )}

        {/* Link a área privada */}
        <div className="flex items-center justify-center pt-4">
          <Link
            to="/agile-procurement"
            className={`text-xs ${textClass} hover:text-primary transition-colors flex items-center gap-1`}
          >
            <Lock className="h-3 w-3" />
            {t('footer.privateArea')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FundingFooter;

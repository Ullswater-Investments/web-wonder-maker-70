import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { ThemeToggle } from '@/components/ThemeToggle';
import { ProcuredataLogo } from '@/components/ProcuredataLogo';
import { cn } from '@/lib/utils';

interface PublicHeaderProps {
  /** Back link configuration */
  backLink?: {
    to: string;
    label: string;
  };
  /** Badge text to display on the right */
  badge?: string;
  /** Badge variant for styling */
  badgeVariant?: 'default' | 'outline' | 'secondary' | 'destructive';
  /** Badge custom classes */
  badgeClassName?: string;
  /** Show the PROCUREDATA logo */
  showLogo?: boolean;
  /** Show navigation in logo */
  showLogoNavigation?: boolean;
  /** Logo size */
  logoSize?: 'sm' | 'md' | 'lg';
  /** Additional content to render in the center */
  centerContent?: React.ReactNode;
  /** Additional content to render on the right (before language/theme) */
  rightContent?: React.ReactNode;
  /** Header variant */
  variant?: 'transparent' | 'solid' | 'blur';
  /** Additional className for the header */
  className?: string;
}

export function PublicHeader({
  backLink,
  badge,
  badgeVariant = 'secondary',
  badgeClassName,
  showLogo = false,
  showLogoNavigation = false,
  logoSize = 'md',
  centerContent,
  rightContent,
  variant = 'blur',
  className
}: PublicHeaderProps) {
  const headerClasses = cn(
    "sticky top-0 z-50 border-b",
    {
      'bg-background': variant === 'solid',
      'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60': variant === 'blur',
      'bg-transparent': variant === 'transparent',
    },
    className
  );

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Left side: Back link or Logo */}
        <div className="flex items-center gap-4">
          {backLink && (
            <Link 
              to={backLink.to} 
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="text-sm font-medium">{backLink.label}</span>
            </Link>
          )}
          {showLogo && (
            <ProcuredataLogo size={logoSize} showNavigation={showLogoNavigation} />
          )}
        </div>

        {/* Center content */}
        {centerContent && (
          <div className="hidden md:flex items-center gap-2">
            {centerContent}
          </div>
        )}

        {/* Right side: Custom content + Language + Theme + Badge */}
        <div className="flex items-center gap-2">
          {rightContent}
          <LanguageSwitcher />
          <ThemeToggle />
          {badge && (
            <Badge 
              variant={badgeVariant}
              className={cn(badgeClassName)}
            >
              {badge}
            </Badge>
          )}
        </div>
      </div>
    </header>
  );
}

export default PublicHeader;

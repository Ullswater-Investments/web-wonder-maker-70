import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FileText, Fingerprint, Wallet, Network, Building, CreditCard, UserCheck, ShieldCheck, HelpCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

const technicalIcons = [FileText, Fingerprint, Wallet, Network];
const legalIcons = [Building, CreditCard, UserCheck, ShieldCheck];

export const RequirementsStep = () => {
  const { t } = useTranslation('register');

  const technicalItems = t('requirements.technical.items', { returnObjects: true }) as Array<{
    title: string;
    description: string;
    status: string;
    help?: string;
  }>;

  const legalItems = t('requirements.legal.items', { returnObjects: true }) as Array<{
    title: string;
    description: string;
    status: string;
  }>;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="text-center space-y-3">
        <h2 className="text-3xl font-bold text-foreground">
          {t('requirements.title')}
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t('requirements.subtitle')}
        </p>
      </motion.div>

      {/* Technical Requirements */}
      <motion.div variants={itemVariants}>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Network className="w-5 h-5 text-primary" />
              {t('requirements.technical.title')}
            </CardTitle>
            <CardDescription>
              {t('requirements.technical.description')}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {technicalItems.map((item, index) => {
              const Icon = technicalIcons[index] || FileText;
              const isRequired = item.status === 'required';
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <Badge
                        variant={isRequired ? "default" : "secondary"}
                        className={cn(
                          "text-xs",
                          isRequired ? "bg-primary" : "bg-muted-foreground/20"
                        )}
                      >
                        {t(`requirements.statusLabels.${item.status}`)}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {item.description}
                    </p>
                  </div>
                  {item.help && (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button className="p-1 rounded-full hover:bg-muted-foreground/10">
                            <HelpCircle className="w-4 h-4 text-muted-foreground" />
                          </button>
                        </TooltipTrigger>
                        <TooltipContent side="left" className="max-w-xs">
                          <p>{item.help}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                </motion.div>
              );
            })}
          </CardContent>
        </Card>
      </motion.div>

      {/* Legal Requirements */}
      <motion.div variants={itemVariants}>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-primary" />
              {t('requirements.legal.title')}
            </CardTitle>
            <CardDescription>
              {t('requirements.legal.description')}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {legalItems.map((item, index) => {
              const Icon = legalIcons[index] || Building;
              const isRequired = item.status === 'required';
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <Badge
                        variant={isRequired ? "default" : "secondary"}
                        className={cn(
                          "text-xs",
                          isRequired ? "bg-primary" : "bg-muted-foreground/20"
                        )}
                      >
                        {t(`requirements.statusLabels.${item.status}`)}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

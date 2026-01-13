import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Building2, User, Target, CheckCircle2, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import type { RegistrationFormData } from './DataFormStep';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface ConfirmationStepProps {
  formData: RegistrationFormData;
  acceptances: {
    terms: boolean;
    gdpr: boolean;
    conduct: boolean;
  };
  onAcceptanceChange: (key: 'terms' | 'gdpr' | 'conduct', value: boolean) => void;
  errors: Record<string, string>;
  isSuccess?: boolean;
}

export const ConfirmationStep = ({
  formData,
  acceptances,
  onAcceptanceChange,
  errors,
  isSuccess = false,
}: ConfirmationStepProps) => {
  const { t } = useTranslation('register');
  const navigate = useNavigate();
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    organization: true,
    representative: false,
    intention: false,
  });

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

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

  const sectors = t('dataForm.sectors', { returnObjects: true }) as Record<string, string>;
  const sizes = t('dataForm.sizes', { returnObjects: true }) as Record<string, string>;
  const countries = t('dataForm.countries', { returnObjects: true }) as Record<string, string>;

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-12 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="w-24 h-24 rounded-full bg-green-500/20 flex items-center justify-center mb-6"
        >
          <CheckCircle2 className="w-12 h-12 text-green-500" />
        </motion.div>
        <h2 className="text-3xl font-bold text-foreground mb-4">
          {t('confirmation.success.title')}
        </h2>
        <p className="text-lg text-muted-foreground max-w-md mb-8">
          {t('confirmation.success.description')}
        </p>
        <Button onClick={() => navigate('/')} size="lg">
          {t('confirmation.success.button')}
        </Button>
      </motion.div>
    );
  }

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
          {t('confirmation.title')}
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t('confirmation.subtitle')}
        </p>
      </motion.div>

      {/* Summary */}
      <motion.div variants={itemVariants}>
        <Card>
          <CardHeader>
            <CardTitle>{t('confirmation.summary.title')}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Organization Summary */}
            <Collapsible open={openSections.organization} onOpenChange={() => toggleSection('organization')}>
              <CollapsibleTrigger className="w-full">
                <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                  <div className="flex items-center gap-3">
                    <Building2 className="w-5 h-5 text-primary" />
                    <span className="font-medium">{t('confirmation.summary.organization')}</span>
                  </div>
                  <ChevronDown className={cn('w-5 h-5 transition-transform', openSections.organization && 'rotate-180')} />
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="p-4 border-l-2 border-primary/20 ml-6 mt-2 space-y-2 text-sm">
                  <p><strong>{t('dataForm.organization.fields.legalName.label')}:</strong> {formData.organization.legalName}</p>
                  <p><strong>{t('dataForm.organization.fields.taxId.label')}:</strong> {formData.organization.taxId}</p>
                  <p><strong>{t('dataForm.organization.fields.country.label')}:</strong> {countries[formData.organization.country] || formData.organization.country}</p>
                  <p><strong>{t('dataForm.organization.fields.address.label')}:</strong> {formData.organization.address}</p>
                  <p><strong>{t('dataForm.organization.fields.sector.label')}:</strong> {sectors[formData.organization.sector] || formData.organization.sector}</p>
                  <p><strong>{t('dataForm.organization.fields.size.label')}:</strong> {sizes[formData.organization.size] || formData.organization.size}</p>
                </div>
              </CollapsibleContent>
            </Collapsible>

            {/* Representative Summary */}
            <Collapsible open={openSections.representative} onOpenChange={() => toggleSection('representative')}>
              <CollapsibleTrigger className="w-full">
                <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                  <div className="flex items-center gap-3">
                    <User className="w-5 h-5 text-primary" />
                    <span className="font-medium">{t('confirmation.summary.representative')}</span>
                  </div>
                  <ChevronDown className={cn('w-5 h-5 transition-transform', openSections.representative && 'rotate-180')} />
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="p-4 border-l-2 border-primary/20 ml-6 mt-2 space-y-2 text-sm">
                  <p><strong>{t('dataForm.representative.fields.fullName.label')}:</strong> {formData.representative.fullName}</p>
                  <p><strong>{t('dataForm.representative.fields.position.label')}:</strong> {formData.representative.position}</p>
                  <p><strong>{t('dataForm.representative.fields.email.label')}:</strong> {formData.representative.email}</p>
                  <p><strong>{t('dataForm.representative.fields.phone.label')}:</strong> {formData.representative.phone || '-'}</p>
                </div>
              </CollapsibleContent>
            </Collapsible>

            {/* Intention Summary */}
            <Collapsible open={openSections.intention} onOpenChange={() => toggleSection('intention')}>
              <CollapsibleTrigger className="w-full">
                <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                  <div className="flex items-center gap-3">
                    <Target className="w-5 h-5 text-primary" />
                    <span className="font-medium">{t('confirmation.summary.intention')}</span>
                  </div>
                  <ChevronDown className={cn('w-5 h-5 transition-transform', openSections.intention && 'rotate-180')} />
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="p-4 border-l-2 border-primary/20 ml-6 mt-2 space-y-2 text-sm">
                  <p><strong>{t('dataForm.intention.fields.role.label')}:</strong> {t(`dataForm.intention.fields.role.options.${formData.intention.role}`)}</p>
                  <p><strong>{t('dataForm.intention.fields.dataTypes.label')}:</strong> {formData.intention.dataTypes.map((dt) => t(`dataForm.intention.fields.dataTypes.options.${dt}`)).join(', ') || '-'}</p>
                  <p><strong>{t('dataForm.intention.fields.hasErp.label')}:</strong> {t(`dataForm.intention.fields.hasErp.options.${formData.intention.hasErp}`)}</p>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </CardContent>
        </Card>
      </motion.div>

      {/* Acceptances */}
      <motion.div variants={itemVariants}>
        <Card className={errors['acceptances'] ? 'border-destructive' : ''}>
          <CardContent className="pt-6 space-y-4">
            {(['terms', 'gdpr', 'conduct'] as const).map((key) => (
              <div
                key={key}
                className={cn(
                  "flex items-start space-x-3 p-4 rounded-lg border transition-colors",
                  acceptances[key] ? "bg-primary/5 border-primary/30" : "bg-muted/50 border-transparent"
                )}
              >
                <Checkbox
                  id={key}
                  checked={acceptances[key]}
                  onCheckedChange={(checked) => onAcceptanceChange(key, checked === true)}
                />
                <div className="space-y-1">
                  <Label htmlFor={key} className="cursor-pointer font-medium">
                    {t(`confirmation.acceptances.${key}.label`)} *
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    {t(`confirmation.acceptances.${key}.description`)}
                  </p>
                </div>
              </div>
            ))}
            {errors['acceptances'] && (
              <p className="text-sm text-destructive">{errors['acceptances']}</p>
            )}
          </CardContent>
        </Card>
      </motion.div>

      {/* Onboarding Timeline */}
      <motion.div variants={itemVariants}>
        <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              {t('confirmation.timeline.title')}
            </CardTitle>
            <CardDescription>
              {t('confirmation.timeline.subtitle')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {(['week1', 'week2', 'week3', 'week4'] as const).map((week, index) => (
                <motion.div
                  key={week}
                  variants={itemVariants}
                  className="relative"
                >
                  <div className="flex flex-col items-center p-4 rounded-xl bg-background/60 text-center h-full">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mb-3 font-bold text-primary">
                      {index + 1}
                    </div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {t(`confirmation.timeline.weeks.${week}.title`)}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {t(`confirmation.timeline.weeks.${week}.description`)}
                    </p>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-primary/30" />
                  )}
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

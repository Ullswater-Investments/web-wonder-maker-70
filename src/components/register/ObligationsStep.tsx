import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Database, Users, CreditCard, Bell, Scale, FileText, Clock, ShieldAlert, FileBarChart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const generalIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  CreditCard,
  Bell,
  Scale,
};

export const ObligationsStep = () => {
  const { t } = useTranslation('register');

  const providerItems = t('obligations.provider.items', { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  const consumerItems = t('obligations.consumer.items', { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  const generalItems = t('obligations.general.items', { returnObjects: true }) as Array<{
    icon: string;
    title: string;
    description: string;
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

  const providerIcons = [FileText, Database, Clock, ShieldAlert];
  const consumerIcons = [ShieldAlert, CreditCard, FileBarChart, FileText];

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
          {t('obligations.title')}
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t('obligations.subtitle')}
        </p>
      </motion.div>

      {/* Provider & Consumer Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Provider Obligations */}
        <motion.div variants={itemVariants}>
          <Card className="h-full border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-transparent">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <Database className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <CardTitle className="text-lg">{t('obligations.provider.title')}</CardTitle>
                  <CardDescription>{t('obligations.provider.subtitle')}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {providerItems.map((item, index) => {
                const Icon = providerIcons[index] || FileText;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start gap-3 p-3 rounded-lg bg-background/50 hover:bg-background transition-colors"
                  >
                    <Icon className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                    <div>
                      <h4 className="font-medium text-foreground text-sm">{item.title}</h4>
                      <p className="text-xs text-muted-foreground mt-0.5">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </CardContent>
          </Card>
        </motion.div>

        {/* Consumer Obligations */}
        <motion.div variants={itemVariants}>
          <Card className="h-full border-green-500/20 bg-gradient-to-br from-green-500/5 to-transparent">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <Users className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <CardTitle className="text-lg">{t('obligations.consumer.title')}</CardTitle>
                  <CardDescription>{t('obligations.consumer.subtitle')}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {consumerItems.map((item, index) => {
                const Icon = consumerIcons[index] || FileText;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start gap-3 p-3 rounded-lg bg-background/50 hover:bg-background transition-colors"
                  >
                    <Icon className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                    <div>
                      <h4 className="font-medium text-foreground text-sm">{item.title}</h4>
                      <p className="text-xs text-muted-foreground mt-0.5">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* General Commitments */}
      <motion.div variants={itemVariants}>
        <Card>
          <CardHeader className="text-center">
            <CardTitle>{t('obligations.general.title')}</CardTitle>
            <CardDescription>{t('obligations.general.subtitle')}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {generalItems.map((item, index) => {
                const IconComponent = generalIconMap[item.icon] || Scale;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="flex flex-col items-center p-5 rounded-xl bg-muted/50 hover:bg-muted transition-colors text-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

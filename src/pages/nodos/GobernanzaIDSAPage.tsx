import React from 'react';
import { ShieldCheck, Globe, CheckCircle, FileText, Users, Lock, Award, Building2, ArrowRight } from 'lucide-react';
import { NodeFeatureLayout } from './NodeFeatureLayout';
import { useTranslation } from 'react-i18next';

const GobernanzaIDSAPage = () => {
  const { t } = useTranslation('nodes');

  const VisualDiagram = () => (
    <div className="flex flex-col items-center gap-8 py-8">
      {/* IDSA Architecture */}
      <div className="w-full max-w-4xl">
        {/* Header - Gaia-X Ecosystem */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-t-2xl p-4 text-center">
          <div className="flex items-center justify-center gap-3">
            <Globe className="w-6 h-6 text-white" />
            <span className="text-white font-bold text-lg">{t('pages.idsa.diagram.ecosystem')}</span>
          </div>
        </div>

        {/* Main Body */}
        <div className="bg-slate-50 dark:bg-slate-900/50 border-x-2 border-b-2 border-slate-200 dark:border-slate-700 rounded-b-2xl p-6">
          {/* Three Pillars */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {(t('pages.idsa.diagram.pillars', { returnObjects: true }) as string[]).map((pillarTitle, i) => {
              const icons = [Lock, Award, FileText];
              const colors = ['blue', 'green', 'orange'];
              const Icon = icons[i] || Lock;
              const color = colors[i] || 'blue';
              const descriptions = t('pages.idsa.diagram.pillarDescriptions', { returnObjects: true }) as string[];
              const badges = t('pages.idsa.diagram.pillarBadges', { returnObjects: true }) as string[];
              
              return (
                <div key={i} className={`bg-white dark:bg-slate-800 rounded-xl p-5 border-2 border-${color}-200 dark:border-${color}-800 shadow-sm`}>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-${color}-500 to-${color}-600 flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">{pillarTitle}</h4>
                  <p className="text-sm text-muted-foreground">{descriptions[i]}</p>
                  <div className="mt-3 flex gap-2">
                    <span className={`text-xs px-2 py-1 bg-${color}-100 dark:bg-${color}-900/30 text-${color}-700 dark:text-${color}-300 rounded`}>
                      {badges[i]}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Compliance Flow */}
          <div className="bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-xl p-5">
            <p className="text-sm font-semibold text-center mb-4 text-muted-foreground">{t('pages.idsa.diagram.complianceFlow')}</p>
            <div className="flex flex-wrap justify-center items-center gap-3">
              <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-lg border shadow-sm">
                <Building2 className="w-4 h-4 text-orange-500" />
                <span className="text-sm font-medium">{t('pages.idsa.diagram.yourNode')}</span>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground hidden md:block" />
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg border border-blue-200">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium">{t('pages.idsa.diagram.idsaValidation')}</span>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground hidden md:block" />
              <div className="flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-lg border border-green-200">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium">{t('pages.idsa.diagram.gaiaxCertificate')}</span>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground hidden md:block" />
              <div className="flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg border border-purple-200">
                <Globe className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-medium">{t('pages.idsa.diagram.euInteroperability')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        {(t('pages.idsa.diagram.certifications', { returnObjects: true }) as string[]).map((cert, i) => {
          const colors = ['bg-blue-500', 'bg-indigo-500', 'bg-green-500', 'bg-purple-500'];
          return (
            <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 rounded-full border shadow-sm">
              <div className={`w-3 h-3 rounded-full ${colors[i]}`} />
              <span className="text-xs font-medium">{cert}</span>
            </div>
          );
        })}
      </div>
    </div>
  );

  const benefits = t('pages.idsa.benefits', { returnObjects: true }) as { title: string; desc: string }[];

  return (
    <NodeFeatureLayout
      title={t('pages.idsa.title')}
      subtitle={t('pages.idsa.subtitle')}
      icon={<ShieldCheck className="w-10 h-10" />}
      visualComponent={<VisualDiagram />}
      benefits={benefits}
    />
  );
};

export default GobernanzaIDSAPage;

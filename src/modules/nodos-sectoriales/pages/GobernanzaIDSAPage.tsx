import React from 'react';
import { ShieldCheck, Globe, CheckCircle, Lock, Award, FileText } from 'lucide-react';
import { NodeFeatureLayout } from './NodeFeatureLayout';
import { useTranslation } from 'react-i18next';

const GobernanzaIDSAPage = () => {
  const { t } = useTranslation('nodes');

  const VisualDiagram = () => (
    <div className="flex flex-col items-center gap-8 py-8">
      <div className="w-full max-w-4xl">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-t-2xl p-4 text-center">
          <div className="flex items-center justify-center gap-3">
            <Globe className="w-6 h-6 text-white" />
            <span className="text-white font-bold text-lg">{t('pages.idsa.diagram.ecosystem')}</span>
          </div>
        </div>
        <div className="bg-slate-50 dark:bg-slate-900/50 border-x-2 border-b-2 border-slate-200 dark:border-slate-700 rounded-b-2xl p-6">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { icon: Lock, title: t('pages.idsa.diagram.pillars.0'), color: 'blue' },
              { icon: Award, title: t('pages.idsa.diagram.pillars.1'), color: 'green' },
              { icon: FileText, title: t('pages.idsa.diagram.pillars.2'), color: 'orange' }
            ].map((pillar, i) => (
              <div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-5 border shadow-sm">
                <div className={`w-12 h-12 rounded-xl bg-${pillar.color}-500 flex items-center justify-center mb-4`}>
                  <pillar.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-foreground">{pillar.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        {(t('pages.idsa.diagram.certifications', { returnObjects: true }) as string[]).map((cert, i) => (
          <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 rounded-full border shadow-sm">
            <CheckCircle className="w-3 h-3 text-green-500" />
            <span className="text-xs font-medium">{cert}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const benefits = (t('pages.idsa.benefits', { returnObjects: true }) as { title: string; desc: string }[]);

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

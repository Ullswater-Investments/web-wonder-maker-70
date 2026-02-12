import React from 'react';
import { Wallet, Euro, Building2, Zap, Shield, Clock, CheckCircle } from 'lucide-react';
import { NodeFeatureLayout } from './NodeFeatureLayout';
import { useTranslation } from 'react-i18next';

const PagosEUROePage = () => {
  const { t } = useTranslation('nodes');

  const VisualDiagram = () => (
    <div className="flex flex-col items-center gap-8 py-8">
      <div className="flex flex-col md:flex-row items-center gap-6 w-full max-w-4xl">
        <div className="flex flex-col items-center gap-3">
          <div className="w-24 h-24 rounded-2xl bg-blue-100 dark:bg-blue-900/30 border-2 border-blue-300 flex items-center justify-center shadow-lg">
            <Building2 className="w-10 h-10 text-blue-600" />
          </div>
          <span className="text-sm font-semibold">{t('pages.euroe.diagram.buyer')}</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="px-4 py-2 bg-primary text-white rounded-full font-bold flex items-center gap-2">
            <Euro className="w-4 h-4" /><span>7,000 EUROe</span>
          </div>
        </div>
        <div className="w-40 h-40 rounded-2xl bg-slate-800 border-2 border-primary flex flex-col items-center justify-center shadow-xl">
          <Zap className="w-8 h-8 text-[hsl(209,100%,75%)] mb-2" />
          <p className="text-white text-xs font-medium">{t('pages.euroe.diagram.revenueSplitter')}</p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 px-4 py-3 bg-green-50 dark:bg-green-900/20 rounded-xl border-2 border-green-400">
            <div className="text-lg font-bold text-green-700">5,600 €</div>
            <span className="text-sm">{t('pages.euroe.diagram.provider')} (80%)</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl border-2 border-blue-400">
            <div className="text-lg font-bold text-blue-700">1,400 €</div>
            <span className="text-sm">{t('pages.euroe.diagram.promoter')} (20%)</span>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        {[
          { icon: Zap, label: t('pages.euroe.diagram.badges.0') },
          { icon: Shield, label: t('pages.euroe.diagram.badges.1') },
          { icon: Clock, label: t('pages.euroe.diagram.badges.2') },
          { icon: CheckCircle, label: t('pages.euroe.diagram.badges.3') }
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-full border">
            <item.icon className="w-4 h-4 text-primary" />
            <span className="text-xs font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const benefits = (t('pages.euroe.benefits', { returnObjects: true }) as { title: string; desc: string }[]);

  return (
    <NodeFeatureLayout
      title={t('pages.euroe.title')}
      subtitle={t('pages.euroe.subtitle')}
      icon={<Wallet className="w-10 h-10" />}
      visualComponent={<VisualDiagram />}
      benefits={benefits}
    />
  );
};

export default PagosEUROePage;
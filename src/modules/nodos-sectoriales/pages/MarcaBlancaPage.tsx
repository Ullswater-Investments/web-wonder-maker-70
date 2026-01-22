import React from 'react';
import { Palette, Globe, Monitor, Sparkles } from 'lucide-react';
import { NodeFeatureLayout } from './NodeFeatureLayout';
import { useTranslation } from 'react-i18next';

const MarcaBlancaPage = () => {
  const { t } = useTranslation('nodes');

  const MarcaBlancaDiagram = () => (
    <div className="flex flex-col items-center py-8">
      {/* Browser Mockup */}
      <div className="w-full max-w-2xl bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
        {/* Browser Chrome */}
        <div className="bg-slate-100 dark:bg-slate-900 px-4 py-3 border-b border-slate-200 dark:border-slate-700 flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-amber-400" />
            <div className="w-3 h-3 rounded-full bg-emerald-400" />
          </div>
          {/* URL Bar - Customizable */}
          <div className="flex-1 flex items-center justify-center">
            <div className="relative bg-white dark:bg-slate-800 rounded-lg px-4 py-1.5 border-2 border-orange-400 shadow-sm">
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-orange-500" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">datos.<span className="text-orange-600 font-bold">{t('pages.whiteLabel.diagram.yourDomain')}</span></span>
              </div>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="p-6">
          {/* Header - Logo Area */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100 dark:border-slate-700">
            <div className="relative">
              <div className="bg-gradient-to-r from-orange-100 to-orange-50 dark:from-orange-900/30 dark:to-orange-800/20 border-2 border-dashed border-orange-400 rounded-lg px-6 py-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                    <Sparkles className="h-4 w-4 text-white" />
                  </div>
                  <span className="font-bold text-orange-600">{t('pages.whiteLabel.diagram.logo')}</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="h-8 w-16 bg-slate-100 dark:bg-slate-700 rounded-lg" />
              <div className="h-8 w-16 bg-slate-100 dark:bg-slate-700 rounded-lg" />
            </div>
          </div>

          {/* Hero Section Mockup */}
          <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-6 mb-6">
            <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-3/4 mb-3" />
            <div className="h-3 bg-slate-100 dark:bg-slate-800 rounded w-1/2 mb-4" />
            <div className="flex gap-3">
              {/* Primary Button - Customizable */}
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg px-6 py-2 text-white text-sm font-medium">
                {t('pages.whiteLabel.diagram.primaryAction')}
              </div>
              <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-6 py-2 text-slate-600 dark:text-slate-400 text-sm">
                Secundario
              </div>
            </div>
          </div>

          {/* Grid Mockup */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-slate-50 dark:bg-slate-900/50 rounded-lg p-3">
                <div className="h-16 bg-slate-100 dark:bg-slate-800 rounded mb-2" />
                <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded w-3/4" />
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-center pt-4 border-t border-slate-100 dark:border-slate-700">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span>Powered by</span>
              <span className="font-semibold text-slate-500">ProcureData</span>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badge */}
      <div className="mt-6 flex items-center gap-2 bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-full">
        <Monitor className="h-4 w-4 text-slate-500" />
        <span className="text-sm text-slate-600 dark:text-slate-400">{t('pages.whiteLabel.diagram.certifiedTech')}</span>
      </div>
    </div>
  );

  const benefits = (t('pages.whiteLabel.benefits', { returnObjects: true }) as { title: string; desc: string }[]);

  return (
    <NodeFeatureLayout
      title={t('pages.whiteLabel.title')}
      subtitle={t('pages.whiteLabel.subtitle')}
      icon={<Palette className="h-10 w-10" />}
      visualComponent={<MarcaBlancaDiagram />}
      benefits={benefits}
    />
  );
};

export default MarcaBlancaPage;

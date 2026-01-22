import React from 'react';
import { Wallet, Coins, ArrowDown, Building2, Users, Zap } from 'lucide-react';
import { NodeFeatureLayout } from './NodeFeatureLayout';
import { useTranslation } from 'react-i18next';

const MonetizacionPage = () => {
  const { t } = useTranslation('nodes');

  const MonetizacionDiagram = () => (
    <div className="flex flex-col items-center py-8">
      {/* Transaction Input */}
      <div className="flex items-center gap-3 bg-white dark:bg-slate-800 px-6 py-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
          <Zap className="h-6 w-6 text-white" />
        </div>
        <div>
          <div className="font-semibold text-slate-800 dark:text-slate-200">{t('pages.monetization.diagram.dataInput')}</div>
          <div className="text-sm text-slate-500">{t('pages.monetization.diagram.totalValue')}</div>
        </div>
      </div>

      <ArrowDown className="h-6 w-6 text-slate-400 mb-4" />

      {/* Total Amount */}
      <div className="bg-gradient-to-br from-amber-400 to-amber-500 rounded-2xl px-8 py-4 shadow-lg shadow-amber-500/20 mb-6">
        <div className="flex items-center gap-3">
          <Coins className="h-8 w-8 text-white" />
          <div>
            <div className="text-xs text-amber-100 font-medium">{t('pages.monetization.diagram.totalValue')}</div>
            <div className="text-2xl font-bold text-white">7.000 EUROe</div>
          </div>
        </div>
      </div>

      {/* Split Arrows */}
      <div className="flex items-center gap-20 mb-4">
        <div className="flex flex-col items-center">
          <ArrowDown className="h-6 w-6 text-emerald-500" />
          <div className="text-xs font-semibold text-emerald-600 mt-1">80%</div>
        </div>
        <div className="flex flex-col items-center">
          <ArrowDown className="h-6 w-6 text-orange-500" />
          <div className="text-xs font-semibold text-orange-600 mt-1">20%</div>
        </div>
      </div>

      {/* Recipients */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Provider */}
        <div className="flex flex-col items-center">
          <div className="bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl p-6 border border-emerald-200 dark:border-emerald-800 min-w-[200px]">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
                <Building2 className="h-5 w-5 text-white" />
              </div>
              <div className="font-semibold text-emerald-800 dark:text-emerald-300">{t('pages.monetization.diagram.provider')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-700 dark:text-emerald-400">5.600€</div>
              <div className="text-xs text-emerald-600 dark:text-emerald-500 mt-1">{t('pages.monetization.diagram.settlement')}</div>
            </div>
          </div>
        </div>

        {/* Node Promoter */}
        <div className="flex flex-col items-center">
          <div className="bg-orange-100 dark:bg-orange-900/30 rounded-2xl p-6 border border-orange-200 dark:border-orange-800 min-w-[200px]">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <Users className="h-5 w-5 text-white" />
              </div>
              <div className="font-semibold text-orange-800 dark:text-orange-300">{t('pages.monetization.diagram.promoter')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-700 dark:text-orange-400">1.400€</div>
              <div className="text-xs text-orange-600 dark:text-orange-500 mt-1">{t('pages.monetization.diagram.instant')}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Token Badge */}
      <div className="mt-8 flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-full">
        <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
          <span className="text-[10px] font-bold text-white">€</span>
        </div>
        <span className="text-sm text-slate-200">{t('pages.monetization.diagram.settlement')} <span className="font-semibold text-white">EUROe Stablecoin</span></span>
      </div>
    </div>
  );

  const benefits = (t('pages.monetization.benefits', { returnObjects: true }) as { title: string; desc: string }[]);

  return (
    <NodeFeatureLayout
      title={t('pages.monetization.title')}
      subtitle={t('pages.monetization.subtitle')}
      icon={<Wallet className="h-10 w-10" />}
      visualComponent={<MonetizacionDiagram />}
      benefits={benefits}
    />
  );
};

export default MonetizacionPage;

import React from 'react';
import { Wallet, ArrowRight, Euro, Building2, Zap, Shield, Clock, CheckCircle, ArrowDown } from 'lucide-react';
import { NodeFeatureLayout } from './NodeFeatureLayout';
import { useTranslation } from 'react-i18next';

const PagosEUROePage = () => {
  const { t } = useTranslation('nodes');

  const VisualDiagram = () => (
    <div className="flex flex-col items-center gap-8 py-8">
      {/* Payment Flow */}
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 w-full max-w-4xl">
        {/* Buyer */}
        <div className="flex flex-col items-center gap-3">
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 border-2 border-blue-300 flex items-center justify-center shadow-lg">
            <Building2 className="w-10 h-10 text-blue-600" />
          </div>
          <span className="text-sm font-semibold">{t('pages.euroe.diagram.buyer')}</span>
          <div className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full">
            <span className="text-xs text-blue-700 dark:text-blue-300">Wallet: 0x7a...3f</span>
          </div>
        </div>

        {/* Arrow with Amount */}
        <div className="flex flex-col items-center gap-2">
          <div className="hidden md:flex items-center">
            <div className="w-12 h-0.5 bg-gradient-to-r from-blue-400 to-orange-400" />
            <div className="px-4 py-2 bg-orange-500 text-white rounded-full font-bold shadow-lg flex items-center gap-2">
              <Euro className="w-4 h-4" />
              <span>7,000</span>
            </div>
            <div className="w-12 h-0.5 bg-gradient-to-r from-orange-400 to-green-400" />
            <ArrowRight className="w-5 h-5 text-green-500" />
          </div>
          <div className="md:hidden flex flex-col items-center">
            <ArrowDown className="w-5 h-5 text-orange-500" />
            <div className="px-4 py-2 bg-orange-500 text-white rounded-full font-bold shadow-lg flex items-center gap-2 my-2">
              <Euro className="w-4 h-4" />
              <span>7,000 EUROe</span>
            </div>
            <ArrowDown className="w-5 h-5 text-orange-500" />
          </div>
          <span className="text-xs text-muted-foreground">{t('pages.euroe.diagram.tokenEuroe')}</span>
        </div>

        {/* Smart Contract Splitter */}
        <div className="relative">
          <div className="w-40 h-40 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-orange-500 flex flex-col items-center justify-center shadow-xl">
            <div className="absolute -top-3 px-3 py-1 bg-orange-500 rounded-full">
              <span className="text-[10px] font-bold text-white">SMART CONTRACT</span>
            </div>
            <Zap className="w-8 h-8 text-orange-400 mb-2" />
            <p className="text-white text-xs font-medium text-center">{t('pages.euroe.diagram.revenueSplitter')}</p>
          </div>
        </div>

        {/* Split Arrows */}
        <div className="flex flex-col gap-4">
          {/* To Provider */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center">
              <div className="w-8 h-0.5 bg-green-400" />
              <ArrowRight className="w-4 h-4 text-green-500" />
            </div>
            <div className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border-2 border-green-400">
              <div className="text-right">
                <p className="text-lg font-bold text-green-700 dark:text-green-400">5,600 €</p>
                <p className="text-xs text-green-600">80%</p>
              </div>
              <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold">{t('pages.euroe.diagram.provider')}</p>
                <p className="text-xs text-muted-foreground">{t('pages.euroe.diagram.dataOwner')}</p>
              </div>
            </div>
          </div>

          {/* To Node Promoter */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center">
              <div className="w-8 h-0.5 bg-orange-400" />
              <ArrowRight className="w-4 h-4 text-orange-500" />
            </div>
            <div className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-orange-50 to-amber-100 dark:from-orange-900/20 dark:to-amber-900/20 rounded-xl border-2 border-orange-400">
              <div className="text-right">
                <p className="text-lg font-bold text-orange-700 dark:text-orange-400">1,400 €</p>
                <p className="text-xs text-orange-600">20%</p>
              </div>
              <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold">{t('pages.euroe.diagram.promoter')}</p>
                <p className="text-xs text-muted-foreground">{t('pages.euroe.diagram.commission')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* EUROe Badge */}
      <div className="mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 text-white max-w-xl">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
            <span className="text-3xl font-bold text-blue-600">€</span>
          </div>
          <div>
            <p className="font-bold text-lg">{t('pages.euroe.diagram.tokenTitle')}</p>
            <p className="text-blue-100 text-sm">{t('pages.euroe.diagram.tokenDescription')}</p>
          </div>
        </div>
      </div>

      {/* Bottom Features */}
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        {(t('pages.euroe.diagram.badges', { returnObjects: true }) as string[]).map((label, i) => {
          const icons = [Zap, Shield, Clock, CheckCircle];
          const Icon = icons[i] || Zap;
          return (
            <div key={i} className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-full border">
              <Icon className="w-4 h-4 text-orange-500" />
              <span className="text-xs font-medium">{label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );

  const benefits = t('pages.euroe.benefits', { returnObjects: true }) as { title: string; desc: string }[];

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

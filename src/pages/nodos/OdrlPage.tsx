import React from 'react';
import { FileKey, Lock, ArrowDown, CheckCircle2, XCircle } from 'lucide-react';
import { NodeFeatureLayout } from './NodeFeatureLayout';
import { useTranslation } from 'react-i18next';

const OdrlDiagram = () => {
  const { t } = useTranslation('nodes');

  return (
    <div className="flex flex-col items-center py-8">
      {/* Step 1: Input */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl border border-slate-200 shadow-sm">
          <Lock className="h-6 w-6 text-slate-600" />
          <div>
            <div className="font-medium text-slate-800">{t('pages.odrl.diagram.input')}</div>
            <div className="text-xs text-slate-500">"Patentes_2024.pdf"</div>
          </div>
        </div>
      </div>

      <ArrowDown className="h-6 w-6 text-slate-400 mb-4" />

      {/* Step 2: Smart Contract Engine */}
      <div className="bg-gradient-to-br from-[hsl(209,100%,65%)] to-[hsl(213,37%,18%)] rounded-2xl p-6 shadow-lg shadow-primary/20 mb-6">
        <div className="text-center text-white mb-4">
          <div className="text-sm font-medium opacity-80">{t('pages.odrl.diagram.rulesEngine')}</div>
          <div className="text-lg font-bold">{t('pages.odrl.diagram.engine')}</div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 bg-white/20 rounded-lg px-4 py-2">
            <span className="text-blue-200 font-mono text-sm">IF</span>
            <span className="text-white text-sm">{t('pages.odrl.diagram.condition1')}</span>
          </div>
          <div className="flex items-center gap-2 bg-white/20 rounded-lg px-4 py-2">
            <span className="text-blue-200 font-mono text-sm">AND</span>
            <span className="text-white text-sm">{t('pages.odrl.diagram.condition2')}</span>
          </div>
          <div className="flex items-center gap-2 bg-white/20 rounded-lg px-4 py-2">
            <span className="text-blue-200 font-mono text-sm">AND</span>
            <span className="text-white text-sm">{t('pages.odrl.diagram.condition3')}</span>
          </div>
        </div>
      </div>

      {/* Branching Arrows */}
      <div className="flex items-center gap-16 mb-6">
        <ArrowDown className="h-6 w-6 text-emerald-500 rotate-[-30deg]" />
        <ArrowDown className="h-6 w-6 text-red-500 rotate-[30deg]" />
      </div>

      {/* Step 3: Outputs */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Success Case */}
        <div className="flex flex-col items-center">
          <div className="bg-emerald-100 rounded-2xl p-6 border border-emerald-200">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                <CheckCircle2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="font-semibold text-emerald-800">{t('pages.odrl.diagram.allowed')}</div>
                <div className="text-xs text-emerald-600">{t('pages.odrl.diagram.hashGenerated')}</div>
              </div>
            </div>
          </div>
          <div className="mt-2 text-xs text-emerald-600 font-medium">{t('pages.odrl.diagram.conditionsMet')}</div>
        </div>

        {/* Fail Case */}
        <div className="flex flex-col items-center">
          <div className="bg-red-100 rounded-2xl p-6 border border-red-200">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                <XCircle className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="font-semibold text-red-800">{t('pages.odrl.diagram.blocked')}</div>
                <div className="text-xs text-red-600">{t('pages.odrl.diagram.dataEncrypted')}</div>
              </div>
            </div>
          </div>
          <div className="mt-2 text-xs text-red-600 font-medium">{t('pages.odrl.diagram.conditionFailed')}</div>
        </div>
      </div>
    </div>
  );
};

const OdrlPage = () => {
  const { t } = useTranslation('nodes');
  const benefits = t('pages.odrl.benefits', { returnObjects: true }) as { title: string; desc: string }[];

  return (
    <NodeFeatureLayout
      title={t('pages.odrl.title')}
      subtitle={t('pages.odrl.subtitle')}
      icon={<FileKey className="h-10 w-10" />}
      visualComponent={<OdrlDiagram />}
      benefits={benefits}
    />
  );
};

export default OdrlPage;
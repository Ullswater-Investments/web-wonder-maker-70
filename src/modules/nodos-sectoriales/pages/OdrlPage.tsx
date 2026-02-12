import React from 'react';
import { FileKey, Lock, ArrowDown, CheckCircle2, XCircle } from 'lucide-react';
import { NodeFeatureLayout } from './NodeFeatureLayout';
import { useTranslation } from 'react-i18next';

const OdrlPage = () => {
  const { t } = useTranslation('nodes');

  const OdrlDiagram = () => (
    <div className="flex flex-col items-center py-8">
      {/* Step 1: Input */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center gap-3 bg-white dark:bg-slate-800 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
          <Lock className="h-6 w-6 text-slate-600 dark:text-slate-400" />
          <div>
            <div className="font-medium text-slate-800 dark:text-slate-200">{t('pages.odrl.diagram.input')}</div>
            <div className="text-xs text-slate-500">"Patentes_2024.pdf"</div>
          </div>
        </div>
      </div>

      <ArrowDown className="h-6 w-6 text-slate-400 mb-4" />

      {/* Step 2: Smart Contract Engine */}
      <div className="bg-gradient-to-br from-[hsl(209,100%,65%)] to-[hsl(213,37%,18%)] rounded-2xl p-6 shadow-lg shadow-primary/20 mb-6">
        <div className="text-center text-white mb-4">
          <div className="text-sm font-medium opacity-80">{t('pages.odrl.diagram.engine')}</div>
          <div className="text-lg font-bold">{t('pages.odrl.diagram.rules')}</div>
        </div>
        <div className="flex flex-col gap-2">
          {(t('pages.odrl.diagram.rulesList', { returnObjects: true }) as string[]).map((rule, i) => (
            <div key={i} className="flex items-center gap-2 bg-white/20 rounded-lg px-4 py-2">
              <span className="text-blue-200 font-mono text-sm">{i === 0 ? 'IF' : 'AND'}</span>
              <span className="text-white text-sm">{rule}</span>
            </div>
          ))}
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
          <div className="bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl p-6 border border-emerald-200 dark:border-emerald-800">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                <CheckCircle2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="font-semibold text-emerald-800 dark:text-emerald-300">{t('pages.odrl.diagram.allowed')}</div>
                <div className="text-xs text-emerald-600 dark:text-emerald-400">Hash de verificación generado</div>
              </div>
            </div>
          </div>
          <div className="mt-2 text-xs text-emerald-600 font-medium">{t('pages.odrl.diagram.conditionMet')}</div>
        </div>

        {/* Fail Case */}
        <div className="flex flex-col items-center">
          <div className="bg-red-100 dark:bg-red-900/30 rounded-2xl p-6 border border-red-200 dark:border-red-800">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                <XCircle className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="font-semibold text-red-800 dark:text-red-300">{t('pages.odrl.diagram.blocked')}</div>
                <div className="text-xs text-red-600 dark:text-red-400">Dato permanece encriptado</div>
              </div>
            </div>
          </div>
          <div className="mt-2 text-xs text-red-600 font-medium">{t('pages.odrl.diagram.conditionNotMet')}</div>
        </div>
      </div>
    </div>
  );

  const benefits = (t('pages.odrl.benefits', { returnObjects: true }) as { title: string; desc: string }[]);

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
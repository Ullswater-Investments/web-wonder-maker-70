import React from 'react';
import { FileCode, GitBranch, CheckCircle, XCircle, ArrowRight, Lock, Coins, Shield, Zap } from 'lucide-react';
import { NodeFeatureLayout } from './NodeFeatureLayout';
import { useTranslation } from 'react-i18next';

const SmartContractsPage = () => {
  const { t } = useTranslation('nodes');

  const VisualDiagram = () => (
    <div className="flex flex-col items-center gap-8 py-8">
      {/* Contract Flow */}
      <div className="flex flex-col items-center gap-6">
        {/* Smart Contract Header */}
        <div className="relative w-full max-w-md">
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-6 border border-primary/50 shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <FileCode className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white font-bold">{t('pages.smartContracts.diagram.title')}</p>
                <p className="text-blue-300 text-xs">{t('pages.smartContracts.diagram.fileName')}</p>
              </div>
            </div>
            
            {/* Contract Code Representation */}
            <div className="bg-black/50 rounded-lg p-4 font-mono text-xs space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-purple-400">{t('pages.smartContracts.diagram.contract')}</span>
                <span className="text-blue-400">DataLicense</span>
                <span className="text-slate-500">{'{'}</span>
              </div>
              <div className="pl-4 flex items-center gap-2">
                <span className="text-blue-400">{t('pages.smartContracts.diagram.permission')}:</span>
                <span className="text-green-400">"read"</span>
              </div>
              <div className="pl-4 flex items-center gap-2">
                <span className="text-blue-400">{t('pages.smartContracts.diagram.constraint')}:</span>
                <span className="text-yellow-400">isMember(buyer)</span>
              </div>
              <div className="pl-4 flex items-center gap-2">
                <span className="text-blue-400">{t('pages.smartContracts.diagram.price')}:</span>
                <span className="text-green-400">50 EUROe</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-500">{'}'}</span>
              </div>
            </div>
          </div>
          {/* Blockchain indicator */}
          <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center shadow-lg animate-pulse">
            <Lock className="w-4 h-4 text-white" />
          </div>
        </div>

        {/* Execution Arrow */}
        <div className="flex flex-col items-center">
          <Zap className="w-6 h-6 text-primary animate-bounce" />
          <span className="text-xs text-muted-foreground mt-1">{t('pages.smartContracts.diagram.automaticExecution')}</span>
        </div>

        {/* Branching Outcomes */}
        <div className="flex flex-col md:flex-row gap-6 w-full max-w-2xl">
          {/* Success Path */}
          <div className="flex-1 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-6 border-2 border-green-400">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-green-700 dark:text-green-400">{t('pages.smartContracts.diagram.conditionsMet')}</span>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>✓ {t('pages.smartContracts.diagram.buyerVerified')}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>✓ {t('pages.smartContracts.diagram.paymentConfirmed')}</span>
              </div>
              <div className="mt-4 bg-green-200 dark:bg-green-800/30 rounded-lg p-3 text-center">
                <p className="text-sm font-semibold text-green-800 dark:text-green-300">
                  → {t('pages.smartContracts.diagram.dataTransferred')}
                </p>
              </div>
            </div>
          </div>

          {/* Failure Path */}
          <div className="flex-1 bg-gradient-to-br from-red-50 to-rose-100 dark:from-red-900/20 dark:to-rose-900/20 rounded-2xl p-6 border-2 border-red-400">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center">
                <XCircle className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-red-700 dark:text-red-400">{t('pages.smartContracts.diagram.conditionsNotMet')}</span>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <XCircle className="w-4 h-4 text-red-600" />
                <span>✗ {t('pages.smartContracts.diagram.buyerNotMember')}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-4 h-4" />
                <span>— {t('pages.smartContracts.diagram.paymentNotProcessed')}</span>
              </div>
              <div className="mt-4 bg-red-200 dark:bg-red-800/30 rounded-lg p-3 text-center">
                <p className="text-sm font-semibold text-red-800 dark:text-red-300">
                  → {t('pages.smartContracts.diagram.accessDenied')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Features */}
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        {(t('pages.smartContracts.diagram.badges', { returnObjects: true }) as string[]).map((label, i) => {
          const icons = [Shield, Zap, Lock, Coins];
          const Icon = icons[i] || Shield;
          return (
            <div key={i} className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-full border">
              <Icon className="w-4 h-4 text-primary" />
              <span className="text-xs font-medium">{label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );

  const benefits = t('pages.smartContracts.benefits', { returnObjects: true }) as { title: string; desc: string }[];

  return (
    <NodeFeatureLayout
      title={t('pages.smartContracts.title')}
      subtitle={t('pages.smartContracts.subtitle')}
      icon={<FileCode className="w-10 h-10" />}
      visualComponent={<VisualDiagram />}
      benefits={benefits}
    />
  );
};

export default SmartContractsPage;
import React from 'react';
import { FileCode, Lock, CheckCircle, XCircle, Shield, Zap, Coins } from 'lucide-react';
import { NodeFeatureLayout } from './NodeFeatureLayout';
import { useTranslation } from 'react-i18next';

const SmartContractsPage = () => {
  const { t } = useTranslation('nodes');

  const VisualDiagram = () => (
    <div className="flex flex-col items-center gap-8 py-8">
      <div className="relative w-full max-w-md">
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-6 border border-orange-500/50 shadow-xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center">
              <FileCode className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-white font-bold">{t('pages.smartContracts.diagram.title')}</p>
              <p className="text-orange-300 text-xs">{t('pages.smartContracts.diagram.fileName')}</p>
            </div>
          </div>
          <div className="bg-black/50 rounded-lg p-4 font-mono text-xs space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-purple-400">{t('pages.smartContracts.diagram.contract')}</span>
              <span className="text-orange-400">DataLicense</span>
            </div>
            <div className="pl-4"><span className="text-blue-400">{t('pages.smartContracts.diagram.permission')}:</span> <span className="text-green-400">"read"</span></div>
            <div className="pl-4"><span className="text-blue-400">{t('pages.smartContracts.diagram.constraint')}:</span> <span className="text-yellow-400">isMember(buyer)</span></div>
            <div className="pl-4"><span className="text-blue-400">{t('pages.smartContracts.diagram.price')}:</span> <span className="text-green-400">50 EUROe</span></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-2xl">
        <div className="flex-1 bg-green-50 dark:bg-green-900/20 rounded-2xl p-6 border-2 border-green-400">
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle className="w-8 h-8 text-green-500" />
            <span className="font-bold text-green-700 dark:text-green-400">{t('pages.smartContracts.diagram.conditionsMet')}</span>
          </div>
          <p className="text-sm text-green-600 dark:text-green-300">{t('pages.smartContracts.diagram.dataTransferred')}</p>
        </div>
        <div className="flex-1 bg-red-50 dark:bg-red-900/20 rounded-2xl p-6 border-2 border-red-400">
          <div className="flex items-center gap-3 mb-4">
            <XCircle className="w-8 h-8 text-red-500" />
            <span className="font-bold text-red-700 dark:text-red-400">{t('pages.smartContracts.diagram.conditionsNotMet')}</span>
          </div>
          <p className="text-sm text-red-600 dark:text-red-300">{t('pages.smartContracts.diagram.accessDenied')}</p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        {[
          { icon: Shield, label: t('pages.smartContracts.diagram.badges.0') },
          { icon: Zap, label: t('pages.smartContracts.diagram.badges.1') },
          { icon: Lock, label: t('pages.smartContracts.diagram.badges.2') },
          { icon: Coins, label: t('pages.smartContracts.diagram.badges.3') }
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-full border">
            <item.icon className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const benefits = (t('pages.smartContracts.benefits', { returnObjects: true }) as { title: string; desc: string }[]);

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

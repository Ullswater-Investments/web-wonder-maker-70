import React from 'react';
import { Server, Shield, Lock, Eye, EyeOff, Database, CheckCircle } from 'lucide-react';
import { NodeFeatureLayout } from './NodeFeatureLayout';
import { useTranslation } from 'react-i18next';

const MultiTenantRLSPage = () => {
  const { t } = useTranslation('nodes');

  const VisualDiagram = () => (
    <div className="flex flex-col items-center gap-8 py-8">
      <div className="w-full max-w-4xl">
        <div className="bg-slate-700 rounded-t-2xl p-4 flex items-center gap-3">
          <Database className="w-6 h-6 text-orange-400" />
          <span className="text-white font-bold">{t('pages.rls.diagram.sharedDb')}</span>
          <div className="ml-auto flex items-center gap-2">
            <Shield className="w-4 h-4 text-green-400" />
            <span className="text-green-400 text-sm">{t('pages.rls.diagram.rlsActive')}</span>
          </div>
        </div>
        <div className="bg-slate-50 dark:bg-slate-900/50 border-x-2 border-b-2 border-slate-200 dark:border-slate-700 rounded-b-2xl p-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-slate-200 dark:bg-slate-800">
                {(t('pages.rls.diagram.headers', { returnObjects: true }) as string[]).map((header, i) => (
                  <th key={i} className="px-4 py-3 text-left">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="bg-green-50 dark:bg-green-900/20 border-b">
                <td className="px-4 py-3">001</td>
                <td className="px-4 py-3">{t('pages.rls.diagram.telemetry')}</td>
                <td className="px-4 py-3"><span className="px-2 py-1 bg-blue-100 rounded text-xs">org_a</span></td>
                <td className="px-4 py-3"><Eye className="w-4 h-4 text-green-600 inline" /> {t('pages.rls.diagram.visible')}</td>
              </tr>
              <tr className="bg-red-50 dark:bg-red-900/20 opacity-50">
                <td className="px-4 py-3">003</td>
                <td className="px-4 py-3">█████████</td>
                <td className="px-4 py-3"><span className="px-2 py-1 bg-slate-200 rounded text-xs">org_b</span></td>
                <td className="px-4 py-3"><EyeOff className="w-4 h-4 text-red-500 inline" /> {t('pages.rls.diagram.hidden')}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        {[
          { icon: Shield, label: t('pages.rls.diagram.badges.0') },
          { icon: Lock, label: t('pages.rls.diagram.badges.1') },
          { icon: CheckCircle, label: t('pages.rls.diagram.badges.2') },
          { icon: Server, label: t('pages.rls.diagram.badges.3') }
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 rounded-full border shadow-sm">
            <item.icon className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const benefits = (t('pages.rls.benefits', { returnObjects: true }) as { title: string; desc: string }[]);

  return (
    <NodeFeatureLayout
      title={t('pages.rls.title')}
      subtitle={t('pages.rls.subtitle')}
      icon={<Server className="w-10 h-10" />}
      visualComponent={<VisualDiagram />}
      benefits={benefits}
    />
  );
};

export default MultiTenantRLSPage;

import React from 'react';
import { Server, Shield, Users, Lock, Eye, EyeOff, Database, CheckCircle, XCircle, Building2 } from 'lucide-react';
import { NodeFeatureLayout } from './NodeFeatureLayout';
import { useTranslation } from 'react-i18next';

const MultiTenantRLSPage = () => {
  const { t } = useTranslation('nodes');

  const VisualDiagram = () => (
    <div className="flex flex-col items-center gap-8 py-8">
      {/* Main Database Diagram */}
      <div className="w-full max-w-4xl">
        {/* Database Header */}
        <div className="bg-gradient-to-r from-slate-700 to-slate-800 rounded-t-2xl p-4 flex items-center gap-3">
          <Database className="w-6 h-6 text-[hsl(209,100%,75%)]" />
          <span className="text-white font-bold">{t('pages.rls.diagram.sharedDb')}</span>
          <div className="ml-auto flex items-center gap-2">
            <Shield className="w-4 h-4 text-green-400" />
            <span className="text-green-400 text-sm">{t('pages.rls.diagram.rlsActive')}</span>
          </div>
        </div>

        {/* Database Body with Rows */}
        <div className="bg-slate-50 dark:bg-slate-900/50 border-x-2 border-b-2 border-slate-200 dark:border-slate-700 rounded-b-2xl p-6">
          {/* Table Visualization */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-200 dark:bg-slate-800">
                  {(t('pages.rls.diagram.headers', { returnObjects: true }) as string[]).map((header, i) => (
                    <th key={i} className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground border-b">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="bg-green-50 dark:bg-green-900/20 border-b border-green-200 dark:border-green-800">
                  <td className="px-4 py-3 text-sm font-mono">001</td>
                  <td className="px-4 py-3 text-sm">{t('pages.rls.diagram.telemetry')}</td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs font-mono">org_a</span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4 text-green-600" />
                      <span className="text-xs text-green-600 font-medium">{t('pages.rls.diagram.visible')}</span>
                    </div>
                  </td>
                </tr>
                <tr className="bg-green-50 dark:bg-green-900/20 border-b border-green-200 dark:border-green-800">
                  <td className="px-4 py-3 text-sm font-mono">002</td>
                  <td className="px-4 py-3 text-sm">{t('pages.rls.diagram.energy')}</td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs font-mono">org_a</span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4 text-green-600" />
                      <span className="text-xs text-green-600 font-medium">{t('pages.rls.diagram.visible')}</span>
                    </div>
                  </td>
                </tr>
                <tr className="bg-red-50 dark:bg-red-900/20 border-b border-red-200 dark:border-red-800 opacity-50">
                  <td className="px-4 py-3 text-sm font-mono text-muted-foreground">003</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">█████████████</td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 bg-slate-200 dark:bg-slate-700 text-slate-500 rounded text-xs font-mono">org_b</span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <EyeOff className="w-4 h-4 text-red-500" />
                      <span className="text-xs text-red-500 font-medium">{t('pages.rls.diagram.hidden')}</span>
                    </div>
                  </td>
                </tr>
                <tr className="bg-red-50 dark:bg-red-900/20 opacity-50">
                  <td className="px-4 py-3 text-sm font-mono text-muted-foreground">004</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">█████████████</td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 bg-slate-200 dark:bg-slate-700 text-slate-500 rounded text-xs font-mono">org_c</span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <EyeOff className="w-4 h-4 text-red-500" />
                      <span className="text-xs text-red-500 font-medium">{t('pages.rls.diagram.hidden')}</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* RLS Policy Visualization */}
          <div className="mt-6 bg-slate-800 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <Lock className="w-4 h-4 text-[hsl(209,100%,75%)]" />
              <span className="text-[hsl(209,100%,75%)] text-sm font-semibold">{t('pages.rls.diagram.policyActive')}</span>
            </div>
            <div className="font-mono text-sm">
              <span className="text-purple-400">CREATE POLICY</span>
              <span className="text-white"> "tenant_isolation" </span>
              <span className="text-purple-400">ON</span>
              <span className="text-green-400"> data_assets</span>
              <br />
              <span className="text-purple-400 ml-4">USING</span>
              <span className="text-white"> (org_id = </span>
              <span className="text-yellow-400">auth.jwt()</span>
              <span className="text-white"> -&gt;&gt; </span>
              <span className="text-blue-400">'org_id'</span>
              <span className="text-white">);</span>
            </div>
          </div>
        </div>
      </div>

      {/* Multi-tenant Illustration */}
      <div className="flex flex-wrap justify-center gap-6 mt-4">
        {(t('pages.rls.diagram.clusters', { returnObjects: true }) as string[]).map((clusterName, i) => {
          const colors = ['from-blue-500 to-blue-600', 'from-green-500 to-green-600', 'from-purple-500 to-purple-600'];
          return (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${colors[i]} flex items-center justify-center shadow-lg`}>
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <span className="text-sm font-medium">{clusterName}</span>
              <span className="text-xs text-muted-foreground">{t('pages.rls.diagram.totalIsolation')}</span>
            </div>
          );
        })}
      </div>

      {/* Features */}
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        {(t('pages.rls.diagram.badges', { returnObjects: true }) as string[]).map((label, i) => {
          const icons = [Shield, Lock, CheckCircle, Server];
          const Icon = icons[i] || Shield;
          return (
            <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 rounded-full border shadow-sm">
              <Icon className="w-4 h-4 text-primary" />
              <span className="text-xs font-medium">{label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );

  const benefits = t('pages.rls.benefits', { returnObjects: true }) as { title: string; desc: string }[];

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
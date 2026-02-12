import React from 'react';
import { Network, Database, ArrowLeftRight, CheckCircle, Server, Plug, RefreshCw, Shield } from 'lucide-react';
import { NodeFeatureLayout } from './NodeFeatureLayout';
import { useTranslation } from 'react-i18next';

const ConectoresERPPage = () => {
  const { t } = useTranslation('nodes');

  const VisualDiagram = () => (
    <div className="flex flex-col items-center gap-8 py-8">
      {/* Main Integration Flow */}
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 w-full max-w-5xl">
        {/* ERP Systems */}
        <div className="flex flex-col gap-4">
          <p className="text-sm font-semibold text-center text-muted-foreground mb-2">{t('pages.erp.diagram.yourSystem')}</p>
          {[
            { name: 'SAP S/4HANA', color: 'from-blue-500 to-blue-600' },
            { name: 'Microsoft D365', color: 'from-green-500 to-green-600' },
            { name: 'Oracle NetSuite', color: 'from-red-500 to-red-600' },
            { name: 'Odoo / Custom', color: 'from-purple-500 to-purple-600' }
          ].map((erp, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${erp.color} flex items-center justify-center shadow-lg`}>
                <Database className="w-6 h-6 text-white" />
              </div>
              <div className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg border min-w-[140px]">
                <span className="text-sm font-medium">{erp.name}</span>
              </div>
              <ArrowLeftRight className="w-5 h-5 text-primary hidden md:block" />
            </div>
          ))}
        </div>

        {/* Central Connector Hub */}
        <div className="relative">
          <div className="w-52 h-52 rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-primary flex flex-col items-center justify-center shadow-xl">
            <div className="absolute -top-3 px-4 py-1 bg-primary rounded-full">
              <span className="text-xs font-bold text-white">{t('pages.erp.diagram.universalConnector')}</span>
            </div>
            <Network className="w-14 h-14 text-[hsl(209,100%,75%)] mb-3" />
            <div className="text-center">
              <p className="text-white text-sm font-bold">{t('pages.erp.diagram.bridge')}</p>
            </div>
            <div className="mt-3 flex gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" style={{ animationDelay: '0.2s' }} />
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" style={{ animationDelay: '0.4s' }} />
            </div>
          </div>
          {/* Connection lines */}
          <div className="absolute left-0 top-1/2 -translate-x-full hidden md:flex items-center">
            <div className="w-8 h-0.5 bg-primary" />
          </div>
          <div className="absolute right-0 top-1/2 translate-x-full hidden md:flex items-center">
            <div className="w-8 h-0.5 bg-primary" />
          </div>
        </div>

        {/* Data Space Output */}
        <div className="flex flex-col gap-4">
          <p className="text-sm font-semibold text-center text-muted-foreground mb-2">{t('pages.erp.diagram.dataSpace')}</p>
          {(t('pages.erp.diagram.outputs', { returnObjects: true }) as string[]).map((output, i) => {
            const icons = [Server, Shield, RefreshCw, Plug];
            const Icon = icons[i] || Server;
            return (
              <div key={i} className="flex items-center gap-3">
                <ArrowLeftRight className="w-5 h-5 text-primary hidden md:block" />
                <div className="px-4 py-2 bg-gradient-to-r from-blue-50 to-sky-50 dark:from-blue-900/20 dark:to-sky-900/20 rounded-lg border border-blue-200 dark:border-blue-800 min-w-[140px]">
                  <span className="text-sm font-medium">{output}</span>
                </div>
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[hsl(209,100%,65%)] to-[hsl(213,37%,18%)] flex items-center justify-center shadow-lg">
                  <Icon className="w-5 h-5 text-white" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Sync Info */}
      <div className="mt-6 bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-6 max-w-2xl border">
        <div className="flex items-center justify-center gap-8">
          <div className="text-center">
            <RefreshCw className="w-8 h-8 text-primary mx-auto mb-2 animate-spin" style={{ animationDuration: '3s' }} />
            <p className="text-sm font-semibold">{t('pages.erp.diagram.sync')}</p>
            <p className="text-xs text-muted-foreground">{t('pages.erp.diagram.bidirectional')}</p>
          </div>
          <div className="h-12 w-px bg-slate-300 dark:bg-slate-700" />
          <div className="text-center">
            <p className="text-2xl font-bold text-primary">&lt; 5 min</p>
            <p className="text-xs text-muted-foreground">{t('pages.erp.diagram.setupTime')}</p>
          </div>
          <div className="h-12 w-px bg-slate-300 dark:bg-slate-700" />
          <div className="text-center">
            <p className="text-2xl font-bold text-green-500">0</p>
            <p className="text-xs text-muted-foreground">{t('pages.erp.diagram.codeRequired')}</p>
          </div>
        </div>
      </div>

      {/* Supported Protocols */}
      <div className="flex flex-wrap justify-center gap-3 mt-4">
        {(t('pages.erp.diagram.protocols', { returnObjects: true }) as string[]).map((proto, i) => (
          <div key={i} className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-900 rounded-full border shadow-sm">
            <CheckCircle className="w-3 h-3 text-green-500" />
            <span className="text-xs font-medium">{proto}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const benefits = t('pages.erp.benefits', { returnObjects: true }) as { title: string; desc: string }[];

  return (
    <NodeFeatureLayout
      title={t('pages.erp.title')}
      subtitle={t('pages.erp.subtitle')}
      icon={<Network className="w-10 h-10" />}
      visualComponent={<VisualDiagram />}
      benefits={benefits}
    />
  );
};

export default ConectoresERPPage;
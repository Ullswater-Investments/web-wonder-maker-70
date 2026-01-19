import React from 'react';
import { Network, Database, ArrowLeftRight, CheckCircle, Server, Plug, RefreshCw, Shield } from 'lucide-react';
import { NodeFeatureLayout } from './NodeFeatureLayout';

const ConectoresERPPage = () => {
  const VisualDiagram = () => (
    <div className="flex flex-col items-center gap-8 py-8">
      {/* Main Integration Flow */}
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 w-full max-w-5xl">
        {/* ERP Systems */}
        <div className="flex flex-col gap-4">
          <p className="text-sm font-semibold text-center text-muted-foreground mb-2">Tu Sistema</p>
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
              <ArrowLeftRight className="w-5 h-5 text-orange-500 hidden md:block" />
            </div>
          ))}
        </div>

        {/* Central Connector Hub */}
        <div className="relative">
          <div className="w-52 h-52 rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-orange-500 flex flex-col items-center justify-center shadow-xl">
            <div className="absolute -top-3 px-4 py-1 bg-orange-500 rounded-full">
              <span className="text-xs font-bold text-white">CONECTOR UNIVERSAL</span>
            </div>
            <Network className="w-14 h-14 text-orange-400 mb-3" />
            <div className="text-center">
              <p className="text-white text-sm font-bold">ProcureData</p>
              <p className="text-white text-sm font-bold">Bridge</p>
            </div>
            <div className="mt-3 flex gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" style={{ animationDelay: '0.2s' }} />
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" style={{ animationDelay: '0.4s' }} />
            </div>
          </div>
          {/* Connection lines */}
          <div className="absolute left-0 top-1/2 -translate-x-full hidden md:flex items-center">
            <div className="w-8 h-0.5 bg-orange-400" />
          </div>
          <div className="absolute right-0 top-1/2 translate-x-full hidden md:flex items-center">
            <div className="w-8 h-0.5 bg-orange-400" />
          </div>
        </div>

        {/* Data Space Output */}
        <div className="flex flex-col gap-4">
          <p className="text-sm font-semibold text-center text-muted-foreground mb-2">Espacio de Datos</p>
          {[
            { name: 'Catálogo Gaia-X', icon: Server },
            { name: 'Contratos ODRL', icon: Shield },
            { name: 'Transacciones', icon: RefreshCw },
            { name: 'Marketplace', icon: Plug }
          ].map((output, i) => (
            <div key={i} className="flex items-center gap-3">
              <ArrowLeftRight className="w-5 h-5 text-orange-500 hidden md:block" />
              <div className="px-4 py-2 bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 rounded-lg border border-orange-200 dark:border-orange-800 min-w-[140px]">
                <span className="text-sm font-medium">{output.name}</span>
              </div>
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg">
              <output.icon className="w-5 h-5 text-white" />
            </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sync Info */}
      <div className="mt-6 bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-6 max-w-2xl border">
        <div className="flex items-center justify-center gap-8">
          <div className="text-center">
            <RefreshCw className="w-8 h-8 text-orange-500 mx-auto mb-2 animate-spin" style={{ animationDuration: '3s' }} />
            <p className="text-sm font-semibold">Sincronización</p>
            <p className="text-xs text-muted-foreground">Bidireccional</p>
          </div>
          <div className="h-12 w-px bg-slate-300 dark:bg-slate-700" />
          <div className="text-center">
            <p className="text-2xl font-bold text-orange-500">&lt; 5 min</p>
            <p className="text-xs text-muted-foreground">Tiempo de Setup</p>
          </div>
          <div className="h-12 w-px bg-slate-300 dark:bg-slate-700" />
          <div className="text-center">
            <p className="text-2xl font-bold text-green-500">0</p>
            <p className="text-xs text-muted-foreground">Código Requerido</p>
          </div>
        </div>
      </div>

      {/* Supported Protocols */}
      <div className="flex flex-wrap justify-center gap-3 mt-4">
        {['REST API', 'GraphQL', 'OData', 'SOAP', 'Webhook', 'CSV/Excel'].map((proto, i) => (
          <div key={i} className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-900 rounded-full border shadow-sm">
            <CheckCircle className="w-3 h-3 text-green-500" />
            <span className="text-xs font-medium">{proto}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <NodeFeatureLayout
      title="Conectores ERP"
      subtitle="Integración plug-and-play con tu sistema de gestión. SAP, Microsoft, Oracle, Odoo... Sincroniza datos sin escribir una línea de código."
      icon={<Network className="w-10 h-10" />}
      visualComponent={<VisualDiagram />}
      benefits={[
        {
          title: "Zero Code Integration",
          desc: "Conecta tu ERP en minutos con nuestra interfaz visual. Sin necesidad de desarrolladores ni proyectos de integración de meses."
        },
        {
          title: "Sincronización Bidireccional",
          desc: "Los datos fluyen en ambas direcciones: exporta productos al Marketplace e importa transacciones completadas a tu ERP automáticamente."
        },
        {
          title: "Mapeo Inteligente de Campos",
          desc: "Nuestro sistema detecta automáticamente la estructura de tus datos y sugiere el mapeo óptimo hacia los estándares del Espacio de Datos."
        }
      ]}
    />
  );
};

export default ConectoresERPPage;

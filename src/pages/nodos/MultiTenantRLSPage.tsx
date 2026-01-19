import React from 'react';
import { Server, Shield, Users, Lock, Eye, EyeOff, Database, CheckCircle, XCircle, Building2 } from 'lucide-react';
import { NodeFeatureLayout } from './NodeFeatureLayout';

const MultiTenantRLSPage = () => {
  const VisualDiagram = () => (
    <div className="flex flex-col items-center gap-8 py-8">
      {/* Main Database Diagram */}
      <div className="w-full max-w-4xl">
        {/* Database Header */}
        <div className="bg-gradient-to-r from-slate-700 to-slate-800 rounded-t-2xl p-4 flex items-center gap-3">
          <Database className="w-6 h-6 text-orange-400" />
          <span className="text-white font-bold">Base de Datos Compartida</span>
          <div className="ml-auto flex items-center gap-2">
            <Shield className="w-4 h-4 text-green-400" />
            <span className="text-green-400 text-sm">RLS Activo</span>
          </div>
        </div>

        {/* Database Body with Rows */}
        <div className="bg-slate-50 dark:bg-slate-900/50 border-x-2 border-b-2 border-slate-200 dark:border-slate-700 rounded-b-2xl p-6">
          {/* Table Visualization */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-200 dark:bg-slate-800">
                  <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground border-b">ID</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground border-b">Dato</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground border-b">org_id (tenant)</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground border-b">Visibilidad</th>
                </tr>
              </thead>
              <tbody>
                {/* Row for Org A - Visible */}
                <tr className="bg-green-50 dark:bg-green-900/20 border-b border-green-200 dark:border-green-800">
                  <td className="px-4 py-3 text-sm font-mono">001</td>
                  <td className="px-4 py-3 text-sm">Telemetría Flota...</td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs font-mono">org_a</span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4 text-green-600" />
                      <span className="text-xs text-green-600 font-medium">Visible para Org A</span>
                    </div>
                  </td>
                </tr>
                {/* Row for Org A - Visible */}
                <tr className="bg-green-50 dark:bg-green-900/20 border-b border-green-200 dark:border-green-800">
                  <td className="px-4 py-3 text-sm font-mono">002</td>
                  <td className="px-4 py-3 text-sm">Consumo Energético...</td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs font-mono">org_a</span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4 text-green-600" />
                      <span className="text-xs text-green-600 font-medium">Visible para Org A</span>
                    </div>
                  </td>
                </tr>
                {/* Row for Org B - Hidden */}
                <tr className="bg-red-50 dark:bg-red-900/20 border-b border-red-200 dark:border-red-800 opacity-50">
                  <td className="px-4 py-3 text-sm font-mono text-muted-foreground">003</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">█████████████</td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 bg-slate-200 dark:bg-slate-700 text-slate-500 rounded text-xs font-mono">org_b</span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <EyeOff className="w-4 h-4 text-red-500" />
                      <span className="text-xs text-red-500 font-medium">Oculto para Org A</span>
                    </div>
                  </td>
                </tr>
                {/* Row for Org C - Hidden */}
                <tr className="bg-red-50 dark:bg-red-900/20 opacity-50">
                  <td className="px-4 py-3 text-sm font-mono text-muted-foreground">004</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">█████████████</td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 bg-slate-200 dark:bg-slate-700 text-slate-500 rounded text-xs font-mono">org_c</span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <EyeOff className="w-4 h-4 text-red-500" />
                      <span className="text-xs text-red-500 font-medium">Oculto para Org A</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* RLS Policy Visualization */}
          <div className="mt-6 bg-slate-800 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <Lock className="w-4 h-4 text-orange-400" />
              <span className="text-orange-400 text-sm font-semibold">Política RLS Activa</span>
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
              <span className="text-orange-400">'org_id'</span>
              <span className="text-white">);</span>
            </div>
          </div>
        </div>
      </div>

      {/* Multi-tenant Illustration */}
      <div className="flex flex-wrap justify-center gap-6 mt-4">
        {[
          { name: 'Clúster A', color: 'from-blue-500 to-blue-600', icon: Building2 },
          { name: 'Clúster B', color: 'from-green-500 to-green-600', icon: Building2 },
          { name: 'Clúster C', color: 'from-purple-500 to-purple-600', icon: Building2 }
        ].map((tenant, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${tenant.color} flex items-center justify-center shadow-lg`}>
              <tenant.icon className="w-8 h-8 text-white" />
            </div>
            <span className="text-sm font-medium">{tenant.name}</span>
            <span className="text-xs text-muted-foreground">Aislamiento total</span>
          </div>
        ))}
      </div>

      {/* Features */}
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        {[
          { icon: Shield, label: 'Aislamiento a nivel DB' },
          { icon: Lock, label: 'Zero Trust' },
          { icon: CheckCircle, label: 'GDPR Compliant' },
          { icon: Server, label: 'Escalabilidad infinita' }
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 rounded-full border shadow-sm">
            <item.icon className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <NodeFeatureLayout
      title="Multi-Tenant RLS"
      subtitle="Aislamiento de datos a nivel de base de datos. Cada organización solo ve sus propios datos, aunque todos comparten la misma infraestructura."
      icon={<Server className="w-10 h-10" />}
      visualComponent={<VisualDiagram />}
      benefits={[
        {
          title: "Aislamiento Total",
          desc: "Las políticas RLS (Row Level Security) se aplican a nivel de PostgreSQL. Es físicamente imposible que una organización acceda a datos de otra."
        },
        {
          title: "Eficiencia de Costes",
          desc: "Un solo despliegue sirve a múltiples organizaciones (tenants), reduciendo costes de infraestructura mientras mantiene seguridad enterprise."
        },
        {
          title: "Escalabilidad Lineal",
          desc: "Añadir nuevos clústeres o empresas es instantáneo. Solo se crea un nuevo org_id y el sistema aplica automáticamente las políticas de aislamiento."
        }
      ]}
    />
  );
};

export default MultiTenantRLSPage;

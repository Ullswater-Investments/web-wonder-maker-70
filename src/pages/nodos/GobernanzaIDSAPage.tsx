import React from 'react';
import { ShieldCheck, Globe, CheckCircle, FileText, Users, Lock, Award, Building2, ArrowRight } from 'lucide-react';
import { NodeFeatureLayout } from './NodeFeatureLayout';

const GobernanzaIDSAPage = () => {
  const VisualDiagram = () => (
    <div className="flex flex-col items-center gap-8 py-8">
      {/* IDSA Architecture */}
      <div className="w-full max-w-4xl">
        {/* Header - Gaia-X Ecosystem */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-t-2xl p-4 text-center">
          <div className="flex items-center justify-center gap-3">
            <Globe className="w-6 h-6 text-white" />
            <span className="text-white font-bold text-lg">Ecosistema Gaia-X / IDSA</span>
          </div>
        </div>

        {/* Main Body */}
        <div className="bg-slate-50 dark:bg-slate-900/50 border-x-2 border-b-2 border-slate-200 dark:border-slate-700 rounded-b-2xl p-6">
          {/* Three Pillars */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Connector */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-5 border-2 border-blue-200 dark:border-blue-800 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-foreground mb-2">IDS Connector</h4>
              <p className="text-sm text-muted-foreground">Gateway seguro que controla el flujo de datos según políticas ODRL.</p>
              <div className="mt-3 flex gap-2">
                <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded">Encriptación E2E</span>
              </div>
            </div>

            {/* Identity */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-5 border-2 border-green-200 dark:border-green-800 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-foreground mb-2">DAPS (Identity)</h4>
              <p className="text-sm text-muted-foreground">Servicio de aprovisionamiento de atributos dinámicos para identidades.</p>
              <div className="mt-3 flex gap-2">
                <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded">Certificados X.509</span>
              </div>
            </div>

            {/* Broker */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-5 border-2 border-orange-200 dark:border-orange-800 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-foreground mb-2">Metadata Broker</h4>
              <p className="text-sm text-muted-foreground">Catálogo federado de recursos de datos disponibles en el ecosistema.</p>
              <div className="mt-3 flex gap-2">
                <span className="text-xs px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded">Federated Catalog</span>
              </div>
            </div>
          </div>

          {/* Compliance Flow */}
          <div className="bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-xl p-5">
            <p className="text-sm font-semibold text-center mb-4 text-muted-foreground">Flujo de Validación de Conformidad</p>
            <div className="flex flex-wrap justify-center items-center gap-3">
              <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-lg border shadow-sm">
                <Building2 className="w-4 h-4 text-orange-500" />
                <span className="text-sm font-medium">Tu Nodo</span>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground hidden md:block" />
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg border border-blue-200">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium">Validación IDSA</span>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground hidden md:block" />
              <div className="flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-lg border border-green-200">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium">Certificado Gaia-X</span>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground hidden md:block" />
              <div className="flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg border border-purple-200">
                <Globe className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-medium">Interoperabilidad EU</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        {[
          { label: 'IDSA Certified', color: 'bg-blue-500' },
          { label: 'Gaia-X Compliant', color: 'bg-indigo-500' },
          { label: 'ISO 27001', color: 'bg-green-500' },
          { label: 'GDPR Ready', color: 'bg-purple-500' }
        ].map((cert, i) => (
          <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 rounded-full border shadow-sm">
            <div className={`w-3 h-3 rounded-full ${cert.color}`} />
            <span className="text-xs font-medium">{cert.label}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <NodeFeatureLayout
      title="Gobernanza IDSA"
      subtitle="Arquitectura de referencia certificada por la International Data Spaces Association. Tu nodo cumple con los estándares europeos de soberanía del dato."
      icon={<ShieldCheck className="w-10 h-10" />}
      visualComponent={<VisualDiagram />}
      benefits={[
        {
          title: "Certificación Oficial",
          desc: "ProcureData está basado en la arquitectura de referencia IDSA RAM 4.0 y cumple con los requisitos para certificación Gaia-X Trust Framework."
        },
        {
          title: "Interoperabilidad Garantizada",
          desc: "Tu nodo puede conectarse con cualquier otro Espacio de Datos certificado en Europa: Catena-X (Automoción), Manufacturing-X, AgriGaia, etc."
        },
        {
          title: "Soberanía por Diseño",
          desc: "Los datos nunca salen de tu infraestructura sin tu consentimiento explícito. El IDS Connector actúa como gateway de control total."
        }
      ]}
    />
  );
};

export default GobernanzaIDSAPage;

import React from 'react';
import { Fingerprint, User, Shield, Lock, CheckCircle, Globe, ArrowRight } from 'lucide-react';
import { NodeFeatureLayout } from './NodeFeatureLayout';
import { useTranslation } from 'react-i18next';

const IdentidadDIDPage = () => {
  const { t } = useTranslation('nodes');

  const VisualDiagram = () => (
    <div className="flex flex-col items-center gap-8 py-8">
      {/* Main Flow */}
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
        {/* Organization */}
        <div className="flex flex-col items-center gap-3">
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900/30 dark:to-orange-800/20 border-2 border-orange-300 dark:border-orange-700 flex items-center justify-center shadow-lg">
            <User className="w-10 h-10 text-orange-600 dark:text-orange-400" />
          </div>
          <span className="text-sm font-semibold text-foreground">{t('pages.did.diagram.organization')}</span>
          <span className="text-xs text-muted-foreground">{t('pages.did.diagram.enterData')}</span>
        </div>

        {/* Arrow */}
        <div className="hidden md:flex items-center">
          <div className="w-16 h-0.5 bg-gradient-to-r from-orange-400 to-orange-500" />
          <ArrowRight className="w-5 h-5 text-orange-500 -ml-1" />
        </div>
        <div className="md:hidden">
          <ArrowRight className="w-5 h-5 text-orange-500 rotate-90" />
        </div>

        {/* DID Generation Engine */}
        <div className="relative">
          <div className="w-48 h-48 rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-orange-500 flex flex-col items-center justify-center shadow-xl">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-orange-500 rounded-full">
              <span className="text-xs font-bold text-white">{t('pages.did.diagram.didGeneration')}</span>
            </div>
            <Fingerprint className="w-14 h-14 text-orange-400 mb-2" />
            <div className="text-center px-4">
              <p className="text-white text-sm font-medium">DID</p>
            </div>
            <div className="mt-3 px-3 py-1 bg-orange-500/20 rounded-lg border border-orange-500/40">
              <code className="text-[10px] text-orange-300">{t('pages.did.diagram.exampleDid')}</code>
            </div>
          </div>
          {/* Orbiting elements */}
          <div className="absolute top-0 left-0 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center animate-pulse shadow-lg">
            <CheckCircle className="w-4 h-4 text-white" />
          </div>
          <div className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center shadow-lg">
            <Lock className="w-4 h-4 text-white" />
          </div>
        </div>

        {/* Arrow */}
        <div className="hidden md:flex items-center">
          <div className="w-16 h-0.5 bg-gradient-to-r from-orange-400 to-orange-500" />
          <ArrowRight className="w-5 h-5 text-orange-500 -ml-1" />
        </div>
        <div className="md:hidden">
          <ArrowRight className="w-5 h-5 text-orange-500 rotate-90" />
        </div>

        {/* Verified Identity Card */}
        <div className="flex flex-col items-center gap-3">
          <div className="w-40 h-28 rounded-xl bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/20 border-2 border-green-400 dark:border-green-700 flex flex-col items-center justify-center shadow-lg p-3">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
              <span className="text-xs font-bold text-green-700 dark:text-green-300">{t('pages.did.diagram.verifiedIdentity')}</span>
            </div>
            <div className="text-center">
              <p className="text-sm font-semibold text-foreground">ACME Corp S.L.</p>
              <p className="text-[10px] text-muted-foreground">B12345678</p>
            </div>
            <div className="flex items-center gap-1 mt-1">
              <Globe className="w-3 h-3 text-green-600 dark:text-green-400" />
              <span className="text-[9px] text-green-600 dark:text-green-400">Gaia-X Compliant</span>
            </div>
          </div>
          <span className="text-sm font-semibold text-foreground">{t('pages.did.diagram.credentials.0')}</span>
        </div>
      </div>

      {/* Bottom Trust Network */}
      <div className="mt-8 w-full max-w-2xl">
        <div className="bg-slate-100 dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
          <p className="text-center text-sm font-semibold text-muted-foreground mb-4">{t('pages.did.diagram.federatedTrust')}</p>
          <div className="flex justify-center gap-4 flex-wrap">
            {(t('pages.did.diagram.standards', { returnObjects: true }) as string[]).map((trust, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 rounded-full border shadow-sm">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-xs font-medium">{trust}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const benefits = (t('pages.did.benefits', { returnObjects: true }) as { title: string; desc: string }[]);

  return (
    <NodeFeatureLayout
      title={t('pages.did.title')}
      subtitle={t('pages.did.subtitle')}
      icon={<Fingerprint className="w-10 h-10" />}
      visualComponent={<VisualDiagram />}
      benefits={benefits}
    />
  );
};

export default IdentidadDIDPage;

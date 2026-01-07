import React, { useState, useMemo } from 'react';
import { Fingerprint, ShieldCheck, Download, Sparkles, Clock, Globe } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadialBarChart, RadialBar, ResponsiveContainer, Legend, Tooltip } from 'recharts';

interface KYCSovereignSimulatorProps {
  onValuesChange?: (values: { transactionVolume: number; countryRisk: number; amlCompliance: number; tierVerified: number }) => void;
}

export const KYCSovereignSimulator = ({ onValuesChange }: KYCSovereignSimulatorProps) => {
  const [transactionVolume, setTransactionVolume] = useState(5000000);
  const [countryRisk, setCountryRisk] = useState(3);

  const calculations = useMemo(() => {
    const baseValidationTime = 48; // horas tradicional
    const digitalTime = 3; // segundos con blockchain
    const riskMultiplier = countryRisk;
    const amlCompliance = Math.max(90, 100 - (countryRisk * 2));
    const tierVerified = Math.min(4, Math.ceil(transactionVolume / 2500000));
    const directive = 'AML6';
    const speedup = (baseValidationTime * 3600) / digitalTime; // factor de aceleración
    const riskLevel = countryRisk <= 2 ? 'Bajo' : countryRisk <= 3 ? 'Medio' : 'Alto';
    return { baseValidationTime, digitalTime, amlCompliance, tierVerified, directive, speedup, riskLevel };
  }, [transactionVolume, countryRisk]);

  const radialData = useMemo(() => {
    return [
      { name: 'AML', value: calculations.amlCompliance, fill: '#3b82f6' },
      { name: 'KYC', value: 100, fill: '#f43f5e' },
      { name: 'UBO', value: Math.min(100, calculations.tierVerified * 25), fill: '#10b981' }
    ];
  }, [calculations.amlCompliance, calculations.tierVerified]);

  const pontusHash = useMemo(() => {
    return `0x${(transactionVolume / 1000).toString(16).slice(0, 8)}...${(countryRisk * 1000).toString(16).slice(0, 4)}`;
  }, [transactionVolume, countryRisk]);

  React.useEffect(() => {
    onValuesChange?.({
      transactionVolume,
      countryRisk,
      amlCompliance: calculations.amlCompliance,
      tierVerified: calculations.tierVerified
    });
  }, [transactionVolume, countryRisk, calculations, onValuesChange]);

  const riskColors: Record<string, string> = {
    'Bajo': 'text-emerald-400',
    'Medio': 'text-amber-400',
    'Alto': 'text-rose-400'
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Left Column - Simulator */}
      <div className="lg:col-span-7 space-y-5">
        <Card className="bg-gradient-to-br from-blue-950/40 to-rose-950/30 border-blue-500/20 overflow-hidden">
          <CardContent className="p-6 space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-900/50 flex items-center justify-center">
                  <Fingerprint className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-blue-300 uppercase tracking-wider">KYC-Sovereign</h3>
                  <p className="text-xs text-slate-400">RegTech / Cumplimiento AML</p>
                </div>
              </div>
              <Badge className="bg-blue-900/50 text-blue-300 font-mono text-[10px]">{pontusHash}</Badge>
            </div>

            {/* Radial Chart */}
            <div className="bg-slate-900/60 rounded-xl p-4 border border-blue-900/20">
              <p className="text-xs text-slate-400 mb-3 uppercase font-bold">Cumplimiento AML/KYC Instantáneo</p>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <RadialBarChart 
                    cx="50%" 
                    cy="50%" 
                    innerRadius="30%" 
                    outerRadius="90%" 
                    data={radialData} 
                    startAngle={180} 
                    endAngle={0}
                  >
                    <RadialBar
                      background
                      dataKey="value"
                      cornerRadius={10}
                    />
                    <Legend 
                      iconSize={10} 
                      layout="horizontal" 
                      verticalAlign="bottom" 
                      wrapperStyle={{ fontSize: '10px' }}
                    />
                    <Tooltip
                      contentStyle={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
                    />
                  </RadialBarChart>
                </ResponsiveContainer>
              </div>
              <div className="flex items-center justify-center gap-2 mt-2 bg-emerald-950/30 rounded-lg py-2 border border-emerald-500/30">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-mono text-emerald-400">VALIDACIÓN: {calculations.digitalTime} segundos</span>
              </div>
            </div>

            {/* Sliders */}
            <div className="space-y-5 bg-slate-900/40 p-4 rounded-xl border border-blue-900/20">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300">Volumen de Transacción</span>
                  <span className="font-bold text-blue-400">{(transactionVolume / 1000000).toFixed(1)} M€</span>
                </div>
                <Slider
                  value={[transactionVolume]}
                  onValueChange={(v) => setTransactionVolume(v[0])}
                  min={100000}
                  max={50000000}
                  step={500000}
                  className="[&>span]:bg-blue-600"
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300">Nivel de Riesgo País</span>
                  <span className={`font-bold ${riskColors[calculations.riskLevel]}`}>Nivel {countryRisk} ({calculations.riskLevel})</span>
                </div>
                <Slider
                  value={[countryRisk]}
                  onValueChange={(v) => setCountryRisk(v[0])}
                  min={1}
                  max={5}
                  step={1}
                  className="[&>span]:bg-rose-600"
                />
              </div>
            </div>

            {/* KPIs */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-950/40 p-4 rounded-xl border border-blue-800/30 text-center">
                <ShieldCheck className="w-5 h-5 text-blue-400 mx-auto mb-2" />
                <p className="text-[10px] uppercase font-black text-blue-400 mb-1">Compliance AML</p>
                <p className="text-3xl font-black text-white">{calculations.amlCompliance}%</p>
              </div>
              <div className="bg-rose-950/40 p-4 rounded-xl border border-rose-800/30 text-center">
                <Globe className="w-5 h-5 text-rose-400 mx-auto mb-2" />
                <p className="text-[10px] uppercase font-black text-rose-400 mb-1">Tier Verificado</p>
                <p className="text-3xl font-black text-white">{calculations.tierVerified}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Right Column - ARIA Panel */}
      <div className="lg:col-span-5">
        <Card className="bg-[#020617] border-blue-900/30 h-full">
          <CardContent className="p-6 space-y-5">
            {/* ARIA Header */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-rose-500 flex items-center justify-center text-white font-bold text-lg">
                A
              </div>
              <div>
                <p className="text-sm font-bold text-white">ARIA</p>
                <p className="text-xs text-slate-400">Asesora de Compliance RegTech</p>
              </div>
            </div>

            {/* Insights */}
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 bg-slate-900/50 rounded-lg border border-slate-800">
                <Sparkles className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-slate-300">
                  Validación completada en <span className="text-emerald-400 font-bold">{calculations.digitalTime} segundos</span>. 
                  El Pasaporte Digital ha verificado la estructura societaria 
                  <span className="text-blue-400 font-bold"> Tier {calculations.tierVerified}</span>.
                </p>
              </div>

              <div className="flex items-start gap-3 p-3 bg-slate-900/50 rounded-lg border border-slate-800">
                <ShieldCheck className="w-4 h-4 text-rose-400 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-slate-300">
                  Cumplimiento con la Directiva <span className="text-rose-400 font-bold">{calculations.directive}</span> al 
                  <span className="text-blue-400 font-bold"> {calculations.amlCompliance}%</span>. 
                  Aceleración: <span className="text-amber-400 font-bold">{Math.round(calculations.speedup)}x</span>.
                </p>
              </div>

              {calculations.amlCompliance >= 95 && (
                <div className="flex items-start gap-3 p-3 bg-blue-950/30 rounded-lg border border-blue-800/30">
                  <Fingerprint className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-blue-300">
                    <span className="font-bold">Full Compliance Achieved.</span> Transacción aprobada automáticamente 
                    bajo el marco regulatorio europeo.
                  </p>
                </div>
              )}
            </div>

            {/* Validation Status */}
            <div className="bg-gradient-to-r from-blue-900/30 to-rose-900/30 p-4 rounded-xl border border-blue-500/30">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-emerald-400" />
                <span className="text-xs font-bold text-emerald-300 uppercase">Validación Express</span>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Tradicional: <span className="text-slate-500">{calculations.baseValidationTime}h</span></span>
                <span>→</span>
                <span>Digital: <span className="text-emerald-400 font-bold">{calculations.digitalTime}s</span></span>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-4 border-t border-slate-800 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500">Pontus-X Hash</span>
                <span className="font-mono text-blue-400">{pontusHash}</span>
              </div>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-rose-600 hover:from-blue-700 hover:to-rose-700 text-white">
                <Download className="w-4 h-4 mr-2" />
                Descargar Certificado AML
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

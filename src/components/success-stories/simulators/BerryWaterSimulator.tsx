import React, { useState, useMemo } from 'react';
import { Droplet, Waves, Download, Sparkles, CheckCircle2, Leaf } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip, ReferenceLine } from 'recharts';

interface BerryWaterSimulatorProps {
  onValuesChange?: (values: { probesPerHa: number; waterTarget: number; waterEfficiency: number; waterSaved: number }) => void;
}

export const BerryWaterSimulator = ({ onValuesChange }: BerryWaterSimulatorProps) => {
  const [probesPerHa, setProbesPerHa] = useState(12);
  const [waterTarget, setWaterTarget] = useState(30);

  const calculations = useMemo(() => {
    const waterEfficiency = Math.min(100, 70 + (probesPerHa * 1.5) + (waterTarget * 0.2));
    const baseConsumption = 5200; // m³/ha/año
    const waterSaved = Math.floor(baseConsumption * (waterTarget / 100) * (probesPerHa / 10));
    const auditEliminated = waterEfficiency >= 98;
    const globalGapPassed = waterEfficiency >= 90;
    const costSaved = waterSaved * 0.45; // €/m³
    return { waterEfficiency, waterSaved, auditEliminated, globalGapPassed, costSaved };
  }, [probesPerHa, waterTarget]);

  const moistureData = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => {
      const hour = i * 2;
      const realMoisture = 45 + Math.sin(i * 0.8) * 20 + (probesPerHa * 0.5);
      const scheduled = 60; // Fixed irrigation threshold
      return { hour: `${hour}h`, real: Math.min(95, realMoisture), scheduled };
    });
  }, [probesPerHa]);

  const pontusHash = useMemo(() => {
    return `0x${(probesPerHa * waterTarget * 100).toString(16).slice(0, 8)}...${(calculations.waterEfficiency * 100).toString(16).slice(0, 4)}`;
  }, [probesPerHa, waterTarget, calculations.waterEfficiency]);

  React.useEffect(() => {
    onValuesChange?.({
      probesPerHa,
      waterTarget,
      waterEfficiency: calculations.waterEfficiency,
      waterSaved: calculations.waterSaved
    });
  }, [probesPerHa, waterTarget, calculations, onValuesChange]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Left Column - Simulator */}
      <div className="lg:col-span-7 space-y-5">
        <Card className="bg-gradient-to-br from-blue-950/40 to-emerald-950/30 border-blue-500/20 overflow-hidden">
          <CardContent className="p-6 space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-900/50 flex items-center justify-center">
                  <Droplet className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-blue-300 uppercase tracking-wider">Berry Water</h3>
                  <p className="text-xs text-slate-400">Huella Hídrica Doñana</p>
                </div>
              </div>
              <Badge className="bg-blue-900/50 text-blue-300 font-mono text-[10px]">{pontusHash}</Badge>
            </div>

            {/* Area Chart - Moisture Real-time */}
            <div className="bg-slate-900/60 rounded-xl p-4 border border-blue-900/20">
              <p className="text-xs text-slate-400 mb-3 uppercase font-bold">Humedad Real-Time vs Riego Programado</p>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={moistureData}>
                    <defs>
                      <linearGradient id="moistureBlue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.6}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="hour" tick={{ fill: '#94a3b8', fontSize: 10 }} axisLine={false} tickLine={false} />
                    <YAxis hide domain={[0, 100]} />
                    <Tooltip
                      contentStyle={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
                      labelStyle={{ color: '#e2e8f0' }}
                    />
                    <ReferenceLine y={60} stroke="#10b981" strokeDasharray="5 5" label={{ value: 'Óptimo', fill: '#10b981', fontSize: 10 }} />
                    <Area type="monotone" dataKey="real" name="Humedad Real %" stroke="#3b82f6" strokeWidth={2} fill="url(#moistureBlue)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="flex items-center justify-between mt-2 text-[10px]">
                <span className="text-amber-400">🔸 Seco (&lt;40%)</span>
                <span className="text-emerald-400">🔹 Óptimo (50-70%)</span>
                <span className="text-blue-400">🔵 Saturado (&gt;80%)</span>
              </div>
            </div>

            {/* Sliders */}
            <div className="space-y-5 bg-slate-900/40 p-4 rounded-xl border border-blue-900/20">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300">Sondas de Humedad por Ha</span>
                  <span className="font-bold text-blue-400">{probesPerHa} sondas</span>
                </div>
                <Slider
                  value={[probesPerHa]}
                  onValueChange={(v) => setProbesPerHa(v[0])}
                  min={1}
                  max={20}
                  step={1}
                  className="[&>span]:bg-blue-600"
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300">Objetivo Ahorro Hídrico</span>
                  <span className="font-bold text-emerald-400">{waterTarget}%</span>
                </div>
                <Slider
                  value={[waterTarget]}
                  onValueChange={(v) => setWaterTarget(v[0])}
                  min={10}
                  max={50}
                  step={5}
                  className="[&>span]:bg-emerald-600"
                />
              </div>
            </div>

            {/* KPIs */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-950/40 p-4 rounded-xl border border-blue-800/30 text-center">
                <Waves className="w-5 h-5 text-blue-400 mx-auto mb-2" />
                <p className="text-[10px] uppercase font-black text-blue-400 mb-1">Eficiencia Hídrica</p>
                <p className="text-3xl font-black text-white">{calculations.waterEfficiency.toFixed(0)}%</p>
              </div>
              <div className="bg-emerald-950/40 p-4 rounded-xl border border-emerald-800/30 text-center">
                <Droplet className="w-5 h-5 text-emerald-400 mx-auto mb-2" />
                <p className="text-[10px] uppercase font-black text-emerald-400 mb-1">Agua Ahorrada</p>
                <p className="text-3xl font-black text-white">{calculations.waterSaved.toLocaleString()}</p>
                <p className="text-xs text-slate-400">m³/año</p>
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
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-white font-bold text-lg">
                A
              </div>
              <div>
                <p className="text-sm font-bold text-white">ARIA</p>
                <p className="text-xs text-slate-400">Asesora de Gestión Hídrica</p>
              </div>
            </div>

            {/* Insights */}
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 bg-slate-900/50 rounded-lg border border-slate-800">
                <Sparkles className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-slate-300">
                  Has alcanzado un <span className="text-blue-400 font-bold">{calculations.waterEfficiency.toFixed(0)}%</span> de 
                  eficiencia hídrica con <span className="text-emerald-400 font-bold">{probesPerHa}</span> sondas por hectárea.
                </p>
              </div>

              <div className="flex items-start gap-3 p-3 bg-slate-900/50 rounded-lg border border-slate-800">
                <Droplet className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-slate-300">
                  He notarizado el ahorro de <span className="text-blue-400 font-bold">{calculations.waterSaved.toLocaleString()} m³</span> en 
                  Pontus-X, equivalente a <span className="text-amber-400 font-bold">{calculations.costSaved.toLocaleString()} €</span> en costes.
                </p>
              </div>

              {calculations.auditEliminated ? (
                <div className="flex items-start gap-3 p-3 bg-emerald-950/30 rounded-lg border border-emerald-800/30">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-emerald-300">
                    <span className="font-bold">Auditoría física eliminada.</span> Tu certificación hídrica digital 
                    cumple con los requisitos de GlobalG.A.P.
                  </p>
                </div>
              ) : (
                <div className="flex items-start gap-3 p-3 bg-blue-950/30 rounded-lg border border-blue-800/30">
                  <Leaf className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-blue-300">
                    Aumenta sondas para alcanzar el 98% de eficiencia y eliminar auditorías presenciales.
                  </p>
                </div>
              )}
            </div>

            {/* GlobalGAP Status */}
            {calculations.globalGapPassed && (
              <div className="bg-gradient-to-r from-blue-900/30 to-emerald-900/30 p-4 rounded-xl border border-emerald-500/30">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span className="text-xs font-bold text-emerald-300 uppercase">GlobalG.A.P. Passed</span>
                </div>
                <p className="text-xs text-slate-400">
                  Certificación hídrica digital válida. Próxima auditoría física: <span className="text-white font-bold">ELIMINADA</span>
                </p>
              </div>
            )}

            {/* Footer */}
            <div className="pt-4 border-t border-slate-800 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500">Pontus-X Hash</span>
                <span className="font-mono text-blue-400">{pontusHash}</span>
              </div>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white">
                <Download className="w-4 h-4 mr-2" />
                Descargar Reporte Hídrico
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

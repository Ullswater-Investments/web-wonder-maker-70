import React, { useState, useMemo } from 'react';
import { Truck, Leaf, Download, Sparkles, TrendingDown, Fuel } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend } from 'recharts';

interface FleetCarbonZeroSimulatorProps {
  onValuesChange?: (values: { fleetDistance: number; fuelEfficiency: number; co2Saved: number; eurSaved: number }) => void;
}

export const FleetCarbonZeroSimulator = ({ onValuesChange }: FleetCarbonZeroSimulatorProps) => {
  const [fleetDistance, setFleetDistance] = useState(1200000);
  const [fuelEfficiency, setFuelEfficiency] = useState(15);

  const calculations = useMemo(() => {
    const baseCO2PerKm = 0.85; // kgCO2/km
    const efficiencyReduction = fuelEfficiency / 100;
    const collaborativeReduction = 0.12; // 12% menos retornos vacíos
    const totalCO2Base = fleetDistance * baseCO2PerKm;
    const co2Saved = totalCO2Base * (efficiencyReduction + collaborativeReduction);
    const costPerTonCO2 = 85; // EUR/tonCO2
    const eurSaved = (co2Saved / 1000) * costPerTonCO2;
    const emptyReturnsAvoided = Math.floor(fleetDistance * 0.12 / 500);
    const carbonNeutralProgress = Math.min(100, (efficiencyReduction + collaborativeReduction) * 100 * 1.5);
    return { totalCO2Base, co2Saved, eurSaved, emptyReturnsAvoided, carbonNeutralProgress };
  }, [fleetDistance, fuelEfficiency]);

  const chartData = useMemo(() => {
    return Array.from({ length: 6 }, (_, i) => {
      const month = i * 2;
      const base = (fleetDistance / 6) * 0.85 / 1000;
      const optimized = base * (1 - (fuelEfficiency / 100 + 0.12));
      return { month: `M${month}`, base: Math.round(base), optimized: Math.round(optimized) };
    });
  }, [fleetDistance, fuelEfficiency]);

  const pontusHash = useMemo(() => {
    return `0x${(fleetDistance / 100).toString(16).slice(0, 8)}...${(calculations.co2Saved).toString(16).slice(0, 4)}`;
  }, [fleetDistance, calculations.co2Saved]);

  React.useEffect(() => {
    onValuesChange?.({
      fleetDistance,
      fuelEfficiency,
      co2Saved: calculations.co2Saved,
      eurSaved: calculations.eurSaved
    });
  }, [fleetDistance, fuelEfficiency, calculations, onValuesChange]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Left Column - Simulator */}
      <div className="lg:col-span-7 space-y-5">
        <Card className="bg-gradient-to-br from-teal-950/40 to-orange-950/30 border-teal-500/20 overflow-hidden">
          <CardContent className="p-6 space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-900/50 flex items-center justify-center">
                  <Truck className="w-5 h-5 text-teal-400" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-teal-300 uppercase tracking-wider">FleetCarbon Zero</h3>
                  <p className="text-xs text-slate-400">Descarbonización Logística</p>
                </div>
              </div>
              <Badge className="bg-teal-900/50 text-teal-300 font-mono text-[10px]">{pontusHash}</Badge>
            </div>

            {/* Dual Area Chart */}
            <div className="bg-slate-900/60 rounded-xl p-4 border border-teal-900/20">
              <p className="text-xs text-slate-400 mb-3 uppercase font-bold">Emisiones Base vs Logística Colaborativa (tCO₂)</p>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData}>
                    <defs>
                      <linearGradient id="baseGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#f97316" stopOpacity={0.5}/>
                        <stop offset="95%" stopColor="#f97316" stopOpacity={0.1}/>
                      </linearGradient>
                      <linearGradient id="optGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.6}/>
                        <stop offset="95%" stopColor="#14b8a6" stopOpacity={0.1}/>
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="month" tick={{ fill: '#94a3b8', fontSize: 10 }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fill: '#94a3b8', fontSize: 10 }} axisLine={false} tickLine={false} />
                    <Tooltip
                      contentStyle={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
                      labelStyle={{ color: '#e2e8f0' }}
                    />
                    <Legend wrapperStyle={{ fontSize: '10px' }} />
                    <Area type="monotone" dataKey="base" name="Emisiones Base" stroke="#f97316" strokeWidth={2} fill="url(#baseGrad)" />
                    <Area type="monotone" dataKey="optimized" name="Con ProcureData" stroke="#14b8a6" strokeWidth={2} fill="url(#optGrad)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Sliders */}
            <div className="space-y-5 bg-slate-900/40 p-4 rounded-xl border border-teal-900/20">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300">Distancia Anual Flota</span>
                  <span className="font-bold text-teal-400">{(fleetDistance / 1000000).toFixed(1)} M km</span>
                </div>
                <Slider
                  value={[fleetDistance]}
                  onValueChange={(v) => setFleetDistance(v[0])}
                  min={100000}
                  max={5000000}
                  step={100000}
                  className="[&>span]:bg-teal-600"
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300">Mejora Eficiencia Combustible</span>
                  <span className="font-bold text-orange-400">{fuelEfficiency}%</span>
                </div>
                <Slider
                  value={[fuelEfficiency]}
                  onValueChange={(v) => setFuelEfficiency(v[0])}
                  min={5}
                  max={30}
                  step={1}
                  className="[&>span]:bg-orange-600"
                />
              </div>
            </div>

            {/* KPIs */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-teal-950/40 p-4 rounded-xl border border-teal-800/30 text-center">
                <Leaf className="w-5 h-5 text-teal-400 mx-auto mb-2" />
                <p className="text-[10px] uppercase font-black text-teal-400 mb-1">CO₂ Evitado</p>
                <p className="text-3xl font-black text-white">{(calculations.co2Saved / 1000).toFixed(0)}</p>
                <p className="text-xs text-slate-400">toneladas/año</p>
              </div>
              <div className="bg-orange-950/40 p-4 rounded-xl border border-orange-800/30 text-center">
                <Fuel className="w-5 h-5 text-orange-400 mx-auto mb-2" />
                <p className="text-[10px] uppercase font-black text-orange-400 mb-1">Ahorro Económico</p>
                <p className="text-3xl font-black text-white">{calculations.eurSaved.toLocaleString()}</p>
                <p className="text-xs text-slate-400">€/año</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Right Column - ARIA Panel */}
      <div className="lg:col-span-5">
        <Card className="bg-[#020617] border-teal-900/30 h-full">
          <CardContent className="p-6 space-y-5">
            {/* ARIA Header */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-orange-500 flex items-center justify-center text-white font-bold text-lg">
                A
              </div>
              <div>
                <p className="text-sm font-bold text-white">ARIA</p>
                <p className="text-xs text-slate-400">Asesora de Logística Sostenible</p>
              </div>
            </div>

            {/* Insights */}
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 bg-slate-900/50 rounded-lg border border-slate-800">
                <Sparkles className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-slate-300">
                  Al evitar el <span className="text-orange-400 font-bold">12%</span> de retornos vacíos mediante el 
                  intercambio de carga en el marketplace, has optimizado 
                  <span className="text-teal-400 font-bold"> {calculations.emptyReturnsAvoided.toLocaleString()}</span> rutas.
                </p>
              </div>

              <div className="flex items-start gap-3 p-3 bg-slate-900/50 rounded-lg border border-slate-800">
                <TrendingDown className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-slate-300">
                  Has ahorrado <span className="text-teal-400 font-bold">{(calculations.co2Saved / 1000).toFixed(0)} toneladas</span> de 
                  CO₂, equivalente a <span className="text-amber-400 font-bold">{calculations.eurSaved.toLocaleString()} €</span> en 
                  derechos de emisión.
                </p>
              </div>

              {calculations.carbonNeutralProgress >= 50 && (
                <div className="flex items-start gap-3 p-3 bg-teal-950/30 rounded-lg border border-teal-800/30">
                  <Leaf className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-teal-300">
                    <span className="font-bold">Progreso Carbon Neutral: {calculations.carbonNeutralProgress.toFixed(0)}%.</span> Tu 
                    flota está en camino a la neutralidad de carbono.
                  </p>
                </div>
              )}
            </div>

            {/* Progress Indicator */}
            <div className="bg-gradient-to-r from-teal-900/30 to-orange-900/30 p-4 rounded-xl border border-teal-500/30">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-teal-300 uppercase">Carbon Neutral</span>
                <span className="text-xs font-bold text-white">{calculations.carbonNeutralProgress.toFixed(0)}%</span>
              </div>
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-teal-500 to-orange-500 rounded-full transition-all"
                  style={{ width: `${calculations.carbonNeutralProgress}%` }}
                />
              </div>
            </div>

            {/* Footer */}
            <div className="pt-4 border-t border-slate-800 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500">Pontus-X Hash</span>
                <span className="font-mono text-teal-400">{pontusHash}</span>
              </div>
              <Button className="w-full bg-gradient-to-r from-teal-600 to-orange-600 hover:from-teal-700 hover:to-orange-700 text-white">
                <Download className="w-4 h-4 mr-2" />
                Descargar Reporte CO₂
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

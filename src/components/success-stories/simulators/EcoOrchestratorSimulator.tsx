import React, { useState, useMemo, useEffect } from 'react';
import { Settings, Sparkles, Download, Recycle, TrendingDown } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Legend } from 'recharts';

interface EcoOrchestratorSimulatorProps {
  onValuesChange?: (values: { recyclabilityScore: number; marketVolume: number; savings: number }) => void;
}

export const EcoOrchestratorSimulator = ({ onValuesChange }: EcoOrchestratorSimulatorProps) => {
  const [recyclabilityScore, setRecyclabilityScore] = useState(75);
  const [marketVolume, setMarketVolume] = useState(25000);

  const calculations = useMemo(() => {
    const baseEcotax = marketVolume * 0.35; // 0.35 EUR/kg ecotasa base
    const discount = recyclabilityScore >= 80 ? 0.15 : recyclabilityScore >= 60 ? 0.08 : 0;
    const finalEcotax = baseEcotax * (1 - discount);
    const savings = baseEcotax - finalEcotax;
    const ecoEfficiency = Math.min(100, recyclabilityScore * 1.1);
    const discountPercent = Math.round(discount * 100);
    
    return { baseEcotax, discount, discountPercent, finalEcotax, savings, ecoEfficiency };
  }, [recyclabilityScore, marketVolume]);

  const radarData = useMemo(() => [
    { subject: 'Mono-material', score: recyclabilityScore >= 80 ? 95 : recyclabilityScore, fullMark: 100 },
    { subject: 'Desmontaje', score: Math.min(100, recyclabilityScore * 0.9), fullMark: 100 },
    { subject: 'Reutilización', score: Math.min(100, recyclabilityScore * 0.85), fullMark: 100 },
    { subject: 'Reciclabilidad', score: recyclabilityScore, fullMark: 100 },
    { subject: 'Materiales', score: Math.min(100, recyclabilityScore * 1.05), fullMark: 100 },
    { subject: 'Trazabilidad', score: 95, fullMark: 100 },
  ], [recyclabilityScore]);

  const pontusHash = useMemo(() => {
    const base = Math.floor(recyclabilityScore * marketVolume * 0.47);
    return `0x${base.toString(16).padStart(8, '0')}...${(base % 9999).toString(16)}`;
  }, [recyclabilityScore, marketVolume]);

  useEffect(() => {
    onValuesChange?.({ recyclabilityScore, marketVolume, savings: calculations.savings });
  }, [recyclabilityScore, marketVolume, calculations.savings, onValuesChange]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Columna Izquierda - Simulador Interactivo */}
      <div className="lg:col-span-7">
        <Card className="bg-gradient-to-br from-lime-950/40 to-green-950/30 border-lime-500/20 shadow-2xl overflow-hidden h-full">
          <CardContent className="p-6 space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-lime-500/20 rounded-lg">
                  <Settings className="w-6 h-6 text-lime-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white">ECO-ORCHESTRATOR</h3>
                  <p className="text-xs text-slate-400">Gestión SCRAP - Ecomodulación</p>
                </div>
              </div>
              <Badge className="bg-lime-500/20 text-lime-300 border-lime-500/30 font-mono text-xs">
                {pontusHash}
              </Badge>
            </div>

            {/* Radar Chart de Ecoeficiencia */}
            <div className="bg-slate-900/60 rounded-xl p-4 border border-lime-900/30">
              <p className="text-xs text-slate-400 mb-3 uppercase font-bold">Ecoeficiencia del Envase</p>
              <ResponsiveContainer width="100%" height={220}>
                <RadarChart data={radarData}>
                  <PolarGrid stroke="#334155" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 10 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: '#64748b', fontSize: 8 }} />
                  <Radar
                    name="Puntuación"
                    dataKey="score"
                    stroke="#84CC16"
                    fill="#84CC16"
                    fillOpacity={0.4}
                    strokeWidth={2}
                  />
                  <Legend />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            {/* Sliders */}
            <div className="space-y-5 bg-slate-900/40 p-4 rounded-xl border border-lime-900/20">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300">Puntuación de Reciclabilidad</span>
                  <span className="font-bold text-lime-400">{recyclabilityScore}/100</span>
                </div>
                <Slider
                  value={[recyclabilityScore]}
                  onValueChange={(v) => setRecyclabilityScore(v[0])}
                  min={0}
                  max={100}
                  step={5}
                  className="[&>span]:bg-lime-600"
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300">Volumen de Mercado</span>
                  <span className="font-bold text-green-400">{marketVolume.toLocaleString()} kg</span>
                </div>
                <Slider
                  value={[marketVolume]}
                  onValueChange={(v) => setMarketVolume(v[0])}
                  min={1000}
                  max={100000}
                  step={1000}
                  className="[&>span]:bg-green-600"
                />
              </div>
            </div>

            {/* KPIs Grid */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-slate-800/40 p-3 rounded-xl border border-slate-700/30 text-center">
                <p className="text-[10px] uppercase font-bold text-slate-400 mb-1">Ecotasa Base</p>
                <p className="text-xl font-black text-white">€{(calculations.baseEcotax / 1000).toFixed(1)}k</p>
                <p className="text-[10px] text-slate-400">trimestral</p>
              </div>
              <div className="bg-lime-950/40 p-3 rounded-xl border border-lime-800/30 text-center">
                <p className="text-[10px] uppercase font-bold text-lime-400 mb-1">Bonificación</p>
                <p className="text-xl font-black text-white">{calculations.discountPercent}%</p>
                <p className="text-[10px] text-slate-400">descuento</p>
              </div>
              <div className="bg-emerald-950/40 p-3 rounded-xl border border-emerald-800/30 text-center">
                <p className="text-[10px] uppercase font-bold text-emerald-400 mb-1">Ahorro</p>
                <p className="text-xl font-black text-white">€{(calculations.savings / 1000).toFixed(1)}k</p>
                <p className="text-[10px] text-slate-400">trimestral</p>
              </div>
            </div>

            {/* Final Ecotax */}
            <div className="bg-gradient-to-r from-lime-900/50 to-green-900/50 p-5 rounded-2xl border border-lime-500/30">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[10px] uppercase font-black text-lime-300 mb-2">Ecotasa Final (con Ecomodulación)</p>
                  <p className="text-3xl font-black text-white">€{calculations.finalEcotax.toLocaleString()}</p>
                </div>
                <div className="flex gap-2">
                  <Badge className="bg-lime-500/20 text-lime-300">SCRAP</Badge>
                  <Badge className="bg-green-500/20 text-green-300">-{calculations.discountPercent}%</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Columna Derecha - Panel ARIA */}
      <div className="lg:col-span-5">
        <Card className="bg-[#020617] border-lime-500/20 shadow-2xl h-full">
          <CardContent className="p-6 space-y-5">
            {/* ARIA Header */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-lime-500 to-green-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-lime-500/25">
                A
              </div>
              <div>
                <p className="text-white font-semibold">ARIA</p>
                <p className="text-xs text-lime-400">Asesora de Ecomodulación</p>
              </div>
            </div>

            {/* Insights Dinámicos */}
            <div className="space-y-4">
              <div className="bg-lime-950/30 rounded-xl p-4 border border-lime-800/30">
                <div className="flex items-start gap-3">
                  <TrendingDown className="w-5 h-5 text-lime-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-white font-medium mb-1">Bonificación Aplicada</p>
                    <p className="text-xs text-slate-400">
                      {calculations.discountPercent > 0 ? (
                        <>Gracias a tu diseño {recyclabilityScore >= 80 ? 'monomaterial' : 'optimizado'}, el SCRAP te ha aplicado una 
                        bonificación del <span className="text-lime-400 font-bold">{calculations.discountPercent}%</span> en la ecotasa trimestral.</>
                      ) : (
                        <>Tu puntuación actual no alcanza el umbral de bonificación (60%). Mejora el diseño para obtener descuentos.</>
                      )}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-950/30 rounded-xl p-4 border border-green-800/30">
                <div className="flex items-start gap-3">
                  <Recycle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-white font-medium mb-1">Diseño para Reciclaje</p>
                    <p className="text-xs text-slate-400">
                      Un envase con reciclabilidad del <span className="text-green-400 font-bold">{recyclabilityScore}%</span> genera 
                      una ecoeficiencia del <span className="text-white font-bold">{Math.round(calculations.ecoEfficiency)}%</span>, 
                      alineado con la Directiva SUP.
                    </p>
                  </div>
                </div>
              </div>

              {recyclabilityScore >= 80 && (
                <div className="bg-emerald-950/30 rounded-xl p-4 border border-emerald-800/30">
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-white font-medium mb-1">¡Excelencia en Ecodiseño!</p>
                      <p className="text-xs text-slate-400">
                        Tu puntuación de {recyclabilityScore}/100 te califica para el <span className="text-emerald-400 font-bold">Sello Oro de Ecodiseño</span>, 
                        con acceso a los mejores incentivos del SCRAP.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quote ARIA */}
            <div className="bg-gradient-to-r from-lime-900/30 to-green-900/30 rounded-xl p-4 border border-lime-500/20">
              <p className="text-sm text-slate-300 italic leading-relaxed">
                "Con un volumen de <span className="text-green-400 font-semibold">{marketVolume.toLocaleString()} kg</span> y 
                reciclabilidad del <span className="text-lime-400 font-semibold">{recyclabilityScore}%</span>, 
                ahorras <span className="text-white font-bold">€{calculations.savings.toLocaleString()}</span> trimestrales 
                en ecotasas gracias a la ecomodulación verificada en blockchain."
              </p>
            </div>

            {/* Footer */}
            <div className="pt-4 border-t border-slate-800">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs text-slate-500">Verificado en Pontus-X</p>
                <Badge variant="outline" className="text-[10px] border-lime-500/30 text-lime-400 font-mono">
                  {pontusHash}
                </Badge>
              </div>
              <Button className="w-full bg-gradient-to-r from-lime-600 to-green-600 hover:from-lime-500 hover:to-green-500 text-white">
                <Download className="w-4 h-4 mr-2" />
                Descargar Informe SCRAP
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

import React, { useState, useMemo, useEffect } from 'react';
import { Trash2, Sparkles, Download, Flame, Leaf } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FunnelChart, Funnel, LabelList, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface WasteToValueSimulatorProps {
  onValuesChange?: (values: { totalWaste: number; recoveryRate: number; cdrValue: number }) => void;
}

export const WasteToValueSimulator = ({ onValuesChange }: WasteToValueSimulatorProps) => {
  const [totalWaste, setTotalWaste] = useState(3500);
  const [recoveryRate, setRecoveryRate] = useState(96);

  const calculations = useMemo(() => {
    const recovered = totalWaste * (recoveryRate / 100);
    const landfillDiverted = recovered;
    const cdrProduced = recovered * 0.4; // 40% se convierte en CDR
    const materialRecycled = recovered * 0.45; // 45% material reciclado
    const compost = recovered * 0.15; // 15% compost
    const cdrValue = cdrProduced * 45; // 45 EUR/ton CDR
    const recycledValue = materialRecycled * 120; // 120 EUR/ton material
    const totalValue = cdrValue + recycledValue;
    const zeroWasteScore = recoveryRate >= 99.9 ? 'Excelencia' : recoveryRate >= 95 ? 'Avanzado' : 'En Progreso';
    const landfillPercent = 100 - recoveryRate;
    
    return { 
      recovered, landfillDiverted, cdrProduced, materialRecycled, compost,
      cdrValue, recycledValue, totalValue, zeroWasteScore, landfillPercent 
    };
  }, [totalWaste, recoveryRate]);

  const funnelData = useMemo(() => [
    { name: 'Generación', value: totalWaste, fill: '#64748B' },
    { name: 'Triaje', value: totalWaste * 0.98, fill: '#F97316' },
    { name: 'Valorización', value: calculations.recovered, fill: '#22C55E' },
    { name: 'CDR + Reciclaje', value: calculations.cdrProduced + calculations.materialRecycled, fill: '#10B981' },
  ], [totalWaste, calculations]);

  const pontusHash = useMemo(() => {
    const base = Math.floor(totalWaste * recoveryRate * 1.89);
    return `0x${base.toString(16).padStart(8, '0')}...${(base % 9999).toString(16)}`;
  }, [totalWaste, recoveryRate]);

  useEffect(() => {
    onValuesChange?.({ totalWaste, recoveryRate, cdrValue: calculations.cdrValue });
  }, [totalWaste, recoveryRate, calculations.cdrValue, onValuesChange]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Columna Izquierda - Simulador Interactivo */}
      <div className="lg:col-span-7">
        <Card className="bg-gradient-to-br from-orange-950/40 to-green-950/30 border-orange-500/20 shadow-2xl overflow-hidden h-full">
          <CardContent className="p-6 space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-500/20 rounded-lg">
                  <Trash2 className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white">WASTE-TO-VALUE</h3>
                  <p className="text-xs text-slate-400">Vertido Cero - Valorización Total</p>
                </div>
              </div>
              <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30 font-mono text-xs">
                {pontusHash}
              </Badge>
            </div>

            {/* Funnel Chart */}
            <div className="bg-slate-900/60 rounded-xl p-4 border border-orange-900/30">
              <p className="text-xs text-slate-400 mb-3 uppercase font-bold">Embudo de Valorización</p>
              <ResponsiveContainer width="100%" height={200}>
                <FunnelChart>
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
                    formatter={(value: number) => [`${value.toLocaleString()} t`, '']}
                  />
                  <Funnel
                    dataKey="value"
                    data={funnelData}
                    isAnimationActive
                  >
                    {funnelData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                    <LabelList 
                      position="right" 
                      fill="#fff" 
                      stroke="none" 
                      dataKey="name"
                      fontSize={11}
                    />
                  </Funnel>
                </FunnelChart>
              </ResponsiveContainer>
            </div>

            {/* Sliders */}
            <div className="space-y-5 bg-slate-900/40 p-4 rounded-xl border border-orange-900/20">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300">Residuos Totales Generados</span>
                  <span className="font-bold text-orange-400">{totalWaste.toLocaleString()} t</span>
                </div>
                <Slider
                  value={[totalWaste]}
                  onValueChange={(v) => setTotalWaste(v[0])}
                  min={100}
                  max={10000}
                  step={100}
                  className="[&>span]:bg-orange-600"
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300">Tasa de Recuperación</span>
                  <span className="font-bold text-green-400">{recoveryRate}%</span>
                </div>
                <Slider
                  value={[recoveryRate]}
                  onValueChange={(v) => setRecoveryRate(v[0])}
                  min={50}
                  max={99.9}
                  step={0.1}
                  className="[&>span]:bg-green-600"
                />
              </div>
            </div>

            {/* KPIs Grid */}
            <div className="grid grid-cols-4 gap-2">
              <div className="bg-orange-950/40 p-3 rounded-xl border border-orange-800/30 text-center">
                <p className="text-[10px] uppercase font-bold text-orange-400 mb-1">CDR</p>
                <p className="text-lg font-black text-white">{calculations.cdrProduced.toLocaleString()}</p>
                <p className="text-[10px] text-slate-400">toneladas</p>
              </div>
              <div className="bg-green-950/40 p-3 rounded-xl border border-green-800/30 text-center">
                <p className="text-[10px] uppercase font-bold text-green-400 mb-1">Reciclado</p>
                <p className="text-lg font-black text-white">{calculations.materialRecycled.toLocaleString()}</p>
                <p className="text-[10px] text-slate-400">toneladas</p>
              </div>
              <div className="bg-lime-950/40 p-3 rounded-xl border border-lime-800/30 text-center">
                <p className="text-[10px] uppercase font-bold text-lime-400 mb-1">Compost</p>
                <p className="text-lg font-black text-white">{calculations.compost.toLocaleString()}</p>
                <p className="text-[10px] text-slate-400">toneladas</p>
              </div>
              <div className="bg-red-950/40 p-3 rounded-xl border border-red-800/30 text-center">
                <p className="text-[10px] uppercase font-bold text-red-400 mb-1">Vertedero</p>
                <p className="text-lg font-black text-white">{calculations.landfillPercent.toFixed(1)}%</p>
                <p className="text-[10px] text-slate-400">mínimo</p>
              </div>
            </div>

            {/* Total Value */}
            <div className="bg-gradient-to-r from-orange-900/50 to-green-900/50 p-5 rounded-2xl border border-green-500/30">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[10px] uppercase font-black text-green-300 mb-2">Valor Total Generado</p>
                  <p className="text-3xl font-black text-white">€{calculations.totalValue.toLocaleString()}</p>
                </div>
                <div className="flex gap-2">
                  <Badge className={`${
                    calculations.zeroWasteScore === 'Excelencia' ? 'bg-emerald-500/20 text-emerald-300' :
                    calculations.zeroWasteScore === 'Avanzado' ? 'bg-green-500/20 text-green-300' :
                    'bg-amber-500/20 text-amber-300'
                  }`}>
                    {calculations.zeroWasteScore}
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Columna Derecha - Panel ARIA */}
      <div className="lg:col-span-5">
        <Card className="bg-[#020617] border-orange-500/20 shadow-2xl h-full">
          <CardContent className="p-6 space-y-5">
            {/* ARIA Header */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-green-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-orange-500/25">
                A
              </div>
              <div>
                <p className="text-white font-semibold">ARIA</p>
                <p className="text-xs text-orange-400">Asesora de Vertido Cero</p>
              </div>
            </div>

            {/* Insights Dinámicos */}
            <div className="space-y-4">
              <div className="bg-green-950/30 rounded-xl p-4 border border-green-800/30">
                <div className="flex items-start gap-3">
                  <Leaf className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-white font-medium mb-1">Objetivo Vertido Cero</p>
                    <p className="text-xs text-slate-400">
                      Has alcanzado un <span className="text-green-400 font-bold">{recoveryRate}%</span> de 
                      recuperación. Tu organización califica para el sello de 
                      <span className="text-white font-bold"> '{calculations.zeroWasteScore}'</span> de ProcureData.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-orange-950/30 rounded-xl p-4 border border-orange-800/30">
                <div className="flex items-start gap-3">
                  <Flame className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-white font-medium mb-1">Combustible Derivado (CDR)</p>
                    <p className="text-xs text-slate-400">
                      Has producido <span className="text-orange-400 font-bold">{calculations.cdrProduced.toLocaleString()} toneladas</span> de CDR, 
                      generando <span className="text-white font-bold">€{calculations.cdrValue.toLocaleString()}</span> en valor energético.
                    </p>
                  </div>
                </div>
              </div>

              {recoveryRate >= 99 && (
                <div className="bg-emerald-950/30 rounded-xl p-4 border border-emerald-800/30">
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-white font-medium mb-1">¡Excelencia Circular!</p>
                      <p className="text-xs text-slate-400">
                        Con un {recoveryRate}% de recuperación, calificas para el <span className="text-emerald-400 font-bold">Sello de Excelencia Circular</span> de 
                        ProcureData, reconocido por la Comisión Europea.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quote ARIA */}
            <div className="bg-gradient-to-r from-orange-900/30 to-green-900/30 rounded-xl p-4 border border-orange-500/20">
              <p className="text-sm text-slate-300 italic leading-relaxed">
                "De <span className="text-orange-400 font-semibold">{totalWaste.toLocaleString()} toneladas</span> generadas, 
                has desviado de vertedero <span className="text-green-400 font-semibold">{calculations.landfillDiverted.toLocaleString()} t</span>, 
                generando <span className="text-white font-bold">€{calculations.totalValue.toLocaleString()}</span> en valor circular 
                y evitando emisiones equivalentes a {Math.round(calculations.recovered * 0.5)} tonCO₂."
              </p>
            </div>

            {/* Footer */}
            <div className="pt-4 border-t border-slate-800">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs text-slate-500">Verificado en Pontus-X</p>
                <Badge variant="outline" className="text-[10px] border-orange-500/30 text-orange-400 font-mono">
                  {pontusHash}
                </Badge>
              </div>
              <Button className="w-full bg-gradient-to-r from-orange-600 to-green-600 hover:from-orange-500 hover:to-green-500 text-white">
                <Download className="w-4 h-4 mr-2" />
                Descargar Certificado Zero Waste
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

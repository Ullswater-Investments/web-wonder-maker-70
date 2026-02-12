import { useState } from 'react';
import { ClipboardCheck, BarChart3, RefreshCw, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Textarea } from '@/components/ui/textarea';

const FREQUENCIES = [
  { value: 'daily', label: 'Diaria' },
  { value: 'weekly', label: 'Semanal' },
  { value: 'monthly', label: 'Mensual' },
  { value: 'quarterly', label: 'Trimestral' },
  { value: 'annual', label: 'Anual' },
];

const VALIDATION_METHODS = [
  { value: 'automated', label: 'Validación automática' },
  { value: 'manual_review', label: 'Revisión manual' },
  { value: 'third_party_audit', label: 'Auditoría de terceros' },
  { value: 'statistical_sampling', label: 'Muestreo estadístico' },
  { value: 'schema_validation', label: 'Validación de esquema' },
];

export interface QualityDeclarationData {
  update_frequency: string;
  coverage_percentage: number;
  validation_method: string;
  quality_score_declared: number;
  quality_declaration: {
    completeness: string;
    accuracy: string;
    timeliness: string;
    notes: string;
  };
}

interface QualityDeclarationFormProps {
  onSubmit: (data: QualityDeclarationData) => void;
  onCancel?: () => void;
  initialData?: Partial<QualityDeclarationData>;
}

export function QualityDeclarationForm({ onSubmit, onCancel, initialData }: QualityDeclarationFormProps) {
  const [frequency, setFrequency] = useState(initialData?.update_frequency ?? 'monthly');
  const [coverage, setCoverage] = useState(initialData?.coverage_percentage ?? 80);
  const [method, setMethod] = useState(initialData?.validation_method ?? 'automated');
  const [score, setScore] = useState(initialData?.quality_score_declared ?? 75);
  const [completeness, setCompleteness] = useState(initialData?.quality_declaration?.completeness ?? '');
  const [accuracy, setAccuracy] = useState(initialData?.quality_declaration?.accuracy ?? '');
  const [timeliness, setTimeliness] = useState(initialData?.quality_declaration?.timeliness ?? '');
  const [notes, setNotes] = useState(initialData?.quality_declaration?.notes ?? '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      update_frequency: frequency,
      coverage_percentage: coverage,
      validation_method: method,
      quality_score_declared: score,
      quality_declaration: { completeness, accuracy, timeliness, notes },
    });
  };

  return (
    <Card className="border-primary/20">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-lg">
          <ClipboardCheck className="h-5 w-5 text-primary" />
          Declaración de Calidad Obligatoria
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Conforme a la Sección 6.3 UNE 0087:2025 — Gobernanza de Datos
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label className="flex items-center gap-1.5">
                <RefreshCw className="h-3.5 w-3.5" /> Frecuencia de actualización *
              </Label>
              <Select value={frequency} onValueChange={setFrequency}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {FREQUENCIES.map((f) => (
                    <SelectItem key={f.value} value={f.value}>{f.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label className="flex items-center gap-1.5">
                <CheckCircle className="h-3.5 w-3.5" /> Método de validación *
              </Label>
              <Select value={method} onValueChange={setMethod}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {VALIDATION_METHODS.map((m) => (
                    <SelectItem key={m.value} value={m.value}>{m.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Cobertura de datos: {coverage}%</Label>
            <Slider value={[coverage]} onValueChange={([v]) => setCoverage(v)} max={100} step={1} />
          </div>

          <div className="space-y-2">
            <Label className="flex items-center gap-1.5">
              <BarChart3 className="h-3.5 w-3.5" /> Health Score declarado: {score}/100
            </Label>
            <Slider value={[score]} onValueChange={([v]) => setScore(v)} max={100} step={1} />
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <Label>Completitud</Label>
              <Input value={completeness} onChange={(e) => setCompleteness(e.target.value)} placeholder="ej: 95% campos completos" />
            </div>
            <div className="space-y-2">
              <Label>Exactitud</Label>
              <Input value={accuracy} onChange={(e) => setAccuracy(e.target.value)} placeholder="ej: Validado contra fuente" />
            </div>
            <div className="space-y-2">
              <Label>Actualidad</Label>
              <Input value={timeliness} onChange={(e) => setTimeliness(e.target.value)} placeholder="ej: Datos < 24h" />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Observaciones adicionales</Label>
            <Textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Notas sobre la calidad de los datos…" rows={2} />
          </div>

          <div className="flex justify-end gap-3 pt-2">
            {onCancel && <Button type="button" variant="outline" onClick={onCancel}>Cancelar</Button>}
            <Button type="submit">Confirmar declaración de calidad</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

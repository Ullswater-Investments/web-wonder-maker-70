import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, Tag, Calendar, MapPin, FileText, User, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  EU_THEMES,
  EU_THEME_LABELS,
  ACCESS_RIGHTS_OPTIONS,
  type DcatApMetadata,
} from '@/services/dcatAp';

interface DcatApMetadataFormProps {
  initialData?: Partial<DcatApMetadata>;
  onSubmit: (data: DcatApMetadata) => void;
  onCancel?: () => void;
}

export function DcatApMetadataForm({ initialData, onSubmit, onCancel }: DcatApMetadataFormProps) {
  const { t } = useTranslation();
  const [selectedThemes, setSelectedThemes] = useState<string[]>(initialData?.dcat_theme ?? []);

  const [form, setForm] = useState({
    dct_title: initialData?.dct_title ?? '',
    dct_description: initialData?.dct_description ?? '',
    dct_publisher: initialData?.dct_publisher ?? '',
    dct_language: initialData?.dct_language ?? ['es'],
    dct_spatial: initialData?.dct_spatial ?? '',
    dct_temporal_start: initialData?.dct_temporal_start ?? '',
    dct_temporal_end: initialData?.dct_temporal_end ?? '',
    dct_access_rights: initialData?.dct_access_rights ?? 'non-public',
    dct_conforms_to: initialData?.dct_conforms_to ?? 'UNE 0087:2025',
    contact_fn: initialData?.dcat_contact_point?.fn ?? '',
    contact_email: initialData?.dcat_contact_point?.hasEmail ?? '',
  });

  const toggleTheme = (theme: string) => {
    setSelectedThemes((prev) =>
      prev.includes(theme) ? prev.filter((t) => t !== theme) : [...prev, theme]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const now = new Date().toISOString();
    const data: DcatApMetadata = {
      dct_title: form.dct_title,
      dct_description: form.dct_description,
      dct_publisher: form.dct_publisher,
      dct_issued: now,
      dct_modified: now,
      dct_language: form.dct_language,
      dct_spatial: form.dct_spatial || undefined,
      dct_temporal_start: form.dct_temporal_start || undefined,
      dct_temporal_end: form.dct_temporal_end || undefined,
      dcat_theme: selectedThemes.length > 0 ? selectedThemes : undefined,
      dct_access_rights: form.dct_access_rights,
      dct_conforms_to: form.dct_conforms_to || undefined,
      dcat_contact_point: form.contact_fn
        ? { fn: form.contact_fn, hasEmail: form.contact_email || undefined }
        : undefined,
    };
    onSubmit(data);
  };

  const update = (key: string, value: string) => setForm((p) => ({ ...p, [key]: value }));

  return (
    <Card className="border-primary/20">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Globe className="h-5 w-5 text-primary" />
          Metadatos DCAT-AP 3.0
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Campos de interoperabilidad semántica conforme al estándar europeo DCAT-AP 3.0
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Title & Description */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="dct_title" className="flex items-center gap-1.5">
                <FileText className="h-3.5 w-3.5" /> Título (dct:title) *
              </Label>
              <Input
                id="dct_title"
                value={form.dct_title}
                onChange={(e) => update('dct_title', e.target.value)}
                placeholder="Título estandarizado del activo"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dct_publisher" className="flex items-center gap-1.5">
                <User className="h-3.5 w-3.5" /> Publicador (dct:publisher) *
              </Label>
              <Input
                id="dct_publisher"
                value={form.dct_publisher}
                onChange={(e) => update('dct_publisher', e.target.value)}
                placeholder="Organización publicadora"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="dct_description" className="flex items-center gap-1.5">
              <FileText className="h-3.5 w-3.5" /> Descripción (dct:description) *
            </Label>
            <Textarea
              id="dct_description"
              value={form.dct_description}
              onChange={(e) => update('dct_description', e.target.value)}
              placeholder="Descripción conforme DCAT del activo de datos"
              required
              rows={3}
            />
          </div>

          {/* Access rights & Spatial */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label className="flex items-center gap-1.5">
                <Shield className="h-3.5 w-3.5" /> Derechos de acceso (dct:accessRights) *
              </Label>
              <Select value={form.dct_access_rights} onValueChange={(v) => update('dct_access_rights', v)}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {ACCESS_RIGHTS_OPTIONS.map((o) => (
                    <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="dct_spatial" className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" /> Cobertura geográfica
              </Label>
              <Input
                id="dct_spatial"
                value={form.dct_spatial}
                onChange={(e) => update('dct_spatial', e.target.value)}
                placeholder="ej: España, UE, Global"
              />
            </div>
          </div>

          {/* Temporal */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="dct_temporal_start" className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" /> Cobertura temporal (inicio)
              </Label>
              <Input
                id="dct_temporal_start"
                type="date"
                value={form.dct_temporal_start}
                onChange={(e) => update('dct_temporal_start', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dct_temporal_end" className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" /> Cobertura temporal (fin)
              </Label>
              <Input
                id="dct_temporal_end"
                type="date"
                value={form.dct_temporal_end}
                onChange={(e) => update('dct_temporal_end', e.target.value)}
              />
            </div>
          </div>

          {/* Themes */}
          <div className="space-y-2">
            <Label className="flex items-center gap-1.5">
              <Tag className="h-3.5 w-3.5" /> Temáticas EU (dcat:theme)
            </Label>
            <div className="flex flex-wrap gap-2">
              {EU_THEMES.map((theme) => (
                <Badge
                  key={theme}
                  variant={selectedThemes.includes(theme) ? 'default' : 'outline'}
                  className="cursor-pointer select-none transition-colors"
                  onClick={() => toggleTheme(theme)}
                >
                  {theme} — {EU_THEME_LABELS[theme]?.split(',')[0]}
                </Badge>
              ))}
            </div>
          </div>

          {/* Contact point */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="contact_fn">Punto de contacto (nombre)</Label>
              <Input
                id="contact_fn"
                value={form.contact_fn}
                onChange={(e) => update('contact_fn', e.target.value)}
                placeholder="Responsable de datos"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact_email">Email de contacto</Label>
              <Input
                id="contact_email"
                type="email"
                value={form.contact_email}
                onChange={(e) => update('contact_email', e.target.value)}
                placeholder="datos@empresa.com"
              />
            </div>
          </div>

          {/* Conforms to */}
          <div className="space-y-2">
            <Label htmlFor="dct_conforms_to">Estándar de conformidad (dct:conformsTo)</Label>
            <Input
              id="dct_conforms_to"
              value={form.dct_conforms_to}
              onChange={(e) => update('dct_conforms_to', e.target.value)}
              placeholder="UNE 0087:2025"
            />
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-2">
            {onCancel && (
              <Button type="button" variant="outline" onClick={onCancel}>Cancelar</Button>
            )}
            <Button type="submit">Guardar metadatos DCAT-AP</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

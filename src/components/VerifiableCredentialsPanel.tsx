import { useEffect, useState } from 'react';
import { Shield, CheckCircle2, XCircle, Clock, Award, Key } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { fetchOrganizationCredentials, CREDENTIAL_TYPE_LABELS, type CredentialType } from '@/services/verifiableCredentials';

interface VerifiableCredentialsPanelProps {
  organizationId: string;
}

interface VcRow {
  id: string;
  credential_type: string;
  issuer_did: string;
  subject_did: string;
  issued_at: string;
  expires_at: string | null;
  status: string;
  revocation_reason: string | null;
}

const statusConfig: Record<string, { icon: typeof CheckCircle2; label: string; variant: 'default' | 'destructive' | 'outline' | 'secondary' }> = {
  active: { icon: CheckCircle2, label: 'Activa', variant: 'default' },
  revoked: { icon: XCircle, label: 'Revocada', variant: 'destructive' },
  expired: { icon: Clock, label: 'Expirada', variant: 'secondary' },
};

export function VerifiableCredentialsPanel({ organizationId }: VerifiableCredentialsPanelProps) {
  const [credentials, setCredentials] = useState<VcRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrganizationCredentials(organizationId)
      .then((data) => setCredentials(data as unknown as VcRow[]))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [organizationId]);

  if (loading) {
    return (
      <Card>
        <CardContent className="py-8 text-center text-muted-foreground">
          Cargando credenciales verificables…
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-primary/20">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Key className="h-5 w-5 text-primary" />
          Credenciales Verificables (VCs) W3C
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Identidad autosoberana conforme al estándar W3C Verifiable Credentials
        </p>
      </CardHeader>
      <CardContent>
        {credentials.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            <Shield className="h-12 w-12 mx-auto mb-3 opacity-30" />
            <p>No hay credenciales verificables emitidas</p>
            <p className="text-xs mt-1">Las VCs se generan al completar verificaciones KYB, certificaciones sectoriales o auditorías.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {credentials.map((vc) => {
              const cfg = statusConfig[vc.status] ?? statusConfig.active;
              const StatusIcon = cfg.icon;
              return (
                <div
                  key={vc.id}
                  className="flex items-center justify-between p-3 rounded-lg border bg-card hover:bg-accent/5 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-primary/70" />
                    <div>
                      <p className="font-medium text-sm">
                        {CREDENTIAL_TYPE_LABELS[vc.credential_type as CredentialType] ?? vc.credential_type}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Emisor: {vc.issuer_did?.slice(0, 20)}… · {new Date(vc.issued_at).toLocaleDateString('es-ES')}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {vc.expires_at && (
                      <span className="text-xs text-muted-foreground">
                        Expira: {new Date(vc.expires_at).toLocaleDateString('es-ES')}
                      </span>
                    )}
                    <Badge variant={cfg.variant} className="gap-1">
                      <StatusIcon className="h-3 w-3" />
                      {cfg.label}
                    </Badge>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </CardContent>
    </Card>
  );
}


-- Entregable 2: Verifiable Credentials table
CREATE TABLE public.verifiable_credentials (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  organization_id uuid NOT NULL REFERENCES public.organizations(id) ON DELETE CASCADE,
  credential_type text NOT NULL,
  issuer_did text NOT NULL,
  subject_did text NOT NULL,
  credential_data jsonb NOT NULL,
  proof jsonb,
  issued_at timestamptz NOT NULL DEFAULT now(),
  expires_at timestamptz,
  status text NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'revoked', 'expired')),
  revocation_reason text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.verifiable_credentials ENABLE ROW LEVEL SECURITY;

-- Organizations can view their own credentials
CREATE POLICY "Organizations can view own credentials"
  ON public.verifiable_credentials FOR SELECT
  USING (
    organization_id IN (
      SELECT organization_id FROM public.user_profiles WHERE user_id = auth.uid()
    )
  );

-- Organizations can insert their own credentials
CREATE POLICY "Organizations can insert own credentials"
  ON public.verifiable_credentials FOR INSERT
  WITH CHECK (
    organization_id IN (
      SELECT organization_id FROM public.user_profiles WHERE user_id = auth.uid()
    )
  );

-- Organizations can update their own credentials
CREATE POLICY "Organizations can update own credentials"
  ON public.verifiable_credentials FOR UPDATE
  USING (
    organization_id IN (
      SELECT organization_id FROM public.user_profiles WHERE user_id = auth.uid()
    )
  );

-- Trigger for updated_at
CREATE TRIGGER update_verifiable_credentials_updated_at
  BEFORE UPDATE ON public.verifiable_credentials
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Index on org + status
CREATE INDEX idx_vc_org_status ON public.verifiable_credentials(organization_id, status);


-- Fix: Revocation function with correct PL/pgSQL syntax
CREATE OR REPLACE FUNCTION public.revoke_expired_transactions()
RETURNS integer
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
DECLARE
  affected1 integer;
  affected2 integer;
BEGIN
  UPDATE data_transactions
  SET status = 'cancelled',
      updated_at = now()
  WHERE status IN ('approved', 'completed')
    AND (created_at + (access_duration_days || ' days')::interval) < now()
    AND subscription_expires_at IS NULL;

  GET DIAGNOSTICS affected1 = ROW_COUNT;

  UPDATE data_transactions
  SET status = 'cancelled',
      updated_at = now()
  WHERE status IN ('approved', 'completed')
    AND subscription_expires_at IS NOT NULL
    AND subscription_expires_at < now();

  GET DIAGNOSTICS affected2 = ROW_COUNT;

  RETURN affected1 + affected2;
END;
$$;

-- Entregable 5: Assurance Level columns (retry if not applied)
ALTER TABLE public.organizations
  ADD COLUMN IF NOT EXISTS assurance_level text DEFAULT 'low';

ALTER TABLE public.data_assets
  ADD COLUMN IF NOT EXISTS required_assurance_level text DEFAULT 'low';

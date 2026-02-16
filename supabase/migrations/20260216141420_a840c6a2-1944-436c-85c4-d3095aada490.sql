
-- FASE 0a: Añadir valores de enum
ALTER TYPE public.app_role ADD VALUE IF NOT EXISTS 'data_space_owner';
ALTER TYPE public.transaction_status ADD VALUE IF NOT EXISTS 'revoked';


-- Entregable 1: DCAT-AP 3.0 columns on catalog_metadata
ALTER TABLE public.catalog_metadata
  ADD COLUMN IF NOT EXISTS dct_title text,
  ADD COLUMN IF NOT EXISTS dct_description text,
  ADD COLUMN IF NOT EXISTS dct_publisher text,
  ADD COLUMN IF NOT EXISTS dct_issued timestamptz,
  ADD COLUMN IF NOT EXISTS dct_modified timestamptz,
  ADD COLUMN IF NOT EXISTS dct_language text[] DEFAULT '{es}',
  ADD COLUMN IF NOT EXISTS dct_spatial text,
  ADD COLUMN IF NOT EXISTS dct_temporal_start timestamptz,
  ADD COLUMN IF NOT EXISTS dct_temporal_end timestamptz,
  ADD COLUMN IF NOT EXISTS dcat_distribution jsonb,
  ADD COLUMN IF NOT EXISTS dcat_theme text[],
  ADD COLUMN IF NOT EXISTS dct_access_rights text DEFAULT 'non-public',
  ADD COLUMN IF NOT EXISTS dct_conforms_to text,
  ADD COLUMN IF NOT EXISTS dcat_contact_point jsonb;

-- Insert ARACEA partner into partner_access table
-- Password will be: aracea + 11 = aracea11
INSERT INTO public.partner_access (
  partner_slug,
  partner_name,
  username,
  partner_number,
  password_hash,
  redirect_path,
  logo_url,
  is_active
) VALUES (
  'aracea',
  'ARACEA',
  'ARACEA',
  11,
  'placeholder',
  '/partners/aracea/miembros',
  NULL,
  true
);
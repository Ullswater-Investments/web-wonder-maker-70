INSERT INTO partner_access (
  partner_slug,
  partner_name,
  partner_number,
  username,
  password_hash,
  redirect_path,
  is_active
) VALUES (
  'closerstill',
  'CloserStill',
  22,
  'CLOSERSTILL',
  'not_used_password_calculated_from_name_and_number',
  '/partners/closerstill/miembros',
  true
);
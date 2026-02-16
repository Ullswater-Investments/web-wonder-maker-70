
-- FASE 0c: Actualizar vista marketplace_listings
DROP VIEW IF EXISTS public.marketplace_listings;

CREATE VIEW public.marketplace_listings AS
SELECT
  da.id AS asset_id, da.product_id,
  dp.name AS product_name, dp.description AS product_description,
  dp.category, dp.version,
  da.subject_org_id AS provider_id, o.name AS provider_name,
  o.seller_category, o.kyb_verified,
  da.price, da.pricing_model, da.currency, da.billing_period, da.created_at,
  COALESCE(esg.energy_renewable_percent, 0) AS energy_renewable_percent,
  (esg.energy_renewable_percent IS NOT NULL AND esg.energy_renewable_percent >= 50) AS has_green_badge,
  COALESCE(AVG(r.rating), 0) AS reputation_score,
  COUNT(r.id) AS review_count
FROM public.data_assets da
JOIN public.data_products dp ON da.product_id = dp.id
JOIN public.organizations o ON da.subject_org_id = o.id
LEFT JOIN public.esg_reports esg ON esg.organization_id = o.id
LEFT JOIN public.organization_reviews r ON r.target_org_id = o.id
WHERE da.status = 'active' AND da.is_visible = true AND da.is_public_marketplace = true
GROUP BY da.id, dp.id, o.id, esg.energy_renewable_percent;

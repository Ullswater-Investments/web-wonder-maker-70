
-- FASE 0b: Todo excepto la vista

-- 1. NEW COLUMNS
ALTER TABLE public.organizations ADD COLUMN IF NOT EXISTS verification_source TEXT;
ALTER TABLE public.organizations ADD COLUMN IF NOT EXISTS is_active BOOLEAN NOT NULL DEFAULT true;
ALTER TABLE public.data_assets ADD COLUMN IF NOT EXISTS is_visible BOOLEAN NOT NULL DEFAULT true;
ALTER TABLE public.data_assets ADD COLUMN IF NOT EXISTS admin_notes TEXT;
ALTER TABLE public.data_assets ADD COLUMN IF NOT EXISTS published_at TIMESTAMPTZ;
ALTER TABLE public.notifications ADD COLUMN IF NOT EXISTS organization_id UUID;

-- 2. NEW TABLE: access_logs
CREATE TABLE IF NOT EXISTS public.access_logs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  transaction_id UUID NOT NULL REFERENCES public.data_transactions(id),
  consumer_org_id UUID NOT NULL REFERENCES public.organizations(id),
  asset_id UUID REFERENCES public.data_assets(id),
  user_id UUID,
  action TEXT DEFAULT 'download',
  status TEXT DEFAULT 'success',
  error_message TEXT,
  metadata JSONB,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.access_logs ENABLE ROW LEVEL SECURITY;

-- 3. FUNCTIONS
CREATE OR REPLACE FUNCTION public.is_data_space_owner(_user_id UUID)
RETURNS BOOLEAN LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = 'data_space_owner')
$$;

CREATE OR REPLACE FUNCTION public.notify_on_transaction_change()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  IF TG_OP = 'UPDATE' AND OLD.status IS DISTINCT FROM NEW.status THEN
    INSERT INTO public.notifications (user_id, organization_id, title, message, type, link)
    SELECT up.user_id, up.organization_id, 'Cambio en transacción',
      'La transacción ha cambiado a estado: ' || NEW.status::text, 'info', '/requests'
    FROM public.user_profiles up
    WHERE up.organization_id IN (NEW.consumer_org_id, NEW.subject_org_id, NEW.holder_org_id);
  END IF;
  RETURN NEW;
END;
$$;

CREATE OR REPLACE FUNCTION public.notify_admin_on_new_asset()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  INSERT INTO public.notifications (user_id, title, message, type, link)
  SELECT ur.user_id, 'Nuevo activo publicado', 'Nuevo activo pendiente de validación.', 'info', '/admin/assets'
  FROM public.user_roles ur WHERE ur.role = 'data_space_owner';
  RETURN NEW;
END;
$$;

CREATE OR REPLACE FUNCTION public.notify_on_asset_status_change()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  IF OLD.status IS DISTINCT FROM NEW.status THEN
    INSERT INTO public.notifications (user_id, organization_id, title, message, type, link)
    SELECT up.user_id, up.organization_id, 'Estado de activo actualizado',
      'Tu activo ha cambiado a estado: ' || NEW.status,
      CASE WHEN NEW.status = 'active' THEN 'success' ELSE 'info' END, '/data'
    FROM public.user_profiles up WHERE up.organization_id = NEW.subject_org_id;
  END IF;
  RETURN NEW;
END;
$$;

CREATE OR REPLACE FUNCTION public.notify_provider_on_download()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  IF NEW.asset_id IS NOT NULL THEN
    INSERT INTO public.notifications (user_id, organization_id, title, message, type, link)
    SELECT up.user_id, up.organization_id, 'Descarga de datos',
      'Se ha realizado una descarga de tu activo de datos.', 'info', '/data'
    FROM public.data_assets da
    JOIN public.user_profiles up ON up.organization_id = da.subject_org_id
    WHERE da.id = NEW.asset_id;
  END IF;
  RETURN NEW;
END;
$$;

-- 4. RLS: access_logs
CREATE POLICY "Consumers ven sus propios logs" ON public.access_logs FOR SELECT
  USING (consumer_org_id = get_user_organization(auth.uid()));
CREATE POLICY "Providers ven logs de sus activos" ON public.access_logs FOR SELECT
  USING (EXISTS (SELECT 1 FROM data_assets da WHERE da.id = access_logs.asset_id AND da.subject_org_id = get_user_organization(auth.uid())));
CREATE POLICY "DSO global visibility on access_logs" ON public.access_logs FOR SELECT
  USING (is_data_space_owner(auth.uid()));
CREATE POLICY "Gateway puede insertar logs" ON public.access_logs FOR INSERT WITH CHECK (true);

-- 5. DSO POLICIES
DROP POLICY IF EXISTS "Data space owners can delete organizations" ON public.organizations;
CREATE POLICY "Data space owners can delete organizations" ON public.organizations FOR DELETE USING (is_data_space_owner(auth.uid()));

DROP POLICY IF EXISTS "Authenticated users can create organizations" ON public.organizations;
CREATE POLICY "Authenticated users can create organizations" ON public.organizations FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Data space owners can view all assets" ON public.data_assets;
CREATE POLICY "Data space owners can view all assets" ON public.data_assets FOR SELECT USING (is_data_space_owner(auth.uid()));

DROP POLICY IF EXISTS "DSO can update any asset" ON public.data_assets;
CREATE POLICY "DSO can update any asset" ON public.data_assets FOR UPDATE USING (is_data_space_owner(auth.uid())) WITH CHECK (is_data_space_owner(auth.uid()));

DROP POLICY IF EXISTS "Users can view marketplace assets" ON public.data_assets;
CREATE POLICY "Users can view marketplace assets" ON public.data_assets FOR SELECT
  USING (is_public_marketplace = true
    OR EXISTS (SELECT 1 FROM user_roles WHERE organization_id = data_assets.subject_org_id AND user_id = auth.uid())
    OR EXISTS (SELECT 1 FROM user_roles WHERE organization_id = data_assets.holder_org_id AND user_id = auth.uid()));

DROP POLICY IF EXISTS "Users can create assets for their org" ON public.data_assets;
CREATE POLICY "Users can create assets for their org" ON public.data_assets FOR INSERT
  WITH CHECK (EXISTS (SELECT 1 FROM user_roles WHERE organization_id = data_assets.subject_org_id AND user_id = auth.uid()));

DROP POLICY IF EXISTS "Data space owners can view all transactions" ON public.data_transactions;
CREATE POLICY "Data space owners can view all transactions" ON public.data_transactions FOR SELECT USING (is_data_space_owner(auth.uid()));

DROP POLICY IF EXISTS "DSO can view all approval history" ON public.approval_history;
CREATE POLICY "DSO can view all approval history" ON public.approval_history FOR SELECT USING (is_data_space_owner(auth.uid()));

DROP POLICY IF EXISTS "Actors can insert approval history" ON public.approval_history;
CREATE POLICY "Actors can insert approval history" ON public.approval_history FOR INSERT WITH CHECK (actor_user_id = auth.uid());

DROP POLICY IF EXISTS "Data space owners can delete user profiles" ON public.user_profiles;
CREATE POLICY "Data space owners can delete user profiles" ON public.user_profiles FOR DELETE USING (is_data_space_owner(auth.uid()));

DROP POLICY IF EXISTS "Users can add their own role" ON public.user_roles;
CREATE POLICY "Users can add their own role" ON public.user_roles FOR INSERT WITH CHECK (user_id = auth.uid());

DROP POLICY IF EXISTS "Data space owners can delete user roles" ON public.user_roles;
CREATE POLICY "Data space owners can delete user roles" ON public.user_roles FOR DELETE USING (is_data_space_owner(auth.uid()));

DROP POLICY IF EXISTS "Users can insert policies for their transactions" ON public.data_policies;
CREATE POLICY "Users can insert policies for their transactions" ON public.data_policies FOR INSERT
  WITH CHECK (EXISTS (SELECT 1 FROM data_transactions dt JOIN user_profiles up ON up.organization_id = dt.consumer_org_id
    WHERE dt.id = data_policies.transaction_id AND up.user_id = auth.uid()));

DROP POLICY IF EXISTS "Users can create wallet during org registration" ON public.wallets;
CREATE POLICY "Users can create wallet during org registration" ON public.wallets FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Data space owners can delete wallets" ON public.wallets;
CREATE POLICY "Data space owners can delete wallets" ON public.wallets FOR DELETE USING (is_data_space_owner(auth.uid()));

DROP POLICY IF EXISTS "Data space owners can delete privacy preferences" ON public.privacy_preferences;
CREATE POLICY "Data space owners can delete privacy preferences" ON public.privacy_preferences FOR DELETE USING (is_data_space_owner(auth.uid()));

DROP POLICY IF EXISTS "Data space owners can delete esg reports" ON public.esg_reports;
CREATE POLICY "Data space owners can delete esg reports" ON public.esg_reports FOR DELETE USING (is_data_space_owner(auth.uid()));

DROP POLICY IF EXISTS "Data space owners can delete audit logs" ON public.audit_logs;
CREATE POLICY "Data space owners can delete audit logs" ON public.audit_logs FOR DELETE USING (is_data_space_owner(auth.uid()));

DROP POLICY IF EXISTS "Data space owners can delete webhooks" ON public.webhooks;
CREATE POLICY "Data space owners can delete webhooks" ON public.webhooks FOR DELETE USING (is_data_space_owner(auth.uid()));

DROP POLICY IF EXISTS "Data space owners can view all catalog metadata" ON public.catalog_metadata;
CREATE POLICY "Data space owners can view all catalog metadata" ON public.catalog_metadata FOR SELECT USING (is_data_space_owner(auth.uid()));

DROP POLICY IF EXISTS "Users can create products" ON public.data_products;
CREATE POLICY "Users can create products" ON public.data_products FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Users can update their org products" ON public.data_products;
CREATE POLICY "Users can update their org products" ON public.data_products FOR UPDATE USING (true);

DROP POLICY IF EXISTS "Data space owners can view all data products" ON public.data_products;
CREATE POLICY "Data space owners can view all data products" ON public.data_products FOR SELECT USING (is_data_space_owner(auth.uid()));

-- 6. TRIGGERS
DROP TRIGGER IF EXISTS on_transaction_change ON public.data_transactions;
CREATE TRIGGER on_transaction_change AFTER INSERT OR UPDATE ON public.data_transactions FOR EACH ROW EXECUTE FUNCTION public.notify_on_transaction_change();

DROP TRIGGER IF EXISTS on_new_asset_created ON public.data_assets;
CREATE TRIGGER on_new_asset_created AFTER INSERT ON public.data_assets FOR EACH ROW EXECUTE FUNCTION public.notify_admin_on_new_asset();

DROP TRIGGER IF EXISTS on_asset_status_change ON public.data_assets;
CREATE TRIGGER on_asset_status_change AFTER UPDATE ON public.data_assets FOR EACH ROW EXECUTE FUNCTION public.notify_on_asset_status_change();

DROP TRIGGER IF EXISTS on_download_access_log ON public.access_logs;
CREATE TRIGGER on_download_access_log AFTER INSERT ON public.access_logs FOR EACH ROW EXECUTE FUNCTION public.notify_provider_on_download();

-- 7. Realtime
ALTER PUBLICATION supabase_realtime ADD TABLE public.access_logs;

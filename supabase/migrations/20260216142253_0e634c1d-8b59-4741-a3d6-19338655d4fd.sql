
-- Performance indexes for access_logs
CREATE INDEX IF NOT EXISTS idx_access_logs_transaction ON public.access_logs(transaction_id);
CREATE INDEX IF NOT EXISTS idx_access_logs_consumer ON public.access_logs(consumer_org_id);
CREATE INDEX IF NOT EXISTS idx_access_logs_created ON public.access_logs(created_at DESC);

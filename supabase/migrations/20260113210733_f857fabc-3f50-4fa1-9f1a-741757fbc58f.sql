-- Create table for storing signed adhesion contracts
CREATE TABLE public.signed_contracts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  position TEXT NOT NULL,
  organization_name TEXT NOT NULL,
  tax_id TEXT NOT NULL,
  signature_data_url TEXT NOT NULL,
  accepted_terms BOOLEAN NOT NULL DEFAULT false,
  accepted_gdpr BOOLEAN NOT NULL DEFAULT false,
  signed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  ip_address TEXT,
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.signed_contracts ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public contract signing)
CREATE POLICY "Anyone can sign contracts"
ON public.signed_contracts
FOR INSERT
WITH CHECK (true);

-- Only authenticated admins can view signed contracts
CREATE POLICY "Admins can view signed contracts"
ON public.signed_contracts
FOR SELECT
USING (
  EXISTS (
    SELECT 1 FROM public.user_roles 
    WHERE user_id = auth.uid() 
    AND role = 'admin'
  )
);

-- Add index for faster lookups
CREATE INDEX idx_signed_contracts_tax_id ON public.signed_contracts(tax_id);
CREATE INDEX idx_signed_contracts_signed_at ON public.signed_contracts(signed_at DESC);
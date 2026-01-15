-- Add partner_number column to partner_access table
ALTER TABLE public.partner_access 
ADD COLUMN partner_number INTEGER;

-- Update ITBID with number 1
UPDATE public.partner_access 
SET partner_number = 1 
WHERE partner_slug = 'itbid';

-- Add comment for documentation
COMMENT ON COLUMN public.partner_access.partner_number IS 'Order number used to calculate the automatic password (e.g., partner 1 = name1)';
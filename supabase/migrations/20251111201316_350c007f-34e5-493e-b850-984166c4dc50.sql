-- Agregar columna is_demo a organizations si no existe
ALTER TABLE organizations ADD COLUMN IF NOT EXISTS is_demo BOOLEAN DEFAULT FALSE;

-- Marcar las organizaciones existentes como producción
UPDATE organizations SET is_demo = FALSE WHERE is_demo IS NULL;
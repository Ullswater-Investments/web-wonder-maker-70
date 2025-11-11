-- Script para insertar transacciones demo
-- EJECUTAR DESPUÉS de que el usuario demo@procuredata.app se haya registrado

-- Verificar que el usuario demo existe
DO $$
DECLARE
  demo_user_id uuid;
BEGIN
  -- Obtener el ID del usuario demo
  SELECT id INTO demo_user_id 
  FROM auth.users 
  WHERE email = 'demo@procuredata.app' 
  LIMIT 1;

  IF demo_user_id IS NULL THEN
    RAISE EXCEPTION 'El usuario demo@procuredata.app debe registrarse primero';
  END IF;

  RAISE NOTICE 'Insertando transacciones demo para usuario: %', demo_user_id;

  -- 1. Estado: pending_subject (NovaTech solicita datos de Tornillería)
  INSERT INTO data_transactions (
    id, consumer_org_id, subject_org_id, holder_org_id, asset_id,
    purpose, justification, status, access_duration_days, requested_by
  ) VALUES (
    '55555555-5555-5555-5555-000000000001',
    '11111111-1111-1111-1111-000000000002', -- NovaTech (Consumer)
    '11111111-1111-1111-1111-111111111001', -- Tornillería (Subject)
    '11111111-1111-1111-1111-000000000001', -- ACME (Holder)
    '33333333-3333-3333-3333-000000000001',
    'Alta de nuevo proveedor en sistema ERP',
    'Necesitamos incorporar a Tornillería TÉCNICA como proveedor para nueva línea de producción',
    'pending_subject', 90, demo_user_id
  ) ON CONFLICT (id) DO NOTHING;

  -- 2. Estado: pending_holder (Fabricaciones solicita datos de Soluciones Químicas)
  INSERT INTO data_transactions (
    id, consumer_org_id, subject_org_id, holder_org_id, asset_id,
    purpose, justification, status, access_duration_days, requested_by
  ) VALUES (
    '55555555-5555-5555-5555-000000000002',
    '11111111-1111-1111-1111-000000000004', -- Fabricaciones (Consumer)
    '11111111-1111-1111-1111-111111111002', -- Soluciones Químicas (Subject)
    '11111111-1111-1111-1111-000000000003', -- Gestión Logística (Holder)
    '33333333-3333-3333-3333-000000000003',
    'Validación de proveedor químico para certificación ISO',
    'Necesitamos verificar datos del proveedor para cumplir con normativa ISO 14001',
    'pending_holder', 60, demo_user_id
  ) ON CONFLICT (id) DO NOTHING;

  -- 3. Estado: completed (Energías Renovables obtuvo datos de Biocen)
  INSERT INTO data_transactions (
    id, consumer_org_id, subject_org_id, holder_org_id, asset_id,
    purpose, justification, status, access_duration_days, requested_by
  ) VALUES (
    '55555555-5555-5555-5555-000000000003',
    '11111111-1111-1111-1111-000000000005', -- Energías Renovables (Consumer)
    '11111111-1111-1111-1111-111111111006', -- Biocen (Subject)
    '11111111-1111-1111-1111-000000000007', -- FarmaGlobal (Holder)
    '33333333-3333-3333-3333-000000000004',
    'Evaluación de proveedor biotecnológico',
    'Análisis de capacidades técnicas para proyecto de bioenergía renovable',
    'completed', 120, demo_user_id
  ) ON CONFLICT (id) DO NOTHING;

  -- 4. Estado: initiated (NovaTech solicita datos de Innovatec)
  INSERT INTO data_transactions (
    id, consumer_org_id, subject_org_id, holder_org_id, asset_id,
    purpose, justification, status, access_duration_days, requested_by
  ) VALUES (
    '55555555-5555-5555-5555-000000000004',
    '11111111-1111-1111-1111-000000000002', -- NovaTech (Consumer)
    '11111111-1111-1111-1111-111111111003', -- Innovatec (Subject)
    '11111111-1111-1111-1111-000000000001', -- ACME (Holder)
    '33333333-3333-3333-3333-000000000002',
    'Homologación de proveedor electrónico',
    'Validación de proveedor de componentes electrónicos para nueva línea IoT',
    'initiated', 90, demo_user_id
  ) ON CONFLICT (id) DO NOTHING;

  -- 5. Estado: approved (Fabricaciones tiene aprobación para Tornillería)
  INSERT INTO data_transactions (
    id, consumer_org_id, subject_org_id, holder_org_id, asset_id,
    purpose, justification, status, access_duration_days, requested_by
  ) VALUES (
    '55555555-5555-5555-5555-000000000005',
    '11111111-1111-1111-1111-000000000004', -- Fabricaciones (Consumer)
    '11111111-1111-1111-1111-111111111001', -- Tornillería (Subject)
    '11111111-1111-1111-1111-000000000001', -- ACME (Holder)
    '33333333-3333-3333-3333-000000000001',
    'Alta urgente de proveedor metalúrgico',
    'Necesitamos dar de alta a Tornillería TÉCNICA de forma urgente',
    'approved', 180, demo_user_id
  ) ON CONFLICT (id) DO NOTHING;

  -- Insertar datos de proveedores
  INSERT INTO supplier_data (
    id, transaction_id, company_name, tax_id, legal_name,
    fiscal_address, contact_person_name, contact_person_email
  ) VALUES
  (
    '66666666-6666-6666-6666-000000000001',
    '55555555-5555-5555-5555-000000000003',
    'Biocen S.A.', 'A66778899', 'Biocen Sociedad Anónima',
    '{"country": "ES", "streetType": "Parque", "streetName": "Científico", "streetNumber": "100"}'::jsonb,
    'Jorge Hidalgo Ruiz', 'jorge.hidalgo@biocen.es'
  ),
  (
    '66666666-6666-6666-6666-000000000002',
    '55555555-5555-5555-5555-000000000001',
    'Tornillería TÉCNICA S.A.', 'A12345678', 'Tornillería TÉCNICA S.A.',
    '{"country": "ES", "streetType": "Calle", "streetName": "Principal", "streetNumber": "42"}'::jsonb,
    'Laura Martín López', 'laura.martin@tornilleria.es'
  ),
  (
    '66666666-6666-6666-6666-000000000003',
    '55555555-5555-5555-5555-000000000002',
    'Soluciones Químicas del Sur S.L.', 'B98765432', 'Soluciones Químicas del Sur S.L.U.',
    '{"country": "ES", "streetType": "Avenida", "streetName": "de la Innovación", "streetNumber": "88"}'::jsonb,
    'Elena Blanco Fernández', 'elena.blanco@solquimica.es'
  ),
  (
    '66666666-6666-6666-6666-000000000004',
    '55555555-5555-5555-5555-000000000005',
    'Tornillería TÉCNICA S.A.', 'A12345678', 'Tornillería TÉCNICA S.A.',
    '{"country": "ES", "streetType": "Calle", "streetName": "Principal", "streetNumber": "42"}'::jsonb,
    'Laura Martín López', 'laura.martin@tornilleria.es'
  )
  ON CONFLICT (id) DO NOTHING;

  RAISE NOTICE '✅ Transacciones demo insertadas exitosamente';
  RAISE NOTICE '   - 5 transacciones en estados: initiated, pending_subject, pending_holder, approved, completed';
  RAISE NOTICE '   - 4 registros de supplier_data creados';
END $$;

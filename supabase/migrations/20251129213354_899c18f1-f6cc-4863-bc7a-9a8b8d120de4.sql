-- Motor Generativo de Datos Sintéticos - Matriz 10x10 Multisectorial
DO $$
DECLARE
    -- Definición de Dimensiones
    sectors TEXT[] := ARRAY[
        'Automotive', 'Energy', 'Pharma', 'Retail', 'Construction', 
        'Finance', 'Aerospace', 'AgriFood', 'Logistics', 'Tech'
    ];
    
    domains TEXT[] := ARRAY[
        'ESG', 'Supply Chain', 'IoT', 'Compliance', 'Finance', 
        'R&D', 'Quality', 'HR', 'Circular Economy', 'Marketing'
    ];

    -- Variables de control
    sector TEXT;
    domain TEXT;
    org_consumer_id UUID;
    org_provider_id UUID;
    org_holder_id UUID;
    prod_id UUID;
    asset_id UUID;
    trans_id UUID;
    
    -- Nombres aleatorios para dar realismo
    prefixes TEXT[] := ARRAY['Global', 'Inter', 'National', 'Smart', 'Green', 'Future', 'Rapid', 'Solid', 'Blue', 'Prime'];
    suffixes TEXT[] := ARRAY['Systems', 'Solutions', 'Industries', 'Dynamics', 'Logistics', 'Group', 'Partners', 'Tech', 'Corp', 'Holdings'];
    
    -- Usuario demo
    demo_user_id UUID;
    random_consumer UUID;
BEGIN
    -- Obtener ID usuario demo
    SELECT id INTO demo_user_id FROM auth.users WHERE email = 'demo@procuredata.app' LIMIT 1;
    
    IF demo_user_id IS NULL THEN
        RAISE NOTICE '⚠️ Usuario demo no encontrado. Abortando generación.';
        RETURN;
    END IF;

    RAISE NOTICE '🚀 Iniciando Generación Masiva de Datos Sintéticos...';

    -- Bucle Principal: Generar Organizaciones y Datos por Sector
    FOREACH sector IN ARRAY sectors LOOP
        RAISE NOTICE '📊 Procesando sector: %', sector;
        
        -- Crear 3 Organizaciones por sector (1 Consumer, 1 Provider, 1 Holder)
        -- Consumer
        INSERT INTO organizations (name, type, tax_id, is_demo)
        VALUES (
            prefixes[1 + floor(random() * 10)::int] || ' ' || sector || ' ' || suffixes[1 + floor(random() * 10)::int],
            'consumer',
            upper(substring(sector from 1 for 3)) || '-C-' || floor(random()*10000)::text,
            true
        ) RETURNING id INTO org_consumer_id;
        
        -- Provider
        INSERT INTO organizations (name, type, tax_id, is_demo)
        VALUES (
            prefixes[1 + floor(random() * 10)::int] || ' ' || sector || ' ' || suffixes[1 + floor(random() * 10)::int],
            'provider',
            upper(substring(sector from 1 for 3)) || '-P-' || floor(random()*10000)::text,
            true
        ) RETURNING id INTO org_provider_id;
        
        -- Holder
        INSERT INTO organizations (name, type, tax_id, is_demo)
        VALUES (
            prefixes[1 + floor(random() * 10)::int] || ' ' || sector || ' ' || suffixes[1 + floor(random() * 10)::int],
            'data_holder',
            upper(substring(sector from 1 for 3)) || '-H-' || floor(random()*10000)::text,
            true
        ) RETURNING id INTO org_holder_id;
        
        -- Crear perfiles de usuario demo en estas organizaciones
        INSERT INTO user_profiles (user_id, organization_id, full_name, position)
        VALUES 
            (demo_user_id, org_consumer_id, 'Usuario Demo', 'Analyst'),
            (demo_user_id, org_provider_id, 'Usuario Demo', 'Data Manager'),
            (demo_user_id, org_holder_id, 'Usuario Demo', 'Administrator')
        ON CONFLICT (user_id, organization_id) DO NOTHING;
        
        -- Crear roles
        INSERT INTO user_roles (user_id, organization_id, role)
        VALUES 
            (demo_user_id, org_consumer_id, 'viewer'),
            (demo_user_id, org_provider_id, 'admin'),
            (demo_user_id, org_holder_id, 'admin')
        ON CONFLICT (user_id, organization_id, role) DO NOTHING;
        
        -- Para cada dominio, crear productos y transacciones
        FOREACH domain IN ARRAY domains LOOP
            -- Crear Producto
            INSERT INTO data_products (name, category, description, version, schema_definition)
            VALUES (
                domain || ' Data for ' || sector,
                domain,
                'Dataset estandarizado para casos de uso de ' || domain || ' en el sector ' || sector || '. Permite análisis avanzados y toma de decisiones basada en datos.',
                'v' || floor(random()*3 + 1)::text || '.' || floor(random()*10)::text,
                jsonb_build_object(
                    'sector', sector,
                    'domain', domain,
                    'kpi_score', 'number',
                    'efficiency_index', 'number',
                    'risk_level', 'string',
                    'last_updated', 'timestamp'
                )
            ) RETURNING id INTO prod_id;

            -- Crear Asset
            INSERT INTO data_assets (product_id, holder_org_id, subject_org_id, status)
            VALUES (prod_id, org_holder_id, org_provider_id, 'available')
            RETURNING id INTO asset_id;
            
            -- Crear Metadata del Catálogo
            INSERT INTO catalog_metadata (asset_id, visibility, categories, tags)
            VALUES (
                asset_id, 
                'public', 
                ARRAY[domain, sector],
                ARRAY['Demo', sector, domain, 'HighValue', 'Trusted', 'Verified']
            );

            -- Crear 2 transacciones por cada activo creado
            FOR j IN 1..2 LOOP
                INSERT INTO data_transactions (
                    consumer_org_id, 
                    subject_org_id, 
                    holder_org_id, 
                    asset_id,
                    purpose, 
                    justification, 
                    status, 
                    access_duration_days, 
                    requested_by, 
                    created_at
                )
                VALUES (
                    org_consumer_id,
                    org_provider_id,
                    org_holder_id,
                    asset_id,
                    'Análisis estratégico de ' || domain || ' en ' || sector,
                    'Requerido para optimización operativa, cumplimiento normativo y ventaja competitiva en el mercado de ' || sector || '.',
                    CASE 
                        WHEN random() > 0.6 THEN 'completed'
                        WHEN random() > 0.4 THEN 'approved'
                        WHEN random() > 0.2 THEN 'pending_holder'
                        ELSE 'pending_subject'
                    END::transaction_status,
                    CASE 
                        WHEN random() > 0.5 THEN 365
                        ELSE 180
                    END,
                    demo_user_id,
                    NOW() - (random() * interval '120 days')
                ) RETURNING id INTO trans_id;

                -- Generar PAYLOADS ricos para las transacciones completadas
                IF (SELECT status FROM data_transactions WHERE id = trans_id) = 'completed' THEN
                    INSERT INTO data_payloads (transaction_id, schema_type, data_content)
                    VALUES (
                        trans_id,
                        CASE 
                            WHEN domain = 'IoT' THEN 'iot_telemetry'
                            WHEN domain = 'ESG' THEN 'esg_report'
                            WHEN domain = 'Finance' THEN 'financial_report'
                            WHEN domain = 'Supply Chain' THEN 'supply_chain_metrics'
                            ELSE 'generic_report'
                        END,
                        jsonb_build_object(
                            'sector', sector,
                            'domain', domain,
                            'overall_score', floor(random() * 30 + 70),
                            'efficiency', floor(random() * 30 + 65),
                            'risk_score', floor(random() * 40 + 20),
                            'monthly_trend', jsonb_build_array(
                                jsonb_build_object('month', 'Jan', 'value', floor(random() * 40 + 60)),
                                jsonb_build_object('month', 'Feb', 'value', floor(random() * 40 + 60)),
                                jsonb_build_object('month', 'Mar', 'value', floor(random() * 40 + 60)),
                                jsonb_build_object('month', 'Apr', 'value', floor(random() * 40 + 60))
                            ),
                            'sector_benchmark', floor(random() * 20 + 70),
                            'compliance_status', CASE WHEN random() > 0.3 THEN 'compliant' ELSE 'under_review' END,
                            'data_quality', floor(random() * 15 + 85),
                            'generated_at', NOW()::text
                        )
                    );
                    
                    -- Crear historial de aprobación para transacciones completadas
                    INSERT INTO approval_history (transaction_id, actor_org_id, actor_user_id, action, notes)
                    VALUES 
                        (trans_id, org_provider_id, demo_user_id, 'pre_approve', 'Datos validados internamente.'),
                        (trans_id, org_holder_id, demo_user_id, 'approve', 'Acceso autorizado tras verificación de compliance.')
                    ON CONFLICT DO NOTHING;
                END IF;
            END LOOP;
        END LOOP;
    END LOOP;

    RAISE NOTICE '✅ ¡Generación Masiva Completada!';
    RAISE NOTICE '📊 Se han creado:';
    RAISE NOTICE '   - 30 organizaciones (10 sectores x 3 tipos)';
    RAISE NOTICE '   - ~100 productos de datos (10 sectores x 10 dominios)';
    RAISE NOTICE '   - ~200 transacciones con estados variados';
    RAISE NOTICE '   - Payloads ricos para visualización y análisis';
END $$;
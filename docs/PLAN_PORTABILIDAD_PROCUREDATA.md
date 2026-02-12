# Plan de Portabilidad — ProcureData

> **Versión**: 1.0
> **Fecha**: 2026-02-12
> **Objetivo**: Garantizar la soberanía de infraestructura conforme a la Sección 4.1.3 de UNE 0087:2025

---

## 1. Exportación de Base de Datos (PostgreSQL)

### 1.1 Exportación completa con pg_dump

```bash
# Exportar esquema + datos
pg_dump --format=custom \
  --no-owner --no-acl \
  --host=<DB_HOST> --port=5432 \
  --dbname=postgres --username=postgres \
  -f procuredata_backup_$(date +%Y%m%d).dump

# Solo esquema (DDL)
pg_dump --schema-only --format=plain \
  --host=<DB_HOST> --port=5432 \
  --dbname=postgres --username=postgres \
  -f procuredata_schema.sql

# Solo datos
pg_dump --data-only --format=plain \
  --host=<DB_HOST> --port=5432 \
  --dbname=postgres --username=postgres \
  -f procuredata_data.sql
```

### 1.2 Restauración

```bash
pg_restore --clean --if-exists \
  --host=<NEW_DB_HOST> --port=5432 \
  --dbname=postgres --username=postgres \
  procuredata_backup.dump
```

### 1.3 Tablas del sistema (31 tablas)

Las tablas principales incluyen: `organizations`, `user_profiles`, `data_transactions`, `data_assets`, `data_policies`, `wallets`, `wallet_transactions`, `catalog_metadata`, `verifiable_credentials`, etc.

---

## 2. Migración de Edge Functions

### 2.1 Inventario de funciones

| Función | Dependencias | Complejidad |
|---------|-------------|-------------|
| `chat-ai` | Google Gemini API | Alta |
| `submit-registration` | Supabase Client | Media |
| `send-welcome-email` | Resend API | Baja |
| `export-dcat-catalog` | Supabase Client | Baja |
| `check-expired-transactions` | Supabase Client | Baja |
| `notification-handler` | Supabase Client | Media |

### 2.2 Pasos de migración

1. **Runtime**: Las Edge Functions usan Deno. Para migrar a Node.js:
   - Reemplazar `Deno.serve()` por Express/Fastify handlers
   - Reemplazar `Deno.env.get()` por `process.env`
   - Actualizar imports de `https://esm.sh/` a paquetes npm

2. **Adaptador Supabase → PostgreSQL directo**:
   ```typescript
   // Antes (Supabase)
   import { createClient } from '@supabase/supabase-js';
   const supabase = createClient(url, key);
   const { data } = await supabase.from('table').select();

   // Después (pg directo)
   import { Pool } from 'pg';
   const pool = new Pool({ connectionString: process.env.DATABASE_URL });
   const { rows } = await pool.query('SELECT * FROM table');
   ```

---

## 3. Contenedorización con Docker

### 3.1 Dockerfile (Frontend)

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json bun.lockb ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
```

### 3.2 Dockerfile (Edge Functions → Node.js)

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY functions/package.json ./
RUN npm install --production
COPY functions/ ./
EXPOSE 3001
CMD ["node", "server.js"]
```

### 3.3 Docker Compose

```yaml
version: '3.8'
services:
  postgres:
    image: postgres:16-alpine
    environment:
      POSTGRES_DB: procuredata
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: ${DB_PASSWORD}
    volumes:
      - pgdata:/var/lib/postgresql/data
      - ./init.sql:/docker-entrypoint-initdb.d/init.sql
    ports:
      - "5432:5432"

  frontend:
    build:
      context: .
      dockerfile: Dockerfile.frontend
    ports:
      - "80:80"
    depends_on:
      - api

  api:
    build:
      context: .
      dockerfile: Dockerfile.api
    environment:
      DATABASE_URL: postgresql://postgres:${DB_PASSWORD}@postgres:5432/procuredata
      RESEND_API_KEY: ${RESEND_API_KEY}
    ports:
      - "3001:3001"
    depends_on:
      - postgres

  gotrue:
    image: supabase/gotrue:latest
    environment:
      GOTRUE_DB_DRIVER: postgres
      DATABASE_URL: postgresql://postgres:${DB_PASSWORD}@postgres:5432/procuredata
      GOTRUE_JWT_SECRET: ${JWT_SECRET}
    ports:
      - "9999:9999"
    depends_on:
      - postgres

volumes:
  pgdata:
```

---

## 4. Despliegue en Nubes Soberanas Europeas

### 4.1 Proveedores compatibles

| Proveedor | Ubicación | Certificaciones | Coste estimado |
|-----------|-----------|-----------------|----------------|
| **OVHcloud** | Francia (Roubaix, Estrasburgo) | ISO 27001, HDS, SecNumCloud | ~150-300€/mes |
| **IONOS** | Alemania (Frankfurt, Berlín) | ISO 27001, C5 BSI | ~120-250€/mes |
| **T-Systems** | Alemania (Frankfurt) | ISO 27001, C5 BSI, TISAX | ~200-400€/mes |
| **Scaleway** | Francia (París) | ISO 27001 | ~100-200€/mes |

### 4.2 Requisitos mínimos

- **Servidor**: 4 vCPU, 8GB RAM, 100GB SSD
- **Base de datos**: PostgreSQL 16 gestionado o contenedorizado
- **Red**: IP pública, certificado TLS, firewall
- **Backup**: Snapshots diarios, retención 30 días

---

## 5. Proceso de Migración

### 5.1 Timeline estimado

| Fase | Duración | Descripción |
|------|----------|-------------|
| Preparación | 1 semana | Exportar DB, adaptar funciones, crear Dockerfiles |
| Testing | 1 semana | Desplegar en entorno de staging, tests E2E |
| Migración DNS | 1 día | Cambiar registros DNS al nuevo servidor |
| Verificación | 3 días | Monitoreo post-migración, rollback si necesario |

### 5.2 Checklist de migración

- [ ] Exportar base de datos completa (pg_dump)
- [ ] Migrar secrets/environment variables
- [ ] Adaptar Edge Functions a Node.js/Express
- [ ] Crear imágenes Docker y subir a registro
- [ ] Desplegar Docker Compose en servidor europeo
- [ ] Configurar certificados TLS (Let's Encrypt)
- [ ] Configurar backups automáticos
- [ ] Tests de humo (auth, transacciones, ARIA)
- [ ] Migrar DNS
- [ ] Verificar RGPD y localización de datos

---

## 6. Consideraciones de Seguridad

- Todos los datos permanecen dentro del Espacio Económico Europeo (EEE)
- Cifrado en tránsito (TLS 1.3) y en reposo (AES-256)
- Backups cifrados con clave gestionada por el operador
- Acceso administrativo limitado por IP y MFA
- Cumplimiento con RGPD Art. 44-49 (transferencias internacionales)

---

*Documento generado conforme al requisito de Soberanía de Infraestructura (Sección 4.1.3) de la norma UNE 0087:2025.*

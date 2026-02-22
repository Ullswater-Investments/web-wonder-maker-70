
# Actualizar Datos Societarios de AGILE PROCUREMENT, S.L.

## Datos actuales (incorrectos)
- CIF: B87617981
- Domicilio: C/ Colquide, 6 - Portal 2, 1a planta, Edificio Prisma, Las Rozas - Madrid
- Contacto: emilio.emulet@accuro.es | Tel. 601 398 868

## Datos nuevos (correctos)
- CIF: B44897494
- Domicilio: Calle General Alvarez de Castro, 44 - BJ IZ, 28010 Madrid, Spain
- Contacto: eduardo@agileprocurement.es | Tel. 680 820 492

## Archivos a modificar (7 archivos)

### 1. `src/components/legal/ContractContent.tsx`
- Linea 17: CIF y domicilio en la clausula introductoria
- Linea 90: CIF en el pie del contrato
- Linea 91: Domicilio en el pie
- Linea 92: Email y telefono de contacto

### 2. `src/pages/CondicionesKitEspacioDatos.tsx`
- Linea 455: CIF
- Linea 456: Domicilio

### 3. `src/pages/PropuestaKitEspacioDatos.tsx`
- Linea 108: CIF
- Linea 109: Domicilio

### 4. `src/hooks/useQualifiedSignature.ts`
- Linea 45: taxId del promotor

### 5. `src/components/contract/PDFPreview.tsx`
- Linea 105: CIF en la vista previa del documento

### 6. `supabase/functions/sign-contract-qualified/index.ts`
- Linea 53: Nombre de empresa (aun dice ACCURO TECHNOLOGY) --> AGILE PROCUREMENT S.L.
- Linea 54: taxId

### 7. `supabase/functions/send-inscription-email/index.ts`
- Linea 39: Remitente (aun dice "Global Data Care") --> "Procuredata"
- Linea 40: Email destinatario emilio.emulet@accuro.es --> eduardo@agileprocurement.es

### 8. `src/pages/KitEspacioDatosInscripcion.tsx`
- Linea 22: SUPER_ADMIN_EMAIL de emilio.emulet@accuro.es --> eduardo@agileprocurement.es

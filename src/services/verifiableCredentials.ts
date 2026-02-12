/**
 * Verifiable Credentials (VCs) W3C Service
 * Implements issuance, verification, and presentation of W3C Verifiable Credentials
 * using ethers.js for cryptographic signatures (UNE 0087:2025 Section 5.4 IAM).
 */

import { ethers } from 'ethers';
import { supabase } from '@/integrations/supabase/client';

export interface VerifiableCredential {
  '@context': string[];
  type: string[];
  id: string;
  issuer: string;
  issuanceDate: string;
  expirationDate?: string;
  credentialSubject: Record<string, unknown>;
  proof?: CredentialProof;
}

export interface CredentialProof {
  type: string;
  created: string;
  verificationMethod: string;
  proofPurpose: string;
  jws?: string;
}

export interface VerifiablePresentation {
  '@context': string[];
  type: string[];
  holder: string;
  verifiableCredential: VerifiableCredential[];
  proof?: CredentialProof;
}

export type CredentialType = 'KYBCredential' | 'SectorCertification' | 'GreenPartner' | 'DataQuality' | 'eIDASCertificate';

export const CREDENTIAL_TYPE_LABELS: Record<CredentialType, string> = {
  KYBCredential: 'Verificación KYB',
  SectorCertification: 'Certificación Sectorial',
  GreenPartner: 'Partner Verde',
  DataQuality: 'Calidad de Datos',
  eIDASCertificate: 'Certificado eIDAS',
};

/**
 * Issue a Verifiable Credential signed with the issuer's Web3 wallet.
 */
export async function issueCredential(
  signer: ethers.Signer,
  credentialType: CredentialType,
  issuerDid: string,
  subjectDid: string,
  claims: Record<string, unknown>,
  expirationDate?: string
): Promise<VerifiableCredential> {
  const now = new Date().toISOString();
  const credentialId = `urn:procuredata:vc:${crypto.randomUUID()}`;

  const credential: VerifiableCredential = {
    '@context': [
      'https://www.w3.org/2018/credentials/v1',
      'https://www.w3.org/2018/credentials/examples/v1',
    ],
    type: ['VerifiableCredential', credentialType],
    id: credentialId,
    issuer: issuerDid,
    issuanceDate: now,
    ...(expirationDate && { expirationDate }),
    credentialSubject: {
      id: subjectDid,
      ...claims,
    },
  };

  // Sign the credential
  const message = JSON.stringify(credential);
  const signature = await signer.signMessage(message);

  credential.proof = {
    type: 'EcdsaSecp256k1Signature2019',
    created: now,
    verificationMethod: issuerDid,
    proofPurpose: 'assertionMethod',
    jws: signature,
  };

  return credential;
}

/**
 * Verify a Verifiable Credential's signature and validity.
 */
export function verifyCredential(credential: VerifiableCredential): {
  valid: boolean;
  checks: { signature: boolean; expiration: boolean; structure: boolean };
} {
  const checks = {
    signature: false,
    expiration: true,
    structure: false,
  };

  // Structure check
  checks.structure = !!(
    credential['@context']?.length &&
    credential.type?.includes('VerifiableCredential') &&
    credential.issuer &&
    credential.issuanceDate &&
    credential.credentialSubject
  );

  // Expiration check
  if (credential.expirationDate) {
    checks.expiration = new Date(credential.expirationDate) > new Date();
  }

  // Signature verification
  if (credential.proof?.jws) {
    try {
      const { proof, ...credentialWithoutProof } = credential;
      const message = JSON.stringify(credentialWithoutProof);
      const recoveredAddress = ethers.verifyMessage(message, proof.jws);
      // DID format: did:ethr:0x...
      const issuerAddress = credential.issuer.replace('did:ethr:', '');
      checks.signature = recoveredAddress.toLowerCase() === issuerAddress.toLowerCase();
    } catch {
      checks.signature = false;
    }
  }

  return {
    valid: checks.signature && checks.expiration && checks.structure,
    checks,
  };
}

/**
 * Create a Verifiable Presentation wrapping one or more VCs.
 */
export async function presentCredential(
  signer: ethers.Signer,
  holderDid: string,
  credentials: VerifiableCredential[]
): Promise<VerifiablePresentation> {
  const presentation: VerifiablePresentation = {
    '@context': ['https://www.w3.org/2018/credentials/v1'],
    type: ['VerifiablePresentation'],
    holder: holderDid,
    verifiableCredential: credentials,
  };

  const message = JSON.stringify(presentation);
  const signature = await signer.signMessage(message);

  presentation.proof = {
    type: 'EcdsaSecp256k1Signature2019',
    created: new Date().toISOString(),
    verificationMethod: holderDid,
    proofPurpose: 'authentication',
    jws: signature,
  };

  return presentation;
}

/**
 * Save a VC to the database.
 */
export async function saveCredentialToDb(
  organizationId: string,
  credential: VerifiableCredential,
  credentialType: CredentialType
) {
  const { data, error } = await supabase
    .from('verifiable_credentials' as any)
    .insert({
      organization_id: organizationId,
      credential_type: credentialType,
      issuer_did: credential.issuer,
      subject_did: (credential.credentialSubject as any).id,
      credential_data: credential as any,
      proof: credential.proof as any,
      issued_at: credential.issuanceDate,
      expires_at: credential.expirationDate || null,
      status: 'active',
    })
    .select()
    .single();

  if (error) throw error;
  return data;
}

/**
 * Fetch credentials for an organization.
 */
export async function fetchOrganizationCredentials(organizationId: string) {
  const { data, error } = await supabase
    .from('verifiable_credentials' as any)
    .select('*')
    .eq('organization_id', organizationId)
    .order('issued_at', { ascending: false });

  if (error) throw error;
  return data ?? [];
}

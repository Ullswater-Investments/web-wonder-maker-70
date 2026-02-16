/**
 * Pontus-X Access Control Utilities
 * 
 * Implements the three-level access hierarchy:
 * 1. Whitelist (allowed_wallets) → PRIVATE mode
 * 2. Blacklist (denied_wallets) → PUBLIC with exclusions
 * 3. No restrictions → FULLY PUBLIC
 */

interface AccessEntry {
  org_id: string;
  org_name?: string;
  wallet_address?: string;
}

interface AccessPolicy {
  allowed_wallets?: AccessEntry[];
  access_list?: AccessEntry[]; // legacy alias
  denied_wallets?: AccessEntry[];
  access_timeout_days?: number;
  permissions?: string[];
  prohibitions?: string[];
  obligations?: string[];
  terms_url?: string | null;
}

/**
 * Checks if an organization has access to an asset based on
 * the Pontus-X hierarchy (Whitelist > Blacklist > Public).
 */
export function checkAssetAccess(
  asset: { custom_metadata: any; subject_org_id: string },
  activeOrgId: string | null,
  isDataSpaceOwner: boolean
): boolean {
  // Owner and DSO always have access
  if (activeOrgId && activeOrgId === asset.subject_org_id) return true;
  if (isDataSpaceOwner) return true;

  const accessPolicy = asset.custom_metadata?.access_policy as AccessPolicy | undefined;
  if (!accessPolicy) return true; // No policy = public

  const allowedWallets = accessPolicy.allowed_wallets || accessPolicy.access_list || [];
  const deniedWallets = accessPolicy.denied_wallets || [];

  // PRIORITY 1: Whitelist active
  if (allowedWallets.length > 0) {
    return allowedWallets.some((entry) => entry.org_id === activeOrgId);
  }

  // PRIORITY 2: Blacklist active
  if (deniedWallets.length > 0) {
    return !deniedWallets.some((entry) => entry.org_id === activeOrgId);
  }

  // PRIORITY 3: Fully public
  return true;
}

/**
 * Extracts the access timeout configured by the provider.
 * Returns 90 as default if not configured.
 */
export function getAccessTimeout(asset: { custom_metadata: any }): number {
  return asset.custom_metadata?.access_policy?.access_timeout_days || 90;
}

/**
 * Determines the effective access mode label for display.
 */
export function getAccessModeLabel(accessPolicy: AccessPolicy | undefined): string {
  if (!accessPolicy) return "PÚBLICO Total";
  
  const allowed = accessPolicy.allowed_wallets || accessPolicy.access_list || [];
  const denied = accessPolicy.denied_wallets || [];

  if (allowed.length > 0) return "PRIVADO (Whitelist activa)";
  if (denied.length > 0) return "PÚBLICO con Blacklist";
  return "PÚBLICO Total";
}

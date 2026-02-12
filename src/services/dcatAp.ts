/**
 * DCAT-AP 3.0 Service
 * Generates JSON-LD metadata conforming to the DCAT Application Profile 3.0
 * for European data space interoperability (UNE 0087:2025 Section 5.3).
 */

export interface DcatApMetadata {
  dct_title: string;
  dct_description: string;
  dct_publisher: string;
  dct_issued: string;
  dct_modified: string;
  dct_language: string[];
  dct_spatial?: string;
  dct_temporal_start?: string;
  dct_temporal_end?: string;
  dcat_distribution?: DcatDistribution[];
  dcat_theme?: string[];
  dct_access_rights: string;
  dct_conforms_to?: string;
  dcat_contact_point?: DcatContactPoint;
}

export interface DcatDistribution {
  format: string;
  accessURL: string;
  mediaType?: string;
  byteSize?: number;
}

export interface DcatContactPoint {
  fn: string;
  hasEmail?: string;
  hasTelephone?: string;
}

export interface DcatCatalogEntry {
  id: string;
  asset_id: string;
  metadata: DcatApMetadata;
}

/**
 * EU Theme vocabulary (data-theme-skos)
 */
export const EU_THEMES = [
  'AGRI', 'ECON', 'EDUC', 'ENER', 'ENVI', 'GOVE', 'HEAL',
  'INTR', 'JUST', 'REGI', 'SOCI', 'TECH', 'TRAN',
] as const;

export const EU_THEME_LABELS: Record<string, string> = {
  AGRI: 'Agricultura, pesca, silvicultura y alimentación',
  ECON: 'Economía y finanzas',
  EDUC: 'Educación, cultura y deporte',
  ENER: 'Energía',
  ENVI: 'Medio ambiente',
  GOVE: 'Gobierno y sector público',
  HEAL: 'Salud',
  INTR: 'Asuntos internacionales',
  JUST: 'Justicia, sistema jurídico y seguridad pública',
  REGI: 'Regiones y ciudades',
  SOCI: 'Población y sociedad',
  TECH: 'Ciencia y tecnología',
  TRAN: 'Transporte',
};

export const ACCESS_RIGHTS_OPTIONS = [
  { value: 'public', label: 'Público' },
  { value: 'restricted', label: 'Restringido' },
  { value: 'non-public', label: 'No público' },
] as const;

export const UPDATE_FREQUENCIES = [
  { value: 'daily', label: 'Diaria' },
  { value: 'weekly', label: 'Semanal' },
  { value: 'monthly', label: 'Mensual' },
  { value: 'quarterly', label: 'Trimestral' },
  { value: 'annual', label: 'Anual' },
] as const;

/**
 * Generate a single DCAT-AP 3.0 JSON-LD dataset entry.
 */
export function generateDcatApDatasetJsonLd(entry: DcatCatalogEntry): Record<string, unknown> {
  const { metadata } = entry;

  const dataset: Record<string, unknown> = {
    '@type': 'dcat:Dataset',
    '@id': `urn:procuredata:dataset:${entry.asset_id}`,
    'dct:title': metadata.dct_title,
    'dct:description': metadata.dct_description,
    'dct:publisher': {
      '@type': 'foaf:Agent',
      'foaf:name': metadata.dct_publisher,
    },
    'dct:issued': metadata.dct_issued,
    'dct:modified': metadata.dct_modified,
    'dct:language': metadata.dct_language.map((l) => `http://publications.europa.eu/resource/authority/language/${l.toUpperCase()}`),
    'dct:accessRights': `http://publications.europa.eu/resource/authority/access-right/${metadata.dct_access_rights.toUpperCase()}`,
  };

  if (metadata.dct_spatial) {
    dataset['dct:spatial'] = metadata.dct_spatial;
  }

  if (metadata.dct_temporal_start || metadata.dct_temporal_end) {
    dataset['dct:temporal'] = {
      '@type': 'dct:PeriodOfTime',
      ...(metadata.dct_temporal_start && { 'dcat:startDate': metadata.dct_temporal_start }),
      ...(metadata.dct_temporal_end && { 'dcat:endDate': metadata.dct_temporal_end }),
    };
  }

  if (metadata.dcat_theme?.length) {
    dataset['dcat:theme'] = metadata.dcat_theme.map(
      (t) => `http://publications.europa.eu/resource/authority/data-theme/${t}`
    );
  }

  if (metadata.dct_conforms_to) {
    dataset['dct:conformsTo'] = metadata.dct_conforms_to;
  }

  if (metadata.dcat_contact_point) {
    dataset['dcat:contactPoint'] = {
      '@type': 'vcard:Kind',
      'vcard:fn': metadata.dcat_contact_point.fn,
      ...(metadata.dcat_contact_point.hasEmail && { 'vcard:hasEmail': metadata.dcat_contact_point.hasEmail }),
      ...(metadata.dcat_contact_point.hasTelephone && { 'vcard:hasTelephone': metadata.dcat_contact_point.hasTelephone }),
    };
  }

  if (metadata.dcat_distribution?.length) {
    dataset['dcat:distribution'] = metadata.dcat_distribution.map((d) => ({
      '@type': 'dcat:Distribution',
      'dcat:accessURL': d.accessURL,
      'dct:format': d.format,
      ...(d.mediaType && { 'dcat:mediaType': d.mediaType }),
      ...(d.byteSize && { 'dcat:byteSize': d.byteSize }),
    }));
  }

  return dataset;
}

/**
 * Generate the full DCAT-AP 3.0 catalog JSON-LD document.
 */
export function generateDcatApCatalogJsonLd(
  entries: DcatCatalogEntry[],
  catalogTitle = 'ProcureData – Catálogo de Datos Soberano',
  catalogDescription = 'Catálogo de activos de datos conforme DCAT-AP 3.0 del espacio de datos ProcureData.'
): Record<string, unknown> {
  return {
    '@context': {
      dcat: 'http://www.w3.org/ns/dcat#',
      dct: 'http://purl.org/dc/terms/',
      foaf: 'http://xmlns.com/foaf/0.1/',
      vcard: 'http://www.w3.org/2006/vcard/ns#',
      xsd: 'http://www.w3.org/2001/XMLSchema#',
    },
    '@type': 'dcat:Catalog',
    'dct:title': catalogTitle,
    'dct:description': catalogDescription,
    'dct:publisher': {
      '@type': 'foaf:Agent',
      'foaf:name': 'ProcureData',
    },
    'dct:issued': new Date().toISOString(),
    'dct:language': 'http://publications.europa.eu/resource/authority/language/SPA',
    'dct:conformsTo': 'https://semiceu.github.io/DCAT-AP/releases/3.0.0/',
    'dcat:dataset': entries.map(generateDcatApDatasetJsonLd),
  };
}

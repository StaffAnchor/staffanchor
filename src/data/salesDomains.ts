export interface SalesDomain {
  name: string;
  category: 'B2B Sales' | 'B2C Sales';
}

export const b2bDomains: string[] = [
  'SaaS Sales',
  'Enterprise Sales',
  'Government / Institutional',
  'Inside Sales (B2B)',
  'Channel / Partner',
  'Healthcare / Pharma',
];

export const b2cDomains: string[] = [
  'Inside Sales (B2C)',
  'EdTech',
  'BFSI',
  'Retail Sales',
  'Real Estate',
  'Other Consumer',
];

export const allSalesDomains: SalesDomain[] = [
  ...b2bDomains.map((name) => ({ name, category: 'B2B Sales' as const })),
  ...b2cDomains.map((name) => ({ name, category: 'B2C Sales' as const })),
];

// The four ways StaffAnchor works with employers. Single source of truth for
// the homepage "How we work with you" cards, the Employers hub cards, the
// footer links and the "What do you need?" dropdown on the mandate form.

export const SERVICE_OPTIONS = [
  'Permanent Hiring',
  'Leadership Search',
  'Dedicated Sales Team',
  'Sales Enablement',
  'Not sure, advise me',
] as const;

export type ServiceOption = (typeof SERVICE_OPTIONS)[number];

export interface EmployerService {
  slug: string;
  href: string;
  title: string;
  // Used in the "What do you need?" dropdown to pre-select on that page.
  option: ServiceOption;
  featured: boolean; // Permanent Hiring and Leadership Search are the lead services
  oneLiner: string;
  description: string; // 2-3 lines, for the Employers hub
}

export const employerServices: EmployerService[] = [
  {
    slug: 'permanent-hiring',
    href: '/employers/permanent-hiring',
    title: 'Permanent Hiring',
    option: 'Permanent Hiring',
    featured: true,
    oneLiner: 'Verified shortlists for Account Executives, Key Account Managers and Sales Managers.',
    description:
      'Verified B2B revenue hires for technology companies. Every shortlist carries three-year quota attainment, deal size and a recruiter recommendation, and you pay only when the candidate joins.',
  },
  {
    slug: 'leadership-search',
    href: '/employers/leadership-search',
    title: 'Leadership Search',
    option: 'Leadership Search',
    featured: true,
    oneLiner: 'Confidential, retained search for Sales Directors, VPs and Country Heads.',
    description:
      'Retained search for Sales Directors, VPs, Country Heads and CRO roles. Led personally by a sales leader, with a mapped search that reaches passive candidates and handles replacement searches discreetly.',
  },
  {
    slug: 'dedicated-sales-teams',
    href: '/employers/dedicated-sales-teams',
    title: 'Dedicated Sales Teams',
    option: 'Dedicated Sales Team',
    featured: false,
    oneLiner: 'An embedded hiring partner or contract sales hires, so you scale without building a recruiting function.',
    description:
      'An embedded StaffAnchor recruiter who runs your sales hiring, so you scale without building a recruiting function. Contract and on-roll sales hires are coming soon.',
  },
  {
    slug: 'sales-enablement',
    href: '/employers/sales-enablement',
    title: 'Sales Enablement',
    option: 'Sales Enablement',
    featured: false,
    oneLiner: 'Onboarding and training programs for your sales team.',
    description:
      'Practical programs for new-hire onboarding, enterprise selling and first-time sales managers, designed by an operator and measured on ramp time and quota attainment.',
  },
];

export const advisoryService = {
  slug: 'sales-hiring-advisory',
  href: '/employers/sales-hiring-advisory',
  title: 'Sales Hiring Advisory',
};

export const B2B_DOMAINS: string[] = [
  'SaaS Sales',
  'Enterprise Sales',
  'Government / Institutional',
  'Inside Sales (B2B)',
  'Channel / Partner',
  'Healthcare / Pharma',
];

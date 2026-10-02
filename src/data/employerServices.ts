// The four ways StaffAnchor works with employers. Single source of truth for
// the homepage "How we work with you" cards, the Employers hub cards, the
// footer links and the "What do you need?" dropdown on the mandate form.

export const SERVICE_OPTIONS = [
  'Permanent Hiring',
  'Leadership Search',
  'Recruitment Process Outsourcing (RPO)',
  'Managed Sales Team',
  'Sales Enablement',
  'Not sure, advise me',
] as const;

export type ServiceOption = (typeof SERVICE_OPTIONS)[number];

export interface EmployerService {
  slug: string;
  href: string;
  title: string;
  // Compact label for pills and tight spaces.
  shortTitle: string;
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
    shortTitle: 'Permanent Hiring',
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
    shortTitle: 'Leadership Search',
    option: 'Leadership Search',
    featured: true,
    oneLiner: 'Confidential, retained search for Sales Directors, VPs and Country Heads.',
    description:
      'Retained search for Sales Directors, VPs, Country Heads and CRO roles. Led personally by a sales leader, with a mapped search that reaches passive candidates and handles replacement searches discreetly.',
  },
  {
    slug: 'recruitment-process-outsourcing',
    href: '/employers/recruitment-process-outsourcing',
    title: 'Recruitment Process Outsourcing',
    shortTitle: 'RPO',
    option: 'Recruitment Process Outsourcing (RPO)',
    featured: false,
    oneLiner: 'An embedded StaffAnchor recruiter who runs your sales hiring, so you scale without building a recruiting function.',
    description:
      'A dedicated recruiter embedded in your team, running your sales hiring end to end for a monthly fee, with a weekly dashboard so you always know where every role stands.',
  },
  {
    slug: 'managed-sales-teams',
    href: '/employers/managed-sales-teams',
    title: 'Managed Sales Teams',
    shortTitle: 'Managed Sales Teams',
    option: 'Managed Sales Team',
    featured: false,
    oneLiner: 'Contract or on-roll sellers hired and managed by us, with payroll and compliance handled.',
    description:
      'We hire, onboard and payroll contract or on-roll sellers for pilots, new markets and project needs, so you add sales capacity without adding hiring or payroll overhead.',
  },
  {
    slug: 'sales-enablement',
    href: '/employers/sales-enablement',
    title: 'Sales Enablement',
    shortTitle: 'Sales Enablement',
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

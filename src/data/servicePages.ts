import type { ServiceOption } from '@/data/employerServices';

// Content for the Employers sub-pages. One shared skeleton (hero, who it is
// for, how it works, engagement, proof, FAQ, form, "also consider"), so a
// page is just data. Copy follows the developer brief; anything the brief left
// open (guarantee period, fee percentages, client names) is deliberately kept
// general rather than invented.

export type Block =
  | { type: 'cards'; eyebrow?: string; title: string; intro?: string; items: { title: string; text: string }[] }
  | { type: 'bullets'; eyebrow?: string; title: string; intro?: string; items: string[] }
  | { type: 'steps'; eyebrow?: string; title: string; intro?: string; steps: { title: string; text: string }[] }
  | {
      type: 'options';
      eyebrow?: string;
      title: string;
      intro?: string;
      options: { name: string; bestFor: string; how: string; comingSoon?: boolean }[];
    }
  | { type: 'engagement'; eyebrow?: string; title: string; text: string; points?: string[] }
  | { type: 'trainer'; eyebrow?: string; title: string; text: string }
  | { type: 'sample'; eyebrow?: string; title: string; intro?: string }
  | { type: 'faq'; title: string; items: { q: string; a: string }[] };

export interface ServicePageConfig {
  slug: string;
  seo: { title: string; description: string };
  eyebrow: string;
  h1: string;
  accent?: string; // trailing serif-italic phrase of the headline
  sub: string;
  cta: string;
  // 'mandate' = the full hiring-mandate form; 'enquiry' = a short contact request
  form:
    | { kind: 'mandate'; service: ServiceOption; title: string; subtitle: string; submit: string }
    | { kind: 'enquiry'; service: string; title: string; subtitle: string; submit: string; messageLabel?: string };
  showHeroSample?: boolean;
  blocks: Block[];
  also: { label: string; href: string };
}

export const servicePages: Record<string, ServicePageConfig> = {
  'permanent-hiring': {
    slug: 'permanent-hiring',
    seo: {
      title: 'Enterprise Sales Recruitment India | StaffAnchor',
      description:
        'Verified B2B revenue hires for technology companies in India: Account Executives, Key Account Managers and Sales Managers, paid only when they join.',
    },
    eyebrow: 'Permanent Hiring',
    h1: 'Enterprise sales hires you can say yes to,',
    accent: 'fast.',
    sub: 'Verified B2B revenue hires for technology companies in India: Account Executives, Key Account Managers and Sales Managers.',
    cta: 'Submit a hiring mandate',
    form: {
      kind: 'mandate',
      service: 'Permanent Hiring',
      title: 'Hiring Mandate',
      subtitle: 'Complete this form and a StaffAnchor recruiter will follow up within one business day.',
      submit: 'Submit Mandate →',
    },
    showHeroSample: true,
    blocks: [
      {
        type: 'cards',
        eyebrow: 'Who we hire',
        title: 'B2B revenue roles for technology companies',
        intro: 'Roles that carry a number and sell a complex product to businesses.',
        items: [
          { title: 'Enterprise and Strategic Account Executives', text: 'Win and close large, multi-stakeholder deals.' },
          { title: 'Key Account Managers', text: 'Grow and protect your most important customer relationships.' },
          { title: 'Sales Managers and Regional Heads', text: 'Build, coach and lead a team to its number.' },
          { title: 'Sectors', text: 'Cybersecurity, cloud, data and AI, B2B SaaS and vertical software.' },
        ],
      },
      {
        type: 'bullets',
        eyebrow: 'The shortlist',
        title: 'Every shortlist includes',
        items: [
          'Three-year quota attainment, deal size and sales cycle',
          'Recruiter-verified notice period and relocation',
          'Hunter, farmer or hybrid fit for how your team sells',
          'A structured recommendation with interview questions to ask',
        ],
      },
      {
        type: 'steps',
        eyebrow: 'How it works',
        title: 'From mandate to shortlist',
        steps: [
          { title: 'Share your mandate', text: 'Role, sales category, city and budget range. It takes minutes, not a lengthy intake call.' },
          { title: 'We source and verify', text: 'Candidates are matched against real sales performance data, then verified on a call using a standard scorecard.' },
          { title: 'You receive a shortlist', text: 'Quota history, deal size, verified notice period and our recruiter’s recommendation, not a pile of resumes.' },
          { title: 'You interview qualified candidates', text: 'Every name you meet has already cleared the bar.' },
        ],
      },
      {
        type: 'engagement',
        eyebrow: 'Engagement model',
        title: 'Success-based, no retainer',
        text: 'You pay only when a candidate you hire joins. There is no retainer and no upfront fee.',
        points: [
          'A replacement guarantee applies; the period is set out in your mandate agreement.',
          'Fee percentage is discussed when you submit a mandate.',
        ],
      },
      { type: 'sample', eyebrow: 'Sample shortlist', title: 'What a recruiter assessment looks like', intro: 'Illustrative sample data. Every real shortlist is backed by a recruiter-verified assessment.' },
      {
        type: 'faq',
        title: 'Questions employers ask',
        items: [
          { q: 'How fast is the first shortlist?', a: 'It depends on the role and the market. We respond to every mandate within one business day and confirm an expected timeline when we accept it.' },
          { q: 'How do you verify quota attainment?', a: 'Candidates share three years of quota targets and attainment, along with deal size and sales cycle. A recruiter goes through them on a call using a standard scorecard, and the shortlist flags anything that is thin or unclear.' },
          { q: 'What if the hire leaves in the guarantee period?', a: 'We replace them at no additional fee. The guarantee period is set out in your mandate agreement before we start.' },
          { q: 'What does it cost?', a: 'It is success-based: you pay only when a candidate you hire joins. There is no retainer and no upfront fee. We agree the fee on your mandate.' },
        ],
      },
    ],
    also: { label: 'Also consider: Leadership Search', href: '/employers/leadership-search' },
  },

  'leadership-search': {
    slug: 'leadership-search',
    seo: {
      title: 'Sales Leadership Search India | VP Sales and CRO Hiring | StaffAnchor',
      description:
        'Confidential, retained search for Sales Directors, VPs, Country Heads and CRO roles at B2B technology companies in India.',
    },
    eyebrow: 'Leadership Search',
    h1: 'Find the sales leader who can own your',
    accent: 'revenue.',
    sub: 'Confidential, retained search for Sales Directors, VPs, Country Heads and CRO roles.',
    cta: 'Discuss a leadership search',
    form: {
      kind: 'enquiry',
      service: 'Leadership Search',
      title: 'Discuss a leadership search',
      subtitle: 'A short request is enough. We will reach out within one business day.',
      submit: 'Discuss a leadership search →',
    },
    blocks: [
      {
        type: 'bullets',
        eyebrow: 'When companies use us',
        title: 'Moments that call for a leadership search',
        items: [
          'Entering India and building the first sales team',
          'Replacing a sales leader',
          'Scaling a team from 10 to 50 sellers',
          'Hiring the first sales head at a funded startup',
        ],
      },
      {
        type: 'cards',
        eyebrow: 'Roles',
        title: 'Leadership roles we search for',
        items: [
          { title: 'Sales Director', text: 'Owns a region or segment and the managers under it.' },
          { title: 'VP Sales', text: 'Owns the sales number and the way the team sells.' },
          { title: 'Country Head', text: 'Runs the business for a market.' },
          { title: 'CRO / Business Head (P&L)', text: 'Owns revenue across the company, with profit and loss responsibility.' },
        ],
      },
      {
        type: 'steps',
        eyebrow: 'Process',
        title: 'How a search runs',
        steps: [
          { title: 'Define the success profile', text: 'What the leader must achieve in the first year, and what they must have done before.' },
          { title: 'Mapped search and direct approach', text: 'We map the market and approach people directly, including those who are not looking.' },
          { title: 'Assessment and referencing', text: 'Structured assessment and reference checks before anyone reaches you.' },
          { title: 'Shortlist and offer support', text: 'A short, ranked shortlist, then support through negotiation and joining.' },
        ],
      },
      {
        type: 'trainer',
        eyebrow: 'Why us',
        title: 'Led by a sales leader',
        text: 'Every leadership search is led personally by a sales leader with 15 years of experience building and leading sales teams. You are talking to someone who has done the job you are hiring for.',
      },
      {
        type: 'engagement',
        eyebrow: 'Engagement',
        title: 'Retained, milestone-based, exclusive',
        text: 'Leadership search is retained and exclusive, paid in milestones across the search.',
        points: ['Replacement and stealth searches are handled discreetly.', 'Terms, milestones and replacement cover are set out in the engagement letter before the search starts.'],
      },
      {
        type: 'faq',
        title: 'Questions about leadership search',
        items: [
          { q: 'How long does a search take?', a: 'It depends on the role and how rare the profile is. We agree a search plan and milestones at the start and update you at each one.' },
          { q: 'Do you handle confidential searches?', a: 'Yes. Replacement and stealth searches are handled discreetly, and neither your name nor a candidate’s is shared without consent.' },
          { q: 'How is retained search priced?', a: 'It is retained and milestone-based: a portion at kick-off, then at agreed milestones such as shortlist and offer. We set the structure with you for each search.' },
          { q: 'Is there a guarantee?', a: 'Replacement terms are agreed in the engagement letter before the search begins.' },
        ],
      },
    ],
    also: { label: 'Also consider: Sales Hiring Advisory', href: '/employers/sales-hiring-advisory' },
  },

  'recruitment-process-outsourcing': {
    slug: 'recruitment-process-outsourcing',
    seo: {
      title: 'Sales Recruitment Process Outsourcing (RPO) India | StaffAnchor',
      description:
        'An embedded StaffAnchor recruiter who runs your sales hiring end to end, so you scale without building a recruiting function.',
    },
    eyebrow: 'Recruitment Process Outsourcing',
    h1: 'Your sales hiring, run by a team that only does',
    accent: 'sales.',
    sub: 'A dedicated StaffAnchor recruiter embedded in your team, running your sales hiring end to end for a monthly fee.',
    cta: 'Talk about RPO',
    form: {
      kind: 'enquiry',
      service: 'Recruitment Process Outsourcing (RPO)',
      title: 'Talk about a recruitment partner',
      subtitle: 'Tell us a little about your hiring plan. We will reach out within one business day.',
      submit: 'Talk about RPO →',
      messageLabel: 'How many sales hires are you planning? (optional)',
    },
    blocks: [
      {
        type: 'cards',
        eyebrow: 'Who it is for',
        title: 'Built for steady, ongoing sales hiring',
        items: [
          { title: 'Scaling sales teams', text: 'You hire 10 or more sellers a year and want one partner, not a new agency for every role.' },
          { title: 'No recruiting function yet', text: 'You want hiring run well without building an in-house team around it.' },
          { title: 'Several roles open at once', text: 'Account executives, managers and leaders are all open, and you need one owner to keep them moving.' },
        ],
      },
      {
        type: 'steps',
        eyebrow: 'How it works',
        title: 'From hiring plan to a steady rhythm',
        steps: [
          { title: 'Scope your hiring plan', text: 'We agree the roles, the sequence and what good looks like for each.' },
          { title: 'Embed a recruiter', text: 'A dedicated StaffAnchor recruiter works as part of your team, in your tools where it helps.' },
          { title: 'Run a weekly cadence', text: 'A weekly review of every open role, every candidate and every blocker.' },
          { title: 'Review and refine', text: 'We look at what is working and adjust the plan as your needs change.' },
        ],
      },
      {
        type: 'bullets',
        eyebrow: 'Included',
        title: 'What an RPO engagement covers',
        items: ['Hiring plan and role design', 'Sourcing and verification', 'Interview scorecards', 'A weekly hiring dashboard', 'Offer support'],
      },
      {
        type: 'engagement',
        eyebrow: 'Engagement',
        title: 'A monthly fee, with clear terms',
        text: 'RPO is a monthly fee for a dedicated recruiter. The minimum commitment and terms are agreed on enquiry.',
      },
      {
        type: 'faq',
        title: 'Questions about RPO',
        items: [
          { q: 'How is this different from permanent hiring?', a: 'Permanent hiring is success-based and per role. RPO puts one recruiter on your hiring continuously for a monthly fee.' },
          { q: 'Can I meet the recruiter first?', a: 'Yes. The conversation starts with your hiring plan, and you will meet the recruiter proposed for your account before committing.' },
          { q: 'What is the minimum commitment?', a: 'It is agreed per engagement. We start with a conversation about your hiring plan and propose terms from there.' },
          { q: 'How do you report progress?', a: 'A weekly hiring dashboard shows every open role, where candidates are in the process and what is blocking progress.' },
        ],
      },
    ],
    also: { label: 'Also consider: Managed Sales Teams', href: '/employers/managed-sales-teams' },
  },

  'managed-sales-teams': {
    slug: 'managed-sales-teams',
    seo: {
      title: 'Managed Sales Teams | Contract and On-roll Sales Hiring India | StaffAnchor',
      description:
        'Contract and on-roll sellers hired, onboarded and payrolled by StaffAnchor, so you add sales capacity without hiring or payroll overhead.',
    },
    eyebrow: 'Managed Sales Teams',
    h1: 'Add sales capacity without the hiring and payroll',
    accent: 'overhead.',
    sub: 'We hire, onboard and payroll contract or on-roll sellers for you, with statutory compliance handled.',
    cta: 'Talk about a managed team',
    form: {
      kind: 'enquiry',
      service: 'Managed Sales Team',
      title: 'Talk about a managed sales team',
      subtitle: 'Tell us what you are trying to do. We will reach out within one business day.',
      submit: 'Talk about a managed team →',
      messageLabel: 'What do you need sellers for, and for how long? (optional)',
    },
    blocks: [
      {
        type: 'cards',
        eyebrow: 'When teams use it',
        title: 'Capacity for the moments that need it',
        items: [
          { title: 'Pilots', text: 'Test a product or a segment before committing to permanent headcount.' },
          { title: 'New markets', text: 'Build presence in a new city quickly, without setting up the hiring and payroll first.' },
          { title: 'Project needs', text: 'Add sellers for a launch or a time-bound push.' },
        ],
      },
      {
        type: 'steps',
        eyebrow: 'How it works',
        title: 'From brief to a working team',
        steps: [
          { title: 'Agree roles and duration', text: 'The profile you need, the number of sellers and how long you need them.' },
          { title: 'We hire and verify', text: 'Sourced and verified against your role scorecard, with you approving every hire.' },
          { title: 'We onboard and payroll', text: 'Onboarding, documentation, payroll and statutory compliance, handled by us.' },
          { title: 'You direct the selling', text: 'You set targets and direct the work. We manage everything around it.' },
        ],
      },
      {
        type: 'bullets',
        eyebrow: 'Included',
        title: 'What a managed team covers',
        items: [
          'Hiring and verification against your role scorecard',
          'Onboarding and documentation',
          'Payroll and statutory compliance',
          'Regular check-ins on performance and attendance',
          'An option to convert hires to permanent',
        ],
      },
      {
        type: 'engagement',
        eyebrow: 'Engagement',
        title: 'Cost-plus or a management fee',
        text: 'Managed teams are priced as cost-plus or a management fee. Terms are agreed on enquiry.',
        points: ['The employment structure and each party’s responsibilities are set out in the agreement before any hire starts.'],
      },
      {
        type: 'faq',
        title: 'Questions about managed sales teams',
        items: [
          { q: 'How is this different from RPO?', a: 'RPO adds a recruiter to run your hiring of your own employees. Managed Sales Teams puts sellers on contract or on our payroll for you.' },
          { q: 'Can contract hires convert to permanent?', a: 'Yes. Conversion terms are agreed up front.' },
          { q: 'Who manages the sellers day to day?', a: 'You direct the selling work and set the targets. StaffAnchor handles hiring, onboarding, payroll and compliance.' },
          { q: 'What is the minimum duration?', a: 'It is agreed per engagement, based on the pilot or project.' },
        ],
      },
    ],
    also: { label: 'Also consider: Recruitment Process Outsourcing', href: '/employers/recruitment-process-outsourcing' },
  },

  'sales-enablement': {
    slug: 'sales-enablement',
    seo: {
      title: 'Sales Enablement and Training India | StaffAnchor',
      description:
        'Practical onboarding, enterprise selling and first-time manager programs for B2B sales teams, designed by an operator.',
    },
    eyebrow: 'Sales Enablement',
    h1: 'We train the sales teams we build, and',
    accent: 'yours.',
    sub: 'Practical programs for onboarding, skills and first-time sales managers, designed by an operator, not a trainer.',
    cta: 'Request a program outline',
    form: {
      kind: 'enquiry',
      service: 'Sales Enablement',
      title: 'Request a program outline',
      subtitle: 'Tell us who the program is for. We will reach out within one business day.',
      submit: 'Request a program outline →',
      messageLabel: 'Who is the program for, and what should change? (optional)',
    },
    blocks: [
      {
        type: 'cards',
        eyebrow: 'Programs',
        title: 'Four ways we can help',
        items: [
          { title: 'New-hire onboarding (30 to 60 days)', text: 'A structured ramp so new sellers reach productivity faster.' },
          { title: 'Enterprise selling workshop', text: 'Discovery, qualification, objection handling and multi-stakeholder deals.' },
          { title: 'First-time sales manager program', text: 'Coaching, pipeline reviews and forecasting for new managers.' },
          { title: 'Custom programs', text: 'Built around your product, motion and numbers.' },
        ],
      },
      {
        type: 'bullets',
        eyebrow: 'Who it is for',
        title: 'Teams that benefit most',
        items: ['New sellers joining a B2B sales team', 'Experienced sellers moving into enterprise deals', 'First-time sales managers', 'Founders building their first sales motion'],
      },
      {
        type: 'steps',
        eyebrow: 'How we deliver',
        title: 'Assess, design, deliver, measure',
        steps: [
          { title: 'Assess', text: 'Where the team is today and what is holding the number back.' },
          { title: 'Design', text: 'A program built around your product and how your team sells.' },
          { title: 'Deliver', text: 'Live sessions and practice with real deals from your pipeline.' },
          { title: 'Measure', text: 'Ramp time, pipeline quality and quota attainment, against a baseline.' },
        ],
      },
      {
        type: 'trainer',
        eyebrow: 'About the trainer',
        title: 'Designed by an operator',
        text: 'Programs are designed by Gagan Sharma, founder of StaffAnchor, who has spent 15 years building and leading sales teams. The approach comes from running sales teams, not from a training curriculum: practical, specific to your motion and built around the numbers your team is measured on.',
      },
      {
        type: 'engagement',
        eyebrow: 'Engagement',
        title: 'Per program or per cohort',
        text: 'Pricing is per program or per cohort. Enquire for a custom program.',
      },
      {
        type: 'faq',
        title: 'Questions about enablement',
        items: [
          { q: 'Do you train teams you did not place?', a: 'Yes. Programs are open to any B2B sales team.' },
          { q: 'Live, online or on-site?', a: 'Any of these. We agree the format for each program.' },
          { q: 'How do you measure impact?', a: 'We agree baselines for ramp time, pipeline quality and quota attainment before the program starts, and report against them afterwards.' },
        ],
      },
    ],
    also: { label: 'Also consider: Recruitment Process Outsourcing', href: '/employers/recruitment-process-outsourcing' },
  },

  'sales-hiring-advisory': {
    slug: 'sales-hiring-advisory',
    seo: {
      title: 'Sales Hiring Advisory for First Sales Teams | StaffAnchor',
      description:
        'Role design, compensation structure, hiring plan and interview scorecards before you hire your first sellers.',
    },
    eyebrow: 'Sales Hiring Advisory',
    h1: 'Building your first sales team? Start with the right',
    accent: 'plan.',
    sub: 'Role design, compensation structure, hiring plan and interview scorecards, before you hire anyone.',
    cta: 'Book a 20-minute consultation',
    form: {
      kind: 'enquiry',
      service: 'Sales Hiring Advisory',
      title: 'Book a 20-minute sales hiring consultation',
      subtitle: 'Not sure what you need? Tell us where you are and we will reach out within one business day.',
      submit: 'Book a 20-minute consultation →',
      messageLabel: 'Where are you with your sales team today? (optional)',
    },
    blocks: [
      {
        type: 'cards',
        eyebrow: 'The offer',
        title: 'Two ways to get started',
        items: [
          { title: 'Sales Hiring Blueprint', text: 'A fixed-scope engagement delivered in about two weeks: role design, compensation structure, hiring plan and interview scorecards. Scope and fee are confirmed after a short consultation.' },
          { title: 'Fractional sales head', text: 'An experienced sales leader on a retainer, to set direction and run the first hires while you build the team.' },
        ],
      },
      {
        type: 'bullets',
        eyebrow: 'What you get',
        title: 'Before you hire anyone',
        items: ['Which roles to hire first, and in what order', 'A compensation structure that attracts and retains sellers', 'A hiring plan with timelines and owners', 'Interview scorecards so every candidate is judged the same way'],
      },
      {
        type: 'faq',
        title: 'Questions about advisory',
        items: [
          { q: 'Who is this for?', a: 'Founders and leaders hiring their first sellers or their first sales manager, and anyone unsure what the right first hire is.' },
          { q: 'What happens after the consultation?', a: 'If it is a fit, we propose a scope and a fee for the Blueprint, or a fractional engagement. There is no obligation after the call.' },
        ],
      },
    ],
    also: { label: 'Also consider: Permanent Hiring', href: '/employers/permanent-hiring' },
  },
};

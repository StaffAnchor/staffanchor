'use client';

import { useMemo, useState } from 'react';
import {
  Briefcase,
  ChevronDown,
  FileText,
  LayoutGrid,
  Search,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react';

const RAZORPAY_URL = 'YOUR_RAZORPAY_LINK_HERE';

type TierKey = 'early' | 'mid' | 'senior';

type Tier = {
  key: TierKey;
  tabLabel: string;
  headline: string;
  subheadline: string;
  price: string;
  orderTitle: string;
  revisionRounds: string;
  expectedFinalDelivery: string;
  featureRows: { feature: string; staffAnchor: string; generic: string }[];
};

const tiers: Tier[] = [
  {
    key: 'early',
    tabLabel: 'Early Stage (0-6 years)',
    headline: 'Your first impression starts with your resume.',
    subheadline:
      "Whether you're a fresher or a few years in, your resume needs to communicate potential with clarity and confidence.",
    price: '₹999',
    orderTitle: 'Early Stage Resume Writing',
    revisionRounds: '1 revision round',
    expectedFinalDelivery: '~5 working days',
    featureRows: [
      { feature: 'ATS-optimised structure', staffAnchor: 'Included', generic: 'Basic template only' },
      { feature: 'Role-specific keyword research', staffAnchor: 'Included', generic: 'Limited' },
      { feature: 'Impact-driven bullet points', staffAnchor: 'Included', generic: 'Generic wording' },
      { feature: 'Professional visual design', staffAnchor: 'Included', generic: 'Inconsistent format' },
      {
        feature: 'Strong positioning for entry-level roles',
        staffAnchor: 'Included',
        generic: 'Not role-focused',
      },
      { feature: 'Word + PDF delivery', staffAnchor: 'Included', generic: 'Variable' },
      { feature: 'Revision rounds', staffAnchor: '1 round', generic: 'Often unavailable' },
      { feature: 'First draft timeline', staffAnchor: '3 working days', generic: 'Uncertain' },
    ],
  },
  {
    key: 'mid',
    tabLabel: 'Mid Level (7-15 years)',
    headline: 'Mid-career deserves mid-career positioning.',
    subheadline:
      'Your resume must go beyond listing roles and present leadership, ownership, and measurable business impact.',
    price: '₹1,499',
    orderTitle: 'Mid Level Resume Writing',
    revisionRounds: '1 revision round',
    expectedFinalDelivery: '~5 working days',
    featureRows: [
      { feature: 'ATS-optimised structure', staffAnchor: 'Included', generic: 'Basic template only' },
      { feature: 'Quantified impact bullet points', staffAnchor: 'Included', generic: 'Rarely quantified' },
      { feature: 'Leadership and ownership language', staffAnchor: 'Included', generic: 'Limited' },
      {
        feature: 'Domain keyword research (Naukri, LinkedIn)',
        staffAnchor: 'Included',
        generic: 'Not researched',
      },
      { feature: 'Professional visual layout', staffAnchor: 'Included', generic: 'Inconsistent format' },
      { feature: 'LinkedIn profile summary included', staffAnchor: 'Included', generic: 'Not included' },
      { feature: 'Word + PDF delivery', staffAnchor: 'Included', generic: 'Variable' },
      { feature: 'Revision rounds', staffAnchor: '1 round', generic: 'Often unavailable' },
      { feature: 'First draft timeline', staffAnchor: '3 working days', generic: 'Uncertain' },
    ],
  },
  {
    key: 'senior',
    tabLabel: 'Senior / CXO (16+ years)',
    headline: 'Executive presence starts on the page.',
    subheadline:
      'Senior professionals need an executive narrative that communicates strategic leadership, scale, and transformation.',
    price: '₹1,999',
    orderTitle: 'Senior / CXO Resume Writing',
    revisionRounds: '2 revision rounds',
    expectedFinalDelivery: '~7 working days',
    featureRows: [
      {
        feature: 'Executive career narrative & positioning',
        staffAnchor: 'Included',
        generic: 'Rarely offered',
      },
      { feature: 'C-suite and leadership language', staffAnchor: 'Included', generic: 'Generic wording' },
      {
        feature: 'P&L/business transformation framing',
        staffAnchor: 'Included',
        generic: 'Not strategically framed',
      },
      {
        feature: 'ATS-optimised with executive keywords',
        staffAnchor: 'Included',
        generic: 'Limited keyword depth',
      },
      {
        feature: 'Strategic accomplishments highlighted',
        staffAnchor: 'Included',
        generic: 'Task-focused content',
      },
      { feature: 'Premium visual design layout', staffAnchor: 'Included', generic: 'Standard template' },
      { feature: 'Cover letter included', staffAnchor: 'Included', generic: 'Not included' },
      { feature: 'Word + PDF delivery', staffAnchor: 'Included', generic: 'Variable' },
      { feature: 'Revision rounds', staffAnchor: '2 rounds', generic: 'Often unavailable' },
      { feature: 'First draft timeline', staffAnchor: '3 working days', generic: 'Uncertain' },
    ],
  },
];

const faqItems = [
  {
    question: 'What format will I receive my resume in?',
    answer: 'You receive your final resume in both editable Word and print-ready PDF formats.',
  },
  {
    question: 'How many versions or copies do I receive?',
    answer:
      'You receive one high-quality final output, refined through your included revision rounds to ensure it is submission ready.',
  },
  {
    question: 'How many revision rounds are included?',
    answer:
      'Early Stage and Mid Level plans include 1 revision round. Senior / CXO includes 2 revision rounds.',
  },
  {
    question: 'When does the 3-day delivery clock start?',
    answer:
      'The 3 working day timeline starts once we receive your completed intake form. Working days are Monday to Saturday.',
  },
  {
    question: 'Is the resume ATS-compatible?',
    answer:
      'Yes. Every resume is structured with clean formatting and role-specific keywords for strong ATS compatibility.',
  },
  {
    question: 'Do you cover all industries?',
    answer: 'Yes. Our writers support professionals across 25+ sectors.',
  },
];

const processSteps = [
  {
    id: '01',
    title: 'Share Your Profile',
    detail: 'Complete a structured intake form in about 15 minutes.',
  },
  {
    id: '02',
    title: 'Expert Assigned',
    detail: 'A domain specialist is matched to your target industry.',
  },
  {
    id: '03',
    title: 'First Draft Delivered',
    detail: 'Receive one ATS-optimised resume in 3 working days.',
  },
  {
    id: '04',
    title: 'Review & Finalise',
    detail: 'Share feedback and complete the included revision rounds.',
  },
];

const deliverables = [
  {
    icon: ShieldCheck,
    title: 'ATS-Optimised by Design',
    description: 'Built with recruiter and ATS readability standards from the first line.',
  },
  {
    icon: Search,
    title: 'Keyword Research Included',
    description: 'Role-aligned keywords mapped to your target job and domain.',
  },
  {
    icon: TrendingUp,
    title: 'Impact-First Bullet Points',
    description: 'Experience reframed around outcomes, metrics, and business value.',
  },
  {
    icon: LayoutGrid,
    title: 'Professional Visual Layout',
    description: 'Clean, modern formatting that looks strong on screen and in print.',
  },
  {
    icon: FileText,
    title: 'Word + PDF Delivery',
    description: 'You get editable and share-ready files for immediate applications.',
  },
  {
    icon: Briefcase,
    title: 'Domain Expert Writers',
    description: 'Writers with practical understanding of hiring language by sector.',
  },
];

export default function JobSeekersPage() {
  const [activeTab, setActiveTab] = useState<TierKey>('early');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const currentTier = useMemo(() => tiers.find((tier) => tier.key === activeTab) ?? tiers[0], [activeTab]);

  return (
    <main className="bg-white text-gray-900">
      <section className="relative overflow-hidden bg-linear-to-br from-slate-50 to-blue-50 py-20 lg:py-24">
        <div className="absolute inset-0 bg-grid-slate-100 mask-[linear-gradient(0deg,white,rgba(255,255,255,0.6))] opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="inline-flex items-center rounded-full border border-blue-200 bg-[var(--color-accent-soft)] px-4 py-1 text-sm font-semibold text-[var(--color-ink)]">
              Expert Resume Writing Service
            </p>
            <h1 className="font-poppins mt-6 text-4xl font-light leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
              A Resume That Gets You Into the <span className="text-[var(--color-ink)]">Interview Room.</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700 sm:text-xl">
              Professionally written, ATS-optimised, and visually compelling - crafted for every stage of your career by domain experts.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={RAZORPAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[var(--color-ink)] px-7 py-3 text-base font-semibold text-white transition-all duration-200 hover:bg-[var(--color-accent)]"
              >
                Order Resume Now
              </a>
              <a
                href={RAZORPAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[var(--color-accent)] px-7 py-3 text-base font-semibold text-white transition-all duration-200 hover:bg-[var(--color-accent-dark)]"
              >
                Book Consultation
              </a>
            </div>
          </div>

          <div className="mt-14 grid gap-4 rounded-2xl border border-gray-200 bg-white p-6 text-sm shadow-sm sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-slate-50 p-4">
              <p className="font-semibold text-[var(--color-ink)]">₹999</p>
              <p className="mt-1 text-gray-600">Early Stage · 0-6 yrs</p>
            </div>
            <div className="rounded-lg bg-slate-50 p-4">
              <p className="font-semibold text-[var(--color-ink)]">₹1,499</p>
              <p className="mt-1 text-gray-600">Mid Level · 7-15 yrs</p>
            </div>
            <div className="rounded-lg bg-slate-50 p-4">
              <p className="font-semibold text-[var(--color-ink)]">₹1,999</p>
              <p className="mt-1 text-gray-600">Senior / CXO · 16+ yrs</p>
            </div>
            <div className="rounded-lg bg-slate-50 p-4">
              <p className="font-semibold text-teal-700">3 Days</p>
              <p className="mt-1 text-gray-600">First Draft Delivery</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-5 text-sm sm:px-6 lg:px-8 lg:text-base">
          <div>
            <p className="font-bold text-gray-900">94%</p>
            <p className="text-gray-600">Interview Success Rate</p>
          </div>
          <div>
            <p className="font-bold text-gray-900">3,200+</p>
            <p className="text-gray-600">Resumes Delivered</p>
          </div>
          <div>
            <p className="font-bold text-gray-900">3 Days</p>
            <p className="text-gray-600">First Draft Turnaround</p>
          </div>
          <div>
            <p className="font-bold text-gray-900">25+</p>
            <p className="text-gray-600">Industries Covered</p>
          </div>
          <div>
            <p className="font-bold text-gray-900">95%</p>
            <p className="text-gray-600">Client Satisfaction</p>
          </div>
        </div>
      </section>

      <section id='pricing' className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-poppins text-3xl font-light text-gray-900 sm:text-4xl">Interactive Pricing & Features</h2>
          <p className="mt-3 text-gray-600">Choose your career stage and compare exactly what you get.</p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {tiers.map((tier) => (
            <button
              key={tier.key}
              type="button"
              onClick={() => setActiveTab(tier.key)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                activeTab === tier.key
                  ? 'bg-[var(--color-ink)] text-white shadow-sm'
                  : 'border border-gray-300 bg-white text-gray-700 hover:border-blue-400 hover:text-[var(--color-ink)]'
              }`}
            >
              {tier.tabLabel}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="border-b border-gray-200 bg-slate-50 p-6">
              <h3 className="text-2xl font-semibold text-gray-900">{currentTier.headline}</h3>
              <p className="mt-2 text-gray-600">{currentTier.subheadline}</p>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-slate-100 text-gray-700">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Feature</th>
                    <th className="px-4 py-3 font-semibold">StaffAnchor</th>
                    <th className="px-4 py-3 font-semibold">Generic/DIY Resume</th>
                  </tr>
                </thead>
                <tbody>
                  {currentTier.featureRows.map((row) => (
                    <tr key={row.feature} className="border-t border-gray-200">
                      <td className="px-4 py-3 text-gray-700">{row.feature}</td>
                      <td className="px-4 py-3 font-medium text-[var(--color-ink)]">{row.staffAnchor}</td>
                      <td className="px-4 py-3 text-gray-500">{row.generic}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <aside className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium uppercase tracking-wide text-[var(--color-ink)]">Order Card</p>
            <h4 className="mt-2 text-xl font-semibold text-gray-900">{currentTier.orderTitle}</h4>
            <p className="mt-4 text-4xl font-bold text-gray-900">{currentTier.price}</p>
            <ul className="mt-5 space-y-2 text-sm text-gray-600">
              <li>3 working day first draft</li>
              <li>{currentTier.revisionRounds}</li>
              <li>{currentTier.expectedFinalDelivery} expected final delivery</li>
              <li>Word + PDF delivery</li>
            </ul>
            <a
              href={RAZORPAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-[var(--color-ink)] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-accent)]"
            >
              Order This Plan
            </a>
          </aside>
        </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-poppins text-3xl font-light text-gray-900 sm:text-4xl">From profile to polished in 3 working days.</h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.id} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-[var(--color-ink)]">{step.id}</p>
                <h3 className="mt-2 text-lg font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm lg:p-8">
          <h2 className="font-poppins text-3xl font-light text-gray-900">Clear timelines, no surprises.</h2>
          <div className="mt-6 overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-slate-100 text-gray-700">
                <tr>
                  <th className="px-4 py-3 font-semibold">Career Stage</th>
                  <th className="px-4 py-3 font-semibold">First Draft Delivery</th>
                  <th className="px-4 py-3 font-semibold">Revision Rounds</th>
                  <th className="px-4 py-3 font-semibold">Expected Final Delivery</th>
                  <th className="px-4 py-3 font-semibold">Format</th>
                  <th className="px-4 py-3 font-semibold">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-200">
                  <td className="px-4 py-3">Early Stage (0-6 yrs)</td>
                  <td className="px-4 py-3">3 working days</td>
                  <td className="px-4 py-3">1</td>
                  <td className="px-4 py-3">~5 working days</td>
                  <td className="px-4 py-3">Word + PDF</td>
                  <td className="px-4 py-3 font-semibold text-gray-900">₹999</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="px-4 py-3">Mid Level (7-15 yrs)</td>
                  <td className="px-4 py-3">3 working days</td>
                  <td className="px-4 py-3">1</td>
                  <td className="px-4 py-3">~5 working days</td>
                  <td className="px-4 py-3">Word + PDF</td>
                  <td className="px-4 py-3 font-semibold text-gray-900">₹1,499</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="px-4 py-3">Senior / CXO (16+ yrs)</td>
                  <td className="px-4 py-3">3 working days</td>
                  <td className="px-4 py-3">2</td>
                  <td className="px-4 py-3">~7 working days</td>
                  <td className="px-4 py-3">Word + PDF</td>
                  <td className="px-4 py-3 font-semibold text-gray-900">₹1,999</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            Working days are Mon-Sat. The 3-day clock starts from receipt of your completed intake form.
          </p>
        </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-poppins text-3xl font-light text-gray-900 sm:text-4xl">One copy. Done right. The first time.</h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((item) => (
              <div key={item.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <item.icon className="h-6 w-6 text-[var(--color-ink)]" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm lg:grid-cols-2 lg:p-8">
          <div className="flex flex-col justify-center">
            <h2 className="font-poppins text-3xl font-light text-gray-900">What your finished resume looks like.</h2>
            <p className="mt-3 text-lg text-gray-600">Clean, structured, and visually compelling.</p>
            <a
              href={RAZORPAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-fit items-center rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-accent-dark)]"
            >
              Order Now →
            </a>
          </div>

          <div className="rounded-xl border border-gray-200 bg-slate-50 p-6">
            <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
              <p className="text-xl font-bold text-gray-900">Arjun Mehta</p>
              <p className="mt-1 text-sm font-medium text-[var(--color-ink)]">Senior Product Manager</p>
              <div className="mt-6 space-y-4">
                <div>
                  <div className="mb-1 flex items-center justify-between text-xs text-gray-500">
                    <span>Strategic Product Leadership</span>
                    <span>92%</span>
                  </div>
                  <div className="h-2 rounded-full bg-gray-200">
                    <div className="h-2 w-[92%] rounded-full bg-[var(--color-ink)]" />
                  </div>
                </div>
                <div>
                  <div className="mb-1 flex items-center justify-between text-xs text-gray-500">
                    <span>Cross-functional Execution</span>
                    <span>88%</span>
                  </div>
                  <div className="h-2 rounded-full bg-gray-200">
                    <div className="h-2 w-[88%] rounded-full bg-[var(--color-accent)]" />
                  </div>
                </div>
                <div>
                  <div className="mb-1 flex items-center justify-between text-xs text-gray-500">
                    <span>Business Impact Framing</span>
                    <span>95%</span>
                  </div>
                  <div className="h-2 rounded-full bg-gray-200">
                    <div className="h-2 w-[95%] rounded-full bg-[var(--color-accent-dark)]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-poppins text-3xl font-light text-gray-900 sm:text-4xl">Careers moved forward.</h2>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            <article className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">Priya Nair</h3>
              <p className="mt-1 text-sm text-[var(--color-ink)]">Senior Analyst → Deloitte</p>
              <p className="mt-4 text-gray-600">
                "4 interview calls in the first week. My profile finally communicated the value I was creating at work."
              </p>
            </article>
            <article className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">Rohan Kapoor</h3>
              <p className="mt-1 text-sm text-[var(--color-ink)]">Campus Hire → Infosys</p>
              <p className="mt-4 text-gray-600">
                "As a fresher I had no idea how to present my internships. The final resume looked professional and recruiter-ready."
              </p>
            </article>
            <article className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">Suresh Iyer</h3>
              <p className="mt-1 text-sm text-[var(--color-ink)]">GM → VP Operations</p>
              <p className="mt-4 text-gray-600">
                "At 20 years of experience I thought I knew my resume. The executive framing changed how I positioned my leadership story."
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm lg:p-8">
          <h2 className="font-poppins text-3xl font-light text-gray-900">Frequently Asked Questions</h2>
          <div className="mt-6 divide-y divide-gray-200">
            {faqItems.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={item.question} className="py-4">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 text-left"
                  >
                    <span className="text-base font-semibold text-gray-900">{item.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-gray-500 transition ${isOpen ? 'rotate-180' : ''}`}
                      aria-hidden="true"
                    />
                  </button>
                  {isOpen && <p className="mt-3 text-sm text-gray-600">{item.answer}</p>}
                </div>
              );
            })}
          </div>
        </div>
        </div>
      </section>

      <section className="pt-20 pb-12 bg-[var(--color-ink)] text-white text-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-poppins text-3xl font-light sm:text-4xl">Your next role starts with a better resume.</h2>
          <p className="mt-4 text-lg text-blue-100">
            Join 3,200+ professionals who chose expertise over templates.
          </p>
          <a
            href="#pricing"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-[var(--color-accent)] px-8 py-4 text-lg font-medium text-white transition-colors duration-200 hover:bg-[var(--color-accent-dark)]"
          >
            See Pricing & Book Session →
          </a>
        </div>
      </section>
    </main>
  );
}

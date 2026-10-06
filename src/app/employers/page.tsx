'use client';

import { motion } from 'framer-motion';
import EmployerForm from '@/components/ui/EmployerForm';
import { submitEmployerForm } from '@/utils/mandates';
import ServiceCards from '@/components/ui/ServiceCards';
import HeroSection from '@/components/ui/HeroSection';
import RecruiterInsightsCard from '@/components/ui/RecruiterInsightsCard';

const howItWorks = [
  { step: '01', title: 'Share the role', description: 'A short form: role, city, budget and your must-haves. It takes minutes.' },
  { step: '02', title: 'We confirm the brief', description: 'A recruiter checks the must-haves and the sales motion with you. The 72 hours start here.' },
  { step: '03', title: 'We search and speak to people', description: 'From our own bank of enterprise sellers and the market. A recruiter speaks to each candidate and confirms they want your role.' },
  { step: '04', title: 'Your shortlist, in your portal', description: 'Every candidate reviewed against each of your must-haves: met, partly met or not met, with the recruiter\u2019s note.' },
];

// How a sales leader reads a seller: each is recorded for every candidate.
const whatMakesDifferent = [
  { title: 'The sales motion', description: 'Outbound account-based, partner or channel-led, inbound, or product-led? A seller who thrives in one often struggles in another.' },
  { title: 'Deal size and cycle', description: 'A \u20b95L deal in a month and a \u20b91Cr deal in nine months are different jobs. We record both for each role they held.' },
  { title: 'Quota and attainment', description: 'The size of the number, how they reached it, and how it held up over three years. Not "consistently exceeded targets".' },
  { title: 'Who they sold to', description: 'CXOs, CTOs, procurement and security reviewers. The level and function of the buyer, not just the word "enterprise".' },
  { title: 'How much of the cycle they owned', description: 'Who built the pipeline, ran the demo, negotiated and closed. Full-cycle ownership or a hand-off role.' },
  { title: 'Pay, notice and relocation', description: 'Expected CTC, notice period and relocation, confirmed on a call before you meet anyone, so there are no surprises at offer stage.' },
];

// Where we are deep: named, not counted.
const wherewDeep = [
  'Cybersecurity',
  'Cloud & infrastructure',
  'Data & AI',
  'B2B SaaS (horizontal & vertical)',
  'ERP, CRM & HRMS software',
  'Industrial & infrastructure technology',
];

const rolesWePlace = [
  { level: 'Individual Contributor', roles: 'Account Executive, Strategic Account Executive, Key Account Manager' },
  { level: 'Management', roles: 'Sales Manager, Regional / City Head, Team Lead' },
  { level: 'Leadership', roles: 'Director of Sales, VP Sales, Country Head, CRO / Business Head (P&L)' },
];

export default function EmployersPage() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        eyebrow="For employers"
        headline="A shortlist of enterprise tech sellers,"
        accentText="in 72 hours."
        subtext="Every candidate is checked against each of your requirements by a recruiter who has spoken to them. Where someone falls short, you see it up front, so you decide with the full picture. The 72 hours start when your brief is confirmed."
        backgroundPattern={true}
        visual={<RecruiterInsightsCard />}
      >
        <a href="#mandate-form" className="inline-flex items-center justify-center px-7 py-3.5 bg-[var(--color-ink)] text-white font-semibold rounded-xl hover:bg-[var(--color-accent)] transition-colors duration-300">
          Submit a hiring mandate →
        </a>
      </HeroSection>

      {/* How it works */}
      <section className="section-padding bg-[var(--color-mist)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-16 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow mb-3 block">How it works</span>
            <h2 className="heading-lg">From brief to shortlist, in 72 hours</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white rounded-2xl p-7 border border-[var(--color-line)] h-full"
              >
                <span className="text-xs font-mono text-[var(--color-muted)] mb-4 block">{item.step}</span>
                <h3 className="font-poppins font-semibold text-lg text-[var(--color-ink)] mb-2 tracking-tight">{item.title}</h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What makes our candidates different */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-16 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow mb-3 block">Our expertise</span>
            <h2 className="heading-lg">We read a seller the way a sales leader does</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatMakesDifferent.map((item) => (
              <div key={item.title} className="anchor-line py-1">
                <h3 className="font-poppins font-semibold text-lg text-[var(--color-ink)] mb-2">{item.title}</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-page mandate form */}
      <section id="mandate-form" className="section-padding bg-[var(--color-mist)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="eyebrow mb-3 block justify-center">Get started</span>
            <h2 className="heading-lg mb-4">Submit a hiring mandate</h2>
            <p className="text-xl text-[var(--color-muted)]">
              Company, role, sales category, city and budget range. That's all we need to start. We confirm your must-haves with you next.
            </p>
          </div>

          <EmployerForm
            idPrefix="top"
            title="Hiring Mandate"
            subtitle="A StaffAnchor recruiter will confirm your brief with you. Your 72 hours start from that confirmation."
            submitText="Submit Mandate →"
            onSubmit={submitEmployerForm}
          />
        </div>
      </section>

      {/* Roles we place */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-16 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow mb-3 block">Coverage</span>
            <h2 className="heading-lg">Roles we place — IC to leadership</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {rolesWePlace.map((r) => (
              <div key={r.level} className="bg-[var(--color-mist)] rounded-2xl p-7 border border-[var(--color-line)]">
                <h3 className="font-poppins font-semibold text-lg text-[var(--color-ink)] mb-2">{r.level}</h3>
                <p className="text-[var(--color-muted)] leading-relaxed text-sm">{r.roles}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where we are deep -- named, not counted */}
      <section className="section-padding bg-[var(--color-mist)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-10 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow mb-3 block">Where we are deep</span>
            <h2 className="heading-lg">Two practices, one focus: selling complex technology</h2>
            <p className="mt-3 text-[var(--color-muted)] leading-relaxed">
              Enterprise Tech GTM and Industrial Commercial. We hire for the motions and sectors below, and we are the wrong agency for roles outside them.
            </p>
          </motion.div>
          <div className="flex flex-wrap gap-3">
            {wherewDeep.map((d) => (
              <span key={d} className="rounded-full border border-[var(--color-line)] bg-white px-5 py-2.5 text-sm font-medium text-[var(--color-ink)]">
                {d}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Ways we work with you */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-12 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow mb-3 block">Other ways we work together</span>
            <h2 className="heading-lg">Retained search, RPO, managed teams and enablement</h2>
          </motion.div>
          <ServiceCards variant="hub" location="employers_hub" />
        </div>
      </section>

      {/* Closing mandate form */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Hiring enterprise tech sellers?</h2>
            <p className="text-xl text-[var(--color-muted)]">
              Tell us about the role. Your first shortlist arrives within 72 hours of a confirmed brief.
            </p>
          </div>

          <EmployerForm
            idPrefix="bottom"
            title="Hiring Mandate"
            subtitle="A StaffAnchor recruiter will confirm your brief with you. Your 72 hours start from that confirmation."
            submitText="Submit Mandate →"
            onSubmit={submitEmployerForm}
          />
        </div>
      </section>
    </>
  );
}

'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import EmployerForm from '@/components/ui/EmployerForm';
import { submitEmployerForm } from '@/utils/mandates';
import SalesDomainsGrid from '@/components/ui/SalesDomainsGrid';

const howItWorks = [
  {
    step: '01',
    title: 'Share your mandate',
    description: 'Role, sales category, city, and budget range — takes minutes, not a lengthy intake call.',
  },
  {
    step: '02',
    title: 'We source and verify',
    description: 'Candidates are matched against real sales performance data, then verified on a call using a standard scorecard.',
  },
  {
    step: '03',
    title: 'You receive a shortlist',
    description: 'Quota history, deal size, verified notice period, and our recruiter’s recommendation — not a pile of resumes.',
  },
  {
    step: '04',
    title: 'You interview qualified candidates',
    description: 'Every name you meet has already cleared the bar. No re-screening a stack of unqualified applications.',
  },
];

const whatMakesDifferent = [
  {
    title: 'Real quota attainment, not a claim',
    description: 'We capture quota attainment across three years, deal size, and sales cycle — the specifics a resume glosses over.',
  },
  {
    title: 'Sales-cycle and motion fit',
    description: 'Hunter, farmer, or hybrid; inbound or outbound; SMB, mid-market or enterprise — matched to how your team actually sells.',
  },
  {
    title: 'Verified relocation and notice period',
    description: 'Confirmed on a call, not just self-reported on a form — so a candidate’s timeline is never a surprise late in your process.',
  },
  {
    title: 'A structured recruiter recommendation',
    description: 'Every candidate carries an independent assessment — communication, stability, coachability — scored the same way, every time.',
  },
];

const rolesWePlace = [
  { level: 'Individual Contributor', roles: 'SDR / BDR, Inside Sales Executive, Account Executive, Key Account Manager' },
  { level: 'Management', roles: 'Sales Manager, Regional / City Head, Team Lead' },
  { level: 'Leadership', roles: 'Director of Sales, VP Sales, Country Head, CRO / Business Head (P&L)' },
];

export default function EmployersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 lg:py-28 overflow-hidden bg-white">
        <div className="absolute inset-0 opacity-[0.4]" style={{
          backgroundImage: `radial-gradient(var(--color-line) 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
          maskImage: 'linear-gradient(to bottom, black, transparent 85%)',
        }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="eyebrow mb-6 block">For employers</span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="heading-xl mb-6"
            >
              A Shortlist You Can Say Yes To, Fast.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-lg md:text-xl text-[var(--color-muted)] leading-relaxed"
            >
              Sales hiring is high-stakes, and a generalist agency's unqualified shortlist wastes weeks you don't have. StaffAnchor verifies real sales performance data before a candidate ever reaches you.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8"
            >
              <a href="#mandate-form" className="inline-flex items-center justify-center px-7 py-3.5 bg-[var(--color-ink)] text-white font-semibold rounded-xl hover:bg-[var(--color-accent)] transition-colors duration-300">
                Submit a hiring mandate →
              </a>
            </motion.div>
          </div>
        </div>
      </section>

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
            <h2 className="heading-lg">From mandate to shortlist</h2>
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
            <span className="eyebrow mb-3 block">The difference</span>
            <h2 className="heading-lg">What makes our candidates different</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              Company, role, sales category, city, and budget range — that's all we need to start sourcing.
            </p>
          </div>

          <EmployerForm
            title="Hiring Mandate"
            subtitle="Complete this form and a StaffAnchor recruiter will follow up within one business day."
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

      {/* Industries / domains */}
      <SalesDomainsGrid
        eyebrow="Whatever your motion"
        title="We've placed for it"
        subtitle="B2B sales and GTM hiring is our core focus — with B2C sales expertise built for it too."
      />

      {/* Social proof placeholder */}
      <section className="section-padding bg-[var(--color-mist)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-12 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow mb-3 block">Trusted by</span>
            <h2 className="heading-lg">Companies we've placed for</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white rounded-xl border border-dashed border-[var(--color-line)] h-20 flex items-center justify-center text-xs text-[var(--color-muted-soft)] font-medium uppercase tracking-wider">
                Client logo placeholder
              </div>
            ))}
          </div>
          <p className="text-xs text-[var(--color-muted-soft)] mt-4">Client logos and testimonials to be added — placeholder until supplied.</p>
        </div>
      </section>

      {/* Closing mandate form */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Ready for a shortlist you can say yes to?</h2>
            <p className="text-xl text-[var(--color-muted)]">
              Tell us about the role — we'll start sourcing against verified sales performance data right away.
            </p>
          </div>

          <EmployerForm
            title="Hiring Mandate"
            subtitle="Complete this form and a StaffAnchor recruiter will follow up within one business day."
            submitText="Submit Mandate →"
            onSubmit={submitEmployerForm}
          />
        </div>
      </section>
    </>
  );
}

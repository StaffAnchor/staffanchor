'use client';

import { motion } from 'framer-motion';
import EmployerForm from '@/components/ui/EmployerForm';
import { submitEmployerForm } from '@/utils/mandates';
import SalesDomainsGrid from '@/components/ui/SalesDomainsGrid';
import HeroSection from '@/components/ui/HeroSection';
import RecruiterInsightsCard from '@/components/ui/RecruiterInsightsCard';

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
      <HeroSection
        eyebrow="For employers"
        headline="A Shortlist You Can Say Yes To,"
        accentText="Fast."
        subtext="Sales hiring is high-stakes, and a generalist agency's unqualified shortlist wastes weeks you don't have. StaffAnchor verifies real sales performance data before a candidate ever reaches you."
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

      {/* Was a grid of "Client logo placeholder" boxes shipped straight to
          production -- a fabricated trust marker (dashed boxes implying
          logos exist and are just pending) is worse for a firm whose whole
          pitch is verified data than showing nothing at all. Replaced with
          real, honest numbers pulled from the live candidate database --
          update these from the CRM's own counts (Candidates page total,
          Reports) each time this page is touched, rather than reaching for
          a stat that sounds bigger but isn't true. */}
      <section className="section-padding bg-[var(--color-mist)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-12 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true, margin: '-100px' }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <span className="eyebrow mb-3 block">Where we stand today</span>
            <h2 className="heading-lg">The database behind the shortlist</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { value: '750+', label: 'Sales & GTM profiles in our database' },
              { value: '2', label: 'Specialist practices — Enterprise Tech GTM, Industrial Commercial' },
              { value: '1 business day', label: 'Response time on every mandate submitted' },
            ].map((s) => (
              <div key={s.label} className="bg-white rounded-2xl p-7 border border-[var(--color-line)]">
                <p className="heading-accent text-4xl mb-2">{s.value}</p>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">{s.label}</p>
              </div>
            ))}
          </div>
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

'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import HeroSection from '@/components/ui/HeroSection';

const values = [
  { title: 'Specialization over generalism', description: 'Sales hiring is a discipline, not a category on a job board. We do one thing — sales and commercial roles — and go deep.' },
  { title: 'Evidence over guesswork', description: 'Quota attainment, deal size, and sales cycle are measurable. We measure them, verify them, and hire on them.' },
  { title: 'Respect for candidates’ time', description: 'No wall of irrelevant questions, no black-hole applications. A real conversation, every time.' },
  { title: 'Speed for employers', description: 'A shortlist arrives pre-qualified — verified before you ever see it, not after you’ve wasted a week on it.' },
];

const teamPlaceholders = [
  { role: 'Founder', note: 'Bio placeholder — to be added.' },
  { role: 'Lead Recruiter, B2B Sales', note: 'Bio placeholder — to be added.' },
  { role: 'Lead Recruiter, B2C Sales', note: 'Bio placeholder — to be added.' },
];

export default function AboutUsPage() {
  return (
    <>
      <HeroSection
        eyebrow="Our approach"
        headline="Sales Performance Is Measurable. Most Hiring Ignores That."
        subtext="Generic recruitment agencies treat a sales hire like any other hire. It isn't. Sales performance is comparable in a way most roles aren't — quota, deal size, sales cycle — and StaffAnchor exists to actually capture that."
        specialization={true}
        backgroundPattern={true}
      />

      {/* Founding story */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="eyebrow mb-3 block">Why we exist</span>
          <h2 className="heading-lg mb-8">The problem with treating sales hiring like any other hiring</h2>
          <div className="space-y-5 text-lg text-[var(--color-muted)] leading-relaxed">
            <p>
              Most recruitment agencies run every mandate through the same process, whether they're filling a finance role or a sales role. That works reasonably well for a lot of hiring — but sales is different.
            </p>
            <p>
              A sales career leaves a trail of comparable, measurable facts: quota attainment, deal size, sales cycle length, whether someone hunts new logos or grows existing accounts. Most agencies never ask for any of it, and forward a resume instead — leaving the client to re-discover all of this themselves, deal by deal, interview by interview.
            </p>
            <p>
              StaffAnchor exists because that gap is fixable. We built our entire process — the intake, the verification call, the shortlist — around actually capturing sales performance data, not around a generic hiring pipeline retrofitted for sales.
            </p>
          </div>
        </div>
      </section>

      {/* Our approach */}
      <section className="section-padding bg-[var(--color-mist)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="max-w-xl">
              <span className="eyebrow mb-3 block">Our approach</span>
              <h2 className="heading-lg mb-4">Verified, not just self-reported</h2>
              <p className="text-lg text-[var(--color-muted)] leading-relaxed">
                A candidate shares their performance data — quota, deal size, comp, notice period. A StaffAnchor recruiter then independently verifies it in a real conversation. Only after that call does a profile reach a client.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { n: '01', t: 'Candidate self-reports', d: 'Structured, specific questions tailored to their sales sub-domain — not a generic form.' },
                { n: '02', t: 'Recruiter verifies', d: 'A real call, scored on a standard scorecard, so the assessment means the same thing across every candidate.' },
                { n: '03', t: 'Client receives a shortlist', d: 'Clean, evidence-backed, and fast to say yes to.' },
              ].map((s) => (
                <div key={s.n} className="anchor-line bg-white rounded-r-xl py-3 pr-4">
                  <span className="text-xs font-mono text-[var(--color-muted)]">{s.n}</span>
                  <h3 className="font-poppins font-semibold text-[var(--color-ink)]">{s.t}</h3>
                  <p className="text-sm text-[var(--color-muted)]">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[var(--color-mist)] rounded-2xl p-8 border border-[var(--color-line)]">
              <span className="eyebrow mb-3 block">Who we serve</span>
              <h3 className="font-poppins font-semibold text-xl text-[var(--color-ink)] mb-3 tracking-tight">Companies hiring sales teams</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">From SDR to VP Sales — fast-growth companies building or scaling a revenue organisation.</p>
            </div>
            <div className="bg-[var(--color-mist)] rounded-2xl p-8 border border-[var(--color-line)]">
              <span className="eyebrow mb-3 block">Who we serve</span>
              <h3 className="font-poppins font-semibold text-xl text-[var(--color-ink)] mb-3 tracking-tight">Sales professionals</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Across B2B and B2C — from early-career SDRs to CXO-level revenue leaders.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-[var(--color-mist)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-16 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow mb-3 block">Principles</span>
            <h2 className="heading-lg">What we hold ourselves to</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white rounded-2xl p-8 border border-[var(--color-line)]"
              >
                <span className="text-xs font-mono text-[var(--color-muted)] mb-4 block">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="font-poppins font-semibold text-lg text-[var(--color-ink)] mb-2 tracking-tight">{v.title}</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team placeholder */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-12 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow mb-3 block">Team</span>
            <h2 className="heading-lg">Who you'll work with</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamPlaceholders.map((t) => (
              <div key={t.role} className="rounded-2xl border border-dashed border-[var(--color-line)] p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-[var(--color-mist)] mx-auto mb-4" />
                <h3 className="font-poppins font-semibold text-[var(--color-ink)] mb-1">{t.role}</h3>
                <p className="text-xs text-[var(--color-muted-soft)] uppercase tracking-wider">{t.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[var(--color-ink)] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-poppins font-semibold text-3xl md:text-5xl mb-8 tracking-tight">Ready to work with specialists?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/employers" className="inline-flex items-center justify-center px-7 py-3.5 bg-[var(--color-accent)] text-white font-semibold rounded-xl hover:bg-white hover:text-[var(--color-ink)] transition-colors duration-300">
              I&apos;m hiring →
            </Link>
            <Link href="/jobseekers" className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-[var(--color-ink)] font-semibold rounded-xl hover:bg-[var(--color-accent)] hover:text-white transition-colors duration-300">
              I&apos;m looking for a role →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

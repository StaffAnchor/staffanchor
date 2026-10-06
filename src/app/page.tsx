'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import HeroSection from '@/components/ui/HeroSection';
import ShortlistDemoCard from '@/components/ui/ShortlistDemoCard';

// Positioning (Oct 2026): the specialist for enterprise technology sales hiring in India.
// Credibility comes from how specifically we talk about selling, not from counts or client
// results (none are published yet). Everything below is plain data so the wording can change
// without touching layout code.
const focusAreas: string[] = [
  'Cybersecurity',
  'Cloud & infrastructure',
  'Data & AI',
  'B2B SaaS (horizontal & vertical)',
  'ERP, CRM & HRMS software',
  'Industrial & infrastructure technology',
];

// How a sales leader reads a seller. Each is something we record for every candidate.
const howWeReadASeller = [
  {
    title: 'The sales motion',
    description: 'Outbound account-based, partner or channel-led, inbound, or product-led? A seller who thrives in one often struggles in another.',
  },
  {
    title: 'Deal size and cycle',
    description: 'A ₹5L deal in a month and a ₹1Cr deal in nine months are different jobs. We record both for each role they held.',
  },
  {
    title: 'Quota and attainment',
    description: 'The size of the number, how they reached it, and how it held up over three years. Not "consistently exceeded targets".',
  },
  {
    title: 'Who they sold to',
    description: 'CXOs, CTOs, procurement and security reviewers. The level and function of the buyer, not just the word "enterprise".',
  },
  {
    title: 'How much of the cycle they owned',
    description: 'Who built the pipeline, ran the demo, negotiated and closed. Full-cycle ownership or a hand-off role.',
  },
  {
    title: 'New logos or expansion',
    description: 'Hunting new accounts, growing the install base, or both, and whether they have led a team while carrying a number.',
  },
];

// Opinions, not claims: this is where a specialist's point of view shows.
const whatHiringGetsWrong = [
  {
    title: 'A title is not a motion.',
    description: 'Two "Senior Account Executives" can be doing opposite jobs. We hire on what they sold, to whom, and how.',
  },
  {
    title: 'Quota without deal size means little.',
    description: '100% of a small number tells you almost nothing. We always capture both, for every role.',
  },
  {
    title: 'Pay and notice surprises end searches late.',
    description: 'We confirm expected CTC, notice period and relocation on a call before you meet anyone.',
  },
];

const seventyTwoHours = [
  { step: '01', title: 'Share the role', description: 'A short form: role, city, budget and your must-haves. It takes minutes.' },
  { step: '02', title: 'We confirm the brief', description: 'A recruiter checks the must-haves and the sales motion with you. The 72 hours start here.' },
  { step: '03', title: 'We search and speak to people', description: 'From our own bank of enterprise sellers and the market. A recruiter speaks to each candidate and confirms they want your role.' },
  { step: '04', title: 'Your shortlist, in your portal', description: 'Every candidate reviewed against each of your must-haves: met, partly met or not met, with the recruiter\u2019s note.' },
];

const rolesWeHire = [
  { title: 'Enterprise & Strategic Account Executives', description: 'Own large, multi-stakeholder deals with long cycles: security reviews, procurement and CXO buying committees.' },
  { title: 'Key Account Managers & Directors', description: 'Expand and retain your largest accounts: renewals, upsell and multi-year relationships.' },
  { title: 'Sales Managers, Regional Heads & Directors', description: 'Lead a team that carries a number: hiring, forecasting, coaching and pipeline reviews.' },
  { title: 'VPs of Sales, Country Heads & Business Heads', description: 'Own revenue and the P&L for a market or a business.' },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        eyebrow="Enterprise tech sales hiring · India"
        headline="We hire the sellers who close enterprise tech deals."
        accentText="First shortlist in 72 hours."
        subtext="Account executives to country heads, for B2B tech companies in India. A recruiter speaks to every candidate and checks them against each of your must-haves. If someone misses one, you see it."
        specialization={true}
        backgroundPattern={true}
        visual={<ShortlistDemoCard />}
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/employers#mandate-form"
            className="group inline-flex items-center justify-center px-7 py-3.5 bg-[var(--color-ink)] text-white font-semibold rounded-xl hover:bg-[var(--color-accent)] transition-colors duration-300 min-w-[200px]"
          >
            <span>Share a role</span>
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <a
            href="#what-you-get"
            className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-[var(--color-ink)] border border-[var(--color-line)] font-semibold rounded-xl hover:border-[var(--color-ink)] transition-colors duration-300 min-w-[200px]"
          >
            See what you receive
          </a>
        </div>
        <p className="mt-5 text-sm text-[var(--color-muted)]">
          The 72 hours start when your brief is confirmed: role, must-haves, budget and city.
        </p>
        <p className="mt-2 text-sm text-[var(--color-muted)]">
          Looking for a role?{' '}
          <Link href="/jobseekers" className="font-semibold text-[var(--color-accent)] underline-offset-4 hover:underline">
            Create your profile
          </Link>
          {' · '}
          <Link href="/employers" className="font-semibold text-[var(--color-accent)] underline-offset-4 hover:underline">
            Retained search, RPO and other ways we work
          </Link>
        </p>
      </HeroSection>

      {/* Where we are deep -- editable list (see focusAreas above). Named right under the hero:
          this is the line a sales head scans for before reading anything else. */}
      <section className="py-6 bg-white border-b border-[var(--color-line)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs text-[var(--color-muted-soft)] mb-3 uppercase tracking-wider font-semibold">Where we are deep</p>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm font-medium text-[var(--color-muted)]">
            {focusAreas.map((area, i) => (
              <span key={area} className="flex items-center gap-3">
                <span className="text-[var(--color-ink)]">{area}</span>
                {i < focusAreas.length - 1 && <span className="text-[var(--color-line)]">·</span>}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* How we read a seller */}
      <section className="section-padding bg-[var(--color-mist)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-14 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow mb-3 block">Our expertise</span>
            <h2 className="heading-lg mb-4">We read a seller the way a sales leader does</h2>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed">
              A resume says &ldquo;consistently exceeded targets&rdquo;. A sales leader asks six questions. We record the answers for every
              candidate, so you never have to ask them cold.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {howWeReadASeller.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: '-50px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="bg-white rounded-2xl p-7 border border-[var(--color-line)]"
              >
                <span className="text-xs font-mono text-[var(--color-muted)] mb-4 block">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="font-poppins font-semibold text-lg text-[var(--color-ink)] mb-2 tracking-tight">{item.title}</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What most sales hiring gets wrong -- a specialist's point of view */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-12 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow mb-3 block">Our point of view</span>
            <h2 className="heading-lg">What most sales hiring gets wrong</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whatHiringGetsWrong.map((item) => (
              <div key={item.title} className="anchor-line py-1">
                <h3 className="font-poppins font-semibold text-xl text-[var(--color-ink)] mb-2 tracking-tight">{item.title}</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you get in 72 hours */}
      <section id="what-you-get" className="section-padding bg-[var(--color-mist)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-14 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow mb-3 block">What you receive</span>
            <h2 className="heading-lg mb-4">A shortlist you can judge at a glance, in 72 hours</h2>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed">
              Every candidate is scored against each of your must-haves: met, partly met or not met. If someone falls short, you see it
              before you spend an hour with them.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {seventyTwoHours.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: '-50px' }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
                className="bg-white rounded-2xl p-7 border border-[var(--color-line)]"
              >
                <span className="text-xs font-mono text-[var(--color-muted)] mb-3 block">{item.step}</span>
                <h3 className="font-poppins font-semibold text-lg text-[var(--color-ink)] mb-2 tracking-tight">{item.title}</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles we hire -- editable list (see rolesWeHire above) */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-12 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow mb-3 block">Roles we hire</span>
            <h2 className="heading-lg">From your first enterprise seller to the country head</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rolesWeHire.map((role, i) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-[var(--color-mist)] rounded-2xl p-8 border border-[var(--color-line)]"
              >
                <h3 className="font-poppins font-semibold text-lg text-[var(--color-ink)] mb-2 tracking-tight">{role.title}</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">{role.description}</p>
              </motion.div>
            ))}
          </div>

          <p className="mt-8 text-[var(--color-muted)]">
            We also hire partnerships and alliances, channel sales, and presales leaders.
          </p>
        </div>
      </section>

      {/* Founder's Note */}
      <section className="section-padding bg-white" id="leadership">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="eyebrow mb-3 block justify-center text-center">Who we are</span>
          <h2 className="heading-lg mb-12 text-center">Founder&apos;s note</h2>

          <div className="bg-[var(--color-mist)] rounded-2xl p-8 lg:p-12 border border-[var(--color-line)]">
            <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
              <div className="shrink-0">
                <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-2xl flex items-center justify-center overflow-hidden border border-[var(--color-line)]">
                  <Image
                    src="/gagan_sir_profile_pic.jpg"
                    alt="Gagan Sharma"
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex-1">
                <blockquote className="text-lg lg:text-xl text-[var(--color-ink)] leading-relaxed mb-6 anchor-line">
                  &ldquo;Great salespeople aren&apos;t discovered on resumes — they reveal themselves through behaviour. Our framework captures those behaviours with precision.&rdquo;
                </blockquote>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t border-[var(--color-line)]">
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] text-lg">Gagan Sharma</p>
                    <p className="text-[var(--color-muted)] text-sm">Founder, StaffAnchor Talent Solutions</p>
                    <p className="text-[var(--color-muted)] text-sm mt-1">15 years building and leading sales teams</p>
                  </div>

                  <a
                    href="https://www.linkedin.com/in/sharmagagan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    <span className="font-medium">Connect on LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sales Circle referrer promo */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border border-[var(--color-line)] bg-[var(--color-mist)] px-6 py-12 sm:px-12 sm:py-16"
          >
            <div className="relative grid grid-cols-1 lg:grid-cols-[1.3fr_auto] gap-8 items-center">
              <div>
                <span className="eyebrow mb-3">StaffAnchor Sales Circle</span>
                <h2 className="heading-lg mb-3">Know great sales talent? Get paid to introduce them.</h2>
                <p className="text-[var(--color-muted)] leading-relaxed max-w-xl">
                  A curated, by-application referral network — earn up to ₹75,000 per placement when someone
                  you refer joins and stays. No recruiting work, no cold outreach, full visibility into every
                  referral&apos;s status.
                </p>
              </div>
              <Link
                href="/sales-circle"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-[var(--color-ink)] text-white font-semibold rounded-xl hover:bg-[var(--color-accent)] transition-colors duration-300 whitespace-nowrap"
              >
                Refer & Earn →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Dual-path closing */}
      <section className="pt-20 pb-20 bg-[var(--color-ink)] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-semibold text-3xl md:text-5xl tracking-tight">
              Hiring enterprise tech sellers?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[var(--color-ink-soft)] rounded-2xl p-8 border border-white/10">
              <h3 className="font-poppins font-semibold text-xl mb-2">Hiring sales talent?</h3>
              <p className="text-white/60 mb-6">Tell us the role. Your first shortlist arrives within 72 hours of a confirmed brief.</p>
              <Link
                href="/employers#mandate-form"
                className="inline-flex items-center justify-center px-6 py-3 bg-[var(--color-accent)] text-white font-semibold rounded-xl hover:bg-white hover:text-[var(--color-ink)] transition-colors duration-300"
              >
                Share a role →
              </Link>
            </div>
            <div className="bg-[var(--color-ink-soft)] rounded-2xl p-8 border border-white/10">
              <h3 className="font-poppins font-semibold text-xl mb-2">Looking for your next role?</h3>
              <p className="text-white/60 mb-6">Build a profile that reflects your real performance — quota, deal size, and story.</p>
              <Link
                href="/jobseekers"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-[var(--color-ink)] font-semibold rounded-xl hover:bg-[var(--color-accent)] hover:text-white transition-colors duration-300"
              >
                Build my profile →
              </Link>
            </div>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-white/10 px-8 py-6">
            <p className="text-white/80">Not sure what you need? Book a 20-minute sales hiring consultation.</p>
            <Link
              href="/employers/sales-hiring-advisory#get-started"
              className="inline-flex shrink-0 items-center justify-center px-6 py-3 border border-white/30 text-white font-semibold rounded-xl hover:bg-white hover:text-[var(--color-ink)] transition-colors duration-300"
            >
              Book a consultation →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

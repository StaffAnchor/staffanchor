'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import HeroSection from '@/components/ui/HeroSection';
import TestimonialCard from '@/components/ui/TestimonialCard';
import SalesDomainsGrid from '@/components/ui/SalesDomainsGrid';

const proofStats = [
  { value: '3-Year', label: 'Quota attainment tracked', note: 'Every candidate’s performance history, not just their title.' },
  { value: '100%', label: 'Verified by a real conversation', note: 'No profile reaches a client without a recruiter call.' },
  { value: '12+', label: 'Sales sub-domains covered', note: 'SaaS, Enterprise, BFSI, EdTech, Real Estate & more.' },
  { value: '30-Day', label: 'Typical notice period on file', note: 'Confirmed upfront, so timelines are never a surprise.' },
];

const whyDifferent = [
  {
    title: 'Specialist in sales, only',
    description: 'Not IT staffing, not generic HR. Every mandate we take is a sales or commercial role — SDR to CRO, B2B or B2C — because sales hiring rewards depth, not breadth.',
  },
  {
    title: 'Verified, not just self-reported',
    description: 'Candidates share their quota attainment, deal size and sales cycle. A recruiter independently verifies it on a real call before it ever reaches you.',
  },
  {
    title: 'Fast, confident shortlists',
    description: 'Because the data is structured and verified before you see it, a shortlist is something you can act on the same day — not something you have to re-screen.',
  },
];

const testimonials = [
  {
    quote: 'They think like consultants, not recruiters. Every shortlist was spot-on.',
    title: 'CHRO',
    company: 'D2C Brand',
  },
  {
    quote: 'Our leadership role was closed in 3 weeks — flawless process.',
    title: 'Founder',
    company: 'B2B FinTech Startup',
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        eyebrow="Sales hiring, done like a specialist"
        headline="Your Career — and Your Hiring — On the Record."
        subtext="For candidates: a profile that actually captures your performance, not just your title. For employers: shortlists backed by verified data, not a keyword match."
        specialization={true}
        backgroundPattern={true}
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/employers"
            className="group inline-flex items-center justify-center px-7 py-3.5 bg-[var(--color-ink)] text-white font-semibold rounded-xl hover:bg-[var(--color-accent)] transition-colors duration-300 min-w-[200px]"
          >
            <span>I&apos;m hiring</span>
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="/jobseekers"
            className="group inline-flex items-center justify-center px-7 py-3.5 bg-white text-[var(--color-ink)] border border-[var(--color-line)] font-semibold rounded-xl hover:border-[var(--color-ink)] transition-colors duration-300 min-w-[200px]"
          >
            <span>I&apos;m looking for a role</span>
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </Link>
        </div>
      </HeroSection>

      {/* Proof-point stat row — anchor-line style */}
      <section className="py-16 border-y border-[var(--color-line)] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-[var(--color-muted-soft)] mb-8 uppercase tracking-wider font-semibold">Illustrative figures, pending real placement data</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {proofStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="anchor-line"
              >
                <div className="text-3xl font-semibold font-poppins text-[var(--color-ink)] tracking-tight mb-1">{stat.value}</div>
                <div className="text-sm font-semibold text-[var(--color-ink)] mb-1">{stat.label}</div>
                <div className="text-sm text-[var(--color-muted)]">{stat.note}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why StaffAnchor is different */}
      <section className="section-padding bg-[var(--color-mist)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-16 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow mb-3 block">Why us</span>
            <h2 className="heading-lg">Why StaffAnchor is different</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyDifferent.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-[var(--color-line)]"
              >
                <span className="text-xs font-mono text-[var(--color-muted)] mb-4 block">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="font-poppins font-semibold text-xl text-[var(--color-ink)] mb-3 tracking-tight">{item.title}</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sales domains we cover */}
      <SalesDomainsGrid subtitle="Whatever your sales motion, we speak the language fluently." />

      {/* Testimonials */}
      <TestimonialCard testimonials={testimonials} title="Client voices" />

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

      {/* Dual-path closing */}
      <section className="pt-20 pb-20 bg-[var(--color-ink)] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-semibold text-3xl md:text-5xl tracking-tight">
              Ready to work with specialists?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[var(--color-ink-soft)] rounded-2xl p-8 border border-white/10">
              <h3 className="font-poppins font-semibold text-xl mb-2">Hiring sales talent?</h3>
              <p className="text-white/60 mb-6">Get a shortlist backed by verified performance data — not a resume dump.</p>
              <Link
                href="/employers"
                className="inline-flex items-center justify-center px-6 py-3 bg-[var(--color-accent)] text-white font-semibold rounded-xl hover:bg-white hover:text-[var(--color-ink)] transition-colors duration-300"
              >
                Submit a hiring mandate →
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
        </div>
      </section>
    </>
  );
}

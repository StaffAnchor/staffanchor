'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import HeroSection from '@/components/ui/HeroSection';
import SalesDomainsGrid from '@/components/ui/SalesDomainsGrid';

const whyRegister = [
  {
    title: 'Capture your performance once',
    description: 'Quota attainment, deal size, sales cycle — entered once, verified once, reused for every relevant opportunity that follows.',
  },
  {
    title: 'Matched to your actual specialization',
    description: 'An SDR and an enterprise AE are not interchangeable. We match you to roles that fit your specific sub-domain, not "sales" generically.',
  },
  {
    title: 'A recruiter who understands the difference',
    description: 'Our recruiters work sales hiring exclusively — they know a hunter from a farmer, and a 3-month cycle from a 12-month one.',
  },
];

const whatWeAsk = [
  { field: 'Current compensation & notice period', why: 'So we only reach out for roles that are actually in range and on your timeline.' },
  { field: 'Quota history & deal size', why: 'This is what makes your profile stand out — not a generic list of past titles.' },
  { field: 'A short self-assessment', why: 'Your best deal, and what you learned from one that didn’t close — context a resume can’t hold.' },
];

const howItWorks = [
  { step: '01', title: 'Build your profile', description: 'About 9 minutes. The questions adapt to your specialization — no generic wall of irrelevant fields.' },
  { step: '02', title: 'A recruiter reviews, and may call you', description: 'Real verification against a standard scorecard — communication, stability, and fit.' },
  { step: '03', title: 'Matched confidentially against live mandates', description: 'Your profile stays in our database, live and searchable, for every relevant role — not just one.' },
  { step: '04', title: 'You control what’s shared', description: 'Nothing goes to an employer without your knowledge.' },
];

export default function JobseekersPage() {
  return (
    <main>
      {/* Hero */}
      <HeroSection
        eyebrow="For sales professionals"
        headline="Your Quota, Your Deal Size, Your Story — Actually on Record."
        subtext="Resumes don't capture what you actually achieved. StaffAnchor builds a profile around your real sales performance, verified by a recruiter who understands the difference between an SDR and an enterprise AE."
        specialization={false}
        backgroundPattern={true}
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="https://jobs.staffanchor.com/register"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center px-7 py-3.5 bg-[var(--color-ink)] text-white font-semibold rounded-xl hover:bg-[var(--color-accent)] transition-colors duration-300 min-w-[200px]"
          >
            <span>Build My Profile</span>
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
        <p className="text-sm text-[var(--color-muted)] mt-8 max-w-2xl">
          Your profile is never shared with an employer without your knowledge.
        </p>
      </HeroSection>

      {/* Why register */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-16 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow mb-3 block">Why register</span>
            <h2 className="heading-lg">Why register with StaffAnchor</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyRegister.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white rounded-2xl p-8 border border-[var(--color-line)] hover:border-[var(--color-ink)] transition-colors duration-300"
              >
                <span className="text-xs font-mono text-[var(--color-muted)] mb-4 block">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="font-poppins font-semibold text-xl text-[var(--color-ink)] mb-3 tracking-tight">{item.title}</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What we ask for, and why */}
      <section className="section-padding bg-[var(--color-mist)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-16 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow mb-3 block">What we ask for, and why</span>
            <h2 className="heading-lg">This is what makes your profile stand out</h2>
          </motion.div>

          <div className="space-y-5 max-w-3xl">
            {whatWeAsk.map((item) => (
              <div key={item.field} className="anchor-line py-1">
                <h3 className="font-semibold text-[var(--color-ink)] mb-1">{item.field}</h3>
                <p className="text-[var(--color-muted)]">{item.why}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sales categories covered */}
      <SalesDomainsGrid
        eyebrow="Find your specialty"
        title="Sales categories we cover"
        subtitle="Tell us your primary specialization — plus any secondary experience — so you surface for the widest, most accurate set of roles."
      />

      {/* How it works */}
      <section className="section-padding bg-[var(--color-mist)] border-y border-[var(--color-line)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-16 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow mb-3 block">How it works</span>
            <h2 className="heading-lg">From profile to placement</h2>
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

      {/* CTA Section */}
      <section className="section-padding bg-[var(--color-ink)] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-poppins font-semibold text-3xl md:text-5xl mb-6 tracking-tight text-white">Ready to put your real story on record?</h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              About 9 minutes, tailored to your specialization. Your profile is never shared without your knowledge.
            </p>
            <Link
              href="https://jobs.staffanchor.com/register"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[var(--color-ink)] font-semibold rounded-xl hover:bg-[var(--color-accent)] hover:text-white transition-colors duration-300"
            >
              <span>Register Now</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ or Support */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="heading-lg mb-6">Have questions?</h2>
            <p className="text-lg text-[var(--color-muted)] mb-8">
              Our team can walk you through the profile, the process, or what happens after you register.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-[var(--color-ink)] text-white font-semibold rounded-xl hover:bg-[var(--color-accent)] transition-colors duration-300"
            >
              <span>Get in Touch</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import HeroSection from '@/components/ui/HeroSection';
import MetricsStrip from '@/components/ui/MetricsStrip';
import TestimonialCard from '@/components/ui/TestimonialCard';

const jobseekerMetrics = [
  { value: "5000+", label: "Candidate Profiles", description: "Verified & searchable" },
  { value: "92%", label: "Placement Rate", description: "Once shortlisted" },
  { value: "9 min", label: "Avg. Profile Time", description: "Not a wall of forms" },
  { value: "40%", label: "Avg. Salary Growth", description: "On placement" },
];

const jobseekerBenefits = [
  {
    title: "A profile, not a resume",
    description: "We capture what a resume can't: your actual quota attainment, deal sizes, sales cycles, and motion (hunter, farmer, or both) — the specifics that let a recruiter place you accurately, not generically.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Built for how you actually work",
    description: "The questions we ask depend on what you do — SaaS AE, enterprise field sales, EdTech, BFSI, or a non-sales function. No generic wall of irrelevant fields, and everything works from your phone.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138zM9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "One profile, every future search",
    description: "Your profile isn't discarded after one role. It stays live and searchable — so when a mandate matching your background opens up a year from now, you're already in the room.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

const whyJoinBenefits = [
  {
    title: "A real conversation, not just a form scan",
    description: "Once you register, a StaffAnchor recruiter follows up with an actual call — assessing communication, stability, and fit using the same standard scorecard every time, so your record reflects a real person's judgment, not a keyword match.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "We only reach out for real fits",
    description: "You won't get spammed with irrelevant roles. We reach out when a mandate genuinely matches your compensation range, notice period, and specialization — not a mass job-board blast.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: "You're never boxed into one job",
    description: "Sales careers rarely fit one label. Tell us your primary specialization plus any secondary experience (SaaS and enterprise, for instance) so you surface for a wider, more accurate set of mandates.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Free, permanent, always yours to update",
    description: "No fee to register, no fee to stay in the database. Update your profile any time your compensation, notice period, or goals change.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const jobseekerJourney = [
  {
    step: "01",
    title: "Tell us who you are, fast",
    description: "Name, contact, current role, comp, and notice period — the essentials, on the first two pages, before anything else.",
  },
  {
    step: "02",
    title: "Go deep on your specialization",
    description: "The form adapts to your background — deal size and quota for B2B sales, funnel and GMV for B2C, a general profile for non-sales functions.",
  },
  {
    step: "03",
    title: "Get verified, then matched",
    description: "A recruiter calls to verify the details and assess fit. From there, your profile stays live and searchable for every relevant mandate going forward.",
  },
];

const testimonials = [
  {
    quote: "They called and actually understood my sales motion before pitching me anything. Landed a role that matched my deal size and comp exactly.",
    title: "Enterprise Account Executive",
    company: "SaaS Scale-Up",
  },
  {
    quote: "My profile got me a second offer eight months later, for a role I never applied to. That's the part nobody else does.",
    title: "Regional Sales Manager",
    company: "FinTech",
  },
];

export default function JobseekersPage() {
  return (
    <main>
      {/* Hero Section */}
      <HeroSection
        eyebrow="For sales talent"
        headline="A Profile That Works Long After One Job Application."
        subtext="Most job platforms forget you the moment a role closes. StaffAnchor builds a permanent, verified profile — your quota attainment, deal size, and motion — that stays searchable for every relevant mandate that comes after."
        specialization={false}
        backgroundPattern={true}
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="https://jobs.staffanchor.com/register"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center px-7 py-3.5 bg-[var(--color-ink)] text-white font-semibold rounded-lg hover:bg-[var(--color-accent)] transition-colors duration-300 min-w-[200px]"
          >
            <span>Submit Your Profile</span>
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
        <p className="text-sm text-[var(--color-muted)] mt-8 max-w-2xl">
          Around 9 minutes to complete. Every field is there because a recruiter or client will actually use it — nothing collected just to collect it.
        </p>
      </HeroSection>

      {/* Metrics Strip */}
      <MetricsStrip metrics={jobseekerMetrics} />

      {/* What You'll Build Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-16 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow mb-3 block">Beyond the resume</span>
            <h2 className="heading-lg mb-4">What your profile actually captures</h2>
            <p className="text-xl text-[var(--color-muted)]">A resume says &ldquo;5 years in sales.&rdquo; We capture the specifics that let a recruiter place you accurately — and that a hiring manager can actually trust.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobseekerBenefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-white rounded-2xl p-8 border border-[var(--color-line)] hover:border-[var(--color-ink)] transition-colors duration-300"
              >
                <div className="w-11 h-11 bg-[var(--color-ink)] rounded-xl flex items-center justify-center mb-5">
                  {benefit.icon}
                </div>
                <h3 className="font-poppins font-semibold text-xl text-[var(--color-ink)] mb-3 tracking-tight">{benefit.title}</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Profile Journey */}
      <section className="section-padding bg-[var(--color-mist)] border-y border-[var(--color-line)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-16 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow mb-3 block">How it works</span>
            <h2 className="heading-lg">From profile to placement</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobseekerJourney.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-8 border border-[var(--color-line)] h-full">
                  <span className="text-xs font-mono text-[var(--color-muted)] mb-4 block">{step.step}</span>
                  <h3 className="font-poppins font-semibold text-xl text-[var(--color-ink)] mb-3 tracking-tight">{step.title}</h3>
                  <p className="text-[var(--color-muted)] leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-16 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow mb-3 block">Why candidates stay with us</span>
            <h2 className="heading-lg">Why join StaffAnchor</h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-50px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } }
            }}
          >
            {whyJoinBenefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="bg-[var(--color-mist)] rounded-2xl p-8 border border-[var(--color-line)]"
              >
                <div className="w-11 h-11 bg-[var(--color-ink)] rounded-xl flex items-center justify-center mb-5">
                  {benefit.icon}
                </div>
                <h3 className="font-poppins font-semibold text-xl text-[var(--color-ink)] mb-3 tracking-tight">{benefit.title}</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialCard testimonials={testimonials} title="What candidates say" />

      {/* CTA Section */}
      <section className="section-padding bg-[var(--color-ink)] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-poppins font-semibold text-3xl md:text-5xl mb-6 tracking-tight text-white">Build a profile that outlasts one job.</h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Around 9 minutes, tailored to your specialization, verified by a real recruiter — then searchable for every mandate that fits, going forward.
            </p>
            <Link
              href="https://jobs.staffanchor.com/register"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[var(--color-ink)] font-semibold rounded-lg hover:bg-[var(--color-accent)] hover:text-white transition-colors duration-300"
            >
              <span>Submit Your Profile</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ or Support */}
      <section className="section-padding bg-[var(--color-mist)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="heading-lg mb-6">Have questions?</h2>
            <p className="text-lg text-[var(--color-muted)] mb-8">
              Our team can walk you through the profile, the process, or what happens after you submit it.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-[var(--color-ink)] text-white font-semibold rounded-lg hover:bg-[var(--color-accent)] transition-colors duration-300"
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

'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MessageCircleQuestion, FileCheck2, ArrowRight, Sparkles } from 'lucide-react';

// "Free Tools for Jobseekers" hub -- a single discoverable landing page for
// the growing set of free, no-signup candidate tools that actually live on
// jobs.staffanchor.com (Mock Interview, ATS Score Checker). Rather than
// scattering individual promo blocks across staffanchor.com pages, new
// tools should be added to the TOOLS array below and they'll pick up this
// page's layout, nav entry, and Jobseekers-page link automatically.
const TOOLS = [
  {
    key: 'mock-interview',
    icon: MessageCircleQuestion,
    iconClasses: 'bg-indigo-50 text-indigo-600',
    title: 'AI Mock Interview',
    description:
      'Answer real discovery, objection-handling, pitching, and closing questions, and get instant, specific feedback before your next interview.',
    cta: 'Start Practicing',
    href: 'https://jobs.staffanchor.com/mock-interview',
  },
  {
    key: 'ats-score',
    icon: FileCheck2,
    iconClasses: 'bg-teal-50 text-teal-600',
    title: 'ATS Score Checker',
    description:
      'Upload your resume to see how it scores for ATS-parsability and keyword match -- against a specific job description or general best practices.',
    cta: 'Check My Score',
    href: 'https://jobs.staffanchor.com/ats-score',
  },
];

export default function FreeToolsPage() {
  return (
    <main>
      <section className="section-padding bg-[var(--color-mist)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)] bg-[var(--color-accent-soft)] rounded-full px-3 py-1 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Free · No sign-up needed
            </span>
            <h1 className="heading-xl mb-4">Free Tools for Jobseekers</h1>
            <p className="text-lg text-[var(--color-muted)] max-w-2xl mx-auto">
              Practice tools built specifically for sales candidates, free and open to anyone -- no account required
              to try them.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TOOLS.map((tool, i) => (
              <motion.div
                key={tool.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex flex-col bg-white rounded-2xl p-8 border border-[var(--color-line)] hover:border-[var(--color-ink)] transition-colors duration-300"
              >
                <div className={`flex items-center justify-center w-12 h-12 rounded-xl mb-5 ${tool.iconClasses}`}>
                  <tool.icon className="w-6 h-6" />
                </div>
                <h2 className="font-poppins font-semibold text-xl text-[var(--color-ink)] mb-3 tracking-tight">
                  {tool.title}
                </h2>
                <p className="text-[var(--color-muted)] leading-relaxed mb-6 flex-1">{tool.description}</p>
                <Link
                  href={tool.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center px-6 py-3 bg-[var(--color-ink)] text-white font-semibold rounded-xl hover:bg-[var(--color-accent)] transition-colors duration-300 w-fit"
                >
                  <span>{tool.cta}</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[var(--color-ink)] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-poppins font-semibold text-3xl md:text-4xl mb-6 tracking-tight text-white">
              Ready for the real thing?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Build a profile that captures your real sales performance -- quota, deal size, and story -- verified by
              a recruiter who understands the difference.
            </p>
            <Link
              href="https://jobs.staffanchor.com/register"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[var(--color-ink)] font-semibold rounded-xl hover:bg-[var(--color-accent)] hover:text-white transition-colors duration-300"
            >
              <span>Build My Profile</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

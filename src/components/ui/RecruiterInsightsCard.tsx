'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Sparkles, CheckCircle2, AlertTriangle, MessageCircleQuestion } from 'lucide-react';

// Illustrative preview of the AI-assisted candidate assessment every
// StaffAnchor shortlist is built from -- match score, recruiter
// recommendation, suggested interview questions, and any real gaps worth
// probing. This isn't new product surface: the CRM's matching workspace
// already generates all of this (candidate-match scoring, decision flags,
// stability score) for every mandate -- this card just makes that visible
// to a prospective employer landing on this page, instead of leaving it as
// something only StaffAnchor's own recruiters ever see. Auto-cycles like
// PassportDemoCard; entirely presentational, no live data fetch.
const SAMPLES = [
  {
    role: 'Enterprise Account Executive · SaaS',
    match: 91,
    recommend: 'Strong fit',
    standout: [
      'Consistent 3-year quota over-attainment in a comparable deal size band',
      'Enterprise procurement cycle experience matches your sales motion',
    ],
    questions: [
      'Walk me through your largest deal — who were the stakeholders?',
      'How did you handle a quarter you missed quota?',
    ],
    gap: 'Notice period is 45 days — longer than your stated timeline',
  },
  {
    role: 'Regional Sales Manager · BFSI',
    match: 86,
    recommend: 'Strong fit',
    standout: [
      'Led a 6-person team through 2 consecutive quarters of >110% attainment',
      'Direct experience managing channel partners in this region',
    ],
    questions: [
      'How do you structure territory planning for a new region?',
      'Tell me about a rep you had to performance-manage out.',
    ],
    gap: '2 job changes in the last 3 years — worth asking about directly',
  },
  {
    role: 'Inside Sales Team Lead · EdTech',
    match: 94,
    recommend: 'Strong fit',
    standout: [
      'Highest attainment on the team for 4 straight quarters',
      'Already coaching 3 reps informally — ready for a formal lead role',
    ],
    questions: [
      "What's your approach to ramping a new SDR in their first 30 days?",
      'How do you forecast pipeline for your team?',
    ],
    gap: 'No prior formal people-management title — first time as a lead',
  },
];

export default function RecruiterInsightsCard() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % SAMPLES.length), 5500);
    return () => clearInterval(t);
  }, []);

  const s = SAMPLES[index];

  return (
    <div className="relative w-full max-w-md mx-auto lg:mx-0">
      <div className="relative bg-white rounded-2xl border border-[var(--color-line)] shadow-xl shadow-slate-900/5 p-6 overflow-hidden">
        <div className="flex items-center justify-between mb-4">
          <span className="eyebrow !mb-0 text-[11px] flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[var(--color-accent)]" /> AI Recruiter Insights
          </span>
          <span className="text-[11px] font-semibold text-[var(--color-muted)] bg-[var(--color-mist)] rounded-full px-2 py-0.5">
            Live preview
          </span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center justify-between mb-4">
              <p className="text-base font-semibold text-[var(--color-ink)]">{s.role}</p>
              <div className="shrink-0 flex flex-col items-center justify-center w-12 h-12 rounded-full border-2 border-[var(--color-success)] text-[var(--color-success)]">
                <span className="text-sm font-bold leading-none">{s.match}</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 mb-3">
              <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-success)] shrink-0" />
              <span className="text-[13px] font-semibold text-[var(--color-success)]">{s.recommend}</span>
            </div>

            <div className="mb-3">
              <p className="text-[10px] text-[var(--color-muted)] uppercase tracking-wide mb-1.5">What stands out</p>
              <ul className="space-y-1">
                {s.standout.map((point) => (
                  <li key={point} className="text-[12.5px] text-[var(--color-ink)] leading-snug flex gap-1.5">
                    <span className="text-[var(--color-accent)] shrink-0">•</span> {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-3 pt-3 border-t border-[var(--color-line)]">
              <p className="text-[10px] text-[var(--color-muted)] uppercase tracking-wide mb-1.5 flex items-center gap-1">
                <MessageCircleQuestion className="w-3 h-3" /> Worth asking in interview
              </p>
              <ul className="space-y-1">
                {s.questions.map((q) => (
                  <li key={q} className="text-[12.5px] text-[var(--color-ink)] leading-snug italic">
                    &ldquo;{q}&rdquo;
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-start gap-1.5 rounded-lg bg-[var(--color-amber-soft)] px-2.5 py-2">
              <AlertTriangle className="w-3.5 h-3.5 text-[var(--color-amber)] shrink-0 mt-0.5" />
              <p className="text-[12px] text-[var(--color-amber)] leading-snug">{s.gap}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center gap-1 mt-5">
          {SAMPLES.map((_, i) => (
            <span
              key={i}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === index ? 'w-6 bg-[var(--color-ink)]' : 'w-1.5 bg-[var(--color-line)]'
              }`}
            />
          ))}
        </div>
      </div>
      <p className="text-center text-[11px] text-[var(--color-muted)] mt-3">
        Illustrative sample data — every real shortlist is backed by a recruiter-verified assessment, not just a
        keyword match.
      </p>
    </div>
  );
}

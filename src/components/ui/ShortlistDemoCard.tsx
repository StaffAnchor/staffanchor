'use client';

import { motion } from 'framer-motion';
import { Check, Minus, ShieldCheck } from 'lucide-react';

// What a client actually receives for each candidate: the role's own requirements,
// reviewed one by one by the recruiter who spoke to them, with the gaps shown.
// Entirely illustrative (no real person or number) and labelled as such.
type Status = 'met' | 'partial';

const REQUIREMENTS: { text: string; status: Status; note: string }[] = [
  { text: 'Sold to enterprise buyers (CXO level)', status: 'met', note: 'Closes with CFOs and heads of IT at large accounts.' },
  { text: 'Owned a quota above ₹50L', status: 'met', note: 'Carries a ₹75L annual number.' },
  { text: 'Outbound, account-based selling', status: 'met', note: 'Opens and runs target accounts herself.' },
  { text: '5+ years in B2B technology sales', status: 'partial', note: '4.5 years in SaaS, earlier years in hardware sales.' },
];

export default function ShortlistDemoCard() {
  const met = REQUIREMENTS.filter((r) => r.status === 'met').length;
  return (
    <div className="relative w-full max-w-md mx-auto lg:mx-0">
      <div className="absolute -inset-6 rounded-[2rem] blur-3xl bg-gradient-to-br from-indigo-500/15 to-emerald-500/10" />
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative bg-white rounded-[1.5rem] border border-[var(--color-line)] shadow-2xl shadow-slate-900/10 p-6"
      >
        <div className="flex items-center justify-between mb-4">
          <span className="eyebrow !mb-0 text-[11px]">Sample shortlist entry</span>
          <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 rounded-full px-2.5 py-1 ring-1 ring-emerald-100">
            <ShieldCheck className="w-3 h-3" /> Confirmed on a recruiter call
          </span>
        </div>

        <div className="mb-4">
          <p className="font-poppins font-semibold text-lg text-[var(--color-ink)] tracking-tight">Enterprise Account Executive</p>
          <p className="text-sm text-[var(--color-muted)]">Cybersecurity · Bengaluru · 6 yrs · 30 days notice</p>
        </div>

        <div className="mb-3 rounded-xl bg-[var(--color-amber-soft)] px-3.5 py-2.5 text-[13px] text-[var(--color-ink)]">
          <span className="font-semibold">
            {met} of {REQUIREMENTS.length} requirements met
          </span>
          <span className="text-[var(--color-amber)]"> · 1 partly met</span>
        </div>

        <ul className="divide-y divide-[var(--color-line)] rounded-xl border border-[var(--color-line)]">
          {REQUIREMENTS.map((r) => (
            <li key={r.text} className="flex items-start gap-3 px-3.5 py-2.5">
              <span
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                  r.status === 'met' ? 'bg-[var(--color-success-soft)] text-[var(--color-success)]' : 'bg-[var(--color-amber-soft)] text-[var(--color-amber)]'
                }`}
              >
                {r.status === 'met' ? <Check className="w-3 h-3" /> : <Minus className="w-3 h-3" />}
              </span>
              <span className="min-w-0">
                <span className="block text-[13px] font-medium text-[var(--color-ink)]">{r.text}</span>
                <span className="block text-[12px] leading-5 text-[var(--color-muted)]">{r.note}</span>
              </span>
            </li>
          ))}
        </ul>

        <p className="mt-4 text-[11px] text-[var(--color-muted-soft)]">
          Illustrative example. Every candidate on your shortlist carries the same review, including what they don&apos;t meet.
        </p>
      </motion.div>
    </div>
  );
}

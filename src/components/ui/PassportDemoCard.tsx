'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

// Three fictional, clearly-labeled sample profiles -- makes the "verified
// data, not a resume" pitch tangible right in the hero instead of asking a
// visitor to imagine it. Auto-cycles every 4.5s; entirely presentational,
// no live data fetch, so this never breaks if the DB is unreachable.
const SAMPLES = [
  {
    name: 'Sample Profile — Enterprise AE',
    role: 'Enterprise Account Executive · SaaS',
    quota: '128% avg. attainment · 3 yrs',
    dealSize: '₹42L avg. deal size',
    notice: '30 days · verified',
    tone: 'from-blue-500/10 to-blue-500/0',
  },
  {
    name: 'Sample Profile — Regional Sales Manager',
    role: 'Regional Sales Manager · BFSI',
    quota: '112% avg. attainment · 4 yrs',
    dealSize: '₹18L avg. deal size',
    notice: '45 days · verified',
    tone: 'from-emerald-500/10 to-emerald-500/0',
  },
  {
    name: 'Sample Profile — Inside Sales / SDR Lead',
    role: 'Inside Sales Team Lead · EdTech',
    quota: '134% avg. attainment · 2 yrs',
    dealSize: '₹4.5L avg. deal size',
    notice: '15 days · verified',
    tone: 'from-violet-500/10 to-violet-500/0',
  },
];

export default function PassportDemoCard() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % SAMPLES.length), 4500);
    return () => clearInterval(t);
  }, []);

  const s = SAMPLES[index];

  return (
    <div className="relative w-full max-w-sm mx-auto lg:mx-0">
      <div className={`absolute -inset-4 bg-gradient-to-br ${s.tone} rounded-3xl blur-2xl transition-colors duration-700`} />
      <div className="relative bg-white rounded-2xl border border-[var(--color-line)] shadow-xl shadow-slate-900/5 p-6 overflow-hidden">
        <div className="flex items-center justify-between mb-4">
          <span className="eyebrow !mb-0 text-[11px]">Sales Passport</span>
          <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600 bg-emerald-50 rounded-full px-2 py-0.5">
            <ShieldCheck className="w-3 h-3" /> Verified
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
            <p className="text-[13px] font-medium text-[var(--color-muted)] mb-0.5">{s.name}</p>
            <p className="text-base font-semibold text-[var(--color-ink)] mb-4">{s.role}</p>

            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-[var(--color-line)]">
              <div>
                <p className="text-[10px] text-[var(--color-muted)] uppercase tracking-wide mb-1">Quota</p>
                <p className="text-[13px] font-semibold text-[var(--color-ink)]">{s.quota}</p>
              </div>
              <div>
                <p className="text-[10px] text-[var(--color-muted)] uppercase tracking-wide mb-1">Deal size</p>
                <p className="text-[13px] font-semibold text-[var(--color-ink)]">{s.dealSize}</p>
              </div>
              <div>
                <p className="text-[10px] text-[var(--color-muted)] uppercase tracking-wide mb-1">Notice</p>
                <p className="text-[13px] font-semibold text-[var(--color-ink)]">{s.notice}</p>
              </div>
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
        Illustrative sample data — every real passport is verified on a recruiter call.
      </p>
    </div>
  );
}

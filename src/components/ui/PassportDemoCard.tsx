'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ShieldCheck, TrendingUp, Wallet, Clock3 } from 'lucide-react';

// Three fictional, clearly-labeled sample profiles -- makes the "verified
// data, not a resume" pitch tangible right in the hero instead of asking a
// visitor to imagine it. Auto-cycles every 4.5s; entirely presentational,
// no live data fetch, so this never breaks if the DB is unreachable.
const SAMPLES = [
  {
    initials: 'EA',
    name: 'Sample Profile — Enterprise AE',
    role: 'Enterprise Account Executive · SaaS',
    attainment: 128,
    years: '3 yrs',
    dealSize: '₹42L avg. deal size',
    notice: '30 days · verified',
    tone: 'from-blue-500 to-indigo-500',
    glow: 'from-blue-500/20 to-indigo-500/0',
  },
  {
    initials: 'RM',
    name: 'Sample Profile — Regional Sales Manager',
    role: 'Regional Sales Manager · BFSI',
    attainment: 112,
    years: '4 yrs',
    dealSize: '₹18L avg. deal size',
    notice: '45 days · verified',
    tone: 'from-emerald-500 to-teal-500',
    glow: 'from-emerald-500/20 to-teal-500/0',
  },
  {
    initials: 'IS',
    name: 'Sample Profile — Inside Sales / SDR Lead',
    role: 'Inside Sales Team Lead · EdTech',
    attainment: 134,
    years: '2 yrs',
    dealSize: '₹4.5L avg. deal size',
    notice: '15 days · verified',
    tone: 'from-violet-500 to-fuchsia-500',
    glow: 'from-violet-500/20 to-fuchsia-500/0',
  },
];

export default function PassportDemoCard() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % SAMPLES.length), 4500);
    return () => clearInterval(t);
  }, []);

  const s = SAMPLES[index];
  const barWidth = Math.min(100, (s.attainment / 140) * 100);

  return (
    <div className="relative w-full max-w-sm mx-auto lg:mx-0">
      <div
        className={`absolute -inset-6 bg-gradient-to-br ${s.glow} rounded-[2rem] blur-3xl transition-colors duration-700`}
      />
      <div className="relative bg-white rounded-[1.75rem] border border-[var(--color-line)] shadow-2xl shadow-slate-900/10 p-6 overflow-hidden">
        <div className="flex items-center justify-between mb-5">
          <span className="eyebrow !mb-0 text-[11px]">Sales Passport</span>
          <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 rounded-full px-2.5 py-1 ring-1 ring-emerald-100">
            <ShieldCheck className="w-3 h-3" /> Recruiter Verified
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
            <div className="flex items-center gap-3 mb-5">
              <div
                className={`flex items-center justify-center w-11 h-11 rounded-2xl bg-gradient-to-br ${s.tone} text-white text-sm font-bold shadow-md shrink-0`}
              >
                {s.initials}
              </div>
              <div className="min-w-0">
                <p className="text-[15px] font-semibold text-[var(--color-ink)] leading-tight truncate">{s.role}</p>
                <p className="text-[12px] text-[var(--color-muted)] leading-tight">{s.years} track record</p>
              </div>
            </div>

            <div className="mb-5">
              <div className="flex items-end justify-between mb-1.5">
                <span className="flex items-center gap-1 text-[11px] font-semibold text-[var(--color-muted)] uppercase tracking-wide">
                  <TrendingUp className="w-3 h-3" /> Quota attainment
                </span>
                <span className="text-lg font-bold text-[var(--color-ink)] leading-none">{s.attainment}%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-[var(--color-mist)] overflow-hidden">
                <motion.div
                  key={`${index}-bar`}
                  initial={{ width: 0 }}
                  animate={{ width: `${barWidth}%` }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className={`h-full rounded-full bg-gradient-to-r ${s.tone}`}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[var(--color-line)]">
              <div className="flex items-center gap-2">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[var(--color-accent-soft)] text-[var(--color-accent)] shrink-0">
                  <Wallet className="w-3.5 h-3.5" />
                </span>
                <div className="min-w-0">
                  <p className="text-[10px] text-[var(--color-muted)] uppercase tracking-wide">Deal size</p>
                  <p className="text-[12.5px] font-semibold text-[var(--color-ink)] truncate">{s.dealSize}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[var(--color-accent-soft)] text-[var(--color-accent)] shrink-0">
                  <Clock3 className="w-3.5 h-3.5" />
                </span>
                <div className="min-w-0">
                  <p className="text-[10px] text-[var(--color-muted)] uppercase tracking-wide">Notice</p>
                  <p className="text-[12.5px] font-semibold text-[var(--color-ink)] truncate">{s.notice}</p>
                </div>
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

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { posthog } from '@/lib/posthog';
import {
  Sparkles,
  Wallet,
  ShieldCheck,
  CheckCircle2,
  Users2,
  Send,
  Trophy,
  Lock,
  Eye,
  Zap,
  Clock3,
  BadgeCheck,
} from 'lucide-react';

// StaffAnchor Sales Circle -- public marketing + application page for the
// external referrer network. Lives on the marketing site (staffanchor.com)
// rather than the internal CRM (clients.staffanchor.com) because this is an
// external-facing opportunity, not a CRM feature -- the CRM only hosts the
// admin panel and the logged-in referrer dashboard after approval.
// Submission posts cross-origin to the CRM's public API route
// (api/referrer-apply on clients.staffanchor.com), which has CORS enabled
// for this origin. Approving an application still happens in the CRM's
// Sales Circle admin tab, which mints the invite and emails a
// clients.staffanchor.com/referrer-signup/[token] set-password link.
const CRM_ORIGIN = 'https://clients.staffanchor.com';

const SECTOR_OPTIONS = [
  'SaaS / B2B Software',
  'Fintech',
  'Consumer / D2C',
  'Healthtech',
  'Edtech',
  'Enterprise Tech',
  'Manufacturing / Industrial',
  'Logistics / Supply Chain',
  'Real Estate / PropTech',
  'Other',
];

// Illustrative only -- the real, currently-active slab table lives in the
// CRM's sales_circle_payout_slabs table and is admin-editable, so this copy
// stays hedged rather than a binding quote.
const PAYOUT_BANDS = [
  { band: 'Up to ₹6L CTC', payout: 'Up to ₹15,000' },
  { band: '₹6L – ₹12L CTC', payout: 'Up to ₹30,000' },
  { band: '₹12L – ₹20L CTC', payout: 'Up to ₹50,000' },
  { band: '₹20L+ CTC', payout: 'Up to ₹75,000' },
];

const HOW_IT_WORKS = [
  {
    icon: Send,
    title: 'Apply & get approved',
    body: 'A short form, reviewed by our team personally. No mass onboarding -- Sales Circle stays a curated, trusted network.',
  },
  {
    icon: Users2,
    title: 'Refer people you vouch for',
    body: 'Browse live client roles (company names revealed to Trusted-tier referrers), or refer someone great even without a specific role in mind.',
  },
  {
    icon: Wallet,
    title: 'Get paid when they join & stay',
    body: 'Once your referral joins and completes 90 days, your payout is calculated against a transparent CTC-band slab, capped at 30% of the fee we\'re paid -- no negotiation, no chasing.',
  },
];

const VALUE_PROPS = [
  {
    icon: Zap,
    title: 'Zero recruiting work',
    body: "No sourcing, no screening calls, no selling the role. You already know the person -- that's the entire job.",
  },
  {
    icon: Eye,
    title: 'Full visibility, always',
    body: 'Track every referral’s stage in real time -- submitted, interviewing, offered, joined -- from your own dashboard.',
  },
  {
    icon: Clock3,
    title: 'Fast, transparent payouts',
    body: "Payout is set per CTC band and capped at 30% of the fee we're actually paid by the client -- you'll know the ceiling before you refer, and the exact number the moment you do.",
  },
  {
    icon: Lock,
    title: 'Your data, protected',
    body: 'PAN and bank details are only ever collected when a payout is actually due, and can be deleted on request.',
  },
];

const FAQ = [
  {
    q: 'Do I need to be a recruiter?',
    a: 'No. Sales Circle is built for people with a strong professional network -- sales leaders, founders, operators -- not agency recruiters. If you know great sales talent, that’s enough.',
  },
  {
    q: 'How much can I earn?',
    a: 'Payouts are set per CTC band (see the table above) and capped at 30% of the placement fee StaffAnchor actually receives from the client. The exact number is confirmed the moment you submit a referral.',
  },
  {
    q: 'When do I actually get paid?',
    a: 'After your referral has joined and completed 90 days, and StaffAnchor has been paid by the client -- whichever comes later. You’ll see the payout move from Pending to Eligible to Paid in your dashboard.',
  },
  {
    q: 'What’s the difference between Member and Trusted tier?',
    a: 'Every approved referrer starts as a Member. Trusted-tier referrers (earned through consistent, quality referrals) get to see the client company name on roles before referring -- Members see a blind brief until they submit.',
  },
  {
    q: 'What if I don’t have a specific role in mind?',
    a: 'You can still refer someone great against our general bench -- our team will match them to the right open mandate.',
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { margin: '-80px', once: true },
};

export default function SalesCirclePage() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedSectors, setSelectedSectors] = useState<string[]>([]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    const form = new FormData(e.currentTarget);
    selectedSectors.forEach((s) => form.append('sectors', s));
    try {
      const res = await fetch(`${CRM_ORIGIN}/api/referrer-apply`, { method: 'POST', body: form });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? 'Something went wrong. Please try again.');
        setSubmitting(false);
        posthog.capture('sales_circle_application_error', { reason: data.error ?? 'unknown' });
        return;
      }
      setSubmitted(true);
      posthog.capture('sales_circle_application_submitted', { sectors: selectedSectors });
    } catch {
      setError('Something went wrong. Please try again.');
      setSubmitting(false);
      posthog.capture('sales_circle_application_error', { reason: 'network_error' });
    }
  }

  function toggleSector(sector: string) {
    setSelectedSectors((prev) => (prev.includes(sector) ? prev.filter((s) => s !== sector) : [...prev, sector]));
  }

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4 bg-[var(--color-mist)]">
        <div className="max-w-md w-full text-center bg-white rounded-2xl border border-[var(--color-line)] p-8 shadow-xl shadow-black/5">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-success-soft)]">
            <CheckCircle2 className="h-7 w-7 text-[var(--color-success)]" strokeWidth={2.2} />
          </div>
          <h1 className="heading-lg !text-xl mb-2">Application received</h1>
          <p className="text-sm text-[var(--color-muted)] leading-relaxed">
            Thanks for applying to StaffAnchor Sales Circle. We review every application personally -- you&apos;ll
            hear from us by email once it&apos;s been reviewed.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--color-ink)] text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-[10%] h-96 w-96 rounded-full bg-[var(--color-accent)]/25 blur-[110px]" />
          <div className="absolute -top-24 right-[5%] h-80 w-80 rounded-full bg-indigo-500/20 blur-[100px]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 pt-20 pb-28 text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-300 backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5" strokeWidth={2.5} />
            StaffAnchor Sales Circle -- by application only
          </div>
          <h1 className="mt-5 font-poppins font-semibold tracking-tight text-3xl sm:text-5xl">
            Your network is worth more than a LinkedIn post
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed text-white/70">
            Know a great sales professional looking for their next move? Introduce them to StaffAnchor and earn a
            real payout the day they join -- no recruiting, no cold outreach, no selling the role.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-2.5">
            <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.05] px-3.5 py-1.5 text-xs font-medium text-white/85 backdrop-blur-sm">
              <Wallet className="h-3.5 w-3.5 text-emerald-400" strokeWidth={2.2} />
              Up to ₹75,000 per placement
            </div>
            <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.05] px-3.5 py-1.5 text-xs font-medium text-white/85 backdrop-blur-sm">
              <Zap className="h-3.5 w-3.5 text-indigo-300" strokeWidth={2.2} />
              Zero recruiting work
            </div>
            <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.05] px-3.5 py-1.5 text-xs font-medium text-white/85 backdrop-blur-sm">
              <BadgeCheck className="h-3.5 w-3.5 text-amber-300" strokeWidth={2.2} />
              Curated, trusted network
            </div>
          </div>
          <a
            href="#apply"
            onClick={() => posthog.capture('sales_circle_apply_cta_clicked', { location: 'hero' })}
            className="mt-10 inline-flex items-center gap-2 rounded-xl bg-[var(--color-accent)] text-white text-sm font-semibold px-7 py-3.5 shadow-lg shadow-indigo-600/25 transition-all duration-150 hover:bg-white hover:text-[var(--color-ink)] hover:-translate-y-0.5"
          >
            Apply to join
            <Send className="h-4 w-4" strokeWidth={2.2} />
          </a>
        </div>
      </section>

      {/* How it works */}
      <section className="relative max-w-5xl mx-auto px-4 sm:px-6 -mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {HOW_IT_WORKS.map((step, i) => (
            <motion.div
              key={step.title}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-[var(--color-line)] bg-white p-6 shadow-xl shadow-black/[0.06]"
            >
              <div className="flex items-center gap-2.5 mb-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                  <step.icon className="h-4.5 w-4.5" strokeWidth={2} />
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-wide text-[var(--color-muted-soft)]">
                  Step {i + 1}
                </span>
              </div>
              <h3 className="text-sm font-semibold text-[var(--color-ink)]">{step.title}</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-[var(--color-muted)]">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Value props */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeUp} className="text-center mb-10">
            <span className="eyebrow mb-3 justify-center">Why referrers stick around</span>
            <h2 className="heading-lg">A real, transparent side income</h2>
            <p className="mt-2 text-sm text-[var(--color-muted)] max-w-xl mx-auto">
              Not a referral bonus buried in fine print -- built around the network you already have.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {VALUE_PROPS.map((v, i) => (
              <motion.div
                key={v.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="flex items-start gap-3.5 rounded-2xl border border-[var(--color-line)] bg-white p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                  <v.icon className="h-5 w-5" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[var(--color-ink)]">{v.title}</h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-[var(--color-muted)]">{v.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Payout table */}
      <section className="bg-[var(--color-ink)] text-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeUp} className="text-center mb-8">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-300 mb-3">
              <Trophy className="h-3.5 w-3.5" strokeWidth={2.5} />
              Transparent payouts
            </div>
            <h2 className="font-poppins font-semibold text-2xl tracking-tight">What a placement is worth</h2>
            <p className="mt-2 text-sm text-white/60 max-w-lg mx-auto">
              Illustrative slabs by the candidate&apos;s CTC, capped at 30% of the placement fee we actually receive
              -- the exact, currently-active payout is confirmed the moment you submit a referral.
            </p>
          </motion.div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] overflow-hidden">
            {PAYOUT_BANDS.map((b, i) => (
              <div
                key={b.band}
                className={`flex items-center justify-between px-6 py-4 text-sm ${
                  i !== PAYOUT_BANDS.length - 1 ? 'border-b border-white/10' : ''
                }`}
              >
                <span className="text-white/70">{b.band}</span>
                <span className="font-semibold text-white">{b.payout}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-[11px] text-white/40">
            Payout = the applicable slab, capped at 30% of the placement fee StaffAnchor receives -- paid after your
            referral joins, completes 90 days, and the client has paid StaffAnchor.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-[var(--color-mist)]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <motion.h2 {...fadeUp} className="heading-lg text-center mb-8">
            Questions, answered
          </motion.h2>
          <div className="space-y-2.5">
            {FAQ.map((item) => (
              <details
                key={item.q}
                className="group rounded-xl border border-[var(--color-line)] bg-white px-4 py-3.5 open:shadow-md open:shadow-black/[0.04] transition-shadow"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium text-[var(--color-ink)]">
                  {item.q}
                  <span className="ml-3 shrink-0 text-[var(--color-muted-soft)] transition-transform duration-150 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-2.5 text-[13px] leading-relaxed text-[var(--color-muted)]">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="apply" className="relative max-w-lg mx-auto px-4 sm:px-6 py-20 scroll-mt-8">
        <div className="text-center mb-6">
          <h2 className="heading-lg">Apply to join Sales Circle</h2>
          <p className="mt-2 text-sm text-[var(--color-muted)]">
            Takes about two minutes. Every application is reviewed by our team personally.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="rounded-2xl border border-[var(--color-line)] bg-white p-6 shadow-xl shadow-black/[0.04] space-y-4">
          {error && (
            <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-2.5 text-xs font-medium text-red-600">
              {error}
            </div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <Field label="Full name" name="fullName" required />
            </div>
            <Field label="Phone" name="phone" type="tel" required />
            <Field label="Email" name="email" type="email" required />
            <div className="sm:col-span-2">
              <Field label="LinkedIn URL" name="linkedinUrl" type="url" required />
            </div>
            <Field label="Current company" name="currentCompany" required />
            <Field label="Designation" name="designation" required />
            <Field label="Years of experience" name="yearsOfExperience" type="number" step="0.5" required />
            <Field label="City" name="city" required />
          </div>
          <div>
            <label className="block text-xs font-medium text-[var(--color-muted)] mb-1.5">Sectors you know well</label>
            <div className="flex flex-wrap gap-2">
              {SECTOR_OPTIONS.map((s) => (
                <button
                  type="button"
                  key={s}
                  onClick={() => toggleSector(s)}
                  className={`text-xs font-medium px-3.5 py-1.5 rounded-full border transition-all duration-150 ${
                    selectedSectors.includes(s)
                      ? 'bg-[var(--color-accent)] text-white border-[var(--color-accent)]'
                      : 'bg-white text-[var(--color-muted)] border-[var(--color-line)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
          <label className="flex items-start gap-2.5 text-xs text-[var(--color-muted)] leading-relaxed pt-1 cursor-pointer">
            <input type="checkbox" name="tosAccepted" value="true" required className="mt-0.5 h-4 w-4 rounded border-[var(--color-line)] text-[var(--color-accent)] focus:ring-[var(--color-accent)]/30" />
            <span className="flex items-start gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 shrink-0 mt-0.5 text-[var(--color-muted-soft)]" />
              I agree to StaffAnchor Sales Circle&apos;s{' '}
              <a href={`${CRM_ORIGIN}/sales-circle-terms`} target="_blank" rel="noreferrer" className="underline hover:text-[var(--color-accent)]">
                Terms &amp; Conditions
              </a>
              .
            </span>
          </label>
          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-xl bg-[var(--color-ink)] text-white text-sm font-semibold py-3.5 shadow-lg transition-all duration-150 hover:bg-[var(--color-accent)] hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 disabled:hover:translate-y-0"
          >
            {submitting ? 'Submitting...' : 'Apply to join'}
          </button>
        </form>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required,
  step,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  step?: string;
}) {
  return (
    <div>
      <label className="block text-xs font-medium text-[var(--color-muted)] mb-1.5">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        step={step}
        className="w-full rounded-xl border border-[var(--color-line)] bg-white px-3.5 py-2.5 text-sm text-[var(--color-ink)] placeholder:text-[var(--color-muted-soft)] shadow-sm transition duration-150 focus:border-[var(--color-accent)] focus:outline-none focus:ring-4 focus:ring-[var(--color-accent)]/10"
      />
    </div>
  );
}

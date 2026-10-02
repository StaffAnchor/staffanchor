'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { posthog } from '@/lib/posthog';
import { employerServices } from '@/data/employerServices';

// The four employer services as cards. "home" shows the one-liners (the
// "How we work with you" section); "hub" shows the longer descriptions on
// /employers and labels the two supporting services "Also available".
export default function ServiceCards({ variant, location }: { variant: 'home' | 'hub'; location: string }) {
  const track = (service: string) => posthog.capture('employer_service_card_clicked', { service, location });
  const large = employerServices.filter((s) => s.featured);
  const small = employerServices.filter((s) => !s.featured);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {large.map((s, i) => (
          <motion.div
            key={s.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Link
              href={s.href}
              onClick={() => track(s.title)}
              className="group flex h-full flex-col rounded-2xl border border-[var(--color-line)] bg-white p-8 lg:p-10 transition-all duration-300 hover:border-[var(--color-ink)] hover:shadow-lg"
            >
              <span className="text-xs font-mono text-[var(--color-muted)] mb-4 block">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="font-poppins font-semibold text-2xl text-[var(--color-ink)] mb-3 tracking-tight">{s.title}</h3>
              <p className="text-[var(--color-muted)] leading-relaxed flex-1">{variant === 'home' ? s.oneLiner : s.description}</p>
              <span className="mt-6 inline-flex items-center font-semibold text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors">
                Explore {s.title.toLowerCase()} <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </span>
            </Link>
          </motion.div>
        ))}
      </div>

      {variant === 'hub' && (
        <p className="pt-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-muted-soft)]">Also available</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {small.map((s, i) => (
          <motion.div
            key={s.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-mist)] p-6 lg:p-7"
          >
            <h3 className="font-poppins font-semibold text-lg text-[var(--color-ink)] mb-2 tracking-tight">{s.title}</h3>
            <p className="text-sm text-[var(--color-muted)] leading-relaxed">{variant === 'home' ? s.oneLiner : s.description}</p>
            <Link
              href={s.href}
              onClick={() => track(s.title)}
              className="mt-4 inline-block text-sm font-semibold text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] underline-offset-4 hover:underline"
            >
              Learn more
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

'use client';

import { motion } from 'framer-motion';
import { b2bDomains, b2cDomains } from '@/data/salesDomains';

interface SalesDomainsGridProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
}

export default function SalesDomainsGrid({
  eyebrow = 'Coverage',
  title = 'Sales domains we cover',
  subtitle,
}: SalesDomainsGridProps) {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow mb-3 block">{eyebrow}</span>
          <h2 className="heading-lg mb-3">{title}</h2>
          {subtitle && <p className="text-lg text-[var(--color-muted)]">{subtitle}</p>}
        </motion.div>

        {/* B2B Sales — primary. This is the core of what StaffAnchor does, so it
            leads at full width instead of splitting the section 50/50 with B2C. */}
        <div className="mb-10">
          <p className="text-xs font-mono uppercase tracking-wider text-[var(--color-accent)] mb-4 font-semibold">B2B Sales — core focus</p>
          <div className="flex flex-wrap gap-2.5">
            {b2bDomains.map((d) => (
              <span
                key={d}
                className="px-4 py-2 rounded-full border border-[var(--color-line)] text-sm font-medium text-[var(--color-ink)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors duration-200"
              >
                {d}
              </span>
            ))}
          </div>
        </div>

        {/* B2C Sales — secondary, presented as additional coverage rather than
            a co-equal column. */}
        <div className="pt-6 border-t border-[var(--color-line)]">
          <p className="text-xs font-mono uppercase tracking-wider text-[var(--color-muted)] mb-4">We also cover B2C Sales</p>
          <div className="flex flex-wrap gap-2.5">
            {b2cDomains.map((d) => (
              <span
                key={d}
                className="px-4 py-2 rounded-full border border-[var(--color-line)] text-sm font-medium text-[var(--color-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors duration-200"
              >
                {d}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

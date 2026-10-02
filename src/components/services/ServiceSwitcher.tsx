'use client';

import Link from 'next/link';
import { posthog } from '@/lib/posthog';
import { employerServices } from '@/data/employerServices';

// A pill bar of every employer service, with the current one highlighted, so a
// visitor reading one service can jump to another without going back to the hub.
export function ServiceSwitcher({ currentSlug }: { currentSlug: string }) {
  return (
    <div className="bg-white border-b border-[var(--color-line)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav aria-label="Employer services" className="flex items-center gap-3 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <span className="shrink-0 text-xs font-semibold uppercase tracking-wider text-[var(--color-muted-soft)]">Services</span>
          {employerServices.map((s) => {
            const active = s.slug === currentSlug;
            return (
              <Link
                key={s.slug}
                href={s.href}
                aria-current={active ? 'page' : undefined}
                onClick={() => posthog.capture('employer_service_switched', { from: currentSlug, to: s.slug })}
                className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                  active
                    ? 'border-[var(--color-ink)] bg-[var(--color-ink)] text-white'
                    : 'border-[var(--color-line)] bg-white text-[var(--color-muted)] hover:border-[var(--color-ink)] hover:text-[var(--color-ink)]'
                }`}
              >
                {s.shortTitle}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

// The other services as cards at the foot of a service page.
export function OtherServices({ currentSlug }: { currentSlug: string }) {
  const others = employerServices.filter((s) => s.slug !== currentSlug);
  return (
    <section className="section-padding bg-white border-t border-[var(--color-line)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <span className="eyebrow mb-3 block">More ways we work with you</span>
          <h2 className="heading-lg">Explore our other services</h2>
        </div>
        <div className={`grid grid-cols-1 sm:grid-cols-2 ${others.length > 4 ? 'lg:grid-cols-3' : 'lg:grid-cols-4'} gap-6`}>
          {others.map((s) => (
            <Link
              key={s.slug}
              href={s.href}
              onClick={() => posthog.capture('employer_service_switched', { from: currentSlug, to: s.slug })}
              className="group flex flex-col rounded-2xl border border-[var(--color-line)] bg-[var(--color-mist)] p-6 transition-all duration-300 hover:border-[var(--color-ink)] hover:bg-white hover:shadow-md"
            >
              <h3 className="font-poppins font-semibold text-lg text-[var(--color-ink)] mb-2 tracking-tight">{s.title}</h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed flex-1">{s.oneLiner}</p>
              <span className="mt-4 text-sm font-semibold text-[var(--color-accent)] group-hover:text-[var(--color-accent-dark)]">
                Learn more <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

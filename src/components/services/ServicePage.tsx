'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import HeroSection from '@/components/ui/HeroSection';
import RecruiterInsightsCard from '@/components/ui/RecruiterInsightsCard';
import EmployerForm from '@/components/ui/EmployerForm';
import ServiceEnquiryForm from '@/components/ui/ServiceEnquiryForm';
import { submitEmployerForm } from '@/utils/mandates';
import type { Block, ServicePageConfig } from '@/data/servicePages';

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5 },
};

function Heading({ eyebrow, title, intro }: { eyebrow?: string; title: string; intro?: string }) {
  return (
    <motion.div className="mb-12 max-w-2xl" {...fade}>
      {eyebrow && <span className="eyebrow mb-3 block">{eyebrow}</span>}
      <h2 className="heading-lg">{title}</h2>
      {intro && <p className="mt-3 text-[var(--color-muted)] leading-relaxed">{intro}</p>}
    </motion.div>
  );
}

function BlockView({ block, bg }: { block: Block; bg: string }) {
  const wrap = (children: React.ReactNode) => (
    <section className={`section-padding ${bg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );

  switch (block.type) {
    case 'cards':
      return wrap(
        <>
          <Heading eyebrow={block.eyebrow} title={block.title} intro={block.intro} />
          <div className={`grid grid-cols-1 md:grid-cols-2 ${block.items.length > 3 ? 'lg:grid-cols-4' : ''} gap-6`}>
            {block.items.map((it, i) => (
              <motion.div
                key={it.title}
                {...fade}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-[var(--color-line)] bg-white p-7 h-full"
              >
                <h3 className="font-poppins font-semibold text-lg text-[var(--color-ink)] mb-2 tracking-tight">{it.title}</h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">{it.text}</p>
              </motion.div>
            ))}
          </div>
        </>
      );
    case 'bullets':
      return wrap(
        <>
          <Heading eyebrow={block.eyebrow} title={block.title} intro={block.intro} />
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5 max-w-4xl">
            {block.items.map((it) => (
              <li key={it} className="anchor-line py-1 text-[var(--color-ink)] leading-relaxed">{it}</li>
            ))}
          </ul>
        </>
      );
    case 'steps':
      return wrap(
        <>
          <Heading eyebrow={block.eyebrow} title={block.title} intro={block.intro} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {block.steps.map((s, i) => (
              <motion.div
                key={s.title}
                {...fade}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-[var(--color-line)] bg-white p-7 h-full"
              >
                <span className="text-xs font-mono text-[var(--color-muted)] mb-4 block">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="font-poppins font-semibold text-lg text-[var(--color-ink)] mb-2 tracking-tight">{s.title}</h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">{s.text}</p>
              </motion.div>
            ))}
          </div>
        </>
      );
    case 'options':
      return wrap(
        <>
          <Heading eyebrow={block.eyebrow} title={block.title} intro={block.intro} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {block.options.map((o) => (
              <div key={o.name} className={`rounded-2xl border p-8 ${o.comingSoon ? 'border-dashed border-[var(--color-line)] bg-[var(--color-mist)]' : 'border-[var(--color-line)] bg-white'}`}>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-poppins font-semibold text-xl text-[var(--color-ink)] tracking-tight">{o.name}</h3>
                  {o.comingSoon && (
                    <span className="shrink-0 rounded-full bg-[var(--color-amber-soft)] px-3 py-1 text-xs font-semibold text-[var(--color-amber)]">Coming soon</span>
                  )}
                </div>
                <p className="mt-4 text-xs font-mono uppercase tracking-wider text-[var(--color-muted)]">Best for</p>
                <p className="mt-1 text-[var(--color-ink)]">{o.bestFor}</p>
                <p className="mt-4 text-xs font-mono uppercase tracking-wider text-[var(--color-muted)]">How it works</p>
                <p className="mt-1 text-[var(--color-muted)] leading-relaxed">{o.how}</p>
              </div>
            ))}
          </div>
        </>
      );
    case 'engagement':
      return wrap(
        <div className="max-w-3xl">
          <motion.div {...fade}>
            {block.eyebrow && <span className="eyebrow mb-3 block">{block.eyebrow}</span>}
            <h2 className="heading-lg mb-4">{block.title}</h2>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed">{block.text}</p>
            {block.points && (
              <ul className="mt-6 space-y-3">
                {block.points.map((p) => (
                  <li key={p} className="anchor-line py-1 text-[var(--color-ink)]">{p}</li>
                ))}
              </ul>
            )}
          </motion.div>
        </div>
      );
    case 'trainer':
      return wrap(
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-10 items-center max-w-4xl">
          <div className="w-36 h-36 lg:w-44 lg:h-44 rounded-2xl overflow-hidden border border-[var(--color-line)]">
            <Image src="/gagan_sir_profile_pic.jpg" alt="Gagan Sharma, founder of StaffAnchor" width={176} height={176} className="w-full h-full object-cover" />
          </div>
          <motion.div {...fade}>
            {block.eyebrow && <span className="eyebrow mb-3 block">{block.eyebrow}</span>}
            <h2 className="heading-lg mb-4">{block.title}</h2>
            <p className="text-[var(--color-muted)] leading-relaxed text-lg">{block.text}</p>
          </motion.div>
        </div>
      );
    case 'sample':
      return wrap(
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Heading eyebrow={block.eyebrow} title={block.title} intro={block.intro} />
          <div className="max-w-md w-full mx-auto lg:mx-0">
            <RecruiterInsightsCard />
          </div>
        </div>
      );
    case 'faq':
      return wrap(
        <>
          <Heading title={block.title} />
          <div className="max-w-3xl divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
            {block.items.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-poppins font-semibold text-lg text-[var(--color-ink)]">
                  {f.q}
                  <span className="shrink-0 text-2xl text-[var(--color-muted)] transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-[var(--color-muted)] leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </>
      );
  }
}

export default function ServicePage({ config }: { config: ServicePageConfig }) {
  return (
    <>
      <HeroSection
        eyebrow={config.eyebrow}
        headline={config.h1}
        accentText={config.accent}
        subtext={config.sub}
        backgroundPattern={true}
        visual={config.showHeroSample ? <RecruiterInsightsCard /> : undefined}
      >
        <a
          href="#get-started"
          className="inline-flex items-center justify-center px-7 py-3.5 bg-[var(--color-ink)] text-white font-semibold rounded-xl hover:bg-[var(--color-accent)] transition-colors duration-300"
        >
          {config.cta} →
        </a>
      </HeroSection>

      {config.blocks.map((block, i) => (
        <BlockView key={`${block.type}-${i}`} block={block} bg={i % 2 === 0 ? 'bg-white' : 'bg-[var(--color-mist)]'} />
      ))}

      <section id="get-started" className="section-padding bg-[var(--color-mist)] scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {config.form.kind === 'mandate' ? (
            <EmployerForm
              idPrefix={`svc-${config.slug}`}
              title={config.form.title}
              subtitle={config.form.subtitle}
              submitText={config.form.submit}
              defaultService={config.form.service}
              onSubmit={submitEmployerForm}
            />
          ) : (
            <ServiceEnquiryForm
              service={config.form.service}
              title={config.form.title}
              subtitle={config.form.subtitle}
              submitText={config.form.submit}
              messageLabel={config.form.messageLabel}
            />
          )}
        </div>
      </section>

      <section className="py-12 bg-white border-t border-[var(--color-line)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href={config.also.href} className="font-semibold text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] underline-offset-4 hover:underline">
            {config.also.label} →
          </Link>
          <p className="mt-3 text-sm text-[var(--color-muted)]">
            <Link href="/employers" className="underline-offset-4 hover:underline">All employer services</Link>
          </p>
        </div>
      </section>
    </>
  );
}

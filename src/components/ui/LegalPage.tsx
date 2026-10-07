import type { ReactNode } from 'react';

export type LegalSection = { title: string; body: ReactNode };

// Plain, readable layout shared by the Privacy Policy and Terms pages.
export default function LegalPage({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: ReactNode;
  sections: LegalSection[];
}) {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="eyebrow mb-3 block">Legal</span>
        <h1 className="heading-lg mb-2">{title}</h1>
        <p className="text-sm text-[var(--color-muted)] mb-8">Last updated: {updated}</p>
        <div className="text-lg text-[var(--color-muted)] leading-relaxed space-y-5 mb-10">{intro}</div>
        <div className="space-y-9">
          {sections.map((s, i) => (
            <div key={s.title}>
              <h2 className="text-xl font-semibold text-[var(--color-ink,#0f172a)] mb-3">
                {i + 1}. {s.title}
              </h2>
              <div className="text-base text-[var(--color-muted)] leading-relaxed space-y-3">{s.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

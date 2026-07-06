export interface ServiceData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  content: string[];
  sections: ServiceContentSection[];
}

interface ServiceContentSection {
  heading: string;
  items?: string[];
  content?: string;
  subsections?: {
    title?: string;
    content: string;
  }[];
}

interface ServiceSectionProps {
  service: ServiceData;
  index: number;
}

export default function ServiceSection({ service, index }: ServiceSectionProps) {
  return (
    <div id={service.id} className="scroll-mt-20">
      {/* Title & Subtitle */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-4 bg-[var(--color-ink)]">
            <span className="text-white font-mono font-semibold text-base">
              {(index + 1).toString().padStart(2, '0')}
            </span>
          </div>
          <h2 className="font-poppins font-semibold text-3xl md:text-4xl text-[var(--color-ink)] tracking-tight">
            {service.title}
          </h2>
        </div>
        <p className="text-xl text-[var(--color-accent)] font-medium ml-16">
          {service.subtitle}
        </p>
      </div>

      {/* Main Description */}
      <div className="rounded-2xl p-8 lg:p-10 mb-8 bg-[var(--color-mist)] border border-[var(--color-line)]">
        <p className="text-xl text-[var(--color-ink)] font-medium mb-4">
          {service.description}
        </p>
        {service.content.map((paragraph, idx) => (
          <p key={idx} className="text-lg text-[var(--color-muted)] leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Content Sections */}
      <div className="space-y-6">
        {service.sections.map((section, sectionIdx) => (
          <div key={sectionIdx} className="bg-white rounded-2xl border border-[var(--color-line)] p-6 lg:p-8">
            <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-4">
              {section.heading}
            </h3>

            {/* Bullet Items */}
            {section.items && (
              <ul className="space-y-3">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start space-x-3">
                    <svg
                      className="w-5 h-5 mt-0.5 shrink-0 text-[var(--color-accent)]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Content String */}
            {section.content && (
              <p className="text-[var(--color-muted)] leading-relaxed">
                {section.content}
              </p>
            )}

            {/* Subsections */}
            {section.subsections && (
              <div className="space-y-4 mt-4">
                {section.subsections.map((subsection, subIdx) => (
                  <div key={subIdx}>
                    {subsection.title && (
                      <p className="font-semibold text-[var(--color-ink)] mb-2">
                        {subsection.title}
                      </p>
                    )}
                    <p className="text-[var(--color-muted)] leading-relaxed">
                      {subsection.content}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

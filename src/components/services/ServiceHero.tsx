interface ServiceHeroProps {
  title: string;
  description: string;
  subtitle?: string;
}

export default function ServiceHero({ title, description, subtitle }: ServiceHeroProps) {
  return (
    <section className="relative bg-[var(--color-ink)] text-white py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.4]" style={{
        backgroundImage: `radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)`,
        backgroundSize: '28px 28px',
        maskImage: 'linear-gradient(to bottom, black, transparent 85%)',
      }} />
      <div className="absolute -top-24 right-0 w-[28rem] h-[28rem] rounded-full opacity-20 blur-3xl" style={{ background: 'var(--color-accent)' }} />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-poppins font-semibold text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight">
          {title}
        </h1>

        <p className="text-xl md:text-2xl text-white/70 leading-relaxed mb-6 max-w-4xl mx-auto">
          {description}
        </p>

        {subtitle && (
          <p className="text-lg md:text-xl text-white/50 leading-relaxed max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

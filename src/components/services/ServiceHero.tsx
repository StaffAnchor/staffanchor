interface ServiceHeroProps {
  title: string;
  description: string;
  subtitle?: string;
}

export default function ServiceHero({ title, description, subtitle }: ServiceHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 text-white py-20 lg:py-28">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-poppins font-light text-4xl md:text-5xl lg:text-6xl mb-6 uppercase tracking-wide">
          {title}
        </h1>
        
        <p className="text-xl md:text-2xl text-blue-100 leading-relaxed mb-6 max-w-4xl mx-auto">
          {description}
        </p>
        
        {subtitle && (
          <p className="text-lg md:text-xl text-blue-200 leading-relaxed max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';

interface TestimonialProps {
  quote: string;
  title: string;
  company?: string;
}

interface TestimonialCardProps {
  testimonials: TestimonialProps[];
  title?: string;
}

const TestimonialCard = ({ testimonials, title = "Client Voices" }: TestimonialCardProps) => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="eyebrow mb-3 block">Don&apos;t just take our word for it</span>
            <h2 className="heading-lg">{title}</h2>
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[var(--color-mist)] rounded-2xl p-8 border border-[var(--color-line)] relative"
            >
              <svg className="w-8 h-8 text-[var(--color-accent)] opacity-30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <blockquote className="text-[var(--color-ink)] text-lg leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              <div className="flex items-center space-x-3 pt-4 border-t border-[var(--color-line)]">
                <div className="w-10 h-10 bg-[var(--color-ink)] rounded-full flex items-center justify-center text-white text-xs font-semibold">
                  {testimonial.title.slice(0, 1)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-[var(--color-ink)]">
                    {testimonial.title}
                  </div>
                  {testimonial.company && (
                    <div className="text-sm text-[var(--color-muted)]">{testimonial.company}</div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCard;

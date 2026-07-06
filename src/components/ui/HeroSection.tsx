'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface HeroSectionProps {
  headline: string;
  subtext?: string;
  specialization?: boolean;
  extra?: boolean;
  eyebrow?: string;
  children?: ReactNode;
  backgroundPattern?: boolean;
  centered?: boolean;
}

const HeroSection = ({
  headline,
  subtext,
  extra,
  eyebrow,
  children,
  backgroundPattern = false,
  centered = false
}: HeroSectionProps) => {
  return (
    <section className={`relative py-24 lg:py-32 overflow-hidden ${backgroundPattern ? 'bg-[var(--color-mist)]' : 'bg-white'}`}>
      {/* Minimal dot-grid texture */}
      {backgroundPattern && (
        <div className="absolute inset-0 opacity-[0.4]" style={{
          backgroundImage: `radial-gradient(var(--color-line) 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
          maskImage: 'linear-gradient(to bottom, black, transparent 85%)',
        }} />
      )}

      {/* Soft accent glow */}
      {backgroundPattern && (
        <div className="absolute -top-32 right-0 w-[32rem] h-[32rem] rounded-full opacity-[0.08] blur-3xl"
          style={{ background: 'var(--color-accent)' }} />
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`${centered ? 'text-center mx-auto' : ''} max-w-3xl`}>
          {eyebrow && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`eyebrow mb-6 ${centered ? 'justify-center' : ''}`}
            >
              {eyebrow}
            </motion.div>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="heading-xl"
          >
            {headline}
          </motion.h1>

          {subtext && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-6 text-lg md:text-xl text-[var(--color-muted)] leading-relaxed"
            >
              {subtext}
            </motion.p>
          )}

          {extra && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-3 text-lg md:text-xl text-[var(--color-muted)] leading-relaxed"
            >
              We blend market intelligence, technology and human judgement to help companies hire leaders who drive outcomes.
            </motion.p>
          )}

          {children && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10"
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

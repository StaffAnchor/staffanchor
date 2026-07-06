'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactNode } from 'react';

interface PracticeCardProps {
  title: string;
  description: string;
  href: string;
  icon?: ReactNode;
  features?: string[];
}

const PracticeCard = ({ title, description, href, icon, features }: PracticeCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6 }}
      className="bg-white rounded-2xl border border-[var(--color-line)] p-7
             transition-colors duration-300 group cursor-pointer
             hover:border-[var(--color-ink)] relative h-full flex flex-col"
    >
      {/* Icon */}
      {icon && (
        <div className="w-11 h-11 bg-[var(--color-ink)] group-hover:bg-[var(--color-accent)] rounded-xl flex items-center justify-center mb-5 transition-colors duration-300">
          {icon}
        </div>
      )}

      {/* Title */}
      <h3 className="font-poppins font-semibold text-lg text-[var(--color-ink)] mb-2.5 tracking-tight">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
        {description}
      </p>

      {/* Features */}
      {features && features.length > 0 && (
        <div className="space-y-1.5 mb-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-2 text-sm text-[var(--color-muted)]">
              <svg className="w-4 h-4 text-[var(--color-accent)] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      )}

      {/* CTA */}
      <div className="mt-auto pt-3">
        <Link href={href} className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors duration-200">
          <span>Explore</span>
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

export default PracticeCard;

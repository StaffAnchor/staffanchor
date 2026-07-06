'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface Metric {
  value: string;
  label: string;
  description?: string;
}

interface MetricsStripProps {
  metrics: Metric[];
  background?: 'white' | 'gray' | 'blue';
  centered?: boolean;
}

// Counter component for animated numbers
const AnimatedCounter = ({ value, isInView, delay = 0 }: { value: string; isInView: boolean; delay?: number }) => {
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView) {
      setDisplayValue("0");
      return;
    }

    const numericValue = parseFloat(value.replace(/[^\d.]/g, ''));
    const suffix = value.replace(/[\d.]/g, '');

    if (isNaN(numericValue)) {
      setDisplayValue(value);
      return;
    }

    const duration = 1600;
    const steps = 50;
    const stepValue = numericValue / steps;
    const stepDuration = duration / steps;

    let currentValue = 0;
    let stepCount = 0;

    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        stepCount++;
        currentValue += stepValue;

        if (stepCount >= steps) {
          setDisplayValue(value);
          clearInterval(interval);
        } else {
          const formattedValue = Math.floor(currentValue);
          setDisplayValue(`${formattedValue}${suffix}`);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [isInView, value, delay]);

  return <span>{displayValue}</span>;
};

const MetricsStrip = ({ metrics, background = 'gray', centered = true }: MetricsStripProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  const isDark = background === 'blue';

  return (
    <section ref={ref} className={`py-16 border-y border-[var(--color-line)] ${isDark ? 'bg-[var(--color-ink)]' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-2 md:grid-cols-4 ${centered ? 'text-center' : ''}`}>
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`px-4 md:px-6 ${index !== 0 ? 'md:border-l' : ''} ${isDark ? 'border-white/10' : 'border-[var(--color-line)]'}`}
            >
              <div className={`text-3xl md:text-5xl font-semibold font-poppins tracking-tight mb-2 ${isDark ? 'text-white' : 'text-[var(--color-ink)]'}`}>
                <AnimatedCounter value={metric.value} isInView={isInView} delay={index * 150} />
              </div>
              <div className={`text-xs md:text-sm font-semibold uppercase tracking-wider ${isDark ? 'text-white/80' : 'text-[var(--color-ink)]'}`}>
                {metric.label}
              </div>
              {metric.description && (
                <div className={`text-xs mt-1 ${isDark ? 'text-white/50' : 'text-[var(--color-muted)]'}`}>
                  {metric.description}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsStrip;

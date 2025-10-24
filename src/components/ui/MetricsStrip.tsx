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

    // Parse the target value to get the number and suffix
    const numericValue = parseFloat(value.replace(/[^\d.]/g, ''));
    const suffix = value.replace(/[\d.]/g, '');
    
    if (isNaN(numericValue)) {
      setDisplayValue(value);
      return;
    }

    // Animation duration and steps
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepValue = numericValue / steps;
    const stepDuration = duration / steps;
    
    let currentValue = 0;
    let stepCount = 0;
    
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        stepCount++;
        currentValue += stepValue;
        
        if (stepCount >= steps) {
          setDisplayValue(value); // Set final value
          clearInterval(interval);
        } else {
          // Format the current value
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

  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    blue: 'bg-blue-900 text-white',
  };

  const textClasses = {
    white: 'text-gray-900',
    gray: 'text-gray-900',
    blue: 'text-white',
  };

  const accentClasses = {
    white: 'text-teal-600',
    gray: 'text-teal-600',
    blue: 'text-teal-400',
  };

  const borderClasses = {
    white: 'border-gray-200',
    gray: 'border-gray-200',
    blue: 'border-blue-800',
  };

  return (
    <section ref={ref} className={`py-16 ${backgroundClasses[background]}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 ${centered ? 'text-center' : ''}`}>
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${index !== metrics.length - 1 ? `border-r ${borderClasses[background]} md:border-r-0 ${index % 2 === 0 ? 'md:border-r' : ''} ${Math.floor(index / 2) % 2 === 0 ? 'lg:border-r' : ''}` : ''} px-4`}
            >
              <div className={`text-3xl md:text-4xl font-light font-poppins ${accentClasses[background]} mb-2`}>
                <AnimatedCounter value={metric.value} isInView={isInView} delay={index * 200} />
              </div>
              <div className={`text-sm md:text-base font-medium ${textClasses[background]} uppercase tracking-wider`}>
                {metric.label}
              </div>
              {metric.description && (
                <div className={`text-xs mt-1 ${background === 'blue' ? 'text-blue-200' : 'text-gray-500'}`}>
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
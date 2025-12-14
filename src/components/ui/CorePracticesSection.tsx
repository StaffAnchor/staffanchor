'use client';

import { motion } from 'framer-motion';
import PracticeCard from '@/components/ui/PracticeCard';

interface Practice {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  features: string[];
}

interface CorePracticesSectionProps {
  practices?: Practice[];
  title?: string;
  subtitle?: string;
  backgroundColor?: string;
}

const defaultPractices: Practice[] = [
  {
    title: "Executive Search",
    description: "CXO & Board-level mandates, handled with discretion and insight.",
    href: "/executive-search",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    features: ["CEO, COO, CFO, CHRO,", "Business Head", "Board Director"],
  },
  {
    title: "Technology Practice",
    description: "Tech leadership and specialized roles across engineering, product, and data functions.",
    href: "/technology-practice",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    features: ["CTO & Engineering Heads", "Product & Data Leaders", "AI/ML & Cloud Architects"],
  },
  {
    title: "Consumer Service Practice",
    description: "Specialized hiring for consumer-focused industries and service sectors.",
    href: "/consumer-service-practice",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    features: ["Retail & E-commerce", "Hospitality & F&B", "Customer Experience Leaders"],
  },
  {
    title: "Coming Soon",
    description: "Specialized practice for renewable energy and electric mobility sectors.",
    href: "/coming-soon",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    features: ["Renewable Energy", "EV Manufacturing", "Charging Infrastructure"],
  },
];

export default function CorePracticesSection({
  practices = defaultPractices,
  title = "Our Core Practices",
  subtitle = "Three specialized practices designed to meet your unique hiring needs with precision and expertise.",
  backgroundColor = "bg-gray-50"
}: CorePracticesSectionProps) {
  return (
    <section className={`${backgroundColor} py-16 overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="heading-lg mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {title}
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {subtitle}
          </motion.p>
        </motion.div>

        <motion.div
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
  initial="hidden"
  whileInView="visible"
  viewport={{ margin: "-50px" }}
  variants={{
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } }
  }}
>
  {practices.map((practice) => (
    <motion.div
      key={practice.title}
      variants={{
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.6, type: "spring", stiffness: 100 }
        }
      }}
      className="h-full"
    >
      <PracticeCard {...practice} />
    </motion.div>
  ))}
</motion.div>
      </div>
    </section>
  );
}

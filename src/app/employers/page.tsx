'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import MetricsStrip from '@/components/ui/MetricsStrip';
import EmployerForm from '@/components/ui/EmployerForm';
import { submitEmployerForm } from '@/utils/googleSheets';
import CorePracticesSection from '@/components/ui/CorePracticesSection';

const employerMetrics = [
  { value: "12 Days", label: "Time to Hire", description: "Average speed" },
  { value: "3:1", label: "CV:Interview", description: "Precision ratio" },
  { value: "95%", label: "Retention", description: "Long-term success" },
  { value: "88%", label: "Closure Rate", description: "Success rate" },
];

const hiringSolutions = [
  {
    title: "Sales Hiring (Mid–Senior)",
    description: "High-quality hiring across SDRs, Inside Sales, AEs, Field Sales, and KAM positions. Aligned to your motion, evaluated through behavioural and competency-based screenings.",
    href: "/sales-hiring",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    features: [],
  },
  {
    title: "Leadership Hiring (Executive Search)",
    description: "Confidential hiring for revenue leadership roles — Sales Managers, Regional Heads, VP Sales, CRO, Business Heads. Leaders who influence GTM, forecasting, culture and performance.",
    href: "/leadership-hiring",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    features: [],
  },
  {
    title: "Volume Hiring (Scale-Up)",
    description: "Rapid multi-city or multi-role hiring for expansion phases. Structured sprints, pipeline visibility, timeline guarantees and quality control.",
    href: "/volume-hiring",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    features: [],
  },
  {
    title: "Sales Talent Intelligence",
    description: "Compensation benchmarks, org design, hiring diagnostics and talent mapping. Insights that help leaders make strategic decisions.",
    href: "/sales-talent-intelligence",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    features: [],
  },
  {
    title: "Interim & Contract Hiring",
    description: "Flexible sales talent for pilot teams, transition periods or contract-to-hire validation.",
    href: "/interim",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    features: [],
  },
];

const ourEdge = [
  {
    approach: "AI-Driven Search",
    impact: "2× faster shortlisting",
    description: "Machine learning algorithms identify and rank candidates based on role requirements and cultural fit."
  },
  {
    approach: "Functional Specialists",
    impact: "Deep role understanding", 
    description: "Consultants with domain expertise in specific functions and industries ensure precise matches."
  },
  {
    approach: "Talent Analytics Dashboard",
    impact: "Live visibility",
    description: "Real-time insights into search progress, market dynamics, and competitive intelligence."
  },
  {
    approach: "Consultative Methodology",
    impact: "Evidence-based decisions",
    description: "Data-driven recommendations backed by market research and predictive analytics."
  },
];

const practices = [
  {
    title: "Executive Search",
    description: "Find visionary leaders who redefine success. Partner with boards, founders, and investors to identify transformative executives.",
    href: "/executive-search",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    features: ["CEO", "COO", "CFO", "CHRO", "CTO"],
  },
  {
    title: "Functional Hiring", 
    description: "Build functional excellence across business functions. Deep expertise in sales, technology, operations, and specialized roles.",
    href: "/functional-hiring",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    features: ["Sales & BD", "Technology", "Operations", "Marketing"],
  },
  {
    title: "Industry Expertise",
    description: "Precision hiring where function meets domain. Specialized knowledge across 20+ industries for perfect role-culture alignment.",
    href: "/industry-expertise", 
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    features: ["EdTech", "BFSI", "Healthcare", "Hospitality"],
  },
];

export default function EmployersPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const pathVariants = {
    hidden: { 
      pathLength: 0, 
      opacity: 0 
    },
    visible: { 
      pathLength: 1, 
      opacity: 1
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-24 overflow-hidden bg-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="eyebrow mb-6 block">For employers</span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-poppins font-semibold text-4xl md:text-5xl lg:text-6xl text-[var(--color-ink)] leading-tight tracking-tight mb-12"
            >
              B2B sales hiring challenges change with scale.
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 mb-10"
            >
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-[var(--color-accent)] mt-2 flex-shrink-0" />
                <p className="text-lg md:text-xl text-[var(--color-ink)]/80 leading-relaxed">
                  <span className="font-semibold text-gray-900">Early teams</span> need strong execution.
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-[var(--color-accent)] mt-2 flex-shrink-0" />
                <p className="text-lg md:text-xl text-[var(--color-ink)]/80 leading-relaxed">
                  <span className="font-semibold text-gray-900">Growing teams</span> need structure and speed.
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-violet-600 mt-2 flex-shrink-0" />
                <p className="text-lg md:text-xl text-[var(--color-ink)]/80 leading-relaxed">
                  <span className="font-semibold text-gray-900">Mature teams</span> need leaders who can shape strategy and outcomes.
                </p>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-[var(--color-muted)] leading-relaxed"
            >
              Our hiring solutions are designed to support B2B companies at every stage of their revenue journey — from building core teams to scaling fast, hiring leadership, and making informed talent decisions. (We also support B2C sales hiring where needed.)
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Hiring Solutions */}
      <CorePracticesSection 
        practices={hiringSolutions}
        title="Our Hiring Solutions"
        subtitle=""
        backgroundColor="bg-white"
      />

      {/* Why Employers Trust StaffAnchor */}
      <section className="section-padding bg-[var(--color-mist)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 max-w-2xl">
            <span className="eyebrow mb-3 block">Why us</span>
            <h2 className="heading-lg">Why employers trust StaffAnchor</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-line)] hover:border-[var(--color-ink)] transition-colors duration-300">
              <span className="text-xs font-mono text-[var(--color-muted)] mb-4 block">01</span>
              <div className="w-11 h-11 bg-[var(--color-ink)] rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-poppins font-semibold text-[var(--color-ink)] mb-3 tracking-tight">Sales-Only Expertise</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                A single-function specialisation that drives accuracy, speed and quality.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-[var(--color-line)] hover:border-[var(--color-ink)] transition-colors duration-300">
              <span className="text-xs font-mono text-[var(--color-muted)] mb-4 block">02</span>
              <div className="w-11 h-11 bg-[var(--color-ink)] rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-poppins font-semibold text-[var(--color-ink)] mb-3 tracking-tight">High-Quality Shortlists</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                No bulk CVs. Only curated, motion-fit, assessment-backed candidates.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-[var(--color-line)] hover:border-[var(--color-ink)] transition-colors duration-300">
              <span className="text-xs font-mono text-[var(--color-muted)] mb-4 block">03</span>
              <div className="w-11 h-11 bg-[var(--color-ink)] rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-poppins font-semibold text-[var(--color-ink)] mb-3 tracking-tight">Industry-Agnostic Coverage</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                SaaS, Fintech, BFSI, Automotive, Real Estate, D2C, Manufacturing & more.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-[var(--color-line)] hover:border-[var(--color-ink)] transition-colors duration-300">
              <span className="text-xs font-mono text-[var(--color-muted)] mb-4 block">04</span>
              <div className="w-11 h-11 bg-[var(--color-ink)] rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-poppins font-semibold text-[var(--color-ink)] mb-3 tracking-tight">Predictable, Transparent Delivery</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Clear timelines, structured weekly updates and milestone-based execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <MetricsStrip metrics={employerMetrics} />

      {/* Submit Mandate Form */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="eyebrow mb-3 block justify-center">Get started</span>
            <h2 className="heading-lg mb-4">Submit hiring mandate</h2>
            <p className="text-xl text-[var(--color-muted)]">
              Share your sales hiring requirements and we'll deliver curated, motion-aligned candidates.
            </p>
          </div>

          <EmployerForm
            title="Hiring Request"
            subtitle="Complete this form to start your precision hiring journey with StaffAnchor."
            submitText="Submit Mandate →"
            onSubmit={submitEmployerForm}
          />
        </div>
      </section>
    </>
  );
}
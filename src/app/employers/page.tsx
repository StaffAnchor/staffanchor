'use client';

import HeroSection from '@/components/ui/HeroSection';
import MetricsStrip from '@/components/ui/MetricsStrip';
import EmployerForm from '@/components/ui/EmployerForm';
import { submitEmployerForm } from '@/utils/googleSheets';
import PracticeCard from '@/components/ui/PracticeCard';
import { motion } from 'framer-motion';

const employerMetrics = [
  { value: "12 Days", label: "Time to Hire", description: "Average speed" },
  { value: "3:1", label: "CV:Interview", description: "Precision ratio" },
  { value: "95%", label: "Retention", description: "Long-term success" },
  { value: "88%", label: "Closure Rate", description: "Success rate" },
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
    roles: ["CEO", "COO", "CFO", "CHRO", "CTO"],
    metrics: ["28 Days Avg Closure", "90% Retention", "30+ CXO Mandates"],
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
    roles: ["Sales & BD", "Technology", "Operations", "Marketing"],
    metrics: ["250+ roles/year", "72 hr shortlisting", "Pan-India reach"],
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
    roles: ["EdTech", "BFSI", "Healthcare", "Hospitality"],
    metrics: ["84% closure rate", "20+ industries", "4.8/5 rating"],
  },
];

export default function EmployersPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection 
        headline="Precision-Driven Hiring for a Data-Driven World."
        subtext="Transform your hiring with AI-powered intelligence, functional expertise, and consultative methodology that delivers results."
        centered={true}
      />

      {/* Our Edge */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-8">Our Edge</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover what makes StaffAnchor the intelligent choice for modern hiring challenges.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-blue-900 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-poppins font-semibold uppercase tracking-wider">Approach</th>
                  <th className="px-6 py-4 text-left font-poppins font-semibold uppercase tracking-wider">Impact</th>
                  <th className="hidden md:table-cell px-6 py-4 text-left font-poppins font-semibold uppercase tracking-wider">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {ourEdge.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">{item.approach}</td>
                    <td className="px-6 py-4 text-teal-600 font-semibold">{item.impact}</td>
                    <td className="hidden md:table-cell px-6 py-4 text-gray-600 text-sm">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Our Practices */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-8">Our Practices</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three specialized practices designed to address every level of your hiring needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {practices.map((practice) => (
              <motion.div
                key={practice.title}
                variants={{
                  hidden: { opacity: 0, y: 50, scale: 0.9 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: {
                      duration: 0.7,
                      type: "spring",
                      stiffness: 100,
                      damping: 15
                    }
                  }
                }}
              >
                <PracticeCard {...practice} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <MetricsStrip metrics={employerMetrics} />

      {/* Submit Mandate Form */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Share Your Hiring Mandate</h2>
            <p className="text-xl text-gray-600">
              Tell us about your requirements and let our intelligence-driven approach find your perfect hire.
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
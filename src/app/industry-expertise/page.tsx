'use client';

import { useState } from 'react';
import HeroSection from '@/components/ui/HeroSection';
import MetricsStrip from '@/components/ui/MetricsStrip';
import Link from 'next/link';
import PracticeSidebar from '@/components/layout/PracticeSidebar';

const industryMetrics = [
  { value: "84%", label: "Closure Rate", description: "Industry success" },
  { value: "20+", label: "Industries", description: "Domain coverage" },
  { value: "4.8/5", label: "Client Rating", description: "Satisfaction score" },
  { value: "500+", label: "Domain Hires", description: "Specialized placements" },
];

const industries = [
  {
    industry: "Architecture & Design",
    roles: ["Architects", "Senior Interior Designers", "Landscape Designers"]
  },
  {
    industry: "Finance & Accounting",
    roles: ["Chartered Accountants (CAs)", "Audit Managers", "Tax Specialists", "FP&A Managers"]
  },
  {
    industry: "Hospitality & Culinary",
    roles: ["Head Chef", "Sous Chef", "Pastry Chef", "Commis I/II/III"]
  },
  {
    industry: "Fitness & Wellness",
    roles: ["Fitness Trainers", "Group Instructors", "Nutritionists", "Wellness Coaches"]
  },
  {
    industry: "Legal & Compliance",
    roles: ["Corporate Lawyer", "Compliance Manager", "Company Secretary (CS)"]
  },
  {
    industry: "Specialist Medical / Health",
    roles: ["Physiotherapists", "Sports Scientists", "Dieticians"]
  }
];


export default function IndustryExpertisePage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex">
      {/* Sidebar */}
      <PracticeSidebar 
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
        currentPage="industry-expertise"
      />

      {/* Main Content */}
      <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'lg:ml-64' : 'lg:ml-0'}`}>
        <>
          <section className='section-padding'>
            <HeroSection 
              headline="Precision Hiring Where Function Meets Domain."
              subtext="Deep industry knowledge across 20+ specialized sectors ensures perfect role-culture-domain alignment."
              />
            </section>
      <MetricsStrip metrics={industryMetrics} background='blue'/>
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind) => (
              <div key={ind.industry} className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-4">{ind.industry}</h3>
                <div className="space-y-2">
                  {ind.roles.map((role) => (
                    <div key={role} className="bg-white px-3 py-2 rounded-lg text-sm text-gray-700">{role}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      {/* Closing CTA */}
      <section className="pt-20 pb-12 bg-blue-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-poppins font-light text-3xl md:text-4xl mb-8 uppercase tracking-wide">
            REQUEST INDUSTRY EXPERTISE CONSULTATION
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Share your hiring mandate and let our AI-powered intelligence find your next game-changing hire.
          </p>
          <Link
            href="/contact" 
            className="inline-block bg-teal-600 text-white px-8 py-4 rounded-full font-medium hover:bg-teal-500 transition-colors duration-200 text-lg"
          >
            Share Your Hiring Mandate →
          </Link>
        </div>
      </section>
        </>
      </div>
    </div>
  );
}
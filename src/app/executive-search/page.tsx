'use client';

// Executive Search page - no Link import needed currently
import { useState } from 'react';
import HeroSection from '@/components/ui/HeroSection';
import MetricsStrip from '@/components/ui/MetricsStrip';
import { submitEmployerForm } from '@/utils/googleSheets';
import Link from 'next/link';
import PracticeSidebar from '@/components/layout/PracticeSidebar';

const executiveMetrics = [
  { value: "28 Days", label: "Avg Closure", description: "Executive searches" },
  { value: "90%", label: "Retention", description: "Long-term success" },
  { value: "30+", label: "CXO Mandates", description: "Leadership hires" },
  { value: "95%", label: "Client Satisfaction", description: "Executive search" },
];

const executiveRoles = [
  {
    category: "Chief Executive Leadership",
    roles: [
      { title: "Chief Executive Officer (CEO)", description: "Visionary leaders driving organizational transformation and growth" },
      { title: "Chief Operating Officer (COO)", description: "Operational excellence leaders optimizing business performance" },
      { title: "President & Managing Director", description: "Strategic leaders overseeing regional or business unit operations" },
    ]
  },
  {
    category: "Functional Leadership",
    roles: [
      { title: "Chief Financial Officer (CFO)", description: "Financial strategy leaders managing capital and growth initiatives" },
      { title: "Chief Technology Officer (CTO)", description: "Technology visionaries driving digital transformation" },
      { title: "Chief Human Resources Officer (CHRO)", description: "People leaders building organizational capability and culture" },
    ]
  },
  {
    category: "Growth & Market Leadership", 
    roles: [
      { title: "Chief Marketing Officer (CMO)", description: "Brand and growth leaders driving market expansion" },
      { title: "Chief Sales Officer (CSO)", description: "Revenue leaders scaling sales organizations and go-to-market" },
      { title: "Chief Product Officer (CPO)", description: "Product visionaries defining market-winning strategies" },
    ]
  },
  {
    category: "Business Leadership",
    roles: [
      { title: "Business Head / Director", description: "P&L leaders managing business units and market segments" },
      { title: "Country Head / Regional Director", description: "Geographic leaders driving regional expansion and operations" },
      { title: "Division Head", description: "Functional or business division leaders ensuring operational excellence" },
    ]
  },
];

const searchProcess = [
  {
    phase: "Discovery & Mapping",
    duration: "Week 1",
    activities: [
      "Stakeholder alignment and role definition",
      "Market landscape mapping and competitive intelligence", 
      "Success profile development with board/investors",
      "Search strategy and timeline confirmation"
    ]
  },
  {
    phase: "Search & Assessment",
    duration: "Week 2-3", 
    activities: [
      "Executive search across active and passive candidates",
      "Initial screening and competency assessment",
      "Reference validation and background verification",
      "Cultural fit evaluation and leadership assessment"
    ]
  },
  {
    phase: "Client Engagement",
    duration: "Week 3-4",
    activities: [
      "Shortlist presentation with detailed candidate profiles",
      "Interview coordination and feedback management",
      "Final assessment and decision support",
      "Offer negotiation and closure facilitation"
    ]
  }
];

export default function ExecutiveSearchPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex">
      {/* Sidebar */}
      <PracticeSidebar 
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
        currentPage="executive-search"
      />

      {/* Main Content */}
      <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'lg:ml-64' : 'lg:ml-0'}`}>
        <>
          {/* Hero Section */}
          <section className='section-padding'>
          <HeroSection 
            headline="Hiring Visionary Leaders Who Redefine Success."
            
            subtext="We partner with boards, founders, and investors to identify transformative leaders through a
            research-led & AI-supported search process."
            />
          </section>

      

      {/* Executive Metrics */}
      <MetricsStrip metrics={executiveMetrics} background="blue" />

      {/* Search Process */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-8">Executive Search Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensures thorough evaluation, cultural alignment, and successful long-term placements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {searchProcess.map((phase, index) => (
              <div key={phase.phase} className="bg-white rounded-xl p-8 shadow-lg relative">
                {/* Phase Number */}
                <div className="absolute -top-4 left-8">
                  <div className="w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                </div>

                {/* Phase Info */}
                <div className="pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-poppins font-semibold text-lg text-gray-900">{phase.phase}</h3>
                    <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">
                      {phase.duration}
                    </span>
                  </div>

                  <ul className="space-y-3">
                    {phase.activities.map((activity, actIndex) => (
                      <li key={actIndex} className="flex items-start space-x-3">
                        <svg className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600 text-sm leading-relaxed">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Executive Search Advantage */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-lg mb-8">Our Executive Search Advantage</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Board & Investor Alignment</h3>
                    <p className="text-gray-600">Direct engagement with boards, investors, and key stakeholders to ensure complete alignment on leadership requirements and expectations.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Executive Intelligence Network</h3>
                    <p className="text-gray-600">Extensive network of C-suite executives, industry leaders, and transformation experts across multiple sectors and geographies.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Leadership Assessment</h3>
                    <p className="text-gray-600">Comprehensive evaluation including leadership competencies, cultural fit, transformation capability, and strategic thinking assessment.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Confidential & Discreet</h3>
                    <p className="text-gray-600">Complete confidentiality throughout the search process with discreet approach to candidate identification and evaluation.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-8">
              <h3 className="font-poppins font-semibold text-xl text-blue-900 mb-6">Executive Search Success Metrics</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-900 mb-2">28</div>
                  <div className="text-sm text-blue-700 uppercase tracking-wider">Days Avg Closure</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-900 mb-2">90%</div>
                  <div className="text-sm text-blue-700 uppercase tracking-wider">Retention Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-900 mb-2">30+</div>
                  <div className="text-sm text-blue-700 uppercase tracking-wider">CXO Mandates</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-900 mb-2">100%</div>
                  <div className="text-sm text-blue-700 uppercase tracking-wider">Confidentiality</div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-white rounded-lg">
                <blockquote className="text-blue-800 italic text-center">
                  &ldquo;The right executive hire can transform an entire organization&apos;s trajectory and unlock exponential growth.&rdquo;
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

    
      {/* Closing CTA */}
      <section className="pt-20 pb-12 bg-blue-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-poppins font-light text-3xl md:text-4xl mb-8 uppercase tracking-wide">
            Request Leadership Consultation
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Share your executive hiring requirements and let our leadership experts design a customized search strategy.
          </p>
          <Link
            href="/contact" 
            className="inline-block bg-teal-600 text-white px-8 py-4 rounded-full font-medium hover:bg-teal-500 transition-colors duration-200 text-lg"
          >
            Request Leadership Consultation →
          </Link>
        </div>
      </section>
        </>
      </div>
    </div>
  );
}
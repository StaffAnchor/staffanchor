'use client';

import { useState } from 'react';
import Link from 'next/link';
import PracticeSidebar from '@/components/layout/PracticeSidebar';

export default function SalesTalentIntelligencePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <>
      <PracticeSidebar 
        isOpen={isSidebarOpen} 
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        currentPage="sales-talent-intelligence"
      />

      <div className={`transition-all duration-300 ${isSidebarOpen ? 'lg:ml-64' : 'lg:ml-0'}`}>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] opacity-30" />
          
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-4xl">
              <h1 className="font-poppins font-light text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight mb-6">
                Sales Talent Intelligence
              </h1>
              
              <p className="text-2xl text-gray-900 font-medium leading-relaxed mb-12">
                Make high-stakes sales hiring decisions with clarity, not assumptions.
              </p>

              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Sales Talent Intelligence is a <span className="font-semibold">paid advisory service</span> that helps companies understand <span className="italic">where to hire, how to structure teams, and what it takes to win talent</span> — before critical hiring or expansion decisions are made.
                </p>

                <p>
                  This service is designed for founders, CXOs, and HR leaders who want to <span className="font-semibold">reduce hiring risk, control cost, and improve revenue outcomes</span>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who This Is For Section */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-poppins font-light text-3xl md:text-4xl text-gray-900 mb-8">
              Who This Is For
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Sales Talent Intelligence is typically engaged when companies are:
            </p>

            <div className="space-y-4 mb-8">
              {[
                'Preparing for leadership or senior sales hiring',
                'Planning scale-ups, new markets, or new sales motions',
                'Struggling with slow hiring, offer drop-offs, or poor talent quality',
                'Rethinking compensation, incentives, or team structure',
                'Making irreversible GTM or revenue investments'
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-4 mt-2.5 shrink-0"></div>
                  <p className="text-lg text-gray-700 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              If hiring mistakes are expensive for you — this service is relevant.
            </p>
          </div>
        </section>

        {/* How Our Sales Talent Intelligence Engagements Work Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-poppins font-light text-3xl md:text-4xl text-gray-900 mb-8">
              How Our Sales Talent Intelligence Engagements Work
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Each engagement is <span className="font-semibold">scoped and customised</span> based on your business stage, hiring goals, and complexity.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Companies may engage us for:
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-teal-600 rounded-full mr-4 mt-2.5 shrink-0"></div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  A <span className="font-semibold">focused diagnostic</span> (specific hiring or org question)
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-teal-600 rounded-full mr-4 mt-2.5 shrink-0"></div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Or a <span className="font-semibold">multi-module intelligence engagement</span> supporting hiring and growth decisions
                </p>
              </div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              This is not bundled by default with recruitment and is delivered as a <span className="font-semibold">standalone professional engagement</span>.
            </p>
          </div>
        </section>

        {/* What We Deliver Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-poppins font-light text-3xl md:text-4xl text-gray-900 mb-4">
                What We Deliver
              </h2>
            </div>

            <div className="space-y-8 max-w-6xl mx-auto">
              <div className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-blue-300 transition-all duration-300">
                <div className="flex items-start">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-6 shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">Compensation & Incentive Benchmarking</h3>
                    <p className="text-gray-600 leading-relaxed text-lg mb-4">
                      Market-aligned insights on fixed pay, variable structures, role-wise incentives, and pay positioning — benchmarked across industries, stages, and geographies.
                    </p>
                    <div className="bg-gray-50 border-l-4 border-blue-500 p-4 rounded">
                      <p className="text-gray-700 leading-relaxed">
                        Helps prevent offer rejections, overpaying, or misaligned incentives.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-teal-300 transition-all duration-300">
                <div className="flex items-start">
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mr-6 shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">Talent Density & Availability Mapping</h3>
                    <p className="text-gray-600 leading-relaxed text-lg mb-3">
                      Clear visibility into:
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start">
                        <span className="text-gray-600 mr-2">•</span>
                        <span className="text-gray-600 leading-relaxed">Where relevant sales talent actually exists</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-600 mr-2">•</span>
                        <span className="text-gray-600 leading-relaxed">How deep the talent pool is</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-600 mr-2">•</span>
                        <span className="text-gray-600 leading-relaxed">How competitive the hiring landscape is</span>
                      </li>
                    </ul>
                    <div className="bg-gray-50 border-l-4 border-teal-500 p-4 rounded">
                      <p className="text-gray-700 leading-relaxed">
                        Avoids unrealistic hiring plans and wrong-location bets.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-blue-300 transition-all duration-300">
                <div className="flex items-start">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-6 shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">Role Clarity Frameworks</h3>
                    <p className="text-gray-600 leading-relaxed text-lg mb-3">
                      Structured definition of:
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start">
                        <span className="text-gray-600 mr-2">•</span>
                        <span className="text-gray-600 leading-relaxed">Responsibilities</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-600 mr-2">•</span>
                        <span className="text-gray-600 leading-relaxed">KPIs</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-600 mr-2">•</span>
                        <span className="text-gray-600 leading-relaxed">Success metrics</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-600 mr-2">•</span>
                        <span className="text-gray-600 leading-relaxed">Competency expectations</span>
                      </li>
                    </ul>
                    <div className="bg-gray-50 border-l-4 border-blue-500 p-4 rounded">
                      <p className="text-gray-700 leading-relaxed">
                        Reduces mis-hiring and improves interview quality and candidate fit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-teal-300 transition-all duration-300">
                <div className="flex items-start">
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mr-6 shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">Org Design & Team Structuring</h3>
                    <p className="text-gray-600 leading-relaxed text-lg mb-3">
                      Advisory on structuring:
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start">
                        <span className="text-gray-600 mr-2">•</span>
                        <span className="text-gray-600 leading-relaxed">Inside sales vs field sales</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-600 mr-2">•</span>
                        <span className="text-gray-600 leading-relaxed">Enterprise vs SMB motions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-600 mr-2">•</span>
                        <span className="text-gray-600 leading-relaxed">Channel and partner models</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-600 mr-2">•</span>
                        <span className="text-gray-600 leading-relaxed">Manager-to-rep ratios</span>
                      </li>
                    </ul>
                    <div className="bg-gray-50 border-l-4 border-teal-500 p-4 rounded">
                      <p className="text-gray-700 leading-relaxed">
                        Ensures productivity, accountability, and scalability.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-blue-300 transition-all duration-300">
                <div className="flex items-start">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-6 shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">Hiring Competitiveness Analysis</h3>
                    <p className="text-gray-600 leading-relaxed text-lg mb-3">
                      Assessment of your hiring strength compared to the market:
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start">
                        <span className="text-gray-600 mr-2">•</span>
                        <span className="text-gray-600 leading-relaxed">Speed vs competitors</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-600 mr-2">•</span>
                        <span className="text-gray-600 leading-relaxed">Employer brand pull</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-600 mr-2">•</span>
                        <span className="text-gray-600 leading-relaxed">Offer attractiveness</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-600 mr-2">•</span>
                        <span className="text-gray-600 leading-relaxed">Conversion drop-offs</span>
                      </li>
                    </ul>
                    <div className="bg-gray-50 border-l-4 border-blue-500 p-4 rounded">
                      <p className="text-gray-700 leading-relaxed">
                        Identifies exactly where you are losing candidates — and why.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How Companies Use This Service, What This Is Not, Why Clients Choose StaffAnchor Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {/* How Companies Use This Service */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <h3 className="font-poppins font-semibold text-2xl text-gray-900 mb-6">
                  How Companies Use This Service
                </h3>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  Most clients engage Sales Talent Intelligence <span className="font-semibold">before</span> or <span className="font-semibold">alongside</span>:
                </p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">•</span>
                    <span className="text-gray-700 leading-relaxed">Leadership hiring (VP Sales, Head of Sales, CRO)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">•</span>
                    <span className="text-gray-700 leading-relaxed">Scale-up or expansion hiring programs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">•</span>
                    <span className="text-gray-700 leading-relaxed">Market entry or GTM redesign</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">•</span>
                    <span className="text-gray-700 leading-relaxed">High-cost, high-impact hiring cycles</span>
                  </li>
                </ul>

                <p className="text-gray-700 leading-relaxed">
                  It often becomes the <span className="font-semibold">decision layer</span> that informs recruitment execution.
                </p>
              </div>

              {/* What This Is Not */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <h3 className="font-poppins font-semibold text-2xl text-gray-900 mb-6">
                  What This Is Not
                </h3>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  To set clear expectations:
                </p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">•</span>
                    <span className="text-gray-700 leading-relaxed">This is <span className="font-semibold">not free consulting</span></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">•</span>
                    <span className="text-gray-700 leading-relaxed">This is <span className="font-semibold">not generic market data</span></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">•</span>
                    <span className="text-gray-700 leading-relaxed">This is <span className="font-semibold">not limited to resumes or sourcing</span></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">•</span>
                    <span className="text-gray-700 leading-relaxed">This is <span className="font-semibold">not bundled automatically with hiring</span></span>
                  </li>
                </ul>

                <p className="text-gray-700 leading-relaxed">
                  It is a <span className="font-semibold">paid, outcome-driven advisory engagement</span>.
                </p>
              </div>

              {/* Why Clients Choose StaffAnchor */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <h3 className="font-poppins font-semibold text-2xl text-gray-900 mb-6">
                  Why Clients Choose StaffAnchor
                </h3>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">•</span>
                    <span className="text-gray-700 leading-relaxed">Sales-first specialisation (not general HR consulting)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">•</span>
                    <span className="text-gray-700 leading-relaxed">Real hiring data from live mandates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">•</span>
                    <span className="text-gray-700 leading-relaxed">India-specific + scale-stage context</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">•</span>
                    <span className="text-gray-700 leading-relaxed">Clear linkage between <span className="font-semibold">talent decisions and revenue outcomes</span></span>
                  </li>
                </ul>

                <p className="text-gray-700 leading-relaxed">
                  We work at the intersection of <span className="font-semibold">strategy, hiring, and execution</span>.
                </p>
              </div>
            </div>

            {/* Note */}
            <div className="mt-12 text-center">
              <p className="text-gray-600 italic text-lg">
                <span className="font-semibold">Note:</span> Sales Talent Intelligence engagements are limited and typically scoped for companies with active or upcoming hiring plans.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-poppins font-light text-3xl md:text-4xl mb-6">
              Ready to Make Smarter Hiring Decisions?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Access intelligence that helps you hire better, structure better, and scale better — without costly trial-and-error.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-teal-600 text-white px-8 py-4 rounded-full font-medium hover:bg-teal-500 transition-all duration-200 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Request a Sales Talent Intelligence Consultation →
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';
import PracticeSidebar from '@/components/layout/PracticeSidebar';

export default function InterimPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <>
      <PracticeSidebar 
        isOpen={isSidebarOpen} 
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        currentPage="interim"
      />

      <div className={`transition-all duration-300 ${isSidebarOpen ? 'lg:ml-64' : 'lg:ml-0'}`}>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] opacity-30" />
          
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="font-poppins font-light text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight mb-6">
                Interim & Contract Sales Hiring
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-8">
                Immediate revenue impact — without long-term hiring risk
              </p>

              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
                Deploy experienced sales professionals for critical transitions, market experiments, or short-term execution needs.
              </p>

              <div>
                <p className="text-lg text-gray-900 font-medium mb-2">Not staffing. Not freelancing.</p>
                <p className="text-2xl text-gray-900 font-semibold">Outcome-driven interim talent.</p>
              </div>
            </div>
          </div>
        </section>

        {/* What This Is Section */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-gray-200">
              <h2 className="font-poppins font-semibold text-2xl text-gray-900 mb-6 text-center">
                WHAT THIS IS
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <span className="font-semibold">This is NOT traditional staff augmentation</span>
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                StaffAnchor's Interim & Contract Hiring is designed for revenue-critical roles where speed, experience, and accountability matter more than headcount.
              </p>

              <p className="text-lg text-gray-900 font-semibold">
                You get operators, not placeholders.
              </p>
            </div>
          </div>
        </section>

        {/* Ideal For Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-poppins font-light text-3xl md:text-4xl text-gray-900 mb-4">
                Ideal For
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-blue-300 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Covering Revenue Gaps</h3>
                <p className="text-gray-600 leading-relaxed">
                  Unexpected exits, parental leaves, or leadership transitions — without slowing deals or pipelines.
                </p>
              </div>

              <div className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-teal-300 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">GTM Pivots & Rollouts</h3>
                <p className="text-gray-600 leading-relaxed">
                  Deploy proven operators to support new products, pricing changes, or market entry.
                </p>
              </div>

              <div className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-blue-300 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Role Viability Testing</h3>
                <p className="text-gray-600 leading-relaxed">
                  Validate a role, market, or motion before committing to full-time hiring.
                </p>
              </div>

              <div className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-teal-300 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Seasonal or Campaign Spikes</h3>
                <p className="text-gray-600 leading-relaxed">
                  Handle peak demand periods without bloating permanent teams.
                </p>
              </div>

              <div className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-blue-300 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">New Geography Experiments</h3>
                <p className="text-gray-600 leading-relaxed">
                  Test regions with experienced sellers before setting up full teams.
                </p>
              </div>

              <div className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-teal-300 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Leadership Bridging</h3>
                <p className="text-gray-600 leading-relaxed">
                  Interim Heads / Managers while permanent leaders are being hired.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Roles We Typically Deploy Section */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-poppins font-light text-3xl md:text-4xl text-gray-900 mb-4">
                Roles We Typically Deploy
              </h2>
            </div>

            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-gray-200">
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-4 mt-2.5 shrink-0"></div>
                  <p className="text-lg text-gray-700 leading-relaxed">Interim Sales Managers / Team Leads</p>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-4 mt-2.5 shrink-0"></div>
                  <p className="text-lg text-gray-700 leading-relaxed">Interim Key Account / Enterprise Sellers</p>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-4 mt-2.5 shrink-0"></div>
                  <p className="text-lg text-gray-700 leading-relaxed">Interim GTM / Expansion Specialists</p>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-4 mt-2.5 shrink-0"></div>
                  <p className="text-lg text-gray-700 leading-relaxed">Interim Regional Sales Heads</p>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-4 mt-2.5 shrink-0"></div>
                  <p className="text-lg text-gray-700 leading-relaxed">Interim Sales Operations / Enablement Roles</p>
                </li>
              </ul>

              <p className="text-lg text-gray-700 leading-relaxed text-center italic">
                Engagements are role-specific, scoped, and time-bound — not open-ended contracts.
              </p>
            </div>
          </div>
        </section>

        {/* Engagement Model Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-poppins font-light text-3xl md:text-4xl text-gray-900 mb-4">
                Engagement Model
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-blue-300 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Scope Definition</h3>
                <p className="text-gray-600 leading-relaxed">
                  We align on outcomes, timelines, success metrics, and engagement type (short-term, project-based, or contract-to-hire).
                </p>
              </div>

              <div className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-teal-300 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0121 12c0 5.523-4.477 10-10 10S1 17.523 1 12 5.477 2 11 2c1.742 0 3.372.428 4.811 1.185" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Curated Deployment</h3>
                <p className="text-gray-600 leading-relaxed">
                  Pre-vetted sales professionals with relevant industry, motion, and deal experience are deployed.
                </p>
              </div>

              <div className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-blue-300 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Performance Checkpoints</h3>
                <p className="text-gray-600 leading-relaxed">
                  Clear milestones, weekly reviews, and outcome tracking — not just attendance.
                </p>
              </div>

              <div className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-teal-300 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Flexible Continuity</h3>
                <p className="text-gray-600 leading-relaxed">
                  Convert to full-time, extend engagement, or exit cleanly with structured handover.
                </p>
              </div>

              <div className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-blue-300 transition-all duration-300 md:col-span-2 lg:col-span-1">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Risk-Controlled Exit</h3>
                <p className="text-gray-600 leading-relaxed">
                  Knowledge transfer, documentation, and transition support included.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Commercial Model & Why Choose Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Commercial Model */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <h2 className="font-poppins font-semibold text-2xl text-gray-900 mb-6 flex items-center">
                  <svg className="w-9 h-9 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Commercial Model
                </h2>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  This is a <span className="font-semibold">paid, premium engagement</span>, not a success-fee service.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Pricing is structured based on:
                </p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-4 mt-2.5 shrink-0"></div>
                    <p className="text-lg text-gray-700 leading-relaxed">Role seniority</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-4 mt-2.5 shrink-0"></div>
                    <p className="text-lg text-gray-700 leading-relaxed">Engagement duration</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-4 mt-2.5 shrink-0"></div>
                    <p className="text-lg text-gray-700 leading-relaxed">Scope & outcome complexity</p>
                  </li>
                </ul>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Commercials are discussed transparently during consultation — aligned to business impact, not headcount.
                </p>
              </div>

              {/* Why Companies Choose StaffAnchor */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <h2 className="font-poppins font-semibold text-2xl text-gray-900 mb-6 flex items-center">
                  <svg className="w-9 h-9 text-teal-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Why Companies Choose StaffAnchor for Interim Roles
                </h2>

                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mr-4 mt-2.5 shrink-0"></div>
                    <p className="text-lg text-gray-700 leading-relaxed">Sales-first specialization (not general staffing)</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mr-4 mt-2.5 shrink-0"></div>
                    <p className="text-lg text-gray-700 leading-relaxed">Revenue accountability built into engagements</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mr-4 mt-2.5 shrink-0"></div>
                    <p className="text-lg text-gray-700 leading-relaxed">No long-term hiring risk</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mr-4 mt-2.5 shrink-0"></div>
                    <p className="text-lg text-gray-700 leading-relaxed">Faster deployment than permanent search</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mr-4 mt-2.5 shrink-0"></div>
                    <p className="text-lg text-gray-700 leading-relaxed">Clean exits without team disruption</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-poppins font-light text-3xl md:text-4xl mb-6">
              Need Immediate Revenue Support?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Deploy the right interim sales professional — fast, accountable, and outcome-aligned.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-teal-600 text-white px-8 py-4 rounded-full font-medium hover:bg-teal-500 transition-all duration-200 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Request Interim Talent Consultation →
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

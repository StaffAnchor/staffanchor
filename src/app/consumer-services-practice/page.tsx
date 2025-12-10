'use client';

import { useState } from 'react';
import Link from 'next/link';
import PracticeSidebar from '@/components/layout/PracticeSidebar';

export default function ConsumerServicesPracticePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <>
      <PracticeSidebar 
        isOpen={isSidebarOpen} 
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        currentPage="consumer-services-practice"
      />

      <div className={`transition-all duration-300 ${isSidebarOpen ? 'lg:ml-64' : 'lg:ml-0'}`}>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] opacity-30" />
          
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              
              <h1 className="font-poppins font-light text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight mb-6">
                Consumer & Services Practice
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Consumer-facing businesses operate in fast, competitive environments where execution, consistency, and customer experience define success. Our Consumer & Services Practice supports organizations across fitness, wellness, interiors, retail, QSR, hospitality, and logistics to build teams that scale operations and deliver superior customer outcomes.
              </p>
            </div>
          </div>
        </section>

        {/* Scope of Expertise Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-poppins font-light text-3xl md:text-4xl text-gray-900 mb-4">
                Scope of Expertise
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We partner with consumer-facing organizations to build operational excellence across multiple verticals. Our expertise spans the complete operational lifecycle — from launch and setup to daily execution and multi-location scale.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Fitness & Wellness */}
              <div className="group bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl hover:border-teal-300 transition-all duration-300">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-teal-600 transition-colors duration-300">
                  <svg className="w-6 h-6 text-teal-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Fitness & Wellness
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Building teams that drive membership growth, deliver exceptional member experiences, and manage multi-center operations with consistency and scale.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-teal-600 mr-2 mt-1">✓</span>
                    <div>
                      <span className="font-semibold text-gray-900">Studio Management:</span>
                      <span className="text-gray-600 text-sm block">End-to-end center operations including member engagement and experience delivery</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-teal-600 mr-2 mt-1">✓</span>
                    <div>
                      <span className="font-semibold text-gray-900">Multi-Center Operations:</span>
                      <span className="text-gray-600 text-sm block">Regional oversight and operational consistency across locations</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-teal-600 mr-2 mt-1">✓</span>
                    <div>
                      <span className="font-semibold text-gray-900">Membership Growth:</span>
                      <span className="text-gray-600 text-sm block">Revenue-focused leadership with acquisition and retention strategies</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interiors */}
              <div className="group bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl hover:border-blue-300 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <svg className="w-6 h-6 text-blue-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Interiors
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Supporting architecture and design firms with leaders who manage complex project portfolios, coordinate stakeholders, and deliver within timelines and budgets.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">✓</span>
                    <div>
                      <span className="font-semibold text-gray-900">Project Delivery:</span>
                      <span className="text-gray-600 text-sm block">On-ground management of residential, commercial, and hospitality projects</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">✓</span>
                    <div>
                      <span className="font-semibold text-gray-900">Vendor Coordination:</span>
                      <span className="text-gray-600 text-sm block">Managing subcontractors, procurement, and quality inspections</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">✓</span>
                    <div>
                      <span className="font-semibold text-gray-900">Quality Control:</span>
                      <span className="text-gray-600 text-sm block">Ensuring projects meet design standards and remain within budget</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* QSR & Retail */}
              <div className="group bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl hover:border-teal-300 transition-all duration-300">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-teal-600 transition-colors duration-300">
                  <svg className="w-6 h-6 text-teal-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  QSR & Retail
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Enabling rapid expansion through disciplined store operations, team leadership, and consistent execution of brand standards.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-teal-600 mr-2 mt-1">✓</span>
                    <div>
                      <span className="font-semibold text-gray-900">Store Launch:</span>
                      <span className="text-gray-600 text-sm block">Pre-opening planning, staff training, and launch readiness</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-teal-600 mr-2 mt-1">✓</span>
                    <div>
                      <span className="font-semibold text-gray-900">Daily Operations:</span>
                      <span className="text-gray-600 text-sm block">Inventory management, compliance, and customer service excellence</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-teal-600 mr-2 mt-1">✓</span>
                    <div>
                      <span className="font-semibold text-gray-900">Team Leadership:</span>
                      <span className="text-gray-600 text-sm block">Building teams that consistently deliver the brand promise</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hospitality */}
              <div className="group bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl hover:border-blue-300 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <svg className="w-6 h-6 text-blue-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Hospitality
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Building leadership teams that elevate guest satisfaction, optimize operations, and maintain service excellence across properties.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">✓</span>
                    <div>
                      <span className="font-semibold text-gray-900">Guest Experience:</span>
                      <span className="text-gray-600 text-sm block">Service design, feedback management, and continuous improvement</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">✓</span>
                    <div>
                      <span className="font-semibold text-gray-900">Operations:</span>
                      <span className="text-gray-600 text-sm block">Front office management, reservations, and concierge services</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">✓</span>
                    <div>
                      <span className="font-semibold text-gray-900">Quality Management:</span>
                      <span className="text-gray-600 text-sm block">Training, audits, and operational discipline for consistent standards</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Supply Chain & Logistics */}
              <div className="group bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl hover:border-teal-300 transition-all duration-300 md:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-teal-600 transition-colors duration-300">
                  <svg className="w-6 h-6 text-teal-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Supply Chain & Logistics
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Strengthening last-mile delivery, warehouse operations, and supply chain efficiency through strong operational leadership.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-teal-600 mr-2 mt-1">✓</span>
                    <div>
                      <span className="font-semibold text-gray-900">Warehouse Operations:</span>
                      <span className="text-gray-600 text-sm block">Inbound/outbound processes and inventory accuracy</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-teal-600 mr-2 mt-1">✓</span>
                    <div>
                      <span className="font-semibold text-gray-900">Route Optimization:</span>
                      <span className="text-gray-600 text-sm block">Fleet coordination and on-time performance management</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-teal-600 mr-2 mt-1">✓</span>
                    <div>
                      <span className="font-semibold text-gray-900">Distribution:</span>
                      <span className="text-gray-600 text-sm block">Stock planning, fulfillment accuracy, and regional oversight</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Roles We Support Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-poppins font-light text-3xl md:text-4xl text-gray-900 mb-4">
                Roles We Support
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From store-level operations to regional leadership — we help you build teams that execute with excellence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-teal-600">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Regional Operations Manager / City Lead
                </h3>
                <p className="text-gray-600 text-sm">
                  Multi-location oversight, P&L ownership, team development, and market expansion leadership
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-blue-600">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Cluster Head / Territory Manager
                </h3>
                <p className="text-gray-600 text-sm">
                  Regional strategy execution, performance management, and operational standardization
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-teal-600">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Area Manager / Store Launch Manager
                </h3>
                <p className="text-gray-600 text-sm">
                  New location setup, pre-opening coordination, and early-stage operational stabilization
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-blue-600">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Interior Project Manager / Delivery Head
                </h3>
                <p className="text-gray-600 text-sm">
                  End-to-end project management, client coordination, and quality delivery
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-teal-600">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Studio / Centre Manager
                </h3>
                <p className="text-gray-600 text-sm">
                  Single-location operations, member experience, team management, and revenue accountability
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-blue-600">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Lead Supply Chain & Ops Manager
                </h3>
                <p className="text-gray-600 text-sm">
                  Logistics optimization, warehouse management, and distribution network leadership
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How We Add Value Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-poppins font-light text-3xl md:text-4xl text-gray-900 mb-4">
                How We Add Value
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We bring deep operational expertise and a rigorous assessment framework to every search.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative pl-16">
                <div className="absolute left-0 top-0 w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Deep Understanding of Ground-Level Execution
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We understand what it takes to run stores, manage studios, coordinate projects, and deliver operations at scale. Our assessments focus on practical execution capability, not just résumé credentials.
                </p>
              </div>

              <div className="relative pl-16">
                <div className="absolute left-0 top-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Focus on Ownership, Process Discipline & People Management
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Consumer businesses succeed through consistent execution and strong team leadership. We prioritize candidates who take ownership, follow processes, and develop high-performing teams on the ground.
                </p>
              </div>

              <div className="relative pl-16">
                <div className="absolute left-0 top-0 w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Specialization in Multi-Location Operational Scale
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Scaling from 5 to 50 locations requires leaders who can standardize operations, build systems, and maintain quality across geographies. We help you find talent that has successfully navigated this complexity.
                </p>
              </div>

              <div className="relative pl-16">
                <div className="absolute left-0 top-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Emphasis on Productivity, Customer Experience & Operational Efficiency
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We assess candidates not just on their ability to manage operations, but on their track record of improving unit economics, enhancing customer satisfaction, and driving measurable operational improvements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-poppins font-light text-3xl md:text-4xl mb-6">
              Ready to Scale Your Operations?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Whether you're expanding locations, launching new markets, or strengthening operational leadership — we're here to help you build teams that execute with excellence.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-teal-600 text-white px-8 py-4 rounded-full font-medium hover:bg-teal-500 transition-all duration-200 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Discuss Your Operations Hiring Needs →
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

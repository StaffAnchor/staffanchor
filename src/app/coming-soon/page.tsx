'use client';

import { useState } from 'react';
import Link from 'next/link';
import PracticeSidebar from '@/components/layout/PracticeSidebar';

export default function CleanEnergyMobilityPracticePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <>
      <PracticeSidebar 
        isOpen={isSidebarOpen} 
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        currentPage="clean-energy-mobility-practice"
      />

      <div className={`transition-all duration-300 ${isSidebarOpen ? 'lg:ml-64' : 'lg:ml-0'}`}>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-emerald-50 to-blue-50">
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] opacity-30" />
          
          {/* Animated green energy waves */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none">
              <path d="M0 300 Q300 250 600 300 T1200 300" stroke="#10b981" strokeWidth="2" fill="none" opacity="0.5" />
              <path d="M0 320 Q300 370 600 320 T1200 320" stroke="#059669" strokeWidth="2" fill="none" opacity="0.5" />
              <path d="M0 340 Q300 290 600 340 T1200 340" stroke="#047857" strokeWidth="2" fill="none" opacity="0.5" />
            </svg>
          </div>

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              

              <h1 className="font-poppins font-light text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight mb-8">
                A New Practice Area Focused on the<br className="hidden md:block" /> Future of Energy & Mobility
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-6">
                The global shift toward sustainable energy and electric transportation is accelerating. Organizations across energy, mobility, infrastructure, and manufacturing need specialized talent and strategic support to scale rapidly and compete in a transforming landscape.
              </p>

              <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto font-medium">
                Our <span className="text-emerald-700">Clean Energy & Electric Mobility Practice</span> is currently in development. We are building a dedicated offering to help companies lead the transition to a low-carbon, technology-driven future.
              </p>
            </div>
          </div>
        </section>

        {/* What This Practice Will Focus On */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-poppins font-light text-3xl md:text-4xl text-gray-900 mb-4">
                What This Practice Will Focus On
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Supporting the organizations driving the energy transition and electric mobility revolution.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Clean Energy */}
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Clean Energy
                  </h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-3 text-lg font-bold">→</span>
                    <span className="text-gray-700">Renewable energy operations (solar, wind, hybrid systems)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-3 text-lg font-bold">→</span>
                    <span className="text-gray-700">Grid modernization & smart energy systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-3 text-lg font-bold">→</span>
                    <span className="text-gray-700">Energy storage & battery systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-3 text-lg font-bold">→</span>
                    <span className="text-gray-700">Sustainability project execution</span>
                  </li>
                </ul>
              </div>

              {/* Electric Mobility */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Electric Mobility
                  </h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 text-lg font-bold">→</span>
                    <span className="text-gray-700">EV manufacturing, assembly, and quality</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 text-lg font-bold">→</span>
                    <span className="text-gray-700">Charging infrastructure deployment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 text-lg font-bold">→</span>
                    <span className="text-gray-700">Battery management systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 text-lg font-bold">→</span>
                    <span className="text-gray-700">Mobility operations & last-mile electrification</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Aim to Support */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-poppins font-light text-3xl md:text-4xl text-gray-900 mb-4">
                Who We Aim to Support
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Organizations at the forefront of the clean energy and electric mobility transformation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-emerald-600">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Energy and Utility Companies
                </h3>
                <p className="text-gray-600 text-sm">
                  Transitioning to renewable energy sources and modernizing grid infrastructure
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-blue-600">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  EV OEMs and Component Manufacturers
                </h3>
                <p className="text-gray-600 text-sm">
                  Scaling production and establishing new manufacturing capabilities
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-teal-600">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Battery and Storage Innovators
                </h3>
                <p className="text-gray-600 text-sm">
                  Developing next-generation energy storage solutions
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-emerald-600">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Charging Network Operators
                </h3>
                <p className="text-gray-600 text-sm">
                  Building and managing EV charging infrastructure at scale
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-blue-600">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Smart Mobility and Logistics Companies
                </h3>
                <p className="text-gray-600 text-sm">
                  Electrifying fleets and optimizing sustainable transportation
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-teal-600">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Sustainability-Driven Enterprises
                </h3>
                <p className="text-gray-600 text-sm">
                  Implementing clean technology across operations
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Roles We Expect to Cover */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-poppins font-light text-3xl md:text-4xl text-gray-900 mb-4">
                Roles We Expect to Cover
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From technical specialists to operational leaders driving the energy transition.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                'EV Production & Manufacturing Leads',
                'Charging Infrastructure Project Managers',
                'Energy Solutions Engineers',
                'Battery R&D Specialists',
                'Sustainability Program Managers',
                'Operations & Supply Chain Leaders in mobility and energy sectors'
              ].map((role, index) => (
                <div key={index} className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-xl border border-emerald-100 flex items-center">
                  <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <span className="text-gray-900 font-medium">{role}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What You Can Expect */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-emerald-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-poppins font-light text-3xl md:text-4xl text-gray-900 mb-4">
                What You Can Expect When We Launch
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative pl-16">
                <div className="absolute left-0 top-0 w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Domain-Specific Expertise
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  A dedicated practice team with deep understanding of clean energy technologies, EV manufacturing, and sustainable mobility operations.
                </p>
              </div>

              <div className="relative pl-16">
                <div className="absolute left-0 top-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Technical & Operational Capability
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Support for both highly technical engineering roles and operational leadership positions across the energy and mobility value chain.
                </p>
              </div>

              <div className="relative pl-16">
                <div className="absolute left-0 top-0 w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Emerging Technology Understanding
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Deep knowledge of renewable energy systems, battery technologies, charging infrastructure, and electric vehicle platforms.
                </p>
              </div>

              <div className="relative pl-16">
                <div className="absolute left-0 top-0 w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Strategic Scaling Support
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Advisory support for organizations navigating rapid growth, new market entry, and operational scaling in clean-tech sectors.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Callout Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-emerald-900 to-teal-900 rounded-2xl p-12 text-center relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-emerald-700/20 to-transparent rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-teal-700/20 to-transparent rounded-full blur-3xl" />
              
              <div className="relative">
                <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                
                <p className="text-2xl text-white leading-relaxed font-light">
                  We're building this practice with the same <span className="font-semibold">rigor and specialization</span> that shaped our Technology and Consumer practices.
                </p>
                
                <p className="text-xl text-emerald-100 mt-6">
                  More details will be released soon.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-emerald-900 to-teal-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-poppins font-light text-3xl md:text-4xl mb-6">
              Interested in Learning More?
            </h2>
            <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
              If you're working in clean energy or electric mobility and would like to stay informed about this practice's launch, we'd love to hear from you.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-emerald-500 text-white px-8 py-4 rounded-full font-medium hover:bg-emerald-400 transition-all duration-200 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Get in Touch →
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

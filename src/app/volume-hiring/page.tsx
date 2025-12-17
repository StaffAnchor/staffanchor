'use client';

import { useState } from 'react';
import Link from 'next/link';
import PracticeSidebar from '@/components/layout/PracticeSidebar';

export default function VolumeHiringPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <>
      <PracticeSidebar 
        isOpen={isSidebarOpen} 
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        currentPage="volume-hiring"
      />

      <div className={`transition-all duration-300 ${isSidebarOpen ? 'lg:ml-64' : 'lg:ml-0'}`}>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] opacity-30" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="font-poppins font-light text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight mb-6">
                Volume Hiring, Without Compromising Sales Quality
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-4">
                We help fast-growing companies scale sales teams across cities, roles and timelines — using structured hiring sprints, motion-specific screening, and real-time execution control.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Built for scale-ups, enterprise rollouts, and revenue teams under aggressive timelines.              
              </p>
            </div>
          </div>
        </section>

        {/* Why Volume Hiring Breaks Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xs font-bold tracking-widest text-blue-900 uppercase mb-12 text-center">
              Why Volume Hiring Breaks — And How We Fix It
            </h2>

            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Motion-Specific Screening</h3>
                <p className="text-gray-600">
                  Inside, field, channel and enterprise sales are evaluated differently — we don't reuse one-size-fits-all filters.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Velocity with Control</h3>
                <p className="text-gray-600">
                  Dedicated hiring pods, daily milestones, and weekly funnel reviews ensure speed without chaos.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Multi-City Playbooks</h3>
                <p className="text-gray-600">
                  Parallel pipelines across locations with centralized reporting and decision control.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality Guardrails</h3>
                <p className="text-gray-600">
                  Behavioural, competency and motion-fit checks remain mandatory — even at scale.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* When to Use This Service Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-poppins font-light text-3xl md:text-4xl text-gray-900 mb-4">
                When This Works Best
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {[
                { text: 'Launching new products, verticals, or GTM motions', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
                { text: 'Expanding into new cities or regions', icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
                { text: 'Building large Inside Sales or Field Sales teams', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
                { text: 'High-volume mandates with strict hiring deadlines', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' }
              ].map((item, index) => (
                <div key={index} className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-blue-300 transition-all duration-300">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-600 transition-colors duration-300 shrink-0">
                      <svg className="w-6 h-6 text-blue-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium text-lg">{item.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Roles We Commonly Hire at Scale Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-poppins font-light text-3xl md:text-4xl text-gray-900 mb-4">
                Roles We Commonly Hire at Scale
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                While no two scale-up mandates look the same, we typically support high-volume hiring across the following sales roles:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
              {[
                'SDRs / BDRs',
                'Inside Sales Executives',
                'Field Sales Executives',
                'Key Account Executives',
                'Channel / Distributor Sales',
                'City / Cluster Sales Managers'
              ].map((role, index) => (
                <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-3 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-800 font-semibold">{role}</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto">
              If your scale requirement goes beyond these roles, our team custom-designs the hiring model accordingly.
            </p>
          </div>
        </section>

        {/* Scale-Up Delivery Model Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-poppins font-light text-3xl md:text-4xl text-gray-900 mb-4">
                Scale-Up Delivery Model
              </h2>
              <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto">
              Scaling sales teams isn’t about adding recruiters — it’s about running a controlled execution program. Our scale-up delivery model combines workforce planning, hiring velocity, and quality checkpoints into a single operating rhythm.
            </p>
            </div>

            <div className="space-y-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-6 shrink-0">
                    <span className="text-white font-bold text-2xl">1</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">Workforce Planning & Role Definition</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Structured forecasting of required roles, timelines and hiring velocity.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mr-6 shrink-0">
                    <span className="text-white font-bold text-2xl">2</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">Weekly Funnel Reporting</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Real-time visibility: sourcing → screening → interviews → conversions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-6 shrink-0">
                    <span className="text-white font-bold text-2xl">3</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">Quality-Controlled High-Volume Screening</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Motion-specific filters to maintain quality at speed.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mr-6 shrink-0">
                    <span className="text-white font-bold text-2xl">4</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">Dedicated Hiring Team</h3>
                    <p className="text-gray-600 leading-relaxed">
                      A specialised task-force with daily milestones.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-6 shrink-0">
                    <span className="text-white font-bold text-2xl">5</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">Multi-Geography Coordination</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Parallel pipelines for multiple locations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What You Receive Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-poppins font-light text-3xl md:text-4xl text-gray-900 mb-4">
                What You Receive
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {[
                { title: 'A clearly defined hiring plan with timelines', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4' },
                { title: 'Weekly funnel visibility across locations', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
                { title: 'Consistent quality benchmarks across candidates', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
                { title: 'Faster onboarding alignment with sales leadership', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
                { title: 'A single point of accountability for delivery', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' }
              ].map((item, index) => (
                <div key={index} className="relative pl-16">
                  <div className="absolute left-0 top-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-poppins font-light text-3xl md:text-4xl mb-6">
              Ready to Scale Without Losing Control?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
             Let’s design a high-velocity hiring program aligned to your growth goals, timelines, and sales motion.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-teal-600 text-white px-8 py-4 rounded-full font-medium hover:bg-teal-500 transition-all duration-200 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Explore Scale-Up Hiring →
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

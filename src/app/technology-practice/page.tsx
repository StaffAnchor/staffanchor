'use client';

import { useState } from 'react';
import Link from 'next/link';
import PracticeSidebar from '@/components/layout/PracticeSidebar';

export default function TechnologyPracticePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <>
      <PracticeSidebar 
        isOpen={isSidebarOpen} 
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        currentPage="technology-practice"
      />

      <div className={`transition-all duration-300 ${isSidebarOpen ? 'lg:ml-64' : 'lg:ml-0'}`}>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] opacity-30" />
          
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="font-poppins font-light text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight mb-6">
                Technology Practice
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-6">
                Technology teams today are expected to move fast, stay secure, scale globally, and deliver measurable outcomes. Our Technology Practice partners with organizations to build, modernize, and strengthen their digital capabilities across engineering, data, cloud, AI, cybersecurity, and product.
              </p>

              <p className="text-xl font-semibold text-gray-900 leading-relaxed">
                We don't just find talent — we enable teams to operate at a higher level.
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
                We support organizations across the full technology lifecycle, covering:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* AI & Machine Learning */}
              <div className="group bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl hover:border-blue-300 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <svg className="w-6 h-6 text-blue-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  AI & Machine Learning
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">✓</span>
                    <span className="text-gray-600">Building ML pipelines</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">✓</span>
                    <span className="text-gray-600">Model deployment & MLOps</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">✓</span>
                    <span className="text-gray-600">Generative AI pilots and integrations</span>
                  </div>
                </div>
              </div>

              {/* Data & Analytics */}
              <div className="group bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl hover:border-teal-300 transition-all duration-300">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-teal-600 transition-colors duration-300">
                  <svg className="w-6 h-6 text-teal-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Data & Analytics
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-teal-600 mr-2 mt-1">✓</span>
                    <span className="text-gray-600">Data engineering & warehousing</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-teal-600 mr-2 mt-1">✓</span>
                    <span className="text-gray-600">BI modernization</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-teal-600 mr-2 mt-1">✓</span>
                    <span className="text-gray-600">Real-time analytics & governance</span>
                  </div>
                </div>
              </div>

              {/* SaaS Product Development */}
              <div className="group bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl hover:border-blue-300 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <svg className="w-6 h-6 text-blue-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  SaaS Product Development
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">✓</span>
                    <span className="text-gray-600">Full-stack engineering for SaaS</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">✓</span>
                    <span className="text-gray-600">Multi-tenant architecture</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">✓</span>
                    <span className="text-gray-600">Subscription experience & billing workflows</span>
                  </div>
                </div>
              </div>

              {/* Cybersecurity */}
              <div className="group bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl hover:border-teal-300 transition-all duration-300">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-teal-600 transition-colors duration-300">
                  <svg className="w-6 h-6 text-teal-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Cybersecurity
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-teal-600 mr-2 mt-1">✓</span>
                    <span className="text-gray-600">Security frameworks & compliance (SOC2, ISO, GDPR)</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-teal-600 mr-2 mt-1">✓</span>
                    <span className="text-gray-600">Cloud & application security</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-teal-600 mr-2 mt-1">✓</span>
                    <span className="text-gray-600">Governance, risk, and controls</span>
                  </div>
                </div>
              </div>

              {/* Cloud & DevOps */}
              <div className="group bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl hover:border-blue-300 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <svg className="w-6 h-6 text-blue-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Cloud & DevOps
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">✓</span>
                    <span className="text-gray-600">Infrastructure modernization</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">✓</span>
                    <span className="text-gray-600">CI/CD automation</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">✓</span>
                    <span className="text-gray-600">Containerization & orchestration (Docker, K8s)</span>
                  </div>
                </div>
              </div>

              {/* Product & Engineering Leadership */}
              <div className="group bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl hover:border-teal-300 transition-all duration-300 md:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-teal-600 transition-colors duration-300">
                  <svg className="w-6 h-6 text-teal-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Product & Engineering Leadership
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-teal-600 mr-2 mt-1">✓</span>
                    <span className="text-gray-600">Roadmap ownership</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-teal-600 mr-2 mt-1">✓</span>
                    <span className="text-gray-600">Technical strategy</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-teal-600 mr-2 mt-1">✓</span>
                    <span className="text-gray-600">Cross-functional execution</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Roles We Hire Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-poppins font-light text-3xl md:text-4xl text-gray-900 mb-4">
                Roles We Hire
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From engineering leadership to SaaS go-to-market — we help you build teams that drive innovation and growth.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Technical Leadership Roles */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Technical Leadership
                  </h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 text-lg">→</span>
                    <span className="text-gray-700">Engineering Manager / Head of Engineering</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 text-lg">→</span>
                    <span className="text-gray-700">Senior Product Manager / Director of Product</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 text-lg">→</span>
                    <span className="text-gray-700">Lead Data Engineer / ML Engineer</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 text-lg">→</span>
                    <span className="text-gray-700">Cloud Architect / DevOps Lead</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 text-lg">→</span>
                    <span className="text-gray-700">Security Architect / GRC Lead</span>
                  </li>
                </ul>
              </div>

              {/* SaaS Sales & GTM Roles */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    SaaS Sales & GTM
                  </h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-3 text-lg">→</span>
                    <span className="text-gray-700">Head of Sales (SaaS)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-3 text-lg">→</span>
                    <span className="text-gray-700">Director – Enterprise Sales</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-3 text-lg">→</span>
                    <span className="text-gray-700">Inside Sales / SMB Lead</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-3 text-lg">→</span>
                    <span className="text-gray-700">Customer Success Manager / CSM Lead</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-3 text-lg">→</span>
                    <span className="text-gray-700">Sales Engineering Lead / Solutions Consultant</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-3 text-lg">→</span>
                    <span className="text-gray-700">Revenue Operations (RevOps) Manager</span>
                  </li>
                </ul>
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
                We bring deep technical expertise and a rigorous assessment framework to every search.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative pl-16">
                <div className="absolute left-0 top-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Deep Understanding of Modern Engineering Culture
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We understand hiring signals and execution patterns that define high-performing technology teams, ensuring cultural and technical fit.
                </p>
              </div>

              <div className="relative pl-16">
                <div className="absolute left-0 top-0 w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Outcome-Driven Role Definition
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We focus on roles that drive measurable business outcomes rather than simply filling positions, aligning talent strategy with organizational goals.
                </p>
              </div>

              <div className="relative pl-16">
                <div className="absolute left-0 top-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Rigorous Technical & Product-Thinking Evaluation
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our assessment framework evaluates both technical capability and product-thinking maturity, ensuring candidates can navigate complexity and drive innovation.
                </p>
              </div>

              <div className="relative pl-16">
                <div className="absolute left-0 top-0 w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  SaaS Specialization
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Specialized expertise in SaaS organizations where speed, predictability, and sustainable growth are business-critical requirements.
                </p>
              </div>

              <div className="relative pl-16">
                <div className="absolute left-0 top-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-xl font-bold">5</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Sustainable Scaling Through Cross-Functional Alignment
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We support long-term organizational health by ensuring new hires integrate seamlessly across product, engineering, sales, and operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-poppins font-light text-3xl md:text-4xl mb-6">
              Ready to Strengthen Your Technology Team?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Whether you're scaling engineering, modernizing infrastructure, or building product capabilities — we're here to help you hire with precision.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-teal-600 text-white px-8 py-4 rounded-full font-medium hover:bg-teal-500 transition-all duration-200 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Discuss Your Technology Hiring Needs →
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

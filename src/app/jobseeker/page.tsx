'use client';

import JobseekerForm from '@/components/ui/JobseekerForm';
import { submitJobSeekerForm } from '@/utils/googleSheets';

export default function JobSeekersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 -mt-16">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] opacity-30" />
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="font-poppins font-light text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight mb-6">
              Build a Stronger, Faster Sales Career.
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-8">
              Structured guidance, real hiring insight, and selective opportunities—designed exclusively for sales professionals.
            </p>

            <div className="flex flex-col items-center gap-3">
              <a href="https://rzp.io/rzp/Y8GVOwco" target="_blank" rel="noopener noreferrer" className="bg-[#1e3a8a] hover:bg-[#1e40af] cursor-pointer text-white font-semibold px-10 py-4 rounded-full text-lg transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-3 group">
                Book Sales Career Strategy Call
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <p className="text-sm text-gray-500">
                Paid · 1:1 · Not job placement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Careers Fail Section */}
      <section className="py-20 pb-8 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-semibold text-3xl md:text-4xl text-gray-900 mb-6">
              Sales careers don't fail due to lack of effort.
            </h2>
            
            <p className="text-xl text-gray-700 leading-relaxed mb-10">
              They fail due to poor positioning, unclear direction, and weak execution at critical moments.
            </p>

            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 md:p-12 shadow-lg border border-gray-200">
              <p className="text-lg text-gray-800 leading-relaxed mb-6">
                At StaffAnchor, we help sales professionals at every stage — from freshers entering sales to leaders preparing for senior roles. We help Candidates make smarter career decisions with clarity, structure, and real market insight.
              </p>
              
              <p className="text-lg text-gray-900 font-semibold">
                Our services are delivered through personalised, paid engagements, designed around your career stage and goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Slim CTA Bar */}
      <section className="py-6 bg-white border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-lg text-gray-800">
              If you're unclear what's holding your sales career back, don't guess.
            </p>
            <a href="https://rzp.io/rzp/Y8GVOwco" target="_blank" rel="noopener noreferrer" className="bg-[#1e3a8a] hover:bg-[#1e40af] text-white font-semibold px-8 py-3 rounded-full text-base transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2 group whitespace-nowrap">
              Book Sales Career Strategy Call
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-semibold text-3xl md:text-4xl text-gray-900 mb-8">
              WHO THIS IS FOR
            </h2>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 md:p-12">
            <p className="text-xl text-gray-900 font-semibold mb-8 text-center">
              This page is for you if you are:
            </p>

            <ul className="space-y-4 mb-8 max-w-3xl mx-auto">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-4 mt-2.5 shrink-0"></div>
                <p className="text-lg text-gray-700 leading-relaxed">Trying to break into sales and want a strong foundation</p>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-teal-600 rounded-full mr-4 mt-2.5 shrink-0"></div>
                <p className="text-lg text-gray-700 leading-relaxed">Actively interviewing but not converting offers</p>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-4 mt-2.5 shrink-0"></div>
                <p className="text-lg text-gray-700 leading-relaxed">In sales but stuck at the same level or compensation</p>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-teal-600 rounded-full mr-4 mt-2.5 shrink-0"></div>
                <p className="text-lg text-gray-700 leading-relaxed">A top performer aiming for leadership or high-growth roles</p>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-4 mt-2.5 shrink-0"></div>
                <p className="text-lg text-gray-700 leading-relaxed">Unsure which industry, role, or company type suits you best</p>
              </li>
            </ul>

            <div className="flex justify-center my-8">
              <a href="https://rzp.io/rzp/Y8GVOwco" target="_blank" rel="noopener noreferrer" className="bg-[#1e3a8a] hover:bg-[#1e40af] text-white font-semibold px-8 py-4 rounded-full text-base transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2 group">
                This sounds like me - Book Sales Career Strategy Call
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-blue-600">
              <p className="text-lg text-gray-800 leading-relaxed">
                If you're looking for shortcuts or free advice, this isn't it. <span className="font-semibold">If you're serious about your sales career, you're in the right place.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Services */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">OUR CORE CAREER SERVICES</h2>
          </div>

          

          <div className="space-y-16">
            {/* 1. Interview Readiness & Hiring Confidence */}
            <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200">
              <div className="max-w-4xl">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded flex items-center justify-center mr-4 shrink-0">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">Interview Readiness & Hiring Confidence</h3>
                  </div>
                </div>
                
                <p className="text-xl font-semibold text-gray-900 mb-6">Crack interviews with structure, clarity, and confidence.</p>
                
                <p className="text-lg text-gray-700 mb-6">
                  We prepare you for <span className="font-semibold">real hiring situations</span>, not generic mock questions.
                </p>

                <p className="text-lg font-semibold text-gray-900 mb-4">What we work on:</p>
                <ul className="space-y-3 mb-6 ml-6">
                  <li className="flex items-start">
                    <span className="text-gray-900 mr-3">•</span>
                    <span className="text-lg text-gray-700">Role-specific interview simulations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-900 mr-3">•</span>
                    <span className="text-lg text-gray-700">Objection handling & situational questions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-900 mr-3">•</span>
                    <span className="text-lg text-gray-700">Pitching your experience clearly and convincingly</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-900 mr-3">•</span>
                    <span className="text-lg text-gray-700">Communicating impact, numbers, and ownership</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-900 mr-3">•</span>
                    <span className="text-lg text-gray-700">Mock Q&A based on current hiring patterns in India</span>
                  </li>
                </ul>

                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-blue-600">
                  <p className="text-lg text-gray-800"><span className="font-semibold">Outcome for you:</span></p>
                  <p className="text-lg text-gray-700">You walk into interviews <span className="font-semibold">knowing exactly what to say, how to say it, and why it works.</span></p>
                </div>
              </div>
            </div>

            {/* 2. Sales Skill & On-the-Job Performance Development */}
            <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200">
              <div className="max-w-4xl">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded flex items-center justify-center mr-4 shrink-0">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">Sales Skill & On-the-Job Performance Development</h3>
                  </div>
                </div>
                
                <p className="text-xl font-semibold text-gray-900 mb-6">Become the kind of salesperson companies want to retain and promote.</p>
                
                <p className="text-lg text-gray-700 mb-6">
                  This is for professionals already in sales who want to <span className="font-semibold">perform better, faster</span>.
                </p>

                <p className="text-lg font-semibold text-gray-900 mb-4">We help you strengthen:</p>
                <ul className="space-y-3 mb-6 ml-6">
                  <li className="flex items-start">
                    <span className="text-gray-900 mr-3">•</span>
                    <span className="text-lg text-gray-700">Cold calling & opening conversations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-900 mr-3">•</span>
                    <span className="text-lg text-gray-700">Discovery questioning & qualification</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-900 mr-3">•</span>
                    <span className="text-lg text-gray-700">Demo flow & product articulation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-900 mr-3">•</span>
                    <span className="text-lg text-gray-700">Negotiation and deal control</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-900 mr-3">•</span>
                    <span className="text-lg text-gray-700">Pipeline discipline & forecasting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-900 mr-3">•</span>
                    <span className="text-lg text-gray-700">Closing techniques</span>
                  </li>
                </ul>

                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-blue-600">
                  <p className="text-lg text-gray-800"><span className="font-semibold">Outcome for you:</span></p>
                  <p className="text-lg text-gray-700">You hit targets more consistently, build credibility internally, and stand out as high-potential talent.</p>
                </div>
              </div>
            </div>

            {/* 3. Resume & Profile Positioning */}
            <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200">
              <div className="max-w-4xl">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded flex items-center justify-center mr-4 shrink-0">
                    <span className="text-white font-bold text-lg">3</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">Resume & Profile Positioning (Sales-Specific)</h3>
                  </div>
                </div>
                
                <p className="text-xl font-semibold text-gray-900 mb-6">Your resume should sell you—most don't.</p>
                
                <p className="text-lg text-gray-700 mb-6">
                  We build <span className="font-semibold">achievement-driven sales resumes</span>, not generic profiles.
                </p>

                <p className="text-lg font-semibold text-gray-900 mb-4">We highlight:</p>
                <ul className="space-y-3 mb-6 ml-6">
                  <li className="flex items-start">
                    <span className="text-gray-900 mr-3">•</span>
                    <span className="text-lg text-gray-700">Targets achieved and % performance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-900 mr-3">•</span>
                    <span className="text-lg text-gray-700">Revenue and deal impact</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-900 mr-3">•</span>
                    <span className="text-lg text-gray-700">Pipeline ownership</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-900 mr-3">•</span>
                    <span className="text-lg text-gray-700">Key accounts handled</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-900 mr-3">•</span>
                    <span className="text-lg text-gray-700">Growth trajectory</span>
                  </li>
                </ul>

                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-blue-600">
                  <p className="text-lg text-gray-800"><span className="font-semibold">Outcome for you:</span></p>
                  <p className="text-lg text-gray-700">Higher shortlisting rates and <span className="font-semibold">serious recruiter attention</span>, not mass rejection.</p>
                </div>
              </div>
            </div>

            {/* 4. Career Roadmapping */}
            <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200">
              <div className="max-w-4xl">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded flex items-center justify-center mr-4 shrink-0">
                    <span className="text-white font-bold text-lg">4</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">Career Roadmapping & Long-Term Growth Planning</h3>
                  </div>
                </div>
                
                <p className="text-xl font-semibold text-gray-900 mb-6">Know exactly how to move from where you are to where you want to be.</p>
                
                <p className="text-lg text-gray-700 mb-6">
                  We help you design a <span className="font-semibold">realistic, market-aligned growth path</span>.
                </p>

                <p className="text-lg font-semibold text-gray-900 mb-4">Typical paths we structure:</p>
                <div className="bg-gray-100 rounded-lg p-4 mb-6 border-l-4 border-gray-400">
                  <p className="text-lg text-gray-800 font-medium">SDR → AE → Senior AE → Manager → Director → VP Sales → CRO</p>
                </div>

                <p className="text-lg font-semibold text-gray-900 mb-4">What we cover:</p>
                <ul className="space-y-3 mb-6 ml-6">
                  <li className="flex items-start">
                    <span className="text-gray-900 mr-3">•</span>
                    <span className="text-lg text-gray-700">Skill gaps at each level</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-900 mr-3">•</span>
                    <span className="text-lg text-gray-700">Timing and readiness signals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-900 mr-3">•</span>
                    <span className="text-lg text-gray-700">Industry switches (SaaS, Fintech, BFSI, D2C, etc.)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-900 mr-3">•</span>
                    <span className="text-lg text-gray-700">Leadership transition preparation</span>
                  </li>
                </ul>

                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-blue-600">
                  <p className="text-lg text-gray-800"><span className="font-semibold">Outcome for you:</span></p>
                  <p className="text-lg text-gray-700">Clear direction, fewer wrong moves, and a <span className="font-semibold">predictable growth plan</span>.</p>
                </div>
              </div>
            </div>

            {/* 5. Job Matching & Selective Opportunity Access */}
            <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200">
              <div className="max-w-4xl">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded flex items-center justify-center mr-4 shrink-0">
                    <span className="text-white font-bold text-lg">5</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">Job Matching & Selective Opportunity Access</h3>
                  </div>
                </div>
                
                <p className="text-xl font-semibold text-gray-900 mb-6">Visibility where it actually matters.</p>
                
                <p className="text-lg text-gray-700 mb-6">
                  We selectively feature strong candidates to <span className="font-semibold">companies actively hiring quality sales talent</span>.
                </p>

                <p className="text-lg font-semibold text-gray-900 mb-4">Industries include:</p>
                <ul className="space-y-3 mb-6 ml-6">
                  <li className="flex items-start">
                    <span className="text-gray-900 mr-3">•</span>
                    <span className="text-lg text-gray-700">SaaS & Technology</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-900 mr-3">•</span>
                    <span className="text-lg text-gray-700">Fintech & BFSI</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-900 mr-3">•</span>
                    <span className="text-lg text-gray-700">Real Estate & Consumer Businesses</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-900 mr-3">•</span>
                    <span className="text-lg text-gray-700">D2C & Emerging Startups</span>
                  </li>
                </ul>

                <p className="text-lg font-semibold text-gray-900 mb-4">Important note:</p>
                <p className="text-lg text-gray-700 mb-6">
                  This is <span className="font-semibold">not a job guarantee</span> or mass placement service.
                </p>

                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-blue-600">
                  <p className="text-lg text-gray-800"><span className="font-semibold">Outcome for you:</span></p>
                  <p className="text-lg text-gray-700">Higher-quality conversations with employers who value your profile.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        {/* Transition Block */}
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Not sure which of these you need right now?
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Start with a strategy call. We'll diagnose before recommending anything.
              </p>
              <a href="https://rzp.io/rzp/Y8GVOwco" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#1e3a8a] hover:bg-[#1e40af] text-white font-semibold px-8 py-3 rounded-full text-base transition-all duration-200 shadow-md hover:shadow-lg group">
                Book Sales Career Strategy Call
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

      

      {/* Why Jobseekers Trust StaffAnchor */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Why Jobseekers Trust StaffAnchor</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-gray-700 leading-relaxed">We specialise only in sales</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <p className="text-gray-700 leading-relaxed">Our frameworks come from real hiring and leadership experience</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-gray-700 leading-relaxed">We understand what Indian employers actually look for</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <p className="text-gray-700 leading-relaxed">We focus on outcomes, not theory — our guidance aligns with how companies hire today</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form & CTA */}
      <section className="section-padding bg-gradient-to-br from-blue-900 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4 text-blue-100">READY TO TAKE YOUR SALES CAREER SERIOUSLY?</h2>
            <p className="text-xl text-blue-100">
              Share your profile and we'll help you accelerate your sales career.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            <JobseekerForm
              title="Upload Your Professional Profile"
              subtitle="Let us help you find the right opportunities and develop your sales career."
              onSubmit={submitJobSeekerForm}
            />
          </div>
        </div>
      </section>
    </>
  );
}
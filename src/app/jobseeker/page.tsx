'use client';

import HeroSection from '@/components/ui/HeroSection';
import JobseekerForm from '@/components/ui/JobseekerForm';
import { submitJobSeekerForm } from '@/utils/googleSheets';

export default function JobSeekersPage() {
  return (
    <>
      <HeroSection 
        headline="Build a Stronger, Faster Sales Career."
        subtext="Access the training, guidance, and opportunities that accelerate your growth in sales."
      />

      {/* Career Services */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Career Services</h2>
            <p className="text-xl text-gray-600">Comprehensive support to help you excel in sales</p>
          </div>

          <div className="space-y-16">
            {/* Interview Preparation */}
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 md:p-12">
              <div className="max-w-4xl">
                <div className="flex items-start mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-6 shrink-0">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">Interview Preparation</h3>
                    <p className="text-lg text-gray-700 mb-4">Get ready to crack even the toughest sales interviews.</p>
                  </div>
                </div>
                
                <div className="ml-20">
                  <p className="text-gray-700 mb-4 font-medium">We prepare you through:</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">•</span>
                      <span className="text-gray-700">Real interview simulations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">•</span>
                      <span className="text-gray-700">Objection-handling practice</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">•</span>
                      <span className="text-gray-700">Pitch development & storytelling</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">•</span>
                      <span className="text-gray-700">Communication clarity coaching</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">•</span>
                      <span className="text-gray-700">Mock Q&A based on actual hiring patterns</span>
                    </li>
                  </ul>
                  <div className="bg-white rounded-lg p-4 border-l-4 border-blue-600">
                    <p className="text-gray-800"><span className="font-semibold">Benefit to you:</span> You walk into interviews with confidence, structure, and the ability to impress hiring managers from the first minute.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sales Skill Development */}
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-8 md:p-12">
              <div className="max-w-4xl">
                <div className="flex items-start mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mr-6 shrink-0">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">Sales Skill Development</h3>
                    <p className="text-lg text-gray-700 mb-4">Master the skills top-performing sales professionals use daily.</p>
                  </div>
                </div>
                
                <div className="ml-20">
                  <p className="text-gray-700 mb-4 font-medium">We help you strengthen:</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span className="text-gray-700">Cold calling & opening lines</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span className="text-gray-700">Discovery questioning</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span className="text-gray-700">Demo flow & product articulation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span className="text-gray-700">Negotiation strategies</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span className="text-gray-700">Pipeline discipline</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span className="text-gray-700">Closing techniques</span>
                    </li>
                  </ul>
                  <div className="bg-white rounded-lg p-4 border-l-4 border-teal-600">
                    <p className="text-gray-800"><span className="font-semibold">Benefit to you:</span> You perform better on the job, hit your targets faster, and stand out as a high-potential sales professional.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Job Matching & Opportunities */}
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 md:p-12">
              <div className="max-w-4xl">
                <div className="flex items-start mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-6 shrink-0">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">Job Matching & Opportunities</h3>
                    <p className="text-lg text-gray-700 mb-4">Access exclusive roles with companies actively looking for strong sales talent.</p>
                  </div>
                </div>
                
                <div className="ml-20">
                  <p className="text-gray-700 mb-6">We feature top candidates to hiring managers across SaaS, Fintech, Real Estate, BFSI, D2C and more.</p>
                  <div className="bg-white rounded-lg p-4 border-l-4 border-blue-600">
                    <p className="text-gray-800"><span className="font-semibold">Benefit to you:</span> You get visibility where it matters — increasing your chances of landing the right role, not just any role.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Career Road Mapping */}
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-8 md:p-12">
              <div className="max-w-4xl">
                <div className="flex items-start mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mr-6 shrink-0">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">Career Road Mapping</h3>
                    <p className="text-lg text-gray-700 mb-4">Know exactly how to grow from your current level to leadership roles.</p>
                  </div>
                </div>
                
                <div className="ml-20">
                  <p className="text-gray-700 mb-4">We guide you on the skills, behaviours and milestones required to progress:</p>
                  <div className="bg-white rounded-lg p-4 mb-6">
                    <p className="text-gray-800 font-medium text-center">SDR → AE → Senior AE → Manager → Director → VP Sales → CRO</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border-l-4 border-teal-600">
                    <p className="text-gray-800"><span className="font-semibold">Benefit to you:</span> You gain clarity and direction, making your growth predictable and achievable.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Resume Enhancement */}
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 md:p-12">
              <div className="max-w-4xl">
                <div className="flex items-start mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-6 shrink-0">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">Resume Enhancement</h3>
                    <p className="text-lg text-gray-700 mb-4">A strong resume designed specifically for sales roles.</p>
                  </div>
                </div>
                
                <div className="ml-20">
                  <p className="text-gray-700 mb-4 font-medium">We create achievement-driven resumes that highlight:</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">•</span>
                      <span className="text-gray-700">Targets achieved</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">•</span>
                      <span className="text-gray-700">Revenue generated</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">•</span>
                      <span className="text-gray-700">Pipeline managed</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">•</span>
                      <span className="text-gray-700">Key deals closed</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">•</span>
                      <span className="text-gray-700">Result-oriented impact</span>
                    </li>
                  </ul>
                  <div className="bg-white rounded-lg p-4 border-l-4 border-blue-600">
                    <p className="text-gray-800"><span className="font-semibold">Benefit to you:</span> Your resume stands out instantly — increasing shortlisting chances significantly.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              <p className="text-gray-700 leading-relaxed">We specialise only in sales — so our guidance is sharper and more relevant</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <p className="text-gray-700 leading-relaxed">Our frameworks are built from real sales leadership, not generic coaching</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-gray-700 leading-relaxed">We know exactly what employers look for in top-tier sales talent</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <p className="text-gray-700 leading-relaxed">You gain clarity, confidence and a strong competitive edge</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form & CTA */}
      <section className="section-padding bg-gradient-to-br from-blue-900 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4 text-white">Submit & Get Support</h2>
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
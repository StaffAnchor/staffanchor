'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '@/components/ui/HeroSection';
import ContactForm from '@/components/ui/ContactForm';
import UploadForm from '@/components/ui/UploadForm';
import { submitEmployerForm, submitJobSeekerForm } from '@/utils/googleSheets';

const employerContactFields = [
  { name: "name", label: "Full Name", type: "text" as const, required: true, placeholder: "Enter your full name" },
  { name: "company", label: "Company Name", type: "text" as const, required: true, placeholder: "Enter your company name" },
  { name: "name", label: "Designation", type: "text" as const, required: true, placeholder: "HR, CEO, Founder, etc" },
  { name: "email", label: "Email Address", type: "email" as const, required: true, placeholder: "Enter your email" },
  { name: "phone", label: "Phone Number", type: "tel" as const, placeholder: "Enter your phone number" },
  { name: "message", label: "Additional Requirements", type: "textarea" as const, placeholder: "Tell us about your specific requirements, timeline, and expectations..." },
];

export default function ContactPage() {
  const [activeForm, setActiveForm] = useState<'employer' | 'jobseeker'>('employer');

  return (
    <>
    <section className="section-padding">

      <HeroSection 
        headline="Let's Build Your Next Great Team."
        subtext="Ready to transform your hiring? Connect with our intelligence partners and discover the StaffAnchor advantage."
        centered={true}
        />
    </section>

      {/* Contact Information */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-8">Get In Touch</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Whether you&apos;re looking to hire exceptional talent or seeking your next career opportunity, 
              our team of intelligence partners is here to help you succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-linear-to-br from-blue-900 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Email Us</h3>
              <a href="mailto:info@staffanchor.com" className="text-teal-600 hover:text-teal-700">
                info@staffanchor.com
              </a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-linear-to-br from-blue-900 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Call Us</h3>
              <a href="tel:+917273000088" className="text-teal-600 hover:text-teal-700">
                +91 7273000088
              </a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-linear-to-br from-blue-900 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Connect</h3>
              <a 
                href="https://linkedin.com/company/staffanchor" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-teal-600 hover:text-teal-700"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Forms */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Toggle Buttons */}
          <div className="flex justify-center mb-12">
            <div className="bg-white p-2 rounded-full shadow-lg border border-gray-200">
              <div className="flex">
                <button
                  onClick={() => setActiveForm('employer')}
                  className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeForm === 'employer'
                      ? 'bg-blue-900 text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  For Employers
                </button>
                <button
                  onClick={() => setActiveForm('jobseeker')}
                  className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeForm === 'jobseeker'
                      ? 'bg-teal-600 text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  For Job Seekers
                </button>
              </div>
            </div>
          </div>

          {/* Form Container */}
          <div className="flex justify-center">
            <div className="w-full max-w-2xl">
              <motion.div
                key={activeForm}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {activeForm === 'employer' ? (
                  <ContactForm
                    title="For Employers"
                    subtitle="Share your hiring requirements and let us create a tailored recruitment strategy."
                    fields={employerContactFields}
                    submitText="Submit Hiring Request →"
                    onSubmit={submitEmployerForm}
                  />
                ) : (
                  <UploadForm
                    title="For Job Seekers"
                    subtitle="Join our talent network and get matched with exclusive opportunities."
                    onSubmit={submitJobSeekerForm}
                  />
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose StaffAnchor */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-lg mb-12">Why Choose StaffAnchor?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="font-semibold text-lg text-gray-900 mb-4">For Employers</h3>
              <ul className="space-y-3 text-left">
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">12-day average time to hire</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">95% retention rate</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">AI-powered precision matching</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Real-time talent analytics</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="font-semibold text-lg text-gray-900 mb-4">For Job Seekers</h3>
              <ul className="space-y-3 text-left">
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Curated exclusive opportunities</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Career consultation and guidance</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Market intelligence insights</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Long-term career partnership</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
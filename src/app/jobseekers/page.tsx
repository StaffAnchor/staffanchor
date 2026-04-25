'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import HeroSection from '@/components/ui/HeroSection';
import MetricsStrip from '@/components/ui/MetricsStrip';
import TestimonialCard from '@/components/ui/TestimonialCard';
import Image from 'next/image';

const jobseekerMetrics = [
  { value: "5000+", label: "Active Profiles", description: "Career Ready" },
  { value: "92%", label: "Placement Rate", description: "Success Rate" },
  { value: "25+ Days", label: "Avg. Time to Offer", description: "Quick Placement" },
  { value: "40%", label: "Salary Growth", description: "Average Increase" },
];

const jobseekerBenefits = [
  {
    title: "Build Your Professional Profile",
    description: "Create a comprehensive profile that showcases your sales expertise, track record, and career achievements. More detailed than resumes, built for what employers actually want to know.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Get Discovered by Top Companies",
    description: "Your profile becomes visible to verified hiring teams actively looking for talent like you. No applying to dozens of jobs — let the right opportunities find you.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Showcase Your Performance Metrics",
    description: "Share quota achievement, pipeline impact, deal sizes and outcomes. Move beyond vague summaries and show hiring teams exactly what you've delivered.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

const whyJoinBenefits = [
  {
    title: "Control Your Visibility",
    description: "Your profile is visible only to verified hiring teams. Pause discovery when you want privacy, reactivate when you're open to opportunities.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: "Direct Communication with Hiring Teams",
    description: "No agency middleman. Connect directly with decision-makers from companies looking to build their sales teams. Transparent, fast, and respectful.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Matched Opportunities",
    description: "Hiring teams find you through filters and skill matching. You receive opportunities aligned with your location preference, salary expectations and career goals.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Free Lifetime Profile",
    description: "No fees to create, maintain or update your profile. Ever. Build your presence at StaffAnchor completely free.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const jobseekerJourney = [
  {
    step: "01",
    title: "Create Your Account",
    description: "Sign up in minutes, verify your email, and start building your professional profile.",
  },
  {
    step: "02",
    title: "Build Your Complete Profile",
    description: "Add your experience, performance metrics, skills, location preferences, and salary expectations.",
  },
  {
    step: "03",
    title: "Get Discovered",
    description: "Verified hiring teams find you through filters and reach out directly with opportunities that match your goals.",
  },
];

const testimonials = [
  {
    quote: "Found my ideal role within 3 weeks. Direct conversations with hiring teams made all the difference.",
    title: "Sales Manager",
    company: "SaaS Scale-Up",
  },
  {
    quote: "No endless job applications. The companies reaching out were genuinely interested. Landed 2 offers.",
    title: "Account Executive",
    company: "FinTech Startup",
  },
];

export default function JobseekersPage() {
  return (
    <main className="bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.08),transparent_36%),radial-gradient(circle_at_80%_10%,rgba(14,165,233,0.12),transparent_30%),linear-gradient(to_bottom,#f8fbff_0%,#ffffff_40%,#f8fafc_100%)] text-slate-900">
      {/* Hero Section */}
      <HeroSection 
        headline="Your Sales Career, Elevated"
        subtext="Build a profile that goes way beyond your resume. Get discovered by top companies actively hiring sales talent. Control, visibility, and opportunities — all on your terms."
        specialization={false}
        backgroundPattern={true}
      >
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link 
            href="https://jobs.staffanchor.com/register"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center px-8 py-4 bg-teal-600 text-white border-2 border-teal-600 font-semibold rounded-full hover:bg-teal-500 hover:border-teal-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl min-w-[200px]"
          >
            <span>Submit Profile</span>
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
        <p className="text-sm text-gray-600 mt-8 max-w-2xl mx-auto text-center">
          Build your profile in 15 minutes. Get discovered by verified hiring teams actively looking for talent like you.
        </p>
      </HeroSection>

      {/* Metrics Strip */}
      <MetricsStrip metrics={jobseekerMetrics} />

      {/* What You'll Build Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-lg mb-4">What You'll Build</h2>
            <p className="text-xl text-gray-600">A professional profile designed for how hiring teams actually evaluate sales talent.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {jobseekerBenefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-teal-600 rounded-lg flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="font-semibold text-xl text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Profile Journey */}
      <section className="section-padding bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-lg mb-4">Your Profile Journey</h2>
            <p className="text-xl text-gray-600">From signup to discovery in three simple steps.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {jobseekerJourney.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 h-full">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-teal-600 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">{step.step}</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                
                {idx < jobseekerJourney.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-lg mb-4">Why Join StaffAnchor</h2>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-50px" }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
          >
            {whyJoinBenefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-8 shadow-lg border border-gray-100"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-teal-600 rounded-lg flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="font-semibold text-xl text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialCard testimonials={testimonials} />

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-900 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-lg mb-6 text-white">Ready to Elevate Your Sales Career?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Build a profile that showcases your true potential. Get discovered by companies actively hiring top sales talent.
            </p>
            <Link 
              href="https://jobs.staffanchor.com/register"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 border-2 border-white font-semibold rounded-full hover:bg-gray-100 hover:border-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span>Submit Your Profile</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ or Support */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="heading-lg mb-8">Have Questions?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our team is here to help. Reach out if you need any clarification about building your profile or the process.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-900 text-white border-2 border-blue-900 font-semibold rounded-full hover:bg-blue-800 hover:border-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span>Get in Touch</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

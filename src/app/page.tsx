'use client';

import Link from 'next/link';
import { Metadata } from 'next';
import { motion } from 'framer-motion';
import HeroSection from '@/components/ui/HeroSection';
import MetricsStrip from '@/components/ui/MetricsStrip';
import PracticeCard from '@/components/ui/PracticeCard';
import TestimonialCard from '@/components/ui/TestimonialCard';
import AIToolCard from '@/components/ui/AIToolCard';
import CorePracticesSection from '@/components/ui/CorePracticesSection';
import SalesRolesSection from '@/components/ui/SalesRolesSection';
import Image from 'next/image';

const homeMetrics = [
  { value: "500+", label: "Placements", description: "Successful Hires" },
  { value: "30+", label: "CXO Mandates", description: "Executive Searches" },
  { value: "95%", label: "Repeat Clients", description: "Client Retention Rate" },
  { value: "72 hrs", label: "Average Shortlisting Time", description: "Speed to Market" },
];

const practices = [
  {
    title: "Executive Search",
    description: "CXO & Board-level mandates, handled with discretion and insight.",
    href: "/executive-search",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    features: ["CEO, COO, CFO, CHRO,", "Business Head", "Board Director"],
    
  },
  {
    title: "Functional Hiring",
    description: `Mid–Senior roles across Sales, Marketing, Tech, Operations & Analytics.`,
    href: "/functional-hiring",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    features: ["Sales & BD", "Marketing & Growth", "Operations & Supply Chain"],
    
  },
  {
    title: "Industry Expertise",
    description: "Sector-specific hiring where functional skill meets domain depth.",
    href: "/industry-expertise",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    features: ["Renewable Energy & EV Ecosystem", "GCCs & Shared Services", "AI, Data & Digital Transformation"],
    
  },
];

const aiTools = [
  {
    title: "Fit Index",
    description: "Predictive scoring of candidate-role success within six months.",
    
  },
  {
    title: "MarketMap AI",
    description: "Real-time talent benchmarking across industries and locations.",
   
  },
  {
    title: "Speed Model",
    description: "Cuts average hiring time from 25 days to just 12.",
    
  },
];

const testimonials = [
  {
    quote: "Our leadership role was closed in 3 weeks — flawless process.",
    // author: "Rajesh Kumar",
    title: "Founder",
    company: "B2B FinTech Startup",
  },
  {
    quote: "They think like consultants, not recruiters. Every shortlist was spot-on.",
    // author: "Priya Sharma",
    title: "CHRO",
    company: "D2C Brand",
  },
];

const brands = [
                { 
                  name: "EdTech", 
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  )
                },
                { 
                  name: "BFSI", 
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                },
                { 
                  name: "SaaS", 
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  )
                },
                { 
                  name: "Consumer", 
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  )
                },
                { 
                  name: "Hospitality", 
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  )
                },
                { 
                  name: "Manufacturing", 
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )
                }
              ];
export default function Home() {
  return (
    <>
      {/* Hero Section for home page */}
      <HeroSection 
        headline="We Build the B2B Sales Teams That Drive Your Revenue."
        subtext="Specialised B2B Sales Hiring, Leadership Search, and Scale-up support for fast-growth B2B & enterprise companies (with B2C hiring support available too)."
        specialization={true}
        backgroundPattern={true}
      >
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link 
            href="/employers" 
            className="group inline-flex items-center justify-center px-8 py-4 bg-blue-900 text-white border-2 border-blue-900 font-semibold rounded-full hover:bg-blue-700 hover:border-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl min-w-[200px]"
          >
            <span>Hire Sales Talent</span>
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link 
            href="/jobseeker" 
            className="group inline-flex items-center justify-center px-8 py-4 bg-teal-600 text-white border-2 border-teal-600 font-semibold rounded-full hover:bg-teal-500 hover:border-teal-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl min-w-[200px]"
          >
            <span>Find Sales Jobs</span>
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </Link>
        </div>
        <p className="text-sm text-gray-600 mt-8 max-w-2xl mx-auto text-center">
          Built on proven evaluation frameworks shaped by real sales leadership experience.
        </p>
      </HeroSection>

      {/* Our Core Solutions */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-lg mb-4">Our Core Solutions</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PracticeCard
              title="Sales Hiring"
              description="SDRs, BDRs, Inside Sales, AEs, Field Sales, KAMs — talent evaluated through behavioural, competency and performance frameworks."
              href="/sales-hiring"
              icon={
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              }
              features={[]}
            />
            <PracticeCard
              title="Leadership Hiring"
              description="Revenue leadership roles: Sales Managers, Regional Heads, VP Sales, CROs, P&L Leaders. High-impact decision-making, GTM strategy ownership evaluated thoroughly."
              href="/leadership-hiring"
              icon={
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              }
              features={[]}
            />
            <PracticeCard
              title="Volume Hiring (Scale-Up)"
              description="High-velocity hiring for companies expanding into new markets, launching new lines or building large sales teams rapidly. Designed with strict timelines and quality filters."
              href="/volume-hiring"
              icon={
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              }
              features={[]}
            />
            <PracticeCard
              title="Sales Talent Intelligence"
              description="Compensation benchmarking, org design, hiring diagnostics, talent availability mapping and competitive analysis. A strategic layer for smarter hiring decisions."
              href="/sales-talent-intelligence"
              icon={
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              }
              features={[]}
            />
            <PracticeCard
              title="Interim & Contract Hiring"
              description="Flexible sales talent for pilot teams, trial-to-hire phases, immediate deployments or transitional coverage. Performance screened and motion-aligned."
              href="/interim"
              icon={
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              features={[]}
            />
          </div>
        </div>
      </section>
      
      {/* Metrics Strip */}
      <MetricsStrip metrics={homeMetrics} />

      {/* Sales Roles We Hire */}
      <SalesRolesSection />


      {/* Why Companies Choose StaffAnchor */}
      <section className="section-padding bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className="heading-lg mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Why Companies Choose StaffAnchor
            </motion.h2>
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
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-teal-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-xl text-gray-900 mb-3">Sales-Only Specialists</h3>
              <p className="text-gray-600 leading-relaxed">
                A deep, singular focus on sales hiring enables sharper evaluation, faster delivery and more precise matches.
              </p>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-teal-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="font-semibold text-xl text-gray-900 mb-3">Performance-Based Assessments</h3>
              <p className="text-gray-600 leading-relaxed">
                We evaluate behaviour, communication, commercial judgement, objection handling, discovery ability, execution discipline and role alignment.
              </p>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-teal-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-xl text-gray-900 mb-3">Motion-Aligned Hiring Model</h3>
              <p className="text-gray-600 leading-relaxed">
                Inside sales ≠ field sales ≠ enterprise ≠ channel. Each motion requires different competencies — and we hire accordingly.
              </p>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-teal-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold text-xl text-gray-900 mb-3">Structured & Predictable Delivery</h3>
              <p className="text-gray-600 leading-relaxed">
                Clear milestones, disciplined communication and curated shortlists.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Approach Preview */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-lg mb-8">Our Approach</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Sales hiring demands more than recruitment — it requires the ability to identify who can sell in your environment, to your ICP, with your motion, under your expectations.
            </p>
            <Link 
              href="/about-us" 
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-900 text-white border-2 border-blue-900 font-semibold rounded-full hover:bg-blue-700 hover:border-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span>Learn Our Approach</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialCard testimonials={testimonials} />

      {/* Founder's Note*/}
            <section className="section-padding bg-white" id="leadership">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="heading-lg mb-12 text-center">Founder&apos;s Note</h2>
                
                <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
                  <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
                    {/* Profile Image */}
                    <div className="shrink-0">
                      <div className="w-32 h-32 lg:w-40 lg:h-40 bg-linear-to-br from-blue-900 to-teal-600 rounded-full flex items-center justify-center overflow-hidden">
                        <Image
                          src="/gagan_sir_profile_pic.jpg" 
                          alt="Gagan Sharma" 
                          width={160}
                          height={160}
                          className="w-full h-full object-cover"
                        />
                       
                      </div>
                    </div>
      
                    {/* Content */}
                    <div className="flex-1">
                      <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-6 italic">
                        &ldquo;Great salespeople aren&apos;t discovered on resumes — they reveal themselves through behaviour. Our framework captures those behaviours with precision.&rdquo;
                      </blockquote>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t border-gray-200">
                        <div>
                          <p className="font-semibold text-gray-900 text-lg">Gagan Sharma</p>
                          <p className="text-gray-600 text-sm">Founder, StaffAnchor Talent Solutions</p>
                        </div>
                        
                        <a 
                          href="https://www.linkedin.com/in/sharmagagan/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
                        >
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                          <span className="font-medium">Connect on LinkedIn</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
      
               
              </div>
            </section>

      {/* Closing CTA */}
      <section className="pt-20 pb-12 bg-blue-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-poppins font-light text-3xl md:text-4xl mb-8 uppercase tracking-wide">
            Ready to build a high-performance sales organisation?
          </h2>
          <Link 
            href="/contact" 
            className="inline-block bg-teal-600 text-white px-8 py-4 rounded-full font-medium hover:bg-teal-500 transition-colors duration-200 text-lg"
          >
            Book a Consultation →
          </Link>
        </div>
      </section>
    </>
  );
}

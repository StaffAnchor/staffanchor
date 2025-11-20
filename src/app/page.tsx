'use client';

import Link from 'next/link';
import { Metadata } from 'next';
import { motion } from 'framer-motion';
import HeroSection from '@/components/ui/HeroSection';
import MetricsStrip from '@/components/ui/MetricsStrip';
import PracticeCard from '@/components/ui/PracticeCard';
import TestimonialCard from '@/components/ui/TestimonialCard';
import AIToolCard from '@/components/ui/AIToolCard';

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
    quote: "They think like consultants, not recruiters. Every shortlist was spot-on.",
    // author: "Priya Sharma",
    title: "CHRO",
    company: "D2C Brand",
  },
  {
    quote: "Our leadership role was closed in 3 weeks — flawless process.",
    // author: "Rajesh Kumar",
    title: "Founder",
    company: "FinTech Startup",
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
      {/* Hero Section */}
      <HeroSection 
        headline="We Build Teams That Build the Future."
        subtext="Leadership • Functional • Industry-Specific Hiring — Powered by AI & Human Intelligence"
        specialization={true}
        backgroundPattern={true}
      >
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link 
            href="/employers" 
            className="group inline-flex items-center justify-center px-8 py-4 bg-blue-900 text-white border-2 border-blue-900 font-semibold rounded-full hover:bg-blue-700 hover:border-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl min-w-[200px]"
          >
            <span>Hire Talent</span>
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link 
            href="/jobseeker" 
            className="group inline-flex items-center justify-center px-8 py-4 bg-teal-600 text-white border-2 border-teal-600 font-semibold rounded-full hover:bg-teal-500 hover:border-teal-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl min-w-[200px]"
          >
            <span>Find Opportunities</span>
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </Link>
        </div>
      </HeroSection>

      {/* Metrics Strip */}
      <MetricsStrip metrics={homeMetrics} />

      {/* Our Promise */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-lg mb-8">Our Promise</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            StaffAnchor is a new-age recruitment consultancy blending human insight with data-driven intelligence. 
            We help organizations hire faster and smarter using AI-powered talent mapping, predictive analytics, 
            and functional expertise.
          </p>
        </div>
      </section>

      {/* Our Core Practices */}
      <section className="bg-gray-50 py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className="heading-lg mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our Core Practices
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Three specialized practices designed to meet your unique hiring needs with precision and expertise.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-50px" }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {practices.map((practice) => (
              <motion.div
                key={practice.title}
                variants={{
                  hidden: { opacity: 0, y: 50, scale: 0.9 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: {
                      duration: 0.7,
                      type: "spring",
                      stiffness: 100,
                      damping: 15
                    }
                  }
                }}
              >
                <PracticeCard {...practice} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* AI + Human Intelligence */}
      <section className="section-padding bg-white overflow-hidden">
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
              AI + Human Intelligence
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Our proprietary tools blend machine learning, talent analytics, and predictive scoring to identify candidates by success probability — not just credentials.

            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
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
            {aiTools.map((tool) => (
              <AIToolCard key={tool.title} {...tool} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trusted by Leading Brands */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <motion.h3 
              className="heading-md text-lg mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Trusted by Leading Brands Across Industries
            </motion.h3>
            <motion.div 
              className="flex flex-wrap justify-center items-center gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ margin: "-50px" }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {brands.map((brand) => (
                <motion.div
                  key={brand.name}
                  variants={{
                    hidden: { opacity: 0, y: 20, scale: 0.9 },
                    visible: { 
                      opacity: 1, 
                      y: 0, 
                      scale: 1,
                      transition: {
                        duration: 0.5,
                        type: "spring",
                        stiffness: 150,
                        damping: 15
                      }
                    }
                  }}
                  className="px-6 py-3 bg-white border border-gray-200 rounded-full text-gray-600 font-medium cursor-pointer shadow-sm hover:shadow-md transition-all duration-300 group flex items-center gap-2"
                  whileHover={{ 
                    scale: 1.05,
                    y: -2,
                    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)",
                    borderColor: "#3b82f6",
                    color: "#1e40af",
                    transition: { 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 20 
                    }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    whileHover={{ rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {brand.icon}
                  </motion.div>
                  <motion.span
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    {brand.name}
                  </motion.span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialCard testimonials={testimonials} />

      {/* Closing CTA */}
      <section className="pt-20 pb-12 bg-blue-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-poppins font-light text-3xl md:text-4xl mb-8 uppercase tracking-wide">
            Ready to hire smarter?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Share your hiring mandate and let our AI-powered intelligence find your next game-changing hire.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-teal-600 text-white px-8 py-4 rounded-full font-medium hover:bg-teal-500 transition-colors duration-200 text-lg"
          >
            Share Your Hiring Mandate →
          </Link>
        </div>
      </section>
    </>
  );
}

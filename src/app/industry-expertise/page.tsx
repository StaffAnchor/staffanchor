'use client';

import { useState } from 'react';
import HeroSection from '@/components/ui/HeroSection';
import MetricsStrip from '@/components/ui/MetricsStrip';
import Link from 'next/link';
import PracticeSidebar from '@/components/layout/PracticeSidebar';

const industryMetrics = [
  { value: "84%", label: "Closure Rate", description: "Industry success" },
  { value: "20+", label: "Industries", description: "Domain coverage" },
  { value: "4.8/5", label: "Client Rating", description: "Satisfaction score" },
  { value: "500+", label: "Domain Hires", description: "Specialized placements" },
];

const industries = [
  {
    category: "Emerging Sectors",
    data: [
      {
        industry: "Renewable Energy & EV Ecosystem",
        description: "Supporting India's green economy with talent for solar, wind, and EV companies.",
        roles: ["Project Managers", "Sustainability Analysts", "Electrical Engineers"]
      },
      {
        industry: "GCCs & Shared Services",
        description: "Building leadership and mid-level teams for global capability centers across Tier-1 & Tier-2 cities.",
        roles: ["Finance Leads", "Process Managers", "Data Analysts"]
      },
      {
        industry: "AI, Data & Digital Transformation",
        description: "Bridging the talent gap in data-first organizations.",
        roles: ["AI Engineers", "BI Analysts", "Data Scientists", "Automation Leads"]
      },
      {
        industry: "Education & Skilling",
        description: "Powering the next generation of educators, counsellors, and edtech leaders.",
        roles: ["Academic Heads", "Trainers", "Admission Managers"]
      }
    ]
  },
  {
    category: "Core Industries",
    data: [
      {
        industry: "Manufacturing & Infrastructure",
        description: "Building core operational and engineering teams for India's industrial backbone.",
        roles: ["Plant Heads", "Production Managers", "Project Engineers", "Quality Leads"]
      },
      {
        industry: "Banking, Financial Services & Fintech",
        description: "Supporting fast-evolving financial and digital ecosystems.",
        roles: ["Risk Managers", "Credit Analysts", "Product Managers", "Relationship Leads"]
      },
      {
        industry: "Retail, E-commerce & Consumer Internet",
        description: "Driving hiring for high-growth retail and omni-channel businesses.",
        roles: ["Category Managers", "Growth Heads", "Merchandisers", "Supply Chain Leads"]
      },
      {
        industry: "Healthcare & Life Sciences",
        description: "From hospitals to wellness startups, we enable healthcare organizations to scale with quality talent.",
        roles: ["Clinical Managers", "Medical Sales", "Physiotherapists", "Nutrition Experts"]
      },
      {
        industry: "Hospitality, Fitness & Lifestyle",
        description: "Serving brands in hospitality, QSR, fitness, and luxury.",
        roles: ["Chefs", "Trainers", "Operations Managers", "Wellness Coaches"]
      },
      {
        industry: "Architecture & Design",
        description: "Connecting creative professionals with India's leading design and construction firms.",
        roles: ["Architects", "Interior Designers", "Landscape Experts"]
      }
    ]
  }
  
];


export default function IndustryExpertisePage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex">
      {/* Sidebar */}
      <PracticeSidebar 
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
        currentPage="industry-expertise"
      />

      {/* Main Content */}
      <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'lg:ml-64' : 'lg:ml-0'}`}>
        <>
          <section className='section-padding'>
            <HeroSection 
              headline="Precision Hiring Where Function Meets Domain."
              subtext="Deep industry knowledge across 20+ specialized sectors ensures perfect role-culture-domain alignment."
              />
          </section>

          {/* Introduction Section */}
          <section className="section-padding bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Every industry demands a unique talent strategy. At StaffAnchor, we align our hiring processes with the nuances, market cycles, and skill gaps of each domain. From established sectors to emerging industries, our specialists bring real-world understanding and proven networks.
                </p>
              </div>
            </div>
          </section>

      <MetricsStrip metrics={industryMetrics} background='blue'/>
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {industries.map((category) => (
            <div key={category.category} className="mb-16">
              <div className="text-center mb-12">
                <h2 className="heading-lg mb-4">{category.category}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.data.map((ind) => (
                  <div key={ind.industry} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out cursor-pointer group">
                    <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">{ind.industry}</h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{ind.description}</p>
                    <div className="space-y-2">
                      {ind.roles.map((role) => (
                        <div key={role} className="bg-gray-50 px-3 py-2 rounded-lg text-sm text-gray-700 group-hover:bg-blue-50 transition-colors duration-300">{role}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      
      {/* Closing CTA */}
      <section className="pt-20 pb-12 bg-blue-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-poppins font-light text-3xl md:text-4xl mb-8 uppercase tracking-wide">
            REQUEST INDUSTRY EXPERTISE CONSULTATION
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
      </div>
    </div>
  );
}
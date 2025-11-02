'use client';

import { useState } from 'react';
import HeroSection from '@/components/ui/HeroSection';
import MetricsStrip from '@/components/ui/MetricsStrip';
import Link from 'next/link';
import PracticeSidebar from '@/components/layout/PracticeSidebar';

const functionalMetrics = [
  { value: "250+", label: "Roles/Year", description: "Functional positions" },
  { value: "72hr", label: "Shortlisting", description: "Speed to market" },
  { value: "Pan-India", label: "Reach", description: "Geographic coverage" },
  { value: "95%", label: "Success Rate", description: "Placement success" },
];

const functions = [
  {
    focus: "Sales & Business Development",
    roles: [
      "Chief Revenue Officer (CRO)",
      "VP Sales / Sales Head",
      "National Sales Head",
      "Regional / Zonal Sales Head",
      "Category Manager",
      "City Manager",
      "Business Development Manager",
      "Key Account Manager",
      "Account Manager",
      "Channel Sales Manager",
      "Partnerships Manager",
      "Inside Sales / SDR Manager",
      "Customer Success Manager",
      "Sales Operations Manager"
    ]
  },
  {
    focus: "Marketing & Growth",
    roles: [
      "Chief Marketing Officer (CMO)",
      "VP Marketing / Head of Marketing",
      "Head of Growth",
      "Brand Manager / Assistant Brand Manager",
      "Product Marketing Manager",
      "Trade Marketing Manager",
      "Performance Marketing Manager",
      "SEO / SEM Specialist",
      "Paid Media Manager",
      "Social Media Manager",
      "Content Strategist / Content Writer / Copywriter",
      "PR & Corporate Communications Manager",
      "Events & Activation Manager",
      "Government Relations / Lobbyist"
    ]
  },
  {
    focus: "Operations & Supply Chain",
    roles: [
      "Chief Operating Officer (COO)",
      "VP Operations / Head of Operations",
      "Plant Head / Plant Manager",
      "Supply Chain Manager",
      "Logistics Head",
      "Procurement Manager",
      "Warehouse Operations Head",
      "Hospitality Operations Head",
      "Restaurant / F&B Operations Head",
      "Fitness / Wellness Centre Manager",
      "Quick Commerce / Fulfillment Centre Operations Manager"
    ]
  },
  {
    focus: "Technology & AI/ML",
    roles: [
      "Chief Technology Officer (CTO)",
      "VP Engineering / Head of Product & Technology",
      "Full Stack Developer",
      "Backend / Frontend Developer",
      "Mobile App Developer (iOS / Android)",
      "Cloud Architect",
      "DevOps Engineer",
      "Cybersecurity Specialist",
      "Blockchain Developer",
      "Web3 Specialist",
      "Data Engineer",
      "Machine Learning Engineer",
      "Deep Learning Specialist",
      "NLP Engineer",
      "Computer Vision Engineer"
    ]
  },
  {
    focus: "Engineering & Manufacturing",
    roles: [
      "VP Engineering",
      "Chief Engineer",
      "Plant Head",
      "Mechanical Engineer",
      "Electrical Engineer",
      "Civil Engineer",
      "Structural Engineer",
      "Production Engineer",
      "Quality Assurance Engineer",
      "Process Engineer",
      "R&D Engineer",
      "Automation Specialist"
    ]
  },
  {
    focus: "Analytics, Strategy & Business Advisory",
    roles: [
      "Chief of Staff",
      "VP Strategy",
      "Head of Business Planning",
      "Corporate Strategy Manager",
      "M&A Specialist",
      "Business Analyst",
      "Strategy Consultant",
      "Management Consultant",
      "Data Scientist",
      "Data Analyst",
      "Business Intelligence Manager",
      "Big Data Analyst",
      "Product Strategy Manager"
    ]
  }
];


export default function FunctionalHiringPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex">
      {/* Sidebar */}
      <PracticeSidebar 
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
        currentPage="functional-hiring"
      />

      {/* Main Content */}
      <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'lg:ml-64' : 'lg:ml-0'}`}>
        <>
          <section className='section-padding'>

          <HeroSection 
            headline="Building Functional Excellence Across Business Functions."
            subtext="Deep domain expertise in sales, technology, operations, marketing, and specialized functions to build high-performing teams."
            />
          </section>


      <MetricsStrip metrics={functionalMetrics} background='blue'/>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-8">Our Functional Expertise</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {functions.map((func) => (
              <div key={func.focus} className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-4">{func.focus}</h3>
                <div className="space-y-2">
                  {func.roles.map((role) => (
                    <div key={role} className="bg-white px-3 py-2 rounded-lg text-sm text-gray-700">{role}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      {/* Closing CTA */}
      <section className="pt-20 pb-12 bg-blue-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-poppins font-light text-3xl md:text-4xl mb-8 uppercase tracking-wide">
            REQUEST FUNCTIONAL CONSULTATION
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
import { Metadata } from 'next';
import Image from 'next/image';
import HeroSection from '@/components/ui/HeroSection';
import MetricsStrip from '@/components/ui/MetricsStrip';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "About Us - StaffAnchor Talent Solutions | Our Vision & Philosophy",
  description: "Learn about StaffAnchor's vision, philosophy, and 5-step methodology. We're intelligence partners blending tech, data, and human insight for precision hiring.",
  keywords: "About StaffAnchor, Recruitment Philosophy, Talent Intelligence, AI-driven hiring methodology, Executive Search Company",
};

const impactMetrics = [
  { value: "72hrs", label: "Time-to-Shortlist", description: "Average speed" },
  { value: "82%", label: "Retention Rate", description: "Client success" },
  { value: "95%", label: "Repeat Rate", description: "Client loyalty" },
  { value: "500+", label: "Mandates", description: "Successfully completed" },
  { value: "30+", label: "CXO Placements", description: "Leadership hires" },
];

const methodology = [
  {
    step: "01",
    title: "Discovery",
    description: "Deep dive into your organizational culture, role requirements, and strategic objectives to understand the perfect candidate profile.",
    features: ["Stakeholder interviews", "Role profiling", "Cultural assessment", "Success metrics definition"],
    image: "/methodology/1.png" // Add image path
  },
  {
    step: "02", 
    title: "Intelligence",
    description: "Leverage AI-powered market mapping and competitive intelligence to identify and analyze the best talent in the market.",
    features: ["Market mapping", "Competitive analysis", "Talent intelligence", "Compensation benchmarking"],
    image: "/methodology/2.png" // Add image path
  },
  {
    step: "03",
    title: "Shortlisting",
    description: "Apply our Fit Index™ algorithm combined with human expertise to curate a precise shortlist of qualified candidates.",
    features: ["AI-powered screening", "Technical evaluation", "Cultural fit assessment", "Reference validation"],
    image: "/methodology/3.png" // Add image path
  },
  {
    step: "04",
    title: "Evaluation",
    description: "Facilitate comprehensive evaluation through structured interviews, assessments, and stakeholder feedback loops.",
    features: ["Structured interviews", "Skills assessment", "Leadership evaluation", "Team fit analysis"],
    image: "/methodology/4.png" // Add image path
  },
  {
    step: "05",
    title: "Closure",
    description: "Guide negotiation and onboarding process to ensure smooth transition and long-term success for both parties.",
    features: ["Offer negotiation", "Background verification", "Onboarding support", "Follow-up & retention"],
    image: "/methodology/5.png" // Add image path
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection 
        headline="Intelligence Partners, Not Just Recruiters"
        subtext="“A Structured, Intelligence-Led Approach to Mid–Senior & Leadership Hiring”"
        extra={true}
        centered={true}
      />

      {/* Who We Are */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-8">Who We Are</h2>
          </div>
          
          <div className="prose prose-lg prose-gray mx-auto text-center">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              StaffAnchor Talent Solutions helps organizations hire with intelligence and precision. We blend AI, analytics and deep functional expertise to deliver leadership and functional hires that drive measurable business outcomes.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We operate as intelligence partners—bringing market insight, structured search methodology and human judgment to every mandate.
            </p>
            
          </div>
        </div>
      </section>

      {/* Our Philosophy*/}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-lg mb-8">Our Philosophy</h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                We bring intelligence, structure and human understanding to every search—helping companies hire leaders who drive outcomes and shape culture.
              </p>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Guiding Values:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center mt-1 shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <p className="text-gray-700">Intelligence-first</p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center mt-1 shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <p className="text-gray-700">Precision & Speed</p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center mt-1 shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <p className="text-gray-700">Human-centered</p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center mt-1 shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <p className="text-gray-700">Long-term Partnerships</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="heading-md text-xl mb-6">Our Guiding Values</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Intelligence-First</h4>
                  <p className="text-gray-600 text-sm">Every decision backed by data, analytics, and deep market intelligence.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Human-Centered</h4>
                  <p className="text-gray-600 text-sm">Technology amplifies human expertise, never replaces the human connection.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Precision & Speed</h4>
                  <p className="text-gray-600 text-sm">Accurate results delivered at unprecedented speed without compromise.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Partnership</h4>
                  <p className="text-gray-600 text-sm">Long-term relationships built on trust, transparency, and mutual success.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="heading-lg mb-4">Our Philosophy</h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              We bring intelligence, structure and human understanding to every search—helping companies hire leaders who drive outcomes and shape culture.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Guiding Values</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex flex-col items-center text-center p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Intelligence-first</h4>
                <p className="text-gray-600 text-xs">Data, analytics & market intelligence</p>
              </div>

              <div className="flex flex-col items-center text-center p-4 bg-teal-50 rounded-xl hover:bg-teal-100 transition-colors">
                <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Precision & Speed</h4>
                <p className="text-gray-600 text-xs">Fast & accurate results</p>
              </div>

              <div className="flex flex-col items-center text-center p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Human-centered</h4>
                <p className="text-gray-600 text-xs">Tech amplifies human connection</p>
              </div>

              <div className="flex flex-col items-center text-center p-4 bg-teal-50 rounded-xl hover:bg-teal-100 transition-colors">
                <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Long-term Partnerships</h4>
                <p className="text-gray-600 text-xs">Trust, transparency & mutual success</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Impact Metrics */}
      <MetricsStrip metrics={impactMetrics} background="blue" />

      {/* 5-Step Methodology */}
      <section className="section-padding bg-gray-50" id="methodology">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-8">5-Step Methodology</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven systematic approach ensures every placement is precise, strategic, and aligned with your long-term success.
            </p>
          </div>

          <div className="space-y-12">
            {methodology.map((step, index) => (
              <div key={step.step} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}>
                <div className="flex-1">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-blue-900 text-white rounded-full flex items-center justify-center font-poppins font-bold text-xl mr-4">
                      {step.step}
                    </div>
                    <h3 className="heading-md text-2xl">{step.title}</h3>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    {step.description}
                  </p>
                  <ul className="grid grid-cols-2 gap-3">
                    {step.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-2 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-teal-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex-1">
                  <div className="bg-white rounded-xl p-8 shadow-lg">
                    <div className="w-full aspect-[4/3] rounded-lg overflow-hidden bg-gray-50 flex items-center justify-center">
                      <Image
                        src={step.image}
                        alt={`${step.title} methodology step`}
                        width={600}
                        height={450}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                  &ldquo;With 16 years of leadership experience at Naukri, UpGrad, BharatMatrimony and Bijak, I built StaffAnchor to bring a business lens to recruitment. Our role is not just to fill positions, but to help clients hire leaders who can move the needle on growth, execution and culture.&rdquo;
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
            Ready to hire
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            If you are building your mid–senior or leadership team, we’d be glad to share a calibrated shortlist or walk you through our approach. 
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
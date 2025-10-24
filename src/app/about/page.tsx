import { Metadata } from 'next';
import HeroSection from '@/components/ui/HeroSection';
import MetricsStrip from '@/components/ui/MetricsStrip';

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
    features: ["Stakeholder interviews", "Role profiling", "Cultural assessment", "Success metrics definition"]
  },
  {
    step: "02", 
    title: "Intelligence",
    description: "Leverage AI-powered market mapping and competitive intelligence to identify and analyze the best talent in the market.",
    features: ["Market mapping", "Competitive analysis", "Talent intelligence", "Compensation benchmarking"]
  },
  {
    step: "03",
    title: "Shortlisting",
    description: "Apply our Fit Index™ algorithm combined with human expertise to curate a precise shortlist of qualified candidates.",
    features: ["AI-powered screening", "Technical evaluation", "Cultural fit assessment", "Reference validation"]
  },
  {
    step: "04",
    title: "Evaluation",
    description: "Facilitate comprehensive evaluation through structured interviews, assessments, and stakeholder feedback loops.",
    features: ["Structured interviews", "Skills assessment", "Leadership evaluation", "Team fit analysis"]
  },
  {
    step: "05",
    title: "Closure",
    description: "Guide negotiation and onboarding process to ensure smooth transition and long-term success for both parties.",
    features: ["Offer negotiation", "Background verification", "Onboarding support", "Follow-up & retention"]
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection 
        headline="Intelligence Partners, Not Just Recruiters"
        subtext="We blend cutting-edge technology with human insight to transform how organizations discover and hire exceptional talent."
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
              StaffAnchor Talent Solutions helps organizations hire with intelligence, precision, and empathy. 
We merge AI technology, analytics, and deep functional understanding to deliver 
recruitment outcomes that drive measurable business growth. 
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Founded on the principle that exceptional hiring requires both technological precision and human intuition, 
              we serve as intelligence partners to organizations seeking transformative talent across executive, 
              functional, and industry-specific roles.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our approach goes beyond traditional recruiting — we provide strategic intelligence, market insights, 
              and predictive analytics that enable our clients to make informed, data-driven hiring decisions 
              that drive long-term organizational success.
            </p>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-lg mb-8">Our Vision</h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                To redefine recruitment as a science — powered by data, technology, and human 
judgment.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We envision a future where every hiring decision is powered by comprehensive intelligence, 
                where cultural fit meets functional excellence, and where both organizations and 
                candidates find their perfect match through our precision-driven approach.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center mt-1 shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">AI-powered precision meets human intuition</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center mt-1 shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Data-driven insights for strategic hiring</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center mt-1 shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Transformative talent for organizational growth</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="heading-md text-xl mb-6">Our Core Values</h3>
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

      {/* Our Philosophy */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-lg mb-8">Our Philosophy</h2>
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-8 mb-12">
            <blockquote className="text-2xl font-light text-blue-900 italic leading-relaxed">
              The future of hiring lies at the intersection of:
            </blockquote>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-linear-to-br from-blue-900 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="heading-md text-lg mb-4">Technology</h3>
              <p className="text-gray-600">AI-led discovery & evaluation.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-linear-to-br from-blue-900 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="heading-md text-lg mb-4">Data</h3>
              <p className="text-gray-600"> Market intelligence behind every search .</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-linear-to-br from-blue-900 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="heading-md text-lg mb-4">Human Insight</h3>
              <p className="text-gray-600"> Cultural and leadership alignment.</p>
            </div>
          </div>
        </div>
      </section>

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
                    <div className="w-full h-48 bg-linear-to-br from-blue-50 to-teal-50 rounded-lg flex items-center justify-center">
                      <div className="text-6xl text-blue-200 font-light">
                        {step.step}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Note */}
      <section className="section-padding bg-white" id="leadership">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-lg mb-12">Leadership Note</h2>
          
          <div className="bg-gray-50 rounded-xl p-8 lg:p-12">
            <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed italic mb-8">
              &ldquo;We&apos;re not just recruiters — we&apos;re intelligence partners who understand that 
              the right hire can transform an organization, accelerate growth, and shape the future.&rdquo;
            </blockquote>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="w-16 h-16 bg-linear-to-br from-blue-900 to-teal-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">SA</span>
              </div>
              
            </div>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-teal-600 mb-2">500+</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider">Lives Transformed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-teal-600 mb-2">95%</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-teal-600 mb-2">12 Days</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider">Average Hiring Cycle</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
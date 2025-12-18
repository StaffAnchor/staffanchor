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
    title: "Sales Motion & GTM Discovery",
    description: "We map your sales cycle, ICP, funnel stages, quotas, channel mix and skill expectations. This ensures we hire for your motion, not the generic market.",
    features: ["Sales cycle mapping", "ICP definition", "Quota & funnel analysis", "Channel mix strategy"],
  },
  {
    step: "02", 
    title: "Role & Persona Definition",
    description: "We define the exact persona needed: Hunter | Farmer | Hybrid | Enterprise Seller | Channel Specialist | Relationship Builder | Consultative AE. Each persona requires different behavioural signatures — and we evaluate accordingly.",
    features: ["Persona identification", "Behavioural signatures", "Motion alignment", "Role-specific traits"],
  },
  {
    step: "03",
    title: "Behavioural & Competency Evaluation",
    description: "Our proprietary competency model measures Sales IQ, Discovery excellence, Articulation & clarity, Objection handling, Emotional intelligence, Resilience & coachability, Commercial judgement, Market understanding, Execution discipline, and Role adaptability.",
    features: ["Sales IQ assessment", "Discovery excellence", "Objection handling", "Emotional intelligence", "Commercial judgement", "Execution discipline"],
  },
  {
    step: "04",
    title: "Sales Simulation Rounds",
    description: "Candidates are evaluated with realistic scenarios: Cold-call simulation, Product pitch, Customer objection, Pricing challenge, Email-writing diagnostic, Case-based commercial reasoning. This reveals the real performer.",
    features: ["Cold-call simulation", "Product pitch", "Objection handling", "Pricing negotiation", "Email diagnostics", "Commercial reasoning"],
  },
  {
    step: "05",
    title: "Curated Shortlisting",
    description: "You receive 3–5 high-quality candidates with Behavioural summaries, Strengths & red flags, Motion-fit score, Communication evaluation, and Simulation notes.",
    features: ["Behavioural summaries", "Strengths & red flags", "Motion-fit scoring", "Communication analysis"],
  },
  {
    step: "06",
    title: "Offer, Closing & Onboarding Alignment",
    description: "We reduce offer drops, smoothen transitions, and ensure expectation alignment for early performance.",
    features: ["Offer negotiation", "Expectation alignment", "Transition support", "Onboarding coordination"],
  },
];

export default function AboutPage() {
  return (
    <>
      

      

      {/* Our Philosophy*/}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-lg mb-8">Our Philosophy</h2>
          <div className="bg-white rounded-xl p-8 lg:p-12 shadow-lg">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Sales roles are not operational — they are <span className="font-semibold text-blue-900">behavioural</span>.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              The ability to question well, listen deeply, handle objections, manage pressure, and influence customers cannot be derived from resumes.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <span className="font-semibold text-gray-900">It must be observed, decoded, and evaluated.</span>
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our approach isolates these behaviours through structured evaluation, simulations and motion-specific competency models.
            </p>
          </div>
        </div>
      </section>


      {/* Impact Metrics */}
      <MetricsStrip metrics={impactMetrics} background="blue" />

      {/* 6-Stage Performance Hiring Framework */}
      <section className="section-padding bg-white" id="methodology">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-8">6-Stage Performance Hiring Framework</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured, behaviour-driven process that identifies real sales performers.
            </p>
          </div>

          <div className="space-y-8">
            {methodology.map((step) => (
              <div key={step.step} className="bg-gray-50 rounded-xl p-8 lg:p-10">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-900 to-teal-600 text-white rounded-full flex items-center justify-center font-poppins font-bold text-xl shrink-0">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="heading-md text-2xl mb-4">{step.title}</h3>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                      {step.description}
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
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
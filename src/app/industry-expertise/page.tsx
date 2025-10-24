import { Metadata } from 'next';
import HeroSection from '@/components/ui/HeroSection';
import MetricsStrip from '@/components/ui/MetricsStrip';

export const metadata: Metadata = {
  title: "Industry Expertise - StaffAnchor Talent Solutions | Precision Domain Hiring",
  description: "Specialized hiring across 20+ industries. EdTech, Hospitality, Healthcare, Finance with 84% closure rate.",
  keywords: "Industry Expertise, EdTech Hiring, Healthcare Recruitment, Hospitality Jobs, Domain-specific Hiring",
};

const industryMetrics = [
  { value: "84%", label: "Closure Rate", description: "Industry success" },
  { value: "20+", label: "Industries", description: "Domain coverage" },
  { value: "4.8/5", label: "Client Rating", description: "Satisfaction score" },
  { value: "500+", label: "Domain Hires", description: "Specialized placements" },
];

const industries = [
  {
    industry: "EdTech & Education",
    roles: ["EdTech Sales Head", "Curriculum Lead", "Learning Designer", "Academic Director", "Product Manager"]
  },
  {
    industry: "Hospitality & Culinary", 
    roles: ["Head Chef", "F&B Manager", "Hotel Manager", "Culinary Director", "Restaurant Operations"]
  },
  {
    industry: "Fitness & Wellness",
    roles: ["Fitness Trainer", "Nutritionist", "Wellness Coach", "Gym Manager", "Sports Therapist"]
  },
  {
    industry: "Finance & Accounting",
    roles: ["Chartered Accountant", "FP&A Manager", "Controller", "Tax Manager", "Audit Manager"]
  },
  {
    industry: "Design & Architecture",
    roles: ["Architect", "Interior Designer", "Design Consultant", "Urban Planner", "Project Architect"]
  },
  {
    industry: "Healthcare & Sports Science",
    roles: ["Physiotherapist", "Sports Scientist", "Medical Director", "Clinical Research", "Dietician"]
  },
];

export default function IndustryExpertisePage() {
  return (
    <>
      <HeroSection 
        headline="Precision Hiring Where Function Meets Domain."
        subtext="Deep industry knowledge across 20+ specialized sectors ensures perfect role-culture-domain alignment."
      />

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind) => (
              <div key={ind.industry} className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-4">{ind.industry}</h3>
                <div className="space-y-2">
                  {ind.roles.map((role) => (
                    <div key={role} className="bg-white px-3 py-2 rounded-lg text-sm text-gray-700">{role}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MetricsStrip metrics={industryMetrics} />
    </>
  );
}
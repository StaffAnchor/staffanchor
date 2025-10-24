import { Metadata } from 'next';
import HeroSection from '@/components/ui/HeroSection';
import MetricsStrip from '@/components/ui/MetricsStrip';

export const metadata: Metadata = {
  title: "Functional Hiring - StaffAnchor Talent Solutions | Building Functional Excellence",
  description: "Deep expertise across sales, technology, operations, marketing and specialized functions. 250+ roles per year with 72hr shortlisting.",
  keywords: "Functional Hiring, Sales Hiring, Technology Recruitment, Operations Hiring, Marketing Recruitment",
};

const functionalMetrics = [
  { value: "250+", label: "Roles/Year", description: "Functional positions" },
  { value: "72hr", label: "Shortlisting", description: "Speed to market" },
  { value: "Pan-India", label: "Reach", description: "Geographic coverage" },
  { value: "85%", label: "Success Rate", description: "Placement success" },
];

const functions = [
  {
    focus: "Sales & Business Development",
    roles: ["CRO", "VP Sales", "Sales Director", "BDM", "Key Account Manager", "Inside Sales Manager"]
  },
  {
    focus: "Marketing & Growth", 
    roles: ["CMO", "Head of Marketing", "Digital Marketing Lead", "Growth Manager", "Brand Manager", "Content Head"]
  },
  {
    focus: "Operations & Supply Chain",
    roles: ["COO", "Operations Head", "SCM Manager", "Process Manager", "Quality Head", "Logistics Manager"]
  },
  {
    focus: "Technology & AI/ML",
    roles: ["CTO", "Tech Lead", "Full Stack Developer", "Data Engineer", "ML Engineer", "DevOps Engineer"]
  },
  {
    focus: "Engineering & Manufacturing",
    roles: ["Chief Engineer", "Production Manager", "QA Lead", "R&D Head", "Manufacturing Engineer", "Plant Manager"]
  },
  {
    focus: "Analytics & Strategy",
    roles: ["Chief of Staff", "Strategy Manager", "BI Manager", "Data Analyst", "Business Analyst", "Insights Manager"]
  },
];

export default function FunctionalHiringPage() {
  return (
    <>
      <HeroSection 
        headline="Building Functional Excellence Across Business Functions."
        subtext="Deep domain expertise in sales, technology, operations, marketing, and specialized functions to build high-performing teams."
      />

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

      <MetricsStrip metrics={functionalMetrics} />
    </>
  );
}
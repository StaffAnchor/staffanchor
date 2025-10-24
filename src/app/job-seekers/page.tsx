'use client';

import HeroSection from '@/components/ui/HeroSection';
import MetricsStrip from '@/components/ui/MetricsStrip';
import UploadForm from '@/components/ui/UploadForm';
import { submitJobSeekerForm } from '@/utils/googleSheets';

const jobSeekerMetrics = [
  { value: "500+", label: "Placements", description: "Successful career moves" },
  { value: "80%", label: "Satisfaction", description: "Candidate experience" },
  { value: "30+", label: "Leadership Transitions", description: "Executive placements" },
  { value: "95%", label: "Retention Rate", description: "Long-term success" },
];

const activeRoles = [
  { title: "Chief Technology Officer", company: "EdTech Startup", location: "Bangalore", type: "Executive" },
  { title: "VP Sales", company: "SaaS Company", location: "Mumbai", type: "Leadership" },
  { title: "Head of Operations", company: "E-commerce", location: "Delhi", type: "Functional" },
  { title: "Marketing Director", company: "Consumer Brand", location: "Pune", type: "Leadership" },
  { title: "Senior Data Scientist", company: "Fintech", location: "Hyderabad", type: "Specialist" },
  { title: "Product Manager", company: "Healthcare Tech", location: "Chennai", type: "Functional" },
];

const careerResources = [
  {
    title: "Executive Career Transitions",
    description: "Navigate C-suite and senior leadership opportunities with confidence.",
    link: "/blog/executive-transitions"
  },
  {
    title: "Salary Benchmarking Guide", 
    description: "Comprehensive compensation insights across industries and functions.",
    link: "/blog/salary-guide"
  },
  {
    title: "Interview Preparation",
    description: "Master executive-level interviews with our proven frameworks.",
    link: "/blog/interview-prep"
  },
  {
    title: "Market Intelligence Reports",
    description: "Stay informed with our quarterly talent market insights.",
    link: "/blog/market-reports"
  },
];

export default function JobSeekersPage() {
  return (
    <>
      <HeroSection 
        headline="Your Next Opportunity, Curated by Experts."
        subtext="Access exclusive opportunities across executive, functional, and industry-specific roles with our intelligence-driven approach."
      />

      {/* Active Roles */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Featured Opportunities</h2>
            <p className="text-xl text-gray-600">Current openings curated by our talent intelligence team</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeRoles.map((role, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    role.type === 'Executive' ? 'bg-blue-100 text-blue-800' :
                    role.type === 'Leadership' ? 'bg-teal-100 text-teal-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {role.type}
                  </span>
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{role.title}</h3>
                <p className="text-gray-600 mb-2">{role.company}</p>
                <p className="text-sm text-gray-500">{role.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upload Profile */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Join Our Talent Network</h2>
            <p className="text-xl text-gray-600">
              Upload your profile and get matched with opportunities that align with your career aspirations.
            </p>
          </div>

          <UploadForm
            title="Upload Your Professional Profile"
            subtitle="Share your background and let our AI-powered matching find your ideal next role."
            onSubmit={submitJobSeekerForm}
          />
        </div>
      </section>

      {/* Career Resources */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Career Resources</h2>
            <p className="text-xl text-gray-600">Expert insights and resources to accelerate your career growth</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {careerResources.map((resource) => (
              <div key={resource.title} className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <a href={resource.link} className="text-teal-600 font-medium hover:text-teal-700">
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MetricsStrip metrics={jobSeekerMetrics} />
    </>
  );
}
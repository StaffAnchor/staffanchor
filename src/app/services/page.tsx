import { Metadata } from 'next';
import Link from 'next/link';
import ServiceSection from '@/components/services/ServiceSection';

export const metadata: Metadata = {
  title: "Services - StaffAnchor Talent Solutions | Mid-Senior & Leadership Hiring",
  description: "Expert recruitment services: Mid-Senior Hiring, Leadership & Executive Search, Talent Intelligence, Project-Based Hiring, and Contract Talent Solutions.",
  keywords: "Recruitment Services, Executive Search, Talent Intelligence, Contract Hiring, Mid-Senior Hiring, Leadership Search",
};

const servicesData = [
  {
    id: 'mid-senior-hiring',
    title: 'Mid–Senior Hiring',
    subtitle: 'Expert recruitment for mid-level functional & technical roles across Tech and Consumer sectors.',
    description: 'Specialist hiring for mid-management and high-impact functional roles across Technology and Consumer sectors.',
    content: [
      'These are roles where context, capability and cultural alignment matter more than volume sourcing. Our approach combines structured evaluation, calibrated shortlisting and deep functional understanding — enabling hiring managers to move faster with clarity.'
    ],
    sections: [
      {
        heading: 'What This Service Covers',
        items: [
          'Specialist talent for business-critical roles',
          'Mid-level leaders who drive execution and revenue',
          'Roles requiring strong functional depth & problem-solving capability',
          'High-growth environments where speed + precision is essential'
        ]
      },
      {
        heading: 'Typical Roles We Hire For',
        subsections: [
          {
            title: 'Technology Practice:',
            content: 'Tech Leads • Engineering Managers • Senior Software Engineers • Product Managers • Data Engineers • ML Engineers • DevOps Leads • Cybersecurity Specialists'
          },
          {
            title: 'SaaS/GTM Roles:',
            content: 'Enterprise Sales • Inside Sales • Customer Success Managers • Solutions Consultants • RevOps Managers'
          },
          {
            title: 'Consumer & Services Roles:',
            content: 'Ops Managers • City Leads • Territory Managers • Cluster Heads • Supply Chain Executives • Store/Center Leads'
          }
        ]
      },
      {
        heading: 'Who This Is Best For',
        items: [
          'From emerging startups to established enterprises, we support teams where speed, precision and role-context matter most.'
        ]
      }
    ]
  },
  {
    id: 'leadership-executive-search',
    title: 'Leadership & Executive Search',
    subtitle: 'Confidential CXO, VP & Director hiring with founder-level involvement.',
    description: 'Confidential search for CXO, VP, Director and Business Head roles.',
    content: [
      'Leadership hiring requires sensitivity, discretion and a rigorous evaluation framework. Our search practice is built on deep market intelligence, structured assessments and founder-level involvement in every mandate.'
    ],
    sections: [
      {
        heading: 'What This Service Covers',
        items: [
          'CXO & Board-level mandates',
          'VP/Director-level leadership roles',
          'Confidential or replacement hiring',
          'Strategic roles impacting growth, culture & organisation design',
          'Passive leadership outreach through calibrated search'
        ]
      },
      {
        heading: 'Typical Leadership Roles',
        content: 'CTO • VP Engineering • VP Product • COO • Director Sales • Head of Business • Country Head • BU Head • Chief of Staff • Head of Operations'
      },
      {
        heading: 'How Clients Benefit',
        items: [
          'Founder-level oversight on leadership mandates',
          'Leadership assessment framework',
          'Access to passive, high-quality leaders',
          '92%+ 12-month retention'
        ]
      }
    ]
  },
  {
    id: 'talent-intelligence',
    title: 'Talent Intelligence & Market Mapping',
    subtitle: 'Data-driven insights on org structures, benchmarks & talent movement.',
    description: 'Deep, data-backed insights to support strategic workforce planning.',
    content: [
      'Ideal for companies entering new markets, scaling functions, benchmarking compensation or understanding talent movements across the industry.'
    ],
    sections: [
      {
        heading: 'What This Service Covers',
        items: [
          'Competitor org-structure mapping',
          'Compensation & role benchmarking',
          'Talent supply-demand analysis',
          'Leadership movement & attrition insights',
          'Market pulse across Tech & Consumer sectors'
        ]
      },
      {
        heading: 'Why Companies Use This Service',
        items: [
          'To structure and budget teams intelligently',
          'To avoid mis-hiring or overpaying',
          'To plan hiring roadmaps with actual data',
          'To validate talent availability before expanding'
        ]
      },
      {
        heading: 'Outputs Delivered',
        content: 'Insight reports • Talent maps • Org charts • Compensation frameworks • Hiring feasibility assessments'
      }
    ]
  },
  {
    id: 'project-based-hiring',
    title: 'Project-Based Hiring (Consumer Expansion)',
    subtitle: 'Multi-city hiring for QSR, Retail, Wellness, Interiors & Hospitality.',
    description: 'Multi-city hiring support for rapid expansion across QSR, Retail, Interiors, Hospitality and Fitness brands.',
    content: [
      'Designed for businesses launching new locations, scaling operations or entering new territories.'
    ],
    sections: [
      {
        heading: 'What This Service Covers',
        items: [
          'Multi-location hiring projects',
          'Bulk operational roles with quality checks',
          'Store/studio launch support',
          'Dedicated project team for high-volume mandates',
          'Fast turnaround for hiring spikes'
        ]
      },
      {
        heading: 'Typical Roles',
        subsections: [
          {
            content: 'Area Managers • Territory Managers • Cluster Leads • Ops Managers'
          },
          {
            content: 'Store Managers • Launch Managers • Studio Leads • Interior Project Managers'
          }
        ]
      },
      {
        heading: 'Ideal For',
        content: 'QSR chains • Retail brands • Fitness & Wellness • Interiors/Architecture • Logistics • Hospitality'
      },
      {
        heading: 'How Companies Benefit',
        items: [
          'One project team managing the entire mandate',
          'Better quality than traditional volume agencies',
          'Faster turnaround with verified screening',
          'Weekly reporting & structured communication'
        ]
      }
    ]
  },
  {
    id: 'contract-on-demand',
    title: 'Contract & On-Demand Talent',
    subtitle: 'Flexible specialist and interim workforce for 3–12 month projects.',
    description: 'Flexible hiring for project-based roles, interim leadership and short-term workforce requirements — without long-term headcount commitments.',
    content: [
      'Built for organizations needing agility, speed and specialised expertise for 3–12 month periods.'
    ],
    sections: [
      {
        heading: 'What This Service Covers',
        items: [
          'Interim leadership (CTO, CPO, COO, CHRO)',
          'On-demand Product, Engineering, Cloud, Cybersecurity or Data specialists',
          'Contract staffing for QSR, Retail, Logistics and Interiors',
          'Project-specific experts for transformation or scale-up initiatives',
          'Maternity/transition cover for critical roles',
          'Contract-to-hire for niche or uncertain roles'
        ]
      },
      {
        heading: 'Engagement Models',
        items: [
          'Monthly billing with markup',
          'Short-term or long-term contracts',
          'StaffAnchor-managed payroll & compliance'
        ]
      },
      {
        heading: 'Ideal For',
        content: 'Tech companies • Consumer brands • Expansion-stage businesses • Product & engineering teams • Ops-heavy businesses • PE/VC portfolio companies'
      },
      {
        heading: 'How Companies Benefit',
        items: [
          'Zero hiring overhead',
          'Faster onboarding compared to full-time roles',
          'Highly-skilled experts available immediately',
          'Lower long-term cost & higher agility'
        ]
      }
    ]
  }
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-poppins font-light text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight uppercase tracking-wide">
              Services
            </h1>
            
            <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
              StaffAnchor helps high-growth companies hire with speed, precision and context. Our search practice combines deep domain expertise, structured evaluation and market intelligence to deliver talent that drives real business outcomes.
            </p>

            <p className="mt-8 text-lg md:text-xl text-gray-700 leading-relaxed">
              We operate across two focused practices — Technology and Consumer & Services — supported by cross-functional capability in Sales, Product, Engineering, Operations, Finance, HR and Leadership hiring.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {servicesData.map((service, index) => (
              <ServiceSection 
                key={service.id}
                service={service}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins font-light text-3xl md:text-4xl mb-6 uppercase tracking-wide">
            Ready to Build Your Team?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Whether you need mid-senior specialists, leadership talent, or flexible workforce solutions — we're here to help you hire with precision and speed.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-teal-600 text-white px-8 py-4 rounded-full font-medium hover:bg-teal-500 transition-colors duration-200 text-lg"
          >
            Discuss Your Hiring Needs →
          </Link>
        </div>
      </section>
    </>
  );
}

// 'use client';

// import { useState } from 'react';
// import HeroSection from '@/components/ui/HeroSection';
// import MetricsStrip from '@/components/ui/MetricsStrip';
// import Link from 'next/link';
// import PracticeSidebar from '@/components/layout/PracticeSidebar';

// const methodology = [
//   {
//     step: "01",
//     title: "Discovery",
//     description: "Deep dive into your organizational culture, role requirements, and strategic objectives to understand the perfect candidate profile.",
//     features: ["Stakeholder interviews", "Role profiling", "Cultural assessment", "Success metrics definition"]
//   },
//   {
//     step: "02", 
//     title: "Intelligence",
//     description: "Leverage AI-powered market mapping and competitive intelligence to identify and analyze the best talent in the market.",
//     features: ["Market mapping", "Competitive analysis", "Talent intelligence", "Compensation benchmarking"]
//   },
//   {
//     step: "03",
//     title: "Shortlisting",
//     description: "Apply our Fit Index™ algorithm combined with human expertise to curate a precise shortlist of qualified candidates.",
//     features: ["AI-powered screening", "Technical evaluation", "Cultural fit assessment", "Reference validation"]
//   },
//   {
//     step: "04",
//     title: "Evaluation",
//     description: "Facilitate comprehensive evaluation through structured interviews, assessments, and stakeholder feedback loops.",
//     features: ["Structured interviews", "Skills assessment", "Leadership evaluation", "Team fit analysis"]
//   },
//   {
//     step: "05",
//     title: "Closure",
//     description: "Guide negotiation and onboarding process to ensure smooth transition and long-term success for both parties.",
//     features: ["Offer negotiation", "Background verification", "Onboarding support", "Follow-up & retention"]
//   },
// ];
// const functionalMetrics = [
//   { value: "250+", label: "Roles/Year", description: "Functional positions" },
//   { value: "72hr", label: "Shortlisting", description: "Speed to market" },
//   { value: "Pan-India", label: "Reach", description: "Geographic coverage" },
//   { value: "95%", label: "Success Rate", description: "Placement success" },
// ];

// const functions = [
//   {
//     focus: "Sales & Business Development",
//     roles: [
//       "Chief Revenue Officer (CRO)",
//       "VP Sales / Sales Head",
//       "National Sales Head",
//       "Regional / Zonal Sales Head",
//       "Category Manager",
//       "City Manager",
//       "Business Development Manager",
//       "Key Account Manager",
//       "Account Manager",
//       "Channel Sales Manager",
//       "Partnerships Manager",
//       "Inside Sales / SDR Manager",
//       "Customer Success Manager",
//       "Sales Operations Manager"
//     ]
//   },
//   {
//     focus: "Marketing & Growth",
//     roles: [
//       "Chief Marketing Officer (CMO)",
//       "VP Marketing / Head of Marketing",
//       "Head of Growth",
//       "Brand Manager / Assistant Brand Manager",
//       "Product Marketing Manager",
//       "Trade Marketing Manager",
//       "Performance Marketing Manager",
//       "SEO / SEM Specialist",
//       "Paid Media Manager",
//       "Social Media Manager",
//       "Content Strategist / Content Writer / Copywriter",
//       "PR & Corporate Communications Manager",
//       "Events & Activation Manager",
//       "Government Relations / Lobbyist"
//     ]
//   },
//   {
//     focus: "Operations & Supply Chain",
//     roles: [
//       "Chief Operating Officer (COO)",
//       "VP Operations / Head of Operations",
//       "Plant Head / Plant Manager",
//       "Supply Chain Manager",
//       "Logistics Head",
//       "Procurement Manager",
//       "Warehouse Operations Head",
//       "Hospitality Operations Head",
//       "Restaurant / F&B Operations Head",
//       "Fitness / Wellness Centre Manager",
//       "Quick Commerce / Fulfillment Centre Operations Manager"
//     ]
//   },
//   {
//     focus: "Technology & AI/ML",
//     roles: [
//       "Chief Technology Officer (CTO)",
//       "VP Engineering / Head of Product & Technology",
//       "Full Stack Developer",
//       "Backend / Frontend Developer",
//       "Mobile App Developer (iOS / Android)",
//       "Cloud Architect",
//       "DevOps Engineer",
//       "Cybersecurity Specialist",
//       "Blockchain Developer",
//       "Web3 Specialist",
//       "Data Engineer",
//       "Machine Learning Engineer",
//       "Deep Learning Specialist",
//       "NLP Engineer",
//       "Computer Vision Engineer"
//     ]
//   },
//   {
//     focus: "Engineering & Manufacturing",
//     roles: [
//       "VP Engineering",
//       "Chief Engineer",
//       "Plant Head",
//       "Mechanical Engineer",
//       "Electrical Engineer",
//       "Civil Engineer",
//       "Structural Engineer",
//       "Production Engineer",
//       "Quality Assurance Engineer",
//       "Process Engineer",
//       "R&D Engineer",
//       "Automation Specialist"
//     ]
//   },
//   {
//     focus: "Analytics, Strategy & Business Advisory",
//     roles: [
//       "Chief of Staff",
//       "VP Strategy",
//       "Head of Business Planning",
//       "Corporate Strategy Manager",
//       "M&A Specialist",
//       "Business Analyst",
//       "Strategy Consultant",
//       "Management Consultant",
//       "Data Scientist",
//       "Data Analyst",
//       "Business Intelligence Manager",
//       "Big Data Analyst",
//       "Product Strategy Manager"
//     ]
//   }
// ];


// export default function FunctionalHiringPage() {
//   const [sidebarOpen, setSidebarOpen] = useState(true);

//   return (
//     <div className="flex">
//       {/* Sidebar */}
//       <PracticeSidebar 
//         isOpen={sidebarOpen}
//         onToggle={() => setSidebarOpen(!sidebarOpen)}
//         currentPage="functional-hiring"
//       />

//       {/* Main Content */}
//       <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'lg:ml-64' : 'lg:ml-0'}`}>
//         <>
//           <section className='section-padding'>

//           <HeroSection 
//             headline="Building Functional Excellence Across Business Functions."
//             subtext="Deep domain expertise in sales, technology, operations, marketing, and specialized functions to build high-performing teams."
//             />
//           </section>

//           {/* Introduction Section */}
//           <section className="section-padding bg-blue-900">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//               <div className="max-w-4xl mx-auto text-center">
//                 <p className="text-lg text-white leading-relaxed mb-8">
//                   Our Functional Hiring Practice connects growing businesses with proven professionals who can execute, scale, and lead within specific verticals.
//                   From early-growth startups to established enterprises, StaffAnchor delivers agile hiring solutions.
//                 </p>
//               </div>
//             </div>
//           </section>

//           {/* Hiring Framework Section */}
//           {/* 5-Step Methodology */}
//       <section className="section-padding bg-gray-50" id="methodology">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="heading-lg mb-8">5-Step Methodology</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Our proven systematic approach ensures every placement is precise, strategic, and aligned with your long-term success.
//             </p>
//           </div>

//           <div className="space-y-12">
//             {methodology.map((step, index) => (
//               <div key={step.step} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}>
//                 <div className="flex-1">
//                   <div className="flex items-center mb-6">
//                     <div className="w-16 h-16 bg-blue-900 text-white rounded-full flex items-center justify-center font-poppins font-bold text-xl mr-4">
//                       {step.step}
//                     </div>
//                     <h3 className="heading-md text-2xl">{step.title}</h3>
//                   </div>
//                   <p className="text-lg text-gray-600 leading-relaxed mb-6">
//                     {step.description}
//                   </p>
//                   <ul className="grid grid-cols-2 gap-3">
//                     {step.features.map((feature) => (
//                       <li key={feature} className="flex items-center space-x-2 text-sm text-gray-600">
//                         <svg className="w-4 h-4 text-teal-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                         </svg>
//                         <span>{feature}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
                
//                 <div className="flex-1">
//                   <div className="bg-white rounded-xl p-8 shadow-lg">
//                     <div className="w-full h-48 bg-linear-to-br from-blue-50 to-teal-50 rounded-lg flex items-center justify-center">
//                       <div className="text-6xl text-blue-200 font-light">
//                         {step.step}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <MetricsStrip metrics={functionalMetrics} background='blue'/>

//       <section className="section-padding bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="heading-lg mb-8">Our Functional Expertise</h2>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {functions.map((func) => (
//               <div key={func.focus} className="bg-gray-50 rounded-xl p-6">
//                 <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-4">{func.focus}</h3>
//                 <div className="space-y-2">
//                   {func.roles.map((role) => (
//                     <div key={role} className="bg-white px-3 py-2 rounded-lg text-sm text-gray-700">{role}</div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

      
//       {/* Closing CTA */}
//       <section className="pt-20 pb-12 bg-blue-900 text-white text-center">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="font-poppins font-light text-3xl md:text-4xl mb-8 uppercase tracking-wide">
//             REQUEST FUNCTIONAL CONSULTATION
//           </h2>
//           <p className="text-xl text-blue-100 mb-8 leading-relaxed">
//             Share your hiring mandate and let our AI-powered intelligence find your next game-changing hire.
//           </p>
//           <Link
//             href="/contact" 
//             className="inline-block bg-teal-600 text-white px-8 py-4 rounded-full font-medium hover:bg-teal-500 transition-colors duration-200 text-lg"
//           >
//             Share Your Hiring Mandate →
//           </Link>
//         </div>
//       </section>
//         </>
//       </div>
//     </div>
//   );
// }
import { Metadata } from 'next';
import HeroSection from '@/components/ui/HeroSection';

export const metadata: Metadata = {
  title: "Blog & Insights - StaffAnchor Talent Solutions | Talent Intelligence Reports",
  description: "Stay informed with our talent intelligence reports, hiring trends, and industry insights.",
  keywords: "Talent Intelligence, Hiring Trends, Industry Reports, Recruitment Insights, HR Analytics",
};

const blogPosts = [
  {
    title: "India Hiring Pulse 2025",
    excerpt: "Comprehensive analysis of hiring trends, compensation benchmarks, and talent mobility patterns across key industries.",
    category: "Market Research",
    readTime: "12 min read",
    publishDate: "January 2025"
  },
  {
    title: "Future of AI in Recruitment",
    excerpt: "How artificial intelligence is transforming talent acquisition and the balance between automation and human insight.",
    category: "Technology",
    readTime: "8 min read", 
    publishDate: "December 2024"
  },
  {
    title: "CXO Movement Report Q3 2025",
    excerpt: "Executive mobility trends, compensation patterns, and leadership transition insights from our latest research.",
    category: "Executive Insights",
    readTime: "15 min read",
    publishDate: "October 2024"
  },
  {
    title: "EdTech Talent Landscape 2025",
    excerpt: "Deep dive into EdTech hiring patterns, skill requirements, and compensation trends in the education technology sector.",
    category: "Industry Focus",
    readTime: "10 min read",
    publishDate: "September 2024"
  },
];

export default function BlogPage() {
  return (
    <>
      <HeroSection 
        headline="Talent Intelligence That Drives Better Hiring Decisions."
        subtext="Stay informed with our research-backed insights, market intelligence, and strategic hiring guidance."
      />

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <article key={post.title} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
                
                <h2 className="font-poppins font-semibold text-xl text-gray-900 mb-4">{post.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-6">{post.excerpt}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.publishDate}</span>
                  <button className="text-teal-600 font-medium hover:text-teal-700">
                    Read Article →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-blue-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-poppins font-light text-3xl md:text-4xl mb-4">Subscribe to Talent Pulse</h2>
          <p className="text-xl text-blue-100 mb-8">
            Get monthly insights on hiring trends, compensation benchmarks, and talent intelligence delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full text-white border border-gray-300 placeholder-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-transparent"
              />
              <button className="bg-teal-600 text-white px-6 py-3 rounded-full font-medium hover:bg-teal-500">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
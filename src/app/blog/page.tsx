import { Metadata } from 'next';
import Link from 'next/link';
import HeroSection from '@/components/ui/HeroSection';
import { blogPosts } from '@/data/blogData';

export const metadata: Metadata = {
  title: "Blog & Insights - StaffAnchor Talent Solutions | Talent Intelligence Reports",
  description: "Stay informed with our talent intelligence reports, hiring trends, and industry insights.",
  keywords: "Talent Intelligence, Hiring Trends, Industry Reports, Recruitment Insights, HR Analytics",
};

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
              <Link href={`/blog/${post.slug}`} key={post.slug}>
                <article className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow cursor-pointer h-full">
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
                    <span className="text-[var(--color-accent)] font-medium hover:text-teal-700">
                      Read Article →
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      
    </>
  );
}
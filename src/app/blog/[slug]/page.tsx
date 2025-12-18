import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogPosts } from '@/data/blogData';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  
  if (!post) {
    return {
      title: 'Blog Post Not Found',
    };
  }

  return {
    title: `${post.title} - StaffAnchor Blog`,
    description: post.excerpt,
    keywords: `${post.category}, Sales Development, Career Growth`,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Back to Blog */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link 
          href="/blog" 
          className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium mb-8"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </Link>
      </div>

      {/* Article Header */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-4 mb-6">
          <span className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium">
            {post.category}
          </span>
          <span className="text-gray-500">{post.readTime}</span>
          <span className="text-gray-500">•</span>
          <span className="text-gray-500">{post.publishDate}</span>
        </div>
        
        <h1 className="font-poppins font-bold text-4xl md:text-5xl text-gray-900 mb-6 leading-tight">
          {post.title}
        </h1>
        
        <p className="text-xl text-gray-600 leading-relaxed">
          {post.excerpt}
        </p>
      </header>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="prose prose-lg max-w-none">
          {post.content.map((section, index) => {
            switch (section.type) {
              case 'heading':
                return (
                  <h2 key={index} className="font-poppins font-semibold text-2xl md:text-3xl text-gray-900 mt-12 mb-6">
                    {section.text}
                  </h2>
                );
              
              case 'subheading':
                return (
                  <h3 key={index} className="font-poppins font-semibold text-xl md:text-2xl text-gray-900 mt-10 mb-4">
                    {section.text}
                  </h3>
                );
              
              case 'paragraph':
                return (
                  <p key={index} className="text-gray-700 leading-relaxed mb-6 whitespace-pre-line">
                    {section.text}
                  </p>
                );
              
              case 'list':
                return (
                  <ul key={index} className="space-y-3 mb-6 ml-6">
                    {section.items?.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-700 leading-relaxed flex items-start">
                        <span className="text-teal-600 mr-3 mt-1.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              
              case 'quote':
                return (
                  <div key={index} className="bg-gradient-to-r from-teal-50 to-blue-50 border-l-4 border-teal-600 p-6 my-8 rounded-r-lg">
                    <p className="text-gray-800 font-medium italic">
                      {section.text}
                    </p>
                  </div>
                );
              
              default:
                return null;
            }
          })}
        </div>
      </article>

      {/* Related Articles / CTA */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins font-semibold text-2xl md:text-3xl text-gray-900 mb-4">
            Ready to Accelerate Your Sales Career?
          </h2>
          <p className="text-gray-600 mb-8">
            Get personalised guidance from experienced sales professionals
          </p>
          <Link 
            href="/jobseeker"
            className="inline-block bg-teal-600 text-white px-8 py-4 rounded-full font-medium hover:bg-teal-700 transition-colors"
          >
            Start Your Journey
          </Link>
        </div>
      </section>

      {/* More Articles */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-poppins font-semibold text-2xl mb-8">More Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts
              .filter((p) => p.slug !== post.slug)
              .slice(0, 2)
              .map((relatedPost) => (
                <Link href={`/blog/${relatedPost.slug}`} key={relatedPost.slug}>
                  <article className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                    <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-xs font-medium">
                      {relatedPost.category}
                    </span>
                    <h3 className="font-poppins font-semibold text-lg text-gray-900 mt-4 mb-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                    <span className="text-teal-600 text-sm font-medium mt-4 inline-block">
                      Read More →
                    </span>
                  </article>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import Image from 'next/image'
import Link from 'next/link'

// This would typically come from a database
const blogPost = {
  title: 'The Future of Social Media Marketing',
  content: `
    Social media marketing continues to evolve at a rapid pace. As we move through 2024, several key trends are shaping the future of how brands connect with their audiences online.

    ## The Rise of AI-Powered Content
    Artificial Intelligence is revolutionizing how we create and optimize social media content. From generating engaging captions to predicting the best posting times, AI tools are becoming indispensable for marketers.

    ## Video Content Dominance
    Short-form video content continues to dominate social media platforms. With the rise of TikTok and Instagram Reels, brands need to adapt their content strategy to include more video-based storytelling.

    ## Authentic Engagement
    Consumers are increasingly valuing authenticity in brand communications. This means moving away from overly polished content and embracing more genuine, behind-the-scenes moments that resonate with audiences.

    ## Social Commerce Evolution
    The integration of shopping features directly into social media platforms is creating new opportunities for brands to connect with customers and drive sales through social channels.
  `,
  image: '/blog/social-media-future.jpg',
  author: {
    name: 'Sarah Johnson',
    role: 'Social Media Director',
    image: '/team/sarah-johnson.jpg'
  },
  publishedAt: 'March 15, 2024',
  readTime: '5 min read',
  category: 'Social Media'
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <article className="min-h-screen bg-gray-50 py-20">
      <div className="container max-w-4xl mx-auto px-4">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">
              {blogPost.category}
            </span>
            <span>•</span>
            <span>{blogPost.publishedAt}</span>
            <span>•</span>
            <span>{blogPost.readTime}</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            {blogPost.title}
          </h1>
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <Image
                src={blogPost.author.image}
                alt={blogPost.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-medium text-gray-900">{blogPost.author.name}</p>
              <p className="text-sm text-gray-500">{blogPost.author.role}</p>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative h-96 mb-12 rounded-xl overflow-hidden">
          <Image
            src={blogPost.image}
            alt={blogPost.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {blogPost.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-6">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Share Section */}
        <div className="mt-12 border-t pt-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Share this post</h2>
          <div className="flex gap-4">
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </button>
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </button>
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Back to Blog */}
        <div className="mt-12">
          <Link
            href="/blog"
            className="text-primary hover:text-secondary transition-colors"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    </article>
  )
} 
import Image from 'next/image'
import Link from 'next/link'

const blogPosts = [
  {
    title: 'The Future of Social Media Marketing',
    excerpt: 'Explore the latest trends and predictions for social media marketing in 2024.',
    image: '/blog/social-media-future.jpg',
    category: 'Social Media',
    date: 'March 15, 2024',
    readTime: '5 min read',
    slug: 'future-of-social-media-marketing'
  },
  {
    title: 'Creating Engaging Video Content',
    excerpt: 'Learn how to create compelling video content that resonates with your audience.',
    image: '/blog/video-content.jpg',
    category: 'Video Production',
    date: 'March 10, 2024',
    readTime: '7 min read',
    slug: 'creating-engaging-video-content'
  },
  {
    title: 'Content Strategy for E-commerce',
    excerpt: 'Discover effective content strategies to boost your e-commerce business.',
    image: '/blog/ecommerce-content.jpg',
    category: 'Content Creation',
    date: 'March 5, 2024',
    readTime: '6 min read',
    slug: 'content-strategy-ecommerce'
  },
  {
    title: 'SEO Best Practices for 2024',
    excerpt: 'Stay ahead of the curve with the latest SEO techniques and strategies.',
    image: '/blog/seo-best-practices.jpg',
    category: 'Digital Marketing',
    date: 'March 1, 2024',
    readTime: '8 min read',
    slug: 'seo-best-practices-2024'
  }
]

const categories = [
  'All',
  'Social Media',
  'Video Production',
  'Content Creation',
  'Digital Marketing'
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Blog</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Insights, tips, and industry updates to help you stay ahead in digital marketing.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full bg-white text-gray-600 hover:bg-primary hover:text-white transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="mx-2">•</span>
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-primary font-medium hover:text-secondary transition-colors"
                >
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter for the latest insights and updates.
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="btn btn-primary"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  )
} 
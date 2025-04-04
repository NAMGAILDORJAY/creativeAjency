import Image from 'next/image'

const services = [
  {
    icon: '📱',
    title: 'Social Media Management',
    description: 'Level up your social game with viral content that hits different.',
    features: [
      'TikTok & Instagram Strategy',
      'Trending Content Creation',
      'Community Management',
      'Analytics & Growth Tracking'
    ]
  },
  {
    icon: '✍️',
    title: 'Content Creation',
    description: 'Fresh content that makes your brand the main character.',
    features: [
      'Blog Posts & Articles',
      'Social Media Content',
      'Email Newsletters',
      'Brand Voice Development'
    ]
  },
  {
    icon: '🎥',
    title: 'Video Production',
    description: 'Cinematic vibes that make your audience hit that save button.',
    features: [
      'Short-Form Video Content',
      'Brand Story Videos',
      'Product Showcases',
      'Behind-the-Scenes Content'
    ]
  },
  {
    icon: '🎨',
    title: 'Graphic Design',
    description: 'Aesthetic visuals that give your brand that extra sauce.',
    features: [
      'Social Media Graphics',
      'Brand Identity Design',
      'Marketing Materials',
      'Motion Graphics'
    ]
  },
  {
    icon: '📈',
    title: 'Digital Marketing',
    description: 'Strategic moves that make your brand go viral fr fr.',
    features: [
      'Social Media Advertising',
      'Influencer Partnerships',
      'SEO Optimization',
      'Performance Analytics'
    ]
  },
  {
    icon: '💡',
    title: 'Brand Strategy',
    description: 'Building brands that pass the vibe check every time.',
    features: [
      'Brand Identity Development',
      'Market Research',
      'Competitive Analysis',
      'Growth Strategy'
    ]
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-light">
      {/* Hero Section with Animated Background */}
      <section className="relative py-20 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[500px] h-[500px] bg-neon-pink rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob -top-32 -left-32"></div>
          <div className="absolute w-[500px] h-[500px] bg-neon-blue rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000 top-32 -right-32"></div>
          <div className="absolute w-[500px] h-[500px] bg-neon-purple rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000 bottom-32 left-32"></div>
        </div>

        <div className="container relative">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-candy bg-clip-text text-transparent animate-glow">
              Services That Slap ✨
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-slide-up">
              We create <span className="text-neon-pink font-semibold">digital magic</span> that makes your brand 
              <span className="text-neon-purple font-semibold"> stand out</span> in the feed 🔥
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-20 px-4">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 hover:shadow-neon transition-all duration-300 hover:-translate-y-2 border border-neon-blue/20"
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  {service.title}
                </h2>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex} 
                      className="flex items-center text-gray-600 group-hover:text-neon-purple transition-colors"
                    >
                      <span className="mr-2 text-neon-purple">✦</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container">
          <div className="bg-gradient-to-r from-neon-purple/10 to-neon-pink/10 backdrop-blur-sm rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl font-black mb-6 bg-gradient-neon bg-clip-text text-transparent">
                Ready to Go Viral? 🚀
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Let's create content that makes your audience smash that follow button!
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-candy text-white font-bold text-lg hover:shadow-neon transition-all duration-300 hover:scale-105"
              >
                Get Started 
                <span className="ml-2 text-xl">→</span>
              </a>
            </div>
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-neon-purple rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-64 h-64 bg-neon-pink rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          </div>
        </div>
      </section>
    </div>
  )
} 
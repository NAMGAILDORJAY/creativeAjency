import Image from 'next/image'
import Link from 'next/link'

const features = [
  {
    emoji: '✨',
    title: 'Viral Content',
    description: 'We create content that\'s straight bussiness and makes your brand hit different'
  },
  {
    emoji: '🚀',
    title: 'Growth Hacks',
    description: 'Watch your socials blow up with our secret sauce strategies'
  },
  {
    emoji: '💅',
    title: 'Aesthetic AF',
    description: 'Making your brand look extra with designs that hit different'
  },
  {
    emoji: '🔥',
    title: 'No Cap Marketing',
    description: 'Real results, real growth, real talk - straight bussin'
  }
]

const testimonials = [
  {
    text: "They made our TikTok go viral overnight! No cap, best decision ever!",
    author: "Sarah K.",
    role: "Fashion Brand",
    emoji: "✨"
  },
  {
    text: "The aesthetic is immaculate! Our engagement is through the roof!",
    author: "Alex M.",
    role: "Tech Startup",
    emoji: "💯"
  },
  {
    text: "Fr fr, they understand the Gen Z vibe perfectly!",
    author: "Jordan T.",
    role: "Beauty Brand",
    emoji: "💅"
  }
]

const socialLinks = [
  {
    name: 'Instagram',
    url: 'https://instagram.com/codeboy___',
    icon: (
      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
    hoverClass: 'hover:text-[#E4405F]'
  },
  {
    name: 'TikTok',
    url: 'https://tiktok.com/codeboy___',
    icon: (
      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
      </svg>
    ),
    hoverClass: 'hover:text-[#000000]'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/company/codeboy___',
    icon: (
      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    hoverClass: 'hover:text-[#0A66C2]'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/codeboy___',
    icon: (
      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
    hoverClass: 'hover:text-[#1DA1F2]'
  }
]

export default function Home() {
  return (
    <div className="min-h-screen bg-light">
      {/* Admin Button */}
      <Link 
        href="/signin" 
        className="fixed bottom-6 right-6 z-50 group"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
          <div className="relative bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg border border-white/20 hover:scale-110 transition-transform">
            <svg 
              className="w-5 h-5 text-gray-800 group-hover:text-[#FF6B6B] transition-colors" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
      </Link>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[800px] h-[800px] bg-neon-pink rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob -top-32 -left-32"></div>
          <div className="absolute w-[800px] h-[800px] bg-neon-blue rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000 top-32 -right-32"></div>
          <div className="absolute w-[800px] h-[800px] bg-neon-purple rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000 bottom-32 left-32"></div>
        </div>

        <div className="container relative z-10 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block animate-float mb-6">
              <span className="text-6xl">✨</span>
            </div>
            <h1 className="mb-8 animate-fadeIn">
              Make Your Brand
              <br />
              Go Viral
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 mb-12 animate-fadeIn">
              We create content that's straight up 
              <span className="text-neon-pink font-semibold"> bussin </span> 
              and makes your brand 
              <span className="text-neon-purple font-semibold"> hit different</span> 🔥
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fadeIn">
              <Link 
                href="/contact" 
                className="group btn-primary"
              >
                <span>Get Started</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform">🚀</span>
              </Link>
              <Link 
                href="/portfolio" 
                className="group btn-secondary"
              >
                <span>Our Work</span>
                <span className="ml-2 group-hover:rotate-12 transition-transform">✨</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-12 relative overflow-hidden">
        <div className="container px-6">
          <div className="flex justify-center items-center gap-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`transform transition-all duration-300 hover:scale-125 ${social.hoverClass}`}
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container px-6">
          <h2 className="section-title">
            Why We're Different ⚡️
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group card animate-fadeIn"
              >
                <div className="text-6xl mb-6 group-hover:scale-125 transition-transform duration-300">
                  {feature.emoji}
                </div>
                <h3 className="text-3xl font-bold mb-4 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-xl text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center animate-fadeIn">
              <div className="text-6xl font-black bg-gradient-1 bg-clip-text text-transparent mb-2">
                100M+
              </div>
              <p className="text-xl text-gray-600">Views Generated</p>
            </div>
            <div className="text-center animate-fadeIn">
              <div className="text-6xl font-black bg-gradient-2 bg-clip-text text-transparent mb-2">
                500K+
              </div>
              <p className="text-xl text-gray-600">Followers Gained</p>
            </div>
            <div className="text-center animate-fadeIn">
              <div className="text-6xl font-black bg-gradient-3 bg-clip-text text-transparent mb-2">
                50+
              </div>
              <p className="text-xl text-gray-600">Viral Posts</p>
            </div>
            <div className="text-center animate-fadeIn">
              <div className="text-6xl font-black bg-gradient-1 bg-clip-text text-transparent mb-2">
                10x
              </div>
              <p className="text-xl text-gray-600">Avg. ROI</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 relative overflow-hidden">
        <div className="container px-6">
          <h2 className="section-title">
            The Tea ☕️
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="group card animate-fadeIn"
              >
                <div className="text-5xl mb-6">{testimonial.emoji}</div>
                <p className="text-2xl text-gray-600 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="font-bold text-xl text-gray-800">{testimonial.author}</div>
                <div className="text-neon-purple text-lg">{testimonial.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container px-6">
          <div className="bg-gradient-to-r from-neon-purple/10 to-neon-pink/10 backdrop-blur-sm rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="relative z-10">
              <div className="inline-block animate-float mb-6">
                <span className="text-6xl">🚀</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-1 bg-clip-text text-transparent">
                Ready to Make Your Brand Pop?
              </h2>
              <p className="text-2xl text-gray-600 mb-12">
                Let's create something amazing together! 
                <span className="text-neon-pink font-semibold"> No cap</span> 🎯
              </p>
              <Link 
                href="/contact" 
                className="group btn-primary"
              >
                <span>Get Started</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform">✨</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
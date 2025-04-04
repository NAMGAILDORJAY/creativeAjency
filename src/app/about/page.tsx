'use client'

import Image from 'next/image'

const milestones = [
  {
    year: '2020',
    title: 'The Beginning 🚀',
    description: 'Started with a vision to make brands go viral.'
  },
  {
    year: '2021',
    title: 'First Viral Hit ⚡',
    description: 'Our TikTok campaign reached 10M+ views.'
  },
  {
    year: '2022',
    title: 'Team Growth 🌱',
    description: 'Expanded to 20+ creative minds.'
  },
  {
    year: '2023',
    title: 'Going Global 🌍',
    description: 'Now serving clients worldwide.'
  }
]

const teamMembers = [
  {
    name: 'Alex Chen',
    role: 'Creative Director',
    image: '/team/alex.jpg',
    bio: 'Viral content wizard with a passion for breaking the internet.',
    socials: {
      twitter: '#',
      instagram: '#',
      tiktok: '#'
    }
  },
  {
    name: 'Sarah Kim',
    role: 'Social Media Lead',
    image: '/team/sarah.jpg',
    bio: 'TikTok expert who knows what makes Gen Z tick.',
    socials: {
      twitter: '#',
      instagram: '#',
      tiktok: '#'
    }
  },
  {
    name: 'Jordan Taylor',
    role: 'Content Strategist',
    image: '/team/jordan.jpg',
    bio: 'Trend forecaster with an eye for the next big thing.',
    socials: {
      twitter: '#',
      instagram: '#',
      tiktok: '#'
    }
  },
  {
    name: 'Maya Patel',
    role: 'Design Lead',
    image: '/team/maya.jpg',
    bio: 'Creating visuals that make thumbs stop scrolling.',
    socials: {
      twitter: '#',
      instagram: '#',
      tiktok: '#'
    }
  }
]

const values = [
  {
    icon: '🚀',
    title: 'Innovation First',
    description: 'Always pushing boundaries and trying new things.'
  },
  {
    icon: '💯',
    title: 'Authenticity',
    description: 'Keeping it real in everything we do.'
  },
  {
    icon: '🔥',
    title: 'Passion',
    description: 'We love what we do and it shows.'
  },
  {
    icon: '🤝',
    title: 'Collaboration',
    description: 'Better together, always.'
  }
]

export default function AboutPage() {
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
              Meet the Squad ✨
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-slide-up">
              We're a team of <span className="text-neon-pink font-semibold">creative minds</span> who live and breathe 
              <span className="text-neon-purple font-semibold"> digital culture</span> 🔥
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="relative py-16">
        <div className="container">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 border border-neon-blue/20 hover:shadow-neon transition-all duration-300">
            <h2 className="text-3xl font-black text-center mb-6 bg-gradient-neon bg-clip-text text-transparent">
              Our Mission 🎯
            </h2>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
              To empower brands with innovative digital solutions that make them the main character of their industry's story. We don't just create content - we create moments that break the internet.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-20">
        <div className="container">
          <h2 className="text-4xl font-black text-center mb-12 bg-gradient-candy bg-clip-text text-transparent">
            Our Journey 🚀
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 hover:shadow-neon transition-all duration-300 hover:-translate-y-2 border border-neon-blue/20"
              >
                <div className="text-3xl font-black bg-gradient-neon bg-clip-text text-transparent mb-4">
                  {milestone.year}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {milestone.title}
                </h3>
                <p className="text-gray-600">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-20">
        <div className="container">
          <h2 className="text-4xl font-black text-center mb-12 bg-gradient-candy bg-clip-text text-transparent">
            The Dream Team 💫
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden hover:shadow-neon transition-all duration-300 hover:-translate-y-2 border border-neon-blue/20"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-neon-purple font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 mb-4">
                    {member.bio}
                  </p>
                  <div className="flex space-x-3">
                    <a 
                      href={member.socials.twitter}
                      className="text-gray-400 hover:text-neon-purple transition-colors"
                      aria-label="Twitter"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>
                    <a 
                      href={member.socials.instagram}
                      className="text-gray-400 hover:text-neon-pink transition-colors"
                      aria-label="Instagram"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                      </svg>
                    </a>
                    <a 
                      href={member.socials.tiktok}
                      className="text-gray-400 hover:text-neon-blue transition-colors"
                      aria-label="TikTok"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-20">
        <div className="container">
          <h2 className="text-4xl font-black text-center mb-12 bg-gradient-neon bg-clip-text text-transparent">
            Our Vibe ✨
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 hover:shadow-neon transition-all duration-300 hover:-translate-y-2 border border-neon-blue/20"
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
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
                Join Our Journey 🚀
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Ready to create something amazing together? Let's make magic happen!
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-candy text-white font-bold text-lg hover:shadow-neon transition-all duration-300 hover:scale-105"
              >
                Get in Touch 
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
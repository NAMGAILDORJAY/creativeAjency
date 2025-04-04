'use client'

import { useState } from 'react'
import Image from 'next/image'

const categories = [
  { id: 'all', name: 'All Projects 🎯' },
  { id: 'social', name: 'Social Media ✨' },
  { id: 'branding', name: 'Branding 🎨' },
  { id: 'video', name: 'Video Content 🎥' },
  { id: 'web', name: 'Web Design 💻' }
]

const portfolioItems = [
  {
    title: 'TikTok Sensation Campaign',
    category: 'social',
    image: '/portfolio/tiktok-campaign.jpg',
    description: 'Viral marketing campaign that got 1M+ views in 24 hours.',
    stats: {
      views: '1M+',
      engagement: '25%',
      followers: '+50K'
    }
  },
  {
    title: 'Aesthetic Brand Refresh',
    category: 'branding',
    image: '/portfolio/brand-refresh.jpg',
    description: 'Complete brand overhaul that made waves on Instagram.',
    stats: {
      reach: '500K+',
      conversion: '+40%',
      satisfaction: '100%'
    }
  },
  {
    title: 'Viral Product Launch',
    category: 'video',
    image: '/portfolio/product-launch.jpg',
    description: 'Short-form video series that broke the internet.',
    stats: {
      shares: '100K+',
      sales: '+300%',
      ROI: '10x'
    }
  },
  {
    title: 'Gen Z E-commerce Site',
    category: 'web',
    image: '/portfolio/ecommerce.jpg',
    description: 'Mobile-first shopping experience that converts.',
    stats: {
      traffic: '200K+',
      conversion: '5%',
      revenue: '+150%'
    }
  },
  {
    title: 'Influencer Collab',
    category: 'social',
    image: '/portfolio/influencer.jpg',
    description: 'Multi-platform campaign with top Gen Z creators.',
    stats: {
      reach: '2M+',
      engagement: '30%',
      sales: '+200%'
    }
  },
  {
    title: 'App UI Redesign',
    category: 'web',
    image: '/portfolio/app-ui.jpg',
    description: 'Modern interface that users actually love.',
    stats: {
      retention: '+60%',
      reviews: '4.9★',
      downloads: '+80%'
    }
  }
]

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredItems = activeCategory === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory)

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
              Our Latest Work ✨
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-slide-up">
              Check out how we help brands <span className="text-neon-pink font-semibold">go viral</span> and 
              <span className="text-neon-purple font-semibold"> break the internet</span> 🚀
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="relative py-8">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-neon text-white shadow-neon scale-105'
                    : 'bg-white/80 backdrop-blur-sm text-gray-600 hover:text-neon-purple hover:scale-105'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="relative py-12 px-4">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden hover:shadow-neon transition-all duration-300 hover:-translate-y-2 border border-neon-blue/20"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {item.description}
                  </p>
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                    {Object.entries(item.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-neon-purple">
                          {value}
                        </div>
                        <div className="text-sm text-gray-500 capitalize">
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
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
                Want Results Like These? 🎯
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Let's create something amazing together that makes your competition jealous!
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-candy text-white font-bold text-lg hover:shadow-neon transition-all duration-300 hover:scale-105"
              >
                Start Your Project 
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
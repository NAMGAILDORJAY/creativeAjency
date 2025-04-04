'use client'

import Link from 'next/link'
import { useState, memo } from 'react'

export default memo(function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '/', emoji: '🏠' },
    { label: 'Services', href: '/services', emoji: '🚀' },
    { label: 'Portfolio', href: '/portfolio', emoji: '✨' },
    { label: 'About', href: '/about', emoji: '👋' },
    { label: 'Blog', href: '/blog', emoji: '📝' },
    { label: 'Contact', href: '/contact', emoji: '💌' }
  ]

  return (
    <nav className="fixed w-full z-50">
      {/* Glassmorphic Navigation Bar */}
      <div className="bg-white/80 backdrop-blur-md border-b border-white/20 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link 
              href="/" 
              className="text-2xl font-black bg-gradient-candy bg-clip-text text-transparent hover:scale-105 transform transition-all duration-300"
            >
              Creative Agency ✨
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 rounded-xl text-gray-700 hover:bg-white/50 hover:text-neon-purple transition-all duration-300 font-medium flex items-center space-x-2 group"
                >
                  <span className="text-xl group-hover:scale-125 transition-transform duration-300">{item.emoji}</span>
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-xl hover:bg-white/50 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1.5 relative">
                <span 
                  className={`w-6 h-0.5 bg-gray-800 transform transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                />
                <span 
                  className={`w-6 h-0.5 bg-gray-800 transition-opacity duration-300 ${
                    isMenuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span 
                  className={`w-6 h-0.5 bg-gray-800 transform transition-all duration-300 ${
                    isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed inset-x-0 bg-white/90 backdrop-blur-lg border-b border-white/20 shadow-lg transition-all duration-300 ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-3 rounded-xl text-gray-700 hover:bg-white/50 hover:text-neon-purple transition-all duration-300 font-medium flex items-center space-x-3"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-2xl">{item.emoji}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}) 
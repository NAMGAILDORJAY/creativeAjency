'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useAuth } from '@/context/AuthContext'
import { useRouter } from 'next/navigation'

export default function AdminIcon() {
  const [isOpen, setIsOpen] = useState(false)
  const { isAdmin, logout } = useAuth()
  const router = useRouter()

  if (!isAdmin) {
    return null
  }

  const handleLogout = () => {
    logout()
    setIsOpen(false)
    router.push('/admin/login')
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-2xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-lg bg-opacity-80 hover:scale-105 transform transition-all duration-300 group"
        aria-label="Admin Menu"
      >
        <div className="relative">
          <span className="absolute -top-2 -right-2 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-gradient-to-r from-purple-600 to-pink-600"></span>
          </span>
          <svg
            className="w-6 h-6 text-gray-800 group-hover:text-purple-600 transition-colors duration-200"
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
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          ></div>
          <div className="fixed bottom-24 right-6 w-64 bg-white/90 backdrop-blur-lg rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] py-3 z-50 border border-white/20">
            <div className="px-4 py-2 mb-2">
              <p className="text-sm font-medium text-gray-600">Admin Menu ✨</p>
            </div>
            <Link
              href="/admin"
              className="flex items-center px-4 py-3 text-gray-700 hover:bg-purple-50/50 transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              <span className="text-xl mr-3">🏠</span>
              Dashboard
            </Link>
            <Link
              href="/admin/posts/new"
              className="flex items-center px-4 py-3 text-gray-700 hover:bg-purple-50/50 transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              <span className="text-xl mr-3">✍️</span>
              New Post
            </Link>
            <Link
              href="/admin/settings"
              className="flex items-center px-4 py-3 text-gray-700 hover:bg-purple-50/50 transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              <span className="text-xl mr-3">⚙️</span>
              Settings
            </Link>
            <button
              className="flex items-center w-full px-4 py-3 text-red-600 hover:bg-red-50/50 transition-all duration-200"
              onClick={handleLogout}
            >
              <span className="text-xl mr-3">👋</span>
              Logout
            </button>
          </div>
        </>
      )}
    </div>
  )
} 
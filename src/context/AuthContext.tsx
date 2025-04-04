'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { useRouter } from 'next/navigation'

interface AuthContextType {
  isAdmin: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => void
}

// Demo admin credentials - in a real app, this would be in a secure backend
const DEMO_ADMIN = {
  email: 'admin@example.com',
  password: 'admin123'
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAdmin, setIsAdmin] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check if user is logged in on mount
    try {
      const token = typeof window !== 'undefined' ? sessionStorage.getItem('adminToken') : null
      if (token) {
        setIsAdmin(true)
      }
    } catch (error) {
      console.error('Error checking auth state:', error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const login = async (email: string, password: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      try {
        // Simple validation
        if (!email || !password) {
          reject(new Error('Email and password are required'))
          return
        }

        // Check credentials
        if (email === DEMO_ADMIN.email && password === DEMO_ADMIN.password) {
          // Store auth token in session storage
          sessionStorage.setItem('adminToken', 'demo-token')
          setIsAdmin(true)
          // Use setTimeout to ensure state is updated before navigation
          setTimeout(() => {
            router.push('/admin/dashboard')
            resolve()
          }, 100)
        } else {
          reject(new Error('Invalid credentials'))
        }
      } catch (error) {
        console.error('Login error:', error)
        reject(error)
      }
    })
  }

  const logout = () => {
    try {
      sessionStorage.removeItem('adminToken')
      setIsAdmin(false)
      router.push('/')
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  // Show loading state while checking initial auth state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-light flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FF6B6B]"></div>
      </div>
    )
  }

  return (
    <AuthContext.Provider value={{ isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
} 
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import mongoose from 'mongoose'

// Connect to MongoDB
const connectDB = async () => {
  if (mongoose.connections[0].readyState) return
  try {
    await mongoose.connect(process.env.MONGODB_URI!)
    console.log('MongoDB connected successfully')
  } catch (error) {
    console.error('MongoDB connection error:', error)
  }
}

// Settings Schema
const settingsSchema = new mongoose.Schema({
  siteName: { type: String, required: true },
  siteDescription: { type: String, required: true },
  contactEmail: { type: String, required: true },
  socialLinks: {
    facebook: String,
    twitter: String,
    instagram: String,
    linkedin: String
  },
  updatedAt: { type: Date, default: Date.now }
})

const Settings = mongoose.models.Settings || mongoose.model('Settings', settingsSchema)

export async function GET() {
  try {
    await connectDB()
    let settings = await Settings.findOne()
    
    if (!settings) {
      settings = await Settings.create({
        siteName: 'Creative Agency',
        siteDescription: 'Professional digital marketing, web design, and branding services',
        contactEmail: 'contact@example.com',
        socialLinks: {
          facebook: 'https://facebook.com',
          twitter: 'https://twitter.com',
          instagram: 'https://instagram.com',
          linkedin: 'https://linkedin.com'
        }
      })
    }
    
    return NextResponse.json(settings)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch settings' },
      { status: 500 }
    )
  }
}

export async function PUT(request: NextRequest) {
  try {
    await connectDB()
    const data = await request.json()
    
    const settings = await Settings.findOneAndUpdate(
      {},
      { ...data, updatedAt: new Date() },
      { new: true, upsert: true }
    )
    
    return NextResponse.json(settings)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update settings' },
      { status: 500 }
    )
  }
} 
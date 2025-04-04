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

// Post Schema
const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  content: { type: String, required: true },
  excerpt: { type: String, required: true },
  author: {
    name: { type: String, required: true },
    role: { type: String, required: true }
  },
  category: { type: String, required: true },
  readTime: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
})

const Post = mongoose.models.Post || mongoose.model('Post', postSchema)

export async function GET(request: NextRequest) {
  try {
    await connectDB()
    const posts = await Post.find().sort({ createdAt: -1 })
    return NextResponse.json(posts)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB()
    const data = await request.json()
    const post = await Post.create(data)
    return NextResponse.json(post, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create post' },
      { status: 500 }
    )
  }
} 
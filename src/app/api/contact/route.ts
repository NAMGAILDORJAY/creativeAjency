import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import mongoose from 'mongoose'

// Define the contact schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
  service: String,
  createdAt: { type: Date, default: Date.now },
})

// Create the Contact model (only if it doesn't exist)
const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message, service } = body

    // Validate required fields
    if (!name || !email || !subject || !message || !service) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Connect to MongoDB
    await connectDB()

    // Create new contact entry
    const contact = await Contact.create({
      name,
      email,
      subject,
      message,
      service,
    })

    return NextResponse.json(
      { message: 'Contact form submitted successfully', contact },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error submitting contact form:', error)
    return NextResponse.json(
      { error: 'Failed to submit contact form' },
      { status: 500 }
    )
  }
} 
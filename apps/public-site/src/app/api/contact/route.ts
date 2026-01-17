import { NextResponse } from 'next/server'
import { prisma } from '@kzn-youth-choir/db'

const reasonLabels: Record<string, string> = {
  general: 'General Enquiries',
  auditions: 'Enquiries about Auditions',
  booking: 'Book Us for an Event/Performance',
  events: 'Event Information',
  sponsorship: 'Sponsorship Opportunities',
  media: 'Media/Press Inquiries',
  support: 'Support/Donations',
  other: 'Other',
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, reason, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Format reason for notes
    const reasonText = reason ? `Reason: ${reasonLabels[reason] || reason}\n` : ''
    const notes = `Contact form submission:\n${reasonText}Subject: ${subject}\nMessage: ${message}`

    // Create contact record (as subscriber for now)
    await prisma.contact.create({
      data: {
        type: 'SUBSCRIBER',
        firstName: name,
        email: email,
        phone: phone || null,
        notes: notes,
      },
    })

    // TODO: Send email notification to admin
    // For now, just log it
    console.log('Contact form submission:', { name, email, reason, subject, message })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Failed to process contact form' },
      { status: 500 }
    )
  }
}






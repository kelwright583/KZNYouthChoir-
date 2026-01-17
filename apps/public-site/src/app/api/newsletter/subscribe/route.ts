import { NextResponse } from 'next/server'
import { prisma } from '@kzn-youth-choir/db'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email } = body

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      )
    }

    // Check if contact already exists
    const existing = await prisma.contact.findFirst({
      where: {
        email: email,
        type: 'SUBSCRIBER',
      },
    })

    if (existing) {
      // Update if inactive
      if (!existing.isActive) {
        await prisma.contact.update({
          where: { id: existing.id },
          data: { isActive: true },
        })
      }
      return NextResponse.json({ success: true, message: 'Already subscribed' })
    }

    // Create new subscriber
    await prisma.contact.create({
      data: {
        type: 'SUBSCRIBER',
        email: email,
        isActive: true,
      },
    })

    // TODO: Send welcome email (optional)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error subscribing to newsletter:', error)
    return NextResponse.json(
      { error: 'Failed to subscribe' },
      { status: 500 }
    )
  }
}






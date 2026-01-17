import { NextResponse } from 'next/server'
import { prisma } from '@kzn-youth-choir/db'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const {
      firstName,
      lastName,
      email,
      phone,
      dateOfBirth,
      voicePart,
      previousExperience,
      notes,
      agreedToTerms,
      agreedToPromotional,
    } = body

    // Validation
    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: 'First name, last name, and email are required' },
        { status: 400 }
      )
    }

    if (!agreedToTerms) {
      return NextResponse.json(
        { error: 'You must agree to the terms and conditions' },
        { status: 400 }
      )
    }

    // Check if email already exists
    const existing = await prisma.auditionSignup.findUnique({
      where: { email },
    })

    if (existing) {
      return NextResponse.json(
        { error: 'You are already signed up for audition notifications' },
        { status: 400 }
      )
    }

    // Create signup
    const signup = await prisma.auditionSignup.create({
      data: {
        firstName,
        lastName,
        email,
        phone: phone || null,
        dateOfBirth: dateOfBirth ? new Date(dateOfBirth) : null,
        voicePart: voicePart || null,
        previousExperience: previousExperience || null,
        notes: notes || null,
        agreedToTerms: true,
        agreedToPromotional: agreedToPromotional || false,
        termsAgreedAt: new Date(),
        promotionalAgreedAt: agreedToPromotional ? new Date() : null,
      },
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you! We will notify you when auditions open.',
        id: signup.id,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error creating audition signup:', error)
    return NextResponse.json(
      { error: 'Failed to process your signup. Please try again.' },
      { status: 500 }
    )
  }
}


import { NextResponse } from 'next/server'
import { prisma } from '@kzn-youth-choir/db'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '50')
    const skip = (page - 1) * limit

    const [signups, total] = await Promise.all([
      prisma.auditionSignup.findMany({
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      prisma.auditionSignup.count(),
    ])

    return NextResponse.json({
      signups,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    })
  } catch (error) {
    console.error('Error fetching audition signups:', error)
    return NextResponse.json(
      { error: 'Failed to fetch audition signups' },
      { status: 500 }
    )
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json()
    const { id, notifiedAt } = body

    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 })
    }

    const signup = await prisma.auditionSignup.update({
      where: { id },
      data: {
        notifiedAt: notifiedAt ? new Date(notifiedAt) : null,
      },
    })

    return NextResponse.json({ success: true, signup })
  } catch (error) {
    console.error('Error updating audition signup:', error)
    return NextResponse.json(
      { error: 'Failed to update audition signup' },
      { status: 500 }
    )
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 })
    }

    await prisma.auditionSignup.delete({
      where: { id },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting audition signup:', error)
    return NextResponse.json(
      { error: 'Failed to delete audition signup' },
      { status: 500 }
    )
  }
}


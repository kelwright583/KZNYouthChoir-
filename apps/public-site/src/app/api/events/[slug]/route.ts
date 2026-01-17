import { NextResponse } from 'next/server'
import { prisma } from '@kzn-youth-choir/db'
import { Prisma } from '@prisma/client'

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const event = await prisma.event.findUnique({
      where: {
        slug: params.slug,
        audience: Prisma.EventAudience.PUBLIC,
      },
      include: {
        attachments: true,
        createdBy: {
          select: {
            name: true,
          },
        },
      },
    })

    if (!event) {
      return NextResponse.json(
        { error: 'Event not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(event)
  } catch (error) {
    console.error('Error fetching event:', error)
    return NextResponse.json(
      { error: 'Failed to fetch event' },
      { status: 500 }
    )
  }
}






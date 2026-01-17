import { NextResponse } from 'next/server'
import { prisma } from '@kzn-youth-choir/db'
import { EventAudience } from '@kzn-youth-choir/db'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const limit = parseInt(searchParams.get('limit') || '10')
    const filter = searchParams.get('filter') // 'upcoming', 'past', or null for all
    const audience = searchParams.get('audience') || 'PUBLIC'

    const now = new Date()
    
    let where: any = {
      audience: audience as EventAudience,
    }

    if (filter === 'upcoming') {
      where.startDate = { gte: now }
    } else if (filter === 'past') {
      where.startDate = { lt: now }
    }

    const events = await prisma.event.findMany({
      where,
      orderBy: filter === 'past' 
        ? { startDate: 'desc' }
        : { startDate: 'asc' },
      take: limit,
      include: {
        createdBy: {
          select: {
            name: true,
          },
        },
      },
    })

    // Ensure we always return an array
    return NextResponse.json(Array.isArray(events) ? events : [])
  } catch (error) {
    console.error('Error fetching events:', error)
    // Return empty array instead of error object to prevent frontend errors
    return NextResponse.json([], { status: 500 })
  }
}



import { NextResponse } from 'next/server'
import { prisma } from '@kzn-youth-choir/db'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const limit = parseInt(searchParams.get('limit') || '10')
    const featured = searchParams.get('featured') === 'true'

    const now = new Date()
    
    const posts = await prisma.newsPost.findMany({
      where: {
        AND: [
          { publishAt: { lte: now } },
          {
            OR: [
              { expiresAt: null },
              { expiresAt: { gte: now } },
            ],
          },
          ...(featured ? [{ featured: true }] : []),
        ],
      },
      orderBy: [
        { pinned: 'desc' },
        { publishAt: 'desc' },
      ],
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
    return NextResponse.json(Array.isArray(posts) ? posts : [])
  } catch (error) {
    console.error('Error fetching news posts:', error)
    // Return empty array instead of error object to prevent frontend errors
    return NextResponse.json([], { status: 500 })
  }
}


import { NextResponse } from 'next/server'
import { prisma } from '@kzn-youth-choir/db'

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const now = new Date()
    
    const post = await prisma.newsPost.findFirst({
      where: {
        slug: params.slug,
        publishAt: { lte: now },
        OR: [
          { expiresAt: null },
          { expiresAt: { gte: now } },
        ],
      },
      include: {
        createdBy: {
          select: {
            name: true,
          },
        },
      },
    })

    if (!post) {
      return NextResponse.json(
        { error: 'News post not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(post)
  } catch (error) {
    console.error('Error fetching news post:', error)
    return NextResponse.json(
      { error: 'Failed to fetch news post' },
      { status: 500 }
    )
  }
}


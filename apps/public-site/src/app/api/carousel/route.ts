import { NextResponse } from 'next/server'
import { prisma } from '@kzn-youth-choir/db'

export async function GET() {
  try {
    const now = new Date()
    
    const slides = await prisma.carouselSlide.findMany({
      where: {
        isActive: true,
        AND: [
          {
            OR: [
              { startDate: null },
              { startDate: { lte: now } },
            ],
          },
          {
            OR: [
              { endDate: null },
              { endDate: { gte: now } },
            ],
          },
        ],
      },
      orderBy: {
        order: 'asc',
      },
      take: 10,
    })

    // Filter out any invalid slides and ensure imageUrl exists
    const validSlides = slides
      .filter((slide: any) => slide && slide.id)
      .map((slide: any) => ({
        id: slide.id,
        title: slide.title,
        subtitle: slide.subtitle,
        imageUrl: slide.imageUrl || '',
        ctaText: slide.ctaText,
        ctaLink: slide.ctaLink,
      }))

    // Ensure we always return an array
    return NextResponse.json(Array.isArray(validSlides) ? validSlides : [])
  } catch (error) {
    console.error('Error fetching carousel slides:', error)
    // Return empty array instead of error object to prevent frontend errors
    return NextResponse.json([], { status: 500 })
  }
}


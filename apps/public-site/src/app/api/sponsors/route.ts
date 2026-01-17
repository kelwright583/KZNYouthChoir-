import { NextResponse } from 'next/server'
import { prisma } from '@kzn-youth-choir/db'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const featured = searchParams.get('featured') === 'true'

    const sponsors = await prisma.sponsor.findMany({
      where: {
        isActive: true,
        ...(featured && { featured: true }),
      },
      orderBy: [
        { tier: 'asc' },
        { order: 'asc' },
      ],
    })

    // Ensure we always return an array
    return NextResponse.json(Array.isArray(sponsors) ? sponsors : [])
  } catch (error) {
    console.error('Error fetching sponsors:', error)
    // Return empty array instead of error object to prevent frontend errors
    return NextResponse.json([], { status: 500 })
  }
}



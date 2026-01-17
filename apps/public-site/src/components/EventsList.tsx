'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@kzn-youth-choir/ui'
import Link from 'next/link'
import Image from 'next/image'

interface Event {
  id: string
  title: string
  slug: string
  type: string
  startDate: string
  endDate: string | null
  venue: string | null
  description: string | null
}

interface EventsListProps {
  limit?: number
  showViewAll?: boolean
}

export function EventsList({ limit = 6, showViewAll = true }: EventsListProps) {
  const [events, setEvents] = useState<Event[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(`/api/events?limit=${limit}&filter=upcoming`)
      .then((res) => res.json())
      .then((data) => {
        // Ensure data is always an array
        if (Array.isArray(data)) {
          setEvents(data)
        } else {
          console.error('Invalid events data format:', data)
          setEvents([])
        }
        setIsLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching events:', error)
        setEvents([])
        setIsLoading(false)
      })
  }, [limit])

  if (isLoading) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(3)].map((_, i) => (
          <Card key={i} className="animate-pulse overflow-hidden">
            <div className="h-48 bg-neutral-200" />
            <CardContent className="pt-6">
              <div className="h-4 bg-neutral-200 rounded w-3/4 mb-4" />
              <div className="h-6 bg-neutral-200 rounded w-full mb-2" />
              <div className="h-4 bg-neutral-200 rounded w-2/3" />
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  if (events.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-neutral-500 text-lg">
          No upcoming events scheduled. Check back soon!
        </p>
      </div>
    )
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-ZA', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  }

  const formatTime = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleTimeString('en-ZA', {
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Link href={`/events/${event.slug}`}>
              <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer overflow-hidden">
                <div className="relative h-48 w-full">
                  <img
                    src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80"
                    alt={event.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <CardContent className="pt-6">
                  <div className="text-sm text-neutral-500 mb-2">
                    {formatDate(event.startDate)}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-neutral-900">
                    {event.title}
                  </h3>
                  {event.venue && (
                    <p className="text-sm text-neutral-600 mb-2">
                      📍 {event.venue}
                    </p>
                  )}
                  {event.startDate && (
                    <p className="text-sm text-neutral-600 mb-3">
                      🕐 {formatTime(event.startDate)}
                    </p>
                  )}
                  {event.description && (
                    <p className="text-sm text-neutral-600 line-clamp-2 mb-3">
                      {event.description}
                    </p>
                  )}
                  <div className="text-sm text-[#3980b7] font-medium">
                    Learn more →
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
      {showViewAll && events.length >= limit && (
        <div className="text-center mt-8">
          <Link
            href="/events"
            className="inline-block px-6 py-3 bg-[#3980b7] text-white rounded-lg font-medium hover:bg-[#3980b7]/90 transition-colors"
          >
            View All Events
          </Link>
        </div>
      )}
    </>
  )
}


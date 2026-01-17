import { Header, Footer, Card, CardContent } from '@kzn-youth-choir/ui'
import { notFound } from 'next/navigation'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Auditions', href: '/auditions' },
  { label: 'Events', href: '/events' },
  { label: 'Media', href: '/media' },
  { label: 'Support Us', href: '/support' },
  { label: 'News', href: '/news' },
  { label: 'Contact', href: '/contact' },
]

async function getEvent(slug: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/api/events/${slug}`, {
      cache: 'no-store',
    })
    
    if (!res.ok) {
      return null
    }
    
    return res.json()
  } catch (error) {
    console.error('Error fetching event:', error)
    return null
  }
}

export default async function EventDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const event = await getEvent(params.slug)

  if (!event) {
    notFound()
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-ZA', {
      weekday: 'long',
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
    <div className="min-h-screen flex flex-col">
      <Header navItems={navItems} />
      
      <main className="flex-1 py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <a
              href="/events"
              className="text-[#3980b7] hover:text-[#3980b7]/80 text-sm font-medium"
            >
              ← Back to Events
            </a>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">{event.title}</h1>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="pt-6">
                <div className="text-sm text-neutral-500 mb-2">Date</div>
                <div className="text-lg font-semibold">{formatDate(event.startDate)}</div>
                {event.startDate && (
                  <div className="text-sm text-neutral-600 mt-1">
                    {formatTime(event.startDate)}
                  </div>
                )}
              </CardContent>
            </Card>

            {event.venue && (
              <Card>
                <CardContent className="pt-6">
                  <div className="text-sm text-neutral-500 mb-2">Venue</div>
                  <div className="text-lg font-semibold">{event.venue}</div>
                  {event.venueAddress && (
                    <div className="text-sm text-neutral-600 mt-1">
                      {event.venueAddress}
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {event.callTime && (
              <Card>
                <CardContent className="pt-6">
                  <div className="text-sm text-neutral-500 mb-2">Call Time</div>
                  <div className="text-lg font-semibold">
                    {formatTime(event.callTime)}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {event.description && (
            <Card className="mb-6">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4">About This Event</h2>
                <div
                  className="prose prose-lg max-w-none text-neutral-700"
                  dangerouslySetInnerHTML={{ __html: event.description }}
                />
              </CardContent>
            </Card>
          )}

          {event.uniform && (
            <Card className="mb-6">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4">Uniform</h2>
                <p className="text-neutral-700">{event.uniform}</p>
              </CardContent>
            </Card>
          )}

          {event.whatToBring && (
            <Card className="mb-6">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4">What to Bring</h2>
                <p className="text-neutral-700">{event.whatToBring}</p>
              </CardContent>
            </Card>
          )}

          {event.ticketLink && (
            <div className="text-center">
              <a
                href={event.ticketLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-[#f97f1d] text-white rounded-lg font-medium hover:bg-[#f97f1d]/90 transition-colors"
              >
                Get Tickets
              </a>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}


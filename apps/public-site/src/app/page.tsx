import { Header, Footer, Card, CardContent } from '@kzn-youth-choir/ui'
import { HeroCarousel } from '@/components/HeroCarousel'
import { EventsList } from '@/components/EventsList'
import { NewsList } from '@/components/NewsList'
import { SponsorStrip } from '@/components/SponsorStrip'
import { SafeImage } from '@/components/SafeImage'

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

const footerSections = [
  {
    title: 'About',
    links: [
      { label: 'Our Story', href: '/about' },
      { label: 'Join Us', href: '/auditions' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Events',
    links: [
      { label: 'Upcoming Events', href: '/events' },
      { label: 'Calendar', href: '/events/calendar' },
      { label: 'Past Performances', href: '/events?filter=past' },
    ],
  },
  {
    title: 'Media',
    links: [
      { label: 'Videos', href: '/media/video' },
      { label: 'Gallery', href: '/media/gallery' },
      { label: 'News', href: '/news' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Use', href: '/terms' },
    ],
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        navItems={navItems}
        ctaLabel="Join Us"
        ctaHref="/auditions"
      />
      
      <main className="flex-1">
        {/* Hero Carousel - Dynamic */}
        <HeroCarousel />

        {/* About Section with Image */}
        <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <SafeImage
                  src="/images/HeroImage.jpg"
                  alt="KZN Youth Choir performing together"
                  className="absolute inset-0 w-full h-full object-cover"
                  fallbackSrc="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  The Oldest Youth Choir in South Africa
                </h2>
                <p className="text-xl text-neutral-600 mb-4">
                  Celebrating choral singing since 1967
                </p>
                <p className="text-lg text-neutral-700 leading-relaxed mb-8">
                  The <strong>KwaZulu-Natal Youth Choir</strong> is a provincial choir bringing together 
                  around 80 talented choristers from across KZN. Under the direction of{' '}
                  <strong>Bernard Krüger</strong>, conductor, composer, and accomplished musician, 
                  we celebrate our cultural diversity through classical, pop choral, and traditional 
                  African music.
                </p>
                <a
                  href="/about"
                  className="inline-block px-6 py-3 text-[#3980b7] border-2 border-[#3980b7] rounded-lg font-medium hover:bg-[#3980b7]/5 transition-colors"
                >
                  Learn More About Us
                </a>
              </div>
            </div>

            {/* Values Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
              <Card className="hover:shadow-lg transition-shadow">
                <div className="relative h-48 w-full">
                  <SafeImage
                    src="/images/KZNYouthChoirCommunity.jpg"
                    alt="South African Community"
                    className="absolute inset-0 w-full h-full object-cover"
                    fallbackSrc="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&q=80"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">Community</h3>
                  <p className="text-neutral-600">
                    Building connections across KZN through the power of music
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <div className="relative h-48 w-full">
                  <SafeImage
                    src="/images/EthnicBeadPhoto.jpg"
                    alt="South African Heritage - Traditional Beads"
                    className="absolute inset-0 w-full h-full object-cover"
                    fallbackSrc="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">Heritage</h3>
                  <p className="text-neutral-600">
                    Celebrating South African culture and traditions
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <div className="relative h-48 w-full">
                  <SafeImage
                    src="/images/KZNYOuthChoirYouth.jpg"
                    alt="Youth"
                    className="absolute inset-0 w-full h-full object-cover"
                    fallbackSrc="https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=400&q=80"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">Youth</h3>
                  <p className="text-neutral-600">
                    Empowering young voices to reach their full potential
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <div className="relative h-48 w-full">
                  <SafeImage
                    src="/images/KZNYouthChoirExcellence.jpg"
                    alt="Excellence"
                    className="absolute inset-0 w-full h-full object-cover"
                    fallbackSrc="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&q=80"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                  <p className="text-neutral-600">
                    Striving for the highest standards in choral performance
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Upcoming Events - Dynamic */}
        <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-neutral-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Upcoming Performances
            </h2>
            <p className="text-center text-neutral-600 mb-12">
              Join us for our next performances and experience the magic of choral music
            </p>
            <EventsList limit={6} showViewAll={true} />
          </div>
        </section>

        {/* Latest News - Dynamic */}
        <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Latest News & Updates
            </h2>
            <p className="text-center text-neutral-600 mb-12">
              Stay connected with our latest achievements, announcements, and stories
            </p>
            <NewsList limit={6} showViewAll={true} />
          </div>
        </section>

        {/* Achievements Highlight with Image */}
        <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0">
            <SafeImage
              src="/images/KZNYouthChoirVienna.jpg"
              alt="KZN Youth Choir - Vienna International Excellence"
              className="absolute inset-0 w-full h-full object-cover"
              fallbackSrc="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&q=80"
            />
            <div className="absolute inset-0 bg-black/70" />
          </div>
          <div className="relative max-w-4xl mx-auto text-center text-white z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              International Excellence
            </h2>
            <p className="text-xl mb-4">
              1st Place with Outstanding Success
            </p>
            <p className="text-lg opacity-90 mb-8">
              At the 13th Summa Cum Laude International Youth Music Festival in Vienna, Austria (2019). 
              The only choir representing the African continent, competing against choirs from Australia, 
              China, Taiwan, and Brazil.
            </p>
            <a
              href="/about"
              className="inline-block px-6 py-3 bg-[#f97f1d] text-white rounded-lg font-medium hover:bg-[#f97f1d]/90 transition-colors"
            >
              Discover Our Story
            </a>
          </div>
        </section>

        {/* Quick Links Cards */}
        <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Get Involved
            </h2>
            <p className="text-center text-neutral-600 mb-12">
              Join our community and be part of something extraordinary
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <a href="/auditions">
                <Card className="h-full hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer overflow-hidden">
                  <div className="relative h-48 w-full">
                    <SafeImage
                      src="/images/KZNYouthChoirJoinUs.jpg"
                      alt="Join the choir"
                      className="absolute inset-0 w-full h-full object-cover"
                      fallbackSrc="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&q=80"
                    />
                  </div>
                  <CardContent className="pt-6">
                    <h3 className="text-2xl font-semibold mb-3">Join Us</h3>
                    <p className="text-neutral-600 mb-4">
                      Audition to become part of South Africa's oldest youth choir
                    </p>
                    <span className="text-[#3980b7] font-medium">Learn More →</span>
                  </CardContent>
                </Card>
              </a>

              <a href="/support">
                <Card className="h-full hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer overflow-hidden">
                  <div className="relative h-48 w-full">
                    <SafeImage
                      src="/images/KZNYouthChoirSupportUs.jpg"
                      alt="Support the choir"
                      className="absolute inset-0 w-full h-full object-cover"
                      fallbackSrc="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80"
                    />
                  </div>
                  <CardContent className="pt-6">
                    <h3 className="text-2xl font-semibold mb-3">Support Us</h3>
                    <p className="text-neutral-600 mb-4">
                      Help us continue our mission through donations or sponsorship
                    </p>
                    <span className="text-[#3980b7] font-medium">Learn More →</span>
                  </CardContent>
                </Card>
              </a>

              <a href="/events">
                <Card className="h-full hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer overflow-hidden">
                  <div className="relative h-48 w-full">
                    <SafeImage
                      src="/images/KZNYouthChoirAttendEvents.jpg"
                      alt="Attend events"
                      className="absolute inset-0 w-full h-full object-cover"
                      fallbackSrc="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80"
                    />
                  </div>
                  <CardContent className="pt-6">
                    <h3 className="text-2xl font-semibold mb-3">Attend Events</h3>
                    <p className="text-neutral-600 mb-4">
                      Experience the magic of choral music at our performances
                    </p>
                    <span className="text-[#3980b7] font-medium">View Events →</span>
                  </CardContent>
                </Card>
              </a>
            </div>
          </div>
        </section>

        {/* Book Us Section */}
        <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 to-accent-orange/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Book Us for Your Event
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Bring world-class choral excellence to your special occasion. From intimate weddings to grand festivals, 
                we create unforgettable musical experiences.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-[#3980b7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Weddings</h3>
                  <p className="text-neutral-600 text-sm">Make your special day unforgettable</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-[#3980b7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Corporate Events</h3>
                  <p className="text-neutral-600 text-sm">Elevate your business gatherings</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-[#3980b7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Festivals & Fêtes</h3>
                  <p className="text-neutral-600 text-sm">Add cultural richness to celebrations</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-[#3980b7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Community Events</h3>
                  <p className="text-neutral-600 text-sm">Enrich your local gatherings</p>
                </CardContent>
              </Card>
            </div>
            <div className="text-center">
              <a
                href="/contact?reason=booking"
                className="inline-block px-8 py-3 bg-[#3980b7] text-white rounded-lg font-medium hover:bg-[#3980b7]/90 transition-colors"
              >
                Book Us for Your Event
              </a>
            </div>
          </div>
        </section>

        {/* Sponsor Strip - Dynamic */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 border-t border-neutral-200 bg-white">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider text-center mb-6">
              Our Sponsors
            </h3>
            <SponsorStrip />
            <div className="text-center mt-8">
              <a
                href="/support/sponsorship"
                className="text-sm text-[#3980b7] hover:text-[#3980b7]/80 font-medium"
              >
                Become a Sponsor →
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer
        sections={footerSections}
        newsletterTitle="Stay Updated"
        newsletterPlaceholder="Enter your email"
        newsletterButtonLabel="Subscribe"
        newsletterAction="/api/newsletter/subscribe"
      />
    </div>
  )
}


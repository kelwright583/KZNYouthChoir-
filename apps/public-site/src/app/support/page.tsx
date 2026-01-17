import { Header, Footer, Card, CardContent, Button } from '@kzn-youth-choir/ui'

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

export default function SupportPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header navItems={navItems} />
      
      <main className="flex-1">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section - Matching Home Page */}
          <div className="relative h-[80vh] min-h-[600px] overflow-hidden px-4 sm:px-6 lg:px-8 py-8 lg:py-12 mb-16">
            <div className="max-w-7xl mx-auto h-full">
              <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/HeroImage.jpg"
                  alt="Support the choir"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#051434]/60" />
                <div className="absolute inset-0 flex items-center justify-center text-white px-4 z-10">
                  <div className="text-center max-w-4xl">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Support Us</h1>
                    <p className="text-xl md:text-2xl">
                      Help us continue our mission of excellence and cultural enrichment through your generous support
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <div className="max-w-7xl mx-auto">
              {/* Introduction */}
              <div className="text-center mb-12">
                <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                  The KZN Youth Choir relies on the generous support of individuals, businesses, and organizations 
                  to continue our mission of excellence, cultural enrichment, and youth development. Your support 
                  makes it possible for us to provide world-class training, participate in international competitions, 
                  and create life-changing experiences for young singers across KwaZulu-Natal.
                </p>
              </div>

              {/* Ways to Support */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-center mb-8">Ways to Support</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
                    <div className="relative h-64 w-full">
                      <img
                        src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80"
                        alt="Donate"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="pt-6">
                      <div className="w-12 h-12 flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-primary-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h2 className="text-2xl font-semibold mb-4">Donate</h2>
                      <p className="text-neutral-600 mb-6 leading-relaxed">
                        Support the choir through one-time or recurring donations. Every contribution helps us 
                        continue our mission of excellence, cultural enrichment, and youth development. Your 
                        donations help cover rehearsal costs, performance expenses, competition fees, and 
                        international tour opportunities.
                      </p>
                      <a href="/contact">
                        <Button className="bg-[#3980b7] text-white hover:bg-[#3980b7]/90">Contact Us to Donate</Button>
                      </a>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
                    <div className="relative h-64 w-full">
                      <img
                        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80"
                        alt="Sponsorship"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="pt-6">
                      <div className="w-12 h-12 flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-primary-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <h2 className="text-2xl font-semibold mb-4">Sponsorship</h2>
                      <p className="text-neutral-600 mb-6 leading-relaxed">
                        Become a sponsor and align your brand with excellence, cultural diversity, and youth 
                        empowerment. We offer various sponsorship tiers with recognition opportunities including 
                        logo placement, event naming rights, and exclusive access to performances. Partner with 
                        us to make a meaningful impact while gaining valuable brand exposure.
                      </p>
                      <a href="/contact">
                        <Button className="bg-[#f97f1d] text-white hover:bg-[#f97f1d]/90">Learn About Sponsorship</Button>
                      </a>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Why Support Section */}
              <Card className="mb-12">
                <CardContent className="pt-6">
                  <h2 className="text-3xl font-bold text-center mb-8">Why Support the KZN Youth Choir?</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-primary-900">A Legacy of Excellence</h3>
                      <p className="text-neutral-700 leading-relaxed mb-4">
                        Since 1967, the KZN Youth Choir has been South Africa's oldest youth choir, consistently 
                        achieving excellence on national and international stages. Our recent 1st place victory at 
                        the World Choir Games in Vienna demonstrates our commitment to world-class performance.
                      </p>
                      <p className="text-neutral-700 leading-relaxed">
                        Your support helps us maintain this legacy and continue representing South Africa with pride 
                        on the global stage.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-primary-900">Transforming Young Lives</h3>
                      <p className="text-neutral-700 leading-relaxed mb-4">
                        The choir provides more than just musical training—it's a transformative experience that 
                        develops confidence, discipline, teamwork, and cultural awareness. Many of our choristers 
                        go on to pursue careers in music, while others carry the values and skills learned in the 
                        choir throughout their lives.
                      </p>
                      <p className="text-neutral-700 leading-relaxed">
                        Your contribution directly impacts the personal and musical growth of talented young people 
                        from across KwaZulu-Natal.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Impact Section */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-center mb-8">Your Impact</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4">
                          <svg className="w-6 h-6 text-primary-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Support Excellence</h3>
                        <p className="text-neutral-600">Help us maintain the highest standards in choral performance and compete internationally</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4">
                          <svg className="w-6 h-6 text-primary-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 002 2h2.945M3.055 11A9.004 9.004 0 0112 2c5.194 0 9.445 4.194 8.945 9A9.004 9.004 0 0112 20a9.004 9.004 0 01-8.945-9zM15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Cultural Enrichment</h3>
                        <p className="text-neutral-600">Promote South African heritage and cultural diversity through music</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4">
                          <svg className="w-6 h-6 text-primary-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Youth Development</h3>
                        <p className="text-neutral-600">Empower young voices to reach their full potential and develop life skills</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Contact Section */}
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                    <p className="text-lg text-neutral-700 mb-8 max-w-2xl mx-auto">
                      Interested in supporting the choir? We'd love to discuss how you can make a difference. 
                      Contact us to learn more about donation options, sponsorship opportunities, or other ways to get involved.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a href="/contact">
                        <Button size="lg" className="bg-[#3980b7] text-white hover:bg-[#3980b7]/90">Contact Us</Button>
                      </a>
                      <a href="/about">
                        <Button variant="outline" size="lg" className="!border-[#3980b7] !text-[#3980b7] bg-white hover:bg-[#3980b7]/5">Learn More About Us</Button>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}


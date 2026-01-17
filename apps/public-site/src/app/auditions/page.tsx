'use client'

import { useState } from 'react'
import { Header, Footer, Button, Card, CardContent } from '@kzn-youth-choir/ui'
import { WhatToExpectModal } from '@/components/WhatToExpectModal'
import { AuditionSignupModal } from '@/components/AuditionSignupModal'

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

export default function AuditionsPage() {
  const [selectedCard, setSelectedCard] = useState<'coaching' | 'performance' | 'competitions' | 'tours' | 'community' | null>(null)
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false)
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
                  alt="Join the choir"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#051434]/60" />
                <div className="absolute inset-0 flex items-center justify-center text-white px-4 z-10">
                  <div className="text-center max-w-4xl">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                      Join the KZN Youth Choir
                    </h1>
                    <p className="text-xl md:text-2xl">
                      Become part of South Africa's oldest youth choir
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <div className="max-w-7xl mx-auto">
              <p className="text-xl text-neutral-600 mb-12 text-center">
                Experience the life-changing opportunity of choral excellence
              </p>

              <div className="space-y-8">
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-full min-h-[300px]">
                  <img
                    src="/images/KZNYouthResilience.jpg"
                    alt="Who Can Join"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <CardContent className="pt-6 flex flex-col justify-center">
                  <h2 className="text-2xl font-semibold mb-4">Who Can Join?</h2>
                  <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                    The KZN Youth Choir is open to talented young singers from across the KwaZulu-Natal 
                    province. We welcome choristers from diverse backgrounds who share a passion for 
                    choral music and a commitment to excellence.
                  </p>
                  <div className="mb-4">
                    <h3 className="font-semibold text-lg text-[#3980b7] mb-2">Age Groups</h3>
                    <p className="text-lg text-neutral-700 leading-relaxed">
                      The choir welcomes singers typically between the ages of 13 and 25 years old. 
                      We value talent, dedication, and musical potential regardless of age within this range, 
                      and encourage all passionate young singers to audition.
                    </p>
                  </div>
                  <p className="text-lg text-neutral-700 leading-relaxed">
                    Our choristers come from the greater Durban area and surrounding regions, as well as 
                    from along the KZN North and South Coast. If you're passionate about singing and 
                    ready to be part of something extraordinary, we'd love to hear from you.
                  </p>
                </CardContent>
              </div>
            </Card>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-6 text-center">What to Expect</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                <Card 
                  className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-[#3980b7]"
                  onClick={() => setSelectedCard('coaching')}
                >
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-[#3980b7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-lg mb-2">Expert Coaching</h3>
                      <p className="text-neutral-600 text-sm">Regular rehearsals with expert vocal coaching</p>
                      <p className="text-[#3980b7] text-xs mt-3 font-medium">Click to learn more →</p>
                    </div>
                  </CardContent>
                </Card>

                <Card 
                  className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-[#3980b7]"
                  onClick={() => setSelectedCard('performance')}
                >
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-[#3980b7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-lg mb-2">Performance Opportunities</h3>
                      <p className="text-neutral-600 text-sm">Perform at local and international venues</p>
                      <p className="text-[#3980b7] text-xs mt-3 font-medium">Click to learn more →</p>
                    </div>
                  </CardContent>
                </Card>

                <Card 
                  className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-[#3980b7]"
                  onClick={() => setSelectedCard('competitions')}
                >
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-[#3980b7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-lg mb-2">Competitions</h3>
                      <p className="text-neutral-600 text-sm">Participate in competitions and festivals</p>
                      <p className="text-[#3980b7] text-xs mt-3 font-medium">Click to learn more →</p>
                    </div>
                  </CardContent>
                </Card>

                <Card 
                  className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-[#3980b7]"
                  onClick={() => setSelectedCard('tours')}
                >
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-[#3980b7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 002 2h2.945M3.055 11A9.004 9.004 0 0112 2c5.194 0 9.445 4.194 8.945 9A9.004 9.004 0 0112 20a9.004 9.004 0 01-8.945-9zM15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-lg mb-2">International Tours</h3>
                      <p className="text-neutral-600 text-sm">Cultural exchange and touring opportunities</p>
                      <p className="text-[#3980b7] text-xs mt-3 font-medium">Click to learn more →</p>
                    </div>
                  </CardContent>
                </Card>

                <Card 
                  className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-[#3980b7]"
                  onClick={() => setSelectedCard('community')}
                >
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-[#3980b7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-lg mb-2">Supportive Community</h3>
                      <p className="text-neutral-600 text-sm">A community based on Christian ethos and encouragement</p>
                      <p className="text-[#3980b7] text-xs mt-3 font-medium">Click to learn more →</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Card className="bg-gradient-to-br from-primary-50 to-accent-orange/5">
              <CardContent className="pt-6">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-primary-900 mb-4">Auditions Are Currently Closed</h2>
                  <p className="text-lg text-neutral-700 leading-relaxed max-w-2xl mx-auto mb-6">
                    We're not currently accepting new auditions, but you can sign up to receive feedback on when auditions will be held. 
                    For more information, please contact us or call us between 20h30 – 21h30.
                  </p>
                  <Button 
                    id="open-signup-modal"
                    onClick={() => setIsSignupModalOpen(true)}
                    size="lg"
                    className="bg-[#3980b7] text-white hover:bg-[#3980b7]/90"
                  >
                    Sign Up for Audition Updates
                  </Button>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/contact">
                    <Button variant="outline">Contact Us</Button>
                  </a>
                  <a href="/events">
                    <Button variant="outline">View Upcoming Events</Button>
                  </a>
                </div>
              </CardContent>
            </Card>
            </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <WhatToExpectModal 
        isOpen={selectedCard !== null}
        onClose={() => setSelectedCard(null)}
        cardType={selectedCard}
      />

      <AuditionSignupModal
        isOpen={isSignupModalOpen}
        onClose={() => setIsSignupModalOpen(false)}
      />
    </div>
  )
}

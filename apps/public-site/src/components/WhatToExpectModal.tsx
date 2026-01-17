'use client'

import { useEffect } from 'react'
import { Card, CardContent, Button } from '@kzn-youth-choir/ui'

interface WhatToExpectModalProps {
  isOpen: boolean
  onClose: () => void
  cardType: 'coaching' | 'performance' | 'competitions' | 'tours' | 'community' | null
}

const cardContent = {
  coaching: {
    title: 'Expert Coaching',
    icon: (
      <svg className="w-8 h-8 text-primary-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
    content: (
      <div className="space-y-6">
        <p className="text-lg text-neutral-700 leading-relaxed">
          Our expert vocal coaches provide comprehensive training that goes far beyond simply learning songs. 
          You'll develop proper vocal technique, learning to use your voice as a powerful instrument while protecting 
          your vocal health for years to come.
        </p>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-lg mb-2 text-primary-900">Vocal Technique & Body Awareness</h4>
            <p className="text-neutral-700">
              Learn proper breathing techniques, posture, and how to use your entire body as an instrument. 
              Our coaches teach you to understand the connection between breath support, resonance, and vocal 
              production, helping you produce a rich, full sound while maintaining vocal health.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2 text-primary-900">Music Literacy</h4>
            <p className="text-neutral-700">
              Develop essential skills in reading sheet music, understanding musical notation, rhythm, and harmony. 
              Whether you're a beginner or have some experience, our structured approach helps you become a 
              confident and independent musician who can read and interpret choral music with ease.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2 text-primary-900">Artistic Expression</h4>
            <p className="text-neutral-700">
              Beyond technical skills, you'll learn to express emotion through music, understand different 
              musical styles, and develop your own artistic voice. Our coaches help you connect with the music 
              on a deeper level, bringing authenticity and passion to every performance.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  performance: {
    title: 'Performance Opportunities',
    icon: (
      <svg className="w-8 h-8 text-primary-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    content: (
      <div className="space-y-6">
        <p className="text-lg text-neutral-700 leading-relaxed">
          Performance is at the heart of what we do. Through regular concerts and special events, you'll have 
          the opportunity to share your music with diverse audiences, from intimate community gatherings to 
          grand concert halls.
        </p>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-lg mb-2 text-primary-900">Diverse Musical Repertoire</h4>
            <p className="text-neutral-700">
              Experience the thrill of performing across multiple genres—from classical masterpieces and sacred 
              music to contemporary pop arrangements and traditional African songs. This diversity not only 
              challenges you as a musician but also reflects the rich cultural tapestry of South Africa, 
              allowing you to explore and celebrate different musical traditions.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2 text-primary-900">Why Performances Matter</h4>
            <p className="text-neutral-700">
              Live performances are transformative experiences. They teach you to manage performance anxiety, 
              build confidence, and connect with audiences in meaningful ways. Each performance is an opportunity 
              to share joy, tell stories, and create moments of beauty that resonate with listeners long after 
              the final note.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2 text-primary-900">Collaboration & Teamwork</h4>
            <p className="text-neutral-700">
              Choral singing is the ultimate team sport. You'll learn to listen intently, blend your voice 
              with others, and work together to create something greater than the sum of its parts. This 
              collaboration extends beyond the music—you'll build lasting friendships and learn valuable 
              life skills in communication, empathy, and mutual support.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  competitions: {
    title: 'Competitions',
    icon: (
      <svg className="w-8 h-8 text-primary-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    content: (
      <div className="space-y-6">
        <p className="text-lg text-neutral-700 leading-relaxed">
          Competing on national and international stages pushes you to achieve excellence and showcases your 
          hard work on a global platform. Our choir regularly participates in prestigious competitions, 
          bringing home awards and recognition while building unforgettable memories.
        </p>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-lg mb-2 text-primary-900">World Choir Games</h4>
            <p className="text-neutral-700">
              The World Choir Games, often called the "Olympics of Choral Music," bring together choirs from 
              around the globe in a celebration of choral excellence. Competing at this level requires 
              dedication, precision, and artistry—qualities you'll develop through our rigorous training and 
              preparation. It's an opportunity to represent South Africa and experience the highest standards 
              of choral performance.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2 text-primary-900">Annual Touring Competitions</h4>
            <p className="text-neutral-700">
              Each year, we participate in carefully selected competitions that combine performance excellence 
              with cultural exchange. These tours take you to incredible venues, introduce you to choirs from 
              different countries, and provide opportunities to learn from world-renowned conductors and judges. 
              Past destinations have included Vienna, Austria (where we achieved 1st place), Croatia, Slovenia, 
              and other prestigious international festivals.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2 text-primary-900">Growth Through Competition</h4>
            <p className="text-neutral-700">
              Competition isn't just about winning—it's about growth. You'll learn to handle pressure, 
              receive constructive feedback from expert judges, and push yourself beyond what you thought 
              possible. The discipline and focus required for competition translate to every aspect of your 
              musical and personal development.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  tours: {
    title: 'International Tours',
    icon: (
      <svg className="w-8 h-8 text-primary-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 002 2h2.945M3.055 11A9.004 9.004 0 0112 2c5.194 0 9.445 4.194 8.945 9A9.004 9.004 0 0112 20a9.004 9.004 0 01-8.945-9zM15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    content: (
      <div className="space-y-6">
        <p className="text-lg text-neutral-700 leading-relaxed">
          International tours are transformative experiences that combine musical excellence with cultural 
          immersion. These journeys take you beyond borders, allowing you to share South African choral 
          music with the world while experiencing diverse cultures, languages, and musical traditions.
        </p>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-lg mb-2 text-primary-900">Cultural Exchange</h4>
            <p className="text-neutral-700">
              When you travel with the choir, you become an ambassador for South African music and culture. 
              You'll perform in historic venues, collaborate with local choirs, and share the unique sounds 
              of African choral music with international audiences. These exchanges create lasting connections 
              and broaden your understanding of the global choral community.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2 text-primary-900">Unforgettable Destinations</h4>
            <p className="text-neutral-700">
              Past tours have taken our choristers to stunning locations across Europe, Asia, and beyond. 
              From performing in Vienna's historic concert halls to singing in ancient cathedrals, you'll 
              experience music in some of the world's most beautiful and acoustically perfect spaces. These 
              are once-in-a-lifetime opportunities that create memories you'll treasure forever.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2 text-primary-900">Personal Growth</h4>
            <p className="text-neutral-700">
              Traveling with the choir teaches independence, adaptability, and global citizenship. You'll 
              navigate new cities, try new foods, learn about different cultures, and form deep bonds with 
              your fellow choristers. These experiences shape you into a more confident, culturally aware, 
              and well-rounded individual.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  community: {
    title: 'Supportive Community',
    icon: (
      <svg className="w-8 h-8 text-primary-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    content: (
      <div className="space-y-6">
        <p className="text-lg text-neutral-700 leading-relaxed">
          The KZN Youth Choir is far more than just a singing group—it's a vibrant community of like-minded 
          individuals who share a passion for music, excellence, and personal growth. Built on Christian 
          values of encouragement, respect, and mutual support, this community becomes a second family for 
          many choristers.
        </p>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-lg mb-2 text-primary-900">A Community of Belonging</h4>
            <p className="text-neutral-700">
              When you join the choir, you're joining a family. You'll find friends who understand your 
              passion for music, mentors who guide your development, and peers who challenge you to be your 
              best. This sense of belonging creates a safe space where you can take risks, grow, and discover 
              who you are as both a musician and a person.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2 text-primary-900">Structure & Discipline</h4>
            <p className="text-neutral-700">
              Regular rehearsals, performance schedules, and high standards teach valuable life skills: 
              time management, commitment, responsibility, and the importance of showing up consistently. 
              This structure provides stability and helps you develop habits that serve you well beyond 
              your choir years, in academics, career, and personal relationships.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2 text-primary-900">Team Spirit & Collaboration</h4>
            <p className="text-neutral-700">
              Choral singing requires everyone to work together toward a common goal. You'll learn to 
              listen actively, support your section, and contribute your best while trusting others to 
              do the same. This team spirit extends to helping each other through challenges, celebrating 
              successes together, and building a culture where everyone lifts each other up.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2 text-primary-900">Continuous Development</h4>
            <p className="text-neutral-700">
              The choir environment pushes you to continuously improve—not just musically, but personally. 
              You'll develop confidence, resilience, and the ability to receive and act on feedback. Whether 
              you're working on a difficult passage, preparing for a competition, or navigating the challenges 
              of youth, you'll have a supportive community encouraging your growth every step of the way.
            </p>
          </div>
        </div>
      </div>
    ),
  },
}

export function WhatToExpectModal({ isOpen, onClose, cardType }: WhatToExpectModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen || !cardType) return null

  const content = cardContent[cardType]

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        style={{ opacity: isOpen ? 1 : 0 }}
      />

      {/* Modal Card */}
      <Card
        className={`relative z-10 w-full max-w-4xl max-h-[90vh] transform transition-all duration-500 flex flex-col ${
          isOpen ? 'animate-flipZoomIn' : ''
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <CardContent className="p-6 flex flex-col flex-1 min-h-0">
          {/* Fixed Header */}
          <div className="flex items-start justify-between mb-4 flex-shrink-0">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 flex items-center justify-center bg-primary-50 rounded-lg">
                {content.icon}
              </div>
              <h2 className="text-3xl font-bold text-primary-900">{content.title}</h2>
            </div>
            <button
              onClick={onClose}
              className="text-neutral-400 hover:text-neutral-600 transition-colors p-2"
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="prose prose-lg max-w-none overflow-y-auto flex-1 min-h-0 pr-2 custom-scrollbar">
            {content.content}
          </div>

          {/* Fixed Footer */}
          <div className="mt-4 pt-4 border-t border-neutral-200 flex-shrink-0">
            <div className="flex flex-col gap-3 items-center text-center">
              <p className="text-neutral-600 text-sm">
                Ready to experience this for yourself?
              </p>
              <Button 
                onClick={() => {
                  onClose()
                  setTimeout(() => {
                    const signupButton = document.getElementById('open-signup-modal')
                    if (signupButton) {
                      signupButton.click()
                    }
                  }, 300)
                }}
                className="bg-[#3980b7] text-white hover:bg-[#3980b7]/90"
              >
                Sign Up for Audition Updates
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  )
}


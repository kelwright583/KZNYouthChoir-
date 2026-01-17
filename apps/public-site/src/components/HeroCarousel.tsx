'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@kzn-youth-choir/ui'
import Image from 'next/image'

interface CarouselSlide {
  id: string
  title: string | null
  subtitle: string | null
  imageUrl: string
  ctaText: string | null
  ctaLink: string | null
}

export function HeroCarousel() {
  const [slides, setSlides] = useState<CarouselSlide[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('/api/carousel')
      .then((res) => res.json())
      .then((data) => {
        // Ensure data is always an array
        if (Array.isArray(data)) {
          setSlides(data)
          // Reset to first slide when slides change
          setCurrentIndex(0)
        } else {
          console.error('Invalid carousel data format:', data)
          setSlides([])
          setCurrentIndex(0)
        }
        setIsLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching carousel:', error)
        setSlides([])
        setCurrentIndex(0)
        setIsLoading(false)
      })
  }, [])

  // Calculate display slides
  const defaultSlides: CarouselSlide[] = [
    {
      id: 'default-1',
      title: 'KZN Youth Choir',
      subtitle: 'Where Diverse Voices Unite, Excellence Soars',
      imageUrl: '/images/HeroImage.jpg',
      ctaText: 'Join Us',
      ctaLink: '/auditions'
    },
    {
      id: 'default-2',
      title: 'Celebrating Excellence Since 1967',
      subtitle: 'Bringing together talented choristers from across KwaZulu-Natal',
      imageUrl: '/images/KZNYouthChoirExcellence.jpg',
      ctaText: 'Learn More',
      ctaLink: '/about'
    },
    {
      id: 'default-3',
      title: 'Experience the Magic',
      subtitle: 'Join us for our upcoming performances and events',
      imageUrl: '/images/KZNYouthChoirMagic.jpg',
      ctaText: 'View Events',
      ctaLink: '/events'
    },
    {
      id: 'default-4',
      title: 'Book Us for Your Event',
      subtitle: 'From weddings to festivals, bring world-class choral excellence to your special occasion',
      imageUrl: '/images/KZNYouthChoirLivePerformances.jpg',
      ctaText: 'Book Us',
      ctaLink: '/contact?reason=booking'
    }
  ]

  const displaySlides = slides.length === 0 ? defaultSlides : slides

  useEffect(() => {
    const slideCount = slides.length === 0 ? 4 : slides.length
    if (slideCount <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slideCount)
    }, 5000)

    return () => clearInterval(interval)
  }, [slides.length])

  if (isLoading) {
    return (
      <section className="relative h-[80vh] min-h-[600px] overflow-hidden px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="max-w-7xl mx-auto h-full">
          <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/images/HeroImage.jpg"
              alt="KZN Youth Choir Performance"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#051434]/60" />
            <div className="absolute inset-0 flex items-center justify-center text-white px-4">
              <div className="text-center">
                <div className="animate-pulse">
                  <div className="h-12 bg-white/20 rounded w-64 mb-4 mx-auto" />
                  <div className="h-6 bg-white/20 rounded w-48 mx-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }


  const currentSlide = displaySlides[currentIndex]

  // Safety check: if currentSlide is undefined, fall back to default
  if (!currentSlide) {
    return null
  }

  // Use fallback choir image if imageUrl is empty
  const imageUrl = currentSlide.imageUrl || '/images/HeroImage.jpg'

  return (
    <section className="relative h-[80vh] min-h-[600px] overflow-hidden px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <div className="max-w-7xl mx-auto h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-full rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src={imageUrl}
              alt={currentSlide.title || 'KZN Youth Choir'}
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => {
                // Fallback to a different choir image if this one fails
                const target = e.target as HTMLImageElement
                if (!target.src.includes('unsplash')) {
                  target.src = '/images/HeroImage.jpg'
                } else if (!target.src.includes('HeroImage')) {
                  target.src = 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&q=80'
                }
              }}
            />
            <div className="absolute inset-0 bg-[#051434]/60" />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 flex items-center justify-center text-white px-4 z-10">
          <div className="text-center max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {currentSlide.title && (
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  {currentSlide.title}
                </h1>
              )}
              {currentSlide.subtitle && (
                <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
                  {currentSlide.subtitle}
                </p>
              )}
              {currentSlide.ctaText && currentSlide.ctaLink && (
                <a
                  href={currentSlide.ctaLink}
                  className="inline-block px-8 py-3 bg-[#f97f1d] text-white rounded-lg font-medium hover:bg-[#f97f1d]/90 transition-colors"
                >
                  {currentSlide.ctaText}
                </a>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

        {/* Navigation dots */}
        {displaySlides.length > 1 && (
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
            {displaySlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-white w-8'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}


'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

interface Sponsor {
  id: string
  name: string
  logoUrl: string
  websiteUrl: string | null
  tier: string
}

export function SponsorStrip() {
  const [sponsors, setSponsors] = useState<Sponsor[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('/api/sponsors?featured=true')
      .then((res) => res.json())
      .then((data) => {
        // Ensure data is always an array
        if (Array.isArray(data)) {
          setSponsors(data)
        } else {
          console.error('Invalid sponsors data format:', data)
          setSponsors([])
        }
        setIsLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching sponsors:', error)
        setSponsors([])
        setIsLoading(false)
      })
  }, [])

  if (isLoading) {
    return (
      <div className="flex flex-wrap items-center justify-center gap-8">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="h-12 w-32 bg-neutral-200 rounded animate-pulse"
          />
        ))}
      </div>
    )
  }

  if (sponsors.length === 0) {
    return null
  }

  return (
    <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
      {sponsors.map((sponsor) => (
        <a
          key={sponsor.id}
          href={sponsor.websiteUrl || '#'}
          target={sponsor.websiteUrl ? '_blank' : undefined}
          rel={sponsor.websiteUrl ? 'noopener noreferrer' : undefined}
          className="opacity-60 hover:opacity-100 transition-opacity"
        >
          <div className="relative h-12 lg:h-16 w-auto">
            <Image
              src={sponsor.logoUrl}
              alt={sponsor.name}
              width={120}
              height={64}
              className="h-full w-auto object-contain"
            />
          </div>
        </a>
      ))}
    </div>
  )
}



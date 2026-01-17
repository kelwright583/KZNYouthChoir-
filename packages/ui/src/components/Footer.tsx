'use client'

import React from 'react'
import { cn } from '../utils/cn'

export interface FooterLink {
  label: string
  href: string
}

export interface FooterSection {
  title: string
  links: FooterLink[]
}

export interface FooterProps {
  logo?: React.ReactNode
  sections?: FooterSection[]
  newsletterTitle?: string
  newsletterPlaceholder?: string
  newsletterButtonLabel?: string
  newsletterAction?: string // API endpoint for newsletter submission
  sponsorLogos?: Array<{ name: string; logo: string; href?: string }>
  copyrightText?: string
  className?: string
}

export const Footer: React.FC<FooterProps> = ({
  logo,
  sections = [],
  newsletterTitle = 'Stay Updated',
  newsletterPlaceholder = 'Enter your email',
  newsletterButtonLabel = 'Subscribe',
  newsletterAction = '/api/newsletter/subscribe',
  sponsorLogos = [],
  copyrightText,
  className,
}) => {
  const [email, setEmail] = React.useState('')
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [message, setMessage] = React.useState<{ type: 'success' | 'error'; text: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)
    setMessage(null)

    try {
      const response = await fetch(newsletterAction, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setMessage({ type: 'success', text: 'Thank you for subscribing!' })
        setEmail('')
      } else {
        setMessage({ type: 'error', text: 'Something went wrong. Please try again.' })
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Something went wrong. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className={cn('bg-[#051434] border-t border-neutral-200', className)}>
      {/* Newsletter & Sponsor Strip */}
      {(newsletterAction || sponsorLogos.length > 0) && (
        <div className="border-b border-white/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
            {/* Newsletter */}
            {newsletterAction && (
              <div className="mb-8 lg:mb-0 lg:max-w-md">
                <h3 className="text-lg font-semibold text-white mb-4">
                  {newsletterTitle}
                </h3>
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={newsletterPlaceholder}
                    className="flex-1 px-4 py-2 border border-white/30 bg-white/10 text-white placeholder:text-white/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50"
                    required
                    disabled={isSubmitting}
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-2 text-sm font-medium text-[#051434] bg-white rounded-lg hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Subscribing...' : newsletterButtonLabel}
                  </button>
                </form>
                {message && (
                  <p className={`mt-2 text-sm ${message.type === 'success' ? 'text-green-300' : 'text-red-300'}`}>
                    {message.text}
                  </p>
                )}
              </div>
            )}

            {/* Sponsor Strip */}
            {sponsorLogos.length > 0 && (
              <div className="lg:mt-8">
                <h3 className="text-sm font-semibold text-white/70 uppercase tracking-wider mb-4">
                  Our Sponsors
                </h3>
                <div className="flex flex-wrap items-center gap-6 lg:gap-8">
                  {sponsorLogos.map((sponsor, index) => (
                    <a
                      key={index}
                      href={sponsor.href || '#'}
                      className="opacity-60 hover:opacity-100 transition-opacity"
                      target={sponsor.href ? '_blank' : undefined}
                      rel={sponsor.href ? 'noopener noreferrer' : undefined}
                    >
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className="h-8 lg:h-12 object-contain"
                      />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer Links */}
      {sections.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {sections.map((section, index) => (
              <div key={index}>
                <h4 className="text-sm font-semibold text-white mb-4">
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-sm text-white/70 hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Copyright */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {logo && <div className="flex-shrink-0">{logo}</div>}
            <p className="text-sm text-white/70">
              {copyrightText ||
                `© ${new Date().getFullYear()} KZN Youth Choir. All rights reserved.`}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}


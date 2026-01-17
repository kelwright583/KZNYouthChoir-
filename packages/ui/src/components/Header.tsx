'use client'

import React, { useState } from 'react'
import { cn } from '../utils/cn'

export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

export interface HeaderProps {
  logo?: React.ReactNode
  navItems?: NavItem[]
  ctaLabel?: string
  ctaHref?: string
  className?: string
}

export const Header: React.FC<HeaderProps> = ({
  logo,
  navItems = [],
  ctaLabel,
  ctaHref,
  className,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header
      className={cn(
        'sticky top-0 z-40 bg-white border-b border-neutral-200 backdrop-blur-sm bg-white/95',
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            {logo || (
              <a href="/" className="flex items-center">
                <img 
                  src="/images/KwayaLogo.png" 
                  alt="Kwaya KZN Youth Choir" 
                  className="h-12 lg:h-16 w-auto object-contain"
                />
              </a>
            )}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 flex-1 justify-center">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-neutral-700 hover:text-primary-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Side: CTA and Official Logo */}
          <div className="flex items-center gap-4 lg:gap-6">
            {ctaLabel && ctaHref && (
              <a
                href={ctaHref}
                className="hidden md:inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-[#3980b7] rounded-lg hover:bg-[#3980b7]/90 transition-colors"
              >
                {ctaLabel}
              </a>
            )}

            {/* Official Logo */}
            <div className="hidden lg:flex items-center">
              <img 
                src="/images/OfficialLogo.png" 
                alt="KZN Youth Choir Official Logo" 
                className="h-12 lg:h-14 w-auto object-contain"
              />
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-neutral-700 hover:text-primary-900 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-neutral-200 animate-slide-down">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-base font-medium text-neutral-700 hover:text-primary-900 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              {ctaLabel && ctaHref && (
                <a
                  href={ctaHref}
                  className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-[#3980b7] rounded-lg hover:bg-[#3980b7]/90 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {ctaLabel}
                </a>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}


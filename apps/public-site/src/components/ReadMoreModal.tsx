'use client'

import { useEffect } from 'react'
import { Card, CardContent, Button } from '@kzn-youth-choir/ui'

interface ReadMoreModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  content: React.ReactNode
}

export function ReadMoreModal({ isOpen, onClose, title, content }: ReadMoreModalProps) {
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

  if (!isOpen) return null

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
            <h2 className="text-3xl font-bold text-primary-900">{title}</h2>
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
          <div className="overflow-y-auto flex-1 min-h-0 pr-2 custom-scrollbar prose prose-lg max-w-none">
            {content}
          </div>

          {/* Fixed Footer */}
          <div className="mt-4 pt-4 border-t border-neutral-200 flex-shrink-0">
            <div className="flex justify-end">
              <Button onClick={onClose} className="bg-[#3980b7] text-white hover:bg-[#3980b7]/90">Close</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}


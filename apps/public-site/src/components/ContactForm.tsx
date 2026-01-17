'use client'

import { useState, useEffect } from 'react'
import { Input, Textarea, Button, Card, CardContent } from '@kzn-youth-choir/ui'
import { cn } from '@kzn-youth-choir/ui'

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [reason, setReason] = useState<string>('')

  // Check URL parameters for pre-selected reason
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)
      const reasonParam = params.get('reason')
      if (reasonParam === 'booking') {
        setReason('booking')
      }
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      reason: formData.get('reason') || reason,
      subject: formData.get('subject'),
      message: formData.get('message'),
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setSubmitted(true)
      e.currentTarget.reset()
      setReason('')
    } catch (err) {
      setError('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="text-center py-8">
            <div className="text-4xl mb-4">✓</div>
            <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
            <p className="text-neutral-600 mb-6">
              Thank you for contacting us. We'll get back to you soon.
            </p>
            <Button
              onClick={() => setSubmitted(false)}
              variant="outline"
            >
              Send Another Message
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  const reasonOptions = [
    { value: '', label: 'Select a reason...' },
    { value: 'general', label: 'General Enquiries' },
    { value: 'auditions', label: 'Enquiries about Auditions' },
    { value: 'booking', label: 'Book Us for an Event/Performance' },
    { value: 'events', label: 'Event Information' },
    { value: 'sponsorship', label: 'Sponsorship Opportunities' },
    { value: 'media', label: 'Media/Press Inquiries' },
    { value: 'support', label: 'Support/Donations' },
    { value: 'other', label: 'Other' },
  ]

  return (
    <Card>
      <CardContent className="pt-6">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <Input label="Name" name="name" required />
          <Input label="Email" type="email" name="email" required />
          <Input label="Phone" type="tel" name="phone" />
          <div className="w-full">
            <label
              htmlFor="reason"
              className="block text-sm font-medium text-neutral-700 mb-2"
            >
              Reason for Contact <span className="text-accent-red">*</span>
            </label>
            <select
              id="reason"
              name="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              required
              className={cn(
                'w-full px-4 py-3 text-base text-neutral-900 bg-white border border-neutral-300 rounded-lg',
                'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
                'disabled:bg-neutral-100 disabled:cursor-not-allowed'
              )}
            >
              {reasonOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <Input label="Subject" name="subject" required />
          <Textarea label="Message" name="message" required rows={6} />
          {error && (
            <div className="text-sm text-accent-red">{error}</div>
          )}
          <Button type="submit" className="w-full bg-[#3980b7] text-white hover:bg-[#3980b7]/90" isLoading={isSubmitting}>
            Send Message
          </Button>
        </form>
        <div className="mt-6 pt-6 border-t border-neutral-200">
          <p className="text-sm text-neutral-600 mb-2">
            <strong>Phone:</strong> <a href="tel:0836299562" className="text-[#3980b7] hover:underline">083 629 9562</a>
          </p>
          <p className="text-sm text-neutral-600 mb-2">
            <strong>WhatsApp:</strong> <a href="https://wa.me/27836299562" target="_blank" rel="noopener noreferrer" className="text-[#3980b7] hover:underline">083 629 9562</a>
          </p>
          <p className="text-sm text-neutral-500 italic mt-3">
            If we don't return your call, please use the form above and we'll get back to you.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}


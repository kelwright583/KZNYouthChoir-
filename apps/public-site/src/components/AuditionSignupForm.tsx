'use client'

import { useState } from 'react'
import { Button, Card, CardContent, Input, Textarea, Toast } from '@kzn-youth-choir/ui'

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  dateOfBirth: string
  voicePart: string
  previousExperience: string
  notes: string
  agreedToTerms: boolean
  agreedToPromotional: boolean
}

interface FormErrors {
  firstName?: string
  lastName?: string
  email?: string
  agreedToTerms?: string
}

export function AuditionSignupForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    voicePart: '',
    previousExperience: '',
    notes: '',
    agreedToTerms: false,
    agreedToPromotional: false,
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [toastType, setToastType] = useState<'success' | 'error'>('success')

  const validate = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required'
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.agreedToTerms) {
      newErrors.agreedToTerms = 'You must agree to the terms and conditions'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validate()) {
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/auditions/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit signup')
      }

      // Success
      setToastMessage(data.message || 'Thank you! We will notify you when auditions open.')
      setToastType('success')
      setShowToast(true)

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        dateOfBirth: '',
        voicePart: '',
        previousExperience: '',
        notes: '',
        agreedToTerms: false,
        agreedToPromotional: false,
      })
    } catch (error) {
      setToastMessage(
        error instanceof Error ? error.message : 'Failed to submit signup. Please try again.'
      )
      setToastType('error')
      setShowToast(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Get Notified When Auditions Open</h2>
        <p className="text-neutral-600 mb-6">
          Auditions are currently closed, but you can sign up below to receive feedback on when auditions will be held.
        </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Input
                  label="First Name"
                  required
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  error={errors.firstName}
                />
              </div>

              <div>
                <Input
                  label="Last Name"
                  required
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  error={errors.lastName}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Input
                  type="email"
                  label="Email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  error={errors.email}
                />
              </div>

              <div>
                <Input
                  type="tel"
                  label="Phone (Optional)"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Input
                  type="date"
                  label="Date of Birth (Optional)"
                  value={formData.dateOfBirth}
                  onChange={(e) =>
                    setFormData({ ...formData, dateOfBirth: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Voice Part (Optional)
                </label>
                <select
                  value={formData.voicePart}
                  onChange={(e) =>
                    setFormData({ ...formData, voicePart: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-900 focus:border-transparent"
                >
                  <option value="">Select voice part</option>
                  <option value="Soprano">Soprano</option>
                  <option value="Alto">Alto</option>
                  <option value="Tenor">Tenor</option>
                  <option value="Bass">Bass</option>
                  <option value="Unknown">Unknown</option>
                </select>
              </div>
            </div>

            <div>
              <Textarea
                label="Previous Choral Experience (Optional)"
                rows={4}
                value={formData.previousExperience}
                onChange={(e) =>
                  setFormData({ ...formData, previousExperience: e.target.value })
                }
                placeholder="Tell us about your singing experience..."
              />
            </div>

            <div>
              <Textarea
                label="Additional Notes (Optional)"
                rows={3}
                value={formData.notes}
                onChange={(e) =>
                  setFormData({ ...formData, notes: e.target.value })
                }
                placeholder="Anything else you'd like us to know..."
              />
            </div>

            <div className="space-y-4 pt-4 border-t border-neutral-200">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="terms"
                  checked={formData.agreedToTerms}
                  onChange={(e) =>
                    setFormData({ ...formData, agreedToTerms: e.target.checked })
                  }
                  className="mt-1 mr-3 h-4 w-4 text-primary-900 focus:ring-primary-900 border-neutral-300 rounded"
                />
                <label htmlFor="terms" className="text-sm text-neutral-700">
                  I agree to the{' '}
                  <a href="/terms" className="text-primary-900 hover:text-primary-700 font-medium">
                    Terms and Conditions
                  </a>
                  {errors.agreedToTerms && (
                    <span className="block text-error text-sm mt-1">{errors.agreedToTerms}</span>
                  )}
                </label>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="promotional"
                  checked={formData.agreedToPromotional}
                  onChange={(e) =>
                    setFormData({ ...formData, agreedToPromotional: e.target.checked })
                  }
                  className="mt-1 mr-3 h-4 w-4 text-primary-900 focus:ring-primary-900 border-neutral-300 rounded"
                />
                <label htmlFor="promotional" className="text-sm text-neutral-700">
                  I agree to receive promotional material and updates from KZN Youth Choir
                </label>
              </div>
            </div>

            <div className="pt-4">
              <Button type="submit" disabled={isSubmitting} className="w-full bg-[#3980b7] text-white hover:bg-[#3980b7]/90">
                {isSubmitting ? 'Submitting...' : 'Sign Up for Audition Updates'}
              </Button>
            </div>
          </form>
      </div>

      {showToast && (
        <Toast
          message={toastMessage}
          type={toastType}
          onClose={() => setShowToast(false)}
        />
      )}
    </>
  )
}


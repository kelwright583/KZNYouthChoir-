'use client'

import { useEffect, useState } from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Button,
} from '@kzn-youth-choir/ui'

interface AuditionSignup {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string | null
  dateOfBirth: Date | null
  voicePart: string | null
  previousExperience: string | null
  notes: string | null
  agreedToTerms: boolean
  agreedToPromotional: boolean
  termsAgreedAt: Date | null
  promotionalAgreedAt: Date | null
  notifiedAt: Date | null
  createdAt: Date
  updatedAt: Date
}

interface Pagination {
  page: number
  limit: number
  total: number
  totalPages: number
}

export default function AuditionsPage() {
  const [signups, setSignups] = useState<AuditionSignup[]>([])
  const [pagination, setPagination] = useState<Pagination | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchSignups = async (page = 1) => {
    try {
      setLoading(true)
      const response = await fetch(`/api/auditions/signups?page=${page}&limit=50`)
      if (!response.ok) {
        throw new Error('Failed to fetch signups')
      }
      const data = await response.json()
      setSignups(data.signups)
      setPagination(data.pagination)
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load signups')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchSignups()
  }, [])

  const handleMarkNotified = async (id: string) => {
    try {
      const response = await fetch('/api/auditions/signups', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, notifiedAt: new Date().toISOString() }),
      })
      if (response.ok) {
        fetchSignups(pagination?.page || 1)
      }
    } catch (err) {
      alert('Failed to update signup')
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this signup?')) {
      return
    }
    try {
      const response = await fetch(`/api/auditions/signups?id=${id}`, {
        method: 'DELETE',
      })
      if (response.ok) {
        fetchSignups(pagination?.page || 1)
      }
    } catch (err) {
      alert('Failed to delete signup')
    }
  }

  const formatDate = (date: Date | null) => {
    if (!date) return '—'
    return new Date(date).toLocaleDateString('en-ZA', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  const formatDateTime = (date: Date | null) => {
    if (!date) return '—'
    return new Date(date).toLocaleString('en-ZA', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Audition Signups</h1>
            <p className="text-neutral-600">
              Manage signups for audition notifications
            </p>
          </div>
          {pagination && (
            <div className="text-sm text-neutral-500">
              Total: {pagination.total} signups
            </div>
          )}
        </div>

        {error && (
          <Card className="mb-6 border-accent-red">
            <CardContent className="pt-6">
              <p className="text-accent-red">{error}</p>
            </CardContent>
          </Card>
        )}

        <Card>
          <CardHeader>
            <CardTitle>All Signups</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-12 text-neutral-500">
                Loading signups...
              </div>
            ) : signups.length === 0 ? (
              <div className="text-center py-12 text-neutral-500">
                No signups yet
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Phone</TableHead>
                      <TableHead>Voice Part</TableHead>
                      <TableHead>Date of Birth</TableHead>
                      <TableHead>Promotional</TableHead>
                      <TableHead>Signed Up</TableHead>
                      <TableHead>Notified</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {signups.map((signup) => (
                      <TableRow key={signup.id}>
                        <TableCell className="font-medium">
                          {signup.firstName} {signup.lastName}
                        </TableCell>
                        <TableCell>{signup.email}</TableCell>
                        <TableCell>{signup.phone || '—'}</TableCell>
                        <TableCell>{signup.voicePart || '—'}</TableCell>
                        <TableCell>{formatDate(signup.dateOfBirth)}</TableCell>
                        <TableCell>
                          {signup.agreedToPromotional ? (
                            <span className="text-success">Yes</span>
                          ) : (
                            <span className="text-neutral-400">No</span>
                          )}
                        </TableCell>
                        <TableCell>{formatDateTime(signup.createdAt)}</TableCell>
                        <TableCell>
                          {signup.notifiedAt ? (
                            <span className="text-success">
                              {formatDateTime(signup.notifiedAt)}
                            </span>
                          ) : (
                            <span className="text-neutral-400">Not notified</span>
                          )}
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex gap-2 justify-end">
                            {!signup.notifiedAt && (
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleMarkNotified(signup.id)}
                              >
                                Mark Notified
                              </Button>
                            )}
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleDelete(signup.id)}
                              className="text-accent-red hover:text-accent-red"
                            >
                              Delete
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}

            {pagination && pagination.totalPages > 1 && (
              <div className="flex justify-between items-center mt-6 pt-6 border-t border-neutral-200">
                <div className="text-sm text-neutral-600">
                  Page {pagination.page} of {pagination.totalPages}
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    disabled={pagination.page === 1}
                    onClick={() => fetchSignups(pagination.page - 1)}
                  >
                    Previous
                  </Button>
                  <Button
                    variant="outline"
                    disabled={pagination.page === pagination.totalPages}
                    onClick={() => fetchSignups(pagination.page + 1)}
                  >
                    Next
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {signups.length > 0 && (
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Export Data</CardTitle>
            </CardHeader>
            <CardContent>
              <Button
                variant="outline"
                onClick={() => {
                  const csv = [
                    [
                      'First Name',
                      'Last Name',
                      'Email',
                      'Phone',
                      'Date of Birth',
                      'Voice Part',
                      'Previous Experience',
                      'Promotional Consent',
                      'Signed Up',
                      'Notified',
                    ].join(','),
                    ...signups.map((s) =>
                      [
                        s.firstName,
                        s.lastName,
                        s.email,
                        s.phone || '',
                        s.dateOfBirth
                          ? new Date(s.dateOfBirth).toLocaleDateString()
                          : '',
                        s.voicePart || '',
                        (s.previousExperience || '').replace(/,/g, ';'),
                        s.agreedToPromotional ? 'Yes' : 'No',
                        new Date(s.createdAt).toLocaleString(),
                        s.notifiedAt
                          ? new Date(s.notifiedAt).toLocaleString()
                          : '',
                      ].join(',')
                    ),
                  ].join('\n')

                  const blob = new Blob([csv], { type: 'text/csv' })
                  const url = URL.createObjectURL(blob)
                  const a = document.createElement('a')
                  a.href = url
                  a.download = `audition-signups-${new Date().toISOString().split('T')[0]}.csv`
                  a.click()
                  URL.revokeObjectURL(url)
                }}
              >
                Export to CSV
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}


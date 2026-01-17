'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@kzn-youth-choir/ui'
import Link from 'next/link'
import Image from 'next/image'

interface NewsPost {
  id: string
  title: string
  slug: string
  excerpt: string | null
  imageUrl: string | null
  publishAt: string | null
  category: string | null
  featured: boolean
}

interface NewsListProps {
  limit?: number
  featured?: boolean
  showViewAll?: boolean
}

export function NewsList({ limit = 6, featured = false, showViewAll = true }: NewsListProps) {
  const [posts, setPosts] = useState<NewsPost[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const url = featured
      ? `/api/news?limit=${limit}&featured=true`
      : `/api/news?limit=${limit}`
    
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // Ensure data is always an array
        if (Array.isArray(data)) {
          setPosts(data)
        } else {
          console.error('Invalid news data format:', data)
          setPosts([])
        }
        setIsLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching news:', error)
        setPosts([])
        setIsLoading(false)
      })
  }, [limit, featured])

  if (isLoading) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(3)].map((_, i) => (
          <Card key={i} className="animate-pulse">
            <CardContent className="pt-6">
              <div className="h-48 bg-neutral-200 rounded mb-4" />
              <div className="h-4 bg-neutral-200 rounded w-1/4 mb-4" />
              <div className="h-6 bg-neutral-200 rounded w-full mb-2" />
              <div className="h-4 bg-neutral-200 rounded w-3/4" />
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-neutral-500 text-lg">
          No news posts available. Check back soon!
        </p>
      </div>
    )
  }

  const formatDate = (dateString: string | null) => {
    if (!dateString) return ''
    const date = new Date(dateString)
    return date.toLocaleDateString('en-ZA', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  }

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Link href={`/news/${post.slug}`}>
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer overflow-hidden">
                {post.imageUrl && (
                  <div className="relative h-48 w-full">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <CardContent className="pt-6">
                  {post.category && (
                    <div className="text-sm text-[#3980b7] font-medium mb-2">
                      {post.category}
                    </div>
                  )}
                  <h3 className="text-xl font-semibold mb-3 text-neutral-900">
                    {post.title}
                  </h3>
                  {post.excerpt && (
                    <p className="text-sm text-neutral-600 mb-3 line-clamp-3">
                      {post.excerpt}
                    </p>
                  )}
                  {post.publishAt && (
                    <p className="text-xs text-neutral-500">
                      {formatDate(post.publishAt)}
                    </p>
                  )}
                  <div className="mt-4 text-sm text-[#3980b7] font-medium">
                    Read more →
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
      {showViewAll && posts.length >= limit && (
        <div className="text-center mt-8">
          <Link
            href="/news"
            className="inline-block px-6 py-3 bg-[#3980b7] text-white rounded-lg font-medium hover:bg-[#3980b7]/90 transition-colors"
          >
            View All News
          </Link>
        </div>
      )}
    </>
  )
}


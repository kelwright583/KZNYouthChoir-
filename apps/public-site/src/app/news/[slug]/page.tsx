import { Header, Footer, Card, CardContent } from '@kzn-youth-choir/ui'
import { notFound } from 'next/navigation'
import Image from 'next/image'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Auditions', href: '/auditions' },
  { label: 'Events', href: '/events' },
  { label: 'Media', href: '/media' },
  { label: 'Support Us', href: '/support' },
  { label: 'News', href: '/news' },
  { label: 'Contact', href: '/contact' },
]

async function getNewsPost(slug: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/api/news/${slug}`, {
      cache: 'no-store',
    })
    
    if (!res.ok) {
      return null
    }
    
    return res.json()
  } catch (error) {
    console.error('Error fetching news post:', error)
    return null
  }
}

export default async function NewsDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = await getNewsPost(params.slug)

  if (!post) {
    notFound()
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
    <div className="min-h-screen flex flex-col">
      <Header navItems={navItems} />
      
      <main className="flex-1 py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <a
              href="/news"
              className="text-[#3980b7] hover:text-[#3980b7]/80 text-sm font-medium"
            >
              ← Back to News
            </a>
          </div>

          {post.category && (
            <div className="text-sm text-[#3980b7] font-medium mb-4">
              {post.category}
            </div>
          )}

          <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>

          {post.publishAt && (
            <div className="text-sm text-neutral-500 mb-8">
              {formatDate(post.publishAt)}
            </div>
          )}

          {post.imageUrl && (
            <div className="relative h-96 w-full mb-8 rounded-xl overflow-hidden">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          <Card>
            <CardContent className="pt-6">
              <div
                className="prose prose-lg max-w-none text-neutral-700"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}


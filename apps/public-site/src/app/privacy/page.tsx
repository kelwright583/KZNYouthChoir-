import { Header, Footer } from '@kzn-youth-choir/ui'

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

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header navItems={navItems} />
      
      <main className="flex-1 py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-neutral-600">Privacy policy content will be managed through the admin CMS.</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}


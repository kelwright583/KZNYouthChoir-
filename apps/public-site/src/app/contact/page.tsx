import { Header, Footer, Card, CardContent } from '@kzn-youth-choir/ui'
import { ContactForm } from '@/components/ContactForm'

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

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header navItems={navItems} />
      
      <main className="flex-1">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section - Matching Home Page */}
          <div className="relative h-[80vh] min-h-[600px] overflow-hidden px-4 sm:px-6 lg:px-8 py-8 lg:py-12 mb-16">
            <div className="max-w-7xl mx-auto h-full">
              <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/HeroImage.jpg"
                  alt="Contact us"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#051434]/60" />
                <div className="absolute inset-0 flex items-center justify-center text-white px-4 z-10">
                  <div className="text-center max-w-4xl">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
                    <p className="text-xl md:text-2xl">
                      Have a question or want to get involved? We'd love to hear from you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="pt-6">
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-[#3980b7]/10 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[#3980b7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Phone</h3>
                  <p className="text-neutral-600 mb-2">
                    <a href="tel:0836299562" className="text-lg font-medium text-[#3980b7] hover:underline">083 629 9562</a>
                  </p>
                  <h3 className="text-xl font-semibold mb-2 mt-4">WhatsApp</h3>
                  <p className="text-neutral-600 mb-2">
                    <a href="https://wa.me/27836299562" target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-[#3980b7] hover:underline">083 629 9562</a>
                  </p>
                  <p className="text-sm text-neutral-500 italic mt-3">
                    If we don't return your call, please use the contact form and we'll get back to you.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-accent-green/10 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-accent-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Location</h3>
                  <p className="text-neutral-600">Based in Durban, KwaZulu-Natal</p>
                  <p className="text-neutral-600 mt-2">Choristers from across the province</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-[#f97f1d]/10 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[#f97f1d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Response Time</h3>
                  <p className="text-neutral-600">We typically respond within 24-48 hours</p>
                </CardContent>
              </Card>
            </div>
          </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}


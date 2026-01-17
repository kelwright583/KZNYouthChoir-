import { Header, Footer, Card, CardContent } from '@kzn-youth-choir/ui'

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

export default function MediaPage() {
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
                  alt="Choir performance"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#051434]/60" />
                <div className="absolute inset-0 flex items-center justify-center text-white px-4 z-10">
                  <div className="text-center max-w-4xl">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Media</h1>
                    <p className="text-xl md:text-2xl">
                      Explore our performances, photos, and recordings
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 sm:px-6 lg:px-8 py-16 lg:py-24">

          {/* Media Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <a href="/media/video">
              <Card className="h-full overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer">
                <div className="relative h-64 w-full">
                  <img
                    src="/images/KZNYouthChoirVideoLibrary.jpg"
                    alt="Video Library"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-semibold mb-4">Video Library</h2>
                  <p className="text-neutral-600 mb-4">
                    Watch our performances, competition entries, and behind-the-scenes content. 
                    Experience the magic of our choral music.
                  </p>
                  <span className="text-primary-900 font-medium">Watch Videos →</span>
                </CardContent>
              </Card>
            </a>

            <a href="/media/gallery">
              <Card className="h-full overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer">
                <div className="relative h-64 w-full">
                  <img
                    src="/images/KZNYouthChoirPhotoGallery.jpg"
                    alt="Photo Gallery"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-semibold mb-4">Photo Gallery</h2>
                  <p className="text-neutral-600 mb-4">
                    Browse our photo albums from performances, tours, rehearsals, and special events. 
                    See the faces behind the music.
                  </p>
                  <span className="text-primary-900 font-medium">View Gallery →</span>
                </CardContent>
              </Card>
            </a>
          </div>

          {/* Featured Highlights */}
          <Card className="bg-gradient-to-br from-neutral-50 to-primary-50">
            <CardContent className="pt-6">
              <h2 className="text-3xl font-bold text-center mb-8">Featured Highlights</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="relative h-48 rounded-xl overflow-hidden shadow-lg mb-4">
                    <img
                      src="/images/KZNYouthChoirLivePerformances.jpg"
                      alt="Performance"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Live Performances</h3>
                  <p className="text-sm text-neutral-600">Captured moments from our concerts</p>
                </div>
                <div className="text-center">
                  <div className="relative h-48 rounded-xl overflow-hidden shadow-lg mb-4">
                    <img
                      src="/images/KZNYouthChoirTour.jpg"
                      alt="International tour"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">International Tours</h3>
                  <p className="text-sm text-neutral-600">Memories from around the world</p>
                </div>
                <div className="text-center">
                  <div className="relative h-48 rounded-xl overflow-hidden shadow-lg mb-4">
                    <img
                      src="/images/KZNYouthChoirBehindTheScenes.jpg"
                      alt="Behind the scenes"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Behind the Scenes</h3>
                  <p className="text-sm text-neutral-600">Rehearsals and choir life</p>
                </div>
              </div>
            </CardContent>
          </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}


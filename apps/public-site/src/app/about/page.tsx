'use client'

import { useState } from 'react'
import { Header, Footer, Card, CardContent, Button } from '@kzn-youth-choir/ui'
import { ReadMoreModal } from '@/components/ReadMoreModal'

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

export default function AboutPage() {
  const [openModal, setOpenModal] = useState<string | null>(null)

  return (
    <div className="min-h-screen flex flex-col">
      <Header navItems={navItems} />
      
      <main className="flex-1">
        <div className="max-w-7xl mx-auto">
          {/* Hero Image Section - Matching Home Page */}
          <div className="relative h-[80vh] min-h-[600px] overflow-hidden px-4 sm:px-6 lg:px-8 py-8 lg:py-12 mb-16">
            <div className="max-w-7xl mx-auto h-full">
              <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/HeroImage.jpg"
                  alt="KZN Youth Choir performing"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#051434]/60" />
                <div className="absolute inset-0 flex items-center justify-center text-white px-4 z-10">
                  <div className="text-center max-w-4xl">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                      About KZN Youth Choir
                    </h1>
                    <p className="text-xl md:text-2xl">
                      Celebrating choral excellence and cultural diversity since 1967
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none space-y-8 px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <section>
              <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
                  <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                    The <strong>KwaZulu-Natal Youth Choir</strong> is South Africa's oldest youth choir, 
                    founded in 1967 by Mr. Hein de Villiers. We are a diverse group of around 80 talented 
                    choristers from across the KwaZulu-Natal province, united by our passion for choral excellence.
                  </p>
                  <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                    Though based in Durban, our choristers come from far and wide—from Port Edward and Kokstad 
                    in the south, Richards Bay in the north, and inland to Mooi River and Newcastle. This 
                    geographic diversity enriches our sound and reflects the vibrant cultural tapestry of KZN.
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => setOpenModal('who-we-are')}
                    className="!border-[#3980b7] !text-[#3980b7] bg-white hover:bg-[#3980b7]/5"
                  >
                    Read More
                  </Button>
                </div>
                <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="/images/KZNYouthChoirWhoWeAre.jpg"
                    alt="Diverse choir members"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </section>

            <section>
              <Card className="mb-8">
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                      <img
                        src="/images/KZNYouthChoirConductor.jpg"
                        alt="Conductor leading choir"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold mb-4">Our Conductor</h2>
                      <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                        Under the direction of <strong>Bernard Krüger</strong> (also known as "Chef"), conductor, composer, and 
                        accomplished musician, we explore a diverse repertoire that mirrors our cultural diversity. 
                        Our performances span classical (sacred and secular), pop choral, and traditional African 
                        music, creating a unique and powerful choral experience.
                      </p>
                      <Button 
                        variant="outline" 
                        onClick={() => setOpenModal('conductor')}
                        className="!border-[#3980b7] !text-[#3980b7] bg-white hover:bg-[#3980b7]/5"
                      >
                        Read More
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6">Our Objectives</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start mb-4">
                      <div className="w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                        <svg className="w-6 h-6 text-primary-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">Build Choral Tradition</h3>
                        <p className="text-neutral-600 mb-3">Strengthening the choral tradition in KZN</p>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => setOpenModal('build-tradition')}
                          className="text-primary-900"
                        >
                          Read More →
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start mb-4">
                      <div className="w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                        <svg className="w-6 h-6 text-primary-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">Excellence in Performance</h3>
                        <p className="text-neutral-600 mb-3">Promote stylistically correct choral singing</p>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => setOpenModal('excellence')}
                          className="text-primary-900"
                        >
                          Read More →
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start mb-4">
                      <div className="w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                        <svg className="w-6 h-6 text-primary-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">Youth Development</h3>
                        <p className="text-neutral-600 mb-3">Engage youth in a worthwhile activity based on Christian ethos and encouragement</p>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => setOpenModal('youth-development')}
                          className="text-primary-900"
                        >
                          Read More →
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start mb-4">
                      <div className="w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                        <svg className="w-6 h-6 text-primary-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 002 2h2.945M3.055 11A9.004 9.004 0 0112 2c5.194 0 9.445 4.194 8.945 9A9.004 9.004 0 0112 20a9.004 9.004 0 01-8.945-9zM15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">Community Enrichment</h3>
                        <p className="text-neutral-600 mb-3">Enrich the community through concerts and cultural development</p>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => setOpenModal('community-enrichment')}
                          className="text-primary-900"
                        >
                          Read More →
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6">International Recognition</h2>
              <Card className="mb-6 bg-gradient-to-br from-primary-50 to-accent-orange/5">
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="inline-block px-4 py-2 bg-[#c8b13a] text-white rounded-full text-sm font-semibold mb-4">
                        1st Place Winner
                      </div>
                      <h3 className="text-2xl font-bold mb-4">Vienna 2019</h3>
                      <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                        The KZN Youth Choir has participated in numerous national and international choral 
                        competitions, winning many prestigious awards. Our most recent achievement was at the 
                        13th Summa Cum Laude International Youth Music Festival in Vienna, Austria (July 2019).
                      </p>
                      <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                        We were the <strong>only choir representing the African continent</strong>, competing 
                        against choirs from Australia, China, Taiwan, and Brazil. The choir achieved{' '}
                        <strong>1st place with outstanding success</strong> in the Mixed Choir category—a 
                        testament to our dedication and excellence.
                      </p>
                      <Button 
                        variant="outline" 
                        onClick={() => setOpenModal('competitions')}
                        className="!border-[#3980b7] !text-[#3980b7] bg-white hover:bg-[#3980b7]/5"
                      >
                        View Full Competition History
                      </Button>
                    </div>
                    <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
                      <img
                        src="/images/KZNYouthChoirVienna.jpg"
                        alt="International competition - Vienna 2019"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section>
              <Card className="bg-gradient-to-br from-neutral-50 to-primary-50">
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="relative h-48 md:h-64 rounded-xl overflow-hidden shadow-lg">
                      <img
                        src="/images/KZNYouthChoirWhoCanJoin.jpg"
                        alt="Resilience & Innovation"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold mb-4">Resilience & Innovation</h2>
                      <p className="text-lg text-neutral-700 leading-relaxed">
                        Even during the challenges of the COVID-19 pandemic, the choir never rested. We adapted 
                        quickly, using technology to continue practising and performing virtually, maintaining 
                        our connection and passion for choral music from the safety of our homes.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            <div className="mt-12 pt-8 border-t border-neutral-200">
              <a
                href="/auditions"
                className="inline-block px-8 py-3 bg-[#3980b7] text-white rounded-lg font-medium hover:bg-[#3980b7]/90 transition-colors"
              >
                Join Us
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Read More Modals */}
      <ReadMoreModal
        isOpen={openModal === 'who-we-are'}
        onClose={() => setOpenModal(null)}
        title="Who We Are - More About the Choir"
        content={
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary-900">Our History & Structure</h3>
              <p className="text-neutral-700 leading-relaxed mb-4">
                The KZN Youth Choir is a non-profit organization that relies on membership fees from every chorister, 
                with no additional income from government or sponsorships. This makes it difficult for many potential 
                choristers to be members of the choir, particularly for those from previously-disadvantaged backgrounds. 
                However, the choir does not discriminate in its membership.
              </p>
              <p className="text-neutral-700 leading-relaxed mb-4">
                The choir is supported by a Board, which is elected annually. The board comprises chorister parents 
                from the various regions in KwaZulu-Natal, and the choir's Student Council. This structure ensures 
                representation from across the province and gives choristers a voice in the choir's governance.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary-900">The Choristers</h3>
              <p className="text-neutral-700 leading-relaxed mb-4">
                Hundreds of applicants, ranging in age from <strong>15 to 25 years old</strong>, audition annually 
                in August and September. Only the top candidates are announced in October/November to join the choir—based 
                purely on the merit of their audition.
              </p>
              <p className="text-neutral-700 leading-relaxed mb-4">
                During the following summer vacation, a choir camp is held where the choir members meet each other and 
                start practicing their programme for the new year. Rehearsals take place on <strong>Friday evenings during 
                the first term of school</strong> in the new year. Pre-scheduled performances and tours take place during 
                the second and third school terms.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary-900">Our Reach</h3>
              <p className="text-neutral-700 leading-relaxed">
                The KZN Youth Choir has travelled locally and abroad, aiming to continually raise the standard of singing 
                by competing in International Choral Competitions in Europe every second year. Locally, the choir is well 
                known and has toured to Cape Town, Bloemfontein, Johannesburg, and Pretoria on at least four different 
                occasions. A highlight was the selection to perform at the opening ceremony of the International Philip 
                MacLachlan Choral Seminar in 2004 in Stellenbosch, an event which attracted more than 250 conductors 
                from South Africa and abroad.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary-900">Our Legacy</h3>
              <p className="text-neutral-700 leading-relaxed">
                The choir has been taking in young people for more than 50 years, shaping them and exposing them to music 
                that they would otherwise never be exposed to. We embrace the new South Africa wholeheartedly and hope that 
                we can continue to share what we love most.
              </p>
            </div>
          </div>
        }
      />

      <ReadMoreModal
        isOpen={openModal === 'conductor'}
        onClose={() => setOpenModal(null)}
        title="Our Conductor - Bernard Krüger"
        content={
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary-900">Current Artistic Director</h3>
              <p className="text-neutral-700 leading-relaxed mb-4">
                Our current Artistic Director, <strong>Bernard Krüger</strong> (also affectionately known as "Chef"), 
                joined the Choir in 2021. He brings a wealth of experience as a conductor, composer, and accomplished 
                musician to the KZN Youth Choir.
              </p>
              <p className="text-neutral-700 leading-relaxed mb-4">
                Under his direction, the choir explores a diverse repertoire that mirrors our cultural diversity. Our 
                performances span classical (sacred and secular), pop choral, and traditional African music, creating 
                a unique and powerful choral experience.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary-900">Leadership & Support</h3>
              <p className="text-neutral-700 leading-relaxed mb-4">
                Bernard Krüger is supported by the Board of the choir, which is elected annually. The board comprises 
                chorister parents from the various regions in KwaZulu-Natal, and the choir's Student Council. This 
                collaborative structure ensures that the choir's artistic vision is supported by a dedicated team of 
                volunteers and student leaders.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary-900">Musical Excellence</h3>
              <p className="text-neutral-700 leading-relaxed">
                Under Chef's leadership, the choir continues to maintain its reputation for excellence, building on the 
                foundation laid by previous conductors and continuing the choir's legacy of representing South Africa 
                with distinction on both national and international stages.
              </p>
            </div>
          </div>
        }
      />

      <ReadMoreModal
        isOpen={openModal === 'build-tradition'}
        onClose={() => setOpenModal(null)}
        title="Build Choral Tradition"
        content={
          <div className="space-y-6">
            <p className="text-lg text-neutral-700 leading-relaxed">
              Building the choral tradition in KwaZulu-Natal is fundamental to our mission. Since 1967, we have been 
              dedicated to strengthening and preserving the rich choral heritage of our province.
            </p>
            <div>
              <h4 className="font-semibold text-lg mb-2 text-primary-900">Preserving Heritage</h4>
              <p className="text-neutral-700 leading-relaxed mb-4">
                Through our performances, competitions, and educational outreach, we work to ensure that choral music 
                remains a vibrant and valued art form in KwaZulu-Natal. We celebrate both classical choral traditions 
                and the unique sounds of South African choral music.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2 text-primary-900">Inspiring Future Generations</h4>
              <p className="text-neutral-700 leading-relaxed">
                By maintaining high standards and competing internationally, we inspire young singers across the province 
                to pursue choral excellence. Our success demonstrates what is possible when talent meets dedication, 
                encouraging more young people to join choirs and develop their musical abilities.
              </p>
            </div>
          </div>
        }
      />

      <ReadMoreModal
        isOpen={openModal === 'excellence'}
        onClose={() => setOpenModal(null)}
        title="Excellence in Performance"
        content={
          <div className="space-y-6">
            <p className="text-lg text-neutral-700 leading-relaxed">
              Promoting stylistically correct choral singing is at the heart of everything we do. We believe that 
              excellence comes from understanding and respecting different musical styles and traditions.
            </p>
            <div>
              <h4 className="font-semibold text-lg mb-2 text-primary-900">Stylistic Accuracy</h4>
              <p className="text-neutral-700 leading-relaxed mb-4">
                Our repertoire spans multiple genres—from classical masterpieces to contemporary arrangements and 
                traditional African songs. For each piece, we study the appropriate style, technique, and interpretation, 
                ensuring that we honor the composer's intent while bringing our own cultural perspective.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2 text-primary-900">International Recognition</h4>
              <p className="text-neutral-700 leading-relaxed mb-4">
                Our commitment to excellence has been recognized internationally. We've won numerous awards at 
                prestigious competitions, including 1st place at the World Choir Games in Vienna (2019), gold medals 
                at competitions in Greece, Italy, Poland, and Germany, and multiple awards from the South African 
                Choral Society.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2 text-primary-900">Continuous Improvement</h4>
              <p className="text-neutral-700 leading-relaxed">
                We compete internationally every second year, not just to win, but to learn from the world's best 
                choirs and conductors. This exposure to different styles and techniques helps us continuously raise 
                our own standards and bring new insights back to South Africa.
              </p>
            </div>
          </div>
        }
      />

      <ReadMoreModal
        isOpen={openModal === 'youth-development'}
        onClose={() => setOpenModal(null)}
        title="Youth Development"
        content={
          <div className="space-y-6">
            <p className="text-lg text-neutral-700 leading-relaxed">
              Engaging youth in a worthwhile activity based on Christian ethos and an atmosphere of encouragement is 
              central to our mission. The choir provides far more than musical training—it's a transformative experience 
              that shapes character and builds life skills.
            </p>
            <div>
              <h4 className="font-semibold text-lg mb-2 text-primary-900">Christian Ethos & Encouragement</h4>
              <p className="text-neutral-700 leading-relaxed mb-4">
                The choir operates in an atmosphere of encouragement, respect, and mutual support, grounded in Christian 
                values. This creates a safe space where young people can take risks, grow, and discover their potential 
                both as musicians and as individuals.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2 text-primary-900">Life Skills Development</h4>
              <p className="text-neutral-700 leading-relaxed mb-4">
                Through regular rehearsals, performance schedules, and high standards, choristers develop valuable life 
                skills: time management, commitment, responsibility, teamwork, and the ability to receive and act on 
                feedback. These skills serve them well beyond their choir years.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2 text-primary-900">Personal Growth</h4>
              <p className="text-neutral-700 leading-relaxed mb-4">
                The choir environment pushes young people to continuously improve—not just musically, but personally. 
                Choristers develop confidence, resilience, cultural awareness, and the ability to work collaboratively 
                toward a common goal.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2 text-primary-900">Inclusive Opportunity</h4>
              <p className="text-neutral-700 leading-relaxed">
                The choir does not discriminate in its membership. Hundreds of applicants audition annually, and selection 
                is based purely on merit. This ensures that talented young singers from all backgrounds have the opportunity 
                to be part of something extraordinary, regardless of their circumstances.
              </p>
            </div>
          </div>
        }
      />

      <ReadMoreModal
        isOpen={openModal === 'community-enrichment'}
        onClose={() => setOpenModal(null)}
        title="Community Enrichment"
        content={
          <div className="space-y-6">
            <p className="text-lg text-neutral-700 leading-relaxed">
              Enriching the community through concerts and cultural development is a key objective of the KZN Youth Choir. 
              We believe that music has the power to bring people together, celebrate diversity, and create moments of 
              shared beauty.
            </p>
            <div>
              <h4 className="font-semibold text-lg mb-2 text-primary-900">Local Performances</h4>
              <p className="text-neutral-700 leading-relaxed mb-4">
                Throughout the year, we perform at various venues across KwaZulu-Natal, bringing high-quality choral music 
                to communities throughout the province. These performances are opportunities to share our music, celebrate 
                South African culture, and connect with audiences from diverse backgrounds.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2 text-primary-900">Cultural Development</h4>
              <p className="text-neutral-700 leading-relaxed mb-4">
                Our repertoire reflects the rich cultural diversity of South Africa, including traditional African songs, 
                classical works, and contemporary arrangements. By performing this diverse music, we contribute to cultural 
                understanding and appreciation, helping to preserve and celebrate South African musical heritage.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2 text-primary-900">National Tours</h4>
              <p className="text-neutral-700 leading-relaxed mb-4">
                The choir has toured extensively throughout South Africa, performing in Cape Town, Bloemfontein, 
                Johannesburg, and Pretoria. These tours allow us to share our music with audiences across the country 
                and represent KwaZulu-Natal on a national stage.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2 text-primary-900">Special Events</h4>
              <p className="text-neutral-700 leading-relaxed">
                We've been honored to perform at prestigious events, including the opening ceremony of the International 
                Philip MacLachlan Choral Seminar in Stellenbosch (2004), which attracted more than 250 conductors from 
                South Africa and abroad. Such performances contribute to the cultural life of our communities and showcase 
                the excellence of South African choral music.
              </p>
            </div>
          </div>
        }
      />

      <ReadMoreModal
        isOpen={openModal === 'competitions'}
        onClose={() => setOpenModal(null)}
        title="International Competition History"
        content={
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary-900">Vienna 2019 - Summa Cum Laude</h3>
              <p className="text-neutral-700 leading-relaxed mb-4">
                Our most recent achievement was at the 13th Summa Cum Laude International Youth Music Festival in Vienna, 
                Austria (July 2019). We were the only choir representing the African continent, competing against choirs 
                from Australia, China, Taiwan, and Brazil. The choir achieved <strong>1st place with outstanding success</strong> 
                in the Mixed Choir category.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary-900">Early International Success</h3>
              <p className="text-neutral-700 leading-relaxed mb-4">
                In 2003, we won <strong>1st prize</strong> for Best Balanced and Presented Folklore programme and 
                <strong>2nd position</strong> in the Chamber choir competition in Greece. This marked our entry onto 
                the international stage and demonstrated our ability to compete with the world's best.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary-900">Germany 2005 - Johannes Brahms Competition</h3>
              <p className="text-neutral-700 leading-relaxed mb-4">
                The choir was invited to participate in the International Johannes Brahms Choir Festival & Competition 
                in Wernigerode, Germany in 2005—the <strong>first South African choir</strong> to have been invited to 
                this prestigious competition. We achieved <strong>first and third places</strong> for the Mixed Youth Choirs 
                and Folklore, respectively, and were also awarded <strong>two gold medals</strong> for our performances.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary-900">South African Recognition</h3>
              <p className="text-neutral-700 leading-relaxed mb-4">
                The KZN Youth Choir received multiple awards from the South African Choral Society, including 
                <strong>Best Youth Choir for 2005</strong> and <strong>Best CD 2004 and 2006</strong>. These awards 
                recognized our contribution to choral music in South Africa.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary-900">Italy 2009 - Seghizzi Competition</h3>
              <p className="text-neutral-700 leading-relaxed mb-4">
                At the Seghizzi International Choir Competition in Italy (2009), we were awarded 
                <strong>Most Popular Choir</strong>—a testament to our ability to connect with audiences. The choir 
                has been the recipient of the most popular choir (Audience prize) at all competitions since 1998.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary-900">Greece 2011 - Antonio Vivaldi Competition</h3>
              <p className="text-neutral-700 leading-relaxed mb-4">
                In 2011, the choir was awarded <strong>first prizes</strong> at the International Antonio Vivaldi Choir 
                Competition (Greece) in the Mixed Youth Choir Category, Sacred Music, and Folklore Categories. The choir 
                was also the <strong>Grand Prix winner</strong>—the highest honor at the competition.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary-900">Italy 2013 - Florence International Choir Festival</h3>
              <p className="text-neutral-700 leading-relaxed mb-4">
                In July 2013, the KZN Youth Choir travelled to Florence, Italy to compete in the Florence International 
                Choir Festival where 18 other choirs from around the world took part. This festival was aimed at professional 
                choirs, so we were extremely honoured to be chosen to take part. We were awarded:
              </p>
              <ul className="list-disc list-inside text-neutral-700 space-y-2 ml-4">
                <li><strong>Gold</strong> in the Chamber Choir Category</li>
                <li><strong>Gold</strong> for Best Female Soloist (Pearl Khwezi)</li>
                <li><strong>Gold</strong> for Best Contemporary Arrangement (Gerard du Toit for "Sounds of Africa")</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary-900">Poland 2015 - Bydgoszcz Musical Impressions</h3>
              <p className="text-neutral-700 leading-relaxed mb-4">
                The choir travelled to Poland in July 2015 to partake in the Bydgoszcz Musical Impressions Competition and 
                Festival, which consisted of 19 competitors from 11 different countries around the world. The choir walked 
                away with a <strong>first-place prize</strong> sponsored by the Minister of Arts, Culture and Heritage for 
                the choral section of the competition, as well as a cash prize.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary-900">Spain 2017 - Golden Voices of Barcelona</h3>
              <p className="text-neutral-700 leading-relaxed mb-4">
                2017 was a very eventful year for the choir as we not only had our <strong>50th reunion concert and 
                celebrations</strong>, but also toured to Spain to participate in the Golden Voices of Barcelona Choral 
                Competition, in which the choir did exceptionally well.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary-900">World Choir Games - Tshwane 2017</h3>
              <p className="text-neutral-700 leading-relaxed mb-4">
                The World Choir Games was held in Tshwane, South Africa, which gave us and many, many South African 
                professional and non-professional choirs the opportunity to take part in a very large scale music competition 
                and to be exposed to a variety of musical styles and sounds. We performed in the Mixed Youth Choir category 
                and in the Sacred category, walking away with <strong>silvers in both</strong>. A highlight for many choristers 
                was singing a composition by the renowned South African composer, Franco Prinsloo, who set "Ek sal sterf en na 
                my Vader gaan" by Breyten Breytenbach to music.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary-900">Other Notable Achievements</h3>
              <p className="text-neutral-700 leading-relaxed">
                The choir has also participated in competitions in Estonia (2007) at the world's biggest choir festival, 
                and has consistently been recognized for excellence. Our track record of success demonstrates our commitment 
                to maintaining the highest standards in choral performance and representing South Africa with distinction on 
                the international stage.
              </p>
            </div>
          </div>
        }
      />
    </div>
  )
}

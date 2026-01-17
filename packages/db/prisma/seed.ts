import { PrismaClient, UserRole, EventType, EventAudience, SponsorTier, MediaType, ContactType, MessageChannel } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Create admin users
  const superAdmin = await prisma.adminUser.upsert({
    where: { email: 'admin@kznchoir.co.za' },
    update: {},
    create: {
      email: 'admin@kznchoir.co.za',
      name: 'Super Admin',
      passwordHash: '$2a$10$placeholder', // Replace with actual hash
      role: UserRole.SUPER_ADMIN,
    },
  })

  const websiteEditor = await prisma.adminUser.upsert({
    where: { email: 'editor@kznchoir.co.za' },
    update: {},
    create: {
      email: 'editor@kznchoir.co.za',
      name: 'Website Editor',
      passwordHash: '$2a$10$placeholder',
      role: UserRole.WEBSITE_EDITOR,
    },
  })

  console.log('✅ Created admin users')

  // Clear existing carousel slides to avoid duplicates
  await prisma.carouselSlide.deleteMany({})
  console.log('🗑️  Cleared existing carousel slides')

  // Create 4 carousel slides with specific CTAs and catchy choral music messaging
  // Each slide has a different choir/choral singing image
  await prisma.carouselSlide.createMany({
    data: [
      {
        title: 'Join Us',
        subtitle: 'Where voices unite in perfect harmony. Become part of South Africa\'s most celebrated youth choir and discover the transformative power of choral music.',
        imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&q=80',
        ctaText: 'Join Us',
        ctaLink: '/auditions',
        order: 0,
        isActive: true,
      },
      {
        title: 'View Events',
        subtitle: 'Experience the magic of voices blending as one. From intimate concerts to grand performances, witness choral excellence that moves hearts and inspires souls.',
        imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&q=80',
        ctaText: 'View Events',
        ctaLink: '/events',
        order: 1,
        isActive: true,
      },
      {
        title: 'News Updates',
        subtitle: 'Stay connected with our journey of musical excellence. Follow our triumphs, tours, and the stories that make choral music a celebration of unity and artistry.',
        imageUrl: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=1200&q=80',
        ctaText: 'Read News',
        ctaLink: '/news',
        order: 2,
        isActive: true,
      },
      {
        title: 'Support Us',
        subtitle: 'Help us continue creating harmony that transcends boundaries. Your support empowers young voices to reach new heights and share the gift of choral music with the world.',
        imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&q=80',
        ctaText: 'Support Us',
        ctaLink: '/support',
        order: 3,
        isActive: true,
      },
    ],
  })

  console.log('✅ Created carousel slides')

  // Clear existing news posts to avoid duplicates
  await prisma.newsPost.deleteMany({})
  console.log('🗑️  Cleared existing news posts')

  // Create sample news posts
  const newsPost = await prisma.newsPost.create({
    data: {
      title: 'Welcome to Our New Website',
      slug: 'welcome-to-our-new-website',
      excerpt: 'We are excited to launch our new website with improved features and better access to information.',
      content: 'This is a sample news post. The content would go here...',
      category: 'Announcements',
      tags: ['website', 'announcement'],
      featured: true,
      publishAt: new Date(),
      createdById: superAdmin.id,
    },
  })

  console.log('✅ Created news posts')

  // Create sample events
  const event = await prisma.event.create({
    data: {
      title: 'Spring Concert 2024',
      slug: 'spring-concert-2024',
      type: EventType.CONCERT,
      audience: EventAudience.PUBLIC,
      description: 'Join us for our annual spring concert featuring a diverse repertoire.',
      startDate: new Date('2024-09-15T19:00:00Z'),
      endDate: new Date('2024-09-15T21:00:00Z'),
      callTime: new Date('2024-09-15T17:30:00Z'),
      venue: 'Durban City Hall',
      venueAddress: '123 Smith Street, Durban',
      ticketLink: 'https://tickets.example.com',
      uniform: 'Formal black attire',
      createdById: superAdmin.id,
    },
  })

  console.log('✅ Created events')

  // Create sample sponsors
  await prisma.sponsor.createMany({
    data: [
      {
        name: 'Example Sponsor',
        tier: SponsorTier.GOLD,
        logoUrl: '/images/sponsors/example.png',
        websiteUrl: 'https://example.com',
        featured: true,
        order: 0,
        isActive: true,
      },
    ],
  })

  console.log('✅ Created sponsors')

  // Create sample groups
  const sopranoGroup = await prisma.group.create({
    data: {
      name: 'Sopranos',
      description: 'Soprano voice part',
      type: 'voice_part',
    },
  })

  const altoGroup = await prisma.group.create({
    data: {
      name: 'Altos',
      description: 'Alto voice part',
      type: 'voice_part',
    },
  })

  console.log('✅ Created groups')

  // Create message templates
  await prisma.messageTemplate.createMany({
    data: [
      {
        name: 'Rehearsal Reminder',
        subject: 'Reminder: Rehearsal {{date}}',
        body: 'This is a reminder that rehearsal is scheduled for {{date}} at {{time}}. Please arrive on time.',
        channel: MessageChannel.EMAIL,
        category: 'rehearsal_reminder',
        isActive: true,
      },
      {
        name: 'Event Call Time',
        subject: 'Call Time for {{eventName}}',
        body: 'Please note the call time for {{eventName}} is {{callTime}}. Uniform: {{uniform}}',
        channel: MessageChannel.EMAIL,
        category: 'event_call_time',
        isActive: true,
      },
    ],
  })

  console.log('✅ Created message templates')

  console.log('🎉 Seeding completed!')
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })


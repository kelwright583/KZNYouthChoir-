# Project Structure

## Monorepo Layout

```
KZNYouthChoir/
├── apps/
│   ├── public-site/          # Public-facing website (Next.js)
│   │   ├── src/
│   │   │   └── app/          # Next.js App Router pages
│   │   │       ├── page.tsx  # Home page
│   │   │       ├── about/
│   │   │       ├── auditions/
│   │   │       ├── events/
│   │   │       ├── media/
│   │   │       ├── news/
│   │   │       ├── support/
│   │   │       ├── contact/
│   │   │       ├── privacy/
│   │   │       └── terms/
│   │   └── public/           # Static assets
│   │
│   └── admin/                # Admin CMS system (Next.js)
│       └── src/
│           └── app/
│               ├── admin/    # Protected admin routes
│               │   ├── dashboard/
│               │   ├── cms/
│               │   ├── events/
│               │   ├── contacts/
│               │   ├── communications/
│               │   ├── documents/
│               │   └── users/
│               └── login/     # Auth pages
│
├── packages/
│   ├── ui/                   # Shared UI components
│   │   ├── src/
│   │   │   ├── components/   # React components
│   │   │   ├── theme.ts      # Design tokens
│   │   │   └── utils/         # Utility functions
│   │   └── tailwind.config.js
│   │
│   └── db/                   # Database schema & client
│       ├── prisma/
│       │   ├── schema.prisma # Prisma schema
│       │   └── seed.ts       # Seed data
│       └── src/
│           └── index.ts       # Prisma client export
│
├── package.json              # Root package.json (workspaces)
├── pnpm-workspace.yaml      # pnpm workspace config
├── turbo.json               # Turborepo config
└── README.md

```

## Design System

### Colors (from logo)
- **Primary**: Dark blue (#1E3A8A) - Main brand color
- **Accents**: 
  - Red (#DC2626) - K
  - Orange (#EA580C) - Last A
  - Yellow (#FBBF24) - Y
  - Green (#16A34A) - Middle A
  - Olive (#84CC16) - First A

### Typography
- Font: Inter (system fallback)
- Swiss style: Clean, minimal, lots of white space

### Components
- Button (variants: primary, secondary, outline, ghost, danger)
- Card (variants: default, elevated, outlined)
- Input, Textarea
- Modal
- Toast
- Table
- Pagination
- Header, Footer

## Database Schema

### Core Models
- `AdminUser` - Admin users with roles
- `AuditLog` - Activity tracking
- `PageSection` - Editable page content

### CMS Models
- `CarouselSlide` - Hero carousel slides
- `NewsPost` - News/blog posts
- `Event` - Events and performances
- `Sponsor` - Sponsor information
- `MediaAsset` - Media library
- `Newsletter` - Newsletter archive

### Contact & Communication
- `Contact` - All contacts (choristers, parents, etc.)
- `ChoristerProfile` - Chorister-specific data
- `GuardianProfile` - Parent/guardian links
- `Group` - Groups/segments
- `GroupMember` - Group membership
- `Message` - Outgoing messages
- `MessageRecipient` - Message delivery tracking
- `MessageTemplate` - Reusable templates

### Documents
- `Document` - Document metadata
- `DocumentVersion` - Version control
- `RequiredDocStatus` - Required docs tracker

## Routes

### Public Site
- `/` - Home
- `/about` - About page
- `/auditions` - Join/auditions
- `/events` - Events listing
- `/events/calendar` - Calendar view
- `/events/:slug` - Event detail
- `/media/video` - Video library
- `/media/gallery` - Photo gallery
- `/media/gallery/:album` - Album detail
- `/news` - News listing
- `/news/:slug` - News post detail
- `/support` - Support hub
- `/support/donate` - Donations
- `/support/sponsorship` - Sponsorship
- `/contact` - Contact form
- `/privacy` - Privacy policy
- `/terms` - Terms of use

### Admin System
- `/admin/dashboard` - Dashboard
- `/admin/cms/*` - CMS modules
- `/admin/events/*` - Event management
- `/admin/contacts/*` - Contact management
- `/admin/communications/*` - Message center
- `/admin/documents/*` - Document repository
- `/admin/users/*` - User management
- `/admin/audit` - Audit log

## User Roles

1. **Super Admin** - Full access
2. **Website Editor** - CMS modules only
3. **Events Coordinator** - Events & reminders
4. **Choir Admin** - Contacts, comms, docs
5. **Board Viewer** - Read-only board docs & dashboards


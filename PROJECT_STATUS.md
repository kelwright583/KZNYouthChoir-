# KZN Youth Choir - Project Status & Build Reference

**Last Updated:** Current Session  
**Domain:** kznyouthchoir.com  
**Status:** Phase 2 Complete - Ready for Phase 3

---

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Completed Phases](#completed-phases)
3. [Current Status](#current-status)
4. [Remaining Phases](#remaining-phases)
5. [Technical Stack](#technical-stack)
6. [Project Structure](#project-structure)
7. [Database Schema](#database-schema)
8. [Setup Instructions](#setup-instructions)
9. [API Endpoints](#api-endpoints)
10. [Next Steps](#next-steps)

---

## 🎯 Project Overview

**Goal:** Rebuild the KZN Youth Choir website (public) + build a private Admin system that feeds dynamic content into the public site and centralizes choir communications, calendars, and document control.

**Key Requirements:**
- Mobile-first PWAs
- Premium, modern design (Swiss style)
- Admin acts as CMS "feeder" for public site
- Role-based permissions
- Audit trail for all admin actions
- Data protection (choristers are minors)

---

## ✅ Completed Phases

### Phase 0: Repo + Foundations ✅

**Status:** Complete

**What Was Built:**
- ✅ Monorepo structure with Turborepo + pnpm workspaces
- ✅ `/apps/public-site` - Public-facing website (Next.js 14)
- ✅ `/apps/admin` - Admin CMS system (merged into public-site)
- ✅ `/packages/ui` - Shared UI component library
- ✅ `/packages/db` - Prisma database package
- ✅ TypeScript configuration across all packages
- ✅ Tailwind CSS setup
- ✅ Environment configuration structure
- ✅ Documentation (README, SETUP.md, PROJECT_STRUCTURE.md)

**Key Files:**
- `package.json` - Root workspace configuration
- `pnpm-workspace.yaml` - pnpm workspace config
- `turbo.json` - Turborepo pipeline configuration
- `.gitignore` - Git ignore rules

---

### Phase 1: Branding & Design System ✅

**Status:** Complete

**What Was Built:**

#### Design Tokens
- ✅ Color palette derived from logo:
  - Primary: Dark blue (#1E3A8A) - from "KZN YOUTH" text
  - Accents: Red, Orange, Yellow, Green, Olive - from logo letters
  - Neutrals: Clean grays for Swiss style
- ✅ Typography system (Inter font)
- ✅ Spacing scale (generous, Swiss style)
- ✅ Border radius, shadows, breakpoints
- ✅ Theme file (`packages/ui/src/theme.ts`) for easy customization

#### UI Components Built
- ✅ **Button** - Variants: primary, secondary, outline, ghost, danger
- ✅ **Card** - With Header, Title, Content, Footer sub-components
- ✅ **Input** - With label, error, helper text support
- ✅ **Textarea** - With label, error, helper text support
- ✅ **Modal** - With backdrop, keyboard escape, size variants
- ✅ **Toast** - Success, error, warning, info variants with auto-dismiss
- ✅ **Table** - With Header, Body, Row, Head, Cell components
- ✅ **Pagination** - With page numbers, prev/next, ellipsis
- ✅ **Header** - Responsive navigation with mobile menu
- ✅ **Footer** - With sections, newsletter signup, sponsor strip

**Design Principles:**
- Swiss style: Clean, minimal, lots of white space
- White backgrounds
- Bold color only for accents and CTAs
- Mobile-first responsive design
- Accessible (semantic HTML, keyboard navigation)

**Key Files:**
- `packages/ui/src/theme.ts` - Design tokens
- `packages/ui/src/components/*` - All UI components
- `packages/ui/tailwind.config.js` - Tailwind configuration

---

### Phase 2: Public Site (Static Shell + Dynamic Modules) ✅

**Status:** Complete

**What Was Built:**

#### API Routes
- ✅ `/api/carousel` - Fetch active carousel slides
- ✅ `/api/events` - Fetch events (with filtering: upcoming/past, audience)
- ✅ `/api/events/[slug]` - Fetch single event by slug
- ✅ `/api/news` - Fetch news posts (with featured filter)
- ✅ `/api/news/[slug]` - Fetch single news post by slug
- ✅ `/api/sponsors` - Fetch active sponsors (with featured filter)
- ✅ `/api/contact` - Handle contact form submissions

#### Dynamic Components
- ✅ **HeroCarousel** - Animated carousel with auto-rotation, navigation dots
- ✅ **EventsList** - Responsive grid with loading/empty states
- ✅ **NewsList** - Responsive grid with images, categories
- ✅ **SponsorStrip** - Horizontal sponsor logo display
- ✅ **ContactForm** - Client-side form with validation

#### Public Pages Built
- ✅ **Home** (`/`) - Dynamic carousel, events, news, achievements, sponsors
- ✅ **About** (`/about`) - Complete content with improved copy
- ✅ **Auditions** (`/auditions`) - Join page with improved structure
- ✅ **Events** (`/events`) - Dynamic event listing
- ✅ **Event Detail** (`/events/[slug]`) - Full event details
- ✅ **News** (`/news`) - Dynamic news listing
- ✅ **News Detail** (`/news/[slug]`) - Full news post with images
- ✅ **Media** (`/media`) - Hub page (video/gallery links)
- ✅ **Support** (`/support`) - Donate/Sponsorship hub
- ✅ **Contact** (`/contact`) - Working contact form
- ✅ **Privacy** (`/privacy`) - Privacy policy page
- ✅ **Terms** (`/terms`) - Terms of use page

#### Content Improvements
- ✅ All content rewritten with engaging, exciting voice
- ✅ Highlights key achievements (1st place Vienna 2019)
- ✅ Emphasizes heritage (oldest youth choir, founded 1967)
- ✅ Showcases diversity and cultural richness
- ✅ Includes contact information (phone, hours)

#### Admin Routes (Basic)
- ✅ `/admin` - Redirects to dashboard
- ✅ `/admin/dashboard` - Basic dashboard structure (no auth yet)

**Key Files:**
- `apps/public-site/src/app/api/**` - All API routes
- `apps/public-site/src/components/**` - Dynamic components
- `apps/public-site/src/app/**` - All page routes
- `apps/public-site/public/manifest.json` - PWA manifest

---

## 🗄️ Database Setup ✅

**Status:** Complete

**What Was Done:**
- ✅ PostgreSQL database running in Docker (port 5433)
- ✅ Complete Prisma schema with all models
- ✅ Database migrations run successfully
- ✅ Sample data seeded (admin users, carousel, events, news, sponsors, groups, templates)
- ✅ Environment files configured

**Database Connection:**
```
postgresql://postgres:postgres@localhost:5433/kzn_choir?schema=public
```

**Docker Container:**
- Container name: `kzn-postgres`
- Port: 5433 (mapped from container's 5432)
- Status: Running

**Key Files:**
- `packages/db/prisma/schema.prisma` - Complete database schema
- `packages/db/prisma/seed.ts` - Seed data script
- `packages/db/.env` - Database connection
- `apps/public-site/.env.local` - Database connection

---

## 📊 Current Status

### ✅ What's Working
- Public website fully functional
- All pages accessible and styled
- Dynamic content loading from database
- API routes functional
- Database connected and seeded
- Development server running
- Mobile-responsive design
- PWA manifest configured

### ⚠️ What's Not Yet Implemented
- Admin authentication (NextAuth.js)
- Role-based access control
- Admin CMS interfaces
- File upload handling
- Email sending functionality
- SMS integration (optional)
- Rich text editor for content
- Image optimization
- Search functionality
- Calendar view for events

---

## 🚧 Remaining Phases

### Phase 3: Admin Auth + Roles 🔄

**Status:** Not Started

**What Needs to Be Built:**

#### Authentication
- [ ] NextAuth.js configuration
- [ ] Login page (`/admin/login`)
- [ ] Logout functionality
- [ ] Session management
- [ ] Password hashing (bcrypt)
- [ ] Password reset flow (optional)

#### Protected Routes
- [ ] Middleware for `/admin/*` routes
- [ ] Redirect to login if not authenticated
- [ ] Session refresh handling

#### Role-Based Access Control
- [ ] Role checking middleware
- [ ] UI component visibility based on roles
- [ ] API route protection by role

**Roles to Implement:**
1. **Super Admin** - Full access to everything
2. **Website Editor** - CMS modules only
3. **Events Coordinator** - Events & reminders
4. **Choir Admin** - Contacts, comms, docs
5. **Board Viewer** - Read-only board docs & dashboards

#### User Management UI
- [ ] Users listing page (`/admin/users`)
- [ ] Create user form
- [ ] Edit user form
- [ ] Assign/change roles
- [ ] Disable/enable accounts
- [ ] Password reset (admin-initiated)

**Key Files to Create:**
- `apps/public-site/src/app/admin/login/page.tsx`
- `apps/public-site/src/middleware.ts`
- `apps/public-site/src/lib/auth.ts`
- `apps/public-site/src/app/api/auth/[...nextauth]/route.ts`

---

### Phase 4: Admin CMS Modules 🔄

**Status:** Not Started

**What Needs to Be Built:**

#### Hero Carousel Manager
- [ ] CRUD interface (`/admin/cms/carousel`)
- [ ] Image upload
- [ ] Reorder slides (drag & drop)
- [ ] Schedule start/end dates
- [ ] Preview on site

#### News Manager
- [ ] News listing (`/admin/cms/news`)
- [ ] Create/edit news post form
- [ ] Rich text editor (Tiptap or similar)
- [ ] Image upload for featured image
- [ ] Categories and tags
- [ ] Featured/pinned toggle
- [ ] Publish date + expiry date
- [ ] Slug generation
- [ ] Preview on site

#### Sponsors Manager
- [ ] Sponsors listing (`/admin/cms/sponsors`)
- [ ] CRUD sponsor form
- [ ] Logo upload
- [ ] Tier selection (Platinum, Gold, Silver, Bronze, Friend)
- [ ] Featured toggle
- [ ] Order management
- [ ] Website URL

#### Media Library
- [ ] Media listing (`/admin/cms/media`)
- [ ] File upload (images, videos, documents)
- [ ] File type validation
- [ ] Size limits
- [ ] Image thumbnails generation
- [ ] Metadata editing (alt text, caption, tags)
- [ ] Search/filter by type, tags
- [ ] Reuse across news/events

#### Newsletter Archive
- [ ] Newsletter listing (`/admin/cms/newsletters`)
- [ ] Create newsletter entry
- [ ] HTML content editor OR PDF upload
- [ ] Publish date
- [ ] Public archive page

#### Page Sections Manager
- [ ] Editable page sections (`/admin/cms/pages`)
- [ ] Key-value editor for page content
- [ ] Preview changes

**Key Files to Create:**
- `apps/public-site/src/app/admin/cms/**` - All CMS routes
- `apps/public-site/src/components/admin/**` - Admin-specific components
- File upload API routes
- Image processing utilities

---

### Phase 5: Events & Reminders 🔄

**Status:** Not Started

**What Needs to Be Built:**

#### Event Builder
- [ ] Event listing (`/admin/events`)
- [ ] Create/edit event form with fields:
  - Title, type, audience (public/private)
  - Date/time, end date/time
  - Venue, venue address
  - Call time
  - Description (rich text)
  - Notes, uniform, what to bring
  - Ticket link
  - Flyer upload
  - Attachments from media library
- [ ] Slug generation
- [ ] Preview on site

#### Reminders System
- [ ] Reminder templates (`/admin/events/reminders`)
- [ ] Create reminder schedules relative to event:
  - 7 days before
  - 48 hours before
  - Day of event
- [ ] Template per reminder type
- [ ] Auto-send functionality (cron job or scheduled tasks)
- [ ] Reminder log/history

#### Calendar Views
- [ ] Month view (`/admin/events/calendar`)
- [ ] Week view
- [ ] Agenda/list view
- [ ] Filter by event type
- [ ] Filter by audience

**Key Files to Create:**
- `apps/public-site/src/app/admin/events/**` - Event management routes
- `apps/public-site/src/app/api/admin/events/**` - Admin event API
- Reminder scheduling system
- Calendar components

---

### Phase 6: Contacts, Groups & Communications 🔄

**Status:** Not Started

**What Needs to Be Built:

#### Contacts Database
- [ ] Contacts listing (`/admin/contacts`)
- [ ] Contact types: Chorister, Parent/Guardian, Alumni, Sponsor, Subscriber
- [ ] Chorister profile form:
  - Minimal sensitive fields
  - Date of birth
  - Voice part
  - Cohort (year joined)
  - Join/left dates
- [ ] Parent/Guardian linking to chorister
- [ ] Search and filter contacts
- [ ] Bulk actions (export, tag, etc.)

#### Groups/Segments Manager
- [ ] Groups listing (`/admin/groups`)
- [ ] Create groups:
  - Voice part groups (auto-assigned)
  - Ad-hoc groups (manual)
  - Cohorts
- [ ] Add/remove members
- [ ] Group rules (auto-assignment logic)

#### Message Center
- [ ] Message composer (`/admin/communications/compose`)
- [ ] Select channel: Email (required), SMS (optional)
- [ ] Select recipients:
  - By group/segment
  - By contact type
  - Individual selection
- [ ] Message templates dropdown
- [ ] Rich text editor
- [ ] Attachments from Media/Docs
- [ ] Schedule send date/time
- [ ] Preview message

#### Message Templates
- [ ] Templates listing (`/admin/communications/templates`)
- [ ] CRUD templates:
  - Rehearsal reminder
  - Event call time
  - Uniform reminder
  - Document request
  - Payment reminder
- [ ] Template variables ({{date}}, {{eventName}}, etc.)

#### Communications Log
- [ ] Comms log (`/admin/communications/log`)
- [ ] Record each outgoing message:
  - Recipients count
  - Content preview
  - Attachments
  - Sender
  - Timestamp
  - Status (sent, failed, pending)
- [ ] Filter by date, sender, status
- [ ] View recipient details

**Key Files to Create:**
- `apps/public-site/src/app/admin/contacts/**` - Contact management
- `apps/public-site/src/app/admin/groups/**` - Group management
- `apps/public-site/src/app/admin/communications/**` - Message center
- Email sending service (SendGrid, Mailgun, or similar)
- SMS integration (optional - Twilio or similar)

---

### Phase 7: Document Control + Required Docs Tracker 🔄

**Status:** Not Started

**What Needs to Be Built:**

#### Document Repository
- [ ] Documents listing (`/admin/documents`)
- [ ] Folder structure
- [ ] Upload documents
- [ ] Tags system
- [ ] Permissions:
  - Public
  - Parents only
  - Board only
  - Staff only
- [ ] Version control:
  - Upload new version
  - Change notes
  - View version history
  - Download specific version

#### Required Docs Tracker
- [ ] Required docs dashboard (`/admin/documents/required`)
- [ ] Per chorister tracking:
  - Indemnity form
  - Consent form
  - ID copy
  - Medical info
  - Photo consent
  - Other custom docs
- [ ] Status: Not Required, Pending, Received, Expired
- [ ] Due dates
- [ ] Upload links for parents
- [ ] Reminders for missing docs
- [ ] Bulk status updates

**Key Files to Create:**
- `apps/public-site/src/app/admin/documents/**` - Document management
- File upload API with versioning
- Document permission checking
- Required docs tracking system

---

### Phase 8: Audit Log + Polishing 🔄

**Status:** Not Started

**What Needs to Be Built:**

#### Global Audit Log
- [ ] Audit log page (`/admin/audit`)
- [ ] Capture admin CRUD actions:
  - User, action, entity, entityId
  - Timestamp, IP address, user agent
  - Diff summary (what changed)
- [ ] Capture comms sends
- [ ] Filter by:
  - User
  - Action type
  - Entity type
  - Date range
- [ ] Export audit log

#### Final UX Polish
- [ ] Empty states for all pages
- [ ] Loading states (skeletons)
- [ ] Error handling (user-friendly messages)
- [ ] Bulk actions for contacts/docs
- [ ] Robust search:
  - News/events search
  - Document search
  - Contact search
- [ ] Confirmation dialogs for destructive actions
- [ ] Success/error toasts throughout
- [ ] Form validation improvements
- [ ] Accessibility audit and fixes

#### Performance Optimization
- [ ] Image optimization (Next.js Image component)
- [ ] API response caching
- [ ] Database query optimization
- [ ] Code splitting
- [ ] Lazy loading

#### SEO Enhancements
- [ ] Dynamic meta tags per page
- [ ] Open Graph images
- [ ] Structured data (JSON-LD)
- [ ] Sitemap generation
- [ ] Robots.txt

**Key Files to Create:**
- `apps/public-site/src/app/admin/audit/page.tsx` - Audit log viewer
- Audit logging middleware/utility
- Search API endpoints
- Performance optimization utilities

---

## 🛠️ Technical Stack

### Frontend
- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Custom component library (`@kzn-youth-choir/ui`)
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod (to be implemented)
- **Rich Text:** Tiptap or similar (to be implemented)

### Backend
- **Database:** PostgreSQL 16 (Docker)
- **ORM:** Prisma
- **API:** Next.js API Routes
- **Authentication:** NextAuth.js (to be implemented)
- **File Storage:** Local filesystem (can upgrade to S3/Cloudinary later)

### Development
- **Monorepo:** Turborepo + pnpm workspaces
- **Package Manager:** pnpm
- **Linting:** ESLint
- **Type Checking:** TypeScript

### Deployment (Future)
- **Hosting:** Vercel/Netlify (public site)
- **Database:** Managed PostgreSQL (Supabase/Railway)
- **File Storage:** Cloudinary/S3 (for production)

---

## 📁 Project Structure

```
KZNYouthChoir/
├── apps/
│   └── public-site/              # Public website + Admin (merged)
│       ├── src/
│       │   ├── app/
│       │   │   ├── api/         # API routes
│       │   │   ├── admin/       # Admin routes (no auth yet)
│       │   │   └── [pages]/     # Public pages
│       │   └── components/      # Dynamic components
│       ├── public/               # Static assets
│       └── package.json
│
├── packages/
│   ├── ui/                       # Shared UI components
│   │   ├── src/
│   │   │   ├── components/       # React components
│   │   │   ├── theme.ts         # Design tokens
│   │   │   └── utils/           # Utilities
│   │   └── tailwind.config.js
│   │
│   └── db/                       # Database package
│       ├── prisma/
│       │   ├── schema.prisma    # Database schema
│       │   └── seed.ts          # Seed data
│       └── src/
│           └── index.ts         # Prisma client export
│
├── package.json                  # Root workspace config
├── pnpm-workspace.yaml
├── turbo.json
└── README.md
```

---

## 🗄️ Database Schema

### Core Models (Implemented)
- `AdminUser` - Admin users with roles
- `AuditLog` - Activity tracking
- `PageSection` - Editable page content

### CMS Models (Implemented)
- `CarouselSlide` - Hero carousel slides
- `NewsPost` - News/blog posts
- `Event` - Events and performances
- `EventReminder` - Reminder schedules
- `Sponsor` - Sponsor information
- `MediaAsset` - Media library
- `Newsletter` - Newsletter archive

### Contact & Communication Models (Schema Ready)
- `Contact` - All contacts (choristers, parents, etc.)
- `ChoristerProfile` - Chorister-specific data
- `GuardianProfile` - Parent/guardian links
- `Group` - Groups/segments
- `GroupMember` - Group membership
- `Message` - Outgoing messages
- `MessageRecipient` - Message delivery tracking
- `MessageTemplate` - Reusable templates

### Document Models (Schema Ready)
- `Document` - Document metadata
- `DocumentVersion` - Version control
- `RequiredDocStatus` - Required docs tracker

**Schema File:** `packages/db/prisma/schema.prisma`

---

## 🚀 Setup Instructions

### Prerequisites
- Node.js 18+
- pnpm 8+
- Docker Desktop (for PostgreSQL)

### Installation

1. **Clone and install dependencies:**
   ```bash
   pnpm install
   ```

2. **Set up database:**
   ```bash
   # Start PostgreSQL in Docker
   docker run --name kzn-postgres \
     -e POSTGRES_PASSWORD=postgres \
     -e POSTGRES_DB=kzn_choir \
     -p 5433:5432 \
     -d postgres:16
   
   # Run migrations and seed
   cd packages/db
   pnpm db:push
   pnpm db:seed
   ```

3. **Environment files:**
   - `packages/db/.env` - Already configured
   - `apps/public-site/.env.local` - Already configured

4. **Start development server:**
   ```bash
   pnpm dev
   ```

5. **Access:**
   - Public site: http://localhost:3000
   - Admin: http://localhost:3000/admin/dashboard

### Docker Commands

```bash
# Start database
docker start kzn-postgres

# Stop database
docker stop kzn-postgres

# View logs
docker logs kzn-postgres

# Remove container
docker rm -f kzn-postgres
```

---

## 🔌 API Endpoints

### Public API (Implemented)

- `GET /api/carousel` - Get active carousel slides
- `GET /api/events?limit=10&filter=upcoming` - Get events
- `GET /api/events/[slug]` - Get single event
- `GET /api/news?limit=10&featured=true` - Get news posts
- `GET /api/news/[slug]` - Get single news post
- `GET /api/sponsors?featured=true` - Get sponsors
- `POST /api/contact` - Submit contact form

### Admin API (To Be Implemented)

- `POST /api/admin/auth/login` - Login
- `POST /api/admin/auth/logout` - Logout
- `GET /api/admin/cms/carousel` - List carousel slides
- `POST /api/admin/cms/carousel` - Create slide
- `PUT /api/admin/cms/carousel/[id]` - Update slide
- `DELETE /api/admin/cms/carousel/[id]` - Delete slide
- `GET /api/admin/cms/news` - List news posts
- `POST /api/admin/cms/news` - Create news post
- `PUT /api/admin/cms/news/[id]` - Update news post
- `DELETE /api/admin/cms/news/[id]` - Delete news post
- `GET /api/admin/events` - List events (admin)
- `POST /api/admin/events` - Create event
- `GET /api/admin/contacts` - List contacts
- `POST /api/admin/communications/send` - Send message
- `GET /api/admin/documents` - List documents
- `POST /api/admin/documents/upload` - Upload document
- `GET /api/admin/audit` - Get audit log

---

## 📝 Next Steps

### Immediate (Phase 3)
1. Set up NextAuth.js
2. Create login page
3. Implement protected routes middleware
4. Build user management UI
5. Implement role-based access control

### Short Term (Phase 4)
1. Build CMS interfaces for carousel, news, sponsors
2. Implement file upload handling
3. Add rich text editor
4. Build media library

### Medium Term (Phase 5-6)
1. Complete event builder
2. Implement reminders system
3. Build contacts management
4. Create message center
5. Set up email sending

### Long Term (Phase 7-8)
1. Document repository with versioning
2. Required docs tracker
3. Audit log system
4. Final UX polish
5. Performance optimization
6. SEO enhancements

---

## 📚 Key Documentation Files

- `README.md` - Main project documentation
- `SETUP.md` - Quick start guide
- `PROJECT_STRUCTURE.md` - Detailed structure
- `DATABASE_SETUP_COMPLETE.md` - Database setup reference
- `PHASE2_COMPLETE.md` - Phase 2 completion details
- `CONTENT_REFERENCE.md` - Content from existing site
- `PROJECT_STATUS.md` - This file

---

## 🎨 Design System Reference

### Colors
- **Primary:** `#1E3A8A` (Dark blue)
- **Accent Red:** `#DC2626`
- **Accent Orange:** `#EA580C`
- **Accent Yellow:** `#FBBF24`
- **Accent Green:** `#16A34A`
- **Accent Olive:** `#84CC16`

### Typography
- **Font:** Inter (system fallback)
- **Style:** Swiss - clean, minimal, lots of white space

### Components
All components in `packages/ui/src/components/` - see component files for props and usage.

---

## 🔐 Security Considerations (To Implement)

- [ ] Password hashing (bcrypt)
- [ ] Rate limiting on API routes
- [ ] CSRF protection
- [ ] Input sanitization
- [ ] File upload validation
- [ ] SQL injection prevention (Prisma handles this)
- [ ] XSS prevention
- [ ] Secure session management
- [ ] Environment variable protection

---

## 🧪 Testing (Future)

- [ ] Unit tests for components
- [ ] Integration tests for API routes
- [ ] E2E tests for critical flows
- [ ] Accessibility testing
- [ ] Performance testing

---

## 📦 Deployment Checklist (Future)

- [ ] Environment variables configured
- [ ] Database migrations run
- [ ] File storage configured (S3/Cloudinary)
- [ ] Email service configured
- [ ] Domain DNS configured
- [ ] SSL certificate
- [ ] CDN setup (if needed)
- [ ] Monitoring/logging setup
- [ ] Backup strategy

---

## 💡 Notes for Next Session

1. **Database:** Running in Docker on port 5433. Container name: `kzn-postgres`
2. **Credentials:** postgres/postgres (change in production)
3. **Admin Routes:** Currently accessible without auth - needs Phase 3
4. **File Uploads:** Not yet implemented - needs upload handling
5. **Email:** Not configured - needs email service integration
6. **Domain:** Configured for kznyouthchoir.com in metadata

---

**End of Project Status Document**






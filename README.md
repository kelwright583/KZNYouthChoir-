# KZN Youth Choir - Website & Admin System

A premium mobile-first PWA for the KZN Youth Choir public website and comprehensive admin system for content management, communications, and document control.

## Project Structure

```
├── apps/
│   ├── public-site/     # Public-facing website
│   └── admin/           # Admin CMS and management system
├── packages/
│   └── ui/              # Shared UI components and design system
└── packages/
    └── db/              # Shared database schema and Prisma client
```

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL + Prisma ORM
- **Authentication**: NextAuth.js
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Monorepo**: Turborepo + pnpm workspaces

## Local Setup

### Prerequisites

- Node.js 18+ 
- pnpm 8+ (install with `npm install -g pnpm`)
- PostgreSQL 14+

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd KZNYouthChoir
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Set up environment variables:
   
   Create `packages/db/.env`:
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/kzn_choir?schema=public"
   ```
   
   Create `apps/public-site/.env.local`:
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/kzn_choir?schema=public"
   NEXT_PUBLIC_API_URL="http://localhost:3001/api"
   ```
   
   Create `apps/admin/.env.local`:
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/kzn_choir?schema=public"
   NEXTAUTH_SECRET="your-secret-here-generate-with-openssl-rand-base64-32"
   NEXTAUTH_URL="http://localhost:3001"
   ```

4. Set up the database:
   ```bash
   cd packages/db
   pnpm db:generate
   pnpm db:migrate
   pnpm db:seed
   ```

5. Run development servers:
   ```bash
   pnpm dev
   ```

   This will start:
   - Public site: http://localhost:3000
   - Admin system: http://localhost:3001

## Environment Variables

### Public Site (`apps/public-site/.env.local`)
```
DATABASE_URL="postgresql://user:password@localhost:5432/kzn_choir"
NEXT_PUBLIC_API_URL="http://localhost:3001/api"
```

### Admin (`apps/admin/.env.local`)
```
DATABASE_URL="postgresql://user:password@localhost:5432/kzn_choir"
NEXTAUTH_SECRET="your-secret-here"
NEXTAUTH_URL="http://localhost:3001"
```

## Development Workflow

- `pnpm dev` - Start all apps in development mode
- `pnpm build` - Build all apps for production
- `pnpm lint` - Run linting across all packages
- `pnpm type-check` - Run TypeScript type checking

## Project Phases

- ✅ Phase 0: Repo + Foundations
- ✅ Phase 1: Branding & Design System
- ⏳ Phase 2: Public Site (Static Shell + Dynamic Modules)
- ⏳ Phase 3: Admin Auth + Roles
- ⏳ Phase 4: Admin CMS Modules
- ⏳ Phase 5: Events & Reminders
- ⏳ Phase 6: Contacts, Groups & Communications
- ⏳ Phase 7: Document Control
- ⏳ Phase 8: Audit Log + Polishing


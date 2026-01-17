# Setup Instructions for Testing

## Prerequisites

✅ Dependencies installed
✅ Prisma client generated
✅ UI package built

## Database Setup

You need to set up a PostgreSQL database before running the application.

### Option 1: Local PostgreSQL

1. Install PostgreSQL (if not already installed)
2. Create a database:
   ```sql
   CREATE DATABASE kzn_choir;
   ```

3. Create `.env` file in `packages/db/`:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/kzn_choir?schema=public"
   ```

4. Create `.env.local` file in `apps/public-site/`:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/kzn_choir?schema=public"
   NEXT_PUBLIC_API_URL="http://localhost:3000"
   ```

5. Run migrations:
   ```bash
   cd packages/db
   pnpm db:migrate
   pnpm db:seed
   ```

### Option 2: Use SQLite for Quick Testing (Temporary)

If you want to test quickly without PostgreSQL, you can temporarily modify the Prisma schema:

1. In `packages/db/prisma/schema.prisma`, change:
   ```prisma
   datasource db {
     provider = "sqlite"
     url      = env("DATABASE_URL")
   }
   ```

2. Set DATABASE_URL to:
   ```env
   DATABASE_URL="file:./dev.db"
   ```

3. Then run migrations and seed.

## Running the Application

From the root directory:

```bash
pnpm dev
```

This will start:
- Public site: http://localhost:3000
- Admin dashboard: http://localhost:3000/admin/dashboard

## Testing Without Database

The UI components and pages will work, but:
- API routes will fail without database connection
- Dynamic content (carousel, events, news) won't load
- Static pages (About, Contact form UI) will work fine

## Next Steps

1. Set up database connection (see above)
2. Run migrations and seed data
3. Start dev server: `pnpm dev`
4. Visit http://localhost:3000 to see the site






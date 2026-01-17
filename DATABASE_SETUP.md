# PostgreSQL Database Setup Guide

## Step 1: Install PostgreSQL (if not already installed)

### Windows:
1. Download PostgreSQL from: https://www.postgresql.org/download/windows/
2. Run the installer
3. Remember the password you set for the `postgres` user
4. Default port is 5432

### Alternative: Use Docker
```bash
docker run --name kzn-postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=kzn_choir -p 5432:5432 -d postgres:14
```

## Step 2: Update Database Connection

The `.env` files have been created with default values. Update them if your PostgreSQL setup is different:

### `packages/db/.env`
```env
DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@localhost:5432/kzn_choir?schema=public"
```

### `apps/public-site/.env.local`
```env
DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@localhost:5432/kzn_choir?schema=public"
NEXT_PUBLIC_API_URL="http://localhost:3000"
```

**Replace `YOUR_PASSWORD` with your actual PostgreSQL password.**

## Step 3: Create the Database

Open PostgreSQL command line or pgAdmin and run:

```sql
CREATE DATABASE kzn_choir;
```

Or via command line:
```bash
psql -U postgres -c "CREATE DATABASE kzn_choir;"
```

## Step 4: Run Migrations and Seed

From the project root:

```bash
cd packages/db
pnpm db:migrate
pnpm db:seed
```

## Step 5: Verify Setup

The database should now be set up with:
- All tables created
- Sample data seeded (admin users, carousel slides, events, news, sponsors)

## Troubleshooting

### Connection refused
- Make sure PostgreSQL service is running
- Check if port 5432 is correct
- Verify username/password

### Database doesn't exist
- Create it manually: `CREATE DATABASE kzn_choir;`

### Migration errors
- Make sure database exists
- Check DATABASE_URL is correct
- Try: `pnpm db:push` instead of `db:migrate` for development






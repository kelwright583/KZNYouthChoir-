# PostgreSQL Setup Options

## Current Situation
It appears PostgreSQL installation might be incomplete or corrupted. The setup wizard appearing suggests the installation needs to be completed or fixed.

## Option 1: Complete PostgreSQL Installation (Recommended)

### Step 1: Run the Setup Wizard
1. When the PostgreSQL setup wizard appears, follow these steps:
   - **Installation Directory**: Use default (`C:\Program Files\PostgreSQL\16`)
   - **Data Directory**: Use default (`C:\Program Files\PostgreSQL\16\data`)
   - **Password**: **IMPORTANT** - Choose a password and **write it down**!
     - This is the password for the `postgres` superuser
     - You'll need this for the database connection
   - **Port**: Use default (5432)
   - **Locale**: Use default (usually matches your system)

### Step 2: Complete Installation
- Let the wizard finish completely
- Make sure all components are installed
- Don't skip any steps

### Step 3: Verify Installation
After installation completes, verify:
```powershell
# Check service
Get-Service -Name "*postgres*"

# Check if psql works
& "C:\Program Files\PostgreSQL\16\bin\psql.exe" --version
```

## Option 2: Fresh PostgreSQL Installation

If the current installation is corrupted, do a fresh install:

### Step 1: Uninstall Current Installation
1. Go to Control Panel > Programs and Features
2. Find "PostgreSQL 16" (or your version)
3. Uninstall it
4. Restart your computer

### Step 2: Download and Install
1. Download PostgreSQL 16 from: https://www.postgresql.org/download/windows/
2. Run the installer
3. **Important**: During installation:
   - Choose "PostgreSQL Server" component
   - Choose "pgAdmin 4" component (for GUI)
   - **Set a password for postgres user** - WRITE IT DOWN!
   - Use default port 5432
   - Complete all installation steps

### Step 3: Test Installation
```powershell
# Check service is running
Get-Service postgresql-x64-16

# Test connection (use the password you set)
& "C:\Program Files\PostgreSQL\16\bin\psql.exe" -U postgres -h localhost
```

## Option 3: Use Docker (If You Have Docker)

If you have Docker Desktop installed, this is the easiest option:

### Step 1: Run PostgreSQL Container
```powershell
docker run --name kzn-postgres `
  -e POSTGRES_PASSWORD=postgres `
  -e POSTGRES_DB=kzn_choir `
  -p 5432:5432 `
  -d postgres:16
```

### Step 2: Update .env Files
The connection string will be:
```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/kzn_choir?schema=public"
```

### Step 3: Verify
```powershell
docker ps
# Should show kzn-postgres container running
```

## Option 4: Use SQLite for Quick Testing (Temporary)

If you just want to test the application quickly, we can temporarily use SQLite:

### Step 1: Modify Prisma Schema
Change `packages/db/prisma/schema.prisma`:
```prisma
datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}
```

### Step 2: Update .env Files
```env
DATABASE_URL="file:./dev.db"
```

### Step 3: Run Migrations
```powershell
cd packages/db
pnpm db:push
pnpm db:seed
```

**Note**: SQLite has limitations and isn't recommended for production, but it's fine for testing.

## Recommended Next Steps

1. **Try Option 1 first** - Complete the setup wizard that's appearing
   - Make sure to note the password you set
   - Complete all installation steps

2. **If that doesn't work**, try Option 2 - Fresh installation

3. **If you have Docker**, Option 3 is the quickest

4. **For quick testing only**, Option 4 (SQLite) works but has limitations

## After PostgreSQL is Working

Once PostgreSQL is properly installed and you have the password:

1. Run the test script:
   ```powershell
   .\test-postgres-connection.ps1
   ```

2. Or manually update .env files with your password

3. Create the database:
   ```sql
   CREATE DATABASE kzn_choir;
   ```

4. Run migrations:
   ```powershell
   cd packages/db
   pnpm db:push
   pnpm db:seed
   ```

## Need Help?

Let me know which option you'd like to proceed with, and I can guide you through it step by step!






# Quick Database Setup

## Option A: Use the Setup Script (Recommended)

Run the PowerShell script:

```powershell
.\setup-database.ps1
```

This will:
1. Check if PostgreSQL is running
2. Ask for your database credentials
3. Create the .env files
4. Create the database
5. Run migrations and seed data

## Option B: Manual Setup

### 1. Update .env Files

The .env files have been created with default values. **You MUST update them with your actual PostgreSQL credentials:**

**`packages/db/.env`:**
```env
DATABASE_URL="postgresql://YOUR_USERNAME:YOUR_PASSWORD@localhost:5432/kzn_choir?schema=public"
```

**`apps/public-site/.env.local`:**
```env
DATABASE_URL="postgresql://YOUR_USERNAME:YOUR_PASSWORD@localhost:5432/kzn_choir?schema=public"
NEXT_PUBLIC_API_URL="http://localhost:3000"
```

### 2. Create the Database

Using pgAdmin or psql:

```sql
CREATE DATABASE kzn_choir;
```

Or via command line:
```bash
psql -U postgres -c "CREATE DATABASE kzn_choir;"
```

### 3. Run Migrations and Seed

```bash
cd packages/db
pnpm db:push
pnpm db:seed
```

### 4. Start the Application

```bash
# From project root
pnpm dev
```

Then visit: http://localhost:3000

## Troubleshooting

### "Authentication failed"
- Check your PostgreSQL username and password
- Update the .env files with correct credentials
- Default PostgreSQL user is usually `postgres`

### "Database does not exist"
- Create it: `CREATE DATABASE kzn_choir;`

### "Connection refused"
- Make sure PostgreSQL service is running
- Check if port 5432 is correct
- Verify PostgreSQL is installed

### Can't find psql command
- Add PostgreSQL bin directory to your PATH
- Or use pgAdmin GUI instead






# How to Find Your PostgreSQL Password

## Current Status
✅ PostgreSQL is installed and running (PostgreSQL 16)
✅ PostgreSQL is accessible on port 5432
❌ Default password "postgres" doesn't work
❌ Empty password doesn't work

## Method 1: Check pgAdmin (Easiest)

1. **Open pgAdmin**
   - Press `Win` key and search for "pgAdmin"
   - Or look in Start Menu > PostgreSQL 16 > pgAdmin 4

2. **Check Saved Connections**
   - In pgAdmin, look at the left panel
   - Find "Servers" > "PostgreSQL 16" (or similar)
   - Right-click on it and select "Properties"
   - Look at the "Connection" tab - your password might be saved there

3. **Try Connecting**
   - If you see a saved connection, try connecting
   - pgAdmin might prompt you for the password
   - If it connects, you'll know the password works

## Method 2: Try Manual Connection

Open PowerShell and try connecting manually:

```powershell
& "C:\Program Files\PostgreSQL\16\bin\psql.exe" -U postgres -h localhost
```

This will prompt you for a password. Try:
- The password you set during PostgreSQL installation
- Common passwords you might have used
- Check if you wrote it down somewhere

## Method 3: Check Windows Credential Manager

1. Press `Win + R`
2. Type: `control /name Microsoft.CredentialManager`
3. Click "Windows Credentials"
4. Look for entries containing "PostgreSQL" or "postgres"
5. Click on them to reveal saved passwords

## Method 4: Reset Password (If You Forgot)

If you can't remember the password, you can reset it:

### Step 1: Find pg_hba.conf
The file is usually located at:
```
C:\Program Files\PostgreSQL\16\data\pg_hba.conf
```

### Step 2: Edit pg_hba.conf
1. Open it as Administrator (right-click > Run as administrator)
2. Find the line that looks like:
   ```
   host    all             all             127.0.0.1/32            md5
   ```
3. Temporarily change `md5` to `trust`:
   ```
   host    all             all             127.0.0.1/32            trust
   ```

### Step 3: Restart PostgreSQL Service
```powershell
Restart-Service postgresql-x64-16
```

### Step 4: Connect Without Password
```powershell
& "C:\Program Files\PostgreSQL\16\bin\psql.exe" -U postgres -h localhost
```

### Step 5: Change Password
Once connected, run:
```sql
ALTER USER postgres WITH PASSWORD 'your_new_password';
\q
```

### Step 6: Restore pg_hba.conf
1. Change `trust` back to `md5` in pg_hba.conf
2. Restart PostgreSQL service again

## Method 5: Check Installation Notes

- Check if you saved the password during installation
- Look for any documentation or notes you created
- Check if you used a password manager

## Once You Have the Password

Update these files with your actual password:

**`packages/db/.env`:**
```env
DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@localhost:5432/kzn_choir?schema=public"
```

**`apps/public-site/.env.local`:**
```env
DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@localhost:5432/kzn_choir?schema=public"
NEXT_PUBLIC_API_URL="http://localhost:3000"
```

Then create the database and run migrations:
```powershell
# Connect to PostgreSQL
& "C:\Program Files\PostgreSQL\16\bin\psql.exe" -U postgres -h localhost

# Create database (in psql prompt)
CREATE DATABASE kzn_choir;
\q

# Run migrations
cd packages\db
pnpm db:push
pnpm db:seed
```

## Quick Test Script

I can create a simple test script that prompts you for the password. Would you like me to do that?


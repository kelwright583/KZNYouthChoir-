# Database Setup Script for KZN Youth Choir
# This script helps you set up the PostgreSQL database

Write-Host "=== KZN Youth Choir Database Setup ===" -ForegroundColor Cyan
Write-Host ""

# Check if PostgreSQL is accessible
Write-Host "Step 1: Checking PostgreSQL connection..." -ForegroundColor Yellow
$pgTest = Test-NetConnection -ComputerName localhost -Port 5432 -WarningAction SilentlyContinue
if (-not $pgTest.TcpTestSucceeded) {
    Write-Host "ERROR: Cannot connect to PostgreSQL on port 5432" -ForegroundColor Red
    Write-Host "Please make sure PostgreSQL is installed and running." -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Install PostgreSQL from: https://www.postgresql.org/download/windows/" -ForegroundColor Cyan
    exit 1
}

Write-Host "✓ PostgreSQL is accessible on port 5432" -ForegroundColor Green
Write-Host ""

# Get database credentials
Write-Host "Step 2: Database Configuration" -ForegroundColor Yellow
$dbUser = Read-Host "Enter PostgreSQL username (default: postgres)"
if ([string]::IsNullOrWhiteSpace($dbUser)) { $dbUser = "postgres" }

$dbPassword = Read-Host "Enter PostgreSQL password" -AsSecureString
$dbPasswordPlain = [Runtime.InteropServices.Marshal]::PtrToStringAuto([Runtime.InteropServices.Marshal]::SecureStringToBSTR($dbPassword))

$dbName = Read-Host "Enter database name (default: kzn_choir)"
if ([string]::IsNullOrWhiteSpace($dbName)) { $dbName = "kzn_choir" }

$dbPort = Read-Host "Enter PostgreSQL port (default: 5432)"
if ([string]::IsNullOrWhiteSpace($dbPort)) { $dbPort = "5432" }

# Create connection string
$connectionString = "postgresql://${dbUser}:${dbPasswordPlain}@localhost:${dbPort}/${dbName}?schema=public"

Write-Host ""
Write-Host "Step 3: Creating .env files..." -ForegroundColor Yellow

# Create packages/db/.env
$dbEnvPath = "packages\db\.env"
$dbEnvContent = "DATABASE_URL=`"$connectionString`""
Set-Content -Path $dbEnvPath -Value $dbEnvContent
Write-Host "✓ Created $dbEnvPath" -ForegroundColor Green

# Create apps/public-site/.env.local
$publicEnvPath = "apps\public-site\.env.local"
$publicEnvContent = @(
    "DATABASE_URL=`"$connectionString`"",
    "NEXT_PUBLIC_API_URL=`"http://localhost:3000`""
)
Set-Content -Path $publicEnvPath -Value $publicEnvContent
Write-Host "✓ Created $publicEnvPath" -ForegroundColor Green

Write-Host ""
Write-Host "Step 4: Creating database..." -ForegroundColor Yellow

# Try to create database using psql if available
$psqlPath = Get-Command psql -ErrorAction SilentlyContinue
if ($psqlPath) {
    $env:PGPASSWORD = $dbPasswordPlain
    $createDbCmd = "CREATE DATABASE $dbName;"
    $result = & psql -U $dbUser -h localhost -p $dbPort -c $createDbCmd 2>&1
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✓ Database '$dbName' created successfully" -ForegroundColor Green
    } else {
        Write-Host "⚠ Could not create database automatically. Please create it manually:" -ForegroundColor Yellow
        Write-Host "  Run: CREATE DATABASE $dbName;" -ForegroundColor Cyan
        Write-Host "  Or use pgAdmin to create the database" -ForegroundColor Cyan
    }
    Remove-Item Env:\PGPASSWORD
} else {
    Write-Host "⚠ psql not found in PATH. Please create the database manually:" -ForegroundColor Yellow
    Write-Host "  Run: CREATE DATABASE $dbName;" -ForegroundColor Cyan
    Write-Host "  Or use pgAdmin to create the database" -ForegroundColor Cyan
}

Write-Host ""
Write-Host "Step 5: Running database migrations..." -ForegroundColor Yellow
Write-Host ""

# Run migrations
Set-Location packages\db
pnpm db:push

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✓ Database schema created successfully" -ForegroundColor Green
    Write-Host ""
    Write-Host "Step 6: Seeding database..." -ForegroundColor Yellow
    pnpm db:seed
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host ""
        Write-Host "=== Setup Complete! ===" -ForegroundColor Green
        Write-Host ""
        Write-Host "Database is ready. You can now:" -ForegroundColor Cyan
        Write-Host "  1. Start the dev server: pnpm dev" -ForegroundColor White
        Write-Host "  2. Visit http://localhost:3000" -ForegroundColor White
        Write-Host ""
    } else {
        Write-Host ""
        Write-Host "⚠ Seeding failed, but database is set up" -ForegroundColor Yellow
        Write-Host "You can run 'pnpm db:seed' manually later" -ForegroundColor Cyan
    }
} else {
    Write-Host ""
    Write-Host "⚠ Migration failed. Please check:" -ForegroundColor Yellow
    Write-Host "  1. Database exists: CREATE DATABASE $dbName;" -ForegroundColor Cyan
    Write-Host "  2. Credentials are correct in .env files" -ForegroundColor Cyan
    Write-Host "  3. PostgreSQL service is running" -ForegroundColor Cyan
}

Set-Location ..\..






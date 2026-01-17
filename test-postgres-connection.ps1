# Simple PostgreSQL Connection Tester
Write-Host "=== PostgreSQL Connection Tester ===" -ForegroundColor Cyan
Write-Host ""

$psqlPath = "C:\Program Files\PostgreSQL\16\bin\psql.exe"

if (-not (Test-Path $psqlPath)) {
    Write-Host "Error: psql.exe not found at $psqlPath" -ForegroundColor Red
    exit 1
}

Write-Host "PostgreSQL is installed at: $psqlPath" -ForegroundColor Green
Write-Host ""

# Prompt for credentials
Write-Host "Enter your PostgreSQL credentials:" -ForegroundColor Yellow
$username = Read-Host "Username (default: postgres)"
if ([string]::IsNullOrWhiteSpace($username)) { $username = "postgres" }

$securePassword = Read-Host "Password" -AsSecureString
$password = [Runtime.InteropServices.Marshal]::PtrToStringAuto([Runtime.InteropServices.Marshal]::SecureStringToBSTR($securePassword))

Write-Host ""
Write-Host "Testing connection..." -ForegroundColor Yellow

# Set password and test
$env:PGPASSWORD = $password
$result = & $psqlPath -U $username -h localhost -p 5432 -c "SELECT version();" 2>&1

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "SUCCESS! Connection works!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Your credentials:" -ForegroundColor Cyan
    Write-Host "  Username: $username" -ForegroundColor White
    Write-Host "  Password: (hidden)" -ForegroundColor White
    Write-Host ""
    Write-Host "Updating .env files..." -ForegroundColor Yellow
    
    # Update .env files
    $connectionString = "postgresql://${username}:${password}@localhost:5432/kzn_choir?schema=public"
    
    Set-Content -Path "packages\db\.env" -Value "DATABASE_URL=`"$connectionString`""
    Write-Host "  Updated packages\db\.env" -ForegroundColor Green
    
    $publicEnvContent = @(
        "DATABASE_URL=`"$connectionString`"",
        "NEXT_PUBLIC_API_URL=`"http://localhost:3000`""
    )
    Set-Content -Path "apps\public-site\.env.local" -Value $publicEnvContent
    Write-Host "  Updated apps\public-site\.env.local" -ForegroundColor Green
    
    Write-Host ""
    Write-Host "Next steps:" -ForegroundColor Cyan
    Write-Host "  1. Create database: CREATE DATABASE kzn_choir;" -ForegroundColor White
    Write-Host "  2. Run: cd packages\db && pnpm db:push && pnpm db:seed" -ForegroundColor White
    
} else {
    Write-Host ""
    Write-Host "FAILED! Connection failed." -ForegroundColor Red
    Write-Host ""
    Write-Host "Error details:" -ForegroundColor Yellow
    Write-Host $result -ForegroundColor Red
    Write-Host ""
    Write-Host "Please check:" -ForegroundColor Yellow
    Write-Host "  - Username is correct" -ForegroundColor White
    Write-Host "  - Password is correct" -ForegroundColor White
    Write-Host "  - PostgreSQL service is running" -ForegroundColor White
}

Remove-Item Env:\PGPASSWORD -ErrorAction SilentlyContinue






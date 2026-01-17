# PostgreSQL Credentials Checker
Write-Host "=== PostgreSQL Credentials Checker ===" -ForegroundColor Cyan
Write-Host ""

# Check PostgreSQL service
$service = Get-Service -Name "*postgres*" -ErrorAction SilentlyContinue
if ($service) {
    Write-Host "✓ PostgreSQL service found: $($service.Name)" -ForegroundColor Green
    Write-Host "  Status: $($service.Status)" -ForegroundColor Green
} else {
    Write-Host "✗ PostgreSQL service not found" -ForegroundColor Red
    exit 1
}

Write-Host ""

# Find psql
$psqlPath = "$env:ProgramFiles\PostgreSQL\16\bin\psql.exe"
if (Test-Path $psqlPath) {
    Write-Host "✓ Found psql at: $psqlPath" -ForegroundColor Green
} else {
    Write-Host "⚠ psql.exe not found. You can use pgAdmin instead." -ForegroundColor Yellow
    $psqlPath = $null
}

Write-Host ""
Write-Host "=== Testing Common Credentials ===" -ForegroundColor Cyan
Write-Host ""

if ($psqlPath) {
    # Test postgres/postgres
    Write-Host "Testing: postgres/postgres..." -ForegroundColor Yellow -NoNewline
    $env:PGPASSWORD = "postgres"
    $result = & $psqlPath -U postgres -h localhost -p 5432 -c "SELECT version();" 2>&1
    if ($LASTEXITCODE -eq 0) {
        Write-Host " ✓ SUCCESS!" -ForegroundColor Green
        Write-Host ""
        Write-Host "=== Working Credentials ===" -ForegroundColor Green
        Write-Host "  Username: postgres" -ForegroundColor White
        Write-Host "  Password: postgres" -ForegroundColor White
        Remove-Item Env:\PGPASSWORD -ErrorAction SilentlyContinue
        exit 0
    }
    Remove-Item Env:\PGPASSWORD -ErrorAction SilentlyContinue
    
    # Test postgres with empty password
    Write-Host "Testing: postgres (no password)..." -ForegroundColor Yellow -NoNewline
    $env:PGPASSWORD = ""
    $result = & $psqlPath -U postgres -h localhost -p 5432 -c "SELECT version();" 2>&1
    if ($LASTEXITCODE -eq 0) {
        Write-Host " ✓ SUCCESS!" -ForegroundColor Green
        Write-Host ""
        Write-Host "=== Working Credentials ===" -ForegroundColor Green
        Write-Host "  Username: postgres" -ForegroundColor White
        Write-Host "  Password: (empty)" -ForegroundColor White
        Remove-Item Env:\PGPASSWORD -ErrorAction SilentlyContinue
        exit 0
    }
    Remove-Item Env:\PGPASSWORD -ErrorAction SilentlyContinue
    
    Write-Host " ✗ Failed" -ForegroundColor Red
}

Write-Host ""
Write-Host "=== No Default Credentials Worked ===" -ForegroundColor Yellow
Write-Host ""
Write-Host "Try these options to find your password:" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. Check pgAdmin:" -ForegroundColor Yellow
Write-Host "   - Open pgAdmin from Start Menu" -ForegroundColor White
Write-Host "   - Look at Servers > PostgreSQL 16 > Properties" -ForegroundColor White
Write-Host ""
Write-Host "2. Try manual connection:" -ForegroundColor Yellow
if ($psqlPath) {
    Write-Host "   $psqlPath -U postgres -h localhost" -ForegroundColor Cyan
} else {
    Write-Host "   psql -U postgres -h localhost" -ForegroundColor Cyan
}
Write-Host "   (It will prompt for password)" -ForegroundColor White
Write-Host ""
Write-Host "3. Check Windows Credential Manager:" -ForegroundColor Yellow
Write-Host "   - Press Win+R, type: control /name Microsoft.CredentialManager" -ForegroundColor White
Write-Host "   - Look for PostgreSQL entries" -ForegroundColor White
Write-Host ""

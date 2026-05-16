# WhatsApp AI Assistant - Start Frontend & Backend (PowerShell Version)
# Right-click on this file and select "Run with PowerShell" OR
# Open PowerShell in this directory and run: .\start-app.ps1

# Allow script execution
Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process -Force

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "WhatsApp AI Assistant - Development Server" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Get the script directory
$scriptDir = Split-Path -Parent -Path $MyInvocation.MyCommand.Definition
Set-Location $scriptDir

# Check if node_modules exist in both directories
if (-not (Test-Path "apps/api/node_modules")) {
    Write-Host "Installing backend dependencies..." -ForegroundColor Yellow
    Push-Location "apps/api"
    npm install
    Pop-Location
}

if (-not (Test-Path "apps/web/node_modules")) {
    Write-Host "Installing frontend dependencies..." -ForegroundColor Yellow
    Push-Location "apps/web"
    npm install
    Pop-Location
}

Write-Host ""
Write-Host "Starting servers..." -ForegroundColor Green
Write-Host ""

# Start Backend
Write-Host "🚀 Starting Backend (http://localhost:3001)..." -ForegroundColor Green
$backendProcess = Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$scriptDir/apps/api'; npm run start:dev" -PassThru -WindowStyle Normal -Title "WhatsApp AI Assistant - Backend"

# Wait for backend to start
Start-Sleep -Seconds 2

# Start Frontend
Write-Host "🚀 Starting Frontend (http://localhost:3000)..." -ForegroundColor Green
$frontendProcess = Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$scriptDir/apps/web'; npm run dev" -PassThru -WindowStyle Normal -Title "WhatsApp AI Assistant - Frontend"

Write-Host ""
Write-Host "✅ Both servers are starting!" -ForegroundColor Green
Write-Host ""
Write-Host "Frontend: http://localhost:3000" -ForegroundColor Cyan
Write-Host "Backend: http://localhost:3001" -ForegroundColor Cyan
Write-Host ""
Write-Host "Press Ctrl+C to stop the servers" -ForegroundColor Yellow
Write-Host ""

# Wait for user to stop
Wait-Process -Id $backendProcess, $frontendProcess -Any

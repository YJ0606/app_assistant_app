@echo off
REM WhatsApp AI Assistant - Start Frontend & Backend
REM This script starts both the web frontend and API backend

title WhatsApp AI Assistant - Startup
color 0A

echo.
echo ==========================================
echo WhatsApp AI Assistant - Development Server
echo ==========================================
echo.
echo Starting Frontend (Port 3000)...
echo Starting Backend (Port 3001)...
echo.
echo Two windows will open - DO NOT CLOSE THIS WINDOW
echo.

REM Get the current directory
cd /d "%~dp0"

REM Start Backend in a new window
start "WhatsApp AI Assistant - Backend" cmd /k "cd apps\api && npm run start:dev"

REM Wait a moment for backend to start
timeout /t 2 /nobreak

REM Start Frontend in a new window
start "WhatsApp AI Assistant - Frontend" cmd /k "cd apps\web && npm run dev"

REM Keep this window open
echo.
echo Both servers are starting...
echo Frontend: http://localhost:3000
echo Backend: http://localhost:3001
echo.
echo Close any window to stop that server
echo.
pause

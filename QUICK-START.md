# Quick Start Guide - WhatsApp AI Assistant

## 🚀 Starting the Application

You have two options to automatically start both the frontend and backend:

### Option 1: Batch File (Easiest - Recommended)
**For Windows users - Just double-click:**
- `start-app.bat`

This will:
✅ Open 2 command windows automatically
✅ Start the Backend API server (Port 3001)
✅ Start the Frontend Web server (Port 3000)
✅ Display URLs to access the app

### Option 2: PowerShell Script
**Right-click on `start-app.ps1` → "Run with PowerShell"**

Or open PowerShell in this directory and run:
```powershell
.\start-app.ps1
```

This will:
✅ Auto-install dependencies if missing
✅ Start both servers in separate windows
✅ More robust error handling

---

## 📍 Access the Application

Once both servers are running:

- **Frontend Web App:** http://localhost:3000
- **Backend API:** http://localhost:3001
- **API Documentation:** http://localhost:3001/api/docs (Swagger)

---

## ⚙️ Stopping the Application

Simply close either terminal window to stop that server, or press `Ctrl+C` in any terminal.

---

## 📋 Manual Start (If Scripts Don't Work)

**Terminal 1 - Start Backend:**
```bash
cd apps/api
npm install
npm run start:dev
```

**Terminal 2 - Start Frontend:**
```bash
cd apps/web
npm install
npm run dev
```

---

## 🔧 Troubleshooting

**"npm is not recognized"**
- Install Node.js from https://nodejs.org/

**Port already in use**
- Close any existing instances on ports 3000 or 3001
- Or modify the scripts to use different ports

**"Permission denied" (PowerShell)**
- Run PowerShell as Administrator
- Or use the batch file instead

---

## 📁 Project Structure

```
whatsapp-ai-assistant/
├── apps/
│   ├── api/          # NestJS Backend
│   └── web/          # Next.js Frontend
├── start-app.bat     # Quick start for Windows (RECOMMENDED)
└── start-app.ps1     # PowerShell alternative
```

---

Happy coding! 🎉

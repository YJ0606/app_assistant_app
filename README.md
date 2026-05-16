# 🟢 WaAI – WhatsApp AI Assistant Platform

A full-stack, multi-tenant SaaS platform that turns WhatsApp into a powerful AI-driven business tool. Automate FAQs, bookings, orders, and more.

---

## 🚀 Quick Start (Localhost)

### Prerequisites
- Node.js ≥ 18
- PostgreSQL
- Redis

### 1. Clone & Install

```bash
git clone <repo-url>
cd whatsapp-ai-assistant

# Install web dependencies
cd apps/web && npm install && cd ../..

# Install API dependencies
cd apps/api && npm install && cd ../..
```

### 2. Configure Environment

```bash
# Web
cp apps/web/.env.local.example apps/web/.env.local
# Edit: NEXTAUTH_SECRET, NEXT_PUBLIC_API_URL

# API
cp apps/api/.env.example apps/api/.env
# Edit: DATABASE_URL, JWT_SECRET, etc.
```

### 3. Database Setup

```bash
cd apps/api
npx prisma migrate dev --name init
npm run prisma:seed
```

### 4. Run Dev Servers

```bash
# Terminal 1 – Web (http://localhost:3000)
cd apps/web && npm run dev

# Terminal 2 – API (http://localhost:4000)
cd apps/api && npm run start:dev
```

### 5. Open in Browser

- **Web App:** http://localhost:3000
- **API Docs (Swagger):** http://localhost:4000/api/docs
- **Prisma Studio:** `npx prisma studio` (in apps/api)

---

## 📁 Project Structure

```
whatsapp-ai-assistant/
├── apps/
│   ├── web/          # Next.js 14 frontend
│   └── api/          # NestJS backend
├── packages/
│   ├── types/        # Shared TypeScript types
│   ├── ui/           # Shared UI components
│   └── utils/        # Shared utilities
├── infra/            # Docker, Nginx, CI configs
└── docs/             # Architecture & API docs
```

---

## 🧩 Key Features

| Feature | Status |
|---|---|
| Multi-tenant auth (JWT) | ✅ |
| WhatsApp Business API | ✅ |
| AI-powered FAQ bot | ✅ |
| Booking & appointment system | ✅ |
| WhatsApp catalog & ordering | ✅ |
| Human handoff | ✅ |
| Automation flows | ✅ |
| Analytics dashboard | ✅ |
| Razorpay billing | ✅ |
| Team & role management | ✅ |
| Audit logs | ✅ |

---

## 🛠 Tech Stack

- **Frontend:** Next.js 14, TypeScript, Tailwind CSS, TanStack Query, Zustand
- **Backend:** NestJS, Prisma, PostgreSQL, Redis, Bull
- **WhatsApp:** Meta Cloud API (Graph API v20.0)
- **Payments:** Razorpay
- **Email:** Resend
- **Storage:** Cloudinary

---

## 📝 Notes for Localhost Testing

- The web app works fully **without the API** – all pages render with mock/static data
- To test with real API: start the NestJS backend and configure `.env.local`
- WhatsApp webhooks require a public URL (use [ngrok](https://ngrok.com) for local testing)

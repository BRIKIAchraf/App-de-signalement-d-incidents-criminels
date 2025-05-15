# 🧑‍💻 Full-Stack Job Platform

A powerful, modern, and scalable Job Board SaaS platform built with cutting-edge tools like **Next.js 15**, **TailwindCSS**, **Prisma**, **Auth.js**, **Inngest**, **Arcjet**, and **Stripe**.

---

## 🚀 Tech Stack

- **Next.js 15** – Full-stack React Framework
- **TailwindCSS** + **shadcn/ui** – Styling and UI components
- **Prisma ORM** – Database toolkit
- **Neon** – Serverless Postgres DB
- **Auth.js** – Authentication (Google, GitHub)
- **Stripe** – Payment processing
- **Uploadthing** – File uploads (logo, CV, etc.)
- **Inngest** – Background jobs (summary emails)
- **Arcjet** – Application security
- **Zod** – Schema validation
- **Vercel** – Hosting and deployment

---

## ⚙️ Features

### ✅ Authentication & Roles

- OAuth Login via GitHub and Google
- Organization onboarding with logo
- Job Seeker onboarding with CV upload

### 🛠️ Job Posting

- Rich text editor (Tiptap)
- Image upload for posts
- Custom salary range slider
- Listing durations: 30, 60, 90 days
- Expiration job (Inngest)

### 💳 Stripe Integration

- Payment for job posting
- Webhook support
- Auto-activation and expiration

### 📬 Inngest Workflows

- Automated summary emails every 2 days for 30 days

### 🔐 Security

- Arcjet integration for:
  - XSS protection
  - SQL injection protection
  - Rate limiting (higher for auth users)

### 🧭 Job Discovery

- Filtering and pagination
- Favorites route
- Detailed job post pages with "Apply" button
- Index with suspense & SSR optimization

### ✏️ CRUD Operations

- Create, Edit, Delete job posts
- Dashboard with post management

### 📱 Responsive UI

- Fully responsive on all devices
- Accessible and fast

---

## 📦 Installation

```bash
git clone https://github.com/YOUR-USERNAME/job-marshal.git
cd Job-search-app


# Install dependencies
pnpm install
```

---

## ✏️ Environment Variables

Create a `.env` file:

```bash
cp .env.example .env
```

Fill in your credentials in `.env`:

```env
# Database
DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/db

# Auth.js
AUTH_SECRET=your_auth_secret
AUTH_GITHUB_ID=your_github_client_id
AUTH_GITHUB_SECRET=your_github_client_secret
AUTH_GOOGLE_ID=your_google_client_id
AUTH_GOOGLE_SECRET=your_google_client_secret

# Stripe
STRIPE_SECRET_KEY=sk_test_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx

# Uploadthing
UPLOADTHING_SECRET=ut_xxx
UPLOADTHING_APP_ID=your_app_id

# Arcjet
NEXT_PUBLIC_ARCJET_TOKEN=arcjet_pub_xxx
```

---

## 🧱 Prisma Setup

```bash
# Push schema to DB
npx prisma db push

# Generate client
npx prisma generate
```

---

## 🧪 Dev Server

```bash
pnpm dev
```

Then open [http://localhost:3000](http://localhost:3000)

---

## 📂 Project Structure

```
/app
  /api
  /auth
  /dashboard
  /jobs
  /favorites
  /onboarding
  /components
  /utils
  /styles

/prisma
  schema.prisma

/lib
  auth.ts
  inngest.ts
  arcjet.ts
  stripe.ts
```

---

## ☁️ Deployment

### Deploy to Vercel:

```bash
vercel
```

---

## 🧩 Credits

Built following the [Jan Marshal 2025 tutorial](https://github.com/BRIKIAchraf/Job-search-app.git)

### Technologies:

- [Next.js](https://nextjs.org)
- [TailwindCSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Auth.js](https://authjs.dev)
- [Inngest](https://inngest.com)
- [Arcjet](https://arcjet.com)
- [Stripe](https://stripe.com)
- [Uploadthing](https://uploadthing.com)
- [Neon](https://neon.tech)
- [Zod](https://zod.dev)

---

## 📄 License

MIT © 2025 BRIKI Achraf / Contributors

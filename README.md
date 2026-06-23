# BELVO Platform

BELVO is a premium agency website and growth platform built from the supplied brand brief, BELVO logo, and agency services PDF.

## What Is Included

- Next.js 15 App Router with React, TypeScript, Tailwind, and responsive route structure
- Three.js / React Three Fiber hero scene with particle depth and reflective BELVO-inspired ribbon geometry
- Service galaxy, AI engine, case studies, testimonials, CTA wormhole, and admin dashboard preview
- Searchable services explorer powered by the PDF-derived catalog
- Contact and booking forms with validation and API responses
- Express API skeleton with Helmet, rate limiting, and Zod validation
- Prisma PostgreSQL schema for users, leads, projects, bookings, and testimonials
- SEO metadata, Open Graph tags, robots, sitemap, and organization schema

## Local Development

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Backend API

The Next API routes are available at:

- `POST /api/leads`
- `POST /api/bookings`

The standalone Express API can run on port 4000:

```bash
pnpm server:dev
```

## Environment

Copy `.env.example` to `.env.local` and fill the production values for Supabase, PostgreSQL, Redis, OpenAI, analytics, and monitoring.

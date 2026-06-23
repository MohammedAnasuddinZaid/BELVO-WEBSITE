# BELVO Deployment Guide

## Recommended Production Stack

- Vercel for the Next.js frontend
- Supabase for PostgreSQL, auth, storage, and row-level security
- Prisma migrations for schema management
- Redis for rate limiting, queues, and automation jobs
- Cloudflare for DNS, CDN, WAF, and bot protection
- Sentry, Datadog, GA4, Mixpanel, and Hotjar for monitoring and analytics

## Steps

1. Create a Supabase project and set `DATABASE_URL`, `SUPABASE_URL`, and keys.
2. Run `pnpm prisma:generate`.
3. Run `pnpm prisma:migrate` against the production database.
4. Add Vercel environment variables from `.env.example`.
5. Deploy the app with `pnpm build`.
6. Configure domain, HTTPS, security headers, and analytics IDs.
7. Connect booking submissions to Calendly, Google Meet, or Zoom through a webhook worker.

## Performance Notes

- Use compressed GLB assets once the final BELVO model is exported from Blender, Spline, or Tripo.
- Serve textures in WebP or AVIF.
- Add DRACO compression for production 3D assets.
- Keep reduced-motion behavior enabled for accessibility.

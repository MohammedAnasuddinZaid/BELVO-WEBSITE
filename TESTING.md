# BELVO Testing Strategy

## Frontend

- Build check: `pnpm build`
- Route smoke checks: home, services, industries, work, technology, about, careers, contact, book, admin
- Visual checks: desktop and mobile screenshots, hero canvas nonblank, no text overlap, readable forms
- Accessibility checks: keyboard navigation, visible focus, contrast, reduced motion

## API

- Validate `POST /api/leads` rejects malformed emails and short messages
- Validate `POST /api/bookings` requires date, time, and meeting type
- Verify rate limits on the Express API

## Data

- Prisma schema migration check against a disposable PostgreSQL database
- Seed test leads with low, medium, and high scores
- Confirm dashboard aggregates match database totals

## Production Monitoring

- Sentry for frontend and API exceptions
- Datadog logs for API latency, lead volume, and booking failures
- GA4 and Mixpanel for conversion funnels
- Uptime checks on `/`, `/api/leads`, and `/health`

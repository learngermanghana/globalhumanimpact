# 247 PRINT HOUSE Website

A production-ready Next.js (App Router) marketing website for **247 PRINT HOUSE**, a professional printing and production company in Accra, Ghana. The project is optimized for deployment on Vercel and designed to drive quote requests, calls, emails, and WhatsApp enquiries.

## Public Business Details Used

- **Brand Name:** 247 PRINT HOUSE
- **Display Name:** 247 PRINT HOUSE
- **Phone (display):** 0558213040
- **Phone (international / tel):** +233558213040
- **Email:** printproduction247@gmail.com
- **Address:** George Walker Bush Highway, Awoshie Waterworks, Accra, Ghana
- **Store ID:** vRDr1e4KMpPKo53i9VHufJQRVcS2
- **Workspace slug:** vRDr1e4KMpPKo53i9VHufJQRVcS2

## Required Environment Variables

Create a `.env.local` file from `.env.example`:

```bash
cp .env.example .env.local
```

Environment variables:

- `SEDIFEX_API_BASE_URL=`
- `SEDIFEX_STORE_ID=vRDr1e4KMpPKo53i9VHufJQRVcS2`
- `SEDIFEX_INTEGRATION_KEY=`

> Sedifex integration is optional. The website works fully with static fallback data when Sedifex variables are not provided.

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000).

## Production Build

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Push this repository to GitHub/GitLab/Bitbucket.
2. Import project in [Vercel](https://vercel.com/new).
3. Set environment variables in Vercel project settings if using Sedifex integration.
4. Deploy.

## How to Update Company Contact Information

Update `lib/constants.ts`:

- `BUSINESS.phoneDisplay`
- `BUSINESS.phoneIntl`
- `BUSINESS.email`
- `BUSINESS.address`
- `BUSINESS.whatsapp`

These values automatically update across navigation, CTA blocks, contact strip, forms, and footer.

## How to Expand Services Later

Add or update entries in `SERVICES` inside `lib/constants.ts` with:

- service id
- title
- short and long descriptions
- use cases
- icon
- image URL

The Home and Services pages will update automatically from the same source.

## Privacy & Data Exposure Rule

This project is designed to expose only safe public business data.

**Never expose internal billing/admin metadata** on public pages, including:

- billing
- currentPeriodEnd
- graceEndsAt
- lastChargeReference
- paystackCustomerCode
- paystackEmailToken
- paystackPlanCode
- paystackSubscriptionCode
- planKey
- paymentStatus
- contractStatus
- trialEndsAt
- ownerUid
- any status metadata meant only for internal admin use

## Scripts

- `npm run dev` – start dev server
- `npm run build` – build for production
- `npm run start` – run production server
- `npm run lint` – lint
- `npm run type-check` – TypeScript checks
- `npm run test` – lightweight smoke tests

# kireeye landing page

Marketing site for **kireeye**, a mobile app for booking hotels, event halls, apartments, and tickets.

## Stack

- Next.js (App Router) + JavaScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Setup

```bash
npm install
cp .env.example .env.local
```

Edit `.env.local` when you have a production URL or analytics IDs.

## Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Where to edit copy

All visitor-facing text, store links, emails, and analytics IDs live in [`src/lib/content.js`](src/lib/content.js).

Placeholder screenshots live in `public/images/` (WebP). Replace those files with real app captures using the same names, or update the paths in `content.js`.

## Deploy on Vercel

1. Push this repo to GitHub.
2. Import the project in [Vercel](https://vercel.com/new).
3. Set environment variables:
   - `NEXT_PUBLIC_SITE_URL` — your production domain, e.g. `https://kireeye.com`
   - `NEXT_PUBLIC_GA_ID` — optional Google Analytics measurement ID
   - `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` — optional Plausible domain
   - `NEXT_PUBLIC_META_PIXEL_ID` — optional Meta Pixel ID
4. Deploy. Sitemap is at `/sitemap.xml` and robots at `/robots.txt`.

Add a consent banner before turning on Google Analytics or Meta Pixel in production. Plausible is cookieless and only loads if its domain is set.

## Email TODO

`/api/contact` validates submissions and logs them. Wire an email provider in that route before launch.

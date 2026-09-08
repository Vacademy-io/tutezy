# Tutezy landing (tutezy.ai)

Static Next.js 15 site for **Tutezy by Vacademy**. Deploys to Cloudflare Pages exactly like vacademy.io.

## Run

    pnpm install
    pnpm dev        # http://localhost:3000
    pnpm build      # static export in ./out

## Deploy (Cloudflare Pages, Git integration)

- Framework preset: **Next.js (Static HTML Export)**
- Build command: `pnpm build`
- Output directory: `out`
- Node version: 20+ (set `NODE_VERSION=20` in the Pages env if needed)
- Custom domain: `tutezy.ai` (+ `www` redirect)

No environment variables. Demo requests post from the browser to the Vacademy CRM
(`src/lib/leadSubmit.ts`, campaign "Tutezy Landing – Book a demo") and offer WhatsApp.

## Content

- Pricing numbers live in `src/components/Pricing.tsx` and the FAQ in `src/components/FaqFooter.tsx`.
- The animated lesson is `src/components/LessonDemo.tsx` (pure CSS/state, no video).
- Illustration `public/hero-art.png` and OG image `public/og.png`.

## Guard

`postcss.config.mjs` must stay tiny (see the npm-worm note in the platform repo). Check before every push:

    wc -c postcss.config.mjs   # < 150 bytes

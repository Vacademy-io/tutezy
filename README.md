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

## SEO / AI-answer pages

- Every public page is registered in `src/lib/site.ts`; that registry drives `sitemap.xml`,
  `robots.txt` (`src/app/{sitemap,robots}.ts`), the footer, the home "Read before you decide"
  section and breadcrumbs. Add a page = add a registry entry + a `page.tsx`.
- Guide pages use `PageShell` (`src/components/PageShell.tsx`): metadata, BreadcrumbList +
  Article JSON-LD, optional FAQPage block, related links, CTA. Audience pages use
  `AudiencePage`, comparisons use `ComparePage`.
- `public/llms.txt` is hand-written; `out/llms-full.txt` is generated from the exported HTML by
  `scripts/llms-full.mjs` as part of `pnpm build`.
- After deploy: submit `https://tutezy.ai/sitemap.xml` in Google Search Console and Bing
  Webmaster Tools, and check Cloudflare → Security → Bots that "Block AI bots" is OFF.

import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Nav } from "./Sections";
import { Footer } from "./FaqFooter";
import { bookHref, findPage, HOURS_COPY, PAGES, SITE, SITE_NAME, type PageGroup } from "@/lib/site";
import { JsonLd } from "./JsonLd";

export { JsonLd };

/** Metadata for a registry page: title, description, canonical, OG. */
export function pageMetadata(path: string): Metadata {
  const p = findPage(path);
  if (!p) throw new Error(`Unknown page ${path}`);
  const url = `${SITE}${p.path}`;
  return {
    title: p.title,
    description: p.description,
    alternates: { canonical: url },
    openGraph: { type: "article", url, siteName: SITE_NAME, title: p.title, description: p.description, images: [{ url: "/og.png", width: 1200, height: 630, alt: SITE_NAME }] },
    twitter: { card: "summary_large_image", title: p.title, description: p.description, images: ["/og.png"] },
  };
}


export type FaqItem = [question: string, answer: string];

/** FAQ list with FAQPage structured data — the block AI answer engines quote most. */
export function FaqBlock({ items, title = "Frequently asked questions", schema = true }: { items: FaqItem[]; title?: string; schema?: boolean }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  };
  const id = `faq-${title.toLowerCase().replace(/[^a-z]+/g, "-")}`;
  return (
    <section className="mt-12" aria-labelledby={id}>
      {schema && <JsonLd data={data} />}
      <h2 id={id}>{title}</h2>
      <div className="mt-4 divide-y-2 divide-ink border-y-2 border-ink">
        {items.map(([q, a]) => (
          <details key={q} className="group py-4">
            <summary className="flex cursor-pointer items-center justify-between gap-4 font-display text-lg font-bold">
              {q}
              <span className="grid size-7 shrink-0 place-items-center rounded-full border-2 border-ink bg-white transition group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 max-w-prose text-ink-700">{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

/** A boxed key-facts panel: the summary a reader (or a model) can lift in one go. */
export function KeyFacts({ title = "In short", items }: { title?: string; items: ReactNode[] }) {
  return (
    <aside className="card-hard not-prose my-8 bg-sticky p-5 sm:p-6">
      <p className="font-display text-xs font-bold uppercase tracking-wide text-ink-700">{title}</p>
      <ul className="mt-2 space-y-1.5 text-[15px] font-semibold text-ink">
        {items.map((it, i) => (
          <li key={i} className="flex gap-2">
            <span className="text-signal">✦</span>
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export function CtaBand({ topic }: { topic?: string }) {
  const tryHref = topic ? `https://learner.vacademy.io/try?topic=${encodeURIComponent(topic)}` : "https://learner.vacademy.io/try";
  return (
    <div className="card-hard not-prose mt-14 flex flex-wrap items-center justify-between gap-6 bg-ink p-7 text-paper">
      <div className="max-w-xl">
        <p className="font-display text-xs font-bold uppercase tracking-wide text-signal">See it teach</p>
        <p className="mt-2 font-display text-2xl font-bold">Take a 10-minute lesson, then book a demo on your own content.</p>
        <p className="mt-2 text-sm text-ink-300">No sign-up for the lesson. The call is 20 minutes and we convert one of your chapters live. {HOURS_COPY}</p>
      </div>
      <div className="flex flex-wrap gap-3">
        <a href={tryHref} data-track="try_lesson" data-track-label="cta-band" className="btn-hard rounded-full bg-sticky px-5 py-2.5 font-display font-bold text-ink">Try a lesson →</a>
        <a href={bookHref()} data-track="book_call" data-track-label="cta-band" className="btn-hard rounded-full bg-signal px-5 py-2.5 font-display font-bold text-white">Book a call</a>
      </div>
    </div>
  );
}

/** Links to sibling pages in the same group, so every page hands the crawler onward. */
export function Related({ group, except, title }: { group: PageGroup; except?: string; title: string }) {
  const pages = PAGES.filter((p) => p.group === group && p.path !== except && p.path !== "/compare/");
  return (
    <nav className="not-prose mt-12" aria-label={title}>
      <h2 className="text-2xl font-extrabold">{title}</h2>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {pages.map((p) => (
          <li key={p.path}>
            <a href={p.path} className="card-hard block p-4 transition hover:bg-paper-2">
              <span className="font-display font-bold">{p.label}</span>
              <span className="mt-1 block text-sm text-ink-700">{p.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

interface ShellProps {
  path: string;
  eyebrow?: string;
  /** Visible H1; defaults to the registry title. */
  heading?: string;
  lede: string;
  /** Parent crumb for nested pages, e.g. ["/compare/", "Compare"]. */
  parent?: [string, string];
  children: ReactNode;
  faq?: FaqItem[];
  demoTopic?: string;
  related?: { group: PageGroup; title: string };
  /** ISO date for the Article schema. */
  updated?: string;
}

export function PageShell({ path, eyebrow, heading, lede, parent, children, faq, demoTopic, related, updated = "2026-09-11" }: ShellProps) {
  const page = findPage(path);
  if (!page) throw new Error(`Unknown page ${path}`);
  const crumbs: Array<[string, string]> = [["/", "Home"], ...(parent ? [parent] : []), [page.path, page.label]];
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: crumbs.map(([href, name], i) => ({ "@type": "ListItem", position: i + 1, name, item: `${SITE}${href}` })),
      },
      {
        "@type": "Article",
        headline: heading ?? page.title,
        description: page.description,
        url: `${SITE}${page.path}`,
        dateModified: updated,
        datePublished: "2026-09-11",
        inLanguage: "en",
        author: { "@type": "Organization", name: "Vacademy", url: "https://vacademy.io" },
        publisher: { "@type": "Organization", name: SITE_NAME, url: SITE, logo: { "@type": "ImageObject", url: `${SITE}/logo.png` } },
        about: { "@type": "SoftwareApplication", name: "Tutezy", url: SITE },
        isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE },
      },
    ],
  };
  return (
    <>
      <JsonLd data={jsonLd} />
      <Nav />
      <main>
        <header className="dot-paper border-b-2 border-ink">
          <div className="wrap max-w-5xl py-10 lg:py-14">
            <nav aria-label="Breadcrumb" className="font-display text-xs font-semibold text-ink-500">
              <ol className="flex flex-wrap items-center gap-1.5">
                {crumbs.map(([href, name], i) => (
                  <li key={href} className="flex items-center gap-1.5">
                    {i > 0 && <span aria-hidden="true">›</span>}
                    {i === crumbs.length - 1 ? <span aria-current="page" className="text-ink">{name}</span> : <a href={href} className="hover:text-ink">{name}</a>}
                  </li>
                ))}
              </ol>
            </nav>
            {eyebrow && <p className="mt-5 inline-block rounded-full border-2 border-ink bg-white px-3 py-1 font-display text-xs font-bold uppercase tracking-wide">{eyebrow}</p>}
            <h1 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">{heading ?? page.title}</h1>
            <p className="mt-4 max-w-3xl text-lg text-ink-700">{lede}</p>
          </div>
        </header>
        <article className="wrap max-w-5xl py-10 lg:py-14">
          <div className="prose-t">{children}</div>
          {faq && <div className="prose-t"><FaqBlock items={faq} /></div>}
          {related && <Related group={related.group} except={path} title={related.title} />}
          <CtaBand topic={demoTopic} />
        </article>
      </main>
      <Footer />
    </>
  );
}

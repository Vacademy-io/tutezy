import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Nav } from "./Sections";
import { Footer } from "./FaqFooter";
import { CtaBand, FaqBlock, JsonLd, KeyFacts, type FaqItem } from "./PageShell";
import { findPost, postPath, postsByDate, type Post } from "@/content/posts";
import { SITE, SITE_NAME } from "@/lib/site";

export { KeyFacts, type FaqItem };

const BLOG_NAME = "The Tutezy blog";
const AUTHOR = { "@type": "Organization", name: "Tutezy team at Vacademy", url: `${SITE}/about/` };

const fmtDate = (iso: string) => new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });

function mustFind(slug: string): Post {
  const p = findPost(slug);
  if (!p) throw new Error(`Unknown post ${slug} — add it to src/content/posts.ts`);
  return p;
}

/** Metadata for a registry post: title, description, keywords, canonical, article OG. */
export function postMetadata(slug: string): Metadata {
  const p = mustFind(slug);
  const url = `${SITE}${postPath(p.slug)}`;
  const image = { url: p.image, width: 1376, height: 768, alt: p.imageAlt };
  return {
    title: p.title,
    description: p.description,
    keywords: p.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      siteName: SITE_NAME,
      title: p.title,
      description: p.description,
      publishedTime: p.published,
      modifiedTime: p.updated ?? p.published,
      section: p.category,
      tags: p.keywords,
      images: [image],
    },
    twitter: { card: "summary_large_image", title: p.title, description: p.description, images: [p.image] },
  };
}

/** A boxed aside inside the article body. */
export function Callout({ title, tone = "note", children }: { title: string; tone?: "note" | "tip" | "warn"; children: ReactNode }) {
  const bg = tone === "tip" ? "bg-mint-100" : tone === "warn" ? "bg-signal-100" : "bg-sky";
  return (
    <aside className={`card-hard not-prose my-8 p-5 sm:p-6 ${bg}`}>
      <p className="font-display text-sm font-bold uppercase tracking-wide text-ink">{title}</p>
      <div className="mt-2 space-y-2 text-[15px] leading-relaxed text-ink-700 [&_a]:font-semibold [&_a]:text-ink [&_a]:underline [&_a]:decoration-signal [&_a]:decoration-2 [&_strong]:text-ink">{children}</div>
    </aside>
  );
}

/** Numbered step cards: a process a reader can follow (and a model can lift as a list). */
export function Steps({ items }: { items: Array<[title: string, body: ReactNode]> }) {
  return (
    <ol className="not-prose my-8 grid gap-4 sm:grid-cols-2">
      {items.map(([title, body], i) => (
        <li key={title} className="card-hard flex gap-4 bg-white p-5">
          <span className="grid size-9 shrink-0 place-items-center rounded-full border-2 border-ink bg-sticky font-display font-extrabold text-ink">{i + 1}</span>
          <div>
            <p className="font-display text-lg font-bold leading-snug text-ink">{title}</p>
            <div className="mt-1.5 text-[15px] leading-relaxed text-ink-700">{body}</div>
          </div>
        </li>
      ))}
    </ol>
  );
}

/** A figure wrapper for inline SVG/HTML diagrams, with a caption. */
export function Figure({ caption, children }: { caption: ReactNode; children: ReactNode }) {
  return (
    <figure className="not-prose my-8">
      {/* Diagrams keep a readable minimum width and scroll sideways on phones, like the tables. */}
      <div className="card-hard overflow-x-auto bg-white p-4 sm:p-6 [&_svg]:min-w-[34rem]">{children}</div>
      <figcaption className="mt-3 text-sm text-ink-500">{caption}</figcaption>
    </figure>
  );
}

/** The honest product section: clearly labelled, so the rest of the post reads as neutral guidance. */
export function WhereTutezyFits({ children }: { children: ReactNode }) {
  return (
    <section className="card-hard not-prose my-10 border-signal bg-white p-6 sm:p-7" aria-labelledby="where-tutezy-fits">
      <p className="font-display text-xs font-bold uppercase tracking-wide text-signal">Where Tutezy fits</p>
      <h2 id="where-tutezy-fits" className="mt-1 text-2xl font-extrabold">What we built for this</h2>
      <div className="mt-3 space-y-3 text-[16px] leading-relaxed text-ink-700 [&_a]:font-semibold [&_a]:text-ink [&_a]:underline [&_a]:decoration-signal [&_a]:decoration-2 [&_li]:ms-5 [&_li]:list-disc [&_strong]:text-ink">{children}</div>
    </section>
  );
}

/** Numbered sources at the end of a post. Only primary or reputable sources, each with a working link. */
export function Sources({ items }: { items: Array<[label: ReactNode, url: string]> }) {
  return (
    <section className="not-prose mt-12" aria-labelledby="sources">
      <h2 id="sources" className="text-2xl font-extrabold">Sources</h2>
      <ol className="mt-4 list-decimal space-y-2 ps-6 text-sm text-ink-700">
        {items.map(([label, url]) => (
          <li key={url}>
            {label}{" "}
            <a href={url} target="_blank" rel="noopener" className="break-all font-semibold text-ink underline decoration-signal decoration-2 underline-offset-2">
              {url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function PostCard({ post, eager = false }: { post: Post; eager?: boolean }) {
  return (
    <a href={postPath(post.slug)} className="card-hard group flex h-full flex-col overflow-hidden bg-white transition hover:-translate-y-0.5">
      <img src={post.image} alt={post.imageAlt} width={1376} height={768} loading={eager ? "eager" : "lazy"} decoding="async" className="aspect-[16/9] w-full border-b-2 border-ink object-cover" />
      <span className="flex flex-1 flex-col p-5">
        <span className="font-display text-xs font-bold uppercase tracking-wide text-signal">{post.category}</span>
        <span className="mt-2 font-display text-lg font-bold leading-snug text-ink group-hover:underline group-hover:decoration-signal group-hover:decoration-2">{post.title}</span>
        <span className="mt-2 line-clamp-3 text-sm text-ink-700">{post.description}</span>
        <span className="mt-auto pt-4 text-xs font-semibold text-ink-500">{post.readMinutes} min read</span>
      </span>
    </a>
  );
}

interface BlogShellProps {
  slug: string;
  /** Standfirst under the H1: the answer in two or three sentences. */
  lede: string;
  /** Three to five takeaways shown above the body. */
  takeaways: ReactNode[];
  /** Optional jump links: [h2 id, label]. Every id must exist on an <h2> in the body. */
  toc?: Array<[id: string, label: string]>;
  faq?: FaqItem[];
  /** Demo topic key for the "Try a lesson" button. */
  demoTopic?: string;
  /** Slugs to show as further reading; defaults to same-category posts, then newest. */
  related?: string[];
  children: ReactNode;
}

export function BlogShell({ slug, lede, takeaways, toc, faq, demoTopic, related, children }: BlogShellProps) {
  const post = mustFind(slug);
  const url = `${SITE}${postPath(post.slug)}`;
  const others = postsByDate().filter((p) => p.slug !== post.slug);
  const picked = related?.map(mustFind) ?? [...others.filter((p) => p.category === post.category), ...others.filter((p) => p.category !== post.category)];
  const more = picked.slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          ["/", "Home"],
          ["/blog/", "Blog"],
          [postPath(post.slug), post.title],
        ].map(([href, name], i) => ({ "@type": "ListItem", position: i + 1, name, item: `${SITE}${href}` })),
      },
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: post.title,
        description: post.description,
        url,
        mainEntityOfPage: url,
        image: { "@type": "ImageObject", url: `${SITE}${post.image}`, width: 1376, height: 768 },
        datePublished: post.published,
        dateModified: post.updated ?? post.published,
        articleSection: post.category,
        keywords: post.keywords.join(", "),
        inLanguage: "en-US",
        timeRequired: `PT${post.readMinutes}M`,
        author: AUTHOR,
        publisher: { "@type": "Organization", name: SITE_NAME, url: SITE, logo: { "@type": "ImageObject", url: `${SITE}/logo.png` } },
        isPartOf: { "@type": "Blog", name: BLOG_NAME, url: `${SITE}/blog/` },
        about: { "@type": "SoftwareApplication", name: "Tutezy", url: SITE },
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
                <li><a href="/" className="hover:text-ink">Home</a></li>
                <li aria-hidden="true">›</li>
                <li><a href="/blog/" className="hover:text-ink">Blog</a></li>
                <li aria-hidden="true">›</li>
                <li aria-current="page" className="text-ink">{post.category}</li>
              </ol>
            </nav>
            <p className="mt-5 inline-block rounded-full border-2 border-ink bg-white px-3 py-1 font-display text-xs font-bold uppercase tracking-wide">{post.category}</p>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">{post.title}</h1>
            <p className="mt-4 max-w-3xl text-lg text-ink-700">{lede}</p>
            <p className="mt-5 text-sm font-semibold text-ink-500">
              By the Tutezy team · <time dateTime={post.updated ?? post.published}>{post.updated ? `Updated ${fmtDate(post.updated)}` : fmtDate(post.published)}</time> · {post.readMinutes} min read
            </p>
          </div>
        </header>
        <article className="wrap max-w-5xl py-10 lg:py-14">
          <img src={post.image} alt={post.imageAlt} width={1376} height={768} fetchPriority="high" className="card-hard aspect-[16/9] w-full object-cover" />
          <div className="prose-t mt-10">
            <KeyFacts title="Key takeaways" items={takeaways} />
            {toc && toc.length > 0 && (
              <nav aria-label="In this article" className="not-prose my-8">
                <p className="font-display text-xs font-bold uppercase tracking-wide text-ink-500">In this article</p>
                <ol className="mt-3 space-y-1.5 border-s-2 border-ink ps-4 text-[15px]">
                  {toc.map(([id, label]) => (
                    <li key={id}><a href={`#${id}`} className="font-semibold text-ink-700 hover:text-ink hover:underline hover:decoration-signal hover:decoration-2">{label}</a></li>
                  ))}
                </ol>
              </nav>
            )}
            {children}
          </div>
          {faq && <div className="prose-t"><FaqBlock items={faq} /></div>}
          <nav className="not-prose mt-14" aria-label="More from the blog">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <h2 className="text-2xl font-extrabold">Keep reading</h2>
              <a href="/blog/" className="font-display text-sm font-bold underline decoration-signal decoration-2 underline-offset-4">All posts →</a>
            </div>
            <div className="mt-5 grid gap-5 md:grid-cols-3">
              {more.map((p) => <PostCard key={p.slug} post={p} />)}
            </div>
          </nav>
          <CtaBand topic={demoTopic} />
        </article>
      </main>
      <Footer />
    </>
  );
}

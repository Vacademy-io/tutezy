import { Nav } from "@/components/Sections";
import { Footer } from "@/components/FaqFooter";
import { CtaBand, JsonLd, pageMetadata } from "@/components/PageShell";
import { PostCard } from "@/components/BlogShell";
import { postPath, postsByDate, type PostCategory } from "@/content/posts";
import { SITE, SITE_NAME } from "@/lib/site";

const PATH = "/blog/";
export const metadata = pageMetadata(PATH);

const ORDER: PostCategory[] = ["Buyer's guide", "Course creators", "Exam prep", "Tutoring business", "Corporate training", "Learning science", "Trust & safety"];

export default function Page() {
  // Newest first; within a day, buyer-intent categories lead.
  const posts = postsByDate().sort((a, b) => b.published.localeCompare(a.published) || ORDER.indexOf(a.category) - ORDER.indexOf(b.category));
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}${PATH}` },
        ],
      },
      {
        "@type": "Blog",
        name: "The Tutezy blog",
        url: `${SITE}${PATH}`,
        description: "Guides on AI tutoring for schools, test-prep providers, course creators, tutoring businesses and L&D teams.",
        publisher: { "@type": "Organization", name: SITE_NAME, url: SITE, logo: { "@type": "ImageObject", url: `${SITE}/logo.png` } },
        blogPost: posts.map((p) => ({
          "@type": "BlogPosting",
          headline: p.title,
          url: `${SITE}${postPath(p.slug)}`,
          datePublished: p.published,
          image: `${SITE}${p.image}`,
          articleSection: p.category,
        })),
      },
    ],
  };
  return (
    <>
      <JsonLd data={jsonLd} />
      <Nav />
      <main>
        <header className="dot-paper border-b-2 border-ink">
          <div className="wrap py-10 lg:py-14">
            <nav aria-label="Breadcrumb" className="font-display text-xs font-semibold text-ink-500">
              <ol className="flex items-center gap-1.5">
                <li><a href="/" className="hover:text-ink">Home</a></li>
                <li aria-hidden="true">›</li>
                <li aria-current="page" className="text-ink">Blog</li>
              </ol>
            </nav>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">The Tutezy blog</h1>
            <p className="mt-4 max-w-3xl text-lg text-ink-700">
              Practical guides on AI tutoring for the people who run learning: course creators, test-prep and certification providers, tutoring businesses,
              schools and L&amp;D teams. What the research says, what things cost, and how to roll it out without losing what learners pay for.
            </p>
          </div>
        </header>
        <div className="wrap py-10 lg:py-14">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((p, i) => <PostCard key={p.slug} post={p} eager={i < 3} />)}
          </div>
          <CtaBand />
        </div>
      </main>
      <Footer />
    </>
  );
}

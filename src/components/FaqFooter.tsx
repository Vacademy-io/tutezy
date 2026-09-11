import Image from "next/image";
import { byGroup } from "@/lib/site";
import { JsonLd } from "./JsonLd";

const FAQ: Array<[string, string]> = [
  [
    "Does it replace our teachers?",
    "No. It multiplies them. Your teachers' content, name, voice and face teach every student one to one, while the teacher sees who is stuck where before the next live class.",
  ],
  [
    "What content works?",
    "PDFs (including scanned ones — we OCR them), recorded videos (we transcribe them), slides and presentations, and question banks. You see the credit cost before anything is converted.",
  ],
  [
    "Which languages?",
    "Lessons are taught in English and Hindi today, and a student can switch mid-lesson. More Indian languages are on the roadmap; ask on the demo.",
  ],
  [
    "How does pricing work?",
    "Prepaid credits. A live lesson costs ₹3 ($0.03) per student per minute, ₹5 ($0.05) with the animated avatar on. Voice cloning is ₹2,000 ($20) per voice and a custom avatar ₹10,000 ($100) per teacher, one time. There are no seat licences.",
  ],
  [
    "Is the teacher's likeness safe?",
    "Voice clones and avatars are created only with recorded consent, are private to your institute, and can be disabled at any time. Nobody else on the platform can pick them.",
  ],
  [
    "Do students need a new app?",
    "No. Tutezy runs inside the Vacademy learner app — web, Android and iOS — next to your courses, tests and live classes. If you are not on Vacademy yet, the demo covers onboarding.",
  ],
];

export function Faq() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  };
  return (
    <section id="faq" className="wrap max-w-5xl py-16 lg:py-24">
      <JsonLd data={data} />
      <h2 className="text-3xl font-extrabold sm:text-4xl">Questions institutes ask us</h2>
      <div className="mt-8 divide-y-2 divide-ink border-y-2 border-ink">
        {FAQ.map(([q, a]) => (
          <details key={q} className="group py-4">
            <summary className="flex cursor-pointer items-center justify-between gap-4 font-display text-lg font-bold">
              {q}
              <span className="grid size-7 shrink-0 place-items-center rounded-full border-2 border-ink bg-white transition group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 max-w-prose text-ink-700">{a}</p>
          </details>
        ))}
      </div>
      <p className="mt-6 text-sm text-ink-700">
        More in the <a href="/faq/" className="font-semibold underline decoration-signal decoration-2 underline-offset-2">full FAQ (30 questions)</a>.
      </p>
    </section>
  );
}

/** Home-page hand-off to the guide pages: the crawl path from the landing page to everything else. */
export function Guides() {
  const cols: Array<[string, ReturnType<typeof byGroup>]> = [
    ["Understand Tutezy", byGroup("product")],
    ["Tutezy for your kind of institute", byGroup("audience")],
    ["Compared with the alternatives", byGroup("compare")],
  ];
  return (
    <section id="guides" className="border-t-2 border-ink bg-white">
      <div className="wrap py-14 lg:py-20">
        <h2 className="text-3xl font-extrabold sm:text-4xl">Read before you decide</h2>
        <p className="mt-3 max-w-2xl text-ink-700">Plain-language pages on what Tutezy is, what it costs, how it works for your kind of institute, and where it is not the right tool.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {cols.map(([title, pages]) => (
            <div key={title} className="card-hard p-5">
              <h3 className="font-display text-lg font-bold">{title}</h3>
              <ul className="mt-3 space-y-2">
                {pages.map((p) => (
                  <li key={p.path}>
                    <a href={p.path} className="text-sm font-semibold text-ink-700 underline decoration-ink-100 decoration-2 underline-offset-4 hover:text-ink hover:decoration-signal">{p.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t-2 border-ink bg-ink text-paper">
      <div className="wrap flex flex-wrap items-center justify-between gap-6 py-10">
        <div>
          <Image src="/logo-full.png" alt="tutezy.ai — Personalized Learning | AI Live Classes" width={600} height={240} className="h-16 w-auto rounded-lg bg-white px-3 py-1" />
          <p className="mt-3 max-w-sm text-sm text-ink-300">A product of Vacademy — the education OS used by institutes for courses, tests, live classes and CRM.</p>
        </div>
        <div className="grid gap-8 text-sm sm:grid-cols-3">
          {([["Product", byGroup("product")], ["For", byGroup("audience")], ["Compare", byGroup("compare")]] as const).map(([title, pages]) => (
            <nav key={title} aria-label={`Footer: ${title}`}>
              <p className="font-display text-xs font-bold uppercase tracking-wide text-signal">{title}</p>
              <ul className="mt-2 space-y-1.5">
                {pages.map((p) => (
                  <li key={p.path}><a href={p.path} className="font-semibold text-ink-300 hover:text-paper">{p.label}</a></li>
                ))}
                {title === "Product" && (
                  <>
                    <li><a href="/#demo" className="font-semibold text-ink-300 hover:text-paper">Book a demo</a></li>
                    <li><a href="https://learner.vacademy.io/try" className="font-semibold text-ink-300 hover:text-paper">Try a 3-minute lesson</a></li>
                    <li><a href="https://vacademy.io" className="font-semibold text-ink-300 hover:text-paper">Vacademy</a></li>
                    <li><a href="https://vacademy.io/privacy-policy" className="font-semibold text-ink-300 hover:text-paper">Privacy</a></li>
                    <li><a href="/llms.txt" className="font-semibold text-ink-300 hover:text-paper">llms.txt</a></li>
                  </>
                )}
              </ul>
            </nav>
          ))}
        </div>
      </div>
      <p className="border-t border-ink-700 px-4 py-4 text-center text-xs text-ink-300">© {new Date().getFullYear()} Vacademy. Tutezy and the Tutezy logo are trademarks of Vacademy.</p>
    </footer>
  );
}

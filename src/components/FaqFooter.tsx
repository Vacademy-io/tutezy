import Image from "next/image";

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
  return (
    <section id="faq" className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:py-24">
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
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t-2 border-ink bg-ink text-paper">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-4 py-10 sm:px-6">
        <div>
          <Image src="/logo.png" alt="tutezy.ai" width={150} height={60} className="h-9 w-auto rounded-md bg-white p-1" />
          <p className="mt-3 max-w-sm text-sm text-ink-300">A product of Vacademy — the education OS used by institutes for courses, tests, live classes and CRM.</p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold" aria-label="Footer">
          <a href="#how" className="hover:text-signal">How it works</a>
          <a href="#pricing" className="hover:text-signal">Pricing</a>
          <a href="#demo" className="hover:text-signal">Book a demo</a>
          <a href="https://vacademy.io" className="hover:text-signal">Vacademy</a>
          <a href="https://vacademy.io/privacy-policy" className="hover:text-signal">Privacy</a>
        </nav>
      </div>
      <p className="border-t border-ink-700 px-4 py-4 text-center text-xs text-ink-300">© {new Date().getFullYear()} Vacademy. Tutezy and the Tutezy logo are trademarks of Vacademy.</p>
    </footer>
  );
}

"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { LessonDemo } from "./LessonDemo";
import { whatsappLink } from "@/lib/leadSubmit";

export const DEMO_HREF = "#demo";
export const TRY_HREF = "https://learner.vacademy.io/try";
const WA_TEXT = "Hi, I'd like a demo of Tutezy for my students.";

export function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    ["#how", "How it works"],
    ["#features", "Inside a lesson"],
    ["#usecases", "Use cases"],
    ["#create", "Setup"],
    ["#pricing", "Pricing"],
    ["#faq", "FAQ"],
  ];
  return (
    <header className="sticky top-0 z-40 border-b-2 border-ink bg-paper/95 backdrop-blur">
      <div className="wrap flex items-center gap-4 py-3">
        <a href="#top" className="flex items-center gap-2" aria-label="Tutezy home">
          <Image src="/logo.png" alt="tutezy.ai" width={520} height={150} className="h-10 w-auto sm:h-12" priority />
        </a>
        <span className="hidden rounded-full border border-ink px-2 py-0.5 font-display text-[11px] font-semibold text-ink-700 md:inline">by Vacademy</span>
        <nav className="ms-auto hidden items-center gap-6 md:flex" aria-label="Sections">
          {links.map(([href, label]) => (
            <a key={href} href={href} className="text-sm font-semibold text-ink-700 hover:text-ink">
              {label}
            </a>
          ))}
        </nav>
        <a href={DEMO_HREF} className="btn-hard ms-auto rounded-full bg-signal px-4 py-2 font-display text-sm font-bold text-white md:ms-4">
          Book a demo
        </a>
        <button type="button" className="rounded-md border-2 border-ink p-1.5 md:hidden" aria-label="Menu" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
          <span className="block h-0.5 w-5 bg-ink" />
          <span className="mt-1 block h-0.5 w-5 bg-ink" />
          <span className="mt-1 block h-0.5 w-5 bg-ink" />
        </button>
      </div>
      {open && (
        <nav className="border-t-2 border-ink bg-paper px-4 py-3 md:hidden" aria-label="Sections">
          {links.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)} className="block py-2 font-semibold text-ink-700">
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

export function Hero() {
  return (
    <section id="top" className="dot-paper">
      <div className="wrap grid items-center gap-10 py-14 lg:grid-cols-[1fr_1.1fr] lg:py-20">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-white px-3 py-1 font-display text-xs font-bold uppercase tracking-wide">
            <span className="size-2 rounded-full bg-mint" /> Personalised learning · AI live classes
          </p>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
            Every student gets a <span className="mark">live teacher</span>. Every minute.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-ink-700">
            Tutezy turns the content you already have into live whiteboard lessons: a teacher who speaks in
            <span className="font-semibold text-ink"> your voice and face</span>, asks, listens, corrects, and comes back to what each
            student found hard. In English and Hindi. Paid per minute, not per seat.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a href={DEMO_HREF} className="btn-hard rounded-full bg-signal px-6 py-3 font-display text-base font-bold text-white">
              Book a 20-minute demo
            </a>
            <a href={TRY_HREF} className="btn-hard rounded-full bg-sticky px-5 py-3 font-display text-base font-bold text-ink">
              Try a 3-minute lesson →
            </a>
            <a
              href={whatsappLink(WA_TEXT)}
              target="_blank"
              rel="noreferrer"
              className="btn-hard rounded-full bg-white px-5 py-3 font-display text-base font-bold text-ink"
            >
              WhatsApp us
            </a>
          </div>
          <p className="mt-6 inline-block rounded-md border-2 border-ink bg-white px-3 py-1.5 font-display text-sm font-bold">
            Your content <span className="text-signal">+</span> Tutezy AI <span className="text-signal">=</span> an interactive, personalised learning experience
          </p>
          <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-ink-700">
            <li>✓ Works with your videos, PDFs &amp; slides</li>
            <li>✓ Your teacher&apos;s voice &amp; avatar</li>
            <li>✓ Reports for every student</li>
          </ul>
        </div>
        <div className="relative">
          <span className="float absolute -start-3 -top-5 z-10 rotate-[-6deg] rounded-md bg-sticky px-3 py-1.5 font-chalk text-sm font-bold shadow-hard-sm" style={{ ["--tilt" as string]: "-6deg" }}>
            asks · listens · corrects
          </span>
          <LessonDemo />
          <span className="float absolute -bottom-4 -end-2 rotate-[4deg] rounded-md bg-mint px-3 py-1.5 font-chalk text-sm font-bold text-ink shadow-hard-sm" style={{ ["--tilt" as string]: "4deg" }}>
            ₹3 / min · no seats
          </span>
        </div>
      </div>
    </section>
  );
}

export function Ticker() {
  const items = [
    "Whiteboard lessons compiled from your content",
    "Voice lessons in English & हिंदी",
    "Checks, hints & remediation",
    "Weak-concept revisits",
    "Notes written as the lesson goes",
    "Your teacher's cloned voice",
    "Animated teacher avatar",
    "Insights & CSV export",
    "Pay per minute",
  ];
  const row = [...items, ...items];
  return (
    <div className="ticker overflow-hidden border-y-2 border-ink bg-ink py-3 text-paper" aria-hidden="true">
      <div className="ticker-track gap-8 font-display text-sm font-semibold uppercase tracking-wide">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-8">
            {t} <span className="text-signal">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Bring what you already teach with",
      body: "Slides, PDFs (even scanned), recorded videos, question banks. Tutezy reads them — transcribing videos and OCR-ing scans — and shows the credit cost before it converts anything.",
      art: (
        <div className="flex flex-wrap gap-2">
          {["PDF", "Video", "Slides", "Quiz"].map((k, i) => (
            <span key={k} className={`rounded-lg border-2 border-ink px-3 py-2 font-display text-sm font-bold ${["bg-sky", "bg-lilac", "bg-sticky", "bg-mint-100"][i]}`}>
              {k}
            </span>
          ))}
        </div>
      ),
    },
    {
      n: "02",
      title: "Tutezy compiles a lesson plan per slide",
      body: "Boards, examples, diagrams, quick checks, hints and a recap — reviewed for quality before a student ever sees it. Your teacher name, voice, pace and strictness are set once per institute or per course.",
      art: (
        <ol className="space-y-1 font-chalk text-sm">
          {["Board 1 · Define", "Board 2 · Example + diagram", "Check · MCQ", "Board 3 · Recap"].map((s, i) => (
            <li key={s} className="flex items-center gap-2">
              <span className={`size-4 rounded-full border-2 border-ink ${i < 2 ? "bg-mint" : "bg-white"}`} /> {s}
            </li>
          ))}
        </ol>
      ),
    },
    {
      n: "03",
      title: "Students learn live, one to one",
      body: "The teacher writes on the board while speaking, asks a question, waits, nudges if the student goes quiet, corrects with a hint, and comes back later to the concepts they got wrong. Every lesson ends with notes and a summary.",
      art: (
        <div className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-full bg-lilac font-display font-bold">R</span>
          <span className="speak-bars inline-flex items-end gap-1"><span /><span /><span /><span /></span>
          <span className="rounded-full bg-ink px-3 py-1 font-display text-xs font-bold text-paper">Live · 12:04</span>
        </div>
      ),
    },
  ];
  return (
    <section id="how" className="wrap py-16 lg:py-24">
      <h2 className="text-3xl font-extrabold sm:text-4xl">From your content to a live class, in three steps</h2>
      <p className="mt-3 max-w-2xl text-ink-700">No re-authoring. No scripts to write. The lesson comes from what your teachers already made.</p>
      <ol className="mt-10 grid gap-6 md:grid-cols-3">
        {steps.map((s) => (
          <li key={s.n} className="card-hard flex flex-col p-6">
            <span className="font-display text-4xl font-extrabold text-signal">{s.n}</span>
            <h3 className="mt-2 text-xl font-bold">{s.title}</h3>
            <p className="mt-2 flex-1 text-sm text-ink-700">{s.body}</p>
            <div className="mt-5 rounded-xl border-2 border-dashed border-ink-100 bg-paper p-4">{s.art}</div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function Features() {
  const cards = [
    {
      title: "A whiteboard that writes as the teacher speaks",
      body: "Headings, bullets, tables, diagrams and worked examples appear sentence by sentence — the way a good teacher paces a board, not a slide dump.",
      tone: "bg-sky",
      art: (
        <div className="grid-paper rounded-lg border-2 border-ink p-3 font-chalk">
          <p className="text-lg font-bold">Photosynthesis</p>
          <p>● Light + CO₂ + H₂O → sugar + O₂</p>
          <p className="text-ink-500">● Happens in the chloroplast…</p>
        </div>
      ),
    },
    {
      title: "Asks, waits, and actually listens",
      body: "MCQs, short answers and predict-then-reveal prompts. Students answer by voice or text. Silence for a minute? The teacher nudges. Wrong? A hint first, then the answer kept on the board.",
      tone: "bg-signal-100",
      art: (
        <div className="space-y-1.5 text-sm">
          <p className="rounded-xl bg-white px-3 py-1.5">Which gas do plants take in?</p>
          <p className="ms-8 rounded-xl bg-ink px-3 py-1.5 text-paper">Oxygen?</p>
          <p className="rounded-xl border-2 border-mint bg-mint-100 px-3 py-1.5">Close — look at the arrow. What goes <em>in</em>?</p>
        </div>
      ),
    },
    {
      title: "Comes back to what was hard",
      body: "Every miss is tracked per concept. Before moving on, the teacher revisits the weak ones with a fresh question, and the next lesson opens with a recap written by the model.",
      tone: "bg-lilac",
      art: (
        <ul className="space-y-1 text-sm">
          <li className="flex items-center gap-2"><span className="size-2.5 rounded-full bg-mint" /> Light reaction</li>
          <li className="flex items-center gap-2"><span className="size-2.5 rounded-full bg-signal" /> Gas exchange <span className="ms-auto rounded-full bg-white px-2 text-xs font-bold">revisit</span></li>
          <li className="flex items-center gap-2"><span className="size-2.5 rounded-full bg-mint" /> Chloroplast</li>
        </ul>
      ),
    },
    {
      title: "Your teacher's voice and face",
      body: "Clone a teacher's voice from a 15-second sample. Add an animated, lip-synced avatar built from one photo — or pick a stock one. Consent-gated and private to your institute.",
      tone: "bg-mint-100",
      art: (
        <div className="flex items-center gap-3">
          <span className="grid size-12 place-items-center rounded-2xl border-2 border-ink bg-white font-display text-lg font-bold">R</span>
          <div className="text-sm">
            <p className="font-bold">Riya Ma&apos;am</p>
            <p className="text-ink-500">Cloned voice · Avatar on</p>
          </div>
          <span className="speak-bars ms-auto inline-flex items-end gap-1"><span /><span /><span /><span /></span>
        </div>
      ),
    },
    {
      title: "Students set the pace and the language",
      body: "Slower, slow, medium, fast — and a switch between English and Hindi mid-lesson. The board and the voice follow. Notes are written live and kept.",
      tone: "bg-sticky",
      art: (
        <div className="flex flex-wrap gap-1.5 font-display text-xs font-bold">
          {["Slower", "Slow", "Medium ✓", "Fast"].map((p) => (
            <span key={p} className={`rounded-full border-2 border-ink px-2.5 py-1 ${p.endsWith("✓") ? "bg-ink text-paper" : "bg-white"}`}>{p}</span>
          ))}
          <span className="rounded-full border-2 border-ink bg-white px-2.5 py-1">English</span>
          <span className="rounded-full border-2 border-ink bg-white px-2.5 py-1">हिंदी</span>
        </div>
      ),
    },
    {
      title: "Insights your academic head can act on",
      body: "Per-student concept mastery, weak spots across a batch, minutes taught, and a CSV export for the whole institute. Every credit spent is itemised.",
      tone: "bg-paper-2",
      art: (
        <div className="flex items-end gap-1.5">
          {[40, 65, 30, 80, 55, 90, 70].map((h, i) => (
            <span key={i} className={`w-5 rounded-t-md border-2 border-b-0 border-ink ${i === 2 ? "bg-signal" : "bg-mint"}`} style={{ height: `${h * 0.7}px` }} />
          ))}
        </div>
      ),
    },
  ];
  return (
    <section id="features" className="border-y-2 border-ink bg-white">
      <div className="wrap py-16 lg:py-24">
        <h2 className="text-3xl font-extrabold sm:text-4xl">Inside a Tutezy lesson</h2>
        <p className="mt-3 max-w-2xl text-ink-700">Everything a good one-to-one tutor does, done for every student at once.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <article key={c.title} className={`card-hard flex flex-col p-5 ${c.tone}`}>
              <div className="rounded-xl border-2 border-ink bg-white p-3">{c.art}</div>
              <h3 className="mt-4 text-lg font-bold">{c.title}</h3>
              <p className="mt-1.5 text-sm text-ink-700">{c.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Audience() {
  const who = [
    { t: "Course creators & course platforms", how: "Sell recorded or live courses with an AI mentor included.", ai: "Students ask, clarify, revise and get personalised support all the way through the course.", tone: "bg-sky", icon: "🎓" },
    { t: "K-12 schools", how: "A personalised learning companion beside classroom teaching.", ai: "Doubts, practice, revision and learning at each child's own pace, beyond school hours.", tone: "bg-sticky", icon: "🏫" },
    { t: "1-to-1 tuition & mentorship", how: "An AI mentor between live sessions.", ai: "Practice, revision and basic doubts handled 24/7 while the human tutor takes the live hour.", tone: "bg-mint-100", icon: "🤝" },
    { t: "Coaching & test-prep institutes", how: "Add an AI mentor to existing courses and batches.", ai: "Doubt solving, mock questions, revision and exam preparation for every student at once.", tone: "bg-signal-100", icon: "🎯" },
    { t: "Universities & colleges", how: "An assistant per subject, course or programme.", ai: "Students interact with course content and get instant academic help.", tone: "bg-lilac", icon: "🏛️" },
    { t: "Corporate & HR training", how: "Onboarding, compliance, product and skill programmes.", ai: "Employees learn at their own pace and question the training material instead of skimming it.", tone: "bg-paper-2", icon: "🏢" },
    { t: "Professional training & certification", how: "Certification programmes with a mentor throughout.", ai: "Learners don't just watch videos; a mentor walks with them through the whole programme.", tone: "bg-white", icon: "📜" },
    { t: "Tutors & independent educators", how: "Scale teaching beyond live classes.", ai: "Homework help, practice, revision and concept clarification for every learner, in your voice.", tone: "bg-sky", icon: "👩‍🏫" },
    { t: "Content & training companies", how: "Turn videos, PDFs, notes and books into interactive learning.", ai: "Learners interact with the content through a mentor instead of consuming it statically.", tone: "bg-mint-100", icon: "🎬" },
    { t: "Skill development platforms", how: "AI help inside coding, communication, business and tech courses.", ai: "Personalised guidance, practice, feedback and support on every skill.", tone: "bg-sticky", icon: "🛠️" },
  ];
  return (
    <section id="who" className="wrap py-16 lg:py-24">
      <h2 className="text-3xl font-extrabold sm:text-4xl">Who can use Tutezy?</h2>
      <p className="mt-3 max-w-3xl text-ink-700">
        Any education, training or learning business that wants to add an AI mentor or instructor to what it already delivers. The content
        stays yours; the mentor stays with the learner.
      </p>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {who.map((w) => (
          <article key={w.t} className={`card-hard flex flex-col p-5 ${w.tone}`}>
            <span className="text-2xl" aria-hidden="true">{w.icon}</span>
            <h3 className="mt-2 text-base font-bold leading-snug">{w.t}</h3>
            <p className="mt-2 text-sm font-semibold text-ink">{w.how}</p>
            <p className="mt-1.5 text-sm text-ink-700">{w.ai}</p>
          </article>
        ))}
      </div>
      <div className="card-hard mt-10 flex flex-wrap items-center justify-between gap-6 bg-ink p-7 text-paper">
        <div className="max-w-2xl">
          <p className="font-display text-xs font-bold uppercase tracking-wide text-signal">The core idea</p>
          <p className="mt-2 font-display text-2xl font-bold sm:text-3xl">
            Your content <span className="text-signal">+</span> Tutezy AI <span className="text-signal">=</span> an interactive, personalised learning experience.
          </p>
          <p className="mt-3 text-ink-300">
            Move from content delivery to AI-powered learning. Selling courses, running a school, tutoring one to one, coaching for exams or
            training a workforce: Tutezy adds a mentor that stays with the learner through the whole journey.
          </p>
        </div>
        <a href={DEMO_HREF} className="btn-hard rounded-full bg-signal px-5 py-2.5 font-display font-bold text-white">Book a demo</a>
      </div>
    </section>
  );
}

export function TeacherBand() {
  return (
    <section className="border-y-2 border-ink bg-paper-2">
      <div className="wrap grid items-center gap-8 py-14 lg:grid-cols-[1fr_1.3fr] lg:py-20">
        <div>
          <p className="inline-block rounded-full bg-ink px-3 py-1 font-display text-xs font-bold uppercase tracking-wide text-paper">Same teacher, every screen</p>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">Your teachers, in every student&apos;s room</h2>
          <p className="mt-4 text-ink-700">
            The board they would draw. The words they would use. The voice students already trust. Tutezy keeps the teacher at the centre and
            simply lets them be in a hundred places at once — while they see, next morning, exactly who needs them in person.
          </p>
          <ul className="mt-5 grid gap-2 text-sm font-semibold text-ink-700 sm:grid-cols-2">
            <li>✓ Teacher name, photo, voice, avatar</li>
            <li>✓ Strictness: gentle, normal, strict</li>
            <li>✓ English &amp; Hindi, per course</li>
            <li>✓ Weak concepts, per student</li>
          </ul>
        </div>
        <div className="card-hard overflow-hidden p-0">
          <Image src="/hero-art.png" alt="A teacher writing a = F ÷ m on a whiteboard, with the same lesson and her avatar on a laptop" width={1536} height={1024} className="h-auto w-full" />
        </div>
      </div>
    </section>
  );
}

/** What institutes run on it — not only courses. */
export function UseCases() {
  const cases = [
    { t: "Course lessons", d: "Every chapter of an existing course becomes a live, one-to-one lesson the student can question.", tone: "bg-sky", icon: "📘" },
    { t: "Doubt-solving sessions", d: "Students bring the doubt; the teacher explains on the board, checks they got it, and logs the concept for the human teacher.", tone: "bg-signal-100", icon: "❓" },
    { t: "Post-assessment solution sessions", d: "After a test, each student is walked through the questions they got wrong — their mistakes, not the class average.", tone: "bg-mint-100", icon: "📝" },
    { t: "Mentoring & study planning", d: "Weekly check-ins on what to study next, paced to the student's weak concepts and the exam calendar.", tone: "bg-lilac", icon: "🧭" },
    { t: "Interview & viva preparation", d: "Mock questions asked aloud, answers heard and graded, model answers written on the board — as many rounds as they want.", tone: "bg-sticky", icon: "🎤" },
    { t: "Revision before exams", d: "Rapid-fire recap boards from the whole syllabus with quick checks, in the student's preferred language and pace.", tone: "bg-paper-2", icon: "⚡" },
    { t: "Spoken language practice", d: "Conversation drills in English or Hindi with instant correction — the teacher listens and replies by voice.", tone: "bg-white", icon: "🗣️" },
    { t: "Onboarding & training", d: "Product, process or compliance training for staff and franchise partners, with a record of who understood what.", tone: "bg-sky", icon: "🏢" },
  ];
  return (
    <section id="usecases" className="wrap py-16 lg:py-24">
      <h2 className="text-3xl font-extrabold sm:text-4xl">Not just courses. Every session an institute runs.</h2>
      <p className="mt-3 max-w-2xl text-ink-700">Anything a teacher does one to one, Tutezy can do for every student — with a record of what each of them understood.</p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cases.map((c) => (
          <article key={c.t} className={`card-hard p-5 ${c.tone}`}>
            <span className="text-3xl" aria-hidden="true">{c.icon}</span>
            <h3 className="mt-3 text-lg font-bold">{c.t}</h3>
            <p className="mt-1.5 text-sm text-ink-700">{c.d}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

/** A product screenshot with a drawn stand-in until the real capture lands in /public/screens. */
function Screen({ src, alt, step }: { src: string; alt: string; step: number }) {
  const [missing, setMissing] = useState(false);
  const ref = useRef<HTMLImageElement>(null);
  // A 404 that happened before hydration never replays onError: check the element.
  useEffect(() => {
    const el = ref.current;
    if (el && el.complete && el.naturalWidth === 0) setMissing(true);
  }, []);
  if (!missing) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img ref={ref} src={src} alt={alt} loading="eager" onError={() => setMissing(true)} className="block aspect-[16/10] w-full bg-paper object-cover object-top" />;
  }
  const mocks = [
    <div key="a" className="space-y-3 p-5 font-body text-xs">
      <p className="font-display text-sm font-bold">Tutor Mode · institute defaults</p>
      {[["Teacher name", "Riya Ma'am"], ["Voice", "Riya (your voice)"], ["Languages", "English · हिंदी"], ["Strictness", "Normal"]].map(([k, v]) => (
        <div key={k} className="flex items-center justify-between rounded-lg border-2 border-ink bg-white px-3 py-2"><span className="text-ink-500">{k}</span><span className="font-semibold">{v}</span></div>
      ))}
      <div className="flex gap-2"><span className="rounded-lg border-2 border-ink bg-white px-3 py-2">Photo only</span><span className="rounded-lg border-2 border-ink bg-signal-100 px-3 py-2 font-semibold">Animated avatar ✓</span></div>
    </div>,
    <div key="b" className="space-y-2 p-5 font-body text-xs">
      <p className="font-display text-sm font-bold">Physics · Tutor Mode</p>
      {[["Force and motion", "Video · 12 min", "4 credits"], ["Newton's laws", "PDF · 6 pages", "6 credits"], ["Practice set", "Quiz · 10 Qs", "2 credits"]].map(([a, b, c]) => (
        <div key={a} className="grid grid-cols-[1fr_auto_auto] items-center gap-3 rounded-lg border-2 border-ink bg-white px-3 py-2"><span className="font-semibold">{a}</span><span className="text-ink-500">{b}</span><span className="rounded-full bg-sticky px-2 py-0.5 font-bold">{c}</span></div>
      ))}
      <div className="flex justify-end"><span className="rounded-full bg-signal px-3 py-1.5 font-display font-bold text-white">Convert 3 slides · 12 credits</span></div>
    </div>,
    <div key="c" className="grid grid-cols-[1fr_9rem] gap-0 font-body text-xs">
      <div className="grid-paper p-4 font-chalk"><p className="text-base font-bold">Newton&apos;s second law</p><p>● F = m × a</p><p>● Double the mass, halve the acceleration</p></div>
      <div className="space-y-2 border-s-2 border-ink p-3"><p className="rounded-xl bg-paper-2 px-2 py-1">If I double the mass…?</p><p className="ms-4 rounded-xl bg-ink px-2 py-1 text-paper">It halves</p><span className="rounded-full bg-mint-100 px-2 py-0.5 font-bold">✓ Correct</span></div>
    </div>,
    <div key="d" className="p-5 font-body text-xs">
      <p className="font-display text-sm font-bold">Insights · Batch 2026</p>
      {[["Priya", 82, "Gas exchange"], ["Aman", 64, "Newton's 2nd law"], ["Sara", 91, "—"], ["Rahul", 47, "Units, Vectors"]].map(([n, p, w]) => (
        <div key={String(n)} className="mt-2 grid grid-cols-[5rem_1fr_8rem] items-center gap-2"><span className="font-semibold">{n}</span><span className="h-2 rounded-full bg-ink-100"><span className="block h-2 rounded-full bg-mint" style={{ width: `${p}%` }} /></span><span className="truncate text-ink-500">{w}</span></div>
      ))}
    </div>,
  ];
  return <div className="aspect-[16/10] w-full overflow-hidden bg-paper">{mocks[step % mocks.length]}</div>;
}

/** The admin journey: what it takes to make one of these. Real screens when present. */
export function CreateSteps() {
  const steps = [
    {
      n: "1",
      t: "Turn on Tutor Mode",
      d: "In the Vacademy admin, open Settings → Tutor Mode. Name the teacher, upload a photo, pick a voice (or clone yours), choose English/Hindi and strictness. Every course inherits these; any course can override.",
      shot: "/screens/01-tutor-mode-settings.png",
      alt: "Tutor Mode settings: teacher name, voice, avatar, languages",
    },
    {
      n: "2",
      t: "Pick a course and see the cost",
      d: "Open any course's Tutor Mode tab. Tutezy lists every slide — PDFs, videos, slides, quizzes — and shows the credits it will take to convert them before you press anything.",
      shot: "/screens/02-course-tutor-tab.png",
      alt: "A course's Tutor Mode tab with the credit estimate",
    },
    {
      n: "3",
      t: "Compile and review",
      d: "One click compiles a teaching plan per slide: boards, examples, diagrams, checks, hints, recap. Preview any board exactly as the student will see it; recompile the ones you want tighter.",
      shot: "/screens/03-compiled-plan-preview.png",
      alt: "A compiled lesson plan with its boards and checks",
    },
    {
      n: "4",
      t: "Students learn. You get the insights.",
      d: "Learners find a 'Learn with the teacher' button on every converted chapter. Insights show concept mastery per student and per batch, minutes taught, and a CSV for the academic head.",
      shot: "/screens/04-insights.png",
      alt: "Tutor insights: weak concepts per student and per batch",
    },
  ];
  return (
    <section id="create" className="border-y-2 border-ink bg-white">
      <div className="wrap py-16 lg:py-24">
        <h2 className="text-3xl font-extrabold sm:text-4xl">Setting it up takes an afternoon, not a project</h2>
        <p className="mt-3 max-w-2xl text-ink-700">Four screens. No content team, no scripts, no new app for students.</p>
        <ol className="mt-10 space-y-10">
          {steps.map((s, i) => (
            <li key={s.n} className={`grid items-center gap-6 lg:grid-cols-2 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div>
                <span className="grid size-12 place-items-center rounded-full border-2 border-ink bg-signal font-display text-xl font-extrabold text-white shadow-hard-sm">{s.n}</span>
                <h3 className="mt-4 text-2xl font-bold">{s.t}</h3>
                <p className="mt-2 max-w-prose text-ink-700">{s.d}</p>
              </div>
              <figure className="card-hard overflow-hidden p-0">
                <div className="flex items-center gap-1.5 border-b-2 border-ink bg-paper-2 px-3 py-2">
                  <span className="size-2.5 rounded-full bg-signal" /><span className="size-2.5 rounded-full bg-sticky" /><span className="size-2.5 rounded-full bg-mint" />
                  <span className="ms-2 truncate font-display text-xs font-semibold text-ink-500">admin.vacademy.io</span>
                </div>
                <Screen src={s.shot} alt={s.alt} step={i} />
              </figure>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/** The self-serve taste: three minutes with the teacher, no sign-up. */
export function TryBand() {
  return (
    <section className="wrap py-10">
      <div className="card-hard flex flex-wrap items-center justify-between gap-6 bg-sticky p-7 sm:p-9">
        <div className="max-w-2xl">
          <p className="font-display text-xs font-bold uppercase tracking-wide text-ink-700">No sign-up · 3 minutes · voice or text</p>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">Don&apos;t take our word for it. Take a lesson.</h2>
          <p className="mt-2 text-ink-700">Tell the teacher your name, pick a topic, and she starts teaching — board, voice, questions and all. One free session per visitor.</p>
        </div>
        <a href={TRY_HREF} className="btn-hard rounded-full bg-ink px-6 py-3 font-display text-base font-bold text-paper">Start my 3-minute lesson →</a>
      </div>
    </section>
  );
}

/** The teacher asks first. A visitor says what they want; she answers and hands them the matching 3-minute lesson. */
export function AskRiya() {
  const wants = [
    { k: "chapters", label: "Teach my course chapters", topic: "photosynthesis", reply: "Give me any chapter — a PDF, a recording, slides — and I'll teach it on the board, one to one, in your teacher's voice. Try a chapter of mine first." },
    { k: "doubts", label: "Clear doubts after class", topic: "newton-second-law", reply: "Students bring the doubt, I explain it on the board, check they've got it, and note the concept for their teacher. Here's how I handle a physics one." },
    { k: "exam", label: "Walk through tough exam questions", topic: "neet-biology-tough", reply: "I take the question they got wrong, show the trap, then the fast method — and come back to it later. Watch me do a NEET one." },
    { k: "interview", label: "Run mock interviews", topic: "aptitude-interview", reply: "I ask, I wait, I listen, then I give feedback and the model answer. Three questions in three minutes — want to try?" },
    { k: "revise", label: "Revise before exams", topic: "jee-maths-problem", reply: "Rapid boards, quick checks, at the pace the student picks — and I keep a list of what still needs work." },
    { k: "train", label: "Train my team", topic: "hr-training-feedback", reply: "Onboarding, compliance, skills: I set up a situation, your people try it, and I coach the attempt. Here's a feedback-skills practice round." },
    { k: "language", label: "Practise a language", topic: "spanish-basics", reply: "We talk. I correct as we go, and we build up to a real conversation. Start with your first Spanish coffee order." },
  ];
  const [pick, setPick] = useState<(typeof wants)[number] | null>(null);
  return (
    <section className="border-y-2 border-ink bg-white" aria-label="Ask the teacher">
      <div className="wrap py-10 lg:py-14">
        <div className="card-hard bg-paper p-5 sm:p-7">
          <div className="flex items-start gap-4">
            <span className="relative grid size-12 shrink-0 place-items-center rounded-full bg-lilac font-display text-lg font-bold">
              R
              <span className="absolute -bottom-0.5 -end-0.5 size-3.5 rounded-full border-2 border-white bg-mint" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-display text-xs font-bold uppercase tracking-wide text-ink-500">Riya · your Tutezy teacher</p>
              <p className="mt-1 rounded-2xl rounded-ss-sm bg-white px-4 py-3 font-display text-lg font-bold sm:text-xl">
                Hi! How do you want me to teach your courses, or your students?
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {wants.map((w) => (
                  <button
                    key={w.k}
                    type="button"
                    onClick={() => setPick(w)}
                    aria-pressed={pick?.k === w.k}
                    className={`btn-hard rounded-full px-4 py-2 font-display text-sm font-bold ${pick?.k === w.k ? "bg-ink text-paper" : "bg-white text-ink"}`}
                  >
                    {w.label}
                  </button>
                ))}
              </div>
              {pick && (
                <div className="mt-4 rounded-2xl rounded-ss-sm border-2 border-ink bg-white px-4 py-3">
                  <p className="text-ink-700">{pick.reply}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <a href={`${TRY_HREF}?topic=${encodeURIComponent(pick.topic)}`} className="btn-hard rounded-full bg-signal px-4 py-2 font-display text-sm font-bold text-white">
                      Try it now · 3 minutes, no sign-up
                    </a>
                    <a href={DEMO_HREF} className="btn-hard rounded-full bg-white px-4 py-2 font-display text-sm font-bold text-ink">
                      Book a demo on my content
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

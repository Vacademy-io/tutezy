"use client";

import Image from "next/image";
import { useState } from "react";
import { LessonDemo } from "./LessonDemo";
import { whatsappLink } from "@/lib/leadSubmit";

export const DEMO_HREF = "#demo";
const WA_TEXT = "Hi, I'd like a demo of Tutezy for my students.";

export function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    ["#how", "How it works"],
    ["#features", "Inside a lesson"],
    ["#who", "Who it's for"],
    ["#pricing", "Pricing"],
    ["#faq", "FAQ"],
  ];
  return (
    <header className="sticky top-0 z-40 border-b-2 border-ink bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-2" aria-label="Tutezy home">
          <Image src="/logo.png" alt="tutezy.ai" width={150} height={60} className="h-9 w-auto sm:h-10" priority />
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
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:py-20">
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
            <a
              href={whatsappLink(WA_TEXT)}
              target="_blank"
              rel="noreferrer"
              className="btn-hard rounded-full bg-white px-5 py-3 font-display text-base font-bold text-ink"
            >
              WhatsApp us
            </a>
          </div>
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-ink-700">
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
    <section id="how" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
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
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
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
  return (
    <section id="who" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
      <h2 className="text-3xl font-extrabold sm:text-4xl">Built for institutes. Loved by solo teachers.</h2>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="card-hard p-7">
          <p className="inline-block rounded-full bg-ink px-3 py-1 font-display text-xs font-bold uppercase tracking-wide text-paper">Coaching &amp; institutes</p>
          <h3 className="mt-4 text-2xl font-bold">Doubt-clearing that scales with the batch, not the staff</h3>
          <ul className="mt-4 space-y-2.5 text-ink-700">
            <li>▸ Turn on Tutor Mode per course; every existing chapter becomes a live lesson.</li>
            <li>▸ One set of institute defaults: teacher name, voice, avatar, languages, strictness. Courses override what they need.</li>
            <li>▸ Prepaid credits with a live balance; lessons stop politely when it runs out. No surprise bills.</li>
            <li>▸ Batch-level insights and CSV export for academic heads; per-student weak concepts for teachers.</li>
            <li>▸ Runs inside the Vacademy learner app you already ship — web, Android, iOS.</li>
          </ul>
        </div>
        <div className="card-hard bg-sticky p-7">
          <p className="inline-block rounded-full bg-ink px-3 py-1 font-display text-xs font-bold uppercase tracking-wide text-paper">Solo teachers &amp; creators</p>
          <h3 className="mt-4 text-2xl font-bold">Be in every student&apos;s room, in your own voice</h3>
          <ul className="mt-4 space-y-2.5 text-ink-700">
            <li>▸ Upload your recorded lectures; Tutezy turns them into interactive lessons students can question.</li>
            <li>▸ Clone your voice once, add your avatar, and every learner gets you, one to one.</li>
            <li>▸ Pay only for minutes actually taught — start with a few hundred rupees of credits.</li>
            <li>▸ See who is stuck where, before the next live class.</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border-2 border-ink bg-ink px-6 py-5 text-paper">
        <p className="font-display text-lg font-bold">See it teach your own chapter. We set it up on the call.</p>
        <a href={DEMO_HREF} className="btn-hard rounded-full bg-signal px-5 py-2.5 font-display font-bold text-white">Book a demo</a>
      </div>
    </section>
  );
}

/** The illustration band: the teacher on both sides of the screen. */
export function TeacherBand() {
  return (
    <section className="border-y-2 border-ink bg-paper-2">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_1.3fr] lg:py-20">
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

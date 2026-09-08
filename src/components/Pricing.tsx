"use client";

import { useState } from "react";
import { DEMO_HREF } from "./Sections";

type Cur = "INR" | "USD";

const P = {
  INR: { sym: "₹", minute: "3", avatarMinute: "5", voice: "2,000", avatar: "10,000", example: "₹9,000" },
  USD: { sym: "$", minute: "0.03", avatarMinute: "0.05", voice: "20", avatar: "100", example: "$90" },
};

export function Pricing() {
  const [cur, setCur] = useState<Cur>("INR");
  const p = P[cur];
  return (
    <section id="pricing" className="border-y-2 border-ink bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-extrabold sm:text-4xl">Pay per minute. No seats, no minimums.</h2>
            <p className="mt-3 max-w-2xl text-ink-700">
              Buy credits, use them across every course and every student. A minute only counts while a student is actually in a lesson.
            </p>
          </div>
          <div className="inline-flex rounded-full border-2 border-ink bg-paper p-1 font-display text-sm font-bold" role="group" aria-label="Currency">
            {(["INR", "USD"] as Cur[]).map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCur(c)}
                aria-pressed={cur === c}
                className={`rounded-full px-4 py-1.5 ${cur === c ? "bg-ink text-paper" : "text-ink-700"}`}
              >
                {c === "INR" ? "₹ INR" : "$ USD"}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="card-hard p-6">
              <p className="font-display text-xs font-bold uppercase tracking-wide text-ink-500">Live lesson</p>
              <p className="mt-2 font-display text-5xl font-extrabold">
                {p.sym}{p.minute}<span className="text-lg text-ink-500"> /min</span>
              </p>
              <p className="mt-2 text-sm text-ink-700">Per student, per minute of lesson. Voice or text, whiteboard, checks, revisits, notes and insights included.</p>
            </div>
            <div className="card-hard bg-signal-100 p-6">
              <p className="font-display text-xs font-bold uppercase tracking-wide text-signal-600">With animated avatar</p>
              <p className="mt-2 font-display text-5xl font-extrabold">
                {p.sym}{p.avatarMinute}<span className="text-lg text-ink-500"> /min</span>
              </p>
              <p className="mt-2 text-sm text-ink-700">Everything above, plus a lip-synced teacher on screen. Students can hide it; you pay only while it is shown.</p>
            </div>
            <div className="card-hard p-6">
              <p className="font-display text-xs font-bold uppercase tracking-wide text-ink-500">Teacher voice clone</p>
              <p className="mt-2 font-display text-4xl font-extrabold">{p.sym}{p.voice}</p>
              <p className="mt-2 text-sm text-ink-700">One-time, per voice. A 15-second sample; private to your institute.</p>
            </div>
            <div className="card-hard p-6">
              <p className="font-display text-xs font-bold uppercase tracking-wide text-ink-500">Custom teacher avatar</p>
              <p className="mt-2 font-display text-4xl font-extrabold">{p.sym}{p.avatar}</p>
              <p className="mt-2 text-sm text-ink-700">One-time, per teacher. Built from one photo, with consent. Stock avatars are free.</p>
            </div>
          </div>
          <div className="card-hard flex flex-col bg-ink p-7 text-paper">
            <p className="font-display text-xs font-bold uppercase tracking-wide text-signal">What a batch costs</p>
            <p className="mt-3 font-display text-2xl font-bold">100 students × 30 minutes of live lessons</p>
            <p className="mt-2 font-display text-5xl font-extrabold text-sticky">{p.example}</p>
            <p className="mt-1 text-sm text-ink-300">3,000 minutes at {p.sym}{p.minute}/min. Lesson preparation is a small one-time cost per slide and is shown before you convert.</p>
            <ul className="mt-6 space-y-2 text-sm">
              <li>✓ Credits never expire while your account is active</li>
              <li>✓ Live balance, itemised usage, CSV export</li>
              <li>✓ Volume pricing for institutes above 1,000 students</li>
            </ul>
            <a href={DEMO_HREF} className="btn-hard mt-auto inline-block self-start rounded-full bg-signal px-5 py-2.5 font-display font-bold text-white">
              Get a quote on the demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

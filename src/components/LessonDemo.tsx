"use client";

import { useEffect, useState } from "react";

/**
 * A lesson in thirty seconds: the board fills in as the teacher speaks, a
 * check is asked, the learner answers, the teacher marks it and moves on.
 * Pure state + CSS; nothing is fetched.
 */

type Step = 0 | 1 | 2 | 3 | 4 | 5 | 6;

const SCRIPT: Array<{ step: Step; ms: number }> = [
  { step: 0, ms: 1400 }, // greeting
  { step: 1, ms: 2600 }, // heading + bullet 1
  { step: 2, ms: 2600 }, // bullet 2 + diagram
  { step: 3, ms: 3200 }, // question
  { step: 4, ms: 1800 }, // learner answers
  { step: 5, ms: 2600 }, // verdict + note
  { step: 6, ms: 2600 }, // summary
];

const TEACHER_LINES: Record<Step, string> = {
  0: "Namaste Priya! Today: what makes a force, and how we measure it.",
  1: "A force is simply a push or a pull on an object.",
  2: "Same push, two carts — the lighter one speeds up more. That is mass resisting.",
  3: "Quick check: if I double the mass and keep the push, what happens to acceleration?",
  4: "…",
  5: "Yes! Halved. Acceleration = force ÷ mass. I'll note that on the board.",
  6: "Board done. Two things to remember — then we revisit the one you found tricky.",
};

export function LessonDemo({ className = "" }: { className?: string }) {
  const [i, setI] = useState(0);
  const step = SCRIPT[i]!.step;

  useEffect(() => {
    const t = setTimeout(() => setI((v) => (v + 1) % SCRIPT.length), SCRIPT[i]!.ms);
    return () => clearTimeout(t);
  }, [i]);

  const speaking = step !== 4;

  return (
    <div className={`card-hard overflow-hidden ${className}`} aria-label="A Tutezy lesson, animated">
      {/* window chrome */}
      <div className="flex items-center gap-2 border-b-2 border-ink bg-paper-2 px-3 py-2">
        <span className="size-2.5 rounded-full bg-signal" />
        <span className="size-2.5 rounded-full bg-sticky" />
        <span className="size-2.5 rounded-full bg-mint" />
        <span className="ms-2 truncate font-display text-xs font-semibold text-ink-500">Physics · Force and motion · Board 1 of 4</span>
        <span className="ms-auto rounded-full bg-ink px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-paper">Live</span>
      </div>

      <div className="grid grid-cols-[1fr_11rem] sm:grid-cols-[1fr_13rem]">
        {/* whiteboard */}
        <div className="grid-paper relative min-h-[17rem] p-4 font-chalk text-ink sm:min-h-[19rem]">
          {step >= 1 && (
            <h4 key="h" className="write-in text-xl font-bold text-ink sm:text-2xl">
              What is a force?
              <span className="mt-1 block h-1 w-40 bg-signal" />
            </h4>
          )}
          <ul className="mt-3 space-y-1.5 text-base sm:text-lg">
            {step >= 1 && <li key="b1" className="write-in flex gap-2"><span className="text-signal">●</span> A push or a pull on an object</li>}
            {step >= 2 && <li key="b2" className="write-in flex gap-2"><span className="text-signal">●</span> Mass resists the change in motion</li>}
            {step >= 5 && (
              <li key="b3" className="write-in flex gap-2 rounded-md bg-sticky/70 px-1.5 py-0.5 text-ink">
                <span>✎</span> a = F ÷ m  → double m, a halves
              </li>
            )}
          </ul>
          {step >= 2 && (
            <svg key="d" viewBox="0 0 260 90" className="draw absolute bottom-3 end-3 h-24 w-64" aria-hidden="true">
              <rect x="10" y="40" width="70" height="34" rx="6" fill="#cfe5ff" stroke="#151c2f" strokeWidth="2.5" />
              <circle cx="24" cy="80" r="6" fill="#fff" stroke="#151c2f" strokeWidth="2.5" />
              <circle cx="66" cy="80" r="6" fill="#fff" stroke="#151c2f" strokeWidth="2.5" />
              <path d="M84 57 L120 57" stroke="#ff6b1a" strokeWidth="3" strokeLinecap="round" />
              <path d="M112 50 L122 57 L112 64" fill="none" stroke="#ff6b1a" strokeWidth="3" strokeLinecap="round" />
              <rect x="150" y="26" width="95" height="48" rx="6" fill="#e6dcff" stroke="#151c2f" strokeWidth="2.5" />
              <circle cx="168" cy="80" r="6" fill="#fff" stroke="#151c2f" strokeWidth="2.5" />
              <circle cx="228" cy="80" r="6" fill="#fff" stroke="#151c2f" strokeWidth="2.5" />
              <path d="M40 30 L40 22" stroke="#151c2f" strokeWidth="2" />
              <path d="M180 18 L200 6" stroke="#151c2f" strokeWidth="2" />
            </svg>
          )}
          {step === 0 && <p className="write-in text-lg text-ink-500">Board is clear. Ready when you are.</p>}
        </div>

        {/* teacher rail */}
        <div className="flex flex-col border-s-2 border-ink bg-white">
          <div className="flex items-center gap-2 border-b-2 border-ink p-2.5">
            <span className="relative grid size-9 place-items-center rounded-full bg-lilac font-display text-sm font-bold text-ink">
              R
              <span className={`absolute -bottom-0.5 -end-0.5 size-3 rounded-full border-2 border-white ${speaking ? "bg-mint" : "bg-signal"}`} />
            </span>
            <div className="min-w-0">
              <p className="truncate font-display text-xs font-bold">Riya Ma&apos;am</p>
              <p className="flex items-center gap-1 text-[10px] text-ink-500">
                {speaking ? (
                  <>
                    <span className="speak-bars inline-flex items-end gap-0.5"><span /><span /><span /><span /></span> Speaking
                  </>
                ) : (
                  "Your turn"
                )}
              </p>
            </div>
          </div>
          <div className="flex-1 space-y-2 overflow-hidden p-2.5 text-[11px] leading-snug sm:text-xs">
            <p key={`t${step}`} className="write-in rounded-2xl rounded-ss-sm bg-paper-2 px-2.5 py-1.5 text-ink">
              {TEACHER_LINES[step]}
            </p>
            {step >= 3 && step <= 5 && (
              <div className="rounded-xl border-2 border-ink bg-signal-100 p-2">
                <p className="font-display text-[10px] font-bold uppercase tracking-wide text-signal-600">Quick check</p>
                <p className="mt-0.5 text-ink">Double the mass, same push. Acceleration…</p>
                <div className="mt-1.5 flex flex-col gap-1">
                  {["Doubles", "Halves", "Stays the same"].map((o) => (
                    <span
                      key={o}
                      className={`rounded-md border px-2 py-0.5 ${
                        step >= 4 && o === "Halves" ? "border-mint bg-mint-100 font-semibold text-ink" : "border-ink-100 bg-white text-ink-700"
                      }`}
                    >
                      {o}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {step >= 4 && step <= 5 && (
              <p className="write-in ms-6 rounded-2xl rounded-se-sm bg-ink px-2.5 py-1.5 text-paper">Halves?</p>
            )}
            {step === 5 && (
              <span className="write-in inline-flex items-center gap-1 rounded-full border border-mint bg-mint-100 px-2 py-0.5 font-display text-[10px] font-bold text-ink">
                ✓ Correct · 1 of 1
              </span>
            )}
            {step === 6 && (
              <div className="write-in rounded-xl border-2 border-ink bg-sticky p-2 text-ink">
                <p className="font-display text-[10px] font-bold uppercase tracking-wide">Your notes</p>
                <p>• Force = push or pull</p>
                <p>• a = F ÷ m</p>
              </div>
            )}
          </div>
          <div className="flex items-center gap-1 border-t-2 border-ink p-2">
            <span className="rounded-full bg-signal px-2.5 py-1 font-display text-[10px] font-bold text-white">🎤 Answer</span>
            <span className="flex-1 truncate rounded-full border border-ink-100 px-2 py-1 text-[10px] text-ink-300">Type or speak…</span>
          </div>
        </div>
      </div>
    </div>
  );
}

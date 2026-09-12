"use client";

import { useState } from "react";
import { submitDemoLead, whatsappLink } from "@/lib/leadSubmit";
import { CALENDLY_URL, HOURS_COPY, SALES_EMAIL } from "@/lib/site";
import { track } from "@/lib/track";

const COUNTRY_CODES = [
  ["+1", "US/CA +1"],
  ["+44", "UK +44"],
  ["+61", "Australia +61"],
  ["+91", "India +91"],
  ["+971", "UAE +971"],
  ["+65", "Singapore +65"],
];

/**
 * US-first (owner decision 2026-09-12): email is the required contact, phone is
 * optional, and the promise is an email with slots inside one US business day.
 * When CALENDLY_URL is set the left column also offers the slot picker directly.
 */
export function DemoForm() {
  const [form, setForm] = useState({ name: "", phone: "", countryCode: "+1", email: "", organisation: "", kind: "institute", students: "", message: "" });
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [duplicate, setDuplicate] = useState(false);
  const [error, setError] = useState("");
  const set = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());
    if (!form.name.trim() || !emailOk) {
      setError("Your name and a work email are enough to get started.");
      return;
    }
    setError("");
    setState("sending");
    try {
      const r = await submitDemoLead(form);
      if (!r.ok) throw new Error(r.note || "Could not send");
      setDuplicate(Boolean(r.duplicate));
      setState("done");
      track("tutezy_demo_request", { kind: form.kind, students: form.students, duplicate: Boolean(r.duplicate) });
    } catch (err) {
      setError(err instanceof Error ? err.message : `Could not send. Email us at ${SALES_EMAIL}.`);
      setState("error");
    }
  };

  const waText = `Hi, I'd like a Tutezy demo. I'm ${form.name || "…"}${form.organisation ? ` from ${form.organisation}` : ""}.`;

  return (
    <section id="demo" className="dot-paper">
      <div className="wrap grid gap-10 py-16 lg:grid-cols-[1fr_1.1fr] lg:py-24">
        <div>
          <h2 className="text-3xl font-extrabold sm:text-4xl">See Tutezy teach <span className="mark-sticky">your</span> chapter</h2>
          <p className="mt-4 text-lg text-ink-700">
            A 20-minute call. Bring one chapter — a PDF, a recording or slides — and we convert it live, in your own voice if you like.
          </p>
          <ol className="mt-6 space-y-3 text-ink-700">
            <li className="flex gap-3"><span className="grid size-7 shrink-0 place-items-center rounded-full border-2 border-ink bg-white font-display text-sm font-bold">1</span> We email you within one US business day with two or three slots.</li>
            <li className="flex gap-3"><span className="grid size-7 shrink-0 place-items-center rounded-full border-2 border-ink bg-white font-display text-sm font-bold">2</span> On the call: your content in, a live lesson out, pricing for your numbers.</li>
            <li className="flex gap-3"><span className="grid size-7 shrink-0 place-items-center rounded-full border-2 border-ink bg-white font-display text-sm font-bold">3</span> Pilot with one course or batch. Credits to start are on us.</li>
          </ol>
          <p className="mt-6 inline-block rounded-md border-2 border-ink bg-white px-3 py-2 text-sm font-semibold text-ink-700">🕘 {HOURS_COPY}</p>
          {CALENDLY_URL && (
            <div className="mt-6">
              <a href={CALENDLY_URL} target="_blank" rel="noreferrer" data-track="book_call" data-track-label="demo-section" className="btn-hard inline-block rounded-full bg-ink px-5 py-3 font-display font-bold text-paper">
                Pick a slot now →
              </a>
              <p className="mt-2 text-sm text-ink-500">Or leave your details and we&apos;ll propose times.</p>
            </div>
          )}
        </div>

        <form onSubmit={submit} className="card-hard p-6 sm:p-8" noValidate>
          {state === "done" ? (
            <div className="py-8 text-center">
              <span className="mx-auto grid size-16 place-items-center rounded-full border-2 border-ink bg-mint font-display text-3xl font-bold">✓</span>
              <h3 className="mt-5 text-2xl font-bold">{duplicate ? `Welcome back, ${form.name.split(" ")[0]}.` : `Got it, ${form.name.split(" ")[0]}.`}</h3>
              <p className="mt-2 text-ink-700">
                {duplicate
                  ? <>We already have {form.email} on file, so this didn&apos;t create a second request. If you haven&apos;t heard from us, email <a href={`mailto:${SALES_EMAIL}`} className="font-semibold underline">{SALES_EMAIL}</a> and we&apos;ll reply the same day.</>
                  : <>We&apos;ll email {form.email} within one US business day with slots for the call.</>}
              </p>
              {CALENDLY_URL ? (
                <a href={CALENDLY_URL} target="_blank" rel="noreferrer" data-track="book_call" data-track-label="demo-done" className="btn-hard mt-6 inline-block rounded-full bg-signal px-5 py-2.5 font-display font-bold text-white">
                  Or pick a slot right now
                </a>
              ) : (
                <a href={whatsappLink(waText)} target="_blank" rel="noreferrer" data-track="whatsapp" data-track-label="demo-done" className="mt-6 inline-block text-sm font-semibold text-ink-500 underline">
                  Prefer WhatsApp? Message us
                </a>
              )}
            </div>
          ) : (
            <>
              <h3 className="text-xl font-bold">Book a call</h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="font-display text-xs font-bold uppercase tracking-wide text-ink-500">Your name</span>
                  <input value={form.name} onChange={(e) => set("name", e.target.value)} required autoComplete="name" className="mt-1 w-full rounded-xl border-2 border-ink bg-paper px-3 py-2.5 outline-none focus:bg-white" />
                </label>
                <label className="block">
                  <span className="font-display text-xs font-bold uppercase tracking-wide text-ink-500">Work email</span>
                  <input value={form.email} onChange={(e) => set("email", e.target.value)} type="email" required autoComplete="email" className="mt-1 w-full rounded-xl border-2 border-ink bg-paper px-3 py-2.5 outline-none focus:bg-white" />
                </label>
                <label className="block">
                  <span className="font-display text-xs font-bold uppercase tracking-wide text-ink-500">Phone <span className="normal-case text-ink-300">(optional)</span></span>
                  <div className="mt-1 flex gap-2">
                    <select value={form.countryCode} onChange={(e) => set("countryCode", e.target.value)} aria-label="Country code" className="w-28 shrink-0 rounded-xl border-2 border-ink bg-paper px-2 py-2.5 text-sm">
                      {COUNTRY_CODES.map(([v, l]) => (
                        <option key={v} value={v}>{l}</option>
                      ))}
                    </select>
                    <input value={form.phone} onChange={(e) => set("phone", e.target.value)} inputMode="tel" autoComplete="tel-national" className="min-w-0 flex-1 rounded-xl border-2 border-ink bg-paper px-3 py-2.5 outline-none focus:bg-white" />
                  </div>
                </label>
                <label className="block">
                  <span className="font-display text-xs font-bold uppercase tracking-wide text-ink-500">Company / brand</span>
                  <input value={form.organisation} onChange={(e) => set("organisation", e.target.value)} autoComplete="organization" className="mt-1 w-full rounded-xl border-2 border-ink bg-paper px-3 py-2.5 outline-none focus:bg-white" />
                </label>
                <label className="block">
                  <span className="font-display text-xs font-bold uppercase tracking-wide text-ink-500">You are</span>
                  <select value={form.kind} onChange={(e) => set("kind", e.target.value)} className="mt-1 w-full rounded-xl border-2 border-ink bg-paper px-3 py-2.5">
                    <option value="institute">A training / test-prep company</option>
                    <option value="solo">A course creator</option>
                    <option value="school">A school, college or university</option>
                    <option value="corporate">Corporate L&amp;D</option>
                    <option value="other">Something else</option>
                  </select>
                </label>
                <label className="block">
                  <span className="font-display text-xs font-bold uppercase tracking-wide text-ink-500">Roughly how many learners?</span>
                  <select value={form.students} onChange={(e) => set("students", e.target.value)} className="mt-1 w-full rounded-xl border-2 border-ink bg-paper px-3 py-2.5">
                    <option value="">Pick one</option>
                    <option value="<100">Under 100</option>
                    <option value="100-500">100 – 500</option>
                    <option value="500-2000">500 – 2,000</option>
                    <option value="2000+">2,000+</option>
                  </select>
                </label>
                <label className="block sm:col-span-2">
                  <span className="font-display text-xs font-bold uppercase tracking-wide text-ink-500">Anything we should prepare? <span className="normal-case text-ink-300">(optional)</span></span>
                  <textarea value={form.message} onChange={(e) => set("message", e.target.value)} rows={2} className="mt-1 w-full rounded-xl border-2 border-ink bg-paper px-3 py-2.5 outline-none focus:bg-white" placeholder="Subject, platform you use (Thinkific, Kajabi…), a link to a chapter" />
                </label>
              </div>
              {error && <p role="alert" className="mt-3 rounded-lg border-2 border-signal bg-signal-100 px-3 py-2 text-sm font-semibold text-signal-600">{error}</p>}
              <button type="submit" disabled={state === "sending"} className="btn-hard mt-5 w-full rounded-full bg-signal px-6 py-3 font-display text-base font-bold text-white disabled:opacity-60">
                {state === "sending" ? "Sending…" : "Request a call"}
              </button>
              <p className="mt-3 text-center text-xs text-ink-500">No newsletter, no drip. One email with slots, that&apos;s it.</p>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

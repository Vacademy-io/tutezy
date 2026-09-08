"use client";

import { useState } from "react";
import { submitDemoLead, whatsappLink } from "@/lib/leadSubmit";

const COUNTRY_CODES = [
  ["+91", "India +91"],
  ["+971", "UAE +971"],
  ["+1", "US/CA +1"],
  ["+44", "UK +44"],
  ["+65", "Singapore +65"],
  ["+61", "Australia +61"],
  ["+977", "Nepal +977"],
  ["+880", "Bangladesh +880"],
];

export function DemoForm() {
  const [form, setForm] = useState({ name: "", phone: "", countryCode: "+91", email: "", organisation: "", kind: "institute", students: "", message: "" });
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState("");
  const set = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || form.phone.replace(/\D/g, "").length < 7) {
      setError("Your name and a WhatsApp number are enough to get started.");
      return;
    }
    setError("");
    setState("sending");
    try {
      const r = await submitDemoLead(form);
      if (!r.ok) throw new Error(r.note || "Could not send");
      setState("done");
      (window as unknown as { dataLayer?: unknown[] }).dataLayer?.push({ event: "tutezy_demo_request", kind: form.kind });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not send. Try WhatsApp instead.");
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
            A 20-minute call. Bring one chapter — a PDF, a recording or slides — and we convert it live, in your teacher&apos;s voice if you like.
          </p>
          <ol className="mt-6 space-y-3 text-ink-700">
            <li className="flex gap-3"><span className="grid size-7 shrink-0 place-items-center rounded-full border-2 border-ink bg-white font-display text-sm font-bold">1</span> We call you on WhatsApp within a working day to fix a slot.</li>
            <li className="flex gap-3"><span className="grid size-7 shrink-0 place-items-center rounded-full border-2 border-ink bg-white font-display text-sm font-bold">2</span> On the call: your content in, a live lesson out, pricing for your numbers.</li>
            <li className="flex gap-3"><span className="grid size-7 shrink-0 place-items-center rounded-full border-2 border-ink bg-white font-display text-sm font-bold">3</span> Pilot with one batch. Credits to start are on us.</li>
          </ol>
          <a href={whatsappLink(waText)} target="_blank" rel="noreferrer" className="btn-hard mt-8 inline-block rounded-full bg-white px-5 py-3 font-display font-bold text-ink">
            Prefer WhatsApp? Message us →
          </a>
        </div>

        <form onSubmit={submit} className="card-hard p-6 sm:p-8" noValidate>
          {state === "done" ? (
            <div className="py-8 text-center">
              <span className="mx-auto grid size-16 place-items-center rounded-full border-2 border-ink bg-mint font-display text-3xl font-bold">✓</span>
              <h3 className="mt-5 text-2xl font-bold">Got it, {form.name.split(" ")[0]}.</h3>
              <p className="mt-2 text-ink-700">We&apos;ll message you on WhatsApp within a working day to fix the demo slot.</p>
              <a href={whatsappLink(waText)} target="_blank" rel="noreferrer" className="btn-hard mt-6 inline-block rounded-full bg-signal px-5 py-2.5 font-display font-bold text-white">
                Or start the chat now
              </a>
            </div>
          ) : (
            <>
              <h3 className="text-xl font-bold">Book a demo</h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <label className="block sm:col-span-2">
                  <span className="font-display text-xs font-bold uppercase tracking-wide text-ink-500">Your name</span>
                  <input value={form.name} onChange={(e) => set("name", e.target.value)} required autoComplete="name" className="mt-1 w-full rounded-xl border-2 border-ink bg-paper px-3 py-2.5 outline-none focus:bg-white" />
                </label>
                <label className="block">
                  <span className="font-display text-xs font-bold uppercase tracking-wide text-ink-500">WhatsApp number</span>
                  <div className="mt-1 flex gap-2">
                    <select value={form.countryCode} onChange={(e) => set("countryCode", e.target.value)} aria-label="Country code" className="w-28 shrink-0 rounded-xl border-2 border-ink bg-paper px-2 py-2.5 text-sm">
                      {COUNTRY_CODES.map(([v, l]) => (
                        <option key={v} value={v}>{l}</option>
                      ))}
                    </select>
                    <input value={form.phone} onChange={(e) => set("phone", e.target.value)} required inputMode="tel" autoComplete="tel-national" className="min-w-0 flex-1 rounded-xl border-2 border-ink bg-paper px-3 py-2.5 outline-none focus:bg-white" />
                  </div>
                </label>
                <label className="block">
                  <span className="font-display text-xs font-bold uppercase tracking-wide text-ink-500">Email <span className="normal-case text-ink-300">(optional)</span></span>
                  <input value={form.email} onChange={(e) => set("email", e.target.value)} type="email" autoComplete="email" className="mt-1 w-full rounded-xl border-2 border-ink bg-paper px-3 py-2.5 outline-none focus:bg-white" />
                </label>
                <label className="block">
                  <span className="font-display text-xs font-bold uppercase tracking-wide text-ink-500">Institute / brand</span>
                  <input value={form.organisation} onChange={(e) => set("organisation", e.target.value)} autoComplete="organization" className="mt-1 w-full rounded-xl border-2 border-ink bg-paper px-3 py-2.5 outline-none focus:bg-white" />
                </label>
                <label className="block">
                  <span className="font-display text-xs font-bold uppercase tracking-wide text-ink-500">You are</span>
                  <select value={form.kind} onChange={(e) => set("kind", e.target.value)} className="mt-1 w-full rounded-xl border-2 border-ink bg-paper px-3 py-2.5">
                    <option value="institute">An institute / coaching</option>
                    <option value="solo">A solo teacher / creator</option>
                    <option value="other">Something else</option>
                  </select>
                </label>
                <label className="block sm:col-span-2">
                  <span className="font-display text-xs font-bold uppercase tracking-wide text-ink-500">Roughly how many students?</span>
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
                  <textarea value={form.message} onChange={(e) => set("message", e.target.value)} rows={2} className="mt-1 w-full rounded-xl border-2 border-ink bg-paper px-3 py-2.5 outline-none focus:bg-white" placeholder="Subject, class, language…" />
                </label>
              </div>
              {error && <p role="alert" className="mt-3 rounded-lg border-2 border-signal bg-signal-100 px-3 py-2 text-sm font-semibold text-signal-600">{error}</p>}
              <button type="submit" disabled={state === "sending"} className="btn-hard mt-5 w-full rounded-full bg-signal px-6 py-3 font-display text-base font-bold text-white disabled:opacity-60">
                {state === "sending" ? "Sending…" : "Request my demo"}
              </button>
              <p className="mt-3 text-center text-xs text-ink-500">No spam. One WhatsApp message to fix the slot, that&apos;s it.</p>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

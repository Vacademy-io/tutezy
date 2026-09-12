import { CASE_STUDIES } from "@/content/caseStudies";

/** Real numbers only; hidden until src/content/caseStudies.ts has entries. */
export function CaseStudies() {
  if (CASE_STUDIES.length === 0) return null;
  return (
    <section id="proof" className="border-y-2 border-ink bg-paper-2">
      <div className="wrap py-14 lg:py-20">
        <h2 className="text-3xl font-extrabold sm:text-4xl">What it did for real batches</h2>
        <p className="mt-3 max-w-2xl text-ink-700">Numbers from the tutor insights of live customers, anonymised. Ask on the call and we&apos;ll show you the dashboards.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {CASE_STUDIES.map((c) => (
            <article key={c.who} className="card-hard flex flex-col p-6">
              <p className="font-display text-xs font-bold uppercase tracking-wide text-signal">{c.who}</p>
              <p className="mt-1 font-semibold">{c.use}</p>
              <dl className="mt-5 grid grid-cols-3 gap-3">
                {c.stats.map((s) => (
                  <div key={s.label}>
                    <dd className="font-display text-2xl font-extrabold leading-none">{s.value}</dd>
                    <dt className="mt-1 text-xs text-ink-500">{s.label}</dt>
                  </div>
                ))}
              </dl>
              {c.quote && <blockquote className="mt-5 border-s-4 border-signal ps-3 font-chalk text-base">“{c.quote}”</blockquote>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import type { ReactNode } from "react";
import { KeyFacts, PageShell, type FaqItem } from "./PageShell";

export interface AudienceContent {
  path: string;
  eyebrow: string;
  heading: string;
  lede: string;
  facts: ReactNode[];
  /** The pain, in the buyer's words. */
  problem: ReactNode;
  /** Sessions this audience runs on Tutezy. */
  sessions: Array<{ t: string; d: string }>;
  learnerGets: string[];
  instituteGets: string[];
  /** A concrete worked example with numbers. */
  example: ReactNode;
  /** Honest limits. */
  notFor: string[];
  faq: FaqItem[];
  demoTopic: string;
}

export function AudiencePage({ c }: { c: AudienceContent }) {
  return (
    <PageShell path={c.path} eyebrow={c.eyebrow} heading={c.heading} lede={c.lede} faq={c.faq} demoTopic={c.demoTopic} related={{ group: "audience", title: "Tutezy for other kinds of institutes" }}>
      <KeyFacts items={c.facts} />

      <h2>The problem</h2>
      {c.problem}

      <h2>What you run on Tutezy</h2>
      <div className="not-prose mt-4 grid gap-4 sm:grid-cols-2">
        {c.sessions.map((s) => (
          <article key={s.t} className="card-hard p-5">
            <h3 className="font-display text-lg font-bold">{s.t}</h3>
            <p className="mt-1.5 text-sm text-ink-700">{s.d}</p>
          </article>
        ))}
      </div>

      <h2>What each learner gets</h2>
      <ul>
        {c.learnerGets.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>

      <h2>What you get back</h2>
      <ul>
        {c.instituteGets.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>

      <h2>A worked example</h2>
      {c.example}

      <h2>Where Tutezy is not the answer</h2>
      <ul>
        {c.notFor.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>

      <h2>How to start</h2>
      <ol>
        <li>
          Take the free <a href="https://learner.vacademy.io/try">3-minute lesson</a> to see the board, the voice and a check.
        </li>
        <li>
          <a href="/#demo">Book a 20-minute demo</a>; bring one chapter (PDF, video or deck) and we convert it live.
        </li>
        <li>Turn on Tutor Mode, set the teacher and languages, compile one course, review, and open it to one batch.</li>
        <li>
          Read the batch insights after a week and decide where to expand. Pricing is on the <a href="/pricing/">pricing page</a>.
        </li>
      </ol>
    </PageShell>
  );
}

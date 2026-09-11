import type { ReactNode } from "react";
import { KeyFacts, PageShell, type FaqItem } from "./PageShell";

export interface CompareContent {
  path: string;
  other: string;
  heading: string;
  lede: string;
  verdict: ReactNode[];
  /** What the other thing is, fairly. */
  otherIs: ReactNode;
  rows: Array<[dimension: string, tutezy: string, other: string]>;
  chooseOther: string[];
  chooseTutezy: string[];
  body?: ReactNode;
  faq: FaqItem[];
  demoTopic: string;
}

export function ComparePage({ c }: { c: CompareContent }) {
  return (
    <PageShell path={c.path} eyebrow="Comparison" heading={c.heading} lede={c.lede} parent={["/compare/", "Compare"]} faq={c.faq} demoTopic={c.demoTopic} related={{ group: "compare", title: "Other comparisons" }}>
      <KeyFacts title="The short version" items={c.verdict} />

      <h2>What {c.other} is</h2>
      {c.otherIs}

      <h2>Side by side</h2>
      <div className="tbl">
        <table>
          <thead>
            <tr>
              <th style={{ width: "22%" }}>&nbsp;</th>
              <th>Tutezy</th>
              <th>{c.other}</th>
            </tr>
          </thead>
          <tbody>
            {c.rows.map(([d, a, b]) => (
              <tr key={d}>
                <th scope="row">{d}</th>
                <td>{a}</td>
                <td>{b}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Choose {c.other} when</h2>
      <ul>
        {c.chooseOther.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>

      <h2>Choose Tutezy when</h2>
      <ul>
        {c.chooseTutezy.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>

      {c.body}

      <p className="not-prose mt-8 text-sm text-ink-500">
        Descriptions of third-party products reflect public information as of September 2026 and may change; check the product’s own site
        for current features and pricing.
      </p>
    </PageShell>
  );
}

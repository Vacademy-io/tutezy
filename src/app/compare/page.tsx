import { KeyFacts, PageShell, pageMetadata } from "@/components/PageShell";
import { byGroup } from "@/lib/site";

const PATH = "/compare/";
export const metadata = pageMetadata(PATH);

export default function Page() {
  const pages = byGroup("compare").filter((p) => p.path !== PATH);
  return (
    <PageShell
      path={PATH}
      eyebrow="Compare"
      heading="Tutezy compared with the alternatives"
      lede="Four honest comparisons: against a general chatbot, a consumer AI tutor, recorded video courses, and one-to-one human tutoring. Each one says where the alternative is the better choice."
    >
      <KeyFacts
        title="How Tutezy is positioned"
        items={[
          <>
            <strong>Grounded in your content</strong>, not the open web or a fixed curriculum.
          </>,
          <>
            <strong>Teaches a plan</strong> on a whiteboard, with checks and remediation; it does not wait to be prompted.
          </>,
          <>
            <strong>Is your teacher</strong>: name, cloned voice, avatar, strictness — consent-gated and private.
          </>,
          <>
            <strong>Reports to the institute</strong>: mastery per student and per batch.
          </>,
          <>
            <strong>Priced per learner-minute</strong> (₹3 / $0.03), no seats.
          </>,
        ]}
      />

      <h2>The comparisons</h2>
      <div className="not-prose mt-4 grid gap-4 sm:grid-cols-2">
        {pages.map((p) => (
          <a key={p.path} href={p.path} className="card-hard block p-5 transition hover:bg-paper-2">
            <span className="font-display text-lg font-bold">{p.label}</span>
            <span className="mt-1.5 block text-sm text-ink-700">{p.description}</span>
          </a>
        ))}
      </div>

      <h2>One table</h2>
      <div className="tbl">
        <table>
          <thead>
            <tr>
              <th>&nbsp;</th>
              <th>Tutezy</th>
              <th>General chatbot</th>
              <th>Consumer AI tutor</th>
              <th>Recorded course</th>
              <th>Human tutor</th>
            </tr>
          </thead>
          <tbody>
            <tr><th scope="row">Teaches your material</th><td>Yes, compiled and reviewed</td><td>Only if pasted in each time</td><td>No, its own curriculum</td><td>Yes</td><td>Yes</td></tr>
            <tr><th scope="row">Has a lesson plan</th><td>Yes</td><td>No</td><td>Yes, theirs</td><td>Yes, fixed</td><td>Yes</td></tr>
            <tr><th scope="row">Asks and checks</th><td>Every concept, graded</td><td>If prompted</td><td>Yes</td><td>No</td><td>Yes</td></tr>
            <tr><th scope="row">Reacts to a wrong answer</th><td>Hint, then answer, revisit later</td><td>Sometimes</td><td>Yes</td><td>No</td><td>Yes</td></tr>
            <tr><th scope="row">Your teacher’s voice and face</th><td>Yes</td><td>No</td><td>No</td><td>Yes, recorded</td><td>Yes</td></tr>
            <tr><th scope="row">Reports to the institute</th><td>Per student and batch</td><td>No</td><td>Limited, to the learner’s own school if enrolled</td><td>Views only</td><td>Verbal</td></tr>
            <tr><th scope="row">Hindi and English</th><td>Both, switchable</td><td>Both</td><td>Mostly English</td><td>Whichever was recorded</td><td>Depends</td></tr>
            <tr><th scope="row">Cost per student-hour</th><td>₹180 / $1.80</td><td>₹0–₹1,700/month</td><td>≈ ₹350/month</td><td>Near zero</td><td>₹300–₹1,500+</td></tr>
            <tr><th scope="row">Scales to a batch</th><td>Yes</td><td>Per individual</td><td>Per individual</td><td>Yes</td><td>No</td></tr>
          </tbody>
        </table>
      </div>
      <p className="not-prose mt-4 text-sm text-ink-500">Third-party figures are approximate public list prices as of September 2026; check each product’s site.</p>
    </PageShell>
  );
}

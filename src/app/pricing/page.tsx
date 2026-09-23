import { JsonLd, KeyFacts, PageShell, pageMetadata, type FaqItem } from "@/components/PageShell";
import { SITE } from "@/lib/site";

const PATH = "/pricing/";
export const metadata = pageMetadata(PATH);

const faq: FaqItem[] = [
  ["What counts as a minute?", "A minute of live lesson for one student. The meter runs only while the student is in a session; it stops when they leave or the lesson ends. Reading notes afterwards is free."],
  ["Is there a per-seat or per-student licence?", "No. There are no seat licences, no per-student fees and no minimums. You buy credits and use them across every course and every student."],
  ["What does lesson preparation (compiling) cost?", "A small one-time credit cost per slide, shown before you convert anything. Slides with generated diagrams cost a little more than text-only ones. A 40-slide course typically compiles for under ₹200 in credits."],
  ["Do credits expire?", "Credits do not expire while your account is active."],
  ["Is there volume pricing?", "Yes, for institutes above 1,000 students. Ask for a quote on the demo."],
  ["Is GST included?", "INR prices exclude 18% GST. A GST invoice is issued for every credit purchase."],
  ["What is the avatar surcharge for?", "The lip-synced animated teacher costs more to render, so minutes with the avatar shown are billed at ₹5 / $0.05 instead of ₹3 / $0.03. Students can hide the avatar and you pay the base rate for those minutes."],
  ["What does a voice clone include?", "One teacher voice, cloned from a 15-second sample with recorded consent, usable across every course in your institute, in English and Hindi. ₹2,000 / $20 one-time."],
  ["Can we try before buying credits?", "Yes. There is a free, no-sign-up 10-minute lesson at learner.vacademy.io/try, and a 20-minute demo where we convert one of your own chapters live."],
  ["Do we need to be on Vacademy?", "Tutezy runs inside the Vacademy learner app, so an institute not yet on Vacademy is onboarded first; migration from an existing platform is included. Vacademy’s own pricing is at vacademy.io/pricing."],
];

const offers = [
  { name: "Live lesson", inr: 3, usd: 0.03, unit: "per learner-minute" },
  { name: "Live lesson with animated avatar", inr: 5, usd: 0.05, unit: "per learner-minute" },
  { name: "Teacher voice clone", inr: 2000, usd: 20, unit: "one-time per voice" },
  { name: "Custom teacher avatar", inr: 10000, usd: 100, unit: "one-time per teacher" },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Tutezy live AI tutor",
    url: `${SITE}${PATH}`,
    brand: { "@type": "Brand", name: "Tutezy by Vacademy" },
    description: "Live one-to-one AI whiteboard lessons compiled from an institute’s own content, billed per learner-minute.",
    offers: offers.flatMap((o) => [
      { "@type": "Offer", name: o.name, price: o.inr, priceCurrency: "INR", description: o.unit, availability: "https://schema.org/InStock", url: `${SITE}${PATH}` },
      { "@type": "Offer", name: o.name, price: o.usd, priceCurrency: "USD", description: o.unit, availability: "https://schema.org/InStock", url: `${SITE}${PATH}` },
    ]),
  };
  return (
    <PageShell
      path={PATH}
      eyebrow="Pricing"
      heading="Tutezy pricing"
      lede="Pay per minute a student is actually being taught. No seats, no per-student licence, no minimums. Prepaid credits, used across every course and every student."
      faq={faq}
      related={{ group: "product", title: "Before you buy" }}
    >
      <JsonLd data={jsonLd} />
      <KeyFacts
        title="Rate card (September 2026)"
        items={[
          <>
            <strong>Live lesson:</strong> ₹3 / $0.03 per learner-minute
          </>,
          <>
            <strong>With animated avatar shown:</strong> ₹5 / $0.05 per learner-minute
          </>,
          <>
            <strong>Teacher voice clone:</strong> ₹2,000 / $20 one-time per voice
          </>,
          <>
            <strong>Custom teacher avatar:</strong> ₹10,000 / $100 one-time per teacher (stock avatars free)
          </>,
          <>
            <strong>Lesson preparation:</strong> small one-time credit cost per slide, shown before you convert
          </>,
          <>
            <strong>Volume pricing</strong> above 1,000 students · INR prices exclude 18% GST
          </>,
        ]}
      />

      <h2>The rate card</h2>
      <div className="tbl">
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>INR</th>
              <th>USD</th>
              <th>Billed</th>
              <th>Includes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Live lesson</td>
              <td>₹3</td>
              <td>$0.03</td>
              <td>per learner-minute</td>
              <td>Whiteboard, voice or text, questions, hints, revisits, notes, insights</td>
            </tr>
            <tr>
              <td>Live lesson with animated avatar</td>
              <td>₹5</td>
              <td>$0.05</td>
              <td>per learner-minute, only while the avatar is shown</td>
              <td>Everything above plus the lip-synced teacher on screen</td>
            </tr>
            <tr>
              <td>Teacher voice clone</td>
              <td>₹2,000</td>
              <td>$20</td>
              <td>one-time, per voice</td>
              <td>15-second sample, consent-gated, private to your institute, EN + HI</td>
            </tr>
            <tr>
              <td>Custom teacher avatar</td>
              <td>₹10,000</td>
              <td>$100</td>
              <td>one-time, per teacher</td>
              <td>Built from one photo with consent; stock avatars are free</td>
            </tr>
            <tr>
              <td>Lesson preparation (compile)</td>
              <td colSpan={2}>small, per slide</td>
              <td>one-time, shown before converting</td>
              <td>Boards, diagrams, checks, hints, narration in EN + HI; recompiles are re-charged</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Worked examples</h2>
      <div className="tbl">
        <table>
          <thead>
            <tr>
              <th>Scenario</th>
              <th>Minutes</th>
              <th>INR</th>
              <th>USD</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>One student, one 30-minute chapter</td>
              <td>30</td>
              <td>₹90</td>
              <td>$0.90</td>
            </tr>
            <tr>
              <td>100 students × 30 minutes (one batch, one chapter)</td>
              <td>3,000</td>
              <td>₹9,000</td>
              <td>$90</td>
            </tr>
            <tr>
              <td>100 students × 30 min/day × 22 days (a month of daily use)</td>
              <td>66,000</td>
              <td>₹1,98,000</td>
              <td>$1,980</td>
            </tr>
            <tr>
              <td>500 students × 20 min post-test solution session</td>
              <td>10,000</td>
              <td>₹30,000</td>
              <td>$300</td>
            </tr>
            <tr>
              <td>Same as above with the avatar on throughout</td>
              <td>10,000</td>
              <td>₹50,000</td>
              <td>$500</td>
            </tr>
            <tr>
              <td>Compile a 40-slide course (typical)</td>
              <td>—</td>
              <td>under ₹200</td>
              <td>under $2.50</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        For comparison, a human tutor in India charges roughly ₹300–₹1,500 per hour, or ₹5–₹25 a minute, for one student. Tutezy teaches every
        student in the batch at once for ₹3 a minute each, and the human teacher gets a report of who needs them in person. That comparison is
        laid out honestly, including where the human wins, on <a href="/compare/tutezy-vs-human-tutoring/">Tutezy vs human tutoring</a>.
      </p>

      <h2>How to keep the bill small</h2>
      <ul>
        <li>
          <strong>Use the avatar selectively.</strong> Turn it on for younger learners or spoken-language practice; leave it off for revision
          and problem drills. Students can hide it themselves.
        </li>
        <li>
          <strong>Compile once, review, then leave it.</strong> Preparation is a one-time cost; only recompiles are re-charged.
        </li>
        <li>
          <strong>Set a session length per course.</strong> A 20-minute doubt session is often better than an open-ended one, and it caps
          spend per student.
        </li>
        <li>
          <strong>Watch the itemised usage.</strong> Every credit — compile, lesson minute, avatar minute — is listed per course and per
          student, with a CSV export.
        </li>
      </ul>

      <h2>What is included at no extra charge</h2>
      <ul>
        <li>English and Hindi narration on every compiled slide, and the mid-lesson switch.</li>
        <li>Stock teacher voices and stock avatars.</li>
        <li>Notes written during the lesson and kept for the student.</li>
        <li>Per-student and per-batch insights, weak-concept lists, minutes taught, CSV export.</li>
        <li>Resume: a student who leaves mid-lesson picks up where they stopped.</li>
        <li>Web, Android and iOS through the Vacademy learner app; no separate app.</li>
      </ul>

      <h2>How to buy</h2>
      <p>
        Credits are bought inside the Vacademy admin, in INR or USD, with a GST invoice for Indian purchases. Institutes above 1,000 students
        get a volume quote on the demo. If you are not on Vacademy yet, the demo also covers onboarding; migration from an existing platform is
        included.
      </p>
    </PageShell>
  );
}

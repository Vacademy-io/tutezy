import { KeyFacts, PageShell, pageMetadata, type FaqItem } from "@/components/PageShell";

const PATH = "/hindi-ai-tutor/";
export const metadata = pageMetadata(PATH);

const faq: FaqItem[] = [
  ["Does Tutezy teach fully in Hindi, or only translate?", "Fully. Each concept’s narration is compiled in Hindi as well as English, and the teacher speaks it in a Hindi neural voice or the institute’s cloned voice. Boards are compiled in the course language; technical terms are kept as taught in the source material."],
  ["Can a student switch language in the middle of a lesson?", "Yes. The switch plays the other compiled narration from the same point, with no delay and no loss of position or mastery."],
  ["Does the teacher understand Hindi answers?", "Yes. Spoken answers in Hindi, English or a mix are transcribed and graded against the concept’s rubric. Typed answers in Devanagari or Roman script both work."],
  ["Can our Hindi-medium teacher’s voice be cloned?", "Yes. A 15-second sample with consent produces a voice usable in both languages. ₹2,000 / $20 one-time."],
  ["Which other Indian languages are supported?", "English and Hindi today. Other Indian languages are on the roadmap; tell us on the demo which ones matter to your students."],
  ["Is Hindi priced differently?", "No. ₹3 per learner-minute in either language, ₹5 with the avatar on."],
];

export default function Page() {
  return (
    <PageShell
      path={PATH}
      eyebrow="हिंदी · English"
      heading="A Hindi AI tutor that teaches, not translates"
      lede="Tutezy compiles every lesson in Hindi and English, speaks it in a natural Hindi voice or your teacher’s own, understands answers in either language, and lets the student switch mid-lesson. Built for Hindi-medium and bilingual institutes."
      faq={faq}
      related={{ group: "product", title: "Go deeper" }}
      demoTopic="newton-second-law"
    >
      <KeyFacts
        items={[
          <>Narration compiled in <strong>both</strong> Hindi and English for every concept — not machine-translated on the fly.</>,
          <>Student can <strong>switch language mid-lesson</strong>; the board and the voice follow instantly.</>,
          <>Spoken and typed answers accepted in Hindi, English or Hinglish; Devanagari and Roman script.</>,
          <>Teacher’s own voice, cloned once, usable in both languages.</>,
          <>Same price in either language: ₹3 per learner-minute.</>,
        ]}
      />

      <h2>Why bilingual matters for Indian institutes</h2>
      <p>
        Most coaching batches, school sections and training cohorts in India are mixed: some students think in Hindi, some in English, most
        somewhere in between depending on the subject. A recorded video picks one. A human teacher code-switches naturally. Tutezy is built to
        do what the human does: explain a formula in English, restate the intuition in Hindi when the student asks, and take the answer in
        whichever language it comes.
      </p>

      <h2>How the Hindi lesson is produced</h2>
      <ol>
        <li>
          <strong>Compile.</strong> When a slide is converted, each concept’s spoken narration is written in both English and Hindi as part
          of the teaching plan. Technical vocabulary follows the source material, so a NEET biology term stays the term the textbook uses.
        </li>
        <li>
          <strong>Speak.</strong> Narration is spoken by an Indian-accented neural voice for Hindi, or by the institute’s cloned teacher
          voice, which works in both languages from one sample.
        </li>
        <li>
          <strong>Listen.</strong> Student speech is transcribed with a speech model built for Indian languages; Hindi, English and mixed
          answers are graded against the concept’s rubric.
        </li>
        <li>
          <strong>Switch.</strong> Because both narrations already exist, switching language is instant and free of model calls. The board
          keeps its position; mastery carries over.
        </li>
      </ol>

      <h2>Who uses the Hindi mode</h2>
      <ul>
        <li>
          <strong>Hindi-medium coaching</strong> for NEET, JEE, state PSCs, SSC, banking and railways, where the source PDFs are in English
          but explanation in Hindi is what students need.
        </li>
        <li>
          <strong>CBSE and state-board schools</strong> with bilingual sections, so the same chapter serves both.
        </li>
        <li>
          <strong>Skill and vocational training</strong> where trainees are more comfortable in Hindi than in the language of the manual.
        </li>
        <li>
          <strong>Corporate field-force training</strong> for sales, franchise and service staff across Hindi-speaking regions.
        </li>
      </ul>

      <h2>Try it in Hindi</h2>
      <p>
        The free <a href="https://learner.vacademy.io/try">3-minute lesson</a> can be taken in Hindi: pick a topic, tell the teacher your name,
        and switch language with the toggle once the board is up. Then <a href="/#demo">book a demo</a> and we will convert one of your own
        Hindi-medium chapters live.
      </p>
    </PageShell>
  );
}

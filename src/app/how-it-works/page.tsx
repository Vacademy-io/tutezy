import { KeyFacts, PageShell, pageMetadata, type FaqItem } from "@/components/PageShell";

const PATH = "/how-it-works/";
export const metadata = pageMetadata(PATH);

const faq: FaqItem[] = [
  ["Why compile lessons instead of letting the AI improvise?", "Improvised lessons drift from the source, cost more per minute and cannot be reviewed before a student sees them. Compiling once means the institute can preview every board, the live session is fast and cheap, and the teacher says the same correct thing to every student."],
  ["What happens if a student asks something outside the slide?", "The teacher answers doubts about the material being taught, then brings the lesson back to the plan. It does not wander into unrelated topics or the open web."],
  ["How does Tutezy decide a concept is clear?", "After each check the model returns a structured decision: a score against a rubric, whether to remediate or advance, and a weak-concept flag. Remediation loops are capped so a student is never stuck. Weak concepts are revisited before moving on and carried into the next lesson’s recap."],
  ["Can a lesson be resumed?", "Yes. Learner state — position, mastery per concept, misconceptions and a rolling summary — is saved per student per batch. Reopening a chapter resumes from where the student stopped, with a short recap."],
  ["How long does compiling take?", "Minutes per slide, running in the background with progress shown per slide. A typical chapter is ready well within an hour; the institute reviews boards as they finish."],
  ["Does ordinary progress tracking still work?", "Yes. When the teacher marks a slide done, the same learner-progress records the rest of Vacademy uses are written, so certificates, drip rules and reports are unaffected."],
];

export default function Page() {
  return (
    <PageShell
      path={PATH}
      eyebrow="Mechanism"
      heading="How Tutezy works"
      lede="Two halves. A compile step turns each slide into a reviewed teaching plan. A live runtime teaches that plan one to one, calling the AI model only where judgment is needed. This is why lessons are faithful, fast and ₹3 a minute."
      faq={faq}
      related={{ group: "product", title: "Go deeper" }}
      demoTopic="newton-second-law"
    >
      <KeyFacts
        title="The design in five lines"
        items={[
          <>
            <strong>Compile, don’t improvise.</strong> Every slide becomes a plan: topics → concepts → board steps, narration, checks, hints.
          </>,
          <>
            <strong>Boards are operations, not free text.</strong> The live model never writes raw HTML; it applies whitelisted board ops to a reviewed board.
          </>,
          <>
            <strong>Narration is compiled too</strong>, in English and Hindi, so language switches are instant and the voice can be cached.
          </>,
          <>
            <strong>“Concept is clear” is a structured decision</strong> with a score, a rubric and a capped remediation loop, never a vibe.
          </>,
          <>
            <strong>Nothing existing changes.</strong> Tutezy sits beside courses, tests and progress tracking in Vacademy; it does not replace them.
          </>,
        ]}
      />

      <h2>Part 1 — Compile: from a slide to a teaching plan</h2>
      <p>
        When an institute converts a course, Tutezy reads each published slide — an HTML document, a PDF (scanned ones are OCR-ed), a
        recorded video (transcribed), a slide deck, a quiz — and compiles it with a strong model into a <strong>teaching plan</strong>. A
        plan is strictly hierarchical:
      </p>
      <div className="tbl">
        <table>
          <thead>
            <tr>
              <th>Level</th>
              <th>What it is</th>
              <th>What it carries</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Teaching plan</td>
              <td>One slide version</td>
              <td>Objectives, key terms, the list of topics</td>
            </tr>
            <tr>
              <td>Topic</td>
              <td>One whiteboard’s worth</td>
              <td>The board is cleared when the topic ends</td>
            </tr>
            <tr>
              <td>Concept</td>
              <td>One phase of a topic</td>
              <td>Board operations, default narration (EN + HI), teaching notes, a check</td>
            </tr>
            <tr>
              <td>Check</td>
              <td>The question after a concept</td>
              <td>Type (MCQ, short answer, predict-then-reveal), expected answer, rubric, common misconceptions with hints, pass threshold</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Board content is an ordered list of <strong>whitelisted operations</strong> — heading, bullet, formula, table, SVG diagram, image,
        highlight, note, clear — each with a stable element id. Diagrams are generated as SVG wherever the thing is structural, because an SVG
        part has an id the teacher can later point at (“look at the arrow”). Every image or diagram carries a text description of what it
        shows, so the teacher can refer to it. Concept ids are stable across recompiles, so a student’s mastery survives when the institute
        tightens a board.
      </p>
      <p>
        The institute sees the credit cost per slide before converting, watches progress per slide, and can preview any board exactly as a
        student will see it. Compiling a 40-slide course typically costs under ₹200 in credits.
      </p>

      <h2>Part 2 — Live: a state machine that calls the model only when it must</h2>
      <p>
        When a student presses <em>Learn with the teacher</em>, the browser opens a socket to the tutor runtime, which loads the plan for that
        slide, the student’s saved state and their last summary. Then it runs a loop, per concept:
      </p>
      <ol>
        <li>
          <strong>Teach.</strong> Board operations are streamed and drawn sentence by sentence while the compiled narration plays in the
          teacher’s voice. No model call is needed for this step.
        </li>
        <li>
          <strong>Check.</strong> The concept’s question is asked aloud and shown. The student answers by voice (transcribed) or text. Silence
          for a while triggers a nudge.
        </li>
        <li>
          <strong>Decide.</strong> This is the model call. It returns JSON, not prose: a score against the rubric, whether to remediate or
          advance, what to say, which board ops to apply (a highlight, an extra line written for this student), and a state delta (mastery,
          misconception noted, weak flag).
        </li>
        <li>
          <strong>Remediate or move on.</strong> Wrong answers get a hint first, then the answer kept on the board; loops are capped. Weak
          concepts are queued for a revisit before the topic closes.
        </li>
        <li>
          <strong>Record.</strong> The attempt and the new learner state are saved. When the slide finishes, the ordinary Vacademy progress
          records are written, so the rest of the platform (drip, certificates, reports) carries on as usual.
        </li>
      </ol>
      <p>
        Because narration is compiled, the same sentence is spoken to every student, which lets the voice be cached and keeps live cost low.
        The student can still change pace (the voice speed changes) and language (the other compiled narration is played, no model call).
        Doubts are answered by the model against the material on the board.
      </p>

      <h2>Voice, listening and languages</h2>
      <ul>
        <li>
          <strong>Speaking:</strong> Indian-accented neural voices by default; an institute can clone a teacher’s voice from a 15-second
          sample (consent recorded, private to the institute). Pace is remembered per student.
        </li>
        <li>
          <strong>Listening:</strong> student speech is transcribed in short chunks; answers can also be typed.
        </li>
        <li>
          <strong>Languages:</strong> English and Hindi in the current release. Boards are compiled in the course language, and narration in
          both, so the mid-lesson switch is instant. See the <a href="/hindi-ai-tutor/">Hindi AI tutor</a> page.
        </li>
        <li>
          <strong>Avatar:</strong> optionally, a lip-synced animated teacher built from one photo, or a stock one. Billed only while shown.
        </li>
      </ul>

      <h2>Teacher identity and strictness</h2>
      <p>
        Institute-level defaults — teacher name, photo, voice, avatar, languages, strictness (gentle, normal, strict) — are set once and
        inherited by every course; any course can override them. Voice clones and custom avatars are created only with recorded consent, are
        private to the institute, and can be disabled at any time.
      </p>

      <h2>What the institute gets back</h2>
      <p>
        Per student: concept mastery, misconceptions noted, minutes taught, notes and a session summary. Per batch: weak concepts across the
        cohort, so the human teacher knows what to reteach in the next live class. Everything exports to CSV. Every credit spent — compile,
        lesson minutes, avatar minutes — is itemised.
      </p>

      <h2>Why this architecture matters to a buyer</h2>
      <ul>
        <li>
          <strong>Fidelity:</strong> the teacher cannot drift from your material, because the boards were compiled from it and reviewed.
        </li>
        <li>
          <strong>Cost:</strong> a flash-class model handles three or four decision turns a minute; compiled narration is cached. That is how
          the price lands at ₹3 a learner-minute.
        </li>
        <li>
          <strong>Reviewability:</strong> an academic head can open any board before a single student sees it.
        </li>
        <li>
          <strong>Safety:</strong> the live model works within a whitelist of board operations and a plan; it does not author arbitrary
          content or fetch from the web.
        </li>
      </ul>
    </PageShell>
  );
}

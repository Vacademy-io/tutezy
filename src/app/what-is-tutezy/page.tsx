import { KeyFacts, PageShell, pageMetadata, type FaqItem } from "@/components/PageShell";

const PATH = "/what-is-tutezy/";
export const metadata = pageMetadata(PATH);

const faq: FaqItem[] = [
  ["Is Tutezy a chatbot?", "No. A chatbot waits for a question. Tutezy teaches a syllabus: it opens the board, explains, asks, listens, corrects and moves the student forward through the chapter, and it reports what each student understood. A student can ask doubts along the way, but the lesson has a plan."],
  ["Does Tutezy make up content?", "Lessons are compiled from the institute’s own slides, PDFs, videos and question banks. The live model does not write boards from scratch; it plays the compiled plan and is called only to grade answers, give hints, answer doubts and adapt pace. That is what keeps the lesson faithful to the source."],
  ["Who is Tutezy for?", "Coaching and test-prep institutes, K-12 schools, universities, course creators and course platforms, corporate and HR training teams, certification providers and independent tutors — any organisation that already has teaching material and wants each learner taught one to one."],
  ["Which languages does Tutezy teach in?", "English and Hindi. Boards and narration are compiled in both, so a student can switch mid-lesson. More Indian languages are on the roadmap."],
  ["What does Tutezy cost?", "₹3 ($0.03) per learner per minute of live lesson, ₹5 ($0.05) with the animated avatar on. Voice cloning is ₹2,000 ($20) per voice and a custom avatar ₹10,000 ($100), both one-time. No seat licences."],
  ["Do students need a new app?", "No. Tutezy runs inside the Vacademy learner app on web, Android and iOS, next to the institute’s courses, tests and live classes."],
];

export default function Page() {
  return (
    <PageShell
      path={PATH}
      eyebrow="Definition"
      heading="What is Tutezy?"
      lede="Tutezy is a live AI tutor that an institute switches on for a course. It takes the content the institute already has and teaches it to each student one to one, on a whiteboard, in the institute’s own teacher’s voice, with questions, hints, revisits and a report back."
      faq={faq}
      related={{ group: "product", title: "Go deeper" }}
      demoTopic="photosynthesis"
    >
      <KeyFacts
        items={[
          <>
            <strong>Category:</strong> AI tutor / personalised teaching mode for institutes, not a consumer study app.
          </>,
          <>
            <strong>Input:</strong> your PDFs (incl. scanned), recorded videos, slides, question banks.
          </>,
          <>
            <strong>Output:</strong> a live one-to-one whiteboard lesson per slide, with voice, checks, hints, remediation and notes.
          </>,
          <>
            <strong>Teacher:</strong> your teacher’s name, photo, cloned voice and optional animated avatar.
          </>,
          <>
            <strong>Languages:</strong> English and Hindi, switchable mid-lesson.
          </>,
          <>
            <strong>Price:</strong> ₹3 / $0.03 per learner-minute; no seats, no minimums.
          </>,
          <>
            <strong>Maker:</strong> <a href="https://vacademy.io">Vacademy</a>, the education OS for courses, tests, live classes and CRM.
          </>,
        ]}
      />

      <h2>The one-sentence version</h2>
      <p>
        <strong>Your content + Tutezy AI = an interactive, personalised learning experience.</strong> An institute does not write scripts or
        re-author anything. It points Tutezy at a course, reviews the compiled lessons, and every student who opens that course is taught by
        a teacher who explains on a board, waits for an answer, corrects, and comes back to what that student found hard.
      </p>

      <h2>What a student actually experiences</h2>
      <p>
        The student opens a chapter and presses <em>Learn with the teacher</em>. The teacher greets them by name (or picks up where they left
        off), and starts writing on the board while speaking: a heading, a definition, a worked example, a diagram — sentence by sentence, the
        way a good teacher paces a board rather than dumping a slide. After each concept the teacher asks a question. The student answers by
        voice or by typing. If they go quiet for a while the teacher nudges. If they are wrong, they get a hint first, then the answer, kept on
        the board. Concepts the student missed are revisited before the lesson moves on, and the next lesson opens with a recap the student can
        actually use. Notes are written as the lesson goes and kept.
      </p>
      <p>
        The student sets the pace (slower, slow, medium, fast) and can switch between English and Hindi mid-lesson. The board and the voice
        follow. If the institute has turned it on, an animated, lip-synced avatar of the teacher is on screen; students can hide it.
      </p>

      <h2>What the institute does</h2>
      <ol>
        <li>
          <strong>Turn on Tutor Mode</strong> in the Vacademy admin: teacher name, photo, voice (stock or cloned from a 15-second sample),
          languages, strictness. Every course inherits these; any course can override.
        </li>
        <li>
          <strong>Pick a course and see the cost.</strong> Tutezy lists every slide and shows the credits it will take to convert them before
          anything is pressed.
        </li>
        <li>
          <strong>Compile and review.</strong> One click compiles a teaching plan per slide: boards, examples, diagrams, checks, hints, recap.
          Any board can be previewed exactly as the student will see it and recompiled if it needs tightening.
        </li>
        <li>
          <strong>Read the insights.</strong> Concept mastery per student and per batch, minutes taught, weak spots, and a CSV export for the
          academic head. Every credit spent is itemised.
        </li>
      </ol>
      <p>
        The full mechanism is on the <a href="/how-it-works/">how it works</a> page; the setup screens are on the{" "}
        <a href="/#create">home page</a>.
      </p>

      <h2>What Tutezy is not</h2>
      <ul>
        <li>
          <strong>Not a general chatbot.</strong> It does not browse the web and it does not answer whatever is typed at it. It teaches the
          institute’s material, and it can answer doubts about that material. See <a href="/compare/tutezy-vs-chatgpt/">Tutezy vs ChatGPT</a>.
        </li>
        <li>
          <strong>Not a fixed curriculum.</strong> Consumer AI tutors come with their own syllabus. Tutezy has none of its own; it is only as
          broad as the content you give it. See <a href="/compare/tutezy-vs-khanmigo/">Tutezy vs Khanmigo</a>.
        </li>
        <li>
          <strong>Not a video generator.</strong> Nothing is pre-rendered. The board is drawn live from a compiled plan and the conversation
          is live, which is why it can react to a wrong answer. See <a href="/compare/tutezy-vs-recorded-courses/">Tutezy vs recorded courses</a>.
        </li>
        <li>
          <strong>Not a replacement for teachers.</strong> It is the teacher, multiplied. The human sees who is stuck where before the next
          live class. See <a href="/compare/tutezy-vs-human-tutoring/">Tutezy vs human tutoring</a>.
        </li>
      </ul>

      <h2>Where it runs, and what it costs</h2>
      <p>
        Tutezy is a module of <a href="https://vacademy.io">Vacademy</a>. Students use it inside the Vacademy learner app (web, Android, iOS),
        so an institute already on Vacademy adds it in an afternoon; an institute that is not gets onboarding covered on the demo. It is billed
        per learner-minute of live lesson — ₹3 or $0.03, ₹5 / $0.05 with the avatar on — from prepaid credits. There are no seat licences and
        no minimums. Details and worked examples are on the <a href="/pricing/">pricing page</a>.
      </p>

      <h2>Try it before you read further</h2>
      <p>
        There is a free, no-sign-up <a href="https://learner.vacademy.io/try">3-minute lesson</a> on one of ten sample topics — photosynthesis,
        Newton’s second law, a tough NEET biology question, a JEE maths problem, Spanish basics, an HR feedback practice round and others. It
        is the real product with a short timer, not a video.
      </p>
    </PageShell>
  );
}

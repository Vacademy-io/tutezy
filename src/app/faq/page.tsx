import { FaqBlock, JsonLd, PageShell, pageMetadata, type FaqItem } from "@/components/PageShell";

const PATH = "/faq/";
export const metadata = pageMetadata(PATH);

const GROUPS: Array<[string, FaqItem[]]> = [
  [
    "What it is",
    [
      ["What is Tutezy in one sentence?", "Tutezy is a live AI tutor that turns an institute’s existing PDFs, videos and slides into one-to-one whiteboard lessons taught in the institute’s own teacher’s voice, with questions, hints, revisits and a report back — billed per learner-minute."],
      ["Who makes Tutezy?", "Vacademy (vacademy.io), an education operating system used by coaching institutes, schools, universities and training companies for courses, tests, live classes, fee collection and CRM. Tutezy is a Vacademy product and runs inside the Vacademy learner app."],
      ["Does it replace our teachers?", "No. It multiplies them. Your teachers’ content, name, voice and face teach every student one to one, while the teacher sees who is stuck where before the next live class."],
      ["Is it a chatbot?", "No. A chatbot waits to be asked. Tutezy teaches a planned lesson on a board, checks understanding after each concept, remediates, and moves the student on. Students can ask doubts, but the lesson has a plan compiled from your material."],
      ["Is it a video?", "No. Nothing is pre-rendered. The board is drawn live from a compiled plan and the conversation is live, which is why the teacher can react to a wrong answer or a doubt."],
    ],
  ],
  [
    "Content",
    [
      ["What content works?", "PDFs (including scanned ones, which are OCR-ed), recorded videos (transcribed), slide decks and presentations, HTML documents and question banks. You see the credit cost before anything is converted."],
      ["Do we have to rewrite anything?", "No. There are no scripts to write. Tutezy compiles each slide into boards, examples, diagrams, checks and hints. You review the result and recompile anything you want tighter."],
      ["Will the AI make things up?", "The live model does not author boards; it plays a plan compiled from your content and reviewed by you. It is called only to grade answers, give hints, answer doubts about the material and adapt pace. It does not browse the web."],
      ["Can we edit a compiled lesson?", "You can preview any board exactly as a student will see it and recompile a slide, or edit the source slide and recompile. Concept ids are stable across recompiles so student mastery is not lost."],
      ["What about maths, chemistry and diagrams?", "Formulas are a first-class board element. Structural diagrams are generated as SVG so the teacher can point at parts of them (“look at the arrow”). Images are described in text so the teacher can refer to them."],
      ["Does it work for non-academic training?", "Yes. Onboarding, compliance, product and process training compile the same way from decks and videos, and the checks can be situational (“a customer says X — what do you do?”)."],
    ],
  ],
  [
    "The lesson",
    [
      ["What does a student see?", "A whiteboard that fills in as the teacher speaks, a question after each concept, hints when they are wrong, a revisit of weak concepts before moving on, and notes written as the lesson goes. Optionally, an animated teacher on screen."],
      ["How do students answer?", "By voice or by typing. Multiple choice, short answers and predict-then-reveal prompts are all supported. If a student goes quiet, the teacher nudges."],
      ["Can students ask doubts?", "Yes, at any point. The teacher answers against the material on the board and then returns to the lesson."],
      ["Can students control the pace?", "Yes: slower, slow, medium, fast. The setting is remembered per student."],
      ["What if a student leaves mid-lesson?", "Their position, mastery per concept and a rolling summary are saved. Reopening the chapter resumes with a short recap."],
      ["How does it decide a student has understood?", "Each check returns a structured score against a rubric, with capped remediation. Concepts below threshold are flagged weak, revisited before the topic closes, and carried into the next lesson’s recap."],
    ],
  ],
  [
    "Languages and voice",
    [
      ["Which languages?", "English and Hindi today. Boards and narration are compiled in both, so a student can switch mid-lesson without losing the thread. More Indian languages are on the roadmap; ask on the demo. See the Hindi AI tutor page."],
      ["Can it speak in our teacher’s voice?", "Yes. A voice is cloned from a 15-second sample with recorded consent, is private to your institute, and can be disabled at any time. ₹2,000 / $20 one-time per voice."],
      ["What is the avatar?", "A lip-synced animated teacher built from one photo (₹10,000 / $100 one-time), or a free stock avatar. Minutes with the avatar shown are billed at ₹5 / $0.05 instead of ₹3 / $0.03. Students can hide it."],
      ["Is the teacher’s likeness safe?", "Voice clones and avatars are created only with recorded consent, are private to your institute, and nobody else on the platform can pick them. They can be deleted on request."],
    ],
  ],
  [
    "Pricing",
    [
      ["How does pricing work?", "Prepaid credits. A live lesson costs ₹3 ($0.03) per student per minute, ₹5 ($0.05) with the animated avatar on. Voice cloning is ₹2,000 ($20) per voice and a custom avatar ₹10,000 ($100), one time. No seat licences. Full rate card and worked examples on the pricing page."],
      ["Is there a minimum or a per-student licence?", "No minimums, no seat licences. 100 students × 30 minutes costs ₹9,000 / $90."],
      ["What does preparation cost?", "A small one-time credit cost per slide, shown before you convert. A typical 40-slide course compiles for under ₹200."],
      ["Do credits expire?", "Not while your account is active."],
    ],
  ],
  [
    "Setup, apps and data",
    [
      ["Do students need a new app?", "No. Tutezy runs inside the Vacademy learner app — web, Android and iOS — next to your courses, tests and live classes. If you are not on Vacademy yet, the demo covers onboarding."],
      ["How long does setup take?", "An afternoon. Turn on Tutor Mode (teacher, voice, languages, strictness), pick a course, see the cost, compile, review. No content team, no scripts, no new app for students."],
      ["What reports do we get?", "Per-student concept mastery, weak spots per batch, minutes taught, session summaries, notes, and a CSV export for the academic head. Every credit spent is itemised."],
      ["Where is our data stored, and who can see it?", "Your content, compiled plans, student transcripts and reports belong to your institute and are visible only to your institute’s admins. They are not used to train models for other customers."],
      ["Can we try it first?", "Yes. A free, no-sign-up 3-minute lesson is at learner.vacademy.io/try, and a 20-minute demo converts one of your own chapters live."],
    ],
  ],
];

export default function Page() {
  // One FAQPage for the whole page (Google wants a single block per URL).
  const all = GROUPS.flatMap(([, items]) => items);
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: all.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  };
  return (
    <PageShell
      path={PATH}
      eyebrow="FAQ"
      heading="Tutezy: 30 questions institutes ask"
      lede="Straight answers, grouped. If yours is not here, email hello@tutezy.ai or ask on the call."
      related={{ group: "product", title: "Go deeper" }}
    >
      <JsonLd data={schema} />
      <nav aria-label="FAQ sections" className="not-prose flex flex-wrap gap-2">
        {GROUPS.map(([g]) => (
          <a key={g} href={`#${g.toLowerCase().replace(/[^a-z]+/g, "-")}`} className="btn-hard rounded-full bg-white px-3 py-1.5 font-display text-sm font-bold text-ink">
            {g}
          </a>
        ))}
      </nav>
      {GROUPS.map(([g, items]) => (
        <div key={g} id={g.toLowerCase().replace(/[^a-z]+/g, "-")}>
          <FaqBlock title={g} items={items} schema={false} />
        </div>
      ))}
    </PageShell>
  );
}

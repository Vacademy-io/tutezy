import { AudiencePage, type AudienceContent } from "@/components/AudiencePage";
import { pageMetadata } from "@/components/PageShell";

const PATH = "/for/schools/";
export const metadata = pageMetadata(PATH);

const c: AudienceContent = {
  path: PATH,
  eyebrow: "K-12 schools",
  heading: "An AI tutor for schools",
  lede: "A patient one-to-one teacher for every child after the bell: homework help, practice and revision built from the school’s own material, in the class teacher’s voice, reported back to the staff room.",
  facts: [
    <>Compiled from the school’s own worksheets, textbook chapters and lesson decks.</>,
    <>Gentle, normal or strict teacher tone per class; pace set by the child.</>,
    <>Hindi and English; parents can follow the notes.</>,
    <>Teachers see which children are stuck on which concept, before the test.</>,
    <>₹3 / learner-minute; a class of 40 × 20 minutes = ₹2,400.</>,
  ],
  problem: (
    <>
      <p>
        Thirty-five children, one teacher, forty minutes. The lesson moves at the pace of the middle of the room. The children who did not get
        it go home with homework they cannot start, and the ones who did are bored. Private tuition fills the gap for families who can afford
        it, in a voice and method that may contradict the classroom.
      </p>
      <p>The school already has the material: chapters, worksheets, question papers, the teacher’s own slides. What it lacks is thirty-five teachers.</p>
    </>
  ),
  sessions: [
    { t: "Homework help", d: "The child opens today’s chapter; the teacher re-explains the part they are stuck on and checks with one question, then lets them try." },
    { t: "Practice and drills", d: "Tables, grammar, formulae, spellings — short checks with hints, in the order the school teaches them." },
    { t: "Revision before unit tests", d: "A recap board of the unit with quick questions; weak concepts flagged to the class teacher." },
    { t: "Reading and language practice", d: "Spoken English or Hindi practice with instant, kind correction — the teacher listens and replies by voice." },
    { t: "Catch-up after absence", d: "A child who missed a week is walked through what the class did, at their pace, without holding up the room." },
    { t: "Parent-visible notes", d: "Every lesson leaves notes the parent can read, so home support follows the school’s method, not a contradictory one." },
  ],
  learnerGets: [
    "A teacher who waits, nudges kindly, and never sighs.",
    "The same explanation and vocabulary as the classroom, so nothing contradicts the teacher.",
    "Pace they choose; Hindi or English; a picture or diagram drawn when words are not enough.",
    "Notes to show a parent.",
  ],
  instituteGets: [
    "A per-child, per-concept picture before the unit test, not after.",
    "A class-level weak-concept list for the next period.",
    "A retention and fee story for parents: one-to-one support included, in the school’s own method.",
    "Consent-gated teacher voices, private to the school; likeness can be disabled at any time.",
    "No new app: it lives inside the school’s Vacademy learner app.",
  ],
  example: (
    <>
      <p>
        A CBSE school opens Tutezy for Classes 6–8 maths and science: 600 children, 20 minutes each on three evenings a week. That is 36,000
        learner-minutes a week, ₹1,08,000 — ₹180 per child per week, or roughly ₹720 a month, against private tuition that starts at ₹2,000 a
        month and follows someone else’s method. Teachers open Monday with a list of the concepts each section missed.
      </p>
    </>
  ),
  notFor: [
    "Early primary where the goal is reading readiness and motor skills; Tutezy is for children who can read a board and answer a question, roughly Class 4 upwards.",
    "Replacing classroom teaching. It is the after-hours one-to-one layer.",
    "Schools with no digital material; record or scan the chapters first — scanned PDFs are OCR-ed.",
  ],
  faq: [
    ["Is it safe for children?", "The teacher works only from the school’s compiled material and answers doubts about it; it does not browse the web. Sessions are logged and visible to school admins. Voices and avatars are consent-gated."],
    ["Can the tone be adjusted for younger children?", "Yes. Strictness (gentle, normal, strict) and pace are set per course, and the child can slow the teacher down."],
    ["Do parents get anything?", "Notes from each lesson are kept for the child and can be shared through the Vacademy parent app."],
    ["Does it follow our textbook?", "It compiles from whatever the school uploads: NCERT or board chapters, the school’s own worksheets and slides. Vocabulary follows the source."],
    ["What does it cost per child?", "₹3 per minute of lesson. Twenty minutes three times a week is about ₹720 a month per child. Full rate card on the pricing page."],
  ],
  demoTopic: "photosynthesis",
};

export default function Page() {
  return <AudiencePage c={c} />;
}

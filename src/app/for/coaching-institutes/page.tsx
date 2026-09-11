import { AudiencePage, type AudienceContent } from "@/components/AudiencePage";
import { pageMetadata } from "@/components/PageShell";

const PATH = "/for/coaching-institutes/";
export const metadata = pageMetadata(PATH);

const c: AudienceContent = {
  path: PATH,
  eyebrow: "Coaching & test-prep",
  heading: "An AI tutor for coaching institutes",
  lede: "NEET, JEE, UPSC, banking, SSC, CA, CUET: every student in the batch gets a one-to-one teacher for doubts, post-test solution sessions and revision, in your own faculty’s voice, at ₹3 per learner-minute.",
  facts: [
    <>Built from <strong>your</strong> modules, DPPs, test papers and recorded lectures; nothing generic.</>,
    <>Hindi and English, switchable mid-lesson — for Hindi-medium and bilingual batches.</>,
    <>Post-test sessions walk each student through <strong>their own</strong> wrong answers.</>,
    <>Faculty get a weak-concept list per batch before the next live class.</>,
    <>₹3 / learner-minute; 500 students × 20 minutes = ₹30,000. No seats.</>,
  ],
  problem: (
    <>
      <p>
        A batch of 200 has one faculty member. Doubt-clearing hours serve the ten students who ask; the rest stay quiet. After every test the
        solution class covers the class average, not the mistakes each student actually made. Toppers get bored, weak students drop off, and
        parents ask why they are paying for a lecture their child could have watched on YouTube.
      </p>
      <p>
        The material to fix this already exists: the institute’s own modules, question banks, previous-year papers and recorded lectures. What is
        missing is a teacher with time for each student.
      </p>
    </>
  ),
  sessions: [
    { t: "Chapter lessons", d: "Every module and DPP becomes a live one-to-one board lesson the student can question, paced to them." },
    { t: "Doubt-solving", d: "Students bring the doubt after class; the teacher explains on the board, checks they got it, and logs the concept for faculty." },
    { t: "Post-test solution sessions", d: "After a mock, each student is walked through the questions they got wrong: the trap, the fast method, and a fresh check." },
    { t: "Revision before exams", d: "Rapid-fire recap boards across the syllabus with quick checks, in the student’s language and pace." },
    { t: "Previous-year question drills", d: "Worked PYQs with predict-then-reveal prompts; the teacher asks the next step before showing it." },
    { t: "Interview and viva prep", d: "For UPSC, banking and CA: mock questions asked aloud, answers heard and graded, model answers on the board." },
  ],
  learnerGets: [
    "A teacher who explains their wrong answers, not the class average’s.",
    "Hints before answers; weak concepts revisited before moving on; a recap next time.",
    "Hindi or English, switchable mid-lesson; slower or faster on demand.",
    "Notes written during the lesson and kept.",
    "The same faculty voice and face they know from live class.",
  ],
  instituteGets: [
    "Weak concepts per batch, so the next live class targets what the cohort actually got wrong.",
    "Concept mastery and minutes taught per student; the students who never ask are finally visible.",
    "A retention story for parents: one-to-one teaching for every child, itemised.",
    "CSV export for the academic head; every credit itemised per course and student.",
    "No content team, no scripts, no new app; students use it inside the same Vacademy app.",
  ],
  example: (
    <>
      <p>
        A NEET institute with 500 students runs a full mock every Sunday. On Monday, instead of one solution lecture, every student opens a
        20-minute Tutezy session on their own wrong answers: 10,000 learner-minutes, ₹30,000 for the week (₹60 per student). By Tuesday the
        faculty has a list of the ten concepts the batch missed most, and the live class that week covers those ten. Over a month that is
        ₹1,20,000 for 500 students — ₹240 per student per month — for four personalised solution sessions each.
      </p>
      <p>
        Compare a single human tutor at ₹500 an hour: the same 20 minutes for one student costs ₹167, and there are not 500 hours in a Monday.
      </p>
    </>
  ),
  notFor: [
    "Institutes with no digital material at all. Tutezy compiles from PDFs, decks and recordings; if lectures exist only in the faculty’s head, record them first.",
    "Replacing the live class. Tutezy is the one-to-one layer between live classes, not a substitute for the faculty on stage.",
    "Ranking-style test analytics. Tutezy reports concept mastery; the Vacademy assessment module does percentile and section analysis.",
  ],
  faq: [
    ["Can it teach from our own test papers and DPPs?", "Yes. Question banks and papers compile into worked-solution lessons with predict-then-reveal checks, so the student is asked for the next step before it is shown."],
    ["Will it use the same methods our faculty teach?", "It teaches from your material, so shortcuts and methods in your modules are the ones it uses. If a method is only taught orally, record the lecture and Tutezy will transcribe and compile it."],
    ["Does it work for Hindi-medium batches?", "Yes. Narration is compiled in Hindi and English for every concept and the student can switch mid-lesson. See the Hindi AI tutor page."],
    ["How does a post-test solution session know what each student got wrong?", "Test results live in Vacademy, so the session opens on the questions that student missed and walks through those first."],
    ["What does it cost for a batch?", "₹3 per learner-minute. A 20-minute session for 500 students is ₹30,000; a 30-minute chapter for 100 students is ₹9,000. Full rate card on the pricing page."],
    ["Will students stop coming to live class?", "Institutes report the opposite: students arrive at the live class with their doubts already narrowed, and faculty walk in knowing the batch’s weak concepts."],
  ],
  demoTopic: "neet-biology-tough",
};

export default function Page() {
  return <AudiencePage c={c} />;
}

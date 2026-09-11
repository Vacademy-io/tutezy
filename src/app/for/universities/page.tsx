import { AudiencePage, type AudienceContent } from "@/components/AudiencePage";
import { pageMetadata } from "@/components/PageShell";

const PATH = "/for/universities/";
export const metadata = pageMetadata(PATH);

const c: AudienceContent = {
  path: PATH,
  eyebrow: "Universities & colleges",
  heading: "An AI tutor for universities and colleges",
  lede: "A teaching assistant per subject, compiled from the faculty’s own notes, slides and recorded lectures, that teaches on a whiteboard, checks understanding and reports to the department — for every student in the cohort, not the few who visit office hours.",
  facts: [
    <>Compiled from lecture slides, notes, recorded lectures and past papers.</>,
    <>Faculty review every board before students see it; likeness is consent-gated.</>,
    <>Viva and practical-exam preparation with spoken questions and graded answers.</>,
    <>Mastery per student and per course for the department and accreditation files.</>,
    <>₹3 / learner-minute; 2,000 students × 30 minutes = ₹1,80,000 per round.</>,
  ],
  problem: (
    <>
      <p>
        A first-year cohort of 800 has one professor and two TAs. Office hours reach the confident few. Everyone else learns from a friend’s
        notes and a YouTube channel that teaches a different notation. By the end-semester exam the department finds out who did not understand
        week three, and the remedial class starts too late.
      </p>
    </>
  ),
  sessions: [
    { t: "Lecture companion", d: "Each lecture’s slides and recording become a one-to-one board lesson the student can question, in the professor’s notation." },
    { t: "Tutorial and problem sets", d: "Worked problems with predict-then-reveal prompts, hints before answers, and the method the department teaches." },
    { t: "Viva and practical preparation", d: "Spoken questions, answers heard and graded, model answers on the board — as many rounds as the student wants." },
    { t: "Bridge and remedial courses", d: "First-year gaps in maths or English closed at the student’s pace before they compound." },
    { t: "Exam revision", d: "Recap boards per unit with quick checks; weak concepts per cohort surfaced to the course coordinator." },
    { t: "Distance and online programmes", d: "A mentor for every enrolled learner, in Hindi or English, without more faculty hours." },
  ],
  learnerGets: [
    "A TA who is available at midnight, uses the professor’s notation, and asks whether they understood.",
    "Weak concepts revisited before moving on; a recap at the next session; notes kept.",
    "Hindi or English, pace they choose.",
  ],
  instituteGets: [
    "Mastery per student per course, weeks before the exam, to target remedial classes.",
    "Cohort-level weak concepts per week for the course coordinator.",
    "Evidence of learner engagement and support for accreditation and NAAC/NBA files.",
    "Faculty control: every board reviewed; voice and likeness consent-gated and private.",
    "Itemised usage per course; CSV export.",
  ],
  example: (
    <>
      <p>
        An engineering college opens Tutezy on first-year Mathematics and Physics for 1,200 students, 30 minutes a week each: 36,000
        learner-minutes, ₹1,08,000 a week, ₹90 per student per week. By week four the department has, per section, the concepts the cohort is
        missing, and schedules two remedial sessions instead of discovering the gap in the end-semester results.
      </p>
    </>
  ),
  notFor: [
    "Research supervision and open-ended project work; Tutezy teaches defined material with checkable understanding.",
    "Replacing lectures or labs; it is the one-to-one layer around them.",
    "Courses with no written or recorded material yet.",
  ],
  faq: [
    ["Do faculty control what is taught?", "Yes. Lessons are compiled from the faculty’s own material and every board can be previewed and recompiled before students see it. Voice and likeness are used only with recorded consent."],
    ["Can it use our notation and methods?", "It teaches from your slides and notes, so the notation is yours. If a method is taught only orally, the recorded lecture is transcribed and compiled."],
    ["Does it integrate with our LMS or ERP?", "Tutezy runs inside the Vacademy platform, which provides courses, assessments, the learner app and reporting. Ask on the demo about your specific integration."],
    ["What does it cost at university scale?", "₹3 per learner-minute with volume pricing above 1,000 students. A 30-minute weekly session for 2,000 students is ₹1,80,000 per week at list; ask for a volume quote."],
    ["Is student data private?", "Content, transcripts and reports belong to the institution, are visible only to its admins, and are not used to train models for other customers."],
  ],
  demoTopic: "newton-second-law",
};

export default function Page() {
  return <AudiencePage c={c} />;
}

import { ComparePage, type CompareContent } from "@/components/ComparePage";
import { pageMetadata } from "@/components/PageShell";

const PATH = "/compare/tutezy-vs-khanmigo/";
export const metadata = pageMetadata(PATH);

const c: CompareContent = {
  path: PATH,
  other: "Khanmigo",
  heading: "Tutezy vs Khanmigo",
  lede: "Khanmigo is Khan Academy’s AI tutor for its own curriculum, aimed at individual learners, parents and (mostly US) classroom teachers. Tutezy teaches an institute’s own material, in its own teacher’s voice, and reports back to the institute. They solve different problems.",
  verdict: [
    <>
      <strong>Khanmigo</strong>: a well-designed Socratic tutor on Khan Academy’s curriculum, for individuals and schools using that curriculum.
    </>,
    <>
      <strong>Tutezy</strong>: a live whiteboard teacher compiled from <em>your</em> content, for institutes that need it taught their way and reported back.
    </>,
    <>If your students learn Khan Academy’s syllabus, Khanmigo is excellent and cheap. If they learn yours, it cannot help.</>,
    <>Tutezy also speaks Hindi, clones your teacher’s voice and bills the institute per minute rather than the learner per month.</>,
  ],
  otherIs: (
    <p>
      Khanmigo is the AI tutor and teaching assistant built by Khan Academy, a non-profit. It guides learners through Khan Academy’s own
      courses with Socratic questioning rather than answers, helps with practice problems on the platform, and gives teachers lesson-planning
      and grading assistance. It is priced for individual learners and families at a small monthly fee, and offered to teachers in some
      countries at no cost. It is tied to Khan Academy’s curriculum and interface; it does not ingest a third-party institute’s material.
    </p>
  ),
  rows: [
    ["Curriculum", "Yours: whatever you upload and compile", "Khan Academy’s courses"],
    ["Who it is sold to", "Institutes, schools, creators, trainers; billed per learner-minute", "Individual learners and families; teachers in some regions"],
    ["Medium", "Live whiteboard drawn as the teacher speaks, plus voice", "Chat beside Khan Academy content and exercises"],
    ["Teacher identity", "Your teacher’s name, cloned voice, optional avatar", "A Khan Academy character"],
    ["Languages", "English and Hindi, switchable mid-lesson", "Primarily English, with some localisation"],
    ["Checks and remediation", "Rubric-graded checks per concept, hints, revisits, next-lesson recap", "Socratic prompts on Khan exercises"],
    ["Reports", "Per student and per batch, to your institute, CSV", "Learner progress within Khan Academy; teacher tools for Khan classrooms"],
    ["Fit for Indian exam prep, corporate training, certification", "Yes, from your own material", "No — outside its curriculum"],
    ["Price", "₹3 / $0.03 per learner-minute; no seats", "Small monthly fee per learner (see khanmigo.ai)"],
  ],
  chooseOther: [
    "The learner is studying Khan Academy’s courses and wants a tutor on them.",
    "A parent wants an affordable, safe tutor for general school maths and science at home.",
    "A school uses Khan Academy as its curriculum and wants its teacher tools.",
  ],
  chooseTutezy: [
    "The material is yours: coaching modules, school worksheets, a creator’s course, a corporate deck, a university’s notes.",
    "The teaching must be in the institute’s teacher’s voice and method, and reviewed before students see it.",
    "You need mastery reports per student and per batch back at the institute.",
    "Students need Hindi, or a mid-lesson switch between Hindi and English.",
    "You want to be billed for minutes taught, not per learner per month.",
  ],
  body: (
    <>
      <h2>The real difference: whose content, whose teacher, whose report</h2>
      <p>
        A consumer AI tutor comes with a curriculum, a persona and a learner account. That is exactly right for a family. An institute needs
        the opposite on all three counts: its own syllabus (down to the notation and shortcuts its faculty use), its own teacher’s identity on
        the teaching, and a report that lands with the academic head. Tutezy is built around those three: content is compiled from the
        institute’s material and reviewed, the teacher is the institute’s (name, cloned voice, avatar, strictness), and every session writes
        mastery per concept that rolls up per batch. See <a href="/what-is-tutezy/">what Tutezy is</a>.
      </p>
    </>
  ),
  faq: [
    ["Can Tutezy teach Khan Academy content?", "Only if you have the rights to upload it. Tutezy compiles from material the institute provides; it does not ship a curriculum of its own."],
    ["Is Tutezy Socratic like Khanmigo?", "Partly. Tutezy teaches first — board and narration — then asks; wrong answers get a hint before the answer, and predict-then-reveal prompts ask for the next step before showing it. It is a teacher with a plan rather than a pure questioning tutor."],
    ["Which is cheaper?", "For one child at home, Khanmigo’s monthly fee is hard to beat. For an institute, Tutezy’s ₹3 per learner-minute means 20 minutes a day for a month is about ₹1,300 per student, with no per-learner licence and your own content."],
    ["Does Tutezy work for younger children?", "From roughly Class 4 upwards — children who can read a board and answer a question. Strictness and pace are adjustable."],
  ],
  demoTopic: "photosynthesis",
};

export default function Page() {
  return <ComparePage c={c} />;
}

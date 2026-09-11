import { AudiencePage, type AudienceContent } from "@/components/AudiencePage";
import { pageMetadata } from "@/components/PageShell";

const PATH = "/for/tutors/";
export const metadata = pageMetadata(PATH);

const c: AudienceContent = {
  path: PATH,
  eyebrow: "Independent tutors",
  heading: "An AI tutor for independent tutors and educators",
  lede: "You can teach twenty students an evening, not two hundred. Tutezy takes your notes and recordings and teaches the homework help, practice and revision in your voice, so your live hour goes to what needs you — and you know who that is.",
  facts: [
    <>Compiled from your own notes, worksheets and recorded classes.</>,
    <>Your cloned voice (₹2,000 one-time), optional avatar from one photo.</>,
    <>Students use it inside your own branded Vacademy app.</>,
    <>You see who is stuck on what before the live session.</>,
    <>₹3 / learner-minute; 30 students × 20 minutes a day ≈ ₹1,800/day.</>,
  ],
  problem: (
    <>
      <p>
        A good tutor’s ceiling is the clock. Group batches dilute the one-to-one value that built the reputation; more one-to-one hours mean
        no evenings; recording videos loses the thing students pay for — the teacher noticing they are lost. Meanwhile the WhatsApp doubts
        keep coming at 11 pm.
      </p>
    </>
  ),
  sessions: [
    { t: "Homework help in your voice", d: "Students open the chapter you taught; the teacher re-explains the part they are stuck on and checks with a question." },
    { t: "Practice between sessions", d: "Worked problems from your own sets with predict-then-reveal prompts; hints before answers." },
    { t: "Revision before exams", d: "Recap boards from your notes with quick checks; weak concepts listed for your next live hour." },
    { t: "Late-night doubts", d: "The 11 pm question gets answered by you-in-Tutezy, from your material, and logged for you to see in the morning." },
    { t: "A bigger batch without losing one-to-one", d: "Teach the live class to fifty; let Tutezy do the individual follow-up you used to do for ten." },
    { t: "Spoken-language practice", d: "For language tutors: conversation drills with instant correction, the teacher listening and replying by voice." },
  ],
  learnerGets: [
    "Your voice, your method, your examples — available whenever they sit down to study.",
    "A question after every concept and a hint before the answer.",
    "Weak concepts revisited; notes kept; pace and language they choose.",
  ],
  instituteGets: [
    "A list, every morning, of which students are stuck on what — so the live hour is spent well.",
    "More students at the same personal standard, without more evenings.",
    "A branded app your students open, with your name and voice on the teaching.",
    "Itemised usage; you pay only for minutes actually taught.",
  ],
  example: (
    <>
      <p>
        A physics tutor with 60 students across three batches turns on Tutezy for daily practice: 60 × 20 minutes = 1,200 minutes a day,
        ₹3,600, or ₹60 per student per day. Charged at ₹1,500 a month per student for the “practice with sir” add-on, it pays for itself in the
        first week and returns the tutor’s evenings.
      </p>
    </>
  ),
  notFor: [
    "Tutors with no written or recorded material; make notes or record a few classes first.",
    "Replacing the live session; Tutezy is the practice and doubt layer around it.",
    "Very young learners who cannot yet read a board and answer a question.",
  ],
  faq: [
    ["I am one person. Is the setup heavy?", "No. Upload notes or recordings, turn on Tutor Mode, set your name and voice, compile, review the boards. Most tutors are live the same afternoon."],
    ["Do my students need to install something?", "They use your branded Vacademy learner app on web, Android or iOS; Tutezy is a button on each chapter."],
    ["Can I keep it to specific students?", "Yes. Tutor Mode is switched on per course and per batch."],
    ["What about my voice rights?", "Your voice clone is created with your recorded consent, is private to your account and can be deleted on request."],
    ["What does it cost me?", "₹3 per learner-minute from prepaid credits, plus ₹2,000 one-time if you clone your voice. There are no seat licences; full rate card on the pricing page."],
  ],
  demoTopic: "jee-maths-problem",
};

export default function Page() {
  return <AudiencePage c={c} />;
}

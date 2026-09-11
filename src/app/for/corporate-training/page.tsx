import { AudiencePage, type AudienceContent } from "@/components/AudiencePage";
import { pageMetadata } from "@/components/PageShell";

const PATH = "/for/corporate-training/";
export const metadata = pageMetadata(PATH);

const c: AudienceContent = {
  path: PATH,
  eyebrow: "Corporate & HR training",
  heading: "An AI trainer for corporate and HR training",
  lede: "Onboarding, compliance, product knowledge and skills taught one to one by an AI trainer compiled from your own decks and videos — with situational practice and a record of who understood what, not just who clicked ‘complete’.",
  facts: [
    <>Compiled from existing PPTs, SOPs, policy PDFs and recorded sessions.</>,
    <>Situational checks: “a customer says X — what do you do?”, graded against your rubric.</>,
    <>Hindi and English for field, retail and franchise staff.</>,
    <>Mastery per employee and per team; CSV for L&amp;D and audit.</>,
    <>₹3 / learner-minute; 1,000 employees × 30 minutes = ₹90,000, no seat licences.</>,
  ],
  problem: (
    <>
      <p>
        Most corporate e-learning proves attendance, not understanding. Employees click through a deck, pass a five-question quiz they can
        retake, and the L&amp;D team reports 98% completion to a business that still sees the same mistakes on the floor. Live trainers fix this
        for a cohort at a time, at a cost that rules out the field force and the franchise network.
      </p>
      <p>The decks, SOPs and recorded sessions already exist. What is missing is a trainer with time to ask each employee a real question.</p>
    </>
  ),
  sessions: [
    { t: "Onboarding", d: "Company, product and process modules taught one to one in week one, at the new hire’s pace, in their language." },
    { t: "Compliance and policy", d: "POSH, safety, data handling, code of conduct: taught, checked with situational questions, and recorded per employee." },
    { t: "Product knowledge", d: "Every launch deck becomes a lesson for sales, support and partners, with objections practised aloud." },
    { t: "Skills practice", d: "Feedback conversations, customer handling, negotiation: the trainer sets a situation, the employee tries it, the trainer coaches the attempt." },
    { t: "Franchise and field training", d: "The same standard delivered to every outlet and every territory, in Hindi or English, on a phone." },
    { t: "Refreshers", d: "A 10-minute recap before an audit or a season, with the weak topics per team surfaced to the manager." },
  ],
  learnerGets: [
    "A trainer who asks a real question and coaches the answer, rather than a deck to click through.",
    "Practice in their own language and at their own pace, on a phone, between shifts.",
    "Hints before answers; weak topics revisited; notes kept.",
  ],
  instituteGets: [
    "Understanding per employee per topic, not completion percentages.",
    "Weak topics per team, region or franchise before the audit or the launch.",
    "A defensible compliance record: what was taught, what was asked, how each person answered.",
    "One standard of training across every location, without a trainer’s travel budget.",
    "Itemised usage and CSV export for L&D reporting.",
  ],
  example: (
    <>
      <p>
        A retail chain onboards 300 store staff a month with a 90-minute programme: 27,000 learner-minutes, ₹81,000 a month, ₹270 per hire,
        in Hindi or English on their own phones. The L&amp;D head sees which stores’ staff miss the returns policy and sends the regional
        trainer there, instead of everywhere.
      </p>
    </>
  ),
  notFor: [
    "Hands-on skills that need physical practice — machinery, lab technique — beyond the knowledge component.",
    "Replacing a facilitator for team workshops; Tutezy is the one-to-one layer.",
    "Content that changes daily; compile once, review, and recompile when the policy changes.",
  ],
  faq: [
    ["Can it run situational or role-play checks?", "Yes. A check can present a situation and grade the employee’s spoken or typed response against your rubric, with hints and a model answer on the board."],
    ["Does it integrate with our HRMS or LMS?", "Tutezy runs inside the Vacademy platform, which provides the learner app, reporting and CSV export. Ask on the demo about your specific integration."],
    ["Is it suitable for compliance records?", "Each session records what was taught, what was asked and how the employee answered, per employee, exportable to CSV."],
    ["What languages?", "English and Hindi today, switchable mid-lesson; more Indian languages on the roadmap."],
    ["What does it cost?", "₹3 per learner-minute; ₹5 with an animated trainer avatar. No seat licences. Full rate card on the pricing page."],
  ],
  demoTopic: "hr-training-feedback",
};

export default function Page() {
  return <AudiencePage c={c} />;
}

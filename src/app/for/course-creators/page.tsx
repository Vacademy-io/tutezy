import { AudiencePage, type AudienceContent } from "@/components/AudiencePage";
import { pageMetadata } from "@/components/PageShell";

const PATH = "/for/course-creators/";
export const metadata = pageMetadata(PATH);

const c: AudienceContent = {
  path: PATH,
  eyebrow: "Course creators & platforms",
  heading: "An AI tutor for course creators and course platforms",
  lede: "Sell a recorded course with a live mentor included. Tutezy turns every chapter you already recorded into a lesson the student can question, in your voice, and tells you who finished, who understood and who is stuck.",
  facts: [
    <>Your recorded videos are transcribed and compiled; no re-recording.</>,
    <>The mentor speaks in <strong>your</strong> cloned voice; optional avatar from one photo.</>,
    <>A “learn with the teacher” button on every chapter of the course.</>,
    <>Completion and mastery per student, so you know who to follow up.</>,
    <>₹3 / learner-minute, paid from credits; charge what you like for the tier.</>,
  ],
  problem: (
    <>
      <p>
        Recorded courses sell on the promise of the creator and die on completion rates. Students watch the first two modules, hit a concept
        they cannot get past, have nobody to ask, and quietly stop. Refund requests and low reviews follow. Cohort-based courses fix this with
        the creator’s live hours, which do not scale and cost the creator their evenings.
      </p>
      <p>The videos already contain the teaching. What is missing is someone who can pause, ask “did you get that?”, and explain it again differently.</p>
    </>
  ),
  sessions: [
    { t: "Chapter lessons with a mentor", d: "Each recorded chapter becomes a live board lesson: the mentor explains, checks understanding, and answers doubts about that chapter." },
    { t: "Doubt-solving between modules", d: "Students ask the doubt that would have made them quit; the mentor answers from your material and logs the concept." },
    { t: "Practice and assignments", d: "Worked examples with predict-then-reveal prompts; the mentor asks for the next step before showing it." },
    { t: "Revision and recap", d: "Before a module quiz or certification, a recap board of the module with quick checks." },
    { t: "A premium tier", d: "Sell the same course at a higher price with the AI mentor included; pay ₹3 per minute students actually use." },
    { t: "Cohort support", d: "For cohort courses, Tutezy takes the repetitive one-to-one work so your live hours go to the hard questions." },
  ],
  learnerGets: [
    "A mentor who sounds like the creator and teaches the creator’s method.",
    "An answer to the question that would otherwise have ended the course.",
    "Weak concepts revisited; a recap at the start of the next chapter; notes kept.",
    "Pace and language they choose.",
  ],
  instituteGets: [
    "Completion and mastery per student, per chapter — the data to run follow-ups and testimonials.",
    "A premium tier without adding live hours.",
    "Weak concepts across the cohort: the chapters that need re-recording become obvious.",
    "Itemised credit usage per course; minutes only count while a student is in a lesson.",
    "Everything inside the Vacademy learner app, white-labelled to the creator’s brand.",
  ],
  example: (
    <>
      <p>
        A creator sells a 12-module data-analysis course at ₹4,999. She adds a “with mentor” tier at ₹7,999. A student who uses the mentor for
        20 minutes on each of 12 modules consumes 240 minutes — ₹720 in credits — against ₹3,000 of extra revenue. If completion rises from 15%
        to 40%, the review and referral effect is worth more than the tier.
      </p>
    </>
  ),
  notFor: [
    "Courses that are pure entertainment or inspiration with nothing to check understanding against.",
    "Creators who want a video generator; Tutezy is live and interactive, not pre-rendered.",
    "Content that is only in the creator’s head; record it first, then compile.",
  ],
  faq: [
    ["Do I have to re-record anything?", "No. Existing videos are transcribed and compiled into board lessons. You review the boards and recompile any you want tighter."],
    ["Can the mentor sound like me?", "Yes. A 15-second sample with your consent clones your voice for ₹2,000 / $20 one-time; an animated avatar from one photo is ₹10,000 / $100. Both are private to your account."],
    ["Can I charge students for it?", "Yes. Many creators sell a higher tier with the mentor included. You pay ₹3 per minute students actually use, from prepaid credits."],
    ["Does it run on my own branded app?", "Yes, inside the white-label Vacademy learner app under your brand on web, Android and iOS."],
    ["Will it answer questions outside my course?", "It answers doubts about the material being taught and brings the lesson back to the plan. It does not browse the web or teach from other sources."],
  ],
  demoTopic: "arduino-basics",
};

export default function Page() {
  return <AudiencePage c={c} />;
}

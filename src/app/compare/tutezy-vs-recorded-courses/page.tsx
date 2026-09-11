import { ComparePage, type CompareContent } from "@/components/ComparePage";
import { pageMetadata } from "@/components/PageShell";

const PATH = "/compare/tutezy-vs-recorded-courses/";
export const metadata = pageMetadata(PATH);

const c: CompareContent = {
  path: PATH,
  other: "recorded courses",
  heading: "Tutezy vs recorded video courses",
  lede: "Recorded video is cheap to deliver and impossible to interrupt. It cannot ask whether the student understood, cannot notice confusion, and cannot explain the same thing a second way. Tutezy takes the same recordings and turns them into a lesson that can.",
  verdict: [
    <>
      <strong>Recorded courses</strong>: zero marginal cost, high production polish, single pace, no interaction, completion rates typically under 20%.
    </>,
    <>
      <strong>Tutezy</strong>: the same content taught live one to one, with checks and remediation, at ₹3 a learner-minute.
    </>,
    <>Not either/or: Tutezy compiles <em>from</em> your recordings. The video stays; a “learn with the teacher” button appears beside it.</>,
  ],
  otherIs: (
    <p>
      A recorded course is a sequence of videos, often with PDFs and quizzes, delivered through an LMS or a course platform. It is the
      dominant format for online learning because it scales for free once made. Its weakness is well documented: without a person in the loop
      most learners stop partway, and nobody knows what the ones who finished actually understood.
    </p>
  ),
  rows: [
    ["Interaction", "Teacher asks after every concept; student answers by voice or text; hints and revisits", "None; play, pause, rewind"],
    ["Pace", "Slower, slow, medium, fast; chosen by the student, remembered", "Playback speed only"],
    ["Confusion", "Detected by the check; remediated; revisited later", "Invisible"],
    ["Doubts", "Answered against the material, then back to the lesson", "Forum or WhatsApp, hours later, if at all"],
    ["Language", "English and Hindi compiled for every concept, switchable", "Whichever language was recorded"],
    ["Teacher presence", "Cloned voice; optional avatar; name and strictness", "The recording"],
    ["What the institute learns", "Mastery per concept per student; weak spots per batch", "Watch time and completion"],
    ["Marginal cost", "₹3 / $0.03 per learner-minute", "Near zero"],
    ["Production effort", "Compile from existing recordings and PDFs; review boards", "Script, shoot, edit, re-shoot when the syllabus changes"],
    ["Updating content", "Edit the source and recompile the slide", "Re-record"],
  ],
  chooseOther: [
    "The content is inspirational or narrative rather than something with checkable understanding.",
    "Learners are highly self-motivated and the institute does not need to know what they understood.",
    "Marginal cost must be zero and interaction is not needed.",
  ],
  chooseTutezy: [
    "Completion and understanding matter — exam prep, certification, compliance, a course sold on outcomes.",
    "The institute needs to know who is stuck on what.",
    "Students need to ask, to be asked, and to go at their own pace.",
    "A Hindi option is needed without re-recording.",
    "The syllabus changes and re-shooting is not practical.",
  ],
  body: (
    <>
      <h2>Keep the video. Add the teacher.</h2>
      <p>
        The usual objection is sunk cost: “we spent a year recording”. Tutezy does not throw that away. Recordings are transcribed and
        compiled into board lessons; the original video stays in the course; the student gets a button on the same chapter. Institutes
        typically start with the chapters where completion drops and expand from there. Setup is described on the{" "}
        <a href="/how-it-works/">how it works</a> page; the per-minute economics on the <a href="/pricing/">pricing page</a>.
      </p>
    </>
  ),
  faq: [
    ["Do we have to re-record anything?", "No. Existing videos are transcribed and compiled; PDFs and decks are read directly. You review the boards and recompile any you want tighter."],
    ["Does Tutezy replace the video?", "No. It sits beside it. Students can still watch; the lesson button opens the one-to-one teacher on the same chapter."],
    ["Is it pre-rendered like a video?", "No. The board is drawn live from the compiled plan and the conversation is live, which is what lets it react to a wrong answer."],
    ["What does it cost compared with video?", "Video is free per view; Tutezy is ₹3 per learner-minute. A 30-minute chapter costs ₹90 per student. Most institutes charge for or fund it from the completion and retention gain."],
  ],
  demoTopic: "arduino-basics",
};

export default function Page() {
  return <ComparePage c={c} />;
}

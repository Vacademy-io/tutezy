import { ComparePage, type CompareContent } from "@/components/ComparePage";
import { pageMetadata } from "@/components/PageShell";

const PATH = "/compare/tutezy-vs-chatgpt/";
export const metadata = pageMetadata(PATH);

const c: CompareContent = {
  path: PATH,
  other: "ChatGPT",
  heading: "Tutezy vs ChatGPT for teaching students",
  lede: "ChatGPT is a superb general assistant, and many students already use it. It is not a teacher for your institute: it has no syllabus, no board, no idea what your faculty taught, and no report for you. Tutezy is built for exactly that gap.",
  verdict: [
    <>
      <strong>ChatGPT</strong> answers whatever a motivated student asks, from general knowledge, in a chat window.
    </>,
    <>
      <strong>Tutezy</strong> teaches your syllabus, on a whiteboard, in your teacher’s voice, checks understanding, and reports to you.
    </>,
    <>The honest overlap: doubt-answering. Tutezy answers doubts against your material; ChatGPT answers against the world.</>,
    <>For a self-directed adult learner, ChatGPT can be enough. For a batch of students an institute is responsible for, it is not.</>,
  ],
  otherIs: (
    <p>
      ChatGPT is OpenAI’s general-purpose assistant. It can explain almost any topic, work through problems, and in its study-oriented mode
      will ask guiding questions instead of giving answers outright. It is available free with limits, or on paid plans for individuals. It
      knows nothing about your institute unless the student pastes material into the chat, and it produces nothing for the institute.
    </p>
  ),
  rows: [
    ["Source of truth", "Your PDFs, videos, slides and question banks, compiled and reviewed", "General training data and, if enabled, the web; your material only if pasted in"],
    ["Structure", "A teaching plan per slide: topics, concepts, board steps, checks, hints", "Whatever the student asks, in the order they ask it"],
    ["Medium", "Whiteboard drawn as the teacher speaks, plus voice; student answers by voice or text", "Text chat; voice on some plans"],
    ["Checks understanding", "After every concept, graded against a rubric, with remediation and revisits", "Only if the student asks it to, and grading is informal"],
    ["Teacher identity", "Your teacher’s name, cloned voice, optional avatar, strictness", "A generic assistant"],
    ["Language", "English and Hindi compiled for every concept, switchable mid-lesson", "Many languages, on request"],
    ["Reports", "Mastery per student and per batch, weak concepts, minutes, CSV", "None for the institute"],
    ["Consistency", "Every student is taught the same reviewed board", "Every conversation is different"],
    ["Who pays", "The institute, per learner-minute (₹3 / $0.03)", "The student, per month, or free with limits"],
    ["Drift and hallucination risk", "Low: the live model works within a compiled, reviewed plan", "Depends on the prompt and the topic; no review step"],
  ],
  chooseOther: [
    "The learner is a self-directed adult who wants to explore beyond any syllabus.",
    "The task is research, writing help or coding, not learning a defined course.",
    "There is no institute, no batch and nobody who needs a report.",
  ],
  chooseTutezy: [
    "An institute is responsible for a batch learning a defined syllabus and needs to know who understood what.",
    "The teaching must follow the faculty’s own material, method and notation.",
    "Students need to be taught, checked and revisited, not just answered.",
    "The institute wants its own teacher’s voice and face on the teaching, and control over what is said.",
    "Hindi-medium or bilingual students need a proper switch, not a translated chat.",
  ],
  body: (
    <>
      <h2>Why “just tell students to use ChatGPT” fails institutes</h2>
      <p>
        Three reasons show up in every conversation with an academic head. First, <strong>nobody knows what was said</strong>: the institute
        cannot see the conversation, cannot check the method matches the faculty’s, and cannot see who is struggling. Second,{" "}
        <strong>the motivated ten use it and the quiet 190 do not</strong> — the same students who did not ask in doubt class do not open a
        chat window either. Third, <strong>a chat is not a lesson</strong>: there is no board, no pacing, no “did you get that?”, no coming
        back to what was missed.
      </p>
      <p>
        Tutezy fixes all three by design. Lessons are compiled from your material and reviewed; every student in the batch gets the same
        lesson, one to one, when they open the chapter; and the institute sees mastery per student. Students can still ask doubts — the
        teacher answers against the material on the board and returns to the plan. See <a href="/how-it-works/">how it works</a>.
      </p>
    </>
  ),
  faq: [
    ["Is Tutezy built on ChatGPT?", "Tutezy uses large language models for compiling lessons and for live decisions (grading, hints, doubts), routed across providers by task. The product is the compile-and-teach system around those models, not any single model."],
    ["Can students use both?", "Of course. Tutezy is the institute’s teacher for the syllabus; a general assistant can remain the student’s own tool for everything else."],
    ["Is Tutezy cheaper than ChatGPT?", "They are priced differently. ChatGPT is a per-person monthly plan or free with limits; Tutezy is ₹3 per learner-minute paid by the institute, so a student who learns 30 minutes a day for a month costs the institute about ₹1,980."],
    ["Does Tutezy browse the web?", "No. It teaches from compiled institute content and answers doubts against it."],
  ],
  demoTopic: "photosynthesis",
};

export default function Page() {
  return <ComparePage c={c} />;
}

import { ComparePage, type CompareContent } from "@/components/ComparePage";
import { pageMetadata } from "@/components/PageShell";

const PATH = "/compare/tutezy-vs-human-tutoring/";
export const metadata = pageMetadata(PATH);

const c: CompareContent = {
  path: PATH,
  other: "human tutoring",
  heading: "Tutezy vs one-to-one human tutoring",
  lede: "A good human tutor is the best form of teaching there is, and Tutezy is modelled on what they do. The human is also the scarcest resource in every institute. Tutezy is built to take the repetitive one-to-one work between live sessions, and to tell the human exactly where they are needed.",
  verdict: [
    <>
      <strong>Human tutor</strong>: judgment, motivation, relationship, improvisation. ₹300–₹1,500+ an hour, one student at a time, limited hours.
    </>,
    <>
      <strong>Tutezy</strong>: the explain–ask–check–revisit loop, in the teacher’s voice, for every student at once, ₹180 an hour each, any hour.
    </>,
    <>The design goal is not to replace the tutor but to multiply them and to route their hours to the students who need them.</>,
  ],
  otherIs: (
    <p>
      One-to-one human tutoring is a teacher and a student, live, working through material with immediate feedback. It is the reference
      standard: decades of research put one-to-one tutoring well ahead of classroom instruction. Its constraints are cost, availability and
      consistency — the best tutors are booked, the affordable ones vary, and no institute can give every student an hour a day.
    </p>
  ),
  rows: [
    ["Judgment and improvisation", "Within a compiled plan; hints, revisits, doubt answers", "Unlimited; reads the room, changes approach"],
    ["Motivation and relationship", "Familiar teacher voice and name; patient, never tired; no relationship", "The main reason many students keep going"],
    ["Consistency", "Every student gets the same reviewed board", "Varies by tutor and by day"],
    ["Availability", "Any hour, every student at once, resumes where they stopped", "Booked slots; one student per slot"],
    ["Language", "English and Hindi, switchable mid-lesson", "Depends on the tutor"],
    ["Record of learning", "Mastery per concept, transcript, notes, batch roll-up, CSV", "The tutor’s memory and a verbal update"],
    ["Cost", "₹3 / $0.03 per learner-minute (₹180 an hour)", "₹300–₹1,500+ an hour in India; more abroad"],
    ["Scale", "A batch of 500 at once", "One"],
    ["Handles the unexpected", "Answers doubts about the material; returns to the plan", "Anything"],
  ],
  chooseOther: [
    "The student needs mentoring, motivation or a relationship more than explanation.",
    "The material is open-ended: research, projects, essays, portfolio work.",
    "A student’s difficulty is not about the content — the human should have that conversation.",
    "The budget allows an hour a day per student and the tutors are available.",
  ],
  chooseTutezy: [
    "Every student in a batch needs the explain–ask–check–revisit loop and there is one teacher.",
    "The repetitive part of tutoring — homework help, practice, revision, solution sessions — is eating the human’s hours.",
    "The institute wants to know, before the live session, who is stuck on what.",
    "Students need help at 11 pm, on a phone, in Hindi or English.",
    "The cost per student-hour must be a fraction of a human tutor’s.",
  ],
  body: (
    <>
      <h2>How institutes use both</h2>
      <p>
        The pattern that works: the human teaches the live class and keeps office hours; Tutezy takes the daily practice, the post-test
        solution sessions and the late-night doubts, in the teacher’s own voice; each morning the teacher sees the batch’s weak concepts and
        the individual students flagged, and spends the human hour on them. Faculty stop repeating the same explanation two hundred times and
        start doing the part only a human can. See the <a href="/for/coaching-institutes/">coaching institute</a> and{" "}
        <a href="/for/tutors/">independent tutor</a> pages for worked examples.
      </p>
    </>
  ),
  faq: [
    ["Is Tutezy meant to replace teachers?", "No. It multiplies them. Your teachers’ content, name, voice and face teach every student one to one, and the teacher sees who needs them in person."],
    ["Can it motivate a discouraged student the way a person can?", "Not the way a person can. It is patient, familiar-sounding and never sighs, which helps; but a student who needs a human conversation should get one, and Tutezy’s flags help the teacher find that student."],
    ["How does the cost compare?", "₹3 per learner-minute is ₹180 an hour, against ₹300–₹1,500 an hour for a human tutor in India. The bigger difference is that Tutezy teaches the whole batch at once."],
    ["Do teachers resist it?", "Less than expected once they see it uses their own material and voice, reports to them, and takes the repetitive work off their evenings. Likeness use is consent-gated and can be disabled at any time."],
  ],
  demoTopic: "aptitude-interview",
};

export default function Page() {
  return <ComparePage c={c} />;
}

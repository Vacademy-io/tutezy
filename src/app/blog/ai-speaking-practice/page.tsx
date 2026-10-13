import { BlogShell, Callout, WhereTutezyFits, postMetadata } from "@/components/BlogShell";

const SLUG = "ai-speaking-practice";
export const metadata = postMetadata(SLUG);

export default function Page() {
  return (
    <BlogShell
      slug={SLUG}
      lede="AI speaking practice gives learners a place to rehearse a short talk, get feedback and try again. Make each round specific: choose an audience, set one communication goal and review an observable part of the response. Finish with a new prompt and feedback from a person who represents the intended audience."
      takeaways={[
        "Choose a concrete task, such as opening a presentation or explaining a project.",
        "Give feedback on the message, structure and example before polishing wording.",
        "Use a new prompt to check that improvement transfers beyond a memorized script.",
        "Treat automated feedback as a coaching input that a teacher can review.",
      ]}
      toc={[["task", "Choose a speaking task"], ["rubric", "Use a simple rubric"], ["opening", "Improve a presentation opening"], ["routine", "A weekly practice routine"], ["review", "Review the feedback"]]}
      demoTopic="public-speaking-opening"
      related={["hindi-english-ai-tutoring", "ai-product-knowledge-training", "socratic-ai-tutor-questioning"]}
      faq={[
        ["How can I practise speaking with an AI tutor?", "Choose a short task and describe the audience. Speak your response, ask for feedback on one criterion and try again. Follow with a different prompt so you practise making decisions rather than repeating a supplied script."],
        ["Can AI speaking practice replace presenting to people?", "It can provide rehearsal between human sessions. Real listeners bring questions, reactions and context that should remain part of presentation practice. Include peer or teacher feedback before an important talk."],
        ["Should students aim to remove their accent?", "Set criteria around whether the intended audience can understand the message. Avoid treating an accent as a mistake. If pronunciation affects meaning, address the specific word or phrase rather than making a broad judgment about the speaker."],
      ]}
    >
      <h2 id="task">Choose a task with an audience and an outcome</h2>
      <p>“Improve my communication” gives a tutor little direction. “Explain our class project to a visiting parent in one minute” defines a situation that can be practised. The learner needs to decide what the audience knows, what matters to them and what they should remember afterwards.</p>
      <p>Useful starting tasks include introducing yourself to a new team, opening a class presentation, explaining a technical idea to a beginner or asking for a decision in a meeting. Keep the first round short enough to repeat without exhausting the learner.</p>
      <p>For a course, specify the expected language and the subject material the learner may use. A student who needs help organizing a clear explanation has a different goal from one learning new vocabulary. The <a href="/blog/hindi-english-ai-tutoring/">bilingual lesson guide</a> explains how to separate language choices from subject understanding.</p>

      <h2 id="rubric">Use a rubric the learner can understand</h2>
      <p>The following is a suggested classroom rubric, not a validated speaking assessment. Use it to make feedback discussable. Mark each criterion as clear, partly clear or needing another attempt, with a concrete example from what the learner said.</p>
      <div className="tbl"><table>
        <thead><tr><th>Criterion</th><th>Question for the reviewer</th><th>Useful feedback</th></tr></thead>
        <tbody>
          <tr><td>Purpose</td><td>Can the listener identify the main point?</td><td>State the proposal in the first two sentences.</td></tr>
          <tr><td>Structure</td><td>Do the ideas follow an understandable order?</td><td>Describe the problem before introducing the solution.</td></tr>
          <tr><td>Specificity</td><td>Is there a concrete example supporting the point?</td><td>Replace “many issues” with one observed difficulty.</td></tr>
          <tr><td>Audience fit</td><td>Are unfamiliar terms explained?</td><td>Explain the acronym before using it again.</td></tr>
          <tr><td>Ending</td><td>Does the listener know the takeaway or requested action?</td><td>Finish with the decision you want the group to make.</td></tr>
        </tbody>
      </table></div>
      <p>Choose one or two criteria per round. A long list of corrections can leave the learner uncertain about what to change first. A teacher should also distinguish feedback based on recognized words from any claimed analysis of pace, pronunciation or vocal delivery.</p>

      <h2 id="opening">A worked presentation opening</h2>
      <p>Consider a fictional student presentation about improving the school library. The first attempt is: “Hello everyone, today I am going to talk about the library. It is very important, and there are many things we can do.” The topic is visible, but the listener does not yet know the problem or proposal.</p>
      <Callout title="One targeted coaching prompt">
        <p>“Name one difficulty a student faces in the library, then tell us what change you propose. Keep the opening to two or three sentences.”</p>
      </Callout>
      <p>A revised opening might be: “Finding a book is difficult when the shelf labels are missing. Our class proposes a labelled shelf map near the entrance. I will show a draft and ask for your feedback before we test it.” This example is invented for practice; students should use observations they can support in their own talks.</p>
      <p>Ask the learner what changed and why. Then provide a different situation, such as proposing a playground improvement. The next attempt should preserve the useful structure without copying the library sentences. A fluent recital alone does not show that the learner can organize a new message.</p>

      <h2 id="routine">Plan a week of short speaking rounds</h2>
      <ol>
        <li><strong>First session:</strong> choose an audience, deliver an initial response and select one improvement goal.</li>
        <li><strong>Second session:</strong> repeat the task with that change, then explain why the revision helps.</li>
        <li><strong>Third session:</strong> use a different prompt that needs the same skill.</li>
        <li><strong>Final session:</strong> present to a peer or teacher and answer one unexpected question.</li>
      </ol>
      <p>Keep a brief record of the prompt, feedback and chosen revision. Audio recordings are optional and should follow the course's agreed recording arrangements. A written reflection can also preserve what the learner plans to practise next.</p>

      <h2 id="review">Review whether the feedback matches the attempt</h2>
      <p>If the tutor comments on something the learner did not say, inspect the recognized text where available. A transcription problem may explain the mismatch. Ask for the exact phrase behind a suggestion and let the teacher reject feedback that is inaccurate or irrelevant to the task.</p>
      <p>Assess progress using comparable prompts and the same criteria, then include a real listener. Do not promise a confidence score or a guaranteed improvement from a fixed number of sessions. Use the learner's actual attempts to decide which skill needs further practice.</p>
      <WhereTutezyFits>
        <p>Tutezy includes speaking-practice demos, including opening a public talk. Try the lesson linked below, then discuss how your <a href="/for/course-creators/">course</a> or <a href="/for/universities/">university programme</a> would supply prompts, examples and review criteria.</p>
      </WhereTutezyFits>
    </BlogShell>
  );
}

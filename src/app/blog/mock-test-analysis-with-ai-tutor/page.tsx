import { BlogShell, Callout, Sources, WhereTutezyFits, postMetadata } from "@/components/BlogShell";

const SLUG = "mock-test-analysis-with-ai-tutor";
export const metadata = postMetadata(SLUG);

export default function Page() {
  return (
    <BlogShell
      slug={SLUG}
      lede="Mock test analysis turns a score into a decision about what to study next. Review wrong, skipped and guessed answers, identify the reason behind each result, and assign a focused learning task followed by a fresh question. An AI tutor can support the teaching step using reviewed course material."
      takeaways={[
        "Review correct guesses as well as wrong and skipped answers.",
        "Separate concept gaps, method errors, execution slips and time pressure.",
        "Give each recurring error a specific next action and a follow-up check.",
        "Use a new question to check whether the learner can apply the correction.",
      ]}
      toc={[["review", "Start with the attempted paper"], ["classify", "Classify the mistake"], ["log", "Use an error log"], ["week", "Plan the next week"], ["tutor", "Use tutoring selectively"]]}
      related={["spaced-repetition-study-plan", "ai-tutoring-certification-exam-prep", "remedial-teaching-with-ai-tutoring"]}
      faq={[
        ["How should I analyze a mock test?", "Review your attempted work before reading full solutions. Mark wrong, skipped and guessed questions, identify the cause, and choose a specific correction task. Finish by attempting a fresh question on the same concept without help."],
        ["Should I review questions I answered correctly?", "Review correct guesses and answers you cannot explain. A correct choice may conceal uncertainty or a mistaken method that happened to produce the expected result."],
        ["Can AI automatically create an accurate revision plan from a score?", "A total score alone does not show why mistakes occurred. A useful plan needs question-level evidence, the student's reasoning and a reviewed syllabus. Confirm what information your tutoring tool can actually use."],
      ]}
    >
      <h2 id="review">Start with the attempted paper, not just the score</h2>
      <p>Two learners can get the same mark for very different reasons. One understands the concepts but runs out of time. The other finishes early using methods they cannot explain. Giving both the same revision assignment misses the information in their work.</p>
      <p>Keep the question paper, answer key and rough work together. Before reading a full solution, ask the learner to describe where they became uncertain. For a skipped question, distinguish “I did not know how to begin” from “I never reached it.” For a correct answer, ask whether they reasoned it out or guessed.</p>
      <p>Review patterns across several questions before drawing conclusions. One arithmetic slip does not establish a persistent problem. A repeated confusion about units across different topics is a stronger reason to assign a short lesson on unit conversion.</p>

      <h2 id="classify">Classify errors so each one leads to a useful action</h2>
      <p>The categories below are a practical review tool, not a standardized diagnostic instrument. Use them to choose the next teaching action and revise a label when the learner's explanation changes your interpretation.</p>
      <div className="tbl"><table>
        <thead><tr><th>Error type</th><th>Evidence to look for</th><th>Suggested next action</th></tr></thead>
        <tbody>
          <tr><td>Concept gap</td><td>The learner cannot explain the relationship or definition.</td><td>Revisit one concept with an example and explanation check.</td></tr>
          <tr><td>Method selection</td><td>A familiar technique is used where its assumptions do not apply.</td><td>Compare two problems and explain which method fits each.</td></tr>
          <tr><td>Execution slip</td><td>The method is sound, but a sign, unit or calculation changes incorrectly.</td><td>Locate the first incorrect step and practise a check.</td></tr>
          <tr><td>Question reading</td><td>The response answers a different question or misses a condition.</td><td>Restate the task and mark the relevant constraint.</td></tr>
          <tr><td>Time allocation</td><td>The learner can solve it independently afterwards but did not attempt it in time.</td><td>Practise a small timed set and review selection decisions.</td></tr>
        </tbody>
      </table></div>
      <p>A question can have more than one cause. If weak understanding made the learner slow, simply adding a timer will not repair the missing concept. Address the prerequisite first, then check performance under the conditions of the assessment.</p>

      <h2 id="log">Keep an error log that records decisions</h2>
      <p>Use these columns: question reference, topic, first incorrect step, likely cause, correction task, follow-up date and independent result. The useful part is the action. “Revise physics” is too broad; “convert centimetres to metres before substituting into the area formula” is something the learner can practise and check.</p>
      <Callout title="Worked error-log example">
        <p>A learner converts 20 cm to 2 m. Record the mistaken conversion, then practise 20 cm = 0.2 m using a labelled metre scale. In the follow-up, ask for 35 cm in metres without showing the earlier example. The expected answer is 0.35 m.</p>
      </Callout>
      <p>Add a brief explanation of the correction in the learner's own words. Copying a model solution can make a log look complete without showing understanding. Keep only the information that will influence later practice; a long transcription of every question is hard to revisit.</p>

      <h2 id="week">Build the next week's study plan</h2>
      <p>Choose two or three recurring difficulties that affect upcoming work. A possible schedule is: review the paper on day one, repair one concept on day two, practise a related method on day three, and attempt a mixed set later in the week. Adjust the schedule to the learner's workload and the course sequence.</p>
      <p>Return to the corrected topic after a gap. The <a href="https://ies.ed.gov/ncee/wwc/PracticeGuide/1">IES study guide</a> recommends spacing learning and using quizzes to retrieve previously learned information. That supports including later checks; it does not establish one ideal revision timetable for every student.</p>
      <p>Use fresh questions and track whether help was needed. If the learner succeeds only when the same worked example is visible, keep the concept open in the log. Our <a href="/blog/spaced-repetition-study-plan/">four-week revision plan</a> gives a broader structure for scheduling these returns.</p>

      <h2 id="tutor">Use an AI tutor for the selected teaching task</h2>
      <p>Give tutoring a bounded objective, such as explaining equivalent ratios or identifying the assumptions behind a formula. Use the institute's reviewed material and answer explanations. A teacher should resolve disputed answer keys or questions with ambiguous wording before they become tutoring content.</p>
      <p>Check the learner afterwards outside the supported exchange. Track recurring errors that disappear, those that persist and those caused by incorrect tutor feedback. These observations help a coaching team decide which lessons are ready for wider use.</p>
      <WhereTutezyFits>
        <p>Tutezy teaches from your course material through whiteboard explanations, questions and hints. A <a href="/for/coaching-institutes/">coaching institute</a> can use a reviewed weak-topic lesson after a mock-test review. Confirm how your assessment records and lesson assignments fit together rather than assuming a score automatically generates a plan.</p>
      </WhereTutezyFits>
      <Sources items={[["IES, Organizing Instruction and Study to Improve Student Learning.", "https://ies.ed.gov/ncee/wwc/PracticeGuide/1"]]} />
    </BlogShell>
  );
}

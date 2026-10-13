import { BlogShell, Callout, Sources, WhereTutezyFits, postMetadata } from "@/components/BlogShell";

const SLUG = "learning-analytics-for-teachers";
export const metadata = postMetadata(SLUG);

export default function Page() {
  return (
    <BlogShell
      slug={SLUG}
      lede="Learning analytics becomes useful when a teacher can connect a report to a teaching decision. Separate participation from demonstrated understanding, inspect the evidence behind a weak-concept label and choose a follow-up task. Check the learner's response again before deciding that the gap is closed."
      takeaways={[
        "Minutes and completion describe participation, not independent understanding.",
        "Read a concept score alongside the question, response and assistance used.",
        "Distinguish a shared misconception from an isolated error or access problem.",
        "Use reports to choose a next action and check whether it worked.",
      ]}
      toc={[["signals", "Separate the report's signals"], ["example", "A class report example"], ["routine", "A weekly review routine"], ["checks", "Check the evidence"], ["record", "Keep an actionable record"]]}
      related={["diagnostic-assessment-personalized-learning", "remedial-teaching-with-ai-tutoring", "checking-for-understanding-techniques"]}
      faq={[
        ["What are learning analytics for teachers?", "They are information about learning activity and performance used to inform instruction. Useful analytics help a teacher see what evidence supports a judgment and what follow-up teaching or assessment is needed."],
        ["Does a high lesson-completion rate prove learning?", "No. Completion shows that a learner reached an endpoint in the activity. Check understanding with questions or tasks that require the learner to explain and apply the material, including work done without assistance."],
        ["How should teachers use an AI tutor's mastery score?", "Treat it as a signal to investigate. Check how it is calculated, which concepts and attempts it covers, and whether hints were involved. Confirm important decisions with independent work and teacher judgment."],
      ]}
    >
      <h2 id="signals">Separate participation, performance and interpretation</h2>
      <p>A dashboard can show that a learner spent twenty minutes in a chapter and finished every activity. That tells you they participated. Whether they can explain the chapter's central idea requires different evidence. Avoid combining the two into a single impression of “doing well.”</p>
      <div className="tbl"><table>
        <thead><tr><th>Signal</th><th>What it can tell you</th><th>What to check next</th></tr></thead>
        <tbody>
          <tr><td>Time in a lesson</td><td>The recorded duration of participation.</td><td>Was time spent working, waiting or dealing with an access issue?</td></tr>
          <tr><td>Completion</td><td>The learner reached the recorded endpoint.</td><td>Can they explain or apply the content afterwards?</td></tr>
          <tr><td>Correct response</td><td>An answer met the scoring rule.</td><td>Was it a first attempt, a guess or reached after hints?</td></tr>
          <tr><td>Weak-concept label</td><td>The system flagged a possible support need.</td><td>Which question and reasoning produced the label?</td></tr>
          <tr><td>Independent follow-up</td><td>Performance on a separate task under known conditions.</td><td>Does it confirm the earlier interpretation?</td></tr>
        </tbody>
      </table></div>
      <p>Ask vendors to explain what their labels mean. Two platforms may use the word “mastery” for different calculations. A teacher should be able to identify which learner actions contributed to a label and whether missing work is treated differently from incorrect work.</p>

      <h2 id="example">Turn a class report into a teaching decision</h2>
      <p>Imagine a fictional class of 24 learners completing a lesson on percentages. Six responses treat a 20% increase followed by a 20% decrease as returning to the original value. Three learners have incomplete sessions. These are different situations even if both groups appear near the bottom of a dashboard.</p>
      <p>For the first group, inspect their working. Starting from 100 gives 120 after the increase, then 96 after decreasing 120 by 20%. A short follow-up lesson can focus on the changing base. Give a fresh example afterwards, such as increasing 200 by 10% and then decreasing the result by 10%; the final value is 198.</p>
      <p>For the incomplete sessions, first check whether the learners could access and finish the task. Do not infer that they share the percentage misconception. They need an opportunity to supply evidence before you select a subject intervention.</p>
      <p>If similar mistakes appear across much of a cohort, review the original question and teaching material as well as the students. An ambiguous instruction or an incorrect explanation can create a misleading pattern in an otherwise tidy report.</p>

      <h2 id="routine">A weekly review routine for teachers</h2>
      <ol>
        <li>Choose the concepts needed for the next lesson instead of reviewing every available metric.</li>
        <li>Inspect a few actual responses behind each recurring difficulty.</li>
        <li>Group support by the mistake learners are making, not by a permanent ability label.</li>
        <li>Assign one action: whole-class clarification, a small-group lesson or an individual check.</li>
        <li>Use a new question later to determine whether the action addressed the difficulty.</li>
      </ol>
      <p>Keep this routine short enough to fit teaching preparation. A report that requires hours of interpretation every week may be difficult to sustain. Start with a single unit and expand only when staff can identify useful actions consistently.</p>

      <h2 id="checks">Check the evidence before acting on a score</h2>
      <p>Review the scoring rubric, especially for short explanations with several acceptable wordings. In spoken work, check whether recognition errors affected the response. Consider whether the question measured the intended concept or depended on vocabulary the learner had not been taught.</p>
      <Callout title="Ask what is missing from the report">
        <p>A chart may omit learners who never started. Check the cohort list and the reporting period before describing a percentage as a class-wide result. Keep missing evidence visible rather than silently treating it as success or failure.</p>
      </Callout>
      <p>The <a href="https://educationendowmentfoundation.org.uk/education-evidence/guidance-reports/feedback">EEF feedback guidance</a> emphasizes the principles that make feedback useful and notes that feedback can be unhelpful when poorly delivered. An analytics label only starts that process: teachers still need to decide what response will help the learner move forward.</p>

      <h2 id="record">Keep a record that supports the next lesson</h2>
      <p>A practical note has four fields: concept, evidence, teaching action and follow-up result. For the percentage example, the evidence is the unchanged-base reasoning, the action is a comparison of two successive changes, and the result is the learner's explanation of the new example.</p>
      <p>Use that record to communicate progress without overstating certainty. “Applied the method independently on two new questions” says more than “mastered percentages.” The <a href="/blog/remedial-teaching-with-ai-tutoring/">remedial teaching guide</a> shows how to plan a longer support cycle when a difficulty persists.</p>
      <WhereTutezyFits>
        <p>Tutezy provides concept-level insights and reports for students and batches. Review the <a href="/how-it-works/">reporting workflow</a> with your teachers and compare the signals with actual student work. Ask to see the fields available in the report or export before planning your review process around them.</p>
      </WhereTutezyFits>
      <Sources items={[["EEF, Teacher Feedback to Improve Pupil Learning.", "https://educationendowmentfoundation.org.uk/education-evidence/guidance-reports/feedback"]]} />
    </BlogShell>
  );
}

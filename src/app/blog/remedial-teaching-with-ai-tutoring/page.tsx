import { BlogShell, Callout, Sources, WhereTutezyFits, postMetadata } from "@/components/BlogShell";

const SLUG = "remedial-teaching-with-ai-tutoring";
export const metadata = postMetadata(SLUG);

export default function Page() {
  return (
    <BlogShell
      slug={SLUG}
      lede="Remedial teaching gives a learner focused support with a specific gap that is blocking their next step. Use a short diagnostic, teach the missing idea in a different way, and check it independently. AI tutoring can provide additional guided practice within a teacher-reviewed plan."
      takeaways={[
        "Describe the missing skill precisely before assigning extra practice.",
        "Keep support connected to the learner's current classroom work.",
        "Change the explanation when repeating it has not helped.",
        "End each support cycle with a fresh independent task and a teacher decision.",
      ]}
      toc={[["target", "Choose a narrow teaching target"], ["fraction", "A worked fraction lesson"], ["plan", "A two-week support plan"], ["feedback", "Make feedback actionable"], ["review", "Review the next step"]]}
      related={["diagnostic-assessment-personalized-learning", "ai-math-tutor-step-by-step", "ai-homework-help-without-giving-answers"]}
      faq={[
        ["What is remedial teaching?", "Remedial teaching is targeted instruction for a missing or misunderstood skill. It starts from evidence of what a learner needs, provides focused support and checks whether the learner can use the skill independently."],
        ["How can AI support remedial teaching?", "An AI tutor can offer reviewed explanations, questions and hints between teacher-led sessions. Teachers still need to choose the target, inspect feedback and check progress on tasks completed without assistance."],
        ["How long should a remedial lesson take?", "Set the scope around one manageable objective and adjust the duration to the learner. A short session followed by a useful check can be more informative than assigning a whole chapter again. There is no universal duration that guarantees success."],
      ]}
    >
      <h2 id="target">Choose a teaching target you can observe</h2>
      <p>“Weak in maths” is too broad to guide a lesson. “Adds denominators when combining fractions” points to a specific explanation and a way to check it. Start by looking at a few responses and asking the learner to explain their method. A wrong answer on its own does not tell you which prerequisite is missing.</p>
      <p>Write the target as an action: identify equivalent fractions, interpret a graph's axes or select evidence for a claim. Link it to the work the class is doing now. This helps learners see why the support matters and lets teachers check whether it transfers back to the regular lesson.</p>
      <p>Use the <a href="/blog/diagnostic-assessment-personalized-learning/">diagnostic assessment guide</a> to design the initial questions. Avoid using one low score as a permanent label. The support plan describes a current need and should change as new evidence arrives.</p>

      <h2 id="fraction">A remedial lesson on adding unlike fractions</h2>
      <p>Suppose a learner writes 1/2 + 1/3 = 2/5. Before teaching the procedure, check whether they understand that both fractions refer to the same whole. Ask them to show a half and a third using equal-length bars. If the wholes have different sizes, resolve that first.</p>
      <p>Next, divide both bars into sixths. A half covers three sixths and a third covers two sixths. Combining those quantities gives five sixths. Keep the representation visible beside the equation: 1/2 = 3/6, 1/3 = 2/6, so 3/6 + 2/6 = 5/6.</p>
      <ol>
        <li>Ask why sixths can be combined while halves and thirds need rewriting.</li>
        <li>Work through 1/4 + 1/2 together, naming quarters as the shared unit.</li>
        <li>Ask the learner to complete 1/3 + 1/6 independently; the answer is 1/2.</li>
        <li>Return later with 1/4 + 1/8; the answer is 3/8.</li>
      </ol>
      <p>If the learner adds numerators and denominators again, revisit what the denominator represents. If they choose a common denominator correctly but make a multiplication error, focus the next task there. Both mistakes can produce a wrong answer, but repeating the same explanation for both wastes the diagnostic information.</p>
      <p>The <a href="https://ies.ed.gov/ncee/wwc/PracticeGuide/1">IES practice guide</a> recommends connecting concrete and abstract representations and alternating worked examples with problems. The sequence above is our suggested classroom application, not a tested Tutezy intervention.</p>

      <h2 id="plan">Use a two-week support cycle</h2>
      <p>The schedule below is a planning example. Adjust it around classroom demands, learner access and the size of the gap. Keep the target stable long enough to evaluate it, while changing the explanation when the evidence shows it is unhelpful.</p>
      <div className="tbl"><table>
        <thead><tr><th>When</th><th>Activity</th><th>Evidence to retain</th></tr></thead>
        <tbody>
          <tr><td>Start of week one</td><td>Short diagnostic and learner explanation.</td><td>The specific misconception and a baseline response.</td></tr>
          <tr><td>During week one</td><td>Focused teaching and guided practice.</td><td>Which hints or representations helped.</td></tr>
          <tr><td>End of week one</td><td>Fresh question without hints.</td><td>Accuracy and reasoning, recorded separately.</td></tr>
          <tr><td>During week two</td><td>Apply the skill in the current class topic.</td><td>Whether support transfers to ordinary work.</td></tr>
          <tr><td>End of week two</td><td>Delayed check and teacher review.</td><td>Continue, revise or finish this support cycle.</td></tr>
        </tbody>
      </table></div>

      <h2 id="feedback">Make feedback something the learner can use</h2>
      <p>“Try again” supplies little direction. A more useful prompt is “Your denominators describe different-sized parts. Show both fractions in sixths before combining them.” Give the learner a chance to act on the prompt before revealing the whole solution.</p>
      <p>The <a href="https://educationendowmentfoundation.org.uk/education-evidence/guidance-reports/feedback">EEF feedback guidance</a> focuses on the principles of useful feedback rather than whether it is written or spoken, and cautions that feedback is not automatically beneficial. Apply that scrutiny to an AI tutor: inspect whether its response addresses the actual mistake.</p>
      <Callout title="Check the correction, then the next attempt">
        <p>A learner repeating the tutor's explanation is an intermediate step. Ask for a new example and a reason for the chosen method. Record whether the learner needed another hint.</p>
      </Callout>

      <h2 id="review">Use the review to decide what happens next</h2>
      <p>Finish the cycle with a decision about the target. If the learner can apply it independently after a delay, return to routine classroom checks. If errors persist, examine the prerequisite, the clarity of the explanation and whether the task demands were understood. Ask the teacher to reassess instead of automatically adding more identical practice.</p>
      <p>Keep records modest: target, activity, independent response and next action. Those fields are enough to support a conversation between a class teacher and tutor without turning every session into an administrative exercise.</p>
      <WhereTutezyFits>
        <p>Tutezy offers whiteboard teaching, questions and follow-up hints from an institute's material. Start with one reviewed support lesson and compare the learner's subsequent independent work. See <a href="/for/schools/">Tutezy for schools</a> and the <a href="/how-it-works/">teaching workflow</a>.</p>
      </WhereTutezyFits>
      <Sources items={[
        ["IES, Organizing Instruction and Study to Improve Student Learning.", "https://ies.ed.gov/ncee/wwc/PracticeGuide/1"],
        ["EEF, Teacher Feedback to Improve Pupil Learning.", "https://educationendowmentfoundation.org.uk/education-evidence/guidance-reports/feedback"],
      ]} />
    </BlogShell>
  );
}

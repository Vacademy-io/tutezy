import { BlogShell, Callout, Sources, WhereTutezyFits, postMetadata } from "@/components/BlogShell";

const SLUG = "question-bank-to-ai-tutoring-lessons";
export const metadata = postMetadata(SLUG);

export default function Page() {
  return (
    <BlogShell
      slug={SLUG}
      lede="A question bank becomes teaching material when each item includes the concept being checked, a reviewed explanation and support for likely mistakes. Prepare those parts before using AI to build lessons. Keep separate questions for checking whether students can apply the idea after the tutoring support is removed."
      takeaways={[
        "An answer key alone does not supply a teaching explanation.",
        "Use plausible wrong options to plan questions, not to diagnose a learner with certainty.",
        "Write hints that point to a next step before revealing the whole solution.",
        "Reserve fresh questions for independent assessment after practice.",
      ]}
      toc={[["audit", "Audit the question bank"], ["fields", "Prepare teaching fields"], ["example", "A worked multiple-choice item"], ["sequence", "Build a short lesson"], ["review", "Review before release"]]}
      related={["mock-test-analysis-with-ai-tutor", "turn-pdf-slides-into-interactive-lessons", "ai-whiteboard-tutor"]}
      faq={[
        ["Can AI turn a question bank into tutoring lessons?", "AI can help produce explanations and practice from supplied material, but the source needs review. Add concept labels, correct solutions and useful hints, then inspect the generated lesson before students use it."],
        ["Is a list of correct options enough?", "No. A letter such as B does not explain why an answer is correct, when the method applies or what the student should do after a mistake. Supply the reasoning and acceptable alternative methods."],
        ["Should practice and assessment use the same questions?", "Repeating an item can support review, but it cannot by itself show transfer to a new problem. Keep a separate set of questions for checking independent application after the lesson."],
      ]}
    >
      <h2 id="audit">Audit the source before generating explanations</h2>
      <p>Question banks often accumulate over several courses or exam cycles. Before converting one into lessons, check for duplicate items, inconsistent answer keys, missing diagrams and references to material that is no longer taught. Review a small topic set first rather than uploading a large unexamined collection.</p>
      <p>Choose material your team can explain and maintain. Give each item a stable identifier so a correction can be traced to the original question. If a source is scanned, inspect symbols, superscripts, minus signs and labels after extraction; a small transcription error can change the problem.</p>
      <p>Keep the intended course level and prerequisites visible. A solution that introduces an unfamiliar shortcut may answer the question correctly while making the tutoring lesson harder to follow.</p>

      <h2 id="fields">Prepare teaching fields alongside each question</h2>
      <div className="tbl"><table>
        <thead><tr><th>Field</th><th>What to include</th><th>Why it matters</th></tr></thead>
        <tbody>
          <tr><td>Concept</td><td>The specific knowledge or method being checked.</td><td>Connects an incorrect attempt to a focused lesson.</td></tr>
          <tr><td>Prerequisite</td><td>What a learner needs before starting.</td><td>Helps a teacher choose an appropriate explanation.</td></tr>
          <tr><td>Reviewed solution</td><td>Reasoning, intermediate steps and acceptable alternatives.</td><td>Provides more than the final answer.</td></tr>
          <tr><td>Likely mistake</td><td>A possible explanation for a wrong step or option.</td><td>Suggests a clarifying question to ask the learner.</td></tr>
          <tr><td>Hint sequence</td><td>A prompt, a more specific clue and a worked explanation.</td><td>Defines how support can increase when needed.</td></tr>
          <tr><td>Follow-up item</td><td>A fresh problem using the same underlying idea.</td><td>Checks independent application.</td></tr>
        </tbody>
      </table></div>
      <p>These fields form an editorial checklist; they are not a claim about the import format of every platform. Confirm the supported format and how a tutor uses the supplied material before preparing a large migration.</p>

      <h2 id="example">A worked multiple-choice question</h2>
      <p>Consider this illustrative item: “A shirt costs ₹800 before a 25% discount. What is its price after the discount?” The options are ₹200, ₹600, ₹775 and ₹1,000. The reviewed solution is: 25% of ₹800 is ₹200, so the remaining price is ₹800 − ₹200 = ₹600.</p>
      <p>A learner selecting ₹200 may have calculated the discount correctly but answered a different question. Selecting ₹775 may indicate subtracting 25 as a currency amount. Treat those as hypotheses. Ask the student to explain their choice before deciding which teaching response fits.</p>
      <ol>
        <li><strong>First hint:</strong> “Does the question ask for the amount saved or the amount still paid?”</li>
        <li><strong>Second hint:</strong> “Find one quarter of ₹800, then decide what to subtract.”</li>
        <li><strong>Worked explanation:</strong> show the discount and remaining price as separately labelled quantities.</li>
        <li><strong>Independent check:</strong> ask for the price of a ₹500 item after a 20% discount; the answer is ₹400.</li>
      </ol>
      <p>The important distinction is between the reduction and the remaining amount. A lesson that only repeats the correct option misses an opportunity to resolve that confusion. Include the unit and the meaning of each intermediate value in the explanation.</p>

      <h2 id="sequence">Build a short lesson around the question</h2>
      <p>Start by stating the objective: distinguish a percentage reduction from the quantity left afterwards. Check that learners can find a simple percentage. Work through the reviewed example, invite a response and offer the planned support if needed. Finish with a new problem.</p>
      <p>The <a href="https://ies.ed.gov/ncee/wwc/PracticeGuide/1">IES practice guide</a> recommends alternating worked solutions with problem-solving exercises. The sequence here applies that idea to a question-bank lesson; it does not imply that generating more questions automatically improves learning.</p>
      <Callout title="Keep the check separate from the explanation">
        <p>If students can see the worked answer while attempting the follow-up, record that support. For an independent check, remove the example and hints so the response tells you what the learner can do unaided.</p>
      </Callout>
      <p>After a test, choose the relevant lesson using the learner's attempted working. Our <a href="/blog/mock-test-analysis-with-ai-tutor/">mock-test analysis guide</a> explains how to distinguish a conceptual gap from an execution slip or time-management problem.</p>

      <h2 id="review">Review the actual tutoring exchange</h2>
      <p>Test a correct response with different wording, each wrong option and a student who asks why the rule works. Check that the feedback remains consistent with the reviewed solution. Verify that a missing diagram or unreadable equation does not leave the explanation referring to something the learner cannot see.</p>
      <p>Maintain a small review log containing the item identifier, issue, corrected source and release decision. When an answer key changes, revisit any lesson and assessment item that depends on it. Begin with one topic whose explanations a subject teacher can check thoroughly.</p>
      <WhereTutezyFits>
        <p>Tutezy can build lessons from existing course material, including question banks. Bring a reviewed topic set to discuss the <a href="/how-it-works/">conversion workflow</a> and inspect the resulting explanations. <a href="/for/coaching-institutes/">Coaching institutes</a> can start with questions that reveal a recurring concept gap.</p>
      </WhereTutezyFits>
      <Sources items={[["IES, Organizing Instruction and Study to Improve Student Learning.", "https://ies.ed.gov/ncee/wwc/PracticeGuide/1"]]} />
    </BlogShell>
  );
}

import { BlogShell, Callout, Sources, WhereTutezyFits, postMetadata } from "@/components/BlogShell";

const SLUG = "socratic-ai-tutor-questioning";
export const metadata = postMetadata(SLUG);

export default function Page() {
  return (
    <BlogShell
      slug={SLUG}
      lede="A Socratic AI tutor uses questions to help learners explain a claim, inspect an assumption and connect evidence to a conclusion. Good questioning responds to what the student says. It also makes room for direct explanation when a learner lacks the knowledge needed to answer."
      takeaways={[
        <>Ask one clear question with a teaching purpose at a time.</>,
        <>Move from a broad prompt to a specific hint when the learner stalls.</>,
        <>Teach missing knowledge instead of repeating questions indefinitely.</>,
        <>Finish with a fresh independent task that checks the underlying idea.</>,
      ]}
      toc={[["meaning", "What Socratic tutoring means"], ["dialogue", "A sample tutoring dialogue"], ["hint-ladder", "Build a hint ladder"], ["explain", "When to explain directly"], ["evaluate", "Evaluate the conversation"]]}
      related={["ai-math-tutor-step-by-step", "checking-for-understanding-techniques", "ai-tutor-hallucinations-grounding"]}
      faq={[
        ["What is Socratic AI tutoring?", "It is tutoring that uses purposeful questions to draw out a learner’s reasoning, examine assumptions and help them connect ideas. In practice, it should combine questioning with explanations and examples when needed."],
        ["Should a Socratic tutor always withhold the answer?", "No. If a learner lacks a prerequisite or remains confused after a useful hint, teach the missing idea or show a worked example. Then ask the learner to apply it to a new case."],
        ["How is a hint different from giving the solution?", "A hint helps with the next decision while leaving meaningful work for the learner. For example, naming the relevant principle can help a student choose an operation without supplying every step and the final result."],
      ]}
    >
      <h2 id="meaning">What does Socratic tutoring look like in practice?</h2>
      <p>Instead of accepting an unsupported answer, a tutor asks how the learner reached it. Instead of immediately correcting a claim, the tutor may introduce a case that tests it. The aim is to make reasoning visible and help the learner improve it. A conversation full of question marks can still fail at both.</p>
      <p>The <a href="https://ies.ed.gov/ncee/wwc/PracticeGuide/1">IES practice guide on instruction and study</a> recommends deep explanatory questions. That supports asking students to explain ideas; it does not imply that every lesson should use questioning alone or that a tutor should refuse to provide information.</p>
      <p>For an AI tutoring lesson, define the concept and likely misconceptions before writing the prompts. A question should help distinguish between plausible ways of thinking. “Can you think harder?” offers little direction. “What happens to the number of equal pieces when the denominator increases?” has a specific instructional purpose.</p>

      <h2 id="dialogue">A sample dialogue: comparing unit fractions</h2>
      <p>Here is an illustrative exchange for a learner who already knows the numerator and denominator. It compares fractions of equal-sized wholes, a condition the tutor must state explicitly.</p>
      <div className="tbl"><table>
        <thead><tr><th>Speaker</th><th>Dialogue</th><th>Teaching purpose</th></tr></thead>
        <tbody>
          <tr><td>Tutor</td><td>Two equal-sized pizzas are cut into four and eight equal slices. Which pizza has larger slices?</td><td>Make the comparison concrete.</td></tr>
          <tr><td>Learner</td><td>The one cut into eight, because eight is bigger.</td><td>Expose the rule the learner is using.</td></tr>
          <tr><td>Tutor</td><td>Imagine cutting each of the four slices in half. How many slices are there now, and what happened to their size?</td><td>Test the claim with a visible transformation.</td></tr>
          <tr><td>Learner</td><td>Eight slices, but each is smaller.</td><td>Connect piece count and piece size.</td></tr>
          <tr><td>Tutor</td><td>So which is larger, 1/4 or 1/8, when the wholes are equal?</td><td>Return to the original mathematical statement.</td></tr>
          <tr><td>Learner</td><td>1/4. Each piece is bigger when there are fewer equal pieces.</td><td>State the corrected reasoning.</td></tr>
        </tbody>
      </table></div>
      <p>Now ask the learner to compare 1/3 and 1/6 without the pizza example. Follow with a boundary question: can you compare the physical size of slices from two differently sized pizzas using the fractions alone? This checks both the rule and the condition under which the example works.</p>
      <p>The dialogue is a teaching design example, not a transcript from a Tutezy session or evidence of a measured learning gain. Real students may respond in unexpected ways, so the tutor needs a way to clarify ambiguous responses.</p>

      <h2 id="hint-ladder">Build a hint ladder for difficult moments</h2>
      <p>A hint ladder makes support progressively more specific. Prepare the rungs around the actual concept so the tutor can help without jumping immediately to the full solution.</p>
      <ol>
        <li><strong>Restate the target:</strong> “We are comparing the size of one piece from each equal-sized whole.”</li>
        <li><strong>Point to the relevant feature:</strong> “Look at how many equal pieces each whole has.”</li>
        <li><strong>Offer a representation:</strong> show equal-length bars divided into four and eight parts.</li>
        <li><strong>Model the reasoning:</strong> explain the comparison, then ask the learner to try a new pair.</li>
      </ol>
      <p>Record which support was needed. A correct response after the modelled explanation is a useful step, but it is not the same evidence as an independent explanation. Review that distinction when deciding whether to move on or revisit the concept.</p>

      <h2 id="explain">When should the tutor stop asking and explain?</h2>
      <p>If the learner does not know what the denominator means, questions about its effect may become a guessing game. Teach the vocabulary with a labelled example first. Direct explanation is also appropriate when the learner requests clarification, when several attempts repeat the same confusion or when the question itself was unclear.</p>
      <Callout title="Set a stopping rule" tone="tip">
        <p>For a pilot lesson, a teacher might allow an initial attempt and two increasingly specific hints before offering an explanation. This is a starting rule to evaluate, not a research-backed universal limit. Watch for frustration and adapt sooner when needed.</p>
      </Callout>
      <p>Avoid stacking several questions in one turn. “What do you think, why, what rule applies, and what would happen next?” burdens the learner with deciding which question to answer. Ask one question, listen to the response and make the next move from that evidence.</p>

      <h2 id="evaluate">Evaluate the conversation, not its length</h2>
      <p>Review a few exchanges against five questions: Was the prompt clear? Did the response reveal thinking? Was the hint relevant? Did the tutor explain when needed? Could the learner solve a new task afterward? A long conversation is not automatically a productive one.</p>
      <p>Also test correct but unexpected answers. A rigid tutor may reject valid reasoning because it does not match a prepared phrase. Include equivalent wording in your review set, and inspect how the system handles uncertainty. Our guide to <a href="/blog/ai-tutor-hallucinations-grounding/">grounding AI tutors in course material</a> covers related accuracy checks.</p>
      <WhereTutezyFits>
        <p>Tutezy combines explanations, understanding checks, hints and bounded remediation within lessons prepared from your content. Use a demo to inspect the questioning around one of your own misconceptions. See <a href="/how-it-works/">how Tutezy teaches</a> or <a href="/for/tutors/">how tutors can use it between sessions</a>.</p>
      </WhereTutezyFits>
      <Sources items={[["IES, Organizing Instruction and Study to Improve Student Learning (2007), recommendation on explanatory questions.", "https://ies.ed.gov/ncee/wwc/PracticeGuide/1"]]} />
    </BlogShell>
  );
}

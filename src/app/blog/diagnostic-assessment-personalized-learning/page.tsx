import { BlogShell, Callout, Sources, WhereTutezyFits, postMetadata } from "@/components/BlogShell";

const SLUG = "diagnostic-assessment-personalized-learning";
export const metadata = postMetadata(SLUG);

export default function Page() {
  return (
    <BlogShell
      slug={SLUG}
      lede="A diagnostic assessment identifies the knowledge a learner needs next and the misconceptions that may block progress. To turn it into personalized learning, connect each result to a specific teaching response, then check whether the learner can apply the idea independently. A score alone is not a learning plan."
      takeaways={[
        <>Start with the prerequisites for the next unit, not a test of everything taught so far.</>,
        <>Pair selected answers with a short explanation to distinguish errors from guesses.</>,
        <>Attach a teaching action and a follow-up question to each identified gap.</>,
        <>Use results as provisional evidence and revisit them after support.</>,
      ]}
      toc={[["purpose", "Diagnostic, formative and summative assessment"], ["questions", "A sample fraction diagnostic"], ["learning-plan", "Turn results into a learning plan"], ["ai-role", "Where an AI tutor can help"], ["review", "Review the assessment itself"]]}
      related={["ai-math-tutor-step-by-step", "checking-for-understanding-techniques", "spaced-repetition-study-plan"]}
      faq={[
        ["What is the purpose of diagnostic assessment?", "It helps a teacher identify relevant prior knowledge, misconceptions and missing prerequisites before deciding what to teach next. Its value comes from changing the support a learner receives."],
        ["How long should a diagnostic assessment be?", "Use enough questions to inform the next teaching decision without making the check exhausting. For a small prerequisite check, a few carefully chosen questions may be sufficient. Add follow-up questions when an answer is ambiguous."],
        ["Can AI create a personalized learning plan?", "AI can assist with drafting activities and responding to practice answers. An educator should check the underlying questions, interpretation of results and proposed sequence. A generated plan should be revised as new evidence of learning appears."],
      ]}
    >
      <h2 id="purpose">Diagnostic, formative and summative assessment: what changes?</h2>
      <p>The distinction is the decision the assessment supports. A diagnostic check asks what the learner brings to a topic and what may need attention first. Formative assessment guides changes during teaching. Summative assessment records achievement at the end of a unit or course. The same question can serve different purposes depending on when and how its answer is used.</p>
      <p>For example, a fractions question before a ratio unit can reveal a prerequisite gap. During the unit it can guide the next explanation. At the end it may contribute to a grade. A diagnostic result should lead to support, rather than becoming a permanent label about a learner’s ability.</p>
      <p>The <a href="https://educationendowmentfoundation.org.uk/education-evidence/teaching-learning-toolkit/mastery-learning">Education Endowment Foundation’s mastery learning guidance</a> includes diagnostic assessment, sequencing, feedback and additional support as connected parts of implementation. It also describes limited evidence and variation in outcomes. Buying an assessment tool alone does not implement that approach.</p>

      <h2 id="questions">Build a short diagnostic around a prerequisite</h2>
      <p>Imagine the next lesson involves comparing ratios, but students need secure fraction concepts first. Choose questions that separate specific ideas. The following examples are a starting point for teacher review, not a standardized assessment.</p>
      <div className="tbl"><table>
        <thead><tr><th>Question</th><th>Expected answer</th><th>Possible follow-up</th></tr></thead>
        <tbody>
          <tr><td>Which is larger, 1/3 or 1/5? Explain.</td><td>1/3, because equal wholes divided into fewer equal pieces have larger pieces.</td><td>If 1/5 is chosen, compare two equally sized shaded bars.</td></tr>
          <tr><td>Complete 2/3 = ?/12.</td><td>8/12; multiply numerator and denominator by 4.</td><td>Ask why changing both by the same factor preserves the value.</td></tr>
          <tr><td>Calculate 1/4 + 1/4.</td><td>2/4 or 1/2.</td><td>If 2/8 is given, count quarter-sized pieces using a diagram.</td></tr>
          <tr><td>Place 3/4 on a line from 0 to 1.</td><td>Three of four equal intervals from zero.</td><td>Check whether the learner counts points or intervals.</td></tr>
        </tbody>
      </table></div>
      <p>A wrong response suggests a follow-up; it does not prove its cause. A student who selects 1/5 may have read too quickly. Someone who answers correctly may have guessed. Ask for a brief explanation or a second example before assigning substantial remedial work.</p>
      <p>Keep the language simple and accept appropriate equivalent forms. Decide in advance whether simplification is required. If a check is about fraction meaning, rejecting 2/4 solely because it is not written as 1/2 can obscure the skill you intended to assess.</p>

      <h2 id="learning-plan">Turn evidence into a personalized learning plan</h2>
      <p>Write the next action at the concept level. “Work on fractions” is too broad. “Compare unit fractions using equal-sized wholes, then explain a new pair without the diagram” tells a tutor what to do and gives the teacher a way to check progress.</p>
      <Callout title="Example learning-plan entry" tone="tip">
        <p><strong>Evidence:</strong> the learner chose 1/5 as larger than 1/3 and explained that five is larger than three.</p>
        <p><strong>Next activity:</strong> compare equal-sized bars divided into three and five equal parts, then explain what the denominator represents.</p>
        <p><strong>Independent check:</strong> compare 1/4 and 1/6, explaining why the wholes must be the same size.</p>
        <p><strong>Review:</strong> revisit the idea in the next lesson; if confusion persists, change the representation and involve the teacher.</p>
      </Callout>
      <p>Students who demonstrate the prerequisite can move to an application task. Students with different gaps should receive different short activities. Avoid sending everyone below a total-score threshold through the same full chapter: identical totals can hide very different needs.</p>
      <p>Keep groups flexible. A learner may need support with a representation while reasoning confidently in another context. Record what was observed and when it was checked, rather than treating the group assignment as a stable description of the student.</p>

      <h2 id="ai-role">Where an AI tutor can help with follow-up</h2>
      <p>An AI tutor can provide practice on an educator-selected concept, ask for an explanation and offer a prepared hint. The useful handover includes the objective, the learner’s response, the relevant misconception and the criterion for trying a new question. A chapter title and a percentage score give much less guidance.</p>
      <p>Check whether your chosen platform actually supports the diagnostic-to-lesson workflow you need. If results must be reviewed and assignments made manually, include that work in the rollout plan. Do not assume automatic placement, assessment import or timetable changes are available because a tool uses AI.</p>
      <p>Use <a href="/blog/checking-for-understanding-techniques/">checks during the lesson</a> to update the initial diagnosis. If a learner succeeds only after several hints, preserve that distinction in the teaching notes. Independent success and supported success call for different next steps.</p>

      <h2 id="review">Review the diagnostic as well as the learner</h2>
      <p>If many students miss an item, examine the wording, diagram and accepted answer before concluding that the whole class lacks the concept. Ask a colleague to solve the questions and explain what each one measures. Review whether reading demands or unfamiliar notation are interfering with the intended skill.</p>
      <p>After follow-up teaching, use new questions on the same concepts. Track which gaps were resolved, which require another approach and how much staff time the process takes. The result should be a manageable teaching decision for each learner, not a longer dashboard that nobody acts on.</p>
      <WhereTutezyFits>
        <p>Tutezy’s lessons check understanding and report concept-level weak spots. Educators can use those signals alongside their own assessments to plan support. See <a href="/how-it-works/">how lessons work</a> and <a href="/for/coaching-institutes/">Tutezy for coaching institutes</a> before designing your follow-up workflow.</p>
      </WhereTutezyFits>
      <Sources items={[["Education Endowment Foundation, Mastery learning: implementation and evidence overview.", "https://educationendowmentfoundation.org.uk/education-evidence/teaching-learning-toolkit/mastery-learning"]]} />
    </BlogShell>
  );
}

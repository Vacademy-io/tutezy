import { BlogShell, Callout, Sources, WhereTutezyFits, postMetadata } from "@/components/BlogShell";

const SLUG = "ai-whiteboard-tutor";
export const metadata = postMetadata(SLUG);

export default function Page() {
  return (
    <BlogShell
      slug={SLUG}
      lede="An AI whiteboard tutor combines a visual explanation with questions and feedback. Evaluate whether its diagrams, equations and spoken explanations help learners follow a concept, then check whether they can use it independently. A polished animation alone does not demonstrate effective teaching."
      takeaways={[
        "Ask the tutor to connect the diagram, words and calculation in one example.",
        "Check axes, units and intermediate steps, not only the final answer.",
        "Test how a lesson responds when the learner misunderstands the board.",
        "Include a fresh independent question in every product trial.",
      ]}
      toc={[["role", "What the board should contribute"], ["example", "A distance-time graph lesson"], ["interaction", "Test the interaction"], ["checklist", "A demo checklist"], ["pilot", "Evaluate a real chapter"]]}
      related={["ai-tutoring-for-stem-education", "ai-math-tutor-step-by-step", "learning-analytics-for-teachers"]}
      faq={[
        ["What is an AI whiteboard tutor?", "It is a tutoring experience that uses a visual board alongside explanation and learner interaction. Useful examples include building a diagram, showing intermediate calculation steps and asking a student to interpret what is displayed."],
        ["Is a whiteboard tutor the same as an AI video?", "A video presents a prepared sequence. An interactive tutor can ask for a response and provide feedback during the lesson. Test the actual interaction: a moving board does not by itself make a lesson adaptive."],
        ["Can every subject benefit from a whiteboard?", "Use a board where a visible representation helps explain the task, such as a graph, argument structure or worked calculation. Some speaking or discussion activities need little visual material. Choose it for the learning objective."],
      ]}
    >
      <h2 id="role">What should an AI whiteboard add to a lesson?</h2>
      <p>A board gives a learner something to refer back to while the explanation develops. In algebra, that might be the operation applied to both sides of an equation. In science, it might be a labelled diagram whose arrows show a process. In a writing lesson, it could be a claim with the evidence placed underneath.</p>
      <p>The <a href="https://ies.ed.gov/ncee/wwc/PracticeGuide/1">IES practice guide on instruction and study</a> recommends combining graphical and verbal descriptions and linking concrete and abstract representations. These recommendations concern instructional design; they do not establish the effectiveness of a particular AI product.</p>
      <p>When evaluating a lesson, ask what each visual element helps the learner do. A diagram should support an explanation or question. Decorative motion can be attractive, but it should not crowd out labels or make an earlier step disappear before the student has used it.</p>

      <h2 id="example">A worked distance-time graph lesson</h2>
      <p>Use a simple journey: a walker travels 10 metres in 5 seconds at constant speed, then stops for 3 seconds. The lesson objective is to interpret the slope of a distance-time graph. Specify that the walker continues along the same direction during the moving segment so the example remains unambiguous.</p>
      <div className="tbl"><table>
        <thead><tr><th>Board step</th><th>Question to ask</th><th>Expected interpretation</th></tr></thead>
        <tbody>
          <tr><td>Label time in seconds horizontally and distance in metres vertically.</td><td>Which value increases as the clock runs?</td><td>Time is represented on the horizontal axis.</td></tr>
          <tr><td>Draw a straight line from (0, 0) to (5, 10).</td><td>How far does the walker travel each second?</td><td>10 ÷ 5 = 2 metres per second.</td></tr>
          <tr><td>Continue horizontally to (8, 10).</td><td>Does this segment mean the walker returned home?</td><td>No. Distance remains 10 metres while time passes.</td></tr>
          <tr><td>Show a second line reaching 10 metres in 2 seconds.</td><td>Which moving segment represents the greater speed?</td><td>The steeper segment: 5 metres per second.</td></tr>
        </tbody>
      </table></div>
      <p>The board and explanation should refer to the same segment at the same moment. Ask the learner to predict a line before revealing it. Then provide a different graph and ask for an explanation without copying the completed example.</p>
      <p>This is a suggested evaluation exercise, not a claim that every whiteboard tutor supports every graph operation. Bring the example to a demo and inspect the actual output.</p>

      <h2 id="interaction">Test what happens when the learner is confused</h2>
      <p>Submit a plausible misconception: “The flat part means the walker went back to the start.” Useful feedback directs attention to the unchanged distance and the continuing time. It should then ask a question that checks whether the learner has revised their interpretation.</p>
      <p>Try a second kind of difficulty: “I cannot read the vertical label.” That is a presentation problem, not evidence of weak physics knowledge. Review how the learner can inspect the board, adjust their experience or obtain clarification on the device they will use.</p>
      <Callout title="Keep the student's view in the demo">
        <p>Test on a typical learner phone as well as a large screen. Check whether graph labels, fractions and earlier working remain readable. Record the actual issue instead of assuming every wrong answer reflects misunderstanding.</p>
      </Callout>

      <h2 id="checklist">A practical checklist for comparing tutors</h2>
      <ul>
        <li>Are symbols, units and diagram labels consistent with the source material?</li>
        <li>Does the explanation refer clearly to the visible part of the board?</li>
        <li>Can learners answer by the input method available to them?</li>
        <li>Does a hint address their mistake before the lesson reveals the solution?</li>
        <li>Can teachers review the lesson and correct unclear material before release?</li>
        <li>Does an interruption or resumed session preserve enough context to continue?</li>
      </ul>
      <p>Ask the same questions across products using your own chapter. A vendor's showcase topic may not expose the notation, language or diagram complexity of your course. The broader <a href="/blog/how-to-choose-ai-tutoring-software/">AI tutoring software checklist</a> covers other purchasing considerations.</p>

      <h2 id="pilot">Evaluate one real chapter before expanding</h2>
      <p>Select a chapter with a known misconception and a short independent assessment. Review the board, run a small learner trial and collect questions students could not resolve. Compare their independent explanations with the target objective, rather than relying on lesson completion alone.</p>
      <p>Keep teacher preparation time in the record. A useful pilot tells you both whether the lesson supports learning and how much effort is required to keep its visual material accurate. Our <a href="/blog/learning-analytics-for-teachers/">learning analytics guide</a> explains how to turn those observations into follow-up teaching.</p>
      <WhereTutezyFits>
        <p>Tutezy builds live whiteboard lessons from your teaching material, with questions and hints. Explore <a href="/how-it-works/">how the lessons work</a> and bring a diagram-heavy chapter to the demo so you can review the board in context.</p>
      </WhereTutezyFits>
      <Sources items={[["IES, Organizing Instruction and Study to Improve Student Learning.", "https://ies.ed.gov/ncee/wwc/PracticeGuide/1"]]} />
    </BlogShell>
  );
}

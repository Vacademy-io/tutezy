import { BlogShell, Callout, Sources, Steps, WhereTutezyFits, postMetadata, type FaqItem } from "@/components/BlogShell";

const SLUG = "checking-for-understanding-techniques";
export const metadata = postMetadata(SLUG);

const faq: FaqItem[] = [
  [
    "What does checking for understanding mean?",
    "Checking for understanding means collecting evidence of what each learner actually understood, during the lesson, so you can decide whether to move on, reteach or give a hint. It is the in-the-moment part of formative assessment. A good check makes every learner produce something you can read, such as an answer, a prediction or an explanation, rather than relying on who speaks up.",
  ],
  [
    "What are some checking for understanding strategies?",
    "Twelve that work online and one to one: hinge questions with misconception-based options, predict-then-reveal, explain it back, no-opt-out follow-ups, find the error, confidence ratings, apply it to a new case, show your work, exit tickets, low-stakes retrieval quizzes, faded worked examples and spaced revisits of weak concepts. Each one makes the learner’s thinking visible so you can act on it.",
  ],
  [
    "Why is “Does that make sense?” a bad question?",
    "It invites a yes, and learners are poor judges of their own understanding. In Roediger and Karpicke’s 2006 study, students who reread a passage felt more confident than students who practiced recalling it, yet recalled less a week later. Ask a question whose answer shows the understanding instead.",
  ],
  [
    "What is a hinge question?",
    "A hinge question is a quick multiple-choice question asked at the point where the lesson’s next step depends on the answer. Dylan Wiliam suggests students should need no more than two minutes to answer it and the teacher no more than 30 seconds to read the responses. Each wrong option should match a specific misconception, so the answer tells you what to reteach.",
  ],
  [
    "How do you check for understanding online?",
    "Make every learner respond, not just volunteers: polls or multiple-choice hinge questions, typed or spoken one-sentence explanations, predictions before a reveal, and short quizzes at the start of the next session. In one-to-one online teaching, ask a question after each new concept and do not move on until the answer shows the idea has landed.",
  ],
  [
    "How often should you check for understanding?",
    "Check whenever the next part of the lesson depends on the last one, which in one-to-one teaching usually means after each new concept. Then check again later: a quick retrieval question at the start of the next session catches what was forgotten, and revisiting weak concepts after a gap uses the spacing effect.",
  ],
];

export default function Page() {
  return (
    <BlogShell
      slug={SLUG}
      lede="Checking for understanding means getting evidence of what each learner actually understood before you move on, instead of asking “Any questions?” and treating silence as a yes. The checking for understanding strategies that work online all make the learner produce something you can read: an answer to a question whose wrong options map to misconceptions, a prediction, an explanation in their own words, a worked step. Below are 12 techniques, each with an online example, the common pitfall and how an AI tutor can run it."
      takeaways={[
        <>
          <strong>Silence is not evidence.</strong> “Any questions?” and “Does that make sense?” check confidence, and learners are poor judges of their own understanding.
        </>,
        <>
          <strong>Every learner answers, every time.</strong> A check that only volunteers respond to tells you about the volunteers.
        </>,
        <>
          <strong>Design the wrong answers.</strong> A hinge question whose distractors match known misconceptions tells you what to reteach, not just who got it wrong.
        </>,
        <>
          <strong>Check again later.</strong> A low-stakes quiz after a delay beats rereading for long-term recall; in one classic study, 61% vs 40% after a week.
        </>,
        <>
          <strong>A check is only useful if it changes what happens next.</strong> Hint, reteach, move on or come back later: decide before you ask.
        </>,
      ]}
      toc={[
        ["why-any-questions-fails", "Why “Any questions?” fails"],
        ["what-the-research-says", "What the research says"],
        ["checks-during-teaching", "Checks while you teach (1–4)"],
        ["checks-after-a-concept", "Checks after a concept (5–8)"],
        ["checks-that-come-back", "Checks that come back later (9–12)"],
        ["all-12-at-a-glance", "All 12 techniques at a glance"],
        ["sample-lesson", "A 15-minute lesson with checks built in"],
      ]}
      faq={faq}
      demoTopic="photosynthesis"
    >
      <h2 id="why-any-questions-fails">Why don’t “Any questions?” and “Does that make sense?” work?</h2>
      <p>
        Checking for understanding is the habit of collecting evidence, during the lesson, of what each learner has actually understood. The
        two most common checks collect almost none. “Any questions?” asks a learner to diagnose their own confusion and admit it out loud. The
        ones who are most lost often cannot say what they don’t know. Online, with cameras off and a quiet chat, silence tells you even less.
      </p>
      <p>
        “Does that make sense?” is worse, because it invites a yes. Learners mistake familiarity for understanding. In Roediger and
        Karpicke’s 2006 study in <em>Psychological Science</em>, students who spent four study periods rereading a passage were more
        confident they would remember it than students who read it once and then took three recall tests. A week later, the rereaders recalled
        40% of the passage and the recall group 61%.
      </p>
      <p>
        Black and Wiliam, reviewing classroom practice in 1998, described a related trap: a teacher who answers their own question after two or
        three seconds leaves no time to think, so questions drift toward the simple and the “discussion” happens with the few quick students.
        The fix is the same in both cases. Ask a question whose answer shows the understanding, and get an answer from every learner.
      </p>
      <Callout title="Three swaps to make today" tone="tip">
        <p>
          <strong>“Any questions?”</strong> becomes “Which of these four answers is right, and why?”
        </p>
        <p>
          <strong>“Does that make sense?”</strong> becomes “In one sentence, why does a plant need light?”
        </p>
        <p>
          <strong>“Got it?”</strong> becomes “Before I show you, predict what happens if we move the lamp away.”
        </p>
      </Callout>

      <h2 id="what-the-research-says">What does the research say about checking for understanding?</h2>
      <p>
        The case for checking rests on two bodies of evidence. The first is formative assessment. Black and Wiliam’s 1998 review, summarized
        for teachers as “Inside the Black Box,” reported effect sizes of 0.4 to 0.7 in the formative-assessment studies it reviewed. Later work was more cautious. A
        2011 meta-analysis by Kingston and Nash reviewed more than 300 studies, found only 13 with enough information to calculate effects, and
        estimated a weighted mean effect of 0.20, higher in English language arts (0.32) than in math (0.17) or science (0.09). Computer-based
        formative systems came in at 0.28. The honest reading: checking helps, and how much depends on what you do with the answer.
      </p>
      <p>
        The second is cognitive science on how people remember. Dunlosky and colleagues’ 2013 review of ten study techniques rated practice
        testing and distributed practice as high utility, self-explanation as moderate, and rereading and highlighting as low. Several of the
        techniques below are checks and learning events at once: answering the question is itself part of how the idea sticks.
      </p>

      <h2 id="checks-during-teaching">Checks while you teach (techniques 1–4)</h2>
      <p>The examples use one topic throughout, a first lesson on photosynthesis, so you can see how the checks fit together.</p>

      <h3>1. Hinge questions with misconception-mapped options</h3>
      <p>
        A multiple-choice question asked at the point where your next move depends on the answer. Dylan Wiliam’s rule of thumb: students
        should need no more than two minutes to answer, and you should be able to read every response in 30 seconds or less. The aim is that
        students with the right thinking and students with the wrong thinking give different answers.
      </p>
      <p>
        <strong>Example:</strong> “Most of the dry mass of a large tree comes from: (A) minerals in the soil, (B) water, (C) carbon dioxide from
        the air, (D) sunlight.” The answer is C; A, B and D each match a common misconception. <strong>Pitfall:</strong> distractors nobody
        would pick, which make the question a formality. <strong>AI tutor:</strong> store the misconception behind each wrong option in the
        lesson plan, so a wrong choice triggers the hint written for that mistake.
      </p>

      <h3>2. Predict, then reveal</h3>
      <p>
        Ask for a prediction before showing the result, then ask the learner to explain any gap. Science teachers know it as
        predict–observe–explain, described by White and Gunstone in <em>Probing Understanding</em>.
      </p>
      <p>
        <strong>Example:</strong> “A plant is sealed in a jar in the dark for two days. Will the carbon dioxide in the jar go up, down or stay
        the same?” (Up: respiration continues, photosynthesis stops.) <strong>Pitfall:</strong> revealing the answer without asking why the
        prediction was off, which is where the learning happens. <strong>AI tutor:</strong> record the prediction, show the result on the
        board, then ask for the explanation and score it.
      </p>

      <h3>3. Explain it back</h3>
      <p>
        The learner explains the idea in their own words. In Chi and colleagues’ 1994 study, eighth graders who were simply prompted to explain
        each line of a text on the circulatory system to themselves gained more from pretest to posttest than a control group who read it
        twice. It was a small study (14 prompted students, 10 controls); Dunlosky’s review, looking across the wider research, rates
        self-explanation as moderately useful.
      </p>
      <p>
        <strong>Example:</strong> “In one sentence, why does a plant need light to make glucose?” A good answer says light supplies the energy
        and that energy ends up stored in glucose. <strong>Pitfall:</strong> accepting a parroted phrase (“because of photosynthesis”).{" "}
        <strong>AI tutor:</strong> score the answer against a short rubric of must-have ideas and ask a follow-up about whichever one is
        missing.
      </p>

      <h3>4. No-opt-out follow-ups</h3>
      <p>
        When a learner says “I don’t know,” the exchange isn’t finished until that same learner gives the right answer. Doug Lemov named this
        “No Opt Out” in <em>Teach Like a Champion</em>.
      </p>
      <p>
        <strong>Example:</strong> The learner can’t name the gas plants take in. Narrow it: “We breathe it out. What is it?” Then return to the
        original question and have them answer it in full. <strong>Pitfall:</strong> moving on to someone else, which teaches that “I don’t
        know” ends the question. <strong>AI tutor:</strong> nudge after silence, give a smaller hint, then re-ask the original question.
      </p>

      <h2 id="checks-after-a-concept">Checks after a concept (techniques 5–8)</h2>

      <h3>5. Find the error</h3>
      <p>
        Show a plausible answer containing one planted mistake and ask the learner to find and fix it. It tests whether they can apply the
        idea, not just recognize it.
      </p>
      <p>
        <strong>Example:</strong> “A student writes: ‘Plants photosynthesize during the day and respire at night.’ What’s wrong?” (Plants
        respire all the time; in daylight, photosynthesis usually outpaces it.) <strong>Pitfall:</strong> leaving the wrong version as the last
        thing on screen. <strong>AI tutor:</strong> check that the learner both spots the error and states the corrected version, then write
        the correction on the board.
      </p>

      <h3>6. Confidence ratings</h3>
      <p>
        After answering, the learner rates their confidence: guessing, fairly sure or certain. Confidence alone is not evidence, as the
        rereading result above shows, but paired with the answer it sorts learners usefully. Confident and wrong is a misconception to fix
        first; unsure and right needs practice, not reteaching.
      </p>
      <p>
        <strong>Example:</strong> after the tree-mass question, “How sure were you?” <strong>Pitfall:</strong> asking for confidence instead of
        an answer. <strong>AI tutor:</strong> store the rating with the answer and put confident-wrong concepts first in the revisit queue.
      </p>

      <h3>7. Apply it to a new case</h3>
      <p>
        Change the surface of the problem and keep the principle. A learner who has only memorized the example will stall.
      </p>
      <p>
        <strong>Example:</strong> “Pondweed under a lamp gives off bubbles. What happens to the bubbles if you move the lamp farther away, and
        why?” (Fewer bubbles: less light, slower photosynthesis, less oxygen.) <strong>Pitfall:</strong> a “new” case that is the same example
        with new numbers. <strong>AI tutor:</strong> keep transfer questions and their expected answers in the reviewed lesson plan rather than
        improvising them, so the science stays right.
      </p>

      <h3>8. Show your work</h3>
      <p>
        Ask for the steps, not just the result. In a live online class, everyone writes on a shared whiteboard, or types in the chat and hits
        enter at the same moment so nobody copies.
      </p>
      <p>
        <strong>Example:</strong> “Write the word equation for photosynthesis.” (Carbon dioxide + water → glucose + oxygen, using light
        energy.) <strong>Pitfall:</strong> marking only the final line, which hides where the reasoning broke. <strong>AI tutor:</strong> ask for
        the steps one at a time by voice or text; handwritten working on paper is still easier for a human to read.
      </p>

      <h2 id="checks-that-come-back">Checks that come back later (techniques 9–12)</h2>

      <h3>9. Exit tickets</h3>
      <p>
        Two or three quick prompts at the end of a lesson, read before the next one. Include one question on the hardest idea and one asking
        what is still unclear.
      </p>
      <p>
        <strong>Example:</strong> “Name the two inputs of photosynthesis. Where in the cell does it happen? What’s one thing you’re unsure
        about?” <strong>Pitfall:</strong> collecting tickets nobody reads. <strong>AI tutor:</strong> turn the answers into a per-learner
        summary for the teacher and open the next session with the weakest point.
      </p>

      <h3>10. Low-stakes retrieval quizzes</h3>
      <p>
        Short recall questions, ungraded, with the answer given straight after. In Roediger and Karpicke’s experiment, rereading won on a test
        five minutes later (83% vs 71%), but after a week the recall group was well ahead (61% vs 40%).
      </p>
      <p>
        <strong>Example:</strong> start the next session with “Without looking back: why did the bubbles slow down when the lamp moved?”{" "}
        <strong>Pitfall:</strong> treating it as a grade, which makes learners anxious and tempts them to look things up.{" "}
        <strong>AI tutor:</strong> ask aloud, score, give the answer, and log which ideas were forgotten.
      </p>

      <h3>11. Faded worked examples</h3>
      <p>
        Show a fully worked example, then remove steps one at a time until the learner does the whole problem. Renkl and Atkinson describe fading as a
        way to raise the demands gradually so learners aren’t overwhelmed; in “backward” fading, the last step is the first to go.
      </p>
      <p>
        <strong>Example:</strong> worked: “45 bubbles in 3 minutes is 15 bubbles per minute.” Faded: “60 bubbles in 5 minutes. You do the last
        step.” Then: “Compare the rates at 20 cm and 40 cm from the lamp.” <strong>Pitfall:</strong> fading too fast, or never fading at all.{" "}
        <strong>AI tutor:</strong> ask for the next step before showing it on the board.
      </p>

      <h3>12. Spaced revisits of weak concepts</h3>
      <p>
        Come back to what was shaky after a gap: later in the lesson, at the start of the next one, a week on. Dunlosky’s review rates
        distributed practice as high utility.
      </p>
      <p>
        <strong>Example:</strong> the learner missed the sealed-jar prediction, so revisit it at the end with a variant (the same jar in bright
        light) and again next session. <strong>Pitfall:</strong> revisiting everything equally, or straight away, which isn’t spacing.{" "}
        <strong>AI tutor:</strong> flag weak concepts per learner and schedule them into later recaps.
      </p>

      <h2 id="all-12-at-a-glance">All 12 checking for understanding strategies at a glance</h2>
      <div className="tbl">
        <table>
          <thead>
            <tr>
              <th>Technique</th>
              <th>Best moment</th>
              <th>What it reveals</th>
              <th>Pitfall to avoid</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1. Hinge question</td><td>Before building on a concept</td><td>Which misconception, per learner</td><td>Distractors nobody picks</td></tr>
            <tr><td>2. Predict, then reveal</td><td>Before a demo or result</td><td>The learner’s mental model</td><td>No “why” after the reveal</td></tr>
            <tr><td>3. Explain it back</td><td>Right after explaining</td><td>Whether the idea is in their words</td><td>Accepting parroted phrases</td></tr>
            <tr><td>4. No-opt-out follow-up</td><td>After “I don’t know”</td><td>Whether a hint is enough</td><td>Moving on to someone else</td></tr>
            <tr><td>5. Find the error</td><td>After a concept</td><td>Whether they can apply it</td><td>Wrong version left on screen</td></tr>
            <tr><td>6. Confidence rating</td><td>Paired with any answer</td><td>Confident-wrong misconceptions</td><td>Confidence instead of an answer</td></tr>
            <tr><td>7. Apply to a new case</td><td>End of a concept</td><td>Transfer beyond the example</td><td>Same example, new numbers</td></tr>
            <tr><td>8. Show your work</td><td>Multi-step problems</td><td>Where reasoning breaks</td><td>Marking only the final line</td></tr>
            <tr><td>9. Exit ticket</td><td>End of lesson</td><td>What to open the next lesson with</td><td>Nobody reads them</td></tr>
            <tr><td>10. Retrieval quiz</td><td>Start of next session</td><td>What was forgotten</td><td>Making it a grade</td></tr>
            <tr><td>11. Faded worked examples</td><td>Moving from examples to problems</td><td>Which step they can’t do alone</td><td>Fading too fast</td></tr>
            <tr><td>12. Spaced revisit</td><td>Later that lesson, next session</td><td>Whether a fix held</td><td>Revisiting everything, or too soon</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        You don’t need all twelve in every lesson. A hinge question, an explain-it-back and a retrieval question next time cover most of the
        value. The rest are for when those show a problem.
      </p>
      <p>
        If you are evaluating AI tools for any of this, the quickest test is whether the tool asks the learner questions or only answers
        them. A chatbot that explains well but never checks gives you the same false signal as “Does that make sense?” We compare the two
        designs in <a href="/compare/tutezy-vs-chatgpt/">Tutezy vs ChatGPT</a>.
      </p>

      <h2 id="sample-lesson">What does a 15-minute lesson with checks look like?</h2>
      <p>
        Here is how the photosynthesis lesson above might run one to one, online. Every step ends with the learner producing something, and
        every answer decides what happens next.
      </p>
      <Steps
        items={[
          ["Warm-up retrieval (2 min)", "Two recall questions on last lesson’s weakest point. Wrong answers get a quick reteach before anything new."],
          ["Inputs and outputs (4 min)", "Teach the word equation, then the tree-mass hinge question. A wrong option triggers the hint for that misconception."],
          ["Why light matters (3 min)", "Predict what happens when the lamp moves away, reveal, then “explain it back” in one sentence."],
          ["Measuring the rate (3 min)", "A worked bubble-count example, then a faded one where the learner does the last step."],
          ["Find the error (2 min)", "The “respire only at night” statement, with a confidence rating. Confident-wrong goes to the top of the revisit list."],
          ["Exit ticket (1 min)", "Three prompts. Weak concepts become the next session’s warm-up, which closes the loop."],
        ]}
      />
      <p>
        This is the same loop that made tutoring effective in the studies behind{" "}
        <a href="/blog/blooms-2-sigma-problem-ai-tutoring/">Bloom’s 2 sigma problem</a>: check, correct, don’t build on a gap, come back to
        it. For self-paced courses, the same checks placed between videos are one of the fixes in our guide to{" "}
        <a href="/blog/improve-online-course-completion-rates/">improving online course completion rates</a>.
      </p>

      <WhereTutezyFits>
        <p>
          Tutezy runs several of these checks in every lesson without a teacher present. Each concept in a compiled lesson plan carries a
          check (multiple choice, short answer or predict-then-reveal) with an expected answer, a rubric, common misconceptions with hints,
          and a pass threshold. Students answer by voice or typing; a long silence gets a nudge. A wrong answer gets a hint first, then the
          answer kept on the board; remediation loops are capped. Worked examples ask for the next step before showing it. Weak concepts are
          revisited before the topic closes and recapped at the start of the next lesson, and teachers see concept mastery per student and weak
          spots per batch. The mechanism is on <a href="/how-it-works/">how it works</a>; schools can see the set-up on{" "}
          <a href="/for/schools/">Tutezy for schools</a>, and lessons cost $0.03 per learner-minute (<a href="/pricing/">pricing</a>).
        </p>
        <p>
          Where it is not the right tool: checks that depend on reading a student’s handwritten working, or on a whole-class discussion,
          are still a human teacher’s job. The checks are compiled from your own material, so their quality depends on it, and the
          institute reviews them before students see them.
        </p>
      </WhereTutezyFits>

      <Sources
        items={[
          ["Black, P., & Wiliam, D. (1998). Inside the black box: Raising standards through classroom assessment. Phi Delta Kappan, 80(2), 139–148.", "https://eric.ed.gov/?id=EJ575146"],
          ["Kingston, N., & Nash, B. (2011). Formative assessment: A meta-analysis and a call for research. Educational Measurement: Issues and Practice, 30(4), 28–37.", "https://doi.org/10.1111/j.1745-3992.2011.00220.x"],
          ["Wiliam, D. (2015). Designing great hinge questions. Educational Leadership, 73(1).", "https://www.ascd.org/el/articles/designing-great-hinge-questions"],
          ["Roediger, H. L., & Karpicke, J. D. (2006). Test-enhanced learning: Taking memory tests improves long-term retention. Psychological Science, 17(3), 249–255.", "https://doi.org/10.1111/j.1467-9280.2006.01693.x"],
          ["Chi, M. T. H., de Leeuw, N., Chiu, M.-H., & LaVancher, C. (1994). Eliciting self-explanations improves understanding. Cognitive Science, 18(3), 439–477.", "https://doi.org/10.1207/s15516709cog1803_3"],
          ["Dunlosky, J., Rawson, K. A., Marsh, E. J., Nathan, M. J., & Willingham, D. T. (2013). Improving students’ learning with effective learning techniques. Psychological Science in the Public Interest, 14(1), 4–58.", "https://doi.org/10.1177/1529100612453266"],
          ["Renkl, A., & Atkinson, R. K. (2003). Structuring the transition from example study to problem solving in cognitive skill acquisition: A cognitive load perspective. Educational Psychologist, 38(1), 15–22.", "https://doi.org/10.1207/S15326985EP3801_3"],
          ["White, R., & Gunstone, R. (1992). Probing understanding. Falmer Press (Routledge edition).", "https://doi.org/10.4324/9780203761342"],
          ["Lemov, D. (2010). Teach like a champion: 49 techniques that put students on the path to college. Jossey-Bass.", "https://openlibrary.org/isbn/9780470550472"],
        ]}
      />
    </BlogShell>
  );
}

import { BlogShell, Callout, Figure, Sources, Steps, WhereTutezyFits, postMetadata, type FaqItem } from "@/components/BlogShell";

const SLUG = "blooms-2-sigma-problem-ai-tutoring";
export const metadata = postMetadata(SLUG);

const faq: FaqItem[] = [
  [
    "What is Bloom’s 2 sigma problem?",
    "In a 1984 paper in Educational Researcher, Benjamin Bloom reported that students tutored one to one, with regular checks and corrective work, scored about two standard deviations above students in a conventional class of about 30. The “problem” was that a tutor for every student is too expensive, so Bloom asked researchers to find group teaching methods that could get the same result.",
  ],
  [
    "Is the 2 sigma effect real?",
    "It was a real result in the studies Bloom described, but those were three-week units in probability and cartography, measured with tests written for that unit. Larger reviews find smaller effects: VanLehn’s 2011 review put human tutoring at 0.79 standard deviations, and a 2024 meta-analysis of randomized preK–12 tutoring experiments found a pooled effect of 0.288. Tutoring clearly works; 2 sigma is not what it typically delivers.",
  ],
  [
    "What does 2 sigma mean in percentiles?",
    "Sigma is one standard deviation of the comparison group’s scores. If scores are roughly normal, a student one standard deviation above the average sits at about the 84th percentile, and two above sits at about the 98th. That is why Bloom wrote that the average tutored student was above 98% of the students in the conventional class.",
  ],
  [
    "What is the effect size of one-to-one tutoring?",
    "It depends on the study and the test. Kurt VanLehn’s 2011 review found d = 0.79 for human tutoring, and a 2024 meta-analysis by Nickow, Oreopoulos and Quan found a pooled 0.288 SD across randomized tutoring experiments, with larger effects for teacher or paraprofessional tutors, earlier grades and sessions at least three days a week. Effects measured on narrow tests written by researchers tend to be much larger than effects on standardized tests.",
  ],
  [
    "Can AI tutoring close the 2 sigma gap?",
    "Not proven. A 2025 Harvard physics trial found a structured AI tutor more than doubled median learning gains over an active-learning class across two lessons, with an estimated effect of 0.73 to 1.3 standard deviations. A 2025 study in a Turkish high school found that unguarded GPT-4 access left students 17% worse on a later exam taken without it. The design of the tutor decides which result you get.",
  ],
  [
    "Does using ChatGPT help students learn?",
    "Used as an answer machine, it can hurt. In the Bastani et al. study published in PNAS in 2025, students with a ChatGPT-style interface did better during practice but 17% worse than a control group once access was removed. A version that gave teacher-designed hints instead of answers largely avoided that harm.",
  ],
];

export default function Page() {
  return (
    <BlogShell
      slug={SLUG}
      lede="Bloom’s 2 sigma problem comes from a 1984 paper in which Benjamin Bloom reported that students taught one to one, with regular checks and corrective work, scored about two standard deviations above students in a conventional class of 30: the average tutored student beat 98% of that class. The “problem” was getting that result without a tutor for every student. Larger studies since then put typical tutoring gains at roughly 0.2 to 0.8 standard deviations, and the first generative-AI trials show that the tutor’s design decides whether AI helps or hurts learning."
      takeaways={[
        <>
          <strong>The 2 sigma number is real but narrow.</strong> It came from two University of Chicago dissertations: three-week units in probability and cartography, measured with tests written for those units.
        </>,
        <>
          <strong>About half the effect was mastery learning.</strong> Regular checks plus corrective work, with no tutor, moved the average student from the 50th to about the 84th percentile.
        </>,
        <>
          <strong>Typical tutoring effects are smaller, and still large.</strong> VanLehn’s 2011 review found 0.79 SD for human tutors; a 2024 meta-analysis of randomized tutoring experiments found 0.288 SD.
        </>,
        <>
          <strong>AI tutoring can go either way.</strong> A structured AI tutor at Harvard more than doubled median gains in two physics lessons; open GPT-4 access in a Turkish high school left students 17% worse once it was taken away.
        </>,
        <>
          <strong>Design for the mechanism, not the chat.</strong> Teach a plan, check after each concept, hint before telling, hold off moving on until it is understood, and come back to what was weak.
        </>,
      ]}
      toc={[
        ["what-bloom-found", "What Bloom’s paper actually found"],
        ["what-two-sigma-means", "What “2 sigma” means in percentiles"],
        ["why-the-effect-shrank", "Why later research shrank the number"],
        ["ai-tutoring-trials", "What AI tutoring trials have found"],
        ["what-made-tutoring-work", "The mechanisms behind the effect"],
        ["ai-tutor-design", "What this means for AI tutor design"],
        ["cost-of-tutoring", "Is it still a cost problem?"],
        ["read-the-evidence", "How to read an AI tutoring claim"],
      ]}
      faq={faq}
      demoTopic="newton-second-law"
    >
      <h2 id="what-bloom-found">What did Bloom’s 2 sigma paper actually find?</h2>
      <p>
        In the June–July 1984 issue of <em>Educational Researcher</em>, Benjamin Bloom, then at the University of Chicago and Northwestern
        University, published “The 2 Sigma Problem: The Search for Methods of Group Instruction as Effective as One-to-One Tutoring.” The headline result
        did not come from a large trial. It came from dissertations by two of his doctoral students, Joanne Anania and Joseph Burke, which
        compared three ways of teaching the same material:
      </p>
      <ul>
        <li>
          <strong>Conventional:</strong> about 30 students per teacher, with periodic tests used for grades.
        </li>
        <li>
          <strong>Mastery learning:</strong> the same class size and usually the same teacher, plus formative tests used for feedback,
          corrective work for students who had not yet mastered the unit, and a parallel test to check that they now had.
        </li>
        <li>
          <strong>Tutoring:</strong> a good tutor for each student (or for two or three at once), followed by the same cycle of formative
          tests, feedback and correctives.
        </li>
      </ul>
      <p>
        Students were randomly assigned to the three conditions. Bloom reports that the study was replicated with four samples of students in
        grades 4, 5 and 8, in two subjects (probability and cartography), with instruction limited to 11 class periods over three weeks.
      </p>
      <p>
        The results were striking. Measured in standard deviations (sigma) of the conventional class, the average tutored student scored about
        2 sigma higher: above 98% of the control class. The average mastery-learning student scored about 1 sigma higher: above 84%. Around 90%
        of tutored students and 70% of mastery-learning students reached the level that only the top 20% of the conventional class reached.
        Time on task moved the same way, from about 65% in conventional classes to 75% under mastery learning and over 90% under tutoring.
      </p>
      <p>
        The “problem” in the title was economic. Bloom called one-to-one tutoring “too costly for most societies to bear on a large scale” and
        asked researchers to find group methods that could match it. Most of the paper is about that search: pairing mastery learning with
        other changes, such as better explanations or more student participation, to see whether two changes together could approach 2 sigma.
      </p>

      <h2 id="what-two-sigma-means">What does “2 sigma” mean in percentiles?</h2>
      <p>
        A sigma is one standard deviation of the comparison group’s scores. If scores are roughly normal, a student at the average sits at the
        50th percentile, one standard deviation above sits at about the 84th, and two above sits at about the 98th. That is the arithmetic
        behind Bloom’s two claims.
      </p>
      <Figure caption="Schematic of Bloom’s 1984 comparison, with scores in standard deviations of the conventional class. The mastery-learning average sits 1 SD above the conventional average (84th percentile); the tutoring average sits 2 SD above (98th). All three curves are drawn with the same spread for clarity; in Bloom’s data the mastery and tutoring groups were also less spread out.">
        <svg viewBox="0 0 760 340" width="100%" role="img" aria-label="Three bell curves on one axis. The conventional class is centred at 0, mastery learning at plus 1 standard deviation (84th percentile of the conventional class), and one-to-one tutoring at plus 2 standard deviations (98th percentile).">
          <rect x="0" y="0" width="760" height="340" fill="#fbf8f2" />
          {/* legend */}
          <rect x="70" y="20" width="16" height="16" rx="3" fill="#9aa3b8" />
          <text x="94" y="33" fontFamily="inherit" fontSize="14" fill="#151c2f">Conventional class (1 : 30)</text>
          <rect x="320" y="20" width="16" height="16" rx="3" fill="#17b890" />
          <text x="344" y="33" fontFamily="inherit" fontSize="14" fill="#151c2f">Mastery learning (1 : 30)</text>
          <rect x="560" y="20" width="16" height="16" rx="3" fill="#ff6b1a" />
          <text x="584" y="33" fontFamily="inherit" fontSize="14" fill="#151c2f">Tutoring (1 : 1)</text>
          {/* curves */}
          <path
            d="M70.0 258.1 L80.0 257.3 L90.0 256.1 L100.0 254.6 L110.0 252.5 L120.0 249.9 L130.0 246.5 L140.0 242.2 L150.0 237.0 L160.0 230.7 L170.0 223.2 L180.0 214.6 L190.0 204.8 L200.0 193.9 L210.0 182.2 L220.0 169.7 L230.0 156.9 L240.0 144.1 L250.0 131.7 L260.0 120.2 L270.0 110.0 L280.0 101.5 L290.0 95.2 L300.0 91.3 L310.0 90.0 L320.0 91.3 L330.0 95.2 L340.0 101.5 L350.0 110.0 L360.0 120.2 L370.0 131.7 L380.0 144.1 L390.0 156.9 L400.0 169.7 L410.0 182.2 L420.0 193.9 L430.0 204.8 L440.0 214.6 L450.0 223.2 L460.0 230.7 L470.0 237.0 L480.0 242.2 L490.0 246.5 L500.0 249.9 L510.0 252.5 L520.0 254.6 L530.0 256.1 L540.0 257.3 L550.0 258.1 L560.0 258.7 L570.0 259.1 L580.0 259.4 L590.0 259.6 L600.0 259.8 L640.0 260.0 L710.0 260.0 L70.0 260.0 Z"
            fill="#9aa3b8"
            fillOpacity="0.22"
            stroke="#9aa3b8"
            strokeWidth="3"
          />
          <path
            d="M70.0 259.9 L110.0 259.6 L120.0 259.4 L130.0 259.1 L140.0 258.7 L150.0 258.1 L160.0 257.3 L170.0 256.1 L180.0 254.6 L190.0 252.5 L200.0 249.9 L210.0 246.5 L220.0 242.2 L230.0 237.0 L240.0 230.7 L250.0 223.2 L260.0 214.6 L270.0 204.8 L280.0 193.9 L290.0 182.2 L300.0 169.7 L310.0 156.9 L320.0 144.1 L330.0 131.7 L340.0 120.2 L350.0 110.0 L360.0 101.5 L370.0 95.2 L380.0 91.3 L390.0 90.0 L400.0 91.3 L410.0 95.2 L420.0 101.5 L430.0 110.0 L440.0 120.2 L450.0 131.7 L460.0 144.1 L470.0 156.9 L480.0 169.7 L490.0 182.2 L500.0 193.9 L510.0 204.8 L520.0 214.6 L530.0 223.2 L540.0 230.7 L550.0 237.0 L560.0 242.2 L570.0 246.5 L580.0 249.9 L590.0 252.5 L600.0 254.6 L610.0 256.1 L620.0 257.3 L630.0 258.1 L640.0 258.7 L650.0 259.1 L660.0 259.4 L670.0 259.6 L710.0 259.9 L710.0 260.0 L70.0 260.0 Z"
            fill="#17b890"
            fillOpacity="0.2"
            stroke="#17b890"
            strokeWidth="3"
          />
          <path
            d="M70.0 260.0 L150.0 259.9 L180.0 259.8 L190.0 259.6 L200.0 259.4 L210.0 259.1 L220.0 258.7 L230.0 258.1 L240.0 257.3 L250.0 256.1 L260.0 254.6 L270.0 252.5 L280.0 249.9 L290.0 246.5 L300.0 242.2 L310.0 237.0 L320.0 230.7 L330.0 223.2 L340.0 214.6 L350.0 204.8 L360.0 193.9 L370.0 182.2 L380.0 169.7 L390.0 156.9 L400.0 144.1 L410.0 131.7 L420.0 120.2 L430.0 110.0 L440.0 101.5 L450.0 95.2 L460.0 91.3 L470.0 90.0 L480.0 91.3 L490.0 95.2 L500.0 101.5 L510.0 110.0 L520.0 120.2 L530.0 131.7 L540.0 144.1 L550.0 156.9 L560.0 169.7 L570.0 182.2 L580.0 193.9 L590.0 204.8 L600.0 214.6 L610.0 223.2 L620.0 230.7 L630.0 237.0 L640.0 242.2 L650.0 246.5 L660.0 249.9 L670.0 252.5 L680.0 254.6 L690.0 256.1 L700.0 257.3 L710.0 258.1 L710.0 260.0 L70.0 260.0 Z"
            fill="#ff6b1a"
            fillOpacity="0.18"
            stroke="#ff6b1a"
            strokeWidth="3"
          />
          {/* mean lines */}
          <line x1="310" y1="90" x2="310" y2="260" stroke="#151c2f" strokeWidth="1.5" strokeDasharray="5 5" />
          <line x1="390" y1="90" x2="390" y2="260" stroke="#151c2f" strokeWidth="1.5" strokeDasharray="5 5" />
          <line x1="470" y1="90" x2="470" y2="260" stroke="#151c2f" strokeWidth="1.5" strokeDasharray="5 5" />
          <text x="310" y="78" textAnchor="middle" fontFamily="inherit" fontSize="14" fontWeight="700" fill="#151c2f">50th</text>
          <text x="390" y="78" textAnchor="middle" fontFamily="inherit" fontSize="14" fontWeight="700" fill="#151c2f">84th</text>
          <text x="470" y="78" textAnchor="middle" fontFamily="inherit" fontSize="14" fontWeight="700" fill="#151c2f">98th</text>
          <text x="560" y="96" fontFamily="inherit" fontSize="13" fill="#151c2f">← percentile of the</text>
          <text x="560" y="113" fontFamily="inherit" fontSize="13" fill="#151c2f">conventional class</text>
          {/* axis */}
          <line x1="60" y1="260" x2="720" y2="260" stroke="#151c2f" strokeWidth="2" />
          {[-2, -1, 0, 1, 2, 3, 4].map((z) => (
            <g key={z}>
              <line x1={310 + z * 80} y1="260" x2={310 + z * 80} y2="267" stroke="#151c2f" strokeWidth="2" />
              <text x={310 + z * 80} y="286" textAnchor="middle" fontFamily="inherit" fontSize="14" fill="#151c2f">
                {z > 0 ? `+${z}` : z < 0 ? `−${-z}` : "0"}
              </text>
            </g>
          ))}
          <text x="390" y="318" textAnchor="middle" fontFamily="inherit" fontSize="14" fill="#151c2f">
            Final test score, in standard deviations of the conventional class
          </text>
        </svg>
      </Figure>
      <p>
        In classroom terms: in a conventional class of 30, a 2 sigma gain means the typical tutored student would outscore about 29 of them.
        Smaller effects still matter. A gain of 0.3 SD moves an average student from the 50th to about the 62nd percentile; 0.8 SD moves them
        to about the 79th. Keep those conversions in mind for the numbers that follow.
      </p>

      <h2 id="why-the-effect-shrank">Why did later research shrink the 2 sigma effect?</h2>
      <p>
        Bloom’s number has become shorthand for what tutoring can do, but it does not describe what tutoring typically does. Four things
        explain the gap.
      </p>
      <p>
        <strong>The tests were narrow.</strong> Anania and Burke chose probability and cartography because the topics were unfamiliar to the
        students, and the post-test covered exactly what the three-week unit taught. In a 2024 essay in <em>Education Next</em>, Paul von
        Hippel points to a 1982 meta-analysis by Cohen, Kulik and Kulik that found tutoring effects averaged 0.84 SD on narrow tests written by
        the researchers, but only 0.27 SD on broader standardized tests.
      </p>
      <p>
        <strong>Half the effect was mastery learning.</strong> The mastery-learning classes, with no tutor, gained about 1 SD on their own
        (von Hippel puts it at about 1.1). The tutoring condition included the same formative tests and correctives. So 2 sigma is the result
        of tutoring plus regular checks and corrections, not of a tutor alone.
      </p>
      <p>
        <strong>Reviews of many studies found smaller effects.</strong> Kurt VanLehn’s 2011 review in <em>Educational Psychologist</em>{" "}
        compared human tutoring, computer tutoring and no tutoring. It noted the common belief that adult human tutors produce an effect of
        about 2.0, and found d = 0.79 instead. Intelligent tutoring systems, most of which work step by step, came in at 0.76, “nearly as
        effective as human tutoring.”
        A 2024 meta-analysis of randomized preK–12 tutoring experiments by Nickow, Oreopoulos and Quan in the{" "}
        <em>American Educational Research Journal</em> found a pooled effect of 0.288 SD. Effects were largest for programs that used teachers
        or paraprofessionals as tutors, ran in earlier grades, met at least three days a week and took place during the school day.
      </p>
      <p>
        <strong>Scale adds friction.</strong> High-dosage tutoring works at scale, but at a different size. Two randomized trials of Saga
        Education’s math tutoring for secondary students in Chicago, published by Guryan and colleagues in the{" "}
        <em>American Economic Review</em> in 2023, found gains of 0.18 to 0.40 SD in math test scores that persisted into later years. The
        program used paraprofessional tutors to hold down cost.
      </p>
      <Callout title="Is 0.3 SD a disappointment?">
        <p>
          No. Nickow and colleagues describe their pooled result as “consistently substantial,” and it came from randomized experiments on
          real school programs. The error is expecting 2.0 because a 1984 paper reported it for a three-week unit test. When anyone quotes
          Bloom to sell you something, ask what kind of test their own number came from.
        </p>
      </Callout>

      <h2 id="ai-tutoring-trials">What have AI tutoring trials found so far?</h2>
      <p>
        Generative AI revived the 2 sigma question, because an AI tutor costs a fraction of a human one. Three studies published in 2025 are
        worth knowing in detail, because they point in different directions.
      </p>
      <div className="tbl">
        <table>
          <thead>
            <tr>
              <th>Study</th>
              <th>Setting</th>
              <th>What students used</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Kestin et al., <em>Scientific Reports</em> (2025)</td>
              <td>Harvard undergraduate physics course, 194 students, two lessons, each student tried both conditions</td>
              <td>A custom GPT-4 tutor with step-by-step solutions written into its prompts, used at home, vs an in-class active-learning lesson</td>
              <td>Median learning gains more than double the class; estimated effect 0.73–1.3 SD; median 49 minutes vs a 60-minute class</td>
            </tr>
            <tr>
              <td>De Simone et al., World Bank (2025)</td>
              <td>Nigeria, six-week after-school program for first-year senior secondary students, June–July 2024</td>
              <td>Microsoft Copilot (GPT-4) twice a week, with teachers guiding students and suggesting prompts</td>
              <td>0.31 SD on the overall assessment; 0.23 SD on English, the main outcome</td>
            </tr>
            <tr>
              <td>Bastani et al., <em>PNAS</em> (2025)</td>
              <td>High school in Turkey, nearly 1,000 students, four 90-minute math sessions</td>
              <td>“GPT Base” (a ChatGPT-style interface) or “GPT Tutor” (prompts built around teacher-designed hints)</td>
              <td>Practice grades up 48% (Base) and 127% (Tutor); on a later exam without AI, Base students scored 17% lower than controls; Tutor largely avoided the harm</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        The Harvard result is the one most often quoted as “AI reaches 2 sigma.” It does not quite say that. The comparison was a strong
        active-learning class, not a lecture; it covered two lessons, surface tension and fluid flow; and the post-test came right after each
        lesson. The authors also note that the tutor’s accuracy relied on pre-written answers. It is still the best evidence so far that a
        carefully structured AI tutor can teach a lesson well, in less time.
      </p>
      <p>
        The Nigeria pilot matters because it ran in real schools as an after-school program. The World Bank team equates the gain to 1.5 to 2 years of
        “business-as-usual” schooling and reports that students who attended more sessions gained more. Teachers were in the room, opening each
        session with a suggested prompt and guiding students as they worked.
      </p>
      <p>
        The Turkish study is the warning. Students with open GPT-4 access used it as a crutch: they did better while it was there and worse once
        it was gone. The version that gave teacher-designed hints instead of answers largely avoided the drop. Same model, opposite effect on
        learning. The difference was design.
      </p>

      <h2 id="what-made-tutoring-work">What made tutoring work in the first place?</h2>
      <p>
        Strip Bloom’s tutoring condition and the newer studies down to what the tutor actually did, and the same mechanisms keep appearing.
        None of them is “a smarter explanation.”
      </p>
      <ol>
        <li>
          <strong>Frequent checks.</strong> Formative tests after each unit in Bloom’s studies; in one-to-one teaching, the check can come after
          every step. The teacher finds out what the student understood instead of assuming it. Our guide to{" "}
          <a href="/blog/checking-for-understanding-techniques/">checking for understanding</a> covers twelve ways to do this online.
        </li>
        <li>
          <strong>Correctives, then a second check.</strong> Mastery learning did not just return a score. Students who had not mastered the
          unit did corrective work and then took a parallel test.
        </li>
        <li>
          <strong>Mastery before moving on.</strong> The next unit built on a foundation the student had shown, not one the schedule assumed.
        </li>
        <li>
          <strong>The student does the thinking.</strong> Time on task passed 90% under tutoring. In the Turkish study, the tutor that withheld
          answers protected learning; the one that handed them out did not.
        </li>
        <li>
          <strong>Accurate, timely feedback at the student’s pace.</strong> Kestin and colleagues list scaffolding, managing cognitive load,
          accurate feedback delivered promptly and self-pacing among the practices their AI tutor was designed around. Their students’ time on
          the lesson varied widely and did not predict their post-test score.
        </li>
      </ol>

      <h2 id="ai-tutor-design">What does this mean for how an AI tutor should be designed?</h2>
      <p>
        The evidence adds up to a fairly concrete specification. An AI tutor meant to capture some of the tutoring effect should do six
        things:
      </p>
      <Steps
        items={[
          ["Teach from a plan", "A sequence of concepts taken from the course, taught in order. A blank chat box assumes the student already knows what to ask."],
          ["Check after each concept", "A question whose answer shows understanding, scored against a rubric. “Does that make sense?” is not a check."],
          ["Hint before telling", "Give the smallest nudge that lets the student find the answer. Handing over answers is the GPT Base condition."],
          ["Hold the line on mastery, with a cap", "Don’t advance on a wrong answer, but cap the retries and flag the student for a human rather than looping forever."],
          ["Revisit what was weak", "Come back to shaky concepts before the topic closes and at the start of the next session, instead of trusting one right answer."],
          ["Stay anchored to vetted material", "The Harvard tutor’s accuracy relied on solutions written by instructors. Grounding the tutor in reviewed content does the same job."],
        ]}
      />
      <p>
        A general chatbot does the opposite by default: it waits to be asked, answers in full and never learns whether the student understood.
        That is not a flaw in the model, it is a mismatch of job. We compare the two approaches on{" "}
        <a href="/compare/tutezy-vs-chatgpt/">Tutezy vs ChatGPT</a>, and cover how grounding keeps a tutor faithful to your material in{" "}
        <a href="/blog/ai-tutor-hallucinations-grounding/">keeping an AI tutor grounded</a>.
      </p>

      <h2 id="cost-of-tutoring">Is the 2 sigma problem still a cost problem?</h2>
      <p>
        Bloom framed his problem in terms of cost, so it is worth doing the sum. In the Chicago trials reported by Guryan and colleagues,
        Saga’s program gave students 50 minutes of tutoring every school day, two students per tutor, and cost $3,200 to $4,800 per student
        per year during the study. The authors compare that with Chicago Public Schools’ spending of about $17,000 per pupil. That is cheap for
        human tutoring, and still a large new line in any school or course budget.
      </p>
      <p>
        Per-minute AI pricing changes the arithmetic. At $0.03 a learner-minute (Tutezy’s rate; other tools charge per seat or per student,
        compared in <a href="/blog/ai-tutor-cost/">how much an AI tutor costs</a>), the same 50 minutes a day is $1.50. Over an assumed
        180-day school year, that is $270 per student. The catch is that the price is the only part of the comparison anyone knows. None of the
        studies above tested an AI tutor at that dose for a full year, so nobody should promise Saga’s 0.18 to 0.40 SD from one, and the
        Turkish study shows how easily an AI tutor can produce a loss. The budget side of Bloom’s problem has become easy. The design and evidence sides have not.
      </p>

      <h2 id="read-the-evidence">How should you read an AI tutoring claim?</h2>
      <p>
        Any vendor, including us, will be tempted to quote Bloom. Before you believe a sigma number attached to a product, ask these questions:
      </p>
      <ul>
        <li>
          <strong>What was the test?</strong> A test written for the unit just taught will show a much bigger effect than a standardized test.
          Cohen, Kulik and Kulik’s 0.84 vs 0.27 is the size of that difference.
        </li>
        <li>
          <strong>How long was the study?</strong> Two lessons, three weeks and a school year are different claims.
        </li>
        <li>
          <strong>What was the comparison?</strong> Nothing, a lecture, or a strong active-learning class?
        </li>
        <li>
          <strong>Was learning measured without the AI?</strong> Scores while the tool is available can rise even when learning falls.
        </li>
        <li>
          <strong>Who were the learners, and who ran the study?</strong> Results from motivated volunteers or a vendor’s own analysis need
          independent replication.
        </li>
      </ul>
      <p>
        For a buyer, the practical version is simpler: pilot on one chapter, give a short quiz a week later without the tutor, and compare it
        with a group that studied the usual way. Our{" "}
        <a href="/blog/how-to-choose-ai-tutoring-software/">buyer’s checklist for AI tutoring software</a> walks through setting that up.
      </p>

      <WhereTutezyFits>
        <p>
          Tutezy is built around the parts of the tutoring recipe that software can carry. Each chapter of an institute’s own PDFs, slides or
          videos is compiled into a teaching plan of concepts, checks, hints and common misconceptions, which the institute reviews before
          students see it. The live lesson teaches that plan one to one on a whiteboard, asks a question after each concept, scores the voice
          or typed answer against a rubric, gives a hint before the answer, caps remediation loops, revisits weak concepts before moving on and
          recaps them at the start of the next lesson. Teachers see concept mastery per student and weak spots per batch. The mechanics are on{" "}
          <a href="/how-it-works/">how it works</a>; a lesson costs $0.03 per learner-minute (<a href="/pricing/">pricing</a>).
        </p>
        <p>
          What it is not: a measured 2 sigma. The studies above describe what well-designed tutoring can do; they are not results for Tutezy,
          and we do not quote an effect size for it. It does not replace a human tutor’s judgment or relationship with a student, which is why
          it reports to one (<a href="/compare/tutezy-vs-human-tutoring/">Tutezy vs human tutoring</a>). And it teaches only what is in your
          material.
        </p>
      </WhereTutezyFits>

      <Sources
        items={[
          ["Bloom, B. S. (1984). The 2 sigma problem: The search for methods of group instruction as effective as one-to-one tutoring. Educational Researcher, 13(6), 4–16.", "https://doi.org/10.3102/0013189X013006004"],
          ["von Hippel, P. T. (2024). Two-sigma tutoring: Separating science fiction from science fact. Education Next, 24(2).", "https://www.educationnext.org/two-sigma-tutoring-separating-science-fiction-from-science-fact/"],
          ["VanLehn, K. (2011). The relative effectiveness of human tutoring, intelligent tutoring systems, and other tutoring systems. Educational Psychologist, 46(4), 197–221.", "https://doi.org/10.1080/00461520.2011.611369"],
          ["Nickow, A., Oreopoulos, P., & Quan, V. (2024). The promise of tutoring for preK–12 learning: A systematic review and meta-analysis of the experimental evidence. American Educational Research Journal, 61(1), 74–107.", "https://doi.org/10.3102/00028312231208687"],
          ["Guryan, J., Ludwig, J., Bhatt, M. P., et al. (2023). Not too late: Improving academic outcomes among adolescents. American Economic Review, 113(3), 738–765.", "https://doi.org/10.1257/aer.20210434"],
          ["Kestin, G., Miller, K., Klales, A., Milbourne, T., & Ponti, G. (2025). AI tutoring outperforms in-class active learning: An RCT introducing a novel research-based design in an authentic educational setting. Scientific Reports, 15, 17458.", "https://www.nature.com/articles/s41598-025-97652-6"],
          ["De Simone, M., Tiberti, F., Barron Rodriguez, M., Manolio, F., Mosuro, W., & Dikoru, E. J. (2025). From chalkboards to chatbots: Evaluating the impact of generative AI on learning outcomes in Nigeria. World Bank Policy Research Working Paper 11125.", "https://documents.worldbank.org/en/publication/documents-reports/documentdetail/099548105192529324"],
          ["Bastani, H., Bastani, O., Sungu, A., Ge, H., Kabakcı, Ö., & Mariman, R. (2025). Generative AI without guardrails can harm learning: Evidence from high school mathematics. PNAS, 122, e2422633122.", "https://doi.org/10.1073/pnas.2422633122"],
        ]}
      />
    </BlogShell>
  );
}

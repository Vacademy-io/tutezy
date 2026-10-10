import { BlogShell, Callout, Sources, Steps, WhereTutezyFits, postMetadata, type FaqItem } from "@/components/BlogShell";

const SLUG = "improve-online-course-completion-rates";
export const metadata = postMetadata(SLUG);

const faq: FaqItem[] = [
  [
    "What is a good completion rate for an online course?",
    "There is no universal benchmark, because it depends on price, length and why people enrolled. For free MOOCs, Katy Jordan’s study of 221 courses found completion from 0.7% to 52.1%, with a median of 12.6%. At Harvard and MIT on edX, 46% of learners who paid for a verified certificate completed in 2017–18. Compare your course with its own previous cohorts rather than with a published average.",
  ],
  [
    "What is the average completion rate for MOOCs?",
    "Low. Reich and Ruipérez-Valiente’s 2019 analysis of Harvard and MIT courses on edX found that 3.13% of all participants completed in 2017–18. Jordan’s 2015 study of 221 MOOCs put the median at 12.6% of enrolled students. Completion is much higher among learners who pay: 46% of verified-certificate learners in the same Harvard and MIT data completed.",
  ],
  [
    "Why do students not finish online courses?",
    "The common reasons are lack of time, no one holding them accountable, long passive videos, and getting stuck on one concept with nobody to ask. Many learners also intend to finish but never turn the intention into a plan. The first two weeks matter most: in Jordan’s data, the share of active students levels out after weeks one and two.",
  ],
  [
    "How long should online course videos be?",
    "Short. In Guo, Kim and Rubin’s study of 6.9 million video sessions on edX, median engagement was at most 6 minutes regardless of video length, and students often watched less than half of videos longer than 9 minutes. They recommend segmenting videos into chunks under 6 minutes. Adding a few questions between segments also helps learners stay focused.",
  ],
  [
    "Do reminders and planning prompts improve course completion?",
    "Sometimes, modestly. Asking learners to write a plan at the start raised completion by 29% in three HarvardX courses. But when similar self-regulation prompts were tested across 247 courses with a quarter of a million students, they raised engagement in the first few weeks and not final completion. Use them, but don’t expect them to fix a course on their own.",
  ],
  [
    "What metrics should course creators track besides completion?",
    "Track activation (the share of enrollees who start lesson one within a week), unit-one completion, week-two retention, and the lesson where each learner last stopped. These move within days, show where learners stall, and tell you what to fix long before the final completion rate changes.",
  ],
];

export default function Page() {
  return (
    <BlogShell
      slug={SLUG}
      lede="Online course completion rates are low by default: across Harvard and MIT courses on edX, 3.13% of all participants completed in 2017–18, and even among learners who paid for a certificate only 46% finished. To improve completion, make the course easier to keep doing (short units, a plan at the start, deadlines or a cohort), make every unit end with a question, and make sure a stuck learner can get unstuck the same day. Measure activation, unit-one completion and week-two retention, because those move long before the final completion rate does."
      takeaways={[
        <>
          <strong>Low completion is normal.</strong> 3.13% of all edX participants at Harvard and MIT in 2017–18; a median of 12.6% across 221 MOOCs; 46% even for paying learners.
        </>,
        <>
          <strong>The first two weeks decide most of it.</strong> In Jordan’s data, the share of active learners levels out after weeks one and two. Fix onboarding before the finale.
        </>,
        <>
          <strong>Short units with questions.</strong> Median video engagement was at most 6 minutes, and quizzes between lecture segments cut mind-wandering from 41% to 19% in one experiment.
        </>,
        <>
          <strong>Nudges help less at scale.</strong> Planning prompts raised completion 29% in three courses, but across 247 courses similar prompts lifted early engagement, not completion.
        </>,
        <>
          <strong>Being stuck is the quiet exit.</strong> A learner who hits a concept they can’t get past, with nobody to ask, rarely emails you. They just stop.
        </>,
      ]}
      toc={[
        ["what-completion-rates-look-like", "What completion rates look like"],
        ["why-learners-drop", "Why learners drop out"],
        ["metrics-to-track", "The metrics to track"],
        ["diagnose-stall-points", "How to diagnose a stall point"],
        ["fixes-with-evidence", "Fixes the research supports"],
        ["deadlines-cohorts-reminders", "Deadlines, cohorts and reminders"],
        ["unsticking-learners", "Where live help fits"],
        ["thirty-day-plan", "A 30-day plan"],
      ]}
      faq={faq}
      demoTopic="spanish-basics"
    >
      <h2 id="what-completion-rates-look-like">What do online course completion rates actually look like?</h2>
      <p>
        Most people who enroll in an online course don’t finish it, and the best public data shows the rate hasn’t improved with time. The best
        public data comes from MOOCs, because researchers could see every learner. A 2019 analysis in <em>Science</em> by Justin Reich and
        José Ruipérez-Valiente covered every Harvard and MIT course on edX from 2012 to 2018: 5.63 million learners in 12.67 million course
        registrations. The results:
      </p>
      <div className="tbl">
        <table>
          <thead>
            <tr>
              <th>Group</th>
              <th>Completion</th>
              <th>Source</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>All participants, Harvard and MIT edX courses, 2017–18</td>
              <td>3.13%, down from nearly 6% in 2014–15</td>
              <td>Reich &amp; Ruipérez-Valiente (2019)</td>
            </tr>
            <tr>
              <td>Learners who paid for a verified certificate, 2017–18</td>
              <td>46%, down from 56% in 2016–17</td>
              <td>Reich &amp; Ruipérez-Valiente (2019)</td>
            </tr>
            <tr>
              <td>221 MOOCs, share of enrolled students completing</td>
              <td>Median 12.6% (range 0.7% to 52.1%)</td>
              <td>Jordan (2015)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Two lessons for a paid course creator. First, paying helps but doesn’t solve it: more than half of paying edX learners still didn’t
        finish. Second, published figures are only a rough frame. Katy Jordan’s study found completion fell as courses got longer, so a
        12-week course and a 3-week one aren’t comparable. You will see much higher completion figures quoted for cohort-based or premium
        courses, usually self-reported by the vendor; treat those as marketing until you can see how “completion” and “enrolled” were
        defined. The benchmark that matters is your own last cohort.
      </p>

      <h2 id="why-learners-drop">Why do learners drop out of online courses?</h2>
      <p>
        “No time” is the easy explanation. Look at where learners actually stop, though, and six causes come up again and again:
      </p>
      <ul>
        <li>
          <strong>No plan.</strong> Learners intend to finish, then never decide when. Yeomans and Reich call this the intention–action gap:
          among MOOC learners who intend to complete, the majority don’t.
        </li>
        <li>
          <strong>No accountability.</strong> Nobody notices if they miss a week, so missing a week costs nothing, and then it’s two.
        </li>
        <li>
          <strong>Passive, long video.</strong> Watching feels like progress but asks nothing of the learner, and long videos lose people
          partway through.
        </li>
        <li>
          <strong>Stuck on one concept.</strong> In a Spanish course, this is often the module on <em>ser</em> vs <em>estar</em>. The learner
          can’t get past it, the forum answer comes two days later, and by then they have stopped opening the app.
        </li>
        <li>
          <strong>Modules too long to finish in one sitting.</strong> A 45-minute module started at 10 pm is a module half-finished, and
          half-finished modules are where streaks end.
        </li>
        <li>
          <strong>Heavy work before the habit forms.</strong> Jordan found that courses graded only automatically had higher completion
          rates. One reading: a big peer-reviewed project in week one asks for commitment before the learner has any.
        </li>
      </ul>
      <p>
        Only the first two are about motivation. The other four are design problems you can fix this month.
      </p>

      <h2 id="metrics-to-track">Which metrics should you track to improve course completion?</h2>
      <p>
        Final completion is a lagging number: by the time it moves, the cohort is over. Track the leading ones instead. Jordan’s analysis
        of MOOC activity found the first and second weeks are critical, after which the share of active students levels out. So most of what
        you can change happens early.
      </p>
      <ul>
        <li>
          <strong>Activation:</strong> enrollees who start lesson one within 7 days ÷ all enrollees.
        </li>
        <li>
          <strong>Unit-one completion:</strong> learners who finish the first unit ÷ all enrollees.
        </li>
        <li>
          <strong>Week-two retention:</strong> learners active in days 8–14 ÷ learners who activated.
        </li>
        <li>
          <strong>Stall points:</strong> for each lesson, the share of learners who reach it but never finish it. The biggest numbers are your
          to-do list.
        </li>
        <li>
          <strong>Time to an answer:</strong> how long a question posted by a learner waits for a reply.
        </li>
      </ul>
      <p>Here is what the funnel looks like for an illustrative 8-module Spanish course (made-up numbers, not a benchmark):</p>
      <div className="tbl">
        <table>
          <thead>
            <tr>
              <th>Stage</th>
              <th>Learners</th>
              <th>Share of enrolled</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Enrolled</td><td>1,000</td><td>100%</td></tr>
            <tr><td>Started lesson 1 within 7 days (activation)</td><td>640</td><td>64%</td></tr>
            <tr><td>Finished unit 1</td><td>450</td><td>45%</td></tr>
            <tr><td>Active in week 2</td><td>330</td><td>33%</td></tr>
            <tr><td>Reached module 4 (<em>ser</em> vs <em>estar</em>)</td><td>240</td><td>24%</td></tr>
            <tr><td>Finished module 4</td><td>150</td><td>15%</td></tr>
            <tr><td>Completed the course</td><td>120</td><td>12%</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        Read it from the top. 360 people never started, which is an onboarding problem. Week-two retention is 330 ÷ 640, about 52%. Module 4
        loses 90 of the 240 who reach it, a stall point of 37.5%, far worse than the modules after it. That is where a better explanation,
        practice questions or live help would pay off first.
      </p>

      <h2 id="diagnose-stall-points">How do you diagnose a stall point?</h2>
      <p>
        A drop in the funnel tells you where learners leave, not why. The pattern around it usually does. Match what you see to the likely
        cause before you change anything:
      </p>
      <div className="tbl">
        <table>
          <thead>
            <tr>
              <th>What you see</th>
              <th>Likely cause</th>
              <th>First fix</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Many enroll, few start lesson 1</td><td>Onboarding friction, no plan</td><td>A short first lesson with a quick win, a planning prompt, a resume email on day 2</td></tr>
            <tr><td>Viewers leave partway through the same long video</td><td>Too long or too dense</td><td>Split it into segments under about 6 minutes with questions between them</td></tr>
            <tr><td>A drop at one module, with more questions or rewatches there</td><td>A hard concept, explained once</td><td>A second explanation, worked examples, practice questions and a way to ask</td></tr>
            <tr><td>Steady decline week after week</td><td>No accountability</td><td>Cohort start dates, soft deadlines, weekly progress notes</td></tr>
            <tr><td>A drop at the first big assignment</td><td>Too heavy or unclear</td><td>A smaller first task with a model answer, and practice before the graded piece</td></tr>
            <tr><td>Learners finish but fail the final quiz</td><td>Watching without checking</td><td>Questions in every unit, and a revisit of weak topics before the final</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        In the Spanish example, module 4 fits the third row. <em>Ser</em> vs <em>estar</em> is one idea with a lot of exceptions, and one
        video rarely lands it for everyone. A short contrast table, ten quick “<em>ser</em> or <em>estar</em>?” questions with instant
        feedback, and somewhere to ask when a sentence doesn’t seem to fit the rule will do more than re-recording the video in better
        lighting.
      </p>

      <h2 id="fixes-with-evidence">Which fixes does the research support?</h2>
      <p>
        <strong>Cut videos into short segments.</strong> Philip Guo, Juho Kim and Rob Rubin analyzed 6.9 million video sessions across four
        edX courses in 2014. Median engagement was at most 6 minutes regardless of how long the video was, and students often made it less
        than halfway through videos longer than 9 minutes. The share of sessions followed by an attempt at the next problem fell from 56% for
        the shortest videos to 31% for the longest. Their recommendation: plan lessons in chunks under 6 minutes.
      </p>
      <p>
        <strong>Put a question after every segment.</strong> In a 2013 <em>PNAS</em> study by Szpunar, Khan and Schacter, Harvard students
        watched a 21-minute statistics lecture split into four segments. Those quizzed after each segment reported mind-wandering on 19% of
        probes, against 39% for students shown the same questions with the answers filled in and 41% for students who did
        arithmetic instead. On the final test they scored 90%, against 76% and 68%. It was a lab study, but the mechanism is simple: a learner who knows a question is coming pays attention. Our
        guide to <a href="/blog/checking-for-understanding-techniques/">checking for understanding</a> has twelve question formats to use.
      </p>
      <p>
        <strong>Ask for a plan on day one.</strong> In three HarvardX courses, Michael Yeomans and Justin Reich added open-ended planning
        prompts at the start of the course. Completion rose 29% and certificate purchases 40%, most for students also enrolled in traditional
        schools. One odd result is worth knowing: learners whose plans focused on specific times were less likely to finish. Ask about
        obstacles and strategies, not just a calendar slot.
      </p>
      <Callout title="The honest caveat on nudges" tone="warn">
        <p>
          When Kizilcec, Reich, Yeomans and colleagues tested established interventions across 247 courses from Harvard, MIT and Stanford,
          with about a quarter of a million students over 2.5 years, the self-regulation prompts raised engagement in the first few weeks but
          not final completion. The authors conclude that scaling interventions like these across many contexts can cut their average effect
          by an order of magnitude. Nudges are cheap and worth adding. They are not a strategy on their own.
        </p>
      </Callout>

      <h2 id="deadlines-cohorts-reminders">Do deadlines, cohorts and reminders help?</h2>
      <p>
        These are the fixes creators reach for first, and the evidence for them in self-paced courses is thinner than the research above.
        Treat them as good practice to test on your own cohorts, not as proven effects.
      </p>
      <ul>
        <li>
          <strong>Cohort start dates.</strong> A fixed start date turns “someday” into a date, and a group moving together gives learners
          someone to notice their absence. The cost is flexibility: people who enroll mid-cycle wait.
        </li>
        <li>
          <strong>Soft deadlines per module.</strong> A suggested finish date per module with a weekly “you’re on track” or “you’re one module
          behind” message. Keep it forgiving: a missed hard deadline hands the learner a reason to stop.
        </li>
        <li>
          <strong>Reminders that resume, not nag.</strong> “You stopped 3 minutes into lesson 5: <em>ser</em> for descriptions. Pick up where
          you left off” beats “We miss you.” Send it from what the learner did last, not on a fixed schedule.
        </li>
        <li>
          <strong>A small number that belongs to the learner.</strong> Lessons done this week, or a streak of study days. Keep it tied to
          learning, not to logins.
        </li>
      </ul>

      <h2 id="unsticking-learners">Where does live help fit?</h2>
      <p>
        The stall point in the funnel above is rarely a motivation problem. It is a learner who watched the <em>ser</em> vs <em>estar</em>{" "}
        video twice, still can’t tell which to use, and has nobody to ask at the moment they are stuck. There are four ways to fix that, and
        each has a trade-off:
      </p>
      <ul>
        <li>
          <strong>Live office hours with the creator.</strong> The best help there is, and the one that does not scale: your evenings go first.
        </li>
        <li>
          <strong>A community forum or chat group.</strong> Cheap, and good for motivation, but answers arrive hours or days later, if at all.
        </li>
        <li>
          <strong>Teaching assistants.</strong> Fast and personal, at a cost per hour that grows with enrollment.
        </li>
        <li>
          <strong>An AI tutor on the hard chapters.</strong> Available at 11 pm and priced per use. It helps only if it teaches from your
          course, asks the learner questions and checks the answers; a chatbot that only answers questions can end up doing the learner’s
          thinking for them.
        </li>
      </ul>
      <p>
        Size the job before you pick. In the illustrative funnel, 240 learners reach module 4. If each needs about 15 minutes of one-to-one
        help to get past it, that is 3,600 minutes, or 60 hours of a person’s time for one module in one cohort. The same minutes from an AI
        tutor priced per learner-minute cost $108 at $0.03 a minute (Tutezy’s rate). Neither number is large; the difference is that the
        person has to be available at the moment each learner gets stuck.
      </p>
      <p>
        Whatever you choose, put it where your stall points are, not everywhere. We compare the recorded-course and live-tutor models in{" "}
        <a href="/compare/tutezy-vs-recorded-courses/">Tutezy vs recorded courses</a>, and the three ways to add an AI tutor to an existing
        course in <a href="/blog/add-ai-tutor-to-online-course/">how to add an AI tutor to your online course</a>.
      </p>

      <h2 id="thirty-day-plan">A 30-day plan to improve online course completion</h2>
      <p>
        Thirty days is too short to see final completion change, but long enough to move activation, unit-one completion and week-two
        retention for a new cohort. The plan:
      </p>
      <Steps
        items={[
          ["Days 1–3: instrument the funnel", "Log enrolled, started lesson, finished lesson and last active for every learner. Rebuild the funnel table above for your last cohort."],
          ["Days 4–7: find the stall points", "Rank lessons by the share of learners who reach them but don’t finish. Read every question and comment posted on the top three."],
          ["Days 8–11: fix onboarding", "Make lesson 1 short with an early win. Add an open-ended planning prompt to the welcome: how will you fit this in, and what might get in the way?"],
          ["Days 12–17: split and quiz", "Cut long videos at the stall points into segments under about 6 minutes, each followed by two or three questions."],
          ["Days 18–22: put help at the stall points", "Office hours, a same-day answer target, or an AI tutor on those chapters. Measure time to an answer."],
          ["Days 23–26: add gentle accountability", "Soft module deadlines, a weekly progress note, and resume reminders that name the exact lesson."],
          ["Days 27–30: compare cohorts", "Set the new cohort’s activation, unit-one completion and week-two retention against the last cohort’s. Keep what moved; drop what didn’t."],
        ]}
      />
      <p>
        If you sell to organizations rather than individuals, the same plan applies; the reminders come from a manager instead of an app.
        For turning existing material into shorter, question-led lessons, see{" "}
        <a href="/blog/turn-pdf-slides-into-interactive-lessons/">turning PDFs, slides and videos into interactive lessons</a>.
      </p>

      <WhereTutezyFits>
        <p>
          Tutezy is aimed at the “stuck on one concept” exit. It compiles a creator’s recorded videos (transcribed), PDFs and slides into
          lessons, and adds a “learn with the teacher” button beside each chapter. The AI teacher explains on a whiteboard, asks a question
          after each concept, answers doubts from the course material, revisits weak concepts, and resumes with a recap if the learner leaves
          mid-lesson. It can speak in the creator’s cloned voice ($20 one-time). The creator sees completion and mastery per student per
          chapter, and weak concepts across the cohort, which shows which chapters need re-recording. It costs $0.03 per learner-minute, only
          while a learner is in a lesson. Details on <a href="/for/course-creators/">Tutezy for course creators</a> and{" "}
          <a href="/pricing/">pricing</a>.
        </p>
        <p>
          Where it is not the answer: it is not a plugin for Teachable, Kajabi or Thinkific. Courses run in the white-label Vacademy learner
          app on web, Android and iOS, with migration included, so switching platforms is part of the decision. It won’t fix a course
          learners don’t need, and courses that are mainly inspiration, with nothing to check, are a poor fit.
        </p>
      </WhereTutezyFits>

      <Sources
        items={[
          ["Reich, J., & Ruipérez-Valiente, J. A. (2019). The MOOC pivot. Science, 363(6423), 130–131.", "https://doi.org/10.1126/science.aav7958"],
          ["Lederman, D. (2019, January 16). Why MOOCs didn’t work, in 3 data points. Inside Higher Ed.", "https://www.insidehighered.com/digital-learning/article/2019/01/16/study-offers-data-show-moocs-didnt-achieve-their-goals"],
          ["Jordan, K. (2015). Massive open online course completion rates revisited: Assessment, length and attrition. International Review of Research in Open and Distributed Learning, 16(3).", "https://doi.org/10.19173/irrodl.v16i3.2112"],
          ["Guo, P. J., Kim, J., & Rubin, R. (2014). How video production affects student engagement: An empirical study of MOOC videos. Proceedings of the First ACM Conference on Learning @ Scale, 41–50.", "https://doi.org/10.1145/2556325.2566239"],
          ["Szpunar, K. K., Khan, N. Y., & Schacter, D. L. (2013). Interpolated memory tests reduce mind wandering and improve learning of online lectures. PNAS, 110(16), 6313–6317.", "https://doi.org/10.1073/pnas.1221764110"],
          ["Yeomans, M., & Reich, J. (2017). Planning prompts increase and forecast course completion in massive open online courses. Proceedings of LAK ’17, 464–473.", "https://doi.org/10.1145/3027385.3027416"],
          ["Kizilcec, R. F., Reich, J., Yeomans, M., et al. (2020). Scaling up behavioral science interventions in online education. PNAS, 117(26), 14900–14905.", "https://doi.org/10.1073/pnas.1921417117"],
        ]}
      />
    </BlogShell>
  );
}

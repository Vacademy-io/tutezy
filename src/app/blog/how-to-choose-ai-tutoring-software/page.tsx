import { BlogShell, Callout, Sources, Steps, WhereTutezyFits, postMetadata, type FaqItem } from "@/components/BlogShell";

const SLUG = "how-to-choose-ai-tutoring-software";
export const metadata = postMetadata(SLUG);

const faq: FaqItem[] = [
  [
    "What is AI tutoring software?",
    "AI tutoring software uses a language model, and often speech recognition and a synthetic voice, to teach a student one to one: it explains, asks a question, checks the answer and responds to mistakes. Products differ mainly in what they teach from (their own curriculum, general model knowledge or your material), whether they follow a lesson plan, and what they report back to the organization.",
  ],
  [
    "How do I evaluate an AI tutor for my school or training company?",
    "Send every vendor the same written questions about content accuracy, teaching method, student experience, control and reporting, data handling and total cost. Score the answers, then watch each shortlisted vendor convert one of your own hardest chapters in a live demo. Finish with a two-week pilot with real students and success metrics you set before it starts.",
  ],
  [
    "Is AI tutoring software FERPA compliant?",
    "FERPA compliance is not a certificate a product holds; it depends on how a school or district shares education records with the vendor and on the contract. Under the school official exception, the vendor must perform a function the school would otherwise use employees for, be under the school’s direct control for the use and maintenance of the records, and use them only for authorized purposes. This is not legal advice; involve your counsel or privacy officer.",
  ],
  [
    "Does COPPA apply to AI tutors used by children?",
    "COPPA applies to online services directed to children under 13, or that knowingly collect personal information from them. FTC guidance says a school can consent on behalf of parents only when the data is used for a school-authorized educational purpose and no other commercial purpose. The FTC’s 2025 amendments to the COPPA Rule had a compliance date of April 22, 2026, so ask vendors how they changed their practices.",
  ],
  [
    "How long should an AI tutoring pilot run?",
    "Two weeks is enough to test accuracy, participation, the quality of reports and real cost, but it is too short to prove learning gains. The National Student Support Accelerator describes high-impact tutoring as sessions three or more times a week for ten or more weeks, so plan a longer measured rollout after a pilot passes.",
  ],
  [
    "What is the difference between an AI tutor and an AI chatbot?",
    "A chatbot waits for a question and answers it. A tutor follows a plan: it explains a concept, asks the student a question, grades the answer, gives a hint when the student is wrong and comes back to weak concepts later. For an organization, the tutor should also report what each student understood.",
  ],
];

export default function Page() {
  return (
    <BlogShell
      slug={SLUG}
      lede="The right AI tutoring software teaches your own material accurately, checks each student’s understanding instead of only answering questions, and reports what every student learned, at a cost you can predict from your real usage. To choose one, ask every vendor the same 12 questions, score the answers against the red flags below, and run a two-week pilot with real students before you sign."
      takeaways={[
        <>
          <strong>Accuracy starts with the source.</strong> Ask what the tutor teaches from, whether you can review a lesson before students see it, and what it does off-syllabus.
        </>,
        <>
          <strong>Answering is not teaching.</strong> Look for a lesson plan, a check after each concept, hints before answers, and memory of each student.
        </>,
        <>
          <strong>The report is the product for you.</strong> If you cannot see who understood what, you cannot act on it before the next class.
        </>,
        <>
          <strong>Ask the data questions before the demo.</strong> Ownership, model training, deletion, and for US schools, FERPA and COPPA questions about minors.
        </>,
        <>
          <strong>Price your real usage, not the list price.</strong> Model one term’s minutes or seats, then add setup, extras, minimums and platform fees.
        </>,
      ]}
      toc={[
        ["what-to-look-for", "What AI tutoring software should do"],
        ["content-and-accuracy", "Content and accuracy (questions 1–3)"],
        ["teaching", "Teaching (questions 4–6)"],
        ["student-experience", "Student experience (questions 7–8)"],
        ["control-and-reporting", "Control and reporting (questions 9–10)"],
        ["data-and-safety", "Data and safety (question 11)"],
        ["pricing-and-cost", "Pricing and total cost (question 12)"],
        ["scorecard", "The scorecard"],
        ["pilot-plan", "A two-week pilot plan"],
      ]}
      faq={faq}
      demoTopic="newton-second-law"
    >
      <h2 id="what-to-look-for">What should AI tutoring software actually do?</h2>
      <p>
        AI tutoring software uses a language model, usually with speech in and out, to teach a student one to one. For an organization
        (a school, a test-prep company, a course business, an L&amp;D team) it has three jobs: teach <em>your</em> material without making
        things up, actually teach rather than wait for questions, and tell you what each student understood.
      </p>
      <p>
        Most demos show a good conversation. Few show the other two jobs, and that is where products differ. The 12 questions below are grouped
        into six areas. Send them to every vendor in writing before the demo, then ask each one to show the answer live on a chapter you pick.
        Score each answer 0 (red flag), 1 (partial) or 2 (clear yes, shown live). A red flag on accuracy or data should rule a vendor out
        whatever the total.
      </p>

      <h2 id="content-and-accuracy">Content and accuracy: is it grounded in your material?</h2>
      <p>
        <strong>1. What exactly does the tutor teach from?</strong> There are three possible answers: the vendor’s own curriculum, the
        model’s general knowledge (sometimes plus the web), or the material you upload. If you teach your own syllabus, with your notation,
        your worked-example style and your exam format, only the third is a fit. Ask which formats it ingests (scanned PDFs, recorded video,
        slide decks, question banks) and what happens to equations and diagrams. Then hand over your messiest chapter, not the vendor’s sample.
      </p>
      <p>
        <strong>2. Can a teacher review a lesson before a student sees it?</strong> If every session is generated fresh, there is nothing to
        review in advance; you can only audit transcripts after students have seen the mistakes. Ask whether there is a preview, whether a
        teacher can correct it, and whether the correction then holds for every student. Ask too what happens to reviewed lessons when the
        vendor switches to a newer model.
      </p>
      <p>
        <strong>3. What happens when a student goes off-syllabus, or asks for something that is not in the material?</strong> A grounded tutor
        says the material does not cover it, answers from what is there, and returns to the lesson. Ask whether it browses the web and
        whether you can turn that off. Our post on <a href="/blog/ai-tutor-hallucinations-grounding/">keeping an AI tutor grounded</a> has a
        10-minute probe test you can run during the demo.
      </p>

      <h2 id="teaching">Teaching: does it teach, or only answer?</h2>
      <p>
        <strong>4. Does it teach a planned lesson, or only respond to questions?</strong> A chatbot serves the students who already know what
        to ask. A tutor opens the chapter, explains a concept, asks a question and moves on only when the student is ready. Ask the vendor to
        start a lesson and stay silent for the first two minutes. See what the software does on its own.
      </p>
      <p>
        <strong>5. How does it check understanding, and what happens after a wrong answer?</strong> Look for a question after each concept,
        graded against an expected answer or rubric, a hint before the answer, a limit on how many times it loops, and a later revisit of
        concepts the student missed. This matters more than it sounds. In a field experiment with nearly 1,000 high-school math students in
        Turkey, Hamsa Bastani and colleagues at the University of Pennsylvania found that a GPT-4 chat interface raised scores on practice problems
        by 48%, yet students who had used it scored 17% lower than a control group once access was removed. A version prompted to give hints
        instead of answers largely removed that harm (the study was published in <em>PNAS</em> in 2025). Our list of{" "}
        <a href="/blog/checking-for-understanding-techniques/">techniques for checking understanding online</a> shows what good checks
        look like.
      </p>
      <p>
        <strong>6. Does it remember each student?</strong> Across sessions, the tutor should keep where the student stopped, which concepts
        they have mastered and which mistakes they made, then resume with a short recap. “Each chat starts fresh” means every session repeats
        the diagnosis and nothing builds up for the student or for you.
      </p>

      <h2 id="student-experience">Student experience: voice, board, languages and devices</h2>
      <p>
        <strong>7. How does the student actually interact with it?</strong> A text chat is the minimum. Stronger products teach aloud, let
        the student answer by voice or by typing, and build a board step by step so a worked example unfolds instead of arriving as a wall of
        text. Check that formulas render properly, that diagrams are drawn rather than described, and that the student can slow the pace.
        Test on a mid-range phone with a real student, because long pauses make a spoken lesson hard to follow.
      </p>
      <p>
        <strong>8. Which languages, devices and accessibility needs does it support?</strong> Ask for a live demo in every language you
        need rather than a list of supported languages. Ask where students use it: inside your existing platform, in the vendor’s app, or
        through a separate login. For accessibility, ask for a conformance report against the Web Content Accessibility Guidelines and test
        with a keyboard and a screen reader. US public schools and colleges have a deadline: the Department of Justice’s ADA Title II rule
        requires state and local government web content and mobile apps to meet WCAG 2.1 Level AA, and an April 2026 interim final rule moved
        compliance to April 26, 2027 for entities serving 50,000 people or more and April 26, 2028 for smaller ones. Check with your counsel
        on how it applies to you.
      </p>

      <h2 id="control-and-reporting">Control and reporting: what can you set, and what comes back?</h2>
      <p>
        <strong>9. What can the organization control?</strong> Useful settings include tone or strictness, pace, the teacher persona and
        voice, which courses are switched on, session length, and whether the tutor may hand over full solutions. You should also be able to
        read the full transcript of any session. If something goes wrong with a student, “we can’t see the conversation” is not an answer
        you can give a parent or a client.
      </p>
      <p>
        <strong>10. What does it report, and can you export it?</strong> The useful report is learning data: mastery per student per
        concept, the weak concepts across a class or batch, minutes taught and a session summary a teacher can read in a minute. Engagement
        dashboards (logins, messages sent) do not tell you who needs help. Ask for a CSV or API export so the data outlives the contract.
      </p>

      <h2 id="data-and-safety">Data and safety: who owns it, who trains on it, and what about minors?</h2>
      <p>
        <strong>11. Who owns your content and your students’ data, is any of it used to train models, and how are minors protected?</strong>{" "}
        Get written answers to each part. Who owns uploaded content and the lessons generated from it? Are content or transcripts used to
        train or fine-tune any model, the vendor’s or a third-party provider’s? Which AI providers receive data, and under what terms? How long
        is data kept, and how do you delete a learner or the whole account? Who inside the vendor can read transcripts? Which security
        certifications does the vendor hold (SOC 2, ISO 27001), and if none, what practices will it document for you? If the product clones a
        teacher’s voice or face, how is consent recorded and how is it revoked?
      </p>
      <Callout title="Questions to ask about minors’ data (US)" tone="warn">
        <p>This is not legal advice. Use these to start the conversation with the vendor and your own counsel.</p>
        <p>
          <strong>FERPA.</strong> Will the vendor sign an agreement under the school official exception? The Department of Education’s
          Privacy Technical Assistance Center lists the conditions: the vendor performs a function the school would otherwise use employees
          for, is under the school’s direct control for the use and maintenance of education records, and uses them only for authorized
          purposes without re-disclosing them. Ask whether the terms of service can change without notice; PTAC notes that unilateral changes make direct control hard to
          demonstrate.
        </p>
        <p>
          <strong>COPPA.</strong> Is the product used by children under 13? FTC guidance says a school can consent on behalf of parents only
          when the data is used for a school-authorized educational purpose and no other commercial purpose. The FTC’s 2025 amendments to the
          COPPA Rule, with a compliance date of April 22, 2026, added separate parental consent for disclosures to third parties, a written
          data retention policy and a written information security program. Ask to see the vendor’s retention policy.
        </p>
      </Callout>

      <h2 id="pricing-and-cost">Pricing and total cost: what will a real term cost?</h2>
      <p>
        <strong>12. What will one real term cost, all in?</strong> AI tutors are sold per seat (per enrolled student per month or year),
        per learner-minute of use, or as a platform fee plus usage. Give each vendor the same scenario, for example 200 students using it
        30 minutes a week for 12 weeks, and ask for the full bill. Then ask about minimum commitments, annual prepayment, setup or content
        fees, extras (avatars, custom voices, extra languages), overages, platform fees if the tutor only runs inside the vendor’s app, and
        what it costs to export your data when you leave. Seat pricing charges for students who never log in; usage pricing charges only for
        use but needs a cap. Our <a href="/blog/ai-tutor-cost/">AI tutor cost guide</a> works through the arithmetic and a break-even
        calculation.
      </p>

      <h2 id="scorecard">The AI tutoring software scorecard</h2>
      <p>Copy this into a spreadsheet, one column per vendor. Score 0, 1 or 2 per row, and treat any red flag in rows 1–3 or 11 as a stop.</p>
      <div className="tbl">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Question</th>
              <th>Why it matters</th>
              <th>Red-flag answer</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>What does it teach from?</td>
              <td>Your syllabus, notation and method must survive</td>
              <td>“It already knows everything” or “it searches the web”</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Can we review a lesson first?</td>
              <td>Errors are cheapest to fix before a student sees them</td>
              <td>“Every session is generated fresh, so there’s nothing to review”</td>
            </tr>
            <tr>
              <td>3</td>
              <td>What happens off-syllabus?</td>
              <td>An answer not drawn from your material is one nobody checked</td>
              <td>“It will answer anything a student asks”</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Does it teach a planned lesson?</td>
              <td>A tutor that waits helps only the students who ask</td>
              <td>“Students just ask it what they need”</td>
            </tr>
            <tr>
              <td>5</td>
              <td>How does it check and remediate?</td>
              <td>Answer-giving can raise practice scores and lower test scores</td>
              <td>“It explains the correct answer right away”</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Does it remember each student?</td>
              <td>Revisits and recaps need memory</td>
              <td>“Each conversation starts fresh”</td>
            </tr>
            <tr>
              <td>7</td>
              <td>How does the student interact?</td>
              <td>Voice, a board and diagrams teach; text walls don’t</td>
              <td>A chat window only, with long pauses on a phone</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Languages, devices, accessibility?</td>
              <td>Every student has to be able to use it</td>
              <td>A long language list but no live demo, and no accessibility report</td>
            </tr>
            <tr>
              <td>9</td>
              <td>What can we control and read?</td>
              <td>You are accountable for what was said</td>
              <td>“Transcripts aren’t available to customers”</td>
            </tr>
            <tr>
              <td>10</td>
              <td>What does it report and export?</td>
              <td>Reports drive the next human lesson</td>
              <td>Logins and message counts only; no export</td>
            </tr>
            <tr>
              <td>11</td>
              <td>Who owns and trains on the data?</td>
              <td>Your content and minors’ data carry legal duties</td>
              <td>“We may use data to improve our services,” with no opt-out or deletion path</td>
            </tr>
            <tr>
              <td>12</td>
              <td>What does a real term cost?</td>
              <td>List prices hide minimums and extras</td>
              <td>An annual commitment for every enrolled student before any pilot</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="pilot-plan">How to run a two-week AI tutor pilot</h2>
      <p>
        A demo shows the vendor’s best case. A pilot shows yours. Two weeks is enough to test accuracy, participation, report quality and real
        cost. It is not enough to prove learning gains: the National Student Support Accelerator at Stanford describes high-impact tutoring
        as sessions three or more times a week for ten or more weeks. Treat the pilot as a gate to a longer, measured rollout.
      </p>
      <Steps
        items={[
          [
            "Days 1–2: pick one chapter and one cohort",
            <>Choose a chapter students find hard, 20–50 students, and one teacher who will review the lessons and read the reports.</>,
          ],
          [
            "Days 2–3: review before launch",
            <>The teacher reviews every generated lesson and logs each error found. That count is your accuracy baseline.</>,
          ],
          [
            "Day 3: run the probe test",
            <>Ask off-syllabus questions, give a confident wrong answer, push back on a correct one, and ask for the answer outright. Record what happens.</>,
          ],
          [
            "Days 4–12: schedule the sessions",
            <>Three sessions a week of 20–30 minutes, on the timetable, not “optional”. Give students a pre-quiz of 10 questions on the chapter.</>,
          ],
          [
            "Day 8: read the reports",
            <>Does the weak-concept list match what the teacher sees in class? Read five transcripts in full, including one from a struggling student.</>,
          ],
          [
            "Days 13–14: decide on evidence",
            <>Run the post-quiz, total the cost, survey students and the teacher, and compare everything with the targets you set on day 1.</>,
          ],
        ]}
      />
      <Callout title="Success metrics to set before day 1" tone="tip">
        <p>
          <strong>Accuracy:</strong> no uncorrected factual errors in reviewed lessons, and none found in the transcripts you read.
          <br />
          <strong>Participation:</strong> the share of invited students who complete at least four sessions (set your own target).
          <br />
          <strong>Understanding:</strong> pre-quiz to post-quiz change, ideally against a comparable group without the tutor.
          <br />
          <strong>Teacher trust:</strong> did the reports change what the teacher did in the next class, and would they assign it again?
          <br />
          <strong>Cost:</strong> actual cost per student-hour against the quote.
        </p>
      </Callout>

      <WhereTutezyFits>
        <p>
          Tutezy was built around questions 1–6. It compiles your PDFs (scanned ones included), recorded videos, slide decks and question banks
          into a teaching plan that a teacher can preview board by board and recompile. The live model does not author boards or browse the
          web; it grades answers against a rubric, gives hints, answers doubts about the material and adapts pace. Remediation loops are
          capped, weak concepts are revisited, and each student’s mastery per concept, the weak spots per batch and CSV exports come back to
          you. Pricing is $0.03 per learner-minute with no seats or minimums. See <a href="/what-is-tutezy/">what Tutezy is</a>.
        </p>
        <p>
          It will fail some rows for some buyers. Lessons are taught in English and Hindi only. Students use it inside the Vacademy learner app
          on web, Android and iOS, not as a plugin inside another LMS. There is no SOC 2 yet; the <a href="/security/">security page</a> says
          what is in place. The fair test is a 20-minute call where we convert one of your chapters live, and the{" "}
          <a href="/compare/">comparisons</a> say where alternatives win.
        </p>
      </WhereTutezyFits>

      <Sources
        items={[
          [
            "Privacy Technical Assistance Center, U.S. Department of Education (2015). Responsibilities of Third-Party Service Providers under FERPA (PTAC-FAQ-5).",
            "https://studentprivacy.ed.gov/resources/responsibilities-third-party-service-providers-under-ferpa",
          ],
          [
            "Federal Trade Commission (2025, January 16). FTC finalizes changes to children’s privacy rule limiting companies’ ability to monetize kids’ data.",
            "https://www.ftc.gov/news-events/news/press-releases/2025/01/ftc-finalizes-changes-childrens-privacy-rule-limiting-companies-ability-monetize-kids-data",
          ],
          [
            "Federal Trade Commission (2020, April 9). COPPA guidance for ed tech companies and schools during the coronavirus.",
            "https://www.ftc.gov/business-guidance/blog/2020/04/coppa-guidance-ed-tech-companies-schools-during-coronavirus",
          ],
          [
            "Hunton Andrews Kurth (2025). FTC publishes final COPPA Rule amendments (publication, effective and compliance dates; retention and security program requirements).",
            "https://www.hunton.com/privacy-and-information-security-law/ftc-publishes-final-coppa-rule-amendments",
          ],
          [
            "U.S. Department of Justice, ADA.gov. State and local governments: first steps toward complying with the ADA Title II web and mobile application accessibility rule.",
            "https://www.ada.gov/resources/web-rule-first-steps/",
          ],
          [
            "Bastani, H., Bastani, O., Sungu, A., Ge, H., Kabakcı, Ö., & Mariman, R. (2025). Generative AI without guardrails can harm learning: Evidence from high school mathematics. PNAS, 122(26), e2422633122.",
            "https://doi.org/10.1073/pnas.2422633122",
          ],
          [
            "National Student Support Accelerator, Stanford University. What is high-impact tutoring?",
            "https://nssa.stanford.edu/about/high-impact-tutoring",
          ],
        ]}
      />
    </BlogShell>
  );
}

import { BlogShell, Callout, Sources, Steps, WhereTutezyFits, postMetadata, type FaqItem } from "@/components/BlogShell";

const SLUG = "add-ai-tutor-to-online-course";
export const metadata = postMetadata(SLUG);

const faq: FaqItem[] = [
  [
    "How do I add an AI tutor to my online course?",
    "You have three routes: turn on the AI assistant your course platform offers (if your plan includes one), build a custom assistant on your material with a general AI product, or use a dedicated teaching tutor that turns each chapter into a live lesson. Start with the module where most students drop off, pilot with about 20 students, and compare completion and understanding with the previous cohort before rolling it out.",
  ],
  [
    "Can I make a custom GPT for my course and share it with students?",
    "As of September 2026, OpenAI’s help center says personal ChatGPT accounts (Free, Go, Plus and Pro) can no longer create or publish new GPTs, and OpenAI plans to retire custom GPTs in favor of plugins. Students also have to sign in to ChatGPT to chat with a GPT, and GPT builders cannot view those conversations, so you get no record of what students asked or understood.",
  ],
  [
    "Do Teachable, Thinkific or Kajabi have an AI tutor for students?",
    "As of September 2026, Thinkific offers Thinker, an AI teaching assistant in the course player, on its Plus plans, and Kajabi offers a Teaching Assistant that answers member questions from lessons, transcripts, community posts and downloads. Teachable’s AI Hub lists creator tools such as a course starter, a quiz generator and transcription. Check each vendor’s current pages, because these features change often.",
  ],
  [
    "What is the difference between an AI course assistant and an AI tutor?",
    "An AI course assistant answers the questions a student thinks to ask, usually in a chat box beside the lesson. A teaching tutor runs the lesson itself: it explains a concept, asks a question, grades the answer, gives a hint when the student is wrong and comes back to weak concepts later. A tutor can also report what each student understood, not just what they asked.",
  ],
  [
    "How much does it cost to add an AI tutor to a course?",
    "Platform assistants are usually included in a plan tier or sold as an add-on with a monthly message or credit allowance. Per-minute tutors charge for the time students actually spend in lessons; at $0.03 a minute, a student who uses 160 minutes across a course costs $4.80. Model your real usage from a pilot before you set the price of a premium tier.",
  ],
  [
    "Should I tell students the tutor is an AI?",
    "Yes. Name it as an AI mentor on the sales page and inside the course, and do not present it as you answering personally. Kajabi, for example, says its agents speak about the creator in the third person and never claim to be the creator. Clear labeling avoids refund disputes and builds trust when the AI is useful.",
  ],
];

export default function Page() {
  return (
    <BlogShell
      slug={SLUG}
      lede="To add an AI tutor to an online course, you can switch on the AI assistant your course platform already offers, build a custom assistant on your material with a general AI tool, or use a dedicated teaching tutor that turns each chapter into a live lesson. Assistants answer the questions students think to ask; a teaching tutor explains, checks understanding and reports back. Pilot one module before you choose."
      takeaways={[
        <>
          <strong>Three routes, three different jobs.</strong> Platform assistants and custom GPTs answer questions. A teaching tutor runs the lesson and checks what the student understood.
        </>,
        <>
          <strong>Check your platform first.</strong> As of September 2026, Thinkific (Thinker, on Plus plans) and Kajabi (Teaching Assistant) offer student-facing assistants that answer from your lessons.
        </>,
        <>
          <strong>The custom GPT route is closing.</strong> OpenAI no longer lets personal accounts create new GPTs and plans to retire them. Shared Gems and Projects expose your files or need a paid seat for every student.
        </>,
        <>
          <strong>Reporting decides it.</strong> If you need to know who understood which concept, not just what got asked, you need per-student data.
        </>,
        <>
          <strong>Do the per-minute math.</strong> At $0.03 a minute, 160 minutes of mentoring costs $4.80 per student, which is easy to cover with a premium tier.
        </>,
      ]}
      toc={[
        ["three-ways", "Three ways to add an AI tutor"],
        ["platform-assistant", "Option 1: your platform’s assistant"],
        ["custom-assistant", "Option 2: a custom GPT, Project or Gem"],
        ["teaching-tutor", "Option 3: a dedicated teaching tutor"],
        ["comparison", "The three options compared"],
        ["which-to-choose", "Which option fits your course?"],
        ["rollout-plan", "A five-step rollout plan"],
        ["package-and-price", "How to package and price it"],
      ]}
      faq={faq}
      demoTopic="arduino-basics"
    >
      <h2 id="three-ways">Three ways to add an AI tutor to an online course</h2>
      <p>
        Most course creators who want to add an AI tutor to an online course are trying to fix one moment: the student hits a concept they
        cannot get past, has nobody to ask, and quietly stops. The fix you choose depends on what that moment needs. Sometimes it is a quick
        answer. Sometimes it is someone who explains the idea again, asks a question and waits for the answer.
      </p>
      <p>You have three realistic options:</p>
      <ul>
        <li>
          <strong>The AI assistant your course platform already offers</strong>, a chat box inside the course player that answers from your
          lessons.
        </li>
        <li>
          <strong>A custom assistant you build yourself</strong> with a general AI product (a custom GPT, a Claude Project or a Gemini Gem),
          loaded with your material.
        </li>
        <li>
          <strong>A dedicated teaching tutor</strong> that turns each chapter into a lesson it teaches one to one, with checks, hints and a
          report.
        </li>
      </ul>
      <p>
        The first two are <em>answering</em> tools: they respond to whatever the student types. The third is a <em>teaching</em> tool: it has
        a plan and asks the student questions. Both kinds are useful. They solve different problems, and they cost and report differently.
      </p>

      <h2 id="platform-assistant">Option 1: the AI assistant your course platform may already offer</h2>
      <p>
        Start here, because it needs no migration and lives where your students already are. What exists depends on the platform and the plan.
        As of September 2026, according to each vendor’s own pages:
      </p>
      <ul>
        <li>
          <strong>Thinkific</strong> offers <em>Thinker</em>, an AI teaching assistant that appears as a button in the course player and
          gives “helpful, sourced responses” drawn from your published courses, plus PDFs you upload as background reference. After a quiz, a
          Post-Quiz Review mode explains missed questions and links back to the relevant lesson. It is available on Thinkific Plus plans, with a
          monthly allotment of credits (one credit per answer). Thinkific notes that only the text of uploaded PDFs is indexed; diagrams and
          photos in them are ignored.
        </li>
        <li>
          <strong>Kajabi</strong> offers a <em>Teaching Assistant</em>, one of its Expert Agents, that answers member questions from lessons,
          video transcripts, community posts and downloads, cites the lesson and points to a timestamp. Kajabi’s help center says it
          “only answers from your published materials,” that conversations land in your inbox, and that agents are priced per agent, per month,
          with 1,000 messages a month included.
        </li>
        <li>
          <strong>Teachable</strong>’s AI Hub lists creator-side tools: a course starter, a quiz generator and video transcription with
          translations. It does not list a student-facing tutor, so check with Teachable if that has changed.
        </li>
      </ul>
      <p>
        <strong>Where this option is strong:</strong> setup is short, answers are grounded in your lessons, and nothing changes for the
        student. <strong>Where it stops:</strong> it is still a chat box. It helps the student who knows what to ask. The student who is
        confused but cannot name the confusion, often the one about to quit, gets nothing unless they start typing. Thinkific’s post-quiz
        review is a step toward teaching, but the student still has to choose to open it.
      </p>

      <h2 id="custom-assistant">Option 2: a custom GPT, Claude Project or Gemini Gem</h2>
      <p>
        For a while, the standard advice was to “make a custom GPT for your course.” That advice has aged badly. Here is what the vendors’
        own help pages say in September 2026:
      </p>
      <ul>
        <li>
          <strong>ChatGPT GPTs.</strong> OpenAI says personal ChatGPT accounts (Free, Go, Plus and Pro) “cannot create or publish new GPTs,”
          and that it is “planning to retire custom GPTs” in favor of plugins, with retirement planned for affected Enterprise workspaces on
          December 11, 2026 and other plans expected to follow the same timeline. Students must be signed in to ChatGPT to chat with a GPT,
          each conversation starts fresh, and GPT builders “cannot view” individual conversations.
        </li>
        <li>
          <strong>Claude Projects.</strong> Anthropic’s help center says project sharing is available on Team and Enterprise plans and shares
          the project with members of your organization. In practice, every student would need a seat in your workspace.
        </li>
        <li>
          <strong>Gemini Gems.</strong> Gems can be shared much like a Google Drive file, but Google’s help page warns that “any Gem
          instructions and files that you have uploaded to the Gem can be viewed by any user with access to the Gem.” Sharing the Gem means
          sharing your course files.
        </li>
      </ul>
      <p>
        Put together, the trade-offs are clear. Your content can leak. You see nothing of what students ask or where they struggle. The
        assistant can mix your material with general knowledge unless you tightly restrict it. And the product may be retired or re-priced
        under you. A custom assistant is still a fine private study aid for you, or a stopgap for a small group of adults who already pay for
        the tool. It is a weak base for a paid product.
      </p>

      <h2 id="teaching-tutor">Option 3: a dedicated teaching tutor</h2>
      <p>
        A teaching tutor starts from the other end. Instead of waiting for questions, it takes each chapter and teaches it: explains one idea
        at a time, asks a question after each, grades the answer, gives a hint when the student is wrong, and comes back to weak concepts
        before moving on. The student can still interrupt with a doubt.
      </p>
      <p>
        There is decent evidence that structure and grounding matter. In a 2025 randomized crossover trial in <em>Scientific Reports</em>,
        Kestin, Miller, Klales, Milbourne and Ponti had 194 Harvard introductory physics students learn one lesson from an AI tutor built on
        the course’s teaching approach and another in an active-learning class. Median learning gains with the AI tutor were more than
        double, with a median of 49 minutes on task against a 60-minute class. The authors kept the tutor accurate by writing step-by-step
        solutions into its prompts. That is two lessons in one course at one university, but the design lesson carries over: the tutor
        worked because it followed prepared material, not because it improvised.
      </p>
      <p>
        With Tutezy, for example, each chapter of your course is compiled into a teaching plan (topics, concepts, board steps, narration,
        checks and hints) that you can preview before any student sees it. The lesson is then taught live on a whiteboard, in your cloned
        voice if you want, by voice or text. The details are on <a href="/how-it-works/">how it works</a>.
      </p>
      <Callout title="Be clear about where it runs" tone="warn">
        <p>
          Tutezy is not a plugin for Teachable, Thinkific or Kajabi. Students take the lessons inside the Vacademy learner app (web, Android
          and iOS, under your brand), so they need to be enrolled there. You either link to those lessons from your existing course or move the
          course over; migration from an existing platform is included in onboarding. Ask any vendor in this category the same question
          before you commit.
        </p>
      </Callout>

      <h2 id="comparison">How the three options compare</h2>
      <div className="tbl">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Platform assistant</th>
              <th>Custom GPT, Project or Gem</th>
              <th>Teaching tutor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Setup time</td>
              <td>Short, if your plan includes it: pick courses, sync, customize, publish</td>
              <td>Short: write instructions, upload files, share</td>
              <td>For Tutezy, an afternoon to set up and compile, plus time to review lessons</td>
            </tr>
            <tr>
              <td>Grounding and accuracy</td>
              <td>Answers from your lessons, often with citations</td>
              <td>Your files plus the model’s general knowledge; no review step</td>
              <td>Lessons compiled from your material and reviewable before students see them</td>
            </tr>
            <tr>
              <td>Student experience</td>
              <td>A chat box beside the lesson; the student has to know what to ask</td>
              <td>A separate app and account; each chat starts fresh</td>
              <td>A lesson: explanation, a question after each idea, hints, revisits; voice or text</td>
            </tr>
            <tr>
              <td>Reporting to you</td>
              <td>Conversation logs and answer ratings (varies by vendor)</td>
              <td>Little or none; GPT builders cannot see conversations</td>
              <td>Per-student concept mastery, weak spots per cohort, minutes, summaries</td>
            </tr>
            <tr>
              <td>Cost model</td>
              <td>Plan tier or add-on with a message or credit allowance</td>
              <td>An account for every student; paid seats for shared Claude Projects</td>
              <td>Per minute of lesson ($0.03 for Tutezy)</td>
            </tr>
            <tr>
              <td>Control</td>
              <td>Inside your platform and branding</td>
              <td>The AI vendor controls features, pricing and retirement</td>
              <td>Varies; for Tutezy, the Vacademy learner app under your brand, with your teacher’s voice, strictness and content</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        None of these is best in every row. The question is which row matters most for your course. For a deeper look at the chatbot versus
        tutor difference, see <a href="/compare/tutezy-vs-chatgpt/">Tutezy vs ChatGPT</a>. For how any of them should stay faithful to your
        material, read <a href="/blog/ai-tutor-hallucinations-grounding/">Will an AI tutor make things up?</a>
      </p>

      <h2 id="which-to-choose">Which option fits your course?</h2>
      <ul>
        <li>
          <strong>Your students mostly ask “where is…” or “what did you mean by…”.</strong> A platform assistant is enough. Turn it on, seed
          it with your FAQ, and read the questions it gets each week. They tell you which lessons to re-record.
        </li>
        <li>
          <strong>You sell to self-directed adults and do not need data.</strong> A platform assistant still beats a custom GPT, because it
          stays inside your course and does not expose your files.
        </li>
        <li>
          <strong>Your course is sold on an outcome</strong> (a certification, a job skill, an exam), or completion drives your reviews and
          refunds. You need something that asks the student questions and tells you who is stuck. That is a teaching tutor.
        </li>
        <li>
          <strong>You want both.</strong> Nothing stops you running a platform assistant for logistics and a teaching tutor on the three or
          four chapters where students struggle most.
        </li>
      </ul>
      <p>
        If completion is the real problem, pair this with the fixes in{" "}
        <a href="/blog/improve-online-course-completion-rates/">How to improve online course completion rates</a>. An AI tutor helps most
        when units are short and each one ends with something to answer.
      </p>

      <h2 id="rollout-plan">A five-step rollout plan</h2>
      <p>Whichever option you pick, do not switch it on across the whole course at once. Run it like a product test.</p>
      <Steps
        items={[
          [
            "Pick the module with the worst drop-off",
            <>Open your course analytics and find the lesson after which the most students stop. That is where a tutor earns its keep, and where you will see a change fastest.</>,
          ],
          [
            "Prepare the material",
            <>Gather that module’s videos, slides, PDFs and quiz questions. Write down the three mistakes students make most often; they become hints and checks. See <a href="/blog/turn-pdf-slides-into-interactive-lessons/">turning PDFs, slides and videos into interactive lessons</a>.</>,
          ],
          [
            "Set it up and review every answer path",
            <>Configure the assistant or compile the lessons, then go through them as a student would. Ask the awkward questions. Fix anything wrong before a student sees it.</>,
          ],
          [
            "Pilot with about 20 students",
            <>Invite a mix of strong and struggling students from a current cohort. Tell them it is an AI and ask for blunt feedback. Twenty students is enough to find problems, not to prove an effect.</>,
          ],
          [
            "Measure, then decide",
            <>Compare module completion with the previous cohort, then look at minutes used, the concepts students missed, support tickets and refund requests. Expand only if the numbers and the comments both improve.</>,
          ],
        ]}
      />

      <h2 id="package-and-price">How to package and price an AI tutor</h2>
      <p>
        The simplest model is a premium tier: the same course, sold “with a live AI mentor,” at a higher price. It gives students a clear
        choice, and it pays for the tutor from the buyers who value it most.
      </p>
      <p>Here is the arithmetic at a per-minute rate of $0.03 (Tutezy’s base rate; $0.05 with an animated avatar shown):</p>
      <ul>
        <li>
          <strong>A student who uses the mentor fully:</strong> 8 modules × 20 minutes = 160 minutes × $0.03 = <strong>$4.80</strong>. With
          the avatar on throughout, $8.00.
        </li>
        <li>
          <strong>A heavy user:</strong> three times that, 480 minutes, costs $14.40.
        </li>
        <li>
          <strong>A cohort:</strong> 100 buyers take a $399 premium tier instead of the $299 standard one and average 120 minutes each. That is
          12,000 minutes, or $360 in usage, against $10,000 in extra revenue.
        </li>
        <li>
          <strong>One-time costs:</strong> a voice clone is $20 per voice, and compiling a typical 40-slide course costs under $2.50.
        </li>
        <li>
          <strong>Your pilot:</strong> 20 students × 30 minutes = 600 minutes = $18.
        </li>
      </ul>
      <p>
        Two cautions. First, cap session length per course so a single student cannot run up an open-ended bill. Second, name it honestly: “AI
        mentor trained on this course” is accurate; “personal mentoring” implies a human. The full rate card and more examples are on the{" "}
        <a href="/pricing/">pricing page</a>, and other pricing models are compared in{" "}
        <a href="/blog/ai-tutor-cost/">How much does an AI tutor cost?</a>
      </p>

      <WhereTutezyFits>
        <p>
          Tutezy is the third option: a teaching tutor for creators who already have the material. It compiles your recorded videos,
          PDFs, slides and question banks into lessons you can preview, then teaches each student one to one on a whiteboard, in your cloned
          voice if you like, with a check after every concept, hints, revisits and a recap next time. You get concept mastery per student,
          weak spots across the cohort, minutes taught and a CSV export. It costs $0.03 per learner-minute with no seat licenses. Details
          are on the <a href="/for/course-creators/">course creators page</a>.
        </p>
        <p>
          Where it is not the right tool: it is not a plugin for your current platform, so students use the Vacademy learner app. It teaches
          in English and Hindi only. And it is not a general chatbot that answers anything; it answers doubts about your material. If all you
          need is a Q&amp;A box inside Thinkific or Kajabi, their built-in assistants are simpler.
        </p>
      </WhereTutezyFits>

      <Sources
        items={[
          ["Thinkific. (2026). Thinker – AI Teaching Assistant (help center article, updated September 17, 2026).", "https://support.thinkific.com/hc/en-us/articles/34681678535191-Thinker-AI-Teaching-Assistant"],
          ["Kajabi. (2026). Set up a Teaching Assistant. Kajabi Help Center.", "https://help.kajabi.com/articles/products/products-overview/set-up-a-teaching-assistant"],
          ["Teachable. (2026). AI Tools for Online Creators (AI Hub).", "https://www.teachable.com/ai-hub"],
          ["OpenAI. (2026). GPTs in ChatGPT. OpenAI Help Center.", "https://help.openai.com/en/articles/8554407-gpts-in-chatgpt"],
          ["Anthropic. (2026). Manage project visibility and sharing. Claude Help Center.", "https://support.claude.com/en/articles/9519189-manage-project-visibility-and-sharing"],
          ["Google. (2026). Share a Gem from Gemini Apps. Gemini Apps Help.", "https://support.google.com/gemini/answer/16504957"],
          ["Kestin, G., Miller, K., Klales, A., Milbourne, T., & Ponti, G. (2025). AI tutoring outperforms in-class active learning: an RCT introducing a novel research-based design in an authentic educational setting. Scientific Reports, 15, 17458.", "https://doi.org/10.1038/s41598-025-97652-6"],
        ]}
      />
    </BlogShell>
  );
}

import { BlogShell, Callout, Figure, Sources, WhereTutezyFits, postMetadata, type FaqItem } from "@/components/BlogShell";

const SLUG = "ai-tutor-cost";
export const metadata = postMetadata(SLUG);

const faq: FaqItem[] = [
  [
    "How much does an AI tutor cost per month?",
    "It depends on the pricing model. Consumer plans cost a few dollars a month; Khanmigo, for example, lists $4 a month or $44 a year for learners and parents as of September 2026. School and district licenses are usually quoted on request, and per-minute tutors bill only for use: at $0.03 a minute, a student who learns 30 minutes a week costs about $3.90 a month.",
  ],
  [
    "Is an AI tutor cheaper than a human tutor?",
    "Per hour, by a wide margin. At $0.03 a minute an AI tutor costs $1.80 per student-hour, while Wyzant puts the average price of a tutor on its marketplace at $35 to $60 an hour. A human tutor still does things an AI tutor cannot, such as mentoring, motivation and open-ended project work, so many organizations use both.",
  ],
  [
    "How much does it cost to build your own AI tutor?",
    "At OpenAI’s September 2026 list prices for gpt-realtime-2.1, the audio alone for a spoken tutoring minute works out to roughly five cents under simple assumptions, or under two cents on the mini model, before the conversation history is re-sent each turn and before hosting. The larger cost is engineering: the US Bureau of Labor Statistics puts the median software developer wage at $135,980 a year (May 2025).",
  ],
  [
    "What is per-minute AI tutor pricing?",
    "You pay for each minute a student spends in a live tutoring session, instead of a fee for every enrolled student. It suits uneven or seasonal use and pilots, because students who never log in cost nothing. Check what counts as a minute, whether features like an avatar cost more per minute, and whether there are minimums.",
  ],
  [
    "What are the hidden costs of AI tutoring software?",
    "The common ones are staff time to prepare and review content, onboarding, minimum commitments and annual prepayment, overage charges, paid extras such as avatars and custom voices, platform fees when the tutor only runs inside the vendor’s app, charges to regenerate content, sales tax, and the cost of exporting your data when you leave.",
  ],
  [
    "How much does high-impact tutoring cost per student?",
    "The National Student Support Accelerator at Stanford says cost estimates for high-impact tutoring programs range from $1,000 to over $3,000 per pupil, and that districts should expect to spend roughly $1,200 to $2,500 per student. Those figures assume sessions at least three times a week, so they buy far more hours than a light AI tutoring schedule.",
  ],
];

export default function Page() {
  return (
    <BlogShell
      slug={SLUG}
      lede="AI tutor cost ranges from a few dollars per student per month on a consumer seat plan to a few cents per learner-minute on usage pricing. For a 100-student cohort learning 30 minutes a week for 12 weeks (36,000 minutes), that is $1,080 at $0.03 a minute, against $21,000 to $36,000 for the same 600 hours of one-to-one human tutoring at $35 to $60 an hour."
      takeaways={[
        <>
          <strong>Four pricing models.</strong> Per seat, per learner-minute, build your own on AI APIs, and human tutoring by the hour. Each wins in a different situation.
        </>,
        <>
          <strong>Per seat charges for enrollment; per minute charges for use.</strong> Divide the seat price by the per-minute rate to get the break-even minutes per student.
        </>,
        <>
          <strong>Building your own is mostly an engineering bill.</strong> The voice API may cost a few cents a minute; the developers cost far more.
        </>,
        <>
          <strong>Private human tutoring costs roughly 19 to 33 times more per hour</strong> but buys judgment and relationship. Price the hours you actually need a human for.
        </>,
        <>
          <strong>Budget the hidden costs.</strong> Review time, minimums, extras, platform fees and data export rarely appear on the price page.
        </>,
      ]}
      toc={[
        ["short-answer", "How much an AI tutor costs"],
        ["pricing-models", "The four pricing models"],
        ["per-seat-pricing", "Per-seat licenses"],
        ["per-minute-pricing", "Per-minute usage pricing"],
        ["build-your-own", "Building your own"],
        ["ai-vs-human-tutor-cost", "AI tutor vs human tutor cost"],
        ["worked-example", "Worked example: 100 students, 12 weeks"],
        ["break-even", "Per seat vs per minute: break-even"],
        ["hidden-costs", "Hidden costs to budget"],
      ]}
      faq={faq}
      demoTopic="newton-second-law"
    >
      <h2 id="short-answer">How much does an AI tutor cost?</h2>
      <p>
        AI tutor cost depends less on the product than on how it is priced. The same student using a tutor 30 minutes a week can cost you
        $3.90 a month on per-minute pricing at $0.03, a flat fee on a seat license whether they log in or not, or several hundred dollars a
        term with a human tutor. The only reliable way to compare is to take one realistic usage scenario and price it under every model.
      </p>
      <p>
        This guide does that for a 100-student cohort, with the arithmetic shown so you can swap in your own numbers. All prices are as of
        September 2026 and come from each vendor’s or organization’s own page, listed at the end.
      </p>
      <Figure
        caption={
          <>
            Cost of 36,000 learner-minutes (100 students × 30 minutes a week × 12 weeks). Light segments show the top of a range. Human figures
            use Wyzant’s published average price range and the NSSA’s per-pupil-hour tutor wage estimates (wages only). The seat price is an
            illustrative example, not a quote.
          </>
        }
      >
        <svg viewBox="0 0 740 320" width="100%" role="img" aria-label="Horizontal bar chart of the cost of 36,000 learner-minutes: AI tutor at 3 cents a minute $1,080; with avatar at 5 cents $1,800; an example seat license at $10 a month $3,000; small-group tutors, wages only, $4,200 to $12,000; private one-to-one tutor at $35 to $60 an hour $21,000 to $36,000.">
          <rect x="0" y="0" width="740" height="320" fill="#fbf8f2" />
          {[260, 387.8, 515.6, 643.3].map((x) => (
            <line key={x} x1={x} y1="22" x2={x} y2="288" stroke="#9aa3b8" strokeDasharray="4 4" />
          ))}
          <text x="260" y="308" fontFamily="inherit" fontSize="13" fill="#151c2f" textAnchor="middle">$0</text>
          <text x="387.8" y="308" fontFamily="inherit" fontSize="13" fill="#151c2f" textAnchor="middle">$10k</text>
          <text x="515.6" y="308" fontFamily="inherit" fontSize="13" fill="#151c2f" textAnchor="middle">$20k</text>
          <text x="643.3" y="308" fontFamily="inherit" fontSize="13" fill="#151c2f" textAnchor="middle">$30k</text>

          <text x="16" y="43" fontFamily="inherit" fontSize="14" fontWeight="700" fill="#151c2f">AI tutor</text>
          <text x="16" y="60" fontFamily="inherit" fontSize="13" fill="#151c2f">$0.03/min: $1,080</text>
          <rect x="260" y="32" width="13.8" height="26" fill="#ff6b1a" stroke="#151c2f" strokeWidth="1.5" />

          <text x="16" y="98" fontFamily="inherit" fontSize="14" fontWeight="700" fill="#151c2f">AI tutor + avatar</text>
          <text x="16" y="115" fontFamily="inherit" fontSize="13" fill="#151c2f">$0.05/min: $1,800</text>
          <rect x="260" y="87" width="23" height="26" fill="#ff6b1a" stroke="#151c2f" strokeWidth="1.5" />

          <text x="16" y="153" fontFamily="inherit" fontSize="14" fontWeight="700" fill="#151c2f">Seat license (example)</text>
          <text x="16" y="170" fontFamily="inherit" fontSize="13" fill="#151c2f">$10/month: $3,000</text>
          <rect x="260" y="142" width="38.3" height="26" fill="#ffd84d" stroke="#151c2f" strokeWidth="1.5" />

          <text x="16" y="208" fontFamily="inherit" fontSize="14" fontWeight="700" fill="#151c2f">Small-group tutors</text>
          <text x="16" y="225" fontFamily="inherit" fontSize="13" fill="#151c2f">wages only: $4,200–$12,000</text>
          <rect x="260" y="197" width="53.7" height="26" fill="#17b890" stroke="#151c2f" strokeWidth="1.5" />
          <rect x="313.7" y="197" width="99.6" height="26" fill="#cfe5ff" stroke="#151c2f" strokeWidth="1.5" />

          <text x="16" y="263" fontFamily="inherit" fontSize="14" fontWeight="700" fill="#151c2f">Private 1:1 tutor</text>
          <text x="16" y="280" fontFamily="inherit" fontSize="13" fill="#151c2f">$35–$60/hr: $21,000–$36,000</text>
          <rect x="260" y="252" width="268.3" height="26" fill="#151c2f" stroke="#151c2f" strokeWidth="1.5" />
          <rect x="528.3" y="252" width="191.7" height="26" fill="#cfe5ff" stroke="#151c2f" strokeWidth="1.5" />
        </svg>
      </Figure>

      <h2 id="pricing-models">What are the four AI tutoring pricing models?</h2>
      <p>
        Almost every option you will be quoted fits one of four models. The reference points below are published prices, not negotiated
        quotes, and they are for different products, so use them to understand the shape of each model rather than to pick a vendor.
      </p>
      <div className="tbl">
        <table>
          <thead>
            <tr>
              <th>Model</th>
              <th>How you pay</th>
              <th>Published reference point (Sept 2026)</th>
              <th>Suits</th>
              <th>Watch for</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Per seat or license</td>
              <td>A fixed fee per enrolled student per month or year</td>
              <td>Khanmigo: $4/month or $44/year for learners and parents; free for teachers; districts on request</td>
              <td>Heavy, steady use by most students</td>
              <td>Paying for students who never log in; annual minimums</td>
            </tr>
            <tr>
              <td>Per learner-minute</td>
              <td>Only the minutes a student is actually taught</td>
              <td>Tutezy: $0.03/minute, $0.05 with an avatar shown</td>
              <td>Uneven or seasonal use; pilots</td>
              <td>No natural ceiling; set a cap per student or course</td>
            </tr>
            <tr>
              <td>Build your own</td>
              <td>AI API usage plus engineering and hosting</td>
              <td>OpenAI gpt-realtime-2.1 audio: $32 input, $64 output per 1M tokens</td>
              <td>Teams with engineers and an unusual need</td>
              <td>Salaries, maintenance, safety testing, model changes</td>
            </tr>
            <tr>
              <td>Human tutoring</td>
              <td>Per hour of a tutor’s time</td>
              <td>Wyzant: $35–$60/hour average; NSSA: $1,200–$2,500 per student per year for district programs</td>
              <td>Mentoring, motivation, open-ended work</td>
              <td>Scarce hours; one student or a small group at a time</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="per-seat-pricing">Per-seat and per-student licenses</h2>
      <p>
        A seat license charges a fixed amount per enrolled student, usually per month or per year, whatever each student does. It is easy to
        budget and easy to approve. A well-known published consumer price is Khanmigo, Khan Academy’s AI tutor: as of
        September 2026 its pricing page lists $4 a month or $44 a year for learners and parents, free access for teachers, and quoted pricing
        for districts. Khanmigo teaches on Khan Academy’s own content, so treat that as a price reference, not a like-for-like quote for
        tutoring on your material.
      </p>
      <p>
        The catch with seats is that you pay for enrollment, not learning. Every student on the roster costs the same whether they use the tutor
        daily or never open it. Before signing, ask what usage the vendor sees across similar customers, whether unused seats can be
        reassigned, and whether the contract has a minimum seat count or an annual term.
      </p>

      <h2 id="per-minute-pricing">Per-minute usage pricing</h2>
      <p>
        Usage pricing charges for each learner-minute of live tutoring. Tutezy, for example, charges $0.03 per learner-minute, or $0.05 while
        an animated teacher avatar is on screen, from prepaid credits, with no seat licenses or minimums. A student who never logs in costs
        nothing, which makes pilots and seasonal courses (exam prep, onboarding cohorts) cheap to run. The{" "}
        <a href="/how-it-works/">how it works</a> page explains why a lesson compiled in advance keeps the live cost per minute low.
      </p>
      <p>
        The trade-off is that the bill grows with use and has no natural ceiling. Ask three questions of any per-minute vendor: what exactly
        counts as a minute (idle time, reading notes afterwards), which features change the rate, and whether you can cap minutes per
        student or per course. A fixed session length per course, say 20 minutes, is the simplest cap.
      </p>
      <p>
        To forecast a per-minute bill, multiply three numbers you can estimate: students who will actually use it, sessions per student per
        week, and minutes per session. A pilot gives you the first number, which is the hardest one to guess.
      </p>

      <h2 id="build-your-own">What does it cost to build your own AI tutor?</h2>
      <p>
        Building your own means paying an AI provider per use and paying engineers to turn the model into a tutor. The API part is
        easy to estimate. OpenAI’s pricing page, as of September 2026, lists gpt-realtime-2.1 at $32 per million audio input tokens and $64
        per million audio output tokens, and $10 and $20 for the mini model. OpenAI’s cost guide says user audio is 1 token per 100 ms
        and assistant audio 1 token per 50 ms, so a minute of student speech is 600 tokens and a minute of tutor speech is 1,200.
      </p>
      <p>
        Take a minute in which the tutor speaks for 36 seconds and the student for 24 (a simplifying assumption with no silence):
      </p>
      <ul>
        <li>Tutor audio: 720 tokens × $64 per million = $0.046</li>
        <li>Student audio: 240 tokens × $32 per million = $0.008</li>
        <li>Total: about $0.054 per minute, or about $0.017 on the mini model</li>
      </ul>
      <p>
        That is before the costs that grow during a conversation. OpenAI’s guide notes that the entire conversation is sent to the model for each
        response, so later turns cost more (cached input is much cheaper, which helps). Your instructions and course material add text tokens
        on every turn, and you still need speech hosting, storage and monitoring.
      </p>
      <p>
        Then there is engineering. The US Bureau of Labor Statistics puts the median software developer wage at $135,980 a year (May 2025),
        about $11,330 a month before benefits and overhead. Three months of one developer is roughly $34,000 in salary alone, which is more
        than 30 terms of the per-minute cohort below.
      </p>
      <p>
        And a voice connection is not yet a tutor. You would still need to turn your material into lessons, keep the model from inventing
        content, grade answers consistently, decide when to give a hint and when to move on, store each student’s progress, build teacher
        reports, and re-test all of it every time the provider ships a new model. Building makes sense when the tutor itself is your product,
        not when you need one for a course.
      </p>

      <h2 id="ai-vs-human-tutor-cost">AI tutor vs human tutor: what does each cost?</h2>
      <p>
        For private one-to-one tutoring, the US marketplace Wyzant says the average price of a tutor on its platform is
        between $35 and $60 an hour (in a December 2024 post), with higher rates in some subjects. At $0.03 a minute, an AI tutor costs $1.80
        per student-hour, so the human hour costs roughly 19 to 33 times more.
      </p>
      <p>
        For schools and districts, the National Student Support Accelerator (NSSA) at Stanford publishes program-level estimates. It says cost estimates for high-impact tutoring programs range from $1,000 to over $3,000 per pupil, and that districts should
        expect roughly $1,200 to $2,500 per student. Its budget guide lists tutor wages of $15–$20 an hour for novice tutors, $20–$30 for
        experienced tutors and $40–$60 for master tutors, which the guide converts to about $7–$20 per pupil-hour depending on group size and tutor type.
      </p>
      <p>
        Price per hour is not the whole comparison. A human tutor brings judgment, motivation and a relationship (our post on{" "}
        <a href="/blog/blooms-2-sigma-problem-ai-tutoring/">Bloom’s 2 sigma problem</a> covers what the research on tutoring says). The practical question is which hours need a human. Our{" "}
        <a href="/compare/tutezy-vs-human-tutoring/">Tutezy vs human tutoring</a> comparison lays out where each one wins.
      </p>

      <h2 id="worked-example">Worked example: a 100-student cohort for 12 weeks</h2>
      <p>
        One hundred students each use a tutor for 30 minutes a week for a 12-week term. That is 100 × 30 × 12 = <strong>36,000 learner-minutes</strong>,
        or 600 student-hours.
      </p>
      <div className="tbl">
        <table>
          <thead>
            <tr>
              <th>Option</th>
              <th>Arithmetic</th>
              <th>Total for the term</th>
              <th>Per student</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>AI tutor, per minute</td>
              <td>36,000 × $0.03</td>
              <td>$1,080 (plus a $20 voice clone: $1,100)</td>
              <td>$10.80</td>
            </tr>
            <tr>
              <td>AI tutor with avatar, per minute</td>
              <td>36,000 × $0.05</td>
              <td>$1,800 (plus a $20 voice clone: $1,820)</td>
              <td>$18.00</td>
            </tr>
            <tr>
              <td>AI tutor, per seat (example $10/month)</td>
              <td>100 × $10 × 3 months</td>
              <td>$3,000, whatever the usage</td>
              <td>$30.00</td>
            </tr>
            <tr>
              <td>Build your own, audio tokens only</td>
              <td>36,000 × $0.017 to $0.054</td>
              <td>About $605–$1,935, plus engineering</td>
              <td>$6–$19, plus engineering</td>
            </tr>
            <tr>
              <td>Small-group human tutors, wages only</td>
              <td>600 × $7 to $20 per pupil-hour</td>
              <td>$4,200–$12,000</td>
              <td>$42–$120</td>
            </tr>
            <tr>
              <td>Private one-to-one tutor</td>
              <td>600 × $35 to $60</td>
              <td>$21,000–$36,000</td>
              <td>$210–$360</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Two caveats keep this honest. The per-minute AI figures also carry a small one-time cost to prepare lessons (Tutezy’s pricing page
        puts a typical 40-slide course at under $2.50). And the human rows buy something the AI rows do not, so the fair reading is not
        “AI is 20 times cheaper” but “every student can get the practice loop, and the human hours can go where they matter most.”
      </p>

      <h2 id="break-even">Per seat vs per minute: where is the break-even?</h2>
      <Callout title="The break-even formula" tone="tip">
        <p>
          <strong>Break-even minutes per student per month = seat price per month ÷ price per minute.</strong> Below that usage, per-minute
          pricing is cheaper; above it, the seat is cheaper. Divide by 4.33 to get minutes per week.
        </p>
      </Callout>
      <div className="tbl">
        <table>
          <thead>
            <tr>
              <th>Seat price per student per month</th>
              <th>Break-even at $0.03/min</th>
              <th>Break-even at $0.05/min</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>$4 (a low consumer price point)</td>
              <td>133 min/month (about 31 a week)</td>
              <td>80 min/month (about 18 a week)</td>
            </tr>
            <tr>
              <td>$10</td>
              <td>333 min/month (about 77 a week)</td>
              <td>200 min/month (about 46 a week)</td>
            </tr>
            <tr>
              <td>$20</td>
              <td>667 min/month (about 154 a week)</td>
              <td>400 min/month (about 92 a week)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        The average can mislead when usage is uneven. Suppose 30 of your 100 students use the tutor 300 minutes a month
        and the other 70 use it 30 minutes. At $0.03 a minute that is (30 × 300 + 70 × 30) × $0.03 = $333 a month. A $10 seat for all 100
        is $1,000. Per-seat pricing wins only when average use per student is above the break-even, so pull a month of real usage from a pilot before you decide.
        Our <a href="/blog/how-to-choose-ai-tutoring-software/">AI tutoring software buyer’s checklist</a> covers the pilot.
      </p>

      <h2 id="hidden-costs">Hidden costs to budget</h2>
      <ul>
        <li>
          <strong>Content preparation and review.</strong> Someone has to supply the material and check what the tutor will teach. Multiply
          the teacher hours per chapter by your own staff cost.
        </li>
        <li>
          <strong>Onboarding and platform fees.</strong> If the tutor only runs inside the vendor’s app or platform, that platform may have its
          own price, and students need accounts.
        </li>
        <li>
          <strong>Minimum commitments.</strong> Annual terms, minimum seat counts, prepaid tiers and auto-renewal clauses.
        </li>
        <li>
          <strong>Overages and caps.</strong> What happens above a fair-use limit on a seat plan, or when a per-minute cohort uses more than
          planned.
        </li>
        <li>
          <strong>Extras.</strong> Avatars, custom voices, extra languages and premium support, sometimes priced separately.
        </li>
        <li>
          <strong>Regeneration.</strong> Some products charge again when you rebuild a lesson after changing the source.
        </li>
        <li>
          <strong>Taxes.</strong> Published prices may exclude sales tax; Khanmigo’s page says its prices do.
        </li>
        <li>
          <strong>Data export and exit.</strong> Whether transcripts and reports export as CSV at no charge, and what happens to them when you
          leave.
        </li>
      </ul>
      <Callout title="The quote request to send every vendor">
        <p>
          “We have [100] students. We expect each to use the tutor about [30] minutes a week for a [12]-week term, with [half] using a voice
          or avatar feature. Please send the total cost for that term, itemized, including: setup or onboarding, content preparation, any
          platform or account fees, one-time charges for voices or avatars, minimum commitments and contract length, what happens above our
          expected usage, taxes, and the cost of exporting our transcripts and reports if we leave.”
        </p>
        <p>Put every reply into the worked-example table above. Quotes that will not itemize are hard to compare, and that is worth knowing too.</p>
      </Callout>
      <p>
        If you are running a tutoring business rather than buying for a school, the same arithmetic drives your margins; see{" "}
        <a href="/blog/scale-tutoring-business-with-ai/">how to scale a tutoring business with AI</a>.
      </p>

      <WhereTutezyFits>
        <p>
          Tutezy uses the per-minute model: $0.03 per learner-minute, $0.05 while the animated avatar is shown, $20 one-time per cloned
          teacher voice, $100 one-time for a custom avatar (stock avatars are free), and a small one-time compile cost per slide that is shown
          before you convert anything. Credits are prepaid, there are no seat licenses or minimums, volume pricing starts above 1,000
          students, and every credit is itemized per course and per student. In India the rates are ₹3 and ₹5 a minute, plus GST. The full rate card
          and worked examples are on the <a href="/pricing/">pricing page</a>.
        </p>
        <p>
          It is not always the cheapest option. If most of your students would use a tutor for hours every day, run the break-even above; a
          flat seat license may cost less. Tutezy runs inside the Vacademy learner app, so an organization not yet on Vacademy is onboarded
          first, and Vacademy’s own platform pricing is separate. It does not replace a human tutor for mentoring or motivation; see{" "}
          <a href="/compare/tutezy-vs-human-tutoring/">Tutezy vs human tutoring</a>.
        </p>
      </WhereTutezyFits>

      <Sources
        items={[
          ["Khan Academy. Khanmigo pricing (learners and parents $4/month or $44/year; teachers free; districts on request; sales tax not included). Accessed September 2026.", "https://www.khanmigo.ai/pricing"],
          [
            "National Student Support Accelerator, Stanford University. District playbook: developing a budget (per-pupil cost ranges and tutor wage estimates, citing research by Matthew Kraft).",
            "https://nssa.stanford.edu/district-playbook/section-2/developing-budget",
          ],
          ["Wyzant (2024, December 23). How much does a tutor cost? The ultimate guide.", "https://blog.wyzant.com/how-much-does-tutoring-cost/"],
          ["OpenAI. API pricing (gpt-realtime-2.1 and gpt-realtime-2.1-mini audio token prices). Accessed September 2026.", "https://developers.openai.com/api/docs/pricing"],
          ["OpenAI. Cost optimization, Realtime API guide (audio tokenization and per-turn context).", "https://developers.openai.com/api/docs/guides/voice-latency-cost"],
          ["U.S. Bureau of Labor Statistics. Occupational Outlook Handbook: Software developers (median pay, May 2025).", "https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm"],
        ]}
      />
    </BlogShell>
  );
}

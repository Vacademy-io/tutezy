import { BlogShell, Callout, WhereTutezyFits, postMetadata } from "@/components/BlogShell";

const SLUG = "ai-product-knowledge-training";
export const metadata = postMetadata(SLUG);

export default function Page() {
  return (
    <BlogShell
      slug={SLUG}
      lede="AI product knowledge training turns approved documentation into explanations and customer scenarios that employees can practise. Start with a specific role, teach the decisions that role needs to make and review answers against current product facts. Keep an owner and a revision process for every lesson."
      takeaways={[
        "Teach the decisions sales and support staff make, not only feature names.",
        "Give each training scenario an approved answer and clear limits on claims.",
        "Separate correct product knowledge from persuasive but inaccurate wording.",
        "Update and review lessons when the underlying product information changes.",
      ]}
      toc={[["scope", "Define the employee's task"], ["sources", "Prepare approved material"], ["scenario", "A customer scenario and rubric"], ["rollout", "Run a practical pilot"], ["updates", "Keep the lessons current"]]}
      related={["ai-employee-onboarding-training", "ai-speaking-practice", "ai-tutor-hallucinations-grounding"]}
      faq={[
        ["What is AI product knowledge training?", "It uses AI-supported lessons and practice to help employees explain a product and make appropriate decisions in customer situations. The content should come from reviewed product information and include limits, exceptions and escalation routes."],
        ["Can the same lesson serve sales and support?", "Some core facts can be shared, but the practice should reflect each role. Sales may need to establish fit and explain limitations; support may need to clarify a reported issue and choose the next troubleshooting or escalation step."],
        ["How often should product training be updated?", "Review a lesson whenever a relevant feature, price, policy or process changes. Assign an owner who can identify affected material, revise it and check the learner experience before it is used again."],
      ]}
    >
      <h2 id="scope">Define what the employee needs to do</h2>
      <p>A product deck may describe everything the company wants to announce. A training lesson needs a narrower objective. For sales, that might be identifying whether a customer requires a feature the product does not offer. For support, it might be asking the right questions before choosing a troubleshooting step.</p>
      <p>Write the task in observable terms: explain a limitation accurately, identify an unsuitable use case or locate the current source for a commercial claim. “Know the new release” is too broad to assess with a useful scenario.</p>
      <p>Keep role-specific practice separate where the decisions differ. A shared introduction can cover the product's purpose and terminology. Sales and support can then work through different customer situations using the same approved facts.</p>

      <h2 id="sources">Prepare a small set of approved source material</h2>
      <p>Start with the current product overview, feature availability, known limitations and the process for resolving uncertainty. Remove conflicting drafts and outdated screenshots from the training set. Give every source a version or review date and a named owner.</p>
      <ul>
        <li>State which customer needs the product is intended to address.</li>
        <li>List available capabilities separately from roadmap ideas.</li>
        <li>Include conditions and limitations alongside the feature they qualify.</li>
        <li>Provide approved examples and responses to common misunderstandings.</li>
        <li>Specify who should confirm a detail that the source does not answer.</li>
      </ul>
      <p>If employees need to discuss pricing, use the current approved commercial material and define who can authorize an exception. A training conversation should not invent a discount, delivery date or integration commitment to make a scenario feel complete.</p>

      <h2 id="scenario">A fictional customer scenario with an answer rubric</h2>
      <p>Imagine a scheduling product that supports browser-based appointment booking but does not work offline. This is an invented product for the exercise, not a description of Tutezy. A customer says: “Our team sometimes loses connectivity. Can we keep creating bookings while the internet is down?”</p>
      <p>A suitable response acknowledges the need, states the offline limitation and asks how often the team faces it. The employee should avoid promising that the feature will arrive soon unless an approved source authorizes that statement.</p>
      <div className="tbl"><table>
        <thead><tr><th>Criterion</th><th>Evidence of a useful answer</th><th>Problem to flag</th></tr></thead>
        <tbody>
          <tr><td>Accuracy</td><td>Clearly states that offline booking is unavailable.</td><td>Claims bookings will automatically work without connectivity.</td></tr>
          <tr><td>Clarification</td><td>Asks how the limitation affects the customer's workflow.</td><td>Moves to a sales pitch without understanding the requirement.</td></tr>
          <tr><td>Boundaries</td><td>Checks uncertain details with the appropriate owner.</td><td>Invents a roadmap date or unsupported workaround.</td></tr>
          <tr><td>Next step</td><td>Suggests evaluating fit using the confirmed requirements.</td><td>Promises the product will meet every need.</td></tr>
        </tbody>
      </table></div>
      <p>Ask the learner to explain why an inaccurate answer could cause a problem later. Then change the customer situation. For example, the customer has reliable connectivity but needs a feature not mentioned in the source. Check whether the employee asks for confirmation rather than assuming availability.</p>
      <Callout title="Grade knowledge before sales polish">
        <p>A confident answer can still be wrong. Review factual accuracy and unsupported promises separately from tone, clarity and rapport. A polished response should not pass a critical product-knowledge check if its central claim is false.</p>
      </Callout>

      <h2 id="rollout">Pilot the lesson with a real team</h2>
      <p>Choose one product module and a small group from the intended role. Ask a subject expert to review the lesson and test several incorrect answers. Include an uncertainty case where the correct behavior is to ask for confirmation.</p>
      <p>After practice, use a new scenario without tutor hints. Have a manager review the response using the same rubric. Track inaccurate claims, useful clarifying questions and correct escalation decisions. Include staff preparation time and cases where the tutor's feedback needed correction.</p>
      <p>Connect the practice to the team's existing coaching routine. Our <a href="/blog/ai-speaking-practice/">speaking practice guide</a> offers a structure for improving how an employee explains a correct answer. For the wider new-hire sequence, see <a href="/blog/ai-employee-onboarding-training/">AI-led onboarding training</a>.</p>

      <h2 id="updates">Keep a change record for the lesson</h2>
      <p>When a feature changes, identify the source, explanation, scenario and expected answer that depend on it. Revise those parts together. Updating the product deck while retaining an old rubric can lead the tutor to mark a newly correct response as wrong.</p>
      <p>Before release, test the changed scenario and an unchanged one to check for unintended differences. Tell managers which knowledge employees need to refresh. Keep the record simple: source version, lesson owner, review date and the decisions that changed.</p>
      <WhereTutezyFits>
        <p>Tutezy supports corporate lessons from existing decks and documents, including situational questions. Explore <a href="/for/corporate-training/">Tutezy for corporate training</a> with one reviewed product module and its answer rubric. Confirm the content-update workflow before extending the programme.</p>
      </WhereTutezyFits>
    </BlogShell>
  );
}

import { KeyFacts, PageShell, pageMetadata, type FaqItem } from "@/components/PageShell";
import { SALES_EMAIL } from "@/lib/site";

const PATH = "/security/";
export const metadata = pageMetadata(PATH);

const faq: FaqItem[] = [
  ["Do you train AI models on our content or our students’ data?", "No. Your content, compiled lessons, transcripts and reports are used only to teach your learners and to produce your reports. They are not used to train models for Tutezy or for any other customer."],
  ["Can you clone a voice without the person’s consent?", "No. We clone only the voice of a teacher or account holder who has given written consent through the product, and we keep that consent record. We do not clone public figures, colleagues or anyone else from found audio."],
  ["How do we delete a voice clone or avatar?", "Disable it in Settings → Tutor Mode at any time (lessons fall back to a stock voice), or email us to delete it permanently. Deletion covers the voice model and the sample."],
  ["Can the AI say something that is not in our material?", "The whiteboard and narration come from a plan compiled from your content and reviewable by you before students see it. The live model is used only to grade answers, give hints, answer doubts about the material on the board and adapt pace. It does not browse the web."],
  ["Who can see student transcripts?", "Admins of your own account. Nobody outside your organisation, and no other Tutezy customer."],
  ["Are you SOC 2 certified?", "Not yet. We can share our current security practices and a data-processing summary on request, and we will state plainly on this page when a certification is in place."],
  ["Where can I ask a question this page does not answer?", `Email ${SALES_EMAIL}. Security questionnaires are welcome; we answer them honestly, including the gaps.`],
];

export default function Page() {
  return (
    <PageShell
      path={PATH}
      eyebrow="Security & consent"
      heading="Security, privacy and voice consent"
      lede="What happens to your content, your students’ data and your teachers’ likeness when you use Tutezy — in plain language, including what we do not yet have."
      faq={faq}
      related={{ group: "product", title: "Learn more" }}
      updated="2026-09-12"
    >
      <KeyFacts
        title="The commitments"
        items={[
          <>
            <strong>Your content stays yours.</strong> We do not train models on it, sell it, or use it for any other customer.
          </>,
          <>
            <strong>Voice and likeness only with written consent</strong>, from the person concerned, recorded in the product; disable at any time, delete on request.
          </>,
          <>
            <strong>Lessons are reviewable before students see them.</strong> The live model works within a compiled plan; it does not browse the web.
          </>,
          <>
            <strong>Student data is private to your account</strong> and exportable by you.
          </>,
          <>
            <strong>Honest about gaps:</strong> no SOC 2 yet; practices and a data-processing summary available on request.
          </>,
        ]}
      />

      <h2>Your content</h2>
      <ul>
        <li>Uploaded PDFs, videos, slides and question banks are stored for your account only and used solely to compile and teach your lessons.</li>
        <li>Compiled teaching plans are derived works of your content and belong to you. You can preview every board before a learner sees it and recompile or remove any of it.</li>
        <li>We do not use customer content to train or fine-tune models, ours or anyone else’s.</li>
        <li>On account closure, content and compiled plans are deleted on request.</li>
      </ul>

      <h2>Teacher voice and likeness</h2>
      <p>This is the part US customers rightly ask about first, so the rules are strict and simple:</p>
      <ol>
        <li>
          <strong>Consent is explicit and recorded.</strong> A voice is cloned only from a sample recorded or uploaded by the teacher or account holder themselves, after they accept a consent statement in the product. We keep the consent record with the voice.
        </li>
        <li>
          <strong>We do not clone third parties.</strong> No public figures, no colleagues from found audio, no “can you make it sound like…”. Avatars are built only from a photo the person provides of themselves.
        </li>
        <li>
          <strong>Private to your account.</strong> Nobody else on the platform can select your teacher’s voice or avatar.
        </li>
        <li>
          <strong>Disable or delete at any time.</strong> Disabling in Tutor Mode settings switches lessons to a stock voice immediately. Deletion removes the voice model and the sample.
        </li>
        <li>
          <strong>Stock voices need no consent.</strong> If you would rather not clone anyone, the stock voice set (including American English) is included at no charge.
        </li>
      </ol>

      <h2>Student and learner data</h2>
      <ul>
        <li>We store what the product needs to teach and report: position in the course, answers to checks, mastery per concept, session transcripts, notes, and minutes used.</li>
        <li>Transcripts and reports are visible only to admins of your account. They are exportable (CSV) and deletable on request.</li>
        <li>We do not sell or share learner data with advertisers or data brokers.</li>
        <li>If your learners are minors, you are the party with the relationship to parents and school; tell us on the call and we will document the data flows for your records.</li>
      </ul>

      <h2>What the AI can and cannot do</h2>
      <ul>
        <li>The whiteboard is drawn from a compiled, reviewable plan using a fixed set of board operations. The live model never authors raw page content.</li>
        <li>Narration is compiled ahead of time; the live model adapts pace and answers doubts against the material on the board.</li>
        <li>The live model is used for grading answers, giving hints, answering doubts and adapting to the learner. It does not browse the internet or pull from other customers’ content.</li>
        <li>Every session is logged, so an admin can read exactly what was said to a learner.</li>
      </ul>

      <h2>Infrastructure and access</h2>
      <ul>
        <li>Data is encrypted in transit. Production access is limited to the engineers who operate the service.</li>
        <li>Language and speech models are provided by third-party AI providers under contract; content is sent to them only to perform the requested task and not retained by us for any other purpose. The current provider list and hosting region are available on request.</li>
        <li>We do not currently hold SOC 2 or ISO 27001. We will say so on this page until we do.</li>
      </ul>

      <h2>Your rights and how to exercise them</h2>
      <ul>
        <li>Export your data: from the admin, or ask us and we send a CSV bundle.</li>
        <li>Delete a voice, an avatar, a learner’s records, or the whole account: email <a href={`mailto:${SALES_EMAIL}`}>{SALES_EMAIL}</a> from an admin address; we confirm in writing when it is done.</li>
        <li>Report a security concern: same address, marked “security”. We answer within one business day.</li>
      </ul>
      <p>
        This page describes the product as of September 2026 and is updated when anything changes. The Vacademy{" "}
        <a href="https://vacademy.io/privacy-policy">privacy policy</a> is the legal document behind it.
      </p>
    </PageShell>
  );
}

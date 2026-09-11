import { KeyFacts, PageShell, pageMetadata } from "@/components/PageShell";

const PATH = "/about/";
export const metadata = pageMetadata(PATH);

export default function Page() {
  return (
    <PageShell
      path={PATH}
      eyebrow="About"
      heading="About Tutezy and Vacademy"
      lede="Tutezy is the live AI teacher built by Vacademy, the education operating system used by coaching institutes, schools, universities and training companies for courses, tests, live classes, fee collection and CRM."
      related={{ group: "product", title: "Learn more" }}
    >
      <KeyFacts
        title="At a glance"
        items={[
          <>
            <strong>Product:</strong> Tutezy — a live AI tutor built from an institute’s own content.
          </>,
          <>
            <strong>Maker:</strong> <a href="https://vacademy.io">Vacademy</a>, headquartered in India, with customers in India, the Gulf, Australia and New Zealand.
          </>,
          <>
            <strong>Runs inside:</strong> the Vacademy learner app (web, Android, iOS) and admin console.
          </>,
          <>
            <strong>Contact:</strong> WhatsApp +91 99933 36616 · <a href="/#demo">book a demo</a>
          </>,
        ]}
      />

      <h2>Why we built it</h2>
      <p>
        Vacademy has spent years building the plumbing institutes run on: courses, assessments, live classes, fee collection, admissions CRM,
        white-label apps. Across all of it, one thing never scaled: the teacher. A good teacher explains on a board, asks, waits, notices
        confusion and comes back to it. Recorded video does none of that; a chatbot does it without a syllabus. Tutezy is our answer: keep the
        institute’s content and the institute’s teacher at the centre, and let the teacher be in a hundred rooms at once — then tell the
        human, next morning, who needs them in person.
      </p>

      <h2>What Vacademy is</h2>
      <p>
        An AI-powered education operating system that replaces the usual stack of a separate LMS, admissions CRM, live-class tool, assessment
        engine, payment gateway and branded-app vendor. It is white-label by default, priced as a flat licence with no revenue share, and
        includes an AI course builder, AI assessment generation, AI video, auto-evaluation of subjective answers and a grounded doubt-solving
        tutor. Tutezy is the live-teaching layer on top of that. Vacademy’s own site is at <a href="https://vacademy.io">vacademy.io</a>.
      </p>

      <h2>Principles behind the product</h2>
      <ul>
        <li>
          <strong>The teacher stays in charge.</strong> Name, voice, face, strictness and pace are the institute’s choices; likeness is
          consent-gated and private.
        </li>
        <li>
          <strong>Compiled, reviewable lessons.</strong> Nothing is improvised on the fly that an academic head cannot preview first.
        </li>
        <li>
          <strong>Pay for teaching, not seats.</strong> Per learner-minute pricing means a small institute pays for what it uses.
        </li>
        <li>
          <strong>Honest comparisons.</strong> There are things a human tutor and a general chatbot do better; we say so on the{" "}
          <a href="/compare/">compare pages</a>.
        </li>
      </ul>

      <h2>Contact</h2>
      <ul>
        <li>WhatsApp: <a href="https://wa.me/919993336616">+91 99933 36616</a></li>
        <li>Demo: <a href="/#demo">the form on the home page</a> (20 minutes; we convert one of your chapters live)</li>
        <li>Free lesson: <a href="https://learner.vacademy.io/try">learner.vacademy.io/try</a></li>
        <li>Parent company: <a href="https://vacademy.io">vacademy.io</a> · <a href="https://vacademy.io/privacy-policy">privacy policy</a></li>
      </ul>
    </PageShell>
  );
}

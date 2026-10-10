import { BlogShell, Callout, Figure, Sources, Steps, WhereTutezyFits, postMetadata, type FaqItem } from "@/components/BlogShell";

const SLUG = "turn-pdf-slides-into-interactive-lessons";
export const metadata = postMetadata(SLUG);

const faq: FaqItem[] = [
  [
    "How do I convert a PDF into an interactive lesson?",
    "Split the PDF into single ideas, write one question for each idea, add feedback and a hint for the most likely wrong answers, and give the learner a way to ask about what they see. AI tools can now draft this structure from the PDF itself. Clean the source first, set learning objectives, and review every number, diagram and answer key before learners see the result.",
  ],
  [
    "Can AI turn a PowerPoint into an interactive lesson?",
    "Yes, but slides are harder than they look, because bullets are fragments and the real explanation was spoken by the presenter. Add speaker notes to image-only or keyword-only slides before converting. Check which formats a tool accepts: H5P’s Smart Import, for example, lists PDF, DOCX and ODT documents but says PowerPoint files are not supported.",
  ],
  [
    "Can I make an interactive lesson from a recorded video?",
    "Yes. The video is transcribed and the transcript becomes the source for explanations and questions. Check the transcript for technical terms and names, and note every place where you said something like “as you can see here”, because the visual is not in the transcript and has to be described or redrawn.",
  ],
  [
    "Does scanned PDF quality matter for AI lesson generation?",
    "Yes. Scanned pages are read with optical character recognition, and the documentation for the open-source Tesseract OCR engine says it works best at 300 dpi or more and that skewed pages and dark scanning borders reduce accuracy. Rescan faint or crooked pages, and check every number and symbol in the output.",
  ],
  [
    "What makes a lesson interactive rather than just clickable?",
    "The learner has to produce something: answer a question, predict a result or explain a step, and then get feedback on it. Clicking next, flipping cards or watching an animation is not the same. A good interactive lesson asks after each idea, responds to the specific wrong answer, revisits what the learner missed and lets them ask their own question.",
  ],
  [
    "How long does it take to turn a course into interactive lessons with AI?",
    "Generation itself is fast; the time goes into preparing sources and reviewing the output. Plan to convert one unit first, review every check and diagram, pilot it with real learners, and fix what the pilot shows before converting the rest. With Tutezy, compiling runs at minutes per slide in the background, and a typical chapter is ready well within an hour.",
  ],
];

function PipelineDiagram() {
  const ink = "#151c2f";
  return (
    <svg viewBox="0 0 840 340" width="100%" role="img" aria-label="Pipeline diagram: source material such as PDFs, scanned PDFs, slide decks, videos, HTML documents and question banks is compiled into a teaching plan of topics, concepts, and board steps with a check, which is reviewed and recompiled as needed, and then taught as a live lesson that explains, asks, grades, hints, revisits and reports." style={{ fontFamily: "inherit" }}>
      <defs>
        <marker id="pl-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" fill={ink} />
        </marker>
      </defs>

      {/* Source material */}
      <rect x="8" y="46" width="180" height="248" rx="14" fill="#cfe5ff" stroke={ink} strokeWidth="2" />
      <text x="98" y="76" textAnchor="middle" fontFamily="inherit" fontSize="16" fontWeight="700" fill={ink}>Source material</text>
      {["PDF (text)", "Scanned PDF → OCR", "Slide deck + notes", "Video → transcript", "HTML document", "Question bank"].map((t, i) => (
        <text key={t} x="24" y={110 + i * 30} fontFamily="inherit" fontSize="14" fill={ink}>{t}</text>
      ))}

      <line x1="192" y1="170" x2="228" y2="170" stroke={ink} strokeWidth="2.5" markerEnd="url(#pl-arrow)" />

      {/* Teaching plan */}
      <rect x="234" y="14" width="352" height="312" rx="14" fill="#fbf8f2" stroke={ink} strokeWidth="2" />
      <text x="410" y="44" textAnchor="middle" fontFamily="inherit" fontSize="16" fontWeight="700" fill={ink}>Teaching plan</text>

      <rect x="248" y="64" width="108" height="58" rx="10" fill="#ffd84d" stroke={ink} strokeWidth="2" />
      <text x="302" y="90" textAnchor="middle" fontFamily="inherit" fontSize="14" fontWeight="700" fill={ink}>Topics</text>
      <text x="302" y="109" textAnchor="middle" fontFamily="inherit" fontSize="13" fill={ink}>one board each</text>

      <line x1="358" y1="93" x2="374" y2="93" stroke={ink} strokeWidth="2" markerEnd="url(#pl-arrow)" />

      <rect x="378" y="64" width="84" height="58" rx="10" fill="#ffffff" stroke={ink} strokeWidth="2" />
      <text x="420" y="90" textAnchor="middle" fontFamily="inherit" fontSize="14" fontWeight="700" fill={ink}>Concepts</text>
      <text x="420" y="109" textAnchor="middle" fontFamily="inherit" fontSize="13" fill={ink}>one idea</text>

      <line x1="464" y1="93" x2="480" y2="93" stroke={ink} strokeWidth="2" markerEnd="url(#pl-arrow)" />

      <rect x="484" y="64" width="88" height="58" rx="10" fill="#ffffff" stroke={ink} strokeWidth="2" />
      <text x="528" y="90" textAnchor="middle" fontFamily="inherit" fontSize="14" fontWeight="700" fill={ink}>Board</text>
      <text x="528" y="109" textAnchor="middle" fontFamily="inherit" fontSize="13" fill={ink}>steps</text>

      <line x1="528" y1="122" x2="528" y2="136" stroke={ink} strokeWidth="2" />
      <rect x="484" y="136" width="88" height="44" rx="10" fill="#ff6b1a" stroke={ink} strokeWidth="2" />
      <text x="528" y="163" textAnchor="middle" fontFamily="inherit" fontSize="14" fontWeight="700" fill={ink}>+ check</text>

      <text x="252" y="164" fontFamily="inherit" fontSize="13" fill={ink}>Each concept carries:</text>
      {["narration", "a question + expected answer", "rubric, hints, misconceptions"].map((t, i) => (
        <text key={t} x="262" y={188 + i * 22} fontFamily="inherit" fontSize="13" fill={ink}>· {t}</text>
      ))}

      {/* Review loop */}
      <rect x="252" y="262" width="320" height="46" rx="10" fill="#ffffff" stroke="#ff6b1a" strokeWidth="2" strokeDasharray="6 5" />
      <text x="412" y="290" textAnchor="middle" fontFamily="inherit" fontSize="14" fontWeight="700" fill={ink}>Review: preview, fix, recompile</text>

      <line x1="590" y1="170" x2="626" y2="170" stroke={ink} strokeWidth="2.5" markerEnd="url(#pl-arrow)" />

      {/* Live lesson */}
      <rect x="632" y="46" width="200" height="248" rx="14" fill="#17b890" stroke={ink} strokeWidth="2" />
      <text x="732" y="76" textAnchor="middle" fontFamily="inherit" fontSize="16" fontWeight="700" fill={ink}>Live lesson</text>
      {["Explain on the board", "Ask after each idea", "Grade the answer", "Hint, then re-explain", "Revisit weak ideas", "Report per learner"].map((t, i) => (
        <text key={t} x="648" y={110 + i * 30} fontFamily="inherit" fontSize="14" fill={ink}>{t}</text>
      ))}
    </svg>
  );
}

export default function Page() {
  return (
    <BlogShell
      slug={SLUG}
      lede="To convert a PDF, slide deck or video into an interactive lesson, split the material into single ideas, attach a question to each, write feedback and a hint for the likely wrong answers, and let the learner ask about what they see. AI can now draft most of that from files you already have. Your job is to clean the sources, set objectives, and review numbers, diagrams and checks before learners see them."
      takeaways={[
        <>
          <strong>Interactive means the learner answers.</strong> A question after each idea, feedback on the answer, a hint and a second explanation when it is wrong, and room to ask. Clicking next does not count.
        </>,
        <>
          <strong>The research backs it.</strong> A 225-study meta-analysis found students in lecture-based STEM classes were 1.5 times more likely to fail than those in active-learning classes.
        </>,
        <>
          <strong>Garbage in, garbage out.</strong> Rescan faint PDFs at 300 dpi or more, fix video transcripts, and add speaker notes to picture-only slides before you convert anything.
        </>,
        <>
          <strong>AI drafts, a human signs off.</strong> Numbers, formulas, diagrams, domain edge cases and the misconceptions your learners actually have need an expert’s eye.
        </>,
        <>
          <strong>Convert one unit first.</strong> Pilot it, read where learners fail the checks, fix the source and recompile. Then do the rest.
        </>,
      ]}
      toc={[
        ["what-interactive-means", "What “interactive” should mean"],
        ["step-by-step", "How to convert a PDF into an interactive lesson"],
        ["source-formats", "How each format converts"],
        ["ai-vs-human", "What AI does well, and what you must review"],
        ["pipeline", "What a conversion pipeline looks like"],
        ["writing-checks", "How to write checks that check something"],
        ["tools", "Tools for the job"],
      ]}
      faq={faq}
      demoTopic="newton-second-law"
    >
      <h2 id="what-interactive-means">What should “interactive” mean?</h2>
      <p>
        Most people searching for a way to convert a PDF to an interactive lesson have a pile of good material that learners skim and forget:
        handouts, slide decks, recorded lectures, question banks. The word “interactive” gets stretched to cover a “next” button, a flip card
        or an animation. Those are motion, not interaction.
      </p>
      <p>
        A useful definition comes from Chi and Wylie’s ICAP framework, published in <em>Educational Psychologist</em> in 2014. It sorts
        learning activities by what the learner visibly does: <strong>passive</strong> (receiving), <strong>active</strong> (manipulating,
        such as highlighting, pausing or picking from a menu), <strong>constructive</strong> (generating something beyond the material, such
        as a prediction or a self-explanation) and <strong>interactive</strong> (a dialogue with frequent turns where both sides contribute;
        the partner can be a computer agent that responds to the content). Their hypothesis, supported by the studies they review, is that
        learning increases in that order. Clicking through slides is passive. Even choosing an answer from a menu is, in their terms, only
        active.
      </p>
      <p>So for this guide, an interactive lesson has four ingredients:</p>
      <ol>
        <li><strong>A question after each idea</strong>, not a quiz at the end of the chapter.</li>
        <li><strong>Feedback on the actual answer</strong>, including why a specific wrong answer is wrong.</li>
        <li><strong>Remediation</strong>: a hint first, then a second explanation, then a return to the idea later if it stayed weak.</li>
        <li><strong>Room to ask</strong>: the learner can raise their own question about what is in front of them.</li>
      </ol>
      <p>
        The evidence behind these ingredients is solid. Freeman and colleagues’ 2014 meta-analysis in <em>PNAS</em> pooled 225 studies of
        undergraduate STEM courses. Average exam scores were about 6% higher under active learning, and students in traditional lectures were
        1.5 times more likely to fail. Separately, Roediger and Karpicke (2006, <em>Psychological Science</em>) showed the testing effect:
        students who practiced recalling a passage remembered substantially more two days and a week later than students who reread it, even
        though rereading made them more confident. A question after each idea is retrieval practice built into the lesson. For more ways
        to check, see <a href="/blog/checking-for-understanding-techniques/">Checking for understanding: 12 techniques that work online</a>.
      </p>

      <h2 id="step-by-step">How to convert a PDF into an interactive lesson, step by step</h2>
      <p>
        The same process works whether you use an authoring tool, an AI generator or a live AI tutor. Only the tool at step 5 changes.
      </p>
      <Steps
        items={[
          [
            "Audit what you have",
            <>List every asset for the course: PDFs, scans, decks, recordings, web pages, question banks. Note which is the most accurate and most current version of each topic. Conflicting sources produce conflicting lessons.</>,
          ],
          [
            "Pick one unit",
            <>Choose a unit where learners struggle and the material is stable. One chapter of 5 to 15 pages or slides is enough to learn the process.</>,
          ],
          [
            "Clean the sources",
            <>Rescan faint or crooked pages. Correct the video transcript’s technical terms. Add speaker notes to slides that are only pictures or keywords. Remove pages you would not teach from.</>,
          ],
          [
            "Write the objectives",
            <>Three to five lines of “by the end, the learner can…”, each one checkable. If you cannot write a question for an objective, it is not an objective yet.</>,
          ],
          [
            "Generate the draft",
            <>Let the tool split the unit into topics and concepts and draft explanations, diagrams, checks and hints. Keep the source attached so you can trace every claim.</>,
          ],
          [
            "Review boards, diagrams and checks",
            <>Read it as the learner would. Check every number, formula, label and answer key. Replace generic hints with the mistakes your learners really make.</>,
          ],
          [
            "Pilot with real learners",
            <>Give it to 15 to 20 learners from the actual audience, not colleagues. Watch where they fail checks, where they ask questions and where they stop.</>,
          ],
          [
            "Iterate, then scale",
            <>Fix the source or the check behind each problem and regenerate that part. Once the unit holds up, convert the next ones using what you learned.</>,
          ],
        ]}
      />

      <h2 id="source-formats">How each format converts</h2>
      <p>Different sources fail in different ways. Most of the preparation work is knowing which.</p>
      <div className="tbl">
        <table>
          <thead>
            <tr>
              <th>Format</th>
              <th>What the AI reads</th>
              <th>Prepare before converting</th>
              <th>Watch for</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>PDF with real text</td>
              <td>Text, headings, tables</td>
              <td>Remove cover pages, blank pages and answer keys you do not want surfaced</td>
              <td>Multi-column layouts and tables split across pages</td>
            </tr>
            <tr>
              <td>Scanned PDF</td>
              <td>Text recovered by OCR</td>
              <td>Scan at 300 dpi or more, pages straight, dark borders cropped</td>
              <td>Misread digits, symbols and subscripts; handwriting</td>
            </tr>
            <tr>
              <td>Slide deck</td>
              <td>Titles, bullets, speaker notes</td>
              <td>Add notes where a slide is only a picture or three words</td>
              <td>Bullets are fragments; the explanation was in your voice</td>
            </tr>
            <tr>
              <td>Recorded video</td>
              <td>The transcript</td>
              <td>Correct names and technical terms in the transcript</td>
              <td>“As you can see here”: the visual is not in the transcript</td>
            </tr>
            <tr>
              <td>HTML document</td>
              <td>Structured text, tables, embedded images</td>
              <td>Strip navigation, banners and unrelated links</td>
              <td>Images without alt text or captions</td>
            </tr>
            <tr>
              <td>Question bank</td>
              <td>Ready-made checks, keys and distractors</td>
              <td>Tag each question to a concept; fix wrong keys</td>
              <td>Distractors are misconceptions; use them as hints</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        On scans, the documentation for the open-source Tesseract OCR engine is blunt. It says the engine “works best on images which have a
        DPI of at least 300 dpi,” that skewed pages significantly reduce the quality of line segmentation, and that dark scanning borders can
        be misread as characters. Whatever OCR your tool uses, a crooked photocopy of a photocopy will produce errors, and the ones that do
        the most damage are in numbers, units and symbols.
      </p>

      <h2 id="ai-vs-human">What AI does well, and what a human must review</h2>
      <p>
        Generation is the fast part. Review is where lesson quality is decided. Split the work like this:
      </p>
      <div className="tbl">
        <table>
          <thead>
            <tr>
              <th>Part of the lesson</th>
              <th>AI drafts well</th>
              <th>A human must check</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Structure</td>
              <td>Splitting a chapter into topics and single ideas</td>
              <td>The order matches how you teach; nothing essential skipped</td>
            </tr>
            <tr>
              <td>Explanations</td>
              <td>Clear, plain wording at a stated level</td>
              <td>Your terminology, notation and method, not a textbook’s</td>
            </tr>
            <tr>
              <td>Numbers and formulas</td>
              <td>Typesetting and restating them</td>
              <td>Every value, sign, unit and worked step, especially after OCR</td>
            </tr>
            <tr>
              <td>Diagrams and images</td>
              <td>Simple structural diagrams; text descriptions of images</td>
              <td>Labels, arrows and scale; anything the narration points to</td>
            </tr>
            <tr>
              <td>Checks and answer keys</td>
              <td>Many candidate questions in several formats</td>
              <td>Exactly one defensible answer; a rubric for short answers</td>
            </tr>
            <tr>
              <td>Hints and misconceptions</td>
              <td>The common textbook errors</td>
              <td>The mistakes your learners actually make</td>
            </tr>
            <tr>
              <td>Domain edge cases</td>
              <td>The general rule</td>
              <td>Exceptions, version or jurisdiction differences, recent changes</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        The research on AI tutors points the same way. In the 2025 Harvard physics trial by Kestin and colleagues in <em>Scientific
        Reports</em>, the tutor’s accuracy came from step-by-step solutions the instructors wrote into its prompts, rather than from the model
        working problems out alone. Even dedicated generators state their limits: H5P’s help center says its Smart Import feature currently
        ignores mathematical equations, chemical reactions, physics numericals and diagrams. For how to keep a live tutor faithful to reviewed
        material, read <a href="/blog/ai-tutor-hallucinations-grounding/">Will an AI tutor make things up?</a>
      </p>

      <h2 id="pipeline">What a conversion pipeline looks like</h2>
      <p>
        Whatever tool you use, a sound pipeline turns sources into a reviewable plan before any learner sees a lesson. Tutezy is one example of
        this design, so the diagram uses its terms.
      </p>
      <Figure
        caption={
          <>
            From files to a live lesson. The teaching plan is the reviewable middle layer: topics (one board each), concepts (one idea each),
            and for each concept the board steps, narration and a check. Preview and fix it before any learner sees it.
          </>
        }
      >
        <PipelineDiagram />
      </Figure>
      <p>
        In Tutezy’s version, each slide or document is compiled once into that plan. Boards are built from a fixed set of operations
        (heading, bullet, formula, table, SVG diagram, image, highlight), and every image or diagram carries a text description so the teacher
        can refer to it. Checks can be multiple choice, short answer or predict-then-reveal, each with an expected answer, a rubric and hints
        for common misconceptions. You see the credit cost per slide before converting, preview any board exactly as a learner will see it,
        and recompile a slide after fixing its source. Concept ids stay stable across recompiles, so learner progress is not lost. The full
        mechanism is on <a href="/how-it-works/">how it works</a>.
      </p>

      <h2 id="writing-checks">How to write checks that check something</h2>
      <p>
        Checks are where a converted lesson earns the word “interactive” or loses it. “Did that make sense?” and “Which of these is
        Newton’s second law?” test politeness and recognition, not understanding. A good check makes the learner use the idea once.
      </p>
      <Callout title="A worked check: Newton’s second law" tone="tip">
        <p>
          <strong>Concept:</strong> with the same net force, acceleration is inversely proportional to mass (F = m × a).
        </p>
        <p>
          <strong>Check (predict-then-reveal):</strong> “A cart speeds up at 2 m/s² when you push it. You load it so its mass doubles and
          push exactly as hard. What is its acceleration now?”
        </p>
        <p>
          <strong>Expected answer:</strong> 1 m/s². <strong>Rubric:</strong> full credit for “halves” with the number; partial for “halves”
          alone.
        </p>
        <p>
          <strong>Misconception and hint:</strong> “4 m/s², it doubles” suggests the learner multiplied instead of dividing. Hint: “The
          push is the same. Is a heavier cart easier or harder to speed up?”
        </p>
      </Callout>
      <ul>
        <li><strong>One idea per check.</strong> If a wrong answer could come from two different confusions, you cannot target the hint.</li>
        <li><strong>Ask for a prediction or a next step</strong>, not a definition. Applying the idea is the test, and producing an answer beats picking one.</li>
        <li><strong>Write the expected answer and a rubric</strong> for any open question, or no reviewer, human or AI, can grade it consistently.</li>
        <li><strong>Mine your question bank for distractors.</strong> Each popular wrong option is a misconception that deserves its own hint.</li>
        <li><strong>Cap the remediation.</strong> A hint, then the answer with an explanation, then move on and come back later. Nobody should be stuck in a loop.</li>
      </ul>

      <h2 id="tools">Tools for turning slides into interactive lessons</h2>
      <p>There are two broad kinds of tool, and they produce different things.</p>
      <p>
        <strong>Authoring tools</strong> produce interactive content that you publish and host. One open example is H5P, which describes
        itself as “a completely free and open technology, licensed with the MIT license,” with content types such as Course Presentation
        (multiple choice, fill-in-the-blank and other interactions added to slides) and Interactive Video (the same kinds of questions and
        pop-up text added to a video). On H5P.com, the paid hosted service, a feature called Smart Import uses AI to generate H5P content
        from documents, audio and video. As of September 2026, H5P’s help center says it works best on declarative, factual material,
        accepts PDF, DOCX and ODT documents but not PowerPoint, and fully supports English and Spanish. The result is authored content: every
        learner sees the same questions, with feedback written in advance.
      </p>
      <p>
        <strong>Live AI tutors</strong> produce a lesson that is taught, not published. The plan is prepared from your material, but the
        conversation happens live, so the tutor can react to a specific wrong answer, answer a doubt and revisit a weak idea for that one
        learner. The trade-off is a per-minute running cost instead of a one-time build, and a runtime you rely on rather than a file you
        own. If you are deciding how that fits into a course you already sell, see{" "}
        <a href="/blog/add-ai-tutor-to-online-course/">How to add an AI tutor to your online course</a>.
      </p>
      <p>
        You can use both: authored interactions for short practice sets, a live tutor for the chapters where learners get stuck. Either
        way, the preparation and review steps above are the same, and they are where most of the quality comes from.
      </p>

      <WhereTutezyFits>
        <p>
          Tutezy is a live AI tutor built on this pipeline. It compiles your PDFs (scanned ones are OCR-ed), recorded videos (transcribed),
          slide decks, HTML documents and question banks into a teaching plan of topics, concepts, board steps, narration, checks, hints and
          misconceptions. You preview every board before a learner sees it and recompile anything you tighten. Each learner is then taught one
          to one on a whiteboard, by voice or text, with a check after every concept and weak ideas revisited. Compiling a typical 40-slide
          course costs under $2.50 in credits; live lessons are $0.03 per learner-minute. See{" "}
          <a href="/for/course-creators/">Tutezy for course creators</a> and the <a href="/pricing/">pricing page</a>.
        </p>
        <p>
          Where it does not fit: it is a live runtime, not an authoring tool, so nothing is pre-rendered into a file you can host elsewhere;
          lessons run inside the Vacademy learner app on web, Android and iOS. It teaches in English and Hindi only. A bad scan still needs rescanning, and material that exists only in your
          head has to be written or recorded first.
        </p>
      </WhereTutezyFits>

      <Sources
        items={[
          ["Chi, M. T. H., & Wylie, R. (2014). The ICAP framework: Linking cognitive engagement to active learning outcomes. Educational Psychologist, 49(4), 219–243.", "https://doi.org/10.1080/00461520.2014.965823"],
          ["Freeman, S., Eddy, S. L., McDonough, M., Smith, M. K., Okoroafor, N., Jordt, H., & Wenderoth, M. P. (2014). Active learning increases student performance in science, engineering, and mathematics. PNAS, 111(23), 8410–8415.", "https://doi.org/10.1073/pnas.1319030111"],
          ["Roediger, H. L., & Karpicke, J. D. (2006). Test-enhanced learning: Taking memory tests improves long-term retention. Psychological Science, 17(3), 249–255.", "https://doi.org/10.1111/j.1467-9280.2006.01693.x"],
          ["Kestin, G., Miller, K., Klales, A., Milbourne, T., & Ponti, G. (2025). AI tutoring outperforms in-class active learning: an RCT introducing a novel research-based design in an authentic educational setting. Scientific Reports, 15, 17458.", "https://doi.org/10.1038/s41598-025-97652-6"],
          ["Tesseract OCR. Improving the quality of the output (documentation).", "https://tesseract-ocr.github.io/tessdoc/ImproveQuality.html"],
          ["H5P. Smart Import introduction (help center article, updated September 2, 2026).", "https://help.h5p.com/hc/en-us/articles/8229514747805-Smart-Import-Introduction-and-Video-Tutorial"],
          ["H5P. Create and share rich HTML5 content and applications.", "https://h5p.org/"],
        ]}
      />
    </BlogShell>
  );
}

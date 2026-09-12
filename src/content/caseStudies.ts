/**
 * Proof points shown on the home page. The section renders NOTHING while this
 * array is empty — never publish placeholder numbers. Fill each entry from real
 * usage (tutor insights / credit ledger) and keep the source note.
 */
export interface CaseStudy {
  /** Anonymised label, e.g. "A 500-student NEET institute, Indore". */
  who: string;
  /** What they run on Tutezy, one line. */
  use: string;
  /** Three headline numbers, each with a short label. */
  stats: Array<{ value: string; label: string }>;
  /** One sentence in the customer's words (optional). */
  quote?: string;
  /** Where the numbers came from + date, for our own audit. Not rendered. */
  source: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  // Example shape — replace with real figures before uncommenting:
  // {
  //   who: "A 500-student NEET institute",
  //   use: "Post-test solution sessions every Monday",
  //   stats: [
  //     { value: "9,400", label: "learner-minutes in week one" },
  //     { value: "61%", label: "of students opened a session" },
  //     { value: "12", label: "weak concepts surfaced to faculty" },
  //   ],
  //   quote: "Students walk into Tuesday's class with their doubts already narrowed.",
  //   source: "tutor insights export, institute <id>, 2026-09-xx",
  // },
];

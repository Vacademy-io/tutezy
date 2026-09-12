/**
 * One registry of every public page. Feeds the sitemap, the footer, the
 * "Guides" section on the home page and the breadcrumbs, so a page cannot
 * exist without being linked and listed.
 */
export const SITE = "https://tutezy.ai";
export const SITE_NAME = "Tutezy by Vacademy";

/**
 * Calendly event link for "Book a call". Empty string = not set yet; every
 * CTA then falls back to the demo form. Set once and every button follows.
 */
export const CALENDLY_URL = "";
export const bookHref = () => CALENDLY_URL || "/#demo";
export const SALES_EMAIL = "hello@tutezy.ai";
/** Owner decision 2026-09-12: US-first. Calls are taken in this window, stated plainly. */
export const HOURS_COPY = "We're in India. Calls run 9:30 am–3:30 pm ET (7 pm–1 am IST), Monday to Friday.";

export type PageGroup = "product" | "audience" | "compare";

export interface SitePage {
  path: string;
  /** Short label for nav/footer. */
  label: string;
  /** <title> without the site suffix. */
  title: string;
  description: string;
  group: PageGroup;
}

export const PAGES: SitePage[] = [
  // Product
  { path: "/what-is-tutezy/", label: "What is Tutezy?", title: "What is Tutezy? A live AI teacher from your own content", description: "Tutezy is a live AI tutor for institutes and educators: it turns existing PDFs, videos and slides into one-to-one whiteboard lessons taught in the teacher's voice, with checks, revisits and reports. Plain-language overview.", group: "product" },
  { path: "/how-it-works/", label: "How it works", title: "How Tutezy works: compile once, teach every student live", description: "The two halves of Tutezy: a compile step that turns each slide into a teaching plan, and a live runtime that teaches it one to one with a whiteboard, voice, questions, hints and remediation.", group: "product" },
  { path: "/pricing/", label: "Pricing", title: "Tutezy pricing: ₹3 / $0.03 per learner-minute, no seats", description: "Tutezy pricing in INR and USD: live lessons at ₹3 ($0.03) per learner-minute, ₹5 ($0.05) with the animated avatar, voice clone ₹2,000 ($20), custom avatar ₹10,000 ($100). Worked examples and what is included.", group: "product" },
  { path: "/hindi-ai-tutor/", label: "Hindi AI tutor", title: "Hindi AI tutor: live lessons in हिंदी and English", description: "Tutezy teaches in Hindi and English. Boards and narration are compiled in both, so a student can switch language mid-lesson without losing the thread. For Hindi-medium and bilingual institutes.", group: "product" },
  { path: "/faq/", label: "FAQ", title: "Tutezy FAQ: 30 questions institutes ask", description: "Straight answers on content, languages, pricing, teacher likeness and consent, student apps, data, accuracy, exams, and how Tutezy differs from a chatbot.", group: "product" },
  { path: "/security/", label: "Security & consent", title: "Security, privacy and voice consent at Tutezy", description: "How Tutezy handles your content, student data and teacher likeness: data stays yours, no model training on customer data, voice cloning only with written consent and deletable on request, what the live model can and cannot do.", group: "product" },
  { path: "/about/", label: "About", title: "About Tutezy and Vacademy", description: "Tutezy is built by Vacademy, the education operating system used by coaching institutes, schools and training companies for courses, tests, live classes and CRM. Who we are and how to reach us.", group: "product" },
  // Audiences
  { path: "/for/coaching-institutes/", label: "Coaching & test-prep", title: "AI tutor for coaching institutes: NEET, JEE, UPSC", description: "Give every student in a coaching batch a one-to-one teacher for doubts, post-test solution sessions and revision, in the institute's own teacher's voice, at ₹3 per learner-minute.", group: "audience" },
  { path: "/for/schools/", label: "K-12 schools", title: "AI tutor for schools: one-to-one help for every child", description: "Tutezy gives K-12 schools a patient one-to-one teacher for homework help, practice and revision after school hours, built from the school's own material and reported back to teachers.", group: "audience" },
  { path: "/for/course-creators/", label: "Course creators", title: "AI tutor for course creators and platforms", description: "Sell recorded courses with a live AI mentor included. Tutezy turns each chapter into a lesson the student can question, and reports who understood what.", group: "audience" },
  { path: "/for/corporate-training/", label: "Corporate & HR", title: "AI trainer for corporate and HR training", description: "Onboarding, compliance, product and skills training taught one to one by an AI trainer built from your own decks and videos, with a record of who understood what.", group: "audience" },
  { path: "/for/tutors/", label: "Independent tutors", title: "AI tutor for independent tutors and educators", description: "Scale one-to-one teaching beyond your live hours: Tutezy handles homework help, practice and revision in your voice, and tells you who needs you in person.", group: "audience" },
  { path: "/for/universities/", label: "Universities", title: "AI tutor for universities and colleges", description: "A teaching assistant per subject or programme, built from the faculty's own notes and slides, that teaches on a whiteboard and checks understanding.", group: "audience" },
  // Compare
  { path: "/compare/", label: "Compare", title: "Tutezy vs ChatGPT, Khanmigo, recorded courses, human tutors", description: "How Tutezy differs from general chatbots, consumer AI tutors, recorded video courses and one-to-one human tutoring, with the honest cases where each is the better choice.", group: "compare" },
  { path: "/compare/tutezy-vs-chatgpt/", label: "Tutezy vs ChatGPT", title: "Tutezy vs ChatGPT for teaching students", description: "A general chatbot answers what it is asked. Tutezy teaches a syllabus: your content, a whiteboard, questions, remediation, and reports to the institute. When each is the right tool.", group: "compare" },
  { path: "/compare/tutezy-vs-khanmigo/", label: "Tutezy vs Khanmigo", title: "Tutezy vs Khanmigo: your content vs a fixed curriculum", description: "Khanmigo tutors on Khan Academy's own curriculum for individual learners. Tutezy teaches an institute's own material in its teacher's voice and reports back. The difference, explained.", group: "compare" },
  { path: "/compare/tutezy-vs-recorded-courses/", label: "Tutezy vs recorded courses", title: "Tutezy vs recorded video courses", description: "A recorded course cannot ask a question or notice confusion. Tutezy turns the same material into a lesson that checks understanding and comes back to weak spots.", group: "compare" },
  { path: "/compare/tutezy-vs-human-tutoring/", label: "Tutezy vs human tutoring", title: "Tutezy vs one-to-one human tutoring", description: "Human tutors are irreplaceable for judgment and motivation, and expensive per hour. Tutezy covers the repetitive one-to-one work between live sessions at ₹3 a minute.", group: "compare" },
];

export const byGroup = (g: PageGroup) => PAGES.filter((p) => p.group === g);
export const findPage = (path: string) => PAGES.find((p) => p.path === path);

/** Sections on the home page that other pages deep-link to. */
export const HOME_ANCHORS = [
  ["/#how", "How it works"],
  ["/#features", "Inside a lesson"],
  ["/#usecases", "Use cases"],
  ["/#create", "Setup"],
  ["/#pricing", "Pricing"],
  ["/#faq", "FAQ"],
] as const;

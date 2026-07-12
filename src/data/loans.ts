export interface LoanProductData {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  heroTitle: string;
  heroSubtitle: string;
  intro: string;
  uses: { title: string; description: string }[];
  whoFor?: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
}

const standardEligibility = [
  "Be at least 21 years old to apply.",
  "Be an Australian citizen, permanent resident, or hold a valid Australian visa.",
  "Be enrolled in (or accepted into) a Squad Institute program — you can apply before you're enrolled.",
  "Be able to verify your identity with basic documentation.",
];

export const loanProducts: LoanProductData[] = [
  {
    slug: "career-sponsorship",
    name: "Career Sponsorship",
    shortName: "Career Sponsorship",
    tagline: "Start your Squad Institute placement program now.",
    heroTitle: "Start now.\nFocus on the work.",
    heroSubtitle:
      "A simple plan that supports your Squad Institute placement program — so you can focus on launching your career.",
    intro:
      "The Career Sponsorship is built specifically for The Squad Institute's placement program. It's designed to make starting straightforward — so cost isn't the thing standing between you and the role you want.",
    uses: [
      { title: "Program tuition", description: "Coverage for your Squad Institute placement program, paid direct to the Institute." },
      { title: "Equipment & setup", description: "Laptop, software licences, and the tools you need to do real client work." },
      { title: "Living runway", description: "A small buffer for the months you're upskilling and interviewing." },
    ],
    whoFor: [
      { title: "Career changers", description: "Moving from a stuck industry into Product, BA, or delivery work." },
      { title: "Recent grads", description: "A degree without the experience employers actually ask for." },
      { title: "Returners", description: "Coming back to work after a break and needing a clear runway." },
    ],
    faqs: [
      {
        question: "Do I have to be enrolled in The Squad Institute to apply?",
        answer:
          "No — you can apply before you're enrolled. We can approve your application subject to verification.",
      },
      {
        question: "How fast is the application?",
        answer:
          "Most decisions are made the same business day. Once accepted, your enrolment is set up shortly after.",
      },
      {
        question: "What if my circumstances change?",
        answer:
          "Contact us early. We have a hardship process and will work with you on alternative arrangements where possible.",
      },
    ],
  },
];

export const standardEligibilityList = standardEligibility;

export const standardSteps = [
  {
    title: "Apply online",
    description: "A short, secure application — most people finish in under 10 minutes. You don't need to be enrolled in The Squad Institute yet.",
  },
  {
    title: "Quick assessment",
    description: "We review your details and may pre-approve your plan, often within the same business day.",
  },
  {
    title: "Get started",
    description: "Once you accept your plan and your enrolment is confirmed, you're set up to start the program.",
  },
];

export const repaymentNarrative =
  "Applying does not guarantee approval. Approval is subject to verification and Squad Institute admission requirements.";

export const getLoanBySlug = (slug: string | undefined) =>
  loanProducts.find((l) => l.slug === slug);

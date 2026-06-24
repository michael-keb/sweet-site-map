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
    tagline: "A plan designed for The Squad Institute placement program.",
    heroTitle: "Support for your\nprogram costs.",
    heroSubtitle:
      "A straightforward option for eligible participants to manage Squad Institute placement program fees, subject to application and approval.",
    intro:
      "The Career Sponsorship is offered for those joining The Squad Institute's placement program. It is designed to help eligible applicants manage program-related costs, so you can focus on your training.",
    uses: [
      { title: "Program tuition", description: "Can be used towards your Squad Institute placement program fees, paid directly to the Institute if approved." },
      { title: "Equipment & setup", description: "May cover eligible items such as a laptop and software licences to support your training." },
      { title: "Living support", description: "Can provide a buffer for living expenses while you complete the program, subject to approval." },
    ],
    whoFor: [
      { title: "Career changers", description: "For those looking to move into Product, BA, or delivery roles." },
      { title: "Recent graduates", description: "For those who want to build practical experience alongside their studies." },
      { title: "Returners", description: "For those returning to work after a break and looking for a structured pathway." },
    ],
    faqs: [
      {
        question: "Do I have to be enrolled in The Squad Institute to apply?",
        answer:
          "No — you can apply before you're enrolled. Approval may be offered subject to verification and meeting all eligibility requirements.",
      },
      {
        question: "How fast is the application?",
        answer:
          "Many applications are assessed within the same business day, though some may take longer depending on individual circumstances. Enrolment is finalised only after full approval.",
      },
      {
        question: "What if my circumstances change?",
        answer:
          "Contact us as soon as possible. We have a hardship process and will work with you on alternative arrangements where available.",
      },
    ],
  },
];

export const standardEligibilityList = standardEligibility;

export const standardSteps = [
  {
    title: "Apply online",
    description: "A short, secure application that typically takes around 10 minutes. You do not need to be enrolled in The Squad Institute to apply.",
  },
  {
    title: "Assessment",
    description: "We review your details and may offer approval, subject to verification and meeting all eligibility requirements.",
  },
  {
    title: "Get started",
    description: "If your plan is approved and your enrolment is confirmed, you can begin the program.",
  },
];

export const repaymentNarrative =
  "Applying does not guarantee approval. Approval is subject to verification and Squad Institute admission requirements.";

export const getLoanBySlug = (slug: string | undefined) =>
  loanProducts.find((l) => l.slug === slug);

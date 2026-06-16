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
    tagline: "Finance for your Squad Institute work experience training.",
    heroTitle: "Finance your\nwork experience training.",
    heroSubtitle:
      "$20,000 flat funding for your Squad Institute placement program — tuition, setup, and living support while you train. Subject to application and approval.",
    intro:
      "The Career Sponsorship helps eligible applicants finance their work experience training at The Squad Institute — so you can focus on learning, not how to pay for it. Interest rate: Free when paid on time.",
    uses: [
      {
        title: "Training fees",
        description:
          "Can be used towards your Squad Institute work experience training fees, paid directly to the Institute if approved.",
      },
      {
        title: "Equipment & setup",
        description:
          "May cover eligible items such as a laptop and software licences to support your training.",
      },
      {
        title: "Living support",
        description:
          "Can provide a buffer for living expenses while you complete your training, subject to approval.",
      },
    ],
    whoFor: [
      {
        title: "Career changers",
        description: "For those looking to move into Product, BA, or delivery roles.",
      },
      {
        title: "Recent graduates",
        description: "For those who want to build practical experience alongside their studies.",
      },
      {
        title: "Returners",
        description: "For those returning to work after a break and looking for a structured pathway.",
      },
    ],
    faqs: [
      {
        question: "Do I have to be enrolled in The Squad Institute to apply?",
        answer:
          "No — you can apply before you're enrolled. Pre-approval may be offered subject to verification and meeting all eligibility requirements.",
      },
      {
        question: "How do repayments work?",
        answer:
          "You repay in equal weekly or fortnightly instalments over an initial 12-month period. An admin fee applies if repayments extend beyond that period. See our repayment examples for illustrations.",
      },
      {
        question: "Am I eligible if I'm on a temporary visa?",
        answer:
          "You may be eligible if you hold a valid Australian visa and meet our other criteria. We assess visa type and validity as part of the application.",
      },
      {
        question: "How fast is the application?",
        answer:
          "Many applications are assessed within the same business day, though some may take longer depending on individual circumstances.",
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
    description:
      "A short, secure application that typically takes around 10 minutes. You do not need to be enrolled in The Squad Institute to apply.",
  },
  {
    title: "Assessment",
    description:
      "We review your details and may offer a pre-approval, subject to verification and meeting all eligibility requirements.",
  },
  {
    title: "Get started",
    description:
      "If your plan is approved and you meet graduation requirements, you can begin your work experience training.",
  },
];

export const repaymentNarrative =
  "You repay in equal weekly or fortnightly instalments over an initial 12-month period. An admin fee applies if repayments extend beyond that period.";

export const getLoanBySlug = (slug: string | undefined) =>
  loanProducts.find((l) => l.slug === slug);

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
  "Be at least 18 years old.",
  "Be an Australian citizen, permanent resident, or hold a valid Australian visa (we assess visa type and validity as part of the application).",
  "Be enrolled in (or accepted into) a Squad Institute program — you can apply before you're enrolled and receive pre-approval.",
  "Be able to verify your income and identity with basic documentation.",
];

export const loanProducts: LoanProductData[] = [
  {
    slug: "career-launch-plan",
    name: "Career Launch Plan",
    shortName: "Career Launch",
    tagline: "Start your Squad Institute placement program now. Pay it off in instalments.",
    heroTitle: "Start now.\nPay in instalments.",
    heroSubtitle:
      "Split your Squad Institute placement program fee into weekly or fortnightly instalments — up to $20,000. Interest Rate: Free when you pay on time.",
    intro:
      "The Career Launch Plan is a Buy Now Pay Later option built specifically for The Squad Institute's job placement program. We pay your program fee upfront — directly to the Institute — and you pay it back in equal weekly or fortnightly instalments over 12 months. An admin fee will be charged if repayments extend beyond the initial 12-month period.",
    uses: [
      { title: "Program tuition", description: "Full coverage of your Squad Institute placement program fee, paid direct to the Institute." },
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
          "No — you can apply before you're enrolled. We can pre-approve your application subject to verification. Final approval is conditional on meeting Squad Institute admission and graduation requirements as set out in your credit contract.",
      },
      {
        question: "When does my first instalment come out?",
        answer:
          "Your first instalment is debited two weeks after we settle your program fee with the Institute. From there, instalments run weekly or fortnightly (your choice) until the plan is paid off.",
      },
      {
        question: "What if I don't get placed at the end of the program?",
        answer:
          "Squad Institute's model is built around real client work, not just a hiring promise. If your circumstances change, contact us early — we have a hardship process and will work with you on alternative arrangements.",
      },
      {
        question: "Is there really no interest?",
        answer:
          "Correct — Interest Rate: Free. You repay in equal weekly or fortnightly instalments over 12 months. An admin fee will be charged if repayments extend beyond the initial 12-month period. A $50 dishonour fee may apply if a scheduled instalment fails. Everything is shown to you before you accept the plan.",
      },
    ],
  },
];

export const standardEligibilityList = standardEligibility;

export const standardSteps = [
  {
    title: "Apply online (before or after enrolment)",
    description: "A short, secure application — most people finish in under 10 minutes. You don't need to be enrolled in The Squad Institute yet.",
  },
  {
    title: "Pre-approval & quick assessment",
    description: "We review your details and may pre-approve your plan subject to verification, often within the same business day.",
  },
  {
    title: "We pay the Institute, you pay us back",
    description: "Once you accept your plan and your enrolment is confirmed, your program fees settle with the Institute and weekly or fortnightly instalments begin.",
  },
];

export const repaymentNarrative =
  "You repay in equal weekly or fortnightly instalments over 12 months. An admin fee will be charged if repayments extend beyond the initial 12-month period. Applying for finance does not guarantee final approval — final loan approval is subject to meeting Squad Institute graduation requirements as set out in your credit contract.";

export const getLoanBySlug = (slug: string | undefined) =>
  loanProducts.find((l) => l.slug === slug);

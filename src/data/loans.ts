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
  "Be an Australian citizen or permanent resident.",
  "Be at least 18 years old.",
  "Be enrolled in (or accepted into) a Squad Institute program.",
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
      "Split your Squad Institute placement program fee into fortnightly instalments from $5,000 to $20,000. 0% interest when you pay on time.",
    intro:
      "The Career Launch Plan is a Buy Now Pay Later option built specifically for The Squad Institute's job placement program. We pay your program fee upfront — directly to the Institute — and you pay it back in equal fortnightly instalments over 6 to 24 months. No interest if you stick to the schedule.",
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
          "Yes. This plan is purpose-built to fund Squad Institute programs. We verify your enrolment or offer of placement as part of the application.",
      },
      {
        question: "When does my first instalment come out?",
        answer:
          "Your first instalment is debited two weeks after we settle your program fee with the Institute. From there, instalments run fortnightly until the plan is paid off.",
      },
      {
        question: "What if I don't get placed at the end of the program?",
        answer:
          "Squad Institute's model is built around real client work, not just a hiring promise. If your circumstances change, contact us early — we have a hardship process and will work with you on alternative arrangements.",
      },
      {
        question: "Is there really no interest?",
        answer:
          "Correct — there's no interest if you pay on time. We charge a small, transparent account-keeping fee that's disclosed upfront. Late instalments may incur a fee. Everything is shown to you before you accept the plan.",
      },
    ],
  },
  {
    slug: "career-advancement-plan",
    name: "Career Advancement Plan",
    shortName: "Advancement",
    tagline: "Already working? Split the upskilling that gets you the next title.",
    heroTitle: "Level up.\nPay in instalments.",
    heroSubtitle:
      "Spread Squad Institute advancement programs — Product Owner, Business Analyst, senior delivery — across fortnightly instalments. $5,000 – $20,000. 0% interest when you pay on time.",
    intro:
      "You're already in the workforce and ready for the next role. The Career Advancement Plan is a Buy Now Pay Later option that funds your Squad Institute upskilling program upfront and lets you repay it in fortnightly instalments — typically over 6 to 18 months — without dipping into your savings or waiting for an employer to pay.",
    uses: [
      { title: "Advancement tracks", description: "Product Owner, Business Analyst, and delivery leadership programs." },
      { title: "Mentoring & coaching", description: "1:1 mentoring blocks and interview preparation." },
      { title: "Certifications", description: "Industry credentials that pair with your Squad portfolio." },
    ],
    faqs: [
      {
        question: "Can my employer reimburse me later?",
        answer:
          "Yes. Many of our customers get partial reimbursement once they're in a new role. The plan stays the same — you can make extra payments at any time, with no penalty.",
      },
      {
        question: "How is this different from the Career Launch Plan?",
        answer:
          "Career Launch is built for people moving into the industry. Advancement is for people already employed who are levelling up — typically a shorter program and a faster repayment runway.",
      },
      {
        question: "Can I pay it off early?",
        answer:
          "Always. No penalty, no fee. Pay it down the moment your new salary kicks in.",
      },
    ],
  },
];

export const standardEligibilityList = standardEligibility;

export const standardSteps = [
  {
    title: "Apply online",
    description: "A short, secure application — most people finish in under 10 minutes.",
  },
  {
    title: "Quick assessment",
    description: "We review your details and your Squad Institute enrolment, often within the same business day.",
  },
  {
    title: "We pay the Institute, you pay us back",
    description: "Once you accept your plan, your program fees settle with the Institute and instalments begin fortnightly.",
  },
];

export const getLoanBySlug = (slug: string | undefined) =>
  loanProducts.find((l) => l.slug === slug);

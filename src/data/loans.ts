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
    slug: "career-launch-loan",
    name: "Career Launch Loan",
    shortName: "Career Launch",
    tagline: "Finance your Squad Institute placement program and start earning sooner.",
    heroTitle: "Fund the program.\nLand the role.",
    heroSubtitle:
      "Borrow $5,000 – $20,000 to cover your Squad Institute job placement program. Pay it back once you're placed and earning.",
    intro:
      "The Squad Institute Career Launch Loan exists for one purpose: to remove cost as the reason you didn't take the leap. We finance the full program fee — mentoring, placement, real client work — so you can focus on getting hired, not on whether you can afford to start.",
    uses: [
      { title: "Program tuition", description: "Full or partial coverage of your Squad Institute placement program fees." },
      { title: "Equipment & setup", description: "Laptop, software licences, and the tools you need to do client work." },
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
        answer: "Yes. This loan is purpose-built to finance Squad Institute programs. We'll verify your enrolment or offer of placement as part of the application.",
      },
      {
        question: "When do repayments start?",
        answer: "Repayments begin once your loan is funded, but we structure terms so the heaviest repayment weight falls after you're placed. Talk to us about timing if you're mid-program.",
      },
      {
        question: "What if I don't get placed?",
        answer: "Squad Institute's placement model is built around real client work, not just a hiring promise. If your circumstances change, contact us early — we have a hardship process and will work with you on alternative arrangements.",
      },
    ],
  },
  {
    slug: "career-advancement-loan",
    name: "Career Advancement Loan",
    shortName: "Advancement",
    tagline: "Already working? Finance the upskilling that gets you the next title.",
    heroTitle: "The next role,\nfunded.",
    heroSubtitle:
      "Borrow $5,000 – $20,000 to fund Squad Institute advancement programs — Product Owner, Business Analyst, and senior delivery tracks.",
    intro:
      "You're already in the workforce. You don't need a degree — you need the credentials, exposure, and portfolio to step up. The Career Advancement Loan funds the Squad Institute programs that close that gap, so you can move into Product Owner, Business Analyst, or senior delivery roles without draining your savings or waiting for an employer to pay.",
    uses: [
      { title: "Advancement tracks", description: "Product Owner, Business Analyst, and delivery leadership programs." },
      { title: "Mentoring & coaching", description: "1:1 mentoring blocks and interview preparation." },
      { title: "Certifications", description: "Industry credentials that pair with your Squad portfolio." },
    ],
    faqs: [
      {
        question: "Can my employer pay this off later?",
        answer: "Yes. Many of our customers get partial reimbursement once placed in a new role. Repayment structure stays the same — extra payments are welcome at any time with no penalty.",
      },
      {
        question: "How is this different from the Career Launch Loan?",
        answer: "Career Launch is built for people moving into the industry. Advancement is for people already employed who are levelling up — typically with a shorter program and a faster repayment runway.",
      },
      {
        question: "Can I repay early?",
        answer: "Always. No penalty, no fee. Pay it down the moment your new salary kicks in.",
      },
    ],
  },
];

export const standardEligibilityList = standardEligibility;

export const standardSteps = [
  { title: "Apply online", description: "A short, secure application — most people finish in under 10 minutes." },
  { title: "Quick assessment", description: "We review your details and your Squad Institute enrolment, often within the same business day." },
  { title: "Funds to your program", description: "Once you accept your contract, your program fees are settled and any balance lands in your account within 24 hours." },
];

export const getLoanBySlug = (slug: string | undefined) =>
  loanProducts.find((l) => l.slug === slug);

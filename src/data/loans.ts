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
  "Be able to verify your income and identity with basic documentation.",
];

export const loanProducts: LoanProductData[] = [
  {
    slug: "personal-loans",
    name: "Personal Loans",
    shortName: "Personal",
    tagline: "Flexible personal loans tailored to your needs—fast and hassle-free.",
    heroTitle: "Personal Loans.\nFast. Honest. Yours.",
    heroSubtitle: "Borrow $2,001 – $5,000 for life's unexpected moments. Decisions in hours, not weeks.",
    intro:
      "Life is full of surprises. An emergency car repair, a medical bill, a one-off purchase you can't put off. Squad Finance personal loans are built for those moments — small, transparent, and fast — so you stay in control of your finances rather than the other way around.",
    uses: [
      { title: "Emergency repairs", description: "Fix your car, appliances, or home without delay." },
      { title: "Medical bills", description: "Manage unexpected health costs with confidence." },
      { title: "Large purchases", description: "Fund a one-off item that just can't wait." },
    ],
    faqs: [
      {
        question: "What types of expenses are best suited for a personal loan?",
        answer: "Personal loans are ideal for one-off costs like emergency medical bills, car repairs, or a planned purchase. They're not designed for ongoing or recurring expenses.",
      },
      {
        question: "How quickly can I access funds after approval?",
        answer: "Once you accept your contract, funds are typically disbursed within 24 hours, provided your bank supports PayID or Osko payments.",
      },
      {
        question: "Does applying affect my credit score?",
        answer: "Submitting an application may involve a credit check. We take a customer-focused view that considers more than just your score, and consistent repayments can help strengthen your credit profile over time.",
      },
      {
        question: "Are there any restrictions on how I use the funds?",
        answer: "Once approved, you choose. Use the funds for the purpose you applied for — repairs, bills, or a planned purchase.",
      },
    ],
  },
  {
    slug: "dental-loans",
    name: "Dental Loans",
    shortName: "Dental",
    tagline: "Affordable dental loans for a healthy, confident smile.",
    heroTitle: "Dental Care\nWithout the Wait.",
    heroSubtitle: "Finance essential and cosmetic dentistry from $2,001 – $5,000. Funds in as little as 24 hours.",
    intro:
      "Your oral health shouldn't have to wait because of cost. Squad Finance dental loans help Australians cover essential and cosmetic treatments — fillings, crowns, braces, implants, whitening — with flexible repayments that fit your budget.",
    uses: [
      { title: "Emergency dental work", description: "Treat pain or damage immediately, not 'when you can afford it'." },
      { title: "Orthodontics", description: "Cover braces, aligners, and follow-up visits in one plan." },
      { title: "Cosmetic dentistry", description: "Whitening, veneers, or implants to restore your confidence." },
    ],
    faqs: [
      {
        question: "What treatments can I fund with a dental loan?",
        answer: "Routine care, orthodontic work, implants, and cosmetic procedures are all eligible.",
      },
      {
        question: "How quickly can I receive the funds?",
        answer: "Once approved and the contract is accepted, funds can be disbursed in as little as 24 hours.",
      },
      {
        question: "Can I repay my loan early?",
        answer: "Yes. We encourage early repayment with no interest penalty.",
      },
    ],
  },
  {
    slug: "cosmetic-surgery-loans",
    name: "Cosmetic Surgery Loans",
    shortName: "Cosmetic",
    tagline: "Flexible cosmetic surgery loans to enhance your confidence.",
    heroTitle: "Confidence,\nFinanced Sensibly.",
    heroSubtitle: "Spread the cost of cosmetic procedures from $2,001 – $5,000 with clear, honest terms.",
    intro:
      "Cosmetic surgery can be life-changing. Squad Finance helps make it accessible by spreading payments into manageable instalments — whether you're planning a surgical procedure or a non-invasive treatment.",
    uses: [
      { title: "Surgical procedures", description: "Rhinoplasty, facelifts, breast augmentation and more." },
      { title: "Non-invasive treatments", description: "Botox, fillers, laser resurfacing." },
      { title: "Reconstructive work", description: "Medically recommended procedures following injury." },
    ],
    faqs: [
      {
        question: "What kinds of procedures can this loan cover?",
        answer: "Both surgical and non-surgical cosmetic treatments, plus medically recommended reconstructive work.",
      },
      {
        question: "How fast is approval?",
        answer: "Most decisions are made the same business day, with funds available within 24 hours of contract acceptance.",
      },
    ],
  },
  {
    slug: "education-loans",
    name: "Education Loans",
    shortName: "Education",
    tagline: "Smart education loans to invest in your future.",
    heroTitle: "Invest in\nWhat You Become.",
    heroSubtitle: "Cover course fees, equipment, and study costs from $2,001 – $5,000 — without the wait.",
    intro:
      "Education is one of the best investments you can make. Squad Finance education loans help cover the upfront costs that government support doesn't always reach — textbooks, equipment, fees, transport — so you can focus on learning, not paying.",
    uses: [
      { title: "Course materials", description: "Textbooks, software licences, and required reading." },
      { title: "Specialised equipment", description: "Laptops, tools, and field-specific gear." },
      { title: "Living & travel", description: "Commute, accommodation bonds, union fees." },
    ],
    faqs: [
      {
        question: "Can I use the loan alongside government study assistance?",
        answer: "Yes. Our loans are designed to cover the gaps that HECS, Austudy or Centrelink may not.",
      },
      {
        question: "Do I need to be enrolled to apply?",
        answer: "Yes — proof of enrolment or course acceptance is part of the verification process for education loans.",
      },
    ],
  },
  {
    slug: "rental-bond-loans",
    name: "Rental Bond Loans",
    shortName: "Rental Bond",
    tagline: "Fast bond loan to secure your rental with ease.",
    heroTitle: "Bond Sorted.\nMove In Sooner.",
    heroSubtitle: "Cover rental bond costs from $2,001 – $5,000 without dipping into savings.",
    intro:
      "A rental bond is often the biggest upfront cost of moving. Squad Finance rental bond loans bridge that gap so you can secure the place you want without emptying your savings or scrambling between paydays.",
    uses: [
      { title: "Bond payment", description: "Cover the security deposit your landlord requires." },
      { title: "Overlapping bonds", description: "Bridge the gap when your old bond hasn't refunded yet." },
      { title: "Setup costs", description: "Connection fees, first-week rent, removalists." },
    ],
    whoFor: [
      { title: "First-time renters", description: "Move out without draining your savings." },
      { title: "Tenants relocating", description: "For work, study, or a fresh start." },
      { title: "Renters in transition", description: "When two bonds collide between properties." },
    ],
    faqs: [
      {
        question: "What costs can a rental bond loan cover?",
        answer: "The landlord's security deposit, plus related setup costs like utility connections and overlapping rent.",
      },
      {
        question: "Do I need to provide my rental agreement?",
        answer: "In some cases yes — proof of the tenancy helps confirm the loan is being used as intended.",
      },
    ],
  },
  {
    slug: "rental-expenses-loans",
    name: "Rental Expenses Loans",
    shortName: "Rental Expenses",
    tagline: "Cover rental expenses quickly with our flexible loan solutions.",
    heroTitle: "Renting Costs\nMore Than Just Rent.",
    heroSubtitle: "From relocation to make-good, borrow $2,001 – $5,000 to keep moving.",
    intro:
      "Moving, relocating, or wrapping up a tenancy comes with costs that don't fit in a regular budget. Squad Finance rental expenses loans help renters handle the surrounding costs so the move itself stays stress-free.",
    uses: [
      { title: "Relocation costs", description: "Movers, transport, utility setup fees." },
      { title: "Make-good", description: "Restore your old place to lease condition." },
      { title: "Advance rent", description: "Bridge a payday gap when timing doesn't quite line up." },
    ],
    faqs: [
      {
        question: "Can I use the loan for multiple expenses?",
        answer: "Yes — moving costs, advance rent, utility connections, and make-good are all eligible.",
      },
      {
        question: "Can I apply with a low credit score?",
        answer: "We consider applications from a wide range of financial backgrounds, looking beyond just your score.",
      },
    ],
  },
  {
    slug: "furniture-loans",
    name: "Furniture Loans",
    shortName: "Furniture",
    tagline: "Easy furniture loans to style your home affordably.",
    heroTitle: "Furnish It Properly.\nThe First Time.",
    heroSubtitle: "Beds, sofas, white goods. Borrow $2,001 – $5,000 and skip the rent-to-own trap.",
    intro:
      "Furnishing a home shouldn't mean piecing it together one paycheque at a time. Squad Finance furniture loans help you buy quality essentials — beds, sofas, dining sets, fridges, washers, TVs — at retail, with a simple repayment plan that won't trap you in interminable rent-to-own contracts.",
    uses: [
      { title: "Essential furniture", description: "Beds, sofas, dining tables, mattresses." },
      { title: "White goods", description: "Fridges, washing machines, dryers, dishwashers." },
      { title: "Replacement & repair", description: "Replace broken items without straining your budget." },
    ],
    faqs: [
      {
        question: "Can I use the loan for multiple purchases?",
        answer: "Yes — across one room or several. The funds are yours to direct.",
      },
      {
        question: "How is this different from buy-now-pay-later or rent-to-own?",
        answer: "You buy outright at retail price. No inflated 'lease' totals, no surprise renewal fees — just a fixed-term loan with clear repayments.",
      },
    ],
  },
  {
    slug: "home-renovation-loans",
    name: "Home Renovation Loans",
    shortName: "Home Renovation",
    tagline: "Upgrade your home with our flexible renovation loans.",
    heroTitle: "Small Reno.\nBig Difference.",
    heroSubtitle: "Fund the room, repaint, or refresh you've been putting off — $2,001 – $5,000.",
    intro:
      "Not every home improvement needs a mortgage redraw. Squad Finance renovation loans are built for the focused projects — a kitchen refresh, bathroom regrout, a fresh paint job, an outdoor upgrade — that lift the home you already love.",
    uses: [
      { title: "Refresh a room", description: "Paint, fittings, flooring updates." },
      { title: "Kitchen & bath", description: "Tapware, splashbacks, small remodels." },
      { title: "Curb appeal", description: "Landscaping, fencing, exterior repairs." },
    ],
    faqs: [
      {
        question: "What renovations can I fund?",
        answer: "Kitchen and bathroom updates, painting, landscaping, flooring, and similar focused projects.",
      },
      {
        question: "Can I repay early?",
        answer: "Yes, and we encourage it — there's no interest penalty for early repayment.",
      },
    ],
  },
];

export const standardEligibilityList = standardEligibility;

export const standardSteps = [
  { title: "Apply online", description: "A short, secure application — most people finish in under 10 minutes." },
  { title: "Quick assessment", description: "We review your details and respond, often within the same business day." },
  { title: "Funds in your account", description: "Once you accept your contract, funds can land in 24 hours via PayID or Osko." },
];

export const getLoanBySlug = (slug: string | undefined) =>
  loanProducts.find((l) => l.slug === slug);

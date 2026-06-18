export const productFacts = [
  { label: "When you pay", value: "Only when gross income exceeds $50,000 per year" },
  { label: "Funding amount", value: "$20,000 flat" },
  { label: "Interest rate", value: "Free" },
  { label: "Repayments", value: "Equal weekly or fortnightly instalments over 12 months" },
  { label: "Admin fee", value: "Applies if repayments extend beyond the initial 12-month period" },
  { label: "Dishonour fee", value: "$50 per failed instalment" },
  { label: "Security", value: "None required" },
] as const;

export const dealSellingPoints = [
  {
    title: "Only pay when you earn over $50,000",
    description:
      "Repayments start only when your gross income goes above $50,000. You keep everything up to that threshold.",
  },
  {
    title: "Payments pause if income drops",
    description:
      "Earn $50,000 or less? Repayments defer automatically — no time limit, no interest while paused.",
  },
  {
    title: "$20,000 flat. Interest free.",
    description:
      "Know the maximum upfront. No compounding interest. No surprises on the total you could owe.",
  },
  {
    title: "Apply before you're enrolled",
    description:
      "Start your application while you're still deciding. Approval may be offered subject to verification.",
  },
] as const;

export const financingSteps = [
  {
    title: "Apply before you're enrolled",
    description:
      "You don't need to be enrolled in The Squad Institute to apply for finance. You can start your application while you're still deciding or waiting on a cohort offer.",
  },
  {
    title: "Approval subject to verification",
    description:
      "We review your application and may offer approval, subject to identity verification, income checks, and meeting our eligibility criteria.",
  },
  {
    title: "Final approval after graduation",
    description:
      "Final loan approval is conditional on meeting The Squad Institute program graduation requirements as set out in your credit contract.",
  },
  {
    title: "Repay on your income cycle",
    description:
      "You repay in equal weekly or fortnightly instalments over an initial 12-month period. An admin fee applies if repayments extend beyond that period.",
  },
] as const;

export const repaymentFormulas = [
  { cycle: "Monthly", formula: "(Gross annual income − $50,000) ÷ 12" },
  { cycle: "Fortnightly", formula: "(Gross annual income − $50,000) ÷ 26" },
  { cycle: "Weekly", formula: "(Gross annual income − $50,000) ÷ 52" },
] as const;

export const repaymentExamples = [
  {
    title: "Higher income — clears within Year 1",
    salary: "$70,000",
    narrative:
      "If your gross annual income is $70,000, you keep $50,000 and $20,000 goes toward your obligation within Year 1 (timing per your credit contract). No admin fee in this scenario.",
  },
  {
    title: "Lower income — balance carries into Year 2",
    salary: "$65,000",
    narrative:
      "If your gross annual income is $65,000, approximately $15,000 is applied in Year 1 (~$577 per fortnight over 26 fortnights). The remaining $5,000 in Year 2 may be approximately ~$625 per fortnight plus a $50 admin fee (~$675 per fortnight) over ~8 fortnights.",
  },
] as const;

export const repaymentDisclaimer =
  "Examples only — not a quote. Your repayments depend on your income, pay cycle, and credit contract.";

export const applyDisclaimer =
  "Applying for finance is not the same as final loan approval. Approval may be offered subject to verification.";

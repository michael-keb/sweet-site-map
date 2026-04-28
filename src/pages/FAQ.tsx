import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FAQSection } from "@/components/FAQSection";
import { ApplyCTA } from "@/components/ApplyCTA";

const allFaqs = [
  { question: "What exactly is this — a loan or BNPL?", answer: "It's a Buy Now Pay Later plan, built specifically for The Squad Institute programs. We pay your program fee upfront. You repay us in equal weekly or fortnightly instalments over 12 months. An admin fee will be charged if repayments extend beyond the initial 12-month period. Interest Rate: Free when you pay on time." },
  { question: "How much can I borrow?", answer: "Plans are sized to your Squad Institute program fee, up to $20,000, and assessed against our responsible-lending criteria." },
  { question: "Do I need to be enrolled in The Squad Institute to apply?", answer: "No — you can apply for finance before you're enrolled. We may pre-approve your plan subject to verification. Final loan approval is conditional on meeting Squad Institute graduation requirements as set out in your credit contract." },
  { question: "Am I eligible if I'm on a temporary visa?", answer: "You may be eligible if you hold a valid Australian visa and meet our other criteria. We assess visa type and validity as part of the application." },
  { question: "How fast is the application?", answer: "Most people complete it in under 10 minutes. Decisions are usually made the same business day. Program fees settle directly with the Institute within 24 hours of contract acceptance and enrolment confirmation." },
  { question: "Are there any fees?", answer: "Interest Rate: Free when you pay on time. An admin fee will be charged if repayments extend beyond the initial 12-month period. A $50 dishonour fee may apply if a scheduled instalment fails. All fees are disclosed upfront in your contract." },
  { question: "Will applying affect my credit score?", answer: "An application may involve a credit check, and we report repayment history to credit reporting bodies. We assess your full picture — your situation, your program, your trajectory — not just a number." },
  { question: "What documents do I need?", answer: "Photo ID, proof of income (recent payslips or bank statements), proof of (or offer for) Squad Institute enrolment when ready, and your account details for instalments." },
  { question: "Can I pay off my plan early?", answer: "Yes, with no penalty. Most customers accelerate repayments once they're placed in a new role." },
  { question: "What if I miss an instalment?", answer: "Contact us early. We have a hardship process and will work with you on alternative arrangements where possible. A $50 dishonour fee may apply — see your contract for the exact amount." },
  { question: "Do you lend to people on Centrelink?", answer: "Our target market excludes people whose income is more than 50% from Centrelink. See our Target Market Determination for full detail." },
  { question: "Is my data safe?", answer: "Yes. We're bound by the Privacy Act 1988 and the Australian Privacy Principles. See our Privacy Policy and Credit Reporting Policy for more detail." },
];

const FAQ = () => (
  <div className="min-h-screen bg-background">
    <Navigation />
    <main>
      <section className="pt-40 pb-12 md:pt-48 md:pb-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-6">FAQs</p>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight leading-[1.05]">Questions, answered honestly.</h1>
          </div>
        </div>
      </section>
      <section className="pb-24 md:pb-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <FAQSection title="" subtitle="" faqs={allFaqs} showCTA={false} />
          </div>
        </div>
      </section>
      <ApplyCTA variant="muted" />
    </main>
    <Footer />
  </div>
);

export default FAQ;

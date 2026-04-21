import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FAQSection } from "@/components/FAQSection";
import { ApplyCTA } from "@/components/ApplyCTA";

const allFaqs = [
  { question: "What exactly is this — a loan or BNPL?", answer: "It's a Buy Now Pay Later plan, built specifically for The Squad Institute programs. We pay your program fee upfront. You repay us in fortnightly instalments over 6 to 24 months, with 0% interest when you pay on time." },
  { question: "How much can I borrow?", answer: "Plans range from $5,000 to $20,000, sized to your Squad Institute program fee and assessed against our responsible-lending criteria." },
  { question: "Do I have to be a Squad Institute student?", answer: "Yes. These plans are purpose-built for Squad Institute placement and advancement programs. We verify enrolment as part of the application." },
  { question: "How fast is the application?", answer: "Most people complete it in under 10 minutes. Decisions are usually made the same business day, with program fees settled to the Institute within 24 hours of contract acceptance." },
  { question: "Are there any fees?", answer: "There's a small, transparent account-keeping fee, disclosed upfront. There's no interest if you pay on time. Late instalments may incur a fee — everything is shown to you in your contract before you accept." },
  { question: "Will applying affect my credit score?", answer: "An application may involve a credit check, and we report repayment history to credit reporting bodies. We assess your full picture — your situation, your program, your trajectory — not just a number." },
  { question: "What documents do I need?", answer: "Photo ID, proof of income (recent payslips or bank statements), proof of Squad Institute enrolment, and your account details for fortnightly debits." },
  { question: "Can I pay off my plan early?", answer: "Yes, with no penalty. Most customers accelerate repayments once they're placed in a new role." },
  { question: "What if I miss an instalment?", answer: "Contact us early. We have a hardship process and will work with you on alternative arrangements where possible. A late fee may apply — see your contract for the exact amount." },
  { question: "Do you lend to people on Centrelink?", answer: "Our target market excludes people whose income is more than 50% from Centrelink. See our Target Market Determination for full detail." },
  { question: "Is my data safe?", answer: "Yes. We're bound by the Privacy Act 1988 and the Australian Privacy Principles." },
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

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FAQSection } from "@/components/FAQSection";
import { ApplyCTA } from "@/components/ApplyCTA";

const allFaqs = [
  { question: "How much can I borrow?", answer: "All loans range from $2,001 to $5,000, subject to our responsible-lending assessment." },
  { question: "How fast is the application?", answer: "Most people complete it in under 10 minutes. Decisions are usually made the same business day, with funds within 24 hours of contract acceptance." },
  { question: "Will applying affect my credit score?", answer: "An application may involve a credit check. We assess your full picture, not just a number." },
  { question: "What documents do I need?", answer: "Photo ID, proof of income (recent payslips or bank statements), and your account details for fund disbursement." },
  { question: "Can I repay my loan early?", answer: "Yes, with no penalty — you simply stop paying interest sooner." },
  { question: "What if I can't make a repayment?", answer: "Contact us early. We have a hardship process and will work with you on alternative arrangements where possible." },
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

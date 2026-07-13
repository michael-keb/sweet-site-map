import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FAQSection } from "@/components/FAQSection";
import { ApplyCTA } from "@/components/ApplyCTA";

const allFaqs = [
  { question: "How does it work?", answer: "It's a simple plan built specifically for The Squad Institute's placement program. Apply, get a quick decision, and get set up to start." },
  {
    question: "What are the main features of The Squad Institute Finance product?",
    answer:
      "The Squad Institute Finance product provides up to $20,000 in credit to cover program fees, with 0% interest and no security or guarantor required. Fees and charges apply. Repayments are income-contingent, commencing only once your gross annual income exceeds $50,000, and can be made weekly or fortnightly to align with your pay cycle. The product also allows penalty-free early repayments, offers payment deferral options in eligible circumstances, and is designed to provide a simple, transparent and easy-to-understand financing solution for career development.",
  },
  { question: "Do I need to be enrolled in The Squad Institute to apply?", answer: "No — you can apply before you're enrolled. We may approve your application subject to verification." },
  { question: "Am I eligible if I'm on a temporary visa?", answer: "You may be eligible if you hold a valid Australian visa and meet our other criteria. We assess visa type and validity as part of the application." },
  { question: "How fast is the application?", answer: "Most people complete it in under 10 minutes. Decisions are usually made the same business day." },
  { question: "What documents do I need?", answer: "Photo ID, basic verification details, and proof of (or offer for) Squad Institute enrolment when ready." },
  { question: "What if my circumstances change?", answer: "Contact us early. We have a hardship process and will work with you on alternative arrangements where possible." },
  { question: "Is my data safe?", answer: "Yes. We're bound by the Privacy Act 1988 and the Australian Privacy Principles. See our Privacy Policy for more detail." },
];

const FAQ = () => (
  <div className="min-h-screen bg-background">
    <Navigation />
    <main>
      <section className="pt-40 pb-12 md:pt-48 md:pb-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-6">FAQs</p>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight leading-[1.05]">Questions, answered.</h1>
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

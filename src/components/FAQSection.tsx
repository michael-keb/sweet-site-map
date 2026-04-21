import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface FAQ {
  question: string;
  answer: string;
}

interface Props {
  title?: string;
  subtitle?: string;
  faqs?: FAQ[];
  showCTA?: boolean;
}

const defaultFaqs: FAQ[] = [
  {
    question: "How much can I borrow?",
    answer: "Loan amounts range from $2,001 to $5,000 across all our products. The amount you're approved for depends on your income, expenses, and our responsible-lending assessment.",
  },
  {
    question: "How quickly will I get the money?",
    answer: "Most decisions are made the same business day. Once you accept your contract, funds typically arrive within 24 hours via PayID or Osko.",
  },
  {
    question: "Can I repay my loan early?",
    answer: "Yes, and we encourage it. There are no penalties for early repayment — you stop paying interest sooner.",
  },
  {
    question: "Will applying hurt my credit score?",
    answer: "An application may involve a credit check. We look at your full picture — not just the score — and on-time repayments can help strengthen your credit profile over time.",
  },
];

export const FAQSection = ({
  title = "Common questions",
  subtitle = "Quick answers about how it all works.",
  faqs = defaultFaqs,
  showCTA = true,
}: Props) => {
  return (
    <div>
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">{title}</h2>
        <p className="text-lg md:text-xl text-gray-500">{subtitle}</p>
      </div>

      <Accordion type="single" collapsible className="w-full mb-12 space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border border-gray-200 rounded-xl px-6 bg-background hover:shadow-md transition-shadow"
          >
            <AccordionTrigger className="text-left font-bold text-lg py-6 hover:no-underline">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 leading-relaxed pb-6 text-base">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {showCTA && (
        <div className="text-center">
          <p className="text-gray-500 mb-6 text-lg">Still wondering?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/faq">All FAQs</Link>
            </Button>
            <Button asChild size="lg">
              <Link to="/apply">Apply Now</Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

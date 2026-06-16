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
    question: "How does it work?",
    answer:
      "Career Sponsorship helps eligible participants finance their work experience training at The Squad Institute. $20,000 flat funding may cover training fees, setup, and living support. Apply online — you can apply before you're enrolled.",
  },
  {
    question: "Do I need to be enrolled in The Squad Institute to apply?",
    answer:
      "No — you can apply before you're enrolled. Pre-approval may be offered subject to verification. Final loan approval is conditional on meeting graduation requirements.",
  },
  {
    question: "How do repayments work?",
    answer:
      "You repay in equal weekly or fortnightly instalments over an initial 12-month period. An admin fee applies if repayments extend beyond that period.",
  },
  {
    question: "What if my circumstances change?",
    answer:
      "Contact us as soon as possible. We have a hardship process and will work with you on alternative arrangements where available.",
  },
];

export const FAQSection = ({
  title = "Common questions",
  subtitle = "Quick answers about how it all works.",
  faqs = defaultFaqs,
  showCTA = true,
}: Props) => {
  const showHeader = title.trim().length > 0 || subtitle.trim().length > 0;
  return (
    <div>
      {showHeader && (
        <div className="text-center mb-16">
          {title.trim().length > 0 && (
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">{title}</h2>
          )}
          {subtitle.trim().length > 0 && (
            <p className="text-lg md:text-xl text-gray-500">{subtitle}</p>
          )}
        </div>
      )}

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
              <Link to="/apply">Apply for financing</Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

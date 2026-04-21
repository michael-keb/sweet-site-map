import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const FAQSection = () => {
  const faqs = [
    {
      question: "How is this different from other tech bootcamps?",
      answer: "We focus on work experience and resume-worthy proof, not certificates. You document real project delivery that shows you can add value—the kind of experience recruiters want to see on your resume. Plus, you work in squads, learning collaboration skills that bootcamps don't teach."
    },
    {
      question: "Can I do this while working full-time?",
      answer: "Yes! Most tracks need 10-15 hours per week. Squad sessions are scheduled at various times to fit your schedule. Many of our members kept their day jobs while gaining the work experience they needed."
    },
    {
      question: "Do I need tech experience to start?",
      answer: "No! Our most successful members often come from completely different fields. The Applied Squad Track is specifically designed for career changers with zero tech experience."
    },
    {
      question: "Do you guarantee job placement?",
      answer: "We don't guarantee jobs, but our focus on real work experience, verified references, and resume-worthy achievements gives you what recruiters actually look for. You'll have 6 months of documented project delivery to put on your resume and discuss in interviews."
    }
  ];

  return (
    <div>
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
          Questions
        </h2>
        <p className="text-lg md:text-xl text-gray-500">
          Quick answers to common questions
        </p>
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

      <div className="text-center">
        <p className="text-gray-500 mb-6 text-lg">Have more questions?</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/faq">View All FAQs</Link>
          </Button>
          <Button asChild size="lg">
            <Link to="/apply">Apply Now</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";

const FAQ = () => {
  const faqCategories = [
    {
      category: "Program & Tracks",
      questions: [
        {
          question: "What's the difference between the tracks?",
          answer: "Each track serves different needs and timelines. Applied Squad Track (12 weeks) is our most comprehensive option with full squad experience. Career Readiness Track (8 weeks) focuses on job search prep for those with some tech knowledge. Rapid Delivery Sprint (4 weeks) is intensive for experienced professionals filling portfolio gaps. Capability Badges are self-paced micro-credentials for specific skills."
        },
        {
          question: "Can I work full-time while doing a track?",
          answer: "Yes! Most of our tracks are designed for working professionals. Applied Squad Track requires 10-15 hours/week, Career Readiness needs 8-12 hours/week, and Capability Badges are completely self-paced. We schedule squad sessions at various times to accommodate different time zones and work schedules."
        },
        {
          question: "What if I don't have tech experience?",
          answer: "That's exactly who we help! Our Applied Squad Track is perfect for career changers with zero tech experience. You'll learn by doing, building real deliverables with support from mentors and your squad. Many of our most successful members came from completely different fields—teaching, retail, healthcare, and more."
        },
        {
          question: "How is this different from other tech bootcamps?",
          answer: "Three key differences: (1) You gain real work experience and resume-worthy achievements, not just complete assignments. (2) You work in squads with peer review, not alone. (3) Your work is evaluated by practicing tech professionals who've done real hiring, not just automated tests. It's formation, not just information."
        }
      ]
    },
    {
      category: "Application & Admission",
      questions: [
        {
          question: "What are the admission requirements?",
          answer: "No specific degree or experience required! We look for: (1) Commitment to doing the work, (2) Ability to dedicate the required weekly hours, (3) Willingness to collaborate with a squad, and (4) Clear career goals. We review applications on a rolling basis."
        },
        {
          question: "How long does the application process take?",
          answer: "Most applications are reviewed within 3-5 business days. If accepted, you'll receive information about upcoming cohorts and can choose your start date. The whole process from application to enrollment typically takes 1-2 weeks."
        },
        {
          question: "Can I speak with someone before applying?",
          answer: "Absolutely! We encourage it. Schedule a free info session to ask questions, see the platform, and meet our coaches. Or book a 1:1 call with an advisor to discuss your specific situation and goals."
        },
        {
          question: "What if I'm not accepted?",
          answer: "We rarely reject applications outright. If your application needs strengthening, we'll provide specific feedback and guidance on how to improve it. You can reapply once you've addressed the concerns."
        }
      ]
    },
    {
      category: "Squad & Learning Experience",
      questions: [
        {
          question: "What is a squad?",
          answer: "A squad is your cohort of 8-12 peers who start together. You'll collaborate on projects, review each other's work, and learn from shared experiences. Your squad provides accountability, feedback, and becomes part of your professional network."
        },
        {
          question: "How does peer review work?",
          answer: "Each artifact you create goes through peer review before mentor evaluation. You'll use a structured rubric to give and receive feedback. This mirrors real-world collaboration and helps you see multiple approaches to the same problem."
        },
        {
          question: "Who are the mentors?",
          answer: "All mentors are practicing tech professionals—software engineers, UX designers, product owners, data scientists, and hiring managers with 5+ years of experience. They're not career instructors—they're professionals who currently do this work and have hired people for these roles."
        },
        {
          question: "Is everything done live or can I watch recordings?",
          answer: "Mix of both. Core squad sessions are live (recorded for reference). Individual work is self-paced. Weekly office hours are live. All content is accessible 24/7, but we strongly encourage attending live sessions for the collaborative experience."
        }
      ]
    },
    {
      category: "Outcomes & Career Support",
      questions: [
        {
          question: "Do you guarantee job placement?",
          answer: "We don't guarantee placement—success depends on individual effort and market conditions. However, our focus on real work experience, verified references, and resume-worthy achievements gives you what recruiters actually look for. You'll have 6 months of documented project delivery to put on your resume and discuss in interviews."
        },
        {
          question: "Do you help with the job search?",
          answer: "Yes! All tracks include: Resume and LinkedIn review, interview preparation, portfolio positioning guidance, and lifetime access to our job board. Partner Placement Track includes guaranteed interviews with hiring partners."
        },
        {
          question: "What kind of jobs do our members get?",
          answer: "Software Engineer, Product Designer, Data Analyst, Product Owner, Systems Analyst, UX Researcher, and Product Manager roles. Starting salaries range from $60k-$110k depending on role, location and experience level. Many see 30-50% salary increases from their previous roles."
        },
        {
          question: "Can I access alumni network after graduating?",
          answer: "Yes! Lifetime access to our alumni community, which includes monthly meetups, a private Slack channel, job referrals, and ongoing professional development workshops."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="pt-32 pb-24 md:pt-40 md:pb-32">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 tracking-tight">
                Questions
              </h1>
              <p className="text-xl md:text-2xl text-gray-500 leading-relaxed">
                Everything you need to know
              </p>
            </div>
          </div>
        </section>

        <section className="py-32">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-20">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 tracking-tight">
                    {category.category}
                  </h2>
                  <Accordion type="single" collapsible className="w-full space-y-4">
                    {category.questions.map((item, index) => (
                      <AccordionItem key={index} value={`item-${categoryIndex}-${index}`} className="border-b-0 bg-gray-50 rounded-lg px-6">
                        <AccordionTrigger className="text-left text-lg font-bold text-foreground hover:no-underline py-6">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 leading-relaxed pb-6 text-base">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 bg-foreground text-background">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
                Still Have Questions?
              </h2>
              <p className="text-xl opacity-80 mb-12 leading-relaxed">
                Schedule a call or send us a message
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary">
                  <Link to="/contact">Contact Us</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent border-background text-background hover:bg-background/10">
                  <Link to="/apply">Apply Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
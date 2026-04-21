import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, CheckCircle2, FileText, Users } from "lucide-react";

const Apply = () => {
  const steps = [
    { icon: FileText, title: "Select Track", description: "Choose your path" },
    { icon: Calendar, title: "Cohort Date", description: "Pick your start" },
    { icon: Users, title: "Profile", description: "Complete profile" },
    { icon: CheckCircle2, title: "Confirmation", description: "Get squad assignment" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-24 md:pt-40 md:pb-32">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 tracking-tight leading-[1.05]">
                This Isn't<br />Easy
              </h1>
              <p className="text-xl md:text-2xl text-gray-500 leading-relaxed mb-8">
                6 months. Real work. Real results.<br />
                If you're ready to prove you can do it, apply now.
              </p>
              <div className="bg-gray-50 border-l-4 border-foreground p-6 max-w-2xl mx-auto text-left">
                <p className="text-base text-gray-700 leading-relaxed">
                  <strong>Real talk:</strong> This program demands time, commitment, and grit. You'll work in squads, 
                  meet deadlines, handle feedback, and ship real deliverables. But you'll walk out with 6 months of 
                  documented work experience that actually gets you hired.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What You're Signing Up For */}
        <section className="py-32">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 tracking-tight">
                What You're Signing Up For
              </h2>
              <div className="space-y-8">
                <div className="border-l-4 border-gray-200 pl-6">
                  <h3 className="text-2xl font-bold text-foreground mb-3">6 Months of Real Work</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Squad standups. Project deliverables. Stakeholder presentations. Code reviews. Bug fixes. 
                    This is what real tech work looks like, and you'll be doing it.
                  </p>
                </div>
                <div className="border-l-4 border-gray-200 pl-6">
                  <h3 className="text-2xl font-bold text-foreground mb-3">Time Commitment</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    15-20 hours per week. Yes, you can keep your day job. But you need to show up, 
                    contribute to your squad, and meet your deadlines.
                  </p>
                </div>
                <div className="border-l-4 border-gray-200 pl-6">
                  <h3 className="text-2xl font-bold text-foreground mb-3">What You'll Build</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    A resume full of real work experience. Verified references from squad leads. 
                    Documentation of value you've delivered. That's what gets you hired.
                  </p>
                </div>
                <div className="border-l-4 border-gray-200 pl-6">
                  <h3 className="text-2xl font-bold text-foreground mb-3">The Reality Check</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Some weeks will be hard. You'll make mistakes. You'll get feedback that stings. 
                    But that's how you prove you can handle real work. That's what makes your resume 
                    stand out.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-32 bg-gray-50">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 text-center tracking-tight">
                The Application Process
              </h2>
              <div className="space-y-6">
                <div className="bg-background rounded-xl p-8">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl font-bold text-gray-300">1</div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Submit Application</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Tell us your story. What tech role are you targeting? Why do you want this? 
                        What are you willing to commit?
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-background rounded-xl p-8">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl font-bold text-gray-300">2</div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Review & Response</h3>
                      <p className="text-gray-600 leading-relaxed">
                        We review within 2 business days. If it's a fit, we'll schedule a 30-minute 
                        conversation to make sure you know what you're getting into.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-background rounded-xl p-8">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl font-bold text-gray-300">3</div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Squad Assignment</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Choose your tech role track. Get matched with your squad. Meet your squad lead. 
                        Then the work begins.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 bg-foreground text-background">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
                Ready to Do<br />The Work?
              </h2>
              <p className="text-xl md:text-2xl opacity-80 mb-12 leading-relaxed">
                Don't apply if you're looking for an easy path.<br />
                Apply if you're ready to prove what you're capable of.
              </p>
              <Button asChild size="lg" variant="secondary" className="text-base">
                <Link to="/sign-up">Start Application</Link>
              </Button>
              <p className="text-base opacity-70 mt-6">
                Response within 2 business days
              </p>
            </div>
          </div>
        </section>

        {/* Final Reality Check */}
        <section className="py-32">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-foreground mb-12 text-center tracking-tight">
                Before You Apply
              </h2>

              <div className="space-y-6">
                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="font-bold text-foreground mb-3 text-lg">
                    Do I need prior experience?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    No. But you need to be ready to learn fast, take feedback, and do real work. 
                    This isn't for people who want their hand held.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="font-bold text-foreground mb-3 text-lg">
                    Can I do this while working full-time?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Yes. Most of our participants do. You'll need 15-20 hours per week. 
                    Evenings, weekends, lunch breaks—whatever works. But the hours are non-negotiable.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="font-bold text-foreground mb-3 text-lg">
                    What if I fall behind?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Life happens. We get it. Your squad lead will work with you. But you need to 
                    communicate, catch up, and deliver. That's part of proving you can handle real work.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="font-bold text-foreground mb-3 text-lg">
                    Do you guarantee I'll get hired?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    No. We give you 6 months of documented work experience, real references, and 
                    resume-worthy proof. But you have to show up to interviews and sell yourself. 
                    We give you the proof—you close the deal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Apply;

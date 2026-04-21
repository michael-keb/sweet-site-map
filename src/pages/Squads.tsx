import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Squads = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-24 md:pt-40 md:pb-32">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 tracking-tight">
                The 12-Month Journey
              </h1>
              <p className="text-xl md:text-2xl text-gray-500 leading-relaxed">
                First 6 Months: Work Experience & Training
                <br />
                Next 6 Months: Personal Brand Building & Exposure
              </p>
            </div>
          </div>
        </section>

        {/* Phase 1: Work Experience & Training */}
        <section className="py-32">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
              <div className="mb-16">
                <div className="text-6xl font-bold text-foreground mb-6">1</div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
                  Work Experience & Training
                </h2>
                <p className="text-xl text-gray-500 mb-8">Months 1–6</p>
                <p className="text-2xl font-bold text-foreground mb-12">
                  Build real work experience employers want to see
                </p>
                
                <ul className="space-y-6 mb-12">
                  <li className="flex items-start gap-4">
                    <Check className="w-6 h-6 text-foreground flex-shrink-0 mt-1" />
                    <span className="text-lg text-gray-600">4–6 weeks of intensive role-specific training in tools and frameworks</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <Check className="w-6 h-6 text-foreground flex-shrink-0 mt-1" />
                    <span className="text-lg text-gray-600">Join a mentored Delivery Squad working on real client briefs</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <Check className="w-6 h-6 text-foreground flex-shrink-0 mt-1" />
                    <span className="text-lg text-gray-600">Ship 2–3 team deliverables with stand-ups and retros</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <Check className="w-6 h-6 text-foreground flex-shrink-0 mt-1" />
                    <span className="text-lg text-gray-600">Document your work experience for your resume</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <Check className="w-6 h-6 text-foreground flex-shrink-0 mt-1" />
                    <span className="text-lg text-gray-600">Receive fortnightly mentor feedback and peer reviews</span>
                  </li>
                </ul>

                <div className="bg-gray-50 rounded-2xl p-8">
                  <p className="text-lg font-bold text-foreground mb-3">Outcome</p>
                  <p className="text-gray-600 leading-relaxed">You have verifiable work experience, documented deliverables, and references that recruiters actually want to see.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Phase 2: Personal Brand Building & Exposure */}
        <section className="py-32 bg-gray-50">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
              <div className="mb-16">
                <div className="text-6xl font-bold text-foreground mb-6">2</div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
                  Personal Brand Building & Exposure
                </h2>
                <p className="text-xl text-gray-500 mb-8">Months 7–12</p>
                <p className="text-2xl font-bold text-foreground mb-12">
                  Get visible. Get noticed. Get hired.
                </p>
                
                <ul className="space-y-6 mb-12">
                  <li className="flex items-start gap-4">
                    <Check className="w-6 h-6 text-foreground flex-shrink-0 mt-1" />
                    <span className="text-lg text-gray-600">Build your online presence across LinkedIn, GitHub, and portfolio sites</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <Check className="w-6 h-6 text-foreground flex-shrink-0 mt-1" />
                    <span className="text-lg text-gray-600">Document your work publicly with posts, case studies, and proof</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <Check className="w-6 h-6 text-foreground flex-shrink-0 mt-1" />
                    <span className="text-lg text-gray-600">Network with industry professionals and attend hiring events</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <Check className="w-6 h-6 text-foreground flex-shrink-0 mt-1" />
                    <span className="text-lg text-gray-600">Refine your interview storytelling and job search strategy</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <Check className="w-6 h-6 text-foreground flex-shrink-0 mt-1" />
                    <span className="text-lg text-gray-600">Get career coaching and resume reviews with mentors</span>
                  </li>
                </ul>

                <div className="bg-white rounded-2xl p-8">
                  <p className="text-lg font-bold text-foreground mb-3">Outcome</p>
                  <p className="text-gray-600 leading-relaxed">You're visible to employers, have a proven personal brand, and are actively positioned for job opportunities.</p>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* CTA Section */}
        <section className="py-32 bg-gray-50">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 tracking-tight">
                Start Your Journey
              </h2>
              <Button asChild size="lg">
                <Link to="/apply">Apply Now</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Squads;

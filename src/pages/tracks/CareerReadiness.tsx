import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const CareerReadiness = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-24 md:pt-40 md:pb-32">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 tracking-tight leading-[1.05]">
                2 Weeks to<br />Job-Ready
              </h1>
              <p className="text-xl md:text-2xl text-gray-500 mb-12 leading-relaxed">
                Intensive resume building and job market positioning. Turn your existing work into 
                documented proof that gets you hired.
              </p>
              <div className="bg-gray-50 border-l-4 border-foreground p-6 max-w-2xl mx-auto text-left mb-8">
                <p className="text-base text-gray-700 leading-relaxed">
                  You've done the work. You just haven't documented it properly. In 2 weeks, we'll help you 
                  transform your experience into a resume and work samples that employers can't ignore.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={() => navigate("/apply")}>
                  Apply Now
                </Button>
                <Button size="lg" variant="outline" onClick={() => navigate("/contact")}>
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What You'll Do */}
        <section className="py-32">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 tracking-tight">
                What You'll Actually Do
              </h2>
              <div className="space-y-8">
                <div className="border-l-4 border-gray-200 pl-6">
                  <h3 className="text-2xl font-bold text-foreground mb-3">Week 1: Document Your Work</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Audit your past projects. Extract the wins. Document the impact. Turn vague experience 
                    into specific, verifiable contributions. This is how you build a resume that stands out.
                  </p>
                </div>
                <div className="border-l-4 border-gray-200 pl-6">
                  <h3 className="text-2xl font-bold text-foreground mb-3">Week 2: Build Your Evidence</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Create work samples. Write case studies. Build your LinkedIn presence. Practice talking 
                    about your contributions. Get ready to prove you can add value from day one.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who This Is For */}
        <section className="py-32 bg-gray-50">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 tracking-tight">
                This Track Is For You If:
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "You have experience but no documented proof",
                    description: "You've worked on projects, solved problems, delivered results. But your resume doesn't show it. We'll fix that."
                  },
                  {
                    title: "You're actively job searching",
                    description: "You're applying but not getting callbacks. The issue? Your resume doesn't prove you can do the work. We'll change that."
                  },
                  {
                    title: "You need this fast",
                    description: "You don't have 6 months. You need to be job-ready now. This track gets you there in 2 weeks with focused work."
                  },
                  {
                    title: "You can commit 5-8 hours per week",
                    description: "This isn't a full-time commitment, but it requires dedicated time. Evenings, weekends—whatever works. But you must show up."
                  },
                ].map((item, idx) => (
                  <div key={idx} className="bg-background rounded-xl p-8">
                    <div className="flex items-start gap-4">
                      <CheckCircle className="h-6 w-6 text-foreground flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section className="py-32">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 tracking-tight">
                What You Walk Away With
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-foreground mb-3">Documented Work Experience</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Your resume rewritten to highlight tangible contributions. Specific projects. Measurable impact. 
                    The kind of details that get you interviews.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-foreground mb-3">Work Samples</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Case studies showing how you solve problems. Examples of your analysis, designs, or code. 
                    Proof you can do the work.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-foreground mb-3">Interview Preparation</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Practice articulating your value. Learn how to talk about your contributions. 
                    Get comfortable defending your work.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-foreground mb-3">Job Search Strategy</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Know where to apply. How to position yourself. What to emphasize. 
                    Turn your documentation into job offers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-foreground text-background">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
                Ready to Get<br />Job-Ready?
              </h2>
              <p className="text-xl md:text-2xl opacity-80 mb-12 leading-relaxed">
                Next cohort starts soon. 2 weeks. 5-8 hours per week. Walk out with a resume 
                that proves you can do the work.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" onClick={() => navigate("/apply")}>
                  Apply Now
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-background text-background hover:bg-background/10" onClick={() => navigate("/schedule")}>
                  Schedule Info Session
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

export default CareerReadiness;
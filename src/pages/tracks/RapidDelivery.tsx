import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { CheckCircle, AlertCircle } from "lucide-react";

const RapidDelivery = () => {
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
                10 Days.<br />Ship or Die.
              </h1>
              <p className="text-xl md:text-2xl text-gray-500 mb-12 leading-relaxed">
                Intensive MVP delivery sprint. You'll take an idea from concept to deployed product in 10 days.
              </p>
              <div className="bg-gray-50 border-l-4 border-foreground p-6 max-w-2xl mx-auto text-left mb-8">
                <p className="text-base text-gray-700 leading-relaxed">
                  <strong>This is not for beginners.</strong> You need experience, you need time (20+ hours/week), 
                  and you need to be able to ship fast. But you'll walk out with a deployed MVP and resume-worthy 
                  proof that you can deliver under pressure.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={() => navigate("/apply")}>
                  Apply Now
                </Button>
                <Button size="lg" variant="outline" onClick={() => navigate("/contact")}>
                  Ask Questions
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What You'll Build */}
        <section className="py-32">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 tracking-tight">
                What You'll Build
              </h2>
              <div className="space-y-8">
                <div className="border-l-4 border-gray-200 pl-6">
                  <h3 className="text-2xl font-bold text-foreground mb-3">Day 1-2: Define & Plan</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Requirements gathering. User stories. Technical specs. Architecture decisions. 
                    This is where most MVPs fail—you'll get it right.
                  </p>
                </div>
                <div className="border-l-4 border-gray-200 pl-6">
                  <h3 className="text-2xl font-bold text-foreground mb-3">Day 3-7: Build</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Code. Test. Break. Fix. Daily standups with your squad. Code reviews. 
                    This is where you prove you can actually ship.
                  </p>
                </div>
                <div className="border-l-4 border-gray-200 pl-6">
                  <h3 className="text-2xl font-bold text-foreground mb-3">Day 8-9: Polish & Deploy</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Bug fixes. Performance optimization. Deployment. Documentation. 
                    Ship something you'd actually show an employer.
                  </p>
                </div>
                <div className="border-l-4 border-gray-200 pl-6">
                  <h3 className="text-2xl font-bold text-foreground mb-3">Day 10: Present</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Demo day. Present to stakeholders. Defend your decisions. Answer questions. 
                    This presentation? It goes on your resume.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reality Check */}
        <section className="py-32 bg-gray-50">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
              <div className="bg-background rounded-2xl p-12 border-4 border-foreground">
                <div className="flex items-start gap-4 mb-8">
                  <AlertCircle className="h-8 w-8 text-foreground flex-shrink-0" />
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
                      Reality Check
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                      This sprint is intense. You'll work nights. You'll work weekends. Things will break. 
                      You'll be stressed. But you'll ship something real.
                    </p>
                  </div>
                </div>
                <div className="space-y-4 pl-12">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-foreground flex-shrink-0 mt-1" />
                    <span className="text-base text-gray-700">You must have 3+ years in tech or product development</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-foreground flex-shrink-0 mt-1" />
                    <span className="text-base text-gray-700">You must commit 20+ hours per week for 10 days straight</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-foreground flex-shrink-0 mt-1" />
                    <span className="text-base text-gray-700">You must be able to code/design/analyze at a professional level</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-foreground flex-shrink-0 mt-1" />
                    <span className="text-base text-gray-700">You must be comfortable with ambiguity and pressure</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-foreground flex-shrink-0 mt-1" />
                    <span className="text-base text-gray-700">You must be ready to defend your work to stakeholders</span>
                  </div>
                </div>
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
                  <h3 className="text-xl font-bold text-foreground mb-3">Deployed MVP</h3>
                  <p className="text-gray-600 leading-relaxed">
                    A real product, live in production. Something you can demo. Something you can show employers.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-foreground mb-3">Resume Bullet</h3>
                  <p className="text-gray-600 leading-relaxed">
                    "Delivered MVP from concept to production in 10-day sprint." That's the kind of line 
                    that gets you interviews.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-foreground mb-3">Squad Lead Reference</h3>
                  <p className="text-gray-600 leading-relaxed">
                    A practicing professional who can verify you shipped under pressure. Recruiters will call. 
                    They'll confirm. That's gold.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-foreground mb-3">Proof of Delivery</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Documentation of requirements, architecture decisions, and deployment process. 
                    Show employers you know how to ship.
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
                Think You Can<br />Handle It?
              </h2>
              <p className="text-xl md:text-2xl opacity-80 mb-12 leading-relaxed">
                Next sprint starts soon. Limited to 6 participants. Applications reviewed in 48 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" onClick={() => navigate("/apply")}>
                  Apply for Sprint
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-background text-background hover:bg-background/10" onClick={() => navigate("/contact")}>
                  Talk to Us First
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

export default RapidDelivery;
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const AppliedSquad = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-24 md:pt-40 md:pb-32">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 tracking-tight">
                Applied Squad Track
              </h1>
              <p className="text-xl md:text-2xl text-gray-500 mb-12 leading-relaxed">
                6-8 week full-cycle squad delivery experience
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={() => navigate("/apply")}>
                  Apply Now
                </Button>
                <Button size="lg" variant="outline" onClick={() => navigate("/contact")}>
                  Schedule Info Session
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-32 bg-gray-50">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 tracking-tight">
                What You'll Experience
              </h2>
              <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed">
                Join a 4-6 person squad to deliver a complete product from stakeholder discovery through deployment. Build work experience that proves your capability.
              </p>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground tracking-tight">Perfect for you if:</h3>
                <ul className="space-y-4">
                  {[
                    "You're making your first entry into tech/product roles",
                    "You want comprehensive hands-on experience",
                    "You value peer learning and collaboration",
                    "You can commit 10-15 hours per week",
                    "You want resume-worthy work experience that demonstrates full-cycle capability",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <CheckCircle className="h-6 w-6 text-foreground flex-shrink-0 mt-1" />
                      <span className="text-lg text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Curriculum Section */}
        <section className="py-32">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-20 text-center tracking-tight">
                6-Week Journey
              </h2>
              
              <div className="space-y-16">
                {[
                  {
                    week: "Weeks 1-2",
                    title: "Discovery & Strategy",
                    description: "Stakeholder interviews, problem space analysis, and strategic alignment",
                    deliverables: ["Stakeholder map", "Problem statement", "Success criteria", "Strategy brief"],
                  },
                  {
                    week: "Weeks 3-4",
                    title: "Requirements & Design",
                    description: "Technical specs, acceptance criteria, and solution design",
                    deliverables: ["Feature specs", "Acceptance criteria", "Process flows", "Requirements doc"],
                  },
                  {
                    week: "Weeks 5-6",
                    title: "Delivery & Validation",
                    description: "Sprint execution, testing, and stakeholder validation",
                    deliverables: ["Working MVP", "Test results", "Stakeholder presentation", "Resume-ready work documentation"],
                  },
                ].map((phase, idx) => (
                  <div key={idx} className="border-b border-gray-200 pb-16 last:border-b-0">
                    <div className="mb-4">
                      <div className="text-sm text-gray-500 font-semibold mb-2">{phase.week}</div>
                      <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">{phase.title}</h3>
                      <p className="text-lg text-gray-600">{phase.description}</p>
                    </div>
                    <div className="mt-6">
                      <p className="text-sm font-bold text-foreground mb-3">Key Deliverables</p>
                      <div className="flex flex-wrap gap-3">
                        {phase.deliverables.map((item, i) => (
                          <span key={i} className="text-sm bg-gray-100 text-gray-700 px-4 py-2 rounded-full">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-foreground text-background">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
                Ready to Join a Squad?
              </h2>
              <p className="text-xl opacity-80 mb-12 leading-relaxed">
                Next cohort starts soon
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" onClick={() => navigate("/apply")}>
                  Apply Now
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-background text-background hover:bg-background/10" onClick={() => navigate("/schedule")}>
                  View Schedule
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

export default AppliedSquad;

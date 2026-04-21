import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const Tracks = () => {
  const allTracks = [
    {
      name: "Software Engineering",
      duration: "12 months",
      description: "Learn full-stack development through real-world application building and squad collaboration.",
      outcomes: [
        "Full-stack application development",
        "Modern development frameworks",
        "API design and integration",
        "Testing and deployment practices",
        "Resume-worthy development experience"
      ],
      bestFor: [
        "Those with basic coding knowledge",
        "Career changers from technical fields",
        "Self-taught developers seeking structure",
        "Technical professionals entering industry"
      ]
    },
    {
      name: "AI Engineering",
      duration: "12 months",
      description: "Build and deploy AI solutions through hands-on projects in natural language processing, computer vision, and generative AI.",
      outcomes: [
        "AI model development and deployment",
        "LLM integration and fine-tuning",
        "Computer vision applications",
        "AI ethics and responsible practices",
        "Resume-worthy AI project work"
      ],
      bestFor: [
        "Software engineers advancing into AI",
        "Data scientists specializing in ML",
        "Technical professionals exploring AI",
        "Those passionate about cutting-edge tech"
      ]
    },
    {
      name: "Data Analytics",
      duration: "12 months",
      description: "Build data analysis and visualization skills through real-world business scenarios. Learn to turn data into actionable insights.",
      outcomes: [
        "Build analytics dashboards and reports",
        "Statistical analysis and data visualization",
        "SQL and data manipulation skills",
        "Business intelligence tools experience",
        "Resume-worthy analytics work experience"
      ],
      bestFor: [
        "Those with strong analytical thinking",
        "Excel power users looking to advance",
        "Business professionals seeking data skills",
        "Career changers interested in data"
      ]
    },
    {
      name: "Cybersecurity",
      duration: "12 months",
      description: "Build security expertise through hands-on threat analysis, vulnerability assessment, and security architecture projects.",
      outcomes: [
        "Security assessment and testing",
        "Threat detection and response",
        "Network security implementation",
        "Security compliance understanding",
        "Resume-worthy security work experience"
      ],
      bestFor: [
        "IT professionals advancing career",
        "Those passionate about security",
        "Network administrators seeking specialization",
        "Technical professionals with security interest"
      ]
    },
    {
      name: "Product Owner",
      duration: "12 months",
      description: "Develop product strategy, stakeholder management, and delivery skills through hands-on product ownership and squad leadership.",
      outcomes: [
        "Product roadmap development",
        "User story creation and backlog management",
        "Stakeholder communication and alignment",
        "Agile ceremonies facilitation",
        "Resume-worthy product ownership experience"
      ],
      bestFor: [
        "Business analysts transitioning to product",
        "Technical professionals moving to leadership",
        "Project managers seeking product skills",
        "Those passionate about product strategy"
      ]
    },
    {
      name: "Business Analyst",
      duration: "12 months",
      description: "Develop requirements analysis, process modeling, and stakeholder engagement skills through real-world business transformation projects.",
      outcomes: [
        "Requirements gathering and documentation",
        "Process mapping and optimization",
        "Data analysis for business insights",
        "Stakeholder workshops and presentations",
        "Resume-worthy business analysis work"
      ],
      bestFor: [
        "Business professionals seeking tech skills",
        "Analysts wanting to upskill",
        "Career changers with business background",
        "Those passionate about problem-solving"
      ]
    },
    {
      name: "QA Engineering",
      duration: "12 months",
      description: "Build quality assurance expertise through test automation, performance testing, and quality strategy development.",
      outcomes: [
        "Test automation framework development",
        "Manual and automated testing expertise",
        "Performance and load testing",
        "CI/CD pipeline integration",
        "Resume-worthy QA work experience"
      ],
      bestFor: [
        "Detail-oriented problem solvers",
        "Manual testers advancing career",
        "Developers interested in quality",
        "Technical professionals ensuring reliability"
      ]
    },
    {
      name: "Digital Sales Management",
      duration: "12 months",
      description: "Develop digital sales strategy, CRM systems, and sales analytics skills through real-world sales scenarios.",
      outcomes: [
        "Digital sales strategy development",
        "CRM platform expertise",
        "Sales analytics and forecasting",
        "Lead generation and nurturing",
        "Resume-worthy sales campaign work"
      ],
      bestFor: [
        "Sales professionals going digital",
        "Marketing professionals expanding skills",
        "Business development representatives",
        "Entrepreneurs building sales systems"
      ]
    },
    {
      name: "Tech Exploration Track",
      duration: "12 months",
      description: "Explore multiple tech domains to discover your ideal career path through diverse project experiences.",
      outcomes: [
        "Exposure to multiple tech domains",
        "Fundamental technical skills",
        "Career path clarity",
        "Network across specializations",
        "Foundation work experience"
      ],
      bestFor: [
        "Complete career changers",
        "Those exploring tech options",
        "Those unsure of their path",
        "Professionals seeking tech transition"
      ]
    }
  ];


  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero */}
        <section className="pt-32 pb-24 md:pt-40 md:pb-32">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 tracking-tight">
                People Don't Hire Degrees.
                <br />
                They Hire Proof.
              </h1>
              <p className="text-xl md:text-2xl text-gray-500 leading-relaxed mb-8">
                Choose your role. Build real work. Earn the resume line that gets you hired.
              </p>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                6 months of documented project work. Real experience. Real references. Real job prospects.
              </p>
            </div>
          </div>
        </section>

        {/* Truth Banner */}
        <section className="py-16 bg-foreground">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-2xl md:text-3xl font-bold text-background leading-relaxed">
                Forget the paper. Employers hire experience — and we make sure you have it.
              </p>
            </div>
          </div>
        </section>

        {/* All Tracks */}
        <section className="py-32">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {allTracks.map((track, index) => (
                  <div key={index} className="border-b border-gray-200 pb-12">
                    <div className="mb-6">
                      <h3 className="text-3xl font-bold text-foreground mb-4 tracking-tight">{track.name}</h3>
                      <p className="text-base text-gray-500 mb-4">{track.duration}</p>
                      <p className="text-lg text-gray-600 leading-relaxed">{track.description}</p>
                    </div>

                    <div className="space-y-8">
                      <div>
                        <h4 className="font-bold text-foreground mb-4 tracking-tight">What You'll Achieve</h4>
                        <ul className="space-y-3">
                          {track.outcomes.map((outcome, i) => (
                            <li key={i} className="flex gap-3 text-gray-600">
                              <Check className="h-5 w-5 text-foreground flex-shrink-0 mt-0.5" />
                              <span>{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold text-foreground mb-4 tracking-tight">Best For</h4>
                        <ul className="space-y-3">
                          {track.bestFor.map((item, i) => (
                            <li key={i} className="flex gap-3 text-gray-600">
                              <Check className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-6">
                        <Button asChild size="lg">
                          <Link to="/apply">Apply Now</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Manifesto Section */}
        <section className="py-32 bg-gray-50">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 tracking-tight">
                Why This Exists
              </h2>
              <div className="space-y-8 text-lg text-gray-600 leading-relaxed">
                <p>
                  We built The Squad Institute because the job market changed — but universities didn't.
                </p>
                <p>
                  Employers don't hire degrees anymore. They hire proof of execution.
                </p>
                <p>
                  So we give you six months of real work — not lectures, not hypotheticals — to build the documented experience that gets you hired.
                </p>
                <p className="text-xl font-bold text-foreground pt-8">
                  The resume line that gets you hired? It's not your major. It's your project.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 tracking-tight">
                Ready to Build Proof?
              </h2>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Pick your role. Start earning experience. Get hired.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to="/apply">Apply Now</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/contact">Ask Questions First</Link>
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

export default Tracks;
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Squad",
    description: "Get launched into a real-world work simulation with your squad—defined roles, real responsibilities"
  },
  {
    number: "02",
    title: "Practice",
    description: "Deliver real artifacts in simulated work conditions—authentic scenarios, real outcomes"
  },
  {
    number: "03",
    title: "Review",
    description: "Receive structured critique from peers and practitioner mentors"
  },
  {
    number: "04",
    title: "Portfolio",
    description: "Compile defensible evidence of professional capability"
  }
];

const EvidenceFramework = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Evidence-Based Formation Through Real-World Simulation
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            You're launched into authentic work simulations where you deliver real outcomes. 
            Build defensible portfolio artifacts through structured practice, peer review, 
            and mentor evaluation — not just certificates.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="bg-background rounded-xl p-6 shadow-sm border border-border h-full transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <div className="text-5xl font-bold text-accent/20 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow between steps - desktop only */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-6 w-6 text-accent" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Evidence Types */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full mb-3">
                <span className="text-accent font-bold text-lg">📋</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Portfolio Artifacts</h4>
              <p className="text-sm text-muted-foreground">
                Documented deliverables from squad work
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full mb-3">
                <span className="text-accent font-bold text-lg">👥</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Peer Reviews</h4>
              <p className="text-sm text-muted-foreground">
                Structured feedback from squad members
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full mb-3">
                <span className="text-accent font-bold text-lg">🎓</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Mentor Evaluations</h4>
              <p className="text-sm text-muted-foreground">
                Professional assessments from practitioners
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full mb-3">
                <span className="text-accent font-bold text-lg">💼</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Stakeholder Feedback</h4>
              <p className="text-sm text-muted-foreground">
                Real-world validation of delivery work
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EvidenceFramework;

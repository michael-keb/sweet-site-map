import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Book, Users, Award, Target } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-24 md:pt-40 md:pb-32">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 tracking-tight leading-tight">
                We Help You<br />Get Tech Jobs
              </h1>
              <p className="text-xl md:text-2xl text-gray-500 leading-relaxed max-w-3xl mx-auto">
                Real work experience. Resume-worthy proof. That's what gets you hired.
              </p>
            </div>
          </div>
        </section>

        {/* Pedagogical Model */}
        <section className="py-32 bg-gray-50">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 tracking-tight text-center">
                How We Get You Tech Job Ready
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-16 text-center max-w-3xl mx-auto">
                Tech employers want experience, not just degrees. In 6 months, you'll build real deliverables, work in squads, and document work experience that gets you hired.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="bg-background rounded-2xl p-10 border border-gray-200 hover:shadow-lg transition-shadow">
                  <Book className="h-12 w-12 text-foreground mb-6" />
                  <h3 className="text-2xl font-bold text-foreground mb-4 tracking-tight">
                    Authentic Work Simulation
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Realistic work scenarios that simulate actual delivery environments. Navigate ambiguity. Make trade-offs. Achieve outcomes.
                  </p>
                </div>

                <div className="bg-background rounded-2xl p-10 border border-gray-200 hover:shadow-lg transition-shadow">
                  <Users className="h-12 w-12 text-foreground mb-6" />
                  <h3 className="text-2xl font-bold text-foreground mb-4 tracking-tight">
                    Your Squad Has Your Back
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Review each other's work. Give feedback. Get feedback. That's how you grow—together.
                  </p>
                </div>

                <div className="bg-background rounded-2xl p-10 border border-gray-200 hover:shadow-lg transition-shadow">
                  <Target className="h-12 w-12 text-foreground mb-6" />
                  <h3 className="text-2xl font-bold text-foreground mb-4 tracking-tight">
                    Mentors Who've Done It
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Learn from people who've shipped products and led teams. No theory professors.
                  </p>
                </div>

                <div className="bg-background rounded-2xl p-10 border border-gray-200 hover:shadow-lg transition-shadow">
                  <Award className="h-12 w-12 text-foreground mb-6" />
                  <h3 className="text-2xl font-bold text-foreground mb-4 tracking-tight">
                    Build Your Resume
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Every deliverable goes on your resume. Document real work that proves you can add value.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Research Basis */}
        <section className="py-32">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 tracking-tight">
                Built Around What<br />Tech Employers Hire For
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-16 max-w-3xl mx-auto">
                Every skill we teach is what tech companies actually need. Real-world capabilities that get you job offers.
              </p>

              <div className="space-y-8 text-left">
                <div className="bg-gray-50 rounded-2xl p-10">
                  <h3 className="text-2xl font-bold text-foreground mb-4 tracking-tight">
                    Industry Standards
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                    We train you in what companies actually need across tech roles:
                  </p>
                  <ul className="space-y-4 text-gray-600 text-lg">
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-foreground rounded-full"></span>
                      Software development and engineering practices
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-foreground rounded-full"></span>
                      Product and project management frameworks
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-foreground rounded-full"></span>
                      Data analysis and technical problem solving
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-foreground rounded-full"></span>
                      Team collaboration and delivery execution
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-2xl p-10">
                  <h3 className="text-2xl font-bold text-foreground mb-4 tracking-tight">
                    Continuous Improvement
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    We track what works. Members give us feedback. Mentors refine the process. 
                    We evolve as the job market evolves.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-32 bg-gray-50">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-20 tracking-tight">
                What We Believe
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 tracking-tight">
                    Do the Work
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Theory doesn't land jobs. Doing the work builds capability.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 tracking-tight">
                    Proof Over Certificates
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Your resume and work experience show what you can do. Test scores don't.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 tracking-tight">
                    Feedback Accelerates Growth
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Peer reviews and mentor critique make you better faster.
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

export default About;

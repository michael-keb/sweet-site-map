import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Users, Lightbulb, TrendingUp } from "lucide-react";

const Story = () => {
  const milestones = [
    {
      year: "2020",
      title: "The Problem Revealed",
      description: "After seeing hundreds of talented professionals struggle to land BA roles despite having certificates, we realized credentials weren't enough. Employers wanted proof of work."
    },
    {
      year: "2021",
      title: "Research & Testing",
      description: "We studied professional formation models from Harvard, INSEAD, and leading organizations. Tested squad-based learning with 3 pilot cohorts."
    },
    {
      year: "2022",
      title: "First Cohorts Launch",
      description: "Launched Applied Squad Track with 20 participants. 95% employment rate within 90 days proved the model worked."
    },
    {
      year: "2023",
      title: "Scale & Refine",
      description: "Expanded to 150+ members across 12 cohorts. Added Career Readiness and Partner Placement tracks based on participant feedback."
    },
    {
      year: "2024",
      title: "Industry Recognition",
      description: "Alumni placed at Fortune 500 companies. Partner with 8 hiring organizations. 500+ professional portfolios created."
    },
    {
      year: "2025",
      title: "The Future",
      description: "Expanding capability badges, corporate training, and international reach. Making evidence-based formation the standard."
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Evidence Over Certificates",
      description: "We believe your work should speak for itself. Not a piece of paper, not test scores—actual artifacts that demonstrate what you can do."
    },
    {
      icon: Users,
      title: "Formation Through Squad",
      description: "Learning happens in community. Peer review, collaboration, and shared accountability make you better faster than studying alone ever could."
    },
    {
      icon: Lightbulb,
      title: "Practice-Based Learning",
      description: "You don't learn by watching videos or memorizing frameworks. You learn by doing the work, getting feedback, and iterating."
    },
    {
      icon: TrendingUp,
      title: "Real-World Ready",
      description: "Everything we teach connects to what employers actually need. No theoretical exercises. No toy problems. Just real scenarios."
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
                Our Story
              </h1>
              <p className="text-xl md:text-2xl text-gray-500 leading-relaxed">
                Why we built Squad Institute
              </p>
            </div>
          </div>
        </section>
        {/* The Problem */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Badge className="mb-6">The Problem</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Credentials Stopped Working
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We saw it everywhere: Smart people with bootcamp certificates, training credentials, and online badges—all struggling to land their first tech role. The pattern was clear.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  <strong>Hiring managers didn't trust credentials anymore.</strong> Too many people had certificates but couldn't do the work. Employers wanted evidence. Work experience. Real projects. Actual output.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  But how do you get that evidence when you can't get hired without experience?
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Research */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Badge className="mb-6">The Research</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                We Looked at How Professionals Actually Develop
              </h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">Medical Residencies</h3>
                    <p className="text-muted-foreground">
                      Doctors learn by doing real work under supervision. They document cases, get feedback, and build evidence of competence over time. We adapted this model.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">Professional Formation Research</h3>
                    <p className="text-muted-foreground">
                      Harvard Business School and INSEAD research showed that cohort-based, peer-reviewed work accelerates professional development. We built that into our squads.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">What Employers Actually Hired</h3>
                    <p className="text-muted-foreground">
                      We interviewed 50+ hiring managers. They all said the same thing: "Show me what you've done." Portfolios beat resumes. Evidence beat credentials.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* The Solution */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Badge className="mb-6">The Solution</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Professional Formation Through Squad Delivery
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We created a structured way to build real work experience while working in professional squads. You practice on realistic scenarios. Your peers review your work. Mentors critique your thinking. Everything goes on your resume.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                When you finish, you're not just certified—you have <strong>verifiable work experience</strong>. Employers can see what you've delivered, check your references, and assess your capability before the interview.
              </p>
              <p className="text-lg font-semibold">
                That's the difference. That's why our members get hired.
              </p>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-4">What We Believe</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  The Principles That Guide Us
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex gap-4">
                          <div className="p-3 rounded-full bg-accent/10 h-fit">
                            <Icon className="h-6 w-6 text-accent" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                            <p className="text-muted-foreground">{value.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Journey/Milestones */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-4">Our Journey</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  How We Got Here
                </h2>
              </div>

              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>
                
                <div className="space-y-8">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="relative pl-0 md:pl-20">
                      <div className="absolute left-5 top-2 w-6 h-6 rounded-full bg-accent border-4 border-background hidden md:block"></div>
                      <Card className="hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                          <Badge className="mb-3">{milestone.year}</Badge>
                          <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                          <p className="text-muted-foreground">{milestone.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Looking Forward */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6">Looking Forward</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                We're Just Getting Started
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Every graduate who lands a role proves the model works. Every employer who hires based on evidence validates the approach. Every squad that ships together strengthens the network.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We're building a movement. One where your work speaks louder than your credentials. Where learning happens through doing. Where professional formation is accessible to everyone.
              </p>
              <p className="text-xl font-bold">
                Want to be part of it?
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Story;

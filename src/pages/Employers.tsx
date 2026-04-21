import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Check, Zap, Users, Target, Lightbulb, ArrowRight } from "lucide-react";

const Employers = () => {
  const proofPillars = [
    {
      icon: Zap,
      title: "Adaptability",
      description: "Real projects, new tech every sprint. They learn fast because they've been tested."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Squads simulate startup teams. They know how to work with others under pressure."
    },
    {
      icon: Target,
      title: "Coachability",
      description: "Mentored by practitioners, not professors. They take feedback and iterate quickly."
    },
    {
      icon: Lightbulb,
      title: "Ownership",
      description: "Deliverables, feedback, iteration. They ship—not just talk about shipping."
    }
  ];

  const hiringPaths = [
    {
      title: "Hire for Potential",
      subtitle: "Access emerging builders",
      features: [
        "Browse talent with documented momentum",
        "See what they've built, broken, and learned",
        "Hire hunger and trajectory, not just credentials",
        "Direct contact with candidates ready to prove themselves"
      ],
      cta: "Meet Emerging Talent",
      link: "/alumni"
    },
    {
      title: "Partner Track",
      subtitle: "Test real-world performance through projects",
      features: [
        "Squad members solve YOUR real business problems",
        "First look at talent while they're building",
        "12-month evaluation through actual work",
        "Hire people you've already seen perform"
      ],
      cta: "Let's Talk Potential",
      link: "/contact"
    },
    {
      title: "Upskill Inside",
      subtitle: "Turn employees into high-velocity squads",
      features: [
        "Transform your existing team",
        "Squad-based cohorts (8-12 people)",
        "Build momentum through real projects",
        "On-site or remote delivery"
      ],
      cta: "Request Proposal",
      link: "/contact"
    }
  ];

  const testimonials = [
    {
      quote: "We hired for attitude and got performance. These aren't polished resumes—they're people who want to prove themselves. That hunger is rare.",
      author: "Marcus Lee",
      role: "Engineering Director, FinTech Startup"
    },
    {
      quote: "The work experience was real. No fluff, no theoretical projects. We could see exactly what they'd done and how they handled feedback. That's what sold us.",
      author: "Priya Sharma",
      role: "Head of Product, SaaS Company"
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
                Hire Momentum, Not Resumes.
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
                Every Squad graduate has already built, failed, learned, and is hungry to do it again — this time for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to="/alumni">Meet Emerging Talent</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/contact">Let's Talk Potential</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Truth */}
        <section className="py-20 border-y border-border">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Hiring on credentials is guesswork.
                <br />
                Hiring on potential is ROI.
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Traditional hiring focuses on what people studied. We focus on what they can do—and more importantly, what they're ready to become.
              </p>
            </div>
          </div>
        </section>
        {/* The Squad Difference */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                The Squad Difference
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Four proof pillars that separate momentum from credentials.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {proofPillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="mb-6 flex justify-center">
                      <div className="p-4 rounded-full bg-primary/10">
                        <Icon className="h-10 w-10 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{pillar.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 md:py-32 bg-muted/30">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                How It Works
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Three clear employer paths to access momentum.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {hiringPaths.map((path, index) => (
                <Card key={index} className="hover:shadow-xl transition-all border-2">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{path.title}</h3>
                    <p className="text-muted-foreground mb-6">{path.subtitle}</p>
                    <ul className="space-y-3 mb-8">
                      {path.features.map((feature, i) => (
                        <li key={i} className="flex gap-3">
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full" size="lg">
                      <Link to={path.link}>
                        {path.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Proof Through People */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Proof Through People
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Real stories from companies who hired momentum.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-2">
                  <CardContent className="p-8">
                    <blockquote className="text-lg text-foreground mb-6 leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="border-t border-border pt-4">
                      <div className="font-bold text-foreground">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Founder's Manifesto */}
        <section className="py-24 md:py-32 bg-muted/30">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Why This Exists
                </h2>
              </div>
              <div className="space-y-6 text-lg md:text-xl text-foreground leading-relaxed">
                <p>
                  We built The Squad Institute because the world doesn't reward degrees — it rewards doers.
                </p>
                <p>
                  Employers don't hire credentials anymore. They hire proof of execution. They hire people who can adapt, ship, and grow under pressure.
                </p>
                <p>
                  Our mission: help companies hire the next generation of builders, not box-tickers.
                </p>
                <p className="font-bold text-2xl md:text-3xl pt-6">
                  If you're ready to hire potential in motion — let's talk.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Let's Build What's Next Together.
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
                Hire momentum. Hire potential. Hire the people who are already moving.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button asChild size="lg">
                  <Link to="/alumni">
                    Browse Talent
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/contact">
                    Book Intro Call
                  </Link>
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

export default Employers;
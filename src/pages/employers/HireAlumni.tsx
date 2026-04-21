import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Award, Briefcase, Target, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HireAlumni = () => {
  const talentPool = [
    {
      name: "Available Graduate",
      track: "Applied Squad Track",
      graduated: "January 2025",
      seeking: "Product Owner",
      experience: "5 years operations",
      skills: ["Requirements", "Stakeholder Management", "Process Modeling", "Agile"],
      location: "Remote / US",
      portfolioItems: 14,
      availability: "Immediate"
    },
    {
      name: "Available Graduate",
      track: "Career Readiness Track",
      graduated: "February 2025",
      seeking: "Product Owner",
      experience: "3 years project management",
      skills: ["Product Strategy", "Requirements", "Backlog Management", "Sprint Planning"],
      location: "NYC / Remote",
      portfolioItems: 9,
      availability: "2 weeks notice"
    },
    {
      name: "Available Graduate",
      track: "Partner Placement Track",
      graduated: "December 2024",
      seeking: "Business Systems Analyst",
      experience: "7 years technical support",
      skills: ["Data Analysis", "System Integration", "Gap Analysis", "Documentation"],
      location: "San Francisco / Hybrid",
      portfolioItems: 12,
      availability: "Immediate"
    }
  ];

  const whyHire = [
    {
      icon: Award,
      title: "Documented Work Experience",
      description: "Every graduate has 8-14 peer-reviewed projects you can evaluate before hiring. No guesswork."
    },
    {
      icon: Briefcase,
      title: "Job-Ready Skills",
      description: "Trained on real scenarios aligned with IIBA, PMI-ACP, and industry standards. They start productive on day one."
    },
    {
      icon: Target,
      title: "Vetted by Practitioners",
      description: "Mentors who've led teams and shipped products evaluate their work. We filter for quality."
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
                Hire Our Alumni
              </h1>
              <p className="text-xl md:text-2xl text-gray-500 mb-12 leading-relaxed">
                Pre-vetted tech talent with proven portfolios
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to="#talent">View Talent Pool</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/contact">Become a Partner</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        {/* Why Hire Our Alumni */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4">Why Hire Our Alumni</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Better Than Traditional Hiring</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Reduce hiring risk with candidates who have proven evidence of capability
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {whyHire.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="pt-8 pb-6">
                      <div className="mb-4 flex justify-center">
                        <div className="p-4 rounded-full bg-accent/10">
                          <Icon className="h-8 w-8 text-accent" />
                        </div>
                      </div>
                      <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Card className="mt-12 max-w-3xl mx-auto bg-accent/5 border-accent/20">
              <CardContent className="p-8">
                <h3 className="font-bold text-lg mb-4">What Our Alumni Bring:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="flex gap-2">
                    <Award className="h-5 w-5 text-accent flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Proven Artifacts</div>
                      <div className="text-muted-foreground">Technical specs, process models, documentation</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Award className="h-5 w-5 text-accent flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Peer-Reviewed Work</div>
                      <div className="text-muted-foreground">Quality validated by squad and mentors</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Award className="h-5 w-5 text-accent flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Squad Experience</div>
                      <div className="text-muted-foreground">Collaboration, feedback, retrospectives</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Award className="h-5 w-5 text-accent flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Industry Standards</div>
                      <div className="text-muted-foreground">IIBA, PMI-ACP, Agile aligned</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Talent Pool */}
        <section id="talent" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4">Available Talent</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Current Job Seekers</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Recent alumni actively seeking software, product, and technical roles
              </p>
            </div>

            {/* Filters */}
            <div className="max-w-4xl mx-auto mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search by skill..." className="pl-10" />
                </div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All Tracks" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Tracks</SelectItem>
                    <SelectItem value="applied">Applied Squad Track</SelectItem>
                    <SelectItem value="career">Career Readiness Track</SelectItem>
                    <SelectItem value="partner">Partner Placement Track</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All Locations" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    <SelectItem value="remote">Remote</SelectItem>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="hybrid">Hybrid</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Talent Cards */}
            <div className="max-w-4xl mx-auto space-y-6">
              {talentPool.map((candidate, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="font-bold text-xl mb-2">{candidate.seeking} Role</h3>
                            <div className="flex flex-wrap gap-2 mb-3">
                              <Badge variant="outline">{candidate.track}</Badge>
                              <Badge variant="outline">Graduated {candidate.graduated}</Badge>
                              <Badge variant="secondary">{candidate.availability}</Badge>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-3 text-sm">
                          <div>
                            <span className="font-semibold">Background:</span>
                            <span className="text-muted-foreground ml-2">{candidate.experience}</span>
                          </div>
                          <div>
                            <span className="font-semibold">Location:</span>
                            <span className="text-muted-foreground ml-2">{candidate.location}</span>
                          </div>
                          <div>
                            <span className="font-semibold">Work Experience:</span>
                            <span className="text-accent font-semibold ml-2">{candidate.portfolioItems} documented projects</span>
                          </div>
                          <div>
                            <span className="font-semibold">Key Skills:</span>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {candidate.skills.map((skill, i) => (
                                <Badge key={i} variant="secondary" className="text-xs">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-3 md:w-48">
                      <Button className="w-full">
                        View Work Experience
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                        <Button variant="outline" className="w-full">
                          Request Introduction
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-sm text-muted-foreground mb-4">
                New talent every month. <Link to="/contact" className="text-accent hover:underline">Get notified</Link> when talent matching your needs becomes available.
              </p>
            </div>
          </div>
        </section>

        {/* Hiring Process */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-4">How It Works</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple Hiring Process</h2>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-xl">1</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Browse Talent Pool</h3>
                    <p className="text-muted-foreground">Filter by skills, track, location, and availability. Review documented work experience.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-xl">2</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Review Work Experience</h3>
                    <p className="text-muted-foreground">Access documented projects. See actual work deliverables, peer reviews, and mentor feedback.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-xl">3</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Request Introduction</h3>
                    <p className="text-muted-foreground">We facilitate the connection and provide context on their formation journey.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-xl">4</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Interview & Hire</h3>
                    <p className="text-muted-foreground">Conduct your standard interview process. Make informed hiring decisions with documented work experience.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Card className="bg-accent text-accent-foreground max-w-4xl mx-auto">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Interested in Volume Hiring?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Partner with us for cohort-based recruitment, early access to talent, and tailored pathways
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" variant="secondary">
                    <Link to="/employers/partnerships">
                      Explore Partnerships
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="bg-transparent border-accent-foreground text-accent-foreground hover:bg-accent-foreground/10">
                    <Link to="/contact">Schedule Call</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HireAlumni;

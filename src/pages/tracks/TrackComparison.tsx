import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const TrackComparison = () => {
  const tracks = [
    {
      name: "Applied Squad",
      duration: "12 weeks",
      commitment: "10-15 hrs/wk",
      bestFor: "Career changers seeking comprehensive training"
    },
    {
      name: "Career Readiness",
      duration: "8 weeks",
      commitment: "8-12 hrs/wk",
      bestFor: "Job seekers who need portfolio fast"
    },
    {
      name: "Rapid Sprint",
      duration: "4 weeks",
      commitment: "15-20 hrs/wk",
      bestFor: "Pros with specific portfolio gaps"
    },
    {
      name: "Badges",
      duration: "Self-paced",
      commitment: "20-30 hrs total",
      bestFor: "Focused skill development"
    },
    {
      name: "Partner Placement",
      duration: "10 weeks",
      commitment: "10-15 hrs/wk",
      bestFor: "Guaranteed interviews with partners"
    }
  ];

  const features = [
    {
      category: "Work Experience Development",
      items: [
        { feature: "Portfolio Artifacts Created", applied: "12+", career: "8+", rapid: "4-6", badges: "1-2", partner: "10+" },
        { feature: "Peer-Reviewed Work", applied: true, career: true, rapid: false, badges: false, partner: true },
        { feature: "Work Documentation Platform Access", applied: "Lifetime", career: "Lifetime", rapid: "Lifetime", badges: "Lifetime", partner: "Lifetime" },
        { feature: "Resume-Ready Experience", applied: true, career: true, rapid: true, badges: true, partner: true },
      ]
    },
    {
      category: "Learning Experience",
      items: [
        { feature: "Squad Collaboration", applied: true, career: true, rapid: false, badges: false, partner: true },
        { feature: "Mentor Reviews", applied: "Weekly", career: "Bi-weekly", rapid: "Final only", badges: "Final only", partner: "Weekly" },
        { feature: "Cohort Community", applied: true, career: true, rapid: false, badges: false, partner: true },
        { feature: "Live Sessions", applied: "2x/week", career: "1x/week", rapid: "4 total", badges: false, partner: "2x/week" },
      ]
    },
    {
      category: "Career Support",
      items: [
        { feature: "Resume & LinkedIn Review", applied: true, career: true, rapid: false, badges: false, partner: true },
        { feature: "Mock Interviews", applied: "3 sessions", career: "5 sessions", rapid: false, badges: false, partner: "3 sessions" },
        { feature: "Job Search Strategy", applied: true, career: true, rapid: false, badges: false, partner: true },
        { feature: "Partner Company Intros", applied: false, career: false, rapid: false, badges: false, partner: true },
        { feature: "Guaranteed Interviews", applied: false, career: false, rapid: false, badges: false, partner: "3 companies" },
      ]
    },
    {
      category: "Skills Covered",
      items: [
        { feature: "Requirements Engineering", applied: true, career: true, rapid: "selective", badges: "1 badge", partner: true },
        { feature: "Stakeholder Management", applied: true, career: true, rapid: "selective", badges: "1 badge", partner: true },
        { feature: "Process Modeling", applied: true, career: true, rapid: "selective", badges: "1 badge", partner: true },
        { feature: "Product Management", applied: true, career: true, rapid: "selective", badges: "1 badge", partner: true },
        { feature: "Agile Delivery", applied: true, career: true, rapid: "selective", badges: "1 badge", partner: true },
        { feature: "Data Analysis", applied: true, career: false, rapid: "selective", badges: "1 badge", partner: true },
      ]
    },
    {
      category: "Access & Support",
      items: [
        { feature: "Alumni Network", applied: true, career: true, rapid: true, badges: true, partner: true },
        { feature: "Resource Library", applied: true, career: true, rapid: true, badges: "limited", partner: true },
        { feature: "Office Hours", applied: "Weekly", career: "Bi-weekly", rapid: false, badges: false, partner: "Weekly" },
        { feature: "Post-Grad Support", applied: "6 months", career: "3 months", rapid: "1 month", badges: false, partner: "12 months" },
      ]
    },
  ];

  const renderValue = (value: any) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className="h-5 w-5 text-accent mx-auto" />
      ) : (
        <X className="h-5 w-5 text-muted-foreground mx-auto" />
      );
    }
    return <span className="text-sm">{value}</span>;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="pt-32 pb-24 md:pt-40 md:pb-32">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 tracking-tight">
                Compare All Tracks
              </h1>
              <p className="text-xl md:text-2xl text-gray-500 mb-12 leading-relaxed">
                Find your perfect fit
              </p>
              <Button asChild size="lg">
                <Link to="/schedule">Schedule Info Session</Link>
              </Button>
            </div>
          </div>
        </section>
        {/* Quick Overview */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4">Quick Overview</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Track Basics</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {tracks.map((track, index) => (
                <Card key={index} className={index === 0 ? "border-accent shadow-lg" : ""}>
                  <CardContent className="p-6">
                    {index === 0 && <Badge className="mb-3 w-full justify-center">Most Popular</Badge>}
                    <h3 className="font-bold text-lg mb-4 text-center">{track.name}</h3>
                    <div className="space-y-3 text-center text-sm">
                      <div>
                        <div className="text-muted-foreground">Duration</div>
                        <div className="font-semibold">{track.duration}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Time/Week</div>
                        <div className="font-semibold">{track.commitment}</div>
                      </div>
                      <div className="pt-3 border-t">
                        <div className="text-xs text-muted-foreground mb-2">Best For:</div>
                        <div className="text-xs">{track.bestFor}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Comparison */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4">Detailed Comparison</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Feature-by-Feature Breakdown</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                See exactly what you get in each track
              </p>
            </div>

            <div className="space-y-12">
              {features.map((section, sectionIndex) => (
                <div key={sectionIndex}>
                  <h3 className="text-2xl font-bold mb-6">{section.category}</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full bg-background rounded-lg overflow-hidden">
                      <thead>
                        <tr className="bg-muted">
                          <th className="text-left p-4 font-semibold min-w-[250px]">Feature</th>
                          <th className="text-center p-4 font-semibold min-w-[120px]">Applied Squad</th>
                          <th className="text-center p-4 font-semibold min-w-[120px]">Career Ready</th>
                          <th className="text-center p-4 font-semibold min-w-[120px]">Rapid Sprint</th>
                          <th className="text-center p-4 font-semibold min-w-[120px]">Badges</th>
                          <th className="text-center p-4 font-semibold min-w-[120px]">Partner Track</th>
                        </tr>
                      </thead>
                      <tbody>
                        {section.items.map((row, rowIndex) => (
                          <tr key={rowIndex} className="border-t hover:bg-muted/30 transition-colors">
                            <td className="p-4 font-medium">{row.feature}</td>
                            <td className="p-4 text-center">{renderValue(row.applied)}</td>
                            <td className="p-4 text-center">{renderValue(row.career)}</td>
                            <td className="p-4 text-center">{renderValue(row.rapid)}</td>
                            <td className="p-4 text-center">{renderValue(row.badges)}</td>
                            <td className="p-4 text-center">{renderValue(row.partner)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Decision Helper */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-4">Decision Helper</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Which Track is Right for You?</h2>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-2">Choose Applied Squad if:</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• You're changing careers and want comprehensive training</li>
                      <li>• You learn best in collaborative environments</li>
                      <li>• You want the full work experience and resume building program</li>
                      <li>• You have 10-15 hours per week for 12 weeks</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-2">Choose Career Readiness if:</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• You're actively job searching and need resume experience fast</li>
                      <li>• You have some tech knowledge already</li>
                      <li>• You want focused interview prep and job search support</li>
                      <li>• You have 8-12 hours per week for 8 weeks</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-2">Choose Rapid Sprint if:</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• You're an experienced pro with specific resume gaps</li>
                      <li>• You're in active interviews and need documented experience quickly</li>
                      <li>• You prefer independent work with mentor feedback</li>
                      <li>• You can commit 15-20 hours per week for 4 weeks</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-2">Choose Capability Badges if:</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• You want to learn specific skills at your own pace</li>
                      <li>• You're already employed but building expertise</li>
                      <li>• You prefer flexible, self-paced learning</li>
                      <li>• You want stackable credentials</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-2">Choose Partner Placement if:</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• You want guaranteed interviews with hiring partners</li>
                      <li>• You're serious about career transformation</li>
                      <li>• You're willing to relocate or work remotely</li>
                      <li>• You want extended post-grad support</li>
                    </ul>
                  </CardContent>
                </Card>
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
                  Still Not Sure?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Schedule a free info session and we'll help you find the right path
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" variant="secondary">
                    <Link to="/schedule">
                      Schedule Free Info Session
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="bg-transparent border-accent-foreground text-accent-foreground hover:bg-accent-foreground/10">
                    <Link to="/contact">Ask Questions</Link>
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

export default TrackComparison;

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AlumniStories = () => {
  const companies = [
    { name: "Tech Solutions Inc.", industry: "Technology" },
    { name: "FinTech Innovations", industry: "Finance" },
    { name: "Healthcare Solutions", industry: "Healthcare" },
    { name: "Retail Dynamics", industry: "Retail" },
    { name: "SaaS Startup", industry: "Technology" },
    { name: "Enterprise Software Co", industry: "Technology" },
    { name: "Digital Media Group", industry: "Technology" },
    { name: "Financial Services Corp", industry: "Finance" },
    { name: "E-commerce Ventures", industry: "Retail" },
    { name: "Cloud Infrastructure Co", industry: "Technology" },
    { name: "Data Analytics Firm", industry: "Technology" },
    { name: "Product Development Labs", industry: "Technology" },
    { name: "Insurance Tech Firm", industry: "Finance" },
    { name: "Medical Systems Co", industry: "Healthcare" },
    { name: "Consumer Brands Inc", industry: "Retail" },
    { name: "Logistics Platform", industry: "Technology" }
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
                Where Squad Members Work
              </h1>
              <p className="text-xl md:text-2xl text-gray-500 mb-12 leading-relaxed">
                Real companies. Real work experience.
              </p>
              <Button asChild size="lg">
                <Link to="/apply">Start Your Journey</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Companies Grid */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-6xl mx-auto">
              <p className="text-center text-lg text-muted-foreground mb-16">
                Our practitioners have built work experience across {companies.length} companies in technology, finance, healthcare, and retail sectors.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {companies.map((company, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-8 text-center">
                      <h3 className="text-xl font-bold mb-2">{company.name}</h3>
                      <Badge variant="outline">{company.industry}</Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <Card className="bg-accent text-accent-foreground max-w-4xl mx-auto">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Write Your Success Story?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Join our next cohort and build the work experience that transforms your career
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" variant="secondary">
                    <Link to="/schedule">
                      Schedule Free Info Session
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="bg-transparent border-accent-foreground text-accent-foreground hover:bg-accent-foreground/10">
                    <Link to="/apply">Apply Now</Link>
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

export default AlumniStories;

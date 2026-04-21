import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Alumni = () => {
  const companies = [
    "Tech Solutions Inc.",
    "FinTech Innovations",
    "Healthcare Solutions",
    "Retail Dynamics",
    "SaaS Startup",
    "Enterprise Software Co",
    "Digital Media Group",
    "Financial Services Corp",
    "E-commerce Ventures",
    "Cloud Infrastructure Co",
    "Data Analytics Firm",
    "Product Development Labs"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 tracking-tight">
              Where Our<br />Alumni Work
            </h1>
              <p className="text-xl md:text-2xl text-gray-500 leading-relaxed max-w-3xl mx-auto mb-12">
                Real professionals who transformed their careers through real work experience.
              </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/apply">Start Your Journey</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/tracks">View All Tracks</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <main className="flex-1">
        {/* Companies Section */}
        <section className="py-32 bg-gray-50">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                Where Squad Members Work
              </h2>
              <p className="text-xl text-gray-600 mb-20 leading-relaxed max-w-3xl mx-auto">
                Our practitioners have built work experience with companies across technology, finance, healthcare, and beyond.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {companies.map((company, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-center p-6 bg-background rounded-xl hover:shadow-md transition-shadow"
                  >
                    <span className="text-base text-gray-700 font-medium text-center">
                      {company}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
                Ready to Write Your<br />Success Story?
              </h2>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
                Join our next cohort and build the work experience that gets you hired
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to="/schedule">Schedule Info Session</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/apply">Apply Now</Link>
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

export default Alumni;
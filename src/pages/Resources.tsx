import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";

const Resources = () => {
  const publicResources = [
    {
      title: "Squad Formation Framework",
      description: "Overview of squad-based delivery methodology and formation principles",
      type: "PDF Guide"
    },
    {
      title: "Stakeholder Mapping Template",
      description: "Template for identifying and analyzing project stakeholders",
      type: "Excel Template"
    },
    {
      title: "Requirements Template",
      description: "Standard format for documenting clear requirements with acceptance criteria",
      type: "Document Template"
    },
    {
      title: "Retrospective Guide",
      description: "Facilitation guide for conducting effective squad retrospectives",
      type: "PDF Guide"
    }
  ];

  const participantResources = [
    { title: "Delivery Frameworks Library", type: "Resource Collection" },
    { title: "Case Study Archive", type: "Learning Materials" },
    { title: "Tool Setup Guides", type: "Technical Documentation" },
    { title: "Reading List & Research Papers", type: "Academic Resources" }
  ];

  const insights = [
    {
      title: "Evidence-Based Work Experience Documentation",
      description: "Research on documenting provable work experience for tech careers",
      date: "March 2025"
    },
    {
      title: "The Product Professional Labor Market",
      description: "Industry trends and hiring patterns for squad roles",
      date: "February 2025"
    },
    {
      title: "Squad-Based Learning Outcomes",
      description: "Data on participant outcomes from cohort-based delivery practice",
      date: "January 2025"
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
                Resources
              </h1>
              <p className="text-xl md:text-2xl text-gray-500 leading-relaxed">
                Templates and guides. Most are free.
              </p>
            </div>
          </div>
        </section>

        {/* Public Resources */}
        <section className="py-32">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 tracking-tight">
                Free Resources
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {publicResources.map((resource) => (
                  <div
                    key={resource.title}
                    className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center">
                          <FileText className="h-7 w-7 text-foreground" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-foreground text-lg mb-3 tracking-tight">
                          {resource.title}
                        </h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {resource.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">
                            {resource.type}
                          </span>
                          <Button variant="ghost" size="sm" className="gap-2">
                            <Download className="h-4 w-4" />
                            Download
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Research & Insights */}
        <section className="py-32 bg-gray-50">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 tracking-tight">
                Insights & Research
              </h2>

              <div className="space-y-8">
                {insights.map((insight) => (
                  <div
                    key={insight.title}
                    className="bg-background border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start justify-between gap-6">
                      <div className="flex-1">
                        <h3 className="font-bold text-foreground text-2xl mb-3 tracking-tight">
                          {insight.title}
                        </h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {insight.description}
                        </p>
                        <span className="text-sm text-gray-500">
                          {insight.date}
                        </span>
                      </div>
                      <Button variant="outline" size="sm">
                        Read More
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;

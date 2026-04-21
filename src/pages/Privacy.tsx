import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <section className="pt-32 pb-32 md:pt-40 md:pb-40">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8 tracking-tight">Privacy Policy</h1>
              
              <p className="text-gray-500 mb-16">Last updated: November 6, 2025</p>

              <div className="space-y-16">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6 tracking-tight">Information We Collect</h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Squad Institute collects information that you provide directly to us when you apply for our pathways, register for sessions, download resources, or contact us.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6 tracking-tight">How We Use Your Information</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    We use the information to process applications, provide services, send relevant content, respond to inquiries, and improve our pathways.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6 tracking-tight">Information Sharing</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    We do not sell, trade, or rent your personal information to third parties. We may share information with service providers who assist in operating our pathways.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6 tracking-tight">Your Rights</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    You have the right to access, correct, delete, or opt-out of your personal information at any time.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6 tracking-tight">Contact Us</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    If you have questions about this Privacy Policy, contact us at privacy@squadinstitute.com
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

export default Privacy;

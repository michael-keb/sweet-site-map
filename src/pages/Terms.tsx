import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <section className="pt-32 pb-32 md:pt-40 md:pb-40">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8 tracking-tight">Terms of Service</h1>
              
              <p className="text-gray-500 mb-16">Last updated: November 6, 2025</p>

              <div className="space-y-16">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6 tracking-tight">Acceptance of Terms</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    By accessing or using Squad Institute's services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6 tracking-tight">Description of Service</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Squad Institute provides professional development pathways for tech professionals. Our services include practitioner-led coaching, work experience placement, information sessions, resources, and career support.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6 tracking-tight">User Responsibilities</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    You are responsible for maintaining the confidentiality of your account, all activities under your account, and providing accurate information.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6 tracking-tight">Intellectual Property</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    All content provided through our services is owned by Squad Institute. You may not reproduce, distribute, or use our materials without permission.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6 tracking-tight">Contact Information</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    If you have questions about these Terms, contact us at legal@squadinstitute.com
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

export default Terms;

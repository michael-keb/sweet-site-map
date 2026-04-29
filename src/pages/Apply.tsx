import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Apply = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleApply = () => {
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section className="pt-40 pb-12 md:pt-48 md:pb-16">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-6">Apply for financing</p>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight leading-[1.05]">Up to $20,000.</h1>
              <p className="text-xl md:text-2xl text-gray-500 leading-relaxed">One step to get started. We'll guide you through the rest.</p>
            </div>
          </div>
        </section>

        <section className="pb-24 md:pb-32">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto">
              {submitted ? (
                <div className="bg-gray-50 rounded-2xl p-12 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                    <Check className="h-8 w-8 text-accent" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">You're in.</h2>
                  <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed mb-8">
                    Continue to the application form to tell us a bit about you.
                  </p>
                  <Button asChild size="lg" className="text-base">
                    <a href="https://forms.gle/" target="_blank" rel="noopener noreferrer">
                      Continue to application form
                    </a>
                  </Button>
                </div>
              ) : (
                <div className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center">
                  <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-6">Amount</p>
                  <p className="text-6xl md:text-7xl font-bold text-foreground tracking-tight mb-10">$20,000</p>
                  <Button onClick={handleApply} size="lg" className="text-base px-12">
                    Apply
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Apply;

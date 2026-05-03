import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FAQSection } from "@/components/FAQSection";
import { ApplyCTA } from "@/components/ApplyCTA";
import { ApplyDialog } from "@/components/ApplyDialog";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { loanProducts } from "@/data/loans";
import financeHero from "@/assets/finance-hero.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-6">
                  For The Squad Institute
                </p>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 tracking-tight leading-[1.05]">
                  Start the program.
                  <br />
                  Focus on the work.
                </h1>
                <p className="text-xl md:text-2xl text-gray-500 mb-10 leading-relaxed max-w-xl">
                  A simple plan that supports your Squad Institute placement program — so you can focus on launching your career.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <ApplyDialog>
                    <Button size="lg" className="text-base">Apply for financing</Button>
                  </ApplyDialog>
                  <Button asChild size="lg" variant="outline" className="text-base">
                    <Link to="/loans/career-launch-plan">See plans</Link>
                  </Button>
                </div>
                <div className="flex flex-wrap gap-x-8 gap-y-3 mt-8 text-sm text-gray-500">
                  <span className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-accent" /> Quick decisions
                  </span>
                  <span className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-accent" /> Built for the program
                  </span>
                  <span className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-accent" /> Real people behind it
                  </span>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={financeHero}
                    alt="Squad Institute participant reviewing their career plan"
                    width={1600}
                    height={1024}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Manifesto */}
        <section className="py-24 md:py-32 bg-foreground text-background">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight leading-tight">
                The program is the asset.
                <br />
                Cost shouldn't be the blocker.
              </h2>
              <div className="text-xl md:text-2xl space-y-6 leading-relaxed opacity-90">
                <p>
                  The Squad Institute exists to put people into real roles through real work, not theory. The bottleneck for most people isn't capability — it's getting started.
                </p>
                <p>
                  <strong>Squad Institute Finance was built to remove that bottleneck.</strong> A simple plan, built around the program.
                </p>
                <p>
                  You ask. We assess honestly. If it fits, great. If it doesn't, we tell you why.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Plan */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-3xl mb-16">
              <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-6">
                Career Launch Plan
              </p>
              <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
                Start your career.
              </h2>
              <p className="text-lg md:text-xl text-gray-500 leading-relaxed">
                One simple plan, built around your Squad Institute placement program.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {loanProducts.map((loan) => (
                <Link
                  key={loan.slug}
                  to={`/loans/${loan.slug}`}
                  className="group block p-10 bg-gray-50 rounded-2xl hover:bg-foreground hover:text-background transition-all duration-300"
                >
                  <h3 className="text-3xl font-bold mb-4 tracking-tight">
                    {loan.name}
                  </h3>
                  <p className="text-base text-gray-500 group-hover:text-background/70 mb-8 leading-relaxed">
                    {loan.tagline}
                  </p>
                  <span className="inline-flex items-center text-sm font-semibold gap-2 group-hover:gap-3 transition-all">
                    See plan <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why us */}
        <section className="py-24 md:py-32 bg-gray-50">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-6">
                Why Squad Institute Finance
              </p>
              <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">
                Quietly different.
              </h2>
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              {[
                {
                  title: "Built around your career",
                  description:
                    "We look at your situation and your trajectory — not just a number from a bureau.",
                },
                {
                  title: "Built for the program",
                  description:
                    "Designed specifically for The Squad Institute, so you're set up properly from day one.",
                },
                {
                  title: "Simple and clear",
                  description:
                    "No surprises. The full picture is shared with you before you accept.",
                },
                {
                  title: "Real people behind it",
                  description:
                    "An Australian-based team you can call when something doesn't quite make sense.",
                },
              ].map((item) => (
                <div key={item.title}>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-lg text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto">
              <FAQSection />
            </div>
          </div>
        </section>

        <ApplyCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

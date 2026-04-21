import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FAQSection } from "@/components/FAQSection";
import { ApplyCTA } from "@/components/ApplyCTA";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { loanProducts, standardSteps } from "@/data/loans";
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
                  Personal lending for Australia
                </p>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 tracking-tight leading-[1.05]">
                  Honest credit.
                  <br />
                  Quietly done well.
                </h1>
                <p className="text-xl md:text-2xl text-gray-500 mb-10 leading-relaxed max-w-xl">
                  Personal loans from $2,001 to $5,000. Fast decisions, transparent
                  terms, and a real human on the other end if you need one.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="text-base">
                    <Link to="/apply">Apply Now</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="text-base">
                    <Link to="/loans/personal-loans">Explore loans</Link>
                  </Button>
                </div>
                <div className="flex flex-wrap gap-x-8 gap-y-3 mt-12 text-sm text-gray-500">
                  <span className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-accent" /> Same-day decisions
                  </span>
                  <span className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-accent" /> Funds in 24 hours
                  </span>
                  <span className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-accent" /> No early-payout penalty
                  </span>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={financeHero}
                    alt="Person reviewing finances at home"
                    width={1600}
                    height={1024}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Manifesto / Why we exist */}
        <section className="py-24 md:py-32 bg-foreground text-background">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight leading-tight">
                We're not a bank.
                <br />
                We're not a payday lender.
              </h2>
              <div className="text-xl md:text-2xl space-y-6 leading-relaxed opacity-90">
                <p>
                  Most Australians don't need a mortgage. They need a small, sensible
                  loan to handle a real-life moment — a dental bill, a bond, a fridge
                  that gave up.
                </p>
                <p>
                  Squad Finance was built for that. <strong>Small loans, clear terms,
                  fair assessment.</strong> No fine-print theatre, no surprise fees,
                  no rent-to-own traps.
                </p>
                <p>
                  You ask for what you need. We assess honestly. If it fits, we fund
                  it — usually within a day. If it doesn't, we tell you why.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Loan grid */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-3xl mb-16">
              <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-6">
                Loan products
              </p>
              <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
                One loan size doesn't fit
                <br />
                every life moment.
              </h2>
              <p className="text-lg md:text-xl text-gray-500 leading-relaxed">
                Pick the loan that matches what you're actually using it for. Same
                honest terms across all of them.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {loanProducts.map((loan) => (
                <Link
                  key={loan.slug}
                  to={`/loans/${loan.slug}`}
                  className="group block p-8 bg-gray-50 rounded-2xl hover:bg-foreground hover:text-background transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold mb-3 tracking-tight">
                    {loan.name}
                  </h3>
                  <p className="text-base text-gray-500 group-hover:text-background/70 mb-8 leading-relaxed">
                    {loan.tagline}
                  </p>
                  <span className="inline-flex items-center text-sm font-semibold gap-2 group-hover:gap-3 transition-all">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-24 md:py-32 bg-gray-50">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-6">
                How it works
              </p>
              <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">
                Three steps.
                <br />
                No paperwork mountain.
              </h2>
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
              {standardSteps.map((step, i) => (
                <div key={step.title}>
                  <div className="text-6xl font-bold text-accent mb-6 tracking-tight">
                    0{i + 1}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why us */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-6">
                Why Squad Finance
              </p>
              <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">
                Quietly different.
              </h2>
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              {[
                {
                  title: "Built around you",
                  description:
                    "We assess your actual situation — income, expenses, goals — not just a credit score number.",
                },
                {
                  title: "Transparent always",
                  description:
                    "You see the rate, the fee, the total cost. No reveals on page seven of the contract.",
                },
                {
                  title: "Reward early payers",
                  description:
                    "Pay early, pay nothing extra. We take that as a sign things are going well.",
                },
                {
                  title: "Real people behind it",
                  description:
                    "An Australian-based team you can call if something doesn't quite make sense.",
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
        <section className="py-24 md:py-32 bg-gray-50">
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

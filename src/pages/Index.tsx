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
                  Buy Now Pay Later for The Squad Institute
                </p>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 tracking-tight leading-[1.05]">
                  Start the program.
                  <br />
                  Pay in instalments.
                </h1>
                <p className="text-xl md:text-2xl text-gray-500 mb-10 leading-relaxed max-w-xl">
                  Split your Squad Institute program fee — up to $20,000 — into
                  simple weekly or fortnightly instalments. Interest Rate: Free
                  when you pay on time.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="text-base">
                    <Link to="/apply">Apply for financing</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="text-base">
                    <Link to="/loans/career-launch-plan">See plans</Link>
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-4 max-w-xl">
                  Applying for the program ≠ final loan approval. You can apply for finance before you're enrolled and receive pre-approval subject to verification.
                </p>
                <div className="flex flex-wrap gap-x-8 gap-y-3 mt-8 text-sm text-gray-500">
                  <span className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-accent" /> Interest Rate: Free, paid on time
                  </span>
                  <span className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-accent" /> Fees paid direct to the Institute
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
                  The Squad Institute exists to put people into real roles —
                  Product Owner, Business Analyst, delivery — through real work,
                  not theory. The bottleneck for most people isn't capability.
                  It's the upfront cheque.
                </p>
                <p>
                  Squad Institute Finance was built to remove that bottleneck.{" "}
                  <strong>
                    Buy now, pay later. Fees go directly to your program. You repay
                    in equal weekly or fortnightly instalments over 12 months. An
                    admin fee will be charged if repayments extend beyond the
                    initial 12-month period.
                  </strong>
                </p>
                <p>
                  You ask for what the program costs. We assess honestly. If it
                  fits, we fund it — usually within a day. If it doesn't, we
                  tell you why.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Plan grid */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-3xl mb-16">
              <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-6">
                Two plans
              </p>
              <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
                Whether you're starting,
                <br />
                or stepping up.
              </h2>
              <p className="text-lg md:text-xl text-gray-500 leading-relaxed">
                Pick the plan that matches where you are. Same honest terms
                across both.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

        {/* How financing works */}
        <section className="py-24 md:py-32 bg-gray-50">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-6">
                How financing works
              </p>
              <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">
                Three steps.
                <br />
                No paperwork mountain.
              </h2>
              <p className="text-base md:text-lg text-gray-500 mt-6 leading-relaxed">
                You can apply for financing <strong>before</strong> you're enrolled in The Squad Institute. We may pre-approve your plan subject to verification. Final loan approval is conditional on meeting Squad Institute graduation requirements as set out in your credit contract.
              </p>
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

        {/* Repayment example */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
              <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-6">
                What it looks like
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
                A worked example.
              </h2>
              <p className="text-lg md:text-xl text-gray-500 mb-12 leading-relaxed">
                Examples only — not a quote. Your actual repayments depend on the program fee, your chosen pay cycle, and your final credit contract.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-8 bg-gray-50 rounded-2xl">
                  <p className="text-sm uppercase tracking-[0.15em] text-gray-500 mb-3">Example A</p>
                  <h3 className="text-2xl font-bold text-foreground mb-4 tracking-tight">$20,000 cleared in Year 1</h3>
                  <ul className="space-y-2 text-base text-gray-700">
                    <li><strong>Program fee:</strong> $20,000</li>
                    <li><strong>Term:</strong> 12 months</li>
                    <li><strong>Fortnightly:</strong> ≈ $769 × 26 fortnights</li>
                    <li><strong>Interest:</strong> Free (paid on time)</li>
                    <li><strong>Admin fee:</strong> None — cleared in Year 1</li>
                  </ul>
                </div>
                <div className="p-8 bg-gray-50 rounded-2xl">
                  <p className="text-sm uppercase tracking-[0.15em] text-gray-500 mb-3">Example B</p>
                  <h3 className="text-2xl font-bold text-foreground mb-4 tracking-tight">Spills into Year 2</h3>
                  <ul className="space-y-2 text-base text-gray-700">
                    <li><strong>Year 1 repaid:</strong> ≈ $15,000 (~$577/fortnight)</li>
                    <li><strong>Year 2 remaining:</strong> $5,000</li>
                    <li><strong>Year 2 instalment:</strong> ≈ $625/fortnight + $50 admin fee ≈ $675/fortnight</li>
                    <li><strong>Why:</strong> Admin fee applies because repayments extend beyond the initial 12-month period.</li>
                  </ul>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-6 leading-relaxed">
                A $50 dishonour fee may apply if a scheduled instalment fails. All fees are disclosed in your credit contract before you accept.
              </p>
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
                  title: "Built around your career, not a credit score",
                  description:
                    "We assess your situation, your program, and your trajectory — not just a number from a bureau.",
                },
                {
                  title: "Paid direct to the program",
                  description:
                    "Funds settle your Squad Institute fees directly, so you never carry the cash risk in the middle.",
                },
                {
                  title: "Interest Rate: Free if you pay on time",
                  description:
                    "Stick to the weekly or fortnightly schedule and you pay the program price — not a cent more in interest.",
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

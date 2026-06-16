import { useParams, Navigate, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FAQSection } from "@/components/FAQSection";
import { ApplyCTA } from "@/components/ApplyCTA";
import { HowFinancingWorks } from "@/components/HowFinancingWorks";
import { ProductKeyFacts } from "@/components/ProductKeyFacts";
import { RepaymentExamples } from "@/components/RepaymentExamples";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import {
  getLoanBySlug,
  loanProducts,
  standardEligibilityList,
  standardSteps,
} from "@/data/loans";

const LoanProduct = () => {
  const { slug } = useParams();
  const loan = getLoanBySlug(slug);

  if (!loan) return <Navigate to="/" replace />;

  const otherLoans = loanProducts.filter((l) => l.slug !== loan.slug);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-40 pb-20 md:pt-48 md:pb-28">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl">
              <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-6">{loan.name}</p>
              <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 tracking-tight leading-[1.05] whitespace-pre-line">
                {loan.heroTitle}
              </h1>
              <p className="text-xl md:text-2xl text-gray-500 mb-10 leading-relaxed max-w-3xl">
                {loan.heroSubtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-base">
                  <Link to="/apply">Apply for financing</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-base">
                  <Link to="/contact">Ask a question</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-20 md:py-28 bg-gray-50">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-foreground leading-relaxed">{loan.intro}</p>
            </div>
          </div>
        </section>

        {/* Key facts */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-6 md:px-12">
            <ProductKeyFacts />
          </div>
        </section>

        {/* Uses */}
        <section className="py-20 md:py-28 bg-gray-50">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-3xl mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
                What it's for
              </h2>
              <p className="text-lg md:text-xl text-gray-500 leading-relaxed">
                A few of the moments this plan was built for.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {loan.uses.map((u) => (
                <div key={u.title} className="p-8 bg-background rounded-2xl">
                  <h3 className="text-2xl font-bold text-foreground mb-3 tracking-tight">
                    {u.title}
                  </h3>
                  <p className="text-base text-gray-500 leading-relaxed">{u.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who it's for */}
        {loan.whoFor && (
          <section className="py-20 md:py-28 bg-foreground text-background">
            <div className="container mx-auto px-6 md:px-12">
              <div className="max-w-3xl mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Who it's for</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {loan.whoFor.map((w) => (
                  <div key={w.title}>
                    <h3 className="text-2xl font-bold mb-3 tracking-tight">{w.title}</h3>
                    <p className="text-base opacity-80 leading-relaxed">{w.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* How financing works */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-6 md:px-12">
            <HowFinancingWorks />
          </div>
        </section>

        {/* Repayments */}
        <section className="py-20 md:py-28 bg-gray-50">
          <div className="container mx-auto px-6 md:px-12">
            <RepaymentExamples />
          </div>
        </section>

        {/* How to apply + eligibility */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-10 tracking-tight">
                  How to apply
                </h2>
                <ol className="space-y-8">
                  {standardSteps.map((s, i) => (
                    <li key={s.title} className="flex gap-6">
                      <span className="text-3xl font-bold text-accent shrink-0 w-12">
                        0{i + 1}
                      </span>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2 tracking-tight">
                          {s.title}
                        </h3>
                        <p className="text-base text-gray-600 leading-relaxed">{s.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-10 tracking-tight">
                  Eligibility
                </h2>
                <ul className="space-y-4">
                  {standardEligibilityList.map((e) => (
                    <li key={e} className="flex gap-3 text-lg text-gray-700">
                      <Check className="h-6 w-6 text-accent shrink-0 mt-1" />
                      <span>{e}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-8 text-sm text-gray-500 leading-relaxed">
                  All applications are subject to our eligibility criteria. Approval is not
                  guaranteed. Final loan approval is conditional on meeting Squad Institute
                  graduation requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-28 bg-gray-50">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto">
              <FAQSection
                title="About this plan"
                subtitle="What people most often ask before applying."
                faqs={loan.faqs}
                showCTA={false}
              />
            </div>
          </div>
        </section>

        {/* Other plans */}
        {otherLoans.length > 0 && (
          <section className="py-20 md:py-28">
            <div className="container mx-auto px-6 md:px-12">
              <div className="max-w-3xl mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                  The other plan you might consider
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {otherLoans.map((l) => (
                  <Link
                    key={l.slug}
                    to={`/loans/${l.slug}`}
                    className="group block p-8 bg-gray-50 rounded-2xl border border-gray-200 hover:border-foreground transition-all"
                  >
                    <h3 className="text-xl font-bold text-foreground mb-2 tracking-tight">
                      {l.name}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{l.tagline}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <ApplyCTA />
      </main>
      <Footer />
    </div>
  );
};

export default LoanProduct;

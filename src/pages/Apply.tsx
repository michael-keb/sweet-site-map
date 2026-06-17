import Navigation from "@/components/Navigation";
import { ProductKeyFacts } from "@/components/ProductKeyFacts";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { applyDisclaimer, dealSellingPoints } from "@/data/productFacts";

const Apply = () => (
  <div className="min-h-screen bg-background flex flex-col">
    <Navigation />
    <main className="flex-1">
      <div className="container mx-auto px-6 md:px-12 py-14 md:py-20 w-full h-full">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-start max-w-6xl mx-auto">
          <div className="lg:sticky lg:top-28">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-5">
              Apply for finance
            </p>
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-foreground mb-6 tracking-tight leading-[1.05]">
              Train now.
              <br />
              Pay when you're earning.
            </h1>

            <div className="rounded-2xl border border-gray-200 bg-gray-50/60 p-6 md:p-8 mb-8">
              <p className="text-2xl md:text-3xl font-bold text-foreground tracking-tight leading-tight mb-3">
                Only pay when you earn over $50,000.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                You keep your first $50,000 of gross income. Repayments are linked to what you earn
                above that — not before. If income drops, payments pause automatically.
              </p>
            </div>

            <ul className="space-y-5 mb-10">
              {dealSellingPoints.map((point) => (
                <li key={point.title} className="flex gap-4">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-foreground text-background">
                    <Check className="h-3 w-3 stroke-[2.5]" />
                  </span>
                  <div>
                    <p className="font-semibold text-foreground tracking-tight">{point.title}</p>
                    <p className="text-sm text-gray-500 leading-relaxed mt-1">{point.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button asChild size="lg" className="text-base px-8">
                <Link to="/apply">
                  Start application
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base">
                <Link to="/faq">Questions first?</Link>
              </Button>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed">{applyDisclaimer}</p>
          </div>

          <div className="lg:pt-2">
            <ProductKeyFacts compact />
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default Apply;

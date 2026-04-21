import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ApplyCTA } from "@/components/ApplyCTA";

const About = () => (
  <div className="min-h-screen bg-background">
    <Navigation />
    <main>
      <section className="pt-40 pb-20 md:pt-48 md:pb-28">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-6">Who we are</p>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 tracking-tight leading-[1.05]">
              An Australian lender,<br />helping Australians.
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 leading-relaxed max-w-3xl">
              The Squad Institute Finance is a small, focused personal lender built for Australians who need a sensible loan and a clear answer.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto space-y-8 text-lg md:text-xl text-foreground leading-relaxed">
            <p>The personal loan market is loud, complicated and often quietly punishing. People borrow $3,000 and pay back closer to $6,000 by the time they've navigated default fees, rollovers and 'bonus' add-ons.</p>
            <p>Credit, done well, is a tool — small, defined, repaid, gone. So we built around that.</p>
            <p>Loans between $2,001 and $5,000. One product family, told honestly. Decisions made by people who actually look at your situation.</p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">What we believe</h2>
          </div>
          <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {[
              { title: "Honesty over noise", description: "If we can't lend to you, we'll tell you why. Silence isn't a service." },
              { title: "Small is fine", description: "Not every problem needs a $50,000 facility. Sometimes $2,500 today is the whole answer." },
              { title: "Repayment is success", description: "We win when you pay it off. That's why early-payout costs nothing extra." },
              { title: "Real people, real calls", description: "An Australian-based team. A real number. A real human voice when you need one." },
            ].map((v) => (
              <div key={v.title}>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 tracking-tight">{v.title}</h3>
                <p className="text-lg text-gray-500 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ApplyCTA variant="muted" />
    </main>
    <Footer />
  </div>
);

export default About;

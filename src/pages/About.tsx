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
              Built for your career.
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 leading-relaxed max-w-3xl">
              The Squad Institute Finance exists for one reason: to make sure cost is never the thing standing between an Australian and the role they're capable of doing.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto space-y-8 text-lg md:text-xl text-foreground leading-relaxed">
            <p>The Squad Institute puts people into real roles through real work, not theory. It works.</p>
            <p>The bottleneck is rarely capability. It's getting started.</p>
            <p>So we built a simple plan focused on exactly that gap — designed around the program, with real people behind it.</p>
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
              { title: "Honesty over noise", description: "If the plan doesn't fit, we'll tell you why. Silence isn't a service." },
              { title: "Built around the outcome", description: "Designed to support your program directly — so you can focus on the work." },
              { title: "Your success is ours", description: "We win when you're placed in the role you're capable of doing." },
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

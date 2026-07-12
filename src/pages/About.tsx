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
              The Squad Institute Finance was created for one reason: to ensure that cost never stands between an Australian and the career they're capable of achieving.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto space-y-8 text-lg md:text-xl text-foreground leading-relaxed">
            <p>The Squad Institute doesn't just teach skills — it places people into real roles through real-world experience. That's why it works.</p>
            <p>For most people, the challenge isn't capability. It's access. It's having the opportunity to take the first step.</p>
            <p>That's where we come in.</p>
            <p>Our finance solution is designed specifically around the program, helping students start their journey sooner and focus on building their future. With a simple application process, flexible repayments, and real people ready to help, we're committed to making career opportunities more accessible for every Australian.</p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">What We Stand For</h2>
          </div>
          <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {[
              { title: "Turning ambition into opportunity", description: "Talent is everywhere. Opportunity isn't. We're here to help bridge that gap and make career progression more accessible." },
              { title: "Designed around your future", description: "Every part of our finance solution is built to support your journey from training to employment, so you can stay focused on building the career you want." },
              { title: "Investing in potential", description: "We believe capability should determine your future, not your current circumstances. That's why we're committed to helping more Australian residents take the next step." },
              { title: "Support you can count on", description: "Behind every application is a team that genuinely cares about your success, providing guidance, answers, and support when you need it most." },
              { title: "Outcomes that matter", description: "Our goal isn't simply to provide finance. It's to help create pathways into meaningful careers, lasting opportunities, and brighter futures." },
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

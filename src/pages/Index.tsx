import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FAQSection } from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import squadCollaboration from "@/assets/squad-collaboration.jpg";
import portfolioReview from "@/assets/portfolio-review.jpg";
import { LiquidGlass } from "@/components/LiquidGlass";

const Index = () => {
  const careerRoles = [
    {
      name: "Data Analytics",
      duration: "6 months",
      description: "Build data analysis and visualization skills through real-world business scenarios."
    },
    {
      name: "Data Science",
      duration: "6 months",
      description: "Develop machine learning models and predictive analytics skills through immersive project work."
    },
    {
      name: "Cybersecurity",
      duration: "6 months",
      description: "Build security expertise through hands-on threat analysis and vulnerability assessment."
    },
    {
      name: "Software Engineering",
      duration: "6 months",
      description: "Learn full-stack development through real-world application building and squad collaboration."
    },
    {
      name: "AI Engineering",
      duration: "6 months",
      description: "Build and deploy AI solutions through hands-on projects in NLP, computer vision, and generative AI."
    },
    {
      name: "QA Engineering",
      duration: "6 months",
      description: "Build quality assurance skills through test automation and quality strategy development."
    },
    {
      name: "Web Development",
      duration: "6 months",
      description: "Create modern, responsive web applications through hands-on development projects."
    },
    {
      name: "Digital Sales Management",
      duration: "6 months",
      description: "Develop digital sales strategy, CRM systems, and sales analytics skills through real-world scenarios."
    },
    {
      name: "Tech Exploration Track",
      duration: "6 months",
      description: "Explore multiple tech domains to discover your ideal career path through diverse projects."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <LiquidGlass
          blur={60}
          refraction={0.12}
          viscosity="medium"
          animationSpeed={1.0}
          interactive={true}
          className="pt-32 pb-24 md:pt-40 md:pb-32"
        >
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 tracking-tight leading-[1.05]">
                Launch Your<br />Tech Career
              </h1>
              <p className="text-xl md:text-2xl text-gray-500 mb-12 max-w-3xl mx-auto leading-relaxed">
                Real work experience. Real resume. Real job.<br className="hidden md:block" />
                From graduate to hired in 6 months.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-base">
                  <Link to="/apply">Apply Now</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-base">
                  <Link to="/tracks">Explore Careers</Link>
                </Button>
              </div>
            </div>
          </div>
        </LiquidGlass>

        {/* What We Are Section */}
        <section className="py-24 bg-foreground text-background">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight leading-tight">
                We're Not a School.<br />We're a Work Experience Engine.
              </h2>
              <div className="text-xl md:text-2xl space-y-6 leading-relaxed opacity-90">
                <p>
                  We're not an RTO. We're not a university. We don't teach in classrooms.
                </p>
                <p>
                  We prepare you the only way that actually gets people hired: <strong>by giving you structured work experience, project delivery exposure, and practitioner-led coaching in a real team environment.</strong>
                </p>
                <p>
                  You'll build things. Break things. Fix things. You'll work in squads. Present to stakeholders. Ship deliverables.
                </p>
                <p>
                  By the end, you'll have what recruiters actually want to see: documented work experience, real projects, and references that matter.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Founder's Story Section */}
        <section className="py-32">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12 text-center">
                <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
                  Why This Exists
                </h2>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                    I've seen too many talented people get rejected because they couldn't prove they could do the work.
                  </p>
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                    Not because they weren't smart enough. Not because they didn't have potential. 
                    But because they had no work experience. No references. No proof.
                  </p>
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                    So we built this. A place where you don't just learn—you do. You ship. You document real work 
                    that proves you can add value.
                  </p>
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-semibold">
                    This is your bridge from potential to proof.
                  </p>
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <p className="text-base text-gray-600 italic">
                      — The Squad Team
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How We Get You Job-Ready - Simplified */}
        <section className="py-32 bg-gray-50">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
                How We Get You<br />Job-Ready
              </h2>
              <p className="text-lg md:text-xl text-gray-500 leading-relaxed">
                Six months of real-world tech experience. Build what employers want to see.
              </p>
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              {[
                {
                  title: "Learn How Teams Work",
                  description: "Not just talk about Agile—actually do it."
                },
                {
                  title: "Understand Real Requirements",
                  description: "Figure out what clients really want."
                },
                {
                  title: "Build Real Deliverables",
                  description: "Actual work. Your proof."
                },
                {
                  title: "Learn From Mistakes",
                  description: "Make them. Fix them. Build confidence."
                },
                {
                  title: "Present Your Work",
                  description: "Defend your decisions to stakeholders."
                },
                {
                  title: "Document Your Experience",
                  description: "Build a resume employers can't ignore."
                }
              ].map((item) => (
                <div key={item.title} className="group">
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

        {/* How We Create Work Experience - Pipeline Section */}
        <section className="py-32">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-12 tracking-tight">
                How We Create<br />Your Work Experience
              </h2>
              
              <div className="space-y-12">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">1. Learn by Doing (Not Studying)</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    You work inside a real squad, using real tools, and delivering real projects. Every task you complete becomes documented proof for employers.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">2. Practitioner-Led Coaching</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Your squad lead isn't an instructor—they're a real practitioner who guides you through the same workflow tech teams use. Real world experience, not theory.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">3. Your Work Experience Pipeline</h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Across six months, your squad works on:
                  </p>
                  <ul className="space-y-3 text-lg text-gray-600">
                    <li className="flex items-start">
                      <span className="mr-3 text-primary font-bold">•</span>
                      <span>Internal products and realistic industry simulations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-primary font-bold">•</span>
                      <span>Startup-style build cycles with real constraints</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-primary font-bold">•</span>
                      <span>Tools and processes used by real clients</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-primary font-bold">•</span>
                      <span>Optional creator-track products when available</span>
                    </li>
                  </ul>
                  <p className="text-lg text-gray-600 leading-relaxed mt-6">
                    Every deliverable becomes evidence of your ability to add value. You aren't attending training—you're building a work history.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">4. Employer-Ready Documentation</h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    By completion, you have:
                  </p>
                  <ul className="space-y-3 text-lg text-gray-600">
                    <li className="flex items-start">
                      <span className="mr-3 text-primary font-bold">•</span>
                      <span>A portfolio of shipped work</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-primary font-bold">•</span>
                      <span>A professional work log documenting your contributions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-primary font-bold">•</span>
                      <span>Stakeholder feedback from real reviews</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-primary font-bold">•</span>
                      <span>Verified references from practitioners</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-primary font-bold">•</span>
                      <span>Real project delivery history</span>
                    </li>
                  </ul>
                  <p className="text-lg font-semibold text-foreground mt-6">
                    This is the material recruiters actually care about.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof - LinkedIn/TikTok Style */}
        <section className="py-32 bg-gray-50">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
                "This Program<br />Got Me My Job"
              </h2>
              <p className="text-lg md:text-xl text-gray-500 leading-relaxed">
                Real stories from real people who made it happen.
              </p>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Martinez",
                  role: "Product Designer at Tech Solutions",
                  quote: "I had zero experience. Now I'm designing for a Series B startup. My work experience from Squad is what got me through the door.",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
                  metric: "Got hired in 3 weeks"
                },
                {
                  name: "James Chen",
                  role: "Software Engineer at FinTech Co",
                  quote: "The references from my squad lead were gold. Recruiters actually called them. That's when everything changed.",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
                  metric: "3 offers in 2 months"
                },
                {
                  name: "Emily Rodriguez",
                  role: "Data Analyst at Healthcare Inc",
                  quote: "I went from rejected 15 times to having companies compete for me. The difference? I had proof I could do the work.",
                  image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
                  metric: "From 15 rejections to hired"
                }
              ].map((story, index) => (
                <div key={index} className="bg-background rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <img 
                      src={story.image} 
                      alt={story.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div className="text-left">
                      <div className="font-bold text-foreground">{story.name}</div>
                      <div className="text-sm text-gray-500">{story.role}</div>
                    </div>
                  </div>
                  <p className="text-base text-foreground mb-6 leading-relaxed text-left">
                    "{story.quote}"
                  </p>
                  <div className="text-sm font-semibold text-primary text-left">
                    {story.metric}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <Button asChild variant="outline" size="lg">
                <Link to="/alumni">Watch More Stories</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* The Grind - Behind the Scenes */}
        <section className="py-32">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
                This Is What<br />Real Work Looks Like
              </h2>
              <p className="text-lg md:text-xl text-gray-500 leading-relaxed">
                No filters. No fluff. Just the grind that gets you hired.
              </p>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative h-80 rounded-2xl overflow-hidden group">
                <img 
                  src={squadCollaboration}
                  alt="Squad working together"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
                  <div className="p-8 text-white">
                    <h3 className="text-2xl font-bold mb-2">Squad Collaboration</h3>
                    <p className="text-white/90">Daily standups. Code reviews. Real team dynamics.</p>
                  </div>
                </div>
              </div>

              <div className="relative h-80 rounded-2xl overflow-hidden group">
                <img 
                  src={portfolioReview}
                  alt="Portfolio review session"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
                  <div className="p-8 text-white">
                    <h3 className="text-2xl font-bold mb-2">Stakeholder Presentations</h3>
                    <p className="text-white/90">Defend your work. Get feedback. Ship it.</p>
                  </div>
                </div>
              </div>

              <div className="relative h-80 rounded-2xl overflow-hidden bg-gray-900 flex items-center justify-center group md:col-span-2">
                <div className="text-center text-white p-8">
                  <div className="text-6xl font-bold mb-4">2am</div>
                  <p className="text-xl text-white/90">When the code finally works and your squad celebrates in Slack</p>
                  <p className="text-sm text-white/70 mt-4">These moments? They go on your resume. They come up in interviews.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-gray-600 italic max-w-2xl mx-auto">
                "Document, don't create. Every sprint review, every bug fix, every win—it all becomes proof."
              </p>
            </div>
          </div>
        </section>

        {/* Companies Section - Removed until we have actual hiring data */}

        {/* Career Roles - Refined */}
        <section className="py-32 bg-gray-50">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
                Choose Your Path
              </h2>
              <p className="text-lg md:text-xl text-gray-500 leading-relaxed">
                9 tech careers. 6 months each. All designed to get you hired.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {careerRoles.map((role) => (
                  <div key={role.name} className="bg-background rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300">
                    <h3 className="text-xl font-bold text-foreground mb-2 tracking-tight">
                      {role.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">{role.duration}</p>
                    <p className="text-base text-gray-600 leading-relaxed">
                      {role.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="text-center flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to="/tracks">View All Roles</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/apply">Apply Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Faculty Preview - Refined */}
        <section className="py-32">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight leading-tight">
                    Learn From People<br />Who've Done It
                  </h2>
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                    Our mentors aren't professors. They're practitioners who've shipped products, 
                    led teams, and navigated the same job market you're in.
                  </p>
                  <Button asChild size="lg" variant="outline">
                    <Link to="/faculty">Meet the Squad Leads</Link>
                  </Button>
                </div>
                <div className="relative">
                  <img
                    src={squadCollaboration}
                    alt="Squad collaboration"
                    className="rounded-2xl w-full shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Showcase - Refined */}
        <section className="py-32 bg-gray-50">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1 relative">
                  <img
                    src={portfolioReview}
                    alt="Portfolio review"
                    className="rounded-2xl w-full shadow-2xl"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight leading-tight">
                    Your Work Experience<br />Gets You Hired
                  </h2>
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-12">
                    Real projects. Real impact. Real proof you can add value from day one.
                  </p>
                  <div className="space-y-6 mb-10">
                    {[
                      { title: "Proven Work Experience", desc: "6 months of real project delivery" },
                      { title: "Value Creation", desc: "Show how you solve business problems" },
                      { title: "Verified References", desc: "Squad leads validate your contributions" }
                    ].map((item) => (
                      <div key={item.title}>
                        <h4 className="font-bold text-foreground mb-2 text-lg tracking-tight">{item.title}</h4>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                  <Button asChild size="lg" variant="outline">
                    <Link to="/about#portfolio">See Examples</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section - Refined */}
        <section className="py-32">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto">
              <FAQSection />
            </div>
          </div>
        </section>

        {/* CTA Section - Refined */}
        <section className="py-32 bg-foreground text-background">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
                Ready to Start?
              </h2>
              <p className="text-xl md:text-2xl opacity-80 mb-12 leading-relaxed">
                Join our next cohort and build the experience that gets you hired.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary" className="text-base">
                  <Link to="/schedule">Schedule Info Session</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent border-background text-background hover:bg-background/10 text-base">
                  <Link to="/apply">Apply Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

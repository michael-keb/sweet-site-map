import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { LiquidGlass } from "@/components/LiquidGlass";

const Faculty = () => {
  const facultyMembers = [
    {
      name: "Sarah Chen",
      role: "Product & Business Analysis",
      location: "San Francisco",
      experience: "12 years crafting products that change how people work",
      linkedin: "https://linkedin.com/in/sarahchen",
      whyIMentor: "I remember being lost. I spent my first year as a BA feeling like I was guessing my way through every requirement. I mentor because I want to be the person I needed back then.",
      howIHelp: [
        "Build project experience that demonstrates real judgment",
        "Think like a practitioner, not a process follower",
        "Communicate requirements with clarity and precision",
        "Create a portfolio centered on the decisions you made"
      ],
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
    },
    {
      name: "Marcus Williams",
      role: "Agile Delivery & Scrum",
      location: "Austin",
      experience: "10 years helping teams ship what matters",
      linkedin: "https://linkedin.com/in/marcuswilliams",
      whyIMentor: "You don't need to be perfect. You need momentum. I spent years watching talented people freeze because they were waiting for the right moment. I teach you how to start and how to keep moving.",
      howIHelp: [
        "Lead with confidence in any room",
        "Facilitate teams with clarity and presence",
        "Navigate resistance without fear",
        "Ship meaningful work, consistently"
      ],
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop"
    },
    {
      name: "Priya Sharma",
      role: "Product Management",
      location: "New York",
      experience: "15 years building products people love",
      linkedin: "https://linkedin.com/in/priyasharma",
      whyIMentor: "Good products come from understanding people, not features. I help you develop the empathy and judgment that separate good PMs from great ones.",
      howIHelp: [
        "Develop intuition for what users truly need",
        "Build research skills that uncover real truth",
        "Make confident decisions with incomplete information",
        "Build a portfolio that demonstrates your thinking"
      ],
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop"
    },
    {
      name: "David Thompson",
      role: "Enterprise Architecture",
      location: "Seattle",
      experience: "18 years designing systems that scale",
      linkedin: "https://linkedin.com/in/davidthompson",
      whyIMentor: "Complex systems need clear thinking. I've watched brilliant people struggle because no one showed them how to see the whole picture. I'll teach you to think in systems, not silos.",
      howIHelp: [
        "See the whole system, not just individual parts",
        "Communicate technical decisions with clarity",
        "Navigate organizational complexity with confidence",
        "Design solutions that actually get built"
      ],
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
    },
    {
      name: "Lisa Martinez",
      role: "UX Strategy & Research",
      location: "Los Angeles",
      experience: "11 years creating experiences that matter",
      linkedin: "https://linkedin.com/in/lisamartinez",
      whyIMentor: "Design is empathy made visible. I spent years creating beautiful things that nobody needed. I help you build things people actually want to use.",
      howIHelp: [
        "Conduct research that reveals what people truly need",
        "Design with purpose and intention",
        "Present your decisions with clarity and confidence",
        "Build a portfolio that shows how you think"
      ],
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
    },
    {
      name: "James Rodriguez",
      role: "Business Intelligence",
      location: "Chicago",
      experience: "14 years turning data into decisions",
      linkedin: "https://linkedin.com/in/jamesrodriguez",
      whyIMentor: "Data tells stories, but most people can't hear them. I teach you to listen, to question, and to translate insights into action that changes outcomes.",
      howIHelp: [
        "Develop intuition for what data is revealing",
        "Build dashboards that drive real decisions",
        "Tell stories that change how people think",
        "Create a portfolio that demonstrates impact"
      ],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero */}
        <LiquidGlass
          blur={60}
          refraction={0.12}
          viscosity="medium"
          animationSpeed={1.0}
          interactive={true}
          className="pt-32 pb-32 md:pt-40 md:pb-40"
        >
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight leading-tight">
                Your Squad Leads
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                The people who will help you become who you are capable of becoming.
              </p>
            </div>
          </div>
        </LiquidGlass>

        {/* Faculty List */}
        <section className="pb-32" style={{ marginTop: '140px' }}>
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
              {facultyMembers.map((member, index) => (
                <div 
                  key={member.name} 
                  className="animate-fade-in"
                  style={{ 
                    marginBottom: index < facultyMembers.length - 1 ? '200px' : '0'
                  }}
                >
                  {/* Mentor Header with Photo */}
                  <div className="flex items-start gap-6 md:gap-8">
                    <div className="flex-shrink-0">
                      <img
                        src={member.image}
                        alt={`Portrait of ${member.name}, ${member.role} mentor`}
                        className="w-36 h-36 md:w-40 md:h-40 rounded-xl object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        style={{
                          boxShadow: '0 24px 48px rgba(0, 0, 0, 0.08)'
                        }}
                      />
                    </div>
                    <div className="flex-1" style={{ paddingTop: '1px' }}>
                      <div className="flex items-baseline justify-between gap-4 mb-2">
                        <h2 
                          className="font-bold tracking-tight leading-tight"
                          style={{ 
                            fontSize: '36px',
                            color: '#111',
                            lineHeight: '1.1'
                          }}
                        >
                          {member.name}
                        </h2>
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/linkedin transition-colors duration-300 flex items-center gap-1.5 whitespace-nowrap"
                          style={{ 
                            fontSize: '14px',
                            color: '#999'
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.color = '#555'}
                          onMouseLeave={(e) => e.currentTarget.style.color = '#999'}
                          aria-label={`View ${member.name}'s LinkedIn profile`}
                        >
                          <span>View Profile</span>
                          <span className="transition-transform group-hover/linkedin:translate-x-0.5">→</span>
                        </a>
                      </div>
                      <p 
                        style={{ 
                          fontSize: '17px',
                          color: '#666',
                          lineHeight: '1.4',
                          marginTop: '8px'
                        }}
                      >
                        {member.role}, {member.location}
                      </p>
                      <p 
                        className="italic"
                        style={{ 
                          fontSize: '15px',
                          color: '#999',
                          marginTop: '4px',
                          fontWeight: 300
                        }}
                      >
                        {member.experience}
                      </p>
                    </div>
                  </div>

                  {/* Why I Mentor - Narrative */}
                  <div style={{ marginTop: '48px' }}>
                    <p 
                      className="leading-relaxed"
                      style={{ 
                        fontSize: '17px',
                        color: '#333',
                        lineHeight: '1.6',
                        maxWidth: '680px'
                      }}
                    >
                      {member.whyIMentor}
                    </p>
                  </div>

                  {/* How I Help You */}
                  <div style={{ marginTop: '48px' }}>
                    <h3 
                      className="font-medium"
                      style={{ 
                        fontSize: '14px',
                        color: '#999',
                        letterSpacing: '0.01em',
                        marginBottom: '24px'
                      }}
                    >
                      How I help you
                    </h3>
                    <ul className="space-y-3">
                      {member.howIHelp.map((item) => (
                        <li key={item} className="flex items-start" style={{ gap: '8px' }}>
                          <span style={{ color: '#999', marginTop: '2px' }}>•</span>
                          <span 
                            style={{ 
                              fontSize: '16px',
                              color: '#444',
                              lineHeight: '1.55'
                            }}
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How Mentorship Works */}
        <section className="py-32 bg-muted/30">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto space-y-16">
              <div className="text-center space-y-6">
                <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">
                  How Mentorship Works
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Mentors are matched to your squad based on what you're building.
                </p>
              </div>
              
              <div className="space-y-12 pt-8">
                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                    Real-time feedback on every deliverable
                  </h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    Your mentor reviews your work as you build, helping you think through decisions before they become mistakes.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                    One-on-ones when you need guidance
                  </h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    Stuck on a requirement? Unsure about your approach? Your mentor is there to help you work through it.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                    Career coaching that gets you hired
                  </h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    From portfolio reviews to interview prep, your mentor helps you position yourself for the role you want.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
                Ready to begin?
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Join a squad. Find your mentor. Build something real.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button asChild size="lg">
                  <Link to="/apply">Apply Now</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/schedule">Schedule Info Session</Link>
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

export default Faculty;

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Clock, Users } from "lucide-react";

const Schedule = () => {
  const upcomingSessions = [
    {
      day: "Wednesday",
      date: "February 14, 2025",
      time: "6:00 PM EST",
      duration: "45 minutes",
      topic: "The Real Talk Session",
      description: "No fluff. What the program actually is, what it demands, what you get out of it.",
      seats: "8 spots left"
    },
    {
      day: "Saturday",
      date: "February 17, 2025",
      time: "11:00 AM EST",
      duration: "45 minutes",
      topic: "From Zero Experience to Hired",
      description: "How participants with no tech background built resumes that actually got them jobs.",
      seats: "12 spots left"
    },
    {
      day: "Wednesday",
      date: "February 21, 2025",
      time: "6:00 PM EST",
      duration: "45 minutes",
      topic: "What Work Experience Actually Looks Like",
      description: "See real squad work. Real deliverables. Real feedback sessions. The grind that builds your resume.",
      seats: "15 spots left"
    },
    {
      day: "Thursday",
      date: "February 22, 2025",
      time: "1:00 PM EST",
      duration: "45 minutes",
      topic: "Investment & Payment Options",
      description: "Straight talk about cost, payment plans, and why this is an investment in work experience, not education.",
      seats: "10 spots left"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero */}
        <section className="pt-32 pb-24 md:pt-40 md:pb-32">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 tracking-tight leading-[1.05]">
                See If This<br />Is For You
              </h1>
              <p className="text-xl md:text-2xl text-gray-500 leading-relaxed mb-8">
                45-minute sessions. No sales pitch. Just real talk about what this program demands 
                and what you get out of it.
              </p>
              <div className="bg-gray-50 border-l-4 border-foreground p-6 max-w-2xl mx-auto text-left">
                <p className="text-base text-gray-700 leading-relaxed">
                  These aren't webinars. We'll show you real squad work, walk through actual deliverables, 
                  and answer every question you have. If it's not right for you, we'll tell you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Attend Section */}
        <section className="py-32 bg-gray-50">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 tracking-tight">
                What You'll Actually Learn
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-background rounded-xl p-8">
                  <h3 className="text-xl font-bold text-foreground mb-3">The Real Work</h3>
                  <p className="text-gray-600 leading-relaxed">
                    See what squad collaboration looks like. Watch real code reviews, sprint planning, 
                    and stakeholder presentations. No theory—just the actual work.
                  </p>
                </div>
                <div className="bg-background rounded-xl p-8">
                  <h3 className="text-xl font-bold text-foreground mb-3">Time Commitment</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We'll break down exactly how much time you need, when you need it, and what happens 
                    if you fall behind. No surprises.
                  </p>
                </div>
                <div className="bg-background rounded-xl p-8">
                  <h3 className="text-xl font-bold text-foreground mb-3">What You Build</h3>
                  <p className="text-gray-600 leading-relaxed">
                    See the resumes participants built. The work experience they documented. 
                    The references they got. That's what actually gets you hired.
                  </p>
                </div>
                <div className="bg-background rounded-xl p-8">
                  <h3 className="text-xl font-bold text-foreground mb-3">Success Stories</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Hear from people who went from rejected to hired. What changed? They had proof 
                    they could do the work. We'll show you how.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Sessions */}
        <section className="py-32">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 text-center tracking-tight">
                Pick Your Session
              </h2>
              
              <div className="space-y-6">
                {upcomingSessions.map((session, index) => (
                  <div key={index} className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                    <div className="flex flex-col gap-6">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-foreground mb-2 tracking-tight">
                          {session.topic}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-6">
                          {session.description}
                        </p>
                        <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{session.day}, {session.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            <span>{session.time} ({session.duration})</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4" />
                            <span className="font-medium">{session.seats}</span>
                          </div>
                        </div>
                      </div>
                      <Button size="lg" className="w-full md:w-auto">
                        Reserve Your Spot
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-foreground text-background">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
                Already Convinced?<br />Apply Now
              </h2>
              <p className="text-xl md:text-2xl opacity-80 mb-12 leading-relaxed">
                Skip the session if you're ready to commit to 6 months of real work 
                that builds a resume employers can't ignore.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary">
                  <Link to="/apply">Start Application</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent border-background text-background hover:bg-background/10">
                  <Link to="/contact">Ask Questions First</Link>
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

export default Schedule;
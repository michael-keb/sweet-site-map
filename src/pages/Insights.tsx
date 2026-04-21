import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";

const Insights = () => {
  const featuredArticle = {
    title: "How to Build a Resume That Actually Gets You Hired",
    category: "Career Advice",
    date: "February 10, 2025",
    readTime: "8 min read",
    excerpt: "Most tech resumes fail because they show tools, not results. Here's how to document work experience that proves you can do the job.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=400&fit=crop"
  };

  const articles = [
    {
      title: "The 5 Types of Work Experience Every Tech Resume Needs",
      category: "Resume Building",
      date: "February 5, 2025",
      readTime: "6 min read",
      excerpt: "Delivered projects, team collaboration, and measurable outcomes. Here's what actually impresses hiring managers.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop"
    },
    {
      title: "Why Squad-Based Learning Beats Traditional Bootcamps",
      category: "Education",
      date: "January 28, 2025",
      readTime: "10 min read",
      excerpt: "Research shows collaborative formation produces better outcomes. Here's the data on why squads work.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=250&fit=crop"
    },
    {
      title: "From Career Changer to Senior Tech Role in 18 Months",
      category: "Success Stories",
      date: "January 20, 2025",
      readTime: "12 min read",
      excerpt: "How one career changer leveraged real work experience to land a $95k tech role at a Fortune 500 company.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=250&fit=crop"
    },
    {
      title: "The Real Skills Gap in Tech",
      category: "Industry Report",
      date: "January 15, 2025",
      readTime: "15 min read",
      excerpt: "Our analysis of 500+ tech job postings reveals what employers actually want—and what bootcamps aren't teaching.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
    },
    {
      title: "How to Communicate Technical Decisions to Stakeholders",
      category: "Tech Skills",
      date: "January 8, 2025",
      readTime: "7 min read",
      excerpt: "A practical framework for translating technical work into business value that stakeholders understand.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=250&fit=crop"
    },
    {
      title: "Why Most Tech Projects Fail (And How to Fix Them)",
      category: "Tech Skills",
      date: "December 30, 2024",
      readTime: "9 min read",
      excerpt: "Clear communication and collaboration beat perfect code. Here's what actually makes projects succeed.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=250&fit=crop"
    }
  ];

  const categories = ["All", "Career Advice", "Tech Skills", "Resume Building", "Success Stories", "Industry Report", "Education"];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero */}
        <section className="pt-32 pb-24 md:pt-40 md:pb-32">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 tracking-tight">
                Insights
              </h1>
              <p className="text-xl md:text-2xl text-gray-500 leading-relaxed">
                Learn from practitioners
              </p>
            </div>
          </div>
        </section>

        {/* Latest Articles */}
        <section className="py-32">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {articles.map((article, index) => (
                  <div key={index} className="group cursor-pointer">
                    <div className="relative h-64 mb-6 overflow-hidden rounded-2xl">
                      <img 
                        src={article.image}
                        alt={article.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <p className="text-sm text-gray-500 mb-3">{article.category}</p>
                    <h3 className="text-2xl font-bold text-foreground mb-4 tracking-tight">{article.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{article.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-32 bg-gray-900 text-white">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Get Weekly Insights</h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                Join 2,000+ tech professionals
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-6 py-4 rounded-lg bg-white text-gray-900 flex-1 text-lg"
                />
                <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                  Subscribe
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

export default Insights;
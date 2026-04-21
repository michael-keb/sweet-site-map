import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { MessageCircle, Mail, Phone, Book } from "lucide-react";
import { Link } from "react-router-dom";

const Help = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const helpCategories = [
    {
      icon: Book,
      title: "Getting Started",
      articles: [
        { title: "How do I apply?", link: "/apply" },
        { title: "Which track is right for me?", link: "/tracks" },
        { title: "What are the prerequisites?", link: "/faq" },
        { title: "How does the squad model work?", link: "/squads" },
      ],
    },
    {
      icon: MessageCircle,
      title: "Program Information",
      articles: [
        { title: "Track comparison and differences", link: "/tracks" },
        { title: "Schedule and cohort dates", link: "/schedule" },
        { title: "Formation methodology", link: "/about" },
        { title: "Coaches and guidance", link: "/faculty" },
      ],
    },
    {
      icon: Mail,
      title: "Financing & Enrollment",
      articles: [
        { title: "Payment options and plans", link: "/financing" },
        { title: "Scholarships and discounts", link: "/financing" },
        { title: "Refund policy", link: "/terms" },
        { title: "Enrollment process", link: "/apply" },
      ],
    },
    {
      icon: Phone,
      title: "After Graduation",
      articles: [
        { title: "Job placement support", link: "/alumni" },
        { title: "Alumni network access", link: "/alumni" },
        { title: "Portfolio maintenance", link: "/resources" },
        { title: "Continuing education", link: "/resources" },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-24 md:pt-40 md:pb-32">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 tracking-tight">
                How Can We Help?
              </h1>
              <p className="text-xl md:text-2xl text-gray-500 leading-relaxed">
                Search our knowledge base or get in touch
              </p>
            </div>
          </div>
        </section>

        {/* Help Categories */}
        <section className="py-32 bg-gray-50">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
              {helpCategories.map((category, idx) => (
                <div key={idx}>
                  <div className="flex items-start gap-6 mb-8">
                    <category.icon className="h-8 w-8 text-foreground flex-shrink-0" />
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">{category.title}</h3>
                  </div>
                  <ul className="space-y-4 pl-14">
                    {category.articles.map((article, i) => (
                      <li key={i}>
                        <Link
                          to={article.link}
                          className="text-lg text-gray-600 hover:text-foreground transition-colors"
                        >
                          {article.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-32">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 tracking-tight">
                Still Need Help?
              </h2>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Schedule a call or send us a message
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to="/schedule">Schedule Info Session</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/contact">Contact Us</Link>
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

export default Help;

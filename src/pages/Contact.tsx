import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-24 md:pt-40 md:pb-32">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 tracking-tight leading-[1.05]">
                Got Questions?<br />Let's Talk
              </h1>
              <p className="text-xl md:text-2xl text-gray-500 leading-relaxed">
                No sales pitch. Just straight answers about what this actually is.
              </p>
            </div>
          </div>
        </section>

        <section className="py-32">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 tracking-tight leading-tight">
                  We're Not Hiding<br />Behind Forms
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-12">
                  Real people answer. Real answers given. Ask us anything about the program, the commitment, 
                  or whether this is right for you.
                </p>

                <div className="space-y-8">
                  <div className="flex gap-5">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center">
                        <Mail className="h-7 w-7 text-foreground" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2">Email Us</h3>
                      <p className="text-gray-600 mb-1">info@squadinstitute.com</p>
                      <p className="text-sm text-gray-500">Response within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center">
                        <Phone className="h-7 w-7 text-foreground" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2">Call Us</h3>
                      <p className="text-gray-600 mb-1">+1 (555) 123-4567</p>
                      <p className="text-sm text-gray-500">Mon-Fri, 9AM-6PM EST</p>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center">
                        <MapPin className="h-7 w-7 text-foreground" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2">Where We Work</h3>
                      <p className="text-gray-600">
                        100% online program<br />
                        Squads work globally
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-16 p-8 bg-foreground text-background rounded-2xl">
                  <h3 className="font-bold mb-3 text-lg">
                    Want the Full Story?
                  </h3>
                  <p className="opacity-90 mb-6 leading-relaxed">
                    Schedule a call. We'll walk you through exactly what the 6 months look like, 
                    what you'll build, and how it translates to job offers.
                  </p>
                  <Button size="lg" variant="secondary">
                    Schedule a Call
                  </Button>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6 tracking-tight">
                  Send Us a Message
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Ask about the program. Tell us your situation. We'll give you real answers.
                </p>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Enter your name" className="mt-2" />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" className="mt-2" />
                  </div>

                  <div>
                    <Label htmlFor="interest">Area of Interest</Label>
                    <select
                      id="interest"
                      className="w-full mt-2 h-11 px-4 border border-gray-200 rounded-lg bg-background text-foreground transition-all duration-200 hover:border-gray-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    >
                      <option>General Inquiry</option>
                      <option>Applied Squad Track</option>
                      <option>Career Readiness Track</option>
                      <option>Rapid Delivery Sprint</option>
                      <option>Partner Placement Track</option>
                      <option>Coach Opportunities</option>
                    </select>
                  </div>

                    <div>
                      <Label htmlFor="message">Your Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us what's on your mind..."
                        rows={6}
                        className="mt-2"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Send It
                    </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;

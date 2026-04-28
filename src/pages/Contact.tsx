import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [reason, setReason] = useState("New customer");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent", description: "Thanks — we'll get back to you within one business day at sqif@newml.com.au." });
    (e.currentTarget as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section className="pt-40 pb-12 md:pt-48 md:pb-16">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-6">Contact</p>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight leading-[1.05]">We're here to help.</h1>
              <p className="text-xl md:text-2xl text-gray-500 leading-relaxed">Questions about your plan, your application, or anything in between.</p>
            </div>
          </div>
        </section>

        <section className="pb-24 md:pb-32">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-sm uppercase tracking-[0.15em] text-gray-500 mb-3">Email</h3>
                  <a href="mailto:sqif@newml.com.au" className="text-lg text-foreground hover:text-accent transition-colors flex items-center gap-2"><Mail className="h-4 w-4" />sqif@newml.com.au</a>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-[0.15em] text-gray-500 mb-3">Phone</h3>
                  <a href="tel:+61272384196" className="text-lg text-foreground hover:text-accent transition-colors flex items-center gap-2"><Phone className="h-4 w-4" />(02) 7238 4196</a>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-[0.15em] text-gray-500 mb-3">Mail</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">PO Box Q543<br />Queen Victoria Building<br />NSW 1230</p>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500 leading-relaxed">
                    New Money Lender Pty Ltd trading as The Squad Institute Finance.<br />
                    ABN 19 653 707 138 · Australian Credit Licence 536096.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="lg:col-span-2 bg-gray-50 rounded-2xl p-8 md:p-10 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div><Label htmlFor="cname" className="mb-2 block">Full name</Label><Input id="cname" required /></div>
                  <div><Label htmlFor="cemail" className="mb-2 block">Email</Label><Input id="cemail" type="email" required /></div>
                  <div><Label htmlFor="cphone" className="mb-2 block">Phone</Label><Input id="cphone" type="tel" /></div>
                  <div>
                    <Label htmlFor="reason" className="mb-2 block">Reason</Label>
                    <Select value={reason} onValueChange={setReason}>
                      <SelectTrigger id="reason"><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="New customer">New customer enquiry</SelectItem>
                        <SelectItem value="Existing customer">Existing customer</SelectItem>
                        <SelectItem value="Plan settlement">Plan settlement</SelectItem>
                        <SelectItem value="Hardship">Hardship</SelectItem>
                        <SelectItem value="Complaint">Complaint</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div><Label htmlFor="message" className="mb-2 block">Message</Label><Textarea id="message" rows={6} required /></div>
                <Button type="submit" size="lg" className="w-full md:w-auto">Send message</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;

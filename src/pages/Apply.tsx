import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/hooks/use-toast";
import { loanProducts } from "@/data/loans";
import { Check } from "lucide-react";

const Apply = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [amount, setAmount] = useState<number[]>([12000]);
  const [purpose, setPurpose] = useState("career-launch-plan");
  const [term, setTerm] = useState("12");

  // Indicative fortnightly calc — months → fortnights
  const fortnights = Math.max(Math.round((parseInt(term, 10) * 52) / 12 / 2) * 2, 1);
  const fortnightly = Math.round(amount[0] / fortnights);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast({ title: "Application received", description: "Thanks — we'll be in touch within one business day." });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section className="pt-40 pb-12 md:pt-48 md:pb-16">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-6">Apply</p>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight leading-[1.05]">Tell us about your program.</h1>
              <p className="text-xl md:text-2xl text-gray-500 leading-relaxed">A short form to get the conversation started. We assess and respond within one business day.</p>
            </div>
          </div>
        </section>

        <section className="pb-24 md:pb-32">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto">
              {submitted ? (
                <div className="bg-gray-50 rounded-2xl p-12 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                    <Check className="h-8 w-8 text-accent" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Application received</h2>
                  <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">A member of our team will be in touch within one business day.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8 md:p-12 space-y-8">
                  <div>
                    <div className="flex justify-between items-baseline mb-4">
                      <Label className="text-base">Program fee to fund</Label>
                      <span className="text-3xl font-bold text-foreground tracking-tight">${amount[0].toLocaleString()}</span>
                    </div>
                    <Slider value={amount} onValueChange={setAmount} min={5000} max={20000} step={250} className="my-4" />
                    <div className="flex justify-between text-xs text-gray-500"><span>$5,000</span><span>$20,000</span></div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="purpose" className="mb-2 block">Squad Institute program</Label>
                      <Select value={purpose} onValueChange={setPurpose}>
                        <SelectTrigger id="purpose"><SelectValue /></SelectTrigger>
                        <SelectContent>
                          {loanProducts.map((l) => (<SelectItem key={l.slug} value={l.slug}>{l.name}</SelectItem>))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="term" className="mb-2 block">Repayment term</Label>
                      <Select value={term} onValueChange={setTerm}>
                        <SelectTrigger id="term"><SelectValue /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="6">6 months</SelectItem>
                          <SelectItem value="12">12 months</SelectItem>
                          <SelectItem value="18">18 months</SelectItem>
                          <SelectItem value="24">24 months</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="rounded-xl bg-background border border-gray-200 p-6">
                    <p className="text-sm text-gray-500 mb-1">Estimated fortnightly instalment</p>
                    <p className="text-3xl font-bold text-foreground tracking-tight">${fortnightly.toLocaleString()} <span className="text-base font-normal text-gray-500">/ fortnight</span></p>
                    <p className="text-xs text-gray-500 mt-3 leading-relaxed">Indicative only. Excludes any account-keeping fee. Final terms are shown in your contract before you accept.</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div><Label htmlFor="name" className="mb-2 block">Full name</Label><Input id="name" required /></div>
                    <div><Label htmlFor="email" className="mb-2 block">Email</Label><Input id="email" type="email" required /></div>
                    <div><Label htmlFor="phone" className="mb-2 block">Phone</Label><Input id="phone" type="tel" required /></div>
                    <div>
                      <Label htmlFor="state" className="mb-2 block">State</Label>
                      <Select>
                        <SelectTrigger id="state"><SelectValue placeholder="Select" /></SelectTrigger>
                        <SelectContent>
                          {["NSW","VIC","QLD","WA","SA","TAS","ACT","NT"].map((s) => (<SelectItem key={s} value={s}>{s}</SelectItem>))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <p className="text-xs text-gray-500 leading-relaxed">By submitting, you agree to our <a href="/privacy" className="underline">Privacy Policy</a>. All applications are subject to our credit and responsible-lending assessment. Approval is not guaranteed.</p>

                  <Button type="submit" size="lg" className="w-full text-base">Submit application</Button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Apply;

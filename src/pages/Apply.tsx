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
  const [cycle, setCycle] = useState<"weekly" | "fortnightly">("fortnightly");

  // 12-month initial repayment window per credit contract
  const periods = cycle === "weekly" ? 52 : 26;
  const periodLabel = cycle === "weekly" ? "week" : "fortnight";
  const installment = Math.round(amount[0] / periods);

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
              <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-6">Apply for financing</p>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight leading-[1.05]">Tell us about your program.</h1>
              <p className="text-xl md:text-2xl text-gray-500 leading-relaxed">A short form to get the conversation started. We assess and respond within one business day.</p>
              <div className="mt-8 p-5 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-700 leading-relaxed">
                <strong className="text-foreground">Good to know.</strong> You can apply <em>before</em> you're enrolled in The Squad Institute and receive pre-approval subject to verification. Final loan approval is conditional on meeting Squad Institute graduation requirements as set out in your credit contract. Applying for the program is a separate step from financing.
              </div>
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
                    <Slider value={amount} onValueChange={setAmount} min={1000} max={20000} step={250} className="my-4" />
                    <div className="flex justify-between text-xs text-gray-500"><span>$1,000</span><span>up to $20,000</span></div>
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
                      <Label htmlFor="cycle" className="mb-2 block">Pay cycle</Label>
                      <Select value={cycle} onValueChange={(v) => setCycle(v as "weekly" | "fortnightly")}>
                        <SelectTrigger id="cycle"><SelectValue /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="weekly">Weekly</SelectItem>
                          <SelectItem value="fortnightly">Fortnightly</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="rounded-xl bg-background border border-gray-200 p-6">
                    <p className="text-sm text-gray-500 mb-1">Estimated {periodLabel}ly instalment over 12 months</p>
                    <p className="text-3xl font-bold text-foreground tracking-tight">${installment.toLocaleString()} <span className="text-base font-normal text-gray-500">/ {periodLabel}</span></p>
                    <p className="text-xs text-gray-500 mt-3 leading-relaxed">
                      Indicative only. Interest Rate: Free when paid on time. An admin fee will be charged if repayments extend beyond the initial 12-month period. A $50 dishonour fee may apply for a failed instalment. Final terms are shown in your credit contract before you accept.
                    </p>
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

                  <p className="text-xs text-gray-500 leading-relaxed">By submitting, you agree to our <a href="/privacy" className="underline">Privacy Policy</a>. All applications are subject to our credit and responsible-lending assessment. Pre-approval does not guarantee final loan approval, which is conditional on meeting Squad Institute graduation requirements.</p>

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

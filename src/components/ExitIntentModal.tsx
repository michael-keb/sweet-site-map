import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export const ExitIntentModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [hasShown, setHasShown] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check if modal has already been shown in this session
    const shown = sessionStorage.getItem("exitIntentShown");
    if (shown) {
      setHasShown(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem("exitIntentShown", "true");
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasShown]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Success! Check your email",
      description: "We've sent you the BA Portfolio Guide",
    });
    
    setEmail("");
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">Wait! Before You Go...</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="bg-accent/10 p-4 rounded-lg text-center">
            <div className="text-4xl mb-2">📚</div>
            <h3 className="font-bold text-lg mb-2">Get Our Free BA Portfolio Guide</h3>
            <p className="text-sm text-muted-foreground">
              Learn how to build a portfolio that gets you hired - even with no BA experience.
            </p>
          </div>

          <div className="space-y-2">
            <ul className="text-sm space-y-1">
              <li className="flex items-start gap-2">
                <span className="text-accent">✓</span>
                <span>20+ portfolio examples from successful alumni</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent">✓</span>
                <span>Step-by-step artifact creation templates</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent">✓</span>
                <span>Evidence-based presentation strategies</span>
              </li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="exit-email">Email Address</Label>
              <Input
                id="exit-email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <Button type="submit" className="w-full">
              Send Me The Guide
            </Button>
          </form>

          <p className="text-xs text-muted-foreground text-center">
            No spam. Unsubscribe anytime. Your email is safe with us.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

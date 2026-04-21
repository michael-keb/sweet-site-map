import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { Calendar } from "lucide-react";

interface StickyCTAProps {
  threshold?: number;
}

export const StickyCTA = ({ threshold = 300 }: StickyCTAProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  const getCtaText = () => {
    const path = location.pathname;
    if (path.includes("/tracks")) return "Apply for This Track";
    if (path.includes("/alumni")) return "Start Your Journey";
    if (path.includes("/insights")) return "Download Resources";
    if (path === "/apply") return "Complete Application";
    return "Schedule Free Info Session";
  };

  const handleClick = () => {
    const path = location.pathname;
    if (path.includes("/tracks") || path === "/alumni") {
      navigate("/apply");
    } else if (path.includes("/insights")) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/contact");
    }
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Desktop - Top sticky bar */}
      <div className="hidden md:block fixed top-0 left-0 right-0 bg-background/98 backdrop-blur-md border-b border-border/30 z-50 animate-fade-in">
        <div className="container mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          <div className="text-sm font-normal text-foreground/80">
            Ready to transform your career?
          </div>
          <Button onClick={handleClick} size="sm" className="font-normal">
            <Calendar className="mr-2 h-4 w-4" />
            {getCtaText()}
          </Button>
        </div>
      </div>

      {/* Mobile - Bottom sticky bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-background/98 backdrop-blur-md border-t border-border/30 z-50 p-4 animate-fade-in">
        <Button onClick={handleClick} className="w-full font-normal" size="lg">
          <Calendar className="mr-2 h-4 w-4" />
          {getCtaText()}
        </Button>
      </div>
    </>
  );
};

import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { NavigationDropdown } from "@/components/NavigationDropdown";
import logo from "@/assets/squad-finance-logo.png";
import { loanProducts } from "@/data/loans";
import { ApplyDialog } from "@/components/ApplyDialog";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOverDark, setIsOverDark] = useState(false);
  const location = useLocation();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!navRef.current) return;
      const navRect = navRef.current.getBoundingClientRect();
      const elements = document.elementsFromPoint(
        navRect.left + navRect.width / 2,
        navRect.top + navRect.height / 2,
      );
      const isDark = elements.some((el) => {
        const cls =
          typeof el.className === "string"
            ? el.className
            : (el as Element).getAttribute?.("class") ?? "";
        return (
          cls.includes("bg-foreground") ||
          cls.includes("bg-gray-900") ||
          cls.includes("bg-black")
        );
      });
      setIsOverDark(isDark);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const loanItems = loanProducts.map((l) => ({
    name: l.name,
    path: `/loans/${l.slug}`,
  }));

  const aboutItems = [
    { name: "Who we are", path: "/about" },
    { name: "Responsible lending", path: "/responsible-lending" },
    { name: "Credit guide", path: "/credit-guide" },
  ];

  const helpItems = [
    { name: "FAQs", path: "/faq" },
    { name: "Contact us", path: "/contact" },
    { name: "Complaints", path: "/complaints" },
    { name: "Bank feed terms", path: "/bank-feed-terms" },
  ];

  const simpleLinks = [{ name: "Home", path: "/" }];
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50">
      <div
        className="absolute inset-0 border-b border-white/10"
        style={{
          background:
            "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)",
          backdropFilter: "blur(10px) saturate(180%)",
          WebkitBackdropFilter: "blur(10px) saturate(180%)",
          boxShadow:
            "0 8px 32px 0 rgba(0, 0, 0, 0.1), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)",
        }}
      />
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex items-center justify-between h-20">
          <Link
            to="/"
            className="hover:opacity-60 transition-all duration-300 flex items-center gap-3"
          >
            <img src={logo} alt="Squad Institute Finance" className="h-12 w-12" />
            <div>
              <div
                className={`font-bold text-lg tracking-tight transition-colors duration-300 ${
                  isOverDark ? "text-background" : "text-foreground"
                }`}
              >
                The Squad Institute Finance
              </div>
              <div
                className={`text-xs transition-colors duration-300 ${
                  isOverDark ? "text-background/70" : "text-foreground/50"
                }`}
              >
                Built for your career.
              </div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {simpleLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-6 py-2 text-sm font-normal transition-all duration-300 ${
                  isOverDark
                    ? isActive(link.path)
                      ? "text-background"
                      : "text-background/70 hover:text-background"
                    : isActive(link.path)
                      ? "text-foreground"
                      : "text-foreground/60 hover:text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to={`/loans/${loanProducts[0].slug}`}
              className={`px-6 py-2 text-sm font-normal transition-all duration-300 ${
                isOverDark
                  ? isActive(`/loans/${loanProducts[0].slug}`)
                    ? "text-background"
                    : "text-background/70 hover:text-background"
                  : isActive(`/loans/${loanProducts[0].slug}`)
                    ? "text-foreground"
                    : "text-foreground/60 hover:text-foreground"
              }`}
            >
              Career Sponsorship
            </Link>
            <NavigationDropdown label="About" items={aboutItems} isOverDark={isOverDark} />
            <NavigationDropdown label="Help" items={helpItems} isOverDark={isOverDark} />
          </div>

          <div className="hidden lg:flex gap-3">
            <ApplyDialog>
              <Button variant="default" size="sm" className="font-normal">
                Apply
              </Button>
            </ApplyDialog>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 transition-all duration-300 ${
              isOverDark
                ? "text-background hover:text-background/70"
                : "text-foreground hover:text-foreground/60"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border/30 animate-fade-in bg-white">
            <div className="flex flex-col gap-2">
              {simpleLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-6 py-3 text-sm font-normal transition-all duration-300 ${
                    isActive(link.path)
                      ? "text-foreground"
                      : "text-foreground/60 hover:text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to={`/loans/${loanProducts[0].slug}`}
                onClick={() => setIsOpen(false)}
                className={`px-6 py-3 text-sm font-normal transition-all duration-300 ${
                  isActive(`/loans/${loanProducts[0].slug}`)
                    ? "text-foreground"
                    : "text-foreground/60 hover:text-foreground"
                }`}
              >
                Career Sponsorship
              </Link>
              <NavigationDropdown label="About" items={aboutItems} isMobile />
              <NavigationDropdown label="Help" items={helpItems} isMobile />
              <div className="flex flex-col gap-3 mt-6 px-4">
                <ApplyDialog>
                  <Button size="sm" className="font-normal" onClick={() => setIsOpen(false)}>
                    Apply
                  </Button>
                </ApplyDialog>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

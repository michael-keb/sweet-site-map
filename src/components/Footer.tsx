import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import { loanProducts } from "@/data/loans";
import { ApplyDialog } from "@/components/ApplyDialog";

const complianceLinks = [
  { to: "/target-market", label: "Target Market Determination" },
  { to: "/credit-guide", label: "Credit Guide" },
  { to: "/responsible-lending", label: "Responsible Lending Guidelines" },
  { to: "/credit-reporting", label: "Credit Reporting Policy" },
  { to: "/complaints", label: "Complaints Policy" },
  { to: "/privacy", label: "Privacy Policy" },
  { to: "/dvs-notice", label: "DVS Collection Notice" },
  { to: "/bank-feed-terms", label: "Bank Feed Terms of Use" },
  { to: "/website-review", label: "Website review (29 Apr 2026)" },
] as const;

const linkClass =
  "text-[15px] leading-snug text-background/75 hover:text-background transition-colors duration-300";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-14 xl:gap-16">
          <div>
            <h4 className="font-semibold text-base text-background mb-6 tracking-tight">
              Career sponsorship
            </h4>
            <ul className="space-y-3">
              {loanProducts.map((l) => (
                <li key={l.slug}>
                  <Link to={`/loans/${l.slug}`} className={linkClass}>
                    {l.name}
                  </Link>
                </li>
              ))}
              <li>
                <ApplyDialog>
                  <button type="button" className={`${linkClass} text-left w-full`}>
                    Apply
                  </button>
                </ApplyDialog>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-base text-background mb-6 tracking-tight">
              Quick links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className={linkClass}>
                  About us
                </Link>
              </li>
              <li>
                <Link to="/contact" className={linkClass}>
                  Contact us
                </Link>
              </li>
              <li>
                <Link to="/faq" className={linkClass}>
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-base text-background mb-6 tracking-tight">Compliance</h4>
            <ul className="space-y-3">
              {complianceLinks.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-base text-background mb-6 tracking-tight">Contact</h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:sqif@newml.com.au"
                className="text-background/75 hover:text-background transition-colors duration-300 flex items-center gap-2 text-sm"
              >
                <Mail className="h-4 w-4 shrink-0 opacity-80" />
                sqif@newml.com.au
              </a>
              <a
                href="tel:+61272384196"
                className="text-background/75 hover:text-background transition-colors duration-300 flex items-center gap-2 text-sm"
              >
                <Phone className="h-4 w-4 shrink-0 opacity-80" />
                (02) 7238 4196
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-16 pt-10 space-y-6">
          <p className="text-sm text-background/70 leading-relaxed max-w-4xl">
            <strong className="text-background">New Money Lender Pty Ltd</strong> trading as
            <strong className="text-background"> The Squad Institute Finance</strong>.
            ABN 19 653 707 138. Australian Credit Licence 536096.
          </p>
          <p className="text-xs text-background/50 leading-relaxed max-w-4xl">
            Plans are subject to our eligibility criteria. Applying does not guarantee approval.
            Full details are shared with you before you accept.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-2">
            <p className="text-sm text-background/50">
              © {currentYear} The Squad Institute Finance. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
              <Link to="/privacy" className="text-background/50 hover:text-background transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-background/50 hover:text-background transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

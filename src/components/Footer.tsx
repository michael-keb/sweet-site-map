import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import { loanProducts } from "@/data/loans";
import { ApplyDialog } from "@/components/ApplyDialog";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h4 className="font-bold text-sm tracking-wide text-background/50 uppercase mb-6">
              Career Launch Plan
            </h4>
            <ul className="space-y-3">
              {loanProducts.map((l) => (
                <li key={l.slug}>
                  <Link
                    to={`/loans/${l.slug}`}
                    className="text-base text-background/70 hover:text-background transition-all duration-300"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
              <li>
                <ApplyDialog>
                  <button className="text-base text-background/70 hover:text-background transition-all duration-300 text-left">
                    Apply for financing
                  </button>
                </ApplyDialog>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-sm tracking-wide text-background/50 uppercase mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-base text-background/70 hover:text-background transition-all duration-300">
                  Who we are
                </Link>
              </li>
              <li>
                <Link to="/responsible-lending" className="text-base text-background/70 hover:text-background transition-all duration-300">
                  Responsible lending
                </Link>
              </li>
              <li>
                <Link to="/credit-guide" className="text-base text-background/70 hover:text-background transition-all duration-300">
                  Credit guide
                </Link>
              </li>
              <li>
                <Link to="/target-market" className="text-base text-background/70 hover:text-background transition-all duration-300">
                  Target market determination
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-base text-background/70 hover:text-background transition-all duration-300">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-sm tracking-wide text-background/50 uppercase mb-6">
              Get in touch
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/contact" className="text-base text-background/70 hover:text-background transition-all duration-300">
                  Contact us
                </Link>
              </li>
              <li>
                <Link to="/complaints" className="text-base text-background/70 hover:text-background transition-all duration-300">
                  Complaints
                </Link>
              </li>
              <li>
                <Link to="/dvs-notice" className="text-base text-background/70 hover:text-background transition-all duration-300">
                  DVS collection notice
                </Link>
              </li>
              <li>
                <Link to="/credit-reporting" className="text-base text-background/70 hover:text-background transition-all duration-300">
                  Credit reporting
                </Link>
              </li>
            </ul>
            <div className="flex flex-col gap-3 pt-4">
              <a
                href="mailto:sqif@newml.com.au"
                className="text-background/70 hover:text-background transition-all duration-300 flex items-center gap-2 text-sm"
              >
                <Mail className="h-4 w-4" />
                sqif@newml.com.au
              </a>
              <a
                href="tel:+61272384196"
                className="text-background/70 hover:text-background transition-all duration-300 flex items-center gap-2 text-sm"
              >
                <Phone className="h-4 w-4" />
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
            Buy Now Pay Later plans are subject to our credit and eligibility criteria, and to
            responsible-lending assessments. Applying does not guarantee approval — final approval
            is subject to verification and meeting Squad Institute graduation requirements as set
            out in your credit contract. Interest Rate: Free when weekly or fortnightly instalments
            are paid on time. An admin fee will be charged if repayments extend beyond the initial
            12-month period. A $50 dishonour fee may apply for a failed instalment. All fees are
            disclosed upfront in your contract.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="text-sm text-background/50">
              © {currentYear} The Squad Institute Finance. All rights reserved.
            </p>
            <div className="flex gap-8 text-sm">
              <Link to="/privacy" className="text-background/50 hover:text-background transition-all duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-background/50 hover:text-background transition-all duration-300">
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

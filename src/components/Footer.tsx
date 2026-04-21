import { Link } from "react-router-dom";
import { Mail, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Column 1: Pathways */}
          <div className="space-y-4">
            <h4 className="font-bold text-sm tracking-wide text-background/50 uppercase mb-6">Pathways</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/tracks" className="text-base text-background/70 hover:text-background transition-all duration-300">
                  Career Tracks
                </Link>
              </li>
              <li>
                <Link to="/tracks#compare" className="text-base text-background/70 hover:text-background transition-all duration-300">
                  Track Comparison
                </Link>
              </li>
              <li>
                <Link to="/squads" className="text-base text-background/70 hover:text-background transition-all duration-300">
                  Squad Experience
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Resources */}
          <div className="space-y-4">
            <h4 className="font-bold text-sm tracking-wide text-background/50 uppercase mb-6">Resources</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/insights" className="text-base text-background/70 hover:text-background transition-all duration-300">
                  Blog & Insights
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-base text-background/70 hover:text-background transition-all duration-300">
                  Free Templates
                </Link>
              </li>
              <li>
                <Link to="/resources#guides" className="text-base text-background/70 hover:text-background transition-all duration-300">
                  Framework Guides
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-base text-background/70 hover:text-background transition-all duration-300">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: About */}
          <div className="space-y-4">
            <h4 className="font-bold text-sm tracking-wide text-background/50 uppercase mb-6">About</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-base text-background/70 hover:text-background transition-all duration-300">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/about#mission" className="text-base text-background/70 hover:text-background transition-all duration-300">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link to="/faculty" className="text-base text-background/70 hover:text-background transition-all duration-300">
                  Coaches & Practitioners
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Alumni */}
          <div className="space-y-4">
            <h4 className="font-bold text-sm tracking-wide text-background/50 uppercase mb-6">Alumni</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/alumni" className="text-base text-background/70 hover:text-background transition-all duration-300">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link to="/alumni#metrics" className="text-base text-background/70 hover:text-background transition-all duration-300">
                  Graduate Outcomes
                </Link>
              </li>
              <li>
                <Link to="/alumni#companies" className="text-base text-background/70 hover:text-background transition-all duration-300">
                  Where They Work
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Connect */}
          <div className="space-y-4">
            <h4 className="font-bold text-sm tracking-wide text-background/50 uppercase mb-6">Connect</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/contact" className="text-base text-background/70 hover:text-background transition-all duration-300">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/schedule" className="text-base text-background/70 hover:text-background transition-all duration-300">
                  Info Session
                </Link>
              </li>
              <li>
                <Link to="/apply" className="text-base text-background/70 hover:text-background transition-all duration-300">
                  Apply Now
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-base text-background/70 hover:text-background transition-all duration-300">
                  FAQ
                </Link>
              </li>
            </ul>
            <div className="flex gap-5 pt-6">
              <a
                href="mailto:info@squadinstitute.com"
                className="text-background/70 hover:text-background transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/company/squad-institute"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/70 hover:text-background transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/squadinstitute"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/70 hover:text-background transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-16 pt-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/50">
            © {currentYear} The Squad Institute. All rights reserved.
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
    </footer>
  );
};

export default Footer;

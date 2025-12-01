import { Link } from "react-router-dom";
import { FileText, Zap, Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { href: "/", label: "Home" },
      { href: "/how-it-works", label: "How It Works" },
      { href: "/#tool", label: "Free Tool" },
    ],
    resources: [
      { href: "/blog", label: "Blog" },
      { href: "/blog/understanding-ats-systems", label: "ATS Guide" },
      { href: "/blog/ai-resume-screening", label: "AI Screening" },
    ],
    company: [
      { href: "/about", label: "About Us" },
      { href: "/contact", label: "Contact" },
      { href: "/privacy-policy", label: "Privacy Policy" },
      { href: "/terms-of-service", label: "Terms of Service" },
    ],
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="relative">
                <FileText className="w-8 h-8 text-primary" />
                <Zap className="w-4 h-4 text-primary absolute -bottom-1 -right-1" />
              </div>
              <span className="font-mono font-bold text-lg">
                <span className="text-primary">AR</span>
                <span className="text-foreground">OT</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              A smart tech platform helping job seekers optimize resumes to bypass ATS filters and stand out in AI-driven hiring.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} AROT. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs">
            Built for job seekers navigating the AI-driven hiring landscape.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 50);
    });
  }

  // Hide navigation when in unified portal (Prime LP and Operations mode)
  if (location.pathname === '/unified-portal') {
    return null;
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-primary/5' 
        : 'bg-gradient-to-r from-background/20 via-background/10 to-background/20 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo */}
          <div className="flex items-center gap-4 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-primary via-primary-glow to-accent rounded-xl flex items-center justify-center shadow-lg shadow-primary/25 group-hover:shadow-primary/40 transition-all duration-300 group-hover:scale-105">
                <div className="w-3 h-3 bg-background rounded-full animate-pulse-glow shadow-inner"></div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full opacity-60 animate-ping"></div>
              </div>
            </div>
            <div className="transition-all duration-300 group-hover:translate-x-1">
              <div className="text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                VaultForge
              </div>
              <div className="text-xs font-medium text-primary tracking-wider uppercase">
                Labs
              </div>
            </div>
          </div>

          {/* Enhanced Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {[
              { href: "/#research", label: "Research" },
              { href: "/#subsidiaries", label: "Subsidiaries" },
              { href: "/#investment", label: "Investment" },
              { href: "/#campus", label: "Campus" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-foreground/80 hover:text-primary transition-all duration-300 font-medium group"
              >
                <span className="relative z-10">{link.label}</span>
                <div className="absolute inset-0 bg-primary/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 opacity-0 group-hover:opacity-100"></div>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
              </a>
            ))}
            
            <a
              href="/unified-portal"
              className="relative px-4 py-2 mx-2 text-primary hover:text-primary-glow transition-all duration-300 font-semibold group"
            >
              <span className="relative z-10">Unified Portal</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              <div className="absolute -bottom-1 left-1/2 w-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
            </a>
            
            <a
              href="#contact"
              className="relative px-4 py-2 text-foreground/80 hover:text-primary transition-all duration-300 font-medium group"
            >
              <span className="relative z-10">Contact</span>
              <div className="absolute inset-0 bg-primary/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 opacity-0 group-hover:opacity-100"></div>
              <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
            </a>
          </div>

          {/* Enhanced CTA Button */}
          <div className="relative group">
            <Button 
              variant="hero" 
              size="sm" 
              asChild
              className="relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:from-primary-glow hover:to-accent shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 hover:scale-105 border-0"
            >
              <Link to="/unified-portal">
                <span className="relative z-10 font-semibold">Join Cohort</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </Button>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-lg opacity-0 group-hover:opacity-30 blur transition-all duration-300 -z-10"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md border-b border-border' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
              <div className="w-2 h-2 bg-background rounded-full animate-pulse-glow"></div>
            </div>
            <div>
              <div className="text-xl font-bold text-foreground">VaultForge</div>
              <div className="text-xs text-muted-foreground">Labs</div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/#research" className="text-foreground hover:text-primary transition-colors">
              Research
            </a>
            <a href="/#subsidiaries" className="text-foreground hover:text-primary transition-colors">
              Subsidiaries
            </a>
            <a href="/#investment" className="text-foreground hover:text-primary transition-colors">
              Investment
            </a>
            <a href="/#campus" className="text-foreground hover:text-primary transition-colors">
              Campus
            </a>
            <a href="/unified-portal" className="text-primary hover:text-primary-glow transition-colors font-medium">
              Unified Portal
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact Us
            </a>
          </div>

          {/* CTA Button */}
          <Button variant="hero" size="sm" asChild>
            <Link to="/unified-portal">Join Cohort</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};
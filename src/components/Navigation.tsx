import { useState } from "react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 50);
    });
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md border-b border-border' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/skyline-portal" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
              <div className="w-2 h-2 bg-background rounded-full animate-pulse-glow"></div>
            </div>
            <div>
              <div className="text-xl font-bold text-foreground">VaultForge Labs</div>
              <div className="text-xs text-muted-foreground">by Skyline Operator Group</div>
            </div>
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/investor-portal" className="text-foreground hover:text-primary transition-colors">
              Investor Portal
            </a>
            <a href="/#research" className="text-foreground hover:text-primary transition-colors">
              Research
            </a>
            <a href="/#investment" className="text-foreground hover:text-primary transition-colors">
              Investment
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact Us
            </a>
          </div>

          {/* CTA Button */}
          <Button variant="hero" size="sm">
            Join Investor Group
          </Button>
        </div>
      </div>
    </nav>
  );
};
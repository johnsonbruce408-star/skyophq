import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
          <Link to="/" className="text-xl font-bold text-foreground">
            Skyline Operator Group
          </Link>
          
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/skyline-portal" className="text-muted-foreground hover:text-primary transition-colors">
              Portal
            </Link>
            <Link to="/investor-deck" className="text-muted-foreground hover:text-primary transition-colors">
              Investor Deck
            </Link>
          </div>
          
          <Button variant="outline" size="sm" asChild>
            <Link to="/auth">Login</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Facebook } from "lucide-react";

export const SimpleNavigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/skyline-portal", label: "Home" },
    { path: "/unified-portal", label: "Onboarding" },
    { path: "/investor-deck", label: "Investor Deck" },
    { path: "/auth", label: "Login" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link to="/skyline-portal" className="text-xl font-bold text-foreground">
            Skyline Operator Group
          </Link>
          
          <div className="hidden md:flex items-center gap-6">
            {navItems.slice(0, -1).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a 
              href="https://www.facebook.com/profile.php?id=61579775342051" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Visit our Facebook page"
            >
              <Facebook size={18} />
            </a>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" asChild>
              <Link to="/auth">Login</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
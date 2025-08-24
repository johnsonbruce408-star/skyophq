import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Subsidiaries } from "@/components/Subsidiaries";
import { InvestmentFlow } from "@/components/InvestmentFlow";
import { CampusMap } from "@/components/CampusMap";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, UserCheck } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        
        {/* Investor Portal CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Investor Portal Access</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Access your private investment documents, complete subscriptions, and monitor your portfolio performance through our secure investor platform.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gap-2">
                <Link to="/auth">
                  <UserCheck className="h-5 w-5" />
                  Sign In to Portal
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <Link to="/auth">
                  <Shield className="h-5 w-5" />
                  New Investor Registration
                </Link>
              </Button>
            </div>
            
            <div className="text-sm text-muted-foreground">
              <p>Accredited investors only • Secure platform • 24/7 access</p>
            </div>
          </div>
        </section>
        
        <div id="subsidiaries">
          <Subsidiaries />
        </div>
        <div id="investment">
          <InvestmentFlow />
        </div>
        <div id="campus">
          <CampusMap />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

import { Navigation } from "@/components/Navigation";
import { Subsidiaries } from "@/components/Subsidiaries";
import { InvestmentFlow } from "@/components/InvestmentFlow";
import { CampusMap } from "@/components/CampusMap";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <Navigation />
      <main>
        {/* Hero Card - Horizontal */}
        <section className="min-h-[70vh] flex items-center justify-center p-6">
          <div className="w-full max-w-6xl">
            <div className="bg-gradient-to-r from-amber-50/80 via-yellow-50/60 to-amber-50/80 dark:from-amber-950/20 dark:via-yellow-950/10 dark:to-amber-950/20 backdrop-blur-sm border-2 border-blue-200/60 dark:border-blue-800/40 rounded-2xl p-12 shadow-2xl hover:border-blue-300/80 dark:hover:border-blue-700/60 transition-all duration-500 hover:shadow-3xl hover:scale-[1.02]">
              <div className="text-center space-y-8">
                {/* LLC Badge */}
                <div className="inline-flex items-center gap-2 bg-blue-100/80 dark:bg-blue-900/40 border border-blue-300/60 dark:border-blue-700/40 rounded-full px-4 py-2 text-sm text-blue-700 dark:text-blue-300">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                  <span>LLC of Delaware</span>
                </div>

                {/* Main Title */}
                <div>
                  <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 bg-clip-text text-transparent">
                    Skyline Operator Group
                  </h1>
                  <h2 className="text-3xl md:text-4xl font-semibold text-blue-800 dark:text-blue-200 mb-6">
                    Secure Investment Portal
                  </h2>
                </div>

                {/* Description */}
                <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                  Access your private investment documents, complete subscriptions, and monitor your portfolio performance through our secure investor platform.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
                  <Button 
                    variant="default" 
                    size="lg" 
                    className="text-lg px-12 py-6 bg-blue-600 hover:bg-blue-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => window.location.href = '/investor-portal'}
                  >
                    Access Investor Portal
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="text-lg px-12 py-6 border-2 border-blue-300 text-blue-700 hover:bg-blue-50 dark:border-blue-700 dark:text-blue-300 dark:hover:bg-blue-950/30"
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Collapsible Content Section */}
        <section className="px-6 pb-12">
          <div className="max-w-6xl mx-auto">
            <Collapsible open={isOpen} onOpenChange={setIsOpen}>
              <CollapsibleTrigger asChild>
                <Button 
                  variant="ghost" 
                  className="w-full flex items-center justify-center gap-2 py-6 text-lg font-medium text-muted-foreground hover:text-foreground transition-all duration-300 group"
                >
                  <span>Explore More</span>
                  <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''} group-hover:text-blue-600`} />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-0 animate-accordion-down">
                <div id="subsidiaries" className="pt-8">
                  <Subsidiaries />
                </div>
                <div id="investment">
                  <InvestmentFlow />
                </div>
                <div id="campus">
                  <CampusMap />
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Subsidiaries } from "@/components/Subsidiaries";
import { InvestmentFlow } from "@/components/InvestmentFlow";
import { CampusMap } from "@/components/CampusMap";
import { Footer } from "@/components/Footer";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <div className="flex justify-center py-8">
            <CollapsibleTrigger className="flex items-center gap-2 text-lg font-medium text-primary hover:text-primary/80 transition-colors">
              Explore More
              <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent>
            <div id="subsidiaries">
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
      </main>
      <Footer />
    </div>
  );
};

export default Index;

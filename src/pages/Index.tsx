import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Subsidiaries } from "@/components/Subsidiaries";
import { InvestmentFlow } from "@/components/InvestmentFlow";
import { CampusMap } from "@/components/CampusMap";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
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

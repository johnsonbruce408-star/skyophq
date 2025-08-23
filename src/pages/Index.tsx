import { Navigation } from "@/components/Navigation";
import { SkyoHero } from "@/components/SkyoHero";
import { SkyoServices } from "@/components/SkyoServices";
import { SkyoSolutions } from "@/components/SkyoSolutions";
import { SkyoPortfolio } from "@/components/SkyoPortfolio";
import { SkyoTeam } from "@/components/SkyoTeam";
import { SkyoContact } from "@/components/SkyoContact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <SkyoHero />
        <div id="services">
          <SkyoServices />
        </div>
        <div id="solutions">
          <SkyoSolutions />
        </div>
        <div id="portfolio">
          <SkyoPortfolio />
        </div>
        <div id="team">
          <SkyoTeam />
        </div>
        <div id="contact">
          <SkyoContact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

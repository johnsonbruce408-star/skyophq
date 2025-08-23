import { Card } from "@/components/ui/card";

export const InvestmentFlow = () => {
  const scenarios = [
    { 
      name: "Conservative", 
      resale: "$13M", 
      perInvestor: "$520,000", 
      percentage: "52%",
      color: "velocity"
    },
    { 
      name: "Moderate", 
      resale: "$18M", 
      perInvestor: "$720,000", 
      percentage: "72%",
      color: "orbital"
    },
    { 
      name: "Optimistic", 
      resale: "$24M", 
      perInvestor: "$960,000", 
      percentage: "96%",
      color: "neuro"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Investment Structure
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Asset-backed investment with realistic liquidation scenarios protecting downside while offering exponential upside potential
          </p>
        </div>

        {/* Investment Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 bg-card/80 backdrop-blur-sm border border-primary/20">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">$25M</div>
              <div className="text-lg text-muted-foreground mb-4">Total Funding Target</div>
              <div className="text-sm text-foreground">25 Cohorts × $1M Each</div>
            </div>
          </Card>
          
          <Card className="p-8 bg-card/80 backdrop-blur-sm border border-accent/20">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">10-20×</div>
              <div className="text-lg text-muted-foreground mb-4">Upside Potential</div>
              <div className="text-sm text-foreground">Operational IP Revenue</div>
            </div>
          </Card>
          
          <Card className="p-8 bg-card/80 backdrop-blur-sm border border-neuro/20">
            <div className="text-center">
              <div className="text-4xl font-bold text-neuro mb-2">VIP</div>
              <div className="text-lg text-muted-foreground mb-4">Lab Access</div>
              <div className="text-sm text-foreground">Exclusive Research Benefits</div>
            </div>
          </Card>
        </div>

        {/* Liquidation Scenarios */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-foreground">
            Asset-Backed Liquidation Scenarios
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {scenarios.map((scenario, index) => (
              <Card key={scenario.name} className="p-6 bg-card/80 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="text-center">
                  <div className={`text-${scenario.color} text-lg font-semibold mb-3`}>
                    {scenario.name}
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="text-2xl font-bold text-foreground">{scenario.resale}</div>
                      <div className="text-sm text-muted-foreground">Total Resale</div>
                    </div>
                    <div>
                      <div className="text-xl font-semibold text-primary">{scenario.perInvestor}</div>
                      <div className="text-sm text-muted-foreground">Per Investor</div>
                    </div>
                    <div className={`text-${scenario.color} text-lg font-bold`}>
                      {scenario.percentage}
                    </div>
                    <div className="text-xs text-muted-foreground">of Original Investment</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Investment Flow Diagram */}
        <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Funding Distribution Flow
          </h3>
          <div className="relative">
            {/* Central Hub */}
            <div className="flex flex-col items-center">
              <div className="bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg p-6 text-center mb-8 animate-pulse-glow">
                <div className="text-xl font-bold">VaultForge Labs</div>
                <div className="text-sm opacity-90">Parent Organization</div>
              </div>
              
              {/* Distribution Arrows */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl">
                <div className="text-center p-4 bg-neuro/10 border border-neuro/30 rounded-lg">
                  <div className="text-neuro font-semibold mb-2">NeuroVault</div>
                  <div className="text-sm text-muted-foreground">Brain Mapping</div>
                </div>
                <div className="text-center p-4 bg-orbital/10 border border-orbital/30 rounded-lg">
                  <div className="text-orbital font-semibold mb-2">OrbitalEdge</div>
                  <div className="text-sm text-muted-foreground">Robotics R&D</div>
                </div>
                <div className="text-center p-4 bg-stellar/10 border border-stellar/30 rounded-lg">
                  <div className="text-stellar font-semibold mb-2">StellarForge</div>
                  <div className="text-sm text-muted-foreground">Orbital Systems</div>
                </div>
                <div className="text-center p-4 bg-velocity/10 border border-velocity/30 rounded-lg">
                  <div className="text-velocity font-semibold mb-2">VelocityWorks</div>
                  <div className="text-sm text-muted-foreground">Launch Tech</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export const Footer = () => {
  const subsidiaries = [
    { name: "NeuroVault Labs", focus: "Brain Mapping" },
    { name: "OrbitalEdge Robotics", focus: "Robotics R&D" },
    { name: "StellarForge Systems", focus: "Orbital Infrastructure" },
    { name: "VelocityWorks LLC", focus: "Launch Technology" }
  ];

  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-background rounded-full"></div>
              </div>
              <div className="text-lg font-bold text-foreground">VaultForge Labs</div>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Pioneering advanced research across neuroscience, robotics, orbital systems, and launch technologies.
            </p>
            <div className="text-xs text-muted-foreground">
              © 2024 VaultForge Labs. All rights reserved.
            </div>
          </div>

          {/* Subsidiaries */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Subsidiaries</h3>
            <div className="space-y-2">
              {subsidiaries.map((subsidiary) => (
                <div key={subsidiary.name}>
                  <div className="text-sm text-foreground hover:text-primary transition-colors cursor-pointer">
                    {subsidiary.name}
                  </div>
                  <div className="text-xs text-muted-foreground">{subsidiary.focus}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Investment */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Investment</h3>
            <div className="space-y-2 text-sm">
              <div className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                Cohort Program
              </div>
              <div className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                Asset Protection
              </div>
              <div className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                VIP Benefits
              </div>
              <div className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                Financial Projections
              </div>
            </div>
          </div>

          {/* Research */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Research</h3>
            <div className="space-y-2 text-sm">
              <div className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                Brain Mapping
              </div>
              <div className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                Campus Access
              </div>
              <div className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                AI Annotation
              </div>
              <div className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                Publications
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              High-impact research. Asset-backed investment. Exponential potential.
            </div>
            <div className="flex gap-6 text-sm">
              <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                Privacy Policy
              </span>
              <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                Terms of Service
              </span>
              <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                Contact
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
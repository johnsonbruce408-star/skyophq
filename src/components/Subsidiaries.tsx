import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const subsidiaries = [
  {
    name: "NeuroVault Labs",
    focus: "Brain Mapping Campus",
    description: "Advanced MRI technology, organelle mapping, and AI-driven neural annotation systems",
    color: "neuro",
    features: ["MRI & Cryo-sectioning", "AI Annotation", "Organoid Research", "VIP Lab Access"]
  },
  {
    name: "OrbitalEdge Robotics", 
    focus: "Robotics R&D",
    description: "Cutting-edge robotics, automation systems, and AI-driven fabrication technologies",
    color: "orbital",
    features: ["Robotic Automation", "AI Fabrication", "Precision Manufacturing", "Integration Systems"]
  },
  {
    name: "StellarForge Systems",
    focus: "Orbital Infrastructure", 
    description: "Satellite technology, orbital systems, and advanced solar power solutions",
    color: "stellar",
    features: ["Satellite Systems", "Orbital Infrastructure", "Solar Technology", "Space Engineering"]
  },
  {
    name: "VelocityWorks LLC",
    focus: "Launch Technology",
    description: "Revolutionary gas gun technology and orbital payload launch systems",
    color: "velocity", 
    features: ["Gas Gun R&D", "Payload Launch", "Orbital Integration", "Launch Innovation"]
  }
];

export const Subsidiaries = () => {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Research Subsidiaries
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Four specialized labs pushing the boundaries of science and technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {subsidiaries.map((subsidiary, index) => (
            <Card key={subsidiary.name} className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-2 border-transparent hover:border-primary/30 transition-all duration-500 animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-3 h-3 rounded-full bg-${subsidiary.color} animate-pulse-glow`} />
                  <Button variant={subsidiary.color as any} size="sm">
                    Explore Lab
                  </Button>
                </div>
                
                <h3 className="text-2xl font-bold mb-2 text-foreground">
                  {subsidiary.name}
                </h3>
                <p className={`text-${subsidiary.color} font-semibold mb-4`}>
                  {subsidiary.focus}
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {subsidiary.description}
                </p>
                
                <div className="space-y-2">
                  {subsidiary.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className={`w-1 h-1 rounded-full bg-${subsidiary.color}`} />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-radial from-${subsidiary.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
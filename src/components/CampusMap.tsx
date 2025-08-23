import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const campusAreas = [
  { name: "Entrance & LIMS", color: "bg-gray-500", position: "col-span-2", description: "Sample intake, chain-of-custody" },
  { name: "Imaging & Dissection", color: "bg-blue-500", position: "col-span-2", description: "MRI, cryo-sectioning, tissue prep" },
  { name: "Cell Tagging & Organelle", color: "bg-green-500", position: "col-span-2", description: "Robotic staining, organoid labs" },
  { name: "Robotic Automation", color: "bg-orange-500", position: "col-span-2", description: "Slice handling, light-sheet, EM prep" },
  { name: "Annotation & AI", color: "bg-purple-500", position: "col-span-2", description: "Workstations, AI cluster, leaderboards" },
  { name: "Fabrication & Prototyping", color: "bg-yellow-500", position: "col-span-2", description: "3D printing, CNC, robotics prototyping" },
  { name: "Data & Compute", color: "bg-red-500", position: "col-span-2", description: "GPU servers, storage, networking" },
  { name: "Support & Housing", color: "bg-amber-600", position: "col-span-2", description: "Dorms, dining, offices" }
];

const vipBenefits = [
  "Exclusive annotation competitions",
  "Early AI model access", 
  "VIP lab tour access",
  "Research collaboration opportunities",
  "Priority data access",
  "Revenue participation rights"
];

export const CampusMap = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-neuro to-primary bg-clip-text text-transparent">
            NeuroVault Labs Campus
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Modular brain mapping facility with integrated VIP investor zones and collaborative research spaces
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Campus Layout */}
          <div className="lg:col-span-2">
            <Card className="p-6 bg-card/80 backdrop-blur-sm border border-neuro/20">
              <h3 className="text-2xl font-bold mb-6 text-neuro">Campus Layout</h3>
              
              <div className="grid grid-cols-4 gap-3 mb-6">
                {campusAreas.map((area, index) => (
                  <div
                    key={area.name}
                    className={`${area.color} ${area.position} p-4 rounded-lg text-white text-center cursor-pointer hover:scale-105 transition-transform duration-300 animate-slide-up`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-sm font-semibold mb-1">{area.name}</div>
                    <div className="text-xs opacity-90">{area.description}</div>
                  </div>
                ))}
              </div>
              
              {/* Workflow Arrows */}
              <div className="flex items-center justify-center mt-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>Intake</span>
                  <div className="w-4 h-0.5 bg-primary"></div>
                  <span>Imaging</span>
                  <div className="w-4 h-0.5 bg-primary"></div>
                  <span>Tagging</span>
                  <div className="w-4 h-0.5 bg-primary"></div>
                  <span>Robotics</span>
                  <div className="w-4 h-0.5 bg-primary"></div>
                  <span>AI</span>
                  <div className="w-4 h-0.5 bg-primary"></div>
                  <span>Data</span>
                </div>
              </div>
            </Card>
          </div>

          {/* VIP Benefits */}
          <div>
            <Card className="p-6 bg-card/80 backdrop-blur-sm border border-accent/20 h-fit">
              <h3 className="text-2xl font-bold mb-6 text-accent">VIP Cohort Benefits</h3>
              
              <div className="space-y-4 mb-6">
                {vipBenefits.map((benefit, index) => (
                  <div key={benefit} className="flex items-center gap-3 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse-glow"></div>
                    <span className="text-sm text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <Button variant="hero" className="w-full">
                Join VIP Program
              </Button>
            </Card>

            {/* Campus Stats */}
            <Card className="p-6 bg-card/80 backdrop-blur-sm border border-primary/20 mt-6">
              <h3 className="text-xl font-bold mb-4 text-primary">Campus Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Area</span>
                  <span className="font-semibold">50,000 sq ft</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Research Zones</span>
                  <span className="font-semibold">8 Specialized</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">VIP Stations</span>
                  <span className="font-semibold">25 Dedicated</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">AI Clusters</span>
                  <span className="font-semibold">4 High-Performance</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
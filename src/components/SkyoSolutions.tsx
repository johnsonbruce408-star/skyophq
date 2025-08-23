import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    category: "Enterprise Solutions",
    title: "Complete Operations Management",
    description: "End-to-end solutions for large-scale operations requiring precision and reliability.",
    metrics: { implementation: "30 days", roi: "300%", uptime: "99.9%" },
    technologies: ["Cloud Infrastructure", "AI Analytics", "Real-time Monitoring", "Automated Reporting"]
  },
  {
    category: "Government & Defense",
    title: "Secure Mission-Critical Systems",
    description: "Advanced security protocols and compliance frameworks for sensitive operations.",
    metrics: { implementation: "45 days", roi: "250%", uptime: "99.99%" },
    technologies: ["Encrypted Communications", "Threat Assessment", "Compliance Management", "Emergency Response"]
  },
  {
    category: "Commercial Aviation",
    title: "Flight Operations Optimization",
    description: "Streamlined flight management and operational efficiency for commercial aviation.",
    metrics: { implementation: "60 days", roi: "400%", uptime: "99.8%" },
    technologies: ["Flight Planning", "Weather Integration", "Fuel Optimization", "Safety Management"]
  }
];

export const SkyoSolutions = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-muted/20 via-background to-background" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Industry Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tailored solutions designed for specific industry requirements and operational challenges.
          </p>
        </div>

        <div className="space-y-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-500 bg-card/80 backdrop-blur-sm border border-primary/20 hover:border-primary/40">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                <div className="lg:col-span-2">
                  <CardHeader className="p-0">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium">
                        {solution.category}
                      </div>
                    </div>
                    <CardTitle className="text-2xl font-bold mb-3">{solution.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{solution.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="p-0 mt-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      {solution.technologies.map((tech, techIndex) => (
                        <div key={techIndex} className="text-center p-3 rounded-lg bg-muted/50 border border-primary/10">
                          <div className="text-sm font-medium text-foreground">{tech}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </div>

                <div className="flex flex-col justify-between">
                  <div className="space-y-4 mb-6">
                    <div className="text-center p-4 rounded-lg bg-primary/5 border border-primary/20">
                      <div className="text-2xl font-bold text-primary">{solution.metrics.implementation}</div>
                      <div className="text-sm text-muted-foreground">Implementation</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-primary/5 border border-primary/20">
                      <div className="text-2xl font-bold text-primary">{solution.metrics.roi}</div>
                      <div className="text-sm text-muted-foreground">Average ROI</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-primary/5 border border-primary/20">
                      <div className="text-2xl font-bold text-primary">{solution.metrics.uptime}</div>
                      <div className="text-sm text-muted-foreground">System Uptime</div>
                    </div>
                  </div>
                  
                  <Button 
                    variant="hero" 
                    className="w-full group-hover:shadow-glow transition-all duration-300"
                  >
                    Get Solution Details
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
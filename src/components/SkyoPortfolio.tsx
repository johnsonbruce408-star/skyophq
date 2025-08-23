import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const portfolioItems = [
  {
    title: "Global Logistics Network",
    client: "Fortune 500 Corporation",
    category: "Supply Chain Optimization",
    description: "Implemented AI-driven logistics management system reducing delivery times by 40% and operational costs by 25%.",
    results: ["40% faster delivery", "25% cost reduction", "99.5% accuracy rate"],
    technologies: ["Machine Learning", "IoT Sensors", "Real-time Analytics", "Predictive Modeling"],
    color: "neuro"
  },
  {
    title: "Smart City Infrastructure",
    client: "Metropolitan Government",
    category: "Urban Planning",
    description: "Deployed comprehensive monitoring system for traffic flow, air quality, and emergency response coordination.",
    results: ["30% traffic improvement", "Real-time monitoring", "Emergency response optimization"],
    technologies: ["Edge Computing", "Sensor Networks", "Data Visualization", "Emergency Systems"],
    color: "orbital"
  },
  {
    title: "Aviation Safety Platform",
    client: "International Airport",
    category: "Safety & Security",
    description: "Advanced threat detection and runway management system enhancing airport security and operational efficiency.",
    results: ["Zero security incidents", "95% efficiency gain", "24/7 monitoring"],
    technologies: ["Computer Vision", "Threat Detection", "Automated Systems", "Compliance Tools"],
    color: "stellar"
  },
  {
    title: "Energy Grid Optimization",
    client: "Regional Utility Company",
    category: "Energy Management",
    description: "Smart grid implementation with predictive maintenance and renewable energy integration capabilities.",
    results: ["20% energy savings", "Predictive maintenance", "Grid stability improved"],
    technologies: ["Smart Sensors", "Predictive Analytics", "Grid Management", "Renewable Integration"],
    color: "velocity"
  }
];

export const SkyoPortfolio = () => {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/10 to-background" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world implementations delivering measurable results across diverse industries and operational challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-xl transition-all duration-500 bg-card/80 backdrop-blur-sm border-${item.color}/20 hover:border-${item.color}/40`}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className={`px-3 py-1 rounded-full bg-${item.color}/10 border border-${item.color}/30 text-${item.color} text-sm font-medium`}>
                    {item.category}
                  </div>
                  <div className={`w-3 h-3 rounded-full bg-${item.color}/60 animate-pulse-glow`} />
                </div>
                <CardTitle className="text-xl font-bold">{item.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">{item.client}</CardDescription>
                <p className="text-base mt-3 leading-relaxed">{item.description}</p>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Key Results</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {item.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center text-sm">
                          <div className={`w-2 h-2 rounded-full bg-${item.color}/60 mr-3`} />
                          <span className="text-muted-foreground">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="px-2 py-1 rounded text-xs bg-muted/50 border border-primary/10 text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    variant={item.color as any}
                    className="w-full group-hover:shadow-md transition-all duration-300 mt-4"
                  >
                    View Case Study
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg" className="px-8 py-4">
            View Complete Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};
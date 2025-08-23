import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Aerial Systems Integration",
    description: "Advanced drone technology solutions for surveillance, mapping, and data collection operations.",
    features: ["Custom UAV Solutions", "Real-time Monitoring", "Automated Flight Systems", "Data Analytics"],
    color: "neuro"
  },
  {
    title: "Strategic Operations Consulting",
    description: "Optimize your operational efficiency through data-driven insights and strategic planning.",
    features: ["Process Optimization", "Risk Assessment", "Performance Analytics", "Strategic Planning"],
    color: "orbital"
  },
  {
    title: "Technology Infrastructure",
    description: "Comprehensive IT solutions and infrastructure management for modern enterprises.",
    features: ["Cloud Migration", "Security Solutions", "Network Architecture", "System Integration"],
    color: "stellar"
  },
  {
    title: "Training & Certification",
    description: "Professional training programs for aerial systems operation and technology implementation.",
    features: ["Pilot Certification", "Technical Training", "Safety Protocols", "Compliance Management"],
    color: "velocity"
  }
];

export const SkyoServices = () => {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology solutions designed to elevate your operations and drive measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-lg transition-all duration-300 bg-card/80 backdrop-blur-sm border-${service.color}/20 hover:border-${service.color}/40`}
            >
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-${service.color}/10 border border-${service.color}/30 mb-4 flex items-center justify-center`}>
                  <div className={`w-6 h-6 rounded-full bg-${service.color}/50 animate-pulse-glow`} />
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className={`w-2 h-2 rounded-full bg-${service.color}/60 mr-3`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant={service.color as any}
                  className="w-full group-hover:shadow-md transition-all duration-300"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
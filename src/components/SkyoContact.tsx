import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const contactMethods = [
  {
    title: "Strategic Consultation",
    description: "Discuss your operational challenges and strategic objectives",
    action: "Schedule Strategy Call",
    color: "neuro",
    availability: "Within 24 hours"
  },
  {
    title: "Technical Assessment",
    description: "Get detailed technical evaluation and implementation roadmap",
    action: "Request Assessment",
    color: "orbital",
    availability: "2-3 business days"
  },
  {
    title: "Partnership Inquiry",
    description: "Explore collaboration opportunities and strategic partnerships",
    action: "Discuss Partnership",
    color: "stellar",
    availability: "Within 48 hours"
  },
  {
    title: "Support & Maintenance",
    description: "24/7 support for existing clients and system maintenance",
    action: "Contact Support",
    color: "velocity",
    availability: "Immediate response"
  }
];

export const SkyoContact = () => {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/10 to-background" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Get Started Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your operations? Connect with our experts to discuss your specific requirements and objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-8">Choose Your Engagement Type</h3>
            {contactMethods.map((method, index) => (
              <Card 
                key={index} 
                className={`group hover:shadow-lg transition-all duration-300 bg-card/80 backdrop-blur-sm border-${method.color}/20 hover:border-${method.color}/40`}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className={`w-3 h-3 rounded-full bg-${method.color}/60 animate-pulse-glow`} />
                    <div className={`px-3 py-1 rounded-full bg-${method.color}/10 border border-${method.color}/30 text-${method.color} text-sm font-medium`}>
                      {method.availability}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{method.title}</CardTitle>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant={method.color as any}
                    className="w-full group-hover:shadow-md transition-all duration-300"
                  >
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div>
            <Card className="bg-card/80 backdrop-blur-sm border border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl">Direct Contact Form</CardTitle>
                <CardDescription>
                  Send us a detailed message about your project requirements and we'll respond within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input 
                      id="firstName" 
                      placeholder="Enter your first name" 
                      className="bg-background/50 border-primary/20 focus:border-primary/40"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Enter your last name" 
                      className="bg-background/50 border-primary/20 focus:border-primary/40"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your.email@company.com" 
                    className="bg-background/50 border-primary/20 focus:border-primary/40"
                  />
                </div>
                
                <div>
                  <Label htmlFor="company">Company / Organization</Label>
                  <Input 
                    id="company" 
                    placeholder="Your company name" 
                    className="bg-background/50 border-primary/20 focus:border-primary/40"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Project Details</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Describe your project requirements, timeline, and objectives..." 
                    rows={6}
                    className="bg-background/50 border-primary/20 focus:border-primary/40"
                  />
                </div>
                
                <Button variant="hero" className="w-full">
                  Send Message
                </Button>
                
                <div className="text-center text-sm text-muted-foreground">
                  <p>Our team will review your inquiry and respond within 24 hours</p>
                  <p className="mt-2">For urgent matters, call: <span className="text-primary font-medium">+1 (555) 123-4567</span></p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Contact Info */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-primary/5 to-primary-glow/5 border border-primary/20 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-bold text-lg mb-2">Global Headquarters</h4>
                  <p className="text-muted-foreground">
                    123 Technology Drive<br />
                    Innovation District<br />
                    San Francisco, CA 94105
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Operations Center</h4>
                  <p className="text-muted-foreground">
                    24/7 Support Available<br />
                    Emergency Response: &lt;1 hour<br />
                    Standard Support: &lt;4 hours
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Certifications</h4>
                  <p className="text-muted-foreground">
                    ISO 27001 Certified<br />
                    SOC 2 Type II Compliant<br />
                    FAA Part 107 Certified
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
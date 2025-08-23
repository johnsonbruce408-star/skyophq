import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const teamMembers = [
  {
    name: "Sarah Chen",
    role: "Chief Technology Officer",
    experience: "15+ years",
    specialization: "AI & Machine Learning",
    achievements: ["PhD Computer Science", "Former Google Senior Engineer", "50+ Patents"],
    color: "neuro"
  },
  {
    name: "Marcus Rodriguez",
    role: "Director of Operations",
    experience: "12+ years",
    specialization: "Aerospace Engineering",
    achievements: ["NASA Flight Systems", "Commercial Aviation Expert", "Safety Certification Lead"],
    color: "orbital"
  },
  {
    name: "Dr. Emily Watson",
    role: "Head of Research",
    experience: "18+ years",
    specialization: "Systems Integration",
    achievements: ["MIT PhD", "Defense Contractor Lead", "Innovation Awards"],
    color: "stellar"
  },
  {
    name: "James Park",
    role: "Strategic Partnerships",
    experience: "10+ years",
    specialization: "Business Development",
    achievements: ["Fortune 500 Clients", "International Expansion", "Strategic Alliances"],
    color: "velocity"
  }
];

const capabilities = [
  { metric: "500+", label: "Projects Completed", color: "neuro" },
  { metric: "150+", label: "Team Members", color: "orbital" },
  { metric: "25+", label: "Countries Served", color: "stellar" },
  { metric: "98%", label: "Client Retention", color: "velocity" }
];

export const SkyoTeam = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-muted/20 via-background to-background" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Expert Leadership
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Industry veterans and innovation leaders driving technological advancement and operational excellence.
          </p>
        </div>

        {/* Team Capabilities */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {capabilities.map((capability, index) => (
            <Card key={index} className={`text-center bg-card/80 backdrop-blur-sm border-${capability.color}/20 hover:border-${capability.color}/40 transition-all duration-300`}>
              <CardContent className="p-6">
                <div className={`text-3xl font-bold text-${capability.color} mb-2`}>{capability.metric}</div>
                <div className="text-sm text-muted-foreground">{capability.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Leadership Team */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-xl transition-all duration-500 bg-card/80 backdrop-blur-sm border-${member.color}/20 hover:border-${member.color}/40`}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-${member.color}/20 to-${member.color}/40 border-2 border-${member.color}/30 flex items-center justify-center`}>
                    <div className={`w-8 h-8 rounded-full bg-${member.color}/60 animate-pulse-glow`} />
                  </div>
                  <div className="text-right">
                    <div className={`px-3 py-1 rounded-full bg-${member.color}/10 border border-${member.color}/30 text-${member.color} text-sm font-medium`}>
                      {member.experience}
                    </div>
                  </div>
                </div>
                <CardTitle className="text-xl font-bold">{member.name}</CardTitle>
                <CardDescription className="text-base">{member.role}</CardDescription>
                <div className="mt-2">
                  <span className="text-sm font-medium text-foreground">Specialization: </span>
                  <span className="text-sm text-muted-foreground">{member.specialization}</span>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Key Achievements</h4>
                  {member.achievements.map((achievement, achievementIndex) => (
                    <div key={achievementIndex} className="flex items-center text-sm">
                      <div className={`w-2 h-2 rounded-full bg-${member.color}/60 mr-3`} />
                      <span className="text-muted-foreground">{achievement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-primary/5 to-primary-glow/5 border border-primary/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Join Our Growing Team</h3>
              <p className="text-muted-foreground mb-6">
                We're always looking for exceptional talent to join our mission of advancing technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero">View Open Positions</Button>
                <Button variant="outline">Partnership Opportunities</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
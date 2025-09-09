import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Shield, TrendingUp, Users, FileText, Clock, Mail, MapPin, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { SimpleNavigation } from "@/components/SimpleNavigation";


const SkylinePortal = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-800">
      <SimpleNavigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Tech Grid Overlay */}
        <div className="absolute inset-0 tech-grid opacity-30" />
        
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/30 via-slate-50/50 to-blue-50/30 dark:from-amber-900/10 dark:via-slate-900/50 dark:to-blue-900/10" />
        
        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-card/60 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 text-sm text-muted-foreground mb-6">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
              <span>LLC of Delaware</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
              Skyline Operator Group
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-primary animate-pulse-glow">
              Secure Investment Portal
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
              Access your private investment documents, complete subscriptions, and monitor your portfolio performance through our secure investor platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="text-lg px-8" asChild>
                <Link to="/unified-portal">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Access Unified Portal
                </Link>
              </Button>
              <Button variant="tech" size="lg" className="text-lg px-8">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-float opacity-60" />
        <div className="absolute top-40 right-32 w-3 h-3 bg-accent rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-32 left-1/3 w-1 h-1 bg-neuro rounded-full animate-float opacity-80" style={{ animationDelay: '4s' }} />
      </section>


      {/* Investment Opportunity Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 tech-grid opacity-10" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Skyline Prime Limited Partnership
            </h2>
            <h3 className="text-xl md:text-2xl text-primary mb-8 animate-pulse-glow">
              Exclusive Direct Investment Opportunities
            </h3>
            <blockquote className="text-lg text-muted-foreground max-w-4xl mx-auto mb-6 leading-relaxed italic border-l-4 border-primary pl-4">
              "We got some great brokers lined up and a small Softr-enabled office scalable to 50 million in invested capital—immediate plans to soft-hire a Project Manager converting into a full-time Portfolio Manager after capital deployment."
            </blockquote>
            <p className="text-sm text-muted-foreground mb-12">— Bruce L. Johnson Jr., Fund Manager</p>
            <Button variant="hero" size="lg" className="mb-8">
              <Shield className="w-5 h-5 mr-2" />
              Verify Accreditation to View Details
            </Button>
          </div>

          {/* Performance Metrics */}
          <div className="grid md:grid-cols-2 gap-8 mb-16 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Card className="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 border-2 border-blue-200 dark:border-blue-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-4xl font-bold text-blue-600 animate-pulse-glow">$86.00</CardTitle>
                <p className="text-muted-foreground">Current Value</p>
              </CardHeader>
            </Card>
            <Card className="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 border-2 border-blue-200 dark:border-blue-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-4xl font-bold text-green-600">+12.5%</CardTitle>
                <p className="text-muted-foreground">Growth</p>
              </CardHeader>
            </Card>
          </div>

          {/* Value Proposition */}
          <div className="text-center mb-16 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Build Wealth Through Private Ownership
            </h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We strategically identify underperforming small businesses with stable cash flow, executing professional turnarounds through expert operator placement and robust growth planning. This approach delivers direct LP access to private company equity.
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Why Choose Skyline Prime Limited Partnership?
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 border-2 border-blue-200 dark:border-blue-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 animate-slide-up">
                <CardHeader>
                  <TrendingUp className="w-12 h-12 text-blue-600 mb-4 animate-pulse-glow" />
                  <CardTitle className="text-blue-600">Direct LP access to private company equity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Gain direct ownership stakes in carefully selected private businesses with proven cash flow and growth potential.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 border-2 border-blue-200 dark:border-blue-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <CardHeader>
                  <Users className="w-12 h-12 text-blue-600 mb-4 animate-pulse-glow" />
                  <CardTitle className="text-blue-600">Strong alignment between operators and investors</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Our operator-partners are incentivized through equity participation, ensuring their success directly benefits our investors.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 border-2 border-blue-200 dark:border-blue-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <CardHeader>
                  <Shield className="w-12 h-12 text-blue-600 mb-4 animate-pulse-glow" />
                  <CardTitle className="text-blue-600">Experienced management focused on capital preservation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Our team prioritizes protecting investor capital while pursuing sustainable growth through proven business improvement strategies.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Accreditation CTA */}
          <div className="text-center mb-16 animate-slide-up">
            <Button variant="hero" size="lg" className="mb-8">
              <FileText className="w-5 h-5 mr-2" />
              Submit Accreditation for Access
            </Button>
            <Card className="bg-card/80 backdrop-blur-sm border border-primary/20 max-w-2xl mx-auto hover:border-primary/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-primary animate-pulse-glow">For Accredited Investors Only</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                   <p className="text-muted-foreground leading-relaxed">
                     This investment opportunity is available exclusively to accredited investors as defined by SEC regulations. Minimum investment $100,000.
                   </p>
                <div>
                  <h5 className="font-semibold mb-4 text-foreground">Investment Documents Available</h5>
                  <ul className="space-y-2 text-muted-foreground text-left">
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full" />
                      Private Placement Memorandum (PPM)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full" />
                      Limited Partnership Agreement
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full" />
                      Subscription Documents
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full" />
                      Financial Statements & Performance Data
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="hero">Get Verified ($59)</Button>
                  <Button variant="tech" asChild><Link to="/unified-portal">Access Portal</Link></Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  Securities offered through Regulation D 506(c) • Wyoming Limited Partnership
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 relative bg-card/10">
        <div className="absolute inset-0 tech-grid opacity-5" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">Contact Us</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Ready to explore investment opportunities? Get in touch with our team.
              </p>
              <Card className="bg-card/80 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-primary">Send a Message</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="fullName" className="text-foreground">Full Name *</Label>
                    <Input id="fullName" placeholder="Enter your full name" className="bg-background/50 backdrop-blur-sm border-border" />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-foreground">Email Address *</Label>
                    <Input id="email" type="email" placeholder="Enter your email address" className="bg-background/50 backdrop-blur-sm border-border" />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-foreground">Message *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your investment interests and any questions you may have..."
                      className="min-h-[120px] bg-background/50 backdrop-blur-sm border-border"
                    />
                  </div>
                  <Button variant="hero" className="w-full">
                    <Mail className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-primary">
                  <MapPin className="w-5 h-5" />
                  Skyline Operator Group
                </h3>
                <p className="text-muted-foreground">Delaware, United States</p>
                <p className="text-primary font-medium">SkyOpHQ.com</p>
              </div>

              <Card className="bg-card/80 backdrop-blur-sm border border-neuro/20 hover:border-neuro/40 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-neuro">Investment Minimums</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-muted-foreground">
                   <p className="flex items-center gap-2">
                     <div className="w-1 h-1 bg-neuro rounded-full" />
                     Minimum investment: $100,000
                   </p>
                  <p className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-neuro rounded-full" />
                    Sophisticated investor verification required
                  </p>
                  <p className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-neuro rounded-full" />
                    Investment period: 5-7 years
                  </p>
                  <p className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-neuro rounded-full" />
                    Distribution schedule: Quarterly
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/80 backdrop-blur-sm border border-orbital/20 hover:border-orbital/40 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-orbital">
                    <Clock className="w-5 h-5" />
                    Response Time
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    We typically respond to qualified inquiries within 24 hours during business days. For urgent matters, please indicate in your message.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-background border-t border-border relative">
        <div className="absolute inset-0 tech-grid opacity-5" />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h3 className="text-lg font-semibold mb-4 text-primary">Skyline Prime Limited Partnership</h3>
          <p className="text-muted-foreground mb-8">Professional Investment Management | SkyOpHQ.com</p>
          
          <Card className="bg-card/60 backdrop-blur-sm border border-primary/20 max-w-4xl mx-auto mb-8">
            <CardHeader>
              <CardTitle className="text-primary">Important Disclaimer</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
               <p className="text-sm text-muted-foreground">
                 <strong className="text-foreground">Skyline Prime Limited Partnership | Delaware LP | Regulation D 506(c) | Fund Manager: Bruce L. Johnson Jr.</strong>
               </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                This is not an offer to sell securities. Any investment offer will be made only through a Private Placement Memorandum (PPM) and related documents. Securities are offered only to accredited investors as defined by SEC regulations. Past performance does not guarantee future results.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                All investments involve risk including the potential loss of principal. The information contained herein is for informational purposes only and should not be construed as investment advice.
              </p>
            </CardContent>
          </Card>

          <p className="text-sm text-muted-foreground mb-4">
            © 2025 Skyline Prime Limited Partnership. All rights reserved.
          </p>
          <div className="flex justify-center gap-4 text-sm">
            <a href="#" className="text-primary hover:text-primary-glow transition-colors">Privacy Policy</a>
            <a href="#" className="text-primary hover:text-primary-glow transition-colors">Terms of Use</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SkylinePortal;
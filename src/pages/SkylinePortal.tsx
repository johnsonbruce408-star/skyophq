import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Shield, TrendingUp, Users, FileText, Clock, Mail, MapPin } from "lucide-react";

const SkylinePortal = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-background via-background/95 to-primary/5">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            Skyline Operator Group LLC
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-primary">
            Secure Investment Portal
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-12">
            Access your private investment documents, complete subscriptions, and monitor your portfolio performance through our secure investor platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Access Investor Portal
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Investment Opportunity Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Skyline Prime Limited Partnership
            </h2>
            <h3 className="text-xl md:text-2xl text-primary mb-8">
              Exclusive Direct Investment Opportunities
            </h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-12">
              Available only to verified accredited investors, our Wyoming-based limited partnership offers access to meticulously structured private business acquisitions.
            </p>
            <Button size="lg" className="mb-8">
              Verify Accreditation to View Details
            </Button>
          </div>

          {/* Performance Metrics */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-primary">$86.00</CardTitle>
                <p className="text-muted-foreground">Current Value</p>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-green-500">+12.5%</CardTitle>
                <p className="text-muted-foreground">Growth</p>
              </CardHeader>
            </Card>
          </div>

          {/* Value Proposition */}
          <div className="text-center mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-8">
              Build Wealth Through Private Ownership
            </h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              We strategically identify underperforming small businesses with stable cash flow, executing professional turnarounds through expert operator placement and robust growth planning. This approach delivers direct LP access to private company equity.
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Why Choose Skyline Prime Limited Partnership?
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <TrendingUp className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>Direct LP access to private company equity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Gain direct ownership stakes in carefully selected private businesses with proven cash flow and growth potential.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>Strong alignment between operators and investors</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our operator-partners are incentivized through equity participation, ensuring their success directly benefits our investors.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Shield className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>Experienced management focused on capital preservation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our team prioritizes protecting investor capital while pursuing sustainable growth through proven business improvement strategies.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Accreditation CTA */}
          <div className="text-center mb-16">
            <Button size="lg" className="mb-8">
              Submit Accreditation for Access
            </Button>
            <div className="bg-card border rounded-lg p-8 max-w-2xl mx-auto">
              <h4 className="text-xl font-semibold mb-4">For Accredited Investors Only</h4>
              <p className="text-muted-foreground mb-4">
                This investment opportunity is available exclusively to accredited investors as defined by SEC regulations. Minimum investment $50,000.
              </p>
              <div className="text-left">
                <h5 className="font-semibold mb-4">Investment Documents Available</h5>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Private Placement Memorandum (PPM)</li>
                  <li>• Limited Partnership Agreement</li>
                  <li>• Subscription Documents</li>
                  <li>• Financial Statements & Performance Data</li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
                <Button>Get Verified ($59)</Button>
                <Button variant="outline">Access Portal</Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Securities offered through Regulation D 506(c) • Wyoming Limited Partnership
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
              <p className="text-muted-foreground mb-8">
                Ready to explore investment opportunities? Get in touch with our team.
              </p>
              <Card>
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input id="fullName" placeholder="Enter your full name" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="Enter your email address" />
                  </div>
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your investment interests and any questions you may have..."
                      className="min-h-[120px]"
                    />
                  </div>
                  <Button className="w-full">Send Message</Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Skyline Operator Group
                </h3>
                <p className="text-muted-foreground">Delaware, United States</p>
                <p className="text-primary">SkyOpHQ.com</p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Investment Minimums</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-muted-foreground">
                  <p>• Minimum investment: $250,000</p>
                  <p>• Sophisticated investor verification required</p>
                  <p>• Investment period: 5-7 years</p>
                  <p>• Distribution schedule: Quarterly</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Response Time
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We typically respond to qualified inquiries within 24 hours during business days. For urgent matters, please indicate in your message.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-background border-t">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-lg font-semibold mb-4">Skyline Prime Limited Partnership</h3>
          <p className="text-muted-foreground mb-8">Professional Investment Management | SkyOpHQ.com</p>
          
          <div className="bg-card border rounded-lg p-6 mb-8">
            <h4 className="font-semibold mb-4">Important Disclaimer</h4>
            <p className="text-sm text-muted-foreground mb-4">
              <strong>Skyline Prime LP | Wyoming | Regulation D 506(c) | For Accredited Investors Only</strong>
            </p>
            <p className="text-sm text-muted-foreground">
              This is not an offer to sell securities. Any investment offer will be made only through a Private Placement Memorandum (PPM) and related documents. Securities are offered only to accredited investors as defined by SEC regulations. Past performance does not guarantee future results.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              All investments involve risk including the potential loss of principal. The information contained herein is for informational purposes only and should not be construed as investment advice.
            </p>
          </div>

          <p className="text-sm text-muted-foreground mb-4">
            © 2025 Skyline Prime Limited Partnership. All rights reserved.
          </p>
          <div className="flex justify-center gap-4 text-sm">
            <a href="#" className="text-primary hover:underline">Privacy Policy</a>
            <a href="#" className="text-primary hover:underline">Terms of Use</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SkylinePortal;
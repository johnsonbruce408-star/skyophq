import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Shield, TrendingUp, Users, FileText, Clock, Mail, Phone, Star, CheckCircle, ArrowRight, Lock, ExternalLink } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const SkylineAdsLanding = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    investmentAmount: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-800">
      {/* Minimal Header */}
      <header className="bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center">
                <div className="w-3 h-3 bg-background rounded-sm" />
              </div>
              <span className="text-xl font-bold text-foreground">Skyline Prime LP</span>
            </div>
            <Badge variant="destructive" className="text-sm">
              <Lock className="w-3 h-3 mr-1" />
              Accredited Investors Only
            </Badge>
          </div>
        </div>
      </header>

      {/* Hero Section - Above the Fold */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Value Proposition */}
            <div className="space-y-8 animate-slide-up">
              <div className="space-y-4">
                <Badge className="bg-primary/10 text-primary border-primary/20">
                  <Star className="w-3 h-3 mr-1" />
                  Regulation D 506(c) Offering
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
                    Private Equity Access
                  </span>
                  <br />
                  <span className="text-foreground">Made Simple</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Join sophisticated investors in our <strong>$5M limited partnership</strong> targeting cash-flowing businesses and pre-IPO opportunities with defined exit strategies.
                </p>
              </div>

              {/* Key Benefits */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-lg">Direct LP access to private company equity</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-lg">Strong operator-investor alignment</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-lg">Experienced management focused on capital preservation</span>
                </div>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-6 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">$86.00</div>
                  <div className="text-sm text-muted-foreground">Current Value</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">+12.5%</div>
                  <div className="text-sm text-muted-foreground">Growth</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">10 Years</div>
                  <div className="text-sm text-muted-foreground">Fund Term</div>
                </div>
              </div>
            </div>

            {/* Right Side - Lead Capture Form */}
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Card className="bg-card/80 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 shadow-2xl">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-primary">Get Exclusive Access</CardTitle>
                  <p className="text-muted-foreground">Join sophisticated investors in our next cohort</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="fullName" className="text-foreground">Full Name *</Label>
                      <Input 
                        id="fullName" 
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Enter your full name" 
                        className="bg-background/50 backdrop-blur-sm border-border" 
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-foreground">Email Address *</Label>
                      <Input 
                        id="email" 
                        name="email"
                        type="email" 
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email address" 
                        className="bg-background/50 backdrop-blur-sm border-border" 
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-foreground">Phone Number *</Label>
                      <Input 
                        id="phone" 
                        name="phone"
                        type="tel" 
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number" 
                        className="bg-background/50 backdrop-blur-sm border-border" 
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="investmentAmount" className="text-foreground">Investment Interest *</Label>
                      <select 
                        id="investmentAmount" 
                        name="investmentAmount"
                        value={formData.investmentAmount}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-background/50 backdrop-blur-sm border border-border rounded-md"
                        required
                      >
                        <option value="">Select investment range</option>
                        <option value="250k-500k">$250K - $500K</option>
                        <option value="500k-1m">$500K - $1M</option>
                        <option value="1m-2m">$1M - $2M</option>
                        <option value="2m+">$2M+</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-foreground">Questions or Comments</Label>
                      <Textarea 
                        id="message" 
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your investment goals..."
                        className="min-h-[80px] bg-background/50 backdrop-blur-sm border-border"
                      />
                    </div>
                    <Button variant="hero" size="lg" className="w-full text-lg" type="submit">
                      <Shield className="w-5 h-5 mr-2" />
                      Request Investment Materials
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      By submitting, you confirm you are an accredited investor as defined by SEC regulations.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="py-16 px-4 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Why Choose Skyline Prime Limited Partnership?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our dual-strategy approach combines stable cash flows with high-growth potential
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardHeader className="text-center">
                <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-primary">Direct Equity Access</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  Gain ownership stakes in carefully selected private businesses with proven cash flow and growth potential.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardHeader className="text-center">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-primary">Operator Alignment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  Our operator-partners are incentivized through equity participation, ensuring their success benefits investors.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardHeader className="text-center">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-primary">Capital Preservation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  Experienced management prioritizes protecting investor capital while pursuing sustainable growth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment Strategy */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Dual Strategy Approach
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our $5M fund strategically balances stable cash-flowing acquisitions with high-growth pre-IPO opportunities.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold text-sm">75%</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Multi-Business Acquisitions</h3>
                    <p className="text-muted-foreground">4-5 cash-flowing businesses with phased capital deployment</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent font-bold text-sm">15%</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Late-Stage Investments</h3>
                    <p className="text-muted-foreground">Pre-IPO positions with high upside equity potential</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-secondary font-bold text-sm">10%</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Reserve & Operations</h3>
                    <p className="text-muted-foreground">Strategic reserves and operational budget for growth</p>
                  </div>
                </div>
              </div>

              <Button variant="hero" size="lg" asChild>
                <Link to="/investor-deck">
                  <FileText className="w-5 h-5 mr-2" />
                  View Detailed Investment Deck
                </Link>
              </Button>
            </div>

            <div className="space-y-6">
              <Card className="bg-card/80 backdrop-blur-sm border border-primary/20">
                <CardHeader>
                  <CardTitle className="text-primary text-center">Fund Highlights</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">$5M</div>
                      <div className="text-sm text-muted-foreground">Fund Size</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">10 Years</div>
                      <div className="text-sm text-muted-foreground">Term</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">2%</div>
                      <div className="text-sm text-muted-foreground">Management Fee</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">20%</div>
                      <div className="text-sm text-muted-foreground">GP Carry</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/80 backdrop-blur-sm border border-accent/20">
                <CardHeader>
                  <CardTitle className="text-accent text-center">Investment Requirements</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-center">
                  <p className="text-lg font-semibold text-foreground">Minimum Investment: $250,000</p>
                  <p className="text-muted-foreground">Accredited investor verification required</p>
                  <p className="text-sm text-muted-foreground">Securities offered through Regulation D 506(c)</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals & Contact */}
      <section className="py-16 px-4 bg-card/50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Ready to Join Our Investment Community?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Speak directly with our investment team to discuss your portfolio goals and accreditation process.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8">
              <Phone className="w-5 h-5 mr-2" />
              Schedule a Call
            </Button>
            <Button variant="tech" size="lg" className="text-lg px-8" asChild>
              <Link to="/skyline-portal">
                <ExternalLink className="w-5 h-5 mr-2" />
                Access Investment Portal
              </Link>
            </Button>
          </div>

          <div className="pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
              <strong>Important Disclosure:</strong> This is a private investment opportunity available only to accredited investors as defined by SEC regulations. 
              Securities offered through Regulation D 506(c). Past performance does not guarantee future results. 
              All investments involve risk of loss. Please read all offering documents carefully before investing.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-background border-t border-border">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="w-6 h-6 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center">
              <div className="w-2 h-2 bg-background rounded-sm" />
            </div>
            <span className="text-lg font-bold text-foreground">Skyline Operator Group</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Delaware LLC • Wyoming Limited Partnership • SkyOpHQ.com
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SkylineAdsLanding;
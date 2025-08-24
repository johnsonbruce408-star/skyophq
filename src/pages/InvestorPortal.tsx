import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { 
  FileText, 
  Shield, 
  TrendingUp, 
  Users, 
  Lock, 
  DollarSign,
  CheckCircle,
  AlertTriangle
} from "lucide-react";

const InvestorPortal = () => {
  const [isAccredited, setIsAccredited] = useState<boolean | null>(null);
  const [showVerification, setShowVerification] = useState(false);

  const investmentDocuments = [
    { name: "Private Placement Memorandum (PPM)", icon: FileText, restricted: true },
    { name: "Limited Partnership Agreement", icon: FileText, restricted: true },
    { name: "Subscription Documents", icon: FileText, restricted: true },
    { name: "Financial Statements & Performance Data", icon: TrendingUp, restricted: true },
    { name: "Research Portfolio Overview", icon: Users, restricted: false },
    { name: "Asset Protection Guidelines", icon: Shield, restricted: false }
  ];

  const portfolioMetrics = [
    { label: "Current NAV", value: "$86.00", change: "+12.5%", positive: true },
    { label: "Total Investment", value: "$25M", change: "Across 25 Cohorts", positive: true },
    { label: "Asset Recovery Rate", value: "96%", change: "Conservative Scenario", positive: true },
    { label: "Distribution Schedule", value: "Quarterly", change: "Next: Q1 2025", positive: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-30" />
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
              VaultForge Investor Portal
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
              Secure access to investment documents, portfolio monitoring, and exclusive opportunities for verified accredited investors
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Dialog open={showVerification} onOpenChange={setShowVerification}>
              <DialogTrigger asChild>
                <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                  <Shield className="mr-2 h-5 w-5" />
                  Verify Accreditation
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-card/95 backdrop-blur-sm border-primary/20">
                <DialogHeader>
                  <DialogTitle className="text-2xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Accredited Investor Verification
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-6">
                  <p className="text-muted-foreground">
                    This investment opportunity is available exclusively to accredited investors as defined by SEC regulations.
                  </p>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground">Are you an accredited investor?</h4>
                    <p className="text-sm text-muted-foreground">An accredited investor typically has:</p>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-primary" />
                        Net worth exceeding $1 million, or
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-primary" />
                        Annual income exceeding $200,000 ($300,000 for couples)
                      </li>
                    </ul>
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <Button 
                      variant="hero" 
                      onClick={() => {
                        setIsAccredited(true);
                        setShowVerification(false);
                      }}
                      className="w-full"
                    >
                      Yes, I am an accredited investor
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        setIsAccredited(false);
                        setShowVerification(false);
                      }}
                      className="w-full"
                    >
                      No, I am not an accredited investor
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            
            <Button variant="tech" size="lg" className="text-lg px-8 py-4" asChild>
              <Link to="/unified-portal">
                <Lock className="mr-2 h-5 w-5" />
                Access Portal
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Performance */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Portfolio Performance</h2>
            <p className="text-muted-foreground">Real-time monitoring of your VaultForge investments</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioMetrics.map((metric, index) => (
              <Card key={metric.label} className="bg-card/50 backdrop-blur-sm border-primary/20 p-6 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">{metric.value}</div>
                  <div className="text-sm text-muted-foreground mb-2">{metric.label}</div>
                  <div className={`text-xs flex items-center justify-center gap-1 ${metric.positive ? 'text-green-400' : 'text-muted-foreground'}`}>
                    {metric.positive && <TrendingUp className="h-3 w-3" />}
                    {metric.change}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Opportunities */}
      <section className="py-16 px-6 bg-card/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Exclusive Investment Opportunities
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Access meticulously structured private research investments across neuroscience, robotics, orbital systems, and launch technologies
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 p-8">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse-glow" />
                  <h3 className="text-2xl font-bold text-foreground">VaultForge Prime Partnership</h3>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  Direct LP access to private research equity across four cutting-edge subsidiaries. Asset-backed investments with quarterly distributions and VIP lab access privileges.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm text-foreground">Direct ownership in research subsidiaries</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm text-foreground">Asset protection & recovery guarantees</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm text-foreground">VIP campus access & annotation events</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm text-foreground">Quarterly performance distributions</span>
                  </div>
                </div>
                
                {isAccredited === true ? (
                  <Button variant="hero" className="w-full">
                    View Investment Details
                  </Button>
                ) : (
                  <Button variant="outline" disabled className="w-full">
                    <Lock className="mr-2 h-4 w-4" />
                    Verification Required
                  </Button>
                )}
              </div>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur-sm border-accent/20 p-8">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-accent animate-pulse-glow" />
                  <h3 className="text-2xl font-bold text-foreground">Investment Minimums</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Minimum Investment:</span>
                    <span className="text-lg font-semibold text-foreground">$250,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Investment Period:</span>
                    <span className="text-lg font-semibold text-foreground">5-7 years</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Distribution Schedule:</span>
                    <span className="text-lg font-semibold text-foreground">Quarterly</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Asset Recovery Rate:</span>
                    <span className="text-lg font-semibold text-primary">96%</span>
                  </div>
                </div>
                
                <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-accent mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">For Accredited Investors Only</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Securities offered through Regulation D 506(c) • Delaware Limited Partnership
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment Documents */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Investment Documents</h2>
            <p className="text-muted-foreground">Access comprehensive documentation and due diligence materials</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {investmentDocuments.map((doc, index) => (
              <Card key={doc.name} className="bg-card/50 backdrop-blur-sm border-border p-6 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <doc.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-2">{doc.name}</h3>
                    <div className="flex items-center gap-2">
                      {doc.restricted ? (
                        <>
                          <Badge variant="outline" className="text-xs">
                            <Lock className="mr-1 h-3 w-3" />
                            Restricted
                          </Badge>
                          {isAccredited === true ? (
                            <Button variant="ghost" size="sm" className="text-xs">
                              Download
                            </Button>
                          ) : (
                            <span className="text-xs text-muted-foreground">Verification Required</span>
                          )}
                        </>
                      ) : (
                        <>
                          <Badge variant="secondary" className="text-xs">
                            Public
                          </Badge>
                          <Button variant="ghost" size="sm" className="text-xs">
                            Download
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 bg-card/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Contact Investment Team</h2>
            <p className="text-muted-foreground">Ready to explore investment opportunities? Get in touch with our team.</p>
          </div>
          
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input className="bg-background/50 border-border" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input type="email" className="bg-background/50 border-border" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <Textarea 
                  className="bg-background/50 border-border min-h-[120px]" 
                  placeholder="Tell us about your investment interests and experience..."
                />
              </div>
              
              <div className="text-center">
                <Button variant="hero" size="lg" className="px-12">
                  Send Message
                </Button>
                <p className="text-xs text-muted-foreground mt-4">
                  We typically respond to qualified inquiries within 24 hours during business days.
                </p>
              </div>
            </form>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InvestorPortal;
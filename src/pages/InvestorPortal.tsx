import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Navigation } from "@/components/Navigation";
import { EdocManager } from "@/components/EdocManager";
import { FileText, Shield, DollarSign, CheckCircle, Bell, LogOut, Upload, ExternalLink, AlertTriangle } from "lucide-react";

const InvestorPortal = () => {
  const { user, signOut } = useAuth();
  const [isAccredited, setIsAccredited] = useState<boolean | null>(null);
  const [showVerification, setShowVerification] = useState(false);
  const [documentsSigned, setDocumentsSigned] = useState(false);

  const requiredDocuments = [
    {
      name: "Accredited Investor Verification",
      description: "GetAccredited.com certification - $59",
      status: isAccredited ? "completed" : "pending",
      url: "https://getaccredited.com",
      required: true
    },
    {
      name: "Private Placement Memorandum",
      description: "Investment terms and conditions",
      status: documentsSigned ? "signed" : "pending",
      required: true
    },
    {
      name: "Limited Partnership Agreement", 
      description: "Legal partnership documentation",
      status: documentsSigned ? "signed" : "pending",
      required: true
    },
    {
      name: "Subscription Agreement",
      description: "Investment subscription details",
      status: documentsSigned ? "signed" : "pending", 
      required: true
    }
  ];

  const onboardingSteps = [
    {
      step: 1,
      title: "Get Accredited",
      description: "Verify your accredited investor status with GetAccredited.com ($59)",
      status: isAccredited ? "completed" : "current",
      action: "Start Verification"
    },
    {
      step: 2, 
      title: "Sign Documents",
      description: "Review and sign investment documentation",
      status: documentsSigned ? "completed" : isAccredited ? "current" : "upcoming",
      action: "Sign Documents"
    },
    {
      step: 3,
      title: "Fund Investment",
      description: "Transfer funds to begin investing",
      status: (isAccredited && documentsSigned) ? "current" : "upcoming",
      action: "Fund Account"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-24">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Skyline Prime Limited Partnership
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Exclusive investment opportunity for accredited investors
          </p>
          <div className="flex items-center justify-center gap-4">
            <Badge variant="secondary" className="text-sm">
              SEC Regulation D 506(c)
            </Badge>
            <Badge variant="secondary" className="text-sm">
              Accredited Investors Only
            </Badge>
          </div>
        </div>

        {/* Onboarding Progress */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2 text-primary" />
              Investment Onboarding
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {onboardingSteps.map((step) => (
                <Card 
                  key={step.step}
                  className={`p-4 ${
                    step.status === 'completed' ? 'bg-green-50 border-green-200' :
                    step.status === 'current' ? 'bg-primary/5 border-primary/20' :
                    'bg-muted border-border'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                      step.status === 'completed' ? 'bg-green-500 text-white' :
                      step.status === 'current' ? 'bg-primary text-primary-foreground' :
                      'bg-muted-foreground text-white'
                    }`}>
                      {step.status === 'completed' ? '✓' : step.step}
                    </div>
                    <h3 className="font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{step.description}</p>
                  {step.step === 1 && !isAccredited && (
                    <Button 
                      size="sm" 
                      className="w-full"
                      onClick={() => window.open('https://getaccredited.com', '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Get Accredited ($59)
                    </Button>
                  )}
                  {step.step === 1 && isAccredited && (
                    <Button size="sm" variant="outline" className="w-full" disabled>
                      ✓ Accreditation Verified
                    </Button>
                  )}
                  {step.step === 2 && step.status === 'current' && (
                    <Button 
                      size="sm" 
                      className="w-full"
                      onClick={() => setDocumentsSigned(true)}
                    >
                      {step.action}
                    </Button>
                  )}
                  {step.step === 2 && step.status === 'completed' && (
                    <Button size="sm" variant="outline" className="w-full" disabled>
                      ✓ Documents Signed
                    </Button>
                  )}
                  {step.step === 3 && step.status === 'current' && (
                    <Button size="sm" className="w-full">
                      {step.action}
                    </Button>
                  )}
                  {step.step > 1 && step.status === 'upcoming' && (
                    <Button size="sm" variant="outline" className="w-full" disabled>
                      {step.action}
                    </Button>
                  )}
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Investment Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Investment Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Minimum Investment:</span>
                <span className="font-semibold">$25,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Target Return:</span>
                <span className="font-semibold text-green-600">12-15% IRR</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Investment Term:</span>
                <span className="font-semibold">5-7 years</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Structure:</span>
                <span className="font-semibold">Limited Partnership</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Current NAV:</span>
                <span className="font-semibold">$86.00</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Fund Performance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">YTD Return:</span>
                <span className="font-semibold text-green-600">+12.5%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total Fund Size:</span>
                <span className="font-semibold">$25M</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Assets Under Management:</span>
                <span className="font-semibold">$18.2M</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Active Investments:</span>
                <span className="font-semibold">8 Projects</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">LP Partners:</span>
                <span className="font-semibold">23 Investors</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Required Documents */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="h-5 w-5 mr-2 text-primary" />
              Required Documentation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {requiredDocuments.map((doc, index) => (
                <div 
                  key={index}
                  className={`p-4 border rounded-lg ${
                    doc.status === 'completed' || doc.status === 'signed' ? 'bg-green-50 border-green-200' : 'bg-muted border-border'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-sm ${
                        doc.status === 'completed' || doc.status === 'signed' ? 'bg-green-500 text-white' : 'bg-muted-foreground text-white'
                      }`}>
                        {doc.status === 'completed' || doc.status === 'signed' ? '✓' : index + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold">{doc.name}</h4>
                        <p className="text-sm text-muted-foreground">{doc.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={doc.status === 'completed' || doc.status === 'signed' ? 'default' : 'secondary'}>
                        {doc.status === 'completed' ? 'Verified' : doc.status === 'signed' ? 'Signed' : 'Pending'}
                      </Badge>
                      {doc.url && doc.status === 'pending' && (
                        <Button 
                          size="sm" 
                          onClick={() => window.open(doc.url, '_blank')}
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Complete
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Main Portal Modules */}
        <Tabs defaultValue="documents" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-muted">
            <TabsTrigger value="documents" className="data-[state=active]:bg-background data-[state=active]:text-primary">Documents</TabsTrigger>
            <TabsTrigger value="portfolio" className="data-[state=active]:bg-background data-[state=active]:text-primary">Portfolio</TabsTrigger>
            <TabsTrigger value="contact" className="data-[state=active]:bg-background data-[state=active]:text-primary">Contact</TabsTrigger>
          </TabsList>

          <TabsContent value="documents">
            <EdocManager />
          </TabsContent>

          <TabsContent value="portfolio" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Portfolio Performance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="p-4 bg-primary/10 border border-primary/20">
                    <h3 className="font-semibold mb-2 text-primary">Current NAV</h3>
                    <div className="text-2xl font-bold text-foreground">$86.00</div>
                    <p className="text-sm text-muted-foreground">Per unit value</p>
                  </Card>
                  <Card className="p-4 bg-green-50 border border-green-200">
                    <h3 className="font-semibold mb-2 text-green-700">YTD Performance</h3>
                    <div className="text-2xl font-bold text-green-600">+12.5%</div>
                    <p className="text-sm text-muted-foreground">Annual return</p>
                  </Card>
                  <Card className="p-4 bg-muted border border-border">
                    <h3 className="font-semibold mb-2 text-foreground">Total Assets</h3>
                    <div className="text-2xl font-bold text-foreground">$25M</div>
                    <p className="text-sm text-muted-foreground">Under management</p>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contact" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Investment Team</CardTitle>
                <p className="text-muted-foreground">Questions about your investment or need assistance?</p>
              </CardHeader>
              <CardContent>
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
                    <Textarea className="bg-background/50 border-border min-h-[120px]" placeholder="How can we help you today?" />
                  </div>
                  
                  <div className="text-center">
                    <Button variant="default" size="lg" className="px-12">
                      Send Message
                    </Button>
                    <p className="text-xs text-muted-foreground mt-4">
                      We typically respond within 24 hours during business days.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default InvestorPortal;
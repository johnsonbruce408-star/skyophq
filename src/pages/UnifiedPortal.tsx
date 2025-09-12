import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Bell, LogOut, Calendar, CheckCircle, Upload, FileText, DollarSign, CreditCard, Building, BarChart3, TrendingUp, Users, Eye } from "lucide-react";
import { SimpleNavigation } from "@/components/SimpleNavigation";

interface OnboardingStep {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  icon: any;
  action: string;
}

export default function UnifiedPortal() {
  const { user, signOut } = useAuth();
  const [loginDialogOpen, setLoginDialogOpen] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });

  const [accreditationVerified, setAccreditationVerified] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const dashboardItems = [
    {
      id: 'accreditation',
      title: 'Accreditation Verification',
      description: 'Upload your accreditation verification to access offering documents',
      completed: accreditationVerified,
      icon: Upload,
      action: accreditationVerified ? 'Verified' : 'Upload Accreditation Verification to Review PPM',
      type: 'upload',
      step: 0
    },
    {
      id: 'ppm',
      title: 'Private Placement Memorandum',
      description: 'Review and acknowledge the PPM',
      completed: currentStep > 1,
      icon: FileText,
      action: 'Review & Acknowledge PPM',
      type: 'document',
      step: 1,
      url: 'https://drive.google.com/file/d/1xygGA_Z9Cmyndm41eoluX1gtXyRu8HB8/view?usp=drive_link',
      enabled: accreditationVerified
    },
    {
      id: 'lpa',
      title: 'Limited Partnership Agreement',
      description: 'Review and sign the LPA documentation',
      completed: currentStep > 2,
      icon: Building,
      action: 'Review & Sign LPA',
      type: 'document',
      step: 2,
      url: 'https://drive.google.com/file/d/1u5YV0kGhHdu5soi6yfrPlEhtKalSwaAs/view?usp=drive_link',
      enabled: currentStep >= 2
    },
    {
      id: 'subscription',
      title: 'Subscription Agreement',
      description: 'Complete and sign the subscription agreement',
      completed: currentStep > 3,
      icon: FileText,
      action: 'Review & Sign Subscription Agreement',
      type: 'document',
      step: 3,
      url: 'https://drive.google.com/file/d/1OhxBIJYWdq8cLesAjsQKz4DWBH3gxjeT/view?usp=drive_link',
      enabled: currentStep >= 3
    },
    {
      id: 'ach',
      title: 'ACH Form',
      description: 'Provide banking information securely for investment funding',
      completed: currentStep > 4,
      icon: CreditCard,
      action: 'Complete ACH Form',
      type: 'document',
      step: 4,
      url: 'https://drive.google.com/file/d/1Ma2GgUzp-OZi0Etsh_qT1pZiCuQSmzTL/view?usp=drive_link',
      enabled: currentStep >= 4
    }
  ];

  const dashboardStats = [
    { title: 'Portfolio Value', value: '$0', change: '+0%', icon: BarChart3 },
    { title: 'Total Returns', value: '$0', change: '+0%', icon: TrendingUp },
    { title: 'Active Investments', value: '0', change: '0', icon: Building },
    { title: 'Documents', value: '0/6', change: 'Pending', icon: FileText }
  ];

  const handleItemClick = (item: any) => {
    if (item.type === 'upload') {
      // Handle accreditation upload - no login required
      if (!accreditationVerified) {
        const confirmed = window.confirm('Upload your accreditation verification document?');
        if (confirmed) {
          // Simulate file upload and email sending
          handleAccreditationSubmission();
        }
      }
    } else {
      // All other actions require login
      setLoginDialogOpen(true);
    }
  };

  const handleAccreditationSubmission = async () => {
    try {
      // In a real implementation, this would upload the file and send email
      // For now, we'll simulate the process
      setAccreditationVerified(true);
      alert('Thank you for submitting your accreditation verification. We have sent your documents to our team for review. Once verified, you will be granted secure access to review the offering documents.');
      
      // Simulate sending email to admin
      console.log('Accreditation documents sent to admin for review');
    } catch (error) {
      alert('Error submitting documents. Please try again.');
    }
  };

  const handleDocumentAccess = (item: any) => {
    if (item.enabled) {
      // Open document URL and mark step as completed
      window.open(item.url, '_blank');
      
      // Show step-specific message and advance
      setTimeout(() => {
        let message = '';
        switch (item.step) {
          case 1:
            message = 'Please acknowledge that you have read and understood the PPM before proceeding.';
            break;
          case 2:
            message = 'Please review and sign the Limited Partnership Agreement (LPA) to confirm your participation.';
            break;
          case 3:
            message = 'Please complete and sign the Subscription Agreement to finalize your investment commitment.';
            break;
          case 4:
            message = 'Please provide your banking information securely through the ACH Form to set up your investment funding.';
            break;
        }
        
        const confirmed = window.confirm(message + '\n\nClick OK when completed to proceed to the next step.');
        if (confirmed) {
          setCurrentStep(item.step + 1);
          if (item.step === 4) {
            alert('Thank you. Your documents have been submitted successfully. Welcome to Skyline Prime LP — we will contact you with next steps.');
          }
        }
      }, 1000);
    }
  };

  const handleLoginSubmit = () => {
    // After login, allow access to documents
    setLoginDialogOpen(false);
    
    // Show the last clicked item for document access
    const lastClickedItem = dashboardItems.find(item => item.type === 'document' && item.enabled);
    if (lastClickedItem) {
      handleDocumentAccess(lastClickedItem);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SimpleNavigation />
      
      {/* Header with proper spacing from fixed navigation */}
      <header className="border-b border-border bg-background mt-20 relative z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Investor Dashboard Preview</h1>
                <p className="text-xs text-muted-foreground">Your investment portal and onboarding center</p>
              </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Badge variant="secondary">
                Investor
              </Badge>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                <Bell className="h-4 w-4" />
              </Button>
              <Avatar>
                <AvatarFallback className="bg-primary text-primary-foreground">{user?.email?.[0]?.toUpperCase()}</AvatarFallback>
              </Avatar>
              <Button variant="ghost" size="icon" onClick={signOut} className="text-muted-foreground hover:text-foreground">
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* GP Quote Section */}
        <div className="mb-8">
          <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">Welcome to Skyline Prime LP</h2>
              <blockquote className="text-lg text-muted-foreground mb-6 italic border-l-4 border-primary pl-4">
                "We got some great brokers lined up and a small Softr-enabled office scalable to 50 million in invested capital—immediate plans to soft-hire a Project Manager converting into a full-time Portfolio Manager after capital deployment."
              </blockquote>
              <p className="text-sm text-muted-foreground">— Bruce L. Johnson Jr., Fund Manager</p>
            </CardContent>
          </Card>
        </div>

        {/* Dashboard Stats Preview */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-foreground mb-4">Portfolio Overview</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dashboardStats.map((stat) => {
              const IconComponent = stat.icon;
              return (
                <Card key={stat.title} className="p-6 hover:shadow-md transition-all duration-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.title}</p>
                      <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                      <p className="text-sm text-primary">{stat.change}</p>
                    </div>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Onboarding & Document Access */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-foreground">
              <Eye className="h-5 w-5 mr-2 text-primary" />
              Document Access & Onboarding
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dashboardItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Card key={item.id} className={`p-6 transition-all duration-200 hover:shadow-md ${
                    item.completed 
                      ? 'bg-primary/5 border-primary/30' 
                      : item.enabled === false 
                        ? 'bg-muted/30 border-muted opacity-60' 
                        : 'bg-card border-border hover:border-primary/30'
                  }`}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                        item.completed 
                          ? 'bg-primary text-primary-foreground' 
                          : item.enabled === false
                            ? 'bg-muted text-muted-foreground'
                            : 'bg-muted text-muted-foreground'
                      }`}>
                        {item.completed ? <IconComponent className="w-4 h-4" /> : index + 1}
                      </div>
                      <h3 className={`font-semibold ${
                        item.completed ? 'text-primary' : item.enabled === false ? 'text-muted-foreground' : 'text-foreground'
                      }`}>
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                    <Button 
                      size="sm" 
                      className="w-full" 
                      variant={item.completed ? "outline" : "default"}
                      onClick={() => handleItemClick(item)}
                      disabled={item.completed || item.enabled === false}
                    >
                      {item.completed ? 'Completed' : item.action}
                    </Button>
                    {item.enabled === false && item.step > 0 && (
                      <p className="text-xs text-muted-foreground mt-2 text-center">
                        Complete previous steps to unlock
                      </p>
                    )}
                  </Card>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Important Information */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-foreground">Important Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
              <h3 className="font-semibold text-primary mb-2">Investment Structure</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>SEC Compliant - Regulation D, Rule 506(c)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Delaware Limited Partnership</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>$100,000 Minimum Investment</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>8% Preferred Return + 80/20 Split</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-muted/20 border border-muted rounded text-xs text-muted-foreground">
                <strong>For accredited investors only under SEC Reg D 506(c)</strong>
              </div>
            </div>
            
            <div className="p-4 bg-muted/50 border border-border rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">Operational Excellence</h3>
              <p className="text-sm text-muted-foreground">
                With professional brokers, scalable infrastructure, and dedicated project management converting to full-time portfolio management, 
                we're positioned for growth while maintaining operational efficiency and compliance.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Login Dialog */}
        <Dialog open={loginDialogOpen} onOpenChange={setLoginDialogOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Login Required</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Please log in to access investor documents and continue the onboarding process.
              </p>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={loginForm.email}
                  onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={loginForm.password}
                  onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                  placeholder="Enter your password"
                />
              </div>
              <Button onClick={handleLoginSubmit} className="w-full">
                Login & Continue
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
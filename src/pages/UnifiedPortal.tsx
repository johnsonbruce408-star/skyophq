import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Bell, LogOut, Calendar, CheckCircle, Upload, FileText, DollarSign, CreditCard, Building } from "lucide-react";
import { SimpleNavigation } from "@/components/SimpleNavigation";
import { DocumentUpload } from "@/components/DocumentUpload";

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
  const [uploadDialogOpen, setUploadDialogOpen] = useState(false);
  const [selectedDocumentType, setSelectedDocumentType] = useState<string>("");

  const onboardingSteps: OnboardingStep[] = [
    {
      id: 'accreditation',
      title: 'Accreditation Verification',
      description: 'Upload documents to verify your accredited investor status',
      completed: false,
      icon: CheckCircle,
      action: 'Upload Verification'
    },
    {
      id: 'ppm',
      title: 'Private Placement Memorandum',
      description: 'Review and acknowledge the PPM',
      completed: false,
      icon: FileText,
      action: 'Review PPM'
    },
    {
      id: 'subscription',
      title: 'Subscription Agreement',
      description: 'Complete and upload signed subscription agreement',
      completed: false,
      icon: FileText,
      action: 'Upload Agreement'
    },
    {
      id: 'lpa',
      title: 'Limited Partnership Agreement',
      description: 'Sign the LPA documentation',
      completed: false,
      icon: Building,
      action: 'Sign LPA'
    },
    {
      id: 'ach',
      title: 'ACH Transfer Setup',
      description: 'Set up bank transfer for funding',
      completed: false,
      icon: CreditCard,
      action: 'Setup ACH'
    },
    {
      id: 'bluesky',
      title: 'SEC Bluesky Filing',
      description: 'Complete state securities registration',
      completed: false,
      icon: DollarSign,
      action: 'File Documents'
    }
  ];

  const handleDocumentUpload = (documentType: string) => {
    setSelectedDocumentType(documentType);
    setUploadDialogOpen(true);
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
                  <h1 className="text-xl font-bold text-foreground">Investor Onboarding</h1>
                  <p className="text-xs text-muted-foreground">Complete your enrollment process</p>
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
        {/* Welcome Section */}
        <div className="mb-8">
          <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">Welcome to SkyOpHQ</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Complete the following steps to finalize your investor onboarding and gain access to the platform.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">
                    {onboardingSteps.filter(step => step.completed).length} of {onboardingSteps.length} steps completed
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Onboarding Steps */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-foreground">
              <Calendar className="h-5 w-5 mr-2 text-primary" />
              Required Onboarding Steps
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {onboardingSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <Card key={step.id} className={`p-6 transition-all duration-200 hover:shadow-md ${
                    step.completed 
                      ? 'bg-primary/5 border-primary/30' 
                      : 'bg-card border-border hover:border-primary/30'
                  }`}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                        step.completed 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        {step.completed ? <IconComponent className="w-4 h-4" /> : index + 1}
                      </div>
                      <h3 className={`font-semibold ${
                        step.completed ? 'text-primary' : 'text-foreground'
                      }`}>
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{step.description}</p>
                    <Button 
                      size="sm" 
                      className="w-full" 
                      variant={step.completed ? "outline" : "default"}
                      onClick={() => handleDocumentUpload(step.id)}
                      disabled={step.completed}
                    >
                      {step.completed ? 'Completed' : step.action}
                    </Button>
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
                  <span>SEC Compliant - Regulation D</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Wyoming LLC Structure</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Accredited Investors Only</span>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-muted/50 border border-border rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">Next Steps</h3>
              <p className="text-sm text-muted-foreground">
                Once all onboarding steps are complete, you'll receive access to the full investor portal 
                with performance reporting, document library, and communication tools.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Document Upload Dialog */}
        <DocumentUpload 
          onUploadSuccess={() => {
            setUploadDialogOpen(false);
            // Here you could update the completion status of the step
          }}
        />
      </div>
    </div>
  );
}
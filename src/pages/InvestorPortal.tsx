import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Navigation } from "@/components/Navigation";

import { EdocManager } from "@/components/EdocManager";
import { 
  FileText, 
  Shield, 
  TrendingUp, 
  Users, 
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Bell,
  LogOut,
  Calendar,
  AlertCircle,
  PenTool,
  Building,
  Target
} from "lucide-react";

// Role definitions
type UserRole = 'operations_director' | 'portfolio_manager' | 'accountant' | 'lp' | 'admin' | 'user';

interface DashboardStats {
  fundPerformance: string;
  activeProjects: number;
  totalInvestors: number;
  portfolioValue: string;
  pendingSignatures: number;
  nextDistribution: string;
}

const InvestorPortal = () => {
  const { user, signOut } = useAuth();
  const [isAccredited, setIsAccredited] = useState<boolean | null>(null);
  const [showVerification, setShowVerification] = useState(false);
  const [selectedEntity, setSelectedEntity] = useState<'skyline_operator' | 'skyline_prime'>('skyline_operator');
  const [userRole] = useState<UserRole>('lp'); // This would come from your auth system

  const mockStats: DashboardStats = {
    fundPerformance: "+12.5%",
    activeProjects: 8,
    totalInvestors: 47,
    portfolioValue: "$86.00",
    pendingSignatures: 2,
    nextDistribution: "Q2 2024"
  };

  const rolePermissions = {
    operations_director: ['all'],
    portfolio_manager: ['portfolio', 'finance', 'operations'],
    accountant: ['finance', 'portfolio'],
    lp: ['portfolio', 'documents', 'performance'],
    admin: ['all'],
    user: ['portfolio', 'documents']
  };

  const hasAccess = (module: string) => {
    return rolePermissions[userRole].includes('all') || rolePermissions[userRole].includes(module);
  };

  const recentAlerts = [
    { type: 'urgent', message: 'Partnership agreement requires signature', time: '2 hours ago' },
    { type: 'info', message: 'Q1 distribution processed: $125,000', time: '1 day ago' },
    { type: 'success', message: 'Capital call #3 completed successfully', time: '2 days ago' }
  ];

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
      
      {/* Header with proper spacing from fixed navigation */}
      <header className="border-b border-border bg-background/95 backdrop-blur-md mt-20 relative z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center">
                  <div className="w-2 h-2 bg-background rounded-full"></div>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-foreground">VaultForge</h1>
                  <p className="text-xs text-muted-foreground">Investor Portal</p>
                </div>
              </div>
              
              {/* Entity Switcher */}
              <div className="flex space-x-2 ml-8">
                {(['skyline_operator', 'skyline_prime'] as Array<'skyline_operator' | 'skyline_prime'>).map((entity) => (
                  <Button
                    key={entity}
                    variant={selectedEntity === entity ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedEntity(entity)}
                    className={selectedEntity === entity ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'text-muted-foreground hover:text-primary border-border'}
                  >
                    {entity === 'skyline_operator' ? 'Operations' : 'Prime LP'}
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="capitalize">
                {userRole.replace('_', ' ')}
              </Badge>
              {isAccredited && (
                <Badge variant="default" className="bg-green-500 text-white">
                  <Shield className="h-3 w-3 mr-1" />
                  Verified
                </Badge>
              )}
              <Button variant="ghost" size="icon">
                <Bell className="h-4 w-4" />
              </Button>
              <Avatar>
                <AvatarFallback className="bg-primary text-primary-foreground">{user?.email?.[0]?.toUpperCase()}</AvatarFallback>
              </Avatar>
              <Button variant="ghost" size="icon" onClick={signOut}>
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Dashboard Overview */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold text-foreground">
                {selectedEntity === 'skyline_operator' ? 'SkyOpHQ Dashboard' : 'Prime LP Dashboard'}
              </h2>
              <p className="text-muted-foreground">
                {selectedEntity === 'skyline_operator' 
                  ? 'Operations center and investment management' 
                  : 'Limited partnership overview and performance'
                }
              </p>
            </div>
            
            {!isAccredited && (
              <Dialog open={showVerification} onOpenChange={setShowVerification}>
                <DialogTrigger asChild>
                  <Button variant="outline" className="border-orange-300 text-orange-600 hover:bg-orange-50">
                    <Shield className="mr-2 h-4 w-4" />
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
                        variant="default" 
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
            )}
          </div>
          
          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Portfolio Value</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{mockStats.portfolioValue}</div>
                <p className="text-xs text-muted-foreground">Current unit value</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Performance</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">{mockStats.fundPerformance}</div>
                <p className="text-xs text-muted-foreground">YTD Return</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Active Projects</CardTitle>
                <Building className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{mockStats.activeProjects}</div>
                <p className="text-xs text-muted-foreground">Current initiatives</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Documents</CardTitle>
                <PenTool className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-orange-600">{mockStats.pendingSignatures}</div>
                <p className="text-xs text-muted-foreground">Awaiting signature</p>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <Card className="mb-8 bg-card/50 backdrop-blur-sm border-border">
            <CardHeader>
              <CardTitle className="flex items-center text-foreground">
                <AlertCircle className="h-5 w-5 mr-2 text-primary" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentAlerts.map((alert, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg bg-background/50">
                    <div className="flex items-center space-x-3">
                      <Badge variant={alert.type === 'urgent' ? 'destructive' : alert.type === 'success' ? 'default' : 'secondary'} 
                             className={alert.type === 'info' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300' : ''}>
                        {alert.type}
                      </Badge>
                      <span className="text-foreground">{alert.message}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{alert.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Portal Modules */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-muted">
            <TabsTrigger value="overview" className="data-[state=active]:bg-background data-[state=active]:text-primary">Overview</TabsTrigger>
            <TabsTrigger value="portfolio" className="data-[state=active]:bg-background data-[state=active]:text-primary">Portfolio</TabsTrigger>
            <TabsTrigger value="documents" className="data-[state=active]:bg-background data-[state=active]:text-primary">Documents</TabsTrigger>
            <TabsTrigger value="opportunities" className="data-[state=active]:bg-background data-[state=active]:text-primary">Opportunities</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {selectedEntity === 'skyline_operator' && (
              <Card className="bg-card/50 backdrop-blur-sm border-border">
                <CardHeader>
                  <CardTitle className="text-foreground">SkyOpHQ - Operations Center</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    Professional asset management with verified returns and asset-backed protection for accredited investors.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="p-6 bg-primary/10 border border-primary/20">
                      <h3 className="font-semibold mb-4 text-primary">Current Performance</h3>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Current Unit Value:</span>
                          <span className="text-primary font-semibold">$86.00</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Annual Return:</span>
                          <span className="text-green-600 font-semibold">+12.5% IRR</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Asset Protection:</span>
                          <span className="text-primary font-semibold">1st Priority</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Response Time:</span>
                          <span className="text-primary font-semibold">24 hours</span>
                        </div>
                      </div>
                    </Card>
                    
                    <Card className="p-6 bg-muted border border-border">
                      <h3 className="font-semibold mb-4 text-foreground">Investment Structure</h3>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-muted-foreground">SEC Compliant - Regulation D</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-muted-foreground">Wyoming LLC Structure</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-muted-foreground">Asset-Backed Protection</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-muted-foreground">Accredited Investors Only</span>
                        </div>
                      </div>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            )}

            {selectedEntity === 'skyline_prime' && (
              <Card className="bg-card/50 backdrop-blur-sm border-border">
                <CardHeader>
                  <CardTitle className="text-foreground">Skyline Prime Limited Partnership</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    Exclusive limited partnership with priority access to curated investment opportunities.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="p-6 bg-muted border border-border">
                      <h3 className="font-semibold mb-4 text-foreground">Partnership Overview</h3>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Capital Commitments:</span>
                          <span className="text-foreground font-semibold">$24.5M</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Called Capital:</span>
                          <span className="text-foreground font-semibold">$18.2M</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Distributions YTD:</span>
                          <span className="text-green-600 font-semibold">$3.1M</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Active Partners:</span>
                          <span className="text-foreground font-semibold">23</span>
                        </div>
                      </div>
                    </Card>
                    
                    <Card className="p-6 bg-primary/10 border border-primary/20">
                      <h3 className="font-semibold mb-4 text-primary">Upcoming Events</h3>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Annual Meeting:</span>
                          <span className="text-primary font-semibold">March 15</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Capital Call #4:</span>
                          <span className="text-primary font-semibold">March 30</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Distribution #2:</span>
                          <span className="text-green-600 font-semibold">April 15</span>
                        </div>
                      </div>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="portfolio" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {portfolioMetrics.map((metric, index) => (
                <Card key={metric.label} className="bg-card/50 backdrop-blur-sm border-border p-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-2">{metric.value}</div>
                    <div className="text-sm text-muted-foreground mb-2">{metric.label}</div>
                    <div className={`text-xs flex items-center justify-center gap-1 ${metric.positive ? 'text-green-600' : 'text-muted-foreground'}`}>
                      {metric.positive && <TrendingUp className="h-3 w-3" />}
                      {metric.change}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Financial Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="p-4 bg-muted border border-border">
                    <h3 className="font-semibold mb-2 text-foreground">Assets Under Management</h3>
                    <div className="text-2xl font-bold text-foreground">$47.2M</div>
                    <p className="text-sm text-muted-foreground">Total portfolio value</p>
                  </Card>
                  <Card className="p-4 bg-primary/10 border border-primary/20">
                    <h3 className="font-semibold mb-2 text-primary">Monthly Performance</h3>
                    <div className="text-2xl font-bold text-green-600">+2.1%</div>
                    <p className="text-sm text-muted-foreground">Last 30 days</p>
                  </Card>
                  <Card className="p-4 bg-muted border border-border">
                    <h3 className="font-semibold mb-2 text-foreground">Cash Position</h3>
                    <div className="text-2xl font-bold text-foreground">$3.8M</div>
                    <p className="text-sm text-muted-foreground">Available for deployment</p>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="documents">
            <EdocManager />
          </TabsContent>

          <TabsContent value="opportunities" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20 p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
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
                    <Button variant="default" className="w-full">
                      View Investment Details
                    </Button>
                  ) : (
                    <Button variant="outline" disabled className="w-full">
                      <Shield className="mr-2 h-4 w-4" />
                      Verification Required
                    </Button>
                  )}
                </div>
              </Card>
              
              <Card className="bg-card/50 backdrop-blur-sm border-accent/20 p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
                    <h3 className="text-2xl font-bold text-foreground">Investment Details</h3>
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

            {/* Contact Section */}
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 p-8">
              <CardHeader>
                <CardTitle className="text-foreground">Contact Investment Team</CardTitle>
                <p className="text-muted-foreground">Ready to explore investment opportunities? Get in touch with our team.</p>
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
                    <Textarea 
                      className="bg-background/50 border-border min-h-[120px]" 
                      placeholder="Tell us about your investment interests and experience..."
                    />
                  </div>
                  
                  <div className="text-center">
                    <Button variant="default" size="lg" className="px-12">
                      Send Message
                    </Button>
                    <p className="text-xs text-muted-foreground mt-4">
                      We typically respond to qualified inquiries within 24 hours during business days.
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
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Bell, Settings, LogOut, DollarSign, Users, TrendingUp, FileText, Calendar, AlertCircle } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

// Role definitions
type UserRole = 'operations_director' | 'portfolio_manager' | 'accountant' | 'marketing_manager' | 'social_media_manager' | 'paralegal' | 'operator';

interface DashboardStats {
  fundPerformance: string;
  activeProjects: number;
  pendingTasks: number;
  upcomingMeetings: number;
  totalInvestors: number;
  pendingVerifications: number;
}

export default function UnifiedPortal() {
  const { user, signOut } = useAuth();
  const [selectedEntity, setSelectedEntity] = useState<'vaultforge' | 'skyline_operator' | 'skyline_prime'>('vaultforge');
  const [userRole] = useState<UserRole>('operations_director'); // This would come from your auth system

  const mockStats: DashboardStats = {
    fundPerformance: "+12.4%",
    activeProjects: 8,
    pendingTasks: 23,
    upcomingMeetings: 5,
    totalInvestors: 142,
    pendingVerifications: 7
  };

  const entityColors = {
    vaultforge: "from-blue-600 to-blue-800",
    skyline_operator: "from-green-600 to-green-800", 
    skyline_prime: "from-purple-600 to-purple-800"
  };

  const rolePermissions = {
    operations_director: ['all'],
    portfolio_manager: ['portfolio', 'finance', 'operations'],
    accountant: ['finance', 'portfolio'],
    marketing_manager: ['marketing', 'social'],
    social_media_manager: ['social'],
    paralegal: ['legal', 'verification'],
    operator: ['operations']
  };

  const hasAccess = (module: string) => {
    return rolePermissions[userRole].includes('all') || rolePermissions[userRole].includes(module);
  };

  const recentAlerts = [
    { type: 'urgent', message: 'Investor verification pending for John Smith', time: '2 hours ago' },
    { type: 'info', message: 'Q4 fund report due in 3 days', time: '1 day ago' },
    { type: 'warning', message: 'Social media campaign approval needed', time: '2 days ago' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <Navigation />
      
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold">Unified Portal</h1>
              
              {/* Entity Switcher */}
              <div className="flex space-x-2">
                {(['vaultforge', 'skyline_operator', 'skyline_prime'] as const).map((entity) => (
                  <Button
                    key={entity}
                    variant={selectedEntity === entity ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedEntity(entity)}
                    className={selectedEntity === entity ? `bg-gradient-to-r ${entityColors[entity]} text-white` : ''}
                  >
                    {entity === 'vaultforge' ? 'VaultForge' : 
                     entity === 'skyline_operator' ? 'Skyline Operator' : 'Skyline Prime LP'}
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="capitalize">
                {userRole.replace('_', ' ')}
              </Badge>
              <Button variant="ghost" size="icon">
                <Bell className="h-4 w-4" />
              </Button>
              <Avatar>
                <AvatarFallback>{user?.email?.[0]?.toUpperCase()}</AvatarFallback>
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
          <h2 className="text-3xl font-bold mb-6">Dashboard Overview</h2>
          
          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Fund Performance</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">{mockStats.fundPerformance}</div>
                <p className="text-xs text-muted-foreground">YTD Return</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{mockStats.activeProjects}</div>
                <p className="text-xs text-muted-foreground">Across all entities</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pending Tasks</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{mockStats.pendingTasks}</div>
                <p className="text-xs text-muted-foreground">Assigned to you</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Investors</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{mockStats.totalInvestors}</div>
                <p className="text-xs text-muted-foreground">{mockStats.pendingVerifications} pending verification</p>
              </CardContent>
            </Card>
          </div>

          {/* Alerts */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertCircle className="h-5 w-5 mr-2" />
                Recent Alerts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentAlerts.map((alert, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Badge variant={alert.type === 'urgent' ? 'destructive' : alert.type === 'warning' ? 'default' : 'secondary'}>
                        {alert.type}
                      </Badge>
                      <span>{alert.message}</span>
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
          <TabsList className="grid w-full grid-cols-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            {hasAccess('finance') && <TabsTrigger value="finance">Finance</TabsTrigger>}
            {hasAccess('operations') && <TabsTrigger value="operations">Operations</TabsTrigger>}
            {hasAccess('marketing') && <TabsTrigger value="marketing">Marketing</TabsTrigger>}
            {hasAccess('social') && <TabsTrigger value="social">Social Media</TabsTrigger>}
            {hasAccess('legal') && <TabsTrigger value="legal">Legal</TabsTrigger>}
            {hasAccess('portfolio') && <TabsTrigger value="portfolio">Portfolio</TabsTrigger>}
            {hasAccess('verification') && <TabsTrigger value="verification">Verification</TabsTrigger>}
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Welcome to the Unified Portal</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Manage VaultForge, Skyline Operator Group, and Skyline Prime Limited Partnership from one centralized location.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="p-4">
                    <h3 className="font-semibold mb-2">Quick Actions</h3>
                    <div className="space-y-2">
                      <Button variant="outline" size="sm" className="w-full justify-start">
                        Review Pending Tasks
                      </Button>
                      <Button variant="outline" size="sm" className="w-full justify-start">
                        Schedule Meeting
                      </Button>
                      <Button variant="outline" size="sm" className="w-full justify-start">
                        Generate Report
                      </Button>
                    </div>
                  </Card>
                  
                  <Card className="p-4">
                    <h3 className="font-semibold mb-2">Recent Activity</h3>
                    <div className="space-y-2 text-sm">
                      <div>Portfolio update submitted</div>
                      <div>New investor onboarded</div>
                      <div>Q4 report approved</div>
                    </div>
                  </Card>
                  
                  <Card className="p-4">
                    <h3 className="font-semibold mb-2">Upcoming Deadlines</h3>
                    <div className="space-y-2 text-sm">
                      <div>Fund report due: 3 days</div>
                      <div>Board meeting: 1 week</div>
                      <div>Compliance review: 2 weeks</div>
                    </div>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {hasAccess('finance') && (
            <TabsContent value="finance">
              <Card>
                <CardHeader>
                  <CardTitle>Finance Module</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Fund accounting, budgets, invoices, and expense tracking for all entities.</p>
                  {/* Finance module content would go here */}
                </CardContent>
              </Card>
            </TabsContent>
          )}

          {hasAccess('verification') && (
            <TabsContent value="verification">
              <Card>
                <CardHeader>
                  <CardTitle>Investor Verification & E-Signature</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card className="p-4">
                        <h3 className="font-semibold mb-2">Pending Verifications</h3>
                        <Badge variant="destructive">{mockStats.pendingVerifications} pending</Badge>
                        <Button className="w-full mt-3" variant="outline">
                          Review Submissions
                        </Button>
                      </Card>
                      
                      <Card className="p-4">
                        <h3 className="font-semibold mb-2">E-Signature Status</h3>
                        <div className="space-y-2 text-sm">
                          <div>PPMs: 12 pending</div>
                          <div>Subscription Agreements: 5 pending</div>
                          <div>LPAs: 3 pending</div>
                        </div>
                      </Card>
                    </div>
                    
                    <Button className="w-full">
                      Start New Investor Onboarding
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          )}

          {/* Additional module tabs would be implemented similarly */}
        </Tabs>
      </div>

      <Footer />
    </div>
  );
}
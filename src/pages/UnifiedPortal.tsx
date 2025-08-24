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
  const [selectedEntity, setSelectedEntity] = useState<'skyline_operator' | 'skyline_prime' | 'vaultforge'>('skyline_operator');
  const [userRole] = useState<UserRole>('operations_director'); // This would come from your auth system

  const mockStats: DashboardStats = {
    fundPerformance: "+18.7%",
    activeProjects: 12,
    pendingTasks: 31,
    upcomingMeetings: 8,
    totalInvestors: 89,
    pendingVerifications: 4
  };

  const entityColors = {
    skyline_operator: "from-emerald-500 to-teal-600", 
    skyline_prime: "from-slate-600 to-slate-800",
    vaultforge: "from-blue-500/60 to-blue-600/60"
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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-emerald-950/20 to-teal-950/30">
      <Navigation />
      
      {/* Header */}
      <header className="border-b bg-gradient-to-r from-emerald-950/50 to-teal-950/50 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                  <div className="w-2 h-2 bg-background rounded-full animate-pulse"></div>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-emerald-400">Skyline Operator Group</h1>
                  <p className="text-xs text-muted-foreground">Operations Portal</p>
                </div>
              </div>
              
              {/* Entity Switcher */}
              <div className="flex space-x-2 ml-8">
                {(['skyline_operator', 'skyline_prime', 'vaultforge'] as const).map((entity) => (
                  <Button
                    key={entity}
                    variant={selectedEntity === entity ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setSelectedEntity(entity)}
                    className={selectedEntity === entity ? `bg-gradient-to-r ${entityColors[entity]} text-white border-emerald-400/20` : 'text-muted-foreground hover:text-emerald-400'}
                  >
                    {entity === 'skyline_operator' ? 'Operations' : 
                     entity === 'skyline_prime' ? 'Prime LP' : 'VaultForge'}
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
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-emerald-400">
              {selectedEntity === 'skyline_operator' ? 'Operations Dashboard' :
               selectedEntity === 'skyline_prime' ? 'Prime LP Dashboard' : 'VaultForge Preview'}
            </h2>
            {selectedEntity === 'vaultforge' && (
              <Badge variant="secondary" className="bg-blue-500/20 text-blue-400 border-blue-400/20">
                Preview Access
              </Badge>
            )}
          </div>
          
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
            {selectedEntity === 'skyline_operator' && (
              <Card className="border-emerald-500/20 bg-gradient-to-br from-emerald-950/50 to-teal-950/30">
                <CardHeader>
                  <CardTitle className="text-emerald-400">Skyline Operator Group - Command Center</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    Operational excellence across all investment initiatives and portfolio management activities.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="p-4 bg-slate-900/50 border-emerald-500/20">
                      <h3 className="font-semibold mb-3 text-emerald-400">Operation Controls</h3>
                      <div className="space-y-3">
                        <Button variant="outline" size="sm" className="w-full justify-start border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/10">
                          Deploy Capital ($2.3M Ready)
                        </Button>
                        <Button variant="outline" size="sm" className="w-full justify-start border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/10">
                          Portfolio Rebalancing
                        </Button>
                        <Button variant="outline" size="sm" className="w-full justify-start border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/10">
                          Risk Assessment Review
                        </Button>
                      </div>
                    </Card>
                    
                    <Card className="p-4 bg-slate-900/50 border-emerald-500/20">
                      <h3 className="font-semibold mb-3 text-emerald-400">Live Operations</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Active Deals:</span>
                          <span className="text-emerald-400 font-mono">7</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Capital Deployed:</span>
                          <span className="text-emerald-400 font-mono">$8.7M</span>
                        </div>
                        <div className="flex justify-between">
                          <span>ROI This Quarter:</span>
                          <span className="text-emerald-400 font-mono">+18.7%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Risk Level:</span>
                          <span className="text-yellow-400 font-mono">Moderate</span>
                        </div>
                      </div>
                    </Card>
                    
                    <Card className="p-4 bg-slate-900/50 border-emerald-500/20">
                      <h3 className="font-semibold mb-3 text-emerald-400">Priority Actions</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                          <span>Due diligence: TechCorp acquisition</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                          <span>LP meeting preparation</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                          <span>Q1 performance report</span>
                        </div>
                      </div>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            )}

            {selectedEntity === 'skyline_prime' && (
              <Card className="border-slate-500/20 bg-gradient-to-br from-slate-950/50 to-slate-900/30">
                <CardHeader>
                  <CardTitle className="text-slate-300">Skyline Prime Limited Partnership</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    Exclusive limited partnership management and investor relations.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="p-4 bg-slate-900/70 border-slate-500/20">
                      <h3 className="font-semibold mb-3 text-slate-300">LP Management</h3>
                      <div className="space-y-2 text-sm">
                        <div>Capital Commitments: $24.5M</div>
                        <div>Called Capital: $18.2M</div>
                        <div>Distributions YTD: $3.1M</div>
                        <div>Active LPs: 23</div>
                      </div>
                    </Card>
                    
                    <Card className="p-4 bg-slate-900/70 border-slate-500/20">
                      <h3 className="font-semibold mb-3 text-slate-300">Upcoming Events</h3>
                      <div className="space-y-2 text-sm">
                        <div>Annual LP Meeting: March 15</div>
                        <div>Capital Call #4: March 30</div>
                        <div>Distribution #2: April 15</div>
                      </div>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            )}

            {selectedEntity === 'vaultforge' && (
              <Card className="border-blue-500/20 bg-gradient-to-br from-blue-950/30 to-blue-900/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent animate-pulse"></div>
                <CardHeader>
                  <CardTitle className="text-blue-400">VaultForge Capital - Coming Soon</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    Advanced quantitative trading and institutional asset management platform. Full access pending regulatory approval.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="p-4 bg-blue-950/30 border-blue-500/20">
                      <h3 className="font-semibold mb-3 text-blue-400">Preview Features</h3>
                      <div className="space-y-2 text-sm opacity-60">
                        <div>• AI-Driven Portfolio Optimization</div>
                        <div>• Real-time Risk Analytics</div>
                        <div>• Institutional Trading Desk</div>
                        <div>• Regulatory Compliance Suite</div>
                      </div>
                    </Card>
                    
                    <Card className="p-4 bg-blue-950/30 border-blue-500/20">
                      <h3 className="font-semibold mb-3 text-blue-400">Launch Timeline</h3>
                      <div className="space-y-2 text-sm">
                        <div>Beta Testing: Q2 2024</div>
                        <div>Regulatory Review: Q3 2024</div>
                        <div>Limited Release: Q4 2024</div>
                        <div>Full Launch: Q1 2025</div>
                      </div>
                      <Button className="w-full mt-4 bg-blue-600/20 border border-blue-500/30 text-blue-400 hover:bg-blue-600/30">
                        Request Early Access
                      </Button>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            )}
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
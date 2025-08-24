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
  
  // Mock investor equity amount - in real app, this would come from user data
  const investorEquity = 1250000; // $1.25M - determines VaultForge access
  const hasVaultForgeAccess = investorEquity >= 1000000;

  const mockStats: DashboardStats = {
    fundPerformance: "+12.5%",
    activeProjects: 8,
    pendingTasks: 15,
    upcomingMeetings: 4,
    totalInvestors: 47,
    pendingVerifications: 2
  };

  const entityColors = {
    skyline_operator: "from-blue-500 to-blue-600", 
    skyline_prime: "from-gray-600 to-gray-700",
    vaultforge: "from-blue-500 to-blue-600"
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
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Header with proper spacing from fixed navigation */}
      <header className="border-b border-gray-200 bg-white mt-20 relative z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Skyline Operator Group</h1>
                  <p className="text-xs text-gray-500">Investment Portal</p>
                </div>
              </div>
              
              {/* Entity Switcher */}
              <div className="flex space-x-2 ml-8">
                {(['skyline_operator', 'skyline_prime', ...(hasVaultForgeAccess ? ['vaultforge'] : [])] as Array<'skyline_operator' | 'skyline_prime' | 'vaultforge'>).map((entity) => (
                  <Button
                    key={entity}
                    variant={selectedEntity === entity ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedEntity(entity)}
                    className={selectedEntity === entity ? 'bg-blue-500 text-white hover:bg-blue-600' : 'text-gray-600 hover:text-blue-500 border-gray-300'}
                  >
                    {entity === 'skyline_operator' ? 'Operations' : 
                     entity === 'skyline_prime' ? 'Prime LP' : 'VaultForge Labs'}
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="capitalize bg-gray-100 text-gray-700">
                {userRole.replace('_', ' ')}
              </Badge>
              <Button variant="ghost" size="icon" className="text-gray-600 hover:text-gray-800">
                <Bell className="h-4 w-4" />
              </Button>
              <Avatar>
                <AvatarFallback className="bg-blue-500 text-white">{user?.email?.[0]?.toUpperCase()}</AvatarFallback>
              </Avatar>
              <Button variant="ghost" size="icon" onClick={signOut} className="text-gray-600 hover:text-gray-800">
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
            <h2 className="text-3xl font-bold text-gray-900">
              {selectedEntity === 'skyline_operator' ? 'Operations Dashboard' :
               selectedEntity === 'skyline_prime' ? 'Prime LP Dashboard' : 'VaultForge Labs'}
            </h2>
            {selectedEntity === 'vaultforge' && (
              <Badge variant="secondary" className="bg-blue-100 text-blue-700 border-blue-200">
                $1M+ Investor Access
              </Badge>
            )}
          </div>
          
          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="border border-gray-200 bg-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-700">Fund Performance</CardTitle>
                <TrendingUp className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">{mockStats.fundPerformance}</div>
                <p className="text-xs text-gray-500">YTD Return</p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 bg-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-700">Active Projects</CardTitle>
                <FileText className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">{mockStats.activeProjects}</div>
                <p className="text-xs text-gray-500">Current initiatives</p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 bg-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-700">Total Investors</CardTitle>
                <Users className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">{mockStats.totalInvestors}</div>
                <p className="text-xs text-gray-500">Verified accredited investors</p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 bg-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-700">Portfolio Value</CardTitle>
                <DollarSign className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">$86.00</div>
                <p className="text-xs text-gray-500">Current unit value</p>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <Card className="mb-8 border border-gray-200 bg-white">
            <CardHeader>
              <CardTitle className="flex items-center text-gray-900">
                <AlertCircle className="h-5 w-5 mr-2 text-blue-500" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentAlerts.map((alert, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg bg-gray-50">
                    <div className="flex items-center space-x-3">
                      <Badge variant={alert.type === 'urgent' ? 'destructive' : alert.type === 'warning' ? 'default' : 'secondary'} 
                             className={alert.type === 'info' ? 'bg-blue-100 text-blue-700' : ''}>
                        {alert.type}
                      </Badge>
                      <span className="text-gray-700">{alert.message}</span>
                    </div>
                    <span className="text-sm text-gray-500">{alert.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Portal Modules */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-gray-100">
            <TabsTrigger value="overview" className="data-[state=active]:bg-white data-[state=active]:text-blue-600">Overview</TabsTrigger>
            {hasAccess('portfolio') && <TabsTrigger value="portfolio" className="data-[state=active]:bg-white data-[state=active]:text-blue-600">Portfolio</TabsTrigger>}
            {hasAccess('finance') && <TabsTrigger value="finance" className="data-[state=active]:bg-white data-[state=active]:text-blue-600">Finance</TabsTrigger>}
            {hasAccess('verification') && <TabsTrigger value="verification" className="data-[state=active]:bg-white data-[state=active]:text-blue-600">Investor Services</TabsTrigger>}
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {selectedEntity === 'skyline_operator' && (
              <Card className="border border-gray-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-gray-900">Skyline Operator Group - Operations Center</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">
                    Professional asset management with verified returns and asset-backed protection for accredited investors.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="p-6 bg-blue-50 border border-blue-200">
                      <h3 className="font-semibold mb-4 text-blue-700">Current Performance</h3>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Current Unit Value:</span>
                          <span className="text-blue-600 font-semibold">$86.00</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Annual Return:</span>
                          <span className="text-green-600 font-semibold">+12.5% IRR</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Asset Protection:</span>
                          <span className="text-blue-600 font-semibold">1st Priority</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Response Time:</span>
                          <span className="text-blue-600 font-semibold">24 hours</span>
                        </div>
                      </div>
                    </Card>
                    
                    <Card className="p-6 bg-gray-50 border border-gray-200">
                      <h3 className="font-semibold mb-4 text-gray-700">Investment Structure</h3>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-gray-600">SEC Compliant - Regulation D</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-gray-600">Wyoming LLC Structure</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-gray-600">Asset-Backed Protection</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-gray-600">Accredited Investors Only</span>
                        </div>
                      </div>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            )}

            {selectedEntity === 'skyline_prime' && (
              <Card className="border border-gray-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-gray-900">Skyline Prime Limited Partnership</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">
                    Exclusive limited partnership with priority access to curated investment opportunities.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="p-6 bg-gray-50 border border-gray-200">
                      <h3 className="font-semibold mb-4 text-gray-700">Partnership Overview</h3>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Capital Commitments:</span>
                          <span className="text-gray-900 font-semibold">$24.5M</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Called Capital:</span>
                          <span className="text-gray-900 font-semibold">$18.2M</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Distributions YTD:</span>
                          <span className="text-green-600 font-semibold">$3.1M</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Active Partners:</span>
                          <span className="text-gray-900 font-semibold">23</span>
                        </div>
                      </div>
                    </Card>
                    
                    <Card className="p-6 bg-blue-50 border border-blue-200">
                      <h3 className="font-semibold mb-4 text-blue-700">Upcoming Events</h3>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Annual Meeting:</span>
                          <span className="text-blue-600 font-semibold">March 15</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Capital Call #4:</span>
                          <span className="text-blue-600 font-semibold">March 30</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Distribution #2:</span>
                          <span className="text-green-600 font-semibold">April 15</span>
                        </div>
                      </div>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            )}

            {selectedEntity === 'vaultforge' && hasVaultForgeAccess && (
              <Card className="border border-blue-200 bg-gradient-to-br from-blue-50 to-white">
                <CardHeader>
                  <CardTitle className="text-blue-700">VaultForge Labs - Exclusive Access</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">
                    Advanced quantitative trading and institutional asset management platform exclusively for $1M+ investors.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="p-6 bg-white border border-blue-200">
                      <h3 className="font-semibold mb-4 text-blue-700">Premium Features</h3>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-gray-700">AI-Driven Portfolio Optimization</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-gray-700">Real-time Risk Analytics</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-gray-700">Institutional Trading Desk</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-gray-700">Regulatory Compliance Suite</span>
                        </div>
                      </div>
                    </Card>
                    
                    <Card className="p-6 bg-white border border-blue-200">
                      <h3 className="font-semibold mb-4 text-blue-700">Access Status</h3>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Qualification:</span>
                          <span className="text-green-600 font-semibold">✓ Verified</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Platform Status:</span>
                          <span className="text-blue-600 font-semibold">Beta Access</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Next Update:</span>
                          <span className="text-gray-700 font-semibold">Q2 2024</span>
                        </div>
                      </div>
                      <Button className="w-full mt-4 bg-blue-500 text-white hover:bg-blue-600">
                        Access VaultForge Platform
                      </Button>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {hasAccess('finance') && (
            <TabsContent value="finance">
              <Card className="border border-gray-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-gray-900">Financial Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="p-4 bg-gray-50 border border-gray-200">
                      <h3 className="font-semibold mb-2 text-gray-700">Assets Under Management</h3>
                      <div className="text-2xl font-bold text-gray-900">$47.2M</div>
                      <p className="text-sm text-gray-500">Total portfolio value</p>
                    </Card>
                    <Card className="p-4 bg-blue-50 border border-blue-200">
                      <h3 className="font-semibold mb-2 text-blue-700">Monthly Performance</h3>
                      <div className="text-2xl font-bold text-green-600">+2.1%</div>
                      <p className="text-sm text-gray-500">Last 30 days</p>
                    </Card>
                    <Card className="p-4 bg-gray-50 border border-gray-200">
                      <h3 className="font-semibold mb-2 text-gray-700">Cash Position</h3>
                      <div className="text-2xl font-bold text-gray-900">$3.8M</div>
                      <p className="text-sm text-gray-500">Available for deployment</p>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          )}

          {hasAccess('verification') && (
            <TabsContent value="verification">
              <Card className="border border-gray-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-gray-900">Investor Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card className="p-6 bg-red-50 border border-red-200">
                        <h3 className="font-semibold mb-3 text-red-700">Pending Verifications</h3>
                        <div className="text-2xl font-bold text-red-600 mb-2">{mockStats.pendingVerifications}</div>
                        <p className="text-sm text-gray-600 mb-4">Accreditation reviews required</p>
                        <Button className="w-full bg-red-500 text-white hover:bg-red-600">
                          Review Submissions
                        </Button>
                      </Card>
                      
                      <Card className="p-6 bg-blue-50 border border-blue-200">
                        <h3 className="font-semibold mb-3 text-blue-700">Document Status</h3>
                        <div className="space-y-2 text-sm text-gray-600">
                          <div className="flex justify-between">
                            <span>PPMs Signed:</span>
                            <span className="font-semibold">45/47</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Subscription Agreements:</span>
                            <span className="font-semibold">42/47</span>
                          </div>
                          <div className="flex justify-between">
                            <span>LPAs Complete:</span>
                            <span className="font-semibold">23/23</span>
                          </div>
                        </div>
                      </Card>
                    </div>
                    
                    <Button className="w-full bg-blue-500 text-white hover:bg-blue-600">
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
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { 
  Twitter, 
  Linkedin, 
  Instagram, 
  Facebook, 
  Youtube, 
  ExternalLink,
  Users,
  TrendingUp,
  MessageCircle,
  Share2
} from "lucide-react";

const SocialNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useState(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md border-b border-border' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center">
              <Share2 className="w-4 h-4 text-background" />
            </div>
            <span className="text-xl font-bold text-foreground">Social Hub</span>
          </div>
          
          <div className="hidden lg:flex items-center gap-8">
            <a href="/skyline-portal" className="text-muted-foreground hover:text-primary transition-colors">Back to Portal</a>
            <a href="#platforms" className="text-muted-foreground hover:text-primary transition-colors">Platforms</a>
            <a href="#analytics" className="text-muted-foreground hover:text-primary transition-colors">Analytics</a>
            <a href="#content" className="text-muted-foreground hover:text-primary transition-colors">Content</a>
          </div>
          
          <Button variant="hero" size="sm">
            Connect Account
          </Button>
        </div>
      </div>
    </nav>
  );
};

const SocialHub = () => {
  const socialPlatforms = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      followers: "12.5K",
      engagement: "4.2%",
      color: "from-blue-600 to-blue-700",
      status: "Active",
      lastPost: "2 hours ago"
    },
    {
      name: "Twitter",
      icon: Twitter,
      followers: "8.9K",
      engagement: "3.8%",
      color: "from-sky-500 to-sky-600",
      status: "Active",
      lastPost: "5 hours ago"
    },
    {
      name: "Instagram",
      icon: Instagram,
      followers: "15.2K",
      engagement: "5.1%",
      color: "from-pink-500 to-purple-600",
      status: "Active",
      lastPost: "1 day ago"
    },
    {
      name: "Facebook",
      icon: Facebook,
      followers: "22.1K",
      engagement: "2.9%",
      color: "from-blue-700 to-blue-800",
      status: "Active",
      lastPost: "3 days ago"
    },
    {
      name: "YouTube",
      icon: Youtube,
      followers: "6.7K",
      engagement: "7.2%",
      color: "from-red-600 to-red-700",
      status: "Active",
      lastPost: "1 week ago"
    }
  ];

  const contentCategories = [
    {
      title: "Investment Updates",
      count: 24,
      description: "Market insights and portfolio performance"
    },
    {
      title: "Company News",
      count: 18,
      description: "Announcements and corporate updates"
    },
    {
      title: "Industry Analysis",
      count: 31,
      description: "Market trends and sector analysis"
    },
    {
      title: "Educational Content",
      count: 12,
      description: "Investment education and tips"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SocialNavigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary))_0%,transparent_50%)] opacity-10" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="mb-8">
            <Badge variant="outline" className="mb-4">
              Social Media Management
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              Social Hub
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Manage and monitor Skyline Operator Group's social media presence across all platforms
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow">
              <Users className="w-5 h-5 mr-2" />
              View Analytics
            </Button>
            <Button variant="outline" size="lg">
              <MessageCircle className="w-5 h-5 mr-2" />
              Create Content
            </Button>
          </div>
        </div>
      </section>

      {/* Social Platforms */}
      <section id="platforms" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Connected Platforms</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Monitor performance and engagement across all social media channels
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {socialPlatforms.map((platform) => {
              const IconComponent = platform.icon;
              return (
                <Card key={platform.name} className="group hover:shadow-lg transition-all duration-300 border-border/50">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${platform.color}`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <Badge variant="outline" className="text-green-600 border-green-600">
                        {platform.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{platform.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Followers</span>
                        <span className="font-semibold">{platform.followers}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Engagement</span>
                        <span className="font-semibold text-green-600">{platform.engagement}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Last Post</span>
                        <span className="text-sm">{platform.lastPost}</span>
                      </div>
                      <Button variant="outline" size="sm" className="w-full mt-4">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Manage Account
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Analytics Overview */}
      <section id="analytics" className="py-20 px-6 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Performance Analytics</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Track engagement, reach, and growth across all platforms
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">65.2K</div>
                    <div className="text-muted-foreground text-sm">Total Followers</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-green-500/10">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">+12.5%</div>
                    <div className="text-muted-foreground text-sm">Growth Rate</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-blue-500/10">
                    <MessageCircle className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">4.7%</div>
                    <div className="text-muted-foreground text-sm">Avg Engagement</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-purple-500/10">
                    <Share2 className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">1.2M</div>
                    <div className="text-muted-foreground text-sm">Monthly Reach</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Content Categories */}
      <section id="content" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Content Library</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Organized content across different categories and topics
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contentCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{category.count}</span>
                    <Button variant="ghost" size="sm">
                      View All
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialHub;
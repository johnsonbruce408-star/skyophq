import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { 
  Linkedin, 
  Users, 
  TrendingUp, 
  MessageCircle, 
  Share2,
  Calendar,
  BarChart3,
  ExternalLink,
  ThumbsUp,
  Eye
} from "lucide-react";

const LinkedInNavigation = () => {
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
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
              <Linkedin className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">LinkedIn Portal</span>
          </div>
          
          <div className="hidden lg:flex items-center gap-8">
            <a href="/social-hub" className="text-muted-foreground hover:text-primary transition-colors">Social Hub</a>
            <a href="#analytics" className="text-muted-foreground hover:text-primary transition-colors">Analytics</a>
            <a href="#posts" className="text-muted-foreground hover:text-primary transition-colors">Posts</a>
            <a href="#schedule" className="text-muted-foreground hover:text-primary transition-colors">Schedule</a>
          </div>
          
          <Button variant="hero" size="sm">
            <ExternalLink className="w-4 h-4 mr-2" />
            Open LinkedIn
          </Button>
        </div>
      </div>
    </nav>
  );
};

const LinkedInPortal = () => {
  const recentPosts = [
    {
      content: "Excited to announce Skyline Operator Group's Q4 performance results. Our strategic investments continue to deliver exceptional returns for our partners.",
      engagement: { likes: 127, comments: 23, shares: 45 },
      reach: "2.3K",
      timestamp: "2 hours ago"
    },
    {
      content: "Market volatility creates opportunities. Our team's disciplined approach to risk management has positioned us well for the upcoming quarter.",
      engagement: { likes: 89, comments: 15, shares: 28 },
      reach: "1.8K",
      timestamp: "1 day ago"
    },
    {
      content: "Proud to be featured in Investment Weekly's Top 50 Operator Groups. Recognition of our team's dedication to excellence.",
      engagement: { likes: 203, comments: 41, shares: 67 },
      reach: "4.1K",
      timestamp: "3 days ago"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <LinkedInNavigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-background to-blue-700/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(220_90%_50%)_0%,transparent_50%)] opacity-10" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="mb-8">
            <Badge variant="outline" className="mb-4 border-blue-600 text-blue-600">
              Professional Network
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-blue-600 to-blue-700 bg-clip-text text-transparent">
              LinkedIn Portal
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Manage Skyline Operator Group's professional presence and thought leadership on LinkedIn
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700">
              <MessageCircle className="w-5 h-5 mr-2" />
              Create Post
            </Button>
            <Button variant="outline" size="lg">
              <BarChart3 className="w-5 h-5 mr-2" />
              View Analytics
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 px-6 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-blue-600/10">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">12.5K</div>
                    <div className="text-muted-foreground text-sm">Followers</div>
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
                    <div className="text-2xl font-bold">+15.2%</div>
                    <div className="text-muted-foreground text-sm">Growth (30d)</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-orange-500/10">
                    <Eye className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">45.3K</div>
                    <div className="text-muted-foreground text-sm">Monthly Views</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-purple-500/10">
                    <ThumbsUp className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">4.7%</div>
                    <div className="text-muted-foreground text-sm">Engagement Rate</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Post Composer */}
      <section id="schedule" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Create New Post</h2>
            <p className="text-muted-foreground">
              Share insights and updates with your professional network
            </p>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Post Composer
              </CardTitle>
              <CardDescription>
                Craft your message and schedule for optimal engagement
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Textarea 
                placeholder="What insights would you like to share with your network?"
                className="min-h-32"
              />
              
              <div className="flex flex-wrap gap-4">
                <Button variant="outline">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule
                </Button>
                <Button variant="outline">
                  Add Media
                </Button>
                <Button variant="outline">
                  Add Poll
                </Button>
              </div>
              
              <div className="flex justify-between items-center pt-4 border-t">
                <span className="text-sm text-muted-foreground">
                  Best time to post: Tuesday 10:00 AM
                </span>
                <div className="flex gap-3">
                  <Button variant="outline">Save Draft</Button>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Post Now
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Recent Posts */}
      <section id="posts" className="py-20 px-6 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Recent Posts</h2>
            <p className="text-muted-foreground">
              Track performance of your latest LinkedIn content
            </p>
          </div>
          
          <div className="space-y-6">
            {recentPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <p className="text-foreground leading-relaxed">{post.content}</p>
                    
                    <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <ThumbsUp className="w-4 h-4" />
                        {post.engagement.likes} likes
                      </div>
                      <div className="flex items-center gap-2">
                        <MessageCircle className="w-4 h-4" />
                        {post.engagement.comments} comments
                      </div>
                      <div className="flex items-center gap-2">
                        <Share2 className="w-4 h-4" />
                        {post.engagement.shares} shares
                      </div>
                      <div className="flex items-center gap-2">
                        <Eye className="w-4 h-4" />
                        {post.reach} reach
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center pt-4 border-t">
                      <span className="text-sm text-muted-foreground">{post.timestamp}</span>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          View Post
                        </Button>
                        <Button variant="ghost" size="sm">
                          Boost
                        </Button>
                      </div>
                    </div>
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

export default LinkedInPortal;
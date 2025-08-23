import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-vaultforge.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
      </div>
      
      {/* Tech Grid Overlay */}
      <div className="absolute inset-0 tech-grid" />
      
      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <div className="animate-slide-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            VaultForge Labs
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Pioneering the future through advanced neuroscience research, robotics innovation, 
            orbital systems, and next-generation launch technologies
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            Explore Research
          </Button>
          <Button variant="tech" size="lg" className="text-lg px-8 py-4">
            Investment Opportunities
          </Button>
        </div>
        
        {/* Floating Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <div className="bg-card/80 backdrop-blur-sm border border-primary/20 rounded-lg p-4 animate-pulse-glow">
            <div className="text-2xl font-bold text-primary">$25M</div>
            <div className="text-sm text-muted-foreground">Total Investment</div>
          </div>
          <div className="bg-card/80 backdrop-blur-sm border border-neuro/20 rounded-lg p-4">
            <div className="text-2xl font-bold text-neuro">4</div>
            <div className="text-sm text-muted-foreground">Research Labs</div>
          </div>
          <div className="bg-card/80 backdrop-blur-sm border border-orbital/20 rounded-lg p-4">
            <div className="text-2xl font-bold text-orbital">25</div>
            <div className="text-sm text-muted-foreground">Investor Cohorts</div>
          </div>
          <div className="bg-card/80 backdrop-blur-sm border border-stellar/20 rounded-lg p-4">
            <div className="text-2xl font-bold text-stellar">96%</div>
            <div className="text-sm text-muted-foreground">Asset Recovery</div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-float opacity-60" />
      <div className="absolute top-40 right-32 w-3 h-3 bg-accent rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-32 left-1/3 w-1 h-1 bg-neuro rounded-full animate-float opacity-80" style={{ animationDelay: '4s' }} />
    </section>
  );
};
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-vaultforge.jpg";

export const SkyoHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95 backdrop-blur-sm z-10" />
      
      {/* Tech Grid Overlay */}
      <div className="absolute inset-0 tech-grid opacity-20 z-10" />
      
      {/* Content */}
      <div className="relative z-20 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-slide-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
            SKYOP HQ
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Advanced Technology Solutions and Strategic Operations Consulting. 
            Transforming businesses through innovative aerial systems, data analytics, 
            and operational excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              variant="hero" 
              size="lg"
              className="text-lg px-8 py-4"
            >
              Explore Solutions
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-4 bg-card/80 backdrop-blur-sm"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="bg-card/80 backdrop-blur-sm rounded-lg border border-primary/20 p-6 animate-float">
            <div className="text-2xl md:text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Projects Delivered</div>
          </div>
          <div className="bg-card/80 backdrop-blur-sm rounded-lg border border-primary/20 p-6 animate-float" style={{ animationDelay: '0.2s' }}>
            <div className="text-2xl md:text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Operation Support</div>
          </div>
          <div className="bg-card/80 backdrop-blur-sm rounded-lg border border-primary/20 p-6 animate-float" style={{ animationDelay: '0.4s' }}>
            <div className="text-2xl md:text-3xl font-bold text-primary mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="bg-card/80 backdrop-blur-sm rounded-lg border border-primary/20 p-6 animate-float" style={{ animationDelay: '0.6s' }}>
            <div className="text-2xl md:text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};
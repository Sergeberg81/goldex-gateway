import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-gold-trading.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background/95" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 py-16 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-primary/10 border border-primary/20 mb-4 md:mb-6">
            <TrendingUp className="w-3 h-3 md:w-4 md:h-4 text-primary" />
            <span className="text-xs md:text-sm text-primary">Authorized by SPIMEX</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-tight">
            Trade Gold on Russia's Premier Exchange
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 md:mb-8 leading-relaxed px-2">
            GOLDEX opens international access to SPIMEX gold trading platform. 
            Experience transparent, secure, and liquid precious metals markets.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base md:text-lg px-6 md:px-8 w-full sm:w-auto" asChild>
              <a href="/enquiry">
                Start Trading
                <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-base md:text-lg px-6 md:px-8 border-primary/30 hover:bg-primary/10 w-full sm:w-auto">
              Learn More
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 mt-12 md:mt-16 px-2">
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-border">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1 md:mb-2">₽13.2T</div>
              <div className="text-xs md:text-sm text-muted-foreground">SPIMEX 2024 Turnover</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-border">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1 md:mb-2">100%</div>
              <div className="text-xs md:text-sm text-muted-foreground">Transparent Pricing</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-border">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1 md:mb-2">24/7</div>
              <div className="text-xs md:text-sm text-muted-foreground">Market Access</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

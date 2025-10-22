import { Button } from "@/components/ui/button";
import goldexLogo from "@/assets/goldex-logo-gold.png";
import spimexLogo from "@/assets/spimex-logo.jpg";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between relative">
          <div className="flex items-center gap-3 md:gap-4">
            <img src={spimexLogo} alt="SPIMEX" className="h-16 md:h-20" />
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center">
            <img src={goldexLogo} alt="GOLDEX" className="h-16 md:h-20" />
          </div>
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
            <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#benefits" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Benefits
            </a>
            <a href="#authorization" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Authorization
            </a>
            <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

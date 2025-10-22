import { Button } from "@/components/ui/button";
import goldexLogo from "@/assets/goldex-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <img src={goldexLogo} alt="GOLDEX" className="h-10" />
            <nav className="hidden md:flex items-center gap-6">
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
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

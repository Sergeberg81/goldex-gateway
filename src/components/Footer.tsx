import goldexLogo from "@/assets/goldex-logo-new.jpg";
import spimexLogo from "@/assets/spimex-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2">
            <div className="flex items-center gap-4 mb-4">
              <img src={goldexLogo} alt="GOLDEX" className="h-10" />
              <div className="h-8 w-px bg-border" />
              <img src={spimexLogo} alt="SPIMEX" className="h-10" />
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              GOLDEX JSC - Official authorized partner of SPIMEX for promoting and developing 
              the Gold Exchange Trading platform.
            </p>
            <p className="text-xs text-muted-foreground">
              Authorized to represent SPIMEX in promoting precious metals markets.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-primary transition-colors">About GOLDEX</a></li>
              <li><a href="#benefits" className="hover:text-primary transition-colors">Benefits</a></li>
              <li><a href="#authorization" className="hover:text-primary transition-colors">Authorization</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">SPIMEX</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>St. Petersburg, Russia</li>
              <li>Bolshaya Konyushennaya St., 21/23</li>
              <li>+7 (812) 309-33-33</li>
              <li><a href="https://www.spimex.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">www.spimex.com</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 GOLDEX JSC. All rights reserved. Authorized by SPIMEX for Gold Exchange Trading promotion.</p>
          <p className="mt-2 text-xs">
            This website is operated by GOLDEX JSC, acting as an authorized representative of the 
            St. Petersburg International Mercantile Exchange (SPIMEX) for promotional purposes.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

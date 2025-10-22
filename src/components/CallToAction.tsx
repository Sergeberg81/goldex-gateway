import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail, MapPin, Phone, Globe } from "lucide-react";
import securityBg from "@/assets/security-background.jpg";

const CallToAction = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${securityBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-background/90" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <Card className="max-w-4xl mx-auto p-12 bg-card/95 backdrop-blur-sm border-primary/20">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Trading?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join international traders accessing Russia's gold market through SPIMEX. 
              Get in touch with our team to begin your onboarding process.
            </p>
          </div>

          <div className="max-w-md mx-auto mb-8">
            <div className="flex gap-3">
              <Input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 bg-background border-border"
              />
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Contact Us
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 pt-8 border-t border-border">
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Email Us</h4>
                <p className="text-sm text-muted-foreground">info@goldexspimex.ru</p>
                <p className="text-xs text-muted-foreground mt-1">For verification and inquiries</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">SPIMEX</h4>
                <p className="text-sm text-muted-foreground">St. Petersburg, Russia</p>
                <p className="text-sm text-muted-foreground">Bolshaya Konyushennaya St., 21/23</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Phone</h4>
                <p className="text-sm text-muted-foreground">+7 (812) 309-33-33</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Globe className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Website</h4>
                <a href="https://www.spimex.com" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                  www.spimex.com
                </a>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CallToAction;

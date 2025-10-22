import { Card } from "@/components/ui/card";
import { Package, Globe, Shield, FileText, TrendingUp, Building2 } from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "Brokerage Services",
    description: "Professional brokerage services for gold trading on SPIMEX with competitive commission rates and seamless execution."
  },
  {
    icon: FileText,
    title: "Agency Agreements",
    description: "Comprehensive agency services to facilitate your gold trading operations with full regulatory compliance and support."
  },
  {
    icon: Package,
    title: "Collateral-Backed Lending",
    description: "Leverage your gold investments and coins as collateral for flexible financing solutions tailored to your needs."
  },
  {
    icon: Globe,
    title: "Export Services",
    description: "End-to-end export coordination for precious metals, including logistics, documentation, and regulatory compliance."
  },
  {
    icon: Shield,
    title: "Storage & Insurance",
    description: "Secure storage facilities partnered with GOZNAK and comprehensive insurance coverage for your precious metals holdings."
  },
  {
    icon: Building2,
    title: "Onboarding Platform",
    description: "Streamlined digital platform for participant onboarding, documentation management, and operational efficiency."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
            Comprehensive Gold Trading Services
          </h2>
          <p className="text-base md:text-lg text-muted-foreground px-2">
            GOLDEX provides a full spectrum of services to support your gold trading activities 
            on SPIMEX, from brokerage to storage and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="p-6 md:p-8 bg-card border-border hover:shadow-lg transition-shadow">
              <service.icon className="w-10 h-10 md:w-12 md:h-12 text-primary mb-3 md:mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{service.title}</h3>
              <p className="text-sm md:text-base text-muted-foreground">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

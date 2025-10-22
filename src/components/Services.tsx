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
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Comprehensive Gold Trading Services
          </h2>
          <p className="text-lg text-muted-foreground">
            GOLDEX provides a full spectrum of services to support your gold trading activities 
            on SPIMEX, from brokerage to storage and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="p-8 bg-card border-border hover:shadow-lg transition-shadow">
              <service.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

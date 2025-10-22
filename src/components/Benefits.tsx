import { Card } from "@/components/ui/card";
import { Lock, LineChart, Globe, Zap, Users, BarChart3 } from "lucide-react";

const benefits = [
  {
    icon: Lock,
    title: "Bank-Grade Security",
    description: "Goznak custodial services with state-of-the-art vault infrastructure protecting your assets."
  },
  {
    icon: LineChart,
    title: "Transparent Pricing",
    description: "Real-time market pricing with full order book visibility and fair price discovery mechanisms."
  },
  {
    icon: Globe,
    title: "International Access",
    description: "Seamless market entry for international participants outside Russia seeking gold exposure."
  },
  {
    icon: Zap,
    title: "High Liquidity",
    description: "Deep market with substantial trading volumes ensuring efficient execution at competitive spreads."
  },
  {
    icon: Users,
    title: "Institutional Grade",
    description: "Professional trading infrastructure designed for institutional requirements and compliance."
  },
  {
    icon: BarChart3,
    title: "Market Insights",
    description: "Advanced analytics and market data to support informed trading decisions and risk management."
  }
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
            Why Trade Gold on SPIMEX?
          </h2>
          <p className="text-base md:text-lg text-muted-foreground px-2">
            Access Russia's premier precious metals exchange with institutional-grade infrastructure, 
            transparent pricing, and unparalleled security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="p-6 md:p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.3)]"
            >
              <benefit.icon className="w-10 h-10 md:w-12 md:h-12 text-primary mb-3 md:mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{benefit.title}</h3>
              <p className="text-sm md:text-base text-muted-foreground">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

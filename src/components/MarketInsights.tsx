import { Card } from "@/components/ui/card";
import { TrendingUp, Activity, DollarSign } from "lucide-react";

const MarketInsights = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            SPIMEX Gold Market Overview
          </h2>
          <p className="text-lg text-muted-foreground">
            The Gold Exchange Trading platform launched in Q2 2025, enabling transparent 
            trading of standardized physical gold contracts on Russia's leading exchange.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          <Card className="p-8 bg-card border-border">
            <TrendingUp className="w-10 h-10 text-primary mb-4" />
            <div className="text-3xl font-bold text-primary mb-2">₽11.8T+</div>
            <div className="text-sm text-muted-foreground mb-4">2025 Turnover (9 months)</div>
            <p className="text-sm text-foreground">
              Substantial growth driven by the successful launch of new trading segments including gold.
            </p>
          </Card>

          <Card className="p-8 bg-card border-border">
            <Activity className="w-10 h-10 text-primary mb-4" />
            <div className="text-3xl font-bold text-primary mb-2">Physical</div>
            <div className="text-sm text-muted-foreground mb-4">Delivery Model</div>
            <p className="text-sm text-foreground">
              Trade standardized and weighted gold bullion with Goznak providing secure custodial services.
            </p>
          </Card>

          <Card className="p-8 bg-card border-border">
            <DollarSign className="w-10 h-10 text-primary mb-4" />
            <div className="text-3xl font-bold text-primary mb-2">Risk-Free</div>
            <div className="text-sm text-muted-foreground mb-4">Trading Space</div>
            <p className="text-sm text-foreground">
              Exchange-guaranteed settlement with state-backed infrastructure ensuring counterparty security.
            </p>
          </Card>
        </div>

        <Card className="p-8 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 border-primary/20 max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Partnership with Goznak</h3>
            <p className="text-muted-foreground mb-6">
              SPIMEX's partnership with Goznak, Russia's state mint, provides world-class custodial 
              infrastructure for storing and transacting physical gold. This collaboration ensures 
              maximum security and operational efficiency for all market participants.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span>State-backed security</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span>Professional storage facilities</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span>Seamless settlement process</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default MarketInsights;

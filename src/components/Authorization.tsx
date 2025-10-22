import { Card } from "@/components/ui/card";
import { Shield, Award, CheckCircle2 } from "lucide-react";

const Authorization = () => {
  return (
    <section id="authorization" className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary">Official Authorization</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Authorized by SPIMEX
          </h2>
          <p className="text-lg text-muted-foreground">
            GOLDEX executives are officially authorized by the St. Petersburg International 
            Mercantile Exchange to represent and promote the Gold Exchange Trading platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="p-8 bg-card border-border">
            <Award className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-4">SPIMEX Authority</h3>
            <p className="text-muted-foreground mb-6">
              Russia's leading commodity exchange with ₽13.2 trillion turnover in 2024. 
              A systemically important financial infrastructure institution.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">Official authorization letter issued October 2025</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">Full authority to promote Gold Exchange Trading</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">Partnership with state mint GOZNAK for custodial services</span>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-card border-border">
            <Shield className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-4">GOLDEX Expertise</h3>
            <p className="text-muted-foreground mb-6">
              Specialized company with deep expertise in bullion logistics, refining coordination, 
              and exchange-based product structuring.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">Strategic partner in advancing SPIMEX gold ecosystem</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">Strong ties with mining, financial institutions & regulators</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">Committed to enhancing market liquidity and integrity</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Authorization;

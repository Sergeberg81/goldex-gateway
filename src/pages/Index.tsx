import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Authorization from "@/components/Authorization";
import Services from "@/components/Services";
import MarketInsights from "@/components/MarketInsights";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Authorization />
        <Services />
        <MarketInsights />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

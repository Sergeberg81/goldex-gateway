import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Authorization from "@/components/Authorization";
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
        <MarketInsights />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { ArrowLeft, MessageCircle } from "lucide-react";
import wechatQR from "@/assets/wechat-qr.png";
import whatsappQR from "@/assets/whatsapp-qr.png";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";

const Enquiry = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          ...formData,
          type: "enquiry",
        },
      });

      if (error) throw error;

      toast({
        title: "Enquiry Submitted",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", company: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error submitting enquiry:", error);
      toast({
        title: "Error",
        description: "Failed to submit enquiry. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        <section className="py-16 bg-gradient-to-b from-background to-secondary/30">
          <div className="container mx-auto px-6">
            <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Start Your Gold Trading Journey
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Fill out the form below and our team will contact you to discuss 
                  how you can begin trading gold on SPIMEX through GOLDEX.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Send Us an Enquiry</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name *</label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address *</label>
                      <Input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Company Name</label>
                      <Input
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number</label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Message *</label>
                      <Textarea
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your interest in gold trading..."
                        className="min-h-[120px]"
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Submit Enquiry"}
                    </Button>
                  </form>
                </Card>

                <div className="space-y-6">
                  <Card className="p-6 bg-primary/5 border-primary/20">
                    <h3 className="font-semibold mb-3">Why Choose GOLDEX?</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Official SPIMEX authorized partner</li>
                      <li>• Secure custody with GOZNAK</li>
                      <li>• Transparent exchange-based pricing</li>
                      <li>• Comprehensive trading services</li>
                      <li>• Complete onboarding services</li>
                    </ul>
                  </Card>

                  <Card className="p-6">
                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                      <MessageCircle className="w-5 h-5 text-primary" />
                      Connect With Us
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <img src={wechatQR} alt="WeChat QR Code" className="w-full max-w-[160px] mx-auto mb-2 rounded-lg" />
                        <p className="text-sm text-muted-foreground">WeChat</p>
                      </div>
                      <div className="text-center">
                        <img src={whatsappQR} alt="WhatsApp QR Code" className="w-full max-w-[160px] mx-auto mb-2 rounded-lg" />
                        <p className="text-sm text-muted-foreground">WhatsApp</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Enquiry;

"use client";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "./ui/button";
import { getWhatsAppLink } from "@/lib/utils";
import { CreditCard, Camera, MessageCircle, Link } from "lucide-react";

export function PaymentInstructions() {
  const { t, site } = useLanguage();

  const handleWhatsApp = () => {
    window.open(getWhatsAppLink(), "_blank");
  };

  const icons = [
    <CreditCard key="1" className="h-6 w-6 text-primary" />,
    <Camera key="2" className="h-6 w-6 text-primary" />,
    <MessageCircle key="3" className="h-6 w-6 text-primary" />,
    <Link key="4" className="h-6 w-6 text-primary" />
  ];

  return (
    <section className="pb-20 bg-muted/20 border-b">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-card border rounded-2xl p-8 shadow-sm">
          <div className="grid sm:grid-cols-2 gap-8 mb-10">
            {t.payment.steps.map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="bg-primary/5 p-3 rounded-xl h-fit shrink-0">
                  {icons[i]}
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-primary">{step.title}</h4>
                  <p className="text-sm font-medium text-muted-foreground">
                    {step.description.replace('{price}', site.price).replace('{upi}', site.upiNumber)}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center border-t pt-8">
            <Button onClick={handleWhatsApp} variant="cta" size="lg" className="w-full sm:w-auto px-10 py-6 text-lg gap-3 bg-[#25D366] hover:bg-[#1ebe57] text-white">
              <MessageCircle className="h-6 w-6" />
              {t.payment.cta}
            </Button>
            <p className="text-xs text-muted-foreground mt-4 font-medium">{t.payment.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

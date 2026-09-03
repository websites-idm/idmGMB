"use client";
import { useLanguage } from "@/context/LanguageContext";

export function PricingSection() {
  const { t, site } = useLanguage();
  return (
    <section id="pricing" className="pt-20 pb-10 bg-muted/20 border-t">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.pricing.headline}</h2>
        <p className="text-lg text-muted-foreground mb-10 font-medium">{t.pricing.subtitle}</p>
        
        <div className="inline-block bg-background border rounded-2xl shadow-sm p-8 max-w-md w-full">
          <h3 className="text-sm uppercase tracking-wide font-bold text-muted-foreground mb-1">
            {t.pricing.feeTitle}
          </h3>
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="text-3xl font-bold text-muted-foreground line-through decoration-red-500/70 decoration-2">₹6,999/-</span>
            <div className="text-5xl font-extrabold text-primary">{site.price}</div>
          </div>
          
          <div className="border-t border-border/50 pt-8 text-sm text-muted-foreground space-y-3">
            <p className="font-medium">{t.pricing.paymentMethodsTitle}</p>
            <div className="flex items-center justify-center gap-4 font-bold text-foreground">
              <span className="text-purple-600">PhonePe</span>
              <span>•</span>
              <span className="text-green-600">Google Pay</span>
              <span>•</span>
              <span className="text-blue-600">Paytm</span>
            </div>
            <p className="mt-4 text-base font-bold text-foreground">
              UPI: <span className="text-xl font-extrabold">{site.upiNumber}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

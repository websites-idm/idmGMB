"use client";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "./ui/button";
import { scrollToPricing, getWhatsAppLink } from "@/lib/utils";

export function FinalCTA() {
  const { t, site } = useLanguage();
  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
      
      <div className="container relative z-10 mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight text-white">
          {t.finalCta.headline}
        </h2>
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 font-medium">
          {t.finalCta.subtitle}
        </p>
        
        <div className="bg-white/10 border border-white/20 rounded-2xl p-8 max-w-xl mx-auto backdrop-blur-sm mb-10 shadow-2xl">
          <p className="font-bold text-lg mb-2 text-white">{t.workshopName}</p>
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-3xl font-bold text-white/50 line-through decoration-red-500/70 decoration-2">₹6,999/-</span>
            <div className="text-5xl font-extrabold text-brand-gradient">{site.price}</div>
          </div>
          <div className="text-sm font-medium space-y-1 text-white/80">
            <p>UPI: {site.upiNumber}</p>
            <p>PhonePe • Google Pay • Paytm</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button onClick={scrollToPricing} variant="cta" size="lg" className="w-full sm:w-auto px-10 py-6 text-lg bg-white text-primary hover:bg-gray-100">
            {t.finalCta.ctaPrimary}
          </Button>
          <Button onClick={() => window.open(getWhatsAppLink(), "_blank")} variant="outline" size="lg" className="w-full sm:w-auto px-8 border-white/20 text-white hover:bg-white/10 hover:border-white/40">
            {t.finalCta.ctaSecondary}
          </Button>
        </div>
      </div>
    </section>
  );
}

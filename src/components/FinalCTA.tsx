"use client";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "./ui/button";
import { openRazorpay, getWhatsAppLink } from "@/lib/utils";
import { CheckoutButton } from "./CheckoutButton";

export function FinalCTA() {
  const { t, site } = useLanguage();
  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
      
      <div className="container relative z-10 mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight text-white">
          {t.finalCta.headline}
        </h2>
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10 font-medium">
          {t.finalCta.subtitle}
        </p>
        
        <div className="flex justify-center">
          <CheckoutButton className="w-full sm:w-auto" />
        </div>
      </div>
    </section>
  );
}

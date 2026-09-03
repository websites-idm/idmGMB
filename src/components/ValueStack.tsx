"use client";
import { useLanguage } from "@/context/LanguageContext";
import { Check } from "lucide-react";
import { Button } from "./ui/button";
import { scrollToPricing } from "@/lib/utils";

export function ValueStack() {
  const { t, site } = useLanguage();
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">{t.valueStack.headline}</h2>
        
        <div className="bg-card border rounded-2xl shadow-xl overflow-hidden max-w-2xl mx-auto">
          <div className="p-8 bg-muted/30">
            <ul className="space-y-4 text-left grid sm:grid-cols-2 gap-x-8">
              {t.valueStack.items.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="bg-green-100 p-1 rounded-full shrink-0">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="font-bold text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="p-8 border-t bg-primary/5">
            <p className="text-muted-foreground font-medium mb-2 uppercase tracking-wide text-xs">{t.valueStack.feeTitle}</p>
            <div className="text-5xl font-extrabold text-primary mb-8">{site.price}</div>
            <Button onClick={scrollToPricing} variant="cta" size="lg" className="w-full sm:w-auto px-12 text-lg">
              {t.valueStack.cta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

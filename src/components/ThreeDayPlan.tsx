"use client";
import { useLanguage } from "@/context/LanguageContext";
import { CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { scrollToPricing } from "@/lib/utils";

export function ThreeDayPlan() {
  const { t } = useLanguage();
  return (
    <section id="plan" className="py-20 bg-background border-t">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.plan.headline}</h2>
          <p className="text-lg text-muted-foreground font-medium">{t.plan.subtitle}</p>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
          {t.plan.days.map((day, idx) => (
            <div key={idx} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}>
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary text-primary-foreground font-bold text-xs shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow absolute left-0 md:left-1/2 z-10">
                {idx + 1}
              </div>

              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-card border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all ml-12 md:ml-0">
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary font-bold rounded-full text-xs mb-4">
                  {day.day}
                </div>
                <h3 className="text-xl font-bold mb-2 text-primary">{day.title}</h3>
                <p className="text-muted-foreground mb-6 text-sm font-medium">{day.subtitle}</p>
                
                <div className="bg-muted/30 rounded-xl p-4">
                  <h4 className="font-semibold text-sm mb-3">{t.plan.topicsTitle}</h4>
                  <ul className="grid gap-2">
                    {day.topics.map((topic, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
           <Button onClick={scrollToPricing} variant="cta" size="lg" className="px-8 text-lg">
             {t.plan.cta}
           </Button>
        </div>
      </div>
    </section>
  );
}

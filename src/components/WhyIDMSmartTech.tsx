"use client";
import { useLanguage } from "@/context/LanguageContext";
import { CheckSquare } from "lucide-react";

export function WhyIDMSmartTech() {
  const { t } = useLanguage();
  return (
    <section className="py-20 bg-muted/20 border-y">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.whyIdm.headline}</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {t.whyIdm.items.map((item, i) => (
            <div key={i} className="flex gap-4 p-6 bg-card border rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="mt-1 bg-primary/10 p-2 rounded-xl shrink-0 h-fit">
                <CheckSquare className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1 text-primary">{item.title}</h3>
                <p className="text-muted-foreground text-sm font-medium">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

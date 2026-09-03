"use client";
import { useLanguage } from "@/context/LanguageContext";
import { CheckCircle2 } from "lucide-react";

export function LearningModules() {
  const { t } = useLanguage();
  return (
    <section id="curriculum" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.curriculum.headline}</h2>
          <div className="w-24 h-1 bg-yellow-gradient mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {t.curriculum.modules.map((module, idx) => (
            <div 
              key={idx} 
              className="bg-card border rounded-xl p-6 shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-300 flex flex-col h-full group"
            >
              <div className="font-bold text-lg mb-4 text-primary group-hover:text-primary transition-colors">
                {module.title}
              </div>
              <ul className="space-y-3 mt-auto">
                {module.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground font-medium">
                    <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

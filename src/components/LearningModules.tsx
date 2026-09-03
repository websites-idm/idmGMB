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
          {t.curriculum.modules.map((module, idx) => {
            const colors = [
              "bg-blue-50/60 border-blue-100 hover:border-blue-300",
              "bg-purple-50/60 border-purple-100 hover:border-purple-300",
              "bg-amber-50/60 border-amber-100 hover:border-amber-300",
              "bg-emerald-50/60 border-emerald-100 hover:border-emerald-300",
              "bg-rose-50/60 border-rose-100 hover:border-rose-300",
              "bg-indigo-50/60 border-indigo-100 hover:border-indigo-300"
            ];
            const colorClass = colors[idx % colors.length];
            return (
              <div 
                key={idx} 
                className={`${colorClass} border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full group`}
              >
                <div className="font-bold text-lg mb-4 text-primary group-hover:text-primary transition-colors">
                  {module.title}
                </div>
                <ul className="space-y-3 mt-auto">
                  {module.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground/80 font-medium">
                      <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

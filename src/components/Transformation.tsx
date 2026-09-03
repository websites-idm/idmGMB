"use client";
import { useLanguage } from "@/context/LanguageContext";
import { X, Check } from "lucide-react";

export function Transformation() {
  const { t } = useLanguage();
  return (
    <section className="py-20 bg-muted/30 border-y">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.transformation.headline}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-red-50 rounded-2xl p-8 border border-red-100 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-red-500"></div>
            <h3 className="text-2xl font-bold mb-6 text-red-900">{t.transformation.beforeTitle}</h3>
            <ul className="space-y-4">
              {t.transformation.before.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <X className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                  <span className="font-medium text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-green-50 rounded-2xl p-8 border border-green-100 shadow-md relative overflow-hidden transform md:-translate-y-4">
            <div className="absolute top-0 left-0 w-full h-1 bg-green-500"></div>
            <h3 className="text-2xl font-bold mb-6 text-green-900">{t.transformation.afterTitle}</h3>
            <ul className="space-y-4">
              {t.transformation.after.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5 font-bold" />
                  <span className="font-bold text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

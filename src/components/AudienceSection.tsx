"use client";
import { useLanguage } from "@/context/LanguageContext";

export function AudienceSection() {
  const { t } = useLanguage();
  return (
    <section id="audience" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-yellow-400 text-primary px-6 py-2 rounded-xl inline-block shadow-sm">
              {t.audience.headline}
            </span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.audience.items.map((item, i) => (
            <div key={i} className="p-6 border rounded-2xl bg-card hover:border-primary/50 transition-colors shadow-sm">
              <h3 className="text-xl font-bold mb-2 text-primary">{item.title}</h3>
              <p className="text-muted-foreground text-sm font-medium">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

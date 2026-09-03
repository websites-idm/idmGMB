"use client";
import { useLanguage } from "@/context/LanguageContext";
import { XCircle, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { scrollToPricing } from "@/lib/utils";

export function ProblemSection() {
  const { t } = useLanguage();
  return (
    <section className="pt-24 pb-24 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">{t.problem.headline}</h2>
          <p className="text-lg md:text-xl font-medium text-muted-foreground">
            {t.problem.subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-16">
          {t.problem.items.map((problem, idx) => (
            <div key={idx} className="flex items-start gap-4 p-5 bg-white border border-border/50 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-red-50 p-2 rounded-xl shrink-0 mt-0.5">
                <XCircle className="h-5 w-5 text-red-500" />
              </div>
              <span className="font-bold text-primary/90 mt-1.5">{problem}</span>
            </div>
          ))}
        </div>

        <div className="text-center space-y-8 bg-muted/50 p-10 rounded-3xl border border-border/50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-yellow-gradient"></div>
          <p className="text-xl md:text-2xl font-bold leading-relaxed">
            {t.problem.conclusion1} <br/>
            <span className="text-amber-500 drop-shadow-sm font-extrabold text-2xl md:text-3xl mt-2 inline-block">{t.problem.conclusion2}</span>
          </p>
          <Button onClick={scrollToPricing} variant="outline" size="lg" className="gap-2 group px-8">
            {t.problem.cta} <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}

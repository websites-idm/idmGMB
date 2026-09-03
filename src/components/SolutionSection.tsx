"use client";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowDown } from "lucide-react";

export function SolutionSection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
            {t.solution.headline}
          </h2>
          <p className="text-lg md:text-xl font-medium text-white/80">
            {t.solution.subtitle}
          </p>
        </div>

        <div className="max-w-5xl mx-auto overflow-hidden py-8">
          {/* Desktop horizontal flow */}
          <div className="hidden md:flex flex-wrap justify-center items-center gap-3">
            {t.solution.steps.map((step, idx) => (
              <div key={step} className="flex items-center">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2.5 rounded-xl font-bold text-sm tracking-widest text-white shadow-xl hover:bg-white/20 transition-colors">
                  {step}
                </div>
                {idx < t.solution.steps.length - 1 && (
                  <div className="w-8 h-px bg-white/30 mx-2 relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-r-2 border-t-2 border-yellow-400 rotate-45"></div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile vertical flow */}
          <div className="flex md:hidden flex-col items-center gap-3">
            {t.solution.steps.map((step, idx) => (
              <div key={step} className="flex flex-col items-center">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3.5 rounded-xl font-bold text-sm tracking-widest text-white shadow-xl text-center w-64">
                  {step}
                </div>
                {idx < t.solution.steps.length - 1 && (
                  <ArrowDown className="h-6 w-6 text-yellow-400 my-3" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

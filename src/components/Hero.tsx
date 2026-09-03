"use client";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "./ui/button";
import { scrollToPricing } from "@/lib/utils";
import Image from "next/image";

export function Hero() {
  const { t, site } = useLanguage();
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground pt-32 md:pt-40 pb-16 lg:pb-24">
      <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-0"></div>
      
      <div className="container relative z-10 mx-auto px-4 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
        <div className="flex-1 text-center lg:text-left space-y-8 max-w-2xl mx-auto lg:mx-0">
          <div className="space-y-4">
            <div className="inline-block rounded-full bg-white/10 border border-white/20 backdrop-blur px-4 py-1.5 text-sm font-bold text-white mb-2 tracking-wide uppercase">
              🚀 {t.hero.presents}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              {t.hero.headline}
            </h1>
            <p className="text-xl md:text-2xl font-bold text-white/90 font-display">
              {t.workshopName}
            </p>
            <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {t.hero.subtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <a href="#pricing" className="w-full sm:w-auto">
              <Button size="lg" variant="cta" className="w-full px-8 py-3 shadow-[0_0_30px_rgba(255,196,0,0.5)] animate-pulse hover:scale-105 transition-transform text-lg border-2 border-white/50">
                {t.hero.ctaPrimary}
              </Button>
            </a>
            <a href="#curriculum" className="text-sm font-bold text-white/80 hover:text-white transition-colors">
              {t.hero.ctaSecondary}
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start text-sm font-bold text-white/80">
            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500/20 text-green-400 text-xs shrink-0">✓</span>
              <span>{t.hero.secureSeat}</span>
            </div>
            <div className="hidden sm:block text-white/30">•</div>
            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/20 text-blue-400 text-xs shrink-0">⏱</span>
              <span>{t.hero.limitedAccess}</span>
            </div>
          </div>
        </div>

        <div className="flex-1 w-full max-w-md lg:max-w-none mx-auto relative lg:pl-10">
          <div className="relative z-10 flex flex-col items-center group">
            {/* Image Container */}
            <div className="bg-white rounded-[2rem] w-full max-w-[360px] overflow-hidden shadow-2xl relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
              <div className="relative aspect-[3/4] w-full">
                <Image 
                  src="/BantaramSanvika_founder.png" 
                  alt={t.hero.founder.name} 
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                  className="object-cover object-top"
                />
              </div>
            </div>
            
            {/* Info Card - Overlapping */}
            <div className="bg-yellow-gradient w-[105%] max-w-[400px] rounded-3xl p-6 md:p-8 shadow-yellow relative z-20 -mt-12 transition-transform duration-500 group-hover:-translate-y-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                <span className="text-primary font-bold text-xs tracking-widest uppercase">
                  {t.hero.founder.tag}
                </span>
              </div>
              <h3 className="text-primary font-extrabold text-2xl md:text-3xl tracking-tight mb-1">
                {t.hero.founder.name}
              </h3>
              <p className="text-primary/80 font-bold text-sm uppercase tracking-wider mb-4">
                {t.hero.founder.title}
              </p>
              
              <p className="text-primary/90 text-sm font-medium leading-relaxed">
                {t.hero.founder.desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

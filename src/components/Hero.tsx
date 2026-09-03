"use client";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "./ui/button";
import { scrollToPricing } from "@/lib/utils";
import { MapPin, Star, Search, BarChart3, Sparkles } from "lucide-react";

export function Hero() {
  const { t, site } = useLanguage();
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground pt-32 md:pt-40 pb-16">
      <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-0"></div>
      
      <div className="container relative z-10 mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left space-y-8">
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
            <Button size="lg" variant="cta" onClick={scrollToPricing} className="w-full sm:w-auto text-lg px-8">
              {t.hero.ctaPrimary}
            </Button>
            <a href="#curriculum" className="text-sm font-bold text-white/80 hover:text-white transition-colors">
              {t.hero.ctaSecondary}
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start text-sm font-bold text-white/80">
            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500/20 text-green-400 text-xs">✓</span>
              {t.hero.secureSeat}
            </div>
            <div className="hidden sm:block text-white/30">•</div>
            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/20 text-blue-400 text-xs">⏱</span>
              {t.hero.limitedAccess}
            </div>
          </div>
          
          <div className="pt-2">
             <p className="text-3xl font-black text-brand-gradient">
               {site.price}
             </p>
             <p className="text-sm font-medium text-white/60 mt-1 tracking-wide">{t.hero.features}</p>
          </div>
        </div>

        <div className="flex-1 w-full max-w-lg lg:max-w-none relative">
          <div className="relative aspect-square md:aspect-video lg:aspect-square bg-white/5 backdrop-blur-md rounded-[2rem] border border-white/10 shadow-2xl overflow-hidden flex items-center justify-center p-8">
            <div className="absolute top-10 left-10 animate-pulse"><MapPin className="h-12 w-12 text-yellow-400" /></div>
            <div className="absolute bottom-20 right-10 animate-bounce duration-[3000ms]"><Sparkles className="h-10 w-10 text-yellow-400" /></div>
            <div className="absolute top-20 right-20"><Search className="h-8 w-8 text-white/40" /></div>
            <div className="absolute bottom-10 left-20"><BarChart3 className="h-10 w-10 text-green-400" /></div>
            
            <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-sm space-y-4 relative z-10 hover:-translate-y-1 transition-transform duration-300">
               <div className="flex justify-between items-start">
                 <div className="w-16 h-16 bg-primary/10 rounded-xl"></div>
                 <div className="flex gap-1">{[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}</div>
               </div>
               <div className="h-4 bg-muted rounded w-3/4"></div>
               <div className="h-3 bg-muted/50 rounded w-1/2"></div>
               <div className="pt-4 flex gap-2">
                 <div className="h-8 bg-primary/5 rounded w-full"></div>
                 <div className="h-8 bg-primary/5 rounded w-full"></div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

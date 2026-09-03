"use client";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { t, site } = useLanguage();
  return (
    <footer className="bg-primary py-16 border-t border-white/10 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
               <div className="h-8 w-8 rounded-lg bg-yellow-gradient grid place-items-center shadow-yellow shrink-0">
                 <span className="font-display font-extrabold text-primary text-sm">I</span>
               </div>
               <h3 className="font-display font-bold text-xl text-white">{site.brandName}</h3>
            </div>
            <p className="text-white/60 text-sm max-w-xs font-medium">
              {t.workshopName}
            </p>
          </div>
          
          <div>
            <h4 className="font-display font-bold mb-4 text-yellow-400 tracking-wider uppercase text-sm">{t.footer.navTitle}</h4>
            <ul className="space-y-3 text-sm text-white/70 font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Workshop</a></li>
              <li><a href="#curriculum" className="hover:text-white transition-colors">{t.nav.curriculum}</a></li>
              <li><a href="#plan" className="hover:text-white transition-colors">{t.nav.plan}</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">{t.nav.faq}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-bold mb-4 text-yellow-400 tracking-wider uppercase text-sm">{t.footer.contactTitle}</h4>
            <ul className="space-y-3 text-sm text-white/70 font-medium">
              <li>UPI: {site.upiNumber}</li>
              <li className="pt-4"><a href="#" className="hover:text-white transition-colors">{t.footer.links[0]}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t.footer.links[1]}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t.footer.links[2]}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t.footer.links[3]}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-medium text-white/50">
          <div>&copy; {new Date().getFullYear()} {site.brandName}. {t.footer.rights}</div>
          <div>Growth with Local SEO</div>
        </div>
      </div>
    </footer>
  );
}

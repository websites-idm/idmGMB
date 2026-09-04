"use client";
import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { openRazorpay } from "@/lib/utils";

export function Header() {
  const { t, site } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md border-b border-border shadow-sm py-3" : "bg-white py-5"}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-yellow-gradient grid place-items-center shadow-yellow">
            <span className="font-display font-extrabold text-primary text-lg">I</span>
          </div>
          <span className="font-display font-extrabold text-xl tracking-tight text-primary">
            {site.brandName}
          </span>
        </div>

        <nav className="hidden lg:flex items-center gap-6 text-sm font-bold text-secondary">
          <a href="#curriculum" className="transition-colors hover:text-primary">{t.nav.curriculum}</a>
          <a href="#plan" className="transition-colors hover:text-primary">{t.nav.plan}</a>
          <a href="#audience" className="transition-colors hover:text-primary">{t.nav.audience}</a>
          <a href="#faq" className="transition-colors hover:text-primary">{t.nav.faq}</a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="cta" onClick={openRazorpay}>
            {t.nav.join} — {site.price}
          </Button>
        </div>

        <div className="flex md:hidden items-center gap-4">
          <button className="p-1 text-primary" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full border-b bg-white px-4 py-4 shadow-lg flex flex-col space-y-4 z-50">
          <nav className="flex flex-col space-y-4 text-sm font-bold text-secondary">
            <a href="#curriculum" onClick={() => setMobileMenuOpen(false)}>{t.nav.curriculum}</a>
            <a href="#plan" onClick={() => setMobileMenuOpen(false)}>{t.nav.plan}</a>
            <a href="#audience" onClick={() => setMobileMenuOpen(false)}>{t.nav.audience}</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)}>{t.nav.faq}</a>
          </nav>
          <Button variant="cta" onClick={() => { openRazorpay(); setMobileMenuOpen(false); }} className="w-full">
            {t.nav.join} — {site.price}
          </Button>
        </div>
      )}
    </header>
  );
}

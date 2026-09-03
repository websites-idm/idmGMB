"use client";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "./ui/button";
import { scrollToPricing, getWhatsAppLink } from "@/lib/utils";
import { MessageCircle } from "lucide-react";

export function MobileStickyCTA() {
  const { t, site } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <button 
        onClick={() => window.open(getWhatsAppLink(), "_blank")}
        className="fixed bottom-24 md:bottom-8 right-4 md:right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-border shadow-[0_-4px_10px_rgba(0,0,0,0.05)] z-50 animate-in slide-in-from-bottom-full">
        <Button onClick={scrollToPricing} variant="cta" className="w-full text-base py-6 shadow-md">
          {t.mobileCta} 
          <span className="line-through text-primary/50 text-sm ml-2 mr-1">₹6,999/-</span>
          <span className="text-red-700 ml-1">{site.price}</span>
        </Button>
      </div>
    </>
  );
}

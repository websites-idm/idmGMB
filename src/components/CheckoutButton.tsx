"use client";
import { Button } from "./ui/button";
import { openRazorpay } from "@/lib/utils";

export function CheckoutButton({ className = "" }: { className?: string }) {
  return (
    <div className={`flex justify-center w-full animate-bounce ${className}`}>
      <Button 
        onClick={openRazorpay} 
        variant="cta" 
        size="lg" 
        className="w-full sm:w-auto px-6 py-6 md:px-12 md:py-8 rounded-full text-base md:text-xl font-bold shadow-[0_0_30px_rgba(255,196,0,0.6)] animate-pulse hover:scale-105 transition-transform border-4 border-yellow-500/50 whitespace-normal text-center h-auto leading-tight"
      >
        <span className="text-xl md:text-2xl mr-2 md:mr-3">🔥</span> JOIN THE WORKSHOP NOW
      </Button>
    </div>
  );
}

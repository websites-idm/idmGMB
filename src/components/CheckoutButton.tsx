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
        className="w-full sm:w-auto px-12 py-8 rounded-full text-xl shadow-[0_0_30px_rgba(255,196,0,0.6)] animate-pulse hover:scale-105 transition-transform border-4 border-yellow-500/50"
      >
        <span className="text-2xl mr-3">🔥</span> JOIN THE WORKSHOP NOW
      </Button>
    </div>
  );
}

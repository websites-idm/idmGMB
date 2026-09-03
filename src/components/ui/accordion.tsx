"use client";
import * as React from "react";
import { ChevronDown } from "lucide-react";

export function Accordion({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return <div className={`w-full ${className}`}>{children}</div>;
}

export function AccordionItem({ title, content, isOpen, onClick }: { title: string, content: string, isOpen: boolean, onClick: () => void }) {
  return (
    <div className="border-b border-border">
      <button
        type="button"
        className="flex w-full items-center justify-between py-4 text-left font-medium transition-all hover:underline"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        {title}
        <ChevronDown className={`h-4 w-4 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <div 
        className={`overflow-hidden text-sm transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 pb-4 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="text-muted-foreground">{content}</div>
      </div>
    </div>
  );
}

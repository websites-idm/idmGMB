"use client";
import { useLanguage } from "@/context/LanguageContext";
import { Calendar, Tag, Map, Bot, MonitorPlay } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Calendar: <Calendar className="h-6 w-6 text-primary" />,
  Tag: <Tag className="h-6 w-6 text-primary" />,
  Map: <Map className="h-6 w-6 text-primary" />,
  Bot: <Bot className="h-6 w-6 text-primary" />,
  MonitorPlay: <MonitorPlay className="h-6 w-6 text-primary" />,
};

export function WorkshopHighlights() {
  const { t } = useLanguage();
  return (
    <section className="py-12 bg-background border-y border-border/50 relative z-20 -mt-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {t.highlights.map((highlight, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-card rounded-2xl shadow-sm border border-border/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="mb-4 h-14 w-14 bg-primary/5 rounded-2xl grid place-items-center">
                {iconMap[highlight.icon as keyof typeof iconMap]}
              </div>
              <h3 className="font-display font-bold text-lg text-primary">{highlight.title}</h3>
              <p className="text-sm font-medium text-muted-foreground mt-2">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

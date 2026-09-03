"use client";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Accordion, AccordionItem } from "./ui/accordion";

export function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.faq.headline}</h2>
        </div>

        <Accordion>
          {t.faq.items.map((faq, index) => (
            <AccordionItem
              key={index}
              title={faq.question}
              content={faq.answer}
              isOpen={openIndex === index}
              onClick={() => toggleAccordion(index)}
            />
          ))}
        </Accordion>
      </div>
    </section>
  );
}

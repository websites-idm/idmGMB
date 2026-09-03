"use client";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WorkshopHighlights } from "@/components/WorkshopHighlights";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { LearningModules } from "@/components/LearningModules";
import { ThreeDayPlan } from "@/components/ThreeDayPlan";
import { Transformation } from "@/components/Transformation";
import { AudienceSection } from "@/components/AudienceSection";
import { WhyIDMSmartTech } from "@/components/WhyIDMSmartTech";
import { WorkshopDetailsImages } from "@/components/WorkshopDetailsImages";
import { ValueStack } from "@/components/ValueStack";
import { PricingSection } from "@/components/PricingSection";
import { PaymentInstructions } from "@/components/PaymentInstructions";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { LanguageProvider } from "@/context/LanguageContext";

export default function Home() {
  return (
    <LanguageProvider>
      <div className="flex min-h-screen flex-col bg-background font-sans">
        <Header />
        <main className="flex-1">
          <Hero />
          <WorkshopHighlights />
          <ProblemSection />
          <SolutionSection />
          <LearningModules />
          <ThreeDayPlan />
          <Transformation />
          <AudienceSection />
          <WhyIDMSmartTech />
          <WorkshopDetailsImages />
          <ValueStack />
          <PricingSection />
          <PaymentInstructions />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
        <MobileStickyCTA />
      </div>
    </LanguageProvider>
  );
}

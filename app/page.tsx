"use client";
import { Hero } from "@/components/hero";
import { AboutCampaign } from "@/components/about-campaign";
import { Projects } from "@/components/projects";
import { Statistics } from "@/components/statistics";
import { Testimonies } from "@/components/testimonies";
import { Media } from "@/components/media";
import { Partners } from "@/components/partners";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import Implementers from "@/components/implementers";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/language-provider";
export default function HomePage() {
  useEffect(() => {
    // 🔒 منع حفظ الصور بالزر الأيمن أو السحب
    const preventActions = (e: MouseEvent | DragEvent) => e.preventDefault();

    document.addEventListener("contextmenu", preventActions);
    document.addEventListener("dragstart", preventActions);

    return () => {
      document.removeEventListener("contextmenu", preventActions);
      document.removeEventListener("dragstart", preventActions);
    };
  }, []);
  return (
    <main className={`min-h-screen bg-white raleway`}>
      <Navigation />
      <Hero />
      <AboutCampaign />
      <Implementers />
      <Projects />
      <Statistics />
      <Testimonies />
      <Media />
      <Partners />
      <Footer />
    </main>
  );
}

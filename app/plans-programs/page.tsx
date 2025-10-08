"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Link from "next/link";
import donate from "@/public/imgs/donate1.png";
import most1 from "@/public/imgs/most1.png";
import most2 from "@/public/imgs/most2.png";
import most3 from "@/public/imgs/most3.png";
import SeriesOfEvents from "@/components/SeriesOfEvents";
import { useLanguage } from "@/contexts/language-provider";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true },
};

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      {...fadeInUp}
      className="bg-white rounded-lg border border-gray-200 overflow-hidden"
    >
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between text-left bg-[#EEF4FC] hover:bg-gray-50 transition-colors"
      >
        <span className="text-[#061923] font-medium text-sm md:text-base pr-4">
          {question}
        </span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-[#1a1a1a] flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-[#1a1a1a] flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.1 }}
          className="px-6 pb-4 bg-[#E4EAF1]"
        >
          <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
            {answer}
          </p>
        </motion.div>
      )}
    </motion.div>
  );
}

export default function PlansAndProgramsPage() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number>(0);

  // Build lists from translation files
  const processSteps: { number: string; title: string; description: string }[] =
    [];
  for (let i = 1; i <= 10; i++) {
    const number = t(`process.steps.${i}.number`);
    const title = t(`process.steps.${i}.title`);
    const description = t(`process.steps.${i}.description`);
    if (!title || title === `process.steps.${i}.title`) break;
    processSteps.push({ number, title, description });
  }

  const statistics: { number: string; description: string }[] = [];
  for (let i = 1; i <= 10; i++) {
    const num = t(`numbers.items.${i}.number`);
    const desc = t(`numbers.items.${i}.description`);
    if (!num || num === `numbers.items.${i}.number`) break;
    statistics.push({ number: num, description: desc });
  }

  const faqs: { question: string; answer: string }[] = [];
  for (let i = 1; i <= 20; i++) {
    const q = t(`faq.${i}.question`);
    const a = t(`faq.${i}.answer`);
    if (!q || q === `faq.${i}.question`) break;
    faqs.push({ question: q, answer: a });
  }

  return (
    <main className="min-h-screen raleway">
      {/* Hero Section */}
      <Navigation />
      <section className="bg-[#D8E8F0] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold text-[#1a1a1a] mb-6 flex items-center gap-2">
              <span className="text-[#F5A623]">◆</span>
              {t("hero.title")}
              <span className="text-[#F5A623]">◆</span>
            </h1>
            <p className="text-[#1a1a1a] text-base md:text-lg leading-relaxed">
              {t("hero.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            {...fadeInUp}
            className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-12 flex items-center gap-2"
          >
            <span className="text-[#F5A623]">◆</span>
            {t("process.title")}
            <span className="text-[#F5A623]">◆</span>
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          >
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className={[
                  "relative bg-[#F5F1E8] rounded-2xl p-8 shadow-sm",
                  "border border-black/5",
                  i === 1 ? "md:-mt-8" : "",
                  i === 2 ? "md:-mt-16" : "",
                ].join(" ")}
              >
                <div className="absolute -top-8 left-8 w-16 h-16 rounded-full bg-[#F5A623] flex items-center justify-center shadow-md">
                  <span className="text-white text-2xl font-extrabold tracking-wide">
                    {step.number}
                  </span>
                </div>

                <div className="pt-6">
                  <h3 className="text-[#2B6B8F] text-3xl md:text-4xl font-extrabold mb-3 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-[#1a1a1a]/90 text-[15px] leading-7">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Donate Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            {...fadeInUp}
            className="bg-[#096394] rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 p-8 md:p-12"
          >
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
                {t("donate.title")}
              </h2>
              <p className="text-white text-sm md:text-base leading-relaxed mb-8 font-medium">
                {t("donate.body")}
              </p>
              <Link href="/donate">
                <button className="bg-white text-[#2B6B8F] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors w-fit">
                  {t("donate.cta")}
                </button>
              </Link>
            </div>
            <div className="relative h-64 md:h-auto min-h-[300px] rounded-lg overflow-hidden">
              <Image
                src={donate}
                alt={t("donate.imageAlt")}
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Numbers Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            {...fadeInUp}
            className="text-3xl md:text-4xl font-bold text-[#1a1a1a] text-center mb-12 flex items-center justify-center gap-2"
          >
            <span className="text-[#F5A623]">◆</span>
            {t("numbers.title")}
            <span className="text-[#F5A623]">◆</span>
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 max-w-4xl mx-auto"
          >
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center flex flex-col md:flex-row justify-around items-center gap-2"
              >
                <div className="text-6xl md:text-7xl font-bold text-[#2B6B8F] mb-4">
                  {stat.number}
                </div>
                <p className="text-[#1a1a1a] text-sm md:text-base">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Q&A Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            {...fadeInUp}
            className="text-3xl md:text-4xl font-bold text-[#1a1a1a] text-center mb-12 flex items-center justify-center gap-2"
          >
            <span className="text-[#F5A623]">◆</span>
            {t("faq.title")}
            <span className="text-[#F5A623]">◆</span>
          </motion.h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

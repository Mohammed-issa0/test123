"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import line from "@/public/imgs/lin.png";
import linear from "@/public/imgs/linear.png";
import { useLanguage } from "@/contexts/language-provider";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.12 } },
};

export default function SeriesOfEvents() {
  const { t, lang } = useLanguage();
  const isArabic = (lang || "").startsWith("ar");

  const imgSrc = isArabic ? linear : line;

  // بناء الجدول الزمني من ملف الترجمة
  const timeline = [];
  for (let i = 1; i <= 10; i++) {
    const date = t(`timeline.${i}.date`);
    const text = t(`timeline.${i}.text`);
    if (!date || date === `timeline.${i}.date`) break;
    timeline.push({ date, text });
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div {...fadeInUp} className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0E2A3A] mb-4 flex items-center justify-center gap-2">
            <span className="text-[#F5A623]">◆</span>
            {t("header.title")}
            <span className="text-[#F5A623]">◆</span>
          </h2>
          <p className="text-[#0E2A3A]/80 text-sm max-w-xl mx-auto leading-relaxed">
            {t("header.subtitle")}
          </p>
        </motion.div>

        {/* صورة الخط الزمني (للحواسيب) */}
        <Image
          src={imgSrc}
          className="hidden md:block z-10 w-full"
          alt={t("image.alt")}
        />

        {/* عرض الجدول الزمني في الموبايل */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-80px" }}
          className="relative mt-16 md:hidden"
        >
          <div className="lg:hidden space-y-5">
            {timeline.map((item, idx) => (
              <motion.div key={idx} {...fadeInUp}>
                <div className="relative pl-6">
                  <div className="absolute left-2 top-3 h-full w-px bg-[#6C8FB1]/60" />
                  <div className="bg-white border-2 border-[#6C8FB1] rounded-2xl p-5 shadow-sm">
                    <p className="text-[#476C9B] font-bold text-lg mb-1">
                      {item.date}
                    </p>
                    <p className="text-[#0E2A3A] text-sm leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "@/public/imgs/logo.png";
import {
  Heart,
  Droplet,
  Utensils,
  Cross,
  User,
  Play,
  Pause,
} from "lucide-react";
import AboutCampaignRadial from "@/components/AboutCampaignRadial";
import { useLanguage } from "@/contexts/language-provider";
import { Partners } from "@/components/partners";
export default function AboutCampaignPage() {
  const { t } = useLanguage();

  const fadeInUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.12 } },
    viewport: { once: true, amount: 0.2 },
  };
  const partners = [];
  for (let i = 0; i < 20; i++) {
    const key = `about.partners.list.${i}`;
    const value = t(key);
    if (!value || value === key) break; // stop when no more keys found
    partners.push(value);
  }
  return (
    <div className="min-h-screen bg-white text-[#1a1a1a]">
      <Navigation />

      {/* HERO: About the City of El Fasher */}
      <motion.section
        {...fadeInUp}
        className="px-4 sm:px-6 md:px-8 lg:px-10 py-10 md:py-16 bg-[#E8F4F8]"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-[22px] sm:text-3xl md:text-4xl font-bold leading-tight mb-4">
              <span className="text-[#F5A623] align-middle mr-2">◆</span>
              {t("about.title.city")}
            </h2>
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg max-w-xl">
              {t("about.description.city")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative h-[240px] sm:h-[320px] md:h-[380px] lg:h-[420px] rounded-lg overflow-hidden"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/map1-RhiF5sX0tfSHdg2VjWstvCTYPYObFp.png"
              alt="Map of El Fasher region"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </div>
      </motion.section>

      {/* ABOUT THE CAMPAIGN */}
      <AboutCampaignRadial />

      {/* WHAT THE CAMPAIGN OFFERS */}
      <motion.section
        {...fadeInUp}
        className="px-4 sm:px-6 md:px-8 lg:px-10 py-14 md:py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            {...fadeInUp}
            className="text-center text-[22px] sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12"
          >
            <span className="text-[#F5A623]">◆</span> {t("about.offers.title")}{" "}
            <span className="text-[#F5A623]">◆</span>
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6 md:gap-8"
          >
            {/* 1) نص ثم صورة */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className=" overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-4 p-6 ">
                {/* النص */}
                <div className="flex bg-blue-200 flex-col justify-center items-center md:order-1 text-center p-3">
                  <div className="w-16 h-16 mb-4 bg-[#00A3E0] rounded-full flex items-center justify-center">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2">
                    {t("about.offers.item1.title")}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {t("about.offers.item1.description")}
                  </p>
                </div>

                {/* الصورة */}
                <div className="relative h-40 sm:h-48 md:h-full  overflow-hidden md:order-2">
                  <Image
                    src="/cam1.png"
                    alt={t("about.offers.item1.title")}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* 2) صورة ثم نص */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className=" overflow-hidden"
            >
              <div className="grid md:grid-cols-2 p-6 gap-4 ">
                {/* النص */}
                <div className="flex bg-blue-200 flex-col items-center justify-center md:order-2 text-center p-3">
                  <div className="w-16 h-16 mb-4 bg-[#00A3E0] rounded-full flex items-center justify-center">
                    <Utensils className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2">
                    {t("about.offers.item2.title")}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {t("about.offers.item2.description")}
                  </p>
                </div>
                {/* الصورة أولاً على الشاشات الكبيرة */}
                <div className="relative h-40 sm:h-48 md:h-full  overflow-hidden md:order-2">
                  <Image
                    src="/cam2.png"
                    alt={t("about.offers.item2.title")}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* 3) نص ثم صورة */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="overflow-hidden"
            >
              <div className=" grid md:grid-cols-2 gap-4 p-6 items-center">
                <div className="relative h-40 sm:h-48 md:h-full  overflow-hidden md:order-2">
                  <Image
                    src="/cam3.png"
                    alt={t("about.offers.item3.title")}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex p-3 bg-blue-200 flex-col items-center justify-center md:order-2 text-center">
                  <div className="w-16 h-16 mb-4 bg-[#00A3E0] rounded-full flex items-center justify-center">
                    <Cross className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2">
                    {t("about.offers.item3.title")}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {t("about.offers.item3.description")}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 4) صورة ثم نص */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-4 p-6">
                <div className="relative h-40 sm:h-48 md:h-full  overflow-hidden md:order-1">
                  <Image
                    src="/cam4.png"
                    alt={t("about.offers.item4.title")}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex p-3 flex-col items-center justify-center md:order-2 text-center bg-blue-200">
                  <div className="w-16 h-16 mb-4 bg-[#00A3E0] rounded-full flex items-center justify-center">
                    <Droplet className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2">
                    {t("about.offers.item4.title")}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {t("about.offers.item4.description")}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* STATS */}
      <motion.section
        {...fadeInUp}
        className="px-4 sm:px-6 md:px-8 lg:px-10 py-14 md:py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          >
            {[1, 2, 3, 4].map((i) => (
              <motion.div key={i} variants={fadeInUp} className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2 md:mb-4">
                  <span className="text-[#F5A623] text-xl md:text-2xl">◆</span>
                  <div className="text-4xl md:text-6xl font-bold text-[#00A3E0] leading-none">
                    {i * 10}
                  </div>
                  <span className="text-[#F5A623] text-xl md:text-2xl">◆</span>
                </div>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed max-w-xs mx-auto">
                  {t(`about.stats.item${i}`)}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CASES */}
      <motion.section
        {...fadeInUp}
        className="px-4 sm:px-6 md:px-8 lg:px-10 py-14 md:py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            {...fadeInUp}
            className="text-center text-[22px] sm:text-3xl md:text-4xl font-bold mb-8 md:mb-16"
          >
            <span className="text-[#F5A623]">◆</span> {t("about.cases.title")}{" "}
            <span className="text-[#F5A623]">◆</span>
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {[1, 2, 3, 4, 5].map((i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-2xl shadow-lg p-5 flex flex-col md:flex-row items-center gap-4 border border-gray-100"
              >
                {/* أيقونة الشخص */}
                <div className="w-16 h-16 bg-gradient-to-br from-[#B8D8E8] to-[#A2CBE2] rounded-2xl grid place-items-center flex-shrink-0 shadow-inner">
                  <User className="w-8 h-8 text-[#00538C]" />
                </div>

                {/* النص */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-base md:text-lg font-bold mb-1 truncate">
                    {t("about.cases.item.name")}
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm truncate">
                    {t("about.cases.item.context")}
                  </p>
                  <p className="text-gray-700 text-xs md:text-sm line-clamp-2">
                    {t("about.cases.item.paragraph")}
                  </p>
                </div>

                {/* زر التسجيل (play/pause) */}
                <button className="relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#00A3E0] to-[#0077B6] flex items-center justify-center shadow-md active:scale-95 transition">
                  {/* الحلقات الخارجية كأنها موجة تسجيل */}
                  <span className="absolute inset-0 rounded-full border-2 border-[#00A3E0] opacity-50 "></span>
                  {i % 2 === 0 ? (
                    <Pause className="w-6 h-6 md:w-7 md:h-7 text-white relative z-10" />
                  ) : (
                    <Play className="w-6 h-6 md:w-7 md:h-7 text-white relative z-10" />
                  )}
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* PARTNERS */}
      <Partners />

      <Footer />
    </div>
  );
}

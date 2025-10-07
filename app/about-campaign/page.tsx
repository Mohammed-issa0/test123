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
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="grid md:grid-cols-2 gap-4 p-6">
                  <div className="flex flex-col justify-center">
                    <div className="w-16 h-16 mb-4 bg-[#00A3E0] rounded-full flex items-center justify-center">
                      {i === 1 && <Heart className="w-8 h-8 text-white" />}
                      {i === 2 && <Utensils className="w-8 h-8 text-white" />}
                      {i === 3 && <Cross className="w-8 h-8 text-white" />}
                      {i === 4 && <Droplet className="w-8 h-8 text-white" />}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold mb-2">
                      {t(`about.offers.item${i}.title`)}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {t(`about.offers.item${i}.description`)}
                    </p>
                  </div>
                  <div className="relative h-40 sm:h-48 md:h-full rounded-lg overflow-hidden">
                    <Image
                      src={`/imgs/about-cam${i}.png`}
                      alt={t(`about.offers.item${i}.title`)}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
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
                className="bg-white rounded-lg shadow-lg p-5 flex flex-col md:flex-row items-center gap-4"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 bg-[#B8D8E8] rounded-lg grid place-items-center flex-shrink-0">
                  <User className="w-7 h-7 md:w-8 md:h-8 text-[#00538C]" />
                </div>
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
                <button className="w-10 h-10 md:w-12 md:h-12 bg-[#00A3E0] rounded-full grid place-items-center flex-shrink-0">
                  {i % 2 === 0 ? (
                    <Pause className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  ) : (
                    <Play className="w-5 h-5 md:w-6 md:h-6 text-white" />
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

"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import Image from "next/image";
import most1 from "@/public/imgs/most1.png";
import most2 from "@/public/imgs/most2.png";
import most3 from "@/public/imgs/most3.png";
import SeriesOfEvents from "@/components/SeriesOfEvents";
import { useLanguage } from "@/contexts/language-provider";

export default function ElFasherPage() {
  const { t } = useLanguage();

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } },
    viewport: { once: true },
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* About The City Of El Fasher Section */}
      <section className="bg-[#E8F4F8] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1a1a1a] mb-6 flex items-center gap-2">
                <span className="text-[#F5A623]">◆</span>
                {t("hero.title")}
              </h2>
              <p className="text-[#1a1a1a] leading-relaxed text-lg">
                {t("hero.body")}
              </p>
            </motion.div>

            {/* Right: Map Image */}
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <div className="relative w-full h-[400px]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/map1-RhiF5sX0tfSHdg2VjWstvCTYPYObFp.png"
                  alt={t("hero.mapAlt")}
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Series Of Events Section */}
      <SeriesOfEvents />

      {/* Prominent Landmarks Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-2">
              {t("landmarks.heading.small")}
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] flex items-center justify-center gap-2">
              <span className="text-[#F5A623]">◆</span>
              {t("landmarks.heading.main")}
              <span className="text-[#F5A623]">◆</span>
            </h2>
          </motion.div>

          <motion.div
            {...staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {/* Nierti Waterfalls */}
            <motion.div
              {...fadeInUp}
              className="group relative overflow-hidden h-[500px] cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={most1}
                alt={t("landmarks.1.alt")}
                fill
                className="object-cover"
              />

              <div className="absolute top-8 left-8 right-8">
                <h3 className="text-[#096394] text-3xl font-bold mb-2">
                  {t("landmarks.1.title1")}
                </h3>
                <h4 className="text-[#096394] text-3xl font-bold text-center mr-[100px]">
                  {t("landmarks.1.title2")}
                </h4>
              </div>
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-white text-sm leading-relaxed">
                  {t("landmarks.1.desc")}
                </p>
              </div>
            </motion.div>

            {/* Al Fashir Lake */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.1 }}
              className="group relative overflow-hidden h-[500px] cursor-pointer"
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src={most2}
                alt={t("landmarks.2.alt")}
                fill
                className="object-cover"
              />

              <div className="absolute top-8 left-8 right-8">
                <h3 className="text-[#096394] text-3xl font-bold mb-2">
                  {t("landmarks.2.title1")}
                </h3>
                <h4 className="text-[#096394] text-3xl font-bold text-center mr-[100px]">
                  {t("landmarks.2.title2")}
                </h4>
              </div>
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-white text-sm leading-relaxed">
                  {t("landmarks.2.desc")}
                </p>
              </div>
            </motion.div>

            {/* Murra Mount */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="group relative overflow-hidden h-[500px] cursor-pointer"
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src={most3}
                alt={t("landmarks.3.alt")}
                fill
                className="object-cover"
              />

              <div className="absolute top-8 left-8 right-8">
                <h3 className="text-[#096394] text-3xl font-bold mb-2">
                  {t("landmarks.3.title1")}
                </h3>
                <h4 className="text-[#096394] text-3xl font-bold text-center mr-[100px]">
                  {t("landmarks.3.title2")}
                </h4>
              </div>
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-white text-sm leading-relaxed">
                  {t("landmarks.3.desc")}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-7xl md:text-8xl font-bold text-[#00A3E0] mb-8">
              {t("stats.value")}
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-4 flex items-center justify-center gap-2">
              <span className="text-[#F5A623]">◆</span>
              {t("stats.title")}
              <span className="text-[#F5A623]">◆</span>
            </h3>
            <p className="text-[#1a1a1a] text-lg max-w-3xl mx-auto">
              {t("stats.body")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 md:py-24 bg-[#F3F7FD]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            {...fadeInUp}
            className="text-3xl md:text-4xl font-bold text-[#1a1a1a] text-center mb-12 flex items-center justify-center gap-2"
          >
            <span className="text-[#F5A623]">◆</span>
            {t("reviews.title")}
            <span className="text-[#F5A623]">◆</span>
          </motion.h2>

          <motion.div
            {...staggerContainer}
            className="grid md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {Array.from({ length: 7 }).map((_, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.05 }}
                className="bg-white p-6 shadow-md"
              >
                {/* Star Rating (white fill + black stroke) */}
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <svg
                      key={starIndex}
                      className="w-5 h-5"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        fill="white"
                        stroke="black"
                        strokeWidth="2"
                      />
                    </svg>
                  ))}
                </div>

                {/* Review Body */}
                <p className="text-[#1E1E1E] text-sm mb-4">
                  {t("reviews.body")}
                </p>

                {/* Reviewer Info */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-[#757575] font-semibold">
                    {t("reviews.reviewer")}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import mainPhoto from "@/public/imgs/first-photo.png";
import { useLanguage } from "@/contexts/language-provider";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full bg-white px-6 py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 lg:space-y-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-black text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-balance"
            >
              {t("hero.title.line1")}
              <br />
              {t("hero.title.line2")}
              <br />
              {t("hero.title.line3")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl text-pretty"
            >
              {t("hero.body")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-[#00A3E0] hover:bg-[#0088BD] text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 w-full sm:w-auto">
                  {t("hero.cta.donate")}
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  className="border-[#00A3E0] text-[#00A3E0] hover:bg-[#00A3E0] hover:text-white px-8 py-4 rounded-lg font-semibold text-lg bg-transparent w-full sm:w-auto"
                >
                  {t("hero.cta.about")}
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="relative w-full flex items-center justify-center lg:justify-end"
          >
            <Image
              src={mainPhoto}
              alt="Woman and child from El Fasher with Sudan map"
              className="w-full max-w-lg lg:max-w-xl object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

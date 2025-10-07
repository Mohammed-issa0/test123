"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import mainPhoto from "@/public/imgs/first-photo.png";
import { useLanguage } from "@/contexts/language-provider";
import Link from "next/link";
export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full bg-white px-6 py-8 md:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* موبايل: صورة أولاً ثم نص. ديسكتوب: نص يسار، صورة يمين */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* الصورة — أولاً على الموبايل، ثانيًا على الشاشات الكبيرة */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-1 lg:order-2 w-full flex items-center justify-center lg:justify-end"
          >
            <Image
              src={mainPhoto}
              alt="Woman and child from El Fasher with Sudan map"
              className="w-full max-w-md md:max-w-lg lg:max-w-xl object-contain"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          {/* النص — ثانيًا على الموبايل، أولاً على الشاشات الكبيرة */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1 space-y-5 lg:space-y-8 text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-black text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-balance text-start"
            >
              {t("hero.title.line1")}
              <br />
              {t("hero.title.line2")}
              <br />
              {t("hero.title.line3")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 text-start"
            >
              {t("hero.body")}
            </motion.p>

            {/* أزرار: جنب بعض على الموبايل، وتبقى مرنة على الشاشات الأكبر */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="grid grid-cols-2 gap-3 sm:flex sm:flex-row sm:justify-start"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button className="bg-[#00A3E0] hover:bg-[#0088BD] text-white px-6 py-3 rounded-lg font-semibold text-base md:text-lg w-full">
                  {t("hero.cta.donate")}
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button
                  variant="outline"
                  className="border-[#00A3E0] text-[#00A3E0] hover:bg-[#00A3E0] hover:text-white px-6 py-3 rounded-lg font-semibold text-base md:text-lg w-full"
                >
                  {t("hero.cta.about")}
                  <ChevronRight className="w-5 h-5 ms-2 hidden sm:inline-block" />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

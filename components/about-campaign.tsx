"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import about1 from "@/public/imgs/about1.png";
import about2 from "@/public/imgs/about2.png";
import { useLanguage } from "@/contexts/language-provider";

export function AboutCampaign() {
  const { t } = useLanguage();

  return (
    <section id="campaign" className="w-full px-6 py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* موبايل: عمود واحد بالترتيب (نص → صورة1 → صورة2)
            ديسكتوب: عمودين (صور يسار، نص يمين) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* النص — أولاً على الموبايل */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="order-1 md:order-2 space-y-6"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-[#465E72] text-lg"
            >
              {t("campaign.about.label")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-start gap-3"
            >
              <motion.span
                aria-hidden
                animate={{ rotate: [0, 360] }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 3,
                  ease: "easeInOut",
                }}
                className="text-[#F5A623] text-2xl"
              >
                ◆
              </motion.span>
              <h3 className="text-[#061923] text-3xl md:text-4xl font-bold">
                {t("campaign.about.title")}
              </h3>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-[#061923] text-base md:text-lg leading-relaxed"
            >
              {t("campaign.about.body")}
            </motion.p>
          </motion.div>

          {/* الصور — ثانيًا وثالثًا على الموبايل، يسار على الديسكتوب */}
          <motion.div
            initial={{ opacity: 0, x: -100, rotate: -5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            className="order-2 md:order-1 rounded-2xl flex flex-col md:flex-row items-center justify-center gap-3"
          >
            {/* صورة 1 */}
            <Image
              src={about1}
              alt={t("campaign.about.img1Alt")}
              width={420}
              height={420}
              className="h-auto w-full max-w-sm md:max-w-none object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            {/* صورة 2 */}
            <Image
              src={about2}
              alt={t("campaign.about.img2Alt")}
              width={420}
              height={420}
              className="h-auto w-full max-w-sm md:max-w-none object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

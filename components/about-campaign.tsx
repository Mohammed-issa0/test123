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
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Images */}
          <motion.div
            initial={{ opacity: 0, x: -100, rotate: -5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            className="rounded-2xl flex justify-center items-center"
          >
            <Image
              src={about1}
              alt={t("campaign.about.img1Alt")}
              className="mr-1"
            />
            <Image src={about2} alt={t("campaign.about.img2Alt")} />
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="space-y-6"
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
        </div>
      </div>
    </section>
  );
}

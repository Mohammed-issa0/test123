"use client";

import cros1 from "@/public/imgs/red-crescent.png";
import cros2 from "@/public/imgs/red-cross.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-provider";

export default function Implementers() {
  const { t } = useLanguage();

  return (
    <section id="implementers" className="w-full px-6 py-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center md:justify-start gap-2 mb-8">
          <motion.span
            aria-hidden
            initial={{ rotate: 0, opacity: 0 }}
            whileInView={{ rotate: 360, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="text-[#F5A623] text-2xl"
          >
            ◆
          </motion.span>
          <h2 className="text-[#061923] text-2xl md:text-3xl font-bold">
            {t("implementers.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Red Crescent */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center gap-3 p-4 rounded-xl border border-[#E8EDF2] shadow-sm bg-white"
          >
            <Image
              src={cros1}
              alt={t("implementers.crescent.alt")}
              className="shrink-0"
              width={56}
              height={56}
            />
            <div className="flex flex-col">
              <div className="font-semibold text-[#061923] text-base md:text-lg">
                {t("implementers.crescent.name")}
              </div>
              <div className="text-[#7E7E7E] text-sm md:text-base">
                {t("implementers.crescent.desc")}
              </div>
            </div>
          </motion.div>

          {/* Red Cross */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="flex items-center gap-3 p-4 rounded-xl border border-[#E8EDF2] shadow-sm bg-white"
          >
            <Image
              src={cros2}
              alt={t("implementers.cross.alt")}
              className="shrink-0"
              width={56}
              height={56}
            />
            <div className="flex flex-col">
              <div className="font-semibold text-[#061923] text-base md:text-lg">
                {t("implementers.cross.name")}
              </div>
              <div className="text-[#7E7E7E] text-sm md:text-base">
                {t("implementers.cross.desc")}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:flex items-center justify-center p-4 rounded-xl border border-dashed border-[#E8EDF2] text-[#7E7E7E]"
          >
            {t("implementers.placeholder")}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

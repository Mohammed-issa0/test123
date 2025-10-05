"use client";

import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Droplet from "@/public/imgs/water-drop.png";
import Utensils from "@/public/imgs/fork.png";
import Cross from "@/public/imgs/medical.png";
import Heart from "@/public/imgs/heart-plus.png";
import Image from "next/image";
import { useLanguage } from "@/contexts/language-provider";

const items = [
  { id: "water", icon: Droplet, altKey: "projects.items.water.alt" },
  { id: "food", icon: Utensils, altKey: "projects.items.food.alt" },
  { id: "medical", icon: Cross, altKey: "projects.items.medical.alt" },
  { id: "psych", icon: Heart, altKey: "projects.items.psych.alt" },
];

export function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="w-full px-6 py-16 md:py-24 bg-[#F8FCFF]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#061923] text-2xl md:text-3xl font-bold mb-6"
          >
            {t("projects.title")}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center gap-3 mb-6"
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
              className="text-[#F5A623] text-xl"
            >
              ◆
            </motion.span>
            <h3 className="text-[#061923] text-2xl md:text-3xl font-bold">
              {t("projects.subtitle")}
            </h3>
            <motion.span
              aria-hidden
              animate={{ rotate: [0, -360] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: 3,
                ease: "easeInOut",
              }}
              className="text-[#F5A623] text-xl"
            >
              ◆
            </motion.span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-[#061923] text-base md:text-lg leading-relaxed max-w-4xl mx-auto"
          >
            {t("projects.lead")}
          </motion.p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {items.map((it, index) => (
            <motion.div
              key={it.id}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.2,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
              }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all flex flex-col justify-around"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.2 }}
                className="w-16 h-16 flex items-center justify-center mb-4 mx-auto md:mx-0"
              >
                <Image
                  src={it.icon}
                  alt={t(it.altKey)}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </motion.div>

              <h4 className="text-[#061923] text-xl font-bold mb-3 text-center md:text-start">
                {t(`projects.items.${it.id}.title`)}
              </h4>

              <p className="text-[#07334A] text-sm leading-relaxed mb-4 text-center md:text-start">
                {t(`projects.items.${it.id}.desc`)}
              </p>

              <motion.button
                whileHover={{ x: 5 }}
                className="text-[#02273B] text-sm font-semibold flex items-center justify-center md:justify-end gap-1 hover:gap-2 transition-all w-full"
              >
                {t("projects.readMore")}
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Show All Projects Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              className="border-2 border-[#061923] text-[#061923] hover:bg-[#061923] hover:text-white px-8 py-3 rounded-lg font-semibold bg-transparent"
            >
              {t("projects.showAll")}
              <ChevronRight className="w-5 h-5 ms-2" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

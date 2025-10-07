// AboutCampaignRadial.tsx (with i18n)
// Radial section fully translated using useLanguage() with flat keys

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Droplet,
  Utensils,
  Cross,
  Users,
  BookOpen,
  Goal,
  Heart,
  MessageSquare,
  Eye,
} from "lucide-react";
import { useLanguage } from "@/contexts/language-provider";
import cam1 from "@/public/cam1.png";
import cam2 from "@/public/cam2.png";
import cam3 from "@/public/cam3.png";
import cam4 from "@/public/cam4.png";
const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" },
};

function Diamond() {
  return <span className="text-[#F5A623] inline-block align-middle">◆</span>;
}

export default function AboutCampaignRadial() {
  const { t } = useLanguage();

  // Build items from translation keys (flat, predictable)
  const items = [
    {
      id: "goals",
      title: t("about.campaign.goals.title"),
      copy: t("about.campaign.goals.copy"),
      side: "right" as const,
      angle: -45, // 2 o'clock
      Icon: Goal,
    },
    {
      id: "services",
      title: t("about.campaign.services.title"),
      copy: t("about.campaign.services.copy"),
      side: "left" as const,
      angle: -140, // 8 o'clock
      Icon: Users,
    },

    {
      id: "values",
      title: t("about.campaign.values.title"),
      copy: t("about.campaign.values.copy"),
      side: "left" as const,
      angle: -180, // 7 o'clock
      Icon: Heart,
    },
    {
      id: "who",
      title: t("about.campaign.who.title"),
      copy: t("about.campaign.who.copy"),
      side: "right" as const,
      angle: 135, // 5 o'clock
      Icon: Droplet,
    },
    {
      id: "vision",
      title: t("about.campaign.vision.title"),
      copy: t("about.campaign.vision.copy"),
      side: "left" as const,
      angle: 45, // 5 o'clock
      Icon: Eye,
    },
    {
      id: "mission",
      title: t("about.campaign.mission.title"),
      copy: t("about.campaign.mission.copy"),
      side: "right" as const,
      angle: 0, // 5 o'clock
      Icon: Goal,
    },
  ];

  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-10 py-14 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          {...fadeInUp}
          className="text-center text-[22px] sm:text-3xl md:text-4xl font-bold mb-8 md:mb-14 text-[#1a1a1a]"
        >
          <Diamond />{" "}
          <span className="mx-2">{t("about.campaign.heading")}</span>{" "}
          <Diamond />
        </motion.h2>

        {/* Mobile: stack list */}
        <div className="md:hidden space-y-8">
          {/* Logo */}
          <div className="relative w-52 h-52 mx-auto mb-2">
            <div className="absolute inset-0 rounded-full border-4 border-[#00538C]" />
            <div className="absolute inset-[20%] rounded-full border border-[#D7E6EF]" />
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src="/imgs/bigLogo.png"
                alt={t("about.campaign.logoAlt")}
                width={120}
                height={120}
                className="opacity-90"
              />
            </div>
          </div>

          {items.map(({ id, title, copy, Icon }) => (
            <motion.div key={id} {...fadeInUp}>
              <h3 className="text-[#00538C] font-bold text-xl mb-2 text-center">
                <Diamond /> <span className="mx-2">{title}</span> <Diamond />
              </h3>
              <p className="text-gray-600 text-sm text-center max-w-[34ch] mx-auto">
                {copy}
              </p>
              <div className="mt-3 flex justify-center">
                <span className="w-9 h-9 rounded-full bg-[#B8D8E8] grid place-items-center">
                  <Icon className="w-4 h-4 text-[#00538C]" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop / Tablet: radial layout */}
        <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-10 items-center">
          {/* LEFT TEXTS */}
          <div className="space-y-12">
            {items
              .filter((i) => i.side === "left")
              .map(({ id, title, copy }) => (
                <motion.div key={id} {...fadeInUp} className="text-left">
                  <h3 className="text-[#1E4A86] text-2xl font-bold mb-2">
                    <Diamond /> <span className="ml-2">{title}</span>
                  </h3>
                  <p className="text-gray-600 leading-relaxed max-w-sm text-sm">
                    {copy}
                  </p>
                </motion.div>
              ))}
          </div>

          {/* CIRCLE */}
          <div className="relative mx-auto">
            <div className="relative w-[420px] h-[420px] lg:w-[460px] lg:h-[460px]">
              {/* main ring */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, type: "spring" }}
                className="absolute inset-0 rounded-full border-[6px] border-[#00538C] shadow-[0_0_0_6px_rgba(0,83,140,0.06)]"
              />

              {/* center mark */}
              <div className="absolute inset-0 grid place-items-center">
                <Image
                  src="/imgs/bigLogo.png"
                  alt={t("about.campaign.logoAlt")}
                  width={160}
                  height={160}
                  className="opacity-95"
                />
              </div>

              {/* orbiting small icon nodes */}
              {items.map(({ id, angle, Icon }, idx) => (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="absolute"
                  style={{
                    left: `calc(50% + ${
                      Math.cos((angle * Math.PI) / 180) * 46
                    }% - 20px)`,
                    top: `calc(50% + ${
                      Math.sin((angle * Math.PI) / 180) * 46
                    }% - 20px)`,
                  }}
                >
                  <motion.span
                    animate={{ y: [0, -3, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 2.6,
                      delay: idx * 0.12,
                    }}
                    className="w-10 h-10 rounded-full bg-[#B8D8E8] grid place-items-center shadow-sm"
                  >
                    <Icon className="w-5 h-5 text-[#00538C]" />
                  </motion.span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT TEXTS */}
          <div className="space-y-12">
            {items
              .filter((i) => i.side === "right")
              .map(({ id, title, copy }) => (
                <motion.div key={id} {...fadeInUp} className="">
                  <h3 className="text-[#1E4A86] text-2xl font-bold mb-2">
                    <span className="ml-1">
                      <Diamond />
                    </span>
                    {title}{" "}
                  </h3>
                  <p className="text-gray-600 leading-relaxed max-w-sm text-sm ml-auto">
                    {copy}
                  </p>
                </motion.div>
              ))}
          </div>
        </div>

        {/* Centered message below ring */}
        <motion.div {...fadeInUp} className="mt-12 md:mt-16">
          <h3 className="text-[#1E4A86] text-2xl md:text-3xl font-bold text-center mb-2">
            <Diamond />{" "}
            <span className="mx-2">{t("about.campaign.message.title")}</span>{" "}
            <Diamond />
          </h3>
          <p className="text-gray-700 text-center text-sm md:text-base max-w-2xl mx-auto">
            {t("about.campaign.message.copy")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

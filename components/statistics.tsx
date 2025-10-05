"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart } from "lucide-react";
import boy from "@/public/imgs/boy.png";
import { useLanguage } from "@/contexts/language-provider";

export function Statistics() {
  const { t } = useLanguage();

  // مصدر موحد للنصوص/الأرقام
  const stats = [
    {
      id: "top-left",
      number: t("stats.topLeft.number"),
      label: t("stats.topLeft.label"),
    },
    {
      id: "bottom-left",
      number: t("stats.bottomLeft.number"),
      label: t("stats.bottomLeft.label"),
    },
    {
      id: "top-right",
      number: t("stats.topRight.number"),
      label: t("stats.topRight.label"),
    },
    {
      id: "bottom-right",
      number: t("stats.bottomRight.number"),
      label: t("stats.bottomRight.label"),
    },
  ];

  return (
    <section className="w-full px-6 py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative min-h-[520px] md:min-h-[700px] flex items-center justify-center">
          {/* Center Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
            animate={{ y: [0, -10, 0] }}
            style={{
              animationDuration: "3s",
              animationIterationCount: "infinite",
            }}
            className="relative"
          >
            <Image
              src={boy}
              alt={t("stats.heroAlt")}
              width={800}
              height={800}
              className="w-full max-w-xl md:max-w-2xl h-auto"
              priority
            />
          </motion.div>

          {/* ====== Floating Statistics (md+ screens) ====== */}
          {/* Top Left */}
          <motion.div
            initial={{ opacity: 0, x: -100, y: 100, scale: 0.5 }}
            whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            animate={{ y: [0, -15, 0] }}
            style={{
              animationDuration: "4s",
              animationIterationCount: "infinite",
            }}
            whileHover={{ scale: 1.1, rotate: 2 }}
            className="hidden md:flex absolute top-[15%] left-[5%] md:left-[10%] items-start gap-4"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 border-4 border-white shadow-lg"
            >
              <Heart className="w-6 h-6 text-white fill-white" />
            </motion.div>
            <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-xs flex justify-around gap-2 items-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-[#E5A910] text-4xl font-bold mb-2"
              >
                {stats[0].number}
              </motion.div>
              <p className="text-[#061923] text-sm font-medium leading-tight">
                {stats[0].label}
              </p>
            </div>
          </motion.div>

          {/* Bottom Left */}
          <motion.div
            initial={{ opacity: 0, x: -100, y: -100, scale: 0.5 }}
            whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            animate={{ y: [0, 15, 0] }}
            style={{
              animationDuration: "3.5s",
              animationIterationCount: "infinite",
            }}
            whileHover={{ scale: 1.1, rotate: -2 }}
            className="hidden md:flex absolute bottom-[20%] left-[5%] md:left-[10%] items-start gap-4"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 border-4 border-white shadow-lg"
            >
              <Heart className="w-6 h-6 text-white fill-white" />
            </motion.div>
            <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-xs flex justify-around gap-2 items-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="text-[#E5A910] text-4xl font-bold mb-2"
              >
                {stats[1].number}
              </motion.div>
              <p className="text-[#061923] text-sm font-medium leading-tight">
                {stats[1].label}
              </p>
            </div>
          </motion.div>

          {/* Top Right */}
          <motion.div
            initial={{ opacity: 0, x: 100, y: 100, scale: 0.5 }}
            whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            animate={{ y: [0, -12, 0] }}
            style={{
              animationDuration: "4.5s",
              animationIterationCount: "infinite",
            }}
            whileHover={{ scale: 1.1, rotate: -2 }}
            className="hidden md:flex absolute top-[15%] right-[5%] md:right-[10%] items-start gap-4 flex-row-reverse"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1,
              }}
              className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 border-4 border-white shadow-lg"
            >
              <Heart className="w-6 h-6 text-white fill-white" />
            </motion.div>
            <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-xs flex justify-around gap-2 items-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="text-[#E5A910] text-4xl font-bold mb-2"
              >
                {stats[2].number}
              </motion.div>
              <p className="text-[#061923] text-sm font-medium leading-tight">
                {stats[2].label}
              </p>
            </div>
          </motion.div>

          {/* Bottom Right */}
          <motion.div
            initial={{ opacity: 0, x: 100, y: -100, scale: 0.5 }}
            whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
            animate={{ y: [0, 12, 0] }}
            style={{
              animationDuration: "3.8s",
              animationIterationCount: "infinite",
            }}
            whileHover={{ scale: 1.1, rotate: 2 }}
            className="hidden md:flex absolute bottom-[20%] right-[5%] md:right-[10%] items-start gap-4 flex-row-reverse"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1.5,
              }}
              className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 border-4 border-white shadow-lg"
            >
              <Heart className="w-6 h-6 text-white fill-white" />
            </motion.div>
            <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-xs flex justify-around gap-2 items-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className="text-[#E5A910] text-4xl font-bold mb-2"
              >
                {stats[3].number}
              </motion.div>
              <p className="text-[#061923] text-sm font-medium leading-tight">
                {stats[3].label}
              </p>
            </div>
          </motion.div>

          {/* ====== Mobile Friendly List (shown on < md) ====== */}
          <div className="md:hidden w-full absolute -bottom-6 left-0 px-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {stats.map((s, idx) => (
                <div
                  key={s.id}
                  className="bg-white/95 backdrop-blur-sm rounded-lg shadow-md border border-[#E8EDF2] p-4 flex items-center gap-3"
                >
                  <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center border-4 border-white shadow">
                    <Heart className="w-5 h-5 text-white fill-white" />
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-[#E5A910] text-2xl font-bold">
                      {s.number}
                    </div>
                    <div className="text-[#061923] text-sm leading-tight">
                      {s.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* ====== /Mobile ====== */}
        </div>
      </div>
    </section>
  );
}

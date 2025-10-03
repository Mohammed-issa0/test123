"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart } from "lucide-react";
import boy from "@/public/imgs/boy.png";
const stats = [
  {
    number: "15",
    label: "Carried Out 15 Medical Campaigns Benefiting Thousands Of Children.",
    position: "top-left",
  },
  {
    number: "3k+",
    label: "Sponsored Over 3,000 Orphaned Children.",
    position: "bottom-left",
  },
  {
    number: "20k+",
    label: "Distributed 20,000 School Bags With Supplies.",
    position: "top-right",
  },
  {
    number: "15",
    label: "Carried Out 15 Medical Campaigns Benefiting Thousands Of Children.",
    position: "bottom-right",
  },
];

export function Statistics() {
  return (
    <section className="w-full px-6 py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center">
          {/* Center Image - Boy */}
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
              alt="Statistics"
              width={800}
              height={800}
              className="w-full max-w-2xl h-auto"
            />
          </motion.div>

          {/* Floating Statistics */}
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
            className="absolute top-[15%] left-[5%] md:left-[10%] flex items-start gap-4"
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
                15
              </motion.div>
              <p className="text-[#061923] text-sm font-medium leading-tight">
                Carried Out 15 Medical Campaigns Benefiting Thousands Of
                Children.
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
            className="absolute bottom-[20%] left-[5%] md:left-[10%] flex items-start gap-4"
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
                3k+
              </motion.div>
              <p className="text-[#061923] text-sm font-medium leading-tight">
                Sponsored Over 3,000 Orphaned Children.
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
            className="absolute top-[15%] right-[5%] md:right-[10%] flex items-start gap-4 flex-row-reverse"
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
            <div className="hidden md:flex bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-xs  flex justify-around gap-2 items-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="text-[#E5A910] text-4xl font-bold mb-2"
              >
                20k+
              </motion.div>
              <p className="text-[#061923] text-sm font-medium leading-tight">
                Distributed 20,000 School Bags With Supplies.
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
            className=" absolute bottom-[20%] right-[5%] md:right-[10%] flex items-start gap-4 flex-row-reverse"
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
            <div className="hidden md:flex bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-xs flex justify-around gap-2 items-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className="text-[#E5A910] text-4xl font-bold mb-2"
              >
                15
              </motion.div>
              <p className="text-[#061923] text-sm font-medium leading-tight">
                Carried Out 15 Medical Campaigns Benefiting Thousands Of
                Children.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

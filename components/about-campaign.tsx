"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import about from "@/public/imgs/sec.png";
export function AboutCampaign() {
  return (
    <section id="campaign" className="w-full px-6 py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center justify-">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -100, rotate: -5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            className="relative rounded-2xl "
          >
            <Image src={about} className="" />
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
              About The Campaign
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
                Hope Campaign For The People Of El Fasher
              </h3>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-[#061923] text-base md:text-lg leading-relaxed"
            >
              A Humanitarian Campaign Aims To Raise Funds To Support Affected
              Families In South Sudan's El Fasher, By Providing Them With Food,
              Medicine, And Shelter, And Restoring Hope For A Decent Life.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

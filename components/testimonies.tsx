"use client";

import { ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/contexts/language-provider";

type TestimonyItem = {
  titleKey: string;
  descKey: string;
  altKey: string;
  thumbnail: string; // من public/
};

const testimonies: TestimonyItem[] = [
  {
    titleKey: "testimonies.items.0.title",
    descKey: "testimonies.items.0.desc",
    altKey: "testimonies.items.0.alt",
    thumbnail: "/grateful-family-sudan.jpg",
  },
  {
    titleKey: "testimonies.items.1.title",
    descKey: "testimonies.items.1.desc",
    altKey: "testimonies.items.1.alt",
    thumbnail: "/father-with-children-sudan.jpg",
  },
  {
    titleKey: "testimonies.items.2.title",
    descKey: "testimonies.items.2.desc",
    altKey: "testimonies.items.2.alt",
    thumbnail: "/child-student-sudan.jpg",
  },
  {
    titleKey: "testimonies.items.3.title",
    descKey: "testimonies.items.3.desc",
    altKey: "testimonies.items.3.alt",
    thumbnail: "/mother-children-sudan-hope.jpg",
  },
];

export function Testimonies() {
  const { t } = useLanguage();

  return (
    <section className="w-full px-6 py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* العنوان */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3">
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
            <h2 className="text-[#061923] text-3xl md:text-4xl font-bold">
              {t("testimonies.title")}
            </h2>
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
          </div>
        </motion.div>

        {/* الشبكة متوافقة مع الموبايل: 1 → 2 → 4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {testimonies.map((item, index) => (
            <motion.div
              key={item.titleKey}
              initial={{ opacity: 0, y: 60, rotateY: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              whileHover={{
                y: -15,
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
              }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-100"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.thumbnail || "/placeholder.svg"}
                  alt={t(item.altKey)}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover"
                  priority={index === 0}
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors"
                  aria-label={t("testimonies.play")}
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                    className="w-16 h-16 bg-[#1F88C1] rounded-full flex items-center justify-center border-4 border-white shadow-lg"
                  >
                    <Play className="w-7 h-7 text-white ms-1" fill="white" />
                  </motion.div>
                </motion.button>
              </div>

              <div className="p-5">
                <h4 className="text-[#061923] text-base font-bold mb-2 line-clamp-2 leading-tight">
                  {t(item.titleKey)}
                </h4>
                <p className="text-[#061923] text-sm leading-relaxed mb-4 line-clamp-3">
                  {t(item.descKey)}
                </p>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="text-[#1F88C1] text-sm font-semibold flex items-center justify-end w-full gap-1 hover:gap-2 transition-all"
                  aria-label={t("testimonies.watch")}
                >
                  {t("testimonies.watch")}
                  <ChevronRight className="w-4 h-4 ms-1" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* زر استكشاف الكل */}
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
              {t("testimonies.exploreAll")}
              <ChevronRight className="w-5 h-5 ms-2" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

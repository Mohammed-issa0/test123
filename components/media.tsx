"use client";

import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/contexts/language-provider";

type MediaItem = {
  dateKey: string;
  titleKey: string;
  descKey: string;
  altKey: string;
  image: string; // من public/
};

const articles: MediaItem[] = [
  {
    dateKey: "media.items.0.date",
    titleKey: "media.items.0.title",
    descKey: "media.items.0.desc",
    altKey: "media.items.0.alt",
    image: "/happy-child-eating-school-meal.jpg",
  },
  {
    dateKey: "media.items.1.date",
    titleKey: "media.items.1.title",
    descKey: "media.items.1.desc",
    altKey: "media.items.1.alt",
    image: "/smiling-girl-school-uniform.jpg",
  },
  {
    dateKey: "media.items.2.date",
    titleKey: "media.items.2.title",
    descKey: "media.items.2.desc",
    altKey: "media.items.2.alt",
    image: "/diverse-children-learning.png",
  },
];

export function Media() {
  const { t } = useLanguage();

  return (
    <section id="media" className="w-full px-6 py-16 md:py-24 bg-[#F5F5F5]">
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
              {t("media.title")}
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

        {/* الشبكة — متوافقة مع الموبايل */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {articles.map((article, index) => (
            <motion.div
              key={article.titleKey}
              initial={{ opacity: 0, y: 60, rotateX: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              whileHover={{
                y: -12,
                scale: 1.03,
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
              }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.25 }}
                className="relative aspect-video overflow-hidden"
              >
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={t(article.altKey)}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                  priority={index === 0}
                />
              </motion.div>

              <div className="p-6">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-[#061923] text-sm font-medium mb-3"
                >
                  {t(article.dateKey)}
                </motion.div>
                <h4 className="text-[#061923] text-xl font-bold mb-3 line-clamp-2">
                  {t(article.titleKey)}
                </h4>
                <p className="text-[#061923] text-sm leading-relaxed mb-4 line-clamp-2">
                  {t(article.descKey)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* زر استعراض الكل */}
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
              className="border-1 border-[#061923] text-[#061923] hover:bg-[#061923] hover:text-white px-8 py-3 rounded-lg font-semibold bg-transparent"
            >
              {t("media.exploreAll")}
              <ChevronRight className="w-5 h-5 ms-2" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

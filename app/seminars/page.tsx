"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-provider";

export default function SeminarsPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-6 mb-16"
        >
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0B2F3A] mb-6 flex items-center justify-center gap-3">
              <span className="text-[#F5A623]">◆</span>
              {t("seminars.title")}
              <span className="text-[#F5A623]">◆</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t("seminars.subtitle")}
            </p>
          </div>
        </motion.section>

        {/* Certificates Section */}
        <section className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#0B2F3A] mb-12 text-center flex items-center justify-center gap-3"
          >
            <span className="text-[#F5A623]">◆</span>
            {t("seminars.certificatesTitle")}
            <span className="text-[#F5A623]">◆</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example of 3 seminar cards */}
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-video bg-gray-200 group cursor-pointer">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: "url(/seminar-video-thumbnail.jpg)",
                    }}
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play
                        className="w-8 h-8 text-[#00A3E0] ml-1"
                        fill="currentColor"
                      />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">
                    {t(`seminars.item${i}.date`)}
                  </p>
                  <h3 className="text-lg font-bold text-[#0B2F3A] mb-3">
                    {t(`seminars.item${i}.title`)}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {t(`seminars.item${i}.description`)}
                  </p>
                  <div className="flex gap-3">
                    <Button
                      variant="default"
                      className="flex-1 bg-[#00A3E0] hover:bg-[#0088BB]"
                    >
                      {t("seminars.watch")}
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 border-[#00A3E0] text-[#00A3E0] hover:bg-[#00A3E0]/10 bg-transparent"
                    >
                      {t("seminars.details")}
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-video bg-gray-200 group cursor-pointer">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: "url(/seminar-video-thumbnail.jpg)",
                    }}
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play
                        className="w-8 h-8 text-[#00A3E0] ml-1"
                        fill="currentColor"
                      />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">
                    {t(`seminars.item${i}.date`)}
                  </p>
                  <h3 className="text-lg font-bold text-[#0B2F3A] mb-3">
                    {t(`seminars.item${i}.title`)}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {t(`seminars.item${i}.description`)}
                  </p>
                  <div className="flex gap-3">
                    <Button
                      variant="default"
                      className="flex-1 bg-[#00A3E0] hover:bg-[#0088BB]"
                    >
                      {t("seminars.watch")}
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 border-[#00A3E0] text-[#00A3E0] hover:bg-[#00A3E0]/10 bg-transparent"
                    >
                      {t("seminars.details")}
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-video bg-gray-200 group cursor-pointer">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: "url(/seminar-video-thumbnail.jpg)",
                    }}
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play
                        className="w-8 h-8 text-[#00A3E0] ml-1"
                        fill="currentColor"
                      />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">
                    {t(`seminars.item${i}.date`)}
                  </p>
                  <h3 className="text-lg font-bold text-[#0B2F3A] mb-3">
                    {t(`seminars.item${i}.title`)}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {t(`seminars.item${i}.description`)}
                  </p>
                  <div className="flex gap-3">
                    <Button
                      variant="default"
                      className="flex-1 bg-[#00A3E0] hover:bg-[#0088BB]"
                    >
                      {t("seminars.watch")}
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 border-[#00A3E0] text-[#00A3E0] hover:bg-[#00A3E0]/10 bg-transparent"
                    >
                      {t("seminars.details")}
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

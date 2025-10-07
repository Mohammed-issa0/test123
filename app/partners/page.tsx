"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/contexts/language-provider";

export default function PartnersPage() {
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
              {t("partners.title")}
              <span className="text-[#F5A623]">◆</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t("partners.subtitle")}
            </p>
          </div>
        </motion.section>

        {/* Partners Grid */}
        <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          {/* SIEMENS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-center mb-6 h-20">
              <Image
                src="/siemens-logo.jpg"
                alt={t("partners.siemens.name")}
                width={200}
                height={80}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-bold text-[#0B2F3A] mb-4">
              {t("partners.siemens.headline")}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t("partners.siemens.description")}
            </p>
          </motion.div>

          {/* CAP ACCREDITED */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-center mb-6 h-20">
              <Image
                src="/cap-accredited-logo.jpg"
                alt={t("partners.capAccredited.name")}
                width={200}
                height={80}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-bold text-[#0B2F3A] mb-4">
              {t("partners.capAccredited.headline")}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t("partners.capAccredited.description")}
            </p>
          </motion.div>

          {/* Ministry of Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-center mb-6 h-20">
              <Image
                src="/ministry-of-education-logo.jpg"
                alt={t("partners.ministryEducation.name")}
                width={200}
                height={80}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-bold text-[#0B2F3A] mb-4">
              {t("partners.ministryEducation.headline")}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t("partners.ministryEducation.description")}
            </p>
          </motion.div>

          {/* Ministry of Health */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-center mb-6 h-20">
              <Image
                src="/ministry-of-health-logo.jpg"
                alt={t("partners.ministryHealth.name")}
                width={200}
                height={80}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-bold text-[#0B2F3A] mb-4">
              {t("partners.ministryHealth.headline")}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t("partners.ministryHealth.description")}
            </p>
          </motion.div>

          {/* BACS RIYADH METRO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-center mb-6 h-20">
              <Image
                src="/bacs-riyadh-metro-logo.jpg"
                alt={t("partners.bacsRiyadh.name")}
                width={200}
                height={80}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-bold text-[#0B2F3A] mb-4">
              {t("partners.bacsRiyadh.headline")}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t("partners.bacsRiyadh.description")}
            </p>
          </motion.div>

          {/* Beckman Coulter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-center mb-6 h-20">
              <Image
                src="/beckman-coulter-logo.jpg"
                alt={t("partners.beckmanCoulter.name")}
                width={200}
                height={80}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-bold text-[#0B2F3A] mb-4">
              {t("partners.beckmanCoulter.headline")}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t("partners.beckmanCoulter.description")}
            </p>
          </motion.div>

          {/* Al Rajhi Bank */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-center mb-6 h-20">
              <Image
                src="/al-rajhi-bank-logo.png"
                alt={t("partners.alRajhiBank.name")}
                width={200}
                height={80}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-bold text-[#0B2F3A] mb-4">
              {t("partners.alRajhiBank.headline")}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t("partners.alRajhiBank.description")}
            </p>
          </motion.div>

          {/* Saudi Electricity Company */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-center mb-6 h-20">
              <Image
                src="/saudi-electricity-company-logo.jpg"
                alt={t("partners.saudiElectricity.name")}
                width={200}
                height={80}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-bold text-[#0B2F3A] mb-4">
              {t("partners.saudiElectricity.headline")}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t("partners.saudiElectricity.description")}
            </p>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

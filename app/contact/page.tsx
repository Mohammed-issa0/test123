"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import map from "@/public/imgs/map.png";
import { motion } from "framer-motion";

import MapPin from "@/public/imgs/point.png";
import Phone from "@/public/imgs/phone.png";
import Mail from "@/public/imgs/email.png";
import Image from "next/image";
import { useLanguage } from "@/contexts/language-provider";

export default function ContactPage() {
  const { t, lang } = useLanguage();
  const isRTL = lang === "ar";

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
          {/* العنوان */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 md:mb-12"
          >
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#061923] flex items-center justify-center gap-3">
              <span className="text-[#F5A623]">◆</span>
              {t("contact.title")}
              <span className="text-[#F5A623]">◆</span>
            </h1>
          </motion.div>

          {/* اختيار الدولة: النص على اليمين والصندوق يساره في العربية */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="flex justify-center mb-10"
          >
            <div
              className={`flex items-center gap-4 ${
                isRTL ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <span className="text-[#061923] font-semibold whitespace-nowrap">
                {t("contact.country.label")}
              </span>
              <Select defaultValue="us">
                <SelectTrigger className="w-52 bg-[#F4F8FC]">
                  <SelectValue placeholder={t("contact.country.placeholder")} />
                </SelectTrigger>
                <SelectContent align="center">
                  <SelectItem value="us">
                    <div className="flex items-center gap-2">
                      <span>🇺🇸</span>
                      <span>{t("contact.country.us")}</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="sd">
                    <div className="flex items-center gap-2">
                      <span>🇸🇩</span>
                      <span>{t("contact.country.sd")}</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="ly">
                    <div className="flex items-center gap-2">
                      <span>🇱🇾</span>
                      <span>{t("contact.country.ly")}</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </motion.div>

          {/* معلومات التواصل */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 md:gap-6 mb-12"
          >
            {/* الموقع */}
            <div className="flex justify-around items-center text-center p-6 bg-white rounded-lg ">
              <div className="w-[40px] h-[40px] md:w-[60px] md:h-[60px] bg-white rounded-full flex items-center justify-center mb-3">
                <Image src={MapPin} alt="" width={60} height={60} />
              </div>
              <div>
                <h3 className="text-[#061923] font-bold text-lg mb-1">
                  {t("contact.cards.location.title")}
                </h3>
                <p className="text-[#07334A] text-sm leading-relaxed">
                  {t("contact.cards.location.line1")}
                  <br />
                  {t("contact.cards.location.line2")}
                </p>
              </div>
            </div>

            {/* الهاتف + الإيميل */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:col-span-2">
              {/* الهاتف */}
              <div className="flex  justify-around items-center text-center bg-white border-b-1 border-t-1 border-l-0 border-r-0 border-[#5E90B0]  md:border-l-2 md:border-r-2 md:border-[#5E90B0] md:border-t-0 md:border-b-0 py-2">
                <div className="w-[40px] h-[40px] md:w-[60px]  bg-white rounded-full flex items-center justify-center">
                  <Image src={Phone} alt="" width={60} height={60} />
                </div>
                <div>
                  <h3 className="text-[#061923] font-bold text-lg mb-1">
                    {t("contact.cards.phone.title")}
                  </h3>
                  <p className="text-[#07334A] text-sm leading-relaxed">
                    +1 (555) 010-1234
                    <br />
                    +1 (555) 010-1234
                  </p>
                </div>
              </div>

              {/* الإيميل */}
              <div className="flex justify-around items-center text-center p-6 bg-white rounded-lg ">
                <div className="w-[40px] h-[40px]  md:w-[60px] md:h-[60px] bg-white rounded-full flex items-center justify-center mb-3">
                  <Image src={Mail} alt="" width={60} height={60} />
                </div>
                <div>
                  <h3 className="text-[#061923] font-bold text-lg mb-1">
                    {t("contact.cards.email.title")}
                  </h3>
                  <p className="text-[#07334A] text-sm leading-relaxed break-all">
                    Info@Smilesofhope.Org
                    <br />
                    Info@Smilesofhope.Org
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* الخريطة + نموذج التواصل */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* النموذج */}
            <div className="space-y-4" dir={lang === "ar" ? "rtl" : "ltr"}>
              <h3 className="text-[#061923] font-bold text-lg md:text-xl mb-4">
                {t("contact.form.title")}
              </h3>

              <div className="">
                <label className="block text-[#061923] font-semibold mb-2">
                  {t("contact.form.nameLabel")}
                </label>
                <Input
                  placeholder={t("contact.form.namePh")}
                  className="text-end bg-[#F4F8FC]"
                  dir={isRTL ? "ltr" : "rtl"}
                />
              </div>

              <div className="">
                <label className="block text-[#061923] font-semibold mb-2">
                  {t("contact.form.emailLabel")}
                </label>
                <Input
                  type="email"
                  placeholder={t("contact.form.emailPh")}
                  className="text-end bg-[#F4F8FC]"
                  dir={isRTL ? "ltr" : "rtl"}
                />
              </div>

              <div className="">
                <label className="block text-[#061923] font-semibold mb-2">
                  {t("contact.form.messageLabel")}
                </label>
                <Textarea
                  placeholder={t("contact.form.messagePh")}
                  className="min-h-32 text-end bg-[#F4F8FC]"
                  dir={isRTL ? "ltr" : "rtl"}
                />
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button className="w-full bg-[#00A3E0] hover:bg-[#0088BD] text-white py-4 text-lg font-semibold rounded-lg">
                  {t("contact.form.send")}
                </Button>
              </motion.div>
            </div>
            {/* الخريطة */}
            <div className="rounded-lg overflow-hidden h-72 sm:h-80 md:h-96 border border-[#E8EDF2]">
              <Image
                src={map}
                alt={t("contact.mapAlt")}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

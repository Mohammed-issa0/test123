"use client";

import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/public/imgs/logo.png";
import Image from "next/image";
import { useLanguage } from "@/contexts/language-provider";

export function Navigation() {
  const { lang, setLang, t } = useLanguage();

  const toggleLang = () => setLang(lang === "en" ? "ar" : "en");

  return (
    <nav className="sticky z-50 top-0 flex flex-col items-center gap-5 px-6 md:px-12 lg:px-24 py-6 bg-white border-b-2 border-[#D8F1FD]">
      <div className="w-full max-w-7xl flex flex-row justify-between items-center gap-4">
        <button
          onClick={toggleLang}
          aria-label={t("nav.lang.switch")}
          className="flex items-center gap-1 text-[#061923] text-base font-semibold hover:text-[#00A3E0] transition-colors"
        >
          <span>{lang === "en" ? t("nav.lang.en") : t("nav.lang.ar")}</span>
          <ChevronDown className="w-4 h-4" />
        </button>

        <a
          href="#media"
          className="hidden md:block text-[#061923] text-base font-medium hover:text-[#00A3E0] transition-colors"
        >
          {t("nav.media")}
        </a>

        <a
          href="#campaign"
          className="hidden md:block text-[#061923] text-base font-medium hover:text-[#00A3E0] transition-colors"
        >
          {t("nav.campaign")}
        </a>

        <a href="#">
          <Image src={logo} alt="logo" priority />
        </a>

        <a
          href="#projects"
          className="hidden md:block text-[#061923] text-base font-medium hover:text-[#00A3E0] transition-colors"
        >
          {t("nav.projects")}
        </a>

        <a
          href="#implementers"
          className="hidden md:block text-[#061923] text-base font-medium hover:text-[#00A3E0] transition-colors"
        >
          {t("nav.implementers")}
        </a>

        <Button className="bg-[#00A3E0] hover:bg-[#0088BD] text-white px-8 py-3 rounded-lg font-semibold text-base">
          {t("nav.donate")}
        </Button>
      </div>
    </nav>
  );
}

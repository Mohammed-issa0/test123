"use client";

import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/public/imgs/logo.png";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/language-provider";
import Link from "next/link";
export function Navigation() {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  const toggleLang = () => setLang(lang === "en" ? "ar" : "en");

  // إغلاق القائمة عند الضغط خارجها أو زر Esc
  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      if (!panelRef.current) return;
      if (!panelRef.current.contains(e.target as Node)) setOpen(false);
    };
    const handleEsc = (e: KeyboardEvent) =>
      e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [open]);

  return (
    <nav className="sticky z-50 top-0 flex flex-col items-center gap-5 px-6 md:px-12 lg:px-24 py-6 bg-white border-b-2 border-[#D8F1FD]">
      <div className="w-full max-w-7xl flex flex-row justify-between items-center gap-4">
        {/* زر اللغة */}
        <button
          onClick={toggleLang}
          aria-label={t("nav.lang.switch")}
          className="flex items-center gap-1 text-[#061923] text-base font-semibold hover:text-[#00A3E0] transition-colors"
        >
          <span>{lang === "en" ? t("nav.lang.en") : t("nav.lang.ar")}</span>
          <ChevronDown className="w-4 h-4" />
        </button>

        {/* روابط الديسكتوب */}
        <a
          href="/plans-programs"
          className="hidden md:block text-[#061923] text-base font-medium hover:text-[#00A3E0] transition-colors"
        >
          {t("support.plansPrograms")}
        </a>

        <a
          href="about-campaign"
          className="hidden md:block text-[#061923] text-base font-medium hover:text-[#00A3E0] transition-colors"
        >
          {t("about.campaign")}
        </a>

        {/* الشعار */}
        <Link href="/">
          <Image src={logo} alt="logo" priority />
        </Link>

        <a
          href="/el-fasher"
          className="hidden md:block text-[#061923] text-base font-medium hover:text-[#00A3E0] transition-colors"
        >
          {t("about.elfasher")}
        </a>

        <a
          href="/contact  "
          className="hidden md:block text-[#061923] text-base font-medium hover:text-[#00A3E0] transition-colors"
        >
          {t("about.contact")}
        </a>

        {/* زر التبرع */}
        <Link href="/donate">
          <Button className="hidden md:inline-flex bg-[#00A3E0] hover:bg-[#0088BD] text-white px-8 py-3 rounded-lg font-semibold text-base">
            {t("nav.donate")}
          </Button>
        </Link>
        {/* زر القائمة للموبايل */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-[#061923] hover:bg-[#ECF7FF] focus:outline-none focus:ring-2 focus:ring-[#00A3E0]"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
        >
          <Menu className="h-7 w-7" />
        </button>
      </div>

      {/* Overlay + Drawer للموبايل */}
      {/* الخلفية الداكنة */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-200 md:hidden ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />
      {/* القائمة الجانبية */}
      <aside
        ref={panelRef}
        className={`fixed top-0 bottom-0 right-0 w-80 max-w-[85%] bg-white shadow-2xl md:hidden transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#D8F1FD]">
          <Image src={logo} alt="logo" height={32} />
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="rounded-md p-2 hover:bg-[#ECF7FF] focus:outline-none focus:ring-2 focus:ring-[#00A3E0]"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-5 flex flex-col gap-5 text-[#061923] text-base font-medium">
          <a
            href="#campaign"
            onClick={() => setOpen(false)}
            className="hover:text-[#00A3E0] transition-colors"
          >
            {t("nav.campaign")}
          </a>
          <a
            href="#media"
            onClick={() => setOpen(false)}
            className="hover:text-[#00A3E0] transition-colors"
          >
            {t("nav.media")}
          </a>
          <a
            href="#projects"
            onClick={() => setOpen(false)}
            className="hover:text-[#00A3E0] transition-colors"
          >
            {t("nav.projects")}
          </a>
          <a
            href="#implementers"
            onClick={() => setOpen(false)}
            className="hover:text-[#00A3E0] transition-colors"
          >
            {t("nav.implementers")}
          </a>

          <hr className="border-[#D8F1FD]" />
          <Link href="/donate">
            <button
              onClick={() => {
                toggleLang();
                setOpen(false);
              }}
              className="text-start text-[#061923] font-semibold hover:text-[#00A3E0]"
            >
              {lang === "en" ? t("nav.lang.ar") : t("nav.lang.en")}
            </button>
          </Link>
          <Button
            onClick={() => setOpen(false)}
            className="mt-2 bg-[#00A3E0] hover:bg-[#0088BD] text-white px-6 py-3 rounded-lg font-semibold text-base"
          >
            {t("nav.donate")}
          </Button>
        </div>
      </aside>
    </nav>
  );
}

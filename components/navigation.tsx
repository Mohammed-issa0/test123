"use client";

import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/public/imgs/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/language-provider";
import { usePathname } from "next/navigation";

export function Navigation() {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const firstFocusRef = useRef<HTMLAnchorElement>(null);
  const lastFocusRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const isRTL = (lang || "").startsWith("ar");

  const toggleLang = () => setLang(lang === "en" ? "ar" : "en");

  // قفل تمرير الصفحة عند فتح القائمة
  useEffect(() => {
    const prev = document.body.style.overflow;
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = prev || "";
    return () => {
      document.body.style.overflow = prev || "";
    };
  }, [open]);

  // إغلاق القائمة عند الضغط خارجها أو Esc + trap focus
  useEffect(() => {
    if (!open) return;

    const handleClick = (e: MouseEvent) => {
      if (!panelRef.current) return;
      if (!panelRef.current.contains(e.target as Node)) setOpen(false);
    };
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "Tab" && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex="0"]'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          (last as HTMLElement).focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          (first as HTMLElement).focus();
        }
      }
    };

    // تركيز أول عنصر داخل اللوحة
    setTimeout(() => firstFocusRef.current?.focus(), 10);

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [open]);

  // فاصل رابط نشط
  const linkCls = (href: string) =>
    `block rounded-lg px-3 py-3 text-base font-medium transition-colors ${
      pathname === href
        ? "text-[#00A3E0] bg-[#ECF7FF]"
        : "text-[#061923] hover:text-[#00A3E0]"
    }`;

  return (
    <nav className="sticky z-50 top-0 flex flex-col items-center gap-5 px-6 md:px-12 lg:px-24 py-6 bg-white border-b-2 border-[#D8F1FD]">
      <div className="w-full max-w-7xl flex flex-row justify-between items-center gap-4">
        {/* زر اللغة (يبقى كما هو) */}
        <button
          onClick={toggleLang}
          aria-label={t("nav.lang.switch")}
          className="flex items-center gap-1 text-[#061923] text-base font-semibold hover:text-[#00A3E0] transition-colors"
        >
          <span>{lang === "en" ? t("nav.lang.en") : t("nav.lang.ar")}</span>
          <ChevronDown className="w-4 h-4" />
        </button>

        {/* روابط الديسكتوب (كما هي) */}
        <a
          href="/plans-programs"
          className="hidden md:block text-[#061923] text-base font-medium hover:text-[#00A3E0] transition-colors"
        >
          {t("support.plansPrograms")}
        </a>

        <a
          href="/about-campaign"
          className="hidden md:block text-[#061923] text-base font-medium hover:text-[#00A3E0] transition-colors"
        >
          {t("about.campaign")}
        </a>

        {/* الشعار */}
        <Link href="/" aria-label="Home">
          <Image src={logo} alt="logo" priority />
        </Link>

        <a
          href="/el-fasher"
          className="hidden md:block text-[#061923] text-base font-medium hover:text-[#00A3E0] transition-colors"
        >
          {t("about.elfasher")}
        </a>

        <a
          href="/contact"
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

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-200 md:hidden ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      />

      {/* Mobile Drawer */}
      <aside
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
        className={`fixed top-0 bottom-0 ${
          isRTL ? "right-0" : "left-0"
        } w-[86%] max-w-[360px] bg-white shadow-2xl md:hidden transition-transform duration-300 ease-out
        ${
          open
            ? "translate-x-0"
            : isRTL
            ? "translate-x-full"
            : "-translate-x-full"
        }`}
        dir={isRTL ? "rtl" : "ltr"}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#D8F1FD]">
          <Image src={logo} alt="logo" height={32} />
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="rounded-md p-2 hover:bg-[#ECF7FF] focus:outline-none focus:ring-2 focus:ring-[#00A3E0]"
            ref={lastFocusRef}
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Content */}
        <div className="h-[calc(100%-64px)] overflow-y-auto">
          {/* مجموعة: روابط أساسية */}
          <div className="px-4 py-3">
            <nav className="flex flex-col">
              <Link href="/" className={linkCls("/")} ref={firstFocusRef}>
                {t("main.page")}
              </Link>
              <Link
                href="/about-campaign"
                className={linkCls("/about-campaign")}
              >
                {t("about.campaign")}
              </Link>
              <Link href="/el-fasher" className={linkCls("/el-fasher")}>
                {t("about.elfasher")}
              </Link>
              <Link
                href="/plans-programs"
                className={linkCls("/plans-programs")}
              >
                {t("support.plansPrograms")}
              </Link>
              <Link href="/partners" className={linkCls("/partners")}>
                {t("partners.title")}
              </Link>
              <Link href="/seminars" className={linkCls("/seminars")}>
                {t("center")}
              </Link>
              <Link href="/contact" className={linkCls("/contact")}>
                {t("about.contact")}
              </Link>
            </nav>
          </div>

          <hr className="my-2 border-[#EEF5FA]" />

          {/* مجموعة: اللغة والتبرع */}
          <div className="px-4 py-3">
            <button
              onClick={() => {
                toggleLang();
              }}
              className="w-full text-start rounded-lg px-3 py-3 text-[#061923] font-semibold hover:text-[#00A3E0] transition-colors"
            >
              {lang === "en" ? t("nav.lang.ar") : t("nav.lang.en")}
            </button>

            <Link href="/donate" onClick={() => setOpen(false)}>
              <Button className="mt-3 w-full bg-[#00A3E0] hover:bg-[#0088BD] text-white px-6 py-3 rounded-lg font-semibold text-base">
                {t("nav.donate")}
              </Button>
            </Link>
          </div>

          {/* هامش سفلي آمن */}
          <div className="h-6" />
        </div>
      </aside>
    </nav>
  );
}

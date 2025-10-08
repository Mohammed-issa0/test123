"use client";

import { Facebook, Instagram } from "lucide-react";
import { FaWhatsapp, FaSnapchat, FaXTwitter } from "react-icons/fa6";
import logoL from "@/public/imgs/logoL.png";
import Image from "next/image";
import { useLanguage } from "@/contexts/language-provider";
import Link from "next/link";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full bg-[#061923] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-12 mb-8">
          {/* Logo */}
          <Image
            src={logoL}
            alt={t("logoAlt")}
            height={40}
            className="mx-auto md:mx-0"
          />

          {/* Support Links */}
          <div className="text-center md:text-start">
            <h3 className="text-white text-lg font-semibold mb-3">
              {t("support.title")}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/partners"
                  className="text-white hover:text-[#00A3E0] transition-colors text-sm"
                >
                  {t("support.partners")}
                </Link>
              </li>
              <li>
                <Link
                  href="/seminars"
                  className="text-white hover:text-[#00A3E0] transition-colors text-sm"
                >
                  {t("support.seminars")}
                </Link>
              </li>
              <li>
                <Link
                  href="/plans-programs"
                  className="text-white hover:text-[#00A3E0] transition-colors text-sm"
                >
                  {t("support.plansPrograms")}
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-[#00A3E0] transition-colors text-sm"
                >
                  {t("support.privacy")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-[#00A3E0] transition-colors text-sm"
                >
                  {t("support.terms")}
                </a>
              </li>
            </ul>
          </div>

          {/* About Links */}
          <div className="text-center md:text-start">
            <h3 className="text-white text-lg font-semibold mb-3">
              {t("about.title")}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about-campaign"
                  className="text-white hover:text-[#00A3E0] transition-colors text-sm"
                >
                  {t("about.campaign")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white hover:text-[#00A3E0] transition-colors text-sm"
                >
                  {t("about.contact")}
                </Link>
              </li>
              <li>
                <Link
                  href="/el-fasher"
                  className="text-white hover:text-[#00A3E0] transition-colors text-sm"
                >
                  {t("about.elfasher")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:block w-px h-24 bg-gray-600"></div>

          {/* Social Media and Contact */}
          <div className="flex flex-col gap-4 text-center md:text-start">
            {/* Social Icons */}
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="#"
                aria-label="WhatsApp"
                className="hover:text-[#00A3E0] transition-colors"
              >
                <FaWhatsapp className="w-6 h-6" />
              </a>
              <a
                href="#"
                aria-label="Snapchat"
                className="hover:text-[#00A3E0] transition-colors"
              >
                <FaSnapchat className="w-6 h-6" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-[#00A3E0] transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                aria-label="X"
                className="hover:text-[#00A3E0] transition-colors"
              >
                <FaXTwitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-[#00A3E0] transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-1 text-sm text-white">
              <p>{t("contact.phone")}</p>
              <p>{t("contact.email")}</p>
              <p className="leading-relaxed">{t("contact.address")}</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-white text-sm pt-8 border-t border-gray-700 mt-8">
          © 2025 Smiles Of Hope Foundation. {t("copyright")}
        </div>
      </div>
    </footer>
  );
}

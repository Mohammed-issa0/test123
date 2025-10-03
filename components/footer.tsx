import { Facebook, Instagram } from "lucide-react";
import { FaWhatsapp, FaSnapchat, FaXTwitter } from "react-icons/fa6";
import logoL from "@/public/imgs/logoL.png";
import Image from "next/image";
export function Footer() {
  return (
    <footer className="w-full bg-[#061923] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-12 mb-8">
          {/* Logo */}
          <Image src={logoL} height={40} />

          {/* Support Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-3">Support</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-white hover:text-[#00A3E0] transition-colors text-sm"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-[#00A3E0] transition-colors text-sm"
                >
                  Terms And Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* About Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-3">About</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-white hover:text-[#00A3E0] transition-colors text-sm"
                >
                  Our Mision
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-[#00A3E0] transition-colors text-sm"
                >
                  Store
                </a>
              </li>
            </ul>
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:block w-px h-24 bg-gray-600"></div>

          {/* Social Media and Contact */}
          <div className="flex flex-col gap-4">
            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="#"
                className="text-white hover:text-[#00A3E0] transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#00A3E0] transition-colors"
                aria-label="Snapchat"
              >
                <FaSnapchat className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#00A3E0] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#00A3E0] transition-colors"
                aria-label="X"
              >
                <FaXTwitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#00A3E0] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-1 text-sm text-white">
              <p>+1 (555) 010-1234</p>
              <p>Info@Smilesofhope.Example.Org</p>
              <p className="leading-relaxed">
                123 Hope Lane, Suite 10, Everdale, Aurora County 018
                <br />
                Country Of Everland
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-white text-sm pt-8 border-gray-700">
          © 2025 Smiles Of Hope Foundation. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

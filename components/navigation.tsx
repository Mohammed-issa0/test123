"use client";

import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/public/imgs/logo.png";
import Image from "next/image";
export function Navigation() {
  return (
    <nav className="sticky z-50 top-0 flex flex-col items-center gap-5 px-6 md:px-12 lg:px-24 py-6 bg-white border-b-2 border-[#D8F1FD]">
      <div className="w-full max-w-7xl flex flex-row  justify-between items-center gap-4">
        {/* Navigation Links */}

        <button className="flex items-center gap-1 text-[#061923] text-base font-semibold hover:text-[#00A3E0] transition-colors">
          <span>EN</span>
          <ChevronDown className="w-4 h-4" />
        </button>

        <a
          href="#media"
          className="hidden md:block text-[#061923] text-base font-medium hover:text-[#00A3E0] transition-colors"
        >
          media
        </a>

        <a
          href="#campaign"
          className="hidden md:block text-[#061923] text-base font-medium hover:text-[#00A3E0] transition-colors"
        >
          campaign
        </a>
        <a href="#">
          <Image src={logo} />
        </a>

        <a
          href="#projects"
          className="hidden md:block text-[#061923] text-base font-medium hover:text-[#00A3E0] transition-colors"
        >
          projects
        </a>

        <a
          href="#implementers"
          className="hidden md:block text-[#061923] text-base font-medium hover:text-[#00A3E0] transition-colors"
        >
          implementers
        </a>

        {/* Donate Button */}
        <Button className="bg-[#00A3E0] hover:bg-[#0088BD] text-white px-8 py-3 rounded-lg font-semibold text-base">
          Donate now
        </Button>
      </div>
    </nav>
  );
}

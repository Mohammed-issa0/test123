"use client";

import logo1 from "@/public/imgs/logo1.png";
import logo2 from "@/public/imgs/logo2 (1).png";
import logo3 from "@/public/imgs/logo3 (1).png";
import logo4 from "@/public/imgs/logo4.png";
import logo5 from "@/public/imgs/logo5.png";
import logo6 from "@/public/imgs/logo6.png";
import logo7 from "@/public/imgs/logo7.png";
import logo8 from "@/public/imgs/logo8.png";
import logo9 from "@/public/imgs/logo9.png";
import Image from "next/image";
import { useLanguage } from "@/contexts/language-provider";

const partners = [
  { name: "SIEMENS", logo: logo1 },
  { name: "CAP ACCREDITED", logo: logo2 },
  { name: "Ministry of Education", logo: logo3 },
  { name: "BECKMAN COULTER", logo: logo4 },
  { name: "Al Rajhi Bank", logo: logo5 },
  { name: "Saudi Electricity Company", logo: logo6 },
  { name: "Ministry of Health", logo: logo7 },
  { name: "BACS", logo: logo8 },
  { name: "BACS", logo: logo9 },
];

export function Partners() {
  const { t } = useLanguage();

  return (
    <section className="w-full px-6 py-16 md:py-24 bg-[#F8FCFF]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="w-3 h-3 bg-[#F5A623] rotate-45" />
          <h2 className="text-[#061923] text-3xl md:text-4xl font-bold text-center">
            {t("partners.title")}
          </h2>
          <div className="w-3 h-3 bg-[#F5A623] rotate-45" />
        </div>

        {/* Partners Grid (mobile friendly) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 items-center">
          {partners.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex items-center justify-center p-4 bg-white rounded-lg border border-[#E8EDF2] hover:shadow-md transition-shadow"
            >
              {/* عند استخدام import ثابت، next/image يعرف الأبعاد تلقائيًا */}
              <Image
                src={partner.logo}
                alt={partner.name}
                className="max-w-full h-10 sm:h-12 object-contain"
                placeholder="empty"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

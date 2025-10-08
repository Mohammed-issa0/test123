"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ThanksPage() {
  const [amount, setAmount] = useState<string>("");
  const [type, setType] = useState<string>("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setAmount(params.get("amount") || "");
    setType(params.get("type") || "");
  }, []);

  const typeLabel = useMemo(
    () => (type === "monthly" ? "تبرّع شهري" : type ? "تبرّع لمرة واحدة" : ""),
    [type]
  );

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-20">
          <motion.div
            {...fadeInUp}
            className="rounded-2xl border border-gray-200 bg-[#F8FAFC] px-6 py-10 md:px-10 md:py-14 text-center"
          >
            {/* Success Badge */}
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <svg
                viewBox="0 0 24 24"
                className="h-8 w-8 text-green-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <path d="M22 4 12 14.01l-3-3" />
              </svg>
            </div>

            <h1 className="text-2xl md:text-3xl font-extrabold text-[#061923] mb-3">
              شكرًا لك! تم استلام الإيصال بنجاح
            </h1>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
              تم إرسال إيصال التحويل، وسيتواصل فريقنا معك في أقرب فرصة. نعتزّ
              بدعمك لأهل الفاشر 💙
            </p>

            {/* Summary (optional if present) */}
            {(amount || typeLabel) && (
              <div className="mx-auto mb-8 w-full max-w-md rounded-xl border border-gray-200 bg-white px-4 py-4 text-right">
                <div className="flex justify-between text-sm text-gray-700">
                  <span className="font-semibold">نوع التبرّع</span>
                  <span>{typeLabel || "-"}</span>
                </div>
                <div className="mt-2 flex justify-between text-sm text-gray-700">
                  <span className="font-semibold">المبلغ</span>
                  <span>{amount ? `$${amount}` : "-"}</span>
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-[#061923] hover:bg-gray-50"
              >
                العودة للصفحة الرئيسية
              </Link>
              <Link
                href="/donate"
                className="inline-flex items-center justify-center rounded-lg bg-[#00A3E0] px-6 py-3 text-white hover:bg-[#0088BD]"
              >
                تبرّع مرة أخرى
              </Link>
            </div>

            {/* Help text */}
            <p className="mt-6 text-xs text-gray-500">
              لم يصلك تأكيد إلى البريد؟ تأكّد من صندوق السبام أو راسلنا عبر صفحة{" "}
              <Link href="/contact" className="underline">
                اتصل بنا
              </Link>
              .
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

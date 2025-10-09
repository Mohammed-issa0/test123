"use client";

import { useEffect, useMemo, useState } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/language-provider";
import gmail1 from "@/public/imgs/gmail.png";
import outlook1 from "@/public/imgs/outlook.png";
const DONATIONS_EMAIL = "saveelfasher.sd@gmail.com";
import Image from "next/image";
function makeWebComposeLinks(to: string, subject: string, body: string) {
  const crlfBody = body.replace(/\n/g, "\r\n");
  const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    to
  )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(crlfBody)}`;
  const outlook = `https://outlook.office.com/mail/deeplink/compose?to=${encodeURIComponent(
    to
  )}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    crlfBody
  )}`;
  return { gmail, outlook };
}

export default function BankTransferPage() {
  const { t, lang } = useLanguage();
  const isArabic = (lang || "").startsWith("ar");

  const [amount, setAmount] = useState<string>("");
  const [type, setType] = useState<string>("once");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setAmount(params.get("amount") || "");
    setType(params.get("type") || "once");
  }, []);

  
  const { subject, body } = useMemo(() => {
    const s = t("bank.email.subject", { name: fullName || "Donor" });
    const lines = [
      t("bank.email.body.header"),
      `${t("bank.form.fullName")} ${fullName || "-"}`,
      `${t("bank.form.email")} ${email || "-"}`,
      `${t("bank.summary.type")} ${
        type === "monthly"
          ? t("bank.summary.typeMonthly")
          : t("bank.summary.typeOnce")
      }`,
      `${t("bank.summary.amount")} ${amount ? `$${amount}` : "-"}`,
      "",
      t("bank.email.body.attachNotice"),
      "",
      `${t("bank.form.notes")} ${notes || "-"}`,
    ];
    return { subject: s, body: lines.join("\n") };
  }, [t, fullName, email, type, amount, notes]);

  const { gmail, outlook } = useMemo(
    () => makeWebComposeLinks(DONATIONS_EMAIL, subject, body),
    [subject, body]
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 bg-white" dir={isArabic ? "rtl" : "ltr"}>
        <div className="max-w-3xl mx-auto px-6 py-12 md:py-16">
          <h1
            className="text-2xl md:text-3xl font-bold text-[#061923] mb-6"
            style={{ textAlign: isArabic ? "right" : "left" }}
          >
            {t("bank.title")}
          </h1>

         
          <div
            className="rounded-2xl border border-gray-200 p-6 mb-10 bg-[#F8FAFC]"
            style={{ textAlign: isArabic ? "right" : "left" }}
          >
            <ul className="space-y-2">
              <li>
                <span className="font-semibold">
                  {t("bank.account.nameLabel")}{" "}
                </span>
                {t("bank.account.name")}
              </li>
              <li>
                <span className="font-semibold">
                  {t("bank.account.numberLabel")}{" "}
                </span>
                {t("bank.account.number")}
              </li>
              <li>
                <span className="font-semibold">
                  {t("bank.account.ibanLabel")}{" "}
                </span>
                {t("bank.account.iban")}
              </li>
            </ul>
            <p className="text-gray-600 mt-4 text-sm">
              {t("bank.instructions")}
            </p>

            
            <div className="mt-4 rounded-lg border border-amber-300 bg-amber-50 px-4 py-3 text-amber-900 text-sm">
              <span className="font-semibold">
                ⚠️ {isArabic ? "تنبيه" : "Notice"}:{" "}
              </span>
              {t("bank.instructions.attachManual")}
            </div>
          </div>

          
          <div
            className="mb-8"
            style={{ textAlign: isArabic ? "right" : "left" }}
          >
            <div className="text-sm text-gray-600">
              <span className="font-semibold">{t("bank.summary.type")} </span>
              {type === "monthly"
                ? t("bank.summary.typeMonthly")
                : t("bank.summary.typeOnce")}
            </div>
            {amount ? (
              <div className="text-sm text-gray-600">
                <span className="font-semibold">
                  {t("bank.summary.amount")}{" "}
                </span>
                ${amount}
              </div>
            ) : null}
          </div>

          
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div style={{ textAlign: isArabic ? "right" : "left" }}>
                <label className="block text-[#061923] font-semibold mb-1">
                  {t("bank.form.fullName")}
                </label>
                <Input
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  dir={isArabic ? "rtl" : "ltr"}
                />
              </div>
              <div style={{ textAlign: isArabic ? "right" : "left" }}>
                <label className="block text-[#061923] font-semibold mb-1">
                  {t("bank.form.email")}
                </label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  dir={isArabic ? "rtl" : "ltr"}
                />
              </div>
            </div>

            <div style={{ textAlign: isArabic ? "right" : "left" }}>
              <label className="block text-[#061923] font-semibold mb-1">
                {t("bank.form.notes")}
              </label>
              <Textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                dir={isArabic ? "rtl" : "ltr"}
              />
            </div>

           
            <div className="pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={gmail}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#EA4335] px-5 py-4 text-white font-semibold shadow-sm hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#EA4335]"
                  aria-label="Compose email in Gmail"
                >
                 
                  <Image
                    src={gmail1}
                    alt="outlook"
                    width={40}
                    className="bg-white rounded-full p-1"
                  />
                  {isArabic ? "فتح Gmail" : "Open Gmail"}
                </a>

                <a
                  href={outlook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0F6CBD] px-5 py-4 text-white font-semibold shadow-sm hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0F6CBD]"
                  aria-label="Compose email in Outlook Web"
                >
                  <Image
                    src={outlook1}
                    alt="outlook"
                    width={40}
                    className="bg-white rounded-full p-1"
                  />
                  {isArabic ? "فتح Outlook Web" : "Open Outlook Web"}
                </a>
              </div>

              
              <p
                className="text-xs text-gray-500 mt-3"
                style={{ textAlign: isArabic ? "right" : "left" }}
              >
                {t("bank.hint.mailtoLimit")}
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

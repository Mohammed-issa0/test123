"use client";

import { useEffect, useState } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/language-provider";

const WEB3FORMS_ACCESS_KEY = "5c59e7bb-0656-4070-b907-acefc4ae87d3"; // ← مفتاحك

export default function BankTransferPage() {
  const { t, lang } = useLanguage();
  const isArabic = (lang || "").startsWith("ar");

  const [amount, setAmount] = useState<string>("");
  const [type, setType] = useState<string>("once");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setAmount(params.get("amount") || "");
    setType(params.get("type") || "once");
  }, []);

  const handleSubmit = async () => {
    if (!fullName || !email || !file) {
      setStatus("error");
      setMessage(t("bank.errors.missing"));
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      setStatus("error");
      setMessage(t("bank.errors.tooLarge"));
      return;
    }

    setStatus("loading");
    setMessage("");

    const form = new FormData();
    form.append("access_key", WEB3FORMS_ACCESS_KEY);
    form.append("from_name", "Website Donations");
    form.append("subject", t("bank.email.subject", { name: fullName }));
    // إن رغبت بالتوجيه التلقائي بعد النجاح، أضِف redirect قبل الإرسال:
    // form.append("redirect", `${window.location.origin}/thanks?amount=${encodeURIComponent(amount || "")}&type=${encodeURIComponent(type || "")}`);
    // ويمكنك كذلك تحديد بريد الاستقبال هنا إن لم تضبطه من لوحة Web3Forms:
    // form.append("to", "donations@yourdomain.org");

    form.append("fullName", fullName);
    form.append("email", email);
    form.append("notes", notes);
    form.append("amount", amount || "");
    form.append("type", type || "");
    form.append("receipt", file);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });
      const data = await res.json();

      if (!data.success) {
        throw new Error(data.message || t("bank.errors.submit"));
      }

      setStatus("success");
      setMessage(t("bank.success"));
      setFile(null);
      setNotes("");
      // لو استخدمت redirect أعلاه، Web3Forms سيعيد التوجيه تلقائيًا
      // وإلا يمكنك التوجيه اليدوي:
      // window.location.href = `${window.location.origin}/thanks?amount=${encodeURIComponent(amount || "")}&type=${encodeURIComponent(type || "")}`;
    } catch (e: any) {
      setStatus("error");
      setMessage(e?.message || t("bank.errors.unknown"));
    }
  };

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

          {/* بيانات البنك */}
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
          </div>

          {/* الملخص */}
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

          {/* النموذج */}
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

            <div style={{ textAlign: isArabic ? "right" : "left" }}>
              <label className="block text-[#061923] font-semibold mb-1">
                {t("bank.form.receipt")}
              </label>
              <input
                type="file"
                accept="image/*,application/pdf"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                className="block w-full text-sm text-gray-700 file:mr-3 file:py-2 file:px-3 file:rounded file:border-0 file:bg-[#E8F7FC] file:text-[#00A3E0] hover:file:bg-[#D9F1FA] cursor-pointer"
              />
              <p className="text-xs text-gray-500 mt-1">
                {t("bank.form.hint")}
              </p>
            </div>

            <div className="pt-2">
              <Button
                onClick={handleSubmit}
                disabled={status === "loading"}
                className="w-full bg-[#00A3E0] hover:bg-[#0088BD] text-white py-6 text-lg font-semibold rounded-lg disabled:opacity-70"
              >
                {status === "loading"
                  ? t("bank.btn.sending")
                  : t("bank.btn.submit")}
              </Button>
              {message && (
                <p
                  className={`mt-3 text-sm ${
                    status === "success"
                      ? "text-green-600"
                      : status === "error"
                      ? "text-red-600"
                      : "text-gray-600"
                  }`}
                  style={{ textAlign: isArabic ? "right" : "left" }}
                >
                  {message}
                </p>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useLanguage } from "@/contexts/language-provider";

export default function DonatePage() {
  const [donationType, setDonationType] = useState<"once" | "monthly">("once");
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<
    "bank" | "visa" | "paypal"
  >("bank");
  const router = useRouter();
  const { t, lang } = useLanguage();
  const isArabic = (lang || "").startsWith("ar");

  const handleSubmit = () => {
    if (!amount || Number(amount) <= 0) return;
    if (paymentMethod === "bank") {
      router.push(`/bank-transfer`);
    }
  };

  const ComingSoonBadge = () => (
    <span className="ml-2 inline-flex items-center rounded bg-gray-200 px-2 py-0.5 text-[10px] font-bold text-gray-700">
      {t("donate.soon")}
    </span>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 bg-white" dir={isArabic ? "rtl" : "ltr"}>
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-[#061923] mb-2 flex items-center justify-center gap-3">
              <span className="text-[#F5A623]">◆</span>
              {t("donate.title1")}
              <span className="text-[#F5A623]">◆</span>
            </h1>
          </motion.div>

          {/* Donation Type Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex gap-4 mb-8 max-w-md mx-auto"
          >
            <button
              onClick={() => setDonationType("once")}
              className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all ${
                donationType === "once"
                  ? "bg-[#00A3E0] text-white"
                  : "bg-[#E8F7FC] text-[#00A3E0]"
              }`}
            >
              {t("donate.tabs.once")}
            </button>
            <button
              onClick={() => setDonationType("monthly")}
              className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all ${
                donationType === "monthly"
                  ? "bg-[#00A3E0] text-white"
                  : "bg-[#E8F7FC] text-[#00A3E0]"
              }`}
            >
              {t("donate.tabs.monthly")}
            </button>
          </motion.div>

          {/* Donation Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Donation Purpose */}
            <div className={isArabic ? "text-right" : "text-left"}>
              <label className="block text-[#061923] font-semibold mb-2">
                {t("donate.purpose.label")}
              </label>
              <Select>
                <SelectTrigger
                  className={`w-full ${isArabic ? "text-right" : "text-left"}`}
                >
                  <SelectValue placeholder={t("donate.purpose.placeholder")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="water">
                    {t("donate.purpose.options.water")}
                  </SelectItem>
                  <SelectItem value="food">
                    {t("donate.purpose.options.food")}
                  </SelectItem>
                  <SelectItem value="medical">
                    {t("donate.purpose.options.medical")}
                  </SelectItem>
                  <SelectItem value="support">
                    {t("donate.purpose.options.support")}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Amount Selection */}
            <div className={isArabic ? "text-right" : "text-left"}>
              <label className="block text-[#061923] font-semibold mb-2">
                {t("donate.amount.label")}
              </label>
              <div className="flex gap-3">
                <Input
                  type="number"
                  placeholder={t("donate.amount.placeholder")}
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className={`flex-1 ${isArabic ? "text-right" : "text-left"}`}
                  dir={isArabic ? "rtl" : "ltr"}
                  min={1}
                />
                <Button
                  onClick={() => setAmount("100")}
                  className="bg-[#00A3E0] hover:bg-[#0088BD] text-white px-6"
                  type="button"
                >
                  {t("donate.amount.quick100")}
                </Button>
              </div>
            </div>

            {/* Optional Note */}
            <div className={isArabic ? "text-right" : "text-left"}>
              <label className="block text-[#061923] font-semibold mb-2">
                {t("donate.note.label")}
              </label>
              <Textarea
                placeholder={t("donate.note.placeholder")}
                className={`min-h-32 ${isArabic ? "text-right" : "text-left"}`}
                dir={isArabic ? "rtl" : "ltr"}
              />
            </div>

            {/* Payment Method */}
            <div className={isArabic ? "text-right" : "text-left"}>
              <label className="block text-[#061923] font-semibold mb-3">
                {t("donate.payment.label")}
              </label>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {/* VISA - disabled */}
                <button
                  type="button"
                  disabled
                  aria-disabled="true"
                  className="p-4 rounded-lg border-2 border-gray-200 bg-gray-100 cursor-not-allowed relative"
                >
                  <div className="text-2xl font-bold text-[#1A1F71] opacity-50">
                    {t("donate.payment.methods.visa")}
                  </div>
                  <div
                    className={`absolute top-2 ${
                      isArabic ? "right-2" : "left-2"
                    } text-[10px] font-bold bg-gray-200 text-gray-700 px-2 py-0.5 rounded`}
                  >
                    {t("donate.soon")}
                  </div>
                </button>

                {/* PayPal - disabled */}
                <button
                  type="button"
                  disabled
                  aria-disabled="true"
                  className="p-4 rounded-lg border-2 border-gray-200 bg-gray-100 cursor-not-allowed relative"
                >
                  <div className="text-2xl font-bold text-[#003087] opacity-50">
                    {t("donate.payment.methods.paypal")}
                  </div>
                  <div
                    className={`absolute top-2 ${
                      isArabic ? "right-2" : "left-2"
                    } text-[10px] font-bold bg-gray-200 text-gray-700 px-2 py-0.5 rounded`}
                  >
                    {t("donate.soon")}
                  </div>
                </button>

                {/* Bank transfer - the only active method */}
                <button
                  type="button"
                  onClick={() => setPaymentMethod("bank")}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    paymentMethod === "bank"
                      ? "border-[#00A3E0] bg-[#E8F7FC]"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  <div className="text-lg font-semibold text-[#061923]">
                    {t("donate.payment.methods.bank")}
                  </div>
                </button>

                {/* Placeholder fourth slot (optional) */}
                <div className="p-4 rounded-lg border-2 border-transparent" />
              </div>
            </div>

            {/* Submit Button */}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                type="button"
                onClick={handleSubmit}
                disabled={
                  !amount || Number(amount) <= 0 || paymentMethod !== "bank"
                }
                className="w-full bg-[#00A3E0] hover:bg-[#0088BD] disabled:bg-gray-300 disabled:text-gray-600 disabled:cursor-not-allowed text-white py-6 text-lg font-semibold rounded-lg"
              >
                {t("donate.next")}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

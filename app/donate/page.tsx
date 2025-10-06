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
import { useState } from "react";

export default function DonatePage() {
  const [donationType, setDonationType] = useState<"once" | "monthly">("once");
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 bg-white">
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
              حملة الأمل لأهل الفاشر
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
              التبرع مرة فقط
            </button>
            <button
              onClick={() => setDonationType("monthly")}
              className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all ${
                donationType === "monthly"
                  ? "bg-[#00A3E0] text-white"
                  : "bg-[#E8F7FC] text-[#00A3E0]"
              }`}
            >
              شهرياً
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
            <div className="text-right">
              <label className="block text-[#061923] font-semibold mb-2">
                :تبرع من اجل
              </label>
              <Select>
                <SelectTrigger className="w-full text-right">
                  <SelectValue placeholder="اختر المشروع" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="water">مياه نظيفة</SelectItem>
                  <SelectItem value="food">سلال غذائية</SelectItem>
                  <SelectItem value="medical">رعاية طبية</SelectItem>
                  <SelectItem value="support">
                    دعم نفسي للنساء والفتيات
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Amount Selection */}
            <div className="text-right">
              <label className="block text-[#061923] font-semibold mb-2">
                اختر المبلغ
              </label>
              <div className="flex gap-3">
                <Input
                  type="number"
                  placeholder="ادخل مبلغ اخر"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="flex-1 text-right"
                  dir="rtl"
                />
                <Button
                  onClick={() => setAmount("100")}
                  className="bg-[#00A3E0] hover:bg-[#0088BD] text-white px-6"
                >
                  $100
                </Button>
              </div>
            </div>

            {/* Optional Note */}
            <div className="text-right">
              <label className="block text-[#061923] font-semibold mb-2">
                (اترك ملاحظة (اختياري
              </label>
              <Textarea
                placeholder="اكتب رسالة..."
                className="min-h-32 text-right"
                dir="rtl"
              />
            </div>

            {/* Payment Method */}
            <div className="text-right">
              <label className="block text-[#061923] font-semibold mb-3">
                اختر طريقة الدفع
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <button
                  onClick={() => setPaymentMethod("visa")}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    paymentMethod === "visa"
                      ? "border-[#00A3E0] bg-[#E8F7FC]"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  <div className="text-2xl font-bold text-[#1A1F71]">VISA</div>
                </button>
                <button
                  onClick={() => setPaymentMethod("paypal")}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    paymentMethod === "paypal"
                      ? "border-[#00A3E0] bg-[#E8F7FC]"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  <div className="text-2xl font-bold text-[#003087]">
                    PayPal
                  </div>
                </button>
                <button
                  onClick={() => setPaymentMethod("transfer")}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    paymentMethod === "transfer"
                      ? "border-[#00A3E0] bg-[#E8F7FC]"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  <div className="text-lg font-semibold text-[#061923]">
                    حوالة
                  </div>
                </button>
                <button
                  onClick={() => setPaymentMethod("card")}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    paymentMethod === "card"
                      ? "border-[#00A3E0] bg-[#E8F7FC]"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  <div className="text-lg font-semibold text-[#061923]">
                    بطاقة
                  </div>
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button className="w-full bg-[#00A3E0] hover:bg-[#0088BD] text-white py-6 text-lg font-semibold rounded-lg">
                التالي
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

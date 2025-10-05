import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import "./globals.css";
import { LanguageProvider } from "@/contexts/language-provider";

export const metadata: Metadata = {
  title: "Smiles-of-Hope Foundation - Together To Help Our People In El Fasher",
  description:
    "A Humanitarian Campaign to support affected families in El Fasher, South Sudan, by providing food, medicine, and shelter.",
  icons: { icon: "imgs/logo.png" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <body className={`raleway ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>
          <LanguageProvider>
            {children}
            <Analytics />
          </LanguageProvider>
        </Suspense>
      </body>
    </html>
  );
}

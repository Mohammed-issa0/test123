"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Lang = "en" | "ar";
type Messages = Record<string, string>;

type LanguageContextType = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (k: string) => string;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const [messages, setMessages] = useState<Messages>({});

  useEffect(() => {
    (async () => {
      try {
        const mod = await import(`@/locales/${lang}.json`);
        setMessages(mod.default ?? {});
      } catch {
        setMessages({});
      }
    })();

    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

      const body = document.body;
      body.classList.remove("font-ar", "font-raleway");
      body.classList.add(lang === "ar" ? "font-ar" : "font-raleway");

      localStorage.setItem("lang", lang);
    }
  }, [lang]);

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved === "ar" || saved === "en") setLang(saved);
  }, []);

  const t = (k: string) => messages[k] ?? k;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

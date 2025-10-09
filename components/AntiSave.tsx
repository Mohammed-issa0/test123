// components/AntiSave.tsx
"use client";

import { useEffect } from "react";

export default function AntiSave() {
  useEffect(() => {
    // منع كليك يمين
    const blockContext = (e: MouseEvent) => e.preventDefault();
    document.addEventListener("contextmenu", blockContext);

    // منع سحب الصور
    const blockDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === "IMG" || target.closest("img"))) {
        e.preventDefault();
      }
    };
    document.addEventListener("dragstart", blockDragStart);

    // منع بعض الاختصارات الشائعة (قد تختلف بين الأنظمة والمتصفحات)
    const blockShortcuts = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      const ctrl = e.ctrlKey || e.metaKey;

      // حفظ/طباعة/عرض المصدر/فتح DevTools (لن يمنع المحترفين، لكنه يزعج)
      if (
        (ctrl && (key === "s" || key === "p" || key === "u")) ||
        (ctrl && e.shiftKey && (key === "i" || key === "c" || key === "j"))
      ) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
    document.addEventListener("keydown", blockShortcuts, true);

    return () => {
      document.removeEventListener("contextmenu", blockContext);
      document.removeEventListener("dragstart", blockDragStart);
      document.removeEventListener("keydown", blockShortcuts, true);
    };
  }, []);

  return null;
}

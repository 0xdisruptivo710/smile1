"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { WhatsappIcon } from "./icons";
import { site } from "@/lib/site";
import { whatsappLink } from "@/lib/utils";

/**
 * Acesso persistente ao WhatsApp. Aparece depois do hero, discreto no
 * canto inferior — não é bolha flutuante chamativa.
 */
export function WhatsappBar() {
  const [visivel, setVisivel] = useState(false);
  const reduce = useReducedMotion();
  const wa = whatsappLink(site.whatsapp, site.whatsappMensagem);

  useEffect(() => {
    function onScroll() {
      setVisivel(window.scrollY > 720);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visivel && (
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: reduce ? 0 : 16 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-3 bottom-3 z-50 sm:inset-x-auto sm:bottom-5 sm:right-5"
        >
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-[var(--radius-soft)] border border-line-strong bg-paper px-4 py-3 shadow-[0_14px_40px_-16px_oklch(0.248_0.018_58/0.55)] transition-colors hover:border-pine"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-soft)] bg-champagne text-graphite">
              <WhatsappIcon />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="eyebrow text-ink-faint">Avaliação capilar</span>
              <span
                className="font-medium text-ink"
                style={{ fontSize: "var(--text-body-sm)" }}
              >
                Falar no WhatsApp
              </span>
            </span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

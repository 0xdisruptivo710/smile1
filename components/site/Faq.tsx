"use client";

import { useId, useState } from "react";
import { Container } from "./Container";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { Plus } from "./icons";
import { cn } from "@/lib/utils";
import { faq } from "@/content/capilar";

function FaqItem({ p, r }: { p: string; r: string }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="border-b border-line">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span
          className="font-display font-normal tracking-[-0.01em] text-ink"
          style={{ fontSize: "var(--text-h3)" }}
        >
          {p}
        </span>
        <Plus
          className={cn(
            "shrink-0 text-pine transition-transform duration-300 ease-out",
            open && "rotate-45",
          )}
        />
      </button>
      <div
        id={panelId}
        role="region"
        className="grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p
            className="max-w-[68ch] pb-7 text-ink-soft"
            style={{ fontSize: "var(--text-body)" }}
          >
            {r}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  return (
    <section id="faq" className="py-20 sm:py-28">
      <Container>
        <SectionHeader numero={faq.numero} label={faq.label} />

        <Reveal className="mt-12" delay={0.05}>
          <h2
            className="max-w-[22ch] font-display font-normal leading-[1.02] tracking-[-0.02em] text-ink"
            style={{ fontSize: "var(--text-h2)" }}
          >
            {faq.titulo}
          </h2>
        </Reveal>

        <Reveal className="mt-10 border-t border-line-strong" delay={0.1}>
          {faq.itens.map((item) => (
            <FaqItem key={item.p} p={item.p} r={item.r} />
          ))}
        </Reveal>
      </Container>
    </section>
  );
}

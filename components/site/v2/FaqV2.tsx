"use client";

import { useId, useState } from "react";
import { Container } from "../Container";
import { Reveal } from "@/components/motion/Reveal";
import { Plus } from "../icons";
import { cn } from "@/lib/utils";
import { faq } from "@/content/capilar";

function FaqItemV2({ p, r, idx }: { p: string; r: string; idx: number }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div
      className={cn(
        "overflow-hidden rounded-[var(--radius-soft)] border transition-colors duration-300",
        open
          ? "border-champagne bg-paper shadow-[0_18px_50px_-30px_rgba(20,64,80,0.45)]"
          : "border-line bg-paper-warm hover:border-champagne/70",
      )}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left sm:px-8 sm:py-6"
      >
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-[length:var(--text-body-sm)] text-pine">
            {String(idx + 1).padStart(2, "0")}
          </span>
          <span
            className="font-display font-normal tracking-[-0.01em] text-ink"
            style={{ fontSize: "var(--text-h3)" }}
          >
            {p}
          </span>
        </div>
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
            className="ml-12 max-w-[68ch] pb-7 pr-8 text-ink-soft sm:ml-16"
            style={{ fontSize: "var(--text-body)" }}
          >
            {r}
          </p>
        </div>
      </div>
    </div>
  );
}

/**
 * FAQ V2 — cards individuais com leve sombra ao expandir, código mono e cor
 * champagne no ativo. Quebra o flow de "lista plana" do V1.
 */
export function FaqV2() {
  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-paper-deep py-20 sm:py-28"
    >
      <Container>
        <div className="flex items-center gap-4 sm:gap-6">
          <span
            className="font-display font-normal leading-none text-pine"
            style={{ fontSize: "var(--text-h3)" }}
          >
            {faq.numero}
          </span>
          <span className="whitespace-nowrap font-mono text-[length:var(--text-eyebrow)] uppercase tracking-[0.18em] text-pine">
            {faq.label}
          </span>
          <span className="h-px flex-1 bg-line-strong" />
        </div>

        <Reveal className="mt-12" delay={0.05}>
          <h2
            className="max-w-[22ch] font-display font-normal leading-[1.02] tracking-[-0.02em] text-ink"
            style={{ fontSize: "var(--text-h2)" }}
          >
            {faq.titulo}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-3">
          {faq.itens.map((item, i) => (
            <Reveal key={item.p} delay={i * 0.04}>
              <FaqItemV2 p={item.p} r={item.r} idx={i} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

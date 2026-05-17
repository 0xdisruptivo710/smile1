"use client";

import { useId, useState } from "react";
import { Container } from "./Container";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { Plus } from "./icons";
import { StrandSection } from "./Glyphs";
import { cn } from "@/lib/utils";
import { causas } from "@/content/capilar";

type Fator = (typeof causas.fatores)[number];

function FatorItem({ fator }: { fator: Fator }) {
  const [open, setOpen] = useState(false);
  const painelId = useId();

  function toggle() {
    setOpen((v) => !v);
  }

  return (
    <div
      role="button"
      tabIndex={0}
      aria-expanded={open}
      aria-controls={painelId}
      onClick={toggle}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggle();
        }
      }}
      className={cn(
        "group cursor-pointer border-b border-line px-0 py-7 transition-colors md:px-7",
        "hover:bg-pine-wash/60",
        open && "bg-pine-wash",
        "md:[&:nth-child(even)]:border-l",
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-[length:var(--text-body-sm)] text-pine">
            {fator.codigo}
          </span>
          <h3
            className="font-display font-normal tracking-[-0.01em] text-ink transition-colors group-hover:text-pine"
            style={{ fontSize: "var(--text-h3)" }}
          >
            {fator.titulo}
          </h3>
        </div>
        <span
          className={cn(
            "mt-1 shrink-0 text-pine transition-transform duration-300 ease-out",
            open && "rotate-45",
          )}
          aria-hidden
        >
          <Plus />
        </span>
      </div>
      <p
        className="mt-2.5 max-w-[46ch] text-ink-soft"
        style={{ fontSize: "var(--text-body)" }}
      >
        {fator.texto}
      </p>
      <div
        id={painelId}
        className="grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p
            className="mt-4 max-w-[48ch] border-t border-line-strong pt-4 text-ink-soft"
            style={{ fontSize: "var(--text-body-sm)" }}
          >
            {fator.detalhe}
          </p>
        </div>
      </div>
      <span className="mt-3 inline-block font-mono text-[length:var(--text-eyebrow)] uppercase tracking-[0.1em] text-ink-faint transition-colors group-hover:text-pine">
        {open ? "— Fechar" : "+ Aprofundar"}
      </span>
    </div>
  );
}

export function Causas() {
  return (
    <section
      id="causas"
      className="relative overflow-hidden py-20 sm:py-28"
    >
      <StrandSection
        strokeWidth={1.1}
        className="pointer-events-none absolute -right-20 top-24 hidden h-[300px] w-[300px] text-line-strong opacity-40 lg:block"
      />
      <Container className="relative">
        <SectionHeader numero={causas.numero} label={causas.label} />

        <div className="mt-12 grid gap-x-12 gap-y-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-7" delay={0.05}>
            <h2
              className="font-display font-normal leading-[1.02] tracking-[-0.02em] text-ink"
              style={{ fontSize: "var(--text-h2)" }}
            >
              {causas.titulo}
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={0.12}>
            <p className="text-ink-soft" style={{ fontSize: "var(--text-lede)" }}>
              {causas.texto}
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-14 grid border-t border-line-strong md:grid-cols-2" delay={0.08}>
          {causas.fatores.map((fator) => (
            <FatorItem key={fator.codigo} fator={fator} />
          ))}
        </Reveal>
      </Container>
    </section>
  );
}

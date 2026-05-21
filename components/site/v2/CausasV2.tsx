"use client";

import { useId, useState } from "react";
import { Container } from "../Container";
import { SectionHeader } from "../SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { Photo } from "../Photo";
import { CicloCapilar } from "../CicloCapilar";
import { Plus } from "../icons";
import { StrandSection } from "../Glyphs";
import { cn } from "@/lib/utils";
import { causas } from "@/content/capilar";

type Fator = (typeof causas.fatores)[number];

/** Card de fator V2 — petróleo com hover champagne, código F# gigante */
function FatorCardV2({ fator, idx }: { fator: Fator; idx: number }) {
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
        "group relative cursor-pointer overflow-hidden rounded-[var(--radius-soft)] border border-paper/15 p-6 transition-all duration-300 sm:p-7",
        open ? "bg-champagne text-ink" : "bg-graphite text-paper hover:border-champagne/60",
      )}
    >
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute -right-3 -top-6 select-none font-display font-normal leading-none tracking-tighter opacity-[0.18] transition-all duration-300 group-hover:opacity-30",
          open ? "text-ink" : "text-champagne",
        )}
        style={{ fontSize: "var(--text-mega)" }}
      >
        {fator.codigo}
      </span>
      <div className="relative flex items-start justify-between gap-3">
        <div className="flex items-baseline gap-3">
          <span
            className={cn(
              "font-mono text-[length:var(--text-body-sm)] transition-colors",
              open ? "text-ink/70" : "text-champagne",
            )}
          >
            {fator.codigo}
          </span>
          <h3
            className="font-display font-normal tracking-[-0.01em]"
            style={{ fontSize: "var(--text-h3)" }}
          >
            {fator.titulo}
          </h3>
        </div>
        <span
          className={cn(
            "mt-1 shrink-0 transition-transform duration-300",
            open ? "rotate-45 text-ink" : "text-champagne",
          )}
          aria-hidden
        >
          <Plus />
        </span>
      </div>
      <p
        className={cn(
          "relative mt-3 max-w-[46ch]",
          open ? "text-ink/82" : "text-paper/72",
        )}
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
            className={cn(
              "mt-4 max-w-[48ch] border-t pt-4",
              open ? "border-ink/20 text-ink/72" : "border-paper/20 text-paper/65",
            )}
            style={{ fontSize: "var(--text-body-sm)" }}
          >
            {fator.detalhe}
          </p>
        </div>
      </div>
      <span
        className={cn(
          "relative mt-3 inline-block font-mono text-[length:var(--text-eyebrow)] uppercase tracking-[0.1em] transition-colors",
          open ? "text-ink/55" : "text-paper/55 group-hover:text-champagne",
        )}
      >
        {open ? "— Recolher" : "+ Aprofundar"}
      </span>
    </div>
  );
}

export function CausasV2() {
  return (
    <section
      id="causas"
      className="sci-grid-dark relative overflow-hidden bg-ink py-20 sm:py-28"
    >
      <StrandSection
        strokeWidth={1.1}
        className="pointer-events-none absolute -right-20 top-24 hidden h-[300px] w-[300px] text-paper opacity-[0.08] lg:block"
      />
      <Container className="relative">
        <SectionHeader numero={causas.numero} label={causas.label} dark />

        <div className="mt-12 grid gap-x-12 gap-y-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-7" delay={0.05}>
            <h2
              className="font-display font-normal leading-[1.02] tracking-[-0.02em] text-paper"
              style={{ fontSize: "var(--text-h2)" }}
            >
              {causas.titulo}
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={0.12}>
            <p className="text-paper/72" style={{ fontSize: "var(--text-lede)" }}>
              {causas.texto}
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-12" delay={0.1}>
          <Photo
            src="/images/clinica/macro-couro-cabeludo.jpg"
            alt="Macrofotografia do couro cabeludo mostrando a saída dos fios na escala folicular"
            dark
            marks
            sizes="(max-width: 768px) 100vw, 90vw"
            caption="Macro · couro cabeludo na escala folicular"
            className="aspect-[16/9] w-full sm:aspect-[2.4/1]"
          />
        </Reveal>

        {/* Grid de cards petróleo com código F# gigante */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {causas.fatores.map((fator, i) => (
            <Reveal key={fator.codigo} delay={i * 0.05}>
              <FatorCardV2 fator={fator} idx={i} />
            </Reveal>
          ))}
        </div>

        {/* Ciclo capilar em ilha clara — preserva styles do componente sem fundo escuro */}
        <Reveal className="mt-16 rounded-[var(--radius-soft)] border border-paper/15 bg-paper p-6 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.5)] sm:p-10" delay={0.1}>
          <CicloCapilar />
        </Reveal>
      </Container>
    </section>
  );
}

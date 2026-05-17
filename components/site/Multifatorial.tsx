import { Container } from "./Container";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { ConvergenceDiagram } from "./ConvergenceDiagram";
import { FollicleGlyph } from "./Glyphs";
import { MarginNote } from "./MarginNote";
import { multifatorial } from "@/content/capilar";

export function Multifatorial() {
  return (
    <section
      id="multifatorial"
      className="sci-grid relative overflow-hidden bg-paper-warm py-20 sm:py-28"
    >
      <FollicleGlyph
        strokeWidth={1.1}
        className="pointer-events-none absolute -bottom-16 right-[-3rem] hidden h-[420px] w-auto text-line-strong opacity-45 lg:block"
      />
      <MarginNote
        text="Folliculus pili — abordagem multifatorial"
        side="right"
        className="top-44"
      />
      <Container className="relative">
        <SectionHeader numero={multifatorial.numero} label={multifatorial.label} />

        <div className="mt-12 grid gap-x-12 gap-y-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-7" delay={0.05}>
            <h2
              className="font-display font-normal leading-[1.02] tracking-[-0.02em] text-ink"
              style={{ fontSize: "var(--text-h2)" }}
            >
              {multifatorial.titulo}
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={0.12}>
            <p className="text-ink-soft" style={{ fontSize: "var(--text-lede)" }}>
              {multifatorial.texto}
            </p>
          </Reveal>
        </div>

        {/* Diagrama de convergência multifatorial */}
        <Reveal className="mt-14" delay={0.1}>
          <figure className="rounded-[var(--radius-soft)] border border-line bg-paper p-6 sm:p-10">
            <div className="mx-auto max-w-[760px]">
              <ConvergenceDiagram />
            </div>
            <figcaption className="mt-6 border-t border-line pt-4 text-center">
              <span className="eyebrow text-ink-faint">
                Passe o cursor sobre cada fator
              </span>
            </figcaption>
          </figure>
        </Reveal>

        <div className="mt-6 grid gap-px overflow-hidden rounded-[var(--radius-soft)] border border-line bg-line sm:grid-cols-3">
          {multifatorial.destaques.map((d, i) => (
            <Reveal key={d.titulo} delay={i * 0.08}>
              <article className="flex h-full flex-col gap-3 bg-paper p-6 transition-colors duration-300 hover:bg-pine-wash sm:p-7">
                <span className="font-mono text-[length:var(--text-body-sm)] text-pine">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  className="font-display font-normal tracking-[-0.01em] text-ink"
                  style={{ fontSize: "var(--text-h3)" }}
                >
                  {d.titulo}
                </h3>
                <p
                  className="text-ink-soft"
                  style={{ fontSize: "var(--text-body)" }}
                >
                  {d.texto}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

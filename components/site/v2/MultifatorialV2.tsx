import { Container } from "../Container";
import { SectionHeader } from "../SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { ConvergenceDiagram } from "../ConvergenceDiagram";
import { FollicleGlyph } from "../Glyphs";
import { MarginNote } from "../MarginNote";
import { multifatorial } from "@/content/capilar";

/**
 * Multifatorial V2 — bloco dourado sólido vibrante (champagne #EFCF87).
 * Cria explosão de cor logo no início, contrastando com o hero petróleo.
 * Texto em petróleo escuro sobre fundo dourado: máxima legibilidade editorial.
 */
export function MultifatorialV2() {
  return (
    <section
      id="multifatorial"
      className="relative overflow-hidden bg-champagne py-20 sm:py-28"
    >
      <FollicleGlyph
        strokeWidth={1.1}
        className="pointer-events-none absolute -bottom-16 right-[-3rem] hidden h-[420px] w-auto text-ink opacity-[0.12] lg:block"
      />
      <MarginNote
        text="Folliculus pili — abordagem multifatorial"
        side="right"
        className="top-44"
      />
      <Container className="relative">
        <div className="flex items-center gap-4 sm:gap-6">
          <span
            className="font-display font-normal leading-none text-ink"
            style={{ fontSize: "var(--text-h3)" }}
          >
            {multifatorial.numero}
          </span>
          <span className="whitespace-nowrap font-mono text-[length:var(--text-eyebrow)] uppercase tracking-[0.18em] text-ink">
            {multifatorial.label}
          </span>
          <span className="h-px flex-1 bg-ink/30" />
        </div>

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
            <p
              className="text-ink/82"
              style={{ fontSize: "var(--text-lede)" }}
            >
              {multifatorial.texto}
            </p>
          </Reveal>
        </div>

        {/* Diagrama de convergência multifatorial dentro de um cartão paper */}
        <Reveal className="mt-14" delay={0.1}>
          <figure className="rounded-[var(--radius-soft)] border border-ink/15 bg-paper p-6 shadow-[0_24px_60px_-32px_rgba(20,64,80,0.4)] sm:p-10">
            <div className="mx-auto max-w-[760px]">
              <ConvergenceDiagram />
            </div>
          </figure>
        </Reveal>

        <div className="mt-6 grid gap-px overflow-hidden rounded-[var(--radius-soft)] bg-ink/12 sm:grid-cols-3">
          {multifatorial.destaques.map((d, i) => (
            <Reveal key={d.titulo} delay={i * 0.08}>
              <article className="flex h-full flex-col gap-3 bg-champagne p-6 transition-colors duration-300 hover:bg-champagne-soft sm:p-7">
                <span className="font-mono text-[length:var(--text-body-sm)] text-ink">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  className="font-display font-normal tracking-[-0.01em] text-ink"
                  style={{ fontSize: "var(--text-h3)" }}
                >
                  {d.titulo}
                </h3>
                <p
                  className="text-ink/82"
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

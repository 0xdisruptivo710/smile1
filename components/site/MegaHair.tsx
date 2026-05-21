import { Container } from "./Container";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { megaHair } from "@/content/capilar";

/**
 * Programa de Recuperação Capilar para Usuárias de Mega Hair — bloco
 * dedicado conforme PDF (pg 8-9). Posicionamento não preconceituoso,
 * impactos, cenários positivos, riscos, programa em 8 etapas e parceria.
 */
export function MegaHair() {
  return (
    <section
      id="mega-hair"
      className="relative overflow-hidden bg-paper py-20 sm:py-28"
    >
      <Container className="relative">
        <SectionHeader numero={megaHair.numero} label={megaHair.label} />

        <div className="mt-12 grid gap-x-12 gap-y-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-7" delay={0.05}>
            <h2
              className="font-display font-normal leading-[1.02] tracking-[-0.02em] text-ink"
              style={{ fontSize: "var(--text-h2)" }}
            >
              {megaHair.titulo}
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={0.12}>
            <p className="text-ink-soft" style={{ fontSize: "var(--text-lede)" }}>
              {megaHair.intro}
            </p>
          </Reveal>
        </div>

        {/* Impactos do mega hair */}
        <Reveal className="mt-14 rounded-[var(--radius-soft)] border border-line bg-paper-warm p-7 sm:p-9" delay={0.05}>
          <span className="eyebrow">{megaHair.impactoTitulo}</span>
          <ul className="mt-5 flex flex-wrap gap-2">
            {megaHair.impacto.map((item) => (
              <li
                key={item}
                className="rounded-full bg-champagne px-4 py-1.5 font-mono text-[length:var(--text-body-sm)] text-graphite"
              >
                {item}
              </li>
            ))}
          </ul>
          <p
            className="mt-6 text-ink-soft"
            style={{ fontSize: "var(--text-body)" }}
          >
            {megaHair.abordagem}
          </p>
        </Reveal>

        {/* Cenários positivos + riscos lado a lado */}
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <Reveal delay={0.05}>
            <article className="h-full rounded-[var(--radius-soft)] border-l-2 border-pine bg-paper-warm p-7 sm:p-9">
              <span className="eyebrow">{megaHair.cenariosPositivosTitulo}</span>
              <ul className="mt-5 border-t border-line">
                {megaHair.cenariosPositivos.map((item) => (
                  <li
                    key={item}
                    className="border-b border-line py-2.5 text-ink-soft"
                    style={{ fontSize: "var(--text-body)" }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal delay={0.12}>
            <article className="h-full rounded-[var(--radius-soft)] border-l-2 border-ink/40 bg-paper-warm p-7 sm:p-9">
              <span className="eyebrow">{megaHair.riscosTitulo}</span>
              <ul className="mt-5 border-t border-line">
                {megaHair.riscos.map((item) => (
                  <li
                    key={item}
                    className="border-b border-line py-2.5 text-ink-soft"
                    style={{ fontSize: "var(--text-body)" }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>

        {/* Programa — 8 etapas em grade */}
        <Reveal className="mt-12" delay={0.05}>
          <span className="eyebrow">{megaHair.programaTitulo}</span>
          <ol className="mt-6 grid gap-px overflow-hidden rounded-[var(--radius-soft)] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {megaHair.programa.map((item, i) => (
              <li
                key={item}
                className="flex flex-col gap-2 bg-paper p-5"
              >
                <span className="font-mono text-[length:var(--text-body-sm)] text-pine">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p
                  className="font-display font-normal leading-tight tracking-[-0.01em] text-ink"
                  style={{ fontSize: "var(--text-body)" }}
                >
                  {item}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>

        {/* Parceria + encerramento */}
        <div className="mt-12 grid gap-x-12 gap-y-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-7" delay={0.05}>
            <p
              className="text-ink-soft"
              style={{ fontSize: "var(--text-body)" }}
            >
              {megaHair.parceria}
            </p>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={0.12}>
            <p
              className="border-l-2 border-pine pl-5 font-display italic leading-[1.2] tracking-[-0.01em] text-ink"
              style={{ fontSize: "var(--text-h3)" }}
            >
              {megaHair.encerramento}
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

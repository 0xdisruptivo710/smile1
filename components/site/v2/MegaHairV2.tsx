import { Container } from "../Container";
import { SectionHeader } from "../SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { megaHair } from "@/content/capilar";

/**
 * MegaHair V2 — bloco navy escuro, programa em grade dourada,
 * encerramento em pull-quote champagne sólido.
 */
export function MegaHairV2() {
  return (
    <section
      id="mega-hair"
      className="sci-grid-dark relative overflow-hidden bg-ink py-20 sm:py-28"
    >
      <Container className="relative">
        <SectionHeader numero={megaHair.numero} label={megaHair.label} dark />

        <div className="mt-12 grid gap-x-12 gap-y-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-7" delay={0.05}>
            <h2
              className="font-display font-normal leading-[1.02] tracking-[-0.02em] text-paper"
              style={{ fontSize: "var(--text-h2)" }}
            >
              {megaHair.titulo}
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={0.12}>
            <p className="text-paper/78" style={{ fontSize: "var(--text-lede)" }}>
              {megaHair.intro}
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-14 rounded-[var(--radius-soft)] border border-champagne/40 bg-graphite p-7 sm:p-9" delay={0.05}>
          <span className="font-mono text-[length:var(--text-eyebrow)] uppercase tracking-[0.22em] text-champagne">
            {megaHair.impactoTitulo}
          </span>
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
            className="mt-6 text-paper/78"
            style={{ fontSize: "var(--text-body)" }}
          >
            {megaHair.abordagem}
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <Reveal delay={0.05}>
            <article className="h-full rounded-[var(--radius-soft)] border-l-2 border-champagne bg-graphite p-7 sm:p-9">
              <span className="font-mono text-[length:var(--text-eyebrow)] uppercase tracking-[0.22em] text-champagne">
                {megaHair.cenariosPositivosTitulo}
              </span>
              <ul className="mt-5 border-t border-paper/15">
                {megaHair.cenariosPositivos.map((item) => (
                  <li
                    key={item}
                    className="border-b border-paper/10 py-2.5 text-paper/78"
                    style={{ fontSize: "var(--text-body)" }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal delay={0.12}>
            <article className="h-full rounded-[var(--radius-soft)] border-l-2 border-paper/35 bg-graphite p-7 sm:p-9">
              <span className="font-mono text-[length:var(--text-eyebrow)] uppercase tracking-[0.22em] text-paper/70">
                {megaHair.riscosTitulo}
              </span>
              <ul className="mt-5 border-t border-paper/15">
                {megaHair.riscos.map((item) => (
                  <li
                    key={item}
                    className="border-b border-paper/10 py-2.5 text-paper/78"
                    style={{ fontSize: "var(--text-body)" }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>

        <Reveal className="mt-12" delay={0.05}>
          <span className="font-mono text-[length:var(--text-eyebrow)] uppercase tracking-[0.22em] text-champagne">
            {megaHair.programaTitulo}
          </span>
          <ol className="mt-6 grid gap-px overflow-hidden rounded-[var(--radius-soft)] border border-paper/15 bg-paper/12 sm:grid-cols-2 lg:grid-cols-4">
            {megaHair.programa.map((item, i) => (
              <li
                key={item}
                className="flex flex-col gap-2 bg-graphite p-5"
              >
                <span className="font-mono text-[length:var(--text-body-sm)] text-champagne">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p
                  className="font-display font-normal leading-tight tracking-[-0.01em] text-paper"
                  style={{ fontSize: "var(--text-body)" }}
                >
                  {item}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>

        <div className="mt-12 grid gap-x-12 gap-y-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-7" delay={0.05}>
            <p
              className="text-paper/78"
              style={{ fontSize: "var(--text-body)" }}
            >
              {megaHair.parceria}
            </p>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={0.12}>
            <p
              className="rounded-[var(--radius-soft)] bg-champagne p-5 font-display italic leading-[1.2] tracking-[-0.01em] text-graphite"
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

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

        {/* Diferencial do instituto — 10 fatores + abordagem + objetivo (PDF pg 3) */}
        <Reveal className="mt-16 border-t border-line-strong pt-10" delay={0.05}>
          <span className="eyebrow">O que diferencia o SS Hair Science Institute</span>
          <p
            className="mt-4 max-w-[72ch] text-ink-soft"
            style={{ fontSize: "var(--text-body)" }}
          >
            {multifatorial.diferencial.titulo}:
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {multifatorial.diferencial.fatores.map((f) => (
              <li
                key={f}
                className="rounded-full border border-pine/40 bg-paper px-4 py-1.5 font-mono text-[length:var(--text-body-sm)] text-ink"
              >
                {f}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-10 grid gap-x-12 gap-y-10 lg:grid-cols-2">
          <Reveal delay={0.05}>
            <span className="eyebrow">
              {multifatorial.diferencial.abordagemTitulo}
            </span>
            <ul className="mt-5 border-t border-line">
              {multifatorial.diferencial.abordagem.map((item) => (
                <li
                  key={item}
                  className="border-b border-line py-2.5 text-ink-soft"
                  style={{ fontSize: "var(--text-body)" }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.12}>
            <aside className="rounded-[var(--radius-soft)] border-l-2 border-pine bg-paper p-6 sm:p-7">
              <span className="eyebrow">
                {multifatorial.diferencial.objetivoTitulo}
              </span>
              <ul className="mt-5 grid gap-3">
                {multifatorial.diferencial.objetivo.map((item, i) => (
                  <li key={item} className="flex items-baseline gap-3">
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
              </ul>
            </aside>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
